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
    var iosversion=param('iosversion');
    if( !nl(iosversion) && iosversion.indexOf("10")>=0){
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
//	         + JSBridge_objCount;
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
        var manager = param['manager'];
        var elementId = param['elementId'];
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
