var Index = {};
Index.URL = '';
function init() {
	Index.URL = server() + 'sum';
	Index.fillPageWithTry();
}

Index.fillPageWithTry = function() {
	// PV,UV
	Index.forceLog(param("act_f") || 30010);
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
