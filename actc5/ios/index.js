var Index = {};
var isQQLogin = false;
Index.InfoUrl = "";
var daytime = 24 * 3600;
var hourtime = 3600;
var mintime = 60;
Index.URL = "";
function init() {
    loadTpl('tpl/qbao.html');
    Index.InfoUrl = server() + "redbag/index";
    Index.URL = server() + 'sum'
    Index.getUserInfo();
    Index.fillPageWithTry();
};

Index.getUserInfo = function () {
    Local.reqaObj(Index.InfoUrl, function (data) {
        if (data.clientversion) {
            if (data.endTime[2332] == 0 && data.endTime[2329] == 0 && data.endTime[2330] == 0) {
                isQQLogin = data.isQQLogin;
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
                isQQLogin = data.isQQLogin;
                var ret = template('qbag', data);
                ih('content', ret);
                if (data.nick) {//昵称
                    ih('nick', data.nick);
                }
                if (data.icon) {//头像
                    document.getElementById("uicon").src = data.icon;
                }
                ZBook.afterLoad(['content']);//点击态
                if (!nl(data.books[2332])) {
                    Index.showActiveTime(data.endTime[2332], 9);
                }
                if (!nl(data.books[2329])) {
                    Index.showActiveTime(data.endTime[2329], 5);
                }
                ss('end9', 'display', '');
                ss('end5', 'display', '');
                ss("ccontent", 'display', '');
            }
        } else {
            var ret = template('updateApp', data);
            ih('content', ret);
            scls('content', 'over');
            if (data.icon) {//头像
                document.getElementById("uiconupdate").src = data.icon;
            }
            ZBook.afterLoad(['content']);//点击态
        }

    }, [], function () {
        ih('content', '<div class="null_cnt"><div class="null_arr5"></div></div><div class="null_w">网络不好，' +
            '请检查网络设置</div><div class="null_btn"><a href="javascript: window.location.reload();">重新加载</a></div>')
    });
};

function goAccount() {
    if (isQQLogin) {
        Local.usercenter(1);
    } else {
        Local.login();
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
            ss(id + "c", 'display', 'none');
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
    esp(window.event);
    epd(window.event);
    url = 'book_share.html?bid=' + bid;
    var detailobj = {};
    detailobj.pagecode = "";
    detailobj.url = url;
    detailobj.bid = bid;
    detailobj.origin = "";
    detailobj.itemid = "";
    detailobj.stat_params = {};
    Local.openPageEx(detailobj, false);
};

Index.fillPageWithTry = function () {
    // PV,UV
    Index.forceLog(param("act_f") || 30010);
};

Index.forceLog = function (act_f, act_b) {
    var act_from = act_f || -110;
    var act_by = act_b || location.href.match(/[\w]+\.html/)[0];
    Local.reqaObj(Index.URL + "?act_f=" + act_from + "&act_b=" + act_by,
        function () {
        }, [], function () {
            JSToast.showToast("网络不畅，请稍后再试试");
        }, 1);
};

function goAPPStore() {
    location.href = "https://itunes.apple.com/cn/app/qq-yue-du/id487608658?mt=8";
}