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
            return this.android_downloadurl + this.android_downloadch;
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
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/client/bookshelf";
            });
        },

        /**
         * 安卓打开详情页
         */
        androidOpenDetail: function (bid) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader://nativepage/LBStoreConfigDetailActivity?bid=" + bid;
            });
        },

        /**
         * 安卓去到书评类专题页
         */
        androidOpenCommentTopic: function (topicid) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader://nativepage/SelectedComment?topicid=" + topicid;
            });
        },

        /**
         * 安卓去到书评详情页
         */
        androidOpenCommentDetail: function (commentid, bid, ctype, uid) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader://nativepage/BookCommentDetail?bid=" + bid + "&commentid=" + commentid + "&commentuid=" + uid + "&ctype=" + ctype;
            });
        },

        /**
         * 安卓去到书评区首页
         */
        androidOpenCommentIndex: function (bid, booktitle, ctype) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader://nativepage/CommentsList?bid=" + bid + "&ctype=" + ctype + "&bname=" + booktitle;
            });
        },


        /**
         * 安卓打开阅读页面
         */
        androidOpenReadPage: function (bid) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader://nativepage/ReaderPageActivity?bid=" + bid;
            });
        },

        /**
         * 听书页
         * @param bid
         */
        androidOpenMediaBookDetail: function (bid) {
            this.goToMediaBookPageOrDownloadUrl(function () {
                window.location.href = 'uniteqqreader://nativepage/client/listenpage?mediaId=' + bid;
            });
        },

        /**
         * 打开指定页面
         */
        androidOpenUrl: function (url) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://webpage/" + url;
            });
        },

        /**
         * 打开指定页面
         */
        androidMediaOpenUrl: function (url) {
            this.goToMediaBookPageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://webpage/" + url;
            });
        },


        /**
         * 打开分类首页
         */
        androidOpenCateIndex: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/Book_Stacks";
            });
        },

        /**
         * 打开分类列表页
         */
        androidOpenCateDetail: function (actionid) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/Book_Classify_Detail?actionId=" + actionid;
            });
        },

        /**
         * 打开排行榜首页
         */
        androidOpenRankIndex: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/Rank";
            });
        },

        /**
         * 打开分类列表页
         */
        androidOpenRankDetail: function (mTitle, mActionid, mActiontag) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/Rank_Detail?mTitle=" + mTitle + "&mActionid=" + mActionid + "&mActiontag=" + mActiontag;
            });
        },

        /**
         * 打开我的，我的等级页面
         */
        androidOpenProfileLevel: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/ProfileLevel";
            });
        },

        /**
         * 打开我的，包月特权页面
         */
        androidOpenMonthPrivilege: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/MonthPrivilege";
            });
        },


        /**
         * 打开我的，今日任务页面
         */
        androidOpenTodayTask: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/TodayTask";
            });
        },

        /**
         * 打开精选首页
         */
        androidOpenFeed: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/Feed";
            });
        },

        /**
         * 打开精选详情页
         */
        androidOpenFeedDetail: function (cmd, cmdValue) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/FeedDetail?cmd=" + cmd + "&cmdValue=" + cmdValue;
            });
        },

        /**
         * 打开书评广场首页
         */
        androidOpenCommentSquare: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/CommentSquare";
            });
        },


        /**
         * 发现，专题首页（最新/经典)
         * mActiontag 0最新,1经典
         */
        androidOpenSpecialTopic: function (mActiontag) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/SpecialTopic?mActiontag=" + mActiontag;
            });
        },

        /**
         * 发现，专题，指定专题详情页
         */
        androidOpenSpecialTopicDetail: function (url) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/SpecialTopicDetail?url=" + url;
            });
        },


        /**
         * 发现，包月专区首页
         */
        androidOpenMonthArea: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/MonthArea";
            });
        },


        /**
         * 发现，今日免费首页
         */
        androidOpenTodayFree: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/TodayFree";
            });
        },


        /**
         * 发现，名人堂首页
         * 发现，名人堂指定分类
         */
        androidOpenHallOfFame: function (currentItem) {
            this.goToNativePageOrDownloadUrl(function () {
                if (currentItem) {
                    window.location.href = "androidqqreader50://nativepage/HallOfFame?currentItem=" + currentItem;
                } else {
                    window.location.href = "androidqqreader50://nativepage/HallOfFame";
                }
            });
        },

        /**
         * 发现，指定名人堂详情页
         */
        androidOpenHallOfFameDetail: function (name) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/HallOfFameDetail?name=" + name;
            });
        },


        /**
         * 意见反馈页面
         */
        androidOpenFeedBack: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/FeedBack";
            });
        },


        /**
         * 阅读基因
         */
        androidOpenReadGene: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/ReadGene";
            });
        },


        /**
         * 书评区首页
         */
        androidOpenBookClub: function (bid, ctype) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "androidqqreader50://nativepage/BookClub?bid=" + bid + "&ctype" + ctype;
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
         * 分享页跳转到Native页面或下载页
         * @param callback
         */
        goToNativePageOrDownloadUrl: function (callback) {
            //微信或手Q判断下载&打开
            if (isWX() || isMqq()) {
                Appinstalledcheck.checkDownloadApp(function (isAppInstalled) {
                    if (isAppInstalled) {
                        callback();
                    } else {
                        if (!id('maskdiv')) {
                            window.location.href = androidScheme.getandroidDownloadUrl();
                        } else {
                            dv('maskdiv');
                        }
                    }
                });
            } else {
                //不是微信或手q则使用延迟打开下载页的策略
                this.delyToDownloadUrl(callback);
            }
        },

        delyToDownloadUrl: function (callback) {
            callback();

            var clickedAt = +new Date;

            if (!id('maskdiv')) {
                setTimeout(function () {
                    if (+new Date - clickedAt < 2000) {
                        window.location.href = androidScheme.getandroidDownloadUrl();
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


        /**
         * 分享页跳转到听书Native页面或下载页
         * @param callback
         */
        goToMediaBookPageOrDownloadUrl: function (callback) {
            //微信或手Q判断下载&打开
            if (isWX() || isMqq()) {
                Appinstalledcheck.checkDownloadApp(function (isAppInstalled, version) {
                    var isFitVersion;
                    if (isWX()) {//判断是否是5.8及以上版本
                        isFitVersion = version > 81;
                    } else {
                        isFitVersion = version >= "5.8.0";
                    }
                    if (isAppInstalled && isFitVersion) {
                        callback();
                    } else {
                        if (!id('maskdiv')) {
                            window.location.href = this.getandroidDownloadUrl();
                        } else {
                            dv('maskdiv');
                        }
                    }
                });
            } else {
                //不是微信或手q则使用延迟打开下载页的策略
                this.delyToDownloadUrl(callback);
            }
        },
    };
}(this));