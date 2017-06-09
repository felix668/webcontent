//与终端本地协议相关逻辑
var iOSScheme = {};

iOSScheme.APPSTORE = "https://itunes.apple.com/cn/app/qq-yue-du/id487608658?mt=8";


/**
 * 只是打开书城
 * @returns {String}
 */
iOSScheme.simpleScheme = function () {
    return "qqreader://com.tencent.reader";
};

/**
 * 获取书籍阅读页url
 *
 * @param bid
 * @param cid
 * @returns {String}
 */
iOSScheme.getReadScheme = function (bid, cid) {
    var o = {
        "bookId": "" + bid,
        "chapterId": cid
    };
    return "qqreader://com.tencent.reader?action=openBook&parameter=" + encodeURIComponent(json(o));
};

iOSScheme.toRead = function (bid, cid) {
    var b = iOSScheme.browser();
    if (b.ios || b.iPhone || b.iPad) {
        iOSScheme.open(iOSScheme.getReadScheme(bid, cid));
    } else if (b.android) {// android跳转至详情
        Local.goAppReader('nativepage', 'LBStoreConfigDetailActivity?bid='
            + bid, 'http://ubook.qq.com/read.html?bid=' + bid);
    }
};

/**
 * 获取书籍详情页url
 *
 * @param bid
 * @returns {String}
 */
iOSScheme.getBookScheme = function (bid) {
    var o = {
        "bookId": "" + bid
    };
    return "qqreader://com.tencent.reader?action=openDetail&parameter=" + encodeURIComponent(json(o));
};


/**
 * 获取单书红包详情页url
 *
 * @param bid
 * @returns {String}
 */
iOSScheme.getRedPacketSingleBook = function (bid) {
    var o = {
        "qurl": "uniteqqreader://nativepage/redpacket/singlebook?bid=" + bid
    };
    return "qqreader://com.tencent.reader?action=bookqurl&parameter=" + encodeURIComponent(json(o));
    // return 'uniteqqreader://nativepage/redpacket/singlebook?bid='+bid;
};


/**
 * 获取单书红包广场url
 *
 * @param bid
 * @returns {String}
 */
iOSScheme.getRedPacketSquare = function () {
    return 'uniteqqreader://nativepage/redpacket/squarepage';
};


iOSScheme.toBook = function (bid, url) {
    var b = iOSScheme.browser();
    if (b.ios || b.iPhone || b.iPad) {
        iOSScheme.open(iOSScheme.getBookScheme(bid), url);
    } else if (b.android) {
        Local.goAppReader('nativepage', 'LBStoreConfigDetailActivity?bid='
            + bid, 'http://ubook.qq.com/intro.html?bid=' + bid);
    }
};

iOSScheme.getGeneScheme = function () {
    return "qqreader://com.tencent.reader?action=openGene";
};

iOSScheme.toGene = function () {
    var b = iOSScheme.browser();
    if (b.ios || b.iPhone || b.iPad) {
        iOSScheme.open(iOSScheme.getGeneScheme());
    }
};

iOSScheme.getLiveRoomScheme = function (roomId) {
    return "uniteqqreader://nativepage/client/liveshow?room_num=" + roomId;
};

iOSScheme.toLiveRoom = function (roomId) {
    var b = iOSScheme.browser();
    if (b.ios || b.iPhone || b.iPad) {
        iOSScheme.openMask(iOSScheme.getLiveRoomScheme(roomId));
    }
};

iOSScheme.toRedPacketDetail = function (bid) {
    var b = iOSScheme.browser();
    if (b.ios || b.iPhone || b.iPad) {
        iOSScheme.openMask(iOSScheme.getRedPacketSingleBook(bid));
    }
};


iOSScheme.toRedPacketSquare = function (bid) {
    var b = iOSScheme.browser();
    if (b.ios || b.iPhone || b.iPad) {
        iOSScheme.openMask(iOSScheme.getRedPacketSquare());
    }
};


iOSScheme.openMask = function (scheme, fail) {
    var clickedAt = +new Date;
    if (!fail) {
        fail = iOSScheme.APPSTORE;
    }
    if (isWeibo() || isWX() || isMqq()) {
        if (id("ios_weibo_mask")) {
            dv("ios_weibo_mask");
        } else {
            //微博分享遮罩
            var mask = "<div id='ios_weibo_mask'><div class='maskimg'><img src='images/share_tip.png'><p class='willopen'>请点击“…”，选择“用Safari打开”</p></div>";
            //改变文档结构会导致绑定的事件失效
            document.body.innerHTML = document.body.innerHTML + mask;
        }
        id("ios_weibo_mask").onclick = function () {
            dh("ios_weibo_mask");
        }
    } else {
        window.location = scheme;
        setTimeout(function () {
            if (+new Date - clickedAt < 6000) {
                window.location = fail;
            }
        }, 5000);
    }
};

/**
 * 通过app打开外部地址的url
 *
 * @param url
 * @returns {String}
 */
iOSScheme.getUrlScheme = function (url) {
    var o = {
        "url": "" + url
    };
    return "qqreader://com.tencent.reader?action=openUrl&parameter=" + encodeURIComponent(json(o));
};

iOSScheme.toUrl = function (url) {
    var b = iOSScheme.browser();
    if (b.ios || b.iPhone || b.iPad) {
        iOSScheme.open(iOSScheme.getUrlScheme(url));
    } else if (b.android) {
        Local.goAppReader('webpage', url);

    }
};

/**
 * 打开url
 *
 * @param scheme
 * @param fail
 */
iOSScheme.open = function (scheme, fail) {
    var clickedAt = +new Date;
    if (!fail) {
        fail = iOSScheme.APPSTORE;
    }
    if (isWeibo()) {
        if (id("ios_weibo_mask")) {
            dv("ios_weibo_mask");
        } else {
            //微博分享遮罩
            var mask = "<div id='ios_weibo_mask'><div class='maskimg'><img src='images/share_tip.png'><p class='willopen'>请点击“…”，选择“用Safari打开”</p></div>";
            //改变文档结构会导致绑定的事件失效
            document.body.innerHTML = document.body.innerHTML + mask;
        }
        id("ios_weibo_mask").onclick = function () {
            dh("ios_weibo_mask");
        }
    } else {
        var version = getWXVersion();
        if (version > 655) { // 解决微信6.5.5之后唤起APP的问题
            if (window.WeixinJSBridge) {
                doLaunch(scheme);
            }else {
                document.addEventListener('WeixinJSBridgeReady', function () {
                    doLaunch(scheme); //此时立即调用权限可能还未准备好，所以doLaunch里需要延迟调用
                });
            }
        } else {
            location.href = scheme;
        }
        setTimeout(function () {
            if (+new Date - clickedAt < 2000) {
                window.location = fail;
            }
        }, 1000);
    }
};

/**
 * 打开听书
 * @returns {String}
 */
iOSScheme.toMediaBook = function (bid) {
    return "uniteqqreader://nativepage/audiobook/detail?mediaId=" + bid;
};


/**
 * os判断
 */
iOSScheme.browser = function () {
    var u = navigator.userAgent.toLowerCase();
    return {
        txt: u, // 浏览器版本信息
        ios: !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/), // ios终端
        android: u.indexOf('android') > -1, // android终端
        iPhone: u.indexOf('iphone') > -1, // 是否为iPhone
        iPad: u.indexOf('ipad') > -1
        // 是否iPad
    };
};
