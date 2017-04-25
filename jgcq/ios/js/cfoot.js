
// 【本函数库唯一需要手工配置的地方】
	var _CONF = {
		TEST_HOST : 'solomotest4.3g.qq.com', // 测试环境访问地址
		TEST_FRONT : 'http://solomotest4.3g.qq.com/book_res/event/', // 测试环境前台地址
		TEST_SERVER : 'http://test3.wapmusic.qq.com/iosmain/', // 测试环境后台服务地址
		TEST_SERVER_ROOT : 'http://test3.wapmusic.qq.com/', // 测试环境后台服务地址

		FORMAL_HOST : 'iyuedu.qq.com', // 正式环境访问地址
		FORMAL_FRONT : 'http://iyuedu.qq.com/event/', // 测试环境前台地址
		FORMAL_SERVER : 'http://event.book.qq.com/iosmain/', // 正式环境后台服务地址
		FORMAL_SERVER_ROOT : 'http://event.book.qq.com/' // 正式环境后台服务地址
	};

var _PREFIX={
		O : 'o',//原图
		B : 'b',//大图
		M : 'm',//中图
		S : 's',//小图
		T4 : 't4'//t1~t9
};

//============ 全局回调 ============
//全局入口
if(window.init) document.addEventListener('DOMContentLoaded',init,false);
//方向改变通知
//注意：在某些安卓系统上，在orientChange函数中，至少要delay一秒后，才能正确地拿到屏幕高宽值。
if(window.orientChange) window.onorientationchange=orientChange;

//============ 页面请求参数 ============
//构造当前页面请求参数表
var _PARAMS = {};
var pageName = '';
var fullPageName = '';// 页面
(function () {
    var i = location.href.indexOf('?', 0);
    var url;
    if (i > 0) {
        var str1 = location.href.substring(i + 1, location.href.length - location.hash.length);
        str1 = str1.replace("&&","&");
        if (str1.length > 0) _PARAMS = obj('{"' + str1.replace(/&/g, '","').replace(/=/g, '":"') + '"}');
        url = location.href.substring(0, i + 1);
    } else {
        url = location.href;
    }
    var d = url.split('/');
    pageName = d[d.length - 1].replace(/.html[\?,#,&]*$/, '');
    fullPageName = (d[d.length - 2] || "top") + "-" + pageName;
})();

//获取当前页面请求参数值
function param(name) {
	return _PARAMS[name];
}
//设置当前页面的请求参数值
function setParam(name,value) {
	_PARAMS[name]=value;
}
//获取固定的透传参数
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
	str = seturlparam(str, "platform");
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
	
	return str;
}

////============ 后台服务地址 ============
////配置后台服务地址
//var _SERVER=_CONF.FORMAL_SERVER; //正式环境
//if(window.location.hostname==_CONF.DEV_HOST_NAME || window.location.hostname==_CONF.TEST_HOST_NAME || window.location.hostname==_CONF.TEST_HOST_NAME2 || param("dotest") == 1) { //开发或测试环境
//    _SERVER=_CONF.TEST_SERVER;
//}
//
////============ 前台页面地址 ============
////配置前台页面地址
//var _HOST=_CONF.FORMAL_HOST; //正式环境前台
//if(window.location.hostname==_CONF.DEV_HOST_NAME) _HOST=_CONF.DEV_HOST; //开发环境
//else if(window.location.hostname==_CONF.TEST_HOST_NAME) _HOST=_CONF.TEST_HOST; //测试环境
//else if(window.location.hostname==_CONF.TEST_HOST_NAME2) _HOST=_CONF.TEST_HOST2;
//////获取后台服务地址
//function server() {
//	return _SERVER;
//}
//function servercommon(){
//    return _SERVER.replace('/v'+_CONF.VERSION,'/common');
//}
////获取本地页面地址
//function host() {
//	return _HOST;
//}
////路径前缀
//function prefix() {
//	if (window.location.hostname == _CONF.FORMAL_HOST)
//		return _CONF.FORMAL_PREFIX;
//	else
//		return _CONF.TEST_PREFIX;
//}

function server() {
	if (window.location.hostname == _CONF.FORMAL_HOST)
		return _CONF.FORMAL_SERVER;
	else
		return _CONF.TEST_SERVER;
}

function serverRoot() {
	if (window.location.hostname == _CONF.FORMAL_HOST)
		return _CONF.FORMAL_SERVER_ROOT;
	else
		return _CONF.TEST_SERVER_ROOT;
}

function prefix() {
	if (window.location.hostname == _CONF.FORMAL_HOST)
		return _CONF.FORMAL_FRONT;
	else
		return _CONF.TEST_FRONT;
}
//获取版本号
function ver() {
	return _CONF.VERSION;
}
function loadTpl(filepath) {
    var tpls = reqs(filepath);
    iha(document.body, tpls);
}
//============ 创建对象 ============
//创建body子结点
function create(etype,eid) {
	var obj=document.createElement(etype);
	if(!nl(eid)) obj.id=eid;
	document.getElementsByTagName('body')[0].appendChild(obj);
	return obj;
}
//创建某节点之子节点
function createChild(parentid,etype,eid) {
	var obj=document.createElement(etype);
	if(!nl(eid)) obj.id=eid;
	if(typeof parentid=='string') id(parentid).appendChild(obj);
	else parentid.appendChild(obj);
	return obj;
}
//获取对象
function id(eid) {
	return document.getElementById(eid);
}

//============ 对象属性 ============
//获取对象属性
function ga(eid,attribute) {
	if(typeof eid=='string') return id(eid)[attribute];
	else return eid[attribute];
}
//设置对象属性
function sa(eid,attribute,value) {
	if(typeof eid=='string') id(eid)[attribute]=value;
	else eid[attribute]=value;
}
//获取CSS属性
function gs(eid,property) {
	if(typeof eid=='string') return getComputedStyle(id(eid), null).getPropertyValue(property);
	else return getComputedStyle(eid, null).getPropertyValue(property);
}
//设置CSS属性
function ss(eid,property,value) {
	if(typeof eid=='string') id(eid).style[property]=value;
	else eid.style[property]=value;
}
//获取整型CSS属性
function gis(eid,property) {
	return parseInt(gs(eid,property));
}
//设置整型CSS属性（像素）
function sis(eid,property,value) {
	ss(eid,property,value+'px');
}
//设置CSS类名
function scls(eid,classname) {
	if(typeof eid=='string') id(eid).className=classname;
	else eid.className=classname;
}
//设置CSS文本
function sstxt(eid,classtxt) {
	if(typeof eid=='string') id(eid).style.cssText=classtxt;
	else eid.style.cssText=classtxt;
}
//设置A标签href的url
function ah(eid,url) {
	sa(eid,'href',url);
}
//设置A标签href的函数名
function ahf(eid,fname) {
	sa(eid,'href','javascript:'+fname+"('"+eid+"');");
}
//设置A标签href的完整函数调用
function ahfc(eid,fcall) {
	sa(eid,'href','javascript:'+fcall+";");
}
//获取自定义属性
function ud(eid,name) {
	if(typeof eid=='string') return id(eid).getAttribute('data-'+name);
	else return eid.getAttribute('data-'+name);
}
//对象为空判断
function nl(obj) {
	return obj==undefined || obj==null || obj=='';
}
//对象为空返回默认值
function nlg(obj,value) {
	return nl(obj)?value:obj;
}

//本地存储对于客户端的view对象是禁用的
//============ 本地存储 ============
//1、只支持字符串型的key/value的存取。
//2、整型value在存放时会自动造型成字符串型，取出时仍是字符串型。
//3、对象类型value要用json()序列化为字符串进行存放，取出时用obj()对字符串进行反序列化。
//--------------------------------
//保存
function lss(key,value) {
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
function nss(key,value) {
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
function cks(name, value, days){
	var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
};

//获取
function ckg(name){
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

//删除
function ckr(name){
	var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    document.cookie= name + "=;expires="+exp.toGMTString();
};

//是否支持Cookie
function ckok(){
	return navigator.cookieEnabled;
};

//============ 对象移动缩放 ============
//水平移动
function mxt(eid,newx) {
	if(typeof newx=='string') ss(eid,'left',newx);
	else sis(eid,'left',newx);
}
//垂直移动
function myt(eid,newy) {
	if(typeof newy=='string') ss(eid,'top',newy);
	else sis(eid,'top',newy);
}
//水平垂直移动
function mxyt(eid,newx,newy) {
	mxt(eid,newx);
	myt(eid,newy);
}
//居中
function center(eid,parentLeft,parentTop,parentWidth,parentHeight) {
	mxyt(eid,parentLeft+parseInt((parentWidth-wf(eid))/2),parentTop+parseInt((parentHeight-hf(eid))/2));
}
//宽度改变
function mwt(eid,neww) {

	if(typeof neww=='string') ss(eid,'width',neww);
	else sis(eid,'width',neww);
}
//高度改变
function mht(eid,newh) {
	if(typeof newh=='string') ss(eid,'height',newh);
	else sis(eid,'height',newh);
}
//宽度高度改变
function mwht(eid,neww,newh) {
	mwt(eid,neww);
	mht(eid,newh);
}

//============ 对象位置大小 ============
//获取横坐标
function x(eid) {
	return ga(eid,'offsetLeft');
}
//获取纵坐标
function y(eid) {
	return ga(eid,'offsetTop');
}
//获取实际宽度
function wf(eid) {
	return ga(eid,'offsetWidth');
}
//获取实际高度
function hf(eid) {
	return ga(eid,'offsetHeight');
}
//获取滚动宽度
function ws(eid) {
	return ga(eid,'scrollWidth');
}
//获取滚动高度
function hs(eid) {
	return ga(eid,'scrollHeight');
}
function wc(eid) {
	return ga(eid,'clientWidth');
}
function hc(eid) {
	return ga(eid,'clientHeight');
}
//获取CSS宽度
function w(eid) {
	return gis(eid,'width');
}
//获取CSS高度
function h(eid) {
	return gis(eid,'height');
}

//============ 事件 ============
//绑定事件
function bind(eid,event,callback) {
	if(typeof eid=='string') id(eid).addEventListener(event,callback,false);
	else eid.addEventListener(event,callback,false);
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
	return event.target.nodeType!=3?event.target:event.target.parentNode;
}
//获取触摸对象的ID
function eoid(event) {
	return eo(event).id;
}
//获取触摸对象的自定义属性值
function eoud(event,udname) {
	return ud(eo(event),udname);
}
//判断触摸对象的ID是否匹配给定值
function eoidm(event,meid) {
	return eoid(event)==meid;
}
//获取触摸对象的标签类型
function eot(event) {
	return eo(event).tagName;
}
//判断触摸对象的标签类型是否匹配给定值
function eotm(event,mtag) {
	return eot(event)==mtag;
}
//获取事件类型
function et(event) {
	return event.type;
}
//判断事件类型是否匹配给定值
function etm(event,mevent) {
	return et(event)==mevent;
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
	ss(eid,'visibility','visible');
}
//设置不可见
function vh(eid) {
	ss(eid,'visibility','hidden');
}

//设置区域显示
function dv(eid) {
	ss(eid,'display','block');
}
//设置区域隐藏
function dh(eid) {
	ss(eid,'display','none');
}

//设置遮光度
function shade(eid,value) {
	ss(eid,'opacity',value);
}
//设置背景颜色
function cbg(eid,color) {
	ss(eid,'backgroundColor',color);
}
//设置前景颜色
function cc(eid,color) {
	ss(eid,'color',color);
}

//============ 内部文档 ============
//设置内部文档
function ih(eid,html) {
	sa(eid,'innerHTML',html);
}
//追加内部文档
function iha(eid,html) {
	sa(eid,'innerHTML',ga(eid,'innerHTML')+html);
}
//获取内部文档
function ihg(eid) {
	return ga(eid,'innerHTML');
}

//============ 文字排版 ============
//获取字体大小
function fgs(eid) {
	return gis(eid,'font-size');
}
//设置字体大小
function fss(eid,size) {
	sis(eid,'fontSize',size);
}
//获取行高
function fglh(eid) {
	return gis(eid,'line-height');
}
//设置行高
function fslh(eid,lineHeight) {
	sis(eid,'lineHeight',lineHeight);
}

//============ HTTP请求 ============
//同步请求，返回响应文本。
function reqs(url) {
	url+=url.indexOf('?')!=-1?('&tt='+ttag()):('?tt='+ttag());
	var areq=new XMLHttpRequest();
	areq.open('GET', url, false);
	areq.send();
	return areq.responseText;
}
//异步请求，回调函数的入参是响应文本。
function reqa(url,callback, errcallback) {
	url+=url.indexOf('?')!=-1?('&tt='+ttag()):('?tt='+ttag());
	var areq=new XMLHttpRequest();
	areq.onload=function() {
		callback(areq.responseText);
	};
	areq.onerror=function() {
		if (!nl(errcallback)) {
	        errcallback();
	    }
	};
	areq.open('GET', url, true);
	areq.send();
}
//异步发送表单数据，回调函数的入参是响应文本
function posta(url,value,callback) {
	url+=url.indexOf('?')!=-1?('&tt='+ttag()):('?tt='+ttag());
	var areq=new XMLHttpRequest();
	areq.onload=function() {
		callback(areq.responseText);
	};
	areq.onerror=function() {
		callback(null);
	};
	areq.open('POST', url, true);
	areq.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	areq.send(value);

}
//============ 定时任务 ============
//延迟指定的毫秒数后，执行回调函数。
function delay(millis,callback) {
	setTimeout(callback,millis);
}
//每间隔执行的毫秒数，执行回调函数。回调函数要求有布尔返回值，返回true时终止后续执行。
function every(millis,callback) {
	var tid=0;
	tid=setInterval(function(){
		if(callback()) clearInterval(tid);
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
	return window.innerWidth<window.innerHeight?1:0;
}

//============ 字符串处理 ============
//格式化字符串
//例如：format('This is {0} and {1} and {2}.','a','b','c');
function format(str) {
	if(arguments.length==0) return '';
	var param = Array.prototype.slice.call(arguments,1);
	return str.replace(/\{[\w]*\}/g,function(match){
		return param[match.replace(/^\{|\}$/g,'')]; // || "\'\'";
	});
}
//删除字符串两端空白
function trim(str) {
	if(nl(str)) return null;
	var start=-1;
	for(var i=0;i<str.length;i++) {
		if(/\S/.test(str.charAt(i))) {
			start=i;
			break;
		}
	}
	if(start==-1) return '';
	var end=start;
	for(var j=str.length-1;j>start;j--) {
		if(/\S/.test(str.charAt(j))) {
			end=j;
			break;
		}
	}
	return str.substring(start,end+1);
}
//从字符串左边取指定长度的子串
function left(str, count){
	return str.substring(0, count);
}
function left1(str, count){
	return str.substring(0, count)+"...";
}
function changeTimeFormat(time) {
    var date = new Date(time);
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    return date.getFullYear() + "-" + month + "-" + currentDate;
    //返回格式：yyyy-MM-dd hh:mm
}
function fmt(digit) {
    return digit < 10 ? ("0" + digit) : ("" + digit);
}
function timeFormat1(time){
	var zero = new Date(), t = new Date(time*1);//此处乘以1是将可能传进来的字符串类型转成数字

    var diff = zero.getDate() - t.getDate();
    if (diff == 0 ) {    //当天
        return "今天" + fmt(t.getHours())+":"+fmt(t.getMinutes());
    } else if (diff == 1) {   //昨天
        return "昨天" + fmt(t.getHours()) + ":" + fmt(t.getMinutes());
    }else if(diff == 2){
    	return "前天" + fmt(t.getHours()) + ":" + fmt(t.getMinutes());
    } else if (zero.getYear() == t.getYear()) {     //今年
        return fmt(t.getMonth() + 1) + "-" + fmt(t.getDate()) + " " + fmt(t.getHours()) + ":" + fmt(t.getMinutes());
    } else {
        return t.getFullYear() + "-" + fmt(t.getMonth() + 1) + "-" + fmt(t.getDate());
    }
}

//将yyyy-MM-dd HH:mm:ss 转成long
function timeParse1(str){
    var strArray = str.split(" ");
    var strDate = strArray[0].split("-");
    var strTime = strArray[1].split(":");
    return new Date(strDate[0], (strDate[1] - 1), strDate[2], strTime[0], strTime[1], strTime[2]).getTime();
}

//============ 时间 ============
//当前毫秒时间
function time() {
	return new Date().getTime();
}
//当前毫秒时间末四位字符串
function ttag() {
	return (time()+'').substring(9);
}

//============ 过渡与变换 ============
//过渡
//例如：trn('txt1','left 100ms ease-out');
function trn(eid,value) {
	ss(eid,'-webkit-transition',value);
}
//变换
//例如：trf('txt1','translate(10px,20px) scale(0.8) rotate(45deg)');
function trf(eid,value) {
	ss(eid,'-webkit-transform',value);
}
//硬件加速三维移动变换
//注意：xvalue、yvalue、zvalue都是相对移动值，移动后对象的left和top并不会变。
function trft3d(eid,xvalue,yvalue,zvalue) {
	trf(eid,format('translate3d({0}px,{1}px,{2}px)',xvalue,yvalue,zvalue));
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

//============ 杂项 ============
//统一重定向
function go(url) {
	//需要添加必要的参数，客户端专用
	url+=url.indexOf('?')!=-1?'&':'?';
	url = url + getTransparentParam();
	window.location.href=url;
}
//消息框
function msg(str) {
	//alert(str);
}
//浏览器回退
function back() {
	history.back();
}
//回页面顶端
function rtop() {
	scrollTo(0,0);
}
//保全字符串（超过最大长度返回null）
function glen(str,maxlen) {
	if(str && str.length<=maxlen) return str; else return null;
}

/**
 * 对对象成员批量执行一个操作
 *
 * @param {object} obj 被操作对象对象
 * @param {function} callback 所执行的操作
 * @returns {object} 传入的obj对象

 * @example
 * each([1,2,3], function(){ alert(this) } );
 */
function each(obj, callback) {
	var value,
		i = 0,
		length = obj.length,
		isObj = (length === undefined) || (typeof(obj)=="function");
	if (isObj) {
		for (var name in obj) {
			if (callback.call(obj[name], obj[name], name, obj) === false) {
				break;
			}
		}
	} else {
		for (value = obj[0]; i < length && false !== callback.call(value, value, i, obj); value = obj[++i]) { }
	}
	return obj;
}

function escHTML(str){
	var RegExps = {
			re_amp: /&/g,
			re_lt : /</g,
			re_gt : />/g,
			re_apos : /\x27/g,
			re_quot : /\x22/g
		};
	var l = {
			/*
			 * '&' must be
			 * escape first
			 */
				'&amp;' : RegExps.re_amp,
				'&lt;' : RegExps.re_lt,
				'&gt;' : RegExps.re_gt,
				'&#039;' : RegExps.re_apos,
				'&quot;' : RegExps.re_quot
			};
	for (var i in l) {
		str = str.replace(l[i], i);
	}
	return str;
}
function showVip(str){
	if(nl(str)){
		return "gvip";
	}else{
		var vip = str.toLowerCase();
		return vip;
	}
}

/**
 * 在元素相邻的位置(具体位置可选)插入 html文本  text纯文本  element节点
 * @param {object} elem 元素引用
 * @param {number} where 取值0 1 2 3，分别对应：beforeBegin, afterBegin, beforeEnd, afterEnd
 * @param {object|string} html html文本 或 text普通文本 或 element节点引用
 * @param {boolean} [isText=false] 当需要插入text时，用此参数区别于html
 * @returns {boolean} 操作是否成功
 * @example insertAdjacent($("test"), 1, "world!", true); //0 1 2 3 分别代表：节点外节点前；节点内头部；节点内尾部；节点外节点后
 */
function insertAdjacent(elem, where, html, isText){
	var range,
		pos = ['beforeBegin', 'afterBegin', 'beforeEnd', 'afterEnd'],
		doc;

	if (isElement(elem) && pos[where] && (isString(html) || isElement(html))) {
		if (elem.insertAdjacentHTML) {
			elem['insertAdjacent' + (typeof(html) == 'object' ? 'Element' : (isText ? 'Text' : 'HTML'))](pos[where], html);
		} else {
			range = (doc = elem.ownerDocument).createRange();
			range[where == 1 || where == 2 ? 'selectNodeContents' : 'selectNode'](elem);
			range.collapse(where < 2);
			range.insertNode(typeof(html) != 'string' ? html : isText ? doc.createTextNode(html) : range.createContextualFragment(html));
		}
		return true;
	}
	return false;
}

function isElement(o) {
	 return o && o.nodeType == 1;
}

function getType(obj) {
	return obj === null ? 'null' : (obj === undefined ? 'undefined' : Object.prototype.toString.call(obj).slice(8, -1).toLowerCase());
}

function isString(o) {
	return getType(o) == "string";
}

/**
 * from qzfl
 * @param s
 * @param isUTF8
 * @returns
 */
function getRealLen(s, isUTF8){
	if (typeof(s) != 'string') {
		return 0;
	}
	if (!isUTF8) {
		return s.replace(/[^\x00-\xFF]/g, "**").length;
	} else {
		var cc = s.replace(/[\x00-\xFF]/g, "");
		return (s.length - cc.length) + (encodeURI(cc).length / 3);
	}
}
function formatRewards(str,reward){
	var title = str;
	title=title.replace(reward, "<em>"+reward+"</em>");
	return title;
}
/**
 * 用制定长度切割给定字符串
 *
 * @param {string} s 源字符串
 * @param {number} bl 期望长度(字节长度)
 * @param {string} tails 增加在最后的修饰串,比如"..."
 * @returns {string} 结果串
 */
function cut(str, bitLen, tails){
	str = String(str);
	bitLen -= 0;
	tails = tails || '';
	if (isNaN(bitLen)) {
		return str;
	}
	var len = str.length,
		i = Math.min(Math.floor(bitLen / 2), len),
		cnt = getRealLen(str.slice(0, i));

	for (; i < len && cnt < bitLen; i++) {
		cnt += 1 + (str.charCodeAt(i) > 255);
	}
	return str.slice(0, cnt > bitLen ? i - 1 : i) + (i < len ? tails : '');
}

/**
 * 获得图书封面
 * @param bid
 * @param prefix
 * @returns {String}
 */
function genBookPic(bid, prefix){
	prefix = prefix || _PREFIX.T4;
	return _CONF.DEFAULT_PREFIX + bid % 1000 + "/" + bid + "/" + prefix + "_" + bid + ".jpg";
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

/**
 * 绑定一个页面滚动加载下一页数据的事件
 * @param callback
 * @param data
 * @param threshold
 */
function unlimitedScroll(callback, data, threshold) {
    if (!threshold) threshold = 0;
    window.onscroll = function () {
        if (document.body.scrollHeight - document.body.scrollTop - threshold <= document.documentElement.clientHeight) {
            callback(data);
        }
    };
}

function combineObj() {
	var objs = Array.prototype.slice.call(arguments, 0);
	var res = {};
	for ( var i = 0, obj; obj = objs[i]; i++) {
		for ( var k in obj) {
			res[k] = obj[k];
		}
	}
	return res;
};

function pageDomainForShare(){
        //开发环境
        if (window.location.hostname=="localhost"||window.location.hostname == _CONF.TEST_HOST_NAME || window.location.hostname == _CONF.LOCAL_HOST_NAME || param("dotest") == 1) {
            return _CONF.TEST_HOST_NAME + '/book_res/reader/ios/' + _CONF.VERSION;
        }
        try {
            var pageCname = location.href.substr(0, location.href.indexOf("/ios"));
            return pageCname+'/ios/common';
//            if (pageCname.length > 0) {
//                return "http://" + pageCname + '/ios/common';
//            } else {
//                return _CONF.FORMAL_HOST+'/ios/common' ;
//            }
        } catch (e) {
            return _CONF.FORMAL_HOST + '/' + _CONF.VERSION;
        }
}

//分享后的回调方法
function shareCallback(uin,url,ret){
   //分享成功
   if(ret == 0 ){
       //TODO
       Local.showToast("user"+uin+"share"+url+" succeed!");
   }
   //分享失败
   else{
       //TODO
       Local.showToast("user"+uin+"share "+url+"failed!");
   }
}

/**
 * @param act_f pv,uv来源，五位数字
 * @param act_b 点击来源，string页面元素属性，默认当前页面
 */
function forceLog(act_f, act_b) {
	var act_from = act_f || -110;
	var act_by = act_b || fullPageName;
	Local.reqaObj(server() + "sum?act_f=" + act_from + "&act_b=" + act_by,
			function(data) {
			}, [], function() {
				Local.showToast("网络不畅，请稍后再试试");
			}, 1);
}