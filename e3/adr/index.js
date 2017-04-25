var LotteryIndex = {};
LotteryIndex.URL = '';
LotteryIndex.SIGNUP_URL = '';
LotteryIndex.SCRATCH_URL = '';
LotteryIndex.FIRSTGIFT_URL = '';
LotteryIndex.FIFTYGIFT_URL = '';
LotteryIndex.UIN = '';
LotteryIndex.pageNo = 1;
LotteryIndex.loading = false;
LotteryIndex.hasMore = false;


function init() {

    LotteryIndex.URL = server() + 'lottery/index';
    LotteryIndex.SCRATCH_URL = server() + 'lottery/indexscatch';
    LotteryIndex.FIRSTGIFT_URL = server() + 'lottery/getFirstGift';
    LotteryIndex.FIFTYGIFT_URL = server() + 'lottery/getFiftyGift';


    
    $(".close").click(function () {
        $(".mask").hide();
        $(".pop_cnt").hide();
    });
    
    //用于访问log收集
    LotteryIndex.showPage();

}

/**
 * 触发页面日志收集请求
 */
LotteryIndex.showPage = function () {
    Local.reqaObj(LotteryIndex.URL, function (data) {
    	//${data.isLogin}
    	if(data.isLogin){
    		$("#chargeAID").attr("href","javascript:Local.doCharge(true);");
    	}else{
    		$("#chargeAID").attr("href","javascript:Local.doCharge(false);");
    	}    	
    }, [], function () {
    }, 1);
};

LotteryIndex.startScratch = function () {
	
		$("#wScratchPad").wScratchPad(function () {
	        //setTimeout(LotteryIndex.reinit, 2000);
	    }, {
	        color: '#c5c5c6',
	        image: 'images/not.png'
	    });
		$(".sc_cnt2").hide();
	    $(".scratch_area").show();
//	    $("canvas").hide();
	    setTimeout(LotteryIndex.reinit, 2000);
    return;
	
	

    //在这里发送刮奖请求
    Local.reqaObj(LotteryIndex.SCRATCH_URL, function (data) {
        //获取到抽奖内容，填写到刮刮卡里边
        var msg = "系统不太给力，请重试一下";
        if (data.code == "0") {
            //也可以用data.prizeid来显示对应图片
            msg = "恭喜您中奖了，奖品是" + data.prizename + "";
            if (data.prize == "0") {
                $("#wScratchPad").wScratchPad(function () {
                    //setTimeout(LotteryIndex.reinit, 2000);
                }, {
                    color: '#c5c5c6',
                    image: 'images/not.png'
                });
            } else {
                $("#wScratchPad").wScratchPad(function () {
                	//$(".scratch_area").html(msg);
                    //setTimeout(LotteryIndex.reinit, 4000);
                }, {
                    color: '#c5c5c6',
                    image: 'images/a' + data.prize + '.png'
                });
            }
            $(".sc_cnt2").hide();
            $(".scratch_area").show();
            $("canvas").hide();
            setTimeout(LotteryIndex.reinit, 2000);

            return;
        } else if (data.code == '-1') {
            msg = "很遗憾，您没有抽中";
            $("#wScratchPad").wScratchPad(function () {
//                setTimeout(LotteryIndex.reinit, 2000);
            }, {
                color: '#c5c5c6',
                image: 'images/not.png'
            });
            $(".sc_cnt2").hide();
            $(".scratch_area").show();
            $("canvas").hide();
            setTimeout(LotteryIndex.reinit, 2000);
            return;
        } else if (data.code == '-2') {
            msg = "您的刮刮卡已经过期了";
            $("#wScratchPad").wScratchPad(function () {
//                setTimeout(LotteryIndex.reinit, 2000);
            }, {
                color: '#c5c5c6',
                image: 'images/expired.png'
            });
            $(".sc_cnt2").hide();
            $(".scratch_area").show();
            $("canvas").hide();
            setTimeout(LotteryIndex.reinit, 2000);
            return;
        } else if (data.code == '-3' || data.code == '103') {
            msg = "抽奖机快摇爆了，请您稍后再试";
        } else if (data.code == '-100') {
            msg = "您的登录状态已失效，请重新登录";
        } else if (data.code == '-101') {
            msg = "您还没有刮刮卡";
        } else if (data.code == '-102') {
            msg = "您的刮刮卡已经用光了...";
        }
//        LotteryIndex.showCardContent(msg);
        LotteryIndex.showTips("刮奖失败",msg,false);
    },[],function(){},1);

};


LotteryIndex.reinit = function () {
    $(".sc_cnt2").show();
    $(".scratch_area").hide();
    $("#wScratchPad").html("");
//    $(".scratch_btn span").text("继续刮奖");
};

LotteryIndex.signUp = function () {

    //在这里发送签到请求
    Local.reqaObj(LotteryIndex.SIGNUP_URL, function (data) {

        var msg = "系统不太给力，请重试一下";
        var title = "签到失败";
        var success = false;

        if (data.code == '0') {//签到并送卡成功
            msg = "您已经连续签到" + data.count + "天，您获得1张<a href=\'javascript:Local.go(\"mycard.html\")\'>抽奖刮刮卡</a>，快去试试手气吧！";
        } else if (data.code == '1') {//签到了，但没有连续满3天，不送刮刮卡
            msg = "您已经连续签到" + data.count + "天，还差" + data.leftday + "天，就可以获得1张抽奖刮刮卡啦！";
        } else if (data.code == '2') { //这个补发逻辑回头看产品是否需要
            msg = "您已经连续签到" + data.count + "天，您的刮刮卡会随后发送给您，请稍等";
        } else if (data.code == '-1') {
            msg = "您的登录状态已经失效，请重新登录一下下";
        } else if (data.code == '-2') {
            msg = "您今天已经签到过啦，明天再来吧";
        }

        if (parseInt(data.code) >= 0) {
            success = true;
            title = "签到成功";
        }
        //JSToast.showToast("网络不畅，请稍后再试试");
        LotteryIndex.showTips(title, msg, success);

    },[],function(){},1);

};


LotteryIndex.showTips = function (title, msg, status) {
    $(".pop_cnt>.w").html(msg);
    $(".pop_title").html(title);
    $(".mask").css({height: $(document).height()}).show();
    $(".pop_cnt").show();
};

LotteryIndex.showCardContent = function (msg) {
    $(".scratch_btn").hide();
    $(".scratch_area").html(msg);
    $(".scratch_area").show();
};

LotteryIndex.showWaitTips = function (title, msg) {
	$(".close").hide();
    $(".pop_cnt>.w").html(msg);
    $(".pop_title").html(title);
    $(".mask").css({height: $(document).height()}).show();
    $(".pop_cnt").show();
};

LotteryIndex.closeWaitTips = function (title, msg) {
    $(".mask").hide();
    $(".pop_cnt").hide();
    $(".close").show();
};

LotteryIndex.getFirstGift = function () {
	LotteryIndex.showWaitTips("领取奖品","正在发送奖品，请耐心等待...");
	
    Local.reqaObj(LotteryIndex.FIRSTGIFT_URL, function (data) {
    	LotteryIndex.closeWaitTips();
    	
        var msg = "系统不太给力，请重试一下";
        var title = "领取奖品";
        var success = false;
        if (data.code == '0') {
        	 success = true;
             msg="奖品已经发送到您的全民大战飞机邮箱中，请查收~";
        } else if(data.code == '-101'){
            msg="您已经领过该奖品了,该礼品只能领取一次哦~";
        }else if(data.code == '-1'){
        	msg = "系统不太给力，请重试一下";
        }else if(data.code == '-100'){
            msg="用户未登录或活动已结束";
        }else{
        	msg="请您充值后，再领取奖品~";;
        }
        LotteryIndex.showTips(title, msg, success);

    },[],function(){},1);

};

LotteryIndex.getFiftyGift = function () {
	LotteryIndex.showWaitTips("领取奖品","正在发送奖品，请耐心等待...");
	
    Local.reqaObj(LotteryIndex.FIFTYGIFT_URL, function (data) {
    	LotteryIndex.closeWaitTips();
    	
    	var msg = "系统不太给力，请重试一下";
        var title = "领取奖品";
        var success = false;
        
       if (data.code == '0') {
       	  success = true;
          msg="奖品已经发送到您的全民大战飞机邮箱中，请查收~";
       } else if(data.code == '-1'){
       	  msg = "系统不太给力，请重试一下";
       }else if(data.code == '-100'){
          msg="用户未登录或活动已结束";
       }else{
       	 msg="请您充值后，再领取奖品~";;
       }
        LotteryIndex.showTips(title, msg, success);

    },[],function(){},1);

};
