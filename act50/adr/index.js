var Index = {};
Index.URL = '';
Index.INIT_URL = '';
Index.LOTTERY_URL = '';

function init() {
	Index.URL = server() + 'lottery/index';
	Index.INIT_URL = server() + 'qb/init';
	Index.LOTTERY_URL = server() + 'lottery/indexscatch';
	Index.fillPageWithTry(3, 500);

	$(".closebtn").click(function() {
		$(".mask").hide();
	});
	$(".knowbtn").click(function() {
		$(".mask").hide();
	});

	$(".cl_sum").click(function() {
		if(!!$(this).attr("cld"))
			Index.forceLog(param("act_f"), $(this).attr("cld")); // 1开头表示PV、UV；2开头表示点击；3开头表示未知
	});
}

Index.fillPageWithTry = function(times, milseconds) {
	// PV,UV
	Index.forceLog(param("act_f") || 30010);
	ZBook.bindActiveByClassName("cl_sum");
	for (var t = 0; t < times; t++) {
		delay(milseconds * t, function() {
			Index.fillPage();
		});
	}
}

Index.fillPage = function() {
	Local
			.reqaObj(
					Index.INIT_URL + "?act_f=" + param("act_f"),
					function(data) {
						console.log(data);
						if (data.isLogin) {
							if(data.login_wx){
								ih("pick", "抢Q币红包");
								ahfc("pick",
										'Index.showMask("抢Q币失败", "续费、体验卡开通、短信开通、微信用户不能参加")');
								return;
							}
							if (data.isVip && data.open_type
									&& data.open_type != 101) {// 体验卡开通视为非包月用户
								if (data.kt) {// 微信用户不能抢红包
									if (data.ht) {
										scls("pick", "tp3");
										ih("pick", "已成功抢到Q币");
										ahfc("pick", "void(0)");
									} else {
										if (data.prizeLeft > 0) {
											$("#pick").attr("cld", "ktcg");
											scls("pick", "tp2");
											ih("pick", "开通成功，点我抢Q币");
											ahfc("pick", "Index.startScratch()");
										} else {
											$("#pick").attr("cld", "qiangwan");
											scls("pick", "tp3");
											ih("pick", "Q币已被抢完");
											ahfc("pick",
													'Index.showMask("好可惜，没有抢到Q币 ", "越接近8:00，12:00，21:00， </br>抢到的机率越高哦")');
										}
									}
								} else {
									ih("pick", "抢Q币红包");
									ahfc("pick",
											'Index.showMask("抢Q币失败", "续费、体验卡开通、短信开通、微信用户不能参加")');
								}
							} else {
								ahfc("pick", "Index.wdOpen()");
								ahfc("wd_open", "Index.openVIP(true)");
							}
						} else {
							ih("pick", "抢Q币红包");
							ahfc("pick", "Index.openVIP(false)");
						}

					}, [], function() {
						JSToast.showToast("网络不畅，请稍后再试试");
					}, 1);
}

Index.openVIP = function(isLogin) {
	Local.openVip(isLogin);
}

Index.wdOpen = function() {
	$(".mask").hide();
	ss("open", 'display', '-webkit-box');
}

Index.picSuc = function() {
	$(".mask").hide();
	ss("suc", 'display', '-webkit-box');
}

Index.showMask = function(title, content) {
	$(".mask").hide();
	ih("title", title);
	ih("content", content);
	ss("mask", 'display', '-webkit-box');
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
			}, [],  function() {
				JSToast.showToast("网络不畅，请稍后再试试");
			}, 1);
}

Index.startScratch = function() {
	// 在这里发送刮奖请求
	Local.reqaObj(Index.LOTTERY_URL + "?act_f=" + param("act_f"),
			function(data) {
				console.log(data);
				// 获取到抽奖内容，填写到刮刮卡里边
				var msg = "系统不太给力，请重试一下";
				if (data.code == '0') {
					prizeName = data.prizename;
					prizeId = data.prize;
					Index.picSuc();
					scls("pick", "tp3");
					ih("pick", "已成功抢到Q币");
					ahfc("pick", "void(0)");
					return;
				} else if (data.code == '-1') {
					prizeName = "很遗憾，您没有中奖！";
					prizeId = data.prize;
					Index.showMask("好可惜，没有抢到Q币 ",
							"越接近8:00，12:00，21:00， </br>抢到的机率越高哦");
					scls("pick", "tp3");
					ih("pick", "Q币已被抢完");
					ahfc("pick", "void(0)");
					return;
				} else if (data.code == '-2' || data.code == '-4') {
					msg = "您的刮刮卡已经过期了";
				} else if (data.code == '-3' || data.code == '-5'
						|| data.code == '103') {
					msg = "抽奖机快摇爆了，请您稍后再试";
				} else if (data.code == '-104') {
					msg = "您的登录状态已失效，请重新登录";
					Index.showMask("好可惜，没有抢到Q币 ", msg);
					return;
				} else if (data.code == '-101') {
					msg = "您还没有刮刮卡";
				} else if (data.code == '-102') {
					msg = "您的刮刮卡已经用光了...";
				}
				Index.showMask("好可惜，没有抢到Q币 ",
						"越接近8:00，12:00，21:00， </br>抢到的机率越高哦");
			}, [], function() {
			}, 1);
};

Index.openDetail = function(bid) {
	var url = 'bookDetail.html?bid=' + bid;
	var detailobj = {};
	detailobj.pagecode = "1001";
	detailobj.url = url;
	detailobj.bid = bid;
	detailobj.origin = param("origin") || "";
	JSContent.openDetail(json(detailobj))
	Index.forceLog(param("act_f"), "bk_"+bid);
};