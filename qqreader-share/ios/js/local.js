//本模块依赖Charm.js
var Local = (function(C){
    if(window.init){
        document.addEventListener('DOMContentLoaded',init,false);
        document.ondragstart = function() {
            return false;
        };
    }
    var Local = {};
    //唤起客户端分享控件
    Local.shareControl = function () {
        C.callCocoa({
            "method": "sharecontrol"
        })
    };
    // 设置右上角的分享图标。
    Local.setIconForShareing = function(url,img,title,intro){
        document.addEventListener('ondataavailable', function (shareevent) {
            C.callCocoa({
                "method": "web_share",
                "title": title,
                "intro": intro,
                "img": img,
                "url": url
            });
        }, false);
        var shareevent = document.createEvent('HTMLEvents');
        shareevent.initEvent("ondataavailable", true, true);
        document.dispatchEvent(shareevent);
    }
    //点击分享当前页面：
    Local.shareTopic = function(url,img,title,intro){
        C.callCocoa({
            "method": "web_share",
            "title": title,
            "intro": intro,
            "img": img,
            "url": url
        });
        Local.shareControl();
    }
    return Local;
})(C);