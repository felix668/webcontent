var Index = {};
Index.isLogin = false;
Index.wxLogin = false;
Index.endTime = -1;
function init() {
	// TODO 设置活动结束时间戳
	Index.endTime = 1457506800000;
	Index.fillPage();
}
// 页面初始化
Index.fillPage = function() {
	Local.reqaObj(server() + "sum?act_b=index.html&act_f="
			+ (param("act_f") || -110), function(data) {
		// 处理初始化数据
		console.log(data);
		Index.isLogin = data.isLogin;
		Index.wxLogin = data.wxLogin;
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}
//充值  （count ： 充值多少元）
Index.cz = function(count) {
	if (Index.isLogin) {
		forceLog(param("act_f"), "cz" + count);
	} else {
		forceLog(param("act_f"), "login" + count);
	}
	Local.doCharge("act", Index.isLogin);
}
//弹窗显示
Index.maskIn = function () {
    $(".mask").addClass("show");
};
//弹窗隐藏
$(".close").on("touchend",function(e){
	e.preventDefault();
    $(".mask").removeClass("show");
})
