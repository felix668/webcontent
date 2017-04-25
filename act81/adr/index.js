var Index = {};
Index.URL = '';
Index.URL_RECHARGE = "";
Index.URL_GETPRESENT = ""
var QQlogin = false;
var login = false;
function init() {
	Index.URL = server() + 'sum';
	Index.URL_RECHARGE = server() + "natcionActive/getInfo";
	Index.URL_GETPRESENT = server() + "natcionActive/getVolume";
	Index.fillPageWithTry();
	Index.getPageInfo();
}

Index.fillPageWithTry = function() {
	// PV,UV
	Index.forceLog(param("act_f") || 30010);
}

/**
 * 拉去页面信息
 */
Index.getPageInfo = function() {
	Local.reqaObj(Index.URL_RECHARGE, function(data) {
		if (data.isLogin) {
			login = true;
			QQlogin = data.isQQLogin;
			if (data.isFirstCharge) {
				if (null != data.FRechargeT && data.EndT != null) {
					var d = data.EndT - data.FRechargeT;
					var s = data.hasSignToDay;
				}
				showLi(d, s, data);
				// 需要展示签到表
				ss(u0, 'display', 'block');
				if (QQlogin && data.isVersion && data.noOver) {
					if (data.isNextDay && data.neverDone) {// 是次日，未领取，领取按钮,可用
						scls('gPrt', "btn_cz active");
					} else {// 首充，非次日或已经领取，不可用
						scls('gPrt', "btn_cz tomorrow");
						document.getElementById("gPrt").onclick = null;
					}
				} else {// 非QQ，活动结束，版本5.0一下
					scls('gPrt', "btn_cz noclick");
					document.getElementById("gPrt").onclick = null;
				}
			} else {// 非首充
				scls('gPrt', "btn_cz noclick");
				document.getElementById("gPrt").onclick = null;
			}
		}
		if (data.isTimeOut) {// 活动到期按钮不可点击
			scls('rchg_one', "btn_cz noclick");
			scls('rchg_two', "btn_cz noclick");
			document.getElementById("rchg_one").onclick = null;
			document.getElementById("rchg_two").onclick = null;
		}
		ss('rchg_one', 'display', '');
		ss('rchg_two', 'display', '');
		ss('gPrt', 'display', '');
	});
};

/**
 * 点击充值
 * 
 * @param eid
 */
function rechargeOn(cid) {
	if (login) {
		if (QQlogin) {
			Index.forceLog(param("act_f") || 30010, cid); // 点击上报
			Local.doCharge("act81/adr/index.html", login);
		} else {// 非qq用户弹窗提示
			popW();
		}
	} else {
		Local.login();
	}
}

Index.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || location.href.match(/[\w]+\.html/)[0];
	Local.reqaObj(Index.URL + "?act_f=" + act_from + "&act_b=" + act_by,
			function() {
			}, [], function() {
				JSToast.showToast("网络不畅，请稍后再试试");
			}, 1);
};
/**
 * 领取签到书卷
 */
function getPresent(cid) {
	Index.forceLog(param("act_f") || 30010, cid); // 点击上报
	Local.reqaObj(Index.URL_GETPRESENT, function(data) {
		if (data.isLogin) {
			if (QQlogin) {
				if (data.neverDone && data.signToday && data.Suc) {
					ss('pop', 'display', '');
					ih('pText', '成功领取100书券!');
				} else if (!data.signToday) {
					ss('pop', 'display', '');
				} else if (data.neverDone && data.signToday && !data.Suc) {
					ss('pop', 'display', '');
					ih('pText', '非常抱歉，无法连接网络<br>请稍后再试');
					scls('pText', 'white');
				}
			} else {
				popW();
			}
		} else {
			Local.login();
		}
	}, function() {
		ss('pop', 'display', '');
		ih('pText', '非常抱歉，无法连接网络<br>请稍后再试');
		scls('pText', 'white');
	});
};

function showLi(different, sign, data) {
	switch (different) {
	case 1:
		stoday(sign, different);
		break;
	default:
		if (different <= 5) {
			stoday(sign, different);
			signF(different, data);
		} else {
			signF(5, data);
			if (!nl(data['signDay' + 5])) {
				ss('e' + 5, 'display', 'block');
			}
		}
	}
};

/**
 * 判断当天是否签到,5天以内
 */
function signF(different, data) {
	for (var i = 1; i < different; i++) {
		if (!nl(data['signDay' + i])) {
			ss('e' + i, 'display', 'block');
		}
	}
};

function stoday(sign, different) {
	if (sign) {// 当天签到
		ss('s' + different, 'display', 'block');
	}
};

/**
 * 关闭弹窗
 */
function close() {
	dh('pop');
	flag = true;
	Index.getPageInfo();
};

function popW() {
	// 弹窗qq登录
	ss('pop', 'display', '');
	ih('pText', 'QQ登陆才能参与活动哦！');
	ss('sText', 'display', '');
}
