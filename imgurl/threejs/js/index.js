var beginClientY, endClientY, deta;

$(document).ready(function () {
    $('.audio')[0].play();
    wx.ready(function() {
        WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
            $('.audio')[0].play();
        });
    });
    entry();

    $('.voice').bind('touchstart', function () {
        $('.voice_close').show();
        $('.voice').hide();
        $('.audio')[0].pause();
    });
    $('.voice_close').bind('touchstart', function () {
        $(this).hide();
        $('.voice').show();
        $('.audio')[0].play();
    });
});

function entry() {
        appInfo.init();
        orienterInit();
        webglPlayer.init();
}

//重力感应模块
function orienterInit() {
    orienter = new Orienter;
    orienter.orient = function (e) {
        if (appInfo.checkLandscape()) {
            webglPlayer.fix.x = 0;
            webglPlayer.fix.y = 0;
            webglPlayer.fix.z = 0;
        } else {
            webglPlayer.fix.y = .004 * appInfo.limiter(e.b, 190);
            webglPlayer.fix.x = .004 * appInfo.limiter(e.g, 100);
        }
    };
    orienter.init();
}

