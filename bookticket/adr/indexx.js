var pageObject = {};
pageObject.URL = '';
pageObject.isLogin = false;


function init() {
	loadTpl('tpl/index.html');
    pageObject.URL = server() + 'bookTicket/init?qq=' + param('qq');
    pageObject.showPage();
    forceLog(99999);
}

pageObject.showPage = function () {
    Local.reqaObj(pageObject.URL, function (data) {
        ih("content", template("t1",data));
        if(!nl(data.shelf)){iha("content", template("t2",data));}
        if(!nl(data.hot)){iha("content", template("t3",data));}
        iha("content", template("t4",data));
    }, ['content'], function () {
    }, 1); 
};
//详情页
pageObject.goDetail = function(bid){
	pageObject.reportLog(bid,"bt-detail");
	try{
		Local.goNativeBookDetail(bid);
	}catch (e) {
    }
	//window.location.href = "uniteqqreader://nativepage/book/detail?bid=" + bid+"&origin=711";
};
//阅读页
pageObject.goRead = function(bid,cid,offset,from){
	pageObject.reportLog(bid,"bt-read-"+from);
	Local.reqaObj("http://adr.reader.qq.com/5_7/bookDetail/queryIntro?bid=" + bid, function (data) {
        var bookinfo = {};
        bookinfo.id = data.book.bid;
        bookinfo.title = data.book.title;
        bookinfo.author = data.book.author;
        bookinfo.coverurl = data.book.cover;
        bookinfo.version = data.book.lastChapter;
        bookinfo.chapterid = -1;
        bookinfo.chaptertitle = "第一章";
        bookinfo.drm = data.book.drm;
        bookinfo.finished = data.book.finished;
        bookinfo.bookfrom = data.book.from;
        bookinfo.format = data.format;
        bookinfo.lastcname = data.book.lastChapterName;
        bookinfo.origin = 711;
        bookinfo.bookprice = data.book.price;
        bookinfo.stat_params = {};
        bookinfo.stat_params.origin = 711;
        try {
            readonline.readbook(json(bookinfo));
        } catch (e) {
        }
    }, [], function () {
    }, 1);

	/*try {
		Local.readonline(bid,-1,"第一章");
		alert(bid+ " " + cid);
    } catch (e) {
    }*/
	/*if(!nl(cid)){
		window.location.href = "uniteqqreader://nativepage/client/readepage?bid=" + bid+"&cid="+cid+"&offest="+offset;
	}else{
		window.location.href = "uniteqqreader://nativepage/client/readepage?bid=" + bid;
	}*/
};
//精选
pageObject.goJx = function(){
	pageObject.reportLog("bt","bt-jx");
	Local.openDetailByCode(1013);
	//window.location.href = "uniteqqreader://nativepage/infostream/list";
};
pageObject.reportLog = function(act_f, act_b) {
    var act_from = act_f || -110;
    var act_by = act_b;
    try {
        Local.reqaObj("http://event.book.qq.com/andmain/sum?act_f=" + act_from + "&act_b=" + act_by,
            function (data) {
            }, [], function () {
            }, 1);
    } catch (e) {
    }
};
