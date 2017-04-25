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
WX.share = (function() {
	var sh_by = WX.getParam("resh_by", "");
	var shareData = {
        "img": "http://ireader.qq.com/bookevent/dec12/images/sharePic.jpg",
        "url": "http://ireader.qq.com/bookevent/dec12/index.html?tf=1&sh_f=wx&sh_by="+sh_by||"UNKNOWN",
        "title": "大神喊你来偷书",
        "desc": "大神多，就是任性！和小伙伴们一起偷书，立抢iPhone6！"
    };
	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "img_url": shareData.img,
                "img_width": "70",
                "img_height": "100",
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
        
        // 分享到QQ
        WeixinJSBridge.on('menu:share:qq', function (argv) {
        	alert("share qq"+JSON.stringify(shareData));
        	WeixinJSBridge.invoke('shareQQ', {
        		"img_url": shareData.img,
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
})();
