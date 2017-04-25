var Index = {};
Index.URL = '';
Index.INIT_URL = '';
Index.PICK_URL = '';

function init() {
	Index.URL = server() + 'lottery/index';
	Index.INIT_URL = server() + 'pkg/init';
	Index.PICK_URL = server() + 'pkg/pick';
	BasePage.init(); // 触屏登陆初始化sid
	Index.fillPageWithRetry(3, 500);

	$(".cl_sum").click(function() {
		if(!!$(this).attr("cld"))
			Index.forceLog(param("act_f"), $(this).attr("cld")); // 1开头表示PV、UV；2开头表示点击；3开头表示未知
		if ($(this).attr("cld") == "wd_open") {
			$(this).attr("cld", "close");
		}
	});
}


Index.fillPageWithRetry = function(times,milseconds){
	ZBook.bindActiveByClassName("active");
	//PV,UV
	Index.forceLog(param("act_f") || 30010);
	for (var t = 0; t < times; t++) {
		delay(milseconds * t, function(){Index.fillPage();});
	}
}

Index.fillPage = function() {
	Login.reqaObj(Index.INIT_URL, function(data) {
		if (data.picked) {
			scls("getVip", "suss geted cl_sum");
			$("#getVip").attr("cld", "scratched");
		} else if (data.canPick) {
			scls("getVip", "suss cl_sum");
			$("#getVip").attr("cld", "scratch");
			ahfc("getVip", "Index.pickVip()");
		} else {
			$("#getVip").attr("cld", "index_open");
			ahfc("getVip", "Index.getVip(" + data.isLogin + "," + data.isVip
					+ ")");
		}
	});
}

Index.pickVip = function() {
	if(Index.checkAndGo()!=1)
		return;
	Login.reqaObj(Index.PICK_URL+"?act_f="+(param("act_f") || -100), function(data) {
		alert("U:"+JSON.stringify(data));
		if (data.code == 1) {
			Index.showTips("领取成功", "免费送您7天包月会员<br>请到您的账户中查询","快来免费读包月书吧","wd_more");
			$(".knowbtn").attr("href", "http://bookshelf.html5.qq.com/jump?groupid=359&ch="); 
		} else if (data.code == 2) {
			Index.showTips("领取成功", "免费送您一个月包月会员，请到您的账户中查询","快来免费读包月书吧","wd_more");
			$(".knowbtn").attr("href", "http://bookshelf.html5.qq.com/jump?groupid=359&ch="); 
		} else if (data.code == -1) {
			Index.showTips("领取失败", "您已领取过7天包月会员，把机会让给其他的小伙伴吧");
		} else if (data.code == -2) {
			Index.showTips("领取失败", "您已领取过一个月包月会员，把机会让给其他的小伙伴吧");
		} else if (data.code == -4) {
			Index.showTips("领取失败", "您已经是VIP会员");
		} else if (data.code == -7) {
			Index.showTips("领取失败", "您还不是包月会员，请先开通");
		} else if (data.code == -9) {
			Index.showTips("领取失败", "您还未登录，请先登录");
		} else if (data.code == -99) {
			Index.showTips("领取失败", "活动已结束");
		} else if (data.code == -100) {
			Index.showTips("领取失败", "非常抱歉，无法连接网络，请稍后再来领取");
		}
	});
}

Index.getVip = function(isLogin, isVIP) {
	if(Index.checkAndGo()!=1)
		return;
	if (isLogin) {
		if (isVIP) {
			Index.showTips("领取失败", "本活动仅限非包月用户参加，敬请期待下期活动");
		} else {
			Index.showTips("确认开通", "需开通包月会员后才能领取<br/>（手机话费开通不能参加）","确认开通","wd_open");
			$(".knowbtn").attr("href", "javascript:Index.openVIP();");
		}
	} else {
		if(Index.checkWX()!=2)
			Index.login();
	}
}

Index.openVIP = function() {
	ZBook.goVipStep1(101010);
}

Index.showTips = function(result, tip, button, clk) {
	$(".knowbtn").attr("cld","");
	ih("result", result);
	ih("tip", tip);
	if(button)
		ih("button",button);
	if(clk)
		$(".knowbtn").attr("cld",clk);
	ss("mask", 'display', '-webkit-box');
	//dv("mask"); //display:-webkit-box
};


/**
 * 登陆信息相关
 */
Index.login = function() {
	try {
		Login.login();
	} catch (e) {
	}
}

Index.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || "NOID";
	Login.reqaObj(Index.URL + "?act_f=" + act_from + "&act_b=" + act_by,
			function() {
			});
}

Index.checkWX = function() {
	var code = 0;
	try {
		if (browser && browser.login && browser.login.getAccountInfo) {
			var loginSucess = function(o) {
//				alert("==checkWX==" + JSON.stringify(o));
				if (o && o.type == 2) {
					Index.showTips("","微信登陆无法参与活动，请更换QQ号登陆");
					code = 2;
				}
			};
			browser.login.getAccountInfo(function(o) {
				loginSucess(o);
			}, null, [ {
				appID : 13872
			} ]);
		}
	} catch (e) {
		alert("异常："+e.message);
	}
	return code;
}


Index.browser = function() {
	var u = navigator.userAgent.toLowerCase();
	return {
		txt : u, // 浏览器版本信息
		ios : !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/), // ios终端
		android : u.indexOf('android') > -1, // android终端
		iPhone : u.indexOf('iphone') > -1, // 是否为iPhone
		iPad : u.indexOf('ipad') > -1
	// 是否iPad
	};
};

Index.update = function(){
	ss("update", 'display', '-webkit-box');
}

Index.checkVersion = function() {
	var b = Index.browser();
//	alert("b="+JSON.stringify(b));
//	alert("ua="+navigator.userAgent);
	if (b.android) {
//		alert("isandroid");
		var code = nativeApi.supportWenxueStat();
//		alert("nativeApi.supportWenxueStat="+code);
//		alert("code="+code);
		switch (code) {
			case -1:
				//跳转到触屏
				go(front()+"ubook/index.html")
				break;
			case -2:
				//跳转到触屏
				go(front()+"ubook/index.html")
				break;
			case -3:
				Index.update();
				//升级qq浏览器
				break;
			default:
				break;
		}
		return code;
	} else{
		Index.showTips("", "非常抱歉，此活动仅限Android平台");
		return -10;
	}
}

Index.checkAndGo = function(url){
	if(Index.checkVersion()<0){
		return -1;
	}
	if(Index.checkWX==2){
		return -2;
	}
	if(url)
		go(url)
	return 1;
}