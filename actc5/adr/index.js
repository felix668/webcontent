var Index = {};
var isQQLogin = false;
Index.InfoUrl = "";
Index.userAccount = "";
var daytime = 24 * 3600;
var hourtime = 3600;
var mintime = 60;
Index.URL ="";
function init() {
    loadTpl('tpl/qbao.html');
    pageHost();
    Index.InfoUrl = server() + "redbag/index";
    Index.URL = server() + 'sum'
    Index.getUserInfo();
    Index.fillPageWithTry();


};

Index.getUserInfo = function () {
    Local.reqaObj(Index.InfoUrl, function (data) {
        if (data.endTime[2319] == 0 && data.endTime[2320]==0 && data.endTime[2322]==0) {
            isQQLogin = data.isLogin;
            var ret = template('over', data);
            ih('content', ret);
            if (data.nick) {//昵称
                ih('nickover', data.nick);
            }
            if (data.icon) {//头像
                document.getElementById("uiconover").src = data.icon;
            }
            ZBook.afterLoad(['content']);//点击态
        } else {
            isQQLogin = data.isLogin;
            var ret = template('qbag', data);
            ih('content', ret);
            if (data.nick) {//昵称
                ih('nick', data.nick);
            }
            if (data.icon) {//头像
                document.getElementById("uicon").src = data.icon;
            }
            ZBook.afterLoad(['content']);//点击态
            if (!nl(data.books[2319])) {
                Index.showActiveTime(data.endTime[2319], 9);
            }
            if (!nl(data.books[2320])) {
                Index.showActiveTime(data.endTime[2320], 5);
            }
            if (!nl(data.books[2322])) {
                Index.showActiveTime(data.endTime[2322], 2);
            }
            ss('end9', 'display', '');
            ss('end5', 'display', '');
            ss('end2', 'display', '');
            ss("ccontent", 'display', '');
        }
    }, [], function () {
        Local.showToast("网络异常，请稍候重试");
    }, 1);
};

function goAccount() {
    if (isQQLogin) {
        window.location.href = Index.userAccount;
    } else {
        Local.login(Index.userAccount);
    }
};

function pageHost() {
    if (window.location.hostname == _CONF.FORMAL_HOST) {
        Index.userAccount = _CONF.FORMAL_ACCOUNTADDR;
    } else {
        Index.userAccount = _CONF.TEST_ACCOUNTADDR;
    }
};

//倒计时函数，每一秒变更一次状态
Index.showActiveTime = function (times, id) {
    var timer = null;
    var doWork = function () {
        if (times > 0) {
            days = Math.floor(times / daytime);
            hours = Math.floor(times % daytime / hourtime);
            minutes = Math.floor(times % daytime % hourtime / mintime);
            ih(id + 'd', days);
            ih(id + 'h', hours);
            ih(id + 'm', minutes);
            --times;
        } else {
            ss(id+"c", 'display', 'none');
            clearInterval(timer);//停止倒计时
        }
    }

    timer = window.setInterval(doWork, 1000);//1s执行一次
};

/**
 * 跳转书籍详情
 * @param bid
 */
function goBookDetailPage(bid) {
    var bookObject = {};
    bookObject.bid = bid;
    bookObject.pagecode = 1001;
    Local.openDetailByCode(bookObject);
};


Index.fillPageWithTry = function() {
    // PV,UV
    Index.forceLog(param("act_f") || 30010);
};

Index.forceLog = function(act_f, act_b) {
    var act_from = act_f || -110;
    var act_by = act_b || location.href.match(/[\w]+\.html/)[0];
    Local.reqaObj(Index.URL + "?act_f=" + act_from + "&act_b=" + act_by,
        function() {
        }, [], function() {
            JSToast.showToast("网络不畅，请稍后再试试");
        }, 1);
};