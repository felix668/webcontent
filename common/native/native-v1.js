!function(a, b) {
	var d = b(this[a] = this[a] || {});
	"function" == typeof define && (define.amd || define.cmd) ? define(d)
			: "object" == typeof module && (module.exports = d)
}('bnative', function(bnative) {
	//打开app
	bnative.openApp = function(front) {
		front = front || BASE_URL;
		
		if (env.pt == "adr") {
			requirejs([ front + "/native/androidScheme.js" ],
					function() {
//						if(env.wv >= 656){
//							WX.launchApplication("uniteqqreader://nativepage/infostream/list");
//						}else{
							window.location.href = "uniteqqreader://nativepage/infostream/list";
//						}
					});
		} else if (env.pt == "ios") {
			requirejs([ front + "/native/iosscheme.js" ], function() {
				if(env.wv >= 656){
					WX.launchApplication("uniteqqreader://nativepage/infostream/list");
				}else{
					window.location = iOSScheme.simpleScheme();
				}
			});
		} else {
			console.log("请在移动设备打开~");
		}
	}
	//打开app指定活动页面
	bnative.openPage = function(url, front) {
		front = front || BASE_URL;
		if (env.pt == "adr") {
			requirejs([ front + "/native/androidScheme.js" ],
					function() {
//						if(env.wv >= 656){
//							WX.launchApplication("uniteqqreader://webpage/" + url);
//						}else{
							window.location.href = "uniteqqreader://webpage/" + url;
//						}
					});
		} else if (env.pt == "ios") {
			requirejs([ front + "/native/iosscheme.js" ], function() {
				if(env.wv >= 656){
					WX.launchApplication("uniteqqreader://webpage/" + url);
				}else{
					iOSScheme.open(iOSScheme.getUrlScheme(url));
				}
			});
		} else {
			console.log("请在移动设备打开~");
		}
	}
	//打开app指定native页面
	bnative.openNativePage = function(url, front) {
		front = front || BASE_URL;
		if (env.pt == "adr") {
			requirejs([ front + "/native/androidScheme.js" ],
					function() {
//						if(env.wv >= 656){
//							WX.launchApplication("uniteqqreader://webpage/" + url);
//						}else{
							window.location.href = url;
//						}
					});
		} else if (env.pt == "ios") {
			requirejs([ front + "/native/iosscheme.js" ], function() {
				if(env.wv >= 656){
					WX.launchApplication(url);
				}else{
					iOSScheme.open(url);
				}
			});
		} else {
			console.log("请在移动设备打开~");
		}
	}
	//下载app
	bnative.downLoad = function(front,channelId) {
		front = front || BASE_URL;
		if (env.pt == "adr") {
			requirejs([ front + "/native/androidScheme.js" ],
					function() {
				window.location.href = androidScheme.getandroidDownloadUrlV2(channelId);
			});
		} else if (env.pt == "ios") {
			requirejs([ front + "/native/iosscheme.js" ], function() {
				window.location.href = iOSScheme.APPSTORE;
			});
		} else {
			console.log("请在移动设备打开~");
		}
	}
	//去书籍详情页
	bnative.toBookDetail = function(bid, front) {
		front = front || BASE_URL;
		if (env.pt == "adr") {
			requirejs([ front + "/native/androidScheme.js" ], function() {
//				if(env.wv >= 656){
//					WX.launchApplication("uniteqqreader://nativepage/book/detail?bid="+bid);
//				}else{
					window.location.href = "uniteqqreader://nativepage/book/detail?bid="+bid;
//				}
			});
		} else if (env.pt == "ios") {
			requirejs([ front + "/native/iosscheme.js" ], function() {
				if(env.wv >= 656){
					WX.launchApplication("uniteqqreader://nativepage/book/detail?bid="+bid);
				}else{
					iOSScheme.open(iOSScheme.getBookScheme(bid));
				}
			});
		} else {
			console.log("请在移动设备打开~");
		}
	}
	//去阅读页
	bnative.toReadBook = function(bid, front) {
		front = front || BASE_URL;
		if (env.pt == "adr") {
			requirejs([ front + "/native/androidScheme.js" ],
					function() {
//				if(env.wv >= 656){
//					WX.launchApplication("uniteqqreader://nativepage/client/readepage?bid="+bid);
//				}else{
					window.location.href = "uniteqqreader://nativepage/client/readepage?bid="+bid;
//				}
			});
		} else if (env.pt == "ios") {
			requirejs([ front + "/native/iosscheme.js" ], function() {
				if(env.wv >= 656){
					WX.launchApplication("uniteqqreader://nativepage/client/readepage?bid="+bid);
				}else{
					window.location.href = "uniteqqreader://nativepage/client/readepage?bid="+bid;
				}
			});
		} else {
			console.log("请在移动设备打开~");
		}
	}
	return bnative;
})