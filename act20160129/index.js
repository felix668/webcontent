function init() {
    forceLog(param("act_f"), "index");
    ZBook.bindtouchall();
}

var gotoComment = function (bid,ctype,commentid) {
    // 跳转到书友圈
    var pagetitle = "书评详情";
    var detailobj = {};
    detailobj.pagecode = "1010";
    detailobj.bid = bid;
    detailobj.commentid = commentid;
    detailobj.ctype = ctype;
    detailobj.pagetitle = pagetitle;
    Local.openPageEx(detailobj);
    forceLog(param("act_f"), "gocomment_" + commentid);
};

var gotoTopic = function () {
    forceLog(param("act_f"), "gotoTopic");
    Local.go("http://iyuedu.qq.com/android/5_7/topicV2.html?tid=310724");
};