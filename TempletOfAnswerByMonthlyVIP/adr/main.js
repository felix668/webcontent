/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	Vue.component('app', __webpack_require__(2));
	var root = new Vue({
		el: '#root',
		template: '<app></app>'
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	(function (doc, win) {
	    var docEl = doc.documentElement,
	        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	    function recalc() {
	        var clientWidth = docEl.clientWidth;
	        if (!clientWidth) return;
	        // console.log(clientWidth)
	        clientWidth = clientWidth > 750 ? 750 : clientWidth;
	        docEl.style.fontSize = clientWidth / 7.5 + 'px';
	    };
	    if (!doc.addEventListener) return;
	    win.addEventListener(resizeEvt, recalc, false);
	    doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(3);
	if (Object.keys(__vue_script__).some(function (key) {
	  return key !== "default" && key !== "__esModule";
	})) {
	  console.warn("[vue-loader] src/app.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(28);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-26f09ebc/app.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _data = __webpack_require__(4);

	var _data2 = _interopRequireDefault(_data);

	__webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			maskLoading: __webpack_require__(10),
			maskOver: __webpack_require__(16),
			maskAnswer: __webpack_require__(20),
			maskResult: __webpack_require__(25)
		},
		data: function data() {
			return {
				loading: true,
				over: false,
				answer: false,
				result: false,
				login: true,
				isvip: true,
				config: {
					name: '',
					bodybg: '',
					banner: '',
					card_bg: '',
					ft_color: '',
					red_ftcolor: '',
					answernum: 0,
					button: {
						btn_bg: '',
						btn_txt: [],
						font_color: '' },
					card: {
						selresulte: [],
						tonext: false
					},
					resultData: {},
					rule: {
						rule_tt: '',
						rule_suqfc: '',
						rule_suqbg: '',
						text: [],
						priv_tt: '',
						priv_img: '',
						priv_text: []
					}
				},
				btnstyle: {},
				rulestyle: {}
			};
		},
		methods: {
			initpage: function initpage() {
				var self = this;
				self.loading = false;
				self.config = _data2.default;
				$("body").css({ "background": "url(" + self.config.bodybg + ") 100% repeat-y", "background-size": "100% auto" });
				self.btnstyle = {
					color: self.config.button.font_color,
					backgroundImage: "url(" + self.config.button.btn_bg + ")"
				};
				self.rulestyle = {
					backgroundImage: "url(" + self.config.card_bg + ")"
				};
			},
			touchStart: function touchStart(e) {
				var self = this;
				self.$refs.login.style.backgroundPosition = "0 -1.2rem";
			},
			touchEnd: function touchEnd(e) {
				var self = this;
				self.$refs.login.style.backgroundPosition = "0 0";
			},
			dochange: function dochange() {
				var self = this;
				if (!self.login) {
					console.log("请登陆");
				} else if (!self.isvip) {
					console.log("去开通包月");
				} else {
					console.log("开始答题");
					self.answer = true;
					self.result = true;

					self.config.answernum = 0;

					var num = self.config.answernum - 1;
					for (var i = 0; i < num; i++) {
						$(".card").eq(i).css("display", "none");
					}
				}
			}
		},
		created: function created() {
			this.initpage();
		}
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {
		name: '包月活动', //标题
		bodybg: './images/bg.png', //背景图片
		banner: './images/banner.png', //banner图
		card_bg: './images/card_bg.png', //中间块背景图
		ft_color: '#8a5519',
		red_ftcolor: '#fd7258',
		button: { //登录按钮
			btn_bg: './images/btn_bg.png', //按钮背景图
			font_color: '#f9ebcd' },
		rule: {
			rule_tt: './images/rule_tt.png', //规则标题
			rule_suqfc: "#ffffff", //规则序列字体颜色
			rule_suqbg: "#6b4316", //规则序列背景色　
			text: [//规则
			'活动时间：2017年3月7日—3月13日；', '活动仅限包月VIP用户参与（体验卡开通、系统赠送的包月用户不算；', '用户做完题后，点击提交按钮，上传答案；每答对一题，获得5书券／阅券；', '活动期间，用户只能提交答案一次；', '安卓／iOS平台，奖励互通，不能重复领取。'],
			priv_img: './images/vipimg.jpg',
			priv_text: ['包月库内10万册书籍在线免费阅读', '非包月库存内书籍、看书听书8折优惠']
		},
		card: {
			card_tt: '每答对1道题，送5书券',
			quannum: 5,
			radio_bordcol: '#6b4316',
			radio_bgcol: '#fd7258',
			selresulte: [],
			tonext: false,
			btntobook: {
				btnbg: './images/gobook.png',
				ftcol: '#f9ebcd'
			},
			list: [{
				bid: '121',
				bookname: '书名1',
				answerName: '1. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult: [{
					answer: '2016年7月7日15点—7月15日啊索朗'
				}, {
					answer: '多吉哈萨克和打瞌睡叠好地为'
				}, {
					answer: '阿拉山口参加啊深刻检查'
				}, {
					answer: '阿安莎社卡刷卡后说'
				}]
			}, {
				bid: '122',
				bookname: '书名2',
				answerName: '2. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult: [{
					answer: '2016年7月7日15点—7月15日啊索朗'
				}, {
					answer: '多吉哈萨克和打瞌睡叠好地为'
				}, {
					answer: '阿拉山口参加啊深刻检查'
				}, {
					answer: '阿安莎社卡刷卡后说'
				}]
			}, {
				bid: '123',
				bookname: '书名3',
				answerName: '3. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult: [{
					answer: '2016年7月7日15点—7月15日啊索朗'
				}, {
					answer: '多吉哈萨克和打瞌睡叠好地为'
				}, {
					answer: '阿拉山口参加啊深刻检查'
				}, {
					answer: '阿安莎社卡刷卡后说'
				}]
			}, {
				bid: '124',
				bookname: '书名4',
				answerName: '4. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult: [{
					answer: '2016年7月7日15点—7月15日啊索朗'
				}, {
					answer: '多吉哈萨克和打瞌睡叠好地为'
				}, {
					answer: '阿拉山口参加啊深刻检查'
				}, {
					answer: '阿安莎社卡刷卡后说'
				}]
			}],
			nextbtn: {
				btnbg: './images/nextbg.png',
				ftcol: '#f9ebcd'
			}
		},
		resultData: {
			rewardimg: ['./images/quan.png', '{}'],
			resulenum: 3,
			qsbg: './images/resulttt.png',
			qsftcol: '#fcefd4',
			bnamecol: '#000000',
			bauthorcol: '#786e5d',
			resultbooks: [{
				bid: '223',
				author: '银子浩',
				bookname: '丈量世界',
				bookface: './images/bookface1.jpg'
			}, {
				bid: '221',
				author: '言七',
				bookname: '旅行摄影圣经',
				bookface: './images/bookface2.jpg'
			}]
		}
	};
	exports.default = data;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "body,div,p,h4,ul,li{margin:0;padding:0;}\nimg{border:0 none;vertical-align:middle;}\na{text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;}\n*{-webkit-tap-highlight-color:rgba(0,0,0,0)}\nli{ list-style:none;}\nem,i,span{ font-style:normal; font-weight: normal;}\nbody{font-family:\"Microsoft YaHei\",Helvetica,STHeiTi,sans-serif,sans-serif;-webkit-text-size-adjust:none; font-size: .24rem;background-repeat: repeat-y;  }\n/*===========main==========*/\n.banner{ display: block; width: 100%;}\n.btnbox{ position: relative; z-index: 1;  margin: .6rem auto .54rem; }\n.btn{ width: 5.98rem; height: 1.1rem;font-size: .36rem; text-align: center; line-height: 1rem; background-repeat: no-repeat; background-size: 100% auto; margin: 0 auto;}\n.notice{ position: absolute; left: 0 ;bottom:-.4rem; right: 0; font-size: .2rem; text-align: center; line-height: .4rem;}\n.rulebox{width: 6.34rem; padding: .28rem .28rem .4rem; margin: 0 auto; background-repeat:100% repeat-y; background-size:100% auto; border-radius: .1rem; }\n.rule .rule_tt{ width: 2.87rem; height: .36rem; display: block; margin:.22rem auto .4rem;}\n.rule li{ font-size: .28rem; line-height:.48rem; position: relative; z-index: 1; padding-left: .48rem; margin-bottom: .08rem}\n.rule li span{ position: absolute; left: 0; top: .09rem; width: .3rem; height: .3rem; text-align: center; line-height: .3rem; font-size: .24rem; border-radius: 100%;}\n.logo{ width: 2.3rem; height: .86rem; margin: .28rem auto; display: block;}\n.vip_privilege h4{ font-size: .28rem; margin:.22rem auto .4rem;}\n.vip_privilege img{ display: block; width: 6rem; margin: 0 auto .3rem;}\n.vip_privilege li{ font-size: .28rem; line-height: .48rem; margin: 0 0 .06rem;}\n/*============result============*/\n.resultpage{position: fixed; z-index: 11; left: 0; top: 0; width: 100%; height: 100%;}\n.resultbox{position: absolute; z-index: 1; left: .3rem; top: 1rem; right: .3rem; bottom:.7rem;border-radius: .1rem;}\n.resultbox img{  width: 2rem; display: block; margin: .6rem auto .3rem;}\n.resultbox h4{ text-align: center; font-size: .32rem; line-height: .48rem;}\n.answerok p{ font-size: .2rem;text-align: center;}\n.answerno{text-align: center; font-size: .32rem; line-height: .48rem; padding: 0 .34rem;}\n.quersour{ margin-top: .8rem; width: 6.32rem; height: .68rem; line-height: .6rem; font-size: .28rem; padding-left: .3rem; background-size: 100% 100%; background-repeat: no-repeat; margin-bottom: .6rem;}\n.Resbooklist{ padding: 0 .6rem; display: -webkit-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}\n.Resbooklist li{ text-align: center;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;}\n.Resbooklist li img{width: 1.68rem; height: 2.24rem; display: block; margin: 0 auto .14rem;}\n.Resbooklist li p{font-size: .24rem; line-height:.36rem; width: 1.68rem; margin: 0 auto;display: -webkit-box;-webkit-line-clamp: 1;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical; text-align: left;}\n.hua{ position: absolute; left: .24rem; top: 0;right:.24rem; height: .74rem; background: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../images/huawen.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") no-repeat; background-size:1.14rem auto;}\n.hua:after{content: ''; position: absolute; top: 0; right: 0; width: 1.14rem; height: .74rem;background: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../images/huawen.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") no-repeat; background-size:1.14rem auto; -webkit-transform:rotateY(180deg);}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(11);
	__vue_script__ = __webpack_require__(14);
	if (Object.keys(__vue_script__).some(function (key) {
	  return key !== "default" && key !== "__esModule";
	})) {
	  console.warn("[vue-loader] src/MaskLoading.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(15);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-44f9daab/MaskLoading.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {};
		},
		mounted: function mounted() {}
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskLoading\" _v-44f9daab=\"\">\n\t<p class=\"_text\" _v-44f9daab=\"\"><img :src=\"'images/loading.png'\" _v-44f9daab=\"\">正在加载...</p>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(17);
	__vue_template__ = __webpack_require__(19);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-592bb016/MaskOver.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"over\" _v-592bb016=\"\">\n\t<div class=\"over-c\" _v-592bb016=\"\">\n        <img :src=\"'images/over.png'\" alt=\"本期活动已结束\" _v-592bb016=\"\">\n        <p class=\"over-p1\" _v-592bb016=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-592bb016=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(21);
	__vue_script__ = __webpack_require__(23);
	if (Object.keys(__vue_script__).some(function (key) {
	  return key !== "default" && key !== "__esModule";
	})) {
	  console.warn("[vue-loader] src/MaskAnswer.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(24);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-90abb0c2/MaskAnswer.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-90abb0c2&scoped=true!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MaskAnswer.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=_v-90abb0c2&scoped=true!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MaskAnswer.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.answerpage[_v-90abb0c2]{ position: fixed; z-index: 111; left: 0; top: 0; width: 100%; height: 100%;}\n.answerbox[_v-90abb0c2]{position: absolute; left: .3rem; top: .7rem; right: .3rem; bottom: 1rem; }\n.answerbox .card[_v-90abb0c2]{ position: absolute; left: 0; bottom: 0; z-index: 10; width: 100%; height: 100%; box-shadow: 0 1px 18px rgba(47,26,41,.36);background-repeat:repeat-y; background-size:100% auto;border-radius: .1rem;-webkit-transform-origin:100% 0;}\n.answerbox .card.flyout[_v-90abb0c2]{-webkit-animation:flyout 2s linear forwards;}\n@-webkit-keyframes flyout {\n  0%{ -webkit-transform:translate(0) rotate(0deg);}\n  10%{ -webkit-transform:translate(0) rotate(45deg);}\n  100%{-webkit-transform:translate(-1000px) rotate(45deg);}\n}\n@keyframes flyout {\n  0%{ -webkit-transform:translate(0) rotate(0deg);}\n  10%{ -webkit-transform:translate(0) rotate(45deg);}\n  100%{-webkit-transform:translate(-1000px) rotate(45deg);}\n}\n/**/.answerbox .card[_v-90abb0c2]:nth-child(2){ z-index: 9; bottom: -.08rem;}\n.answerbox .card[_v-90abb0c2]:nth-child(3){ z-index: 8; bottom: -.16rem;}\n.answerbox .card[_v-90abb0c2]:nth-child(4){ z-index: 7; bottom: -.24rem;}\n.answerbox .card[_v-90abb0c2]:nth-child(5){ z-index: 6; bottom: -.3rem;}\n.answerbox .card .padbox[_v-90abb0c2]{padding: .4rem .28rem .4rem;}\n.answerbox .card h4[_v-90abb0c2]{ position: relative; z-index: 1; font-size: .28rem; line-height: .48rem; height: .48rem; text-align: center;}\n.answerbox .card h4 span[_v-90abb0c2]{position: absolute; display: block; right: 0.28rem; top: 0; height: .48rem; line-height: .48rem; font-size: .24rem;}\n.answerbox .card .answername[_v-90abb0c2]{ font-size: .28rem; line-height: .48rem; margin:.1rem 0 .3rem;}\n.gobook p[_v-90abb0c2],.nextanser p[_v-90abb0c2]{ font-size: .2rem; text-align: center; line-height: .6rem;}\n.btn_gobook[_v-90abb0c2]{ width: 5.98rem; height: .76rem; margin: 0 auto .8rem; line-height: .76rem; text-align: center; font-size: .36rem; background-repeat: no-repeat; background-size: 100% auto;}\n.title[_v-90abb0c2]{ font-size: .28rem ;line-height: .6rem; font-weight: bold;}\n.ansewerlist li[_v-90abb0c2]{position: relative; z-index: 1; padding-left: .6rem; line-height: .4rem; font-size: .28rem; margin: .24rem 0;/*display: -webkit-box;-webkit-line-clamp: 1;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical;*/}\n.ansewerlist li div[_v-90abb0c2]{ display: block; position:absolute; left:0; top: 0; width: .3rem; height: .3rem; border-radius: 100%; border:1px solid;}\n.nextanser[_v-90abb0c2]{position:absolute; bottom: .4rem; left: 0; right: 0;}\n.btn_next[_v-90abb0c2]{ width: 4.44rem; height: 1.04rem; margin: 0 auto; text-align: center; line-height: 1.04rem;background-repeat: no-repeat; background-size: 100% auto; font-size: .28rem;}\n", ""]);

	// exports


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  props: ['show', 'cardlist', 'cardbg', 'ftcol', 'redcol', 'answernum', 'resultshow'],
	  data: function data() {
	    return {
	      tips: ''
	    };
	  },
	  computed: {
	    styleObj: function styleObj() {
	      return {
	        cardStyle: {
	          backgroundImage: "url(" + this.cardbg + ")"
	        },
	        btnstyle: {
	          color: this.cardlist.btntobook.ftcol,
	          backgroundImage: "url(" + this.cardlist.btntobook.btnbg + ")"
	        },
	        radioStyle: {
	          borderColor: this.cardlist.radio_bordcol
	        },
	        nextStyle: {
	          color: this.cardlist.nextbtn.ftcol,
	          backgroundImage: "url(" + this.cardlist.nextbtn.btnbg + ")",
	          backgroundPosition: '0 -2.2rem'
	        },
	        moveStyle: {}
	      };
	    },
	    tipnum: function tipnum() {
	      var self = this;
	      var len = self.cardlist.list.length;
	      var arr = [];
	      for (var i = 0; i < len; i++) {
	        arr.push(Math.floor(Math.random() * 11) + 87);
	      }
	      return arr;
	    }
	  },
	  methods: {
	    touchStart: function touchStart(e) {
	      var $cur = $(e.currentTarget);
	      var self = this;
	      $cur.css("background-position", "0 -1rem");
	    },
	    touchEnd: function touchEnd(bid, e) {
	      var $cur = $(e.currentTarget);
	      var self = this;
	      $cur.css("background-position", "0 0");
	      console.log(bid);
	    },
	    selected: function selected(e) {
	      var $cur = $(e.currentTarget);
	      var self = this;
	      var ind = $cur.index();
	      var parind = $cur.parent().parent().parent().index();
	      $(".ansewerlist li").children('div').css("background", "transparent");
	      $cur.children('div').css("background", this.cardlist.radio_bgcol);
	      $cur.addClass("onact").siblings().removeClass('onact');
	      $(".btn_next").css("background-position", '0 0');
	      $(".btn_next").eq(parind).on('touchstart', function () {
	        $(this).css("background-position", '0 -1.1rem');
	      });
	      self.cardlist.tonext = true;
	    },
	    tonextAns: function tonextAns(e) {
	      var $cur = $(e.currentTarget);
	      var self = this;
	      var num = $cur.parent().parent().parent().index();
	      $cur.css("background-position", '0 0');
	      if (self.cardlist.tonext) {
	        var ind = $(".onact").index();
	        self.cardlist.selresulte.push(ind);
	        console.log(self.cardlist.selresulte);
	        self.cardlist.tonext = false;
	        self.toNextQuestion(num);
	      }
	    },
	    toNextQuestion: function toNextQuestion(ind) {
	      var self = this;
	      var len = self.cardlist.list.length - 1;
	      $(".answerbox>li").eq(ind).addClass('flyout');
	      $(".ansewerlist li").removeClass('onact');

	      console.log(self.cardlist.tonext);
	      var timer = null;
	      if (ind == len) {
	        console.log("go resulte");
	        timer = setTimeout(function () {
	          self.$parent.answer = false;
	          timer = null;
	        }, 1000);
	      }
	    }
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"answerpage\" _v-90abb0c2=\"\">\n\t    <div class=\"hua\" _v-90abb0c2=\"\"></div>\n\t\t<ul class=\"answerbox\" :style=\"{color:ftcol}\" _v-90abb0c2=\"\">\n\t\t\t<li v-for=\"index in 4\" :style=\"styleObj.cardStyle\" class=\"card\" _v-90abb0c2=\"\">\n\t\t\t\t<div class=\"padbox\" _v-90abb0c2=\"\">\n\t\t\t\t\t<h4 _v-90abb0c2=\"\"><span _v-90abb0c2=\"\"><em :style=\"{color:redcol}\" _v-90abb0c2=\"\">{{ index+1 }}</em>/{{ cardlist.list.length }}</span>{{ cardlist.card_tt }}</h4>\n\t\t\t\t\t<p class=\"answername\" _v-90abb0c2=\"\">{{ list.answerName }}</p>\n\t\t\t\t\t<div class=\"gobook\" _v-90abb0c2=\"\">\n\t\t\t\t\t\t<p :style=\"{color:redcol}\" _v-90abb0c2=\"\">{{ tipnum[index] }}%的人在《{{ list.bookname }}》1-5章找到答案</p>\n\t\t\t\t\t\t<div class=\"btn_gobook\" :style=\"styleObj.btnstyle\" @touchstart.stop=\"touchStart($event)\" @touchend.stop=\"touchEnd(list.bid,$event)\" _v-90abb0c2=\"\">书中找答案，再答题</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"title\" _v-90abb0c2=\"\">立即答题：</p>\n\t\t\t\t\t<ul class=\"ansewerlist\" _v-90abb0c2=\"\">\n\t\t\t\t\t\t<li v-for=\"list in list.answerResult\" @click=\"selected($event)\" _v-90abb0c2=\"\"><div :style=\"styleObj.radioStyle\" _v-90abb0c2=\"\"></div>{{ list.answer }}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"nextanser\" _v-90abb0c2=\"\">\n\t\t\t\t\t\t<p :style=\"{color:redcol}\" _v-90abb0c2=\"\">每道题只有1次答题机会，错过无奖励哦！</p>\n\t\t\t\t\t\t<div class=\"btn_next\" :style=\"styleObj.nextStyle\" @click=\"tonextAns($event)\" _v-90abb0c2=\"\">{{ index!=(cardlist.list.length-1)?'下一题':'完成答题'}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</li>\n\t   </ul>\n</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(26);
	if (Object.keys(__vue_script__).some(function (key) {
	  return key !== "default" && key !== "__esModule";
	})) {
	  console.warn("[vue-loader] src/MaskResult.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(27);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-5c64687e/MaskResult.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['cardbg', 'resultdata', 'ftcol', 'redcol'],
		data: function data() {
			return {};
		},
		computed: {
			styleObj: function styleObj() {
				return {
					sourttbg: {
						backgroundImage: "url(" + this.resultdata.qsbg + ")",
						color: this.resultdata.qsftcol
					},
					cardStyle: {
						backgroundImage: "url(" + this.cardbg + ")"
					}
				};
			}
		},
		methods: {
			gobook: function gobook(bid) {
				console.log(bid);
			}
		}

	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"resultpage\">\n\t<div class=\"hua\"></div>\n\t<div class=\"resultbox\" :style=\"styleObj.cardStyle\">\n\t    \n\t\t<img :src=\"resultdata.rewardimg[0]\" alr=\"jptu\" />\n\t\t<div class=\"answerok\" v-show=\"resultdata.resulenum!=0\">\n\t\t\t<h4 :style=\"{ color:redcol }\">恭喜你，答对{{ resultdata.resulenum }}道题，获得{{ resultdata.resulenum*5 }}书券 </h4>\n\t\t    <p :style=\"{ color:ftcol }\">书券已到账，可以去账户中查看</p>\n\t\t</div>\n\t\t<div class=\"answerno\" v-show=\"resultdata.resulenum==0\" :style=\"{ color:redcol }\">\n\t\t\t你错过一大波书券／阅券，<br>期待下次活动吧\n\t\t</div>\n\t\t<div class=\"quersour\" :style=\"styleObj.sourttbg\">题目来自于这2本书，感兴趣就去阅读吧！</div>\n\t\t<ul class=\"Resbooklist\">\n\t\t\t<li v-for=\"booklist in resultdata.resultbooks\">\n\t\t\t\t<img :src=\"booklist.bookface\" @click=\"gobook(booklist.bid)\" />\n\t\t\t\t<p :style=\"{color:resultdata.bnamecol}\">{{ booklist.bookname }}</p>\n\t\t\t\t<p :style=\"{color:resultdata.bauthorcol}\">{{ booklist.author }}</p>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\t\n</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\" v-show=\"!answer && !result\">\n\t\t<img :src=\"config.banner\" ale=\"banner\" class=\"banner\" />\n\t\t<div class=\"btnbox\">\n\t\t\t<div class=\"btn\" :style=\"btnstyle\" ref=\"login\" @click=\"dochange\" @touchstart.stop=\"touchStart($event)\" @touchend.stop=\"touchEnd($event)\">{{ !login ? '登录开始答题': !isvip ? '开通包月会员参与答题' : '开始答题'}}</div>\n\t\t\t<p class=\"notice\" :style=\"{color:config.red_ftcolor}\" v-show=\"!isvip && login\">体验卡开通的用户无法参与</p>\n\t\t\t<p class=\"notice\" :style=\"{color:config.red_ftcolor}\" v-show=\"!isvip && login && config.answernum==4\">同一账号已在iPhone设备上完成答题</p>\n\t\t</div>\n\t\t\n\t\t<div class=\"rulebox\"  :style=\"rulestyle\">\n\t\t\t<div class=\"rule\" v-show=\"!login || isvip\">\n\t\t\t\t<img class=\"rule_tt\" :src=\"config.rule.rule_tt\" alt=\"rules\" />\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"(item,index) in config.rule.text\" :style=\"{color:config.ft_color}\"><span :style=\"{color:config.rule.rule_suqfc,background:config.rule.rule_suqbg}\">{{ index+1 }}</span>{{ item }}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"vip_privilege\" v-show=\"!isvip && login\" :style=\"{color:config.ft_color}\">\n\t\t\t\t<h4>开通包月还可以：</h4>\n\t\t\t\t<img :src=\"config.rule.priv_img\" />\n\t\t\t\t<ul class=\"privilege\">\n\t\t\t\t\t<li v-for=\"(item,index) in config.rule.priv_text\">{{ index+1 }}.{{ item }}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<img class=\"logo\" :src=\"'images/logo.png'\" alt=\"logo\"/>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<mask-answer v-show=\"answer\" \n\t\t\t\t:show.sync=\"answer\"\n\t\t\t\t:cardlist=\"config.card\"\n\t\t\t\t:cardbg=\"config.card_bg\"\n\t\t\t\t:ftcol=\"config.ft_color\"\n\t\t\t\t:redcol=\"config.red_ftcolor\"\n\t\t\t\t:answernum=\"config.answernum\"\n\t></mask-answer>\n\t<mask-result v-show=\"result\" \n\t\t\t\t:cardbg=\"config.card_bg\"\n\t\t\t\t:resultdata='config.resultData'\n\t\t\t\t:ftcol=\"config.ft_color\"\n\t\t\t\t:redcol=\"config.red_ftcolor\"\t\t\t\n\t></mask-result>\n</div>\n";

/***/ }
/******/ ]);