//与终端本地js调用相关的都放在这里
var Local = {};

Local.callbacks = [];
Local.callbackindex = 0;

Local.haveNativeResApi = false;

var downloadType;

//android js安全策略，进行注册
Local.resApis = function () {
    JsBridge.restoreApis({
            'JSContent': ['setStatInfo', 'openExternal', 'openDetail', 'closeDialog', 'openMonthly', 'setWebTitlebarIcon', 'openTopicComment', 'openTopicDiscuss', 'setIsBackToPage','getUsedSkinId'],
            'JSToast': ['showToast', 'showProgress', 'cancelProgress'],
            'JSDialog': ['showDialog', 'showSimpleDialog', 'showBottomDialog'],
            'JSAddToShelf': ['add', 'addBooks', 'addById'],
            'JSSendBook': ['sendOnlineBook'],
            'bookdir': ['dir'],
            'sendvip': ['send', 'setvip'],
            'mclient': ['req', 'post'],
            'JSComment': ['showRateDialog'],
            'JSGoToWeb': ['gotoWeb'],
            'readerlogin': ['login'],
            'pay': ['payCancel', 'setPayOption', 'charge', 'afterpay', 'payDone', 'beforepay', 'openVip'],
            'downloadbook': ['needdownload', 'download', 'batdownload'],
            'readmusiconline': ['readmusic', 'downloadbook'],
            'AndroidJS': ['activateLocalMethod', 'pageAction'],
            'JSbookshelf': ['bookAction', 'gotoshelf'],
            'JsSubscribe': ['doSubscribe', 'getSubscribedInDb'],
            'JsAdEvent': ['setStart', 'setEnd'],
            'JSSns': ['sharePage', 'shareBook', 'shareLuckyMoney'],
            'readonline': ['readbook'],
            'JSAdv': ['closeAdv'],
            'JSUpdate': ['update'],
            'JSpay': ['buyBook'],
            'JSApp': ['isAppExist', 'log'],
        },
        '5.0.1');
};


Local.init = function () {
    //需要注册 jsbridge
    Local.resApis();
    //设置皮肤样式
    try {
        JSContent.getUsedSkinId(function (data) {
            //alert(data);
            switch(data){
                case '2001':
                    break;
                case '1002':
                    break;
                case '2000':
                    break;
                case '1111':
                    break;
                case '1016':
                    break;
                case '2223':
                    break;
                case '1008':
                    //Local.includeLinkStyle("css/theme/skycity.css");
                    break;
                case '1028':
                    Local.includeLinkStyle("css/theme/jueji.css");break;
                case '1010':
                    break;
                default:return ;
    }});
    } catch (e) {
        console.log(e);
    }

    try {
        Local.haveNativeResApi = !nl(JSContent.setStatInfo);
    } catch (e) {
    }

    try {
        JSContent.setIsBackToPage(true);
    } catch (e) {
    }

};

/**
 * 设置页面名称
 * @param pagename
 */
Local.setPageName = function (pagename) { //打开客户端实现的章节页面
    try {
        var param = {};
        param.pagename = pagename;
        JSContent.setStatInfo(json(param));
    } catch (e) {
    }
};

/**
 * 动态插入link
 * @param pagename
 */
Local.includeLinkStyle = function (cssURL) {
    var head = document.getElementsByTagName('head')[0],
    linkTag = document.createElement('link');
    linkTag.href = cssURL;
    linkTag.setAttribute('rel','stylesheet');
    linkTag.setAttribute('media','all');
    linkTag.setAttribute('type','text/css');
    head.appendChild(linkTag);
};

/**
 * 动态删除link
 * @param pagename
 */
Local.removejscssfile = function (filename, filetype){
    //判断文件类型
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none";
    //判断文件名
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none";
    var allsuspects=document.getElementsByTagName(targetelement);
    //遍历元素， 并删除匹配的元素
    for (var i=allsuspects.length; i>=0; i--){
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
            allsuspects[i].parentNode.removeChild(allsuspects[i]);
    }
}


/**
 * 增加栏目订阅
 * 栏目ID需要是string类型的
 * @param lmid
 */
Local.doSubscribe = function (lmid) {
    lmid += "";
    try {
        JsSubscribe.doSubscribe(lmid, function (data) {
            if (data == 0) {
                //添加成功
            }
        });
        // 上报日志
        try {
            Local.reqaObj(servercommon() + "/accesslog?page=doSubscribe" + '&id=' + lmid, function () {
            }, [], function () {
            }, 1);
        } catch (e) {
        }

    } catch (e) {
    }
}


Local.PluginPayDone = function () {
    var itemParam = '{"type":"' + BuyPlugin.buyData.type + '",' + '"id":"' + BuyPlugin.buyData.pid + '"}';
    pay.payDone(itemParam);
};

Local.payCancel = function () {
    pay.payCancel();
};

/**
 * 检查是否订阅过栏目
 * @param lmid
 */
Local.checkSubscribe = function (lmid) {
    lmid += "";
    try {
        JsSubscribe.getSubscribedInDb(lmid, function (data) {
            //已经订阅过
            // data == 0 未订阅 1 已经订阅
            if (data == 0) {
                dv('doSubscribeBtn');
            }
        });
    } catch (e) {
        dv('doSubscribeBtn');
    }
}

Local.onTouchStart = function () {
    try {
        JsAdEvent.setStart("");
    } catch (e) {
    }
};

//检测是否安装qq，没有安装弹toast提示
Local.isAppExist = function (msg) {
        JSApp.isAppExist(msg, function (data) {
            if (data == 0) {
                Local.showToast("请先安装qq客户端~");
            }
        });
}

Local.onTouchEnd = function () {
    try {
        JsAdEvent.setEnd("");
    } catch (e) {
    }
};

Local.openDir = function (data) { //打开客户端实现的章节页面
    var bookinfo = Local.makeBookInfo(data);
    bookdir.dir(json(bookinfo));
};

Local.openBuyBookPage = function (data, callback) { //打开客户端下载购买页
    var bookinfo = Local.makeBookInfo(data);
    if (callback) {
        JSpay.buyBook(json(bookinfo), callback);
    } else {
        JSpay.buyBook(json(bookinfo));
    }
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

Local.readonline = function (chapterid, chapterName) {
    var bookinfo = BookDetail.bookinfo;
    bookinfo.chapterid = chapterid;
    bookinfo.chaptertitle = chapterName;
    readonline.readbook(json(bookinfo));
};

Local.sendsms = function () {
    var no = checkMobileNo(id('mobile').value, chinaMobileScope) == 0 ? '10666226' : '10661700';
    var content = checkMobileNo(id('mobile').value, chinaMobileScope) == 0 ? '43' : 'AT';
    sendvip.send(no, content);
};

//评分控件的js调用
Local.showRateDialog = function () {
    JSComment.showRateDialog();
};

Local.makeBookInfo = function (data) {
    var bookinfo = {};
    var book = data.book;
    var bookfrom = Local.wrapBookFrom(book.from);
    bookinfo.id = book.bid + "";// bid使用String类型
    bookinfo.title = book.title;
    bookinfo.author = book.author;
    bookinfo.downloadurl = data.downloadurl;
    bookinfo.coverurl = book.cover;
    bookinfo.version = book.lastChapter;
    bookinfo.chapterid = -1;
    bookinfo.chaptertitle = "第一章";
    bookinfo.drm = book.drm;
    bookinfo.finished = book.finished;
    bookinfo.bookfrom = bookfrom;
    bookinfo.format = data.format;
    bookinfo.payed = data.payed;
    bookinfo.lastcname = book.lastChapterName;
    bookinfo.lastuploadtime = book.lastChapterUploadTime;
    bookinfo.origin = nl(param("origin")) ? 0 : param("origin");
    bookinfo.downloadtype = data.downloadtype;
    bookinfo.bookprice = book.price;//原价
    bookinfo.discount = data.discount;//打折
    bookinfo.dismsg = data.discountdesc;//打折说明
    return bookinfo;
};

Local.invokeBookDetailPageNativeModule = function (data) {
    var pageinfo = {};
    pageinfo.url = data.url;
    var bookinfo = Local.makeBookInfo(data);
    var actioncode = "1000";
    var paramJson = {};
    paramJson.actioncode = actioncode;
    paramJson.pageinfo = pageinfo;
    paramJson.bookinfo = bookinfo;
    BookDetail.bookinfo = bookinfo;
    try {
        var jsonstr = json(paramJson);
        AndroidJS.pageAction(jsonstr);
    } catch (e) {
    }
};

/**
 * 请求客户端数据
 * @param url
 * @param callback
 * @param faildCallback
 * @param forceReload
 * @param callbackSections
 */
Local.reqaObj = function (url, callback, callbackSections, faildCallback, forceReload) {
    url = Local.getTransparentParam(url);
    // 默认不强制刷新数据
    if (!forceReload) {
        forceReload = 0;
    }

    // 加载默认loading提示
    Local.dodefaultLoading(callbackSections);
    // tf == 1 的时候走pc测试
    if (param("tf") && param("tf") == 1) {
        //  pc上浏览测试
        reqa(url, function (txt) {
            doPrintSection(txt, faildCallback, callbackSections, callback, 'false');
        });
    } else {
        //  调用客户端的代码就是用下面的函数
        Local.reqByClient(url, function (txt) {
            doPrintSection(txt, faildCallback, callbackSections, callback, 'true');
        }, forceReload);
    }
};

/**
 * 直接请求服务端数据
 * @param url
 * @param callback
 */
Local.reqaObjDirectByWeb = function (url, callback) {
    url = Local.getTransparentParam(url);
    // pc上浏览测试
    reqa(url, function (txt) {
        if (nl(txt)) {
            callback(null);
        } else {
            var tmp = obj(txt);
            callback(tmp);
        }
    }, function () {
    });
};

/**
 * 增加默认的加载提示
 * @param callbackSections
 */
Local.dodefaultLoading = function (callbackSections) {
    //统一做loading的样式处理
    if (callbackSections && callbackSections.length && callbackSections.length > 0) {
        for (var section in callbackSections) {
            ih(callbackSections[section], '<div class="loadingTop"><span class="loadtc"><span class="loads"><svg width="24" height="23" viewBox="0 0 48 46" xmlns="http://www.w3.org/2000/svg"><path d="M47.43 24C47.43 11.06 36.94.57 24 .57S.57 11.06.57 24c0 9.27 5.434 17.55 13.72 21.328 1.006.458 2.192.015 2.65-.99.46-1.005.015-2.192-.99-2.65C9.076 38.555 4.57 31.688 4.57 24c0-10.73 8.7-19.43 19.43-19.43S43.43 13.27 43.43 24c0 7.66-4.473 14.505-11.307 17.655-1.004.462-1.442 1.65-.98 2.653.463 1.004 1.65 1.442 2.654.98C42.037 41.49 47.43 33.234 47.43 24z" class="cls-default" /></svg></span>正在加载...</span></div>');
        }
    }
};

Local.showNetWorkError = true;

/**
 * 默认的网络错误提示信息
 */
Local.defaultCallBackFailed = function (callbackSections, faildCallback, code) {
    if (callbackSections && callbackSections.length && callbackSections.length > 0) {
        for (var section in callbackSections) {
            if (!nl(code)) {
                if (code == '1001') {
                    ih(callbackSections[section], '<div class="fullpage"><div class="blankLayout"><span class="blankIcon"><img src="images/blank1.png"></span><p class="t3 c103">网络不好,请检查网络设置</p><p class="t3 c301" onclick="javascript:JSReload.retry();">重新加载</p></div></div>');
                } else if (code == '1002') {
                    ih(callbackSections[section], '<div class="load_fail">访问超时<a href="javascript: window.location.reload();">重新加载</a></div>');
                } else {
                    ih(callbackSections[section], '<div class="load_fail">服务器不给力呀<a href="javascript: window.location.reload();">重新加载</a></div>');
                }
            } else {
                ih(callbackSections[section], '<div class="load_fail">服务器不给力呀<a href="javascript: window.location.reload();">重新加载</a></div>');
            }
        }
    }
    if (faildCallback) {
        faildCallback();
    }
};

/**
 * 调用客户端的方法请求http数据
 * @param url
 * @param callback
 * @param forceReload 0 不强制刷新 1 强制刷新
 */
Local.reqByClient = function (url, callback, forceReload) {
    Local.callbackindex++;
    Local.callbacks[Local.callbackindex] = callback;
    try {
        mclient.req(url, 'Local.callbacks[\'' + Local.callbackindex + '\']', forceReload);
    } catch (e) {
    }
};

/**
 * 调用客户端的方法请求http数据
 * @param url
 * @param callback
 * @param forceReload 0 不强制刷新 1 强制刷新
 * @param content post的内容
 */
Local.postByClient = function (url, callback, forceReload, content) {
    Local.callbackindex++;
    Local.callbacks[Local.callbackindex] = callback;
    try {
        url = Local.getTransparentParam(url);
        mclient.post(url, 'Local.callbacks[\'' + Local.callbackindex + '\']', forceReload, content);
    } catch (e) {
    }
};


/**
 * 根据获取到的数据渲染页面
 * @param txt
 * @param faildCallback
 * @param callbackSections
 * @param callback
 * @param donotParse
 */
function doPrintSection(txt, faildCallback, callbackSections, callback, donotParse) {
    if (nl(txt) && faildCallback) {
        Local.defaultCallBackFailed(callbackSections, faildCallback);
    } else if (!nl(txt)) {
        var tmp;
        if (donotParse == 'true') {
            // 如果走客户端直接获取到的就是json对象
            tmp = txt;
        } else {
            // 如果走的是pc，还需要对json进行format
            try {
                tmp = obj(txt);
            } catch (e) {
                try {
                    mclient.saveErrInfo(txt);
                } catch (e) {
                }
            }
        }
        //检查返回码和失败回调函数，有问题的话就进行失败渲染处理
        if (tmp && nl(tmp.httpcode)) {
            callback(tmp);
        } else if (tmp) {
            if (tmp.httpcode != "200") {
                Local.defaultCallBackFailed(callbackSections, faildCallback, tmp.httpcode);
            } else {
                try {
                    callback(tmp);
                } catch (e) {
                    Local.defaultCallBackFailed(callbackSections, faildCallback);
                }
            }
        } else {
            Local.defaultCallBackFailed(callbackSections, faildCallback);
        }
    }
}

//跳转到栏目
Local.goColumn = function (cid, cname) {
    var url = 'column.html?cid=' + cid + "&cname=" + decodeURI(cname);
    lss("cname", cname);
    Local.openPage(url);
};

//跳转到分类
Local.goCategory = function (cid, cname, type, sort, cLevel) {
    var url = 'categoryBooks.html?cid=' + cid + "&cName=" + cname.replace('更多', '').replace('作品', '') + "&cLevel=" + nlg(cLevel, 2) + "&sort=" + nlg(sort, 1) + "&type=" + type;
    Local.openPage(url, null, 1005);
};

//跳转到排行
Local.goRank = function (rid, seq) {
    var url = 'rank.html?rid=' + rid + "&seq=" + seq;
    Local.openPage(url, null, 1006);
};

Local.openPage = function (url, origin, pagecode) { //打开链接
    var testFlag = param("tf");
    var detailobj = {};

    detailobj.url = url;
    detailobj.origin = param('origin');
    detailobj.alg = param('alg');
    detailobj.datatype = param('datatype');
    detailobj.fromBid = param('fromBid');

    if (url.indexOf('?') < 0) {
        url += '?';
    }
    url += Local.getExParamStr(detailobj, 1, 0, 1);
    url = url + Local.getExparamWithoutClient();
    url = url.replace('?&', '?');
    if (testFlag == 1) {

        window.location.href = url;
    } else {
        if (url.indexOf('bookDetail.html') >= 0) {
            if (!origin) {
                origin = getParam(url, 'origin');
            }
            Local.goBookDetail(getParam(url, 'bid'), origin);
        } else {
            if (!nl(pagecode)) {
                detailobj.pagecode = pagecode;
            } else {
                detailobj.pagecode = "1000";
            }
            detailobj.extraurl = Local.getExParamStr(detailobj, 1, 0, 1);
            JSContent.openDetail(json(detailobj));
        }
    }
};

Local.openNativePage = function (url, origin, pagecode) {
    JSContent.openDetail(url);
};

Local.openPageEx = function (pageobj, replaceorigin) { //打开链接
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
        window.location.href = url;
    } else {
        JSContent.openDetail(json(pageobj));
    }
};

//跳转到详情
Local.goBookDetail = function (bid, origin, alg, datatype, fromBid, replaceorigin) {
    var url = 'bookDetailShare.html?bid=' + bid;
    var detailobj = {};
    detailobj.pagecode = "1001";
    detailobj.url = url;
    detailobj.bid = bid;
    detailobj.origin = origin;
    detailobj.alg = alg;
    detailobj.datatype = datatype;
    detailobj.fromBid = fromBid;
    detailobj.stat_params = {};
    detailobj.stat_params.origin = origin;
    detailobj.stat_params.alg = alg;

    Local.reqaObj(servercommon() + "/accesslog?page=bookDetail&id=" + bid + "&origin=" + origin, function () {
    }, [], function () {
    }, 1);
    Local.openPageEx(detailobj, replaceorigin);
};

//从分享的专题页，跳转到的书籍详情
Local.goBookDetailFromShare = function (bid, origin, alg, datatype, fromBid, replaceorigin) {
    var url = 'bookDetailShare.html?bid=' + bid;
    var detailobj = {};
    detailobj.pagecode = "1001";
    detailobj.url = url;
    detailobj.bid = bid;
    detailobj.origin = origin;
    detailobj.alg = alg;
    detailobj.datatype = datatype;
    detailobj.fromBid = fromBid;
    Local.reqaObj(servercommon() + "/accesslog?page=bookDetail&id=" + bid + "&origin=" + origin, function () {
    }, [], function () {
    }, 1);
    Local.openPageEx(detailobj, replaceorigin);

};


//跳转到native详情页
Local.goNativeBookDetail = function (bid, origin, alg, datatype, fromBid, replaceorigin) {
    var detailobj = {};
    detailobj.pagecode = "1001";
    detailobj.bid = bid;
    detailobj.origin = origin;
    detailobj.alg = alg;
    detailobj.datatype = datatype;
    detailobj.fromBid = fromBid;
    JSContent.openDetail(json(detailobj));
};

//跳转到等级页面
Local.goRankPage = function (from) {
    var rid;
    var urls = [];
    var pagetitle;
    var titles = ["QQ好友榜", "总榜"];
    var url = 'growRank.html?rid=';
    if (!from) from = 0;
    if (from == 0) {
        urls = [url + "2", url + "0"];
        pagetitle = "成长值排行榜";
    } else if (from == 1) {
        urls = [url + "3", url + "1"];
        pagetitle = "积分排行榜";
    } else {
        //do nothing
    }
    var detailobj = {};
    detailobj.pagecode = "1003";
    detailobj.urls = urls;
    detailobj.titles = titles;
    detailobj.pagetitle = pagetitle;
    detailobj.url = urls[0];

    detailobj.selected = "0";
    Local.openPageEx(detailobj);
};

//跳转到购买记录页面 
Local.goBuyHistoryPage = function () {
    var rid;
    var pagetitle = "我的购买";
    var titles = ["按章购买", "按本购买"];
    var url = 'buyhistory.html?rid=';
    var urls = [url + "0", url + "1"];
    var detailobj = {};
    detailobj.pagecode = "1003";
    detailobj.urls = urls;
    detailobj.titles = titles;
    detailobj.pagetitle = pagetitle;
    detailobj.url = urls[0];
    //默认显示第一个tab
    detailobj.selected = "0";

    Local.reqaObj(server() + '/chooseHistoryPage', function (data) {
        if (!data.isChapterHistory) {
            detailobj.url = urls[1];
            detailobj.selected = "1";
        }
        Local.openPageEx(detailobj);
    }, [], function () {
        Local.openPageEx(detailobj);
    }, 1);
};

//跳转到笔记
Local.goNotePage = function (pagecode) {
    var noteinfo = {};
    noteinfo.pagecode = pagecode;
    noteinfo.titles = "";
    noteinfo.pagetitle = "";
    noteinfo.url = "";
    Local.openPageEx(noteinfo);
};


//跳转到粉丝榜
Local.goFansRank = function (bid) {
    var pagetitle = "粉丝榜";
    var titles = ["周榜", "月榜", "总榜"];
    var url = 'fanslist.html?bid=';
    var urls = [url + bid + "&rt=0", url + bid + "&rt=1", url + bid + "&rt=2"];

    var detailobj = {};
    detailobj.pagecode = "1003";
    detailobj.urls = urls;
    detailobj.titles = titles;
    detailobj.pagetitle = pagetitle;
    //默认显示总榜
    detailobj.selected = "2";
    Local.openPageEx(detailobj);

};


//跳转到书友圈
Local.goCommenyArea = function (bid, ctype) {
    var pagetitle = "书友圈";
    var detailobj = {};
    detailobj.pagecode = "1009";
    detailobj.bid = bid;
    detailobj.pagetitle = pagetitle;
    if (ctype) {
        detailobj.ctype = ctype;
    }
    Local.openPageEx(detailobj);
};


//跳转到书友圈
Local.goPostcomment = function (bid, ctype) {
    var pagetitle = "发表书评";
    var detailobj = {};
    detailobj.pagecode = "1011";
    detailobj.bid = bid;
    detailobj.pagetitle = pagetitle;
    if (ctype) {
        detailobj.ctype = ctype;
    }
    Local.openPageEx(detailobj);
};


//跳转到书友圈
Local.goCommentDetail = function (bid, commentid, ctype) {
    var pagetitle = "书评详情";
    var detailobj = {};
    detailobj.pagecode = "1010";
    detailobj.bid = bid;
    detailobj.commentid = commentid;
    detailobj.pagetitle = pagetitle;
    if (ctype) {
        detailobj.ctype = ctype;
    }
    Local.openPageEx(detailobj);
};


//专题详情中的链接跳转
Local.goTopicLink = function (link) {
    Local.openPage(link);
}

Local.goTopic = function (tid) {
    Local.openPage("newTopic.html?tid=" + tid);
};

//普通重定向
Local.go = function (url) {
    if (url.indexOf('?') < 0) {
        url += '?';
    }
    var detailobj = {};
    detailobj.url = url;
    detailobj.origin = param('origin');
    detailobj.alg = param('alg');
    detailobj.datatype = param('datatype');
    detailobj.fromBid = param('fromBid');
    detailobj.adId = param('adId');
    detailobj.tid = param('tid');
    detailobj.posId = param('posId');
    url += Local.getExParamStr(detailobj, 0, 0, 0);
    url = url + Local.getExparamWithoutClient();
    url = url.replace('?&', '?');
    window.location.href = url;
};

Local.login = function (reload_url) {
    if (!reload_url) {
        reload_url = window.location.href;
    }
    readerlogin.login(reload_url);
};

Local.notifyVipStatus = function (qq, nickname, isVip) {
    sendvip.setvip(qq, nickname, isVip);  //通知客户端vip状态以及QQ
};

Local.openWeb = function () {
    JSGoToWeb.gotoWeb();
};

Local.openVip = function (isLogin) {
    if (!isLogin) {
        Local.login();
        return;
    }
    pay.openVip();
};

Local.doCharge = function (from, isLogin) {
    if (!isLogin) {
        Local.login();
        return;
    }
    var pjson = '{"rechargeurl": ""}';
    pay.charge(pjson);
};

Local.showToast = function (msg) {
    try {
        JSToast.showToast(msg);
    } catch (e) {
        console.log(msg);
    }
};


Local.showDialog = function (title, msg, bmsg, url) {
    try {
        JSDialog.showDialog(title, msg, bmsg, code, url);
    } catch (e) {
        console.log(msg);
    }
};


Local.showSimpleDialog = function (title, content, confirm) {
    try {
        JSDialog.showSimpleDialog(title, content, confirm);
    } catch (e) {
        console.log(msg);
    }
};

Local.showCommentDialog = function (cid, bid, pagecode, title, positiestr, negetivestr, content, commentContent) {
    var obj = {};
    obj.cid = cid;
    obj.bid = bid;
    obj.pagecode = pagecode;
    obj.title = title;
    obj.positiestr = positiestr;
    obj.negetivestr = negetivestr;
    obj.content = content;
    obj.commentContent = commentContent;
    Local.showBottomDialog(obj);
}

Local.showRewardPayDialog = function (pagecode, title, positiestr, negetivestr, content) {
    var obj = {};
    obj.pagecode = pagecode;
    obj.title = title;
    obj.positiestr = positiestr;
    obj.negetivestr = negetivestr;
    obj.content = content;
    Local.showBottomDialog(obj);
}

Local.showBottomDialog = function (obj) {
    try {
        JSDialog.showBottomDialog(json(obj));
    } catch (e) {
        console.log(msg);
    }
}

Local.showProgress = function (msg) {
    try {
        JSToast.showProgress(msg);
    } catch (e) {
        console.log(msg);
    }
};

Local.cancelProgress = function () {
    try {
        JSToast.cancelProgress();
    } catch (e) {
    }
};

/**
 * 整理发后台请求的参数
 */
Local.getTransparentParam = function (url) {
    if (url.indexOf('?') < 0) {
        url += '?';
    }
    var detailobj = {};
    detailobj.url = url;
    detailobj.origin = param('origin');
    detailobj.alg = param('alg');
    detailobj.datatype = param('datatype');
    detailobj.fromBid = param('fromBid');
    detailobj.adId = param('adId');
    detailobj.tid = param('tid');
    detailobj.posId = param('posId');
    url += Local.getExParamStr(detailobj, 0, 0, 0);
    url += Local.getExparamWithoutClient();
    url = url.replace('?&', '?');
    url = url.replace('&&', '&');
    return url;
}

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

    if (!nl(param("adId"))) {
        params += '&adId=' + param("adId");
    }

    if (!nl(param("posId"))) {
        params += '&posId=' + param("posId");
    }

    if ((url && (url.indexOf("tid") < 0 || url.indexOf('eventname=gotoUrl') >= 0)) && !nl(param("tid"))) {
        params += '&tid=' + param("tid");
    }

    if ((url && url.indexOf('origin=') < 0) || (url && url.indexOf('bookDetail') >= 0)) {
        if (!nl(param("origin")) && !replaceorigin) {
            params += '&origin=' + param("origin"); //统计用的区分号
        } else if (!nl(origin)) {
            params += '&origin=' + origin; //统计用的区分号
        }
    }
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
/**
 * 获取本地需要的client参数
 * @returns {*}
 */
Local.getExparamWithoutClient = function (url) {
    var params = '';
    if (!nl(param("tf"))) {
        params += '&tf=' + param("tf"); //是否走pc测试条件
    } else {
        // 检查UA，如果是chrome浏览器，默认使用pc测试相同的配置，方便测试
        if (navigator.userAgent.indexOf('Windows') >= 0 || navigator.userAgent.indexOf('Mac OS X') >= 0) {
            params += '&tf=1'; //pc测试条件tf=1， 2为客户端
            setParam("tf", 1);
        } else {
            params += '&tf=2'; //pc测试条件tf=1， 2为客户端
            setParam('tf', 2);
        }
    }
    if (!nl(param("sid"))) {
        params += '&sid=' + param("sid");
    }

    // loginType尝试从cookie中获取
    if (!nl(ckg("loginType"))) {
        params += '&loginType=' + ckg("loginType");
    } else {
        if (!nl(param("loginType"))) {
            params += '&loginType=' + param("loginType");
        }
    }

    // uid尝试从cookie中获取
    if (!nl(ckg("uid"))) {
        params += '&uid=' + ckg("uid");
    } else {
        if (!nl(param("uid"))) {
            params += '&uid=' + param("uid");
        }
    }

    //需要预先从cookie中获取
    params = getparamfcookieandurl(params, "usid");
    params = getparamfcookieandurl(params, "timi");
    params = getparamfcookieandurl(params, "skey");


    if (!nl(param("c_platform"))) {
        params += '&c_platform=' + param("c_platform");
    }
    if (!nl(param("version"))) {
        params += '&version=' + param("version");
    }
    if (!nl(param("qimei"))) {
        params += '&qimei=' + param("qimei");
    }

    params += nl(param('share')) ? '' : '&share=' + param('share');

    if (!nl(param("channel"))) {
        params += '&channel=' + param("channel"); //渠道号
    }

    params += '&fp=1';//这个参数用于判断是否是页面间跳转

    return params;
};

//分享专题
Local.shareTopic = function (callback, imgUrl, title, intro, tid) {
    if (nl(callback) || nl(tid)) {
        JSToast.showToast("请稍后再试");
        return;
    }
    JSSns.sharePage(callback, imgUrl, title, intro, tid);
};
//分享专题
Local.shareRedbag = function (callback, imgUrl, title, intro) {
    if (nl(callback)) {
        JSToast.showToast("请稍后再试");
        return;
    }
    JSSns.shareLuckyMoney(callback, imgUrl, title, intro);
};

Local.goAppReader = function (schema, url, e) {
    var rUrl = "androidqqreader://" + schema + "/" + url;
    // 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
    // 否则打开a标签的href链接
    var ifr = document.createElement('iframe');
    ifr.src = rUrl;
    ifr.style.display = 'none';
    document.body.appendChild(ifr);
    window.setTimeout(function () {
        document.body.removeChild(ifr);
    }, 3000)
};

/**
 * 关闭2元包弹窗
 */
Local.closeDialog = function () {
    try {
        JSContent.closeDialog('');
    } catch (e) {
        console.log("Local.closeDialog error:", e);
    }
};



/**
 * 设置body为天空城皮肤样式
 */
Local.getUsedSkinId = function (callback) {
    try {
        JSContent.getUsedSkinId(function (data) {
            //alert(data);
            if (data == "1025") {
                callback(true);
                //document.getElementsByTagName('body')[0].className = 'skyCity';
            } else {
                callback(false);
            }
        });
    } catch (e) {
        console.log("Local.getUsedSkinId error:", e);
        callback(false);
    }
};

Local.useSkin = function(themeid){
    alert(themeid);
    if(nl(themeid)) return;
    var b = document.getElementsByTagName('body')[0];
    try{
        switch(themeid){
            case '2001':
                b.setAttribute('class','');break;
            case '1002':
                b.setAttribute('class','');break;
            case '2000':
                b.setAttribute('class','');break;
            case '1111':
                b.setAttribute('class','');break;
            case '1016':
                b.setAttribute('class','');break;
            case '2223':
                b.setAttribute('class','potter');break;
            case '1025':
                b.setAttribute('class','skyCity');break;
            case '1011':
                b.setAttribute('class','');break;
            case '1010':
                b.setAttribute('class','');break;
            default:return ;
        }}catch(e){console.log(e);}
}


Local.buyBookPack = function (pid) {
    try {
        var obj = {packageid: pid};
        JSContent.openMonthly(json(obj));
    } catch (e) {
        console.log("JSContent.openMonthly error:", e);
    }
};


/**
 *  首页  JSContent openDetail pagecode:1012
 本地打开网页  已有 JSContent openDetail pagecode:1009 url
 阅读页 JSContent openDetail pagecode:1015 bid
 书籍详情页   已有 JSContent openDetail pagecode:1001 bid stat_params
 书库分类首页（原创/出版）   JSContent openDetail pagecode:1014
 分类列表页，某个指定的具体分类 已有 JSContent openDetail pagecode:1005 url
 排行首页（男/女/出版）    已有 JSContent openDetail pagecode:1006 url
 排行列表页，某个排行榜 JSContent openDetail pagecode:1016 mActionid mTitle mActiontag
 精选，首页（可以打开弹窗）   JSContent openDetail pagecode:1013
 精选，信息流详情页   JSContent openDetail pagecode:1017 mCmd mCmdValue mStatJson
 发现，书评广场首页   JSContent openDetail pagecode:1018
 发现，专题首页（最新/经典）  JSContent openDetail pagecode:1019 actionTag
 发现，包月专区首页   JSContent openDetail pagecode:1020
 发现，今日免费首页   JSContent openDetail pagecode:1021
 发现，名人堂首页    JSContent openDetail pagecode:1022
 发现，名人堂指定分类  JSContent openDetail pagecode:1023 currentItem
 指定书评区首页（官方） 已有 JSContent openDetail pagecode:1024 bid title
 指定书评区首页（单书） JSContent openDetail pagecode:1009 bid title
 书评详情    已有 JSContent openDetail pagecode:1010 bid commentid ctype
 打赏页（只JS中已存在）    JSContent openDetail pagecode:1002 bid tabindex extraurl title
 QQ好友榜（只JS中已存在）  JSContent openDetail pagecode:1003 selected urls titles pagetitle
 页面内部跳转tab,比如详情页，简介跳转到目录（只JS中已存在）    JSContent openDetail pagecode:1004 tabindex
 我的笔记（只JS中已存在）   JSContent openDetail pagecode:1007
 打开发表评论页，并进入书友圈（只JS中已存在） JSContent openDetail pagecode:1011 bid
 * @param dataObj
 */



//跳转到native详情页
Local.openDetailByCode = function (dataObj) {
    JSContent.openDetail(json(dataObj));
};

//跳转听书页面
Local.gotoListenPage = function (mediaId) {
    window.location.href = "uniteqqreader://nativepage/client/listenpage?mediaId=" + mediaId;
};

/**
 * 唤起qq聊天窗口
 * @param qqNum(要打开的聊天窗口的qq号)
 */
Local.qqcall = function (qqNum) {
    //检测是否安装qq，没有安装弹toast提示
    Local.isAppExist("com.tencent.mobileqq");

    var type = undefined;
    var param = "";
    var sid = 2;
    var rawuin = '';
    var qsig = "undefined";
    var usa=navigator.userAgent;
    var p;
    var mobile_q_jump = {
        android:"http://im.qq.com/immobile/android/",
        ios:"itms-apps://itunes.apple.com/cn/app/qq-2011/id444934666?mt=8",
        winphone:"http://www.windowsphone.com/zh-cn/store/app/qq/b45f0a5f-13d8-422b-9be5-c750af531762",
        pc:"http://mobile.qq.com/index.html"
    };
    var isMQ = 0;
    if(typeof type == "undefined") type = 1;
    if(usa.indexOf("Android")>-1){
        p = "android";
    }
    else if(usa.indexOf("iPhone")>-1 || usa.indexOf("iPad")>-1 || usa.indexOf("iPod")>-1){
        p = "ios";
    }
    else if(usa.indexOf("Windows Phone") > -1 || usa.indexOf("WPDesktop") > -1){
        p = "winphone";
    }
    else {
        p = "pc";
    }
    if(p == "ios"){
        //防止循环
        if(history.pushState)
            history.pushState({},"t","#");
        isMQ = QQApi.isQQWebView();
        if (!isMQ){
            var sc = document.createElement("script");
            sc.src = "http://__.qq.com/api/qqapi.js";
            sc.onload = function(){
                if(window['iOSQQApi']){
                    isMQ =iOSQQApi.device.isMobileQQ();
                }
            };
            document.body.appendChild(sc);
        }
    }
    else if(p == "pc" && qsig != "undefined"){
        window.open(qsig,"_self");
    }
    if(type == 1){//手Q
        var isSuccess = true;
        var f = document.createElement("iframe");
        f.style.display = "none";
        document.body.appendChild(f);

        f.onload = function(){

        };

        if(p == "ios" && sid == 1){
            f.src = "mqqwpa://im/chat?chat_type=crm&uin=" + qqNum + "&version=1&src_type=web&web_src=oicqzone.com";
        }
        if(p == "ios" && sid == 2){//ios并且为群名片
            f.src = "mqqwpa://im/chat?chat_type=crm&uin=" + qqNum + "&version=1&src_type=web&web_src=oicqzone.com";
        }
        else if(p != "pc"){
            var url = window.location.href.split("&");
            f.src = "mqqopensdkapi://bizAgent/qm/qr?url=" + encodeURIComponent(url[0]);
        }
        if(p == "android" && sid == 1){
            f.src = "mqqwpa://im/chat?chat_type=crm&uin=" + qqNum + "&version=1&src_type=web&web_src=oicqzone.com";
        }
        if(p == "android" && sid == 2){//ios并且为群名片
            f.src = "mqqwpa://im/chat?chat_type=crm&uin=" + qqNum + "&version=1&src_type=web&web_src=oicqzone.com";
        }
        var now = Date.now();
        setTimeout( function(){
            if((p == "ios" && !isMQ && Date.now() - now < 2000) || (p == "android" && !isSuccess) || ((p == "winphone" && Date.now() - now < 2000))){
                var jumpUrl = mobile_q_jump[p];
                if(jumpUrl) window.open(jumpUrl,"_self");
            }
        } , 1500);
    }
};
