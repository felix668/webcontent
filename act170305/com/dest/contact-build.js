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
	__webpack_require__(3);
	__vue_script__ = __webpack_require__(7);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/Contact.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(8);
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
	    var id = "_v-089473ec/Contact.vue";
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

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				dev: true,
				loggedIn: false,


				page: 'pending',

				phone: '',
				qq: '',
				name: '',
				address: '',

				phoneError: '',
				qqError: ''
			};
		},
		computed: {},
		mounted: function mounted() {
			this.act({
				type: 'INIT'
			});
		},
		methods: {
			act: function act(action) {
				var self = this;
				switch (action.type) {
					case 'INIT':
						if (self.dev) {
							self.loggedIn = true;
							self.phone = '13011111111';
							self.qq = '111111111';
							self.name = '张飞';
							self.address = '';
							self.page = 'done';
						} else {
							Local.reqaObj(common.server() + 'getContact', function (data) {
								console.log(data);

								self.loggedIn = data.isLogin;
								self.page = '';

								if (data.isLogin) {
									if (data.phone) {
										self.phone = data.phone;
										self.qq = data.qq;
										self.name = data.name;
										self.address = data.address;
										self.page = 'done';
									} else {
										self.page = 'editing';
									}
								} else {
									Local.login();
								};
							}, [], function () {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
						};
						break;
					case 'TO_LOGIN':
						Local.login();
						break;
				}
			},
			TO_LOGIN: function TO_LOGIN() {
				this.act({ type: 'TO_LOGIN' });
			},
			checkPhone: function checkPhone() {
				if (/^1[3|4|5|8]\d{9}$/.test(this.phone)) {
					this.phoneError = '';
					return true;
				} else {
					this.phoneError = '请输入正确的手机号码';
					return false;
				}
			},
			checkQQ: function checkQQ() {
				if (/^(\d{5,})$/.test(this.qq)) {
					this.qqError = '';
					return true;
				} else {
					this.qqError = '请输入正确的QQ号码';
					return false;
				}
			},
			edit: function edit() {
				this.page = 'editing';
			},
			submit: function submit() {
				var self = this;
				var one = this.checkPhone();
				var two = this.checkQQ();
				if (one && two) {
					Local.reqaObj(common.server() + ('setContact?act_f=' + common.param('act_f') + '&phone=' + self.phone + '&qq=' + self.qq + '&name=' + self.name + '&address=' + self.address), function (data) {
						console.log(data);
						if (data.isLogin) {
							if (data.code === 0) {
								Local.showToast("提交成功");
								self.page = 'done';
							} else {
								Local.showToast("系统繁忙，请稍后再试试");
							}
						} else {
							Local.login();
						}
					}, [], function () {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				};
			}
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"Contact\" v-show=\" page!=='pending' \">\n<!-- \t\t<div class=\"mask__\" v-show=\"!loggedIn\"\n\t\t@click=\"TO_LOGIN\">\n\t\t\t请先登录\n\t\t</div> -->\n\n\t\t<div class=\"form-editing\" v-show=\"page==='editing'\">\n\t\t\t<p class=\"one\">\n\t\t\t\t中奖用户务必正确填写联系方式，方便客服与您联系。\n\t\t\t</p>\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\t<p class=\"error\">{{phoneError}}</p>\n\t\t\t\t\t<input name=\"phone\" type=\"text\" placeholder=\"电话\" v-model=\"phone\" v-on:blur=\"checkPhone\"/>\n\t\t\t\t\t<p class=\"necc\">必填</p>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p class=\"error\">{{qqError}}</p>\n\t\t\t\t\t<input name=\"qq\" type=\"text\" placeholder=\"QQ\" v-model=\"qq\" v-on:blur=\"checkQQ\" />\n\t\t\t\t\t<p class=\"necc\">必填</p>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p class=\"error\"></p>\n\t\t\t\t\t<input name=\"name\" type=\"text\" placeholder=\"姓名\" v-model=\"name\"/>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p class=\"error\"></p>\n\t\t\t\t\t<input name=\"address\" type=\"text\" placeholder=\"地址\" v-model=\"address\"/>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class=\"submit\" v-on:click=\"submit\">\n\t\t\t\t提交\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-done\" v-show=\"page==='done'\">\n\t\t\t<p class=\"one\">\n\t\t\t\t中奖用户务必正确填写联系方式，方便客服与您联系。\n\t\t\t</p>\n\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\t\t<p class=\"text\">电话： {{phone}}</p>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p class=\"text\">QQ ： {{qq}}</p>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p class=\"text\">姓名： {{name}}</p>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<p class=\"text\">地址： {{address}}</p>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class=\"edit\" v-on:click=\"edit\">\n\t\t\t\t修改\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";

/***/ }
/******/ ]);