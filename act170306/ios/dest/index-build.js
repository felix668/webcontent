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
	    var id = "_v-09939738/app.vue";
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
			maskPrize: __webpack_require__(15)
		},
		data: function data() {
			return {
				loading: true,
				over: false,
				isLogin: true,
				showprize: false,
				masktype: 0,
				bookbid: '478670',
				shared: true,
				isPrize: false,
				draw: true,
				prizeNum: 0,
				prizename: ['精美手办', '钥匙扣', '100成长值', '50阅券', '帽子'],
				prizeinfo: '',
				prizeimg: ['images/gshouban.png', 'images/gyaoshikou.png', 'images/gchengzz.png', 'images/gquan.png', 'images/gmaozi.png'],
				bkbid: '',
				shareObj: {
					url: "",
					cover: "",
					title: "全职高手动画首播",
					desc: "动画、手办、免费原著你要的这里都有！心怀荣耀，战无不胜！"
				},
				state: 'paused',
				loaded: false,
				ticked: '',
				isguest: '',
				videosrc: 'https://v.qq.com/iframe/player.html?vid=x002353t5ih&tiny=0&auto=0',
				vid: ['x002353t5ih', 'n002397drjl']
			};
		},
		methods: {
			initpage: function initpage() {
				var self = this;
				Local.reqaObj(server() + "pkg170306/init", function (data) {
					self.loading = false;
					console.log(data);
					if (data.code == -4) {
						self.over = true;
					}
					self.isLogin = data.isLogin;
					self.shared = data.shared;
					self.isPrize = data.picked;
					self.reserved = data.reserved;
					self.isguest = data.isguest;
					self.ticked = encodeURIComponent(data.shareticket);
					self.shareObj.url = front() + "act170306/com/index.html?tf=1&z-tickt=" + self.ticked + '&guest=' + self.isguest;
					self.shareObj.cover = front() + "act170306/com/images/covers.jpg";
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
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
			gocontact: function gocontact() {
				var self = this;
				if (self.isLogin) {
					Local.openInside('https://yuedu.reader.qq.com/event/act161002/ios/contact.html');
				} else {
					Local.login();
				}
			},
			gotoread: function gotoread() {
				var self = this;
				ABook.gotoRead(self.bookbid);
				forceLog(param("act_f"), "readdetail");
			},
			zhuan: function zhuan(obj, num) {
				obj.css('-webkit-transform', 'rotate(' + parseInt(1800 + num * 72) + 'deg)');
			},
			prizedraw: function prizedraw(e) {
				var $cur = $(e.currentTarget);
				var self = this;
				var timer = null;
				if (self.isLogin) {
					if (self.shared) {
						if (self.isPrize) {
							self.masktype = -1;
							self.showprize = true;
						} else {
							if (self.draw) {
								self.draw = false;
								Local.reqaObj(server() + "pkg170306/pick", function (data) {
									if (data.code < 0) {
										Local.showToast(data.msg);
									} else {
										self.prizeNum = data.prizeid;
										self.masktype = 0;
										self.zhuan($('.prizebtn'), self.prizeNum);
										timer = setTimeout(function () {
											self.showprize = true;
											self.isPrize = true;
											timer = null;
										}, 4000);
										if (self.prizeNum == 0 || self.prizeNum == 1 || self.prizeNum == 4) {
											self.prizeinfo = "请认真填写地址，奖品将在15个工作日发出哦";
										}
										if (self.prizeNum == 3) {
											self.prizeinfo = "书券/阅券仅限订阅书籍，订阅时将优先扣除，请在有效期内使用哦";
										}
										if (self.prizeNum == 2) {
											self.prizeinfo = "成长值决定你的成长等级，等级越高可获奖励越多";
										}
									}
								}, [], function () {
									Local.showToast("网络异常，请稍候重试");
								}, 1);
							}
						}
					} else {
						self.masktype = -2;
						self.showprize = true;
					}
				} else {
					Local.login();
					console.log('denglu');
				}
			},
			sharefn: function sharefn(e) {
				var self = this;
				var $cur = $(e.currentTarget);
				var timeer = null;
				if (self.isLogin) {
					if (self.isguest) {
						timeer = setTimeout(function () {
							Local.reqaObj(server() + "pkg170306/sharesuccess", function (data) {
								self.shared = true;
							}, [], function () {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
							timeer = null;
						}, 2000);
					};
					Local.shareTopic(self.shareObj.url, self.shareObj.cover, self.shareObj.title, self.shareObj.desc, 1);
					forceLog(param("act_f"), "sharebtn");
				} else {
					Local.login();
				}
			}
		},
		created: function created() {
			var self = this;
			self.initpage();
			window.afterShare = function () {
				Local.reqaObj(server() + "pkg170306/sharesuccess", function (data) {
					self.shared = true;
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
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
	    var id = "_v-fb6ad1b2/MaskLoading.vue";
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

	module.exports = "\n<div class=\"MaskLoading\" _v-fb6ad1b2=\"\">\n\t<p class=\"_text\" _v-fb6ad1b2=\"\"><img :src=\"'images/loading.png'\" _v-fb6ad1b2=\"\">正在加载...</p>\n</div>\n";

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
	    var id = "_v-4b7b1cf9/MaskOver.vue";
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

	module.exports = "\n<div class=\"over\" _v-4b7b1cf9=\"\">\n\t<div class=\"over-c\" _v-4b7b1cf9=\"\">\n        <img :src=\"'images/over.png'\" alt=\"本期活动已结束\" _v-4b7b1cf9=\"\">\n        <p class=\"over-p1\" _v-4b7b1cf9=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-4b7b1cf9=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(16);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskPrize.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-06637086/MaskPrize.vue";
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
		props: ['show', 'type', 'prizety', 'pname', 'pinfo', 'pimg', 'shareinfo', 'sharherf', 'guest'],
		data: function data() {
			return {};
		},
		methods: {
			closemask: function closemask() {
				this.$parent.showprize = false;
			},
			share: function share() {
				var self = this;
				Local.shareTopic(self.shareinfo.url, self.shareinfo.cover, self.shareinfo.title, self.shareinfo.desc, 1);
				this.$parent.showprize = false;
				if (self.guest) {
					timeer = setTimeout(function () {
						Local.reqaObj(server() + "pkg170306/sharesuccess", function (data) {
							self.$parent.shared = true;
							console.log(self.guest);
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
						timeer = null;
					}, 2000);
				};
				forceLog(param("act_f"), "sharebtn");
			},
			goadress: function goadress() {
				Local.openInside('https://yuedu.reader.qq.com/event/act161002/ios/contact.html');
				this.$parent.showprize = false;
			},
			goread: function goread() {
				ABook.gotoRead('478670');
			}
		}

	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask\">\n\t<div class=\"teaparea\" v-show=\"type==-2 || type==-1\">\n\t\t<div class=\"closeicon\"  @click=\"closemask()\"></div>\n\t\t<div class=\"prizeicon\"></div>\n\t\t<h4>{{ type==-2 ?\"分享抽好礼 100%中奖\":\"已经抽过奖励\" }}</h4>\n\t\t<p>{{ type==-2 ?\"分享后返回QQ阅读即可抽取好礼\":\"把机会留给好友吧\" }}</p>\n\t\t<a class=\"btnaction\" @click=\"share()\">{{type==-2?\"分享抽奖\":\"分享给好友\"}}</a>\n\t</div>\n\t<div class=\"teaparea prizemask\" v-show=\"type==0\">\n\t\t<div v-if=\"guest && prizety==2\">\n\t\t\t<div class=\"closeicon\"  @click=\"closemask()\"></div>\n\t\t\t<div class=\"thanks\"></div>\n\t\t\t<h4>很遗憾未中奖哦</h4>\n\t\t\t<p>《全职高手》现在免费中，快去看看吧</p>\n\t\t\t<a class=\"btnaction\" @click=\"goread()\">去看限免</a>\n\t\t</div>\n\t\t<div v-else>\n\t\t\t<div class=\"titles\">恭喜你</div>\n\t\t\t<h4>获得<span>{{ pname[prizety] }}</span></h4>\n\t\t\t<img :src=\"pimg[prizety]\" class=\"prizepic\" />\n\t\t\t<p>{{ pinfo }}</p>\n\t\t\t<a class=\"btnaction\" v-show=\"prizety==2 || prizety==3 \" @click=\"closemask()\">知道啦</a>\n\t\t\t<a class=\"btnaction\" v-show=\"prizety==0 || prizety==1 || prizety==4 \" @click=\"goadress()\">填写奖品收获地址</a>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\">\n\t\t<div class=\"bammerbox\">\n\t\t\t<div class=\"tt video\">动画抢先看</div>\n\t\t\t<div class=\"videobox\">\n\t\t\t\t<div class=\"vvbox\">\n\t\t\t\t\t <iframe frameborder=\"0\" width=\"100%\" height=\"100%\" :src=\"videosrc\" allowfullscreen></iframe>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ul class=\"videoselect\">\n\t\t\t\t<li class=\"active\" @click=\"videosel(vid[0],$event)\">第一集</li>\n\t\t\t\t<li @click=\"videosel(vid[1],$event)\">第二集</li>\n\t\t\t</ul>\n\t\t\t<div class=\"tt\">动画追更不过瘾 原著看剧透</div>\n\t\t\t<div class=\"newbook\">\n\t\t\t\t<div class=\"bookface\" @click=\"gotoread()\"></div>\n\t\t\t\t<div class=\"bookinfo\">\n\t\t\t\t\t<h4>全职高手</h4>\n\t\t\t\t\t<p>叶秋，荣耀中的顶尖高手王者。带着对往昔的回忆和一把未完成的自制武器，走上重返巅峰之路！</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"btnbox\">\n\t\t\t\t<a class=\"freeread\" @click=\"gotoread()\">原著限时免费读 ></a>\n\t\t\t</div>\n\t\t\t<div class=\"tt\">赢取动画周边礼</div>\n\t\t\t<div class=\"sharebox\">\n\t\t\t\t<a class=\"sharebtn\" v-bind:class=\"{shareafter:shared}\" @click=\"sharefn($event)\">{{ shared?'分享给好友':'分享活动赢好礼'}} ></a>\n\t\t\t\t<p class=\"notice\" v-show=\"!shared\">抽奖秘诀：分享完要返回“QQ阅读”才可以抽奖哦</p>\n\t\t\t</div>\n\t\t\t<div class=\"prizebox\" v-bind:class=\"{ guest:isguest}\">\n\t\t\t\t<div class=\"prizebtn\"></div>\n\t\t\t\t<a class=\"startprize\" @click=\"prizedraw($event)\"></a>\n\t\t\t</div>\n\t\t\t<div class=\"rules\">\n\t\t\t\t<p>活动规则</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><span>1.</span>活动时间：4月7日—4月10日</li>\n\t\t\t\t\t<li><span>2.</span>活动期间，全职高手全本限时免费4天，从客户端内分享页面还能获得一次抽奖机会</li>\n\t\t\t\t\t<li><span>3.</span>每位用户可多次分享，但仅能参加一次抽奖</li>\n\t\t\t\t\t<li><span>4.</span>分享至微信后需要立刻点击“回到QQ阅读”才能获得限免，选择“留在微信/QQ”视为分享失败</li>\n\t\t\t\t\t<li><span>5.</span>请从QQ阅读客户端内发起分享获得限免，其他平台二次分享暂不能获得抽奖机会</li>\n\t\t\t\t\t<li><span>6.</span>分享至微博平台暂不支持参加抽奖活动</li>\n\t\t\t\t\t<li><span>7.</span>中实物奖励后<a @click=\"gocontact()\">请认真填写地址</a>，将在15个工作日内寄出</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"copyright\">本活动最终解释权归QQ阅读所有</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<mask-prize v-show=\"showprize\" :show=\"showprize\" :type=\"masktype\" :prizety=\"prizeNum\" :pname=\"prizename\" :pinfo=\"prizeinfo\" :pimg=\"prizeimg\" :shareinfo=\"shareObj\" :guest=\"isguest\"></mask-prize>\n</div>\n";

/***/ }
/******/ ]);