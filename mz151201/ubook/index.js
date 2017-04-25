var Index = {};
Index.winners = [{
			uin : '****12332',
			prize : '30天包月会员'
		}, {
			uin : '****4564',
			prize : '30天包月会员'
		}, {
			uin : '****4567',
			prize : '10个月包月会员'
		}, {
			uin : '****32134',
			prize : '30天包月会员'
		}, {
			uin : '****6678',
			prize : '10个月包月会员'
		}, {
			uin : '****7675',
			prize : '30天包月会员'
		}, {
			uin : '****9865',
			prize : '30天包月会员'
		}, {
			uin : '****96433',
			prize : '10个月包月会员'
		}, {
			uin : '****1324',
			prize : '10个月包月会员'
		}, {
			uin : '****6543',
			prize : '30天包月会员'
		}, {
			uin : '****5643',
			prize : '10个月包月会员'
		}];
Index.shuffle = function(arr) {
	for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
	return arr;

}
function init() {
	BasePage.init();
	ih('winners',winners());
	Login.reqaObj(server() + 'mz151201/index?imei=' + Index.getImei(),
			function(data) {
				ih('bookList',bookList(data));
				if (data.isDone) {
					$(".btn_cj").addClass('btn_ylg');
					$(".cjbtn_txt").html("已抽奖");
					$(".cjbtn_txt").css({
								"color" : "#f5f2e7"
							});
				} else {
					$(".cjbtn_txt").on("touchstart", function() {
						if ($(".btn_cj").hasClass('btn_ylg')) {
							return false;
						}
						if(nl(Index.getImei())){
							nochance(-101);
							return false;
						}
						if (!data.isLogin) {
							Login.login();
							return false;
						}
						Login.postaForm(server() + 'mz151201/doLottery?imei='
										+ Index.getImei(), {}, function(data) {
									if (!nl(data)) {
										if (data.ret == 0) {
											zhuanpan(data.userLottery.id);
										} else {
											nochance(data.ret);
										}
									} else {
										nochance(-1000);
									}

								});
					});
				}
			});
			forceLog('151201','view');

	// 关闭弹框
	$(".btn_zdl").on("touchstart", function(ev) {
				tankclose();
				$(".btn_zdl").on("touchend", function(ev) {
							ev.preventDefault();
						});
			})
	$(".btn_close").on("touchstart", function(ev) {
				tankclose();
				$(".btn_close").on("touchend", function(ev) {
							ev.preventDefault();
						});
			})
	// 按钮切换函数
	$(".btn_zdl").on("touchstart", function() {
				$(this).addClass('active');
			})
	$(".btn_zdl").on("touchend", function(ev) {
				$(this).removeClass('active');
				ev.preventDefault();
			})
	$(".cjbtn_txt").on("touchstart", function() {
				$(".btn_cj").addClass('active');
			})
	$(".cjbtn_txt").on("touchend", function(ev) {
				$(".btn_cj").removeClass('active');
				ev.preventDefault();
			})

};


Index.getImei = function() {
	if (!nl(window.MzJavascriptInterface)) {
		return window.MzJavascriptInterface.getIMEI();
	} else if (isTest()) {
		return nl(param('imei')) ? '' : param('imei');
	} else{
		return '';
	}

}

Index.goToIntro=function(bid){
	if(nl(Index.getImei())){
		nochance(-101);
		return false;
	}
	if (isTest()) {
		window.location.href= 'http://dev1.3g.book.qq.com/book_res/wr/mz/intro.html?bid='+bid+'&g_f='+param('g_f');
	}else{
		window.location.href=  'http://pin.qq.com/mz/intro.html?bid='+bid+'&g_f='+param('g_f');
	}
	return;
}

// 旋转转盘 ids: 奖品的id
function zhuanpan(ids) {
	var Imgsrc = $(".tankuang_box img");
	var restaraunts = [["images/shuquan.png", "600书券！"],
			["images/baoyue.png", "30天包月会员"], ["images/shuquan.png", "600书券！"],
			["images/baoyue.png", "10个月包月会员"],
			["images/shuquan.png", "600书券！"], ["images/baoyue.png", "30天包月会员"]];
	var angles = (ids - 1) * 60 + 1800;
	$("#zhuanpan").css('-webkit-transform', 'rotate(' + angles + 'deg)');
	$("#zhuanpan").on('webkitTransitionEnd', function() {
				$(".show_mask").css("display", "-webkit-box");
				$(".tankuang_box").css("display", "block");
				if (ids == 1 || ids == 3 || ids == 5) {
					Imgsrc.attr("src", restaraunts[ids - 1][0]);
					$(".tankuang_box h4")
							.text("恭喜获得" + restaraunts[ids - 1][1]);
					$(".tankuang_box p").html("请到“我的账户”查看，有效期7天，<br>请尽快使用");
				} else if (ids == 2 || ids == 6) {
					Imgsrc.attr("src", restaraunts[ids - 1][0]);
					$(".tankuang_box h4")
							.text("恭喜获得" + restaraunts[ids - 1][1]);
					$(".tankuang_box p").text("会员特权即时生效，马上体验吧！");
				} else if (ids == 4) {
					Imgsrc.attr("src", restaraunts[ids - 1][0]);
					$(".tankuang_box h4")
							.text("恭喜获得" + restaraunts[ids - 1][1]);
					$(".tankuang_box p").text("会员特权即时生效，马上体验吧！");
				}
				$(".btn_cj").addClass('btn_ylg');
				$(".cjbtn_txt").html("已抽奖");
				$(".cjbtn_txt").css({
							"color" : "#f5f2e7"
						});
			});
}
// 其他情况
function nochance(ret) {
	$(".show_mask").css("display", "-webkit-box");
	$(".tankuang_box").css("display", "block");
	$(".btn_close").hide();
	$(".tankuang_box img").hide();
	$(".tankuang_box h4").addClass("mt33");
	$(".btn_zdl").text("知道啦");
	if (ret == -103 || ret == -102) {
		$(".btn_cj").addClass('btn_ylg');
		$(".cjbtn_txt").html("已抽奖");
		$(".cjbtn_txt").css({
					"color" : "#f5f2e7"
				});
		$(".tankuang_box h4").text("已经抽过奖啦");
		$(".tankuang_box p").text("活动期间同一设备、账号限抽奖一次");
	} else if (ret == -101) {
		$(".tankuang_box h4").html("非常抱歉");
		$(".tankuang_box p").text("本次活动仅限最新版魅族浏览器用户参与");
	}else {
		$(".tankuang_box h4").html("非常抱歉");
		$(".tankuang_box p").text("网络繁忙请稍后再试");
	}
}

function tankclose() {
	$(".show_mask").hide();
	$(".tankuang_box").hide();
}
