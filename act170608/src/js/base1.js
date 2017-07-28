//adr Jsbridge
var JsBridge = (function () {
    function j(b, c) {
        b = String(b).split(".");
        c = String(c).split(".");
        try {
            for (var a = 0, d = Math.max(b.length, c.length); a < d; a++) {
                var e = isFinite(b[a]) && Number(b[a]) || 0, f = isFinite(c[a]) && Number(c[a]) || 0;
                if (e < f)return-1; else if (e > f)return 1
            }
        } catch (k) {
            return-1
        }
        return 0
    }

    function p(b, c, a) {
        return a ? function () {
            var d = [].slice.call(arguments, 0);
            q(b, c, d)
        } : function () {
            var d = [].slice.call(arguments, 0);
            v(b, c, d)
        }
    }

    /**
     * [g description]
     * @param  {object} b [description]
     * @param  {string} c [description]
     */
    function g(b, c) {
        c = c || 1;
        if (j(h, c) < 0) {
            //console.info("version not match, apis ignored");
        }
        else for (var a in b) {
            var d =
                b[a];
            if (!(!d || !d.length || !(d.constructor === Array || Object.prototype.toString.call(o) === "[object Array]"))) {
                var e = window[a];
                if (e) {
                    if (typeof e == "object" && e.getClass) {
                        m[a] = e;
                        window[a] = {}
                    }
                } else if (r)window[a] = {}; else continue;
                var f = m[a];
                e = window[a];
                for (var k = 0, w = d.length; k < w; k++) {
                    var i = d[k];
                    if (!e[i])if (f) {
                        if (f[i])e[i] = p(a, i, false)
                    } else e[i] = p(a, i, true)
                }
            }
        }
    }

    function q(b, c, a) {
        if (b && c) {
            var d = a.length && a[a.length - 1];
            if (d && d.call)a.pop(); else d = null;
            var e = x();
            n[String(e)] = d;
            b = "jsbridge://" + encodeURIComponent(b) +
                "/" + encodeURIComponent(c) + "/" + e;
            c = 0;
            for (d = a.length; c < d; c++)b += "/" + encodeURIComponent(String(a[c]));
            a = document.createElement("iframe");
            a.style.cssText = "display:none;width:0px;height:0px;";
            document.body.appendChild(a);
            a.onload = function () {
                s(e, {r: -201, result: "error"});
                //console.error("call jsbridge error")
            };
            a.id = "jsbridge_" + e;
            a.src = b
        }
    }

    function v(b, c, a) {
        if (b && c) {
            var d = a.length && a[a.length - 1];
            if (d && d.call)a.pop(); else d = null;
            var e;
            try {
                var f = m[b];
                e = f[c].apply(f, a)
            } catch (k) {
                e = "error"
            }
            d && setTimeout(function () {
                    d(e)
                },
                0)
        }
    }

    function s(b, c) {
        b = String(b);
        c = c || {r: -200};
        var a = n[b];
        a && setTimeout(function () {
            a(c.result)
        }, 0);
        delete n[b];
        var d = document.getElementById("jsbridge_" + b);
        d && document.body.removeChild(d)
    }

    var 
        l = navigator.userAgent, 
        h = function (b) {
            return b && b[1] || 0
        }(l.match(/V1_AND_SQ_([\d\.]+)/)), 
        r = h && (j(h, "4.2.2") >= 0 || /_NZ\b/.test(l)), 
        t = {publicAccount: ["close", "getJson", "getLocation", "hideLoading", "openInExternalBrowser", "showLoading", "viewAccount"]}, 
        y = {
            publicAccount: [
                "getMemberCount", "getNetworkState", "getValue", "open",
                "openEmoji", "openUrl", "setRightButton", "setValue", "shareMessage", "showDialog"
            ], 
            qqZoneAppList: [
                "getCurrentVersion", "getSdPath", "getWebDisplay", "goUrl", "openMsgCenter", "showDialog", "setAllowCallBackEvent"
            ], 
            q_download: [
                "doDownloadAction", "getQueryDownloadAction", "registerDownloadCallBackListener", "cancelDownload", "cancelNotification", "doGCDownloadAction"
            ], 
            qzone_http: ["httpRequest"], 
            qzone_imageCache: ["downloadImage", "getImageRootPath", "imageIsExist", "sdIsMounted", "updateImage", "clearImage"], 
            qzone_app: ["getAllDownAppInfo", "getAppInfo", "getAppInfoBatch", "startSystemApp", "uninstallApp"]
        }, 
        u = {
            coupon: ["addCoupon", "addFavourBusiness", "gotoCoupon", "gotoCouponHome", "isCouponValid", "isFavourBusiness", "isFavourCoupon", "removeFavourBusiness"]
        }, 
        m = {}, 
        n = {}, 
        x = function () {
            var b = 1;
            return function () {
                return b++
            }
        }();
    g({QQApi: ["isAppInstalled", "isAppInstalledBatch", "startAppWithPkgName", "checkAppInstalled", "checkAppInstalledBatch", "getOpenidBatch", "startAppWithPkgNameAndOpenId"]});
    g({QQApi: ["lauchApp"]}, "4.5");
    if (r)if (/\bPA\b/.test(l)) {
        g(t);
        g(y, "4.5");
        g(u, "4.5")
    } else {
        if (/\bQR\b/.test(l)) {
            g(u, "4.5");
            if (j(h, "4.5") >= 0 && j(h, "5.0") < 0)window.publicAccount = {openUrl: function (b) {
                location.href = b
            }}
        }
    } else g(t, "4.2");
    
    return {
        callMethod: function (b, c) {
            q(b, c, [].slice.call(arguments, 2))
        }, 
        callback: s, 
        restoreApis: g, 
        compareVersion: function (b) {
            return j(h, b)
        }
    }
})();
// ios charm
(function() {
    var C = Charm = window.C = window.Charm = {};
    C.hasTouch = 'ontouchstart' in window;
    C.callback = new Array();
    

    //URL dispatch
    function Router(){
        this.routes = {};

        function getParamsFromHash(hashValue){
            var params = {};
            var i = hashValue.indexOf("?");
            if(i > 0){
                var ps = hashValue.substring(i+1).split("&");
                for(var i=0; i<ps.length; i++) { if(ps[i].indexOf("=") > 0){ var p = ps[i].split("="); params[p[0]] = p[1]; } }
            }
            return params;
        }
        function getPathFromHash(hashValue){
            var i = hashValue.indexOf("?");
            if(i > 0) return hashValue.substring(1, i); else return hashValue;
        }

        this.add = function(path, handler){
            this.routes[path] = handler;
        };
        this.dispatch = function(hashValue){
            var path = getPathFromHash(hashValue);
            if(path in this.routes) this.routes[path](getParamsFromHash(hashValue));
            else console.log('[Router]dispatch failed: ' + path);
        };
    }

    C.Router = new Router();
    if("onhashchange" in window){
        window.onhashchange = function(){ console.log('hashchange: ' + location.hash); C.Router.dispatch(location.hash); };
    }
    else{
        //var lastHash = location.hash;
        //TODO
    }


    //屏幕旋转事件管理
    function OrientationListener(){
      this.regFuncList = {};
      this.regFuncParam = {};
      
      this.regist = function(id, func, param){
          this.regFuncList[id] = func;
          this.regFuncParam[id] = param;
      };
      
      this.onorientationchange = function(orientation){
          for(id in this.regFuncList){
              this.regFuncList[id](this.regFuncParam[id]);
          }
      };
    }
    C.orientationListener = new OrientationListener();
    window.onorientationchange = function() {
      C.orientationListener.onorientationchange();
    };


    //page管理，转场控制
    function PageManager(){
        this.currentPage = null;
        this.pages = {};
        this.load = function(id){};
        this.goback = function(id){};
    }
    C.pageM = new PageManager();

    function Page(){
    };
    Page.prototype = (function(){
        function init(){}
        //定义page如何进入
        function enter(){}
        //定义page如何离开
        function leave(){}
        //定义page如何回退到上一page
        function back(){}
        function hasPrev(){}
        function loading(){}
        function loadData(){}
        function render(){}

        return {
          id: '',
          title: '',
          dom: null,
          prev: '', //前一页面id
          tmplId: '', //模版id
          init: init,
          enter: enter,
          back: back
        };
    })();
    
})();
//---------------------
// JSBridge.js
//---------------------
//Counts the number of objects communicated to the Objective-C code. 
//It is used to index data in the JSBridge_objArray.
var JSBridge_objCount = 0;

//Keeps the objects that should be communicated to the Objective-C code.
var JSBridge_objArray = new Array();


/*
* Receives as input an image object and returns its data encoded in a base64
* string.
* 
* This piece of code was based on Matthew Crumley's post at
* http://stackoverflow.com/questions/934012/get-image-data-in-javascript.
*/
function getBase64Image(img) {
 // Create an empty canvas element
 var canvas = document.createElement("canvas");

 var newImg = new Image();
 newImg.src = img.src;
 canvas.width = newImg.width;
 canvas.height = newImg.height;

 // Copy the image contents to the canvas
 var ctx = canvas.getContext("2d");
 ctx.drawImage(newImg, 0, 0);

 // Get the data-URL formatted image
 var dataURL = canvas.toDataURL("image/png");

 return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

/*
Builds an empty instance of a JSBridge object. 
*/
function JSBridgeObj() {
 this.objectJson = "";
 this.addObject = JSBridgeObj_AddObject;
 this.sendBridgeObject = JSBridgeObj_SendObject;
}

//add by seven
//for callback
function JSBridgeObj2() {
   this.objectJson = "";
   this.addObject = JSBridgeObj_AddObject;
   this.sendBridgeObject2 = JSBridgeObj_SendObject2;
  }
/*
This mnethod receives as input a javascript object, and returns 
a string with the json representation for the object. The return string is similar to:

"<objectId>" : { "value": "<object_value>", "type": "<object_type>" }
*/
function JSBridgeObj_AddObjectAuxiliar(id, obj) {
 var result = "";
 if (typeof (obj) != "undefined") {
     if (isObjAnArray(obj)) {
         var objStr;
         var length = obj.length;

         objStr = "{";
         for (var i = 0; i < length; i++) {
             if (objStr != "{") {
                 objStr += ", ";
             }
             objStr += JSBridgeObj_AddObjectAuxiliar(("obj" + i), obj[i]);
         }

         objStr += "}";

         result = "\"" + id + "\": { \"value\":" + objStr
                 + ", \"type\": \"array\"}";
     } else {
         var objStr;
         var objType;
         if (typeof (obj) == "object" && obj.nodeName == "IMG") {
             objStr = getBase64Image(obj);
             objType = "image";
         } else {
             objStr = obj;
             objType = typeof (obj);
         }

         result = "\"" + id + "\": { \"value\":" + "\"" + objStr
                 + "\", \"type\": \"" + objType + "\"}";
     }
 }
 return result;
}

/*
The addObject method implementation for the JSBridge object.
*/
function JSBridgeObj_AddObject(id, obj) {
 var result = JSBridgeObj_AddObjectAuxiliar(id, obj);
 if (result != "") {
     if (this.objectJson != "") {
         this.objectJson += ", ";
     }
     this.objectJson += result;
 }
}

/*
This method sends the object to the Objective-C code. Basically, 
it tries to load a special URL, which passes the object id.

2016/09/12:
由于IOS10仅支持<iframe src="http/https"></iframe>
iframe元素中源地址是http/https的, 所以先前的形如 JSBridge://ReadNotificationWithId=1 在IOS10中失效
统一改成形如http://qrjsbridge/ReadNotificationWithId=1的
*/
function JSBridgeObj_SendObject() {
    JSBridge_objArray[JSBridge_objCount] = this.objectJson;
    url = "JSBridge://ReadNotificationWithId="
        + JSBridge_objCount;

//ios10 6.1版本热补丁修复
    var iosversion=common.param('iosversion');
    if( !common.nl(iosversion) && iosversion.indexOf("10")>=0){
        url = "https://qrjsbridge/ReadNotificationWithId="
            + JSBridge_objCount;
    }

    loadURL(url);
// window.location.href = "JSBridge://ReadNotificationWithId="
//         + JSBridge_objCount;
    JSBridge_objCount++;
}

//add by seven
//for callback
function JSBridgeObj_SendObject2(callback) {
   JSBridge_objArray[JSBridge_objCount] = this.objectJson;
   callback = typeof callback == "function" ? callback : function(){};
   C.callback[JSBridge_objCount] = callback;
   url = "https://qrjsbridge/ReadNotificationWithId="
      + JSBridge_objCount;
   loadURL(url);
  // window.location.href = "JSBridge://ReadNotificationWithId="
//           + JSBridge_objCount;
   JSBridge_objCount++;
  }

function loadURL(url) 
{
var iFrame;
iFrame = document.createElement("iFrame");
iFrame.setAttribute("src", url);
iFrame.setAttribute("style", "display:none;");
iFrame.setAttribute("frameborder", "0");

document.body.appendChild(iFrame);
// 发起请求后这个iFrame就没用了，把它从dom上删除
iFrame.parentNode.removeChild(iFrame);
iFrame = null;
}

/*
This method is invoked by the Objective-C code. It retrieves the json string representation
of a JSBridge object given its id.
*/
function JSBridge_getJsonStringForObjectWithId(objId) {
 var jsonStr = JSBridge_objArray[objId];
 JSBridge_objArray[objId] = null;
 return "{" + jsonStr + "}";
}

/*
Checks if an object is an array.

This piece of code was based on a code rertrieved from
http://www.planetpdf.com/developer/article.asp?ContentID=testing_for_object_types_in_ja.
*/
function isObjAnArray(obj) {
 if (typeof (obj) == 'object') {
     var criterion = obj.constructor.toString().match(/array/i);
     return (criterion != null);
 }
 return false;
}

(function(C) {
C.callCocoa = function(params){
    if(C.hasTouch){
        var obj = new JSBridgeObj();
        for (var k in params) obj.addObject(k, params[k]);
        obj.sendBridgeObject();
    }
};
})(Charm);

//add by seven
//for callback
(function(C) {
  C.callCocoa2 = function(params, callback){
      if(C.hasTouch){
          var obj = new JSBridgeObj2();
          for (var k in params) obj.addObject(k, params[k]);
          obj.sendBridgeObject2(callback);
      }
  };
  })(Charm);

(function(C) {
function Slider(){
    this.regData = {};
    
    /**
     * 注册页面元素到滑动组件。
     * 
     * @param elementId 页面元素id
     * @param pageTotal 元素总页数
     * @param portraitPixels 竖屏一次移动的像素数
     * @param landscapePixels 横屏一次移动的像素数
     * @param duration 一次移动的持续时间ms
     * @param callback 一次移动后的回调函数，会传入三个参数（元素id，总页数，当前页数） 
     * @param slideActivePixels 滑动翻页触发的像素数
     * @param bufferEffect 是否开启边际缓冲效果(默认开启)
     * @param donotlandscapeMove 元素总页数(是否横屏滚动)
     */
    this.regist = function(elementId, pageTotal, portraitPixels, landscapePixels, duration, callback, slideActivePixels, bufferEffect, donotlandscapeMove){
        this.regData[elementId] = {};
        this.regData[elementId].pageTotal = pageTotal;
        this.regData[elementId].donotlandscapeMove = donotlandscapeMove || false;
        this.regData[elementId].page = 1; //当前页码
        this.regData[elementId].portraitPixels = portraitPixels;
        this.regData[elementId].landscapePixels = landscapePixels;
        this.regData[elementId].pixels = portraitPixels; //当前屏的滑动像素
        this.regData[elementId].duration = duration || 1000;
        this.regData[elementId].callback = callback || function(){};
        this.regData[elementId].slideActivePixels = slideActivePixels || portraitPixels/15;
        this.regData[elementId].bufferEffect = bufferEffect != undefined ? bufferEffect : true;
        this.onorientationchange({'manager': this, 'elementId': elementId});
        C.orientationListener.regist(elementId, this.onorientationchange, {'manager': this, 'elementId': elementId});
        $('#'+elementId).css('-webkit-transform', $.trnOpen+'0px, 0px'+$.trnClose);
    };
    
    //横竖屏切换自动调整滑动距离
    this.onorientationchange = function (param) {
        var manager = common.param['manager'];
        var elementId = common.param['elementId'];
        var orientation = C.sessionStorage.get('clientorientation');
        if (orientation == null) orientation = window.orientation;
        if (Math.abs(orientation) === 90) {
            manager.regData[elementId].pixels = manager.regData[elementId].landscapePixels;
            if (manager.regData[elementId].donotlandscapeMove) {
                manager.regData[elementId].callback(elementId, 1, 1);
                $('#' + elementId).css('-webkit-transition-duration', '0ms');
                $('#' + elementId).css('-webkit-transform', $.trnOpen + '0px, 0px' + $.trnClose);
            }
        } else {
            manager.regData[elementId].pixels = manager.regData[elementId].portraitPixels;
            manager.regData[elementId].callback(elementId, manager.regData[elementId].pageTotal, manager.regData[elementId].page);
        }
    };

    this.disableTouch = function(elementId){
        $('body').bind('touchstart touchmove', false);
    };
    this.enableTouch = function(elementId){
        $('body').unbind('touchstart touchmove', false);
    };

    this.slideLeft = function (elementId, data, changePixels) {
        var orientation = C.sessionStorage.get('clientorientation');
        if (orientation == null) orientation = window.orientation;
        if (!(data.donotlandscapeMove && Math.abs(orientation) === 90)) {
            var slideActive = changePixels == undefined ? true : Math.abs(changePixels) > data.slideActivePixels;
            this.disableTouch();
            setTimeout(this.enableTouch, data.duration * 0.8);
            $('#' + elementId).css('-webkit-transition-duration', data.duration + 'ms');
            if (data.page < data.pageTotal && slideActive) {
                var offset = data.page * -1;
                data.page += 1;
                $('#' + elementId).css('-webkit-transform', $.trnOpen + (data.pixels * offset) + 'px, 0px' + $.trnClose);
            } else {
                $('#' + elementId).css('-webkit-transform', $.trnOpen + (data.pixels * (data.page - 1) * -1) + 'px, 0px' + $.trnClose);
            }
            data.callback(elementId, data.pageTotal, data.page);
        }
    };

    this.slideRight = function (elementId, data, changePixels) {
        if (!(data.donotlandscapeMove && Math.abs(orientation) === 90)) {
            var slideActive = changePixels == undefined ? true : Math.abs(changePixels) > data.slideActivePixels;
            this.disableTouch();
            setTimeout(this.enableTouch, data.duration * 0.8);
            $('#' + elementId).css('-webkit-transition-duration', data.duration + 'ms');
            if (data.page > 1 && slideActive) {
                data.page -= 1;
                var offset = (data.page - 1) * -1;
                $('#' + elementId).css('-webkit-transform', $.trnOpen + (data.pixels * offset) + 'px, 0px' + $.trnClose);
            }
            else {
                $('#' + elementId).css('-webkit-transform', $.trnOpen + (data.pixels * (data.page - 1) * -1) + 'px, 0px' + $.trnClose);
            }
            data.callback(elementId, data.pageTotal, data.page);
        }
    };

    this.slideMove = function (elementId, data, xDelta) {
        if (!(data.donotlandscapeMove && Math.abs(orientation) === 90)) {
            var movePixel = xDelta;
            //边际缓冲
            if ((data.page == 1 && xDelta) > 0 || (data.page == data.pageTotal && xDelta < 0)) {
                if (data.bufferEffect)
                    if (Math.abs(xDelta) < 90) movePixel = xDelta;
                    else if (xDelta > 0) movePixel = Math.log(xDelta) * 20;
                    else movePixel = -1 * Math.log(Math.abs(xDelta)) * 20;
                else movePixel = 0;
            }
            var offset = (data.page - 1) * -1;
            $('#' + elementId).css('-webkit-transition-duration', '0ms');
            $('#' + elementId).css('-webkit-transform', $.trnOpen + (data.pixels * offset + movePixel) + 'px, 0px' + $.trnClose);
        }
    };

    this.registSwipe = function(elementId){
        $('#'+elementId).swipe({data: {manager: this},
              swipeLeft: function(data, changePixels) {
                  data.manager.slideLeft(elementId, data.manager.regData[elementId], changePixels);
              },
              swipeRight: function(data, changePixels) {
                  data.manager.slideRight(elementId, data.manager.regData[elementId], changePixels);
              },
              swipeMove: function(data, xDelta) {
                  data.manager.slideMove(elementId, data.manager.regData[elementId], xDelta);
              },
        });
        $('#'+elementId).bind('touchmove', false);
    };

    this.registClick = function(elementId, leftId, rightId){
        if(C.hasTouch){
            $('#'+leftId).tap(function(el, e){
                e.data.manager.slideLeft(elementId, e.data.manager.regData[elementId]);
            }, {manager: this});
            $('#'+rightId).tap(function(el, e){
                e.data.manager.slideRight(elementId, e.data.manager.regData[elementId]);
            }, {manager: this});
        } else{
            $('#'+leftId).click((function(e){
                this.slideLeft(elementId, this.regData[elementId]);
            }).bind(this));
            $('#'+rightId).click((function(e){
                this.slideRight(elementId, this.regData[elementId]);
            }).bind(this));
        }
    };
}
C.Slider = new Slider();
})(Charm);
(function(C) {
    //Cookie Util
    var Cookie = C.Cookie = {};
    Cookie.set = function(name, value, days){
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else
            var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    };
    Cookie.get = function(name){
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for ( var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
    Cookie.del = function(name){ Cookie.set(name, "", -1); };


    C.sessionStorage = {
        set: function(k, v){ sessionStorage.setItem(k, v); },
        get: function(k){ return sessionStorage.getItem(k); },
        has: function(k){ return sessionStorage.getItem(k) != null; },
        del: function(k){ sessionStorage.removeItem(k); }
    };
    C.localStorage = {
        set: function(k, v){ localStorage.setItem(k, v); },
        get: function(k){ return localStorage.getItem(k); },
        has: function(k){ return localStorage.getItem(k) != null; },
        del: function(k){ localStorage.removeItem(k); }
    };

    C.unlimitedScroll = function(callback, data, threshold){
        if(!threshold) threshold = 0;
        window.onscroll = function(){
            if(document.body.scrollHeight - document.body.scrollTop - threshold <= document.documentElement.clientHeight)
                callback(data);
        };
    };
})(Charm);
var common = (function(){
  var _CONF = {
    TEST_HOST_ios : 'ptsolomo.reader.qq.com', // ios测试环境
    TEST_HOST_adr :'solomotest4.3g.qq.com', //adr测试环境
    TEST_SERVER: 'https://ptwapmusic3.reader.qq.com/activity/', // 测试环境后台
    TEST_FRONT_ios : 'https://ptsolomo.reader.qq.com/book_res/event/', // 测试环境前台地址ios
    TEST_FRONT_adr : 'http://solomotest4.3g.qq.com/book_res/event/', // 测试环境前台地址adr
    FORMAL_HOST_adr : 'iyuedu.qq.com', // 正式环境
    FORMAL_HOST_ios : 'yuedu.reader.qq.com', // 正式环境
    FORMAL_SERVER: 'https://event.reader.qq.com/activity/', // 正式环境后台
    FORMAL_FRONT_ios : 'https://yuedu.reader.qq.com/event/', // 正式环境前台地址ios
    FORMAL_FRONT_adr : 'http://iyuedu.qq.com/event/', // 正式环境前台地址adr
  };
  function sharefront(){
    if (window.location.hostname == _CONF.FORMAL_HOST_adr || window.location.hostname ==_CONF.FORMAL_HOST_ios){
      return _CONF.FORMAL_FRONT_ios;
    }else{
      return _CONF.TEST_FRONT_ios;
    }
  }
  function server() {
    if (window.location.hostname === _CONF.FORMAL_HOST_adr || window.location.hostname===_CONF.FORMAL_HOST_ios){
      return _CONF.FORMAL_SERVER;
    }else{
      return _CONF.TEST_SERVER;
    };
  }
  function front(){
    if (window.location.hostname == _CONF.FORMAL_HOST_adr){
      return _CONF.FORMAL_FRONT_adr;
    }else if(window.location.hostname == _CONF.FORMAL_HOST_ios){
      return _CONF.FORMAL_FRONT_ios;
    }else if(window.location.hostname==_CONF.TEST_HOST_adr){
      return _CONF.TEST_FRONT_adr;
    }else if(window.location.hostname==_CONF.TEST_HOST_ios){
      return _CONF.TEST_FRONT_ios;
    }
  }
  // 构造当前页面请求参数表
  var _PARAMS = {};// url参数map
  var pageName = '';// 页面
  (function() {
    var i = location.href.indexOf('?', 0);
    var url;
    if (i > 0) {
      var str1 = location.href.substring(i + 1, location.href.length
          - location.hash.length);
      if (str1.length > 0)
        _PARAMS = obj('{"' + str1.replace(/&/g, '","').replace(/=/g, '":"')
            + '"}');
      url = location.href.substring(0, i + 1);
    } else {
      url = location.href;
    }
    var d = url.split('/');
    pageName = d[d.length - 1].replace(/.html[\?,#,&]*$/, '');
  })();

  // JSON字符串转对象
  function obj(str) {
    return JSON.parse(str);
  }

  // 当前毫秒时间末四位字符串
  function ttag() {
    return (new Date().getTime()) % 10000;
  }

  // 获取当前页面请求参数值
  function param(name) {
    return _PARAMS[name];
  }
  // 设置当前页面的请求参数值
  function setParam(name, value) {
    _PARAMS[name] = value;
  }
  // 获取cookie
  function ckg(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ')
        c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0)
        return c.substring(nameEQ.length, c.length);
    }
    return null;
  };
  // 获取页面名称
  function getPageName() {
    return pageName;
  }
  //对象为空判断
  function nl(obj) {
    return obj==undefined || obj==null || obj=='';
  }
  //对象转JSON字符串
  function json(ob) {
    return JSON.stringify(ob);
  }
  // 异步请求，回调函数的入参是响应文本。
    function reqa(url, callback, errcallback) {
        url += url.indexOf('?') != -1 ? ('&tt=' + ttag()) : ('?tt=' + ttag());

        var xhr = new XMLHttpRequest();
        xhr.timeout = 5000;
        xhr.ontimeout = function(){
            console.log('timeout');
        };
        xhr.onerror = function(xhr,type){
            console.log(xhr, type);
            if (!nl(errcallback)) {
                callback(errcallback);
            }
        };
        xhr.onreadystatechange = function(){
            if( xhr.readyState===4 ){
                if( xhr.status===200 ){
                    var data = xhr.responseText;
                    callback(data);
                };
            };
        };
        xhr.open( 'GET',url );
        xhr.send( null );  
    }
  //ios用
  function getTransparentParam(){
    var seturlparam = function(s,a) {
      var b = param(a);
      if (b != "undefined" && typeof b != 'undefined') {
        if(s == ""){
          s = s + a + "=" + b;
        }else{
          s = s + "&" + a + "=" + b;
        }     
      }
      return s;
    };
    var str = "rtt=0";
      str = seturlparam(str, "sid");
      str = seturlparam(str, "usid");
      str = seturlparam(str, "gsid");
      str = seturlparam(str, "c_platform");
      str = seturlparam(str, "version");
      str = seturlparam(str, "lm_f");
      str = seturlparam(str, "tf");
      str = seturlparam(str, "origin");
      str = seturlparam(str, "skey");
      str = seturlparam(str, "uin");
      str = seturlparam(str, "qimei");
      str = seturlparam(str, "loginType"); //微信登录用
      str = seturlparam(str, "uid");
      str = seturlparam(str, "access_token");
      str = seturlparam(str, "act_f");
    return str;
  }
  //ios
  function getParam(url, param) {
      var i = url.indexOf('?', 0);
      var params;
      if (i > 0) {
          var str1 = url.substring(i + 1, url.length);
          if (str1.length > 0) {
              params = obj('{"' + str1.replace(/&/g, '","').replace(/=/g, '":"') + '"}');
          }
      }
      return params[param];
  }
  return {
    server: server,
    param: param,
    nl: nl,
    reqa: reqa,
    setParam: setParam,
    getPageName: getPageName,
    ckg: ckg,
    obj: obj,
    json: json,
    sharefront:sharefront,
    getTransparentParam:getTransparentParam,
    getParam:getParam,
    pageName:pageName,
    front:front
  }
})();
//本模块依赖于jsbridge.js
//判断平台
var UA = navigator.userAgent;
window.pt = /iPad|iPhone|iPod/.test(UA) && !/Android/.test(UA) ? "ios": /Android/.test(UA) ? "adr" : "ubook";
if(window.pt=="adr"){
    var Local = (function( JsBridge,common){
        var server = common.server;
        var param = common.param;
        var nl = common.nl;
        var getPageName = common.getPageName;
        var setParam = common.setParam;
        var ckg = common.ckg;
        var obj = common.obj;
        var json = common.json;
        var reqa = common.reqa;
        if (window.init){
            document.addEventListener('DOMContentLoaded', init, false); 
            document.ondragstart = function() {
                return false;
            };
        }  
        var Local = {};
        Local.callbacks = [];
        Local.callbackindex = 0;
        //android js安全策略，进行注册
        Local.resApis = function () {
            JsBridge.restoreApis({
                    'JSContent': ['setWebTitlebarIcon','setIsBackToPage'],
                    'JSAddToShelf': ['add', 'addBooks', 'addById'],
                    'JSToast': ['showToast'],
                    'JSSns': ['sharePage', 'shareBook','shareLuckyMoney', 'cacheImage', 'shareStyleImage', 'closePage'],
                    'mclient': ['req', 'post'],
                    'readerlogin': ['login'] 
                },
                '5.0.1');
        }; 
        Local.init=function(){
            Local.resApis();
            Local.setBackBtn();
        };     
        Local.login = function (reload_url) {
            if (!reload_url) {
                reload_url = window.location.href;
            }
            readerlogin.login(reload_url);
        };
        //页面回退
        Local.setBackBtn = function () {
            try {
                JSContent.setIsBackToPage(true);
            } catch (e) {
            }
        };
        //toast
        Local.showToast = function (msg) {
            try {
                JSToast.showToast(msg);
            } catch (e) {
                console.log(msg);
            }
        };
        //关闭当前页面
        Local.closePage = function () {
            try{
                JSSns.closePage();
            }catch (e){
                Local.showToast("closePage fail");
            }
        };
        /**
         * 默认的网络错误提示信息
         */
        Local.defaultCallBackFailed = function (callbackSections, faildCallback, code) {
            if (callbackSections && callbackSections.length && callbackSections.length > 0) {
                for (var section in callbackSections) {
                    if (!nl(code)) {
                        if (code == '1001') {
                            ih(callbackSections[section], '<div class="load_fail">网络不好，请检查网络设置<a href="javascript: window.location.reload();">重新加载</a></div>');
                        } else if (code == '1002') {
                            ih(callbackSections[section], '<div class="load_fail">访问超时<a href="javascript: window.location.reload();">重新加载</a></div>');
                        } else {
                            ih(callbackSections[section], '<div class="load_fail">服务器不给力呀<a href="javascript: window.location.reload();">重新加载</a></div>');
                        }
                    } else {
                        ih(callbackSections[section], '<div class="load_fail">服务器不给力呀<a href="javascript: window.location.reload();">重新加载</a></div>');
                    }
                }
            }
            if (faildCallback) {
                faildCallback();
            }
        };
         /**
         * 根据获取到的数据渲染页面
         * @param txt
         * @param faildCallback
         * @param callbackSections
         * @param callback
         * @param donotParse
         */
        function doPrintSection(txt, faildCallback, callbackSections, callback, donotParse) {
            if (nl(txt) && faildCallback) {
                Local.defaultCallBackFailed(callbackSections, faildCallback);
            } else if (!nl(txt)) {
                var tmp;
                if (donotParse == 'true') {
                    // 如果走客户端直接获取到的就是json对象
                    tmp = txt;
                } else {
                    // 如果走的是pc，还需要对json进行format
                    try {
                        tmp = obj(txt);
                    } catch (e) {
                        try {
                            mclient.saveErrInfo(txt);
                        } catch (e) {
                        }
                    }
                }
                //检查返回码和失败回调函数，有问题的话就进行失败渲染处理
                if (tmp && nl(tmp.httpcode)) {
                    callback(tmp);
                    // ZBook.afterLoad(callbackSections);
                } else if (tmp) {
                    if (tmp.httpcode != "200") {
                        Local.defaultCallBackFailed(callbackSections, faildCallback, tmp.httpcode);
                    } else {
                        try {
                            callback(tmp);
                            // ZBook.afterLoad(callbackSections);
                        } catch (e) {
                            Local.defaultCallBackFailed(callbackSections, faildCallback);
                        }
                    }
                } else {
                    Local.defaultCallBackFailed(callbackSections, faildCallback);
                }
            }
        }
        Local.reqByClient = function (url, callback, forceReload) {
            Local.callbackindex++;
            Local.callbacks[Local.callbackindex] = callback;
            try {
                mclient.req(url, 'Local.callbacks[\'' + Local.callbackindex + '\']', forceReload);
            } catch (e) {
            }
        };
                /**
         * 获取额外的链接参数
         * @returns {*}
         * @param detailobj
         * @param replace_lmf
         * @param replaceorigin
         * @param addlmfh
         */
        Local.getExParamStr = function (detailobj, replace_lmf, replaceorigin, addlmfh) {
            var url = detailobj.url;
            var origin = detailobj.origin;
            var alg = detailobj.alg;
            var datatype = detailobj.datatype;
            var fromBid = detailobj.fromBid;

            var params = "";
            var lm_f;
            if (replace_lmf == 1) {
                lm_f = getPageName();//lm_f
            } else {
                lm_f = nl(param('lm_f')) ? getPageName() : param('lm_f'); //lm_f
            }
            params += '&lm_f=' + lm_f;
            var lmfh = param('lmh_f');
            if (nl(lmfh)) {
                lmfh = lm_f;
            } else {
                // 历史最长的只能增加到5级，再高不予记录了
                var reg = new RegExp("_", "g");
                if ((!lmfh.match(reg) || lmfh.match(reg).length < 5) && addlmfh) {
                    lmfh += ("_" + lm_f);
                }
            }
            params += '&lmh_f=' + lmfh;//访问历史
            params += nl(alg) ? '' : '&alg=' + alg;
            params += nl(datatype) ? '' : '&data_type=' + datatype;
            params += nl(fromBid) ? '' : '&fromBid=' + fromBid;

            if (!nl(param("adId"))) {
                params += '&adId=' + param("adId");
            }

            if (!nl(param("posId"))) {
                params += '&posId=' + param("posId");
            }

            if ((url && (url.indexOf("tid") < 0 || url.indexOf('eventname=gotoUrl') >= 0)) && !nl(param("tid"))) {
                params += '&tid=' + param("tid");
            }

            if ((url && url.indexOf('origin=') < 0) || (url && url.indexOf('bookDetail') >= 0)) {
                if (!nl(param("origin")) && !replaceorigin) {
                    params += '&origin=' + param("origin"); //统计用的区分号
                } else if (!nl(origin)) {
                    params += '&origin=' + origin; //统计用的区分号
                }
            }
            return params;
        };
        function getparamfcookieandurl(params, key) {
            //尝试从cookie中获取
            if (!nl(ckg(key))) {
                params += '&' + key + '=' + ckg(key);
            } else {
                if (!nl(param(key))) {
                    params += '&' + key + '=' + param(key);
                }
            }
            return params;
        }
            /**
         * 获取本地需要的client参数
         * @returns {*}
         */
        Local.getExparamWithoutClient = function (url) {
            var params = '';
            if (!nl(param("tf"))) {
                params += '&tf=' + param("tf"); //是否走pc测试条件
            } else {
                // 检查UA，如果是chrome浏览器，默认使用pc测试相同的配置，方便测试
                if (navigator.userAgent.indexOf('Windows') >= 0 || navigator.userAgent.indexOf('Mac OS X') >= 0) {
                    params += '&tf=1'; //pc测试条件tf=1， 2为客户端
                    setParam("tf", 1);
                } else {
                    params += '&tf=2'; //pc测试条件tf=1， 2为客户端
                    setParam('tf', 2);
                }
            }
            if (!nl(param("sid"))) {
                params += '&sid=' + param("sid");
            }

            // loginType尝试从cookie中获取
            if (!nl(ckg("loginType"))) {
                params += '&loginType=' + ckg("loginType");
            } else {
                if (!nl(param("loginType"))) {
                    params += '&loginType=' + param("loginType");
                }
            }
            // uid尝试从cookie中获取
            if (!nl(ckg("uid"))) {
                params += '&uid=' + ckg("uid");
            } else {
                if (!nl(param("uid"))) {
                    params += '&uid=' + param("uid");
                }
            }
            //需要预先从cookie中获取
            params = getparamfcookieandurl(params, "usid");
            params = getparamfcookieandurl(params, "timi");
            params = getparamfcookieandurl(params, "skey");
            if (!nl(param("c_platform"))) {
                params += '&c_platform=' + param("c_platform");
            }
            if (!nl(param("version"))) {
                params += '&version=' + param("version");
            }
            if (!nl(param("qimei"))) {
                params += '&qimei=' + param("qimei");
            }

            params += nl(param('share')) ? '' : '&share=' + param('share');

            if (!nl(param("channel"))) {
                params += '&channel=' + param("channel"); //渠道号
            }

            params += '&fp=1';//这个参数用于判断是否是页面间跳转
            //活动统计专用
            if (!nl(param("act_f"))) {
                params += '&act_f=' + param("act_f");
            }
            return params;
        };
        // 整理发后台请求的参数
        Local.getTransparentParam = function (url) {
            if (url.indexOf('?') < 0) {
                url += '?';
            }
            var detailobj = {};
            detailobj.url = url;
            detailobj.origin = param('origin');
            detailobj.alg =param('alg');
            detailobj.datatype =param('datatype');
            detailobj.fromBid = param('fromBid');
            detailobj.adId = param('adId');
            detailobj.tid = param('tid');
            detailobj.posId = param('posId');
            url += Local.getExParamStr(detailobj, 0, 0, 0);
            url += Local.getExparamWithoutClient();
            url = url.replace('?&', '?');
            url = url.replace('&&', '&');
            return url;
        }
        // 发送请求
        Local.reqaObj = function (url, callback, callbackSections, faildCallback, forceReload) {
            url = Local.getTransparentParam(url);
            // 默认不强制刷新数据
            if (!forceReload) {
                forceReload = 0;
            }
            // 加载默认loading提示
            //Local.dodefaultLoading(callbackSections);
            // tf == 1 的时候走pc测试
            if (param("tf") && param("tf") == 1) {
                //  pc上浏览测试
                reqa(url, function (txt) {
                    doPrintSection(txt, faildCallback, callbackSections, callback, 'false');
                });
            } else {
                //  调用客户端的代码就是用下面的函数
                Local.reqByClient(url, function (txt) {
                    doPrintSection(txt, faildCallback, callbackSections, callback, 'true');
                }, forceReload);
            }
        };
        Local.forceLog = function(act_f, act_b) {
            var act_from = act_f || -110;
            var act_by = act_b || pageName;
            Local.reqaObj( server() + "sum?act_f=" + act_from + "&act_b=" + act_by,
                function(data) {
                    //alert(JSON.stringify(data));
                }, [], function() {
                }, 1);
        }
        //打开页面
        Local.openInside= function (url) {
            if (url.indexOf('?') < 0) {
                url += '?';
            }
            var detailobj = {};
            detailobj.url = url;
            detailobj.origin = param('origin');
            detailobj.alg = param('alg');
            detailobj.datatype = param('datatype');
            detailobj.fromBid = param('fromBid');
            detailobj.adId = param('adId');
            detailobj.tid = param('tid');
            detailobj.posId = param('posId');
            url += Local.getExParamStr(detailobj, 0, 0, 0);
            //排除跳转指定act_f带来的污染
            if(url.match(/act_f=[0-9]+/g)){
              url = url + Local.getExparamWithoutClient().replace(/&act_f=[0-9]+/g,"");
            }else{
              url = url + Local.getExparamWithoutClient();
            }      
            url = url.replace('?&', '?');          
            window.location.href = url;
        };
        //设置右上角的分享图标。
        Local.setIconForShareing = function(url,cover,title,desc){
            // 点击右上角的分享图标后触发的回调函数。
            Local._share = function(){
                Local.shareTopic(
                    url,
                    cover,
                    title,
                    desc
                )
            }
            if( window.JSContent ){
                JSContent.setWebTitlebarIcon(JSON.stringify([{
                    title: 'shareTopic',
                    callback: 'Local._share'
                }]));
            }else{
                console.warn('JSContent is not defined.');
            }
        }
        //点击分享页面
        Local.shareTopic = function (url, cover, title, desc) {
            if (!url) {
                Local.showToast("请设置分享页面链接");
                return;
            }
            JSSns.sharePage(url, cover, title, desc,1);
            Local.setIconForShareing(url,cover,title,desc);
        };     
        //单本书加入书架
        Local.addToShelf=function(book,needtoast){
            JSAddToShelf.addById(book.bid,needtoast);
        }
        //批量添加到本地书架  
        Local.addToShelfBooks = function (books) {
            for (var i = 0; i < books.length; i++) {
                var bookinfo = books[i];
                if (i == books.length - 1) {
                    Local.addToShelf(bookinfo, 1); //批量加入时 只在最后一本书加入成功之后再toast 不需要每本书都提示toast
                } else {
                    Local.addToShelf(bookinfo, 0);
                }
            }
        };
        //去书籍详情页
        Local.goBookDetail=function(bid){
            window.location.href = "uniteqqreader://nativepage/book/detail?bid=" + bid;
        };
        //去书籍阅读页
        Local.goRead=function(bid,cid){
            if(cid===undefined){
                cid=1;
            }
            window.location.href = "uniteqqreader://nativepage/client/readepage?bid=" + bid +"&cid="+cid;
        };
        //跳转充值页面
        Local.doCharge=function(){
            window.location.href="uniteqqreader://nativepage/coin/recharge?value=1";
        }
        //跳转包月专区
        Local.goMontharea=function(){
            window.location.href="uniteqqreader://nativepage/discover/vipzone";
        }
        //跳转书架
        Local.openBookShelf=function(){
            window.location.href="uniteqqreader://nativepage/client/bookshelf";
        }
        Local.init();
        return Local;
    })(JsBridge,common);
}else{
    var Local = (function(C,common){
        var server = common.server;
        var nl = common.nl;
        var param = common.param;
        var getTransparentParam = common.getTransparentParam;
        var obj = common.obj;
        var reqa = common.reqa;
        if(window.init){
            document.addEventListener('DOMContentLoaded',init,false);
            document.ondragstart = function() {
                return false;
            };
        }
        var Local = {};
        //登录
        Local.login = function (reload_url, type) {
            if (!reload_url) {
                reload_url = window.location.href;
            }
            C.callCocoa({
                "method": "login",
                "reload_url": reload_url,
                "type": type
            });
        };
        //toast
        Local.showToast = function (msg) {
            C.callCocoa({
                "method": "toastMsg",
                "msg": msg
            });
        };
        Local.closePage = function () {
            C.callCocoa({
                "method": "closePage"
            })
        };
        //请求
        Local.reqaObj = function (url, callback, callbackSections, errcallback) {
            // 需要添加必要的参数
            url += url.indexOf('?') != -1 ? '&' : '?';
            url = url + getTransparentParam();
            reqa(url, function (txt) {
                if (nl(txt)) {
                    callback(null);
                } else {
                    var t = typeof txt;
                    var tmp;
                    if (t == 'string') {
                        txt = txt.replace(/(\0|\b|\n|\f|\r|\t|\v)/g, "").toString();
                        tmp = obj(txt);
                    } else {
                        tmp = txt;
                    }
                    callback(tmp);
                }
            }, errcallback);
        };
        //统计
        Local.forceLog = function(act_f, act_b) {
            var act_from = act_f || -110;
            var act_by = act_b || pageLong;
            Local.reqaObj( server() + "sum?act_f=" + act_from + "&act_b=" + act_by,
                function(data) {
            }, [], function() {
                // Local.showToast("网络不畅，请稍后再试试");
            }, 1);
        }
        //加入书架用到的方法
        Local.getdownload = function (downloadinfo) {
            for (var key in downloadinfo) {
                if (downloadinfo[key]) {
                    return downloadinfo[key];
                }
            }
        };
        //单本书加入书架
        Local.addToShelf = function (bookinfo, needtoast) {
            if(needtoast == undefined)
                needtoast = 1;//1表示弹出 “成功加入书架”的提示
            C.callCocoa({
                "method": "addToShelf",
                "id": bookinfo.bid,
                "title": bookinfo.title,
                "intro": bookinfo.intro || "",
                "author": bookinfo.author,
                "origin": bookinfo.origin || "",
                "finished": bookinfo.finished,
                "downloadURL": bookinfo.downloadURL || "",
                "fileFormat": bookinfo.fileFormat || "",
                "version": bookinfo.version || "",
                "chapterTitle": bookinfo.chapterTitle || "第一章",
                "updatetime": bookinfo.updatetime || 0,
                "type": bookinfo.type || 0,
                "isPreview": bookinfo.isPreview || 0,
                "downloadinfo": Local.getdownload(bookinfo.downloadinfo),
                "needtoast": needtoast
            });
        }
        //批量添加到本地书架   注意：bids需要转为json字符串传入window.JSON.stringify(bids) 对应的方法里面才需要obj(bids)
        Local.addToShelfBooks = function (books) {
            while (books.indexOf("\r\n") > 0) {
                books = books.replace("\r\n", "");
            }
            // var booksinfo = obj(bids);
            var booksinfo = books;
            for (var i = 0; i < booksinfo.length; i++) {
                var bookinfo = booksinfo[i];
                if (i == booksinfo.length - 1)
                    Local.addToShelf(bookinfo,1); //批量加入时 只在最后一本书加入成功之后再toast 不需要每本书都提示toast
                else
                    Local.addToShelf(bookinfo,0);
            }
        };
        //打开页面
        Local.openInside = function (url) {
            url += url.indexOf('?') != -1 ? '&' : '?';
            url = url + getTransparentParam();
            C.callCocoa({
                "method": "open_inside",
                "url": url
            });
        };
        //唤起客户端分享控件
        Local.shareControl = function () {
            C.callCocoa({
                "method": "sharecontrol"
            })
        };
        // 设置右上角的分享图标。
        Local.setIconForShareing = function(url,cover,title,desc){
            //document.addEventListener('ondataavailable', function (shareevent) {
                C.callCocoa({
                    "method": "web_share",
                    "title": title,
                    "intro": desc,
                    "img": cover,
                    "url": url
                });
            //}, false);
            //var shareevent = document.createEvent('HTMLEvents');
            //shareevent.initEvent("ondataavailable", true, true);
            //document.dispatchEvent(shareevent);
        }
        //点击分享当前页面：
        Local.shareTopic = function(url,cover,title,desc){
           Local.setIconForShareing(url,cover,title,desc);
           Local.shareControl();
        }
        //去书籍详情页
        Local.goBookDetail=function(bid){
            window.location.href = "uniteqqreader://nativepage/book/detail?bid=" + bid;
        };
        //去书籍阅读页
        Local.goRead=function(bid){
            window.location.href = "uniteqqreader://nativepage/client/readepage?bid=" + bid;
        };
        //跳转充值页面
        Local.doCharge=function(){
            window.location.href="uniteqqreader://nativepage/coin/recharge?value=1";
        }
        //跳转包月专区
        Local.goMontharea=function(){
            window.location.href="uniteqqreader://nativepage/discover/vipzone";
        }
        //跳转书架
        Local.openBookShelf=function(){
            window.location.href="uniteqqreader://nativepage/client/bookshelf";
        }
        return Local;
    })(C,common);
}