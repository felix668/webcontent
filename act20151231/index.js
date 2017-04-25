var bid = 726271;

function init() {
    forceLog(param("act_f"), "index");
    ZBook.bindtouchall();
}

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


var gotoVideo = function () {
    forceLog(param("act_f"), "gotovideo");
    Local.go("http://m.v.qq.com/play/play.html?coverid=xfxd9mej2luhfoz");
};

var readonline = function () {
    forceLog(param("act_f"), "readonline");
    try{
            var bookinfo = {};
            bookinfo.id = "726271";// bid使用String类型
            bookinfo.title = "芈月传（合集）";
            bookinfo.author = "蒋胜男";
            bookinfo.coverurl = "http://wfqqreader.3g.qq.com/cover/271/726271/b_726271.jpg";
            bookinfo.version = 422;
            bookinfo.chapterid = -1;
            bookinfo.chaptertitle = "第一章";
            bookinfo.drm = 0;
            bookinfo.finished = 0;
            bookinfo.bookfrom = "QQ阅读";
            bookinfo.format = "txt";
            bookinfo.lastcname = "";
            bookinfo.origin = "0";
            bookinfo.bookprice = 0;//原价
            bookinfo.stat_params={};
            bookinfo.stat_params.origin = bookinfo.origin;
            try {
                readonline.readbook(json(bookinfo));
            } catch (e) {
            }
    } catch (e) {
    }
};