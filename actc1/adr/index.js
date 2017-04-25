var Index = {};
Index.debug = false;

function init() {
	Index.fillPage();
}

Index.fillPage = function () {
	
	forceLog(param("act_f"));
	Local.reqaObj(server() + "pkgc1/init", function (data) {
		alert(JSON.stringify(data));
		if (data.isLogin !== undefined) {
			// 初始化倒计时
			Index.initCountdown(data.timeRemaining);
			
			// 加载数据
			$("#desc").text(data.desc);
			var price = data.price / 100;
			$("#price").text(price.toFixed(2).replace(/\.?0+$/, "")); // 保留两位小数并去掉末尾的0
			
			//设置按钮状态
			var btn = $("#button");
			if (data.isExpired) { // 已结束
				btn.addClass("nopoint");
			} else if (data.isBought) { // 已购买
				btn.addClass("nopoint").text("已成功预订");
			} else { // 活动期
				btn.on("click", Index.buy);
			}
		}
	}, [], function () {
		Local.showToast("网络异常，请稍候重试");
	}, 1);
};

// 开始倒计时
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
			$("#dl").text(0);
		    $("#hl").text(0);
		    $("#ml").text(0);
		    $("#sl").text(0);
			return;
		}
		
		var days = Math.floor(distance / _day);
	    var hours = Math.floor((distance % _day) / _hour );
	    var minutes = Math.floor((distance % _hour) / _minute );
	    var seconds = Math.floor((distance % _minute) / _second );

	    $("#dl").text(days);
	    $("#hl").text(hours);
	    $("#ml").text(minutes);
	    $("#sl").text(seconds);
	    
	    timer = window.setTimeout(count, 1000); // ms
    })();
};

// 购买
Index.buy = function (event) {
	var btn = $("#button");
	if (btn.hasClass("loading")) { // 重复请求判断
		return;
	} else {
		btn.addClass("loading");
	}
	
	var bid = 779720;
	Local.reqaObj("http://allreader.3g.qq.com/common/dobuybook?bid=" + bid, function (data) {
		if (data.code == 0) {
			openDialog("succeeded");
			forceLog(param("act_f"), "bought");
			Local.addToShelf({
				bid : bid,
				title: "时间的朋友",
				author:"罗振宇"
			}, 0);
			$("#button").off("click").addClass("nopoint").text("已成功预订");
		} else if (data.code == -6) {
			Local.showToast("余额不足，请先充值");
			Local.doCharge("act", true);
		} else if (data.code == -2) { // 未登录
			Local.login();
		} else if (data.code == 1) { // 已购买过
			openDialog("already");
		} else {
			Local.showToast("出错啦，请稍候重试");
		}
		btn.removeClass("loading");
	}, [], function() {
		Local.showToast("网络异常，请稍候重试");
		btn.removeClass("loading");
	}, 1);
	
	forceLog(param("act_f"), "buy");
};

//显示指定弹框
function openDialog(id) {
	$(".show_mask").css("display", "-webkit-box");
	$("#" + id).css("display", "block");
}


// 关闭弹框
function closeDialog() {
	$(".show_mask").hide();
	$(".tankuang_box").hide();
}

$(".btn_zdl").on("touchend",function(ev){
	ev.preventDefault();
    $(".show_mask").hide();
	$(".tankuang_box").hide();
});
// 按钮切换
$("#button").on("touchstart", function () {
	var target = $(this);
	if (!target.hasClass("nopoint")) {
		target.addClass("active");
	}
});

$("#button").on("touchend", function () {
	$(this).removeClass("active");
});