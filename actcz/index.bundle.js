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
	    var id = "_v-689c3042/app.vue";
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
	exports.default = {
		components: {
			maskLoading: __webpack_require__(4),
			maskOver: __webpack_require__(11),
			ejectmask: __webpack_require__(15)
		},
		data: function data() {
			return {
				login: false,
				over: false,
				mask: false,
				czcg: false,
				vip: false,
				loading: false,
				picked: false,
				prizetype: 0
			};
		},
		methods: {
			initpage: function initpage() {
				var self = this;
				Local.init();
				Local.reqaObj(server() + "cz/init", function (data) {
					self.loading = false;
					console.log(data);
					self.login = data.isLogin;
					self.over = data.isOver;
					self.czcg = data.czcg;
					self.picked = data.picked;
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"));
			},
			recharge: function recharge() {
				var self = this;
				Local.reqaObj(server() + "cz/init", function (data) {
					self.login = data.isLogin;
					self.over = data.isOver;
					self.czcg = data.czcg;
					self.picked = data.picked;
					console.log(data.isLogin);
					if (!self.login) {
						Local.login();
					} else {
						if (!self.czcg) {
							Local.doCharge("act", true, 1000);
						} else {
							Local.go("raiders.html");
							console.log("lingqugonglue");
						}
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			},
			shawmask: function shawmask(e) {
				var self = this;
				var ejectMask = this.$children[0];
				var $cur = $(e.currentTarget);
				var type = $cur.parent().data('type');
				self.prizetype = type;
				self.mask = true;
			}
		},
		created: function created() {
			this.initpage();
		}
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(5);
	__vue_script__ = __webpack_require__(9);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskLoading.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(10);
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
	    var id = "_v-0a568631/MaskLoading.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {};
		},
		mounted: function mounted() {}
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskLoading\" _v-0a568631=\"\">\n\t<p class=\"_text\" _v-0a568631=\"\">加载中...</p>\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(12);
	__vue_template__ = __webpack_require__(14);
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
	    var id = "_v-37fa9a2f/MaskOver.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"over\" _v-37fa9a2f=\"\">\n\t<div class=\"over-c\" _v-37fa9a2f=\"\">\n        <img :src=\"'img/over.png'\" alt=\"本期活动已结束\" _v-37fa9a2f=\"\">\n        <p class=\"over-p1\" _v-37fa9a2f=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-37fa9a2f=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(16);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ejectMask.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(17);
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
	    var id = "_v-c3851684/ejectMask.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {};
		},
		props: ['type', 'mask'],
		mounted: function mounted() {},
		methods: {
			closemask: function closemask() {
				this.mask = false;
			}
		}
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask\">\n\t<div class=\"tiparea\">\n\t\t<div class=\"prize\" v-if=\"type==1\">\n\t\t\t<img :src=\"'img/shubi.png'\">\n\t\t\t<h4>书币<br>1000书币=10元</h4>\n\t\t\t<p>书币可用于购买QQ阅读书城的书籍</p>\n\t\t</div>\t\t\n\t\t<div class=\"prize\" v-if=\"type==2\">\n\t\t\t<img :src=\"'img/shuquan.png'\">\n\t\t\t<h4>100书券=100书币</h4>\n\t\t\t<p>书券可用于购买QQ阅读书城的书籍，15天有效期</p>\n\t\t</div>\n\t\t<div class=\"prize\" v-if=\"type==3\">\n\t\t\t<img :src=\"'img/tuijianp.png'\">\n\t\t\t<h4>推荐票</h4>\n\t\t\t<p>决定一部作品在推荐榜单的排名，限当天使用，快投给你喜欢的作品</p>\n\t\t</div>\n\t\t<div class=\"prize\" v-if=\"type==4\">\n\t\t\t<img :src=\"'img/baoyue.png'\">\n\t\t\t<h4>包月特权</h4>\n\t\t\t<p>体验3天包月vip业务，享有包月专区10万册好书的免费特权</p>\n\t\t</div>\n\t\t<div class=\"prize\" v-if=\"type==5\">\n\t\t\t<img :src=\"'img/chengzhangz.png'\">\n\t\t\t<h4>成长值</h4>\n\t\t\t<p>助力升级，成长等级飞升，等级越高，领取的月度等级礼包越大</p>\n\t\t</div>\t\t\n\t\t<a href=\"javascript:\" class=\"closbtn\" @click=\"closemask\">我知道啦</a>\n\t</div>\n</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\" v-show=\"!over\">\n\t\t<div class=\"topbox\">\n\t\t\t<p class=\"adtime\">活动时间：12.5~12.12</p>\n\t\t\t<p class=\"title\">你充我就送大礼</p>\n\t\t\t<div class=\"shubi\" data-type=\"1\"><img :src=\"'img/icon_sb.png'\"><span @click=\"shawmask\"></span></div>\n\t\t\t<ul class=\"prizelist\">\n\t\t\t\t<li><a href=\"javascript:\" data-type=\"2\">100书券<span @click=\"shawmask\"></span></a></li>\n\t\t\t\t<li><a href=\"javascript:\" data-type=\"3\">3张推荐票<span @click=\"shawmask\"></span></a></li>\n\t\t\t\t<li><a href=\"javascript:\" data-type=\"4\">3天包月特权<span @click=\"shawmask\"></span></a></li>\n\t\t\t\t<li><a href=\"javascript:\" data-type=\"5\">100成长值<span @click=\"shawmask\"></span></a></li>\n\t\t\t</ul>\n\t\t\t<p class=\"title2\">微信支付充10元且关注QQ阅读公众号即可领取礼包</P>\n\t\t\t<div class=\"page_btn\" @click=\"recharge\">\n\t\t\t\t<a>\n\t\t\t\t\t<img :src=\"'img/icon_wx.png'\" class=\"icon_wx\" v-show=\"!czcg\">\n\t\t\t\t\t<img :src=\"'img/libao.png'\" class=\"icon_lb\" v-show=\"czcg\">\n\t\t\t\t\t{{ picked ?'礼包已领取':czcg ?'如何领取礼包':'微信支付充1000书币领礼包' }}\n\t\t\t\t<ul class=\"arrows\"><img :src=\"'img/arrow.png'\"><img :src=\"'img/arrow.png'\"><img :src=\"'img/arrow.png'\"></ul>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<p class=\"title3\">请选择<span>“微信支付95折”</span>，否则无法领取</P>\n\t\t</div>\n\t\t<!--攻略-->\n\t\t<div class=\"raiders\">\n\t\t\t<h4>礼包攻略：</h4>\n\t\t\t<ul>\n\t\t\t\t<li><span>1</span>选择“微信支付”，充值“1000书币”</li>\n\t\t\t\t<li><span>2</span>在充值成功的页面上勾选关注“QQ阅读”公众号<img :src=\"'img/gz_qqyd.png'\"></li>\n\t\t\t\t<li><span>3</span>也可以手动在微信上搜索“QQ阅读”进行关注<img :src=\"'img/ss_qqyd.png'\"></li>\n\t\t\t\t<li><span>4</span>前往公众号活动页即可领取礼包奖励，每人仅限一次</li>\n\t\t\t\t<li><span>5</span>活动时间：12月5日15:00~12月12日24:00</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<p class=\"copyright\">本活动最终解释权归QQ阅读所有</p>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<ejectmask v-show=\"mask\" :type=\"prizetype\" :mask.sync=\"mask\"></ejectmask>\n</div>\n\n";

/***/ }
/******/ ]);