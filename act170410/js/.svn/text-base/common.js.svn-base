var common = (function(){
	var _CONF = {
		TEST_HOST_ios : 'ptsolomo.reader.qq.com', // ios测试环境
		TEST_HOST_adr :'solomotest4.3g.qq.com', //adr测试环境
		TEST_SERVER_adr : 'http://test3.wapmusic.qq.com/andmain/', // 测试环境后台adr
		TEST_SERVER_ios : 'https://ptwapmusic3.reader.qq.com/iosmain/', // 测试环境后台ios
		TEST_FRONT_ios : 'https://ptsolomo.reader.qq.com/book_res/event/', // 测试环境前台地址ios
		TEST_FRONT_adr : 'http://solomotest4.3g.qq.com/book_res/event/', // 测试环境前台地址adr
		FORMAL_HOST_adr : 'iyuedu.qq.com', // 正式环境
		FORMAL_HOST_ios : 'yuedu.reader.qq.com', // 正式环境
		FORMAL_SERVER_adr : 'http://event.book.qq.com/andmain/', // 正式环境后台adr
		FORMAL_SERVER_ios : 'https://event.reader.qq.com/iosmain/', // 正式环境后台ios
		FORMAL_FRONT_ios : 'https://yuedu.reader.qq.com/event/', // 正式环境前台地址ios
		FORMAL_FRONT_adr : 'http://iyuedu.qq.com/event/', // 正式环境前台地址adr
	};
	function sharefront(){
		if (window.location.hostname == _CONF.FORMAL_HOST_adr || window.location.hostname ==_CONF.FORMAL_HOST_ios){
			return _CONF.FORMAL_FRONT_ios;
		}else{
			return _CONF.TEST_FRONT_ios;
		}
	}
	function server() {
		if (window.location.hostname === _CONF.FORMAL_HOST_adr){
			return _CONF.FORMAL_SERVER_adr;
		}else if(window.location.hostname===_CONF.FORMAL_HOST_ios){
			return _CONF.FORMAL_SERVER_ios;
		}else if(window.location.hostname===_CONF.TEST_HOST_adr){
			return _CONF.TEST_SERVER_adr;
		}else if(window.location.hostname===_CONF.TEST_HOST_ios){
			return _CONF.TEST_SERVER_ios;
		};
	}
	function serverdata(){	
		if (window.location.hostname == _CONF.FORMAL_HOST_ios){
			return "https://event.reader.qq.com/api/focus";			
		}else if(window.location.hostname ==_CONF.FORMAL_HOST_adr){
			return "http://event.book.qq.com/api/focus";
		}else if(window.location.hostname===_CONF.TEST_HOST_adr){
			return "http://test3.wapmusic.qq.com/api/focus";
		}else if(window.location.hostname == _CONF.TEST_HOST_ios){
			return "https://ptwapmusic3.reader.qq.com/api/focus";
		}
	}
	function front(){
		if (window.location.hostname == _CONF.FORMAL_HOST_adr){
			return _CONF.FORMAL_FRONT_adr;
		}else if(window.location.hostname == _CONF.FORMAL_HOST_ios){
			return _CONF.FORMAL_FRONT_ios;
		}else if(window.location.hostname==_CONF.TEST_HOST_adr){
			return _CONF.TEST_FRONT_adr;
		}else if(window.location.hostname==_CONF.TEST_HOST_ios){
			return _CONF.TEST_FRONT_ios;
		}
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
	//对象为空判断
	function nl(obj) {
		return obj==undefined || obj==null || obj=='';
	}
	//对象转JSON字符串
	function json(ob) {
		return JSON.stringify(ob);
	}
	// 异步请求，回调函数的入参是响应文本。
    function reqa(url, callback, errcallback) {
        url += url.indexOf('?') != -1 ? ('&tt=' + ttag()) : ('?tt=' + ttag());

        var xhr = new XMLHttpRequest();
        xhr.timeout = 5000;
        xhr.ontimeout = function(){
            console.log('timeout');
        };
        xhr.onerror = function(xhr,type){
            console.log(xhr, type);
            if (!nl(errcallback)) {
                callback(errcallback);
            }
        };
        xhr.onreadystatechange = function(){
            if( xhr.readyState===4 ){
                if( xhr.status===200 ){
                    var data = xhr.responseText;
                    callback(data);
                };
            };
        };
        xhr.open( 'GET',url );
        xhr.send( null );  
    }
	//ios用
	function getTransparentParam(){
		var seturlparam = function(s,a) {
			var b = param(a);
			if (b != "undefined" && typeof b != 'undefined') {
				if(s == ""){
					s = s + a + "=" + b;
				}else{
					s = s + "&" + a + "=" + b;
				}			
			}
			return s;
		};
		var str = "rtt=0";
			str = seturlparam(str, "sid");
			str = seturlparam(str, "usid");
			str = seturlparam(str, "gsid");
			str = seturlparam(str, "c_platform");
			str = seturlparam(str, "version");
			str = seturlparam(str, "lm_f");
			str = seturlparam(str, "tf");
			str = seturlparam(str, "origin");
			str = seturlparam(str, "skey");
			str = seturlparam(str, "uin");
			str = seturlparam(str, "qimei");
			str = seturlparam(str, "loginType"); //微信登录用
			str = seturlparam(str, "uid");
			str = seturlparam(str, "access_token");
			str = seturlparam(str, "act_f");
		return str;
	}
	return {
		server: server,
		param: param,
		nl: nl,
		reqa: reqa,
		setParam: setParam,
		getPageName: getPageName,
		ckg: ckg,
		obj: obj,
		json: json,
		sharefront:sharefront,
		getTransparentParam:getTransparentParam,
		serverdata:serverdata,
		front:front
	}

})( );