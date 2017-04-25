//与终端本地js调用相关的都放在这里
var Local = {};

Local.callbacks = [];
Local.callbackindex = 0;

var downloadType;

//android js安全策略，进行注册
Local.resApis = function () {
    JsBridge.restoreApis({
            'JSContent': ['openExternal', 'openDetail', 'setIsBackToPage'],
            'JSToast': ['showToast', 'showProgress', 'cancelProgress'],
            'JSDialog': ['showDialog'],
            'JSAddToShelf': ['add'],
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
            'JSSns': ['sharePage', 'shareBook'],
            'readonline': ['readbook']
        },
        '5.0.1');
};

Local.init = function () {
    //需要注册 jsbridge
    Local.resApis();
    Local.setBackBtn();
};

Local.PluginPayDone = function () {
    var itemParam = '{"type":"' + BuyPlugin.buyData.type + '",' + '"id":"' + BuyPlugin.buyData.pid + '"}';
    pay.payDone(itemParam);
};

Local.payCancel = function () {
    pay.payCancel();
};

Local.onTouchStart = function () {
    try {
        JsAdEvent.setStart("");
    } catch (e) {
    }
};

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

Local.sendsms = function () {
    var no = checkMobileNo(id('mobile').value, chinaMobileScope) == 0 ? '10666226' : '10661700';
    var content = checkMobileNo(id('mobile').value, chinaMobileScope) == 0 ? '43' : 'AT';
    sendvip.send(no, content);
};

//评分控件的js调用
Local.showRateDialog = function () {
    JSComment.showRateDialog();
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
        }, "{\"code\":-100}");
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
            ih(callbackSections[section], '<div class="loading_div"><span></span>加载中</div>');
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
                    ih(callbackSections[section], '<div class="load_fail">网络不畅<a href="javascript: window.location.reload();">重试</a></div>');
                } else if (code == '1002') {
                    ih(callbackSections[section], '<div class="load_fail">访问超时<a href="javascript: window.location.reload();">重试</a></div>');
                } else {
                    ih(callbackSections[section], '<div class="load_fail">服务器不给力呀<a href="javascript: window.location.reload();">重试</a></div>');
                }
            } else {
                ih(callbackSections[section], '<div class="load_fail">服务器不给力呀<a href="javascript: window.location.reload();">重试</a></div>');
            }
        }
    }
    if (faildCallback) {
        faildCallback();
    }
//    if (Local.showNetWorkError) {
//        try {
//            JSToast.showToast("网络不畅，请稍后再试试");
//        } catch (e) {
//            console.log("网络不畅，请稍后再试试");
//        }
//        Local.showNetWorkError = false;
//    }
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
//        Local.showToast('mclient.post' + url + content);
        mclient.post(url, 'Local.callbacks[\'' + Local.callbackindex + '\']', forceReload, content);
    } catch (e) {
//        Local.showToast(e);
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
//            ZBook.afterLoad(callbackSections);
        } else if (tmp) {
            if (tmp.httpcode != "200") {
                Local.defaultCallBackFailed(callbackSections, faildCallback, tmp.httpcode);
            } else {
                try {
                    callback(tmp);
//                    ZBook.afterLoad(callbackSections);
                } catch (e) {
                    Local.defaultCallBackFailed(callbackSections, faildCallback);
                }
            }
        } else {
            Local.defaultCallBackFailed(callbackSections, faildCallback);
        }
    }
}

Local.openPage = function (url, origin, pagecode) { //打开链接
    var testFlag = param("tf");
    var detailobj = {};
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
            detailobj.origin = param('origin');
            detailobj.alg = param('alg');
            detailobj.datatype = param('datatype');
            detailobj.fromBid = param('fromBid');
            detailobj.url = url;
            detailobj.extraurl = Local.getExParamStr(detailobj, 1, 0, 1);
            JSContent.openDetail(json(detailobj));
        }
    }
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

//普通重定向
Local.go = function (url) {
    if (url.indexOf('?') < 0) {
        url += '?';
    }
    url = url + Local.getExparamWithoutClient();
    url = url.replace('?&', '?');
    window.location.href = url;
}
//普通重定向到外部子目录
Local.goOtChildSite = function (url) {
    var urls = url.split("/");
    if (urls.length > 1) {
        var to = urls[urls.length - 2] + "-"
            + urls[urls.length - 1].replace(/.html[\?,#,&]*$/, '');
        forceLog(param("act_f"), fullPageName + "-" + to)
    }
    if (url.indexOf('?') < 0) {
        url += '?';
    }
    if (url.indexOf('http') < 0) {
        url = prefix() + url;
    }
    url = url + Local.getExparamWithoutClient();
    url = url.replace('?&', '?');
    window.location.href = url;
}

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
    forceLog(param("act_f"), "wd_open");
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
        var code = '1000';
        JSDialog.showDialog(title, msg, bmsg, code, url);
    } catch (e) {
        console.log(msg);
    }
};

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

    if ((url && url.indexOf('origin=') < 0) || (url && url.indexOf('bookDetail') >= 0)) {
        if (!nl(param("origin")) && !replaceorigin) {
            params += '&origin=' + param("origin"); //统计用的区分号
        } else if (!nl(origin)) {
            params += '&origin=' + origin; //统计用的区分号
        }
    }
    return params;
};

/**
 * 获取本地需要的client参数
 * @returns {*}
 */
Local.getExparamWithoutClient = function () {
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

    // usid尝试从cookie中获取
    if (!nl(ckg("usid"))) {
        params += '&usid=' + ckg("usid");
    } else {
        if (!nl(param("usid"))) {
            params += '&usid=' + param("usid");
        }
    }
    //从cookie中取skey和uin,因为iOS后台拿不到cookie
    if (!nl(ckg("skey"))) {
        params += '&skey=' + ckg("skey");
    }
    if (!nl(ckg("uin"))) {
        params += '&uin=' + ckg("uin");
    }

    if (!nl(param("c_platform"))) {
        params += '&c_platform=' + param("c_platform");
    }
    if (!nl(param("version"))) {
        params += '&version=' + param("version");
    }
    if (!nl(param("qimei"))) {
        params += '&qimei=' + param("qimei");
    }
    if (!nl(param("timi"))) {
        params += '&timi=' + param("timi");
    }
    if (!nl(param("channel"))) {
        params += '&channel=' + param("channel"); //渠道号
    }
    if (!nl(param("usid_key"))) {
        params += '&usid_key=' + param("usid_key"); //鉴权方式
    }
    if (!nl(param("skey"))) {
        params += '&skey=' + param("skey"); //skey
    }

    //活动统计专用
    if (!nl(param("act_f"))) {
        params += '&act_f=' + param("act_f");
    }
    return params;
};
//分享专题
Local.shareTopic = function (callback, imgUrl, title, intro, tid) {
    if (nl(callback) || nl(tid)) {
        JSToast.showToast("请稍后再试");
        return;
    }
    JSSns.sharePage(callback, imgUrl, title, intro, tid);
    //JSSns.shareBook('317280','农家效益女');
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

Local.setBackBtn = function () {
    try {
        JSContent.setIsBackToPage(true);
    } catch (e) {
    }
};

Local.openDetailByCode = function (dataObj) {
    JSContent.openDetail(JSON.stringify(dataObj));
};
