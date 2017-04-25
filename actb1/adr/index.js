// 适配
var fSize=($(document).width() / 320) * 100;
$('html').css('fontSize', fSize + "px");
//弹窗相关
var Index = {};
Index.maskIn = function(obj1, obj2) {
	$('.' + obj1).css('display', '-webkit-box');
	$('#' + obj2).show();
}
Index.maskOut = function(obj1) {
	$("."+obj1).hide();
}
Index.btns=function(obj){
	$(obj).on("touchstart",function(){
		$(this).addClass('on');
	})
	$(obj).on("touchend",function(){
		$(this).removeClass('on');
	})
}
//关闭弹窗
$("#tiparea1 .hide,.closebtn").on("tap",function(){
	$(this).parent().hide();
	Index.maskOut("mask");
})
//按钮特效
Index.btns('.get .btn,.hide');
//初始化
//已领取过
Index.geted=function(txt){
	$(".geted").show().siblings().hide();
	$("#yhm").text(txt);
}
//抢光了
Index.over=function(){
	$(".none").show().siblings().hide();
}
//点击领取按钮
Index.result=function(data,txt){
	if(data==0){//领取成功
		Index.geted(txt);
	}else if(data==1){//领取失败--人多
		Index.maskIn("mask","tiparea1");
	}else if(data==2){//领取失败--已发完
		Index.maskIn("mask","tiparea1");
		$("#msg").html("晚来一步，<br>优惠券已被抢光")
	}else if(data==3){//领取失败--已领取
		Index.maskIn("mask","tiparea1");
		$("#msg").html("您已领取过优惠券，<br>把机会让给其他伙伴吧")
	}else if(data==4){//开通包月
		Index.maskIn("mask","tiparea2");
	}else if(data==5){//网络故障
		Index.maskIn("mask","tiparea1");
		$("#msg").html("非常抱歉，无法连接网络<br>请稍后再试");
	}
}
$("#btn").on("tap", function() {
	if ($("#btn").hasClass("clicked"))
		return;
	forceLog(param("act_f"),"pick");
	$("#btn").addClass("clicked");
	// 点击领取按钮请求数据
	Local.reqaObj(server() + "pkgb1/pick", function(data) {
		console.log(data);
		if (Index.debug)
			alert("调试信息，请忽略：" + JSON.stringify(data));
		if (data.isLogin) {
			Index.result(data.code, data.card);
		} else {
			Local.login();
		}
		$("#btn").removeClass("clicked");
	}, [], function() {
		$("#btn").removeClass("clicked");
		Index.result(5);
	}, 1);
})

$("#DEBUG").on("tap",function(){
	//点击领取按钮请求数据
	Index.debug = true;
})

function init() {
	Local.reqaObj(server() + "pkgb1/init", function(data) {
		console.log(data);
		if (Index.debug)
			alert("调试信息，请忽略：" + JSON.stringify(data));
		if (data.card) {
			Index.geted(data.card);
		}else if(data.out){
			Index.over();
		}
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
	forceLog(param("act_f"));
}