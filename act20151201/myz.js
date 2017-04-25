var bid = 726271;

function init() {
    forceLog(param("act_f"), "index");
    ZBook.bindtouchall();
}

var gotoComment = function (commentid) {
    //跳转到书友圈
    var pagetitle = "书评详情";
    var detailobj = {};
    detailobj.pagecode = "1010";
    detailobj.bid = bid;
    detailobj.commentid = commentid;
    detailobj.ctype = 0;
    detailobj.pagetitle = pagetitle;
    Local.openPageEx(detailobj);
    forceLog(param("act_f"), "gocomment_" + commentid);
};


//跳转到详情
var goBookDetailV2 = function () {
    var url = 'bookDetailShare.html?bid=' + bid;
    var detailobj = {};
    detailobj.pagecode = "1001";
    detailobj.url = url;
    detailobj.bid = bid;
    detailobj.origin = 0;
    detailobj.stat_params = {};
    if (param("origin")) {
        detailobj.stat_params.origin = param("origin");
    }
    if (param("alg")) {
        detailobj.stat_params.alg = param("alg");
    }
    if (param("itemid")) {
        detailobj.stat_params.itemid = param("itemid");
    }
    Local.openPageEx(detailobj, false);
    forceLog(param("act_f"), "goBookDetailV2");
};


var gotoVideo = function (commentid) {
    forceLog(param("act_f"), "gotovideo");
    Local.go("http://m.v.qq.com/play/play.html?coverid=xfxd9mej2luhfoz");
};
