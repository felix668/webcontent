var Index = {};
Index.isLogin = false;
Index.endTime = -1;
function init() {
	// TODO 设置活动结束时间戳
	Index.endTime = 1461135600000;
	Index.fillPage();
}
// 页面初始化
Index.fillPage = function() {
	var day = new Date();
	var time = day.getTime();
	//活动结束
	if(Index.endTime>0 && time>Index.endTime){
		$(".wrap").addClass("over");
		$("a").attr("href","javascript:;")
	}
	Local.reqaObj(server() + "sum?act_b=index.html&act_f="
			+ (param("act_f") || -110), function(data) {
		// 处理初始化数据
		console.log(data);
		Index.isLogin = data.isLogin;
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}
// 充值  （count ： 充值多少元）
Index.cz = function(count) {
	if (Index.isLogin) {
		forceLog(param("act_f"), "cz"+count);
		Local.openrecharge();
	} else {
		forceLog(param("act_f"), "login"+count);
		Local.login();
	}
}