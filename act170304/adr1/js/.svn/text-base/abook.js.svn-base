// 【本函数库主要进行一些书籍相关操作，注意支持Android和IOS】
var ABook = {};

/**
 * 跳转书籍详情页Android 5.7以后
 */
ABook.gotoDetail57 = function(bid) {
	window.location.href = "uniteqqreader://nativepage/book/detail?bid=" + bid;
}
/**
 * 跳转书籍详情页
 */
ABook.gotoDetail = function(bid) {
	alert(bid);
	var dataObj = {
		pagecode : "1001",
		bid : bid
	};
	Local.openDetailByCode(dataObj);
}
/**
 * 跳转阅读页
 */
ABook.gotoRead = function(bid) {
	var dataObj = {
			pagecode : 1015,
			bid : bid
	};
	Local.openDetailByCode(dataObj);
}

/**
 * 跳转阅读页，带进度
 */
ABook.gotoReading = function(bid) {
	window.location.href = "uniteqqreader://nativepage/client/readepage?bid="+bid;
}

/**
 * 跳转外部网页
 */
ABook.gotoOuter = function(url) {
	var dataObj = {
			pagecode : 1009,
			url : url
	};
	Local.openDetailByCode(dataObj);
}