var Index = {};
function init(){
	console.log("init....");
	Index.fillPage();
}
//页面初始化
Index.fillPage = function() {
	forceLog(param("act_f"));
	Local.reqaObj(server() + "pkgc2/init", function(data) {
		//处理初始化数据
		console.log(data);
        initpage(data);
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}
//领取书券
Index.pick = function(){
	forceLog(param("act_f"),"pick");
	Local.reqaObj(server() + "pkgc2/pick", function(data) {
		//处理点击领取返回的数据
		console.log(data);
        Index.result(data);
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}
//页面初始化
function initpage(data) {
    if(data.isLogin){
        Index.logined(data);
    }else{
        Index.unlogin();       
    }
}
Index.unlogin = function() {
	$(".unlogin").show();
	$(".logined").hide();
	$("#btn").attr("href", "javascript:Local.login();");
};
Index.logined=function(data){
    $(".unlogin").hide();
    $(".logined").show();
    $("#headpic").attr("src",data.icon);
    $("#nick").text(data.nick);
    $("#cosnum").text(data.consumed);
    $("#excnum").text(data.charged);
    //余额小于2500
    var bookcoin=parseInt(data.left);
    if(bookcoin<2500){
        $(".record").addClass("low");
        $("#neednum").text(2500-bookcoin);
    }
};
$("#btn").on("tap",function(){
    Index.pick();
})
//弹窗结果
Index.result = function(data) {
	if (data.code == 1) {
		Index.maskIn();
		if (data.traded > 0) {
			$("#excnum").text(data.traded);
			$("#neednum").text(2500 - data.left);
			$(".record").addClass("low");
		}
	} else if (data.code == -1) {// 兑换失败
		Index.maskIn();
		$(".tiparea strong").text("兑换失败");
		$(".tiparea p").text("每累计购书消费满2500书币，即可兑换500书券，不限次数");
	}
}
// 按钮点击态
Index.btns = function (obj) {
    $(obj).on("touchstart", function () {
        $(this).addClass("active");
    });
    $(obj).on("touchend", function () {
        $(this).removeClass("active");
    })
};
Index.btns(".btn");
//弹窗隐藏
Index.maskOut = function () {
    $(".mask").hide();
    $(".tiparea").hide();
};
//弹窗显示
Index.maskIn = function () {
    $(".mask").css("display", "-webkit-box");
    $(".tiparea").show();
};
//弹窗关闭
$(".tiparea .btn").on("touchend",function(ev){
    ev.preventDefault();
    // setTimeout(function(){
    Index.maskOut();
    // },320);
})

