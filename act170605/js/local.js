//与终端本地js调用相关的都放在这里
var Local = {};

Local.callbacks = [];
Local.callbackindex = 0;

Local.haveNativeResApi = false;

Local.iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
if (Local.iOS && navigator.userAgent.indexOf("Android") >= 0) {
    // 同时是 iOS 和 Android，那就说明不是 iOS
    Local.iOS = false;
}

// Test
//Local.iOS = /Chrome/.test(navigator.userAgent);

Local.init = function () {
    if (Local.iOS) {
        document.body.className = document.body.className + " iOS";
    } else {
        AndroidNative.init();
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

/**
 * 跳转到详情页
 * @param bookinfo
 * @param pos
 * @param tid
 */
Local.nativeDetail = function (bid, origin, lm_f, frombid, data_type, alg, pos, tid) {
    if (Local.iOS) {
        iOSNative.nativeDetail(bid, origin, lm_f, frombid, data_type, alg, pos, tid);
    } else {
        window.location.href = "uniteqqreader://nativepage/book/detail?bid=" + bid;
    }
};

/**
 * 跳转到直播间
 */
Local.goToLive = function (roomId) {
    if (Local.iOS) {
        console.log(roomId);
        iOSNative.gotoLiveQUrl("uniteqqreader://nativepage/client/liveshow?room_num=" + roomId);
    } else {
        console.log(roomId);
        Local.liveQurl(roomId);
    }
};

/**
 * 公用qurl跳转
 */
Local.goToAuthor = function (authorId, name, iconUrl) {
    reportPageEvent('unLiveToManito', 'PUBLICITY_TOPIC_EVENT');
    if (Local.iOS) {
        console.log(authorId);
        iOSNative.gotoLiveQUrl("uniteqqreader://nativepage/authors/mainpage?authorId=" + authorId);
    } else {
        Local.authorPage(authorId, name, iconUrl);
    }
};

/**
 * 打开直播(android)
 */
Local.goToLiveAndroid = function (roomId) {
    window.openLiveClient.open(roomId);
};

/**
 * 打开直播qurl(android)
 */
Local.liveQurl = function (roomId) {
    window.location.href = "uniteqqreader://nativepage/client/liveshow?room_num=" + roomId;
};

/**
 * 跳转到阅读页
 */
Local.readonline = function (bookinfo, pos, tid) {
    if (Local.iOS) {
        iOSNative.readOnline(bookinfo, pos, tid);
    } else {
        AndroidNative.readonline(bookinfo);
    }
};

/**
 * 跳转到阅读页
 */
Local.readonlineV2 = function (bid) {
    window.location.href = "uniteqqreader://nativepage/client/readepage?bid=" + bid;
};

/**
 * 跳转大神主页
 */
Local.authorPage = function (authorId, name, iconUrl) {
    window.location.href = "uniteqqreader://nativepage/authors/mainpage?authorId=" + authorId;
};


/**
 * 跳转大神主页如果为空则调到搜索页
 */
Local.authorPageWithSearch = function (authorId, name,bid) {
    if(authorId==0){
        if (Local.iOS) {
            iOSNative.goSearchBook(name)
        }else {
            window.location.href = "uniteqqreader://nativepage/authors/allbooks?bid=" + bid;
        }
    }else {
        window.location.href = "uniteqqreader://nativepage/authors/mainpage?authorId=" + authorId;
    }
};



/**
 * 跳转到专题评论页
 */
Local.openTopicComment = function (tid, ctype, pos) {
    if (Local.iOS) {
        iOSNative.openTopicComment(tid, ctype, pos);
    } else {
        AndroidNative.openTopicComment(tid);
    }
};

/**
 * 互动专题页，加入话题讨论
 */
Local.openTopicDiscuss = function (tid, ctype, pos) {
    if (Local.iOS) {
        iOSNative.openTopicDiscuss(tid, ctype, pos);
    } else {
        AndroidNative.openTopicDiscuss(tid);
    }
};

/**
 * 一键添加书架
 * @param bids 书籍id的数组
 */
Local.addAllToShelf = function (bids,needtoast) {
    if (Local.iOS) {
        iOSNative.addToShelfBooks(bids,needtoast);
    } else {
        AndroidNative.addAllToShelf(bids);
    }
};

/**
 * 加书架
 * @param bids 书籍id的数组
 */
Local.addOneToShelf = function (bidInfo,needtoast) {
    if (Local.iOS) {
        iOSNative.addOneToShelf(bidInfo,needtoast);
    } else {
        if(needtoast==1){
            AndroidNative.addOneToShelf(bidInfo.bid,true);
        }else {
            AndroidNative.addOneToShelf(bidInfo.bid,false);
        }

    }
};

Local.useSkin = function () {
    if (Local.iOS) {
        iOSNative.useSkinNew(param('themeid'));
    } else {
        AndroidNative.useSkin();
    }
};

/**
 * 设置标题
 * @param pagename
 */
Local.setCustomUI = function (title,titlebarcolor) { //打开客户端实现的章节页面
    if (Local.iOS) {
        iOSNative.customUI(title,titlebarcolor);
    } else {
    }
};
/**
 * 设置页面名称
 * @param pagename
 */
Local.setPageName = function (pagename) { //打开客户端实现的章节页面
    if (Local.iOS) {
    } else {
        AndroidNative.setPageName(pagename);
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
    if (Local.iOS) {
        iOSNative.reqaObj(url, callback, callbackSections, faildCallback, forceReload);
    } else {
        AndroidNative.reqaObj(url, callback, callbackSections, faildCallback, forceReload);
    }
};

/**
 * 请求客户端数据 android loading居中
 * @param url
 * @param callback
 * @param faildCallback
 * @param forceReload
 * @param callbackSections
 */
Local.reqaObjV2 = function (url, callback, callbackSections, faildCallback, forceReload) {
    if (Local.iOS) {
        iOSNative.reqaObj(url, callback, callbackSections, faildCallback, forceReload);
    } else {
        AndroidNative.reqaObjV2(url, callback, callbackSections, faildCallback, forceReload);
    }
};

Local.reqClient = function (url, callback,forceReload) {
    if (Local.iOS) {
        iOSNative.reqByClient(url, callback);
    } else {
        AndroidNative.reqByClient(url, callback,forceReload);
    }
};

Local.openPage = function (url, origin, pagecode) { //打开链接
    if (Local.iOS) {
        iOSNative.openPage(url, origin, pagecode);
    } else {
        AndroidNative.openPage(url, origin, pagecode);
    }
};

Local.openPageEx = function (pageobj, replaceorigin, pos, tid) { //打开链接
    if (Local.iOS) {
        iOSNative.openPageEx(pageobj, replaceorigin, pos, tid);
    } else {
        AndroidNative.openPageEx(pageobj, replaceorigin);
    }
};

Local.goListenZone = function () {
    if (Local.iOS) {
        iOSNative.gotoCommonQUrl('uniteqqreader://nativepage/discover/listenzone');
    } else {
        window.location.href = 'uniteqqreader://nativepage/discover/listenzone';
    }
};

//跳转到等级页面
Local.goRankPage = function (from) {
    if (Local.iOS) {
    } else {
        AndroidNative.goRankPage(from);
    }
};

//跳转到
Local.goBuyHistoryPage = function () {
    if (Local.iOS) {
    } else {
        AndroidNative.goBuyHistoryPage();
    }
};

//跳转到笔记
Local.goNotePage = function (pagecode) {
    if (Local.iOS) {
    } else {
        AndroidNative.goNotePage(pagecode);
    }
};


//跳转到粉丝榜
Local.goFansRank = function (bid) {
    if (Local.iOS) {
    } else {
        AndroidNative.goFansRank(bid);
    }

};


//跳转到书友圈
Local.goCommentArea = function (bid, ctype) {
    if (Local.iOS) {
    } else {
        AndroidNative.goCommentArea(bid, ctype);
    }
};


//跳转到书友圈
Local.goPostcomment = function (bid, ctype) {
    if (Local.iOS) {
    } else {
        AndroidNative.goPostcomment(bid, ctype);
    }
};


//书评详情
Local.goCommentDetail = function (bid, commentid, ctype) {
    if (Local.iOS) {
    } else {
        AndroidNative.goCommentDetail(bid, commentid, ctype);
    }
};

//登录
Local.login = function (reload_url,type) {
    if (Local.iOS) {
        iOSNative.login(reload_url,type);
    } else {
        AndroidNative.login(reload_url);
    }
};

Local.notifyVipStatus = function (qq, nickname, isVip) {
    if (Local.iOS) {
    } else {
        AndroidNative.notifyVipStatus(qq, nickname, isVip);
    }
};

Local.openWeb = function () {
    if (Local.iOS) {
    } else {
        AndroidNative.openWeb();
    }
};

//打开包月开通页面
Local.openVip = function (isLogin, pos, tid) {
    if (Local.iOS) {
        iOSNative.openVip(isLogin, pos, tid);
    } else {
        AndroidNative.openVip(isLogin);
    }
};

Local.openVip = function (isLogin) {
    // 上报日志
    try {
        var id = param("id");
        id = nl(id) ? param("bid") : id;// 书籍ID
        id = nl(id) ? param("cid") : id;// 栏目ID
        id = nl(id) ? param("tid") : id;// 专题书单ID
        id = nl(id) ? param("rid") : id;// 排行ID
        id = nl(id) ? param("pid") : id;// 插件ID
        id = nl(id) ? param("up") : id;// 区分男女出版综合 1 男 2 女 3 出版 0 综合
        if (!id) {
            id = 0;
        }
        Local.reqaObj(servercommon() + "/accesslog?page=openvip_" + getPageName() + '&id=' + id, function () {
        }, [], function () {
        }, 1);
    } catch (e) {
        // console.log(e);
    }
    if (!isLogin) {
        Local.login();
        return;
    }
    pay.openVip();
};


Local.setShareButtion = function (flag) {
    if (Local.iOS) {
        iOSNative.setShowShareButton(flag);
    }
};



//打开新版年份特权页
Local.openNewMonthYearVip = function (url) {
    reportPageEvent('openYearVip');
    if (Local.iOS) {
        iOSNative.yearVipPopup(url);
    } else {
        AndroidNative.showWebIntroductionDialog(url)
    }
};


//打开新版包月特权页开通页面
Local.payMonthVip = function (months) {
    if (Local.iOS) {
        iOSNative.payMonthVip(months);
    } else {
        window.location.href = "uniteqqreader://nativepage/vip/openbybookcoin?month=" + months;
    }
};

//支付弹窗
Local.doCharge = function (from, isLogin, pos, tid) {
    if (Local.iOS) {
        iOSNative.openrecharge(pos, tid);
    } else {
        AndroidNative.doCharge(from, isLogin);
    }
};

//toast
Local.showToast = function (msg,type) {
    if (Local.iOS) {
        iOSNative.showToast(msg,type);
    } else {
        AndroidNative.showToast(msg);
    }
};


Local.showDialog = function (title, msg, bmsg, url) {
    if (Local.iOS) {
    } else {
        AndroidNative.showDialog(title, msg, bmsg, url);
    }
};


Local.showSimpleDialog = function (title, content, confirm) {
    if (Local.iOS) {
    } else {
        AndroidNative.showDialog(title, content, confirm);
    }
};

//分享专题
Local.shareTopic = function (callback, imgUrl, title, intro, tid) {
    if (Local.iOS) {

    } else {
        AndroidNative.shareTopic(callback, imgUrl, title, intro, tid);
    }
};

//分享影视原著专
Local.shareFilm = function (callback, imgUrl, title, intro, tid) {
    if (Local.iOS) {
    } else {
        AndroidNative.shareFilm(callback, imgUrl, title, intro, tid);
    }
};
/**
 * 设置body为天空城皮肤样式
 */
Local.getUsedSkinId = function () {
    if (Local.iOS) {

    } else {
        AndroidNative.getUsedSkinId();
    }
};


//跳转听书页面
Local.gotoListenPage = function (mediaId) {
    if (Local.iOS) {

    } else {
        window.location.href = "uniteqqreader://nativepage/client/listenpage?mediaId=" + mediaId;
    }
};

/**
 * 唤起qq聊天窗口
 * @param qqNum(要打开的聊天窗口的qq号)
 */
Local.qqcall = function (qqNum) {
    if (Local.iOS) {

    } else {
        AndroidNative.qqcall(qqNum);
    }
};

Local.lastRead = function (callback) {
    if(Local.iOS) {
        iOSNative.lastRead(callback);
    } else {
        AndroidNative.lastRead(callback);
    }
};


/**
 * 跳转书库
 */
Local.goCategory = function (categoryId, name, pos, tid) {
    reportPageEvent('goCategory');
    if(Local.iOS) {
        C.callCocoa({
            "method": "gotoBookCategory",
            "id": categoryId,
            "name": name,
            "pos": pos,
            "tid": tid
        });
    } else {
        window.location.href = 'uniteqqreader://nativepage/category/list?actionId=' + categoryId + '&actionTag=-1,-1,6&pagestamp=1';
    }
};


/**
 * 跳转搜索
 */
Local.goSearch = function (searchTag, pos, tid) {
    reportPageEvent('goSearch');
    if(Local.iOS) {
        C.callCocoa({
            "method": "gotoSearch",
            "tag": searchTag,
            "pos": pos,
            "tid": tid
        });
    } else {
        window.location.href = 'uniteqqreader://nativepage/search?encode_key=' + searchTag;
    }
};

/**
 * 跳转免费专区
 */
Local.goFreeZone = function (pos, tid) {
    reportPageEvent('goFreeZone');
    if(Local.iOS) {
        C.callCocoa({
            "method": "gotoTodayFree",
            "pos": pos,
            "tid": tid
        });
    } else {
        window.location.href = 'uniteqqreader://nativepage/discover/todayfree';
    }
};

/**
 * 跳转包月专区
 */
Local.goVipZone = function (pos, tid) {
    reportPageEvent('goVipZone');
    if(Local.iOS) {
        C.callCocoa({
            "method": "gotoMonthRegion",
            "pos": pos,
            "tid": tid
        });
    } else {
        window.location.href = 'uniteqqreader://nativepage/discover/vipzone';
    }
};

/**
 * 跳转排行榜
 */
Local.goRank = function (usertype, pos, tid) {
    reportPageEvent('goRank');
    if(Local.iOS) {
        C.callCocoa({
            "method": "gotoNewRank",
            "pos": pos,
            "tid": tid
        });
    } else {
        window.location.href = 'uniteqqreader://nativepage/rank/index?rankFlag=' + usertype;
    }
};


/**
 * 跳转名人堂
 */
Local.goHall = function (authorId, pos, tid) {
    reportPageEvent('goHall');
    if(Local.iOS) {
        // C.callCocoa({
        //     "method": "gotoHallOfFame",
        //     "authorid": authorId,
        //     "pos": pos,
        //     "tid": tid
        // });
        iOSNative.gotoCommonQUrl('uniteqqreader://nativepage/authors/mainpage?authorId=' + authorId);
    } else {
        window.location.href = 'uniteqqreader://nativepage/authors/mainpage?authorId=' + authorId;
    }
};

Local.executeQurl = function (qurl) {
    if(Local.iOS){
        iOSNative.gotoCommonQUrl(qurl);
    }else{
        JSContent.executeQurl(Local.base64Encode(qurl));
    }
};

Local.base64Encode = function (str) {
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
};

Local.closeDialog = function () {
    if(Local.iOS){
        iOSNative.closepopup();
    } else {
        JSAdv.closeAdv();
    }
};

Local.buyBook = function (bid) {
    if(Local.iOS){
        iOSNative.buyBook(bid);
    } else {
        AndroidNative.buyBook(bid);
    }
};

Local.loadSuccess = function () {
    if(Local.iOS){
        iOSNative.loadingComplete();
    } else {
        AndroidNative.loadSuccess();
    }
};

/**
 * 跳转到影视分类列表页
 */
Local.goToFilmCategory = function () {
    if (Local.iOS) {
        // iOSNative.gotoCommonQUrl('uniteqqreader://nativepage/category/tag?actionId=13121&actionTitle=影视小说');
        window.location.href = 'uniteqqreader://nativepage/category/list?actionId=13121&actionTitle=影视小说';
    } else {
        window.location.href = 'uniteqqreader://nativepage/category/list?actionId=13121&actionTag=,-1,-1,-1,-1,6&pagestamp=1';
    }
};
