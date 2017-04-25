var Index = {};
Index.URL = '';

function init() {
	Index.URL = server() + 'lottery/index';
	Index.fillPage();
}

Index.fillPage = function() {
	Index.forceLog(param("act_f") || 30010);
	Login.reqaObj(Index.URL, function(data) {
		console.log(data);
		alert(JSON.stringify(data));
		$(".charge").attr("href","javascript:ZBook.chongzhi(101020);");
	}, [], function() {
	}, 1);
}

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
			}, [], function() {
			}, 1);
}
