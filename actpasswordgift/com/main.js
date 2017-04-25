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
	__vue_template__ = __webpack_require__(4);
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
	    var id = "_v-5abbb588/app.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {},
		data: function data() {
			return {
				downshow: false };
		},
		methods: {
			goapp: function goapp() {
				var self = this;
				S.open(function (installStat, plat) {
					if (installStat) {
						if (env.pt == "adr") {
							N.openPage("http://iyuedu.qq.com/event/actpasswordgift/adr/index.html?act_f=170324");
						} else if (env.pt == "ios") {
							N.openPage("https://yuedu.reader.qq.com/event/actpasswordgift/ios/index.html?act_f=170324");
							setTimeout(function () {
								self.downshow = true;
							}, 2000);
							setTimeout(function () {
								self.downshow = false;
							}, 5000);
						}
					} else {
						self.downshow = true;
					}
				});
				forceLog(param('act_f'), "openBtn" + env.pt);
			},
			downapp: function downapp() {
				var self = this;
				N.downLoad(null, '10022495');
				this.downshow = false;
			},
			closemask: function closemask() {
				var self = this;
				self.downshow = false;
			}
		},
		created: function created() {
			forceLog(param('act_f'));
		}
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n \t<div class=\"giftbox\">\n \t\t<img :src=\"'images/banner.png'\" />\n \t</div>\n \t<div class=\"btn\" @click=\"goapp\">去QQ阅读领取好礼</div>\n \t<div class=\"mask\" v-show=\"downshow\">\n \t\t<div class=\"tiparea\">\n \t\t\t<p class=\"top\">下载QQ阅读，畅读海量小说</p>\n\t\t\t<p class=\"middle\">如果您还未安装QQ阅读，您可以</p>\n\t\t\t<div class=\"bottom\">\n\t\t\t\t<li class=\"confirm\" @click=\"downapp\">下载QQ阅读</li>\n\t\t\t\t<li class=\"cancel\" @click=\"closemask\">取消</li>\n\t\t\t</div>\n \t\t</div>\n\t\t\n \t</div>\n</div>\n";

/***/ }
/******/ ]);