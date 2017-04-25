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
	    var id = "_v-575cf2ac/app.vue";
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
			maskLoading: __webpack_require__(5),
			maskOver: __webpack_require__(12),
			maskDownload: __webpack_require__(16),
			maskBrowes: __webpack_require__(21)
		},
		data: function data() {
			return {
				loading: true,
				over: false,
				downshow: false,
				loaded: false,
				showbrowers: false,
				username: '',
				prizename: '',
				showprize: false,
				evnios: true,
				isguest: false,
				videosrc: 'https://v.qq.com/iframe/player.html?vid=x002353t5ih&tiny=0&auto=0',
				vid: ['x002353t5ih', 'n002397drjl']
			};
		},
		methods: {
			initpage: function initpage() {
				var self = this;
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
				if (isAndroid) {
					self.evnios = false;
				} else {
					self.evnios = true;
				};
				var ticket = param('z-tickt');
				var guest = param('guest');
				$.ajax({ type: 'GET',
					url: server() + 'pkg170306/shareinit?userticket=' + ticket,
					dataType: "json",
					timeout: 5000,
					success: function success(data) {
						console.log(data);
						self.loading = false;
						if (typeof data.nick === 'string') {
							self.username = data.nick;
						};
						self.prizename = data.prize;
						if (data.prize == '') {
							self.showprize = false;
						} else {
							self.showprize = true;
						}
						if (guest) {
							self.isguest = true;
						} else {
							self.isguest = false;
						}
					},
					error: function error(xhr, type) {
						console.log(xhr, type);
					}
				});
				forceLog(param("act_f"), "qmdhindex");
			},
			videosel: function videosel(vvd, e) {
				var $cur = $(e.currentTarget);
				var self = this;
				var ind = $cur.index();
				self.videosrc = "https://v.qq.com/iframe/player.html?vid=" + vvd + "&tiny=0&auto=1";
				$cur.addClass('active').siblings().removeClass('active');
				forceLog(param("act_f"), "video");
			},
			gotoapp: function gotoapp() {
				var self = this;
				S.open(function (installStat, plat) {
					if (env.vw == 'wb') {
						self.showbrowers = true;
					} else {
						if (installStat) {

							if (env.pt == "adr") {
								N.openPage(front() + "act170306/adr/index.html?act_f=170407");
							} else if (env.vw == "wx" && env.pt == "ios") {
								N.openPage(front() + "act170306/ios/index.html?act_f=170407");
								setTimeout(function () {
									self.downshow = true;
								}, 2000);
								setTimeout(function () {
									self.downshow = false;
								}, 5000);
							} else {
								N.openPage(front() + "act170306/ios/index.html?act_f=170407");
							}
						} else {
							self.downshow = true;
						}
						forceLog(param("act_f"), "openBtn" + env.pt);
					}
				});
			}
		},
		created: function created() {
			this.initpage();
		}
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\">\n\t\t<div class=\"bammerbox\">\n\t\t\t<div class=\"tt video\">动画抢先看</div>\n\t\t\t<div class=\"videobox\">\n\t\t\t\t<div class=\"vvbox\">\n\t\t\t\t\t <iframe frameborder=\"0\" width=\"100%\" height=\"100%\" :src=\"videosrc\" allowfullscreen></iframe>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ul class=\"videoselect\">\n\t\t\t\t<li class=\"active\" @click=\"videosel(vid[0],$event)\">第一集</li>\n\t\t\t\t<li @click=\"videosel(vid[1],$event)\">第二集</li>\n\t\t\t</ul>\n\t\t\t<div class=\"tt\">动画追更不过瘾 原著看剧透</div>\n\t\t\t<div class=\"newbook\">\n\t\t\t\t<div class=\"bookface\"></div>\n\t\t\t\t<div class=\"bookinfo\">\n\t\t\t\t\t<h4>全职高手</h4>\n\t\t\t\t\t<p>叶秋，荣耀中的顶尖高手王者。带着对往昔的回忆和一把未完成的自制武器，走上重返巅峰之路！</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"btnbox\">\n\t\t\t\t<a class=\"freeread\" @click=\"gotoapp()\">原著限时免费读 ></a>\n\t\t\t</div>\n\t\t\t<div class=\"tt\">赢取动画周边礼</div>\n\t\t\t<div class=\"sharebox\">\n\t\t\t\t<a class=\"sharebtn\" @click=\"gotoapp($event)\">去QQ阅读分享活动赢好礼 ></a>\n\t\t\t\t<p class=\"shanr\" v-if=\"showprize\"><b>{{ username }}：</b>我刚刚抽到<span>{{ prizename }}</span>，你也来试试吧</p>\n\t\t\t\t<p class=\"shanr\" v-else><b>{{ username }}：</b>分享你一次抽奖，快来试试手气</p>\n\t\t\t\t<p class=\"notice\">抽奖秘诀：分享完要返回“QQ阅读”才可以抽奖哦</p>\n\t\t\t</div>\n\t\t\t<div class=\"prizebox\" v-bind:class=\"{ iosbox:evnios,guestbox:isguest }\">\n\t\t\t\t<div class=\"prizebtn\"></div>\n\t\t\t\t<a class=\"startprize\" @click=\"gotoapp($event)\"></a>\n\t\t\t</div>\n\t\t\t<div class=\"rules\">\n\t\t\t\t<p>活动规则</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><span>1.</span>活动时间：4月7日—4月10日</li>\n\t\t\t\t\t<li><span>2.</span>活动期间，全职高手全本限时免费4天，从客户端内分享页面还能获得一次抽奖机会</li>\n\t\t\t\t\t<li><span>3.</span>每位用户可多次分享，但仅能参加一次抽奖</li>\n\t\t\t\t\t<li><span>4.</span>分享至微信后需要立刻点击“回到QQ阅读”才能获得限免，选择“留在微信/QQ”视为分享失败</li>\n\t\t\t\t\t<li><span>5.</span>请从QQ阅读客户端内发起分享获得限免，其他平台二次分享暂不能获得抽奖机会</li>\n\t\t\t\t\t<li><span>6.</span>分享至微博平台暂不支持参加抽奖活动</li>\n\t\t\t\t\t<li><span>7.</span>中实物奖励后请认真填写地址，将在15个工作日内寄出</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"copyright\">本活动最终解释权归QQ阅读所有</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<mask-browes v-show=\"showbrowers\"></mask-browes>\n\t<mask-download v-show=\"downshow\" :show.sync=\"downshow\"></mask-download>\n</div>\n";

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
	    var id = "_v-798b3e9b/MaskLoading.vue";
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

	module.exports = "\n<div class=\"MaskLoading\" _v-798b3e9b=\"\">\n\t<p class=\"_text\" _v-798b3e9b=\"\"><img :src=\"'images/loading.png'\" _v-798b3e9b=\"\">正在加载...</p>\n</div>\n";

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
	    var id = "_v-4244ca05/MaskOver.vue";
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

	module.exports = "\n<div class=\"over\" _v-4244ca05=\"\">\n\t<div class=\"over-c\" _v-4244ca05=\"\">\n        <img :src=\"'images/over.png'\" alt=\"本期活动已结束\" _v-4244ca05=\"\">\n        <p class=\"over-p1\" _v-4244ca05=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-4244ca05=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(17);
	__vue_script__ = __webpack_require__(19);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskDownload.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-af1f318e/MaskDownload.vue";
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
				N.downLoad(null, '10024407');
				this.show = false;
			}
		}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskDownload\" _v-af1f318e=\"\">\n\t<div class=\"mask-panel\" _v-af1f318e=\"\">\n\t\t<div class=\"top\" _v-af1f318e=\"\">下载QQ阅读，畅读海量小说</div>\n\t\t<p class=\"middle\" _v-af1f318e=\"\">如果还未安装QQ阅读，你可以：</p>\n\t\t<ul class=\"bottom\" _v-af1f318e=\"\">\n\t\t\t<li class=\"confirm\" @click=\"downapp\" _v-af1f318e=\"\">下载QQ阅读</li>\n\t\t\t<li class=\"cancel\" @click=\"closemask\" _v-af1f318e=\"\">取消</li>\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(22);
	__vue_script__ = __webpack_require__(25);
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
	    var id = "_v-ea5ee6e6/MaskBrowers.vue";
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

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"maskbrow\" @click=\"closemask()\" _v-ea5ee6e6=\"\">\n\t<img :src=\"'./images/browers.png'\" _v-ea5ee6e6=\"\">\n</div>\n";

/***/ },
/* 25 */
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

/***/ }
/******/ ]);