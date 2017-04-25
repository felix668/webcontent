var bnative = (function(env,iOSScheme,androidScheme){
	var bnative = {};
	var BASE_URL = '';
	
	//打开app
	bnative.openApp = function(front) {
		front = front || BASE_URL;
		if (env.pt == "adr") {
			window.location.href = "uniteqqreader://nativepage/infostream/list";
		} else if (env.pt == "ios") {
			window.location = iOSScheme.simpleScheme();
		} else {
			console.log("请在移动设备打开~");
		}
	}
	//在app打开指定页面
	bnative.openPage = function( url, front ) {
		//front = front || BASE_URL;
		if (env.pt == "adr") {
			window.location.href = "uniteqqreader://webpage/" + url;
			//androidScheme.open("uniteqqreader://webpage/" +url);
		} else if (env.pt == "ios") {
			iOSScheme.open(iOSScheme.getUrlScheme(url));
		} else {
			console.log("请在移动设备打开~");
		}
	}
	//下载app
	bnative.downLoad = function( channelId ) {
		//front = front || BASE_URL;
		if (env.pt == "adr") {
			window.location.href = androidScheme.getandroidDownloadUrlV2(channelId);
		} else if (env.pt == "ios") {
			window.location.href = iOSScheme.APPSTORE;
		} else {
			console.log("请在移动设备打开~");
		}
	}
	//去书籍详情页
	bnative.toBookDetail = function(bid, front) {
		front = front || BASE_URL;
		if (env.pt == "adr") {
			//androidScheme.open("uniteqqreader://nativepage/book/detail?bid="+bid);
			window.location.href = "uniteqqreader://nativepage/book/detail?bid="+bid;
		} else if (env.pt == "ios") {
			iOSScheme.open(iOSScheme.getUrlScheme("uniteqqreader://nativepage/book/detail?bid="+bid));
			//window.location.href = "uniteqqreader://nativepage/book/detail?bid="+bid;
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
				window.location.href = "uniteqqreader://nativepage/client/readepage?bid="+bid;
			});
		} else if (env.pt == "ios") {
			requirejs([ front + "/native/iosscheme.js" ], function() {
				window.location.href = "uniteqqreader://nativepage/client/readepage?bid="+bid;
			});
		} else {
			console.log("请在移动设备打开~");
		}
	}
	return bnative;

})( env,iOSScheme,androidScheme );