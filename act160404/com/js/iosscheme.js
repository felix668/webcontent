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

/**
 * 打开url
 *
 * @param scheme
 * @param fail
 */
iOSScheme.open = function (scheme, fail) {
	alert(scheme);
    var clickedAt = +new Date;
    if (!fail) {
        fail = iOSScheme.APPSTORE;
    }
    window.location = scheme;
    setTimeout(function () {
        if (+new Date - clickedAt < 2000) {
            window.location = fail;
        }
    }, 1000);
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
