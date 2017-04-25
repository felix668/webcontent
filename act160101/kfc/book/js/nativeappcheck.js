/**
 * 用于判断是否已经安装过native app ，如果安装过则正常调起，未安装则进行跳转下载页面的操作
 * Created by boxerli on 15/3/16.
 */

var Native = {};

(function (window) {

    window.nativechecker = {

        android_downloadurl: "http://iyuedu.qq.com/android/common/down.html?ch=10000382",

        init: function () {
            Native.iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            if (Native.iOS && navigator.userAgent.indexOf("Android") >= 0) {
                // 同时是 iOS 和 Android，那就说明不是 iOS
                Native.iOS = false;
            }
        },

        /**
         *
         * 可以调用的函数，打开详情页
         * @param bid
         */
        doGoToBookDetail: function (bid) {
            if (Native.iOS) {
                iOSScheme.open(iOSScheme.getBookScheme(bid));
            } else {
                window.nativechecker.androidOpenDetail(bid);
            }
        },

        /**
         *
         * 可以调用的函数，打开阅读页
         * @param bid
         */
        doGoToReadPage: function (bid) {
            if (Native.iOS) {
                iOSScheme.open(iOSScheme.getReadScheme(bid));
            } else {
                window.nativechecker.androidOpenReadPage(bid);
            }
        },


        /**
         *
         * 可以调用的函数，打开指定的URL
         * @param url
         */
        doGoToURL: function (url) {
            if (Native.iOS) {
                if (url.indexOf('http:') < 0) {
                    url = pagesever() + "/" + url;
                }
                iOSScheme.open(iOSScheme.getUrlScheme(url));
            } else {
                window.nativechecker.androidOpenUrl(url);
            }
        },
        
        /**
         * 跳转到下载页面
         */
        doGotoDownload: function () {
            if (Native.iOS) {
                window.location.href = iOSScheme.APPSTORE;
            } else {
                window.location.href = window.nativechecker.android_downloadurl;
            }
        },

        //########################################################以下Android专用####################################
        /**
         * 安卓打开详情页
         */
        androidOpenDetail: function (bid) {
            window.nativechecker.delayToDownloadUrl(function () {
                window.location.href = "androidqqreader://nativepage/LBStoreConfigDetailActivity?bid=" + bid;
            });
        },

        /**
         * 安卓打开阅读页面
         */
        androidOpenReadPage: function (bid) {
            window.nativechecker.delayToDownloadUrl(function () {
                window.location.href = "androidqqreader://nativepage/ReaderPageActivity?bid=" + bid;
            });
        },

        /**
         * 安卓打开指定页面
         */
        androidOpenUrl: function (url) {
            window.nativechecker.delayToDownloadUrl(function () {
                window.location.href = "androidqqreader://webpage/" + url;
            });
        },
        
        /**
         * 微信判断是否安装过qq阅读
         */
        isinstalledByWX: function (callback) {
            WeixinJSBridge.invoke('getInstallState', {
                'packageName': "com.qq.reader",
                'packageUrl': ''
            }, function (e) {
                var msg = e.err_msg;
                if (msg.indexOf("get_install_state:yes") > -1) {
                    callback(true, msg);
                } else {
                    callback(false, msg);
                }
            });
        },

        delayToDownloadUrl: function (callback) {
            var clickedAt = +new Date;
            //微信进行一下特殊的判断
            var iswx = !!navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/);
            if (iswx) {
            	window.nativechecker.isinstalledByWX(function (isInstall, version) {
                    if (isInstall) {
                        callback(version);
                    }
                });
            } else {
                callback();
            }
            if (!$("#maskdiv").length) {
                setTimeout(function () {
                    if (+new Date - clickedAt < 2000) {
                        window.location.href = window.nativechecker.android_downloadurl;
                    }
                }, 1000);
            } else {
                $("#maskdiv").show();
                setTimeout(function () {
                    $("#openapploding").hide();
                    $("#downloadtoast").show();
                }, 1000);
            }
        }

    };


}(this));

window.nativechecker.init();
