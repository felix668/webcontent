// 【本函数库唯一需要手工配置的地方】
var _CONF = {
	TEST_HOST : 'solomotest4.3g.qq.com', // 测试环境访问地址
	TEST_PREFIX : 'http://solomotest4.3g.qq.com/book_res/event/', // 测试环境访问地址
	TEST_SERVER : 'http://test3.wapmusic.qq.com/andmain/', // 测试环境后台服务地址

	FORMAL_HOST : 'iyuedu.qq.com', // 正式环境访问地址
	FORMAL_PREFIX : 'http://iyuedu.qq.com/event/', // 正式环境访问地址
	FORMAL_SERVER : 'http://event.book.qq.com/andmain/' // 正式环境后台服务地址
};
//路径前缀
function prefix() {
	if (window.location.hostname == _CONF.FORMAL_HOST)
		return _CONF.FORMAL_PREFIX;
	else
		return _CONF.TEST_PREFIX;
}
function server() {
	if (window.location.hostname == _CONF.FORMAL_HOST)
		return _CONF.FORMAL_SERVER;
	else
		return _CONF.TEST_SERVER;
}

// 构造当前页面请求参数表
var _PARAMS = {};// url参数map
var pageName = '';// 页面
var fullPageName = '';// 页面
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
	fullPageName = (d[d.length - 2] || "top") + "-" + pageName;
})();

// JSON字符串转对象
function obj(str) {
	return JSON.parse(str);
}

if (window.init)
	document.addEventListener('DOMContentLoaded', initAll(), false);
/**
 * 1注册native方法 2初始化页面js init方法 3阻止拖拽事件
 */
function initAll() {
	Local.init();
	init();
	document.ondragstart = function() {
		return false;
	};
}

// 异步请求，回调函数的入参是响应文本。
function reqa(url, callback, errcallback) {
	url += url.indexOf('?') != -1 ? ('&tt=' + ttag()) : ('?tt=' + ttag());
	$.ajax({
		type : 'GET',
		url : url,
		timeout : 3000,
		success : function(data) {
			callback(data);
		},
		error : function(xhr, type) {
			// errcallback(xhr);
			console.log(xhr, type);
			if (!nl(errcallback)) {
				callback(errcallback);
			}
		}
	})
}
// 当前毫秒时间末四位字符串
function ttag() {
	return (new Date().getTime()) % 10000;
}

// 获取当前页面请求参数值
function param(name) {
	return _PARAMS[name];
}
// 设置当前页面的请求参数值
function setParam(name, value) {
	_PARAMS[name] = value;
}
// 获取cookie
function ckg(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ')
			c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0)
			return c.substring(nameEQ.length, c.length);
	}
	return null;
};
// 获取页面名称
function getPageName() {
	return pageName;
}
// 对象为空判断
function nl(obj) {
	return $.trim(obj) == false;
}
//延迟指定的毫秒数后，执行回调函数。
function delay(millis, callback) {
    setTimeout(callback, millis);
}

//每间隔执行的毫秒数，执行回调函数。回调函数要求有布尔返回值，返回true时终止后续执行。
function every(millis, callback) {
    var tid = 0;
    tid = setInterval(function () {
        if (callback()) clearInterval(tid);
    }, millis);
}
//设置内部文档
function ih(eid, html) {
	$("#" + eid).html(html);
}
/**
 * @param act_f
 *            pv,uv来源，五位数字
 * @param act_b
 *            点击来源，string页面元素属性，默认当前页面
 */
function forceLog(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || fullPageName;
	Local.reqaObj(server() + "sum?act_f=" + act_from + "&act_b=" + act_by,
			function(data) {
			}, [], function() {
				JSToast.showToast("网络不畅，请稍后再试试");
			}, 1);
}

/**
 * @desc 从某个位置唤起包月
 * @param from
 */
function openVIP(from) {
	forceLog(param("act_f"), from);
	Local.openVip(true);
}


function genBookPic(bid, prefix) {
	prefix = prefix || 's';
	if (bid) {
		return 'http://wfqqreader.3g.qq.com/cover/' + (bid % 1000) + "/" + bid + "/" + prefix + "_" + bid + ".jpg";
	}
	return 'http://wfqqreader.3g.qq.com/cover/' + prefix + "_default.jpg";
}