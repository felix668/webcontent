(function(win) {
	// 配置baseUrl
	var baseUrl = front();

	/*
	 * 文件依赖
	 */
	var config = {
		baseUrl : baseUrl, // 依赖相对路径
		paths : { // 如果某个前缀的依赖不是按照baseUrl拼接这么简单，就需要在这里指出
			zepto : 'common/zepto-1.1.3.min',
			sns : 'common/sns/sns',
			native : 'common/native/nativeapp',
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
	require([ 'zepto', 'sns', 'native' ], function($, S, N) {
		console.log($);
		win.$ = $; // 暴露必要的全局变量，没必要拘泥于requirejs的强制模块化
		win.S = S;
		win.N = N;
		if (window.init)
			document.addEventListener('DOMContentLoaded', initAll(), false);
	});
})(window);