var Index = {};

function init(){
	console.log("init...");
	Index.fillPage();
}

Index.fillPage = function(){
	forceLog(param("act_f"));
	Local.reqaObj(server() + "pkgc3/init", function(data) {
		//处理初始化数据
		console.log(data);
		var htmlToday = template('today_t', data);
		$('#today').html(htmlToday);
		Index.initCountdown(data.left);
		if(data.tm1){
			var htmlTommorow1 = template('today_tm1', data);
			$('#tomorrow').append(htmlTommorow1);
		}
		if(data.tm2){
			var htmlTommorow2 = template('today_tm2', data);
			$('#tomorrow').append(htmlTommorow2);
		}
		if(data.y){
			var htmlYesterday = template('yesterday_tm', data);
			$('#yesterday').html(htmlYesterday);
		}
		
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

Index.afterPick = function(){
	$("#btn").removeAttr("onclick");
	$("#btn").addClass("nopoint");
	$("#btn").text("已抽过奖");
}

Index.pick = function(dom, day, prize) {
	forceLog(param("act_f"), "pick");
	if($(dom).hasClass("clicked")) return;
	$(dom).addClass("clicked");
	Local.reqaObj(server() + "pkgc3/pick?d=" + day, function(data) {
		// 处理初始化数据
		console.log(data);
		if (data.code == 1) {
			Index.result(prize);
			Index.afterPick();
		} else if (data.code == 2) {// 未中奖发放安慰奖
			nochance(2);
			Index.afterPick();
		} else if (data.code == -1) {// 今日已抽奖
			nochance(4);
		} else if (data.code == -2) {// 未登录
			Local.login();
		} else if (data.code == -4) {// 昨日抽奖已过期
			nochance(3);
		} else if (data.code == -8) {// 抽奖已结束
			nochance(5);
		} else {// 未中奖
			nochance(1);
			Index.afterPick();
		}
		$(dom).removeClass("clicked");
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
		$(dom).removeClass("clicked");
	}, 1);
}



//弹窗结果
Index.result=function (ids) {
	var restaraunts=[["images/bimg1.jpg","100元京东卡"],["images/bimg2.jpg","小米耳机"],["images/bimg3.jpg","88Q币"],["images/bimg4.jpg","小米移动电源"],["images/bimg5.jpg","乐扣乐扣保温杯"],["images/bimg6.jpg","小米手环"],["images/bimg7.jpg","金士顿U盘"],["images/bimg8.jpg","小米智能秤"],["images/bimg9.jpg","公仔"],["images/bimg10.jpg","小米插线板"],["images/bimg11.jpg","小米路由器"],["images/bimg12.jpg","tomic马克杯"]];
	var Imgsrc=$(".imgbox img");
	Index.maskIn();
	Imgsrc.attr("src",restaraunts[ids-1][0]);
	$(".tankuang_box h4").text("恭喜获得"+restaraunts[ids-1][1]);
	$(".btn_go").attr("href","javascript:Local.go('http://iyuedu.qq.com/event/actb2/lottery/contact.html');");
	/*$(".btn_zdl").addClass("btn_go");
	$(".btn_go").removeClass("btn_zdl");
	$(".btn_go").live("tap", function(){
	  alert(11);	
	});*/
}
//其他情况
function nochance(noprize){
	              $(".show_mask").css("display","-webkit-box");
		          $(".tankuang_box").css("display","block");
                  $(".btn_close").hide();
			      $(".tankuang_box .imgbox").hide();
			      $(".tankuang_box h4").addClass("mt33");
			      $(".btn_go").addClass("btn_zdl");
			      if(noprize==1){
				       $(".tankuang_box h4").text("真遗憾，没有抽中");
			           $(".tankuang_box p").text ("三次不中奖，有机会获得安慰奖20书券");
					   $(".btn_zdl").text("我知道了");
					   Index.closetk(".btn_zdl");
			      }
			      if(noprize==2){
				       $(".tankuang_box h4").text("真遗憾，没有抽中");
			           $(".tankuang_box p").text ("不要气馁，送你20书券，书券已发到您的账户");
					   $(".btn_zdl").text("我知道了");
					   Index.closetk(".btn_zdl");
			      }
			      if(noprize==3){
				       $(".tankuang_box h4").text("活动已过期");
			           $(".tankuang_box p").text ("点击刷新按钮，开始新的抽奖活动");
					   $(".btn_zdl").addClass("btn_reload");
					   $(".btn_reload").text("刷新");
					   Index.refres(".btn_reload");
			      }
				  if(noprize==4){
				       $(".tankuang_box h4").text("今天已经抽过奖啦");
			           $(".tankuang_box p").text ("同一设备，账号每日限抽奖一次");
					   $(".btn_zdl").text("我知道了");
					   Index.closetk(".btn_zdl");
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
Index.refres=function(btn){
   $(btn).on("tap",function(){
       window.location.reload();
		//alert(22);
   });
}
