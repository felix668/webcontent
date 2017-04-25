var Quaned = {};
Quaned.LOGIN_TYTPE = "g_type";
Quaned.WX_INFO = "wxinfo";
function init() {
	console.log("init...");
	BasePage.init();
	Quaned.Qurey();
	wxInit();
}
function wxInit() {
	var pt = env.pt == "adr" ? 1 : 3;
	var loginType = lsg(Quaned.LOGIN_TYTPE) || 1;
	var xwInfo = lsg(Quaned.WX_INFO) && obj(lsg(Quaned.WX_INFO));
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
Quaned.Qurey = function() {
	var pt = env.pt == "adr" ? 1 : 3;
	var loginType = lsg("g_type") || 1;
	var xwInfo = lsg(Quaned.WX_INFO) && obj(lsg(Quaned.WX_INFO));
	Login.reqaObj(server() + "getBookTicketDetails?pt="
			+ pt
			+ "&loginType="
			+ loginType
			+ (xwInfo && xwInfo._wu ? "&uin=" + encodeURIComponent(xwInfo._wu)
					: ""), function(data) {
		console.log(data);
		if (xwInfo && loginType == 2) {
			data.avor = xwInfo.iconurl;
			data.nick = xwInfo.nickname;
		}
		Quaned.fillPage(pt, data);
	});
}
Quaned.fillPage=function(plat, data) {
	ih("balance",data.balance);
	if (data.balance == 0 || !data.balanceDetails) {
		dv("noquan");
		dh("hasquan");
		scls(document.body,"greybg");
	}
	if (plat==1) {
		ih("tip","1书券=1书币,付费时优先扣取");
		if (data.balance == 0 || !data.balanceDetails) {
			var _str = '';
			_str += '<h2>您还没有书券</h2><p class="tip">前往QQ阅读签到、阅读、参与活动可获得书券</p>';
			ih('noquan', _str);
		} else {
			var data=data.balanceDetails,_str2="";
			for (var i in data) {
				_str2 += '<li>'+data[i].value+'书券<span class="red">'
					+ data[i].expireTime + '</span></li>';
			}
			ih('quanList', _str2);
		}
		return;
	}
	//ios
	ih("tip","1阅券=1阅点,付费时优先扣取");
	if (data.balance == 0 || !data.balanceDetails) {
		var _str = '';
		_str += '<h2>您还没有阅券</h2><p class="tip">前往QQ阅读签到、阅读、参与活动可获得阅券</p>';
		ih('noquan', _str);
	} else {
		var data=data.balanceDetails,_str2="";
		for (var i in data) {
			_str2 += '<li>'+data[i].value+'阅券<span class="red">'
				+ data[i].expireTime + '</span></li>';
		}
		ih('quanList', _str2);
	}	
}