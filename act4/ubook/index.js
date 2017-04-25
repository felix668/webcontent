var Index = {};
Index.URL = '';
Index.INIT_URL = '';
Index.PICK_URL = '';

function init() {
//	setParam("act_f", 10030);
	Index.URL = server() + 'lottery/index';
	Index.INIT_URL = server() + 'pkg/init';
	Index.PICK_URL = server() + 'pkg/pick';
	BasePage.init(); // 触屏登陆初始化sid

	Index.fillPage();

	$(".cl_sum").click(function() {
		if ($(this).attr("cld") != "close") {
			Index.forceLog(param("act_f"), $(this).attr("cld")); // 1开头表示PV、UV；2开头表示点击；3开头表示未知
			if ($(this).attr("cld") == "wd_open") {
				$(this).attr("cld", "close");
			}
		}
	});
}

Index.fillPage = function() {
	Index.forceLog(param("act_f") || 30010);
	Login.reqaObj(Index.INIT_URL, function(data) {
		if (data.canPick) {
			scls("getVip", "suss cl_sum");
			$("#getVip").attr("cld", "scratch");
			ahfc("getVip", "Index.pickVip()");
		} else {
//			$("#getVip").attr("cld", "index_open");
//			ahfc("getVip", "Index.getVip("+data.isLogin+","+data.isVip+")");
			delay(1000, function(){
				Login.reqaObj(Index.INIT_URL, function(data1) {
					if (data1.canPick) {
//						scls("getVip", "suss cl_sum");
//						$("#getVip").attr("cld", "scratch");
//						ahfc("getVip", "Index.pickVip()");
					} else {
						$("#getVip").attr("cld", "index_open");
						ahfc("getVip", "Index.getVip("+data1.isLogin+","+data1.isVip+")");
					}
				});
			});
		}
	});
}

Index.pickVip = function() {
	Login.reqaObj(Index.PICK_URL+"?act_f="+(param("act_f") || -100), function(data) {
		if (data.code == 1) {
			Index.showTips("领取成功", "免费送您7天包月会员，请到您的账户中查询");
		} else if (data.code == 2) {
			Index.showTips("领取成功", "免费送您一个月包月会员，请到您的账户中查询");
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
	if (isLogin) {
		if (isVIP) {
			Index.showTips("领取失败", "本活动仅限非包月用户参加，敬请期待下期活动");
		} else {
			$(".knowbtn").html("<span>确认开通</span>");
			$(".knowbtn").attr("cld","wd_open");
			$(".knowbtn").attr("href", "javascript:Index.openVIP();"); //ZBook.goPreFee()
			Index.showTips("确认开通", "需开通包月会员后才能领取<br/>（手机话费开通不能参加）");
		}
	} else {
		Index.login();
	}
}

Index.openVIP = function() {
	Login.checkAndGo(server() + "lottery/openVIPCP?sid=" + lsg("sid") + "&home=" + getUrl());
}

Index.showTips = function(result, tip) {
	ih("result", result);
	ih("tip", tip);
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
