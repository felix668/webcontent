/**
 * yueWenActivity.js
 * @author zhangyunling;
 * Created: 2016/11/01
 * 为活动创建
 */

(function (global, factory) {
	global.yueWenActivity = factory(global,jQuery);
}(this, function (global,$) {

	/*
	 * base jQuery
	 * */
	if(typeof $ !== "function"){
		throw new Error("请确保先引入jQuery，或引入该模块！");
	}

	/*
	 * extend
	 * Zepto中，$.fn中没有extend方法，这里进行重定义
	 * 做一层代理
	 * */
	if(!$.fn.extend){

		$.fn.extend = function(obj){
			$.extend($.fn,obj);
		};
	}

	var yueWenActivity = {},

	//配置信息的对象
		_config = {},

	//弹窗的对象
		mBox = null,

	//mBox弹窗使用的缓存对象
		tips = {},

	//在各端，跳转到下载APP的函数，需要外部定义
		downAppUrl = {
			//Mobile端，跳转链接
			mobile : "",

			//PC端跳转链接
			pc : ""
		};

	/*
	 * 平台的枚举值
	 * 0：IOS起点阅读客户端
	 * 1：Android起点阅读客户端
	 * 2：IOS的M站，其他APP内部打开，归于此类
	 * 3：Android的M站，
	 * 4：PC浏览器
	 * 5：IOS的微信打开
	 * 6：Android的微信打开
	 * */
	var platforms = {
		"iosApp" : "0",
		"androidApp" : "1",
		"iosWap" : "2",
		"androidWap" : "3",
		"pc" : "4",
		"iosWechat" : "5",
		"androidWechat" : "6"
	};
	yueWenActivity.platforms = platforms;

	/*
	 * updatePlatforms
	 * @param options
	 * @取值与platforms相同
	 * @只允许更新platforms中，已有的属性
	 * */
	function _updatePlatforms(options){
		if(!options || typeof options != "object"){
			throw new Error("updatePlatforms时，需要您传入的是一个合法的对象");
		}

		var i;

		for(i in platforms){
			if(i in options){
				platforms[i] = options[i];
			}
		}

	}
	yueWenActivity.updatePlatforms = _updatePlatforms;


	/*
	 * 活动状态
	 * 0：正常，表示活动正在进行
	 * 1：活动未开始
	 * 2：活动已结束
	 * */
	var activityStatus = {
		"activity" : 0,
		"unBegin" : 1,
		"end" : 2
	};
	yueWenActivity.activityStatus = activityStatus;

	/*
	 * @method Mediator
	 * @param
	 * @example new Mediator;
	 * 用于创建一个中介者，类似于一个事件回调的集合
	 * */
	(function(){
		//一个中介者
		function Mediator(){
			var callbacks = {};

			this.getCb = function( type ){
				return callbacks[type];
			};

			this.createCb = function( type ){
				var cbs = callbacks[type];
				if(!(cbs instanceof Array)){
					cbs = [];
					callbacks[type] = cbs;
				}

				return cbs;
			};

		}
		Mediator.prototype.add = function( type , cb ){
			if(typeof cb != "function"){
				return false;
			}

			var cbs = this.getCb(type);
			if( !( cbs instanceof Array )){
				cbs = this.createCb(type);
			}

			if(this.inArray( cb, cbs ) == -1){
				cbs.push(cb);
				return true;
			}

			return false;
		};
		Mediator.prototype.remove = function( type , cb ){
			var cbs = this.getCb(type),
				index = 0;

			if((typeof cb != "function") || !(cbs instanceof Array)){
				return true;
			}

			index = this.inArray( cb, cbs );

			//找不到的话，直接删除
			if( index == -1 ){
				return true;
			}

			cbs.splice(index,1);

			return true;
		};
		/*
		 fire时，传入的数据结构
		 data ： {
		 context : //执行cb时，内部this的指向
		 event : //如果是事件时，需要传入的event对象
		 value : []//其他的数据
		 }
		 */
		Mediator.prototype.fire = function ( type , data ){
			var cbs = this.getCb(type),
				i = 0,
				len = 0,
				context = null,
				event = null,
				value = null,
				_fire = null,
				flag = true;

			if(!(cbs instanceof Array)){
				return false;
			}

			context = data.context || null;
			event = data.event || "";
			value = data.value;

			if( !(value instanceof Array) ){
				value = [value];
			}

			if(event){
				value.unshift(event);
			}

			for(len = cbs.length;i<len;i++){
				if(flag === false){
					cbs[i].apply( context , value );
				}else{
					flag = cbs[i].apply( context , value );
				}
			}

			if(flag === false){
				event.preventDefault();
				event.stopPropagation();
			}

		}
		Mediator.prototype.inArray = function( cb, cbs ){

			if($ && ("inArray" in $) && (typeof $.inArray == "function")){
				return $.inArray( cb, cbs );
			}

			var i = 0,
				len = 0;

			for(len = cbs.length;i<len;i++){
				if(cbs[i] === cb){
					return i;
				}
			}

			return -1;
		};

		yueWenActivity.Mediator = Mediator;

	})();


	/*
	 * @method eventMediator
	 * @param {Object} obj , obj is jQuery instance
	 * @param {String} type , type is need a eventType
	 * */
	(function(){

		function eventMediator(obj,type){
			var events = new yueWenActivity.Mediator(),
				dataEvent = "data-"+type;

			try{
				if(!type || obj.size() == 0){
					throw new Error();
				}
			}catch(e){
				throw new TypeError("在调用eventMediator时，传入的类型出错：eventMediator(ele,type)!\nele必须为jQuery或者Zepto对象，并且需要在DOM中，找到该元素，type必须存在！");
			}

			//添加一个
			function _add( type , cb ){
				return events.add( type , cb );
			}

			//移除一个
			function _remove( type , cb ){
				return events.remove( type , cb );
			}

			function _fire( type , args ){

				var data = {
					context : this,
					event : args[0],
					value : args.slice(1)
				};

				events.fire( type , data );

			}

			function _fireClick(e){

				var _obj = $(this),
					clickType = _obj.attr(dataEvent) || "";

				if(!clickType){
					return "";
				}

				//执行事件的触发
				_fire.call(this,clickType,[].slice.call(arguments,0));

			}

			//给该区域添加点击事件
			obj.on(type,"["+dataEvent+"]",_fireClick);

			return {
				add : _add,
				remove : _remove
			};

		}

		yueWenActivity.eventMediator = eventMediator;

	})();


	/*
	 * @method yuewenAjax
	 * 重新封装ajax的请求方法
	 * 该方法是对ajax的重新封装，所以传的参数与$.ajax相同，只是在原有参数的基础上，添加了以下几个参数
	 * 传入的是一个Object对象，除去与ajax相同的参数之外，有额外的几个参数如下：
	 * @param {Object} obj,触发该ajax提交的jQuery元素，用于处理提交太快的情况。
	 * @param limit:true/false, 是否需要控制提交间隔，默认为true，控制间隔
	 * @param limitTime:1000, 限制提交频率的时间间隔，默认值1000ms；
	 *
	 * */
	(function(){
		//防止多次提交，有做提交信息的频率限制
		//暂时只用于支持JSON对象的一项目中
		function _yuewenAjax(options){

			var limit = true,
				limitTime = 1000,
				obj = null,
				timer = 0;

			//错误验证，以及赋值。
			try{
				obj = options.obj;
				limit = options.limit === false ? false : true;

				//设置一些默认的属性值
				options.type = options.type || "post";
				options.data = options.data || "";
				options.dataType || options.dataType || "json";
				options.url = options.url || obj.attr("data-url") || "";

				limitTime = isNaN(options.limitTime)?1000:(options.limitTime - 1);

			}catch(e){
				throw new TypeError("在调用yuewenAjax时，传入的参数有误！");
			}

			if(!options.url){
				throw new Error("在调用yuewenAjax时，url属性是必须的，请确认！");
			}

			//限制提交频率的情况下，处理。
			if(limit && obj.attr("data-isAjaxing") == "true"){
				return false;
			}

			var success = options.success,
				error = options.error,
				dataType = options.dataType;

			//新的成功回调函数
			options.success = function(json){

				if(dataType == "json"){
					json = typeof json == "string"?JSON.parse(json):json;
				}

				if(limit){
					clearTimeout(timer);
					obj.attr("data-isAjaxing","");
				}

				if (typeof success === "function") {
					success.call(obj, json);
				}
			};

			options.error = function() {

				//如果有自定义的错误提示，那么调用自定义的
				//如果没有，那么直接提示。
				if (typeof error === "function") {
					error.apply(obj,arguments);
				}else{
					alert("由于网络的原因，您刚才的操作没有成功。");
				}

				if(limit){
					clearTimeout(timer);
					obj.attr("data-isAjaxing","");
				}
			}

			$.ajax(options);

			if(limit){
				obj.attr("data-isAjaxing","true");
				timer = setTimeout(function(){
					obj.attr("data-isAjaxing","");
				},limitTime);
			}

		}

		$.fn.extend({
			yuewenAjax:function(options){
				$.each($(this),function(){
					var option = $.extend({},options);

					option.obj = $(this);

					_yuewenAjax(option);
				});

				return this;
			}
		});

		yueWenActivity.yuewenAjax = _yuewenAjax;

	})();

	/*
	 * @method wxShare
	 * 微信分享的基础控件，直接拉取的其他项目的文件，引入到该部分
	 * 直接使用的，原地址：http://devqidian.gtimg.com/lbf/2.0.0/qidian/wxShare.js
	 * 未做更改
	 *
	 * */
	(function(){
		var PloyH5 = {
			/**
			 * The function that loading jweixin-1.0.0.js.
			 * @method loadJS
			 * @param  {String}    url The url of jweixin-1.0.0.js.
			 * @param  {Function}  success The callback function triggered after it successfully sent xhr to php side.
			 */
			loadJS: function(url, success) {
				var js = document.createElement('script');
				js.src = url;
				js.type = "text/javascript";
				success = success || function() { };
				js.onload = js.onreadystatechange = function() {
					if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
						success();
						this.onload = this.onreadystatechange = null;

						this.parentNode.removeChild(this);
					}
				}
				document.getElementsByTagName('head')[0].appendChild(js);
			},
			/**
			 * The function that sending xhr to php side for getting appId, timeStamp, signature.
			 * @method crossAjax
			 */
			crossAjax: function() {
				var opt = arguments[0];
				if (opt) {
					if (typeof (FormData) == "undefined") {
						if (typeof (opt.supportCallBack) == "undefined") {
							return;
						}
						else {
							opt.supportCallBack();
							return;
						}
					};
					opt.cache = opt.cache || false;
					opt.url = opt.url || '';
					opt.method = opt.method || "get";
					opt.timeout = opt.timeout || 10000;
					var data = opt.data;
					var xhr = new XMLHttpRequest();
					xhr.timeout = opt.timeout;

					var getCacheRandom = function() {
						var date = new Date();
						return date.getFullYear() + '' + date.getMonth() + '' + date.getDate() + '' + date.getHours() + '' + date.getMinutes() + '' + date.getSeconds() + '' + date.getMilliseconds();
					};

					if (opt.method.toLowerCase() == "get") {
						if (data) {
							opt.url += opt.url.indexOf("?") > -1 ? "&" : "?";
							for (var item in data) {
								opt.url += item + "=" + encodeURIComponent(data[item]) + "&";
							}
							if (opt.url.lastIndexOf("&") == opt.url.length - 1) {
								opt.url = opt.url.substr(0, opt.url.length - 1);
							}
							if (!opt.cache) {
								opt.url += "&_=" + getCacheRandom();
							}
						}
						xhr.open("get", opt.url);
						xhr.send();
					}
					else {
						var formData = new FormData();
						if (data) {
							for (var item in data) {
								formData.append(item, data[item]);
							}
						}
						if (!opt.cache) {
							formData.append("_", getCacheRandom());
						}
						xhr.open("post", opt.url);
						xhr.send(formData);
					}

					xhr.onreadystatechange = function(e) {
						if (xhr.readyState == 4) {
							if (xhr.status == 200) {
								if (typeof (opt.success) != "undefined") {
									opt.success(JSON.parse(xhr.responseText))
								}
							}
							else {
								if (xhr.status != 0 && typeof (opt.error) != "undefined") {
									opt.error(xhr)
								}
							}
						}
					};
					xhr.ontimeout = function(e) {
						if (typeof (opt.timeoutCallBack) != "undefined") {
							opt.timeoutCallBack(e);
						}
					};
				}
			},
			/**
			 * The primary function configs API of weixin share triggered in weixin client side. It also summarizes the process of the interaction between client and server: Firstly load jweixin-1.0.0.js, then send xhr to php side and finally use the returned appId,signature,timestamp to config weixin share api.
			 * @method setWeiXinShareConfig
			 * @param  {String}    wxservice The entity want to use weixin share api, which must have appId and other data gotten from open.weixin.qq.com.
			 * @param  {String}    title The title of the link you want to share.
			 * @param  {String}    link The address of the link you want to share.
			 * @param  {String}    imgUrl The url of the image shown besides the title when you touch share button.
			 * @param  {String}      desc The description of the link you want to share.
			 * @example
			 *       LBF.use(['qidian.wxShare'],function(weixin){
        weixin.setWeiXinShareConfig("qidianzhongwenwang", //两个值，表示两个公众号（起点中文网和起点读书）。建议使用：qidianzhongwenwang
                "测试微信分享功能", //分享的标题
                "http://m.qidian.com/ploy/20150320h5/index.htm", //分享的地址
                "http://sta.qidian.com/zt/2015/26302/images/buy.png", //分享的图标
                "这是一个demo,用来测试微信分享功能！", function() {
                    alert("分享成功！");//分享成功的回调
                }, function() {
                    alert("分享取消！");//取消分享的回调
                });
          });
			 */
			setWeiXinShareConfig: function(wxservice, title, link, imgUrl, desc) {
				if (navigator.userAgent.toLowerCase().match(/micromessenger/i) != "micromessenger") {//检查是不是在微信浏览器中
					return;
				}
				var succ = function() { }; var cancel = function() { };
				if (arguments != null && arguments.length >= 6) {
					succ = arguments[5];
				}
				if (arguments != null && arguments.length >= 7) {
					cancel = arguments[6];
				}
				PloyH5.loadJS("http://res.wx.qq.com/open/js/jweixin-1.0.0.js", function() {

					var data = {
						ajaxMethod: "getwxqdzwwjsconfig"
					};
					var success = function(data) {
						if (data && data.IsSuccess) {
							wx.config({
								debug: false,
								appId: data.ReturnObject.appId,
								timestamp: data.ReturnObject.timestamp,
								nonceStr: data.ReturnObject.nonceStr,
								signature: data.ReturnObject.signature,
								jsApiList: [
									'checkJsApi',
									'onMenuShareTimeline',
									'onMenuShareAppMessage',
									'onMenuShareQQ',
									'onMenuShareWeibo',
									'chooseImage',
									'previewImage',
									'uploadImage',
									'downloadImage',
									'hideMenuItems',
									'showMenuItems',
									'hideAllNonBaseMenuItem',
									'showAllNonBaseMenuItem',
									'getNetworkType',
									'openLocation',
									'getLocation',
									'hideOptionMenu',
									'showOptionMenu',
									'closeWindow',
									'scanQRCode']
							});
							wx.ready(function() {
								wx.onMenuShareTimeline({
									title: title,
									link: link,
									imgUrl: imgUrl,
									success: function(res) {
										succ(res);
									},
									cancel: function(res) {
										cancel(res);
									}
								});
								wx.onMenuShareAppMessage({
									title: title,
									desc: desc,
									link: link,
									imgUrl: imgUrl,
									type: '',
									dataUrl: '',
									success: function(res) {
										succ(res);
									},
									cancel: function(res) {
										cancel(res);
									}
								});
								wx.onMenuShareQQ({
									title: title,
									desc: desc,
									link: link,
									imgUrl: imgUrl,
									success: function(res) {
										succ(res);
									},
									cancel: function(res) {
										cancel(res);
									}
								});
							});
							wx.error(function(res) {

							});
						}
					};
					PloyH5.crossAjax({ data: data, success: success, url: 'http://m.qidian.com/ajax/index.ashx', timeout: 2000 });
				});
			},

			/**
			 * The function that can reconfig the title,url address, image, and description of the link you want to share.
			 * @method reConfig
			 * @param  {String}   title The title of the link you want to share.
			 * @param  {String}   link The link address you want to share.
			 * @param  {String}   imgUrl The url of the image shown besides the title when you touch share button.
			 * @param  {String}    desc  The description of the link you want to share.
			 * @example
			 *       LBF.use(['lib.jQuery','qidian.wxShare'],function($,weixin){
                $("#update").on("click",function(){
                     weixin.reConfig(//重新设置参数值
                    "11111测试微信分享功能11111！", //新的分享标题
                    "http://m.qidian.com/ploy/20150320h5/index.htm", //新的分享地址
                    "http://mat1.gtimg.com/book/2015images/26340/code1.jpg", //新的分享图标
                    "2222这是一个demo,用来测试微信分享功能2222！",  //新的分享描述
                    function() {
                        alert("分享成功+1！");//新的成功回调
                    }, function() {
                        alert("分享取消+1！");//新的取消分享回调
                    });
                alert("设置完成！");
            });
         });
			 */
			reConfig: function(title, link, imgUrl, desc) {
				try {
					if (typeof wx != "undefined") {
						var succ = function() { }; var cancel = function() { };
						if (arguments != null && arguments.length >= 5) {
							succ = arguments[4];
						}
						if (arguments != null && arguments.length >= 6) {
							cancel = arguments[5];
						}

						wx.onMenuShareTimeline({
							title: title,
							link: link,
							imgUrl: imgUrl,
							success: function(res) {
								succ(res);
							},
							cancel: function(res) {
								cancel(res);
							}
						});
						wx.onMenuShareAppMessage({
							title: title,
							desc: desc,
							link: link,
							imgUrl: imgUrl,
							type: '',
							dataUrl: '',
							success: function(res) {
								succ(res);
							},
							cancel: function(res) {
								cancel(res);
							}
						});
						wx.onMenuShareQQ({
							title: title,
							desc: desc,
							link: link,
							imgUrl: imgUrl,
							success: function(res) {
								succ(res);
							},
							cancel: function(res) {
								cancel(res);
							}
						});
					}
				}
				catch (e) {

				}
			}

		};

		yueWenActivity.wxShare = {
			setWeiXinShareConfig:PloyH5.setWeiXinShareConfig,
			reConfig:PloyH5.reConfig
		};

	})();

	/*
	 * @method mBox
	 * 弹出层 需要修改一下
	 * */
	(function(){
		var box = $("#pop"),
			popBox = box.find(".pop-box"),
			icon = box.find(".pop-icon"),
			title = box.find(".pop-title"),
			content = box.find(".pop-content"),
			footer = box.find(".pop-footer"),
			leftBtn = footer.find(".left-btn"),
			rightBtn = footer.find(".right-btn"),
			closeIcon = box.find(".pop-close");


		function _confirm(options){

			if(typeof options != "object"){
				throw new TypeError("调用mBox时，传入的参数必须为一个对象！");
			}

			options.type = "confirm";

			_custom(options);

		}

		/*
		 * alert是对btns.leftBtn的属性值进行设置的
		 * */
		function _alert(options){

			if(typeof options != "object"){
				throw new TypeError("调用mBox时，传入的参数必须为一个对象！");
			}

			options.type = "alert";

			_custom(options);

		}

		/*
		 * options支持的参数
		 * type : alert/confirm,
		 * close : true/false,//是否显示右上角的关闭按钮
		 * icon : dianlaoshi/fengye/biyezheng/fudai/wangxiaomei/xueweizheng/zhoudaqiang
		 * title : 名称用的图片，请在CSS对应着使用
		 * content : 内容区域的展示，可以是html代码
		 * btns : {
		 *   leftBtn: {
		 *       name:"显示的名称",
		 *       type:"data-click"上的取值
		 *   },
		 *   rightBtn:{
		 *       name:"显示的名字",
		 *       type:"data-click"上的值
		 *   }
		 * }
		 * */
		function _custom(options){
			var btns = null;

			if(typeof options != "object"){
				throw new TypeError("调用mBox时，传入的参数必须为一个对象！");
			}

			icon.html(options.icon || "");
			title.html(options.title || "");
			content.html(options.content || "");

			var btns = options.btns;

			if(typeof btns != "object"){
				throw new TypeError("调用mBox时，传入对象的btns必须是一个对象，请确认传入的格式，与要求的格式是否匹配！");
			}

			var type = options.type,
				leftOption = btns.leftBtn,
				rightOption = btns.rightBtn,
				btnNum = 0;


			//初始化样式
			leftBtn.removeClass("dn");
			rightBtn.removeClass("dn");

			if(leftOption){
				leftBtn.attr("data-click",leftOption.type||"").html(leftOption.name || "");
				btnNum++;
			}else{
				leftBtn.addClass("dn");
			}

			if(rightOption){
				rightBtn.attr("data-click",rightOption.type||"").html(rightOption.name || "");
				btnNum++;
			}else{
				rightBtn.addClass("dn");
			}

			//如果没有设置type，则根据btn的个数，来设置type的值
			if(!type){
				if(btnNum == 1){
					type = "alert";
				}else if(btnNum == 2){
					type = "confirm";
				}
			}

			//这个时候，只显示一个按钮
			if(type == "alert"){

				if(leftOption){
					rightBtn.addClass("dn");
				}else if(rightOption){
					leftBtn.addClass("dn");
				}

			}

			//控制右上角按钮的显示和隐藏
			if(options.close === false){
				closeIcon.addClass("dn");
			}else{
				closeIcon.removeClass("dn");
			}

			popBox.attr("data-type",type||"");
			_show();

		}

		function _show(){
			box.removeClass("dn");
		}

		function _hide(){
			box.addClass("dn");
		}

		mBox = {
			custom : _custom,
			alert : _alert,
			confirm : _confirm,
			show : _show,
			hide : _hide
		};
		yueWenActivity.mBox = mBox;

	})();


	//接下来的代码逻辑，与活动关系更为密切，请注意

	/*
	 * @setConfig
	 * @param {object} options
	 *
	 * */
	function _setConfig(config){
		if(!config || typeof config != "object"){
			return "";
		}

		var _platforms = config.platforms,
			_tips = config.tips,
			_downAppUrl = config.downAppUrl;

		//platforms更新
		if(_platforms && typeof _platforms == "object"){
			$.extend(platforms,_platforms);
		}

		if(_tips && typeof _tips == "object"){
			$.extend(tips,_tips);
		}

		//需要外部
		if(_downAppUrl && typeof _downAppUrl == "object"){
			$.extend(downAppUrl,_downAppUrl);
		}

		_config = config;
	}
	yueWenActivity.setConfig = _setConfig;

	/*
	 * @method initActivity
	 * @param null
	 * 初始化一些常用的功能
	 * */
	function _initActivity(){

		var returnObj = {
			tips : tips
		};

		//设置微信分享的模板
		_initWeixinShare();

		//事件初始化
		returnObj.wrapperClickEvent = _initEventSys();

		//当前的活动状态
		returnObj.activityStatus = function(){
			return _activityStatus();
		};

		returnObj.sysError = function(msg){
			return _sysError(msg);
		};

		return returnObj;

	}
	yueWenActivity.initActivity = _initActivity;

	/*
	 * @method initEventSys
	 * 初始化事件系统
	 * 该活动基本基于一个事件委托在处理
	 *
	 * */
	function _initEventSys(){
		//wrapper必须存在，如果不存在，那么整个事件系统都无法运行
		var wrapper = _config.wrapper,
			wrapperClickEvent = null;

		if(!wrapper){
			throw new Error("活动必须要有一个可以使用的wrapper");
		}

		wrapperClickEvent = yueWenActivity.eventMediator(wrapper,"click");

		return wrapperClickEvent;

	}

	/*
	 * @initWeixinShare
	 * 在微信内部，设置微信分享的信息
	 *
	 * */
	function _initWeixinShare(){
		var ua = _config.uA,
			shareOption = _config.shareOption;

		if(!shareOption && typeof shareOption != "object") {
			return "";
		}

		if(ua == platforms.iosWechat || ua == platforms.androidWechat){
			yueWenActivity.wxShare.setWeiXinShareConfig(
				shareOption.id, //wxservice-公众号
				shareOption.title, //title-分享的标题
				shareOption.link, //link-分享的地址
				shareOption.img_url, //imgUrl-分享的图标
				shareOption.desc, //分享出去的内容
				shareOption.success //成功后的回调
			);
		}
	}

	/*
	 * @method activityStatus
	 * @des 判断活动是否开始
	 *      如果未登陆，会先去登陆的
	 *      如果活动未开始，返回false，并且执行mBox.custom(tips.unBegin);
	 *      或者活动已结束，返回false，并且执行mBox.custom(tips.hasEnd);
	 *      其他情况返回true
	 * */
	//活动的基础配置，判断活动是否开始
	function _activityStatus(){
		var actStatus = _config.activityStatus;

		if(actStatus == activityStatus.unBegin){
			//表示活动尚未开始
			_activityModal = function(){
				if(typeof tips.unBegin == "object"){
					mBox.custom(tips.unBegin);
				}
				return false;
			}
		}else if(actStatus == activityStatus.end){
			//活动已经结束
			_activityModal = function(){
				if(typeof tips.hasEnd == "object"){
					mBox.custom(tips.hasEnd);
				}
				return false;
			}
		}else if(actStatus == activityStatus.activity){
			//表示活动正在进行
			_activityModal = function(){
				return true;
			}
		}else{
			//表示其他情况，这里就需要在外面再做判断
			_activityModal = function(){
				return "";
			}
		}

		return _activityModal();

	}

	//系统错误提示
	//系统的错误消息提示
	function _sysError(msg){
		//系统的错误提示
		var sysError = tips.sysError,
			content = sysError.content.split("{{msg}}");

		_sysError = function (msg){
			sysError.content = content[0]+msg+content[1];
			mBox.custom(sysError);
		}

		_sysError(msg);

	}
	yueWenActivity.sysError = function(msg){
		return _sysError(msg);
	};

	return yueWenActivity;

}));



/*
 * 小型游戏引擎
 */
// requestAnimationFrame polyfill
if (!Date.now){
	Date.now = function() { return new Date().getTime(); };
}

(function() {
	'use strict';
	var vendors = ['webkit', 'moz'];
	for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
		var vp = vendors[i];
		window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
		window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame'] || window[vp+'CancelRequestAnimationFrame']);
	}
	if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
		|| !window.requestAnimationFrame || !window.cancelAnimationFrame) {
		var lastTime = 0;
		window.requestAnimationFrame = function(callback) {
			var now = Date.now();
			var nextTime = Math.max(lastTime + 16, now);
			return setTimeout(function() { callback(lastTime = nextTime); },
				nextTime - now);
		};
		window.cancelAnimationFrame = clearTimeout;
	}
}());

function GameEngine(id,params){
	'use strict';

	params = params||{};


	var _ = this,
		settings = {
			width:960,						//画布默认宽度
			height:640						//画布默认高度
		},
		$canvas = document.getElementById(id),

		//画布上下文环境
		_context = $canvas.getContext('2d'),

		//布景对象队列
		_stages = [],

		//事件集合
		_events = {},

		//当前布景索引
		_index = 0,

		//帧动画控制
		_hander = 0;


	//特定的extend函数
	function _extend(target,settings,params){
		for(var i in settings){
			target[i] = params[i]||settings[i];
		}
		return target;
	}

	_extend(this,settings,params);

	//初始化画布的大小
	//$canvas.width = _.width;
	//$canvas.height = _.height;


	//活动对象构造
	var Item = function(params){
		this._params = params||{};
		this._settings = {
			x:0,					//位置坐标:横坐标
			y:0,					//位置坐标:纵坐标
			width:10,				//宽
			height:10,				//高
			type:0,					//对象类型,0表示普通对象(不与地图绑定),1表示玩家控制对象,2表示程序控制对象
			color:'#F00',			//标识颜色
			status:1,				//对象状态,0表示未激活/结束,1表示正常,2表示暂停,3表示临时,4表示异常
			orientation:0,			//当前定位方向,0表示右,1表示下,2表示左,3表示上
			speed:0,				//移动速度
			//地图相关
			location:null,			//定位地图,Map对象
			coord:null,				//如果对象与地图绑定,需设置地图坐标;若不绑定,则设置位置坐标
			path:[],				//NPC自动行走的路径
			vector:null,			//目标坐标
			//布局相关
			stage:null,				//绑定对象与所属布景绑定
			index:0,				//对象索引
			frames:1,				//速度等级,内部计算器times多少帧变化一次
			times:0,				//刷新画布计数(用于循环动画状态判断)
			timeout:0,				//倒计时(用于过程动画状态判断)
			control:{},				//控制缓存,到达定位点时处理
			update:function(){}, 	//更新参数信息
			draw:function(){}		//绘制
		};
		_extend(this,this._settings,this._params);
	};
	Item.prototype.bind = function(eventType,callback){
		if(!_events[eventType]){
			_events[eventType] = {};
			$canvas.addEventListener(eventType,function(e){
				var position = _.getPosition(e);
				_stages[_index].items.forEach(function(item){
					if(Math.abs(position.x-item.x)<item.width/2&&Math.abs(position.y-item.y)<item.height/2){
						var key = 's'+_index+'i'+item.index;
						if(_events[eventType][key]){
							_events[eventType][key](e);
						}
					}
				});
				e.preventDefault();
			});
		}
		_events[eventType]['s'+this.stage.index+'i'+this.index] = callback.bind(this);  //绑定作用域
	};
	//地图对象构造器
	var Map = function(params){
		this._params = params||{};
		this._settings = {
			x:0,						//地图起点坐标
			y:0,
			size:10,					//地图单元的宽度
			data:[],					//地图数据
			stage:null,					//布景
			x_length:0,					//二维数组x轴长度
			y_length:0,					//二维数组y轴长度
			frames:1,					//速度等级,内部计算器times多少帧变化一次
			times:0,					//刷新画布计数(用于循环动画状态判断)
			cache:false,    			//是否静态（如静态则设置缓存）
			update:function(){},		//更新地图数据
			draw:function(){},			//绘制地图
		};
		_extend(this,this._settings,this._params);
	};
	//获取地图上某点的值
	Map.prototype.get = function(x,y){
		if(this.data[y]&&typeof this.data[y][x]!='undefined'){
			return this.data[y][x];
		}
		return -1;
	};
	//设置地图上某点的值
	Map.prototype.set = function(x,y,value){
		if(this.data[y]){
			this.data[y][x] = value;
		}
	};
	//地图坐标转画布坐标
	Map.prototype.coord2position = function(cx,cy){
		return {
			x:this.x+cx*this.size+this.size/2,
			y:this.y+cy*this.size+this.size/2
		};
	};
	//画布坐标转地图坐标
	Map.prototype.position2coord = function(x,y){
		var fx = Math.abs(x-this.x)%this.size-this.size/2;
		var fy = Math.abs(y-this.y)%this.size-this.size/2;
		return {
			x:Math.floor((x-this.x)/this.size),
			y:Math.floor((y-this.y)/this.size),
			offset:Math.sqrt(fx*fx+fy*fy)
		};
	};
	//寻址算法
	Map.prototype.finder = function(params){
		var defaults = {
			map:null,
			start:{},
			end:{},
			type:'path'
		};
		var options = _extend({},defaults,params);
		if(options.map[options.start.y][options.start.x]||options.map[options.end.y][options.end.x]){ //当起点或终点设置在墙上
			return [];
		}
		var finded = false;
		var result = [];
		var y_length  = options.map.length;
		var x_length = options.map[0].length;
		var steps = []; 	//步骤的映射
		for(var y=y_length;y--;){
			steps[y] = [];
			for(var x=x_length;x--;){
				steps[y][x] = 0;
			}
		}
		var _getValue = function(x,y){  //获取地图上的值
			if(options.map[y]&&typeof options.map[y][x]!='undefined'){
				return options.map[y][x];
			}
			return -1;
		};
		var _next = function(to){ //判定是非可走,可走放入列表
			var value = _getValue(to.x,to.y);
			if(value<1){
				if(value==-1){
					to.x = (to.x+x_length)%x_length;
					to.y = (to.y+y_length)%y_length;
					to.change = 1;
				}
				if(!steps[to.y][to.x]){
					result.push(to);
				}
			}
		};
		var _render = function(list){//找线路
			var new_list = [];
			var next = function(from,to){
				var value = _getValue(to.x,to.y);
				if(value<1){	//当前点是否可以走
					if(value==-1){
						to.x = (to.x+x_length)%x_length;
						to.y = (to.y+y_length)%y_length;
						to.change = 1;
					}
					if(to.x==options.end.x&&to.y==options.end.y){
						steps[to.y][to.x] = from;
						finded = true;
					}else if(!steps[to.y][to.x]){
						steps[to.y][to.x] = from;
						new_list.push(to);
					}
				}
			};
			list.forEach(function(current){
				next(current,{y:current.y+1,x:current.x});
				next(current,{y:current.y,x:current.x+1});
				next(current,{y:current.y-1,x:current.x});
				next(current,{y:current.y,x:current.x-1});
			});
			if(!finded&&new_list.length){
				_render(new_list);
			}
		};
		_render([options.start]);
		if(finded){
			var current=options.end;
			if(options.type=='path'){
				while(current.x!=options.start.x||current.y!=options.start.y){
					result.unshift(current);
					current=steps[current.y][current.x];
				}
			}else if(options.type=='next'){
				_next({x:current.x+1,y:current.y});
				_next({x:current.x,y:current.y+1});
				_next({x:current.x-1,y:current.y});
				_next({x:current.x,y:current.y-1});
			}
		}
		return result;
	};
	//布景对象构造器
	var Stage = function(params){
		this._params = params||{};
		this._settings = {
			status:0,						//布景状态,0表示未激活/结束,1表示正常,2表示暂停,3表示临时,4表示异常
			maps:[],						//地图队列
			audio:[],						//音频资源
			images:[],						//图片资源
			items:[],						//对象队列
			timeout:0,						//倒计时(用于过程动画状态判断)
			update:function(){}				//嗅探,处理布局下不同对象的相对关系
		};
		_extend(this,this._settings,this._params);
	};
	//重置物体位置
	Stage.prototype.resetItems = function(){
		this.status = 1;
		this.items.forEach(function(item,index){
			_extend(item,item._settings,item._params);
			item.index = index;
			item.stage = this;
			if(item.location){
				var position = item.location.coord2position(item.coord.x,item.coord.y);
				item.x = position.x;
				item.y = position.y;
			}
		}.bind(this));
	};
	//重置地图
	Stage.prototype.resetMaps = function(){
		this.status = 1;
		this.maps.forEach(function(map){
			_extend(map,map._settings,map._params);
			map.data = JSON.parse(JSON.stringify(map._params.data));
			map.stage = this;
			map.y_length = map.data.length;
			map.x_length = map.data[0].length;
		}.bind(this));
	};
	//重置
	Stage.prototype.reset = function(){
		_extend(this,this._settings,this._params);
		this.resetItems();
		this.resetMaps();
	};
	//添加对象
	Stage.prototype.createItem = function(options){
		var item = new Item(options);
		//动态属性
		item.stage = this;
		item.index = this.items.length;
		if(item.location){
			var position = item.location.coord2position(item.coord.x,item.coord.y);
			item.x = position.x;
			item.y = position.y;
		}
		this.items.push(item);
		return item;
	};
	//获取对象列表
	Stage.prototype.getItemsByType = function(type){
		var items = this.items.filter(function(item){
			if(item.type==type){
				return item;
			}
		});
		return items;
	};
	//添加地图
	Stage.prototype.createMap = function(options){
		var map = new Map(options);
		//动态属性
		map.data = JSON.parse(JSON.stringify(map._params.data));
		map.stage = this;
		map.y_length = map.data.length;
		map.x_length = map.data[0].length;
		map.imageData = null;
		this.maps.push(map);
		return map;
	};
	//绑定事件
	Stage.prototype.bind = function(eventType,callback){
		if(!_events[eventType]){
			_events[eventType] = {};
			window.addEventListener(eventType,function(e){
				var key = 's' + _index;
				if(_events[eventType][key]){
					_events[eventType][key](e);
				}
				e.preventDefault();
			});
		}
		_events[eventType]['s'+this.index] = callback.bind(this);	//绑定事件作用域
	};
	//动画开始
	this.start = function() {
		var f = 0;		//帧数计算
		var fn = function(){
			var stage = _stages[_index];
			_context.clearRect(0,0,_.width,_.height);		//清除画布
			f++;
			if(stage.timeout){
				stage.timeout--;
			}
			if(stage.update()!=false){		            //update返回false,则不绘制
				stage.maps.forEach(function(map){
					if(!(f%map.frames)){
						map.times = f/map.frames;		//计数器
					}
					if(map.cache){
						if(!map.imageData){
							_context.save();
							map.draw(_context);
							map.imageData = _context.getImageData(0,0,_.width,_.height);
							_context.restore();
						}else{
							_context.putImageData(map.imageData,0,0);
						}
					}else{
						map.update();
						map.draw(_context);
					}
				});
				stage.items.forEach(function(item){
					if(!(f%item.frames)){
						item.times = f/item.frames;		   //计数器
					}
					if(stage.status==1&&item.status!=2){  	//对象及布景状态都不处于暂停状态
						if(item.location){
							item.coord = item.location.position2coord(item.x,item.y);
						}
						if(item.timeout){
							item.timeout--;
						}
						item.update();
					}
					item.draw(_context);
				});
			}
			_hander = requestAnimationFrame(fn);
		};
		_hander = requestAnimationFrame(fn);
	};
	//动画结束
	this.stop = function(){
		_hander&&cancelAnimationFrame(_hander);
	};
	//事件坐标
	this.getPosition = function(e){
		var box = $canvas.getBoundingClientRect();
		return {
			x:e.clientX-box.left*(_.width/box.width),
			y:e.clientY-box.top*(_.height/box.height)
		};
	}
	//创建布景
	this.createStage = function(options){
		var stage = new Stage(options);
		stage.index = _stages.length;
		_stages.push(stage);
		return stage;
	};
	//指定布景
	this.setStage = function(index){
		_stages[_index].status = 0;
		_index = index;
		_stages[_index].status = 1;
		return _stages[_index];
	};
	//下个布景
	this.nextStage = function(){
		if(_index<_stages.length-1){
			_stages[_index].status = 0;
			_index++;
			_stages[_index].status = 1;
			return _stages[_index];
		}else{
			throw new Error('unfound new stage.');
		}
	};
	//初始化游戏引擎
	this.init = function(){
		_index = 0;
		this.start();
	};
}


(function (global, factory) {

	global.yueWenActivityInstance = factory;

}(this,function(config){

	var wrapper = $("#wrapper"),
		domainPrefix = config.domainPrefix,
		initObject = null;

	/*
	 * 平台的枚举值
	 * iosApp = 0：IOS起点阅读客户端
	 * androidApp = 1：Android起点阅读客户端
	 * iosWap = 2：IOS的M站，其他APP内部打开，归于此类
	 * androidWap = 3：Android的M站，
	 * pc = 4：PC浏览器
	 * iosWechat = 5：IOS的微信打开
	 * androidWechat = 6：Android的微信打开
	 * */
	var platforms = yueWenActivity.platforms;

	/*
	 * 活动状态
	 * 0：正常，表示活动正在进行
	 * 1：活动未开始
	 * 2：活动已结束
	 * */
	var activityStatus = yueWenActivity.activityStatus;

	/*
	*
	* */
	var mBox = yueWenActivity.mBox;


	//活动的JS，第一步，要设置config，该步骤，必须要执行
	//不支持重复定义，所以请一次定义好该对象
	yueWenActivity.setConfig($.extend(config,{

		//容器，事件委托的父级元素，最好这里不要变化
		wrapper : wrapper,

		//分享相关的，用于微信分享和APP的分享
		shareOption : {
			//微信公众号
			id : "qidianzhongwenwang",
			//分享的标题
			title : config.userInfo.nickName+"邀您玩《吃豆大作战》",
			//分享出去的内容
			desc : "我在吃豆大作战中打败了"+Math.ceil((config.userInfo.score || 0)*100/320)+"%的人，快来组团大吃四方吧！",
			//分享出去的链接
			link : "http://"+domainPrefix+"activity.qidian.com/2016/58263115",
			//分享出去的icon地址，该图片请注意，
			img_url : config.shareImg,

			//分享成功的回调
			success :_weixinShareSucc
		},

		//弹窗提示的几个默认的提示信息，这几个属性，请务必设置
		tips : {

			//活动未开始时，提示该条信息
			unBegin : {
				icon : "",
				title : "<div class ='gray-title rel'>尚未开始<i class = 'title-icon title-lose'></i></div>",
				content : '<div class = "pop-sys-msg">活动尚未开启</div>',
				btns : {
					leftBtn : {
						name : "好的",
						type : "closePop"
					}
				}
			},


			//活动已结束时，提示该条信息
			hasEnd : {
				icon : "",
				title : "<div class ='gray-title rel'>已结束<i class = 'title-icon title-lose'></i></div>",
				content : '<div class = "pop-sys-msg">活动已结束</div>',
				btns : {
					leftBtn : {
						name : "好的",
						type : "closePop"
					}
				}
			},

			//一些系统的错误提示
			//内容区域请务必使用"{{msg}}"代替，之后调用该方法时，这部分内容，会根据内容被替换掉的。
			sysError : {
				icon : "",
				title : "<div class ='gray-title rel'>非常抱歉<i class = 'title-icon title-lose'></i></div>",
				content : "<div class = 'pop-sys-msg c-008ee3'>{{msg}}</div>",
				btns : {
					leftBtn : {
						name : "返回游戏",
						type : "closePop"
					}
				}
			}


		},

		//下载APP相关的链接
		downAppUrl : {
			//Mobile端的地址：
			mobile : "http://pages.book.qq.com/pages/qidian/qddown/qdreader.htm",

			//PC端的地址：
			pc : "http://www.yuewen.com/app.html#appqd"
		}


	}));

	//初始化事件
	initObject = yueWenActivity.initActivity();

	var wrapperClickEvent = initObject.wrapperClickEvent,
		tips = initObject.tips,
		_activityStatus = initObject.activityStatus,
		sysError = initObject.sysError;

	//一个BUG，认为是jQuery的BUG
	//IOS系统下，在某些情况下，事件委托不会被触发，所以这里必须再绑一层事件才可以。
	//先这样解决这个问题，慢慢研究一下源码。
	(function(){
		$("#wrapper").on("click",function(){});
		$("#pop").on("click",function(){});
	})();

	//通过分享和点击下载链接，
	function _getMoreLife(type){
		var ajaxOption = {
			url : "ajax/AutumnTraining/getMoreLife",
			success : _ajaxSucc,
			error : _ajaxErr
		};

		//操作成功
		function _ajaxSucc(json){

			if(json.code != "0"){
				return "";
			}

			var life = json.data.life;

			pacmanGame.setGameLife(life);
		}

		//失败不做任何处理
		function _ajaxErr(){}

		_getMoreLife = function(type){
			ajaxOption.data = "shareType="+type;

			wrapper.yuewenAjax(ajaxOption);

		}

		_getMoreLife(type);

	}

	//微信分享结果
	function _weixinShareSucc(res){
		//xxx:ok，表示成功
		var errMsg = res.errMsg;

		if(errMsg.indexOf(":ok") != -1){
			_getMoreLife("share");
		}
	}

	//下载APP的接口

	function _downAppNew(){
		_getMoreLife("down");

		setTimeout(yueWenActivity.downApp(),300);
	}
	wrapperClickEvent.add("downAppNew",_downAppNew);

	//一些公用提示
	(function(){
		//所有的机会已经使用完时，提示这个
		tips.meiyoujihui = {
			icon : "",
			title : "<div class ='gray-title rel'>没机会啦<i class = 'title-icon title-lose'></i></div>",
			content : '<div class = "pop-sys-msg c-008ee3">分享活动页 或 下载升级版<br/>即可获得更多游戏机会！</div>',
			btns : {
				leftBtn : {
					type : "closePop",
					name : "返回游戏"
				}
			}
		};

		//关闭弹窗
		wrapperClickEvent.add("closePop",mBox.hide);

	})();

	//限制只在微信内部使用
	function _weixinLimit(){
		var uA = config.uA;
		if(uA != platforms.iosWechat && uA != platforms.androidWechat){
			tips.justWeixin = {
				icon : "",
				title : "<div class ='gray-title rel'>非常抱歉<i class = 'title-icon title-lose'></i></div>",
				content : '<div class = "pop-sys-msg c-008ee3">活动只能在微信内部参与哦~</div>',
				btns : {
					leftBtn : {
						type : "closePop",
						name : "知道了"
					}
				}
			};
			_weixinLimit = function(){
				mBox.custom(tips.justWeixin);
				return false;
			}
		}else{
			_weixinLimit = function(){
				return true;
			}
		}

		return _weixinLimit();

	}


	var pacmanGame = null;
	//游戏功能部分
	function _gameIndexPage(){

		//计时器模块--计算游戏时间
		var timerModal = (function(){
			var timer = 0,
				time = $("#time"),
				_secs = 0;

			function _trimTime(s){
				if(s - 10 < 0){
					return "0"+s;
				}else{
					return ""+s;
				}
			}
			function _format(){
				if(_secs == 0){
					return "00:00";
				}else if(_secs - 100*60*60 > 0){
					//如果时间特别长，超出99小时的话：
					return "99:59:59";
				}

				var secs = _secs,
					ii = _trimTime(secs%60),
					ss = "",
					hh = "",
					v = "";

				secs = (secs-ii)/60;

				//求分钟
				ss = _trimTime(secs%60);

				secs = (secs-ss)/60;

				//求小时
				hh = secs%60;

				if(hh){
					v += _trimTime(hh)+":"
				}

				return v+ss+":"+ii;

			}

			function change() {
				_secs++;
				time.html(_format());
			}

			//开始计时
			function _begin(){
				timer = setInterval(change,1000);
			}

			//初始化
			function _reset(){
				_secs = 0;
				time.html(_format());
				_begin();
			}

			//停止
			function _stop(){
				clearInterval(timer);
			}

			//获取时间
			function _getSecs(){
				return _secs;
			}

			return {
				getSecs : _getSecs,
				reset : _reset,
				stop : _stop,
				begin : _begin
			};


		})();

		//分数的处理模块
		var scoreModal = (function(){
			var socre = $("#score"),
				_SCORE = 0;

			function _format(){
				if(!_SCORE){
					return "000";
				}

				if(_SCORE - 10 < 0) {
					return "00"+_SCORE;
				}else if(_SCORE - 100 < 0){
					return "0"+_SCORE;
				}else {
					return ""+_SCORE;
				}
			}

			function _reset(){
				_SCORE = 0;
				socre.html(_format());
			}

			function _setScore(v){
				if(isNaN(v)){
					return "";
				}

				_SCORE = v;
				socre.html(_format());
			}

			function _getScore(){
				return _SCORE;
			}

			return {
				reset : _reset,
				set : _setScore,
				get : _getScore
			};

		})();

		var lifeModal = (function(){
			var life = $("#life"),
				_LIFE = 0;

			function _format(){
				if(!_LIFE){
					return "000";
				}

				if(_LIFE - 10 < 0) {
					return "00"+_LIFE;
				}else if(_LIFE - 100 < 0){
					return "0"+_LIFE;
				}else {
					return ""+_LIFE;
				}
			}

			function _reset(){
				_LIFE = 0;
				life.html(_format());
			}

			function _set(v){
				if(isNaN(v)){
					return "";
				}

				_LIFE = v;
				life.html(_format());
			}

			function _get(){
				return _LIFE;
			}

			return {
				reset : _reset,
				set : _set,
				get : _get
			};
		})();


		var canvasArea = $(".canvas-area");

		//显示内容的切换
		(function(){
			var statusCode = {
					//显示游戏界面，正在玩
					"gameing" : "",

					//显示未开始的界面，还没有开始玩
					"unbegin" : 1,

					//显示活动说明界面
					"detail" : 2,

					//我的战绩
					"myScore" : 3,

					//排行
					"myRank" : 4

				},
				preCode = "";

			//切换显示内容时，需要暂停和重启的操作
			function _stopGame(){
				pacmanGame.gameChangeRunStatus(2);
				console.log("stop game");
			}

			//继续游戏
			function _goOnGame(){
				var flag = true;

				if(pacmanGame.isGameOver()){
					flag = _reStart();
				}else{
					pacmanGame.gameChangeRunStatus(1);
				}

				return flag;

			}

			//重新开始游戏
			function _reStart(){
				return pacmanGame.gameBegin();
			}

			//打开活动说明
			function _showDetail(){
				var curCode = canvasArea.attr("data-status");

				if(curCode == statusCode.detail){
					return "";
				}

				//停止游戏
				_stopGame();

				preCode = curCode;

				canvasArea.attr("data-status",statusCode.detail);

			}
			wrapperClickEvent.add("openActivityDetail",_showDetail);

			//关闭活动说明
			function _hideDetail(){
				var curCode = canvasArea.attr("data-status") || "",
					flag = true;

				if(curCode == preCode){
					return "";
				}

				if(preCode != statusCode.unbegin && preCode != statusCode.myScore && preCode != statusCode.myRank){
					//恢复游戏状态
					flag = _goOnGame();
				}

				if(flag){
					canvasArea.attr("data-status",preCode);
					preCode = curCode;
				}

			}
			wrapperClickEvent.add("closeDetail",_hideDetail);

			//查看战绩
			function _myScores(e){

				e.preventDefault();

				if(!_activityStatus()){
					return ""
				}

				var curCode = canvasArea.attr("data-status") || "";

				if(curCode == preCode){
					return "";
				}

				//停止游戏
				_stopGame();

				canvasArea.attr("data-status",statusCode.myScore);

				preCode = curCode;
			}
			wrapperClickEvent.add("myHistory",_myScores);

			//游戏的开始
			function _myTab(){
				var curCode = canvasArea.attr("data-status"),
					status = $(this).attr("data-status");

				if(curCode == status){
					return "";
				}

				if(status == statusCode.myRank){
					_loadMyRank();
				}

				preCode = curCode;

				canvasArea.attr("data-status",status);

			}

			wrapperClickEvent.add("myTab",_myTab);

			//返回游戏
			function _tryToPlayGame(){

				if(!_activityStatus()){
					return ""
				}

				var life = config.life - 0,
					curCode = "";
					flag = true;

				if(life <= 0 && pacmanGame.isGameOver()){
					//表示没有机会了
					mBox.custom(tips.meiyoujihui);
					return "";
				}

				//恢复游戏状态
				flag = _goOnGame();

				if(!flag){
					return "";
				}

				curCode = canvasArea.attr("data-status");

				if(curCode == preCode){
					return "";
				}

				preCode = curCode;

				canvasArea.attr("data-status",statusCode.gameing);
				//判断是否正在玩着。
			}
			wrapperClickEvent.add("tryToPlayGame",_tryToPlayGame);


			//游戏的开始
			function _beiginGame(){
				if(!_activityStatus()){
					return ""
				}

				var flag = _reStart();

				if(flag){
					canvasArea.attr("data-status",statusCode.gameing);

					preCode = -1;
				}

			}

			wrapperClickEvent.add("beiginGame",_beiginGame);

		})();


		//游戏结束之后，重新设置微信分享时的标题
		function _wxShare(score){
			var shareOption = config.shareOption,
				desc = "我在吃豆大作战中打败了"+Math.ceil((score || 0)*100/320)+"%的人，快来组团大吃四方吧！";

			yueWenActivity.wxShare.reConfig(shareOption.title, shareOption.link, shareOption.img_url, desc,shareOption.success);

		}


		function gameOverAjax(data){

			var submitAjax = {
				url : "ajax/AutumnTraining/gameOver",
				success : _ajaxSucc,
				error : _ajaxErr
				},
				btns = $(".my-history");

			tips.chongxintijiao = {
				icon : "",
				title : "<div class ='gray-title rel'>网络出错<i class = 'title-icon title-lose'></i></div>",
				content : '<div class = "pop-sys-msg c-008ee3">网络出错，您的成绩提交失败！</div>',
				btns : {
					leftBtn : {
						type : "closePop",
						name : "返回游戏"
					},
					rightBtn : {
						type : "gameResultSubmitAgain",
						name : "再试一次"
					}
				}
			};

			function _fillData(data){
				var content = $(".cur-result"),
					thisGameScore = $("#thisGameScore"),
					bestGameScore = $("#bestGameScore"),
					curBtn = content.find(".cur-btn"),
					curGetChange = content.find(".cur-get-change");

				function _fillData(data){

					//如果数据中，有生命次数的数据
					if(("life" in data) && data.life != config.life){
						pacmanGame.setGameLife(data.life);
					}

					//设置本次的得分
					if("lastScore" in data){
						_wxShare(data.lastScore);
						thisGameScore.html((data.lastScore || "0")+"分");
					}

					//设置本次的得分
					if("bestScore" in data){
						bestGameScore.html((data.bestScore || "0")+"分");
					}

					//表示没有机会了
					if(config.life - 0 <= 0){
						curBtn.html("没机会了");
						curGetChange.removeClass("dn");
					}else{
						curBtn.html("再来一次");
						curGetChange.addClass("dn");
					}

					//设置最后的领取奖励的部分
					setFinalBtn(data.rewardState);

				}

				_fillData(data);
			}

			function _ajaxSucc(json) {

				var data = json.data;

				if(json.code != "0"){
					sysError(json.msg);
					return "";
				}

				if(data && (typeof data == "object")){
					_fillData(data);
				}

			}

			//请求失败
			function _ajaxErr(){
				mBox.custom(tips.chongxintijiao);
			}


			gameOverAjax = function (data){
				submitAjax.data = data;

				//提交
				canvasArea.yuewenAjax(submitAjax);

				btns.trigger("click");
				_fillData(data);

			}

			gameOverAjax(data);

			//提交失败时，继续提交的按钮
			function _submitAgain(){
				mBox.hide();
				gameOverAjax(submitAjax.data);
			}
			wrapperClickEvent.add("gameResultSubmitAgain",_submitAgain);

		}

		//吃豆游戏区域
		pacmanGame = (function(){
			var _DATA = [		//地图数据
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
					[1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
					[1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
					[1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
					[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					[1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
					[1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1],
					[1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
					[1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
					[1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
					[1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1],
					[1,1,1,1,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,1,1,1,1],
					[1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1],
					[0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0],
					[1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1],
					[1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
					[1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1],
					[1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
					[1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1],
					[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
					[1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
					[1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
					[1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1],
					[1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
					[1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1],
					[1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1],
					[1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
					[1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1],
					[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
				],
				_COS = [1,0,-1,0],
				_SIN = [0,1,0,-1],
				_COLOR = ['#F00','#F93','#0CF','#F9C'],//红,橙,
				_LIFE = 3,      //玩家的性命条数
				_SCORE = 0,		//得分
				_id = "canvas", //默认的canvas元素的ID
				_npcNum = 4,    //NPC的个数
				_config = _initOption(),
				game = null,
				stage = null,
				canvas = $("#"+_id),
				_pacmanGame = null,
				isGaming = false;

			//初始化一些信息，尺寸等
			function _initOption(){
				var canvas = $("#"+_id),
					canvasArea = canvas.parent(),
					o = {},
					xLength = _DATA[0].length,
					ow = canvasArea.width(),
					baseWidth = 750;

				//设置canvas区域的宽高，按宽度等比设置高度
				canvas[0].width = ow;
				canvas[0].height = ow*1.1;

				//值必须为整数值，地图每一个元素区域的大学
				o.spSize = Math.floor(ow/(xLength*2))*2;

				//iconSize 表示NPC，豆人的大小
				o.iconSize = Math.floor(o.spSize*1.5/2)*2;

				//地图开始画的左边距和上边距
				o.mapLeft = Math.floor((ow - o.spSize*xLength)/2);
				o.mapTop = 0;

				//NPM的速度
				//o.npmSpeed = Math.floor(o.spSize*0.25)/10;
				o.npmSpeed = 0.5;

				//玩家的速度
				//o.playerSpeed = o.npmSpeed*2;
				o.playerSpeed = 1;

				return o;

			}

			//游戏主程序初始化
			function _initGamePage(){
				var map,
					goods,
					beans,
					player,
					times,
					items;

				stage = game.createStage({
					update:function(){
						var stage = this;
						if(stage.status==1){								//场景正常运行
							items.forEach(function(item){
								var dx = item.x-player.x;
								var dy = item.y-player.y;
								if(dx*dx+dy*dy<250&&item.status!=4){		//物体检测
									if(item.status==3){
										item.status = 4;
										_SCORE += 10;
									}else{
										stage.status = 3;
										stage.timeout = 30;
									}
								}
							});
							if(isGaming && JSON.stringify(beans.data).indexOf(0)<0){	//当没有物品的时候，进入结束画面
								_gameOver("success");
							}
						}else if(stage.status==3){		//场景暂停状态

							if(!stage.timeout){
								stage.status = "";
								if(isGaming){
									_gameOver("fail");
								}
							}
						}
					}
				});
				//绘制地图
				map = stage.createMap({
					x : _config.mapLeft,
					y : _config.mapTop,
					data : _DATA,
					cache : true,
					size : _config.spSize,
					draw:function(context){
						var y_length = this.y_length,
							x_length = this.x_length;

						for(var j=0; j<y_length; j++){
							for(var i=0; i<x_length; i++){
								var value = this.get(i,j);
								if(value){
									var code = 0;
									if(this.get(i,j-1)&&!(this.get(i-1,j-1)&&this.get(i+1,j-1)&&this.get(i-1,j)&&this.get(i+1,j))){
										if(j){
											code += 1000;
										}
									}
									if(this.get(i+1,j)&&!(this.get(i+1,j-1)&&this.get(i+1,j+1)&&this.get(i,j-1)&&this.get(i,j+1))){
										if(i<this.x_length-1){
											code += 100;
										}
									}
									if(this.get(i,j+1)&&!(this.get(i-1,j+1)&&this.get(i+1,j+1)&&this.get(i-1,j)&&this.get(i+1,j))){
										if(j<y_length-1){
											code += 10;
										}
									}
									if(this.get(i-1,j)&&!(this.get(i-1,j-1)&&this.get(i-1,j+1)&&this.get(i,j-1)&&this.get(i,j+1))){
										if(i){
											code += 1;
										}
									}
									if(code){
										context.lineWidth = 2;
										context.strokeStyle=value==2?"#FFF":"#09C";
										var pos = this.coord2position(i,j);
										switch(code){
											case 1100:
												context.beginPath();
												context.arc(pos.x+this.size/2,pos.y-this.size/2,this.size/2,.5*Math.PI,1*Math.PI,false);
												context.stroke();
												context.closePath();
												break;
											case 110:
												context.beginPath();
												context.arc(pos.x+this.size/2,pos.y+this.size/2,this.size/2,Math.PI,1.5*Math.PI,false);
												context.stroke();
												context.closePath();
												break;
											case 11:
												context.beginPath();
												context.arc(pos.x-this.size/2,pos.y+this.size/2,this.size/2,1.5*Math.PI,2*Math.PI,false);
												context.stroke();
												context.closePath();
												break;
											case 1001:
												context.beginPath();
												context.arc(pos.x-this.size/2,pos.y-this.size/2,this.size/2,0,.5*Math.PI,false);
												context.stroke();
												context.closePath();
												break;
											default:
												var arr = String.prototype.split.call(code,'');
												if(+arr.pop()){
													context.beginPath();
													context.moveTo(pos.x,pos.y);
													context.lineTo(pos.x-this.size/2,pos.y);
													context.stroke();
													context.closePath();
												}
												if(+arr.pop()){
													context.beginPath();
													context.moveTo(pos.x,pos.y);
													context.lineTo(pos.x,pos.y+this.size/2);
													context.stroke();
													context.closePath();
												}
												if(+arr.pop()){
													context.beginPath();
													context.moveTo(pos.x,pos.y);
													context.lineTo(pos.x+this.size/2,pos.y);
													context.stroke();
													context.closePath();
												}
												if(+arr.pop()){
													context.beginPath();
													context.moveTo(pos.x,pos.y);
													context.lineTo(pos.x,pos.y-this.size/2);
													context.stroke();
													context.closePath();
												}
										}
									}
								}
							}
						}
					}
				});


				//物品地图
				goods = {
					'1,3':1,
					'26,3':1,
					'1,23':1,
					'26,23':1
				};

				beans = stage.createMap({
					x:_config.mapLeft,
					y:_config.mapTop,
					data:_DATA,
					frames:8,
					size : _config.spSize,
					draw:function(context){
						for(var j=0; j<this.y_length; j++){
							for(var i=0; i<this.x_length; i++){
								if(!this.get(i,j)){
									var pos = this.coord2position(i,j);
									context.fillStyle = "#F5F5DC";
									if(goods[i+','+j]){
										context.beginPath();
										context.arc(pos.x,pos.y,3+this.times%2,0,2*Math.PI,true);
										context.fill();
										context.closePath();
									}else{
										context.fillRect(pos.x-2,pos.y-2,4,4);
									}
								}
							}
						}
					}
				});

				//NPC
				for(var i=0;i<_npcNum;i++){
					stage.createItem({
						width:_config.iconSize,
						height:_config.iconSize,
						orientation:3,
						color:_COLOR[i],
						location:map,
						coord:{x:12+i,y:14},
						vector:{x:12+i,y:14},
						type:2,
						frames:10,
						speed:_config.npmSpeed,
						timeout:Math.floor(Math.random()*120),
						update:function(){
							var new_map;
							if(this.status==3&&!this.timeout){
								this.status = 1;
							}
							if(!this.coord.offset){			//到达坐标中心时计算
								if(this.status==1){
									if(!this.timeout){			//定时器
										new_map = JSON.parse(JSON.stringify(map.data).replace(/2/g,0));
										var index = this.index;
										items.forEach(function(item){
											if(item.index!=index&&item.status==1){	//NPC将其它所有还处于正常状态的NPC当成一堵墙
												new_map[item.coord.y][item.coord.x]=1;
											}
										});
										this.path = map.finder({
											map:new_map,
											start:this.coord,
											end:player.coord
										});
										if(this.path.length){
											this.vector = this.path[0];
										}
									}
								}else if(this.status==3){
									new_map = JSON.parse(JSON.stringify(map.data).replace(/2/g,0));
									var index = this.index;
									items.forEach(function(item){
										if(item.index!=index){
											new_map[item.coord.y][item.coord.x]=1;
										}
									});
									this.path = map.finder({
										map:new_map,
										start:player.coord,
										end:this.coord,
										type:'next'
									});
									if(this.path.length){
										this.vector = this.path[Math.floor(Math.random()*this.path.length)];
									}
								}else if(this.status==4){
									new_map = JSON.parse(JSON.stringify(map.data).replace(/2/g,0));
									this.path = map.finder({
										map:new_map,
										start:this.coord,
										end:this._params.coord
									});
									if(this.path.length){
										this.vector = this.path[0];
									}else{
										this.status = 1;
									}
								}
								//是否转变方向
								if(this.vector.change){
									this.coord.x = this.vector.x;
									this.coord.y = this.vector.y;
									var pos = map.coord2position(this.coord.x,this.coord.y);
									this.x = pos.x;
									this.y = pos.y;
								}
								//方向判定
								if(this.vector.x>this.coord.x){
									this.orientation = 0;
								}else if(this.vector.x<this.coord.x){
									this.orientation = 2;
								}else if(this.vector.y>this.coord.y){
									this.orientation = 1;
								}else if(this.vector.y<this.coord.y){
									this.orientation = 3;
								}
							}
							this.x += this.speed*_COS[this.orientation];
							this.y += this.speed*_SIN[this.orientation];
						},
						draw:function(context){
							var isSick = false;
							if(this.status==3){
								isSick = this.timeout>80||this.times%2?true:false;
							}
							if(this.status!=4){
								context.fillStyle = isSick?'#BABABA':this.color;
								context.beginPath();
								context.arc(this.x,this.y,this.width*.5,0,Math.PI,true);
								switch(this.times%2){
									case 0:
										context.lineTo(this.x-this.width*.5,this.y+this.height*.4);
										context.quadraticCurveTo(this.x-this.width*.4,this.y+this.height*.5,this.x-this.width*.2,this.y+this.height*.3);
										context.quadraticCurveTo(this.x,this.y+this.height*.5,this.x+this.width*.2,this.y+this.height*.3);
										context.quadraticCurveTo(this.x+this.width*.4,this.y+this.height*.5,this.x+this.width*.5,this.y+this.height*.4);
										break;
									case 1:
										context.lineTo(this.x-this.width*.5,this.y+this.height*.3);
										context.quadraticCurveTo(this.x-this.width*.25,this.y+this.height*.5,this.x,this.y+this.height*.3);
										context.quadraticCurveTo(this.x+this.width*.25,this.y+this.height*.5,this.x+this.width*.5,this.y+this.height*.3);
										break;
								}
								context.fill();
								context.closePath();
							}
							context.fillStyle = '#FFF';
							if(isSick){
								context.beginPath();
								context.arc(this.x-this.width*.15,this.y-this.height*.21,this.width*.08,0,2*Math.PI,false);
								context.arc(this.x+this.width*.15,this.y-this.height*.21,this.width*.08,0,2*Math.PI,false);
								context.fill();
								context.closePath();
							}else{
								context.beginPath();
								context.arc(this.x-this.width*.15,this.y-this.height*.21,this.width*.12,0,2*Math.PI,false);
								context.arc(this.x+this.width*.15,this.y-this.height*.21,this.width*.12,0,2*Math.PI,false);
								context.fill();
								context.closePath();
								context.fillStyle = '#000';
								context.beginPath();
								context.arc(this.x-this.width*(.15-.04*_COS[this.orientation]),this.y-this.height*(.21-.04*_SIN[this.orientation]),this.width*.07,0,2*Math.PI,false);
								context.arc(this.x+this.width*(.15+.04*_COS[this.orientation]),this.y-this.height*(.21-.04*_SIN[this.orientation]),this.width*.07,0,2*Math.PI,false);
								context.fill();
								context.closePath();
							}
						}
					});

				}
				items = stage.getItemsByType(2);

				//主角
				player = stage.createItem({
					width:_config.iconSize,
					height:_config.iconSize,
					type:1,
					location:map,
					coord:{x:13.5,y:23},
					orientation:2,
					speed:_config.playerSpeed,
					frames:10,
					update:function(){
						var coord = this.coord;
						if(!coord.offset){
							if(typeof this.control.orientation!='undefined'){
								if(!map.get(coord.x+_COS[this.control.orientation],coord.y+_SIN[this.control.orientation])){
									this.orientation = this.control.orientation;
								}
							}
							this.control = {};
							var value = map.get(coord.x+_COS[this.orientation],coord.y+_SIN[this.orientation]);
							if(value==0){
								this.x += this.speed*_COS[this.orientation];
								this.y += this.speed*_SIN[this.orientation];
							}else if(value<0){
								this.x -= map.size*(map.x_length-1)*_COS[this.orientation];
								this.y -= map.size*(map.y_length-1)*_SIN[this.orientation];
							}
						}else{
							if(!beans.get(this.coord.x,this.coord.y)){	//吃豆
								_SCORE++;
								beans.set(this.coord.x,this.coord.y,1);
								if(goods[this.coord.x+','+this.coord.y]){	//吃到能量豆
									items.forEach(function(item){
										if(item.status==1||item.status==3){	//如果NPC为正常状态，则置为临时状态
											item.timeout = 450;
											item.status = 3;
										}
									});
								}

								_gameGetScore();
							}
							this.x += this.speed*_COS[this.orientation];
							this.y += this.speed*_SIN[this.orientation];
						}
					},
					draw:function(context){
						context.fillStyle = '#FFE600';
						context.beginPath();
						if(stage.status && stage.status!=3){	//玩家正常状态
							if(this.times%2){
								context.arc(this.x,this.y,this.width/2,(.5*this.orientation+.20)*Math.PI,(.5*this.orientation-.20)*Math.PI,false);
							}else{
								context.arc(this.x,this.y,this.width/2,(.5*this.orientation+.01)*Math.PI,(.5*this.orientation-.01)*Math.PI,false);
							}
						}else{	//玩家被吃
							if(stage.timeout) {
								context.arc(this.x,this.y,this.width/2,(.5*this.orientation+1-.02*stage.timeout)*Math.PI,(.5*this.orientation-1+.02*stage.timeout)*Math.PI,false);
							}
						}
						context.lineTo(this.x,this.y);
						context.closePath();
						context.fill();
					}
				});


				bindEvent(player);

			}

			//操作方法初始化
			function bindEvent(player){
				var touchObj = {
					x : 0,
					y : 0
				};

				function _disabledTouch(){
					return !isGaming || _isGameOver() || stage.status == 2;
				}

				//事件绑定
				stage.bind('keydown',function(e){
					switch(e.keyCode){
						case 13: //回车
						case 32: //空格
							this.status = this.status==2?1:2;
							break;
						case 39: //右
							player.control = {orientation:0};
							break;
						case 40: //下
							player.control = {orientation:1};
							break;
						case 37: //左
							player.control = {orientation:2};
							break;
						case 38: //上
							player.control = {orientation:3};
							break;
					}
				});

				function _resetTouchObj() {
					touchObj.x = "";
					touchObj.y = "";
				}

				//touchstart的时候，记录触摸的开始
				canvas.on('touchstart',function (e) {

					//可以滚动
					if(_disabledTouch()){
						return "";
					}

					var event = e.originalEvent || e,
						startTouch = (event.touches && event.touches[0]) || {};

					if (startTouch) {
						touchObj.x = startTouch.pageX || "";
						touchObj.y = startTouch.pageY || "";
					}else{
						_resetTouchObj();
					}

					e.preventDefault();
				});
				//阻止touchmove的默认滚动动作
				canvas.on('touchmove',function(e){
					//可以滚动
					if(_disabledTouch()){
						return "";
					}

					e.preventDefault();
				});
				//touchend的时候，计算滑动的方向
				canvas.on('touchend',function (e) {

					//可以滚动
					if(_disabledTouch()){
						return "";
					}

					e.preventDefault();
					var event = e.originalEvent || e,
						end = (event.changedTouches && event.changedTouches[0]) || null,
						dir = "";

					//两者都存在的时候，才认为是操作的正确，其他的时候，认为是无效的操作
					if(!end || touchObj.x === ""){
						return "";
					}

					var x = end.pageX - touchObj.x,
						y = end.pageY - touchObj.y,
						absx = Math.abs(x),
						absy = Math.abs(y);

					_resetTouchObj();

					//认为执行了一次点击操作，点击操作执行开始和暂停的操作
					if(absx < 10 && absy < 10) {
						return;
					}

					if(Math.abs(x) - Math.abs(y) > 0){
						if(x > 0){
							//向右
							dir = 0;
						}else{
							//向左
							dir = 2;
						}
					}else{
						if(y > 0){
							//向下
							dir = 1;
						}else{
							//向上
							dir = 3;
						}
					}

					//设置方向
					player.control = {orientation:dir};


				});

				//
				canvas.on("touchcancel",_resetTouchObj);
				//game.setStage(0);
			};

			//添加一个初始化的方法
			/*
			 * life : 3,
			 * 生命次数，默认值为3次
			 *
			 * */
			function _pacMan(options) {

				if (options && typeof options == "object") {

					if(!isNaN(options.life)){
						_LIFE = options.life - 0;
						delete options.life;
						_config.life = _LIFE;
					}

				} else {
					options = _config;
				}


				game = new GameEngine(_id, options);

				//游戏主程序初始化
				_initGamePage();

				game.init();

			}

			_pacMan({
				life:config.life
			});

			//游戏开始
			function _gameBegin(cb){

				if(!_LIFE){
					mBox.custom(tips.meiyoujihui);
					return false;
				}

				//沿着上次的继续玩
				//stage.resetItems();
				_LIFE--;

				config.life = _LIFE;

				//设置生命次数
				lifeModal.set(_LIFE);

				//分数初始化
				scoreModal.set(0);

				//时间初始化
				timerModal.reset();

				stage.reset();

				isGaming = true;

				return true;

			}

			//游戏暂停/重新开始
			function _gameChangeRunStatus(status){
				if(!isGaming){
					return "";
				}

				if(!status){
					if(stage.status == 2){
						status = 1;
					}else if(stage.status == 1){
						status = 2;
					}
				}

				if(status == 1){
					timerModal.begin();
				}else{
					timerModal.stop();
				}

				stage.status = status;

			}

			function _gameOver(type){
				//调用外部定义的gameOver的回调
				var data = {
					type : type,
					score : _SCORE,
					time : timerModal.getSecs()
				};

				isGaming = false;

				timerModal.stop();

				gameOverAjax(data);

				console.log("game over and show result!");
			}

			//当得分变动时
			function _gameGetScore(){
				if(isGaming){
					scoreModal.set(_SCORE);
				}
			}

			//获取玩家剩余次数，传值的话，是设置可玩的次数
			function _setGameLife(life){
				if(!isNaN(life)){
					_LIFE = life - 0;
				}

				config.life = _LIFE;

				//设置生命次数
				lifeModal.set(_LIFE);

			}

			//查看游戏的状态
			function _isGameOver(){
				console.log(stage.status);
				var status = stage.status;
				if(status == 3 || status == 0){
					return true;
				}else{
					return false;
				}
			}

			_pacmanGame = {
				//游戏开始
				gameBegin : _gameBegin,

				//游戏暂停
				gameChangeRunStatus : _gameChangeRunStatus,


				//获取可玩的生命次数
				setGameLife : _setGameLife,

				isGameOver : _isGameOver

			};


			return _pacmanGame;

		})();

	}

	//分享和关闭分享
	(function(){

		var shareGuide = $("#shareGuide");
		function _shareGame(){
			shareGuide.removeClass("dn");
		}
		wrapperClickEvent.add("shareGame",_shareGame);

		function _closeShareGuide(){
			shareGuide.addClass("dn");
		}
		wrapperClickEvent.add("closeShareGuide",_closeShareGuide);
	})();

	//更新通关排行榜
	function _loadMyRank(){

		var ajaxOption = {
				url : "ajax/AutumnTraining/myRank",
				success : _ajaxSucc,
				error : _ajaxErr,
				type : "get"
			},
			content = $(".game-rank"),
			rankItems = content.find(".rank-items"),
			myRankEle = $("#myRank");

		function _fillData(data){
			var myRank = data.myRank,
				topRank = data.rank,
				i = 0,
				len = topRank.length,
				one = "",
				html = "";

			if(myRank){
				myRankEle.html("我的排名："+data.myRank+"名 通过时间 "+data.myTime+"");
			}else{
				myRankEle.html("我的排名：您还没有通关哦");
			}

			for(i;i<len;i++){
				one = topRank[i];
				html += '<li class = "ovh">';
				html += '<div class = "rank-number">'+(i+1)+'</div>';
				html += '<div class = "rank-time">'+one.time+'</div>';
				html += '<div class = "rank-name ell">'+(one.nickname || "&nbsp;")+'</div>';
				html += '</li>';
			}

			rankItems.html(html);

		}

		function _ajaxSucc(json) {

			var code = json.code,
				data = json.data;

			if (code != "0") {
				sysError(json.msg);
				return "";
			}

			if(data && typeof data == "object"){
				_fillData(data);
			}
		}

		//请求失败
		function _ajaxErr(){
			sysError("网络不畅,请稍后重试!");
		}

		_loadMyRank = function(){
			content.yuewenAjax(ajaxOption);
			rankItems.html("<li class = 'tc mt10 mb10'>正在更新数据...</li>");
		}

		_loadMyRank();

	}

	//领取通关奖励
	var setFinalBtn = (function(){
		var fGSCode = {
				disable : "2",
				enable : "1",
				got : "0"
			},
			curFGCode = config.getReward,
			ajaxOption = {
				url : "ajax/AutumnTraining/getGift",
				success : _ajaxSucc,
				error : _ajaxErr,
				type : "get"
			},
			btn = $(".gift-btn"),
			isLogin = config.isLogin,
			giftDetail = $(".gift-detail"),
			giftCodeEle = $("#giftCode")

		//没有领取资格时
		tips.bugouzige = {
			icon : "",
			title : "<div class ='gray-title rel'>领取失败<i class = 'title-icon title-lose'></i></div>",
			content : '<div class = "pop-sys-msg c-008ee3">吃完所有豆子才算通关<br/>再玩一次就成功了！</div>',
			btns : {
				leftBtn : {
					type : "closePop",
					name : "返回游戏"
				}
			}
		};

		//已经领过了
		tips.lingguole = {
			icon : "",
			title : "<div class ='gray-title rel'>领过了<i class = 'title-icon title-lose'></i></div>",
			content : '<div class = "pop-sys-msg c-008ee3">您已经领过通关大奖了<br/>不能重复领取哦！</div>',
			btns : {
				leftBtn : {
					type : "closePop",
					name : "返回游戏"
				}
			}
		};

		//提示去绑定账号
		tips.haiweibangding = {
			icon : "",
			title : "<div class ='gray-title rel'>尚未绑定<i class = 'title-icon title-lose'></i></div>",
			content : '<div class = "pop-sys-msg c-008ee3">您还未绑定起点账号<br/>不能领取通关奖励！</div>',
			btns : {
				leftBtn : {
					type : "closePop",
					name : "返回游戏"
				},
				rightBtn : {
					type : "toBindQidian",
					name : "去绑定"
				}
			}
		};

		var succContent = ['<div class = "pop-sys-msg c-ffd75a">起点币已发放到绑定账户<br/>游戏奖励请下载 APP 兑换  <span class = "duihuanfangfa" data-click = "duihuanfangfa">兑换方法</span><br/>礼包码：','  <span class = "changanfuzhi">长按复制到剪贴板</span></div>'];
		//领取成功时的提示
		tips.lingquchenggong = {
			icon : "",
			title : "<div class ='win-title rel '>领取成功<i class = 'title-icon title-win'></i></div>",
			content : '',
			btns : {
				leftBtn : {
					type : "closePop",
					name : "返回游戏"
				},
				rightBtn : {
					type : "downLoadApp",
					name : "下载兑换"
				}
			}
		};


		//点击下载兑换时，执行的逻辑
		function _downLoadApp(){
			mBox.hide();
			yueWenActivity.downApp();
		}
		wrapperClickEvent.add("downLoadApp",_downLoadApp);

		var detailBtn = $(".activity-briefing");
		//兑换方法
		function _duihuanfangfa(){
			mBox.hide();
			detailBtn.trigger("click");
		}
		wrapperClickEvent.add("duihuanfangfa",_duihuanfangfa);

		//点击去绑定时
		function _toBindQidian(){
			mBox.hide();
			location.href = "http://m.qidian.com/mlogin.aspx";
		}
		wrapperClickEvent.add("toBindQidian",_toBindQidian);

		function _ajaxSucc(json) {

			var code = json.code,
				data = json.data;

			if (code != "0") {
				sysError(json.msg);
				return "";
			}

			_updateInfo(data.rewardState,data.finalGiftCode);

			tips.lingquchenggong.content = succContent[0]+data.finalGiftCode+succContent[1];
			mBox.custom(tips.lingquchenggong);

		}

		//请求失败
		function _ajaxErr(){
			sysError("网络不畅,请稍后重试!");
		}

		//点击领取时的状态
		function _getGiftBtn(){

			//限制只在微信内部使用
			if(_weixinLimit() == false){
				return "";
			}

			if(curFGCode == fGSCode.disable){
				//如果还没有领取资格
				mBox.custom(tips.bugouzige);
			}else if(curFGCode == fGSCode.got){
				//如果已经领过了
				mBox.custom(tips.lingguole);
			}else if(curFGCode == fGSCode.enable){
				//可以领取时
				if(isLogin === false){
					//表示还没有绑定账号，要先绑定账号
					mBox.custom(tips.haiweibangding);
				}else{
					btn.yuewenAjax(ajaxOption);
				}
			}
		}
		wrapperClickEvent.add("getGiftBtn",_getGiftBtn);

		function _updateInfo(code,giftCode){
			if(code === undefined){
				return "";
			}

			//更改按钮的显示状态
			curFGCode = code;

			giftCodeEle.html(giftCode || "");

			if(code == fGSCode.got){
				//已领取的时候
				btn.addClass("dn");
				giftDetail.removeClass("dn");
			}else{
				btn.removeClass("dn");
				giftDetail.addClass("dn");
				if(code != fGSCode.enable){
					btn.removeClass("active");
				}else if(code != fGSCode.disable){
					btn.addClass("active");
				}
			}
		}

		return _updateInfo;

	})();
	//成绩界面

	//根据配置信息，加载不同的页面
	_gameIndexPage();

}));
