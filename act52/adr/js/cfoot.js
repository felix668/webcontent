//【本函数库唯一需要手工配置的地方】
var _CONF={
    LOCAL_HOST:		'http://solomotest4.3g.qq.com/book_res/event/act4/', //本地开发访问地址
    DEVELOP_SERVER:	'http://test3.wapmusic.qq.com/andmain/', 	//开发环境后台服务地址

	TEST_HOST:		'solomotest4.3g.qq.com',				//测试环境访问地址
	TEST_LOCAL_HOST:'http://solomotest4.3g.qq.com/book_res/event/act4/', //测试环境访问地址
	TEST_SERVER:	'http://test3.wapmusic.qq.com/andmain/',	//测试环境后台服务地址
	
	FORMAL_HOST:	'ireader.qq.com',					//正式环境访问地址
	FORMAL_LOCAL_HOST:'http://ireader.qq.com/event/act4/', //正式环境页面地址
	FORMAL_SERVER:	'http://event.book.qq.com/andmain/'		//正式环境后台服务地址
};

//============ 页面请求参数 ============
//构造当前页面请求参数表
var _PARAMS = {};
var pageName = '';

(function () {
  var i = location.href.indexOf('?', 0);
  var url;
  if (i > 0) {
      var str1 = location.href.substring(i + 1, location.href.length - location.hash.length);
      if (str1.length > 0) _PARAMS = obj('{"' + str1.replace(/&/g, '","').replace(/=/g, '":"') + '"}');
      url = location.href.substring(0, i + 1);
  } else {
      url = location.href;
  }
  var d = url.split('/');
  pageName = d[d.length - 1].replace(/.html[\?,#,&]*$/, '');
})();

//获取页面名称
function getPageName() {
  return pageName;
}

//获取当前页面请求参数值
function param(name) {
  return _PARAMS[name];
}
//设置当前页面的请求参数值
function setParam(name, value) {
  _PARAMS[name] = value;
}

//============ 后台服务地址 ============
//配置后台服务地址
var _SERVER = _CONF.DEVELOP_SERVER; //开发环境
if (window.location.hostname == _CONF.FORMAL_HOST) _SERVER = _CONF.FORMAL_SERVER; //正式环境
else if (window.location.hostname == _CONF.TEST_HOST) _SERVER = _CONF.TEST_SERVER; //测试环境
//============ 前台本地页面地址 ============

//配置前台页面地址
var _HOST = _CONF.LOCAL_HOST; //开发环境
if(window.location.hostname==_CONF.FORMAL_HOST) _HOST=_CONF.FORMAL_LOCAL_HOST; //正式环境前台
else if(window.location.hostname==_CONF.TEST_HOST) _HOST=_CONF.TEST_LOCAL_HOST; //测试环境前台

//获取后台服务地址
function server() {
	//后边把这块想着优化一下吧，总手工这么设置，发布的话，很容易出现把测试环境发布到正式环境去的问题
	return _SERVER;
}

//获取本地页面地址
function host() {
//	return _CONF.LOCAL_HOST;
	return _HOST;
//	return _HOST;
}

//============ 全局回调 ============
//全局入口 
if (window.init) document.addEventListener('DOMContentLoaded', ZBook.init(), false);
//方向改变通知
//注意：在某些安卓系统上，在orientChange函数中，至少要delay一秒后，才能正确地拿到屏幕高宽值。
if (window.orientChange) window.onorientationchange = orientChange;


//============ 创建对象 ============
//创建body子结点
function create(etype, eid) {
    var obj = document.createElement(etype);
    if (!nl(eid)) obj.id = eid;
    document.getElementsByTagName('body')[0].appendChild(obj);
    return obj;
}

//创建某节点之子节点
function createChild(parentid, etype, eid) {
    var obj = document.createElement(etype);
    if (!nl(eid)) obj.id = eid;
    if (typeof parentid == 'string') id(parentid).appendChild(obj);
    else parentid.appendChild(obj);
    return obj;
}

//获取对象
function id(eid) {
    return document.getElementById(eid);
}

//============ 对象属性 ============
//获取对象属性
function ga(eid, attribute) {
    if (typeof eid == 'string') return id(eid)[attribute];
    else return eid[attribute];
}
//设置对象属性
function sa(eid, attribute, value) {
    if (typeof eid == 'string') id(eid)[attribute] = value;
    else eid[attribute] = value;
}
//获取CSS属性
function gs(eid, property) {
    if (typeof eid == 'string') return getComputedStyle(id(eid), null).getPropertyValue(property);
    else return getComputedStyle(eid, null).getPropertyValue(property);
}
//设置CSS属性
function ss(eid, property, value) {
    if (typeof eid == 'string') id(eid).style[property] = value;
    else eid.style[property] = value;
}
//获取整型CSS属性
function gis(eid, property) {
    return parseInt(gs(eid, property));
}
//设置整型CSS属性（像素）
function sis(eid, property, value) {
    ss(eid, property, value + 'px');
}
//设置CSS类名
function scls(eid, classname) {
    if (typeof eid == 'string') id(eid).className = classname;
    else eid.className = classname;
}
//设置CSS文本
function sstxt(eid, classtxt) {
    if (typeof eid == 'string') id(eid).style.cssText = classtxt;
    else eid.style.cssText = classtxt;
}
//设置A标签href的url
function ah(eid, url) {
    sa(eid, 'href', url);
}
//设置A标签href的函数名
function ahf(eid, fname) {
    sa(eid, 'href', 'javascript:' + fname + "('" + eid + "');");
}
//设置A标签href的完整函数调用
function ahfc(eid, fcall) {
    sa(eid, 'href', 'javascript:' + fcall + ";");
}
//获取自定义属性
function ud(eid, name) {
    if (typeof eid == 'string') return id(eid).getAttribute('data-' + name);
    else return eid.getAttribute('data-' + name);
}
//对象为空判断
function nl(obj) {
    return obj == undefined || obj == null || obj == '';
}
//对象为空返回默认值
function nlg(obj, value) {
    return nl(obj) ? value : obj;
}

//本地存储对于客户端的view对象是禁用的
//============ 本地存储 ============
//1、只支持字符串型的key/value的存取。
//2、整型value在存放时会自动造型成字符串型，取出时仍是字符串型。
//3、对象类型value要用json()序列化为字符串进行存放，取出时用obj()对字符串进行反序列化。
//--------------------------------
//保存
function lss(key, value) {
    localStorage.setItem(key, value);
}
//获取
function lsg(key) {
    return localStorage.getItem(key);  //在客户端发现这一行不可用
}
//删除
function lsr(key) {
    localStorage.removeItem(key);
}
//清空
function lsc() {
    localStorage.clear();
}
//测长
function lsl() {
    return localStorage.length;
}
//根据索引获取key
function lsk(index) {
    return localStorage.key(index);
}

//============ Session存储 ============
//1、只支持字符串型的key/value的存取。
//2、整型value在存放时会自动造型成字符串型，取出时仍是字符串型。
//3、对象类型value要用json()序列化为字符串进行存放，取出时用obj()对字符串进行反序列化。
//--------------------------------
//保存
function nss(key, value) {
    sessionStorage.setItem(key, value);
}
//获取
function nsg(key) {
    return sessionStorage.getItem(key);
}
//删除
function nsr(key) {
    sessionStorage.removeItem(key);
}
//清空
function nsc() {
    sessionStorage.clear();
}
//测长
function nsl() {
    return sessionStorage.length;
}
//根据索引获取key
function nsk(index) {
    return sessionStorage.key(index);
}

//============ Cookie存储 ============
//保存
function cks(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
};

//获取
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

//删除
function ckr(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    document.cookie = name + "=;expires=" + exp.toGMTString();
};

//是否支持Cookie 
function ckok() {
    return navigator.cookieEnabled;
};

//============ 对象移动缩放 ============
//水平移动
function mxt(eid, newx) {
    if (typeof newx == 'string') ss(eid, 'left', newx);
    else sis(eid, 'left', newx);
}
//垂直移动
function myt(eid, newy) {
    if (typeof newy == 'string') ss(eid, 'top', newy);
    else sis(eid, 'top', newy);
}
//水平垂直移动
function mxyt(eid, newx, newy) {
    mxt(eid, newx);
    myt(eid, newy);
}
//居中
function center(eid, parentLeft, parentTop, parentWidth, parentHeight) {
    mxyt(eid, parentLeft + parseInt((parentWidth - wf(eid)) / 2), parentTop + parseInt((parentHeight - hf(eid)) / 2));
}
//宽度改变
function mwt(eid, neww) {
    if (typeof neww == 'string') ss(eid, 'width', neww);
    else sis(eid, 'width', neww);
}
//高度改变
function mht(eid, newh) {
    if (typeof newh == 'string') ss(eid, 'height', newh);
    else sis(eid, 'height', newh);
}
//宽度高度改变
function mwht(eid, neww, newh) {
    mwt(eid, neww);
    mht(eid, newh);
}

//============ 对象位置大小 ============
//获取横坐标
function x(eid) {
    return ga(eid, 'offsetLeft');
}
//获取纵坐标
function y(eid) {
    return ga(eid, 'offsetTop');
}
//获取实际宽度
function wf(eid) {
    return ga(eid, 'offsetWidth');
}
//获取实际高度
function hf(eid) {
    return ga(eid, 'offsetHeight');
}
//获取滚动宽度
function ws(eid) {
    return ga(eid, 'scrollWidth');
}
//获取滚动高度
function hs(eid) {
    return ga(eid, 'scrollHeight');
}
function wc(eid) {
    return ga(eid, 'clientWidth');
}
function hc(eid) {
    return ga(eid, 'clientHeight');
}
//获取CSS宽度
function w(eid) {
    return gis(eid, 'width');
}
//获取CSS高度
function h(eid) {
    return gis(eid, 'height');
}

//============ 事件 ============
//绑定事件
function bind(eid, event, callback) {
    if (typeof eid == 'string') id(eid).addEventListener(event, callback, false);
    else eid.addEventListener(event, callback, false);
}
//获取触摸点横坐标
function ex(event) {
    return event.touches[0].pageX;
}
//获取触摸点纵坐标
function ey(event) {
    return event.touches[0].pageY;
}
//获取触摸对象
function eo(event) {
    return event.target.nodeType != 3 ? event.target : event.target.parentNode;
}
//获取触摸对象的ID
function eoid(event) {
    return eo(event).id;
}
//获取触摸对象的自定义属性值
function eoud(event, udname) {
    return ud(eo(event), udname);
}
//判断触摸对象的ID是否匹配给定值
function eoidm(event, meid) {
    return eoid(event) == meid;
}
//获取触摸对象的标签类型
function eot(event) {
    return eo(event).tagName;
}
//判断触摸对象的标签类型是否匹配给定值
function eotm(event, mtag) {
    return eot(event) == mtag;
}
//获取事件类型
function et(event) {
    return event.type;
}
//判断事件类型是否匹配给定值
function etm(event, mevent) {
    return et(event) == mevent;
}
//禁用事件的默认行为
function epd(event) {
    event.preventDefault();
}
//阻止事件的冒泡
function esp(event) {
    event.stopPropagation();
}

//============ 颜色可见性 ============
//设置可见
function vv(eid) {
    ss(eid, 'visibility', 'visible');
}
//设置不可见
function vh(eid) {
    ss(eid, 'visibility', 'hidden');
}

//设置区域显示
function dv(eid) {
    ss(eid, 'display', 'block');
}
//设置区域隐藏
function dh(eid) {
    ss(eid, 'display', 'none');
}

//设置遮光度
function shade(eid, value) {
    ss(eid, 'opacity', value);
}
//设置背景颜色
function cbg(eid, color) {
    ss(eid, 'backgroundColor', color);
}
//设置前景颜色
function cc(eid, color) {
    ss(eid, 'color', color);
}

//============ 内部文档 ============
//设置内部文档
function ih(eid, html) {
    sa(eid, 'innerHTML', html);
}
//追加内部文档
function iha(eid, html) {
    sa(eid, 'innerHTML', ga(eid, 'innerHTML') + html);
}
//在头部追加内部文档
function ihh(eid, html) {
    sa(eid, 'innerHTML', html + ga(eid, 'innerHTML'));
}
//获取内部文档
function ihg(eid) {
    return ga(eid, 'innerHTML');
}

//============ 文字排版 ============
//获取字体大小
function fgs(eid) {
    return gis(eid, 'font-size');
}
//设置字体大小
function fss(eid, size) {
    sis(eid, 'fontSize', size);
}
//获取行高
function fglh(eid) {
    return gis(eid, 'line-height');
}
//设置行高
function fslh(eid, lineHeight) {
    sis(eid, 'lineHeight', lineHeight);
}

//============ HTTP请求 ============
//同步请求，返回响应文本。
function reqs(url) {
    url += url.indexOf('?') != -1 ? ('&tt=' + ttag()) : ('?tt=' + ttag());
    var areq = new XMLHttpRequest();
    areq.open('GET', url, false);
    areq.send();
    return areq.responseText;
}

//异步请求，回调函数的入参是响应文本。
function reqa(url, callback, errcallback) {
    url += url.indexOf('?') != -1 ? ('&tt=' + ttag()) : ('?tt=' + ttag());
    var areq = new XMLHttpRequest();
    areq.onload = function () {
        callback(areq.responseText);
    };
    areq.onerror = function () {
        if (!nl(errcallback)) {
            callback(errcallback);
        }
    };
    areq.open('GET', url, true);
    areq.send();
}

//============ 定时任务 ============
//延迟指定的毫秒数后，执行回调函数。
function delay(millis, callback) {
    setTimeout(callback, millis);
}

//每间隔执行的毫秒数，执行回调函数。回调函数要求有布尔返回值，返回true时终止后续执行。
function every(millis, callback) {
    var tid = 0;
    tid = setInterval(function () {
        if (callback()) clearInterval(tid);
    }, millis);
}

//============ 网页文档位置大小 ============
//文档可见部分左上角横坐标
function px() {
    return scrollX;
}
//文档可见部分左上角纵坐标
function py() {
    return scrollY;
}
//文档滚动宽度
function psw() {
    return document.body.scrollWidth;
}
//文档滚动高度
function psh() {
    return document.body.scrollHeight;
}
//文档原始宽度
function pw() {
    return window.innerWidth;
}
//文档原始高度
function ph() {
    return window.innerHeight;
}
//屏幕方向：1-竖屏，0-横屏。
function po() {
    return window.innerWidth < window.innerHeight ? 1 : 0;
}

//============ 字符串处理 ============
//格式化字符串
//例如：format('This is {0} and {1} and {2}.','a','b','c');
function format(str) {
    if (arguments.length == 0) return '';
    var param = Array.prototype.slice.call(arguments, 1);
    return str.replace(/\{[\w]*\}/g, function (match) {
        return param[match.replace(/^\{|\}$/g, '')]; // || "\'\'";
    });
}
//删除字符串两端空白
function trim(str) {
    if (nl(str)) return null;
    var start = -1;
    for (var i = 0; i < str.length; i++) {
        if (/\S/.test(str.charAt(i))) {
            start = i;
            break;
        }
    }
    if (start == -1) return '';
    var end = start;
    for (var j = str.length - 1; j > start; j--) {
        if (/\S/.test(str.charAt(j))) {
            end = j;
            break;
        }
    }
    return str.substring(start, end + 1);
}
//从字符串左边取指定长度的子串
function left(str, count) {
    return str.substring(0, count);
}

//============ 时间 ============
//当前毫秒时间
function time() {
    return new Date().getTime();
}
//当前毫秒时间末四位字符串
function ttag() {
    return (time() + '').substring(9);
}

//============ 过渡与变换 ============
//过渡
//例如：trn('txt1','left 100ms ease-out');
function trn(eid, value) {
    ss(eid, '-webkit-transition', value);
}
//变换
//例如：trf('txt1','translate(10px,20px) scale(0.8) rotate(45deg)');
function trf(eid, value) {
    ss(eid, '-webkit-transform', value);
}
//硬件加速三维移动变换
//注意：xvalue、yvalue、zvalue都是相对移动值，移动后对象的left和top并不会变。
function trft3d(eid, xvalue, yvalue, zvalue) {
    trf(eid, format('translate3d({0}px,{1}px,{2}px)', xvalue, yvalue, zvalue));
}

//============ 类型转换 ============
//字符串转整数
function cint(str) {
    return parseInt(str);
}
//JSON字符串转对象
//json字符串中的key必须用""包围，如：{"qq":83963839, "age":26, "online":0}。
function obj(str) {
    return JSON.parse(str);
}
//对象转JSON字符串
function json(ob) {
    return JSON.stringify(ob);
}

//消息框
function msg(str) {
//    alert(str);
}

//浏览器回退
function back() {
    history.back();
}

//回页面顶端
function rtop() {
    scrollTo(0, 0);
}

//保全字符串（超过最大长度返回null）
function glen(str, maxlen) {
    if (str && str.length <= maxlen) return str; else return null;
}

function hasClass(eid, cls) {
    try {
        return id(eid).className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    } catch (e) {
    }
    return false;
}

function addClass(eid, cls) {
    try {
        if (!this.hasClass(eid, cls)) id(eid).className += " " + cls;
    } catch (e) {
    }
}

function removeClass(eid, cls) {
    try {
        if (hasClass(eid, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            id(eid).className = id(eid).className.replace(reg, '');
        }
    } catch (e) {
    }
}

//build url
function bu(url, params) {
    if (!params) return url;
    var hasParam = url.indexOf("?") >= 0 || url.indexOf("#") >= 0;
    var str = url;
    str += hasParam ? "&" : "?";
    var arr = [];
    for (var key in params) {
        arr.push(key + "=" + encodeURIComponent(params[key]));
    }
    return str + arr.join("&");
}

/**
 * 获取url中的参数
 * @param url
 * @param param
 * @returns {*}
 */
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


function loadTpl(filepath) {
    var tpls = reqs(filepath);
//    if (tpls.indexOf('<!DOCTYPE HTML>') > 0) {
//        tpls = reqs(_CONF.FORMAL_LOCAL_HOST + '/' + _CONF.SERVER_VERSION + '/' + filepath);
//    }
    iha(document.body, tpls);
}
//获取某节点的屏幕居住位置
//_w 对象实际宽度 _h对象实际高度
function getLT(_w, _h) {

    var de = document.documentElement;
    // 获取当前浏览器窗口的宽度和高度
    // 兼容写法，可兼容ie,ff
    var w = self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
    var h = (de && de.clientHeight) || document.body.clientHeight;

    // 获取当前滚动条的位置
    // 兼容写法，可兼容ie,ff
    var st = (de && de.scrollTop) || document.body.scrollTop;
    var topp = 0;
    if (h > _h)
        topp = (st + (h - _h) / 4);
    else
        topp = st;

    var leftp = 0;
    if (w > _w)
        leftp = ((w - _w) / 2);

    // 左侧距，顶部距
    return [leftp, topp];
}
function icss(css) {
    var head = document.getElementsByTagName("HEAD");
    if (!head.length) return false;
    var node = document.createElement("style");
    node.type = 'text/css';
    head[0].appendChild(node);
    if (node.styleSheet) {
        node.styleSheet.cssText = css;
    } else {
        node.appendChild(document.createTextNode(css));
    }
    return true;
}


/**
 * 使用post方式提交数据
 * @param url
 * @param params
 * @param callback
 */
function postdata(url, params, callback) {
    var request = new XMLHttpRequest();
    url += url.indexOf('?') != -1 ? ('&tt=' + ttag()) : ('?tt=' + ttag());
    url = Local.getTransparentParam(url);
    request.open("post", url, true);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                callback(request.responseText);
            } else {
                callback(null);
            }
        }
    };
    request.onerror = function () {
        callback(null);
    }
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(params);
}


//获取某节点，指定class的所有元素
function getElementsByClass(tagname, classname) {
    var classobj = [];
    var index = 0;
    var tags = document.getElementsByTagName(tagname);

    for (var i = 0; i < tags.length; i++) {
        var attr = tags[i].getAttribute("class");
        if (!nl(attr) && attr == classname) {
            classobj[index] = tags[i];
            index++;
        }
    }
    return classobj;
}

/**
 * 处理评论中的html代码
 * @returns {string}
 */
String.prototype.escapeHTML = function () {
    return this.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/'/g, "&#39;");
};

/**
 * 将escape过的HTML再反解回来
 */
String.prototype.unEscapeHTML = function () {
    return this.replace(/&amp;/g, '&').replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<').replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
};
