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

	__webpack_require__(2);

	__webpack_require__(4);

	Vue.component('contact', __webpack_require__(16));

	var app = new Vue({
		el: '#root',
		template: '<contact></contact>'
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';

	document.addEventListener('DOMContentLoaded', function () {

		var $html = document.querySelector('html');
		var $body = document.querySelector('body');
		var $screen = document.createElement('div');

		$screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
		$body.insertBefore($screen, $body.firstChild);

		function setRem() {
			$screen.style.display = 'block';
			var w = Number(document.defaultView.getComputedStyle($screen).width.replace(/px/, ''));
			var h = Number(document.defaultView.getComputedStyle($screen).height.replace(/px/, ''));
			$screen.style.display = 'none';
			$html.style.fontSize = 100 * w / 720 + 'px';
			//document.getElementsByClassName('container')[0].style.height = h+'px';
			console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
		}
		setRem();
		window.addEventListener('resize', setRem);
	});

	module.exports = {};

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(17);
	__vue_script__ = __webpack_require__(19);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161002\\adr\\src\\_contact\\Contact.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(20);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
	  (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "./Contact.vue";
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				loggedIn: false,


				ios: function () {
					var el = document.querySelector('[config]');
					var val = el.getAttribute('config');
					console.log(val);
					return (/ios/.test(val) ? true : false
					);
				}(),
				testMode: false,

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
						Local.reqaObj(common.server() + 'getContact', function (data) {
							console.log(data);

							if (self.testMode) {
								data.isLogin = true;
								data.phone = '13011111111';
								data.qq = '111111111';
								data.name = '张飞';
								data.address = '';
							}

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
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Contact\" v-show=\" page!=='pending' \" _v-6d6c2932=\"\">\n\t<div class=\"mask__\" v-show=\"!loggedIn\" @click=\"TO_LOGIN\" _v-6d6c2932=\"\">\n\t\t请先登录\n\t</div>\n\n\t<div class=\"form-editing\" v-show=\"page==='editing'\" _v-6d6c2932=\"\">\n\t\t<p class=\"one\" _v-6d6c2932=\"\">\n\t\t\t中奖用户务必正确填写联系方式，方便客服与您联系。\n\t\t</p>\n\t\t<ul _v-6d6c2932=\"\">\n\t\t\t<li _v-6d6c2932=\"\">\n\t\t\t\t<p class=\"error\" _v-6d6c2932=\"\">{{phoneError}}</p>\n\t\t\t\t<input name=\"phone\" type=\"text\" placeholder=\"电话\" v-model=\"phone\" v-on:blur=\"checkPhone\" _v-6d6c2932=\"\">\n\t\t\t\t<p class=\"necc\" _v-6d6c2932=\"\">必填</p>\n\t\t\t</li>\n\t\t\t<li _v-6d6c2932=\"\">\n\t\t\t\t<p class=\"error\" _v-6d6c2932=\"\">{{qqError}}</p>\n\t\t\t\t<input name=\"qq\" type=\"text\" placeholder=\"QQ\" v-model=\"qq\" v-on:blur=\"checkQQ\" _v-6d6c2932=\"\">\n\t\t\t\t<p class=\"necc\" _v-6d6c2932=\"\">必填</p>\n\t\t\t</li>\n\t\t\t<li _v-6d6c2932=\"\">\n\t\t\t\t<p class=\"error\" _v-6d6c2932=\"\"></p>\n\t\t\t\t<input name=\"name\" type=\"text\" placeholder=\"姓名\" v-model=\"name\" _v-6d6c2932=\"\">\n\t\t\t</li>\n\t\t\t<li _v-6d6c2932=\"\">\n\t\t\t\t<p class=\"error\" _v-6d6c2932=\"\"></p>\n\t\t\t\t<input name=\"address\" type=\"text\" placeholder=\"地址\" v-model=\"address\" _v-6d6c2932=\"\">\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class=\"submit\" v-on:click=\"submit\" _v-6d6c2932=\"\">\n\t\t\t提交\n\t\t</div>\n\t</div>\n\n\t<div class=\"form-done\" v-show=\"page==='done'\" _v-6d6c2932=\"\">\n\t\t<p class=\"one\" _v-6d6c2932=\"\">\n\t\t\t中奖用户务必正确填写联系方式，方便客服与您联系。\n\t\t</p>\n\t\t<ul _v-6d6c2932=\"\">\n\t\t\t<li _v-6d6c2932=\"\">\n\t\t\t\t<p class=\"text\" _v-6d6c2932=\"\">电话： {{phone}}</p>\n\t\t\t</li>\n\t\t\t<li _v-6d6c2932=\"\">\n\t\t\t\t<p class=\"text\" _v-6d6c2932=\"\">QQ ： {{qq}}</p>\n\t\t\t</li>\n\t\t\t<li _v-6d6c2932=\"\">\n\t\t\t\t<p class=\"text\" _v-6d6c2932=\"\">姓名： {{name}}</p>\n\t\t\t</li>\n\t\t\t<li _v-6d6c2932=\"\">\n\t\t\t\t<p class=\"text\" _v-6d6c2932=\"\">地址： {{address}}</p>\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class=\"edit\" v-on:click=\"edit\" _v-6d6c2932=\"\">\n\t\t\t修改\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }
/******/ ]);