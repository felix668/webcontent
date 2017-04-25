var Index = {};
Index.URL = "";
Index.CAN_PICK = "";
Index.PICK = "";
Index.CAN_LEFT_TODAY = "";
Index.LOTTERY_TODAY = "";
Index.PRIZELIST_TODAY = "";

function init() {
	Index.URL = server() + "lottery/index";
	Index.CAN_PICK = server() + "lottery/canPick";
	Index.PICK = server() + "lottery/pickPackage";

	Index.CAN_LEFT_TODAY = server() + "lottery/cardLeftToday";
	Index.LOTTERY_TODAY = server() + "lottery/indexscatchToday";
	
	Index.PRIZELIST_TODAY = server() + "lottery/getPrizeList";

	Index.fillPage();
	Index.pageLog();

	$(".close").on('click', function() {
		$('.zt-tiparea').hide();
		$(".mask_on").hide();
		$(".mask").hide();
	});
	$(".btn.btn0").on('click', function() {
		$('.zt-tiparea').hide();
		$(".mask_on").hide();
		$(".mask").hide();
	});
}

/**
 * 访问日志
 */
Index.pageLog = function() {
	Local.reqaObj(Index.URL + "?act_f=" + param("act_f"), function(data) {
		console.log(data);
	});
};
/**
 * 初始化页面
 */
Index.fillPage = function() {
	Local.reqaObj(Index.CAN_PICK, function(data) {
		console.log(data);
		if (data.isLogin && data.code == -1) {
			// 已经领取
			$(".step1 .btn1").addClass("btns");
			$(".step1 .btn1").html('<a href="javascript:void(0);">已领取</a>');
		}
	});
	Local.reqaObj(Index.CAN_LEFT_TODAY, function(data) {
		console.log(data);
		if (data.isLogin) {
			// 已经登陆
			$("#left").html(data.left);
			$(".openVIP").attr("href","javascript:Index.openVIP(true);");
		}
	});
	Local.reqaObj(Index.PRIZELIST_TODAY, function(data) {
		console.log(data);
		var html = '';
		for ( var i in data.data) {
			html += '<li>' + data.data[i] + '</li>';
		}
		$("#data_prized").html(html);
	});
};

/**
 * 领取书券
 */
Index.pick = function() {
	Local.reqaObj(Index.URL + "?act_f=202", function(data) {
		console.log(data);
	});
	Local.reqaObj(Index.PICK, function(data) {
		console.log(data);
		if (data.isLogin) {
			// 1:成功，-1：已领取，-2：没有领取资格
			if (data.code == 1) {
				Index.maskUp("picksuc");
				$(".step1 .btn1").html('<a href="javascript:void(0);">已领取</a>');
			} else if (data.code == -1) {
				Index.maskUp("picked");
			} else if (data.code == -2) {
				Index.maskUp("noright");
			}else{
				Index.maskUp("error");
			}
		} else {
			Local.login();
		}
	});
};
/**
 * 抽奖
 */
Index.doLottery = function() {
	Local.reqaObj(Index.URL + "?act_f=203", function(data) {
		console.log(data);
	});
	Local.reqaObj(Index.LOTTERY_TODAY, function(data) {
		console.log(data);
		if (data.isLogin) {
			// 中奖
			if (data.code == 0) {
				if (data.cardNum == 1) {
					Index.maskUpPrize("hitMore", data.prize, data.prizename);
				} else {
					Index.maskUpPrize("hit", data.prize, data.prizename);
				}
				$("#left").html(
						parseInt($("#left").html()) - 1 >= 0 ? parseInt($(
								"#left").html()) - 1 : 0);
			} else if (data.code == -101) {// 没有奖券
				Index.maskUp("noChance");
			} else if (data.code == -102) {// 奖券已经用完
				if (data.cardNum == 1) {
					Index.maskUp("oneChanceLeft");
				} else {
					Index.maskUp("noMoreChance");
				}
			} else {// 系统繁忙
				Index.maskUp("error");
			}
		} else {
			Local.login();
		}
	});
};

Index.maskUp = function(id) {
	$(".mask").show();
	$(".mask_on").show();
	$("#" + id).show();
	ztTip();
}
/**
 * 中奖弹窗
 */
Index.maskUpPrize = function(id, prize, prizeName) {
	$("#" + id + " h4").html(Index.levelDesc(prize) + "恭喜您！抽中了" + Index.levelPrize(prize) + "奖");
	$("#" + id + " h5").html(prizeName);
	$(".mask").show();
	$(".mask_on").show();
	$("#" + id).show();
	ztTip();
}
/**
 * 奖品等级
 */
Index.levelPrize = function(prize) {
	var level = ""
	switch (prize) {
	case 1:
		level = "一等";
		break;
	case 2:
		level = "二等";
		break;
	case 3:
		level = "三等";
		break;
	case 4:
		level = "四等";
		break;
	case 5:
		level = "五等";
		break;
	case 6:
		level = "阳光普照";
		break;

	default:
		break;
	}
	return level;
}

Index.levelDesc = function(prize) {
	var level = ""
	switch (prize) {
	case 1:
		level = "哇，手太壮了，";
		break;
	case 2:
		level = "福临门啦！";
		break;
	case 3:
		level = "大财神驾到，";
		break;
	case 4:
		level = "萌萌哒，";
		break;
	case 5:
		level = "";
		break;
	case 6:
		level = "";
		break;

	default:
		break;
	}
	return level;
}

Index.openVIP = function(isLogin) {
	Local.reqaObj(Index.URL + "?act_f=201", function(data) {
		console.log(data);
	});//点击开通日志
	Local.openVip(isLogin);
}

/**
 * 登陆信息相关
 */
Index.login = function() {
	try {
		Local.login();
	} catch (e) {

	}
}
