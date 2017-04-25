var Index = {};
Index.URL = '';
Index.INIT_URL = '';
Index.LOTTERY_URL = '';

function init() {
	BasePage.init();
	Index.URL = server() + 'sum';
	Index.INIT_URL = server() + 'pkg7/init';
	Index.LOTTERY_URL = server() + 'pkg7/pick';
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
	for (var t = 0; t < times; t++) {
		delay(milseconds * t, function() {
			Index.fillPage();
		});
	}
}

Index.fillPage = function() {
	Login
			.reqaObj(
					Index.INIT_URL + "?act_f=" + param("act_f"),
					function(data) {
						if(data.prizeLeft <= 0){
							$("#pick").attr("cld", "qiangwan");
							scls("pick", "btn bg3");
							ih("pick", "体验卡已被抢光");
							ahfc("pick",
									'Index.showMask("领取失败", "晚来一步，体验卡已被抢光")');
							return;
						}
						if (data.isLogin) {
							if(data.login_wx){
								ahfc("pick",
										'Index.showMask("无法参与活动", "微信帐号不能参与活动，切换QQ 登录，即可参与活动")');
								return;
							}
							if (data.isVip && data.open_type
									&& data.open_type != 101) {// 体验卡开通视为非包月用户
								if (data.kt) {// 微信用户不能抢红包
									if (data.ht) {
										ih("pick","已领取");
										scls("pick", "btn bg3");
										ahfc("pick", "void(0)");
									} else {
										$("#pick").attr("cld", "ktcg");
										scls("pick", "btn bg2");
										ih("pick", "开通成功 立即领取");
										ahfc("pick", "Index.startScratch()");
									}
								} else {
									$("#pick").attr("cld", "pick");
									ahfc("pick", "Index.wdOpen()");
									ahfc("wd_open", "Index.openVIP(true)");
								}
							} else {
								$("#pick").attr("cld", "pick");
								ahfc("pick", "Index.wdOpen()");
								ahfc("wd_open", "Index.openVIP(true)");
							}
						} else {
							$("#pick").attr("cld", "pick");
							ahfc("pick", "Index.wdOpen()");
							ahfc("wd_open", "Index.openVIP(false)");
						}

					}, [], function() {
						JSToast.showToast("网络不畅，请稍后再试试");
					}, 1);
}


Index.wdOpen = function() {
	$(".mask").show();
	$("#kt").show();
}

Index.showMask = function(title, content) {
	$("#n_result").html(title);
	$("#n_tip").html(content);
	$(".mask").show();
	$("#notice").show();
};


Index.openVIP = function(isLogin) {
	Login.checkAndGo(server() + "lottery/openVIPCP?home=" + getUrl());
}

Index.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || location.href.match(/[\w]+\.html/)[0];
	Login.reqaObj(Index.URL + "?act_f=" + act_from + "&act_b=" + act_by,
			function() {
			}, [],  function() {
				JSToast.showToast("网络不畅，请稍后再试试");
			}, 1);
}

Index.startScratch = function() {
	// 在这里发送刮奖请求
	Login.reqaObj(Index.LOTTERY_URL + "?act_f=" + param("act_f"),
			function(data) {
				console.log(data);
				// 获取到抽奖内容，填写到刮刮卡里边
				var msg = "系统不太给力，请重试一下";
				if (data.code == '0') {
					Index.showMask("领取成功", "QQ号登录腾讯视频即刻享受好莱坞大片哦")
					$("#pick").attr("cld", "");
					ih("pick","已领取");
					scls("pick", "btn bg3");
					ahfc("pick", "void(0)");
					return;
				} else if (data.code == '-1') {
					Index.showMask("领取失败 ",
							"晚来一步，体验卡已被抢光");
					$("#pick").attr("cld", "");
					scls("pick", "btn bg3");
					ahfc("pick", "void(0)");
					return;
				}else if(data.code == '-100'){
					Index.showMask("领取失败 ", "非常抱歉，无法连接网络，请稍后再来领取");
					$("#pick").attr("cld", "");
					scls("pick", "btn bg3");
					ahfc("pick", "void(0)");
					return;
				}
				Index.showMask("领取失败 ", "非常抱歉，无法连接网络，请稍后再来领取");
			}, [], function() {
			}, 1);
};
