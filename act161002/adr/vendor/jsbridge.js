//本模块不依赖其他任何模块。

var JsBridge = (function () {
    
    function j(b, c) {
        b = String(b).split(".");
        c = String(c).split(".");
        try {
            for (var a = 0, d = Math.max(b.length, c.length); a < d; a++) {
                var e = isFinite(b[a]) && Number(b[a]) || 0, f = isFinite(c[a]) && Number(c[a]) || 0;
                if (e < f)return-1; else if (e > f)return 1
            }
        } catch (k) {
            return-1
        }
        return 0
    }

    function p(b, c, a) {
        return a ? function () {
            var d = [].slice.call(arguments, 0);
            q(b, c, d)
        } : function () {
            var d = [].slice.call(arguments, 0);
            v(b, c, d)
        }
    }

    /**
     * [g description]
     * @param  {object} b [description]
     * @param  {string} c [description]
     */
    function g(b, c) {
        c = c || 1;
        if (j(h, c) < 0) {
            //console.info("version not match, apis ignored");
        }
        else for (var a in b) {
            var d =
                b[a];
            if (!(!d || !d.length || !(d.constructor === Array || Object.prototype.toString.call(o) === "[object Array]"))) {
                var e = window[a];
                if (e) {
                    if (typeof e == "object" && e.getClass) {
                        m[a] = e;
                        window[a] = {}
                    }
                } else if (r)window[a] = {}; else continue;
                var f = m[a];
                e = window[a];
                for (var k = 0, w = d.length; k < w; k++) {
                    var i = d[k];
                    if (!e[i])if (f) {
                        if (f[i])e[i] = p(a, i, false)
                    } else e[i] = p(a, i, true)
                }
            }
        }
    }

    function q(b, c, a) {
        if (b && c) {
            var d = a.length && a[a.length - 1];
            if (d && d.call)a.pop(); else d = null;
            var e = x();
            n[String(e)] = d;
            b = "jsbridge://" + encodeURIComponent(b) +
                "/" + encodeURIComponent(c) + "/" + e;
            c = 0;
            for (d = a.length; c < d; c++)b += "/" + encodeURIComponent(String(a[c]));
            a = document.createElement("iframe");
            a.style.cssText = "display:none;width:0px;height:0px;";
            document.body.appendChild(a);
            a.onload = function () {
                s(e, {r: -201, result: "error"});
                //console.error("call jsbridge error")
            };
            a.id = "jsbridge_" + e;
            a.src = b
        }
    }

    function v(b, c, a) {
        if (b && c) {
            var d = a.length && a[a.length - 1];
            if (d && d.call)a.pop(); else d = null;
            var e;
            try {
                var f = m[b];
                e = f[c].apply(f, a)
            } catch (k) {
                e = "error"
            }
            d && setTimeout(function () {
                    d(e)
                },
                0)
        }
    }

    function s(b, c) {
        b = String(b);
        c = c || {r: -200};
        var a = n[b];
        a && setTimeout(function () {
            a(c.result)
        }, 0);
        delete n[b];
        var d = document.getElementById("jsbridge_" + b);
        d && document.body.removeChild(d)
    }

    var 
        l = navigator.userAgent, 
        h = function (b) {
            return b && b[1] || 0
        }(l.match(/V1_AND_SQ_([\d\.]+)/)), 
        r = h && (j(h, "4.2.2") >= 0 || /_NZ\b/.test(l)), 
        t = {publicAccount: ["close", "getJson", "getLocation", "hideLoading", "openInExternalBrowser", "showLoading", "viewAccount"]}, 
        y = {
            publicAccount: [
                "getMemberCount", "getNetworkState", "getValue", "open",
                "openEmoji", "openUrl", "setRightButton", "setValue", "shareMessage", "showDialog"
            ], 
            qqZoneAppList: [
                "getCurrentVersion", "getSdPath", "getWebDisplay", "goUrl", "openMsgCenter", "showDialog", "setAllowCallBackEvent"
            ], 
            q_download: [
                "doDownloadAction", "getQueryDownloadAction", "registerDownloadCallBackListener", "cancelDownload", "cancelNotification", "doGCDownloadAction"
            ], 
            qzone_http: ["httpRequest"], 
            qzone_imageCache: ["downloadImage", "getImageRootPath", "imageIsExist", "sdIsMounted", "updateImage", "clearImage"], 
            qzone_app: ["getAllDownAppInfo", "getAppInfo", "getAppInfoBatch", "startSystemApp", "uninstallApp"]
        }, 
        u = {
            coupon: ["addCoupon", "addFavourBusiness", "gotoCoupon", "gotoCouponHome", "isCouponValid", "isFavourBusiness", "isFavourCoupon", "removeFavourBusiness"]
        }, 
        m = {}, 
        n = {}, 
        x = function () {
            var b = 1;
            return function () {
                return b++
            }
        }();
    g({QQApi: ["isAppInstalled", "isAppInstalledBatch", "startAppWithPkgName", "checkAppInstalled", "checkAppInstalledBatch", "getOpenidBatch", "startAppWithPkgNameAndOpenId"]});
    g({QQApi: ["lauchApp"]}, "4.5");
    if (r)if (/\bPA\b/.test(l)) {
        g(t);
        g(y, "4.5");
        g(u, "4.5")
    } else {
        if (/\bQR\b/.test(l)) {
            g(u, "4.5");
            if (j(h, "4.5") >= 0 && j(h, "5.0") < 0)window.publicAccount = {openUrl: function (b) {
                location.href = b
            }}
        }
    } else g(t, "4.2");
    
    return {
        callMethod: function (b, c) {
            q(b, c, [].slice.call(arguments, 2))
        }, 
        callback: s, 
        restoreApis: g, 
        compareVersion: function (b) {
            return j(h, b)
        }
    }

})();