var Books = {};
Books.URL = "";
Books.INIT_URL = "";

Books.pageNo = 1;
Books.loading = false;
Books.hasMore = false;

Books.tags = {
		10123 : "传统文化",
		10030 : "古典文学",
		10024 : "名家名作",
		10026 : "当代文学",
		10088 : "伟人传记",
		10025 : "外国名著"
};

function init() {
	Books.URL = server() + "lottery/index";
	Books.INIT_URL = server() + "act1/list?cid="+param("cid");
	
	Books.fillPage();
	Books.pageLog();
	
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
Books.pageLog = function() {
	Local.reqaObj(Books.URL + "?act_f=1002", function(data) {
	});
};



/**
 * 初始化页面
 */
Books.fillPage = function () {
    Local.reqaObj(Books.INIT_URL, function (data) {
    	$("h1").html(Books.tags[param("cid")]);
        var str = fillContent(data);
        ih('content', str);
        Books.setMore(data);
    }, ['content'], function () {
    },1);
};

Books.getMore = function () {
    if (Books.hasMore && !Books.loading) {
    	Books.loading = true;
        ih('getmore', '<span></span>加载中');
        dv('getmore');
        var nextPageNo = Books.pageNo + 1;
        Local.reqaObj(Books.INIT_URL + '&page=' + nextPageNo, function (data) {
            var str = fillContent(data);
            iha("content", str);
            Books.setMore(data);
            Books.pageNo = nextPageNo; //页面渲染完成才能把页码+1
            Books.hasMore = data.hasMore;
            Books.loading = false;
        },[], function () {
            Books.loading = false;
        }, 1);
    }
};

Books.setMore = function (data) {
    Books.hasMore = data.hasMore;
    if (Books.hasMore) {
        ZBook.unlimitedScroll(function () {
                Books.getMore();
            },
            null, 80);
        ih('getmore', '显示更多');
        bind('getmore', 'click', Books.getMore);
        dv('getmore');
    } else {
        id('getmore').innerHTML = "已显示全部";
        ZBook.unlimitedScroll(function () {
            },
            null, 80);
    }
};

/**
 * 填充页面模板
 * @param data
 */
function fillContent(data) {
	var html = '';
	var books = data.bookList;
	for ( var b in books) {
		html += ' <li><a href="javascript:Books.openDetail(' + books[b].bid
				+ ')"><img src="' + books[b].cover
				+ '"><dl class="book-info"><dt>'
				+ books[b].title + '</dt><dd>作者：' + books[b].author
				+ '</dd><dd class="des">' + books[b].intro
				+ '</dd></dl></a></li>';
	}
	return html;
}


/**
 * 打开详情
 */
Books.openDetail = function(bid) {
	iOSScheme.toBook(bid, 'http://ireader.qq.com/ios/2/book_share.html?bid=' + bid);
};
