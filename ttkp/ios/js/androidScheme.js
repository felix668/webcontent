/**
 * Created by boxerli on 15/4/8.
 */

(function (window) {

    window.androidScheme = {

        android_downloadch: '10002412',

        android_downloadurl: "http://iyuedu.qq.com/android/common/down.html?ch=",

        packageName: "com.qq.reader",


        /**
         * 获取安卓的下载地址
         * @returns {string}
         */
        getandroidDownloadUrl: function () {
            return   this.android_downloadurl + this.android_downloadch;
        },

        /**
         * android直接下载
         * @returns {string}
         */
        getandroidDownloadUrlV2: function () {
            return "http://misc.wcd.qq.com/app?packageName=com.qq.reader&channelId=" + this.android_downloadch;
        },

        /**
         * 直接启动app
         */
        androidOpenApp: function () {
            this.delyToDownloadUrl(function () {
                window.location.href = "androidqqreader://main/";
            });
        },

        /**
         * 安卓打开详情页
         */
        androidOpenDetail: function (bid) {
            this.delyToDownloadUrl(function () {
                window.location.href = "androidqqreader://nativepage/LBStoreConfigDetailActivity?bid=" + bid;
            });
        },

        /**
         * 安卓去到书评类专题页
         */
        androidOpenCommentTopic: function (topicid) {
            this.delyToDownloadUrl(function () {
                window.location.href = "androidqqreader://nativepage/SelectedComment?topicid=" + topicid;
            });
        },

        /**
         * 安卓去到书评详情页
         */
        androidOpenCommentDetail: function (commentid, bid, ctype, uid) {
            this.delyToDownloadUrl(function () {
                window.location.href = "androidqqreader://nativepage/BookCommentDetail?bid=" + bid + "&commentid=" + commentid + "&commentuid=" + uid + "&ctype=" + ctype;
            });
        },

        /**
         * 安卓去到书评区首页
         */
        androidOpenCommentIndex: function (bid, booktitle, ctype) {
            this.delyToDownloadUrl(function () {
                window.location.href = "androidqqreader://nativepage/BookClub?bid=" + bid + "&ctype=" + ctype + "&bname=" + booktitle;
            });
        },


        /**
         * 安卓打开阅读页面
         */
        androidOpenReadPage: function (bid) {
            this.delyToDownloadUrl(function () {
                window.location.href = "androidqqreader://nativepage/ReaderPageActivity?bid=" + bid;
            });
        },

        /**
         * 安卓打开阅读基因页面
         */
        androidOpenReadGene: function () {
            this.delyToDownloadUrl(function (version) {
                var iswx = !!navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/);
                if (iswx) {
                    var versoncode = version.replace("get_install_state:yes_", "");
                    if (versoncode > 67) {//高于4.10版本
                        window.location.href = "androidqqreader50://nativepage/ReadGene";
                    }
                } else {
                    window.location.href = "androidqqreader50://nativepage/ReadGene";
                }
            });
        },
        /**
         * 打开指定页面
         */
        androidOpenUrl: function (url) {
            this.delyToDownloadUrl(function () {
                window.location.href = "androidqqreader://webpage/" + url;
            });
        },

        /**
         * 跳转到下载页面
         */
        doGotoDownload: function (page) {
            if (!page) {
                page = 'all';
            }
            if (JsBridge.iOS) {
                window.location.href = iOSScheme.APPSTORE;
            } else {
                window.location.href = this.getandroidDownloadUrl();
            }
            reportPageEvent('doGotoDownload_' + page);
        },

        /**
         * 微信判断是否安装过qq阅读
         */
        isinstalledByWX: function (callback) {
            WeixinJSBridge.invoke('getInstallState', {
                'packageName': androidScheme.packageName,
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


        delyToDownloadUrl: function (callback) {
            var clickedAt = +new Date;

            //微信进行一下特殊的判断
            var iswx = !!navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/);
            if (iswx) {
                this.isinstalledByWX(function (isInstall, version) {
                    if (isInstall) {
                        callback(version);
                    }
                });
            } else {
                callback();
            }

            if (!id('maskdiv')) {
                setTimeout(function () {
                    if (+new Date - clickedAt < 2000) {
                        window.location.href = this.getandroidDownloadUrl();
                    }
                }, 1000);
            } else {
                dv('maskdiv');
                setTimeout(function () {
                    dh('openapploding');
                    dv('downloadtoast');
                }, 1000);
            }
        },
		
		
		openmask: function () {
            if (!id('maskdiv')) {
                window.location.href = this.getandroidDownloadUrl();
            } else {
                dv('maskdiv');
                dv('downloadtoast');
            }
		},
		
		
		closemask: function(){
			dh('maskdiv');
		},
		
		gotomaskdownload: function(){
			androidScheme.closemask();
			window.location.href = androidScheme.getandroidDownloadUrlV2();
		}

    };


}(this));