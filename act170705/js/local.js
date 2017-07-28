//本模块依赖于jsbridge.js
//判断平台
var UA = navigator.userAgent;
window.pt = /iPad|iPhone|iPod/.test(UA) && !/Android/.test(UA) ? "ios": /Android/.test(UA) ? "adr" : "ubook";
if(window.pt=="adr"){
    var Local = (function( JsBridge,common){
        var server = common.server;
        var param = common.param;
        var nl = common.nl;
        var getPageName = common.getPageName;
        var setParam = common.setParam;
        var ckg = common.ckg;
        var obj = common.obj;
        var json = common.json;
        var reqa = common.reqa;
        if (window.init){
            document.addEventListener('DOMContentLoaded', init, false); 
            document.ondragstart = function() {
                return false;
            };
        }  
        var Local = {};
        Local.callbacks = [];
        Local.callbackindex = 0;
        //android js安全策略，进行注册
        Local.resApis = function () {
            JsBridge.restoreApis({
                    'JSContent': ['setWebTitlebarIcon','setIsBackToPage'],
                    'JSAddToShelf': ['add', 'addBooks', 'addById'],
                    'JSToast': ['showToast'],
                    'JSSns': ['sharePage', 'shareBook','shareLuckyMoney', 'cacheImage', 'shareStyleImage', 'closePage'],
                    'mclient': ['req', 'post'],
                    'readerlogin': ['login'] 
                },
                '5.0.1');
        }; 
        Local.init=function(){
            Local.resApis();
            Local.setBackBtn();
        };     
        Local.login = function (reload_url) {
            if (!reload_url) {
                reload_url = window.location.href;
            }
            readerlogin.login(reload_url);
        };
        //页面回退
        Local.setBackBtn = function () {
            try {
                JSContent.setIsBackToPage(true);
            } catch (e) {
            }
        };
        //toast
        Local.showToast = function (msg) {
            try {
                JSToast.showToast(msg);
            } catch (e) {
                console.log(msg);
            }
        };
        //关闭当前页面
        Local.closePage = function () {
            try{
                JSSns.closePage();
            }catch (e){
                Local.showToast("closePage fail");
            }
        };
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
                    // ZBook.afterLoad(callbackSections);
                } else if (tmp) {
                    if (tmp.httpcode != "200") {
                        Local.defaultCallBackFailed(callbackSections, faildCallback, tmp.httpcode);
                    } else {
                        try {
                            callback(tmp);
                            // ZBook.afterLoad(callbackSections);
                        } catch (e) {
                            Local.defaultCallBackFailed(callbackSections, faildCallback);
                        }
                    }
                } else {
                    Local.defaultCallBackFailed(callbackSections, faildCallback);
                }
            }
        }
        Local.reqByClient = function (url, callback, forceReload) {
            Local.callbackindex++;
            Local.callbacks[Local.callbackindex] = callback;
            try {
                mclient.req(url, 'Local.callbacks[\'' + Local.callbackindex + '\']', forceReload);
            } catch (e) {
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
            //活动统计专用
            if (!nl(param("act_f"))) {
                params += '&act_f=' + param("act_f");
            }
            return params;
        };
        // 整理发后台请求的参数
        Local.getTransparentParam = function (url) {
            if (url.indexOf('?') < 0) {
                url += '?';
            }
            var detailobj = {};
            detailobj.url = url;
            detailobj.origin = param('origin');
            detailobj.alg =param('alg');
            detailobj.datatype =param('datatype');
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
        // 发送请求
        Local.reqaObj = function (url, callback, callbackSections, faildCallback, forceReload) {
            url = Local.getTransparentParam(url);
            // 默认不强制刷新数据
            if (!forceReload) {
                forceReload = 0;
            }
            // 加载默认loading提示
            //Local.dodefaultLoading(callbackSections);
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
        Local.forceLog = function(act_f, act_b) {
            var act_from = act_f || -110;
            var act_by = act_b || pageName;
            Local.reqaObj( server() + "sum?act_f=" + act_from + "&act_b=" + act_by,
                function(data) {
                    //alert(JSON.stringify(data));
                }, [], function() {
                }, 1);
        }
        //打开页面
        Local.openInside= function (url) {
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
            //排除跳转指定act_f带来的污染
            if(url.match(/act_f=[0-9]+/g)){
                url = url + Local.getExparamWithoutClient().replace(/&act_f=[0-9]+/g,"");
            }else{
                url = url + Local.getExparamWithoutClient();
            }      
            url = url.replace('?&', '?');          
            window.location.href = url;
        };
        //设置右上角的分享图标。
        Local.setIconForShareing = function(url,cover,title,desc){
            // 点击右上角的分享图标后触发的回调函数。
            Local._share = function(){
                Local.shareTopic(
                    url,
                    cover,
                    title,
                    desc
                )
            }
            if( window.JSContent ){
                JSContent.setWebTitlebarIcon(JSON.stringify([{
                    title: 'shareTopic',
                    callback: 'Local._share'
                }]));
            }else{
                console.warn('JSContent is not defined.');
            }
        }
        //点击分享页面
        Local.shareTopic = function (url, cover, title, desc) {
            if (!url) {
                Local.showToast("请设置分享页面链接");
                return;
            }
            JSSns.sharePage(url, cover, title, desc,1);
            // Local.setIconForShareing(url,cover,title,desc);
        };     
        //单本书加入书架
        Local.addToShelf=function(book,needtoast){
            JSAddToShelf.addById(book.bid,needtoast);
        }
        //批量添加到本地书架  
        Local.addToShelfBooks = function (books) {
            for (var i = 0; i < books.length; i++) {
                var bookinfo = books[i];
                if (i == books.length - 1) {
                    Local.addToShelf(bookinfo, 1); //批量加入时 只在最后一本书加入成功之后再toast 不需要每本书都提示toast
                } else {
                    Local.addToShelf(bookinfo, 0);
                }
            }
        };
        //去书籍详情页
        Local.goBookDetail=function(bid){
            window.location.href = "uniteqqreader://nativepage/book/detail?bid=" + bid;
        };
        //去书籍阅读页
        Local.goRead=function(bid,cid){
            if(cid===undefined){
                cid=1;
            }
            window.location.href = "uniteqqreader://nativepage/client/readepage?bid=" + bid +"&cid="+cid;
        };
        //跳转充值页面
        Local.doCharge=function(){
            window.location.href="uniteqqreader://nativepage/coin/recharge?value=1";
        }
        //跳转包月专区
        Local.goMontharea=function(){
            window.location.href="uniteqqreader://nativepage/discover/vipzone";
        }
        //跳转书架
        Local.openBookShelf=function(){
            window.location.href="uniteqqreader://nativepage/client/bookshelf";
        }
        Local.init();
        return Local;
    })(JsBridge,common);
}else{
    var Local = (function(C,common){
        var server = common.server;
        var nl = common.nl;
        var param = common.param;
        var getTransparentParam = common.getTransparentParam;
        var obj = common.obj;
        var reqa = common.reqa;
        if(window.init){
            document.addEventListener('DOMContentLoaded',init,false);
            document.ondragstart = function() {
                return false;
            };
        }
        var Local = {};
        //登录
        Local.login = function (reload_url, type) {
            if (!reload_url) {
                reload_url = window.location.href;
            }
            C.callCocoa({
                "method": "login",
                "reload_url": reload_url,
                "type": type
            });
        };
        //toast
        Local.showToast = function (msg) {
            C.callCocoa({
                "method": "toastMsg",
                "msg": msg
            });
        };
        Local.closePage = function () {
            C.callCocoa({
                "method": "closePage"
            })
        };
        //请求
        Local.reqaObj = function (url, callback, callbackSections, errcallback) {
            // 需要添加必要的参数
            url += url.indexOf('?') != -1 ? '&' : '?';
            url = url + getTransparentParam();
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
        };
        //统计
        Local.forceLog = function(act_f, act_b) {
            var act_from = act_f || -110;
            var act_by = act_b || pageLong;
            Local.reqaObj( server() + "sum?act_f=" + act_from + "&act_b=" + act_by,
                function(data) {
            }, [], function() {
                // Local.showToast("网络不畅，请稍后再试试");
            }, 1);
        }
        //加入书架用到的方法
        Local.getdownload = function (downloadinfo) {
            for (var key in downloadinfo) {
                if (downloadinfo[key]) {
                    return downloadinfo[key];
                }
            }
        };
        //单本书加入书架
        Local.addToShelf = function (bookinfo, needtoast) {
            if(needtoast == undefined)
                needtoast = 1;//1表示弹出 “成功加入书架”的提示
            C.callCocoa({
                "method": "addToShelf",
                "id": bookinfo.bid,
                "title": bookinfo.title,
                "intro": bookinfo.intro || "",
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
                "needtoast": needtoast
            });
        }
        //批量添加到本地书架   注意：bids需要转为json字符串传入window.JSON.stringify(bids) 对应的方法里面才需要obj(bids)
        Local.addToShelfBooks = function (books) {
            while (books.indexOf("\r\n") > 0) {
                books = books.replace("\r\n", "");
            }
            // var booksinfo = obj(bids);
            var booksinfo = books;
            for (var i = 0; i < booksinfo.length; i++) {
                var bookinfo = booksinfo[i];
                if (i == booksinfo.length - 1)
                    Local.addToShelf(bookinfo,1); //批量加入时 只在最后一本书加入成功之后再toast 不需要每本书都提示toast
                else
                    Local.addToShelf(bookinfo,0);
            }
        };
        //打开页面
        Local.openInside = function (url) {
            url += url.indexOf('?') != -1 ? '&' : '?';
            url = url + getTransparentParam();
            C.callCocoa({
                "method": "open_inside",
                "url": url
            });
        };
        //唤起客户端分享控件
        Local.shareControl = function () {
            C.callCocoa({
                "method": "sharecontrol"
            })
        };
        // 设置右上角的分享图标。
        Local.setIconForShareing = function(url,cover,title,desc){
            //document.addEventListener('ondataavailable', function (shareevent) {
                C.callCocoa({
                    "method": "web_share",
                    "title": title,
                    "intro": desc,
                    "img": cover,
                    "url": url
                });
            //}, false);
            //var shareevent = document.createEvent('HTMLEvents');
            //shareevent.initEvent("ondataavailable", true, true);
            //document.dispatchEvent(shareevent);
        }
        //隐藏右上角分享
        Local.hideShareIcon=function(){
             C.callCocoa({
                "method": "custom_ui",
                "showsharebutton": "0"
            })
        }
        //点击分享当前页面：
        Local.shareTopic = function(url,cover,title,desc){
           Local.setIconForShareing(url,cover,title,desc);
           Local.hideShareIcon();
           Local.shareControl();
        }     
        //去书籍详情页
        Local.goBookDetail=function(bid){
            window.location.href = "uniteqqreader://nativepage/book/detail?bid=" + bid;
        };
        //去书籍阅读页
        Local.goRead=function(bid){
            window.location.href = "uniteqqreader://nativepage/client/readepage?bid=" + bid;
        };
        //跳转充值页面
        Local.doCharge=function(){
            window.location.href="uniteqqreader://nativepage/coin/recharge?value=1";
        }
        //跳转包月专区
        Local.goMontharea=function(){
            window.location.href="uniteqqreader://nativepage/discover/vipzone";
        }
        //跳转书架
        Local.openBookShelf=function(){
            window.location.href="uniteqqreader://nativepage/client/bookshelf";
        }
        return Local;
    })(C,common);
}