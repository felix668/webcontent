/*** ----------- 基于浏览器原生登录的登录模块 ------------------- */
var Login1={};

Login1.ginit=function() {
	if(lsg('isInvld')=='1') nativeApi.userInvalid('','',0,Login1.userInvalidCallback);
	else nativeApi.getUserInfo(Login1.userInfoCallback);
};

Login1.userInvalidCallback=function(o){
	lss('isInvld', '0');
	lss('ku', nlg(o.uin,'0'));
	lss('ks', nlg(o.skey,'_'));
	lss('sid', nlg(o.sid,'_'));
	if(window.init) init();
};

Login1.userInfoCallback=function(o){
	lss('ku', nlg(o.uin,'0'));
	lss('ks', nlg(o.skey,'_'));
	lss('sid', nlg(o.sid,'_'));
	if(window.init) init();
};

Login1.init=function() {
};

Login1.logout=function() {
};

//登录
Login1.login=function() {
	nativeApi.nativeLogin(Login1.loginCallback);
};

Login1.loginCallback=function(o) {
	lss('ku', nlg(o.uin,'0'));
	lss('ks', nlg(o.skey,'_'));
	lss('sid', nlg(o.sid,'_'));
	go(window.location.href);	
};

//是否登录
Login1.isLogin=function() {
	var l = lsg("isLogin");
	return (nl(l) ? '0' : l) == '1' ? true : false;
};

Login1.buildURL=function(aurl) {
	var url=aurl;
	
	//对于b_f的统一处理
	var b_f = glen(param('b_f'),6); // 获取连接中b_f栏目标识 ，传到后台
	if(!nl(b_f)) lss("b_f",b_f);  //如果链接中有b_f参数，则存入本地存储
	url+=url.indexOf('?')!=-1?'&':'?';
	url+='b_f='+lsg("b_f"); //取b_f，附在链接后边
	
	//对于g_f的统一处理
	var g_f = glen(param('g_f'),5); // 获取连接中g_f栏目标识 ，传到后台
	if(!nl(g_f)) {     //如果链接中有g_f参数，则直接存入本地存储，否则若本地存储中已经有值，取本地值，否则存入默认值21585
		lss("g_f",g_f);  
	} else {
		if(nl(lsg("g_f"))) {lss("g_f","21585");}
	}
	url+= '&g_f='+lsg("g_f");
	
	//对于xid的统一处理
	var xid=glen(param('xid'),8);
	if(!nl(xid)) url+='&xid='+xid; //一次性透传，不做本地存储
	
	//登录模块标识
	url+='&lll=1';
	
	//身份票据
	url+='&ku='+nlg(lsg('ku'),'0')+'&ks='+nlg(lsg('ks'),'_');
	return url;
};

Login1.buildJSON=function(restxt) {
	var tmp=null;
	if(!nl(restxt)) {
		tmp = obj(restxt);
		lss("isLogin",tmp.isLogin ? '1' : '0');
		lss("isInvld",tmp.isInvld?'1':'0');
	}
	return tmp;
};

//异步请求，回调函数的入参是JSON对象。
Login1.reqaObj = function (url,callback) {
	reqa(Login1.buildURL(url), function(restxt){ 
		if(callback) callback(Login1.buildJSON(restxt)); 
	});
};

//异步发送表单数据，回调函数的入参是JSON对象。
Login1.postaForm = function (url,formvalue,callback) {
	posta(Login1.buildURL(url),formvalue,function(restxt){
		if(callback) callback(Login1.buildJSON(restxt));
	});
};

//检查登录状态并跳转到指定地址
Login1.checkAndGo=function(url){ 
	Login1.checkAndInvoke(function(){go(url);});
};

//检查登录态并执行指定逻辑：
//若未登录，跳转到登录页面；
//若已登录，则直接执行invokeFunc。
Login1.checkAndInvoke=function(invokeFunc) {
	if(!Login1.isLogin()) Login1.login(); else invokeFunc();	
};



/*** ----------- 基于网页统一登录的登录模块 ------------------- */
var Login2={};
Login2.ginit=window.init;
Login2.jsURL = "http://imgcache.qq.com/ptlogin/ac/v9/js/ptloginout.js";
//low_login：0，强登录；1，强弱组合登录。
Login2.goURL = 'http://ui.ptlogin2.qq.com/cgi-bin/login?style=8&appid=780037706&s_url={0}&low_login=0&hln_css=http://ubook.qq.com/5/img/logo.png&hln_u_tips=请输入您的QQ号码';

//模块初始化函数
Login2.init=function(){
	var head = document.getElementsByTagName("head").item(0);
	var nScript = document.createElement("script");
	nScript.setAttribute("src", Login2.jsURL);
	nScript.setAttribute("type","text/javascript");
	head.appendChild(nScript);
};

//退出登录
Login2.logout=function(){ 
	var url = BaseIndex.page();
	
    if(pt_logout) {
    	pt_logout.logout(function() {
    	    //清除本地存储
    	    lss("isLogin",'0');
    	    lss('icon.key','0');
    		lss('icon.url','');
    		
    		//回首页
    		delay(1000, function(){go(url);});
    	}); 
    }
};

//登录
Login2.login=function(url) { 
	if(!Login2.isLogin()) {
		if(nl(url)) url=window.location.href;
		go(encodeURI(format(Login2.goURL, url)));
	}
};

//是否登录
Login2.isLogin = function() {
	var l = lsg("isLogin");
	return (nl(l) ? '0' : l) == '1' ? true : false;
};

Login2.buildURL=function(aurl) {
	var url=aurl;
	
	//对于b_f的统一处理
	var b_f = glen(param('b_f'),6); // 获取连接中b_f栏目标识 ，传到后台
	if(!nl(b_f)) lss("b_f",b_f);  //如果链接中有b_f参数，则存入本地存储
	url+=url.indexOf('?')!=-1?'&':'?';
	url+='b_f='+lsg("b_f"); //取b_f，附在链接后边
	
	//对于g_f的统一处理
	var g_f = glen(param('g_f'),5); // 获取连接中g_f栏目标识 ，传到后台
	if(!nl(g_f)) {     //如果链接中有g_f参数，则直接存入本地存储，否则若本地存储中已经有值，取本地值，否则存入默认值21585
		lss("g_f",g_f);  
	} else {
		if(nl(lsg("g_f"))) {lss("g_f","21585");}
	}
	url+= '&g_f='+lsg("g_f");
	
	//对于xid的统一处理
	var xid=glen(param('xid'),8);
	if(!nl(xid)) url+='&xid='+xid; //一次性透传，不做本地存储
	
	//登录模块标识
	url+='&lll=2';
	return url;
};

Login2.buildJSON=function(restxt) {
	var tmp=null;
	if(!nl(restxt)) {
		tmp = obj(restxt);
		lss("isLogin",tmp.isLogin ? '1' : '0');
	}
	return tmp;
};

//异步请求，回调函数的入参是JSON对象。
Login2.reqaObj = function (url,callback) {
	reqa2(Login2.buildURL(url), function(restxt){
		if(callback) callback(Login2.buildJSON(restxt)); 
	});
};

//异步发送表单数据，回调函数的入参是JSON对象。
Login2.postaForm = function (url,formvalue,callback) {
	posta2(Login2.buildURL(url),formvalue,function(restxt){
		if(callback) callback(Login2.buildJSON(restxt));
	});
};

//检查登录状态并跳转到指定地址
Login2.checkAndGo=function(url){ 
	Login2.checkAndInvoke(function(){go(url);});
};

//检查登录态并执行指定逻辑：
//若未登录，跳转到登录页面；
//若已登录，则直接执行invokeFunc。
Login2.checkAndInvoke=function(invokeFunc) {
	if(!Login2.isLogin()) Login2.login(); else invokeFunc();	
};



/*** ----------- 登录模块全局对象 ------------------- */
//本机开发环境（配置hosts域名dev.book.qq.com）走网页登录模块，以方便开发调试。
var Login=window.location.hostname=='dev.book.qq.com'?Login2:Login1; 
var ginit=Login.ginit;



/*** ----------- 记录用户(登录/游客)阅读进度 ------------------- */
var Track={};
Track.UserMaxSize=10; // 登录用户最大存储量
Track.VisitorMaxSize=6; // 游客最大存储量
Track.VisitorHomeSize=3; // 游客历史在首页的最大展现数量
Track.User='zbook.usertrack4';// 登录数据结构：[{"bid1":"cid1_scrollY1"}, ... ]
Track.Visitor='zbook.visitortrack4';// 游客数据结构：[{"bid1":"cid1_scrollY1"}, ... ]
// 保存用户(登录/游客)进度
Track.saveTrackInfo=function(bid,cid,scrolly){ 
	if(Login.isLogin()){
		Track.saveUserTrack(bid,cid,scrolly);
	}else{
		Track.saveVisitorTrack(bid, cid,scrolly);
	}
};
// 获取用户(登录/游客)章节中进度
Track.getTrackInfo=function(bid, cid){ 
	if(Login.isLogin()){
		return Track.getUserTrack(bid,cid);
	}else{
		return Track.getVisitorTrack(bid,cid);
	}
};
Track.clearVisitorHistory=function(){
	lsr(Track.Visitor);
};
//获取首页展现的游客历史
Track.getVisitorHistoryHome=function() {
	return Track.getVisitorHistory(Track.VisitorHomeSize);
};
//获取全部的游客历史
Track.getVisitorHistoryAll=function() {
	return Track.getVisitorHistory(Track.VisitorMaxSize);
};
// 私有方法（仅本模块使用）
// 查询-游客-阅读历史  
// 返回:result='bid1,bid2,bid3,'
Track.getVisitorHistory=function(maxSize) {
	var result='';
	var trackArr=obj(nlg(lsg(Track.Visitor),'[]'));
	var minVal=trackArr.length<=maxSize?trackArr.length:maxSize;
	for(var i=0;i<minVal;i++){
		for(var prop in trackArr[i]) result+=prop+'%2C';
	}
	return result;
};
Track.getVisitorHistoryCount=function() {
	var trackArr=obj(nlg(lsg(Track.Visitor),'[]'));
	return trackArr.length;
};
//查询游客阅读章节id,返回 chapterId
Track.getVisitorDefaultChapterID=function(bid) {  
	var cid = Track.getVisitorChapterID(bid);
	if(cid<0){
		return 1;
	}
	return cid;
};
// 查询游客阅读章节id,返回 chapterId
Track.getVisitorChapterID=function(bid) {  
	var trackArr=obj(nlg(lsg(Track.Visitor),'[]'));
	for(var i=0;i<trackArr.length;i++){
		var cid_sy = trackArr[i][bid];
		if(!nl(cid_sy)){
			//数据结构：[{"bid1":"cid1_scrollY1"}, ... ]
			var arr = cid_sy.split('_');
			if(arr.length==2){
				return arr[0];
			}
		}
	}
	return -1;
};
Track.saveUserTrack=function(bid,cid,scrolly) { // 保存登录用户阅读进度.
	var index=-1;
	var trackArr=obj(nlg(lsg(Track.User),'[]'));
	for(var i=0;i<trackArr.length;i++){
		if(!nl(trackArr[i][bid])){
			index=i;
			break;
		}
	}
	if(index!=-1) {
		trackArr.splice(index,1);
	}else if(trackArr.length==Track.UserMaxSize) {
		trackArr.pop();
	}
	var tra1={};
	tra1[bid]=cid+'_'+scrolly;
	trackArr.unshift(tra1);
	lss(Track.User,json(trackArr));
};
Track.saveVisitorTrack=function(bid,cid,scrolly) { // 保存游客用户阅读进度
	var index=-1;
	var trackArr=obj(nlg(lsg(Track.Visitor),'[]'));
	for(var i=0;i<trackArr.length;i++){
		if(!nl(trackArr[i][bid])){
			index=i;
			break;
		}
	}
	if(index!=-1) {
		trackArr.splice(index,1);
	}else if(trackArr.length==Track.VisitorMaxSize) {
		trackArr.pop();
	}
	var tra1={};
	tra1[bid]=cid+'_'+scrolly;
	trackArr.unshift(tra1);
	lss(Track.Visitor,json(trackArr));
};
Track.getUserTrack=function(bid,cid) {  // 查询登录用户阅读进度,返回 scrolly
	var trackArr=obj(nlg(lsg(Track.User),'[]'));
	for(var i=0;i<trackArr.length;i++){
		var cid_sy = trackArr[i][bid];
		if(!nl(cid_sy)){
			var arr = cid_sy.split('_');
			if(arr.length==2 && arr[0]==cid){
				return arr[1];
			}
		}
	}
	return -1;
};
Track.getVisitorTrack=function(bid,cid) {  // 查询游客阅读进度,返回 scrolly
	var trackArr=obj(nlg(lsg(Track.Visitor),'[]'));
	for(var i=0;i<trackArr.length;i++){
		var cid_sy = trackArr[i][bid];
		if(!nl(cid_sy)){
			//数据结构：[{"bid1":"cid1_scrollY1"}, ... ]
			var arr = cid_sy.split('_');
			if(arr.length==2 && arr[0]==cid){
				return arr[1];
			}
		}
	}
	return -1;
};



/** ---------------------- 五大首页架构统一抽象 ------------------------ */
var BaseIndex={};

BaseIndex.id=0;  //0综合、1男生、2女生、3出版、9包月
BaseIndex.func1=function(data){};
BaseIndex.func2=function(data){};

BaseIndex.begin=function() {
	Login.init();
	ZBook.init();
	ZBook.openLoading2();
	BaseIndex.saveIndexPage(BaseIndex.id); // 保存用户偏好
	BaseIndex.proc1(BaseIndex.req(''));
	BaseIndex.proc2(BaseIndex.req('2'));
};

BaseIndex.proc1=function(url) {
	var append = '';
	if(!Login.isLogin()){ // 未登录用户，加上本地阅读的书籍bid
		var bids = Track.getVisitorHistoryHome();
		if(!nl(bids)){
			append ='?vbid='+bids;
		}
	}else{
		append ='?ico='+nlg(lsg('icon.key'),'0');
	}
	Login.reqaObj(url+append,function(dataObj){
		if(nl(dataObj)) {
			msg("咦，网络好像不太给力哦");
			ZBook.closeLoading2();
			return;
		}else{
			if(!nl(dataObj.iconkey)){
				lss('icon.key',dataObj.iconkey);
				lss('icon.url',dataObj.iconurl);
			}
			
			//BaseIndex.changeLoginState();
			//BaseIndex.showRecentRead(dataObj);
			
			var str=index(dataObj);
			ih('index',str);
			BaseIndex.showHead();
			ZBook.closeLoading2(); 
			
			BaseIndex.setAdvWrap();
			BaseIndex.func1(dataObj);
		}
	});
};

BaseIndex.proc2=function(url) {
	Login.reqaObj(url,function(dataObj){
		if(nl(dataObj)) {
			return;
		}else{
			var str=index2(dataObj);
			ih('index2',str);
			
			BaseIndex.func2(dataObj);
			BaseIndex.showFoot();
		}
	});
};

//最近阅读记录
//BaseIndex.recReadBF=['411001','411002','411003','411004','411001','411001','411001','411001','411001','411005'];
//BaseIndex.selfBF=['401001','401002','401003','401004','401001','401001','401001','401001','401001','401005'];
BaseIndex.showRecentRead=function(dataObj) {
//	var indexPage = cint(nlg(lsg('indexPage'),'0'));
//	var gengxin = '';
//	var redDot = '';
//	if(!nl(dataObj.recentBook)){// 登录用户最近阅读
//		dv('lastRead');
//		if(dataObj.recentBook.updateTip=='1'){ gengxin='<em>更新</em>'; }  // 单本书是否更新
//		if(dataObj.readHistUpdateCnt>0){ redDot='<i class="getnew"></i>';  } // 小红点
//		ih('lastRead','<span>|<a href="bookshelf.html?b_f='+BaseIndex.selfBF[indexPage]+'">书架</a>'+redDot+'</span><a href="read.html?bid='+dataObj.recentBook.id
//				+'&cid='+dataObj.recentBook.cid+'&b_f='+BaseIndex.recReadBF[indexPage]+'" class="l_a">'+gengxin+'继续：'+dataObj.recentBook.title+'</a>');
//	}else if(!nl(dataObj.vhistory)){// 游客最近阅读
//		dv('lastRead');
//		var cid=Track.getVisitorDefaultChapterID(dataObj.vhistory[0].id);
//		if(dataObj.vhistory[0].finished=="0" && cint(dataObj.vhistory[0].lastChapter)>cid){
//			gengxin='<em>更新</em>';
//        }
//		ih('lastRead','<span>|<a href="browser.html?b_f='+BaseIndex.selfBF[indexPage]+'">书架</a></span><a href="read.html?bid='+dataObj.vhistory[0].id
//				+'&cid='+cid+'&b_f='+BaseIndex.recReadBF[indexPage]+'" class="l_a">'+gengxin+'继续：'+dataObj.vhistory[0].title+'</a>');
//	}
};

//首页统一页头、页脚
BaseIndex.changeLoginState=function(){
	if(!Login.isLogin()){
		ss('unLoginUser','display','inline-block');
		dh('loginUser');
//		ah('footLogin','javascript:BaseIndex.onLogin();');
//		ih('footLogin','登录');
	}else{
		dv('loginUser');
		dh('unLoginUser');
		ih('loginUser','<img src="'+lsg('icon.url')+'" width="38" height="38">');
//		ah('footLogin','javascript:Login.logout();');
//		ih('footLogin','退出登录');
	}
};

//各大首页登录
BaseIndex.onLogin=function(){
	Login.login();
};

//页头展现
BaseIndex.showHead=function() {
//	vv('hdwrap');
};

//页脚展现
BaseIndex.showFoot=function() {
	delay(5,function(){
		vv('ftwrap');
	});
};

//前台页面地址、后台请求地址
BaseIndex.urls=['','m','f','p','','','','','','v'];
BaseIndex.page=function() {
	return BaseIndex.urls[cint(nlg(lsg('indexPage'),'0'))]+'index.html';
};
BaseIndex.req=function(num) {
	return server()+ '/qb/'+BaseIndex.urls[BaseIndex.id]+'index'+num;
};

//保存用户偏好 0综合、1男、2女、3出版、9vip
BaseIndex.saveIndexPage=function(indexPage){ 
//	lss('indexPage',indexPage); 
};

// 根据用户偏好去各首页
//BaseIndex.BF=['010501','011501','012501','013501','','','','','','014501'];
BaseIndex.goIndex=function(){
//	var bf = BaseIndex.BF[cint(nlg(lsg('indexPage'),'0'))];
//	bf = nl(bf)?'':'?b_f='+bf;
//	go(BaseIndex.page()+bf);
	go('index.html');
};

// 计算头部广告图高度
BaseIndex.setAdvWrap=function() {
	if(id('ggImageSwitch')){
		var wrapw=pw()>360?360:pw();
		var wraph=cint(wrapw*106/320); //源图320*106
		sis('ggImageSwitch', 'height', wraph);
	}
};


/** ---------------------- 二三级页面（不含阅读页）通用函数抽象 ------------------------ */
var BasePage={};

BasePage.init=function() {
	Login.init();
	ZBook.init();
};

BasePage.foot=function() {
	//BasePage.changeLoginState();
	BaseIndex.showFoot();
};

//二级、三级统一页脚 
BasePage.changeLoginState=function(){ 
//	if(!Login.isLogin()){
//		ah('footLogin','javascript:BasePage.onLogin();');
//		ih('footLogin','登录');
//	}else{
//		ah('footLogin','javascript:Login.logout();');
//		ih('footLogin','退出登录');
//	}
};

// 二、三级页面登录
BasePage.onLogin=function(){
	//Login.login();
};