/*!
 * NovelApi v0.1
 * date : 2015年3月26日 19:50:27
 */
window.API = (function (W) {

    "use strict";
    
    var _api = {};
    var browser = window.browser || {};
    browser.env = browser.env || {};
    var qua = '';
    if (browser.env.qua) {
        qua = browser.env.qua;
    } else if (_api.isQBAndroid) {
        var params = mtt.getBrowserParam && mtt.getBrowserParam();
        var info = params && eval('(' + params + ')');
        qua = typeof info == 'object' ? info.qua : navigator.userAgent;
    }
    
    _api.isQB = 'browser' in W && !/MicroMessenger|QQ\//gi.test(qua);
    _api.isQBAndroid = _api.isQB && typeof mtt === "object" && !!mtt;
    _api.isQBIOS = _api.isQB && typeof x5 === "object" && !!x5;
    var arr = qua.match(/[0-9]{6}/g);
    var build = (arr && arr.length > 0) ? parseInt(arr[0]) : 0;

    /**
     * 是否支持商业化
     * @return 1  ：支持
     * @return -1 ：不支持，终端
     * @return -2 ：不支持，非QB浏览器
     * @return -3 ：不支持，版本低
     */

    _api.mttIsSupportWenxue = function () {
        if (!('browser' in window)) {
            return -1;
        }
        if (_api.isQBAndroid) {
            return build < 550000 ? -3 : 1;
        }
        if (_api.isQBIOS) {
            return build < 581000 ? -3 : 1;
        }
        return -2;
    };
    //使用QQ浏览器打开页面
    _api.qbOpen = function (url, succCallback, errCallback) {
        var timerSync,
        timerCount;
        var src = 'mttbrowser://url=' + (url || '');
        var ifr = document.createElement('iframe');
        function syncTimerCallback() {
            timerSync += 1;
            timerCount += 1;
            if (timerCount < 88) {
                setTimeout(syncTimerCallback, 1);
            } else {
                //alert('Date.now() - timerSync:'+(Date.now() - timerSync))
                if (Date.now() - timerSync > 500) {
                    succCallback && succCallback();
                } else {
                    errCallback && errCallback();
                }
            }
        }
        ifr.src = src;
        ifr.id = "qbInstallValidator_" + Date.now();
        ifr.style.display = 'none';
        timerCount = 0;
        timerSync = Date.now();
        setTimeout(syncTimerCallback, 1);
        document.body.appendChild(ifr);
    }
    return _api;
})(window);
