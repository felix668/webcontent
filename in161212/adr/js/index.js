//与终端本地js调用相关的都放在这里
var Local = {};
Local.haveNativeResApi = false;
//android js安全策略，进行注册
Local.resApis = function () {
    JsBridge.restoreApis({
            'JSContent': ['setStatInfo', 'openExternal', 'openDetail', 'closeDialog', 'openMonthly', 'setWebTitlebarIcon', 'openTopicComment', 'openTopicDiscuss', 'setIsBackToPage','getUsedSkinId','setWebTitlebarCheckIcon'],
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
            'JSReload': ['retry']
        },
        '5.0.1');
};
Local.resApis();
function json(obj) {
    return JSON.stringify(obj);
}
//跳转到native详情页
Local.openDetailByCode = function (dataObj) {
    JSContent.openDetail(json(dataObj));
};
var ABook = {};
ABook.gotoDetail = function(bid) {
    // forceLog(param("act_f"),"gotoDetail");
    var dataObj = {
        pagecode : "1001",
        bid : bid
    };
    Local.openDetailByCode(dataObj);
}