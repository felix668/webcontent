// 【本函数库主要进行一些书籍相关操作，注意支持Android和IOS】
var ABook = {};

/**
 * 跳转书籍详情页
 */
ABook.gotoDetail = function(bid) {
	forceLog(param("act_f"),"KBgotoDetail");
	Local.nativeDetail(bid, param("origin") || 8888);
}