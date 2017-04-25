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
			local_android : 'adr/local',
			jsbridge_android : 'adr/jsbridge',
			
			local_ios : 'ios/local',
			jsbridge_ios : 'ios/jsbridge',
			charm : 'ios/charm',
			
			Local : 'native/Local'
		},
		shim : { // 引入没有使用requirejs模块写法的类库。
			local_android : {
				exports : 'LA'
			},
			jsbridge_android : {
				exports : 'JA'
			},
			local_ios : {
				exports : 'LI'
			},
			jsbridge_ios : {
				exports : 'JI'
			},
			charm : {
				exports : 'C'
			},
			Local : {
				exports : '_Local'
			}
		}
	};
	
	function deepCopy(p, c) {
	　　　　var c = c || {};
	　　　　for (var i in p) {
	　　　　　　if (typeof p[i] === 'object') {
	　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
	　　　　　　　　deepCopy(p[i], c[i]);
	　　　　　　} else {
	　　　　　　　　　c[i] = p[i];
	　　　　　　}
	　　　　}
	　　　　return c;
	}

	require.config(config);
	if(env.pt=="ios"){
		require(['local_ios', 'jsbridge_ios', 'charm', 'Local' ], function(LI, JI, C, _Local) {
			console.log(LI, JI, C);
			//暴露必要的全局变量，没必要拘泥于requirejs的强制模块化
			// 非amd模式，无法别名暴露
//			win.LI = LI; // IOS Local
//			win.JI = JI; // IOS JsBridge
//			win.C = C; // IOS charm
			win._Local = _Local; // Local
			console.log(new Date().getTime());
			_Local = deepCopy(Local,_Local);
			console.log(new Date().getTime());
			if (window.init)
				document.addEventListener('DOMContentLoaded', init(), false);
		});
	}else{
		require(['local_android', 'jsbridge_android', 'Local', ], function(LA, JA, _Local) {
			console.log(LA, JA, _Local ,Local);
			//暴露必要的全局变量，没必要拘泥于requirejs的强制模块化
			// 非amd模式，无法别名暴露
//			win.LA = LA; // Android Local
//			win.JA = JA; // Android JsBridge
			win._Local = _Local; // Local
			console.log(new Date().getTime());
			Local.init();//android需要注册事件
			_Local = deepCopy(Local,_Local);
			console.log(new Date().getTime());
			if (window.init)
				document.addEventListener('DOMContentLoaded', init(), false);
		});
	}
	
})(window);