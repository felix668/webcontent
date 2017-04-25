webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

	var _vue = __webpack_require__(5);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.component('page', __webpack_require__(6));
	var page = new _vue2.default({
		el: 'body',
		data: {
			pagetype: 4
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\page.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(66)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5e2c9d2e/page.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(8);

	module.exports = {
		data: function data() {
			return {
				showmask: '',
				over: false,
				initdata: {},
				loaded: false,
				islogin: false,
				pagetype: 4
			};
		},
		created: function created() {
			this.initp();
		},
		methods: {
			initp: function initp() {
				var self = this;
				Local.init();
				Local.reqaObj(server() + "pkg161204/init?gs="+param("gs"), function (data) {
					self.initdata = data;
					self.islogin = data.isLogin;
					self.loaded = true;
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog("LSYHindex", "161201");
			}
		},
		components: {
			maskLoad: __webpack_require__(21),
			top: __webpack_require__(26),
			box1: __webpack_require__(29),
			box2: __webpack_require__(33),
			box3: __webpack_require__(38),
			box4: __webpack_require__(42),
			box5: __webpack_require__(46),
			overBox: __webpack_require__(50),
			maskSelect: __webpack_require__(55),
			maskShelf: __webpack_require__(61)
		},
		watch: {
			"showmask": function showmask(val, oldVal) {
				if (val !== '') {
					$("body").addClass("noscroll");
				} else {
					$("body").removeClass("noscroll");
				}
			}
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(22)
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-12fe0134/maskload.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-12fe0134&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./maskload.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-12fe0134&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./maskload.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\r\n.loadingbox[_v-12fe0134]{position: fixed;left: 0;top: 0;width: 100%;height: 100%;background: white;color: grey;text-align: center;font-size: 14px;z-index: 9999;}\r\n.loadingTop[_v-12fe0134]{ display:block; margin:0 auto; text-align:center; padding:16px 0;}\r\n.loads[_v-12fe0134]{ width:24px; height:24px; padding: 8px; -webkit-animation:rotate 1s linear infinite;display:inline-block; margin:0 auto;vertical-align: middle;}\r\nsvg[_v-12fe0134]{margin:0;padding:0;}\r\n.cls-default[_v-12fe0134] { fill: #3399ff; fill-rule: evenodd;}\r\n@-webkit-keyframes rotate{\r\n  0%{-webkit-transform:rotate(0deg)}\r\n  100%{-webkit-transform:rotate(360deg);}\r\n}\r\n", ""]);

	// exports


/***/ },
/* 24 */
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
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"loadingbox\" _v-12fe0134=\"\">\n\t<div class=\"loadingTop\" _v-12fe0134=\"\">\n\t\t<span class=\"loads\" _v-12fe0134=\"\">\n\t\t\t<svg width=\"24\" height=\"23\" viewBox=\"0 0 48 46\" xmlns=\"http://www.w3.org/2000/svg\" _v-12fe0134=\"\">\n\t\t\t\t<path d=\"M47.43 24C47.43 11.06 36.94.57 24 .57S.57 11.06.57 24c0 9.27 5.434 17.55 13.72 21.328 1.006.458 2.192.015 2.65-.99.46-1.005.015-2.192-.99-2.65C9.076 38.555 4.57 31.688 4.57 24c0-10.73 8.7-19.43 19.43-19.43S43.43 13.27 43.43 24c0 7.66-4.473 14.505-11.307 17.655-1.004.462-1.442 1.65-.98 2.653.463 1.004 1.65 1.442 2.654.98C42.037 41.49 47.43 33.234 47.43 24z\" class=\"cls-default\" _v-12fe0134=\"\"></path>\n\t\t\t</svg>\n\t\t</span>\n\t\t正在加载...\n\t</div>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\top.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-682da3f1/top.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ["banner", "pack"]
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"top\">\n\t<img :src=\"'images/'+(banner?banner:'banner')+'.jpg'\" class=\"banner\">\n\t<img :src=\"'images/'+(pack?pack:'pack')+'.png'\" class=\"pack\" id=\"top\">\n</div>\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\box1.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5d62095a/box1.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ["monthpicked", "pic", "title"],
		data: function data() {
			return {
				picked: this.monthpicked
			};
		},
		methods: {
			pickmonth: function pickmonth() {
				if (!this.$parent.islogin) {
					Local.login();
					return;
				};
				var self = this;
				Local.reqaObj(server() + "pkg161204/open", function (data) {
					if (data.code == 0) {
						self.picked = true;
					} else {
						Local.showToast(data.msg);
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog("LSYHmonthpick", "161201");
			},
			gomonth: function gomonth() {
				Local.goMontharea();
				forceLog("LSYHgomonth","161201");
			}
		}
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"part3\">\n\t\t<div class=\"headline\">\n\t\t\t<p v-if=\"title\">{{title}}</p>\n\t\t\t<img v-if=\"pic\" :src=\"'images/'+pic+'.png'\">\n\t\t\t<img v-if=\"!pic\" src=\"" + __webpack_require__(32) + "\">\n\t\t</div>\n\t\t<h2><span>5天</span>包月特权免费体验</h2>\n\t\t<div class=\"btn3\" v-if=\"!picked\" @tap.prevent=\"pickmonth\">立即领取</div>\n\t\t<div class=\"btn4\" v-else @tap.prevent=\"gomonth\">去包月专区在线免费读</div>\n\t\t<p class=\"msg\">5天内包月库内10万册书籍在线免费读<br>非包月库内书籍、看书听书8折优惠</p>\n\t</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/50a9d19c61fab4a7ff3b1b2168f915be.png";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(34)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\box2.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(36)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5d7020db/box2.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _bus = __webpack_require__(35);

	var _bus2 = _interopRequireDefault(_bus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		props: ["title", "dataobj"],
		data: function data() {
			return {
				booklist1: this.dataobj.booklist1,
				select: this.dataobj.picked100
			};
		},
		methods: {
			free100: function free100(name, bid, event) {
				if (!this.$parent.islogin) {
					Local.login();
					return;
				};
				if (!this.select) {
					this.$parent.showmask = "maskSelect";
					_bus2.default.$emit('name-select', { 'name': name, 'bid': bid });
					var self = this;
					_bus2.default.$on('confirm-btn', function () {
						self.select = bid;
					});
				};
			},
			addshelf: function addshelf(bid) {
				ABook.gotoRead(bid);
				forceLog("LYH100Read", "top", bid);
			},
			goDetail: function goDetail(bid) {
				ABook.gotoDetail(bid);
				forceLog("LYHbookDetail", "top", bid);
			}
		}
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _vue = __webpack_require__(5);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = new _vue2.default();

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"part1\">\n\t<div class=\"headline\">\n\t\t<p>{{title}}</p>\n\t\t<img src=\"" + __webpack_require__(37) + "\">\n\t</div>\n\t<div class=\"books\">\n\t\t<div class=\"title\">推荐你最关注的3本书</div>\n\t\t<ul class=\"booklist\">\n\t\t\t<li v-for=\"book in booklist1\">\t\t\t\t\t\t\n\t\t\t\t<div class=\"cover\" @tap=\"goDetail(book.bid)\">\n\t\t\t\t\t<img :src=\"book.cover\">\n\t\t\t\t</div>\n\t\t\t\t<p class=\"name\">{{book.title}}</p>\n\t\t\t\t<p class=\"author\">{{book.author}}</p>\n\t\t\t\t<div @tap=\"free100(book.title,book.bid,event)\" v-if=\"select!==book.bid\" :class=\"[select==false?'btn':select==book.bid?'btn':'disable']\"><span>选TA</span></div>\n\t\t\t\t<div class=\"btn f24\" @tap=\"addshelf(book.bid)\" v-else><span>免费读100章</span></div>\n\t\t\t</li>\t\t\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/7f7d8913be56ec7fddfebb2f3cef2a0e.png";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(39)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\box3.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(40)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5d7e385c/box3.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _bus = __webpack_require__(35);

	var _bus2 = _interopRequireDefault(_bus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		props: ["title", "dataobj"],
		data: function data() {
			return {
				booklist2: this.dataobj.booklist2,
				select: this.dataobj.bookspicked || [],
				seled: this.dataobj.bookspicked
			};
		},
		methods: {
			goDetail: function goDetail(bid) {
				ABook.gotoDetail(bid);
				forceLog("LYHbookDetail", "bottom", bid);
			},
			selbooks: function selbooks(bid, $event) {
				var elem = $($event.target);
				if (!this.seled) {
					if (!elem.data("clicked")) {
						elem.data("clicked", "true");
						this.select.push(bid);
					} else {
						elem.data("clicked", "false");
						this.select.$remove(bid);
						this.select.sort();
					}
				}
			},
			addshelf: function addshelf() {
				if (this.select.length > 3) {
					Local.showToast("最多选择3本书免费读");
					return;
				} else if (this.select.length == 0) {
					Local.showToast("最少选择1本书免费读");
					return;
				}
				if (!this.$parent.islogin) {
					Local.login();
					return;
				}
				this.$parent.showmask = "maskShelf";
				_bus2.default.$emit('shelf-select', this.select.join("_"));
				var self = this;
				_bus2.default.$on('get-success', function (id) {
					self.seled = true;
				});
			},
			goshelf: function goshelf() {
				Local.goShelf();
				forceLog("LSYHgoshelf", "161201");
			}
		}
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"part2\">\n\t<div class=\"headline\">\n\t\t<p>{{title}}</p>\n\t\t<img src=\"" + __webpack_require__(41) + "\">\n\t</div>\n\t<div class=\"books\" v-for=\"n in booklist2.length/3\" :id='[n==0?\"showfix\":\"\"]'>\n\t\t<div class=\"title\">{{n==0 ? \"根据你的阅读基因推荐\" : n==1 ? \"根据你最近阅读的书籍推荐\" : \"和你有共同喜好的人正在读\"}}</div>\t\t\t\n\t\t<ul class=\"booklist\">\n\t\t\t<li v-for=\"book in booklist2.slice(n*3,n*3+3)\">\t\t\t\t\t\t\n\t\t\t\t<div class=\"cover\" @tap=\"goDetail(book.bid)\">\n\t\t\t\t\t<img :src=\"book.cover\">\n\t\t\t\t</div>\n\t\t\t\t<p class=\"name\">{{book.title}}</p>\n\t\t\t\t<p class=\"author\">{{book.author}}</p>\n\t\t\t\t<div class=\"btn2\" @tap=\"selbooks(book.bid,$event)\" :class=\"{'seled':select.indexOf(book.bid)>-1}\" data-clicked=\"{{select.indexOf(book.bid)>-1?'true':'false'}}\">选TA</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"shelf\" @tap=\"addshelf\" v-if=\"!seled\"><p>加入书架免费读<span v-show=\"select.length>0\">（已选{{select.length}}本）</span></p></div>\n\t<div class=\"shelf\" v-else @tap=\"goshelf\"><p>去书架免费读</p></div>\n</div>\n";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/7d6409c65ae4b76154bf01ad13b58838.png";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(43)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\box4.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(44)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5d8c4fdd/box4.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ["title", "booklist", "addall", "pic", "free"],
		data: function data() {
			return {
				len: this.booklist.length,
				addall: this.addall,
				books: []
			};
		},
		methods: {
			goDetail: function goDetail(bid) {
				ABook.gotoDetail(bid);
				if (this.len <= 3) {
					forceLog("LYHbookDetail", "top", bid);
				} else {
					forceLog("LYHbookDetail", "bottom", bid);
				}
			},
			gotoRead: function gotoRead(bid) {
				ABook.gotoRead(bid);
				if (this.len <= 3) {
					forceLog("LYHreadbook", "top", bid);
				} else {
					forceLog("LYHreadbook", "bottom", bid);
				}
			},
			addshelf: function addshelf() {
				if (!this.$parent.islogin) {
					Local.login();
					return;
				}
				var self = this;
				self.booklist.forEach(function (item, i) {
					self.books.push(item.bid);
				});
				Local.reqaObj(server() + "topic/old/addall?bids=" + self.books.join("_") + "&pagetype=" + param("pagetype"), function (data) {
					if (data.code == 0) {
						Local.showToast("成功加入书架");
						self.addall = true;
					} else {
						Local.showToast(data.msg);
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog("LYHaddshelf", "", self.books.join("_"));
			},
			goshelf: function goshelf() {
				Local.goShelf();
					forceLog("LYHgoshelf", "161201");

			}
		}
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"part4\">\n\t<div class=\"headline\">\n\t\t<p v-if=\"title\">{{title}}</p>\n\t\t<img v-if=\"pic\" :src=\"'images/'+pic+'.png'\">\n\t\t<img v-if=\"!pic\" src=\"" + __webpack_require__(45) + "\">\n\t</div>\n\t<div class=\"books\" v-for=\"n in len/3\">\n\t\t<div class=\"title\" v-if=\"len>3\">{{n==0 ? \"根据你的阅读基因推荐\" : n==1 ? \"根据你最近阅读的书籍推荐\" : \"和你有共同喜好的人正在读\"}}</div>\t\n\t\t<div class=\"title\" v-else>根据你的阅读喜好定制的免费书</div>\t\t\n\t\t<ul class=\"booklist\">\n\t\t\t<li v-for=\"book in booklist.slice(n*3,n*3+3)\">\t\t\t\t\t\t\n\t\t\t\t<div class=\"cover\" @tap=\"goDetail(book.bid)\">\n\t\t\t\t\t<img :src=\"book.cover\">\n\t\t\t\t</div>\n\t\t\t\t<p class=\"name\">{{book.title}}</p>\n\t\t\t\t<p class=\"author\">{{book.author}}</p>\n\t\t\t\t<div class=\"btn\" @tap=\"gotoRead(book.bid)\">阅读</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div v-if=\"!addall\" @tap=\"addshelf\"  :class='{\"shelf\":len>3,\"btn3\":len<=3}'><p>{{free ? \"一键加入书架免费读\" : \"一键加入书架去阅读\"}}</p></div>\n\t<div v-else  @tap=\"goshelf\" :class='{\"shelf\":len>3,\"btn4\":len<=3}'><p>{{free ? \"去书架免费读\" : \"去书架阅读\"}}</p></div>\n</div>\n";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/1955d7213f95dd24e6a5fd348f5d376f.png";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(47)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\box5.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5d9a675e/box5.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ["dataobj"],
		methods: {
			goDetail: function goDetail($event, bid) {
				ABook.gotoDetail(bid);
				if ($event.target.parentNode.tagName == "A" || $event.target.tagName == "I") {
					forceLog("LYHbookDetail", "top", bid);
				} else {
					forceLog("LYHQGbooks", "top", bid);
				}
			}
		}
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"part5\">\n\t<div class=\"headline\">\n\t\t<img src=\"" + __webpack_require__(49) + "\">\n\t</div>\n\t<div class=\"books\">\n\t\t<div class=\"title\">推荐你最关注的3本书</div>\n\t\t<ul class=\"booklist\">\n\t\t\t<li v-for=\"book in dataobj.booklist1\">\t\t\t\t\t\t\n\t\t\t\t<div @tap=\"goDetail($event,book.bid)\" class=\"cover\">\n\t\t\t\t\t<img :src=\"book.cover\">\n\t\t\t\t\t<span class=\"dist\"><i>2折</i></span>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"name\">{{book.title}}</p>\n\t\t\t\t<p class=\"author\">{{book.author}}</p>\n\t\t\t\t<p class=\"oprice\">原价{{book.price/100}}／千字</p>\n\t\t\t\t<p class=\"cprice\">0.01元／千字</p>\n\t\t\t\t<div class=\"btn\" @tap=\"goDetail($event,book.bid)\"><span>抢购</span></div>\n\t\t\t</li>\t\t\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/241d6dbbae995955a23ea6b502034bdf.png";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(51)
	__vue_template__ = __webpack_require__(53)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0d765930/over.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 51 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 52 */,
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"over\" _v-0d765930=\"\">\n\t<div class=\"over-c\" _v-0d765930=\"\">\n        <img src=\"" + __webpack_require__(54) + "\" alt=\"本期活动已结束\" _v-0d765930=\"\">\n        <p class=\"over-p1\" _v-0d765930=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-0d765930=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/789e46b52668765ac40470ab9d867d78.png";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(56)
	__vue_script__ = __webpack_require__(59)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\maskselect.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(60)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-435c5a7c/maskselect.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 56 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 57 */,
/* 58 */,
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _bus = __webpack_require__(35);

	var _bus2 = _interopRequireDefault(_bus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
		data: function data() {
			return {
				book: {}
			};
		},
		created: function created() {
			var self = this;
			_bus2.default.$on('name-select', function (book) {
				self.book = book;
			});
		},
		methods: {
			hidemask: function hidemask() {
				this.$parent.showmask = '';
			},
			confirm: function confirm() {
				var self = this;
				Local.reqaObj(server() + "topic/old/pick100?bid=" + self.book.bid + "&pagetype=" + param("pagetype"), function (data) {
					if (data.code == 0) {
						self.hidemask();
						_bus2.default.$emit('confirm-btn');

						Local.addToShelf(self.book.bid);
					} else {
						Local.showToast(data.msg);
						self.hidemask();
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog("LYH100pick", "top", self.book.bid);
			}
		}
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask\" _v-435c5a7c=\"\">\n\t<div class=\"tiparea\" _v-435c5a7c=\"\">\n\t\t<strong _v-435c5a7c=\"\">确认选择？</strong>\n\t\t<p _v-435c5a7c=\"\">《{{book.name}}》<br _v-435c5a7c=\"\">的100付费章节免费读</p>\n\t\t<div class=\"submit\" @touchend.prevent=\"confirm\" _v-435c5a7c=\"\">确认</div>\n\t\t<i class=\"close\" @touchend.prevent=\"hidemask\" _v-435c5a7c=\"\"></i>\n\t</div>\n</div>\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(62)
	__vue_script__ = __webpack_require__(64)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] components\\maskshelf.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(65)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-16ec444c/maskshelf.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 62 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _bus = __webpack_require__(35);

	var _bus2 = _interopRequireDefault(_bus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
		data: function data() {
			return {
				books: ""
			};
		},
		ready: function ready() {
			var self = this;
			_bus2.default.$on('shelf-select', function (books) {
				self.books = books;
			});
		},
		methods: {
			hidemask: function hidemask() {
				this.$parent.showmask = '';
			},
			confirm: function confirm() {
				var self = this;
				console.log(self.books);

				Local.reqaObj(server() + "pkg161204/pick?bids=" + self.books+"&gs="+param("gs"), function (data) {
					if (data.code == 0) {
						self.hidemask();
						_bus2.default.$emit('get-success', '');
						forceLog("LYHaddshelf", "top", self.books);
					} else {
						Local.showToast(data.msg);
						self.hidemask();
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog("LSYHbookspick", "161201");
			}
		}
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask\" _v-16ec444c=\"\">\n\t<div class=\"tiparea\" _v-16ec444c=\"\">\n\t\t<strong _v-16ec444c=\"\">确认加入书架？</strong>\n\t\t<p _v-16ec444c=\"\">确认后免费的书就不可以更改了哦</p>\n\t\t<div class=\"submit\" @touchend.prevent=\"confirm\" _v-16ec444c=\"\">确认</div>\n\t\t<i class=\"close\" @touchend.prevent=\"hidemask\" _v-16ec444c=\"\"></i>\n\t</div>\n</div>\n";

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "\n<mask-load v-if=\"!loaded\"></mask-load>\t\n<template v-if=\"pagetype==1\">\n\t<top banner=\"banner2\" pack=\"pack2\"></top>\n\t<div class=\"wrap\" v-if=\"loaded\">\n\t\t<div class=\"box\">\n\t\t\t<box5 :dataobj=\"initdata\"></box5>\n\t\t\t<box4 pic=\"part3-2\" :booklist=\"initdata.booklist2\" :addall=\"initdata.addall\"></box4>\n\t\t</div>\n\t</div>\t\t\t\n</template>\n<template v-if=\"pagetype==2\">\n\t<top></top>\n\t<div class=\"wrap\" v-if=\"loaded\">\n\t\t<div class=\"box\">\n\t\t\t<box2 title=\"幸运专享一\" :dataobj=\"initdata\"></box2>\n\t\t\t<box3 title=\"幸运专享二\" :dataobj=\"initdata\"></box3>\n\t\t</div>\n\t</div>\n\t<mask-select v-show=\"showmask=='maskSelect'\"></mask-select>\n\t<mask-shelf v-show=\"showmask=='maskShelf'\"></mask-shelf>\t\n</template>\n<template v-if=\"pagetype==3\">\n\t<top></top>\n\t<div class=\"wrap\" v-if=\"loaded\">\n\t\t<div class=\"box\">\n\t\t\t<box3 title=\"幸运专享一\" :dataobj=\"initdata\"></box3>\n\t\t</div>\n\t</div>\n\t<mask-shelf v-show=\"showmask=='maskShelf'\"></mask-shelf>\n</template>\n<template v-if=\"pagetype==4\">\n\t<top></top>\n\t<div class=\"wrap\" v-if=\"loaded\">\n\t\t<div class=\"box\">\n\t\t\t<box1 title=\"幸运专享一\" :monthpicked=\"initdata.monthpicked\"></box1>\n\t\t\t<box3 title=\"幸运专享二\" :dataobj=\"initdata\"></box3>\t\n\t\t</div>\n\t</div>\n\t<mask-shelf v-show=\"showmask=='maskShelf'\"></mask-shelf>\n</template>\n<template v-if=\"pagetype==5\">\n\t<top></top>\n\t<div class=\"wrap\" v-if=\"loaded\">\n\t\t<div class=\"box\">\n\t\t\t<box1 title=\"幸运专享一\" :monthpicked=\"initdata.monthpicked\"></box1>\n\t\t\t<box2 title=\"幸运专享二\" :dataobj=\"initdata\"></box2>\n\t\t\t<box3 title=\"幸运专享三\" :dataobj=\"initdata\"></box3>\t\n\t\t</div>\n\t</div>\n\t<mask-select v-show=\"showmask=='maskSelect'\"></mask-select>\n\t<mask-shelf v-show=\"showmask=='maskShelf'\"></mask-shelf>\n</template>\n<template v-if=\"pagetype==6\">\n\t<top></top>\n\t<div class=\"wrap\" v-if=\"loaded\">\n\t\t<div class=\"box\"> \n\t\t\t<box1 title=\"幸运专享一\" :monthpicked=\"initdata.monthpicked\"></box1>\n\t\t\t<box4 title=\"幸运专享二\" :booklist=\"initdata.booklist1\" :addall=\"initdata.addall\" free=\"true\"></box4>\n\t\t\t<box3 title=\"幸运专享三\" :dataobj=\"initdata\"></box3>\t\n\t\t</div>\n\t</div>\n\t<mask-shelf v-show=\"showmask=='maskShelf'\"></mask-shelf>\n</template>\n<template v-if=\"pagetype==7\">\n\t<top banner=\"banner2\" pack=\"pack2\"></top>\n\t<div class=\"wrap\" v-if=\"loaded\">\n\t\t<div class=\"box\">\n\t\t\t<box1 pic=\"part1-2\" :monthpicked=\"initdata.monthpicked\"></box1>\n\t\t\t<box4 pic=\"part3-2\" :booklist=\"initdata.booklist2\" :addall=\"initdata.addall\"></box4>\n\t\t</div>\n\t</div>\n</template>\t\n<template v-if=\"pagetype==8\">\n\t<top></top>\n\t<div class=\"wrap\" v-if=\"loaded\">\n\t\t<div class=\"box\">\n\t\t\t<box2 title=\"幸运专享一\" :dataobj=\"initdata\"></box2>\n\t\t\t<box4 title=\"幸运专享二\"  pic=\"part3\"  :booklist=\"initdata.booklist2\" :addall=\"initdata.addall\" free=\"true\"></box4>\n\t\t</div>\n\t</div>\n\t<mask-select v-show=\"showmask=='maskSelect'\"></mask-select>\n</template>\t\n<div class=\"cpr\"><p>本活动解释权归QQ阅读所有</p></div>\n<over-box v-if=\"over\"></over-box>\n";

/***/ }
]);