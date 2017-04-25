var ABook = (function(Local,common){

	var param = common.param;

	// 【本函数库主要进行一些书籍相关操作，注意支持Android和IOS】
	var ABook = {};

	/**
	 * 跳转书籍详情页
	 */
	ABook.gotoDetail = function(bid) {
		//location.href = "uniteqqreader://nativepage/book/detail?bid="+bid;
		Local.nativeDetail(bid, param("origin") || 8888);
	}

	ABook.gotoRead = function(bid) {
		Local.readonlineV2(bid);
	}

	return ABook;

})(Local,common);