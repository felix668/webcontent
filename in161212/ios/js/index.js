var _PARAMS = {};
var pageName = '';
var fullPageName = '';// 页面
function obj(str) {
	return JSON.parse(str);
}
(function () {
    var i = location.href.indexOf('?', 0);
    var url;
    if (i > 0) {
        var str1 = location.href.substring(i + 1, location.href.length - location.hash.length);
        str1 = str1.replace("&&","&");
        if (str1.length > 0) _PARAMS = obj('{"' + str1.replace(/&/g, '","').replace(/=/g, '":"') + '"}');
        url = location.href.substring(0, i + 1);
    } else {
        url = location.href;
    }
    var d = url.split('/');
    pageName = d[d.length - 1].replace(/.html[\?,#,&]*$/, '');
    fullPageName = (d[d.length - 2] || "top") + "-" + pageName;
})();

//获取当前页面请求参数值
function param(name) {
	return _PARAMS[name];
}
var C = Charm = window.C = window.Charm = {};
(function(C) {
C.callCocoa = function(params){
    if(C.hasTouch){
        var obj = new JSBridgeObj();
        for (var k in params) obj.addObject(k, params[k]);
        obj.sendBridgeObject();
    }
};
})(Charm);
var Local = {};
Local.nativeDetail = function (bid, origin, lm_f, frombid, data_type, alg) {
    lm_f = lm_f || "";
    frombid = frombid || "";
    data_type = data_type || "";
    alg = alg || "";
    C.callCocoa({
        "method": "native_detail",
        "bid": bid,
        "origin": "" + origin,
        "alg": "" + alg,
        "data_type": "" + data_type,
        "frombid": frombid,
        "lm_f": "" + lm_f
    });

};
var ABook = {};
/**
 * 跳转书籍详情页
 */
ABook.gotoDetail = function(bid) {
	Local.nativeDetail(bid, param("origin") || 8888);
}