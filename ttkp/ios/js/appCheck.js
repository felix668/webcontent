var appCheck={};
appCheck.isInstall=false;
appCheck.IOS= /iPhone|iPad|iTouch|iPod/.test(navigator.userAgent);
appCheck.Android = /Android/i.test(navigator.userAgent);
appCheck.event = document.createEvent('HTMLEvents');

appCheck.event.initEvent("isInstall", true, true);

appCheck.qqReader = function(){
var value = "";
 if(appCheck.IOS)
 value = "qqreader://";
 if(appCheck.Android)
 value = "com.qq.reader";
 mqq.app.isAppInstalled(value, function(result){
     appCheck.isInstall = result||appCheck.isInstall;
	 if(appCheck.isInstall)
	 document.dispatchEvent(appCheck.event);
 });
 appCheck.wxInstall();
};

appCheck.wxInstall = function() {	
	 if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        onBridgeReady();
    } else {
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
            document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
        }
    }
		
function onBridgeReady() {
            WeixinJSBridge.invoke('getInstallState', {
                'packageName': "com.qq.reader",
                'packageUrl': "qqreader://"
            }, function (e) {
                var msg = e.err_msg;
                if (msg.indexOf("get_install_state:yes") > -1) {
				document.dispatchEvent(appCheck.event);
                }
            });
};
};

