var Index = {};
Index.isLogin = false;
function init() {
	console.log("init....");
	Index.fillPage();
}
// 页面初始化
Index.fillPage = function() {
	var day = new Date();
	var time = day.getTime();
	if(time>1468771200000){
//		$(".wrap").addClass("over");
//		$("a").attr("href","javascript:;")
		Index.over();
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
// 充值
Index.cz = function(count) {
	if (Index.isLogin) {
		forceLog(param("act_f"), "cz"+count);
		Local.openrecharge();
	} else {
		forceLog(param("act_f"), "login"+count);
		Local.login(null,'d');
	}
}
//活动结束
Index.over=function(){
	$("#mask").addClass("show");
}