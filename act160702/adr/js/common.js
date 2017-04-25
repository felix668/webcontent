// JSON字符串转对象
function obj(str) {
	return JSON.parse(str);
}

// 构造当前页面请求参数表
var _PARAMS = {};// url参数map
var pageName = '';// 页面
var pageLong = '';// 长页面，精确到二级
(function() {
	var i = location.href.indexOf('?', 0);
	var url;
	if (i > 0) {
		var str1 = location.href.substring(i + 1, location.href.length
				- location.hash.length);
		if (str1.length > 0)
			_PARAMS = obj('{"' + str1.replace(/&/g, '","').replace(/=/g, '":"')
					+ '"}');
		url = location.href.substring(0, i + 1);
	} else {
		url = location.href;
	}
	var d = url.split('/');
	pageName = d[d.length - 1].replace(/.html[\?,#,&]*$/, '');
	pageLong = url.match(/[\w]+\/[\w]+\.html/)[0] || pageName;
})();

//JSON字符串转对象
function obj(str) {
	return JSON.parse(str);
}

// 获取当前页面请求参数值
function param(name) {
	return _PARAMS[name];
}
// 设置当前页面的请求参数值
function setParam(name, value) {
	_PARAMS[name] = value;
}