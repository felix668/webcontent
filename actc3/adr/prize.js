var Index = {};

function init(){
	Index.fillPage();
}

Index.fillPage = function(){
	forceLog(param("act_f"));
	Local.reqaObj(server() + "pkgc3/rank", function(data) {
		//处理初始化数据
		console.log(data);
		var content = template('content_t', data);
		$('#content').append(content);
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}

//开始倒计时
Index.initCountdown = function (timeRemaining) {
	var endTime = new Date().getTime() + timeRemaining;
	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour *24
	var timer;
	
	(function count() {
		var distance = endTime - (new Date().getTime());
		
		if (distance < 0) {
			window.clearInterval(timer);
		    $("#hl").text(0);
		    $("#ml").text(0);
			return;
		}
		
		var days = Math.floor(distance / _day);
	    var hours = Math.floor((distance % _day) / _hour );
	    var minutes = Math.floor((distance % _hour) / _minute );
	    var seconds = Math.floor((distance % _minute) / _second );

	    $("#hl").text(hours);
	    $("#ml").text(minutes);
	    
	    timer = window.setTimeout(count, 1000); // ms
    })();
};

Index.pick = function(day, prize) {
	forceLog(param("act_f"), "pick");
	Local.reqaObj(server() + "pkgc3/pick", function(data) {
		// 处理初始化数据
		console.log(data);
		if (data.code == 1) {
			Index.result(prize);
		} else if (data.code = 2) {// 未中奖发放安慰奖
			nochance(2);
		} else if (data.code = -1) {// 今日已抽奖
			nochance(4);
		} else if (data.code = -2) {// 未登录
			Local.login();
		} else if (data.code = -4) {// 昨日抽奖已过期
			nochance(3);
		} else if (data.code = -8) {// 抽奖已结束
			nochance(5);
		} else {// 未中奖
			nochance(1);
		}
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
}



//弹窗结果
Index.result=function (ids) {
	var restaraunts=[["images/bimg1.jpg","1000元京东卡"],["images/bimg2.jpg","小米耳机"],["images/bimg3.jpg","88Q币"],["images/bimg4.jpg","小米移动电源"],["images/bimg5.jpg","乐扣乐扣保温杯"],["images/bimg6.jpg","小米手环"],["images/bimg7.jpg","金士顿U盘"],["images/bimg8.jpg","小米智能秤"],["images/bimg9.jpg","公仔"],["images/bimg10.jpg","小米插线板"],["images/bimg11.jpg","小米路由器"],["images/bimg12.jpg","tomic马克杯"]];
	var Imgsrc=$(".imgbox img");
	Index.maskIn();
	Imgsrc.attr("src",restaraunts[ids-1][0]);
	$(".tankuang_box h4").text("恭喜获得"+restaraunts[ids-1][1]);
	$(".btn_go").removeClass("btn_zdl");
}
//其他情况
function nochance(noprize){
	              $(".show_mask").css("display","-webkit-box");
		          $(".tankuang_box").css("display","block");
                  $(".btn_close").hide();
			      $(".tankuang_box .imgbox").hide();
			      $(".tankuang_box h4").addClass("mt33");
			      $(".btn_zdl").removeClass("btn_go");
			      if(noprize==1){
				       $(".tankuang_box h4").text("真遗憾，没有抽中");
			           $(".tankuang_box p").text ("活动期间每日都可抽奖，明日再来");
					   $(".btn_zdl").text("我知道了");
			      }
			      if(noprize==2){
				       $(".tankuang_box h4").text("真遗憾，没有抽中");
			           $(".tankuang_box p").text ("不要气馁，送你20书券，书券已发到您的账户");
					   $(".btn_zdl").text("我知道了");
			      }
			      if(noprize==3){
				       $(".tankuang_box h4").text("活动已过期");
			           $(".tankuang_box p").text ("点击刷新按钮，开始新的抽奖活动");
					   $(".btn_zdl").addClass("btn_reload");
					   $(".btn_reload").text("刷新");
			      }
				  if(noprize==4){
				       $(".tankuang_box h4").text("今天已经抽过奖啦");
			           $(".tankuang_box p").text ("同一设备，账号每日限抽奖一次");
					   $(".btn_zdl").text("我知道了");
			      }   		       
}

//按钮点击态
Index.btns = function (obj) {
    $(obj).on("touchstart", function () {
        $(this).addClass("active");
    });
    $(obj).on("touchend", function () {
        $(this).removeClass("active");
    })
};
Index.btns(".btn_draw");
Index.btns(".btn_zdl");
Index.btns(".btn_go");
//弹窗隐藏
Index.maskOut = function () {
    $(".show_mask").hide();
    $(".tankuang_box").hide();
};
//弹窗显示
Index.maskIn = function () {
    $(".show_mask").css("display", "-webkit-box");
    $(".tankuang_box").show();
};
//弹窗关闭
Index.closetk= function (btn){
    $(btn).on("touchend",function(ev){
	    ev.preventDefault();
		Index.maskOut();
	});
};
Index.closetk(".btn_zdl");
Index.closetk(".btn_close");
//刷新当前页面
$(".btn_reload").live("tap",function(){
	window.location.reload();
    console.log(11);
});
