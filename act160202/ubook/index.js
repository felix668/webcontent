var Index = {};
Index.isLogin = false;
function init() {
	console.log("init....");
	BasePage.init();
	Index.fillPage();
}
// 页面初始化
Index.fillPage = function() {
	var authors = [ "风凌天下", "林海听涛", "猫腻", "天蚕土豆", "我吃西红柿", "叶非夜", "夜清歌" ];
	var d = new Date().getDay();
	$("#avor").attr("src", "images/" + authors[d] + ".png");
	$("#author").text(authors[d] + "给您发红包啦！");
	Login.reqaObj(server() + "sum?act_b=index.html", function(data) {
		// 处理初始化数据
		console.log(data);
		Index.isLogin = data.isLogin;
	}, [], function() {
	}, 1);
}
// 充值
Index.cz = function() {
	if (Index.isLogin) {
		forceLog(param("act_f"), "cz");
	} else {
		forceLog(param("act_f"), "login");
	}
	Login.checkAndGo(server() + "lottery/chongzhiCP?currUrl=" + getUrl());
}