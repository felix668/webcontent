/**
 * Created by Stone on 15/11/27.
 */
var Index = {};
Index.isLogin = false;
Index.uin = -1;
Index.loginType = 1;

// 初始化
function init() {
    //PV，UV
    forceLog(null, 'vpackage-index');
    Index.fillContent();

    $(".getbtn").click(function () {
        Local.reqaObj(server() + "vpackage/pickreward", function (data) {
            if (data.code == -1) {
                $(".error").show();
            } else {
                Index.fillContent();
            }
        }, [], function () {
            Local.showToast("网络不畅，请稍后再试试");
        }, 1);
    });
}

Index.btns = function (obj) {
    $(obj).on("touchstart", function () {
        $(this).addClass("active");
    })
    $(obj).on("touchend", function () {
        $(this).removeClass("active");
    })
}
Index.btns(".getbtn,.buybtn");

Index.doCharge = function () {
    forceLog(null, "buyvpackage-click");
    Local.doCharge(Index.isLogin);
}

Index.fillContent = function () {
    Local.reqaObj(server() + "vpackage/init", function (data) {
        Index.isLogin = data.isLogin;
        if (data.code == 1) {//过期
            var body = $("#body");
            body.addClass("overpage");
            document.title = "活动已结束";
            body.html("<div class='over'><img src='images/over.png'/><p>本活动已结束</p></div>");
        } else {
            var pickLog = data.pickLog;
            if (pickLog) {
                var lis = $(".list").children();
                for (var i = 0; i < pickLog.length; i++) {
                    if (pickLog[i] != "NULL") {
                        $(lis[i]).addClass("cur");
                        $(lis[i + 5]).addClass("cur");
                    }
                }
            }
            Index.uin = data.uin;
            Index.loginType = data.loginType;
            showInfo(data);
        }
    }, [], function () {
        Local.showToast("网络不畅，请稍后再试试");
    }, 1);
}

function showInfo(data) {
    $(".wrap").hide();
    if (!data.isLogin) {
        setNum(data);
        $("#buy").show();
    } else if (data.pickStatus == -300) {// 已领取过
        setNum(data);
        $("#hasbuy").show();
    } else if (!data.hasBuy) {
        setNum(data);
        $("#buy").show();
    } else {
        if (data.pickStatus == 1) {
            $(".getbtn").html("领取铃铛和书券");
            $("#buyed").show();
        } else if (data.pickStatus == 2) {
            $(".getbtn").html("领取今日200书券");
            $("#pick").show();
        } else if (data.pickStatus == -100) {
            $(".tipbtn").html("领取成功，明天再领200书券");
            $("#success").show();
        } else if (data.pickStatus == -200) {
            $(".tipbtn").html("领取完毕，畅读好书吧");
            $("#success").show();
        }
    }
}

function setNum(data) {
    var str = "已有";
    var num = data.num.toString().split("");
    for (var i in num) {
        str += "<span>" + num[i] + "</span>";
    }
    str += "小伙伴领取成功";
    $(".num").html(str);
}

Index.goToFeedBackPage = function () {
    var str = "contact.html";
    //登录且不是微信登录
    if (Index.uin > 10000 && Index.loginType == 1) {
        str += "?qq=" + Index.uin;
    }
    window.location.href = str;
}

Index.goToLotteryPage = function () {
    forceLog(null, "vpackage-index-lottery-index");
    window.location.href = "../lottery/index.html";
}

Index.goToRankPage = function () {
    forceLog(null, "vpackage-index-rank-index");
    window.location.href = "../rank/index.html";
}
