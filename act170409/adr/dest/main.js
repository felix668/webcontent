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
	__vue_template__ = __webpack_require__(25);
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
	    var id = "_v-dfdc8118/app.vue";
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
			maskDownload: __webpack_require__(15),
			maskBrowes: __webpack_require__(20)
		},
		data: function data() {
			return {
				loading: true,
				over: false,
				urlis: '',
				islogin: false,
				showbrowers: false,
				showrule: true,
				downshow: false,
				showtab: false,
				tabs: ['共读青春', '共读诗歌', '共读爱情', '共读经典'],
				tablist: [],
				tabstaus: 4,
				shareObj: {
					url: "",
					cover: "",
					title: "423全民阅读，全明星共读之夜",
					desc: "今夜，QQ阅读携手易烊千玺等众星邀你一起读"
				}
			};
		},
		computed: {
			urlis: function urlis() {
				var el = document.querySelector('html');
				var val = el.getAttribute('platform');
				var platname = void 0;
				if (val == 'adr') {
					platname = 'adr';
				} else if (val == 'com') {
					platname = 'com';
				} else {
					platname = 'ios';
				}
				return platname;
			}
		},
		methods: {
			initpage: function initpage() {
				var self = this;
				var el = document.querySelector('html');
				self.urlis = el.getAttribute('platform');

				if (self.urlis == 'adr') {
					Local.init();
				}
				if (self.urlis == 'com') {
					self.showrule = false;
				}
				Local.reqaObj(server() + "pkg170409/init?pt=" + self.urlis, function (data) {
					console.log(data);
					self.loading = false;
					if (data.code == -4) {}

					self.tabdiff(self.tabstaus);
					self.shareObj.url = front() + "act170409/com/index.html?tf=1&act_f=170409";
					self.shareObj.cover = front() + "act170409/adr/public/images/coverm.jpg";
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			},
			tabdiff: function tabdiff(ind) {
				var self = this;
				if (ind > 0) {
					(function () {
						var timer = null;
						var num = ind + 1;
						self.showtab = true;
						self.tablist = self.tabs.slice(0, num);
						timer = setTimeout(function () {
							$('.swiper-wrapper li').eq(0).addClass('active').siblings().removeClass('active');
							$('.tabbox li').eq(0).removeClass('hide').siblings().addClass('hide');
							var win = $('.swiper-wrapper li').width() * num;
							var winW = document.body.clientWidth;
							var disX = winW - win;
							var len = $('.swiper-wrapper li').length;
							console.log(win);
							if (len > 3) {
								$(".tabdiff").removeClass('tablist');
								$('.tabdiff').each(function () {
									$(this).swiper({
										speed: 200,
										slidesPerView: 'auto',
										calculateHeight: true
									});
								});
							}
							timer = null;
						}, 80);
					})();
				} else {
					self.showtab = false;
				}
			},
			goall: function goall() {
				var self = this;
				if (self.urlis == 'com') {
					S.open(function (installStat, plat) {
						if (env.vw == 'wb') {
							self.showbrowers = true;
						} else {

							if (installStat) {
								if (env.pt == "adr") {
									N.openPage("http://iyuedu.qq.com/event/act170410/index.html?act_f=170410");
								} else if (env.vw == "wx" && env.pt == "ios") {
									N.openPage('https://yuedu.reader.qq.com/event/act170410/index.html?act_f=170410');
									setTimeout(function () {
										self.downshow = true;
									}, 2000);
									setTimeout(function () {
										self.downshow = false;
									}, 5000);
								} else {
									N.openPage("https://yuedu.reader.qq.com/event/act170410/index.html?act_f=170410");
								}
							} else {
								self.downshow = true;
							}
							forceLog(param("act_f"), "170409_sharegojhy");
						}
					});
				} else if (self.urlis == 'adr') {
					Local.openPage('http://iyuedu.qq.com/event/act170410/index.html?act_f=170410');
					forceLog(param("act_f"), "170409_gojhy");
				} else {
					Local.openInside('https://yuedu.reader.qq.com/event/act170410/index.html?act_f=170410');
					forceLog(param("act_f"), "170409_gojhy");
				}
			},
			tabswitch: function tabswitch(e) {
				var self = this;
				var $cur = $(e.currentTarget);
				var ind = $cur.index();
				forceLog(param("act_f"), "170409_tabdiff" + ind);
				$('.swiper-wrapper li').eq(ind).addClass('active').siblings().removeClass('active');
				$('.tabbox li').eq(ind).removeClass('hide').siblings().addClass('hide');
			},
			gotoapp: function gotoapp() {
				var self = this;
				S.open(function (installStat, plat) {

					if (env.vw == 'wb') {
						self.showbrowers = true;
					} else {
						if (installStat) {
							if (env.pt == "adr") {
								N.openPage("http://iyuedu.qq.com/event/act170409/adr/index.html?act_f=170409");
							} else if (env.vw == "wx" && env.pt == "ios") {
								N.openPage("https://yuedu.reader.qq.com/event/act170409/ios/index.html?act_f=170409");
								setTimeout(function () {
									self.downshow = true;
								}, 2000);
								setTimeout(function () {
									self.downshow = false;
								}, 5000);
							} else {
								N.openPage("https://yuedu.reader.qq.com/event/act170409/ios/index.html?act_f=170409");
							}
						} else {
							self.downshow = true;
						}
					}
					forceLog(param("act_f"), "170409_openBtn" + env.pt);
				});
			},
			godetail: function godetail(bid) {
				var self = this;
				if (self.urlis == 'com') {
					self.gotoapp();
				} else {
					ABook.gotoDetail(bid);
					forceLog(param("act_f"), "170409_bookdetail" + bid);
				}
			},
			shared: function shared() {
				var self = this;
				if (self.urlis == 'com') {
					self.gotoapp();
				} else {
					Local.shareTopic(self.shareObj.url, self.shareObj.cover, self.shareObj.title, self.shareObj.desc, 1);
					forceLog(param("act_f"), "170409_shared");
				}
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
	    var id = "_v-1c2ac363/MaskLoading.vue";
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

	module.exports = "\n<div class=\"MaskLoading\" _v-1c2ac363=\"\">\n\t<p class=\"_text\" _v-1c2ac363=\"\"><img :src=\"'../adr/public/images/loading.png'\" _v-1c2ac363=\"\">正在加载...</p>\n</div>\n";

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
	    var id = "_v-680e8b86/MaskOver.vue";
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

	module.exports = "\n<div class=\"over\" _v-680e8b86=\"\">\n\t<div class=\"over-c\" _v-680e8b86=\"\">\n        <img :src=\"'../adr/public/images/over.png'\" alt=\"本期活动已结束\" _v-680e8b86=\"\">\n        <p class=\"over-p1\" _v-680e8b86=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-680e8b86=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(16);
	__vue_script__ = __webpack_require__(18);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskDownload.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-59c17b71/MaskDownload.vue";
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

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {};
		},
		props: ['show'],
		mounted: function mounted() {},
		methods: {
			closemask: function closemask() {
				this.show = false;
				console.log(self.show);
			},
			downapp: function downapp() {
				N.downLoad(null, '10026762');
				this.show = false;
			}
		}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskDownload\" _v-59c17b71=\"\">\n\t<div class=\"mask-panel\" _v-59c17b71=\"\">\n\t\t<div class=\"top\" _v-59c17b71=\"\">下载QQ阅读，畅读海量小说</div>\n\t\t<p class=\"middle\" _v-59c17b71=\"\">如果还未安装QQ阅读，你可以：</p>\n\t\t<ul class=\"bottom\" _v-59c17b71=\"\">\n\t\t\t<li class=\"confirm\" @click=\"downapp\" _v-59c17b71=\"\">下载QQ阅读</li>\n\t\t\t<li class=\"cancel\" @click=\"closemask\" _v-59c17b71=\"\">取消</li>\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(21);
	__vue_script__ = __webpack_require__(23);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskBrowers.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-2d701155/MaskBrowers.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  data: function data() {
	    return {};
	  },
	  methods: {
	    closemask: function closemask() {
	      this.$parent.showbrowers = false;
	    }
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"maskbrow\" @click=\"closemask()\" _v-2d701155=\"\">\n\t<img :src=\"'../adr/public/images/browers.png'\" _v-2d701155=\"\">\n</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\">\n\t\t<div class=\"tabdiff tablist swiper-container\" v-show=\"showtab\">\n\t\t\t<ul class=\"swiper-wrapper\">\n\t\t\t\t<li class='swiper-slide' @click=\"tabswitch($event)\" v-for=\"(item,ind) in tablist\"><span>{{item}}</span></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<ul class=\"tabbox\">\n\t\t\t<li class=\"tabcon\">\n\t\t\t\t<img :src=\"'../adr/public/images/img1.png'\" />\n\t\t\t\t<div class=\"box\">\n\t\t\t\t\t<div class=\"bookbox\">\n\t\t\t\t\t\t<div class=\"book\" @click=\"godetail('855885')\">\n\t\t\t\t            <img class=\"cover\" :src=\"'../adr/public/images/3.jpg'\"/>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"bookinfo\">\n\t\t\t\t        \t虫子书\n\t\t\t\t        \t<p>这不是关于虫子的故事，而是虫子们自己的神奇作品。</p>\n\t\t\t\t        \t<p class='freet'>免费阅读时间至2017.4.26</p>\n\t\t\t\t        \t<a @click=\"godetail('855885')\">立即阅读</a>\n\t\t\t\t        </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bookbox\">\n\t\t\t\t\t\t<div class=\"book\" @click=\"godetail('831784')\">\n\t\t\t\t            <img class=\"cover\" :src=\"'../adr/public/images/4.jpg'\"/>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"bookinfo\">\n\t\t\t\t        \t草房子\n\t\t\t\t        \t<p>安徒生奖得主曹文轩经典之作，感动人心，催人泪下。</p>\n\t\t\t\t        \t<p class='freet'>免费阅读时间至2017.5.1</p>\n\t\t\t\t        \t<a @click=\"godetail('831784')\">立即阅读</a>\n\t\t\t\t        </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"tabcon hide\">\n\t\t\t\t<img :src=\"'../adr/public/images/img0.png'\" />\n\t\t\t\t<div class=\"box\">\n\t\t\t\t\t<div class=\"bookbox\">\n\t\t\t\t\t\t<div class=\"book\" @click=\"godetail('814861')\">\n\t\t\t\t            <img class=\"cover\" :src=\"'../adr/public/images/0.jpg'\"/>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"bookinfo\">\n\t\t\t\t        \t唐诗三百首全集\n\t\t\t\t        \t<p>国学之美！清代蘅塘退士选编本，流传至今的唐诗集。</p>\n\t\t\t\t        \t<p class='freet'>免费阅读时间至2017.5.1</p>\n\t\t\t\t        \t<a @click=\"godetail('814861')\">立即阅读</a>\n\t\t\t\t        </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bookbox\">\n\t\t\t\t\t\t<div class=\"book\" @click=\"godetail('808014')\">\n\t\t\t\t            <img class=\"cover\" :src=\"'../adr/public/images/1.jpg'\"/>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"bookinfo\">\n\t\t\t\t        \t诗经\n\t\t\t\t        \t<p>不学诗，无以言！变易之道、忧患意识、君子风骨，尽在书中。</p>\n\t\t\t\t        \t<p class='freet'>免费阅读时间至2017.4.23</p>\n\t\t\t\t        \t<a @click=\"godetail('808014')\">立即阅读</a>\n\t\t\t\t        </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bookbox\">\n\t\t\t\t\t\t<div class=\"book\" @click=\"godetail('847306')\">\n\t\t\t\t            <img class=\"cover\" :src=\"'../adr/public/images/2.jpg'\"/>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"bookinfo\">\n\t\t\t\t        \t苏东坡诗词全集\n\t\t\t\t        \t<p>收录苏轼经典诗词，并有精彩题解及详尽注释，堪称佳本！</p>\n\t\t\t\t        \t<p class='freet'>免费阅读时间至2017.5.1</p>\n\t\t\t\t        \t<a @click=\"godetail('847306')\">立即阅读</a>\n\t\t\t\t        </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t\n\t\t\t<li class=\"tabcon hide\">\n\t\t\t\t<img :src=\"'../adr/public/images/img2.png'\" />\n\t\t\t\t<div class=\"box\">\n\t\t\t\t\t<div class=\"bookbox\">\n\t\t\t\t\t\t<div class=\"book\" @click=\"godetail('544275')\">\n\t\t\t\t            <img class=\"cover\" :src=\"'../adr/public/images/5.jpg'\"/>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"bookinfo\">\n\t\t\t\t        \t玉观音\n\t\t\t\t        \t<p>孙俪、赵薇、佟大为深情演绎，海岩感动亿万读者的巅峰杰作！</p>\n\t\t\t\t        \t<p class='freet'>免费阅读时间至2017.4.23</p>\n\t\t\t\t        \t<a @click=\"godetail('544275')\">立即阅读</a>\n\t\t\t\t        </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nobookface pt3\">\n\t\t\t\t\t\t<p class=\"tt\">平凡的世界</p>\n\t\t\t\t\t\t<p>茅盾文学奖皇冠上的明珠，激励千万青年的不朽经典。</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nobookface\">\n\t\t\t\t\t\t<p class=\"tt\">玩的就是心跳</p>\n\t\t\t\t\t\t<p>“新京派”作家王朔代表作，一本悬念迭起、扑朔迷离的奇书。</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nobookface\">\n\t\t\t\t\t\t<p class=\"tt\">婚姻保卫战</p>\n\t\t\t\t\t\t<p>《奋斗》《蜗居》之后都市婚姻大戏原著小说，直抵生活痒处。</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"tabcon hide\">\n\t\t\t\t<img :src=\"'../adr/public/images/img3.png'\" />\n\t\t\t\t<div class=\"box\">\n\t\t\t\t\t<div class=\"bookbox\">\n\t\t\t\t\t\t<div class=\"book\" @click=\"godetail('721223')\">\n\t\t\t\t            <img class=\"cover\" :src=\"'../adr/public/images/6.jpg'\"/>\n\t\t\t\t        </div>\n\t\t\t\t        <div class=\"bookinfo\">\n\t\t\t\t        \t三国演义\n\t\t\t\t        \t<p>一百年波澜壮阔的历史画卷，影响一生的中国经典必读名著。</p>\n\t\t\t\t        \t<p class='freet'>免费阅读时间至2017.5.1</p>\n\t\t\t\t        \t<a @click=\"godetail('721223')\">立即阅读</a>\n\t\t\t\t        </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t\t\n\t\t<div class=\"sherebtn\" @click=\"shared\">{{urlis=='com'?'去QQ阅读看好书':'邀请好友共读书'}}<img :src=\"'../adr/public/images/arrow.png'\" /></div>\n\t\t<img class=\"gototal\" :src=\"'../adr/public/images/go.png'\" @click=\"goall\" />\n\t\t<div class=\"rules\" v-show=\"showrule\">\n\t\t\t<h4>－ 活动规则－</h4>\n\t\t\t<p><span>1.</span>活动时间：2017年4月23日 19:30-5月2日0点；</p>\n\t\t\t<p><span>2.</span>活动期间，部分书籍限时免费阅读；</p>\n\t\t\t<p><span>3.</span>明星次序按照湖南卫视晚会顺序排列；</p>\n\t\t\t<p><span>4.</span>本活动最终解释权归QQ阅读所有{{ urlis=='ios'?',与苹果公司无关':''}}。</p>\n\t\t</div>\n\t\t<img class=\"copyright\" :src=\"'../adr/public/images/btomcopy.jpg'\"/>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<mask-browes v-show=\"showbrowers\"></mask-browes>\n\t<mask-download v-show=\"downshow\" :show.sync=\"downshow\"></mask-download>\n</div>\n";

/***/ }
/******/ ]);