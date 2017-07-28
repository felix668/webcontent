//与终端本地js调用相关的都放在这里
var Local = {};
Local.callbacks = [];
Local.callbackindex = 0;
//控制页面不重复监听加入书架事件
var isListenshelf = false;
//注册分享事件
Local.shareEventListen = function (title, intro, img, url) {
    document.addEventListener('ondataavailable', function (shareevent) {
        Local.syncShareInfo(title, intro, img, url);
    }, false);
    var shareevent = document.createEvent('HTMLEvents');
    shareevent.initEvent("ondataavailable", true, true);
    document.dispatchEvent(shareevent);
};
//注册一件加入书架事件
Local.addToShelfBooks = function (bids, needtoast) {

    while (bids.indexOf("\r\n") > 0) {
        bids = bids.replace("\r\n", "");
    }
    var booksinfo = obj(bids);
    for (var i = 0; i < booksinfo.length; i++) {
        var bookinfo = booksinfo[i];
        if (i == booksinfo.length - 1)
            Local.addToShelf(bookinfo, 1);
        else
            Local.addToShelf(bookinfo, 0);
    }
};

Local.reqaObj = function (url, callback, callbackSections, errcallback) {
    Local.dodefaultLoading(callbackSections); //加载提示
    url += url.indexOf('?') != -1 ? '&' : '?';
    url = url + getTransparentParam();
    var reqfun = url.indexOf('version') != -1 && url.indexOf('loginType') != -1;
    if (reqfun || param("tf") && param("tf") == 1) {//PC端请求走ajax请求’,校验请求参数，支持版本兼容
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
        Local.reqClient(url, function (code, str) {
            if (code == 200) {//请求正常返回
                var s = decodeURIComponent(str);
                callback(JSON.parse(s));
            } else {//请求错误或者请求超时
                errcallback();
            }
        });
    }
};


/**
 * 调用客户端的方法请求http数据
 * @param url
 * @param callback
 * @param forceReload 0 不强制刷新 1 强制刷新
 */
Local.reqClient = function (url, callback) {
    Local.callbackindex++;
    Local.callbacks[Local.callbackindex] = callback;
    try {
        C.callCocoa({
            "method": "reqclient",
            "url": url,
            "function": 'Local.callbacks[\'' + Local.callbackindex + '\']'
        });
    } catch (e) {
    }
};


/**
 * 增加默认的加载提示
 * @param callbackSections
 */
Local.dodefaultLoading = function (callbackSections) {
    //统一做loading的样式处理
    if (callbackSections && callbackSections.length && callbackSections.length > 0) {
        for (var section in callbackSections) {
            ih(callbackSections[section], '<div class="loadingTop loading"><span class="loadtc"><span class="loads"><svg width="24" height="23" viewBox="0 0 48 46" xmlns="http://www.w3.org/2000/svg"><path d="M47.43 24C47.43 11.06 36.94.57 24 .57S.57 11.06.57 24c0 9.27 5.434 17.55 13.72 21.328 1.006.458 2.192.015 2.65-.99.46-1.005.015-2.192-.99-2.65C9.076 38.555 4.57 31.688 4.57 24c0-10.73 8.7-19.43 19.43-19.43S43.43 13.27 43.43 24c0 7.66-4.473 14.505-11.307 17.655-1.004.462-1.442 1.65-.98 2.653.463 1.004 1.65 1.442 2.654.98C42.037 41.49 47.43 33.234 47.43 24z" class="cls-default"/></svg></span>正在加载...</span></div>');
        }
    }
};

Local.postaObj = function (url, formvalue, callback) {
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

Local.showToast = function (msg) {
    C.callCocoa({
        "method": "toastMsg",
        "msg": msg
    });
};

//互动专题页，加入话题讨论
Local.openTopicDiscuss = function (tid, ctype, pos) {
    try {
        reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.COMMENT);
        C.callCocoa({
            "method": "openTopicDiscuss",
            "tid": tid,
            "ctype": ctype,
            "pos": pos
        });
    } catch (err) {
        Local.showToast("callCocoa Failed:" + err.message);
    }
};

//添加回复
Local.openTopicComment = function (tid, ctype, pos) {
    try {
        reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.REPLY);
        C.callCocoa({
            "method": "openTopicComment",
            "tid": tid,
            "ctype": ctype,
            "pos": pos
        });
    } catch (err) {
        Local.showToast("callCocoa Failed:" + err.message);
    }
};

Local.cancelProgress = function () {
};

Local.showProgress = function (msg) {
};

/**
 * a：仅微信登录页面；b：仅QQ登录页面；c：微信+qq登录页面；d：微信+qq+游客登录的页面；
 * 默认：qq和微信登录
 * @param reload_url
 * @param type
 */
Local.login = function (reload_url, type) {
    if (!reload_url)
        reload_url = window.location.href;
    C.callCocoa({
        "method": "login",
        "reload_url": reload_url,
        "type": type
    });
};

Local.invokeBookDetailPageNativeModule = function (data) {
    var pageinfo = {};
    pageinfo.url = data.url;
    var bookinfo = Local.makeBookInfo(data);
    _BOOKINFO = bookinfo;
    try {
        C.callCocoa(combineObj({
            "method": "bookinfo"
        }, bookinfo));
    } catch (e) {
    }
};

Local.makeBookInfo = function (data) {
    var bookinfo = {};
    var book = data.book;
    var bookfrom = Local.wrapBookFrom(book.from);
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

Local.wrapBookFrom = function (bookfrom) {
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

Local.openDetail = function (url) {
    url += url.indexOf('?') != -1 ? '&' : '?';
    url = url + getTransparentParam();
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.URL);
    C.callCocoa({
        "method": "open_detail",
        "url": url
    });
};

Local.nativeDetail = function (bid, origin, lm_f, frombid, data_type, alg, pos, tid) {
    lm_f = lm_f || "";
    frombid = frombid || "";
    data_type = data_type || "";
    alg = alg || "";
    pos = pos || "";
    tid = tid || "";
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.BOOK, bid);
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
Local.syncShareInfo = function (title, intro, img, url, pos, tid, text) {
    title = title || "专题分享";
    intro = intro || "专题分享";
    img = img || (host() + "img/logoicon.jpg");
    url = url || (host() + "topicV2.html?tf=1&share=1&tid=" + param('tid')).replace(_CONF.VERSION, "common");
    C.callCocoa({
        "method": "web_share",
        "title": title,
        "intro": intro,
        "img": img,
        "url": url,
        "text": "",
        "pos": pos,
        "tid": tid,
        "text": text || "#海量原著 想读就读# 传世名著，大神佳作，应有尽有，快和我一起去QQ阅读读书吧！"
    });
};

//唤起客户端分享控件
Local.shareControl = function () {
    //reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.SHARE);
    C.callCocoa({
        "method": "sharecontrol"
    })
};
//加入书架
Local.addToShelf = function (bookinfo, needtoast, pos, tid) {
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
        "downloadinfo": Local.getdownload(bookinfo.downloadinfo),
        "needtoast": needtoast,
        "pos": pos,
        "tid": tid
    });
};

Local.getdownload = function (downloadinfo) {
    for (var key in downloadinfo) {
        if (downloadinfo[key]) {
            return downloadinfo[key];
        }
    }
};


Local.goBookDetail = function (bid, origin) {
    var url = "book_share.html?bid=" + bid;
    Local.openPage(url, origin);
};

// 注意 ！！5.9 把 open_inside 换成了 gotoUrl
//客户端内页面跳转
//客户端去除了uri编码，务必保证url中编码的合法性
Local.openInside = function (url) {
    url += url.indexOf('?') != -1 ? '&' : '?';
    url = url + getTransparentParam();
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.URL);
    C.callCocoa({
        "method": "open_inside",
        "url": url
    });
};

//普通重定向
Local.go = function(url) {
	if (url.indexOf('?') < 0) {
		url += '?';
	}
	url = url + Local.getExparamWithoutClient();
	url = url.replace('?&', '?');
	window.location.href = url;
}

Local.readOnline = function (bookinfo, chapterId, chapterTitle, pos, tid) {
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

Local.nativeRead = function (bookinfo, pos, tid) {
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
Local.goAppReader = function (schema, url, e) {
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

Local.openPage = function (srcurl, origin, pagecode) { //打开链接
    var testFlag = param("tf");
    var detailobj = {};
    var url = srcurl
    if (url.indexOf('?') < 0) {
        url += '?';
    }

    url += Local.getExParamStr(detailobj, 1, 0, 1);
    url = url + Local.getExparamWithoutClient();
    url = url.replace('?&', '?');
    if (testFlag == 1) {
        detailobj.url = url;
        detailobj.origin = param('origin');
        detailobj.alg = param('alg');
        detailobj.datatype = param('datatype');
        detailobj.fromBid = param('fromBid');
        reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.URL);
        window.location.href = url;
    } else {
        if (url.indexOf('book_share.html') >= 0) {
            if (!origin) {
                origin = getParam(url, 'origin');
            }
            Local.nativeDetail(getParam(url, 'bid'), origin);
        } else {
            Local.openInside(srcurl);
        }
    }
};

//临时方法
Local.openUrl57 = function (srcurl, origin, pagecode) { //打开链接
    var testFlag = param("tf");
    var detailobj = {};
    var url = srcurl
    if (url.indexOf('?') < 0) {
        url += '?';
    }

    url += Local.getExParamStr(detailobj, 1, 0, 1);
    url = url + Local.getExparamWithoutClient();
    url = url.replace('?&', '?');
    detailobj.url = url;
    detailobj.origin = param('origin');
    detailobj.alg = param('alg');
    detailobj.datatype = param('datatype');
    detailobj.fromBid = param('fromBid');
    window.location.href = url;

};

Local.openPageEx = function (pageobj, replaceorigin, pos, tid) { //打开链接

    pageobj.extraurl = Local.getExParamStr(pageobj, 1, replaceorigin, 1);
    var testFlag = param("tf");
    if (testFlag == 1) {
        var url = '';
        if (pageobj.url.indexOf('?') >= 0) {
            url = pageobj.url + Local.getExparamWithoutClient();
        } else {
            url = pageobj.url + '?' + Local.getExparamWithoutClient();
        }

        if (pageobj.extraurl) {
            url += pageobj.extraurl;
        }
        url.replace('?&', '?');
        reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.BOOK);
        window.location.href = url;
    } else {
        Local.nativeDetail(pageobj.bid, pageobj.stat_params.origin, '', '', '', '', pos, tid);
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
Local.getExParamStr = function (detailobj, replace_lmf, replaceorigin, addlmfh) {
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

Local.getExparamWithoutClient = function () {
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
    params = getparamfcookieandurl(params, "uin");

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

//打开包月开通页面
Local.openVip = function (isLogin, pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.VIP);
    C.callCocoa({
        "method": "subscribe",
        "pos": pos,
        "tid": tid
    });
};
//进入特权页
Local.monthprivilege = function (pos, tid) {
    C.callCocoa({
        "method": "subscribeintro",
        "pos": pos,
        "tid": tid
    });
};
//去充值页
Local.openrecharge = function (pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.CHARGE);
    C.callCocoa({
        "method": "recharge",
        "pos": pos,
        "tid": tid
    });
};
//账户信息:1我的账户,2包月特权,3收藏,4充值,5基因
Local.usercenter = function (accountid, pos, tid) {
    C.callCocoa({
        "method": "usercenter",
        "account": accountid,
        "pos": pos,
        "tid": tid
    });
};
//关闭弹窗
Local.closepopup = function () {
    C.callCocoa({
        "method": "close_web"
    });
};
//tab跳转，默认跳精选
Local.gotab = function (id) {
    C.callCocoa({
        "method": "go_tab",
        "id": id || 2
    });
};


//对书籍评价
Local.commentbook = function (id, pos, tid) {
    C.callCocoa({
        "method": "writeBookComment",
        "bid": id,
        "pos": pos,
        "tid": tid
    });
};
//去书评区
Local.openBookCommentArea = function (id, pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.COMMENT_AREA);
    C.callCocoa({
        "method": "openBookCommentArea",
        "bid": id,
        "pos": pos,
        "tid": tid
    });
};

//去书库
Local.gotoBookCategory = function (id, name, pos, tid) {
    C.callCocoa({
        "method": "gotoBookCategory",
        "id": id,
        "name": name,
        "pos": pos,
        "tid": tid
    });
};
//去搜索
Local.gotoSearch = function (tag, pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.SEARCH);
    C.callCocoa({
        "method": "gotoSearch",
        "tag": tag,
        "pos": pos,
        "tid": tid
    });
};
//去包月
Local.gotoMonthRegion = function (pos, tid) {

    C.callCocoa({
        "method": "gotoMonthRegion",
        "pos": pos,
        "tid": tid
    });
};
//去今日免费
Local.gotoTodayFree = function (pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.FREE);
    C.callCocoa({
        "method": "gotoTodayFree",
        "pos": pos,
        "tid": tid
    });
};
//去排行
Local.gotoNewRank = function (pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.RANK);
    C.callCocoa({
        "method": "gotoNewRank",
        "pos": pos,
        "tid": tid
    });
};
//去名人堂
Local.gotoHallOfFame = function (authorId, pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.HALL);
    C.callCocoa({
        "method": "gotoHallOfFame",
        "authorid": authorId,
        "pos": pos,
        "tid": tid
    });
};

//新手读书性格
Local.gotoUrl = function (url, title, pos, tid) {
    C.callCocoa({
        "method": "gotoUrl",
        "url": url,
        "title": title,
        "pos": pos,
        "tid": tid
    });
};

//QURL跳转,用户跳转客户端native页面
Local.gotoQUrl = function (url, pos, tid) {
    C.callCocoa({
        "method": "gotoQUrl",
        "url": url,
        "pos": pos,
        "tid": tid
    });
};
/**
 * 上报页面事件
 * @param eventname
 * @param eventtype
 */
//function reportPageEvent(eventname, eventtype) {
//    try {
//        if (!eventtype) {
//            eventtype = "TOPIC_EVENT";
//        }
//        var url = servercommon() + '/reportPageEvent?eventtype=' + eventtype + '&eventname=' + eventname;
//        if(param('posId')){
//            url=url+'&pos='+param('pos');
//        }
//        if(param('tid')){
//            url=url+'&tid='+param('tid');
//        }
//        if(param('adId')){
//            url=url+'&adId='+param('adId');
//        }
//        Local.reqaObj(url, function (data) {
//        }, [], function () {
//        }, 1);
//    } catch (e) {
//        console.log('reportPageEvent error'+e);
//    }
//};
//跳转到native详情页
Local.openDetailByCode = function (url) {
    Local.openDetail(url);
};

/**
 * 打开评论详情
 */
Local.opencommentdetail = function (cid, bid, pos, tid) {
    reportPageEvent(ZBook.EventName.TOPIC, ZBook.EventType.COMMENT_DETAIL);
    C.callCocoa({
        "method": "opencommentdetail",
        "commentId": cid,
        "bookId": bid,
        "pos": pos,
        "tid": tid
    });
}


/**
 * 批量加书架
 * @param bids（数组格式 Array）
 */
Local.addBatchBookSelft = function (bids, pos, tid) {
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
Local.useSkin = function (themeid) {
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
}