/**
 * 用于判断是否已经安装过native app ，如果安装过则正常调起，未安装则进行跳转下载页面的操作
 * Created by boxerli on 15/3/16.
 */

(function (window) {

    JsBridge.iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (JsBridge.iOS && navigator.userAgent.indexOf("Android") >= 0) {
        // 同时是 iOS 和 Android，那就说明不是 iOS
        JsBridge.iOS = false;
    }

    window.nativechecker = {

        /**
         * 可以调用的函数，直接打开APP
         * @param ch
         */
        doGoToApp: function (ch) {
            this.checkCHinfo(ch, function () {
                if (JsBridge.iOS) {
                    iOSScheme.open(iOSScheme.simpleScheme());
                } else {
                    androidScheme.androidOpenApp();
                }
            });
        },

        /**
         *
         * 可以调用的函数，去到评论专题页
         * @param ch
         * @param topicid
         */
        doGoToCommentTopic: function (topicid, ch) {
            this.checkCHinfo(ch, function () {
                if (JsBridge.iOS) {
                    iOSScheme.open(iOSScheme.simpleScheme());
                } else {
                    androidScheme.androidOpenCommentTopic(topicid);
                }
            });
        },

        /**
         *
         * 可以调用的函数，去到评论详情页
         * @param ch
         * @param commentid
         * @param bid
         * @param ctype
         * @param uid
         */
        doGoToCommentDetail: function (commentid, bid, ctype, uid, ch) {
            this.checkCHinfo(ch, function () {
                if (JsBridge.iOS) {
                    iOSScheme.open(iOSScheme.simpleScheme());
                } else {
                    androidScheme.androidOpenCommentDetail(commentid, bid, ctype, uid);
                }
            });
        },

        /**
         *
         * 可以调用的函数，去到书友圈首页
         * @param ch
         * @param bid
         * @param ctype
         * @param booktitle
         */
        doGoToCommentIndex: function (bid, booktitle, ctype, ch) {
            this.checkCHinfo(ch, function () {
                if (JsBridge.iOS) {
                    iOSScheme.open(iOSScheme.simpleScheme());
                } else {
                    androidScheme.androidOpenCommentIndex(bid, booktitle, ctype);
                }
            });
        },

        /**
         *
         * 可以调用的函数，打开详情页
         * @param bid
         * @param ch
         */
        doGoToBookDetail: function (bid, ch) {
            this.checkCHinfo(ch, function () {
                if (JsBridge.iOS) {
                    iOSScheme.open(iOSScheme.getBookScheme(bid));
                } else {
                    androidScheme.androidOpenDetail(bid);
                }
            });
        },

        /**
         *
         * 可以调用的函数，打开阅读页
         * @param bid
         * @param ch
         */
        doGoToReadPage: function (bid, ch) {

            this.checkCHinfo(ch, function () {
                if (JsBridge.iOS) {
                    iOSScheme.open(iOSScheme.getReadScheme(bid));
                } else {
                    androidScheme.androidOpenReadPage(bid);
                }
            });
        },

        /**
         *
         * 可以调用的函数，打开听书详情页
         * @param bid
         * @param ch
         */
        doGoToMediaBookDetail: function (bid, ch) {
            this.checkCHinfo(ch, function () {
                if (JsBridge.iOS) {
                    iOSScheme.open(iOSScheme.simpleScheme());
                } else {
                    androidScheme.androidOpenMediaBookDetail(bid);
                }
            });
        },

        /**
         *
         * 可以调用的函数，打开指定的URL
         * @param url
         * @param ch
         */
        doGoToMediaTopicURL: function (url, ch) {
            this.checkCHinfo(ch, function () {
                if (JsBridge.iOS) {
                    iOSScheme.open(iOSScheme.simpleScheme());
                } else {
                    androidScheme.androidMediaOpenUrl(url);
                }
            });
            reportPageEvent('doGoToMediaTopicURL', null);
        },

        /**
         *
         * 可以调用的函数，打开指定的URL
         * @param url
         * @param ch
         */
        doGoToURL: function (url, ch) {
            this.checkCHinfo(ch, function () {
                if (JsBridge.iOS) {
                    if (url.indexOf('http:') < 0) {
                        url = pagesever() + "/" + url;
                    }
                    iOSScheme.open(iOSScheme.getUrlScheme(url));
                } else {
                    androidScheme.androidOpenUrl(url);
                }
            });
            reportPageEvent('doGoToURL', null);
        },


        /**
         * 跳转到下载页面
         */
        doGotoDownload: function (page, ch) {
            this.checkCHinfo(ch, function () {
                if (JsBridge.iOS) {
                    window.location.href = iOSScheme.APPSTORE;
                } else {
                    window.location.href = androidScheme.getandroidDownloadUrlV2();
                }
            });
            if (!page) {
                page = 'all';
            }
            reportPageEvent('doGotoDownload_' + page, null);
        },

        /**
         * 重置来源渠道
         * @param ch
         * @param callback
         */
        checkCHinfo: function (ch, callback) {
            if (ch) {
                androidScheme.android_downloadch = ch;
            }
            callback();
        }


    };


}(this));