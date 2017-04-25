var BASE_URL;
(function(win) {
	var scripts = document.getElementsByTagName("script");
	BASE_URL = scripts[scripts.length - 1].getAttribute("src");
	BASE_URL = BASE_URL.substr(0, BASE_URL.lastIndexOf("/") + 1);
	// BASE_URL = "https://yuedu.reader.qq.com/event/common";
	// 配置baseUrl
	/*
	 * 文件依赖
	 */
	var config = {
		baseUrl : BASE_URL, // 依赖相对路径
		paths : { // 如果某个前缀的依赖不是按照baseUrl拼接这么简单，就需要在这里指出
			sns : 'sns/sns-v1',
			bnative : 'native/native-v1'
		},
		shim : { // 引入没有使用requirejs模块写法的类库。
			sns : {
				exports : 'S'
			},
			native : {
				exports : 'N'
			}
		}
	};

	require.config(config);
	require(['sns', 'bnative' ], function(S, N) {
		console.log(S,N);
		//暴露必要的全局变量，没必要拘泥于requirejs的强制模块化
		win.S = S; // SNS 社交圈分享（微信，手q，微博）
		win.N = N; // native交互（唤起客户端，客户端打开指定页面，下载客户端）
		if (window.initSNS)
			document.addEventListener('DOMContentLoaded', initSNS(), false);
	});
})(window);