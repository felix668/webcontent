//与终端本地协议相关逻辑
var iOSScheme = {};

iOSScheme.APPSTORE = "https://itunes.apple.com/cn/app/qq-yue-du/id487608658?mt=8";

/**
 * 获取书籍阅读页url
 * 
 * @param bid
 * @param cid
 * @returns {String}
 */
iOSScheme.getReadScheme = function(bid, cid) {
	if(nl(cid)) cid = 1;
	var o = {
		"bookId" : "" + bid,
		"chapterId" : cid
	};
	return "qqreader://com.tencent.reader?action=openBook&parameter="
			+ encodeURIComponent(json(o));
};

iOSScheme.toRead = function(bid, cid) {
	var b = iOSScheme.browser();
	if (b.ios || b.iPhone || b.iPad) {
		iOSScheme.open(iOSScheme.getReadScheme(bid, cid));
	} else if (b.android) {// android跳转至详情
		Local.goAppReader('nativepage', 'LBStoreConfigDetailActivity?bid='
				+ bid, 'http://ubook.qq.com/read.html?bid=' + bid);
	}
};

/**
 * 获取书籍详情页url
 * 
 * @param bid
 * @returns {String}
 */
iOSScheme.getBookScheme = function(bid) {
	var o = {
		"bookId" : "" + bid
	};
	return "qqreader://com.tencent.reader?action=openDetail&parameter="
			+ encodeURIComponent(json(o));
};

iOSScheme.toBook = function(bid, url) {
	var b = iOSScheme.browser();
	if (b.ios || b.iPhone || b.iPad) {
		iOSScheme.open(iOSScheme.getBookScheme(bid), url);
	} else if (b.android) {
		Local.goAppReader('nativepage', 'LBStoreConfigDetailActivity?bid='
				+ bid, 'http://ubook.qq.com/intro.html?bid=' + bid);
	}
};

iOSScheme.getGeneScheme = function() {
	return "qqreader://com.tencent.reader?action=openGene";
};
iOSScheme.toGene = function() {
	var b = iOSScheme.browser();
	if (b.ios || b.iPhone || b.iPad) {
		iOSScheme.open(iOSScheme.getGeneScheme());
	}
};

/**
 * 通过app打开外部地址的url
 * 
 * @param url
 * @returns {String}
 */
iOSScheme.getUrlScheme = function(url) {
	var o = {
		"url" : "" + url
	};
	return "qqreader://com.tencent.reader?action=openUrl&parameter="
			+ encodeURIComponent(json(o));
};

iOSScheme.toUrl = function(url) {
	var b = iOSScheme.browser();
	if (b.ios || b.iPhone || b.iPad) {
		iOSScheme.open(iOSScheme.getUrlScheme(url));
	} else if (b.android) {
		Local.goAppReader('webpage', url);

	}
};

/**
 * 打开url
 * 
 * @param scheme
 */
iOSScheme.open = function(scheme, fail) {
	var clickedAt = +new Date;
	if (!fail) {
		fail = iOSScheme.APPSTORE;
	}
	window.location = scheme;
	// During tests on 3g/3gs this timeout fires immediately if less than
	// 500ms.
	setTimeout(function() {
		// To avoid failing on return to MobileSafari, ensure freshness!
		if (+new Date - clickedAt < 2000) {
			window.location = fail;
		}
	}, 500);
};

/**
 * os判断
 */
iOSScheme.browser = function() {
	var u = navigator.userAgent.toLowerCase();
	return {
		txt : u, // 浏览器版本信息
		ios : !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/), // ios终端
		android : u.indexOf('android') > -1, // android终端
		iPhone : u.indexOf('iphone') > -1, // 是否为iPhone
		iPad : u.indexOf('ipad') > -1
	// 是否iPad
	};
};
