/**
 * Created by dgx on 2016/11/7.
 */

var appInfo = {
    ups: null,
    isPreloaded: !1,
    isReady: !1,
    isFirst: !1,
    isActive: !0,
    init: function () {
        this.parseUrl()
    },
    random: function (A, g) {
        return A + Math.floor(Math.random() * (g - A) * 100) / 100
    },
    checkLandscape: function () {
        return 90 == window.orientation || window.orientation == -90
    },
    limiter: function (A, g, t) {
        return t ? Math.max(g, Math.min(t, A)) : g ? Math.max(-g, Math.min(g, A)) : Math.max(-60, Math.min(60, A))
    },
    // support canvas?
    canvas: !!window.CanvasRenderingContext2D,
    // support webgl?
    webgl: function () {
        try {
            var A = document.createElement("canvas");
            return !(!window.WebGLRenderingContext || !A.getContext("webgl") && !A.getContext("experimental-webgl"))
        } catch (g) {
            return !1
        }
    }(), // func called
    parseUrl: function () {
        var params = {}, g = window.location.href.indexOf("?");
        if (g != -1) {
            var t = window.location.href.substr(g + 1), e = t.indexOf("#");
            e != -1 && (t = t.substr(0, e));
            for (var C = t.split("&"), I = C.length, i = 0; i < I; i++) {
                var n = C[i].split("=");
                params[n[0]] = n[1]
            }
        }
        // ups = url params
        this.ups = params;
    }
};



