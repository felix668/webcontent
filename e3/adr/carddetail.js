var CardDetail = {};
CardDetail.URL = '';
CardDetail.UIN = '';
CardDetail.pageNo = 1;
CardDetail.loading = false;
CardDetail.hasMore = false;
var pageObject = CardDetail;

function init() {
    CardDetail.SCRATCH_URL = server() + 'lottery/doLottery';
    CardDetail.showPage();
}

CardDetail.startScratch = function (lid) {
    //在这里发送刮奖请求
	var url = CardDetail.SCRATCH_URL + "?lid=" + lid;
    Local.reqaObj(url, function (data) {
        //获取到抽奖内容，填写到刮刮卡里边
        var msg = "系统不太给力，请重试一下";
        if (data.code == "0" || data.code == "-4") { //0代表刚刚抽的，-4代表抽过的查看一下
            if (data.prize == "0") {
                $("#wScratchPad").wScratchPad(function () {
                }, {
                    color: '#c5c5c6',
                    image: 'images/not.png',
                    width: 290,
                    height: 149,
                    image2: 'images/sbg2.png',
                    bgsize: '290px 149px'
                });
            } else {
                $("#wScratchPad").wScratchPad(function () {
                    $(".card_w").show();
                    $(".card_w").text("已刮开，恭喜您刮中" + data.prizename + "。");
                }, {
                    color: '#c5c5c6',
                    image: 'images/a' + data.prize + '.png',
                    width: 290,
                    height: 149,
                    image2: 'images/sbg2.png',
                    bgsize: '290px 149px'
                });
            }
            $(".card_no").hide();
            $(".card_w").hide();
//            $("canvas").hide();
            $(".scratch_area").show();
            return;
        } else if (data.code == '-1') {
            msg = "很遗憾，您没有抽中";
            $("#wScratchPad").wScratchPad(function () {
            }, {
                color: '#c5c5c6',
                image: 'images/not.png',
                width: 290,
                height: 149,
                image2: 'images/sbg2.png',
                bgsize: '290px 149px'
            });
            $(".card_no").hide();
            $(".card_w").hide();
//            $("canvas").hide();
            $(".scratch_area").show();
            return;
        } else if (data.code == '-2') {
            msg = "您的刮刮卡已经过期了";
        } else if (data.code == '-3') {
            msg = "这张奖券无效啊，怎么会这样?!";
        }
//        } else if (data.code == '-4') {
//        	msg = "您已经刮开过这张奖券";
//        	if(data.prize > 0) {
////              <div class="card_in"><img src="images/a${data.prize}.png"></div>
////              <div class="card_w">已刮开，恭喜您刮中${data.prizename}。</div>
//      		$(".card_no").hide();
//      		$(".card_w").text("已刮开，恭喜您刮中" + data.prizename + "。");
////      		$("#hide").html("<img src='images/a"+data.prize+".png'>");
//      		$(".scratch_area").attr("class", "card_in a"+data.prize);
//      		return;
//              
//      	} else{
////              <div class="card_in"><img src="images/not.png"></div>
////	            <div class="card_w">已刮开，没中奖</div>
//      		$(".card_no").hide();
//      		$(".card_w").text("已刮开，没中奖");
////	            $(".scratch_area").html("<img src='images/not.png'>");
//	            $(".scratch_area").attr("class", "card_in not");
//	            return;
//            }
//        }
        
        CardDetail.showTips("刮奖失败",msg,false);
    },[],function(){},1);

};

CardDetail.showTips = function (title, msg) {
    $(".mask").css({height: $(document).height()}).show();
    $(".pop_cnt").show();
    $(".pop_cnt>.w").html(msg);
    $(".pop_title").html(title);
};

/**
 * 页面显示
 */
CardDetail.showPage = function () {
    var data = {};
    data.prize = param("pid");
    data.expired = param("ie");
    data.prizeName = decodeURIComponent(param("pname"));
    data.lid = param("lid");
    data.used = param("used");
    var str = fillContent(data);
    ih('content', str);
    $(".close").click(function () {
        $(".mask").hide();
        $(".pop_cnt").hide();
    });
};
