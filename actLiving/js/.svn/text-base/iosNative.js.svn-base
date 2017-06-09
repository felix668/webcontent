//与终端本地js调用相关的都放在这里
var iOSNative = {};
iOSNative.callbacks = [];
iOSNative.callbackindex = 0;

//获取固定的透传参数
function getTransparentParam() {
    var seturlparam = function (s, a) {
        var b = param(a);
        if (b != "undefined" && typeof b != 'undefined') {
            if (s == "") {
                s = s + a + "=" + b;
            } else {
                s = s + "&" + a + "=" + b;
            }
        }
        return s;
    };
    var str = "rtt=0";
    str = seturlparam(str, "sid");
    str = seturlparam(str, "usid");
    str = seturlparam(str, "gsid");
    str = seturlparam(str, "platform");
    str = seturlparam(str, "version");
    str = seturlparam(str, "lm_f");
    str = seturlparam(str, "tf");
    str = seturlparam(str, "origin");
    str = seturlparam(str, "skey");
    str = seturlparam(str, "uin");
    str = seturlparam(str, "qimei");
    str = seturlparam(str, "loginType"); //微信登录用
    str = seturlparam(str, "uid");
    str = seturlparam(str, "access_token");

    return str;
}

//注册分享事件
iOSNative.shareEventListen = function (title, intro, img, url) {
    document.addEventListener('ondataavailable', function (shareevent) {
        iOSNative.syncShareInfo(title, intro, img, url);
    }, false);
    var shareevent = document.createEvent('HTMLEvents');
    shareevent.initEvent("ondataavailable", true, true);
    document.dispatchEvent(shareevent);
};
//注册一键加入书架事件
iOSNative.addToShelfBooks = function (bids, needtoast) {

    while (bids.indexOf("\r\n") > 0) {
        bids = bids.replace("\r\n", "");
    }
    var booksinfo = obj(bids);
    for (var i = 0; i < booksinfo.length; i++) {
        var bookinfo = booksinfo[i];
        if (i == booksinfo.length - 1)
            iOSNative.addToShelf(bookinfo, needtoast);
        else
            iOSNative.addToShelf(bookinfo, 0);
    }
};

iOSNative.reqaObj = function (url, callback, callbackSections, errcallback) {
    iOSNative.dodefaultLoading(callbackSections); //加载提示
    url += url.indexOf('?') != -1 ? '&' : '?';
    url = url + getTransparentParam();
    var reqfun = url.indexOf('version') != -1 && url.indexOf('loginType') != -1;
    // 加上条件tf=2时,走reqClient
    var isPCReq = (reqfun || param("tf") && param("tf") == 1) && !(param("tf") && param("tf") == 2);
    if (isPCReq) {//PC端请求走ajax请求’,校验请求参数，支持版本兼容
        reqa(url, function (txt) {
            if (nl(txt)) {
                callback(null);
            } else {
                var t = typeof txt;
                var tmp;
                if (t == 'string') {
                    txt = txt.replace(/(\0|\b|\n|\f|\r|\t|\v)/g, "").toString();
                    tmp = obj(txt);
                } else {
                    tmp = txt;
                }
                callback(tmp);
            }
        }, errcallback);
    } else {
        //  调用客户端请求:url：协议地址 ；
        iOSNative.reqClient(url, function (code, str) {

            if (code == 200) {//请求正常返回
                var s = decodeURIComponent(str);
                callback(JSON.parse(s));
            } else {//请求错误或者请求超时
                errcallback();
            }
        });
    }
};


iOSNative.reqByClient = function (url, callback) {
    //  调用客户端请求:url：协议地址 ；
    iOSNative.reqClient(url, function (code, str) {
        if (code == 200) {//请求正常返回
            var s = decodeURIComponent(str);
            callback(JSON.parse(s));
        }else {
            callback();
        }
    });

};


/**
 * 调用客户端的方法请求http数据
 * @param url
 * @param callback
 * @param forceReload 0 不强制刷新 1 强制刷新
 */
iOSNative.reqClient = function (url, callback) {
    iOSNative.callbackindex++;
    iOSNative.callbacks[iOSNative.callbackindex] = callback;
    try {
    	$.get("https://ptcommon.reader.qq.com/common/reportBookShare?event=DEBUG_EVENT_1&type=DEBUG&bid=" + callback + "&platform=" + url, function () {});
    } catch (ex) {
    	// ignore
    }
    try {
        C.callCocoa({
            "method": "reqclient",
            "url": url,
            "function": 'iOSNative.callbacks[\'' + iOSNative.callbackindex + '\']'
        });
    } catch (e) {
        try {
        	$.get("https://ptcommon.reader.qq.com/common/reportBookShare?event=DEBUG_EVENT_2&type=DEBUG&platform=" + e, function () {});
        } catch (ex) {
        	// ignore
        }
    }
};


/**
 * 增加默认的加载提示
 * @param callbackSections
 */
iOSNative.dodefaultLoading = function (callbackSections) {
    //统一做loading的样式处理
    if (callbackSections && callbackSections.length && callbackSections.length > 0) {
        for (var section in callbackSections) {
            ih(callbackSections[section], '<div class="loadingTop loading"><span class="loadtc"><span class="loads"><svg width="24" height="23" viewBox="0 0 48 46" xmlns="http://www.w3.org/2000/svg"><path d="M47.43 24C47.43 11.06 36.94.57 24 .57S.57 11.06.57 24c0 9.27 5.434 17.55 13.72 21.328 1.006.458 2.192.015 2.65-.99.46-1.005.015-2.192-.99-2.65C9.076 38.555 4.57 31.688 4.57 24c0-10.73 8.7-19.43 19.43-19.43S43.43 13.27 43.43 24c0 7.66-4.473 14.505-11.307 17.655-1.004.462-1.442 1.65-.98 2.653.463 1.004 1.65 1.442 2.654.98C42.037 41.49 47.43 33.234 47.43 24z" class="cls-default"/></svg></span>正在加载...</span></div>');
        }
    }
};

iOSNative.postaObj = function (url, formvalue, callback) {
    // 需要添加必要的参数
    url += url.indexOf('?') != -1 ? '&' : '?';
    url = url + getTransparentParam();
    // pc上浏览测试
    posta(url, formvalue, function (txt) {
        if (nl(txt)) {
            callback(null);
        } else {
            var tmp = obj(txt);
            callback(tmp);
        }
    });
};

iOSNative.showToast = function (msg,msgType) {
    var type = nl(msgType) ? 0 : msgType;
    C.callCocoa({
        "method": "toastMsg",
        "msg": msg,
        "type": type//0,默认  1,勾  2,叉
    });
};

//互动专题页，加入话题讨论
iOSNative.openTopicDiscuss = function (tid, ctype, pos) {
    try {
        reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.COMMENT);
        C.callCocoa({
            "method": "openTopicDiscuss",
            "tid": tid,
            "ctype": ctype,
            "pos": pos
        });
    } catch (err) {
        iOSNative.showToast("callCocoa Failed:" + err.message);
    }
};

//添加回复
iOSNative.openTopicComment = function (tid, ctype, pos) {
    try {
        reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.REPLY);
        C.callCocoa({
            "method": "openTopicComment",
            "tid": tid,
            "ctype": ctype,
            "pos": pos
        });
    } catch (err) {
        iOSNative.showToast("callCocoa Failed:" + err.message);
    }
};

/**
 * a：仅微信登录页面；b：仅QQ登录页面；c：微信+qq登录页面；d：微信+qq+游客登录的页面；
 * 默认：qq和微信登录
 * @param reload_url
 * @param type
 */
iOSNative.login = function (reload_url, type) {
    if (!reload_url)
        reload_url = window.location.href;
    C.callCocoa({
        "method": "login",
        "reload_url": reload_url,
        "type": type
    });
};

iOSNative.invokeBookDetailPageNativeModule = function (data) {
    var pageinfo = {};
    pageinfo.url = data.url;
    var bookinfo = iOSNative.makeBookInfo(data);
    _BOOKINFO = bookinfo;
    try {
        C.callCocoa(combineObj({
            "method": "bookinfo"
        }, bookinfo));
    } catch (e) {
    }
};

iOSNative.makeBookInfo = function (data) {
    var bookinfo = {};
    var book = data.book;
    var bookfrom = iOSNative.wrapBookFrom(book.from);
    bookinfo.id = (book.id || book.bid) + "";// bid使用String类型
    bookinfo.title = book.title;
    bookinfo.author = book.author;
    bookinfo.downloadURL = data.downloadurl;
    bookinfo.coverURL = book.cover;
    bookinfo.version = book.lastChapter;
    bookinfo.chapterId = -1;
    bookinfo.chapterTitle = "";
    bookinfo.drm = book.drm;
    bookinfo.finished = book.finished;
    bookinfo.bookfrom = bookfrom;
    bookinfo.fileFormat = data.format;
    bookinfo.payed = data.payed;
    bookinfo.lastcname = book.lastChapterName;
    bookinfo.lastuploadtime = book.lastChapterUploadTime;
    bookinfo.origin = nl(param("origin")) ? 0 : param("origin");
    bookinfo.downloadtype = data.downloadtype;
    bookinfo.bookprice = book.price;// 原价
    bookinfo.discount = data.discount;// 打折
    bookinfo.dismsg = data.discountdesc;// 打折说明
    bookinfo.applePid = param("client") == 3 ? book.appleIpadPid
        : book.appleIphonePid;
    bookinfo.publishOnIos = "1";
    bookinfo.dlfile = !nl(book.dlfile) ? book.dlfile : "";
    if (!nl(book.intro))
        bookinfo.intro = book.intro.replace(new RegExp('(["\"])', 'g'), "\\\"");
    else
        bookinfo.intro = "";
    return bookinfo;
};

iOSNative.wrapBookFrom = function (bookfrom) {
    if (nl(bookfrom) || bookfrom == 0) {
        return "QQ阅读";
    } else if (bookfrom == 1) {
        return "云起书院";
    } else if (bookfrom == 2) {
        return "创世中文网";
    } else if (bookfrom == 3) {
        return "华夏";
    } else {
        return "QQ阅读";
    }
};

iOSNative.openDetail = function (url) {
    url += url.indexOf('?') != -1 ? '&' : '?';
    url = url + getTransparentParam();
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.URL);
    C.callCocoa({
        "method": "open_detail",
        "url": url
    });
};

iOSNative.customUI = function (title,titlebarcolor) {
    C.callCocoa({
        "method": "custom_ui",
        "title": title,
        "titlebarcolor": titlebarcolor
    });
};

iOSNative.yearVipPopup = function (url) {
    C.callCocoa({
        "method": "yearVipPopup",
        "url": url
    });
};


iOSNative.loadingComplete = function () {
    C.callCocoa({
        "method": "loadingComplete",
        "url": ""
    });
};


iOSNative.nativeDetail = function (bid, origin, lm_f, frombid, data_type, alg, pos, tid) {
    lm_f = lm_f || "";
    frombid = frombid || "";
    data_type = data_type || "";
    alg = alg || "";
    pos = pos || "";
    tid = tid || "";
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.BOOK, "", bid);
    C.callCocoa({
        "method": "native_detail",
        "bid": bid,
        "origin": "" + origin,
        "alg": "" + alg,
        "data_type": "" + data_type,
        "frombid": frombid,
        "lm_f": "" + lm_f,
        "pos": pos + "",
        "tid": tid + ""
    });
};
//加文案
//向客户端同步分享信息，分享用common目录的页面
iOSNative.syncShareInfo = function (title, intro, img, url, pos, tid, text) {
    title = title || "专题分享";
    intro = intro || "专题分享";
    img = img || (pagesever() + "/images/logoicon.jpg");
    url = url || (pagesever() + "/topicV2.html?tf=1&share=1&tid=" + param('tid')).replace(_CONF.VERSION, "common");
    C.callCocoa({
        "method": "web_share",
        "title": title,
        "intro": intro,
        "img": img,
        "url": url,
        "pos": pos,
        "tid": tid,
        "text": text || "#海量原著 想读就读# 传世名著，大神佳作，应有尽有，快和我一起去QQ阅读读书吧！"
    });
};

//唤起客户端分享控件
iOSNative.shareControl = function () {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.SHARE);
    C.callCocoa({
        "method": "sharecontrol"
    })
};

//加入单本书架
iOSNative.addOneToShelf = function (bookinfo, needtoast) {
    if (needtoast == undefined)
        needtoast = 1;
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.SHELF);
    C.callCocoa({
        "method": "addToShelf",
        "author": bookinfo.author,
        "id": bookinfo.bid,
        "title": bookinfo.title,
        "needtoast": needtoast
    });
};

//加入书架
iOSNative.addToShelf = function (bookinfo, needtoast, pos, tid) {
    if (needtoast == undefined)
        needtoast = 1;
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.SHELF);
    C.callCocoa({
        "method": "addToShelf",
        "id": bookinfo.bid,
        "title": bookinfo.title,
        "intro": bookinfo.intro,
        "author": bookinfo.author,
        "origin": bookinfo.origin || "",
        "finished": bookinfo.finished,
        "downloadURL": bookinfo.downloadURL || "",
        "fileFormat": bookinfo.fileFormat || "",
        "version": bookinfo.version || "",
        "chapterTitle": bookinfo.chapterTitle || "第一章",
        "updatetime": bookinfo.updatetime || 0,
        "type": bookinfo.type || 0,
        "isPreview": bookinfo.isPreview || 0,
        "downloadinfo": iOSNative.getdownload(bookinfo.downloadinfo),
        "needtoast": needtoast,
        "pos": pos,
        "tid": tid
    });
};

iOSNative.getdownload = function (downloadinfo) {
    for (var key in downloadinfo) {
        if (downloadinfo[key]) {
            return downloadinfo[key];
        }
    }
};


iOSNative.goBookDetail = function (bid, origin) {
    var url = "book_share.html?bid=" + bid;
    iOSNative.openPage(url, origin);
};

// 注意 ！！5.9 把 open_inside 换成了 gotoUrl
//客户端内页面跳转
//客户端去除了uri编码，务必保证url中编码的合法性
iOSNative.openInside = function (url) {
    url += url.indexOf('?') != -1 ? '&' : '?';
    url = url + getTransparentParam();
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.URL);
    C.callCocoa({
        "method": "open_inside",
        "url": url
    });
};

iOSNative.readOnline = function (bookinfo, chapterId, chapterTitle, pos, tid) {
    _BOOKINFO = bookinfo ? bookinfo : _BOOKINFO;
    if (_BOOKINFO) {
        chapterId = chapterId || -1;
        chapterTitle = chapterTitle || "";
        C.callCocoa({
            "method": "readonline",
            "id": "" + _BOOKINFO.id,
            "title": _BOOKINFO.title,
            "author": _BOOKINFO.author,
            "downloadURL": _BOOKINFO.downloadURL,
            "coverURL": _BOOKINFO.coverURL,
            "version": "" + _BOOKINFO.version,
            "chapterId": chapterId,
            "chapterTitle": chapterTitle,
            "drm": "" + _BOOKINFO.drm,
            "finished": _BOOKINFO.finished,
            "fileFormat": "" + _BOOKINFO.fileFormat,
            "publishOnIos": "1",
            "applePid": "" + _BOOKINFO.applePid,
            "downloadinfo": "" + _BOOKINFO.dlfile,
            "pos": pos,
            "tid": tid
        });
    }
};

iOSNative.nativeRead = function (bookinfo, pos, tid) {
    if (bookinfo) {
        chapterId = chapterId || -1;
        chapterTitle = chapterTitle || "";
        reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.READ);
        C.callCocoa({
            "method": "readonline",
            "id": "" + bookinfo.id,
            "title": bookinfo.title,
            "author": bookinfo.author,
            "downloadURL": bookinfo.downloadURL,
            "coverURL": bookinfo.coverURL,
            "version": "" + bookinfo.version,
            "chapterId": chapterId,
            "chapterTitle": chapterTitle,
            "drm": "" + bookinfo.drm,
            "finished": bookinfo.finished,
            "fileFormat": "" + bookinfo.fileFormat,
            "publishOnIos": "1",
            "applePid": "" + bookinfo.applePid,
            "pos": pos,
            "tid": tid
        });
    }
};


/**
 * android app唤起逻辑
 *
 * @param schema
 * @param url
 * @param e
 */
iOSNative.goAppReader = function (schema, url, e) {
    var rUrl = "androidqqreader://" + schema + "/" + url;
    // 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
    // 否则打开a标签的href链接
    var ifr = document.createElement('iframe');
    ifr.src = rUrl;
    ifr.style.display = 'none';
    document.body.appendChild(ifr);
    window.setTimeout(function () {
        window.location = e;
        document.body.removeChild(ifr);
    }, 3000);
};

iOSNative.openPage = function (srcurl, origin, pagecode) { //打开链接
    var testFlag = param("tf");
    var detailobj = {};
    var url = srcurl;
    if (url.indexOf('?') < 0) {
        url += '?';
    }

    url += iOSNative.getExParamStr(detailobj, 1, 0, 1);
    url = url + iOSNative.getExparamWithoutClient();
    url = url.replace('?&', '?');
    if (testFlag == 1) {
        detailobj.url = url;
        detailobj.origin = param('origin');
        detailobj.alg = param('alg');
        detailobj.datatype = param('datatype');
        detailobj.fromBid = param('fromBid');
        reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.URL);
        if (url.indexOf('topicV2.html') >= 0) {
            window.location.href = pagesever() + "/" + url;
        } else {
            if (url.indexOf('http') >= 0) {
                window.location.href = url;
            } else {
                window.location.href = iospagesever() + "/" + url;
            }
        }

    } else {
        if (url.indexOf('book_share.html') >= 0) {
            if (!origin) {
                origin = getParam(url, 'origin');
            }
            iOSNative.nativeDetail(getParam(url, 'bid'), origin);
        } else if (url.indexOf('topicV2.html') >= 0) {
            window.location.href = pagesever() + "/" + url;
        } else {
            iOSNative.openInside(srcurl);
        }
    }
};

//临时方法
iOSNative.openUrl57 = function (srcurl, origin, pagecode) { //打开链接
    var testFlag = param("tf");
    var detailobj = {};
    var url = srcurl
    if (url.indexOf('?') < 0) {
        url += '?';
    }

    url += iOSNative.getExParamStr(detailobj, 1, 0, 1);
    url = url + iOSNative.getExparamWithoutClient();
    url = url.replace('?&', '?');
    detailobj.url = url;
    detailobj.origin = param('origin');
    detailobj.alg = param('alg');
    detailobj.datatype = param('datatype');
    detailobj.fromBid = param('fromBid');
    window.location.href = url;

};

iOSNative.openPageEx = function (pageobj, replaceorigin, pos, tid) { //打开链接

    pageobj.extraurl = iOSNative.getExParamStr(pageobj, 1, replaceorigin, 1);
    var testFlag = param("tf");
    var url = '';
    if (testFlag == 1) {
        if (pageobj.url.indexOf('?') >= 0) {
            url = pageobj.url + iOSNative.getExparamWithoutClient();
        } else {
            url = pageobj.url + '?' + iOSNative.getExparamWithoutClient();
        }

        if (pageobj.extraurl) {
            url += pageobj.extraurl;
        }
        url.replace('?&', '?');
        reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.URL);
        if (url.indexOf('topicV2.html') >= 0 || url.indexOf('bookDetailShare.html') >= 0) {
            window.location.href = pagesever() + "/" + url;
        } else {
            if (url.indexOf('http') >= 0) {
                window.location.href = url;
            } else {
                window.location.href = iospagesever() + "/" + url;
            }
        }
    } else {
        if (url.indexOf('topicV2.html') >= 0) {
            window.location.href = pagesever() + "/" + url;
        } else {
            iOSNative.nativeDetail(pageobj.bid, pageobj.stat_params.origin, '', '', '', '', pos, tid);
        }

    }
};

/**
 * 获取额外的链接参数
 * @returns {*}
 * @param detailobj
 * @param replace_lmf
 * @param replaceorigin
 * @param addlmfh
 */
iOSNative.getExParamStr = function (detailobj, replace_lmf, replaceorigin, addlmfh) {
    var url = detailobj.url;
    var origin = detailobj.origin;
    var alg = detailobj.alg;
    var datatype = detailobj.datatype;
    var fromBid = detailobj.fromBid;

    var params = "";
    var lm_f;
    if (replace_lmf == 1) {
        lm_f = getPageName();//lm_f
    } else {
        lm_f = nl(param('lm_f')) ? getPageName() : param('lm_f'); //lm_f
    }
    params += '&lm_f=' + lm_f;
    var lmfh = param('lmh_f');
    if (nl(lmfh)) {
        lmfh = lm_f;
    } else {
        // 历史最长的只能增加到5级，再高不予记录了
        var reg = new RegExp("_", "g");
        if ((!lmfh.match(reg) || lmfh.match(reg).length < 5) && addlmfh) {
            lmfh += ("_" + lm_f);
        }
    }

    params += '&lmh_f=' + lmfh;//访问历史
    params += nl(alg) ? '' : '&alg=' + alg;
    params += nl(datatype) ? '' : '&data_type=' + datatype;
    params += nl(fromBid) ? '' : '&fromBid=' + fromBid;

    if ((url && url.indexOf('origin=') < 0) || (url && url.indexOf('bookDetail') >= 0)) {
        if (!nl(param("origin")) && !replaceorigin) {
            params += '&origin=' + param("origin"); //统计用的区分号
        } else if (!nl(origin)) {
            params += '&origin=' + origin; //统计用的区分号
        }
    }
    return params;
};

iOSNative.getExparamWithoutClient = function () {
    var params = '';
    if (!nl(param("tf"))) {
        params += '&tf=' + param("tf"); //是否走pc测试条件
    }

    if (!nl(param("sid"))) {
        params += '&sid=' + param("sid");
    }
    //需要预先从cookie中获取
    params = getparamfcookieandurl(params, "loginType");
    params = getparamfcookieandurl(params, "uid");
    params = getparamfcookieandurl(params, "access_token");
    params = getparamfcookieandurl(params, "usid");
    params = getparamfcookieandurl(params, "timi");
    params = getparamfcookieandurl(params, "skey");

    if (!nl(param("platform"))) {
        params += '&platform=' + param("platform");
    }
    if (!nl(param("version"))) {
        params += '&version=' + param("version");
    }
    if (!nl(param("qimei"))) {
        params += '&qimei=' + param("qimei");
    }

    if (!nl(param("itemid"))) {
        params += '&itemid=' + param("itemid");
    }

    if (!nl(param("iosversion"))) {
        params += '&iosversion=' + param("iosversion");
    }

    params += nl(param('share')) ? '' : '&share=' + param('share');

    if (!nl(param("channel"))) {
        params += '&channel=' + param("channel"); //渠道号
    }

    params += '&fp=1';//这个参数用于判断是否是页面间跳转

    return params;
};

function getparamfcookieandurl(params, key) {
    //尝试从cookie中获取
    if (!nl(ckg(key))) {
        params += '&' + key + '=' + ckg(key);
    } else {
        if (!nl(param(key))) {
            params += '&' + key + '=' + param(key);
        }
    }
    return params;
}

//特权页开通包月
iOSNative.payMonthVip = function (month) {
    C.callCocoa({
        "method": "paymonthvip",
        "month": month
    });
};

//到作者书籍列表页
iOSNative.goSearchBook = function (searchkey) {
    C.callCocoa({
        "method": "go_search",
        "searchkey": searchkey
    });
};

//三级页取消分享按钮  //0隐藏 1显示
iOSNative.setShowShareButton = function (flag) {
    C.callCocoa({
        "method": "custom_ui",
        "showsharebutton": flag
    });
};
//打开包月开通页面
iOSNative.openVip = function (isLogin, pos, tid) {
    reportPageEvent(ZBook.EventName.MONTHV2, ZBook.EventType.VIP);
    C.callCocoa({
        "method": "subscribe",
        "pos": pos,
        "tid": tid
    });
};
//进入特权页
iOSNative.monthprivilege = function (pos, tid) {
    C.callCocoa({
        "method": "subscribeintro",
        "pos": pos,
        "tid": tid
    });
};
//去充值页
iOSNative.openrecharge = function (pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.CHARGE);
    C.callCocoa({
        "method": "recharge",
        "pos": pos,
        "tid": tid
    });
};
//账户信息:1我的账户,2包月特权,3收藏,4充值,5基因
iOSNative.usercenter = function (accountid, pos, tid) {
    C.callCocoa({
        "method": "usercenter",
        "account": accountid,
        "pos": pos,
        "tid": tid
    });
};
//关闭弹窗
iOSNative.closepopup = function () {
    C.callCocoa({
        "method": "close_web"
    });
};
//tab跳转，默认跳精选
iOSNative.gotab = function (id) {
    C.callCocoa({
        "method": "go_tab",
        "id": id || 2
    });
};


//对书籍评价
iOSNative.commentbook = function (id, pos, tid) {
    C.callCocoa({
        "method": "writeBookComment",
        "bid": id,
        "pos": pos,
        "tid": tid
    });
};
//去书评区
iOSNative.openBookCommentArea = function (id, pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.COMMENT_AREA);
    C.callCocoa({
        "method": "openBookCommentArea",
        "bid": id,
        "pos": pos,
        "tid": tid
    });
};

//去书库
iOSNative.gotoBookCategory = function (id, name, pos, tid) {
    C.callCocoa({
        "method": "gotoBookCategory",
        "id": id,
        "name": name,
        "pos": pos,
        "tid": tid
    });
};
//去搜索
iOSNative.gotoSearch = function (tag, pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.SEARCH);
    C.callCocoa({
        "method": "gotoSearch",
        "tag": tag,
        "pos": pos,
        "tid": tid
    });
};
//去包月
iOSNative.gotoMonthRegion = function (pos, tid) {

    C.callCocoa({
        "method": "gotoMonthRegion",
        "pos": pos,
        "tid": tid
    });
};
//去今日免费
iOSNative.gotoTodayFree = function (pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.FREE);
    C.callCocoa({
        "method": "gotoTodayFree",
        "pos": pos,
        "tid": tid
    });
};
//去排行
iOSNative.gotoNewRank = function (pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.RANK);
    C.callCocoa({
        "method": "gotoNewRank",
        "pos": pos,
        "tid": tid
    });
};
//去名人堂
iOSNative.gotoHallOfFame = function (authorId, pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.HALL);
    C.callCocoa({
        "method": "gotoHallOfFame",
        "authorid": authorId,
        "pos": pos,
        "tid": tid
    });
};

//新手读书性格
iOSNative.gotoUrl = function (url, title, pos, tid) {
    C.callCocoa({
        "method": "gotoUrl",
        "url": url,
        "title": title,
        "pos": pos,
        "tid": tid
    });
};

//QURL跳转,用户跳转客户端native页面
iOSNative.gotoQUrl = function (url, pos, tid) {
    C.callCocoa({
        "method": "gotoQUrl",
        "url": url,
        "pos": pos,
        "tid": tid
    });
};

//QURL跳转,用户跳转客户端native页面
iOSNative.gotoLiveQUrl = function (url) {
    C.callCocoa({
        "method": "gotoQUrl",
        "url": url
    });
};

//QURL跳转(公用qurl跳转)
iOSNative.gotoCommonQUrl = function (url) {
    C.callCocoa({
        "method": "gotoQUrl",
        "url": url
    });
};

//跳转到native详情页
iOSNative.openDetailByCode = function (url) {
    iOSNative.openDetail(url);
};

/**
 * 打开评论详情
 */
iOSNative.opencommentdetail = function (cid, bid, pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.COMMENT_DETAIL);
    C.callCocoa({
        "method": "opencommentdetail",
        "commentId": cid,
        "bookId": bid,
        "pos": pos,
        "tid": tid
    });
};


/**
 * 批量加书架
 * @param bids（数组格式 Array）
 */
iOSNative.addBatchBookSelft = function (bids, pos, tid) {
    var arry = new Array();
    for (var i = 0; i < bids.length; i++) {
        arry[i] = ("bid:" + bids[i]);
    }
    C.callCocoa({
        "method": "addshelfall",
        "bookids": json(arry),
        "pos": pos,
        "tid": tid
    });
};

function getPageName() {
    var d = location.href.split('/');
    pageName = d[d.length - 1].split('.html')[0];
    if (param('tf') == 1)
        console.log(pageName);
    return pageName;
}

/**
 * 换皮肤
 */
iOSNative.useSkinNew = function (themeid) {
    if (nl(themeid)) return;
    try {
        //alert(data);
        switch (themeid) {
            case '2001':
                break;
            case '1002':
                break;
            case '2000':
                break;
            case '1111':
                break;
            case '2223':
                break;
            case '2007':
                iOSNative.includeLinkStyle("css/theme/woniu.css");
                break;
            case '1008':
                //AndroidNative.includeLinkStyle("css/theme/skycity.css");
                break;
            case '2005':
                iOSNative.includeLinkStyle("css/theme/jueji.css");
                break;
            case '2010':
            	    iOSNative.includeLinkStyle("css/theme/chicken.css");
                break;
            case '1035':
            	    iOSNative.includeLinkStyle("css/theme/allill.css");
                break;
            case '2011':
               	iOSNative.includeLinkStyle("css/theme/icefire.css");
                break;
            case '2008':
                iOSNative.includeLinkStyle("css/theme/huge.css");
                break;
            case '2013':
                iOSNative.includeLinkStyle("css/theme/allill.css");
                break;
            case '1010':
                break;
            default:
                return;
        }
    } catch (e) {
        console.log(e);
    }
}

/**
 * 动态插入link
 * @param pagename
 */
iOSNative.includeLinkStyle = function (cssURL) {
    var head = document.getElementsByTagName('head')[0],
        linkTag = document.createElement('link');
    linkTag.href = cssURL;
    linkTag.setAttribute('rel', 'stylesheet');
    linkTag.setAttribute('media', 'all');
    linkTag.setAttribute('type', 'text/css');
    head.appendChild(linkTag);
};


iOSNative.useSkin = function (themeid) {
    if (nl(themeid)) return;
    var b = document.getElementsByTagName('body')[0];
    try {
        switch (themeid) {
            case '2001':
                b.setAttribute('class', '');
                break;
            case '1002':
                b.setAttribute('class', '');
                break;
            case '2000':
                b.setAttribute('class', '');
                break;
            case '1111':
                b.setAttribute('class', '');
                break;
            case '1016':
                b.setAttribute('class', '');
                break;
            case '2223':
                b.setAttribute('class', 'potter');
                break;
            case '2222':
                b.setAttribute('class', 'skyCity');
                break;
            case '1011':
                b.setAttribute('class', '');
                break;
            case '1010':
                b.setAttribute('class', '');
                break;
            default:
                return;
        }
    } catch (e) {
        console.log(e);
    }
};

iOSNative.buyBook = function(bid) {
    var url = servertgw('v6_3_7') + '/queryintro?bid=' + bid;
    Local.reqaObj(url, function(data) {
        if (data.code != 0) {
            return ;
        }
        var bookinfo = data.introInfo.book;
        C.callCocoa({
            "method": "buybook",
            "isVip": data.isVip,
            "isBuyedOniOs": data.introInfo.isBuyedOniOs,
            "downloadtype": data.introInfo.downloadtype,
            "discount": data.introInfo.discount,
            "discountReason": data.introInfo.discountReason,
            "limitspecialprice": data.introInfo.limitspecialprice || 0,
            "fileFormat": data.introInfo.format || "",
            "downloadURL": data.introInfo.downloadurl || "",
            "detailmsg": data.introInfo.detailMsg,
            "id": bookinfo.bid + "",
            "price": bookinfo.price,
            "title": bookinfo.title,
            "author": bookinfo.author,
            "intro": bookinfo.intro,
            "drm": "" + bookinfo.drm,
            "origin": bookinfo.origin || "",
            "finished": bookinfo.finished,
            "version": bookinfo.version || "",
            "chapterTitle": bookinfo.chapterTitle || "第一章",
            "updatetime": bookinfo.updateDate || 0,
            "type": bookinfo.type || 0,
            "downloadinfo": data.introInfo.book.dlfile,
            "isPreview": bookinfo.isPreview || 0
        });

    });
};


iOSNative.lastRead = function (callback) {
    iOSNative.callbackindex++;
    iOSNative.callbacks[iOSNative.callbackindex] = callback;
    try {
        C.callCocoa({
            "method": "getLastReadBookID",
            "function": 'iOSNative.callbacks[\'' + iOSNative.callbackindex + '\']'
        });
    } catch (e) {
    }
};

