var sns = (function(env,WX,mqq){
	
	//设置分享内容
	sns.share = function(shareinfo, front) {
		front = front || BASE_URL;
		if (env.vw == "wx") {
			try {
				WX.share(shareinfo);
			} catch (e) {
			}
		} else if (env.vw == "qq") {
			try {
				mqq.data.setShareInfo({
					"image_url" : shareinfo.cover,
					"share_url" : shareinfo.url,
					"title" : shareinfo.title,
					"desc" : shareinfo.desc
				});
			} catch (e) {
			}
		} else if (env.vw == "wb") {
			console.log("share at weibo");
		}
	}
	//检查app是否安装
	sns.open = function(callback, front) {
		front = front || BASE_URL;
		if (env.vw == "wx") {
			// 微信
			WX.checkDownloadApp(function(hasDownloadApp, verison) {
				callback(hasDownloadApp, env.pt);
			});
		} else if (env.vw == "qq") {
			var url;
			if (env.pt == "ios") {
				url = 'qqreader';
			} else {
				url = 'com.qq.reader';
			}
			mqq.app.isAppInstalled(url, function(hasDownloadApp) {
				callback(hasDownloadApp, env.pt);
			});
		} else if (env.vw == "wb") {
			callback(-1, env.pt);
		}else{
			callback(-2, env.pt);
		}
	}
	return sns;

})( env,WX,mqq );