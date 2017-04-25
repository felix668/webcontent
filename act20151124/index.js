var ispicking = false;
var isLoginv = false;
function init() {

    fillPage();
    $(".cjbtn_txt").one("touchstart", function () {
        if (!ispicking) {
            ispicking = true;
            if (!isLoginv) {
                Local.login();
                ispicking = false;
                return;
            }
            loading();
            Local.reqaObj(server() + "pkg20151124/pick", function (data) {
                if (data.isLogin) {
                    if (data.code > 0) {
                        zhuanpan(data.code);
                    } else if (data.code == -3 || data.code == -5) {
                        try {
                            JSToast.showToast("网络不畅，请稍后再试试");
                        } catch (e) {
                        }
                        $(".cjbtn_txt").text("抽奖");
                    } else if (data.code == -8) {
                        JSToast.showToast("不在活动期间内。");
                    } else if (data.code == -2) {
                        nochance(2);
                    } else {
                        nochance(1);
                    }
                } else {
                    Local.login();
                    $(".cjbtn_txt").text("抽奖");
                }
                ispicking = false;
            }, [], function () {
                JSToast.showToast("网络不畅，请稍后再试试");
                $(".cjbtn_txt").text("抽奖");
                ispicking = false;
            }, 1);
        }
    });

    //关闭弹框
//	$(".btn_zdl").on("touchstart",function(ev){
//		tankclose();
//		$(".btn_zdl").on("touchstart",function(ev){
//		  ev.preventDefault();
//		});
//	})

    $(".btn_close").on("touchstart", function (ev) {
        tankclose();
        $(".btn_close").on("touchstart", function (ev) {
            ev.preventDefault();
        });
    })

    //按钮切换函数
    $(".btn_zdl").on("touchstart", function () {
        $(this).addClass('active');
    })
    $(".btn_zdl").on("touchend", function (ev) {
        $(this).removeClass('active');
//		ev.preventDefault();
    })
    $(".cjbtn_txt").on("touchstart", function () {
        $(".btn_cj").addClass('active');
    })
    $(".cjbtn_txt").on("touchend", function (ev) {
        $(".btn_cj").removeClass('active');
        ev.preventDefault();
    })

}


fillPage = function () {
    forceLog(param("act_f"));
    Local.reqaObj(server() + "pkg20151124/init", function (data) {
        isLoginv = data.isLogin;
        if (data.p_qimei || data.p_uin) {
            var code = data.code;
            var angles = (code - 1) * 60;
            $(".btn_cj").addClass('btn_ylg');
            $(".cjbtn_txt").html("今日<br>已抽奖");
            $(".cjbtn_txt").css({"color": "#f5f2e7", "padding-top": "0.19rem", "line-height": "0.24rem", "font-size": "0.16rem"});
            $("#zhuanpan").css('-webkit-transition', '-webkit-transform 5ms');
            $("#zhuanpan").css('-webkit-transform', 'rotate(' + angles + 'deg)');
            ispicking = true;
        }
    }, [], function () {
        JSToast.showToast("网络不畅，请稍后再试试");
    }, 1);
}


function loading() {
    $(".cjbtn_txt").text("抽奖中");
}

//旋转转盘 ids: 奖品的id
function zhuanpan(ids) {
    var Imgsrc = $(".tankuang_box img");
    var restaraunts = [["images/phone.png", "一加手机X"], ["images/erji.png", "一加银耳耳机"], ["", "2000书券"], ["images/chundianbao.png", "一加来电移动电源"], ["images/yaoqingmai.png", "一加手机X邀请码"], ["images/chengzhangzhi.png", "50成长值"]];
    var angles = (ids - 1) * 60 + 1800;
    $("#zhuanpan").css('-webkit-transform', 'rotate(' + angles + 'deg)');
    $("#zhuanpan").on('webkitTransitionEnd', function () {
        $(".show_mask").css("display", "-webkit-box");
        $(".tankuang_box").css("display", "block");
        if (ids == 1 || ids == 2 || ids == 4) {
            Imgsrc.attr("src", restaraunts[ids - 1][0]);
            $(".tankuang_box h4").text("恭喜获得" + restaraunts[ids - 1][1]);
            $(".tankuang_box p").text ("填写联系方式，奖品飞到你身边");
            $(".btn_go").removeClass("btn_zdl");
            $(".btn_go").text("填写联系方式");
            $(".btn_go").attr("href", "javascript:Local.go('contact.html');");
        }
        else if (ids == 5) {
            Imgsrc.attr("src", restaraunts[ids - 1][0]);
            $(".tankuang_box h4").text("恭喜获得" + restaraunts[ids - 1][1]);
            $(".tankuang_box p").text("有效期截至2015年12月01日，请及时使用");
            $(".btn_go").removeClass("btn_zdl");
            $(".btn_go").text("查看“我的奖品”");
            $(".btn_go").attr("href", "javascript:gotoPrizeList();");
        }
        else if (ids == 6 || ids == 3) {
            Imgsrc.attr("src", restaraunts[ids - 1][0]);
            $(".tankuang_box h4").text("恭喜获得" + restaraunts[ids - 1][1]);
            $(".tankuang_box p").text("");
            $(".tankuang_box h4").css("margin", "0.1rem 0 0.2rem");
            $(".btn_go").text("查看“我的奖品”");
            $(".btn_go").attr("href", "javascript:gotoPrizeList();");
        }

        $(".btn_cj").addClass('btn_ylg');
        $(".cjbtn_txt").html("今日<br>已抽奖");
        $(".cjbtn_txt").css({"color": "#f5f2e7", "padding-top": "0.19rem", "line-height": "0.24rem", "font-size": "0.16rem"});
    });
}

/**
 * 跳转到我的奖品页面
 */
function gotoPrizeList() {
    if (!isLoginv) {
        Local.login();
    }
    Local.go('myprize.html');
}

//其他情况
function nochance(noprize) {
    $(".show_mask").css("display", "-webkit-box");
    $(".tankuang_box").css("display", "block");
    $(".btn_close").hide();
    $(".tankuang_box img").hide();
    $(".tankuang_box h4").addClass("mt33");
    $(".btn_zdl").text("知道啦");
    if (noprize == 1) {
        $(".btn_cj").addClass('btn_ylg');
        $(".cjbtn_txt").html("今日<br>已抽奖");
        $(".cjbtn_txt").css({"color": "#f5f2e7", "padding-top": "0.19rem", "line-height": "0.24rem", "font-size": "0.16rem"});
        $(".tankuang_box h4").text("今天已经抽过奖啦");
        $(".tankuang_box p").text ("同一设备，账号每日限抽奖一次");
        $(".btn_go").attr("href", "javascript:tankclose();");
    }
    if (noprize == 2) {
        $(".tankuang_box h4").html("非常抱歉，<br>网络繁忙请稍后再试");
        $(".tankuang_box p").text ("");
    }
    if (noprize == 3) {
        $(".tankuang_box h4").html("非常抱歉，<br>无法连接网络请稍后再试");
        $(".tankuang_box p").text ("");
    }
}

function tankclose() {
    $(".show_mask").hide();
    $(".tankuang_box").hide();
}

