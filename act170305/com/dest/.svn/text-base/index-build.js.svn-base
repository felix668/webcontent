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
	    var id = "_v-06b314ab/app.vue";
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
			maskDownload: __webpack_require__(20)
		},
		data: function data() {
			return {
				loading: true,
				over: false,
				downshow: false,
				showjutou: false,
				state: 'paused',
				loaded: false,
				username: '',
				prizename: '',
				showprize: false,
				evnios: true
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
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
				if (isAndroid) {
					self.evnios = false;
				} else {
					self.evnios = true;
				};
				var ticket = param('z-tickt');
				$.ajax({ type: 'GET',
					url: server() + 'pkg170305/shareinit?userticket=' + ticket,
					dataType: "json",
					timeout: 5000,
					success: function success(data) {
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
					},
					error: function error(xhr, type) {}
				});
				forceLog(param("act_f"), "yfyindex");
			},
			jutou: function jutou() {
				window.scrollTo(0, 0);
				this.showjutou = true;
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
			gotoapp: function gotoapp() {
				var self = this;
				S.open(function (installStat, plat) {
					if (installStat) {
						if (env.pt == "adr") {
							N.openPage("http://iyuedu.qq.com/event/act170305/adr/index.html?act_f=170406");
						} else if (env.vw == "wx" && env.pt == "ios") {
							N.openPage("https://yuedu.reader.qq.com/event/act170305/ios/index.html?act_f=170406");
							setTimeout(function () {
								self.downshow = true;
							}, 2000);
							setTimeout(function () {
								self.downshow = false;
							}, 5000);
						} else {
							N.openPage("https://yuedu.reader.qq.com/event/act170305/ios/index.html?act_f=170406");
						}
					} else {
						self.downshow = true;
					}
				});
				forceLog(param('act_f'), 'openBtn' + env.pt);
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
	    var id = "_v-154a1ccc/MaskLoading.vue";
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

	module.exports = "\n<div class=\"MaskLoading\" _v-154a1ccc=\"\">\n\t<p class=\"_text\" _v-154a1ccc=\"\"><img :src=\"'images/loading.png'\" _v-154a1ccc=\"\">正在加载...</p>\n</div>\n";

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
	    var id = "_v-8881e134/MaskOver.vue";
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

	module.exports = "\n<div class=\"over\" _v-8881e134=\"\">\n\t<div class=\"over-c\" _v-8881e134=\"\">\n        <img :src=\"'images/over.png'\" alt=\"本期活动已结束\" _v-8881e134=\"\">\n        <p class=\"over-p1\" _v-8881e134=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-8881e134=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

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
	    var id = "_v-a20961c0/MaskSpoiler.vue";
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

	module.exports = "\n<div class=\"spoilerbox\" _v-a20961c0=\"\">\n\t<a class=\"close\" @click=\"closemask()\" _v-a20961c0=\"\"><img :src=\"'images/close.png'\" _v-a20961c0=\"\"></a>\n\t<h4 _v-a20961c0=\"\">第一章 大神引入怀</h4>\n\t<p _v-a20961c0=\"\">“我和你之间隔了一整个青春，但我愿意陪你一路走你的青春”——叶非夜《大神引入怀》</p>\n\t<p _v-a20961c0=\"\">“那天晚上，是你吗？”</p>\n\t<p _v-a20961c0=\"\">十八岁的季忆幻想过一千种，甚至一万种对自己喜欢的男孩告白的方式，可她没想到，当她鼓起全部勇气站在喜欢的男孩面前，开口的第一句话竟然是：“那天晚上的那个男人，是你吗？”</p>\n\t<p _v-a20961c0=\"\">贺季晨垂着眸，姿势简单的倚着树干，在听到季忆的问话后，眼皮都没掀一下，只是眉心轻蹙了蹙，连带着睫毛微微一颤，随即他干净耀眼的脸上便恢复了一贯的平淡无波。</p>\n\t<p _v-a20961c0=\"\">若不是季忆清楚捕捉到了他的神情浮动，她还以为他根本没听到她问的话，她目不转睛的望着面前的少年，静等了一小会儿，看少年始终没有任何要回应的意思，轻抿了抿唇，再开口，虽还是疑问话，可字里行间却带了几分笃定：“那天晚上就是你，对不对？”</p>\n\t<p _v-a20961c0=\"\">贺季晨终于抬起头，慢条斯理的扫了一眼季忆，漆黑的眼底没带任何的情绪和情感，随后就站直了身子，转了个方向，一身要离开的意思。</p>\n\t<p _v-a20961c0=\"\">季忆望着贺季晨的背影，下意识地握紧了拳头。</p>\n\t<p _v-a20961c0=\"\">那晚的人，肯定是他，不会错的……</p>\n\t<p _v-a20961c0=\"\">那晚的他，亲吻她的姿势，那么的温柔，也不会错的……</p>\n\t<div class=\"bottmbox\" _v-a20961c0=\"\">更多精彩，4月10日新书正式上线，届时千万不要错过！</div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(21);
	__vue_script__ = __webpack_require__(23);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskDownload.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-b2d1d7cc/MaskDownload.vue";
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

	'use strict';

	module.exports = {
		props: ['show'],
		data: function data() {
			return {};
		},
		methods: {
			closemask: function closemask() {
				this.$parent.downshow = false;
			},
			downapp: function downapp() {
				N.downLoad(null, '10024407');
				this.show = false;
			}
		}
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"MaskDownload\">\r\n\t<div class=\"mask-panel\">\r\n\t\t<div class=\"top\">下载QQ阅读，畅读海量小说</div>\r\n\t\t<p class=\"middle\">如果还未安装QQ阅读，你可以：</p>\r\n\t\t<ul class=\"bottom\">\r\n\t\t\t<li class=\"confirm\" @click=\"downapp\">下载QQ阅读</li>\r\n\t\t\t<li class=\"cancel\" @click=\"closemask\">取消</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n";

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\" v-show=\"!showjutou\">\n\t\t<div class=\"bammerbox\">\n\t\t\t<div class=\"tt\">叶非夜新书4月10日正式发布</div>\n\t\t\t<div class=\"newbook\">\n\t\t\t\t<div class=\"bookface\"></div>\n\t\t\t\t<div class=\"bookinfo\">\n\t\t\t\t\t<h4>大神引入怀：101个深吻</h4>\n\t\t\t\t\t<p>“一年后，我们离婚，互不干扰。”季忆之所以答应贺季晨假结婚，是因为她坚信完美情人贺季晨绝对不会爱上她......</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"notice\">点击预约，新书上架后将自动加入您的书架</p>\n\t\t\t<div class=\"btnbox\">\n\t\t\t\t<a class=\"spoiler\" @click=\"jutou\">免费抢先看剧透</a>\n\t\t\t\t<a class=\"appointment\" @click=\"gotoapp()\"><img :src=\"'images/icon_time.png'\" /><i>立即预约</i></a>\n\t\t\t</div>\n\t\t\t<div class=\"tt video\">叶非夜想对你说</div>\n\t\t\t<div class=\"videobox\">\n\t\t\t\t<div class=\"vvbox\">\n\t\t\t\t\t<img :src=\"'images/vidwoimg.jpg'\" @click=\"PLAY($event)\" v-show=\" state==='paused' \"/>\n\t\t\t\t\t<video ref=\"video\" src=\"images/1.mp4\" preload=\"metadata\" v-show=\" state==='playing'\">\n\t\t\t\t\t\t<source type=\"video/mp4\">  \n\t\t\t\t\t</video>\n\t\t\t\t\t<div class=\"glass\"  @click=\"PAUSE()\" v-show=\" state==='playing'||state==='paused' \"  @ended=\"onPlayerEnded\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tt video\">赢取新书见面礼</div>\n\t\t\t<div class=\"sharebox\">\n\t\t\t\t<p class=\"shanr\" v-if=\"showprize\"><b>{{ username }}：</b>我刚刚抽到<span>{{ prizename }}</span>，你也来试试吧</p>\n\t\t\t\t<p class=\"shanr\" v-else><b>{{ username }}：</b>分享你一次抽奖，快来试试手气</p>\n\t\t\t\t<p class=\"notice\">抽奖秘诀：分享完要返回“QQ阅读”才可以抽奖哦</p>\n\t\t\t\t<a class=\"sharebtn shareafter\" @click=\"gotoapp()\">去QQ阅读分享赢好礼 ></a>\n\t\t\t</div>\n\t\t\t<div class=\"prizebox\" v-bind:class=\"{ iosbox:evnios }\">\n\t\t\t\t<div class=\"prizebtn\"></div>\n\t\t\t\t<a class=\"startprize\" @click=\"gotoapp()\"></a>\n\t\t\t</div>\n\t\t\t<div class=\"rules\">\n\t\t\t\t<p>活动规则</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><span>1.</span>活动时间：4月6日—4月9日</li>\n\t\t\t\t\t<li><span>2.</span>活动期间从客户端内分享页面即可获得一次抽奖机会</li>\n\t\t\t\t\t<li><span>3.</span>每位用户可多次分享，但仅能参加一次抽奖</li>\n\t\t\t\t\t<li><span>4.</span>分享至微信后需要立刻点击“回到QQ阅读”才能获得限免，选择“留在微信/QQ”视为分享失败</li>\n\t\t\t\t\t<li><span>5.</span>请从QQ阅读客户端内发起分享获得限免，其他平台二次分享暂不能获得抽奖机会</li>\n\t\t\t\t\t<li><span>6.</span>中实物奖励后请认真填写地址，将在15个工作日内寄出</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"copyright\">本活动最终解释权归QQ阅读所有</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<mask-download v-show=\"downshow\" :show.sync=\"downshow\"></mask-download>\n\t<mask-spoiler v-show=\"showjutou\"></mask-spooler>\n\t\n</div>\n";

/***/ }
/******/ ]);