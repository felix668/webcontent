var Index = {};
Index.URL = '';
Index.INIT_URL = '';
Index.PICK_URL = '';

function init() {
	Index.URL = server() + 'sum';
	Index.INIT_URL = server() + 'pkg4/cardsLeft';
	Index.PICK_URL = server() + 'pkg4/pick';
	Index.LOTTERY_URL = server() + 'pkg4/doLottery';
	Index.forceLog(param("act_f") || 30010);
	Index.fillPage();

	$(".closebtn").click(function() {
		$(".mask").hide();
	});
	$(".knowbtn").click(function() {
		$(".mask").hide();
	});

	$(".cl_sum").click(function() {
		Index.forceLog(param("act_f"), $(this).attr("cld")); // 1开头表示PV、UV；2开头表示点击；3开头表示未知
	});
}

//Index.fillPageWithTry = function(times, milseconds) {
//	// PV,UV
//	Index.forceLog(param("act_f") || 30010);
//	ZBook.bindActiveByClassName("cl_sum");
//	for (var t = 0; t < times; t++) {
//		delay(milseconds * t, function() {
//			Index.fillPage();
//		});
//	}
//}
Index.fillPage = function() {
	Local.reqaObj(Index.INIT_URL + "?act_f=" + param("act_f") , function(data) {
		if (data.left > 0) {
			$(".giftinfo a").attr("href","javascript:void(0);");
			$(".giftinfo a span").html("已领取");
			$(".giftinfo a").addClass("geted");
			$(".nolottery").hide();
			$(".haslottery span b").html(data.left)
			$(".haslottery").show();
		}else if(data.used > 0){
			$(".giftinfo a").attr("href","javascript:void(0);");
			$(".giftinfo a span").html("已领取");
			$(".giftinfo a").addClass("geted");
			$(".nolottery").hide();
			$("#usedAll").show();
		}
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
}

Index.pick = function() {
	Local.reqaObj(Index.PICK_URL + "?act_f=" + param("act_f") , function(data) {
		if (data.isLogin) {
			if (data.code == 1) {
				Index.showMask("mask2");
				$(".giftinfo a").attr("href","javascript:void(0);");
				$(".giftinfo a span").html("已领取");
				$(".giftinfo a").addClass("geted");
				Index.fillPage();
			} else if (data.code == -1) {
				Index.showMask("mask1", "您已领取了礼包</br>敬请关注下次活动");
				$(".giftinfo a").attr("href","javascript:void(0);");
				$(".giftinfo a span").html("已领取");
				$(".giftinfo a").addClass("geted");
			} else if (data.code == -4) {
				Index.showMask("mask1", "sorry，本活动您不能参加，敬请期待下次活动");
			} else if (data.code == -2) {
				Index.showMask("mask4");
			} else if (data.code == -8) {
				Index.login();
			} else if (data.code == -16) {
				Index.showMask("mask1", "活动已结束</br>敬请关注下次活动");
			} else {
				Index.showMask("mask1", "非常抱歉，无法连接网络</br>请稍后再来领取");
			}
		} else {
			Index.login();
		}
	}, [], function() {
		JSToast.showToast("网络不畅，请稍后再试试");
	}, 1);
}

Index.openVIP = function(isLogin) {
	Local.openVip(isLogin);
}

Index.showMask = function(maskId, msg) {
	if (msg)
		$("#" + maskId + " .tiparea p").html(msg);
	ss(maskId, 'display', '-webkit-box');
};

/**
 * 登陆信息相关
 */
Index.login = function() {
	try {
		Local.login();
	} catch (e) {

	}
}

Index.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || "NOID";
	Local.reqaObj(Index.URL + "?act_f=" + act_from + "&act_b=" + act_by,
			function() {
			}, [], function() {
			}, 1);
}

var Time, cycle, speed = 300, index = 1, preIndex = 0, dict = {
		"1" : 1,
		"2" : 6,
		"3" : 3,
		"4" : 5,
		"5" : 8,
		"6" : 7,
		"7" : 2,
		"-1" : 4
	}, prizeId = 0, prizeName;

Index.startRun = function() {
	prizeId = -1;
	prizeName = "很遗憾，您没有中奖！";
	clearInterval(Time);
	cycle = 0;
	Time = setInterval(function() {
		Index.run();
	}, speed);
}

Index.run = function() {
	$(".gift" + preIndex).removeClass("act");
	$(".gift" + index).addClass("act");
	if (cycle >= 2 && index == dict[prizeId]) {
		clearInterval(Time);
		$(".lottery").addClass("click");
		delay(1000, function() {
			Index.showReward(prizeId, prizeName);
		});
	}
	// 如果转动超过5圈，默认未中奖
	if (cycle >= 5 && index == dict["-1"]) {
		clearInterval(Time);
		delay(1000, function() {
			Index.showReward(prizeId, prizeName);
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

Index.showReward = function(prizeId, prizeName) {
	$("#mask6 img").attr("src", "images/gift" + dict[prizeId] + ".png");
	if (prizeId > 0) {
		$(".cong").html("恭喜您获得" + prizeName);
	} else {
		$(".cong").html(prizeName);
	}
	ss("mask6", 'display', '-webkit-box');
}

Index.startMockScratch = function(id,name) {
	if ($(".lottery").hasClass("click")
			&& parseInt($(".haslottery span b").html()) > 0) {
		$(".lottery").removeClass("click");
		var left = parseInt($(".haslottery span b").html());
		$(".haslottery span b").html(left - 1);
		console.log(left);
		if (left == 1) {
			$("#usedAll").show();
			$(".haslottery").hide();
		}
		Index.startRun();
		prizeId = id;
		prizeName = name;
	}
}

Index.startScratch = function() {
	if ($(".lottery").hasClass("click")
			&& parseInt($(".haslottery span b").html()) > 0) {
		$(".lottery").removeClass("click");
		var left = parseInt($(".haslottery span b").html());
		$(".haslottery span b").html(left - 1);
		console.log(left);
		if (left == 1) {
			$("#usedAll").show();
			$(".haslottery").hide();
		}
		Index.startRun();
		// 在这里发送刮奖请求
		Local.reqaObj(Index.LOTTERY_URL + "?act_f=" + param("act_f") , function(data) {
			console.log(data);
			// 获取到抽奖内容，填写到刮刮卡里边
			var msg = "系统不太给力，请重试一下";
			if (data.code == "0") {
				prizeName = data.prizename;
				prizeId = data.prize;
				return;
			} else if (data.code == '-1') {
				prizeName = "很遗憾，您没有中奖！";
				prizeId = data.prize;
				return;
			} else if (data.code == '-2') {
				msg = "您的刮刮卡已经过期了";
			} else if (data.code == '-3' || data.code == '103') {
				msg = "抽奖机快摇爆了，请您稍后再试";
			} else if (data.code == '-100') {
				msg = "您的登录状态已失效，请重新登录";
			} else if (data.code == '-101') {
				msg = "您还没有刮刮卡";
			} else if (data.code == '-102') {
				msg = "您的刮刮卡已经用光了...";
			}
			Index.showReward(-1, msg);
		}, [], function() {
		}, 1);

	}
};