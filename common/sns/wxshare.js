!function(a, b) {
	var d = b(this[a] = this[a] || {});
	"function" == typeof define && (define.amd || define.cmd) ? define(d)
			: "object" == typeof module && (module.exports = d)
}('wx', function(a) {
	var WX = {
		getParam : function(name, value) {
			var re = new RegExp('(?:\\?|#|&)' + name + '=([^&#?]*)(?:$|&|#)',
					'i');
			var m = re.exec(value || window.location.href);
			return m ? m[1] : '';
		},
		// 转整形
		pit : function(str, deft) {
			var value = deft;
			try {
				value = parseInt(str, 10);
			} catch (e) {
			}
			if (value != value) {
				value = deft;
			}
			return value;
		},
		cutstr : function(str, len) {
			if (str.length <= len)
				return str;
			else {
				return str.substr(0, len) + "...";
			}
		}
	};
	window.WX = WX;
	WX.share = function(shareinfo) {
		var sh_by = WX.getParam("resh_by", "");
		var shareData = {
			"img" : shareinfo.cover,
			"url" : shareinfo.url,
			"title" : shareinfo.title,
			"desc" : shareinfo.desc
		};

		if (typeof WeixinJSBridge == "object"
				&& typeof WeixinJSBridge.invoke == "function") {
			onBridgeReady();
		} else {
			if (document.addEventListener) {
				document.addEventListener("WeixinJSBridgeReady", onBridgeReady,
						false);
			} else if (document.attachEvent) {
				document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
				document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
			}
		}

		function onBridgeReady() {

			WeixinJSBridge.on('menu:share:appmessage', function(argv) {
				WeixinJSBridge.invoke('sendAppMessage', {
					"img_url" : shareData.img,
					"img_width" : "70",
					"img_height" : "100",
					"link" : shareData.url,
					"desc" : shareData.desc,
					"title" : shareData.title
				}, function(res) {
				});
			});

			// 分享到朋友圈
			WeixinJSBridge.on('menu:share:timeline', function(argv) {
				WeixinJSBridge.invoke('shareTimeline', {
					"img_url" : shareData.img,
					"img_width" : "70",
					"img_height" : "100",
					"link" : shareData.url,
					"desc" : "",
					"title" : shareData.desc
				}, function(res) {

				});
			});

			// 分享到微博
			WeixinJSBridge.on('menu:share:weibo', function(argv) {
				WeixinJSBridge.invoke('shareWeibo', {
					"content" : shareData.desc,
					"url" : shareData.url
				}, function(res) {
				});
			});
		}
		;

		return {
			set : function(obj) {
				if (!obj)
					return;
				shareData.title = obj.title || shareData.title;
				shareData.url = obj.url || shareData.url;
				shareData.img = obj.img || shareData.img;
				shareData.desc = WX.cutstr(obj.desc || shareData.desc, 40);
			}
		};
	};

	WX.checkDownloadApp = function(callback) {
		if (typeof WeixinJSBridge == "object"
				&& typeof WeixinJSBridge.invoke == "function") {
			onBridgeReady();
		} else {
			if (document.addEventListener) {
				document.addEventListener("WeixinJSBridgeReady", onBridgeReady,
						false);
			} else if (document.attachEvent) {
				document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
				document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
			}
		}

		function onBridgeReady() {
			WeixinJSBridge.invoke('getInstallState', {
				'packageName' : 'com.qq.reader',
				'packageUrl' : 'qqreader://'
			}, function(e) {
				var msg = e.err_msg; // android5.8版本号82
				if (msg.indexOf("get_install_state:yes") > -1) {
					callback(true, msg.substring(22, msg.length));
				} else {
					callback(false);
				}
			});
		}
	}
	return WX;
});