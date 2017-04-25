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

	let overBox = __webpack_require__(1);
	Vue.component('over-box', overBox);
	let vm = new Vue({
		el: 'body',
		data: {
			isLogin: false,
			over: false,
			mask: false,
			sk: [],
			timeLeft: "",
			booklist: {},
			buyinfo: [],
			package: [],
			userinfo: {}
		},
		created() {
			this.initpage();
		},
		methods: {
			initpage() {
				let self = this;
				Local.init();
				Local.reqaObj(server() + "pkg161101/init", function (data) {
					if (data.code == -4) {
						self.over = true;
					} else if (data.code == -2) {
						self.isLogin = false;
					} else if (data.code == 1) {
						self.isLogin = true;
						self.userinfo = { "gender": data.gender, "qqId": data.qqId, "nickName": data.nickName, "money": data.money, "zmoney": data.z_money, "isPayUser": data.isPayUser };
						self.package.push(data.package0, data.package1, data.package2, data.package3);
					}
					if (data.code !== -4) {
						if (self.sk) {
							self.sk = data.sk.split("_");
						}
						self.timeLeft = data.timeLeft;
						self.counter();
					}
					self.booklist = data.bookList;
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"), "SSYinit");
			},
			buybook(index) {
				if (!this.isLogin) {
					Local.login();
					return;
				}
				this.buyinfo = this.booklist[index];
				if (!this.userinfo.isPayUser && index == 1) {
					this.buyinfo.push("111", index);
				} else {
					this.buyinfo.push("1111", index);
				}
				this.mask = true;
				forceLog(param("act_f"), "QGbtn" + index);
			},
			sharepk(index) {
				let shareObj = {
					url: prefix() + "act161101/com/share.html?pd=" + index + "&sd=" + this.userinfo.qqId + "&gd=" + this.userinfo.gender,
					cover: prefix() + "act161101/com/images/share2.jpg",
					title: this.userinfo.nickName + "送了三本书给你",
					desc: "三本图书永久免费阅读，随时领取"
				};
				Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title, shareObj.desc, 1);
				forceLog(param("act_f"), "ZSbtn" + index);
			},
			share() {
				let shareObj = {
					url: prefix() + "act161101/com/share2.html?gd=" + this.userinfo.gender,
					cover: prefix() + "act161101/com/images/share2.jpg",
					title: "今年买买买，就在QQ阅读",
					desc: "我在QQ阅读参加双十一秒杀狂欢，超值包好书不断，抢到就是赚到。"
				};
				Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title, shareObj.desc, 1);
				forceLog(param("act_f"), "FXbtn");
			},
			counter() {
				let self = this;
				// clearInterval(timer);
				let timer = setInterval(function () {
					if (self.timeLeft == 0) {
						clearInterval(timer);
						return;
					}
					self.timeLeft--;
				}, 1000);
			},
			ms() {
				forceLog(param("act_f"), "MSbtn");
			}
		},
		computed: {
			hour() {
				let hh = parseInt(this.timeLeft / 3600000);
				return hh < 10 ? "0" + hh : hh;
			},
			minute() {
				let mm = Math.ceil((this.timeLeft - parseInt(this.hour) * 3600000) / 60000);
				return mm < 10 ? "0" + mm : mm;
			}
		},
		components: {
			buyMask: {
				props: ["buyinfo", "zmoney", "money"],
				template: '<div class="mask"><div class="tiparea"><h2>确认购买？</h2><p class="bor"><span v-for="n in 3">《{{buyinfo[n+2].split("_")[1]}}》</span></p><div class="money"><p class="bookp">价格：<strong>{{buyinfo[5]}}书币</strong><span>原价{{parseInt(buyinfo[1])*100}}书币</span></p>' + '<p class="account"><span>余额：</span><strong>{{money}}</strong>书币+<strong>{{zmoney}}</strong>书券</p></div><div class="submit" @click.prevent="submit" v-if="isEnough">购买</div><a href="uniteqqreader://nativepage/coin/recharge" class="submit" v-else>余额不足，充值购买</a><i class="close" @click.prevent="hidemask"></i></div></div>',
				computed: {
					isEnough() {
						return parseInt(this.zmoney + this.money) >= parseInt(this.buyinfo[5]) ? true : false;
					}
				},
				methods: {
					hidemask() {
						this.$parent.mask = false;
					},
					submit() {
						let self = this;
						Local.reqaObj(server() + "pkg161101/pick?pickId=" + self.buyinfo[6], function (data) {
							if (data.code == -4) {
								self.$parent.over = true;
								self.hidemask();
							} else if (data.code == -2) {
								Local.login();
							} else if (data.code == 1) {
								//let arr=self.$parent.package;
								//self.$parent.package=[];
								//arr[self.buyinfo[6]]=true;
								//self.$parent.package=arr;
								//self.$parent.userinfo.zmoney=data.z_money;
								//self.$parent.userinfo.money=data.money;
								//self.hidemask();
								window.location.reload();
							} else if (data.code == -1) {
								self.$parent.userinfo.zmoney = data.z_money;
								self.$parent.userinfo.money = data.money;
								// window.location.reload();
							}
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					}

				}

			}
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(2)
	__vue_template__ = __webpack_require__(6)
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
	  var id = "_v-858e3da4/over.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-858e3da4&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./over.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-858e3da4&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./over.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".over[_v-858e3da4] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  z-index: 1999;\n}\n.over .over-c[_v-858e3da4] {\n  height: 4.16rem;\n  overflow: hidden;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.over .over-c img[_v-858e3da4] {\n  width: 2.05rem;\n  height: 2.19rem;\n  margin: 0.32rem auto 0;\n}\n.over p[_v-858e3da4] {\n  color: #999;\n  font-size: 0.30rem;\n  line-height: 1;\n}\n.over .over-p1[_v-858e3da4] {\n  margin-top: 0.33rem;\n}\n.over .over-p2[_v-858e3da4] {\n  margin-top: 0.24rem;\n  margin-bottom: 0.48rem;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"over\" _v-858e3da4=\"\">\n\t<div class=\"over-c\" _v-858e3da4=\"\">\n        <img src=\"" + __webpack_require__(7) + "\" alt=\"本期活动已结束\" _v-858e3da4=\"\">\n        <p class=\"over-p1\" _v-858e3da4=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-858e3da4=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADbCAYAAADOMxXvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkYxQUVCNUI4OUUxMTFFNkExOUU4MjQzREEwMzk5REYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkYxQUVCNUM4OUUxMTFFNkExOUU4MjQzREEwMzk5REYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRjFBRUI1OTg5RTExMUU2QTE5RTgyNDNEQTAzOTlERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRjFBRUI1QTg5RTExMUU2QTE5RTgyNDNEQTAzOTlERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoKzswIAADoISURBVHja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"

/***/ }
/******/ ]);