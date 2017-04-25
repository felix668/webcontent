var Login={};
Login.goURL = 'http://ui.ptlogin2.qq.com/cgi-bin/login?pt_no_onekey=1&low_login_enable=1&low_login_hour=6000&style=8&appid=1600000062&daid=308&hln_css='+encodeURIComponent('http://pin.qq.com/wx/img/ptlogo.png')+'&s_url=';
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
	Login.doLogout(BaseIndex.login);
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

Login.doLogin=function(url) {
	if(!Login.isLogin()) {
		if(!!!url){
			//转到登录地址，登录成功刷新当前页面
			url=window.location.href;
			url=url.substring(0, url.length-window.location.hash.length);
			if(window.Read && window.Read.cid) { //阅读页要增加特殊处理
				url=url.replace('cid=', 'dic=');
				url+='&cid='+Read.cid;
			}
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
			delay(200,func);
		}); 
	}
};

Login.doLogoutAndLogin=function() {
	//本函数是关键逻辑，因比较耗时，故要有等待提示
//	if(window.ZBook) ZBook.openLoading2();
	Login.doLogout(function(){
//		if(window.ZBook) ZBook.closeLoading2();
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
	var g_f = glen(param('g_f'),8); // 获取连接中g_f栏目标识 ，传到后台
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




/** ---------------------- 五大首页架构统一抽象 ------------------------ */
var BaseIndex={};

BaseIndex.day15 = 15*24*3600*1000;

BaseIndex.id=0;  //0综合、1男生、2女生、3出版、9包月
BaseIndex.func1=function(data){};
BaseIndex.func2=function(data){};

BaseIndex.login = function(){
	go("login.html");
}
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
	if(BaseIndex.day15<0 && BaseIndex.day15<time()-cint(nlg(lsg('qdclose'),'0'))){ //这行判断恒为false
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
	var rh=RH.listLatest();
	var append = '?bid='+rh.bid+'&time='+rh.time;
	if(Login.isLogin()) append+='&ico='+nlg(lsg('icon.key'),'0');
	
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
			BaseIndex.showRecentRead(dataObj,rh);
			
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
BaseIndex.showRecentRead=function(dataObj,rh) {
	var indexPage = cint(nlg(lsg('indexPage'),'0'));
	if(dataObj.ltbook){
		ih('lastRead','<span>|<a href="history.html?b_f='+BaseIndex.selfBF[indexPage]+'">书架</a><i id="redot" class="getnew" style="display:none;"></i></span><a href="read.html?bid='+dataObj.ltbook.id
				+'&cid='+rh.cid+'&b_f='+BaseIndex.recReadBF[indexPage]+'" class="l_a">'+(dataObj.ltbook.update?'<em>更新</em>':'')+'继续：'+dataObj.ltbook.title+'</a>');
		dv('lastRead');
		
		delay(600,function(){
			var rha=RH.listAll();
			Login.reqaObj(format('{0}/8/history/queryRedot?bids={1}&times={2}',server(),rha.bids,rha.times), function(data){
				if(data && data.redot) dv('redot');
			});
		});
	} else {
		ih('lastRead','<span>|<a href="history.html?b_f='+BaseIndex.selfBF[indexPage]+'">书架</a></span><a href="history.html?b_f='+BaseIndex.selfBF[indexPage]+'">您还没有浏览历史，点此了解更多</a>');
		dv('lastRead');
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
	return server()+ '/8/'+BaseIndex.urls[BaseIndex.id]+'index'+num;
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
		var wrapw=pw()>720?720:pw();
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



/** ---------------------- 浏览历史 ------------------------ */
var RH={};

RH.SIZE=20;
RH.BIDS='rh.bids';
RH.CID='rh.{0}.cid';
RH.SCRL='rh.{0}.scrl';
RH.TIME='rh.{0}.time';

RH.update=function(bid,cid,scrolly) {
	var index=-1;
	var arr=RH._readBids(); 
	
	for(var i=0;i<arr.length;i++){
		if(arr[i]==bid){
			index=i;
			break;
		}
	}
	
	if(index!=-1) {
		arr.splice(index,1);
	}else if(arr.length==RH.SIZE) {
		RH._clearBid(arr.pop());
	}
	
	arr.unshift(bid);
	RH._writeBids(arr);
	
	lss(RH._keyCid(bid),cid);
	lss(RH._keyScrl(bid),scrolly);
	lss(RH._keyTime(bid),time());
};

RH.getCid=function(bid) {
	return cint(nlg(lsg(RH._keyCid(bid)),'0'));
};

RH.getScrollY=function(bid,cid) {
	return cid==nlg(lsg(RH._keyCid(bid)),0)?cint(nlg(lsg(RH._keyScrl(bid)),'0')):0;
};

RH.listAll=function() {
	var arr=RH._readBids();
	var bids='';
	var times='';
	var cidmap={};
	
	for(var i=0;i<arr.length;i++){
		bids+=arr[i]+'_';
		times+=nlg(lsg(RH._keyTime(arr[i])),0)+'_';
		cidmap[arr[i]]=nlg(lsg(RH._keyCid(arr[i])),1);
	}
	
	return {'bids':bids, 'times':times, 'cidmap':cidmap};
};

RH.listLatest=function() {
	var arr=RH._readBids();
	var bid='';
	var ttime='';
	var cid='';
	
	if(arr[0]) {
		bid=arr[0];
		ttime=nlg(lsg(RH._keyTime(bid)),0);
		cid=nlg(lsg(RH._keyCid(bid)),1);
	}
	
	return {'bid':bid, 'time':ttime, 'cid':cid};
};

RH.remove=function(bid) {
	var index=-1;
	var arr=RH._readBids(); 
	
	for(var i=0;i<arr.length;i++){
		if(arr[i]==bid){
			index=i;
			break;
		}
	}
	
	if(index!=-1) {
		arr.splice(index,1);
		RH._writeBids(arr);
	}
	
	RH._clearBid(bid);
};

RH._readBids=function() {
	return obj(nlg(lsg(RH.BIDS),'[]'));
};

RH._writeBids=function(arr) {
	lss(RH.BIDS, json(arr));
};

RH._keyCid=function(bid) {
	return format(RH.CID,bid);
};

RH._keyScrl=function(bid) {
	return format(RH.SCRL,bid);
};

RH._keyTime=function(bid) {
	return format(RH.TIME,bid);
};

RH._clearBid=function(bid) {
	lsr(RH._keyCid(bid));
	lsr(RH._keyScrl(bid));
	lsr(RH._keyTime(bid));
};







