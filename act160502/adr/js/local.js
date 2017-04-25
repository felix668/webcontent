//与终端本地js调用相关的都放在这里
var Local = {};

Local.callbacks = [];
Local.callbackindex = 0;

Local.haveNativeResApi = false;

var downloadType;

//android js安全策略，进行注册
Local.resApis = function () {
    JsBridge.restoreApis({'JSContent': ['setStatInfo', 'openExternal', 'openDetail', 'closeDialog', 'openMonthly', 'setWebTitlebarIcon', 'openTopicComment','setIsBackToPage'],
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
            'JSSns': ['sharePage', 'shareBook','shareLuckyMoney'],
            'readonline': ['readbook'],
            'JSAdv':['closeAdv'],
            'JSUpdate':['update']},
        '5.0.1');
};


Local.init = function () {
    //需要注册 jsbridge
    Local.resApis();
    try {
        Local.haveNativeResApi = !nl(JSContent.setStatInfo);
    } catch (e) {
    }
    try {
    	JSContent.setIsBackToPage(true);//设置返回到上一页
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
            var hour = new Date().getHours();
            if (param('night') || (hour > 19 && hour < 24 || hour > 0 && hour < 7)) {
                ih(callbackSections[section], '<div class="loading_div"><span class="nightMode"></span>加载中</div>');
            } else {
                ih(callbackSections[section], '<div class="loading_div"><span></span>加载中</div>');
            }
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
                    ih(callbackSections[section], '<div class="load_fail">网络不好，请检查网络设置<a href="javascript: window.location.reload();">重新加载</a></div>');
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
    Local.openPageEx(detailobj);
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
    url = url + Local.getExparamWithoutClient();
    url = url.replace('?&', '?');
    window.location.href = url;
}

// 登录，reload_url基本不用
// 防止登录按钮重复点击
var loginClick = false;
Local.login = function (reload_url) {
	if(loginClick)
		return;
	loginClick = true;
    if (!reload_url) {
        reload_url = window.location.href;
    }
    try {
    	readerlogin.login(reload_url);
	} catch (e) {
		console.log("Local.login exception",e);
	}finally{
		delay(2000, function(){loginClick=false;});
	}
};

Local.notifyVipStatus = function (qq, nickname, isVip) {
    sendvip.setvip(qq, nickname, isVip);  //通知客户端vip状态以及QQ
};

Local.openWeb = function () {
    JSGoToWeb.gotoWeb();
};

//开通包月vip
Local.openVip = function (isLogin) {
    if (!isLogin) {
        Local.login();
        return;
    }
    pay.openVip();
};

//充值，（活动from="act"）
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

    if (!nl(param("itemid"))) {
        params += '&itemid=' + param("itemid");
    }

    params += nl(param('share')) ? '' : '&share=' + param('share');

    if (!nl(param("channel"))) {
        params += '&channel=' + param("channel"); //渠道号
    }

    params += '&fp=1';//这个参数用于判断是否是页面间跳转
    
    //活动统计专用
    if(!nl(param("act_f"))){
    	params += '&act_f=' + param("act_f");
    }
    //TODO delete
    if(!nl(param("skey"))){
    	params += '&skey=' + param("skey");
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
};


//分享红包
Local.shareRedbag = function (callback, imgUrl, title, intro) {
    if (nl(callback)) {
        JSToast.showToast("请稍后再试");
        return;
    }
    JSSns.shareLuckyMoney(callback, imgUrl, title, intro);
};

//url：分享出去的链接，success:是否分享成功
//afterShare = function(url,success){
//	alert("分享回调:"+url+",success:"+success);
//}

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

    //    dataObj的格式
    //    var obj = {};
    //    obj.pagecode = pagecode;
    //    obj.title = title;
    //    obj.positiestr = positiestr;
    //    obj.negetivestr = negetivestr;
    //    obj.content = content;

    JSContent.openDetail(json(dataObj));
};
