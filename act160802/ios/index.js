var Index = {};
//初始化
var winW = document.documentElement.clientWidth || document.body.clientWidth;
var lenH = $("#recomlist li").length;
$(window).on("load", function () {
    Index.onloads();
});
Index.onloads = function () {
    setTimeout(function () {
        var winLi = $(".recommend_box").width();
        $("#recomlist").css({"width": lenH * winLi, "-webkit-transform": "translate3d(" + (-winLi) + "px,0px,0px)"});
        $("#recomlist li").css("width", winLi);
        Index.tabscroll("#recomlist");
    }, 50);
};
function init() {
    console.log("init....");
    Index.fillPage();
    forceLog(param("act_f"), "initPage");
}
//页面初始化
Index.fillPage = function () {
    Local.reqaObj(server() + "pkg160802/init", function (data) {
        console.log(JSON.stringify(data));
        //处理初始化数据
        initpage(data);
    }, [], function () {
        Local.showToast("网络异常，请稍候重试");
    }, 1);
};
//页面初始化
function initpage(data) {
    //活动结束
    if (data.code == -3) {

    }
    if (data.ver_ok) {//升级用户
        Index.upgrade(data);
    } else {
        Index.nograde();
    }
}
Index.nograde = function () {
    $(".nograde").show();
    $(".upgrade").hide();

    $('#updateBtn').on('touchend', function () {
        forceLog(param('act_f'), 'updateBtn');
        console.log("updateBtn");
        location.href = "https://itunes.apple.com/cn/app/qq-yue-du/id487608658?mt=8";
    });

};

Index.upgrade = function (data) {
    $(".nograde").hide();
    $(".upgrade").show();
    for (var i = 0; i < lenH; i++) {
        $("#recomlist li").eq(i).find(".userface img").attr("src", data.q_list[i].q_avatar ? data.q_list[i].q_avatar : "images/userface_defa.png");
        $("#recomlist li").eq(i).find(".authorface img").attr("src", data.q_list[i].a_avatar ? data.q_list[i].a_avatar : "images/authorface_defa.png");
        $("#recomlist li").eq(i).find(".askcontent").text(data.q_list[i].q);
        $("#recomlist li").eq(i).find(".timenum").text(data.q_list[i].a_time + "”");
        $("#recomlist li").eq(i).find(".heardnum span").text(data.q_list[i].a_lisener);
        $("#recomlist li").eq(i).find(".authorname span").text(data.q_list[i].a_author);

    }
    ;
    $(".dashenface img").attr("src", data.dashen.avatar ? data.dashen.avatar : "images/authorface_defa.png");
    $(".dasheninfo").text(data.dashen.name + " " + data.dashen.intro);

    $('.dashenbtn').on('touchend', function () {
        forceLog(param('act_f'), 'moreDashen');
        //console.log("more_dashen");
        location.href = "uniteqqreader://nativepage/discover/authorsay";
    });

    $('.askbtn').on('touchend', function () {
        if (data.isLogin && data.loginType != 3) {
            forceLog(param('act_f'), 'ask' + data.dashen.aid);
            //console.log("askbtn");
            location.href = "uniteqqreader://nativepage/audioquestion/list?aid=" + data.dashen.aid + "&encode_aname=" + data.dashen.name;

        } else {
            Local.login();
        }
    });
    //点击跳转
    $('#recomlist li').on('tap', function () {
        var i = $(this).index();
        forceLog(param('act_f'), 'questionDetail' + data.q_list[i].qid);
        //console.log(i);
        //通知服务器用户进入了哪本书的详情页。
        location.href = "uniteqqreader://nativepage/audioquestion/detail?qid=" + data.q_list[i].qid;
    });
};
//滑动
Index.tabscroll = function (elem) {
    var touchStartX = 0, touchStartY = 0;
    var iNow = 1;
    var winLi = $("#recomlist li").width();
    var movenum = 0;
    var isScroll = false;
    $(elem).on("touchstart", function (ev) {
        movenum = 0;
        isScroll = false;
        touchStartX = ev.originalEvent ? ev.originalEvent.changedTouches[0].pageX : ev.changedTouches[0].pageX;
        touchStartY = ev.originalEvent ? ev.originalEvent.changedTouches[0].pageY : ev.changedTouches[0].pageY;
        $(elem).css("transition", ".3s");
    });
    $(elem).on("touchmove", function (ev) {
        var disX = ev.originalEvent ? ev.originalEvent.changedTouches[0].pageX : ev.changedTouches[0].pageX - touchStartX;
        var disY = ev.originalEvent ? ev.originalEvent.changedTouches[0].pageY : ev.changedTouches[0].pageY - touchStartY;
        movenum++;
        if (movenum == 1) {
            if (Math.abs(disX) < Math.abs(disY)) {
                isScroll = true;
            }
            ;
        }
        if (isScroll) {
        } else {
            ev.preventDefault();
        }
    });
    $(elem).on("touchend", function (ev) {
        var x2 = ev.originalEvent ? ev.originalEvent.changedTouches[0].pageX : ev.changedTouches[0].pageX;
        var offsetX = x2 - touchStartX;

        if (offsetX < 0) {//向左滑
            iNow += 1;
            if (iNow == lenH) {
                iNow = lenH - 1;
            }
        }
        if (offsetX > 0) {//向右滑
            iNow -= 1;
            if (iNow < 0) {
                iNow = 0;
            }
        }
        $(elem).css({"transition": "0.3s", "-webkit-transform": "translate3d(" + (-iNow * winLi) + "px,0px,0px)"});
    });
};


