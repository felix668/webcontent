var Index = {};
Index.isLogin = false;
function init() {
	console.log("init....");
	Index.fillPage();
}
// 页面初始化
Index.fillPage = function() {
	var authors = [ "风凌天下", "林海听涛", "猫腻", "天蚕土豆", "我吃西红柿", "叶非夜", "夜清歌" ];
	var day = new Date();
	var d = day.getDay();
	var time = day.getTime();
	if(time>1456729200000){
		$(".wrap").addClass("over");
		$(".btn").attr("href","javascript:;")
	}
	$("#avor").attr("src", "images/" + authors[d % 7] + ".png");
	$("#author").text(authors[d % 7] + "给您发红包啦！");
	Local.reqaObj(server() + "sum?act_b=index.html&act_f="
			+ (param("act_f") || -110), function(data) {
		// 处理初始化数据
		console.log(data);
		Index.isLogin = data.isLogin;
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}
// 充值
Index.cz = function(count) {
	if (Index.isLogin) {
		forceLog(param("act_f"), "cz"+count);
		Local.openrecharge();
	} else {
		forceLog(param("act_f"), "login"+count);
		Local.login();
	}
}