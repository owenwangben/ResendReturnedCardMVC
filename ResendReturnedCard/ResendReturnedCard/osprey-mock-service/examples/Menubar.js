document.write( "<link href='/MMA8/mma/css/reset.css' rel='stylesheet' type='text/css'><link href='/MMA8/mma/css/jquery-ui.css' rel='stylesheet' type='text/css'><link href='/MMA8/mma/css/site.css?20183528093515520' rel='stylesheet' type='text/css'><link href='https://mma.sinopac.com/App_Themes/mmaCommon.css' rel='stylesheet' type='text/css'><script src='/MMA8/mma/js/jquery-latest.min.securejs' type='text/javascript'></script><script src='/MMA8/mma/js/jquery-ui.js' type='text/javascript'></script><script src='/MMA8/mma/js/fancyfields-1.2.min.js' type='text/javascript'></script><script src='/MMA8/mma/js/jquery.tinyscrollbar.min.js' type='text/javascript'></script><script src='https://mma.sinopac.com/MMA7txt/JavaScript/jquery.cookie.js' language='javascript' type='text/javascript'></script><script src='https://mma.sinopac.com/MMA7txt/mobile/News/javascript/mustache.js' type='text/javascript' language='javascript' ></script><!--[if lt IE 9]><script src='/MMA8/mma/js/html5shiv.min.js' type='text/javascript'></script><script src='/MMA8/mma/js/html5shiv-printshiv.min.js' type='text/javascript'></script><![endif]--><script id='menuTpl' type='text/template'>  <div class='container'>    <ul class='nav-lv1 dynlast'>      {{#items}}      <li data-mid='{{description}}' class='{{description}}'>        {{{extra_html}}}<a title='{{title}}'>{{title}}</a>        <div class='watermark'></div>      </li>      {{/items}}    </ul>  </div></script><script id='subTpl' type='text/template'>  {{#items}}  <div id='{{description}}' class='container'>    <div class='left-func'>	  <h5 class='settingtitle'>		<span>常用{{title}}功能</span>		<a href='javascript: void(0);' id='{{description}}All' class='leftline showall'>全部功能</a>	  </h5>      <ul>        {{#top_items}}        <li><a href='{{url}}' title='{{title}}' onclick=\"redirectto('{{url}}','{{New_Window}}'); return false;\"><div class='mico ico-{{groupname}}-{{group}}'></div><p>{{title}}</p></a></li>        {{/top_items}}      </ul>      <div class='msg-announce'>{{{announce}}}</div>    </div>    <div class='right-func'>      <h5>全部{{title}}功能</h5>      <ul>        {{#items1}}        <li><a class='blue-link' href='{{url}}' title='{{title}}' {{{target}}}>{{title}}</a></li>        {{/items1}}      </ul>    </div>	<div class='full-func'>		<h5 class='settingtitle'>			<a href='javascript: void(0);' class='shownormal'>常用{{title}}功能</a>			<span class='leftline'>全部功能</span>		</h5>		<ul class='menu'>			{{#items1}}			<li>				<dl>					<dt><a href='{{url}}' title='{{title}}' {{target}} style='color:black;'>{{title}}</a></dt>					{{#items2}}					<dd><li><a href='{{url}}' title='{{title}}' {{target}}>{{title}}</a></li></dd>					{{/items2}} 				</dl>				</li>			{{/items1}}			</ul>		<div class='msg-announce'>{{{announce}}}</div>	</div>  </div>  {{/items}}</script><script id='rootTpl' type='text/template'>  <div class='left-func'>    <h5>常用功能</h5>    <ul>      {{#top_items}}      <li><a href='{{url}}' title='{{title}}' onclick=\"redirectto('{{url}}','{{New_Window}}'); return false;\"><div class='mico ico-{{groupname}}-{{global}}'></div><p>{{title}}</p></a></li>      {{/top_items}}    </ul>    <div class='msg-announce'>{{{announce}}}</div>  </div>  <div class='right-func'>    <h5>我的帳戶</h5>    <ul>      {{#items1}}      <li><a class='blue-link' href='{{url}}' title='{{title}}' {{{target}}}>{{title}}</a></li>      {{/items1}}    </ul>  </div></script><script id='leftTpl' type='text/template'>  <h3 class='title'><span class='red'>{{title}}</span>總覽</h3>  <ul class='sbnav-lv1 dynlast-bt'>    {{#items1}}    <li class='' index='{{index}}' >      <a title='{{title}}' {{{tier2}}} >{{title}}</a>      <ul class='sbnav-lv2'>        {{#items2}}        <li><a href='{{url}}' title='{{title}}'>{{title}}</a></li>        {{/items2}}      </ul>    </li>    {{/items1}}  </ul>  <div class='shortcut'>    <h4 class='title'>快速連結</h4>    <ul class='sc-nav'>      {{#shortcuts}}      <li>        <a href='{{url}}' title='{{title}}' {{target}}>{{title}}</a>      </li>      {{/shortcuts}}    </ul>  </div></script><script id='rightTpl' type='text/template'>  <h2>{{{header}}}</h2>  <div class='subcat'>    <ul class='col_ul blue-link-inner'>      {{#items2}}      <li><a href='{{url}}' title='{{title}}' {{target}}>{{title}}</a></li>      {{/items2}}    </ul>  <div class='clearfix'></div>					  </div></script><script id='adTpl_2' type='text/template'>  <div class='col1'>    <h3 class='mod-title'>{{{title}}}</h3>    <div class='mod-pic'><img src='{{img}}'></div>    <div class='mod-desc'><p>{{description}}</p></div>    <hr>    <div class='mod-link'>      {{#items}}      <ul class='col_ul col_2_ul'>        {{#subitems}}        <li><a href='{{url}}' title='{{title}}' {{target}}>{{title}}</a></li>        {{/subitems}}      </ul>      {{/items}}    </div>  </div></script><script id='adTpl_1' type='text/template'>  <div class='col1'>    <h3 class='mod-title'>{{{title}}}</h3>    <div class='mod-pic'><img src='{{img}}'></div>    <div class='mod-desc'><p>{{description}}</p></div>    <hr>    <div class='mod-link'>      {{#items}}      <ul class='col_ul'>        {{#subitems}}        <li><a href='{{url}}' title='{{title}}' {{target}}>{{title}}</a></li>        {{/subitems}}      </ul>      {{/items}}    </div>  </div></script><script id='footerTpl' type='text/template'><ul class='nav'>  {{#data}}  <li>    <h2>{{title}}</h2>    <ul class='lv2'>      {{#items}}      <li>{{{extra_html}}} <a href='{{url}}' title='{{title}}' {{target}}>{{title}}</a></li>      {{/items}}    </ul>  </li>  {{/data}}</ul></script><script id='foreignRateTpl' type='text/template'><div class='col1'>  <h3 class='mod-title'>    {{{title}}}<span class='more'><a href='javascript: void(0);' onclick='window.open(\"{{{url}}}\", \"RateCenter\", \"\");' title='更多'>更多</a></span>  </h3>  <table class='listing rate'>    {{#header}}    <tr>      <th>{{COL1}}</th>      <th>{{COL2}}</th>      <th>{{COL3}}</th>    </tr>    {{/header}}    {{#data}}    <tr>      <td>{{CURR}}</td>      <td>{{RATE1}}</td>      <td>{{RATE2}}</td>    </tr>    {{/data}}  </table></div></script>      <div class='wrapper_1'></div>      <iframe src='/MMA8/mma/blank.html' class='menu_iframe' frameborder='0'></iframe>      <div id='slide-menu-wrapper' class='slide-menu-wrapper'>      </div>            <header>        <div class='container'>          <div class='left-pane'>            <div class='logo'>              <a href='https://mma.sinopac.com/MemberPortal/Member/NextWebLogin.aspx' title='永豐銀行首頁'>                <img src='/MMA8/mma/images/sinopac_logo.jpg' alt='永豐銀行'/>              </a>            </div>            <h1 class='header-title'>MMA金融交易網</h1>          </div>          <div class='right-pane'>            <div class='main-func'>              <ul class='dynlast'>                <li><a style='display:none;' class='icon icon-login' id='user-login' href='https://mma.sinopac.com/MemberPortal/Member/MMALogin.aspx' title='會員登入'>會員登入</a></li>                <li><a style='display:none;' class='icon icon-login logout' id='user-logout' href='https://mma.sinopac.com/MemberPortal/Member/MMALogout.aspx' title='會員登出'>會員登出</a></li>                <!-- <li><a class='icon icon-service' href='https://bank.sinopac.com/MMA8/bank/service/service-index.html' title='客服中心' target='_blank'>客服中心</a></li> -->                <li><a class='icon icon-branch' href='https://mma.sinopac.com/MMA7txt/CustomerService/BranchService/mma_branch.html' title='營業據點' target='_blank'>營業據點</a></li>                <li class='search-wrap' data-mid='search-wrap'>                  <a class='icon icon-search' id='icon-search' href='#' title='搜尋'>搜尋</a>                </li>				<li class='livechat-wrap' data-mid='livechat-wrap'><a class='icon icon-livechat' href='#' title='客服一點通' target='_blank'>客服一點通</a></li>              </ul>            </div>          </div>        <div class='clearboth'></div>        </div>        <nav id='main-menu' class='main-menu'>        </nav>      </header>      <script type='text/javascript' language='javascript'>var mma_path='https://mma.sinopac.com';search_web_url = 'https://bank.sinopac.com';var external_site = '&ext=1';var isLoggedIn = false;if (isLoggedIn) {  document.getElementById('user-login').style.display = 'none';  document.getElementById('user-logout').style.display = 'block';}else {  document.getElementById('user-login').style.display = 'block';  document.getElementById('user-logout').style.display = 'none';}function search_subtim() {  $('#search_form').submit();}</script><script src='/MMA8/mma/js/site.securejs?20183528093515520' type='text/javascript' ></script><script language='javascript' type='text/javascript'>var extTimerRun=false;var timeoutReminder=540000;var reminderMessage='親愛的客戶您好：\\n您登入網站未執行任何瀏覽動作已超過系統時限，為保障您的網站使用安全，本系統將於 {0} 秒後為您登出網站，若您欲繼續使用，請點選「繼續瀏覽」按鈕，或直接點選「登出網站」按鈕，登出本系統。';var expirationMessage='由於您未執行任何瀏覽動作已逾時 10 分鐘，系統已自動為您登出網站，以確保安全。';var timeout=60;var mmaServer='https://mma.sinopac.com';var count=timeout;var startTimer;var stopTimer;var downTimer;function restartExtTimer() {if (extTimerRun) {if ( startTimer != null ){clearTimeout( startTimer );clearTimeout( stopTimer );}startTimer = setTimeout(ShowPopup2, timeoutReminder);}  }</script>" );
