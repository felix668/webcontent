var Index={};
//未登录
Index.noLogin=function(){
	$("#nologin").css("display","inline-block");
	$("#logined").hide();
}
//加铃铛动效
Index.addbell=function(){
	$("#add").addClass("ani");
	setTimeout(function(){
		$("#add").removeClass("ani");
	},600);
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
Index.btns(".getbtn,.lottery,.knowbtn,.tipbtn");
Index.maskIn = function(obj2,txt,src) {
	$('.mask').css('display', '-webkit-box');
	$('#' + obj2).show();
	if(txt!=undefined && src!=undefined){
		$('#' + obj2).find(".giftpic").attr("src",src);
		$('#' + obj2).find(".giftname").text(txt);
	}
}
Index.maskOut = function() {
	$('.mask').hide();
}
//关闭弹窗
$(".knowbtn,.closebtn").on("tap",function(){
	$(this).parent().hide();
	Index.maskOut();
})
//抽奖结果
Index.result=function(data){
	if(data==0){//谢谢参与
		Index.maskIn("tiparea1");
	}else if(data==1){//一等奖 ipad
		Index.maskIn("tiparea4","iPad","images/gift1.png");
	}else if(data==2){//二等奖 QQ公仔
		Index.maskIn("tiparea4","QQ 公仔","images/gift2.png");
	}else if(data==3){//三等奖 5Q币
		Index.maskIn("tiparea3","5Q币","images/gift3.png");
		$("#detail").text("Q币奖励将在获得之日5个工作日内发放至QQ账号");
	}else if(data==4){//四等奖 50书券
		Index.maskIn("tiparea3","50书券","images/gift5.png");
		$("#detail").text("书券已发送到您的账户");
	}else if(data==5){//五等奖 小米4
		Index.maskIn("tiparea4","小米4","images/gift6.png");
	}else if(data==6){//六等奖 1Q币
		Index.maskIn("tiparea3","1Q币","images/gift7.png");
		$("#detail").text("Q币奖励将在获得之日5个工作日内发放至QQ账号");
	}else if(data==7){//七等奖 3天包月体验卡
		Index.maskIn("tiparea3","3天包月体验卡","images/gift8.png");
		$("#detail").text("已开通3天包月会员，10万册包月书可以在线免费看3天");
	}else if(data==8){//铃铛不足5
		Index.maskIn("tiparea2");
	}
}
