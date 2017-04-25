var Index = {};
Index.URL = '';
Index.SCRATCH_URL = '';
Index.CARD_LEFT = '';
Index.PRIZELIST_TODAY = '';
function init() {
    Index.URL = server() + 'lottery/index';
    Index.SCRATCH_URL = server() + 'lottery/indexscatch';
    Index.CARD_LEFT = server() + "lottery/cardLeft";
    Index.PRIZELIST_TODAY = server() + "lottery/getUpList";
    //用于访问log收集
    Index.fillPage();
	$(function(){$(".close").click(function(){
			$(".mask").hide();
			$(".mask_on").hide();
			$(".zt-tiparea").hide();
		});
	});
	
	$(".cl_sum").click(function(){
		Index.forceLog(20010,$(this).attr("id"));
	});

}

/**
 * 初始化页面
 */
Index.fillPage = function() {
	Index.forceLog(param("act_f")||30010);
	Local.reqaObj(Index.CARD_LEFT, function(data) {
		if (data.isLogin) {
			// 已经登陆
			$("#used").html(data.used);
			$("#left").html(data.left);
			$(".openVIP").attr("href", "javascript:Index.openVIP(true);");
		}
	},[],function(){},1);
	Local.reqaObj(Index.PRIZELIST_TODAY, function(data) {
		var ups = data.data;
		var html = '';
		for ( var i in ups) {
			html += '<li><span>' + ups[i].uName
					+ '</span><span class="deijiang">' + ups[i].pName
					+ '</span></li>';
		}
		$("#data_prized").html(html);
	},[],function(){},1);
};


Index.startScratch = function () {
    //在这里发送刮奖请求
    Local.reqaObj(Index.SCRATCH_URL, function (data) {
    	console.log(data);
    	if (!data.isLogin) {
    		Index.login();
    		return;
    	}
        //获取到抽奖内容，填写到刮刮卡里边
        var msg = "系统不太给力，请重试一下";
        if (data.code == "0") {
            //也可以用data.prizeid来显示对应图片
            msg = "恭喜您中奖了，奖品是" + data.prizename + "";
            if (data.prize == "0") {
                $("#wScratchPad").wScratchPad(function () {
                    setTimeout(Index.reinit, 3000);
                }, {
                    color: '#c5c5c6',
                    image: 'images/not.png'
                });
            } else {
                $("#wScratchPad").wScratchPad(function () {
                    setTimeout(Index.reinit, 4000);
                }, {
                    color: '#c5c5c6',
                    image: 'images/a' + data.prize + '.png'
                });
            }
            Index.reFreshCards();
            return;
        } else if (data.code == '-1') {
            msg = "很遗憾，您没有抽中";
            $("#wScratchPad").wScratchPad(function () {
                setTimeout(Index.reinit, 2000);
            }, {
                color: '#c5c5c6',
                image: 'images/not.png'
            });
            Index.reFreshCards();
            return;
        } else if (data.code == '-2') {
            msg = "您的刮刮卡已经过期了";
            $("#wScratchPad").wScratchPad(function () {
                setTimeout(Index.reinit, 2000);
            }, {
                color: '#c5c5c6',
                image: 'images/expired.png'
            });
            return;
        } else if (data.code == '-3' || data.code == '103') {
            msg = "抽奖机快摇爆了，请您稍后再试";
        } else if (data.code == '-100') {
            msg = "活动已经结束了~";
        } else if (data.code == '-101') {
            msg = "您还没有刮刮卡";
            Index.getCard();
        } else if (data.code == '-102') {
            msg = "您的刮刮卡已经用光了...";
            Index.getCard();
            return;
        }
        Index.showTips(msg);
    },[],function(){},1);

};


Index.reinit = function () {
    $("#wScratchPad").html("");
};

//刷新奖券数量
Index.reFreshCards = function () {
	Local.reqaObj(Index.CARD_LEFT, function(data) {
		if (data.isLogin) {
			// 已经登陆
			$("#used").html(data.used);
			$("#left").html(data.left);
		}
	},[],function(){},1);
};

Index.showTips = function (msg) {
    $("#tipMsg>p").html(msg);
    $("#tipMsg").show();
    $(".zt-tip").show();
    $(".mask_on").show();
    $(".mask").show();
};
Index.getCard = function (msg) {
	$("#nomore").show();
	$(".zt-tip").show();
	$(".mask_on").show();
	$(".mask").show();
};

Index.openVIP = function(isLogin) {
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

Index.forceLog = function(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || "NOID";
	Local.reqaObj(Index.URL + "?act_f=" + act_f + "&act_b=" + act_by,
			function() {
			}, [], function() {
			}, 1);
}
