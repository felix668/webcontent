var Login={};
Login.goURL = 'http://ui.ptlogin2.qq.com/cgi-bin/login?low_login_enable=1&low_login_hour=6000&style=8&appid=1600000062&daid=308&hln_css='+encodeURIComponent('http://ubook.qq.com/7/img/ptlogo.png')+'&s_url=';
Login.jsURL = 'http://imgcache.qq.com/ptlogin/ac/v9/js/ptloginout.js';
Login.cmap = null;
Login.GUEST_IDLE_TIME = 2*3600*1000;

//初始化
Login.init=function(){
	//动态加载jsURL
	var head = document.getElementsByTagName("head").item(0);
	var nScript = document.createElement("script");
	nScript.setAttribute("src", Login.jsURL);
	nScript.setAttribute("type","text/javascript");
	head.appendChild(nScript);
	//解析Cookie
	Login.cmap=cks();
};

//退出登录
Login.logout=function(){ 
	Login.doLogout(BaseIndex.goIndex);
};

//登录
Login.login=function(){ 
	Login.doLogin();
};

//切换帐号登录
Login.chgLogin=function() {
	Login.doLogoutAndLogin(); 
};

//是否已登录
Login.isLogin = function() {
	return nlg(lsg("isLogin"),'0')=='1'?true:false;
};

Login.doLogin=function() {
	if(!Login.isLogin()) {
		//转到登录地址，登录成功刷新当前页面
		var url=window.location.href;
		url=url.substring(0, url.length-window.location.hash.length);
		if(window.Read && window.Read.cid) { //阅读页要增加特殊处理
			url=url.replace('cid=', 'dic=');
			url+='&cid='+Read.cid;
		}
		go(Login.goURL+encodeURIComponent(url));
	}  
};

Login.doLogout=function(func) {
	if(window.pt_logout) { 
		pt_logout.logout(function(ret){
			if(ret<=0) return;
			//弱票据无法自动清除，只能自己来
			pt_logout.delCookie("lskey","qq.com");
			pt_logout.delCookie("luin","qq.com");
		    //清除本地存储
		    lss("isLogin",'0');
		    lss('icon.key','0');
			lss('icon.url','');		
			//转到首页
			delay(1000,func);
		}); 
	}
};

Login.doLogoutAndLogin=function() {
	//本函数是关键逻辑，因比较耗时，故要有等待提示
	if(window.ZBook) ZBook.openLoading2();
	Login.doLogout(function(){
		if(window.ZBook) ZBook.closeLoading2();
		Login.doLogin();
	});
};

Login.buildURL=function(aurl) {
	var url=aurl;
	
	//对于票据的统一处理
	url+=url.indexOf('?')!=-1?'&':'?';
	url+=Login.pck('k1','skey')+'&'+Login.pck('u1','uin')+'&'+Login.pck('k2','lskey')+'&'+Login.pck('u2','luin')+'&'+Login.pug(); //票据走url而非cookie，是为复用已经验证的跨越通讯方式，而不需做结构性调整
	
	//对于b_f的统一处理
	var b_f = glen(param('b_f'),6); // 获取连接中b_f栏目标识 ，传到后台
	if(!nl(b_f)) lss("b_f",b_f);  //如果链接中有b_f参数，则存入本地存储
	url+= '&b_f='+lsg("b_f"); //取b_f，附在链接后边
	
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
	
	//离线阅读进度的上报
	var mprp=lsg('read.mprp');
	if(!nl(mprp)) url+='&mprp='+mprp;
	
	return url;
};

Login.pck=function(pk,ck) {
	return pk+'='+encodeURIComponent(nlg(Login.cmap[ck],''));
};

Login.pug=function() {
	var ug=nlg(lsg('ug'),'');
	if(ug) {
		var ugt=cint(nlg(lsg('ugt'),0));
		if(time()-ugt>Login.GUEST_IDLE_TIME) ug=''; //游客身份空闲超时则失效，是为尽量中和后端下发之伪随机数带来的重复问题
	}
	return 'ug='+ug;
};

Login.buildJSON=function(restxt) {
	var tmp=null;
	if(!nl(restxt)) {
		tmp = obj(restxt);
		lss("isLogin",tmp.isLogin ? '1' : '0');
		lss('read.mprp',''); //离线阅读进度上报成功，则置空
		Login.checkReLoginAndStGuest(tmp);
	}
	return tmp;
};

Login.checkReLoginAndStGuest=function(tmp) {
	if(tmp.reLogin) {
		msg('检测到当前登录帐号存在异常，请您重新进行登录。');
		Login.chgLogin();
	} else if(tmp.stGuest) {
		lss('ug',tmp.stGuest);
		lss('ugt',time());
	} 
};

//异步请求，回调函数的入参是JSON对象。
Login.reqaObj = function (url,callback) {
	reqa(Login.buildURL(url), function(restxt){ 
		if(callback) callback(Login.buildJSON(restxt)); 
	});
};

//异步发送表单数据，回调函数的入参是JSON对象。
Login.postaForm = function (url,formvalue,callback) {
	posta(Login.buildURL(url),formvalue,function(restxt){
		if(callback) callback(Login.buildJSON(restxt));
	});
};

//检查登录状态并跳转到指定地址
Login.checkAndGo=function(url){ 
	Login.checkAndInvoke(function(){go(url);});
};

//检查登录态并执行指定逻辑：
//若未登录，则弹登录框，登录成功后，有loginFunc则单执行它，无则单执行invokeFunc；
//若已登录，则直接执行invokeFunc。
Login.checkAndInvoke=function(invokeFunc) {
	if(!Login.isLogin()) Login.login(); else invokeFunc();	
};




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

BaseIndex.day15 = 15*24*3600*1000;

BaseIndex.id=0;  //0综合、1男生、2女生、3出版、9包月
BaseIndex.func1=function(data){};
BaseIndex.func2=function(data){};

BaseIndex.begin=function() {
	Login.init();
	ZBook.init();
	ZBook.openLoading2();
	BaseIndex.saveIndexPage(BaseIndex.id); // 保存用户偏好
	BaseIndex.qdinit(); //顶部悬浮广告
	BaseIndex.proc1(BaseIndex.req(''));
	BaseIndex.proc2(BaseIndex.req('2'));
};

BaseIndex.qdinit=function() {
	if(BaseIndex.day15<time()-cint(nlg(lsg('qdclose'),'0')) && BaseIndex.day15<0){ //这行判断恒为false
		scls('qd1','pad60');
		dv('qd2');
	}
};

BaseIndex.qdclose=function() {
	lss('qdclose', time());
	scls('qd1','');
	dh('qd2');
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
			
			BaseIndex.changeLoginState();
			BaseIndex.showRecentRead(dataObj);
			
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
BaseIndex.recReadBF=['411001','411002','411003','411004','411001','411001','411001','411001','411001','411005'];
BaseIndex.selfBF=['401001','401002','401003','401004','401001','401001','401001','401001','401001','401005'];
BaseIndex.showRecentRead=function(dataObj) {
	var indexPage = cint(nlg(lsg('indexPage'),'0'));
	var gengxin = '';
	var redDot = '';
	if(!nl(dataObj.recentBook)){// 登录用户最近阅读
		dv('lastRead');
		if(dataObj.recentBook.updateTip=='1'){ gengxin='<em>更新</em>'; }  // 单本书是否更新
		if(dataObj.readHistUpdateCnt>0){ redDot='<i class="getnew"></i>';  } // 小红点
		ih('lastRead','<span>|<a href="bookshelf.html?b_f='+BaseIndex.selfBF[indexPage]+'">书架</a>'+redDot+'</span><a href="read.html?bid='+dataObj.recentBook.id
				+'&cid='+dataObj.recentBook.cid+'&b_f='+BaseIndex.recReadBF[indexPage]+'" class="l_a">'+gengxin+'继续：'+dataObj.recentBook.title+'</a>');
	}else if(!nl(dataObj.vhistory)){// 游客最近阅读
		dv('lastRead');
		var cid=Track.getVisitorDefaultChapterID(dataObj.vhistory[0].id);
		if(dataObj.vhistory[0].finished=="0" && cint(dataObj.vhistory[0].lastChapter)>cid){
			gengxin='<em>更新</em>';
        }
		ih('lastRead','<span>|<a href="browser.html?b_f='+BaseIndex.selfBF[indexPage]+'">书架</a></span><a href="read.html?bid='+dataObj.vhistory[0].id
				+'&cid='+cid+'&b_f='+BaseIndex.recReadBF[indexPage]+'" class="l_a">'+gengxin+'继续：'+dataObj.vhistory[0].title+'</a>');
	}
};

//首页统一页头、页脚
BaseIndex.changeLoginState=function(){
	if(!Login.isLogin()){
		ss('unLoginUser','display','inline-block');
		dh('loginUser');
		ah('footLogin','javascript:BaseIndex.onLogin();');
		ih('footLogin','登录');
	}else{
		dv('loginUser');
		dh('unLoginUser');
		ih('loginUser','<img src="'+lsg('icon.url')+'" width="38" height="38">');
		ah('footLogin','javascript:Login.logout();');
		ih('footLogin','退出登录');
	}
};

//各大首页登录、拉取用户偏好，并跳转
BaseIndex.onLogin=function(){
	Login.login();
};

//页头展现
BaseIndex.showHead=function() {
	vv('hdwrap');
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
	return server()+ '/7/'+BaseIndex.urls[BaseIndex.id]+'index'+num;
};

//保存用户偏好 0综合、1男、2女、3出版、9vip
BaseIndex.saveIndexPage=function(indexPage){ 
	lss('indexPage',indexPage); 
};

// 根据用户偏好去各首页
BaseIndex.BF=['010501','011501','012501','013501','','','','','','014501'];
BaseIndex.goIndex=function(){
	var bf = BaseIndex.BF[cint(nlg(lsg('indexPage'),'0'))];
	bf = nl(bf)?'':'?b_f='+bf;
	go(BaseIndex.page()+bf);
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
	BasePage.changeLoginState();
	BaseIndex.showFoot();
};

//二级、三级统一页脚 
BasePage.changeLoginState=function(){ 
	if(!Login.isLogin()){
		ah('footLogin','javascript:BasePage.onLogin();');
		ih('footLogin','登录');
	}else{
		ah('footLogin','javascript:Login.logout();');
		ih('footLogin','退出登录');
	}
};

// 二、三级页面登录、拉取用户偏好
BasePage.onLogin=function(){
	Login.login();
};