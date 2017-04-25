var sns = (function(env){
	
	//设置分享内容
	sns.share = function(shareinfo, front) {
		front = front || BASE_URL;
		if (env.vw == "wx") {
			requirejs([ front + "/sns/wxshare.js" ], function(wx) {
				try {
					WX.share(shareinfo);
				} catch (e) {
				}
			});
		} else if (env.vw == "qq") {
			requirejs([ "http://pub.idqqimg.com/qqmobile/qqapi.js?_bid=152" ],
					function(mqq) {
						try {
							mqq.data.setShareInfo({
								"image_url" : shareinfo.cover,
								"share_url" : shareinfo.url,
								"title" : shareinfo.title,
								"desc" : shareinfo.desc
							});
						} catch (e) {
						}
					});
		} else if (env.vw == "wb") {
			console.log("share at weibo");
		}
	}
	//检查app是否安装
	sns.open = function(callback, front) {
		front = front || BASE_URL;
		if (env.vw == "wx") {
			requirejs([ front + "/sns/wxshare.js" ], function(wx) {
				// 微信
				wx.checkDownloadApp(function(hasDownloadApp, verison) {
					callback(hasDownloadApp, env.pt);
				});
			});
		} else if (env.vw == "qq") {
			requirejs([ "http://pub.idqqimg.com/qqmobile/qqapi.js?_bid=152" ],
					function(mqq) {
						var url;
						if (env.pt == "ios") {
							url = 'qqreader';
						} else {
							url = 'com.qq.reader';
						}
						mqq.app.isAppInstalled(url, function(hasDownloadApp) {
							callback(hasDownloadApp, env.pt);
						});
					});
		} else if (env.vw == "wb") {
			callback(-1, env.pt);
		}else{
			callback(-2, env.pt);
		}
	}
	return sns;

})(env);