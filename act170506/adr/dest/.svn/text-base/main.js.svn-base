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
	// $('.thumbs-cotnainer').each(function(){
	// 		$(this).swiper({
	// 			speed:200,
	// 			slidesPerView:'auto',
	// 			calculateHeight: true
	// 		})
	// 	});

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
	    var id = "_v-8b7ece88/app.vue";
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
			maskEject: __webpack_require__(16)
		},
		data: function data() {
			return {
				loading: true,
				over: false,
				islogin: false,
				maskshow: false,
				selected: false,
				quanNum: 0,
				booklist: []
			};
		},
		methods: {
			initpage: function initpage() {
				var self = this;

				Local.init();
				Local.reqaObj(server() + "pkg170501/page3Init", function (data) {
					console.log(data);
					self.loading = false;
					if (data.code == -4) {
						self.over = true;
					}
					self.islogin = data.isLogin;
					self.selected = data.selected;
					self.quanNum = data.quanNum;
					self.booklist = data.bookList;
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"), 'three_enter_buy');
			},
			gologin: function gologin() {
				Local.login();
			},

			gotodetail: function gotodetail(bid) {
				ABook.gotoDetail(bid);
			},
			recequan: function recequan() {
				var self = this;
				if (self.islogin) {
					if (!self.selected) {
						Local.reqaObj(server() + "pkg170501/page3Accept?quanNum=" + self.quanNum, function (data) {
							console.log(data);
							if (data.code == 1) {
								self.maskshow = true;
								self.selected = true;
								forceLog(param("act_f"), 'three_accept');
							} else {
								Local.showToast(data.msg);
							}
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					}
				} else {
					Local.login();
				}
			},
			receive: function receive(ind, bid) {
				var self = this;
				var len = self.booklist.length;
				if (self.islogin) {
					if (self.booklist[ind].isBuy == 0) {
						Local.reqaObj(server() + "pkg170501/page3Buy?bid=" + bid, function (data) {
							console.log(data);
							if (data.code == 1) {
								if (data.isBuy == 1) {
									self.booklist[ind].isBuy == 1;
									Local.showToast(data.msg);
								} else {
									ABook.gotoDetail(bid);
								}
							} else {
								Local.showToast(data.msg);
							}
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
						forceLog(param("act_f"), 'three_panic_buy');
					}
				} else {
					Local.login();
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
		booklist: [{
			bid: '01',
			title: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者',
			isBuy: 1
		}, {
			bid: '02',
			title: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者',
			isBuy: 0
		}, {
			bid: '03',
			title: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者',
			isBuy: 1
		}, {
			bid: '04',
			title: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者',
			isBuy: 0
		}, {
			bid: '05',
			title: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者',
			isBuy: 0
		}, {
			bid: '06',
			title: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者',
			isBuy: 0
		}]
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
	    var id = "_v-24a056aa/MaskLoading.vue";
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
/* 8 */,
/* 9 */,
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

	module.exports = "\n<div class=\"MaskLoading\" _v-24a056aa=\"\">\n\t<p class=\"_text\" _v-24a056aa=\"\"><img :src=\"'../adr/public/images/loading.png'\" _v-24a056aa=\"\">正在加载...</p>\n</div>\n";

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
	    var id = "_v-d5f32416/MaskOver.vue";
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

	module.exports = "\n<div class=\"over\" _v-d5f32416=\"\">\n\t<div class=\"over-c\" _v-d5f32416=\"\">\n        <img :src=\"'../adr/public/images/over.png'\" alt=\"本期活动已结束\" _v-d5f32416=\"\">\n        <p class=\"over-p1\" _v-d5f32416=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-d5f32416=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(17);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ejectMask.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(18);
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
	    var id = "_v-3aa7cc90/ejectMask.vue";
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

	'use strict';

	module.exports = {
		data: function data() {
			return {};
		},
		props: ['mask', 'quan'],
		mounted: function mounted() {},
		methods: {
			gobuy: function gobuy() {
				var self = this;
				self.closemask();
			},
			closemask: function closemask() {
				this.$parent.maskshow = false;
				$(window).scrollTop(320);
			}
		}
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask\">\n\t<div class=\"tiparea\">\n\t\t<div class=\"gifticon\"></div>\n\t\t<div class=\"closemk\" @click=\"closemask\"></div>\n\t\t<div class=\"votes\">\n\t\t\t<h4>恭喜你获得{{quan}}书券</h4>\n\t\t\t<p>书券有效期7天</p>\n\t\t\t<a class=\"closbtn\" @click=\"gobuy\">真开心，去买书</a>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"warp\">\n\t\t<div class=\"ban\"></div>\n\t\t<div class=\"connect\">\n\t\t<div class=\"contbox\">\n\t\t\t<div class=\"gologin\" v-show=\"!islogin\">\n\t\t\t\t<a class=\"lgoinbtn\" @click=\"gologin\">登录参与</a>\n\t\t\t</div>\n\t\t\t<div v-show=\"islogin\">\n\t\t\t\t<div class=\"receiveQuan\">\n\t\t\t\t\t<div  class='tite'>－先领券后买书－<p>书券送不停，点击领取</p></div>\n\t\t\t\t\t<a class=\"receivebtn\" @click=\"recequan\">{{ selected?'已领'+quanNum+'书券，去买书':'我要书券'}}</a>\n\t\t\t\t</div>\n\t\t\t\t<div  class='tite'>－你的专属个性书库－<p>本本二折  不容错过</p></div>\n\t\t\t\t<ul class=\"booklist\">\n\t\t\t\t\t<li v-for=\"(books,index) in booklist\">\n\t\t\t\t\t\t<div class=\"bookface\" @click=\"gotodetail(books.bid)\">\n\t\t\t\t\t\t   <div class=\"zheifon\"></div>\n\t\t\t\t\t\t\t<img :src=\"books.cover\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"bookname\">{{ books.title }}</p>\n\t\t\t\t\t\t<p>{{ books.author }}</p>\n\t\t\t\t\t\t<a class=\"votebtn\" v-bind:class=\"{ disabeled:books.isBuy==1 }\" @click=\"receive(index,books.bid)\"><span>{{books.isBuy==1?'已购买':'抢购'}}</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"rules\">\n\t\t\t<h4>－ 活动规则－</h4>\n\t\t\t<p><span>1.</span>本活动为幸运福利活动，仅部分用户可参与。</p>\n\t\t\t<p><span>2.</span>赠送书券金额随机，有效期7天。</p>\n\t\t\t<p><span>3.</span>活动期间可按折扣价购买所选书籍，活动结束后不再享受优惠。</p>\n\t\t\t<p><span>4.</span>活动最终解释权归QQ阅读所有。</p>\n\t\t</div>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<mask-eject v-show=\"maskshow\" :mask=\"maskshow\" :quan=\"quanNum\"></mask-eject>\n</div>\n";

/***/ }
/******/ ]);