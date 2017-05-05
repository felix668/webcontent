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
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-dbdde1c8/app.vue";
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			maskLoading: __webpack_require__(5),
			maskOver: __webpack_require__(12),
			maskAnswer: __webpack_require__(16),
			maskResult: __webpack_require__(21)
		},
		data: function data() {
			return {
				loading: true,
				over: false,
				urlis: 'adr',
				answer: false,
				result: false,
				login: true,
				isvip: true,
				config: {
					name: '',
					templatestyle: {},
					bodybg: '',
					banner: '',
					card_bg: '',
					ft_color: '',
					red_ftcolor: '',
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
				var el = document.querySelector('html');
				self.urlis = el.getAttribute('platform');
				if (self.urlis == 'adr') {
					Local.init();
				}
				self.loading = false;
				self.config = _data2.default;
				$("body").css({ "background": "url(" + self.config.pictureAndStyle.bodybg + ") 100% repeat-y", "background-size": "100% auto" });
				self.btnstyle = {
					color: _data2.default.pictureAndStyle.font_color,
					backgroundImage: "url(" + self.config.pictureAndStyle.btn_bg + ")"
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
					self.config.resultData.resulenum = 2;
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
		pictureAndStyle: {
			banner: '../adr/public/images/banner.png', //banner头图
			btn_bg: '../adr/public/images/btn_bg.png', //首页按钮背景图
			font_color: '#f9ebcd', //按钮字体颜色
			priv_img: '../adr/public/images/vipimg.jpg', //未开通包月特权图
			gobook_btnbg: '../adr/public/images/gobook.png', //提示按钮背景图
			gobookcolor: '#f9ebcd',
			btnbg: '../adr/public/images/nextbg.png', //提交答案按钮背景图
			btncolor: '#f9ebcd',
			bodybg: '../adr/public/images/bg.png' },
		rule: {
			text: [//规则
			'活动时间：2017年3月7日—3月13日；', '活动仅限包月VIP用户参与（体验卡开通、系统赠送的包月用户不算；', '用户做完题后，点击提交按钮，上传答案；每答对一题，获得5书券／阅券；', '活动期间，用户只能提交答案一次；', '安卓／iOS平台，奖励互通，不能重复领取。'],
			priv_text: ['包月库内10万册书籍在线免费阅读', '非包月库存内书籍、看书听书8折优惠']
		},
		card: {
			quannum: 5,
			selresulte: [],
			tonext: false,
			list: [{
				bid: '121',
				bookname: '书名1',
				answerName: '1. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult: ['2016年7月7日15点—7月15日啊索朗', '多吉哈萨克和打瞌睡叠好地为', '阿拉山口参加啊深刻检查', '阿安莎社卡刷卡后说']
			}, {
				bid: '122',
				bookname: '书名2',
				answerName: '2. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult: ['2016年7月7日15点—7月15日啊索朗', '多吉哈萨克和打瞌睡叠好地为', '阿拉山口参加啊深刻检查', '阿安莎社卡刷卡后说']
			}, {
				bid: '123',
				bookname: '书名3',
				answerName: '3. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult: ['2016年7月7日15点—7月15日啊索朗', '多吉哈萨克和打瞌睡叠好地为', '阿拉山口参加啊深刻检查', '阿安莎社卡刷卡后说']
			}, {
				bid: '124',
				bookname: '书名4',
				answerName: '4. 阿三的哈萨克的哈阿三了计划单列卡萨和大肆狂欢萨克多哈上来看萨列车',
				answerResult: ['2016年7月7日15点—7月15日啊索朗', '多吉哈萨克和打瞌睡叠好地为', '阿拉山口参加啊深刻检查', '阿安莎社卡刷卡后说']
			}]
		},
		resultData: {
			resulenum: 0,
			resultquan: '',
			resultbooks: [{
				bid: '223',
				author: '银子浩',
				bookname: '丈量世界',
				bookface: '../adr/public/images/bookface1.jpg'
			}, {
				bid: '221',
				author: '言七',
				bookname: '旅行摄影圣经',
				bookface: '../adr/public/images/bookface2.jpg'
			}]
		}
	};
	exports.default = data;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(6);
	__vue_script__ = __webpack_require__(10);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskLoading.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(11);
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
	    var id = "_v-1a53eb0b/MaskLoading.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */,
/* 8 */
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
/* 10 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {};
		},
		mounted: function mounted() {}
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskLoading\" _v-1a53eb0b=\"\">\n\t<p class=\"_text\" _v-1a53eb0b=\"\"><img :src=\"'../adr/public/images/loading.png'\" _v-1a53eb0b=\"\">正在加载...</p>\n</div>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(13);
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
	    var id = "_v-1ee0f395/MaskOver.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"over\" _v-1ee0f395=\"\">\n\t<div class=\"over-c\" _v-1ee0f395=\"\">\n        <img :src=\"'../adr/public/images/over.png'\" alt=\"本期活动已结束\" _v-1ee0f395=\"\">\n        <p class=\"over-p1\" _v-1ee0f395=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-1ee0f395=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(17);
	__vue_script__ = __webpack_require__(19);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskAnswer.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(20);
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
	    var id = "_v-009c8b3f/MaskAnswer.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-009c8b3f&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MaskAnswer.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-009c8b3f&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MaskAnswer.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.answerpage[_v-009c8b3f]{ position: fixed; z-index: 111; left: 0; top: 0; width: 100%; height: 100%;}\n.answerbox[_v-009c8b3f]{position: absolute; left: .3rem; top: .7rem; right: .3rem; bottom: 1rem; }\n.answerbox .card[_v-009c8b3f]{ position: absolute; left: 0; bottom: 0; z-index: 10; width: 100%; height: 100%; box-shadow: 0 1px 18px rgba(47,26,41,.36);background-repeat:repeat-y; background-size:100% auto;border-radius: .1rem;-webkit-transform-origin:100% 0;}\n.answerbox .card.flyout[_v-009c8b3f]{-webkit-animation:flyout 2s linear forwards;}\n@-webkit-keyframes flyout {\n  0%{ -webkit-transform:translate(0) rotate(0deg);}\n  10%{ -webkit-transform:translate(0) rotate(45deg);}\n  100%{-webkit-transform:translate(-1000px) rotate(45deg);}\n}\n@keyframes flyout {\n  0%{ -webkit-transform:translate(0) rotate(0deg);}\n  10%{ -webkit-transform:translate(0) rotate(45deg);}\n  100%{-webkit-transform:translate(-1000px) rotate(45deg);}\n}\n/**/.answerbox .card[_v-009c8b3f]:nth-child(2){ z-index: 9; bottom: -.08rem;}\n.answerbox .card[_v-009c8b3f]:nth-child(3){ z-index: 8; bottom: -.16rem;}\n.answerbox .card[_v-009c8b3f]:nth-child(4){ z-index: 7; bottom: -.24rem;}\n.answerbox .card[_v-009c8b3f]:nth-child(5){ z-index: 6; bottom: -.3rem;}\n.answerbox .card .padbox[_v-009c8b3f]{padding: .4rem .28rem .4rem;}\n.answerbox .card h4[_v-009c8b3f]{ position: relative; z-index: 1; font-size: .28rem; line-height: .48rem; height: .48rem; text-align: center;}\n.answerbox .card h4 span[_v-009c8b3f]{position: absolute; display: block; right: 0.28rem; top: 0; height: .48rem; line-height: .48rem; font-size: .24rem;}\n.answerbox .card h4 span em[_v-009c8b3f]{ color: #fd7258; }\n.answerbox .card .answername[_v-009c8b3f]{ font-size: .28rem; line-height: .48rem; margin:.1rem 0 .3rem;}\n.gobook p[_v-009c8b3f],.nextanser p[_v-009c8b3f]{ font-size: .2rem; text-align: center; line-height: .6rem;color: #fd7258;}\n.btn_gobook[_v-009c8b3f]{ width: 5.98rem; height: .76rem; margin: 0 auto .8rem; line-height: .76rem; text-align: center; font-size: .36rem; background-repeat: no-repeat; background-size: 100% auto;}\n.title[_v-009c8b3f]{ font-size: .28rem ;line-height: .6rem; font-weight: bold;}\n.ansewerlist li[_v-009c8b3f]{position: relative; z-index: 1; padding-left: .6rem; line-height: .4rem; font-size: .28rem; margin: .24rem 0;/*display: -webkit-box;-webkit-line-clamp: 1;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical;*/}\n.ansewerlist li div[_v-009c8b3f]{ display: block; position:absolute; left:0; top: 0; width: .3rem; height: .3rem; border-radius: 100%; border:#6b4316 1px solid; }\n.nextanser[_v-009c8b3f]{position:absolute; bottom: .4rem; left: 0; right: 0;}\n.btn_next[_v-009c8b3f]{ width: 4.44rem; height: 1.04rem; margin: 0 auto; text-align: center; line-height: 1.04rem;background-repeat: no-repeat; background-size: 100% auto; font-size: .28rem;}\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  props: ['show', 'cardlist', 'answerstyle', 'answernum', 'resultshow', 'urlis'],
	  data: function data() {
	    return {
	      tips: ''
	    };
	  },
	  computed: {
	    styleObj: function styleObj() {
	      return {
	        btnstyle: {
	          color: this.answerstyle.gobookcolor,
	          backgroundImage: "url(" + this.answerstyle.gobook_btnbg + ")"
	        },
	        nextStyle: {
	          color: this.answerstyle.btncolor,
	          backgroundImage: "url(" + this.answerstyle.btnbg + ")",
	          backgroundPosition: '0 -2.2rem'
	        }
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
	      $cur.children('div').css("background", "#fd7258");
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
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"answerpage\" _v-009c8b3f=\"\">\n\t    <div class=\"hua\" _v-009c8b3f=\"\"></div>\n\t\t<ul class=\"answerbox\" _v-009c8b3f=\"\">\n\t\t\t<li v-for=\"(item,index) in cardlist.list\" class=\"card\" _v-009c8b3f=\"\">\n\t\t\t\t<div class=\"padbox\" _v-009c8b3f=\"\">\n\t\t\t\t\t<h4 _v-009c8b3f=\"\"><span _v-009c8b3f=\"\"><em _v-009c8b3f=\"\">{{ index+1 }}</em>/{{ cardlist.list.length }}</span>每答对1道题，送{{ cardlist.quannum }}{{ urlis=='adr'?'书券':'阅券' }}</h4>\n\t\t\t\t\t<p class=\"answername\" _v-009c8b3f=\"\">{{ item.answerName }}</p>\n\t\t\t\t\t<div class=\"gobook\" _v-009c8b3f=\"\">\n\t\t\t\t\t\t<p _v-009c8b3f=\"\">{{ tipnum[index] }}%的人在《{{ item.bookname }}》1-5章找到答案</p>\n\t\t\t\t\t\t<div class=\"btn_gobook\" :style=\"styleObj.btnstyle\" @touchstart.stop=\"touchStart($event)\" @touchend.stop=\"touchEnd(item.bid,$event)\" _v-009c8b3f=\"\">书中找答案，再答题</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"title\" _v-009c8b3f=\"\">立即答题：</p>\n\t\t\t\t\t<ul class=\"ansewerlist\" _v-009c8b3f=\"\">\n\t\t\t\t\t\t<li v-for=\"list in item.answerResult\" @click=\"selected($event)\" _v-009c8b3f=\"\"><div class=\"radio\" _v-009c8b3f=\"\"></div>{{ list }}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"nextanser\" _v-009c8b3f=\"\">\n\t\t\t\t\t\t<p _v-009c8b3f=\"\">每道题只有1次答题机会，错过无奖励哦！</p>\n\t\t\t\t\t\t<div class=\"btn_next\" :style=\"styleObj.nextStyle\" @click=\"tonextAns($event)\" _v-009c8b3f=\"\">{{ index!=(cardlist.list.length-1)?'下一题':'完成答题'}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</li>\n\t   </ul>\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(22);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskResult.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(23);
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
	    var id = "_v-b55267c4/MaskResult.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['resultdata', 'quannum'],
		data: function data() {
			return {};
		},
		computed: {
			styleObj: function styleObj() {
				return {
					sourttbg: {
						backgroundImage: "url(" + this.resultstyle.qsbg + ")",
						color: this.resultstyle.qsftcol
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
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"resultpage\">\n\t<div class=\"hua\"></div>\n\t<div class=\"resultbox\">\n\t\t<img :src=\"resultdata.resulenum==0?'../adr/public/images/noquan.png':'../adr/public/images/quan.png'\" alr=\"jptu\" />\n\t\t<div class=\"answerok\" v-show=\"resultdata.resulenum!=0\">\n\t\t\t<h4>恭喜你，答对{{ resultdata.resulenum }}道题，获得{{ resultdata.resulenum*quannum }}书券 </h4>\n\t\t    <p>书券已到账，可以去账户中查看</p>\n\t\t</div>\n\t\t<div class=\"answerno\" v-show=\"resultdata.resulenum==0\">\n\t\t\t你错过一大波书券／阅券，<br>期待下次活动吧\n\t\t</div>\n\t\t<div class=\"quersour\">题目来自于这2本书，感兴趣就去阅读吧！</div>\n\t\t<ul class=\"Resbooklist\">\n\t\t\t<li v-for=\"booklist in resultdata.resultbooks\">\n\t\t\t\t<img :src=\"booklist.bookface\" @click=\"gobook(booklist.bid)\" />\n\t\t\t\t<p class=\"bookname\">{{ booklist.bookname }}</p>\n\t\t\t\t<p>{{ booklist.author }}</p>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\t\n</div>\n";

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\" v-show=\"!answer && !result\">\n\t\t<img :src=\"config.pictureAndStyle.banner\" ale=\"banner\" class=\"banner\" />\n\t\t<div class=\"btnbox\">\n\t\t\t<div class=\"btn\" :style=\"btnstyle\" ref=\"login\" @click=\"dochange\" @touchstart.stop=\"touchStart($event)\" @touchend.stop=\"touchEnd($event)\">{{ !login ? '登录开始答题': !isvip ? '开通包月会员参与答题' : '开始答题'}}</div>\n\t\t\t<p class=\"notice\" :style=\"{color:config.pictureAndStyle.red_ftcolor}\" v-show=\"!isvip && login\">体验卡开通的用户无法参与</p>\n\t\t\t<p class=\"notice\" :style=\"{color:config.pictureAndStyle.red_ftcolor}\" v-show=\"!isvip && login && config.answernum==4\">同一账号已在iPhone设备上完成答题</p>\n\t\t</div>\n\t\t\n\t\t<div class=\"rulebox\">\n\t\t\t<div class=\"rule\" v-show=\"!login || isvip\">\n\t\t\t\t<img class=\"rule_tt\" :src=\"'../adr/public/images/rule_tt.png'\" alt=\"rules\" />\n\t\t\t\t<ul>\n\t\t\t\t\t<li v-for=\"(item,index) in config.rule.text\"><span>{{ index+1 }}</span>{{ item }}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"vip_privilege\" v-show=\"!isvip && login\">\n\t\t\t\t<h4>开通包月还可以：</h4>\n\t\t\t\t<img :src=\"config.pictureAndStyle.priv_img\" />\n\t\t\t\t<ul class=\"privilege\">\n\t\t\t\t\t<li v-for=\"(item,index) in config.rule.priv_text\">{{ index+1 }}.{{ item }}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<img class=\"logo\" :src=\"'../adr/public/images/logo.png'\" alt=\"logo\"/>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<mask-answer v-show=\"answer\" \n\t\t\t\t:show.sync=\"answer\"\n\t\t\t\t:answerstyle=\"config.pictureAndStyle\"\n\t\t\t\t:cardlist=\"config.card\"\n\t\t\t\t:answernum=\"config.answernum\"\n\t\t\t\t:urlis=\"urlis\"\n\t></mask-answer>\n\t<mask-result v-show=\"result\"\n\t\t\t\t:quannum=\"config.card.quannum\"\n\t\t\t\t:resultdata='config.resultData'\t\t\t\n\t></mask-result>\n</div>\n";

/***/ }
/******/ ]);