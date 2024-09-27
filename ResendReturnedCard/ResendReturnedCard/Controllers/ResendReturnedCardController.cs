using Newtonsoft.Json;
using ResendReturnedCard.Models;
using ResendReturnedCard.Services;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using System.Web;
using System.Web.Caching;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using static System.Net.WebRequestMethods;

namespace ResendReturnedCard.Controllers
{
    public class ResendReturnedCardController : Controller
    {
        private readonly WebApiInvoker _webApiInvoker;

        public ResendReturnedCardController()
        {
            var httpClient = new HttpClient();
            _webApiInvoker = new WebApiInvoker(httpClient);
        }

        //GET:step1

        public async Task<ActionResult> Step1()
        {
            var cardId = "A900000794";
            var requestModel = new RequestModel
            {
                Content = new ContentModel
                {
                    ID = cardId
                }
            };
            // 調用API獲取資料，回應資料型別 : BaseResponse為泛型類別，包含ResendReturnedCardGetDataResultModel型別資料。("API的URL" , "發送給API的請求資料")
            var response = await _webApiInvoker.PostAsync<BaseResponse<ResendReturnedCardGetDataResultModel>>("http://localhost:3000/api/Apply/QueryReturnedCardInfo", requestModel);

            if (response.ResultCode == "00" && response.Result.Items != null && response.Result.Items.Any())
            {
                // 將資料傳遞視圖
                return View(response.Result);
            }
            else
            {
                // 錯誤或沒有取到資料
                ViewBag.ErrorMessage = string.IsNullOrEmpty(response.ResultMessage) ? "無法獲取卡片資料" : response.ResultMessage;
                return View("Error"); // 跳轉到一個顯示錯誤
            }
        }
        //POST
        [HttpPost]
        public ActionResult Step1(ResendReturnedCardGetDataResultModel model)
        {
            if (ModelState.IsValid && model.addres != null)
            {
            Session["addres"] = model.addres;
            Session["card"] = model.card;
            return RedirectToAction("Step2");
            }
            return RedirectToAction("Step1");
        }


        //GET:step2
        public async Task<ActionResult> Step2()
        {
            var selectedCard = Session["card"] as IEnumerable<string>;
            if (selectedCard == null || !selectedCard.Any()) 
            {
                return RedirectToAction("Step1");
            }
            ViewBag.addres = Session["addres"];
            var cardDataResponse = await GetCardDataFromApi("A900000794");
            var cardData = cardDataResponse.Result.Items;
            var selectedCardData = cardData.Where(card => selectedCard.Contains(card.CardNo)).ToList();
            TempData["addres"] = ViewBag.addres;
            TempData["StepData"] = selectedCardData;
            return View(selectedCardData);
        }
       
        [HttpPost]
        public async Task<ActionResult> Step2(ResendReturnedCardApplyRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var RequestApplyModel = new RequestApplyModel
            {
                ResendReturnedCardApplyRequest = new ResendReturnedCardApplyRequestModel {
                    ID = "A900000794",
                    Cards = model.Cards,
                    AddrType = model.AddrType,
                    OtherZip = model.OtherZip,
                    OtherAddr = model.OtherAddr
                },
                Header = new HeaderModel
                {
                    ApplicationName = "EWEB2"
                }
            };
            ResponseApplyModel responseApplyModel = await _webApiInvoker.PostAsync<ResponseApplyModel>("http://localhost:3000/api/Apply/ResendReturnedCard", RequestApplyModel);
            if(responseApplyModel.ResultCode == "00")
            {
                System.Diagnostics.Debug.WriteLine("1");
                return RedirectToAction("Step3");
                
            }
            else
            {
                System.Diagnostics.Debug.WriteLine("2");
                TempData["failMsg"] = "申請失敗";
                return RedirectToAction("Step3");
            }
         }

        //GET:step3
        public ActionResult Step3()
        {
            var stepData = TempData["stepData"] as List<sp_CampaignCallList_Resend_Request_Item>;
            ViewBag.addres = TempData["addres"];
            if (stepData == null || !stepData.Any())
            {
                return RedirectToAction("step2");
            }
            if (TempData["failMsg"] != null)
            {
                ViewBag.failMsg = TempData["failMsg"];
            }
            return View(stepData);
        }
       

        private async Task<BaseResponse<ResendReturnedCardGetDataResultModel>> GetCardDataFromApi(string id)
        {
            var apiUrl = "http://localhost:3000/api/Apply/QueryReturnedCardInfo";
            var resquestBody = new RequestModel
            {
                Content = new ContentModel { ID = id }
            };
            var responses = await _webApiInvoker.PostAsync<BaseResponse<ResendReturnedCardGetDataResultModel>>(apiUrl, resquestBody);
            return responses;
        }
    }
}

    
