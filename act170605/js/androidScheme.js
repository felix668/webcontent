/**
 * Created by boxerli on 15/4/8.
 */

(function (window) {

    window.androidScheme = {

        android_downloadch: '10002412',

        android_downloadurl: "http://a.app.qq.com/o/simple.jsp?pkgname=com.qq.reader",

        packageName: "com.qq.reader",

        /**
         * 获取安卓的下载地址
         * @returns {string}
         */
        getandroidDownloadUrl: function () {
            return this.android_downloadurl;
        },

        /**
         * android直接下载
         * @returns {string}
         */
        getandroidDownloadUrlV2: function () {
            return this.android_downloadurl;
        },

        /**
         * 直接启动app
         */
        androidOpenApp: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/infostream/list";
            });
        },

        /**
         * 安卓打开书籍详情页
         */
        androidOpenDetail: function (bid) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/book/detail?bid=" + bid;
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
                if (bid <= 3) {//指定书评区首页（公共）
                    window.location.href = "uniteqqreader://nativepage/comment/indexforcommonzone?bid=" + bid + "&ctype=" + ctype;
                } else {//指定书评区首页（单书）
                    window.location.href = "uniteqqreader://nativepage/comment/index?bid=" + bid + "&ctype=" + ctype;
                }

            });
        },


        /**
         * 安卓打开阅读页面
         */
        androidOpenReadPage: function (bid) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/client/readepage?bid=" + bid;
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
         * 直播页
         * @param bid
         */
        androidOpenLiveRoom: function (roomId) {
            this.goToLivePageOrDownloadUrl(function () {
                window.location.href = 'uniteqqreader://nativepage/client/liveshow?room_num=' + roomId;
            });
        },

        /**
         * 单书红包页
         */
        androidOpenRedPacketSingleBook: function (bid,bookname,cbid) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = 'uniteqqreader://nativepage/redpacket/singlebook?bid='+bid+'&bookname='+bookname+'&cbid='+cbid;
            });
        },
        /**
         * 红包广场
         */
        androidOpenRedPacketSquare: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = 'uniteqqreader://nativepage/redpacket/squarepage';
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
                window.location.href = "uniteqqreader://nativepage/category/index?categoryFlag=1";
            });
        },

        /**
         * 打开分类列表页
         */
        androidOpenCateDetail: function (actionid) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/category/list?actionId=" + actionid + "&actionTag=,-1,-1,-1,-1,6&pagestamp=1";
            });
        },

        /**
         * 打开排行榜首页
         */
        androidOpenRankIndex: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/rank/index?rankFlag=1";
            });
        },

        /**
         * 打开我的，我的等级页面
         */
        androidOpenProfileLevel: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://webpage/.../grow.html";
            });
        },

        /**
         * 打开我的，包月特权页面
         */
        androidOpenMonthPrivilege: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://webpage/.../privilege.html";
            });
        },


        /**
         * 打开我的，今日任务页面
         */
        androidOpenTodayTask: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://webpage/.../todaytask.html";
            });
        },

        /**
         * 安卓去到大神主页
         */
        androidOpenManitoDetail: function (authorId) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/authors/mainpage?authorId=3004298500784901";
            });
        },

        /**
         * 打开精选首页
         */
        androidOpenFeed: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/infostream/list";
            });
        },

        /**
         * 打开书评广场首页
         */
        androidOpenCommentSquare: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/comment/zonelist";
            });
        },


        /**
         * 发现，包月专区首页
         */
        androidOpenMonthArea: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/discover/vipzone";
            });
        },


        /**
         * 发现，今日免费首页
         */
        androidOpenTodayFree: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/discover/todayfree";
            });
        },


        /**
         * 发现，名人堂首页
         * 发现，名人堂指定分类
         */
        androidOpenHallOfFame: function (currentItem) {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/authors/index";
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
                window.location.href = "uniteqqreader://nativepage/readgene";
            });
        },

        /**
         * 意见反馈
         */
        androidOpenSuggestion: function () {
            this.goToNativePageOrDownloadUrl(function () {
                window.location.href = "uniteqqreader://nativepage/client/suggestion";
            });
        },


        /**
         * 书评区首页
         */
        androidOpenBookClub: function (bid, ctype) {
            this.goToNativePageOrDownloadUrl(function () {
                if (bid > 3) {
                    window.location.href = "uniteqqreader://nativepage/comment/indexforcommonzone?bid=" + bid + "&ctype=" + ctype;
                } else {
                    window.location.href = "uniteqqreader://nativepage/comment/index?bid=" + bid + "&ctype=" + ctype;
                }
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
                window.location.href = window.androidScheme.getandroidDownloadUrl();
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
                        window.location.href = window.androidScheme.getandroidDownloadUrl();
                    }
                });
            } else if (isWeibo()) {
                if (id("adr_weibo_mask")) {
                    dv("adr_weibo_mask");
                } else {
                    //微博分享遮罩
                    var mask = "<div id='adr_weibo_mask'><div class='maskimg'><img src='images/share_tip.png'><p class='willopen'>请点击“…”，选择“用浏览器打开”</p></div>";
                    //改变文档结构会导致绑定的事件失效
                    document.body.innerHTML = document.body.innerHTML + mask;
                }
                id("adr_weibo_mask").onclick = function () {
                    dh("adr_weibo_mask");
                }
            } else {
                //不是微信或手q则使用延迟打开下载页的策略
                this.delyToDownloadUrl(callback);
            }
        },

        delyToDownloadUrl: function (callback) {
            callback();

            var clickedAt = +new Date;

            setTimeout(function () {
                if (+new Date - clickedAt < 2000) {
                    window.location.href = window.androidScheme.getandroidDownloadUrl();
                }
            }, 1000);
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
                        var v = getFloatVersion(version);
                        isFitVersion = v >= 5.8 || v == 5.1;
                    }
                    if (isAppInstalled && isFitVersion) {
                        callback();
                    } else {
                        window.location.href = window.androidScheme.getandroidDownloadUrl();
                    }
                });
            } else if (isWeibo()) {
                if (id("adr_weibo_mask")) {
                    dv("adr_weibo_mask");
                } else {
                    //微博分享遮罩
                    var mask = "<div id='adr_weibo_mask'><div class='maskimg'><img src='images/share_tip.png'><p class='willopen'>请点击“…”，选择“用浏览器打开”</p></div>";
                    //改变文档结构会导致绑定的事件失效
                    document.body.innerHTML = document.body.innerHTML + mask;
                }
                id("adr_weibo_mask").onclick = function () {
                    dh("adr_weibo_mask");
                }
            } else {
                //不是微信或手q则使用延迟打开下载页的策略
                this.delyToDownloadUrl(callback);
            }
        },


        /**
         * 分享页跳转到直播Native页面或下载页
         * @param callback
         */
        goToLivePageOrDownloadUrl: function (callback) {
            //微信或手Q判断下载&打开
            if (isMqq()) {

                Appinstalledcheck.checkDownloadApp(function (isAppInstalled, version) {
                    var isFitVersion;
                    if (isWX()) {
                        isFitVersion = version > 94;
                    } else {
                        isFitVersion = version >= "6.3.6";
                    }

                    if (isAppInstalled && isFitVersion) {
                        callback();
                    } else {
                        window.location.href = window.androidScheme.getandroidDownloadUrl();
                    }
                });

            } else if (isWeibo()) {
                if (id("adr_weibo_mask")) {
                    dv("adr_weibo_mask");
                } else {
                    //微博分享遮罩
                    var mask = "<div id='adr_weibo_mask'><div class='maskimg'><img src='images/share_tip.png'><p class='willopen'>请点击“…”，选择“用浏览器打开”</p></div>";
                    //改变文档结构会导致绑定的事件失效
                    document.body.innerHTML = document.body.innerHTML + mask;
                }
                id("adr_weibo_mask").onclick = function () {
                    dh("adr_weibo_mask");
                }
            } else {
                //不是微信或手q则使用延迟打开下载页的策略
                this.delyToDownloadUrl(callback);
            }
        },
    };
}(this));