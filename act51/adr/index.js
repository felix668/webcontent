var Index = {};
Index.URL = '';

function init() {
	Index.URL = server() + 'lottery/index';
	Index.fillPage();
}

Index.fillPage = function() {
	Index.forceLog(param("act_f") || 30010);
	Local.reqaObj(Index.URL, function(data) {
		console.log(data);
		$(".charge").attr("href", "javascript:Local.doCharge('act',"+data.isLogin+");");
	}, [], function() {
	}, 1);
}

/**
 * 登陆信息相关
 */
Index.login = function() {
	try {
		Local.login();
	} catch (e) {

	}
}

Index.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || "NOID";
	Local.reqaObj(Index.URL + "?act_f=" + act_from + "&act_b=" + act_by,
			function() {
			}, [], function() {
			}, 1);
}
