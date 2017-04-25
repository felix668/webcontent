var Index = {};
Index.URL = "";
Index.INIT_URL = "";

function init() {
	Index.URL = server() + "lottery/index";
	Index.INIT_URL = server() + "act1/index";
	
	Index.fillPage();
	Index.pageLog();
	
	//
	var topic = {};
	topic.url = "http://ireader.qq.com/event/act1/adr/index.html";
	topic.title = "倡导全民阅读，共建书香社会";
	topic.intro = "腾讯文学，响应总理号召，为全民阅读提供优质内容";
	topic.cover = "http://ireader.qq.com/event/act1/adr/images/20150309.jpg";
    mqq.data.setShareInfo({
		"share_url" : topic.url+"?sh_by=qq",
		"title" : topic.title,
		"desc" : topic.intro,
		"image_url" : topic.cover
	});
    WX.share(topic);
}

/**
 * 访问日志
 */
Index.pageLog = function() {
	var act_f = param("act_f")||1001;
	Local.reqaObj(Index.URL + "?act_f=" + act_f, function(data) {
	});
};
/**
 * 初始化页面
 */
Index.fillPage = function() {
	Local.reqaObj(Index.INIT_URL, function(data) {
		ih('bc', data.free_count);
		ih('uc', data.read_count);
		var cates = data.cates;
		for ( var ct in cates) {
			var books = cates[ct];
			var html = '';
			for ( var b in books) {
				if (b % 3 == 0)
					html += '<ul class="list">';
				html += '<li><a href="javascript:Index.openDetail(' + books[b].bid
						+ ')"><img src="' + books[b].cover
						+ '"><p>'
						+ books[b].title + '</p></a></li>';
				if (b % 3 == 2 || b == books.length - 1)
					html += '</ul>';
				if(b==5)
					break;
			}
			iha('c'+ct,html);
		}
	});
};

/**
 * 打开qqreader内部链接
 */
Index.openWebPage = function(tid) {
	Local.goAppReader('webpage', 'http://solomotest4.3g.qq.com/book_res/event/act1/adr/index.html', null);
};

/**
 * 打开详情
 */
Index.openDetail = function(bid) {
//	Local.goAppReader('nativepage', 'LBStoreConfigDetailActivity?bid=' + bid,
//			null);
	iOSScheme.toBook(bid, 'http://ireader.qq.com/ios/2/book_share.html?bid=' + bid);
};