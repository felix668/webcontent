var Index = {};
Index.isLogin = false;
function init() {
	console.log("init....");
	BasePage.init();
	Index.fillPage();
}
// 页面初始化
Index.fillPage = function() {
	Login.reqaObj(server() + "sum?act_b=index.html", function(data) {
		// 处理初始化数据
		console.log(data);
		Index.isLogin = data.isLogin;
	}, [], function() {
	}, 1);
}
// 充值
Index.cz = function(count) {
	if (Index.isLogin) {
		forceLog(param("act_f"), "cz"+count);
	} else {
		forceLog(param("act_f"), "login");
	}
	Login.checkAndGo(server() + "lottery/chongzhiCP?currUrl=" + getUrl());	
}