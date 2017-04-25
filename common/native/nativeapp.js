!function(a, b) {
	var d = b(this[a] = this[a] || {});
	"function" == typeof define && (define.amd || define.cmd) ? define(d)
			: "object" == typeof module && (module.exports = d)
}('native', function(native) {
	//打开app
	native.openApp = function(front) {
		front = front || BASE_URL;
		requirejs([ front + "/env.js" ], function(envi) {
			var env = envi.Base();
			if (env.pt == "adr") {
				requirejs([ front + "/native/androidScheme.js" ],
						function() {
							window.location.href = "uniteqqreader://nativepage/infostream/list";
						});
			} else if (env.pt == "ios") {
				requirejs([ front + "/native/iosscheme.js" ], function() {
					 var clickedAt = +new Date;
					 window.location = iOSScheme.simpleScheme();
			         setTimeout(function () {
			            if (+new Date - clickedAt < 2000) {
			                window.location = iOSScheme.APPSTORE;
			            }
			         }, 1000);
				});
			} else {
				console.log("请在移动设备打开~");
			}
		})
	}
	//在app打开指定页面
	native.openPage = function(url, front) {
		front = front || BASE_URL;
		requirejs([ front + "/env.js" ], function(envi) {
			var env = envi.Base();
			if (env.pt == "adr") {
				requirejs([ front + "/native/androidScheme.js" ],
						function() {
							window.location.href = "uniteqqreader://webpage/" + url;
						});
			} else if (env.pt == "ios") {
				requirejs([ front + "/native/iosscheme.js" ], function() {
					 var clickedAt = +new Date;
					 window.location = iOSScheme.getUrlScheme(url);
			         setTimeout(function () {
			            if (+new Date - clickedAt < 2000) {
			                window.location = iOSScheme.APPSTORE;
			            }
			         }, 1000);
				});
			} else {
				console.log("请在移动设备打开~");
			}
		})
	}
	//下载app
	native.downLoad = function(front) {
		front = front || BASE_URL;
		requirejs([ front + "/env.js" ], function(envi) {
			var env = envi.Base();
			if (env.pt == "adr") {
				requirejs([ front + "/native/androidScheme.js" ],
						function() {
					window.location.href = androidScheme.getandroidDownloadUrlV2();
				});
			} else if (env.pt == "ios") {
				requirejs([ front + "/native/iosscheme.js" ], function() {
					window.location.href = iOSScheme.APPSTORE;
				});
			} else {
				console.log("请在移动设备打开~");
			}
		})
	}
	//去书籍详情页
	native.toBookDetail = function(bid, front) {
		front = front || BASE_URL;
		requirejs([ front + "/env.js" ], function(envi) {
			var env = envi.Base();
			if (env.pt == "adr") {
				requirejs([ front + "/native/androidScheme.js" ],
						function() {
					window.location.href = "uniteqqreader://nativepage/book/detail?bid="+bid;
				});
			} else if (env.pt == "ios") {
				requirejs([ front + "/native/iosscheme.js" ], function() {
					window.location.href = "uniteqqreader://nativepage/book/detail?bid="+bid;
				});
			} else {
				console.log("请在移动设备打开~");
			}
		})
	}
	//去阅读页
	native.toReadBook = function(bid, front) {
		front = front || BASE_URL;
		requirejs([ front + "/env.js" ], function(envi) {
			var env = envi.Base();
			if (env.pt == "adr") {
				requirejs([ front + "/native/androidScheme.js" ],
						function() {
					window.location.href = "uniteqqreader://nativepage/client/readepage?bid="+bid;
				});
			} else if (env.pt == "ios") {
				requirejs([ front + "/native/iosscheme.js" ], function() {
					window.location.href = "uniteqqreader://nativepage/client/readepage?bid="+bid;
				});
			} else {
				console.log("请在移动设备打开~");
			}
		})
	}
	return native;
})