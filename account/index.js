var Index = {};
//登录方式localstorage 1：qq，2：微信
Index.LOGIN_TYTPE = "g_type";
Index.WX_INFO = "wxinfo";
function init() {
	console.log("init...");
	BasePage.init();
	Index.initPage();
	wxInit();
}
function wxInit() {
	var pt = env.pt == "adr" ? 1 : 3;
	var loginType = lsg(Index.LOGIN_TYTPE) || 1;
	var xwInfo = lsg(Index.WX_INFO) && obj(lsg(Index.WX_INFO));
	Login.reqaObj(server()
			+ "queryApi?href="+encodeURIComponent(location.href)+"&pt="
			+ pt
			+ "&loginType="
			+ loginType
			+ (xwInfo && xwInfo._wu ? "&uin=" + encodeURIComponent(xwInfo._wu)
					: ""), function(data) {
		console.log("wxInit", data);
		if (data.jsapi) {
			var appId = 'wx67f3f2afdcf601e2';
			if(_SERVER==_CONF.TEST_SERVER)
				appId = 'wx4c4098f00210be29';
			wx.config({
				appId : appId,
				timestamp : data.jsapi.second,
				nonceStr : data.jsapi.first,
				signature : data.jsapi.third.substr(0, 40),
				jsApiList : [ 'checkJsApi', 'onMenuShareTimeline',
						'hideAllNonBaseMenuItem', 'chooseWXPay' ]
			});
			wx.ready(function() {
				wx.hideAllNonBaseMenuItem();
			});
		}
	});
}
// 初始化微信相关信息
Index.initPage = function() {
	if (param("code")) {
		Login.reqaObj(server() + "getWxSimpleInfo?code=" + param("code"),
				function(data) {
					console.log("initPage", data);
					var infoInCache = lsg(Index.WX_INFO);
					var _wu = infoInCache && obj(infoInCache)
							&& obj(infoInCache)._wu;
					var wxInfo = data.wxinfo;
					wxInfo && _wu && (wxInfo["_wu"] = _wu);
					wxInfo && lss(Index.WX_INFO, json(wxInfo));
					Index.Query();
					setParam("code", 0);
				});
	} else {
		Index.Query();
	}
};

//查询用户充值信息等
Index.Query = function() {
	var pt = env.pt == "adr" ? 1 : 3;
	var loginType = lsg(Index.LOGIN_TYTPE) || 1;
	var xwInfo = lsg(Index.WX_INFO) && obj(lsg(Index.WX_INFO));
	Login.reqaObj(server() + "cz/init?loginType=" + loginType + (xwInfo && xwInfo._wu ? "&uin=" + encodeURIComponent(xwInfo._wu)
			: ""), function(data) {
		console.log("Query",data);
		if (!!!lsg("_BD") && loginType == 1 && data.isLogin) {
			Index.bind(1);
		}
		Index.fillPage(pt, data);
	});
};
//领取礼包信息
Index.pick=function(){
	Index.closelogin();
	var pt = env.pt == "adr" ? 1 : 3;
	var loginType = lsg(Index.LOGIN_TYTPE) || 1;
	var xwInfo = lsg(Index.WX_INFO) && obj(lsg(Index.WX_INFO));
	Login.reqaObj(server() + "cz/pick?loginType=" + loginType + (xwInfo && xwInfo._wu ? "&uin=" + encodeURIComponent(xwInfo._wu)
			: ""), function(data) {
		console.log("Query",data);
		if(data.code==1){
			//领取成功弹框
			
			$(".successmask").css("display","-webkit-flex");
			$(".tiparea h4").html("领取成功");
			$(".tiparea p").text("公众号大礼包已到账，包含100书券、3天包月特权、3张推荐票、100成长值，可前往个人中心查看");
			$(".page_btn .goread").show();
			$(".page_btn .goread em").text("已领取，去QQ阅读看书");
			$(".page_btn .receive").hide();
		}
	});
};
//初始化页面
Index.fillPage = function(plat, data){	
	if(data.isOver){
		Index.over();
	}else if(plat!=1){//非安卓手机用户
		Index.noandroid();
	}else if(plat==1){//安卓手机用户
		$(".wrap").show();
		$(".login").hide();
		$("body").css("background","#392e3c");
		if(data.isLogin){//登录用户
			Index.closelogin();
			if(data.czcg){//充值成功
				if(data.picked){//已领取过
					$(".page_btn .goread em").text("已领取，去QQ阅读看书");
					$(".page_btn .receive").hide();
					$(".page_btn .goread").show();
				}else{//未领取
					$(".page_btn .goread").hide();
					$(".page_btn .receive").css("display","inline-block");
					$(".page_btn .receive").on("tap",function(){
						//领取礼包
						Index.pick();
					});
				}
			}else{
				$(".special").show();
				$(".ortherlog").show();
				$(".page_btn .goread").show();
				$(".page_btn .goread em").text("去QQ阅读参与活动");
				$(".page_btn .receive").hide();
			}
		}else{//未登录
			$(".special").hide();
			$(".ortherlog").hide();
			$(".page_btn .goread em").text("点击登录");
			$(".page_btn .receive").hide();
			$(".page_btn .goread").show();
		}
	}
	$(".page_btn .goread").on('tap',function(){
		var txt=$(".page_btn .goread em").text();
		if(txt=="点击登录"){
			Index.tologin();
		}
		if(txt=="去QQ阅读参与活动"){
			S.open(function(installStat,plat){
				if(installStat){
					N.openPage(front()+"../actcz/index.html?act_f=161204");
				}else{
					$(".Downmask").css("display","-webkit-flex");//显示下载弹窗
				}
			});
		}
		if(txt=="已领取，去QQ阅读看书"){
			//按钮去主线精选页面
			S.open(function(installStat,plat){
				if(installStat){
					window.location.href="uniteqqreader://nativepage/infostream/list";
				}else{
					$(".Downmask").css("display","-webkit-flex");//显示下载弹窗
				}
			});
		}
	});
};
//显示登录弹窗
Index.tologin = function(){
	$(".wrap").hide();
	$(".login").show();
	$("body").css("background","#fff");
};
//关闭登录弹窗
Index.closelogin = function(){
	$(".wrap").show();
	$(".login").hide();
	$("body").css("background","#392e3c");
};
//QQ登录
Index.loginQQ = function(){
	lss(Index.LOGIN_TYTPE,1);
//	Login.doLogin(front() + "index.html");
	Login.doLogoutAndLogin();
};

// 微信登录
Index.loginWX = function() {
	lss(Index.LOGIN_TYTPE, 2);
	// bind获取用户信息
	Index.bind(2);
};
//登录后绑定
Index.bind = function(loginType) {
	var xwInfo = obj(lsg(Index.WX_INFO));
	// bind获取用户信息
	xwInfo
			&& Login.reqaObj(server() + "bindWxInfo?loginType=" + loginType
					+ "&openid=" + encodeURIComponent(xwInfo.openid)
					+ "&unionid=" + encodeURIComponent(xwInfo.unionid) + (xwInfo && xwInfo._wu ? "&uin=" + encodeURIComponent(xwInfo._wu)
							: ""),
					function(data) {
						console.log("bind",data);
						if (data._wu) {
							if (loginType == 1) {
								lss("_BD", 1);
							} else {
								xwInfo._wu = data._wu;
								lss(Index.WX_INFO, json(xwInfo));
								Index.Query();
							}
						}
					});
}
//确认退出登录
Index.doLoginout = function() {
	var loginType = lsg(Index.LOGIN_TYTPE) || 1;
	var xwInfo = obj(lsg(Index.WX_INFO));
	// unbind用户信息
	xwInfo
			&& Login.reqaObj(server()
					+ "unBoundWxInfo?loginType="
					+ loginType
					+ "&openid="
					+ encodeURIComponent(xwInfo.openid)
					+ "&unionid="
					+ encodeURIComponent(xwInfo.unionid)
					+ (xwInfo && xwInfo._wu ? "&uin="
							+ encodeURIComponent(xwInfo._wu) : ""), function(
					data) {
				console.log("doLoginout",data);
				if (data.unbind >= 0) {
					lsr("_BD");
				}
				loginType == 1 && Login.doLogout();
				loginType == 2 && lsr(Index.LOGIN_TYTPE) ;
				loginType == 2 && lsr("isLogin");
				Index.tologin();
			});
};
//活动结束弹框
Index.noandroid=function(){
	$(".wrap").hide();
	$(".MaskOver").show();
	$("body").css("background","#fff");
};
//非安卓用户弹框
Index.noandroid=function(){
	$(".wrap").hide();
	$(".MaskOver").show();
	$("body").css("background","#fff");
	$(".MaskOver p").html("很抱歉，本期活动只支持安卓手机用户参与<br>期待下次精彩活动");
};
//奖品弹框
Index.maskIn=function(obj){
	$("."+obj).on('touchend', function(e){
		e.preventDefault();
		var type=$(this).parent().data('type')
		Index.maskinfo(type);
	})
};
Index.maskIn("shubi span");
Index.maskIn("prizelist a span");
Index.maskinfo=function(type){
	var prize=['img/shubi.png','img/shuquan.png','img/tuijianp.png','img/baoyue.png','img/chengzhangz.png'];
	$(".mask").css("display","-webkit-flex");
	$(".tiparea img").attr('src',prize[type]);
	if(type==0){
		$(".tiparea h4").html("书币<br>1000书币＝10元");
		$(".tiparea p").text("书币可用于购买QQ阅读书城的书籍");
	}
	if(type==1){
		$(".tiparea h4").html("100书券=100书币");
		$(".tiparea p").text("书券可用于购买QQ阅读书城的书籍，15天有效期");
	}
	if(type==2){
		$(".tiparea h4").html("推荐票");
		$(".tiparea p").text("决定一部作品在推荐榜单的排名，限当天使用，快投给你喜欢的作品");
	}
	if(type==3){
		$(".tiparea h4").html("包月特权");
		$(".tiparea p").text("体验3天包月vip业务，享有包月专区10万册好书的免费特权");
	}
	if(type==4){
		$(".tiparea h4").html("成长值");
		$(".tiparea p").text("助力升级，成长等级飞升，等级越高，领取的月度等级礼包越大");
	}

};
//关闭弹框
$('.closbtn').on("tap",function(){
	$(".mask").css("display","none");
	$(".successmask").css("display","none");
});
$(".cancle").on("tap",function(){
	$(".Downmask").css("display","none");
});
//下载qq阅读
$(".certain").on("tap",function(){
	$(".Downmask").css("display","none");
	//forceLog("161102","FX1DLbtn");
	N.downLoad(null, '10024407');
});

