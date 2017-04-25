var BASE_URL;
(function(win) {
	var scripts = document.getElementsByTagName("script");
	BASE_URL = scripts[scripts.length - 1].getAttribute("src");
	BASE_URL = BASE_URL.substr(0, BASE_URL.lastIndexOf("/") + 1);
	
	// 配置baseUrl
	/*
	 * 文件依赖
	 */
	var config = {
		baseUrl : BASE_URL, // 依赖相对路径
		paths : { // 如果某个前缀的依赖不是按照baseUrl拼接这么简单，就需要在这里指出
			zepto : 'zepto-1.1.3.min',
			sns : 'sns/sns',
			bnative : 'native/native',
		},
		shim : { // 引入没有使用requirejs模块写法的类库。
			zepto : {
				exports : '$'
			},
			sns : {
				exports : 'S'
			},
			native : {
				exports : 'N'
			}
		}
	};

	require.config(config);
	require([ 'zepto', 'sns', 'bnative' ], function($, S, N) {
		console.log($,S,N);
		//暴露必要的全局变量，没必要拘泥于requirejs的强制模块化
		win.$ = $; // zepto
		win.S = S; // SNS 社交圈分享（微信，手q，微博）
		win.N = N; // native交互（唤起客户端，客户端打开指定页面，下载客户端）
		if (window.init)
			document.addEventListener('DOMContentLoaded', initAll(), false);
	});
})(window);