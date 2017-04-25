var Index={};
Index.INIT_URL="";
Index.LOTTERY_URL="";
Index.GET_MORE_URL="";
Index.debug = false;
Index.isLogin = false;
function init(){
	$("#DEBUG").on("tap", function() {
		Index.debug = true;
	});
	Index.INIT_URL = server()+"pkgb2/initLottery";
	Index.LOTTERY_URL = server()+"pkgb2/doLottery";
	Index.GET_MORE_URL= server()+"buybell";
	Index.fillPage();
}
//填充页面内容
Index.fillPage = function(){
	forceLog(param("act_f"));
	Local.reqaObj(Index.INIT_URL + "?act_f=" + param("act_f"), function(
			data) {
		// 获取到抽奖内容，填写到刮刮卡里边
		if (data.isLogin) {
			Index.isLogin = true;
			$("#ldCount").text(data.score);
			$("#ldCount").attr("data_lg",data.score);
		} else {
			Index.noLogin();
		}
	}, [], function() {
	}, 1);
}
//未登录
Index.noLogin=function(){
	$("#nologin").css("display","inline-block");
	$("#ldCount").attr("data_lg",-100);
	$("#logined").hide();
}
//加铃铛动效
Index.addbell = function() {
	$("#add").addClass("ani");
	$("#ldCount").text(parseInt($("#ldCount").text()) + 20);
	$("#ldCount").attr("data_lg", parseInt($("#ldCount").text()) + 20);
	setTimeout(function() {
		$("#add").removeClass("ani");
	}, 600);
}
//减铃铛动效
Index.reducebell=function(){
	$("#reduce").addClass("ani");
	$("#ldCount").text(
	parseInt($("#ldCount").text()) - 5 > 0 ? parseInt($("#ldCount")
			.text()) - 5 : 0);
	$("#ldCount").attr("data_lg", parseInt($("#ldCount").text()));
	setTimeout(function(){
		$("#reduce").removeClass("ani");
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
//关闭所有弹窗
Index.maskOut = function() {
	//setTimeout(function(){
		$(".tiparea").hide();
		$('.mask').hide();
	//},320);	
}
//关闭弹窗
$(".knowbtn,.closebtn").on("tap",function(ev){
	ev.preventDefault();
	setTimeout(function(){
		Index.maskOut();
	},320);
});
//抽奖结果
Index.result=function(data,iswx){
	Index.maskOut();
	if(data==1){//一等奖 ipad
		Index.maskIn("tiparea4","iPad","images/gift1.png");
	}else if(data==2){//二等奖 QQ公仔
		Index.maskIn("tiparea4","QQ 公仔","images/gift2.png");
	}else if(data==3){//三等奖 5Q币
		if(iswx){
			Index.maskIn("tiparea5","5Q币","images/gift3.png");
		}else{
			Index.maskIn("tiparea3","5Q币","images/gift3.png");
			$("#detail").text("Q币奖励将在获得之日5个工作日内发放至QQ账号");
		}
	}else if(data==4){//谢谢参与
		Index.maskIn("tiparea1");
	}else if(data==5){//四等奖 50书券
		Index.maskIn("tiparea3","50书券","images/gift5.png");
		$("#detail").text("书券已发送到您的账户");
	}else if(data==6){//五等奖 小米4
		Index.maskIn("tiparea4","小米4","images/gift6.png");
	}else if(data==7){//六等奖 1Q币
		if(iswx){
			Index.maskIn("tiparea5","1Q币","images/gift7.png");
		}else{
			Index.maskIn("tiparea3","1Q币","images/gift7.png");
			$("#detail").text("Q币奖励将在获得之日5个工作日内发放至QQ账号");
		}
	}else if(data==8){//七等奖 3天包月体验卡
		Index.maskIn("tiparea3","3天包月体验卡","images/gift8.png");
		$("#detail").text("已送出3天包月会员，可到我的账户开通使用");
	}else if(data==9){//铃铛不足5
		Index.maskIn("tiparea2");
	}else if(data==10){//书币不足
		Index.maskIn("tiparea6");
	}
	$("#lottery").removeClass("clicked");
}
Index.doLottery = function() {
	forceLog(param("act_f"), "lottery-click");
	if ($("#ldCount").attr("data_lg") == -100) {
		Local.login();
		return;
	}
	if ($("#ldCount").attr("data_lg") < 5) {
		Index.result(9);
		return;
	}
	if (!$("#lottery").hasClass("clicked")
			&& parseInt($("#ldCount").text()) >= 5) {
		$("#lottery").addClass("clicked");
		// 在这里发送刮奖请求
		Index.startRun();
		Local.reqaObj(Index.LOTTERY_URL + "?act_f=" + param("act_f"), function(
				data) {
			if (Index.debug)
				alert(JSON.stringify(data));
			// 获取到抽奖内容，填写到刮刮卡里边
			if (data.isLogin) {
				isWxLogin = data.wxLogin;
				if (data.code == 0) {
					prizeName = data.prizename;
					prizeId = data.prize;
					Index.reducebell();
				} else if (data.code == 105) {// 铃铛不足
					clearInterval(Time);
					$(".act").removeClass("act");
					$(".gift4").addClass("act");
					Index.result(9);
				} else {
					prizeName = "很遗憾，您没有中奖！";
					prizeId = -1;
					Index.reducebell();
				}
			} else {
				Local.login();
			}
		}, [], function() {
		}, 1);
	}
}

var Time, cycle, speed = 300, index = 1, preIndex = 0, dict = {
	"1" : 1,
	"2" : 6,
	"3" : 2,
	"4" : 3,
	"5" : 7,
	"6" : 5,
	"7" : 8,
	"-1" : 4
}, prizeId = 0, prizeName,isWxLogin;
// 跑马灯开始
Index.startRun = function() {
	prizeId = -1;
	prizeName = "很遗憾，您没有中奖！";
	clearInterval(Time);
	cycle = 0;
	Time = setInterval(function() {
		Index.run();
	}, speed);
}
//跑马灯
Index.run = function() {
	$(".gift" + preIndex).removeClass("act");
	$(".gift" + index).addClass("act");
	if (cycle >= 2 && index == dict[prizeId]) {
		clearInterval(Time);
		delay(1000, function() {
			Index.result(dict[prizeId < -1 ? -1 : prizeId],isWxLogin);
		});
	}
	// 如果转动超过5圈，默认未中奖
	if (cycle >= 5 && index == dict["-1"]) {
		clearInterval(Time);
		delay(1000, function() {
			Index.result(dict[prizeId < -1 ? -1 : prizeId],isWxLogin);
		});
	}
	if (cycle == 1 && index == 1) {
		clearInterval(Time);
		Time = setInterval(function() {
			Index.run();
		}, speed / 2)
	}
	if (cycle == 2 && index == 1) {
		clearInterval(Time);
		Time = setInterval(function() {
			Index.run();
		}, speed)
	}
	index++;
	preIndex++;

	if (index > 8) {
		index = 1;
		cycle++;
	}
	if (preIndex > 8) {
		preIndex = 1;
	}
}

//获取更多铃铛
Index.getMoreLD = function() {
	forceLog(param("act_f"), "lottery-trybuy");
	Local.reqaObj(Index.GET_MORE_URL + "?act_f=" + param("act_f"), function(
			data) {
		// 获取到抽奖内容，填写到刮刮卡里边
		if (data.isLogin) {
			if(Index.debug)
				alert(JSON.stringify(data));
			if (data.code == 0) {
				Local.showToast("已用500书币成功兑换20铃铛");
				Index.addbell();
				forceLog(param("act_f"), "lottery-sucbuy");
			} else if (data.code == -2) {// 铃铛不足
				Index.result(10);
			} else {
				Local.showToast("出错啦，请稍后重试");
			}
		} else {
			Local.login();
		}
	}, [], function() {
		Local.showToast("网络不畅，请稍后再试试");
	}, 1);
}

//跳转检查登录
Index.checkAndGo = function(url){
	if(Index.isLogin){
		Local.go(url);
	}else{
		Local.login();
	}
}