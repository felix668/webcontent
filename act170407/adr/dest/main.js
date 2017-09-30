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
	    var id = "_v-99e89b1c/app.vue";
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
				showbrowers: false,
				downshow: false,
				totalNum: '31068128',
				totals: [],
				endtimes: '18:00',
				provinceNum: [{
					proName: '京津冀晋泸京津',
					proNum: '876221'
				}, {
					proName: '京津冀晋泸京津',
					proNum: '876221',
					prott: ''
				}, {
					proName: '京津冀晋泸京津',
					proNum: '876221',
					prott: ''
				}, {
					proName: '京津冀晋泸京津',
					proNum: '876221',
					prott: ''
				}, {
					proName: '京津冀晋泸京',
					proNum: '876221',
					prott: ''
				}],
				shareObj: {
					url: "",
					cover: "",
					title: "423全民阅读，共读中国梦",
					desc: "亿万人齐聚QQ阅读，共创阅读纪录"
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
				Local.reqaObj(server() + "pkg170407/init", function (data) {
					console.log(data);
					self.loading = false;
					if (data.code == -4) {}

					self.endtimes = data.time;
					self.totals = self.totalNum.split('');
					var timer = null;
					timer = setTimeout(function () {
						$(".totalnum li").addClass('active');timer = null;
					}, 50);
					var len = data.provinceNum.length;
					for (var i = 0; i < len; i++) {
						self.provinceNum[i].proName = self.provinceNum[i].proName.split('').join(' ');
					}
					self.shareObj.url = front() + "act170407/com/index.html?tf=1&act_f=170407";
					self.shareObj.cover = front() + "act170407/adr/public/images/cover.jpg";
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"), 'zgmindex' + self.urlis);
			},
			gotoapp: function gotoapp() {
				var self = this;
				S.open(function (installStat, plat) {
					if (env.vw == 'wb') {
						self.showbrowers = true;
					} else {

						if (installStat) {
							if (env.pt == "adr") {
								N.openPage("http://iyuedu.qq.com/event/act170407/adr/index.html?act_f=170407");
							} else if (env.vw == "wx" && env.pt == "ios") {
								N.openPage('https://yuedu.reader.qq.com/event/act170407/ios/index.html?act_f=170407');
								setTimeout(function () {
									self.downshow = true;
								}, 2000);
								setTimeout(function () {
									self.downshow = false;
								}, 5000);
							} else {
								N.openPage("https://yuedu.reader.qq.com/event/act170407/ios/index.html?act_f=170407");
							}
						} else {
							self.downshow = true;
						}
					}
					forceLog(param("act_f"), "170407_openapp" + env.pt);
				});
			},
			goall: function goall() {
				var self = this;
				if (self.urlis == 'com') {
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
							}
							forceLog(param("act_f"), "170407_sharegojhy");
						});
					}
				} else if (self.urlis == 'adr') {
					Local.openPage('http://iyuedu.qq.com/event/act170410/index.html?act_f=170410');
					forceLog(param("act_f"), "170407_gojhy");
				} else {
					Local.openInside('https://yuedu.reader.qq.com/event/act170410/index.html?act_f=170410');
					forceLog(param("act_f"), "170407_gojhy");
				}
			},
			shared: function shared() {
				var self = this;
				if (self.urlis == 'com') {
					self.gotoapp();
				} else {
					Local.shareTopic(self.shareObj.url, self.shareObj.cover, self.shareObj.title, self.shareObj.desc, 1);
					forceLog(param("act_f"), "170407_sharebtn");
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
	    var id = "_v-02f8d861/MaskLoading.vue";
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

	module.exports = "\n<div class=\"MaskLoading\" _v-02f8d861=\"\">\n\t<p class=\"_text\" _v-02f8d861=\"\"><img :src=\"'../adr/public/images/loading.png'\" _v-02f8d861=\"\">正在加载...</p>\n</div>\n";

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
	    var id = "_v-42d4f5ff/MaskOver.vue";
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

	module.exports = "\n<div class=\"over\" _v-42d4f5ff=\"\">\n\t<div class=\"over-c\" _v-42d4f5ff=\"\">\n        <img :src=\"'../adr/public/images/over.png'\" alt=\"本期活动已结束\" _v-42d4f5ff=\"\">\n        <p class=\"over-p1\" _v-42d4f5ff=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-42d4f5ff=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

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
	    var id = "_v-4cb60633/MaskDownload.vue";
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
				N.downLoad(null, '10026763');
				this.show = false;
			}
		}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskDownload\" _v-4cb60633=\"\">\n\t<div class=\"mask-panel\" _v-4cb60633=\"\">\n\t\t<div class=\"top\" _v-4cb60633=\"\">下载QQ阅读，畅读海量小说</div>\n\t\t<p class=\"middle\" _v-4cb60633=\"\">如果还未安装QQ阅读，你可以：</p>\n\t\t<ul class=\"bottom\" _v-4cb60633=\"\">\n\t\t\t<li class=\"confirm\" @click=\"downapp\" _v-4cb60633=\"\">下载QQ阅读</li>\n\t\t\t<li class=\"cancel\" @click=\"closemask\" _v-4cb60633=\"\">取消</li>\n\t\t</ul>\n\t</div>\n</div>\n";

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
	    var id = "_v-143e2653/MaskBrowers.vue";
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

	module.exports = "\n<div class=\"maskbrow\" @click=\"closemask()\" _v-143e2653=\"\">\n\t<img :src=\"'../adr/public/images/browers.png'\" _v-143e2653=\"\">\n</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\">\n\t\t<div class=\"banner\">\n\t\t\t<img :src=\"'../adr/public/images/banner.jpg'\" />\n\t\t</div>\n\t\t<div class=\"mainbox\">\n\t\t\t<ul class=\"totalnum\">\n\t\t\t\t<li v-for=\"(item,ind) in totals\" :class=\"'n'+item\"></li>\n\t\t\t</ul>\n\t\t\t<p class=\"endtimer\">截止时间：4月23日 {{ endtimes }}</p>\n\t\t\t<ul class=\"probox\">\n\t\t\t\t<li v-for=\"(item,ind) in provinceNum\" :class=\"'pro'+ind\">\n\t\t\t\t\t{{item.proName+'（'+item.proNum+'）'}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class=\"peotry\">\n\t\t\t\t<h4>沁园春·长沙</h4>\n\t\t\t\t<p class=\"author\">／毛泽东／</p>\n\t\t\t\t<p>独立寒秋，湘江北去，橘子洲头。<br>\n\t\t\t\t\t看万山红遍，层林尽染；漫江碧透，百舸争流。<br>\n\t\t\t\t\t鹰击长空，鱼翔浅底，万类霜天竞自由。<br>\n\t\t\t\t\t怅寥廓，问苍茫大地，谁主沉浮？<br>\n\t\t\t\t\t携来百侣曾游，忆往昔峥嵘岁月稠。<br>\n\t\t\t\t\t恰同学少年，风华正茂；书生意气，挥斥方遒。<br>\n\t\t\t\t\t指点江山，激扬文字，粪土当年万户侯。<br>\n\t\t\t\t\t曾记否，到中流击水，浪遏飞舟？\n\t\t\t\t</p>\n\t\t\t\t<img :src=\"'../adr/public/images/go.png'\" @click=\"goall\" />\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"sharbtn\"><a @click=\"shared\">{{ urlis=='com'?'更多原著，去QQ阅读':'邀请好友，共读好书' }}<img :src=\"'../adr/public/images/arrow.png'\" /></a></div>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<mask-browes v-show=\"showbrowers\"></mask-browes>\n\t<mask-download v-show=\"downshow\" :show.sync=\"downshow\"></mask-download>\n</div>\n";

/***/ }
/******/ ]);