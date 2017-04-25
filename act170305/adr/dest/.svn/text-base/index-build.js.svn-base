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
	__vue_template__ = __webpack_require__(23);
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
	    var id = "_v-4703b6d9/app.vue";
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
			maskSpoiler: __webpack_require__(15),
			maskPrize: __webpack_require__(20)
		},
		data: function data() {
			return {
				loading: true,
				over: false,
				isLogin: false,
				isVip: false,
				reserved: false,
				showjutou: false,
				showprize: false,
				masktype: 0,
				draw: true,
				shared: false,
				isPrize: false,
				prizeNum: 0,
				prizename: ['出版签名书', '限免书', '50书券', '漫画书', '限免书', '抱枕'],
				prizeinfo: '',
				prizeimg: ['images/gbook.png', 'images/gpfreebook.png', 'images/gquan.png', 'images/gmanbook.png', 'images/gfreebook2.png', 'images/gbaoz.png'],
				bkbid: '',
				shareObj: {
					url: "https://yuedu.reader.qq.com/event/act170305/com/index.html?act_f=170406",
					cover: "https://yuedu.reader.qq.com/event/act170305/com/images/cover.jpg",
					title: "言情天后叶非夜送你一份好礼",
					desc: "新书剧透抢先看，实物周边等你拿！"
				},
				state: 'paused',
				loaded: false,
				ticked: '',
				shareurl: ''
			};
		},
		watch: {
			state: function state(_state) {
				var _this = this;

				var self = this;
				switch (_state) {
					case 'loading':
						this.$refs.video.load();
						this.$refs.video.addEventListener('pause', function () {
							if (_this.state === 'playing') {
								_this.state = 'paused';
							}
						});

						this.$refs.video.addEventListener('loadeddata', function () {
							self.loaded = true;
						});
						break;
					case 'ready':
						if (this.loaded) {
							this.$refs.video.pause();
							this.$refs.video.currentTime = 0;
						};
						break;
					case 'playing':
						self.$refs.video.play();
						break;
					case 'paused':
						this.$refs.video.pause();
						break;
				}
			}
		},
		methods: {
			initpage: function initpage() {
				var self = this;
				Local.init();
				Local.reqaObj(server() + "pkg170305/init", function (data) {
					self.loading = false;
					if (data.code == -4) {
						self.over = true;
					}
					self.isLogin = data.isLogin;
					self.shared = data.shared;
					self.isPrize = data.picked;
					self.reserved = data.reserved;
					self.ticked = encodeURIComponent(data.shareticket);
					self.shareurl = self.shareObj.url + "&z-tickt=" + self.ticked;
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"), "yfyindex");
			},
			jutou: function jutou() {
				window.scrollTo(0, 0);
				this.showjutou = true;
				forceLog(param('act_f'), 'qiangxiankan');
			},
			gocontact: function gocontact() {
				var self = this;
				if (self.isLogin) {
					Local.go('http://iyuedu.qq.com/event/act161002/adr/contact.html');
				} else {
					Local.login();
				}
			},
			yuyue: function yuyue(e) {
				var self = this;
				var $cur = $(e.currentTarget);
				if (self.isLogin) {
					if (self.reserved) {} else {
						Local.reqaObj(server() + "pkg170305/reserve", function (data) {
							self.reserved = true;
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					}
				} else {
					Local.login();
				}
				forceLog(param('act_f'), 'yuyue');
			},
			zhuan: function zhuan(obj, num) {
				obj.css('-webkit-transform', 'rotate(' + parseInt(1800 + num * 60) + 'deg)');
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
								Local.reqaObj(server() + "pkg170305/pick", function (data) {
									console.log(data);
									if (data.code < 0) {
										Local.showToast(data.msg);
									} else {
										self.draw = false;
										self.prizeNum = data.prizeid;
										self.masktype = 0;
										self.zhuan($('.prizebtn'), self.prizeNum);
										timer = setTimeout(function () {
											self.showprize = true;
											self.isPrize = true;
											self.draw = true;
											timer = null;
										}, 4000);
										if (self.prizeNum == 0 || self.prizeNum == 3 || self.prizeNum == 5) {
											self.prizeinfo = "请认真填写地址，奖品将在15个工作日发出哦";
										}
										if (self.prizeNum == 2) {
											self.prizeinfo = "书券/阅券仅限订阅书籍，订阅时将优先扣除，请在有效期内使用哦";
										}
										if (self.prizeNum == 1 || self.prizeNum == 4) {
											self.prizeinfo = "您的限免书已经帮您加入书架，限免2天，快去阅读吧";
										}
									}
								}, [], function () {
									Local.showToast("网络异常，请稍候重试");
								}, 1);
								forceLog(param('act_f'), 'choujiang');
							}
						}
					} else {
						self.masktype = -2;
						self.showprize = true;
					}
				} else {
					Local.login();
				}
			},
			PLAY: function PLAY(e) {
				e.stopPropagation();
				var self = this;
				if (this.state === 'paused') {
					self.state = 'playing';
					this.$refs.video.play();
				}
				forceLog(param('act_f'), 'shiping');
			},
			PAUSE: function PAUSE() {
				if (this.$refs.video.ended) {
					this.$refs.video.play();
				} else {
					this.state = 'paused';
				};
			},
			onPlayerEnded: function onPlayerEnded() {
				this.state = 'paused';
			},
			sharefn: function sharefn(e) {
				var self = this;
				var $cur = $(e.currentTarget);
				if (self.isLogin) {
					Local.shareTopic(self.shareurl, self.shareObj.cover, self.shareObj.title, self.shareObj.desc, 1);
				} else {
					Local.login();
				}
				forceLog(param('act_f'), 'fenxiangbtn');
			}
		},
		created: function created() {
			var self = this;
			self.initpage();
			window.afterShare = function () {
				Local.reqaObj(server() + "pkg170305/sharesuccess", function (data) {
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
	    var id = "_v-4f94f470/MaskLoading.vue";
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

	module.exports = "\n<div class=\"MaskLoading\" _v-4f94f470=\"\">\n\t<p class=\"_text\" _v-4f94f470=\"\"><img :src=\"'images/loading.png'\" _v-4f94f470=\"\">正在加载...</p>\n</div>\n";

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
	    var id = "_v-25facc10/MaskOver.vue";
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

	module.exports = "\n<div class=\"over\" _v-25facc10=\"\">\n\t<div class=\"over-c\" _v-25facc10=\"\">\n        <img :src=\"'images/over.png'\" alt=\"本期活动已结束\" _v-25facc10=\"\">\n        <p class=\"over-p1\" _v-25facc10=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-25facc10=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(16);
	__vue_script__ = __webpack_require__(18);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskSpoiler.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-dc543964/MaskSpoiler.vue";
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

	"use strict";

	module.exports = {
		data: function data() {
			return {};
		},
		methods: {
			closemask: function closemask() {
				this.$parent.showjutou = false;
			}
		}

	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"spoilerbox\" _v-dc543964=\"\">\n\t<a class=\"close\" @click=\"closemask()\" _v-dc543964=\"\"><img :src=\"'images/close.png'\" _v-dc543964=\"\"></a>\n\t<h4 _v-dc543964=\"\">第一章 大神引入怀</h4>\n\t<p _v-dc543964=\"\">“我和你之间隔了一整个青春，但我愿意陪你一路走你的青春”——叶非夜《大神引入怀》</p>\n\t<p _v-dc543964=\"\">“那天晚上，是你吗？”</p>\n\t<p _v-dc543964=\"\">十八岁的季忆幻想过一千种，甚至一万种对自己喜欢的男孩告白的方式，可她没想到，当她鼓起全部勇气站在喜欢的男孩面前，开口的第一句话竟然是：“那天晚上的那个男人，是你吗？”</p>\n\t<p _v-dc543964=\"\">贺季晨垂着眸，姿势简单的倚着树干，在听到季忆的问话后，眼皮都没掀一下，只是眉心轻蹙了蹙，连带着睫毛微微一颤，随即他干净耀眼的脸上便恢复了一贯的平淡无波。</p>\n\t<p _v-dc543964=\"\">若不是季忆清楚捕捉到了他的神情浮动，她还以为他根本没听到她问的话，她目不转睛的望着面前的少年，静等了一小会儿，看少年始终没有任何要回应的意思，轻抿了抿唇，再开口，虽还是疑问话，可字里行间却带了几分笃定：“那天晚上就是你，对不对？”</p>\n\t<p _v-dc543964=\"\">贺季晨终于抬起头，慢条斯理的扫了一眼季忆，漆黑的眼底没带任何的情绪和情感，随后就站直了身子，转了个方向，一身要离开的意思。</p>\n\t<p _v-dc543964=\"\">季忆望着贺季晨的背影，下意识地握紧了拳头。</p>\n\t<p _v-dc543964=\"\">那晚的人，肯定是他，不会错的……</p>\n\t<p _v-dc543964=\"\">那晚的他，亲吻她的姿势，那么的温柔，也不会错的……</p>\n\t<div class=\"bottmbox\" _v-dc543964=\"\">更多精彩，4月10日新书正式上线，届时千万不要错过！</div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(21);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskPrize.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(22);
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
	    var id = "_v-e7932ac4/MaskPrize.vue";
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

	'use strict';

	module.exports = {
		props: ['show', 'type', 'prizety', 'pname', 'pinfo', 'pimg', 'shareinfo', 'sharherf'],
		data: function data() {
			return {};
		},
		methods: {
			closemask: function closemask() {
				this.$parent.showprize = false;
			},
			share: function share() {
				var self = this;
				Local.shareTopic(self.sharherf, self.shareinfo.cover, self.shareinfo.title, self.shareinfo.desc, 1);
				this.$parent.showprize = false;
			},
			goadress: function goadress() {
				Local.go('http://iyuedu.qq.com/event/act161002/adr/contact.html');
				this.$parent.showprize = false;
			}
		}

	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask\">\n\t<div class=\"teaparea\" v-show=\"type==-2 || type==-1\">\n\t\t<div class=\"closeicon\"  @click=\"closemask()\"></div>\n\t\t<div class=\"prizeicon\"></div>\n\t\t<h4>{{ type==-2 ?\"分享抽好礼 100%中奖\":\"已经抽过奖励\" }}</h4>\n\t\t<p>{{ type==-2 ?\"分享后返回QQ阅读即可抽取好礼\":\"把机会留给好友吧\" }}</p>\n\t\t<a class=\"btnaction\" @click=\"share()\">{{type==-2?\"分享抽奖\":\"分享给好友\"}}</a>\n\t</div>\n\t<div class=\"teaparea prizemask\" v-show=\"type==0\">\n\t\t<div class=\"titles\">恭喜你</div>\n\t\t<h4>获得<span>{{ pname[prizety] }}</span></h4>\n\t\t<img :src=\"pimg[prizety]\" class=\"prizepic\" />\n\t\t<p>{{ pinfo }}</p>\n\t\t<a class=\"btnaction\" v-show=\"prizety==1 || prizety==2 || prizety==4 \" @click=\"closemask()\">知道啦</a>\n\t\t<a class=\"btnaction\" v-show=\"prizety==0 || prizety==3 || prizety==5 \" @click=\"goadress()\">填写奖品收获地址</a>\n\t</div>\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\" v-show=\"!showjutou\">\n\t\t<div class=\"bammerbox\">\n\t\t\t<div class=\"tt\">叶非夜新书4月10日正式发布</div>\n\t\t\t<div class=\"newbook\">\n\t\t\t\t<div class=\"bookface\"></div>\n\t\t\t\t<div class=\"bookinfo\">\n\t\t\t\t\t<h4>大神引入怀：101个深吻</h4>\n\t\t\t\t\t<p>“一年后，我们离婚，互不干扰。”季忆之所以答应贺季晨假结婚，是因为她坚信完美情人贺季晨绝对不会爱上她......</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"notice\">点击预约，新书上架后将自动加入您的书架</p>\n\t\t\t<div class=\"btnbox\">\n\t\t\t\t<a class=\"spoiler\" @click=\"jutou\">免费抢先看剧透</a>\n\t\t\t\t<a class=\"appointment\" v-bind:class=\"{ yiyuyue:reserved }\" @click=\"yuyue($event)\"><img :src=\"'images/icon_time.png'\" /><i>{{reserved?'已预约':'立即预约'}}</i></a>\n\t\t\t</div>\n\t\t\t<div class=\"tt video\">叶非夜想对你说</div>\n\t\t\t<div class=\"videobox\">\n\t\t\t\t<div class=\"vvbox\">\n\t\t\t\t\t<img :src=\"'images/vidwoimg.jpg'\" @click=\"PLAY($event)\" v-show=\" state==='paused' \"/>\n\t\t\t\t\t<video ref=\"video\" src=\"images/1.mp4\" preload=\"metadata\" v-show=\" state==='playing'\">\n\t\t\t\t\t\t<source type=\"video/mp4\">  \n\t\t\t\t\t</video>\n\t\t\t\t\t<div class=\"glass\"  @click=\"PAUSE()\" v-show=\" state==='playing'||state==='paused' \"  @ended=\"onPlayerEnded\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tt video\">赢取新书见面礼</div>\n\t\t\t<div class=\"sharebox\">\n\t\t\t\t<p class=\"notice\" v-show=\"!shared\">抽奖秘诀：分享完要返回“QQ阅读”才可以抽奖哦</p>\n\t\t\t\t<a class=\"sharebtn\" v-bind:class=\"{shareafter:shared}\" @click=\"sharefn($event)\"><img v-show=\"!shared\" :src=\"'images/icon_prize.png'\" />{{ shared?'分享给好友':'分享活动赢好礼'}} ></a>\n\t\t\t</div>\n\t\t\t<div class=\"prizebox\">\n\t\t\t\t<div class=\"prizebtn\"></div>\n\t\t\t\t<a class=\"startprize\" @click=\"prizedraw($event)\"></a>\n\t\t\t</div>\n\n\t\t\t<div class=\"rules\">\n\t\t\t\t<p>活动规则</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><span>1.</span>活动时间：4月6日—4月9日</li>\n\t\t\t\t\t<li><span>2.</span>活动期间从客户端内分享页面即可获得一次抽奖机会</li>\n\t\t\t\t\t<li><span>3.</span>每位用户可多次分享，但仅能参加一次抽奖</li>\n\t\t\t\t\t<li><span>4.</span>分享至微信后需要立刻点击“回到QQ阅读”才能获得限免，选择“留在微信/QQ”视为分享失败</li>\n\t\t\t\t\t<li><span>5.</span>请从QQ阅读客户端内发起分享获得限免，其他平台二次分享暂不能获得抽奖机会</li>\n\t\t\t\t\t<li><span>6.</span>中实物奖励后<a @click=\"gocontact\">请认真填写地址</a>，将在15个工作日内寄出</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"copyright\">本活动最终解释权归QQ阅读所有</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<mask-prize v-show=\"showprize\" :show=\"showprize\" :type=\"masktype\" :prizety=\"prizeNum\" :pname=\"prizename\" :pinfo=\"prizeinfo\" :pimg=\"prizeimg\" :shareinfo=\"shareObj\" :sharherf=\"shareurl\"></mask-prize>\n\t<mask-spoiler v-show=\"showjutou\"></mask-spooler>\n</div>\n";

/***/ }
/******/ ]);