var WX = {
	getParam : function(name, value) {
		var re = new RegExp('(?:\\?|#|&)' + name + '=([^&#?]*)(?:$|&|#)', 'i');
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
		"url": shareinfo.url,
        "img": shareinfo.cover,
        "title": shareinfo.title,
        "desc":  shareinfo.intro
    };
	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
        	 img_url: "http://ossweb-img.qq.com/images/tps/act/a20131021mystery/tpswx.jpg",
             img_width: "120",
             img_height: "120",
             "link": shareData.url,
             "desc": shareData.desc,
             "title": shareData.title
            }, function (res) {
            });
        });

        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": shareData.img,
                "img_width": "70",
                "img_height": "100",
                "link": shareData.url,
                "desc": shareData.desc,
                "title": shareData.title
            }, function (res) {

            });
        });

        // 分享到微博
        WeixinJSBridge.on('menu:share:weibo', function (argv) {
            WeixinJSBridge.invoke('shareWeibo', {
                "content": shareData.desc,
                "url": shareData.url
            }, function (res) {
            });
        });
	});
	
	return {set:function(obj){
		if(!obj) return;
		shareData.title = obj.title||shareData.title;
		shareData.url = obj.url||shareData.url;
		shareData.img = obj.img||shareData.img;
		shareData.desc = WX.cutstr(obj.desc||shareData.desc,40);
	}};
};
