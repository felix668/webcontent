// import env from './env.js';

var bnative = (function(env,iOSScheme,androidScheme){
	var bnative = {};
	var BASE_URL = '';
	
	//打开app
	bnative.openApp = function(front) {
		front = front || BASE_URL;
		if (env.pt == "adr") {
			if(env.wv >= 656){
				WX.launchApplication("uniteqqreader://nativepage/infostream/list");
			}else{
				window.location.href = "uniteqqreader://nativepage/infostream/list";
			}
		} else if (env.pt == "ios") {
			if(env.wv >= 656){
				WX.launchApplication("uniteqqreader://nativepage/infostream/list");
			}else{
				window.location = iOSScheme.simpleScheme();
			}
		} else {
			console.log("请在移动设备打开~");
		}
	}
	//在app打开指定页面
	bnative.openPage = function( url, front ) {
		console.log('[weixin version] '+env.wv);
		console.log('[env] '+JSON.stringify(env));
		//front = front || BASE_URL;
		if (env.pt == "adr") {
			// if(env.wv > 656){
			// 	console.log('adr>656')
			// 	WX.launchApplication("uniteqqreader://webpage/" + url);
			// }else{
			// 	console.log('adt<=656')
				window.location.href = "uniteqqreader://webpage/" + url;
				//androidScheme.open("uniteqqreader://webpage/" +url);
			// }
		} else if (env.pt == "ios") {
			if(env.wv >= 656){
				WX.launchApplication("uniteqqreader://webpage/" + url);
			}else{
				iOSScheme.open( iOSScheme.getUrlScheme(url) );
			}
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
			if(env.wv >= 656){
				WX.launchApplication("uniteqqreader://nativepage/book/detail?bid="+bid);
			}else{
				//androidScheme.open("uniteqqreader://nativepage/book/detail?bid="+bid);
				window.location.href = "uniteqqreader://nativepage/book/detail?bid="+bid;
			}
		} else if (env.pt == "ios") {
			if(env.wv >= 656){
				WX.launchApplication("uniteqqreader://nativepage/book/detail?bid="+bid);
			}else{
				iOSScheme.open(iOSScheme.getUrlScheme("uniteqqreader://nativepage/book/detail?bid="+bid));
				//window.location.href = "uniteqqreader://nativepage/book/detail?bid="+bid;
			}
		} else {
			console.log("请在移动设备打开~");
		}
	}
	//去阅读页
	bnative.toReadBook = function(bid, front) {
		// front = front || BASE_URL;
		if (env.pt == "adr") {
			if(env.wv >= 656){
				WX.launchApplication("uniteqqreader://nativepage/client/readepage?bid="+bid);
			}else{
				window.location.href = "uniteqqreader://nativepage/client/readepage?bid="+bid;
			}
		} else if (env.pt == "ios") {
			if(env.wv >= 656){
				WX.launchApplication("uniteqqreader://nativepage/client/readepage?bid="+bid);
			}else{
				window.location.href = "uniteqqreader://nativepage/client/readepage?bid="+bid;
			}
		} else {
			console.log("请在移动设备打开~");
		}
	}
	return bnative;

})( env,iOSScheme,androidScheme );