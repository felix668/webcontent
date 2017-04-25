var Index={};
//未登录
Index.noLogin=function(){
	$("#nologin").css("display","inline-block");
	$("#logined").hide();
}
//按钮点击态
Index.btns=function(obj){
	$(obj).on("touchstart",function(){
		$(this).addClass("active");
	})
	$(obj).on("touchend",function(){
		$(this).removeClass("active");
	})
}
Index.btns(".punchBtn");
Index.maskOn = function() {
	$('.mask').show();
}
Index.maskOut = function() {
	$('.mask').hide();
}
//弹窗
$(".tip").on("tap",function(){
	$(".tiparea").show();
		Index.maskOn();
})

$(".knowbtn,.closebtn,.tipBtn").on("tap",function(){
	$(this).parent().hide();
	Index.maskOut();
})
$(".tipClose").on("tap",function(){
	$(this).parent().hide();
	Index.maskOut();
})
$('.rp').on('webkitAnimationEnd',function(){
    	$(this).addClass('rps');
    })
