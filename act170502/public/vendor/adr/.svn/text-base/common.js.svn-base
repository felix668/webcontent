//本模块实际上是cfoot.js的简化版。

var common = (function(){

	// 【本函数库唯一需要手工配置的地方】
	var _CONF = {
		TEST_HOST : 'solomotest4.3g.qq.com', // 测试环境访问地址
		TEST_FRONT : 'http://solomotest4.3g.qq.com/book_res/event/', // 测试环境前台地址
		TEST_SERVER : 'http://test3.wapmusic.qq.com/andmain/', // 测试环境后台服务地址
		TEST_SERVER_ROOT : 'http://test3.wapmusic.qq.com/', // 测试环境后台服务地址

		FORMAL_HOST : 'iyuedu.qq.com', // 正式环境访问地址
		FORMAL_FRONT : 'http://iyuedu.qq.com/event/', // 正式环境前台地址
		FORMAL_SERVER : 'http://event.book.qq.com/andmain/', // 正式环境后台服务地址
		FORMAL_SERVER_ROOT : 'http://event.book.qq.com/' // 正式环境后台服务地址
	};

	function server() {
		if (
			window.location.hostname === _CONF.FORMAL_HOST||
			window.location.hostname === 'yuedu.reader.qq.com'){
			return _CONF.FORMAL_SERVER;
		}else{
			return _CONF.TEST_SERVER;
		};
	}

	// 构造当前页面请求参数表
	var _PARAMS = {};// url参数map
	var pageName = '';// 页面
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
	})();

	// JSON字符串转对象
	function obj(str) {
		return JSON.parse(str);
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
	//function nl(obj) {
	//	return $.trim(obj) == false;
	//}
	//对象为空判断
	function nl(obj) {
		return obj==undefined || obj==null || obj=='';
	}

	//对象转JSON字符串
	function json(ob) {
		return JSON.stringify(ob);
	}

	function ajax(url,callback,errcallback,errorHandler){
		var xhr = new XMLHttpRequest();
        xhr.timeout = 5000;
        xhr.ontimeout = function(){
            console.log('timeout');
            if( errorHandler ){
            	errorHandler();
            };
        };
        xhr.onerror = function(xhr,type){
            console.log(xhr, type);
            if (!nl(errcallback)) {
                callback(errcallback);
            }
            if( errorHandler ){
            	errorHandler();
            };
        };
        xhr.onreadystatechange = function(){
            if( xhr.readyState===4 ){
                if( xhr.status===200 ){
                    var data = JSON.parse( xhr.responseText );
                    callback(data);
                };
            };
        };
        xhr.open( 'GET',url );
        xhr.send( null );
	}

	return {
		server: server,
		param: param,
		nl: nl,
		ttag: ttag,
		setParam: setParam,
		getPageName: getPageName,
		ckg: ckg,
		obj: obj,
		json: json,
		ajax: ajax
	}

})( );