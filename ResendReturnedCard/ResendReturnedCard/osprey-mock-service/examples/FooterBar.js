document.write( "<div class='container search-popup'>    <div class='search-block' id='search-block'>       <h5>請輸入關鍵字</h5>       <form id='search_form' name='search_form' action='https://bank.sinopac.com/search/SearchIndex.aspx' target='search_sinopac'>       <div class='search-area'>       <div class='icon-search'></div>       <div class='rowElem inline'>       <input type='text' id='keyword' name='keyword' placeholder='請輸入找尋關鍵字...'>       </div>       <div class='srowElem inline'>       <select id='CategoryPath' name='CategoryPath'>        <option selected='true' value='/'>全部</option>        <option value='/A01存款貸款'>存款貸款</option>        <option value='/C01外匯'>外匯</option>        <option value='/D01基金理財'>基金理財</option>        <option value='/B01信用卡'>信用卡</option>        <option value='/E01法人金融'>法人金融</option>        <option value='/F01數位金融'>數位金融</option>      </select>      <input type='hidden' id='SearchWebNum' name='SearchWebNum' value='S03'/>       </div>       <div class='btn-zone inline'>       <button class='search' onclick='search_subtim()'>搜尋</button>       </div>       </div>       </form>       <div class='hot-key'>       <span class='title'>熱門:&nbsp;</span>       <ul class='hk-list'>       <li></li>       </ul>       </div>       <div class='advsearch'><a href='https://bank.sinopac.com/search/Advance.aspx' target='search_sinopac'>進階搜尋</a></div>     </div>     <script type='text/javascript' src='/MMA8/bank/js/jquery-ui.min.js'></script>   </div>  <footer class='footer less'>    <div class='toggle-footlist'>      <div class='tglfl opened'>        <span class='icon icon-open'></span>        <span class='tag'>服務條款．關於永豐銀行．永豐金控集團．線上服務</span>        <span class='icon icon-open'></span>      </div>      <div class='tglfl closed'>        <span class='icon icon-close'></span>        <span class='tag'>關閉</span>        <span class='icon icon-close'></span>      </div>    </div>    <div class='container footer-list'>      <div class='foot_nav' id='footer-html'>      </div>    </div>    <div class='copyright'><p>&copy;版權所有永豐銀行   <a href='https://mma.sinopac.com/Bank/BankFrame.aspx?url=browser/upgrade.html' target='_blank'>建議瀏覽器設定IE11.0以上</a>/解析度1024*768           <a href='https://bank.sinopac.com/MMA8/bank/service/service-index.html' target='_blank'>客服中心</a><!-- 配合客服一點通上線，移除線上文字客服  --><!--   --></p></div>  </footer>  <script type='text/javascript' language='javascript'>  $( document ).ready(function() {    $.ajax({      type: 'POST',      url: '/Shared/ws_Adv.ashx',      jsonpCallback: 'jsonCallback2',      dataType: 'jsonp',      data: 'mmacat=mmaFooter&callback=jsonCallback2',      error: function(xhr) {      },      success: function(response) {        if (response != null) {          footer_menu = response;          var footerHtml = Mustache.to_html(footerTpl, response);          $('#footer-html').html(footerHtml);        }      }    });  });  </script>  " );
