var MyAccount = {};
//登录方式localstorage 1：qq，2：微信
MyAccount.LOGIN_TYTPE = "g_type";
MyAccount.WX_INFO = "wxinfo";
function init() {
	console.log("myaccount init...");
	BasePage.init();
	MyAccount.initPage();
	//wxInit();
}
/*
function wxInit() {
	var pt = env.pt == "adr" ? 1 : 3;
	var loginType = lsg(MyAccount.LOGIN_TYTPE) || 1;
	var xwInfo = lsg(MyAccount.WX_INFO) && obj(lsg(MyAccount.WX_INFO));
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
*/
// 初始化微信相关信息
MyAccount.initPage = function() {
    console.log("MyAccount.initPage"+param("code"));
	if (param("code")) {
		Login.reqaObj(server() + "getWxSimpleInfo?code=" + param("code"),
				function(data) {
					console.log("initPage", data);
					var infoInCache = lsg(MyAccount.WX_INFO);
					var _wu = infoInCache && obj(infoInCache)
							&& obj(infoInCache)._wu;
					var wxInfo = data.wxinfo;
					wxInfo && _wu && (wxInfo["_wu"] = _wu);
					wxInfo && lss(MyAccount.WX_INFO, json(wxInfo));
					MyAccount.Query();
					setParam("code", 0);
				});
	} else {
		MyAccount.Query();
	}
}


// 查询账户余额信息

MyAccount.Query = function() {
	var pt = env.pt == "adr" ? 1 : 3;
	var loginType = lsg(MyAccount.LOGIN_TYTPE) || 1;
	var xwInfo = lsg(MyAccount.WX_INFO) && obj(lsg(MyAccount.WX_INFO));
	Login.reqaObj(server() + "getAcctInfo?pt=" + pt
			+ "&loginType=" + loginType + (xwInfo && xwInfo._wu ? "&uin=" + encodeURIComponent(xwInfo._wu)
			: ""), function(data) {
		console.log("Query",data);
        /*
		if(xwInfo && loginType == 2){
			data.avor = xwInfo.iconurl;
			data.nick = xwInfo.nickname;
		}*/
		if (!!!lsg("_BD") && loginType == 1 && data.isLogin) {
			MyAccount.bind(1);
			
		}
		MyAccount.fillPage(pt, data);
	});
}

//填充页面余额信息
/**
 * plat=1 android
 * plat=3 ios
 */

MyAccount.fillPage = function(plat, data) {
	if (data.isLogin) {
		var loginType = lsg(MyAccount.LOGIN_TYTPE) || 1;
		$(".login").hide();
        // call midas
        var uin = Login.cmap.uin;
        var skey = Login.cmap.skey;
        var productid = nsg("productid");
        //window.alert(MyAccount.productid + "," + productid);
        console.log("productid:" + productid );

        var url = Login.midasURL +'&productid=' + productid +'&openid=' + uin + '&skey=' + skey;
        //window.alert("success! uin: " + uin + ",skey: " + skey);
        go(url);
        /*
		if (plat == 1) {
			$(".adr").show();
			$("#vip").text("VIP" + data.vipLevel);
			$("#lv").text("LV" + data.norLevel);
			$("#leftTicket").text(data.leftTicket);
			$("#leftMTicket").text(data.leftMTicket);
			$("#cardCnt").text(data.cardCnt);
			$("#balance1").html(loginType==2 ? "余额：<span class='red'>暂不支持查询</span>" : "余额：<span class='red'>"+data.balance+"</span>书币");
		} else if (plat == 3) {
			$(".adr").hide();
			$(".ios").show();
			$("#balance2").html(loginType==2 ? "余额：<span class='red'>暂不支持查询</span>" : "余额：<span class='red'>"+data.balance+"</span>阅点");
		}
		$(".avor").attr("src", data.avor);
		$(".nick").text(data.nick);
		$(".bookTicket").text(data.bookTicket);
		if (data.isMVip) {
			$(".noMvip").hide();
			$(".nomonth").attr("class", "hasmonth");
			$(".vipEnd").text(data.vipEndTime+"到期");
		} else {
			$(".mVip").hide();
		}
		if (data.isLogin) {
			// 点击头像退出登录
			$(".avor").on("tap", function() {
				MyAccount.loginout();
			});
		} else {
			// 点击头像重新登录
			$(".avor").on("tap", function() {
				MyAccount.tologin();
			});
		}
		*/
	} else {
		MyAccount.tologin();
	}
}

//显示登录弹窗
MyAccount.tologin = function(){
	//$(".adr,.ios").hide();
	$(".login").show();
	$("body").removeClass("greybg");
}
//QQ登录
MyAccount.loginQQ = function(){
	lss(MyAccount.LOGIN_TYTPE,1);
	Login.doLogin(front() + "myaccount.html");
}

// 微信登录
/*
MyAccount.loginWX = function() {
	lss(MyAccount.LOGIN_TYTPE, 2);
	// bind获取用户信息
	MyAccount.bind(2);
}
*/
// 登录后绑定
MyAccount.bind = function(loginType) {
	var xwInfo = obj(lsg(MyAccount.WX_INFO));
	// bind获取用户信息
	xwInfo
			&& Login.reqaObj(server() + "bindWxInfo?loginType=" + loginType
					+ "&openid=" + encodeURIComponent(xwInfo.openid)
					+ "&unionid=" + encodeURIComponent(xwInfo.unionid),
					function(data) {
						console.log("bind",data);
						if (data._wu) {
							if (loginType == 1) {
								lss("_BD", 1);
							} else {
								xwInfo._wu = data._wu;
								lss(MyAccount.WX_INFO, json(xwInfo));
//								location.reload();
								MyAccount.Query();
							}
						}
					});
}

//退出登录
MyAccount.loginout = function(){
	$(".mask").addClass("show");
}
// 确认退出登录
MyAccount.doLoginout = function() {
	var loginType = lsg(MyAccount.LOGIN_TYTPE) || 1;
	var xwInfo = obj(lsg(MyAccount.WX_INFO));
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
				loginType == 2 && lsr(MyAccount.LOGIN_TYTPE) ;
				loginType == 2 && lsr("isLogin");
				$(".mask").removeClass("show");
				MyAccount.tologin();
			});
}
$(".certain").on("touchend",function(ev){
	ev.preventDefault();
	MyAccount.doLoginout();
})
$(".cancle").on("touchend",function(ev){
	ev.preventDefault();
	$(".mask").removeClass("show");
})