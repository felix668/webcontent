/**
 * Created by shiluyao on 2015/7/23.
 */
var Appinstalledcheck = {};

Appinstalledcheck.IOS = /iPhone|iPad|iTouch|iPod/.test(navigator.userAgent);
Appinstalledcheck.Android = /Android/.test(navigator.userAgent);

Appinstalledcheck.checkDownloadApp = function (callback) {
    //微信
    WX.checkDownloadApp(function (hasDownloadApp, verison) {
        if (hasDownloadApp) {
            callback(hasDownloadApp, verison);
        } else {
            callback(hasDownloadApp);
        }

    });
    //手Q
    if (window.mqq && mqq.app && mqq.app.isAppInstalled) {
        var url;
        if (Appinstalledcheck.IOS) {
            url = 'qqreader';
        } else {
            url = 'com.qq.reader';
        }
        mqq.app.isAppInstalled(url, function (hasDownloadApp) {
            if (hasDownloadApp && !Appinstalledcheck.IOS) {
                mqq.app.checkAppInstalled(url, function (version) {
                    callback(hasDownloadApp, version);
                });
            } else {
                callback(hasDownloadApp);
            }
        });
    }
};
