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

	var _writers = __webpack_require__(3);

	__webpack_require__(4);
	__webpack_require__(21);
	__webpack_require__(23);

	Vue.component('mask-download', __webpack_require__(10));
	Vue.component('mask-loading', __webpack_require__(25));
	Vue.component('mask-over', __webpack_require__(30));
	Vue.component('focus', __webpack_require__(35));
	Vue.component('lottery', __webpack_require__(40));
	Vue.component('fire', __webpack_require__(45));

	Vue.component('mask-intro', __webpack_require__(50));
	Vue.component('mask-prize', __webpack_require__(55));

	Vue.component('debug', __webpack_require__(60));

	var app = new Vue({
		el: '#root',
		data: {
			ios: /ios/.test(document.title) ? true : false,
			testMode: false,

			loggedIn: false,

			download: true,
			over: false,

			writers: JSON.parse(JSON.stringify(_writers.writers)),
			writerNo: 0,
			votes: [],

			show_intro_mask: false,

			//用户把票投给的作者的号码。
			//未投票状态下值为-1。
			//其他账号已使用该设备投过票的情况下的值为100。
			picked: -1,

			//maskShow: true
			rotateX: 0,
			rotateY: 0,
			recalibrating: false,

			//用户是否已经抽过奖。
			drawn: false,
			voted_on_other_platform: false,
			//drawn_at_another_platform: false,
			couponGot: false,
			couponUsed: false,

			show_prize_mask: false,
			prize: null

		},
		computed: {
			name: function name() {
				return this.ios ? '阅券' : '书券';
			}
		},
		created: function created() {
			var self = this;
			//this.listen();
			this.getData();
		},
		mounted: function mounted() {
			//通知服务器用户进入了index.html页面。
			Local.forceLog(common.param('act_f'), 'index');
			//this.over = true;
		},
		watch: {
			picked: function picked() {
				if (this.picked >= 0 && this.picked <= 9) {
					this.writers[this.picked].picked = true;
				}
			}
		},
		methods: {
			act: function act(action) {
				var self = this;
				switch (action.type) {
					//投票：
					//vote for a writer
					case 'PICK':
						if (this.loggedIn === false) {
							if (this.testMode) {
								this.loggedIn = true;
							} else {
								Local.login();
							};
						} else {
							if (this.testMode) {
								this.picked = action.id;
								self.writers[action.id].vote++;
							} else {
								Local.reqaObj(common.server() + ('pkg161002/vote?authornum=' + action.id), function (data) {
									self.picked = action.id;
									self.writers[action.id].vote++;
								}, [], function () {
									Local.showToast("网络异常，请稍候重试");
								}, 1);
							}
						}
						break;
					case 'OVER':
						this.over = true;
						break;
					case 'HIDE':
						this.download = false;
						break;
					case 'CLOSE_INTRO':
						this.show_intro_mask = false;
						break;
					case 'CLOSE_PRIZE_MASK':
						this.show_prize_mask = false;
						break;
					//抽奖：
					case 'DRAW':
						if (this.testMode) {
							this.prize = 2;
							this.couponGot = true;
							this.couponUsed = false;
							this.show_prize_mask = true;
							this.drawn = true;
						} else {
							Local.reqaObj(common.server() + 'pkg161002/pick', function (data) {
								self.prize = data.prizeId;
								//如果用户获得的奖品是兑换券：
								if (data.prizeId === 2) {
									self.couponGot = true;
									self.couponUsed = false;
								}
								self.show_prize_mask = true;
								self.drawn = true;
							}, [], function () {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
							pgvSendClick({ hottag: 'ISD.SHOW.INDEX.DRAW' });
						}
						break;
					case 'TO_USE_COUPON':
						var href = location.href;
						var href__ = href.replace('index.html', 'books.html');
						location.href = href__;
						if (this.ios) {
							setTimeout(function () {
								location.href = href;
							}, 500);
						};
						break;
					case 'TO_SHUPING':
						Local.forceLog(common.param('act_f'), 'write');
						pgvSendClick({ hottag: 'ISD.SHOW.INDEX.WRITE' });
						if (!this.ios) {
							window.location.href = "uniteqqreader://nativepage/comment/detail?bid=2&commentid=e000000000021bzyCl000LQI&ctype=4";
						} else {
							Local.gotoQUrl("uniteqqreader://nativepage/comment/detail?bid=2&commentid=e000000000021bzyCl000LQI&ctype=4");
						}
						break;
				}
			},
			//去书评区
			toShupingqu: function toShupingqu() {},
			toUseCoupon: function toUseCoupon() {
				this.act({
					type: 'TO_USE_COUPON'
				});
			},
			showIntro: function showIntro(n) {
				this.show_intro_mask = true;
				this.writerNo = n;

				Local.forceLog(common.param('act_f'), 'avatar_' + n);
				pgvSendClick({ hottag: 'ISD.SHOW.INDEX.INTRO' });
			},
			//投票
			pick: function pick(n) {

				Local.forceLog(common.param('act_f'), 'vote');
				pgvSendClick({ hottag: 'ISD.SHOW.INDEX.VOTE' });
				this.act({
					type: 'PICK',
					id: n
				});
			},
			getData: function getData() {
				var self = this;
				Local.reqaObj(common.server() + 'pkg161002/init', function (data) {
					console.log(data);
					if (self.testMode) {
						self.writers.forEach(function (a, i) {
							a.votes = data.authorvotes[i];
						});
					} else {
						// update the view model
						self.loggedIn = data.isLogin;
						self.writers.forEach(function (a, i) {
							a.votes = data.authorvotes[i];
						});
						if (data.isLogin) {
							self.picked = data.votewho;
							self.drawn = data.drawn;
							self.voted_on_other_platform = data.voteOnOtherPlatform;
							self.couponGot = data.havecoupon;
							self.couponUsed = data.usecoupon;
						}
						self.$forceUpdate();
						console.log(self.picked);
					};
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			},

			listen: function listen() {
				var self = this;
				if (window.DeviceMotionEvent) {
					window.addEventListener('devicemotion', self.handler.bind(self), false);
					document.addEventListener('click', self.recalibrate.bind(self));
				} else {
					console.log('');
				}
			},
			recalibrate: function recalibrate(e) {
				var _this = this;

				this.recalibrating = true;
				this.rotateX = 0;
				this.rotateY = 0;
				setTimeout(function () {
					_this.recalibrating = false;
				}, 1000);
			},
			handler: function handler(e) {
				if (!this.recalibrating) {
					//this.rotationRate.alpha = e.rotationRate.alpha;

					var nextX = this.rotateX + e.rotationRate.alpha * 3;
					if (nextX >= 45) {
						nextX = 45;
					} else if (nextX <= -45) {
						nextX = -45;
					}
					this.rotateX = nextX;

					var nextY = this.rotateY + e.rotationRate.beta * 3;
					if (nextY >= 45) {
						nextY = 45;
					} else if (nextY <= -45) {
						nextY = -45;
					}
					this.rotateY = nextY;
				}
			}
		}
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
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var writers = [{
		id: 0,
		name: 'cow',
		nickname: '丑牛1985',
		intro: '丑牛1985，阅文集团军事频道抗战类小说代表作者之一。其作品行文热血，剧情爽快霸道，立义正确，作品将爱国情怀彰显无疑，同时也受到广大读者的追捧。',
		bid: '750557',
		bookname: '抗日之将胆传奇',
		bookintro: '胡斌，特种部队总教官，因救人穿越到抗战时期，在战场上他杀小鬼子如屠鸡宰狗，从此小鬼子的梦魇诞生！',
		votes: 0
	}, {
		id: 1,
		name: 'cat',
		nickname: '会做菜的猫',
		intro: '会做菜的猫：代表作《美食供应商》，一经发表，风靡网络，带起一阵美食文的潮流，更创下上架订阅奇迹！',
		bid: '13667321',
		bookname: '美食供应商',
		bookintro: '奇怪小店，昂贵的价格、不接受预定、服务恶劣，且竟然让顾客自己端菜收拾碗筷，对了还要擦桌子！',
		votes: 0
	}, {
		id: 2,
		name: 'candy',
		nickname: '凤元糖果',
		intro: '凤元糖果，云起现言大神，实力派大神，文笔细腻感情真挚，上架以来连续日销过万。',
		bid: '1000875951',
		bookname: '豪门少奶奶：谢少的心尖宠妻',
		bookintro: '惨遭背叛，她的人生一团糟。绝境逢生，她找上权倾天下的谢少，站在这个男人肩上恣意成长！',
		votes: 0
	}, {
		id: 3,
		name: 'seven',
		nickname: '妤七',
		intro: '妤七：阅文集团大神作者，擅长古言。爱幻想，爱写文。在她笔下，角色形象鲜明，勾起无数读者的心弦。',
		bid: '11312009',
		bookname: '僵尸小萌宝：爹地，快带娘亲回家',
		bookintro: '她是一代医毒双绝的金牌杀手，穿越以后未婚生子也就算了，还生了个僵尸儿子！',
		votes: 0
	}, {
		id: 4,
		name: 'nine',
		nickname: '巫九',
		intro: '阅文灵异名家，95后作者，重庆网络作协理事，阴阳系列作品本本精品，行文幽默自然。',
		bid: '12038425',
		bookname: '阴阳鬼术',
		bookintro: '百年女儿国唯一男丁，学鬼术，抓邪祟，斩妖魔，破阴邪！阴阳颠倒，女鬼莫逃！',
		votes: 0
	}, {
		id: 5,
		name: 'walk',
		nickname: '希行',
		intro: '希行，生于燕赵之地，以笔编织五彩灿烂的故事为平淡生活增添几分趣味，爱有一技之长的女主，希望看过故事的女子们，能悦之一笑。',
		bid: '801989',
		bookname: '君九龄',
		bookintro: '九龄公主重生为阳城孤女，无双智慧，惊人医术，无数看不起她的人纷纷侧目！',
		votes: 0
	}, {
		id: 6,
		name: 'thousand',
		nickname: '意千重',
		intro: '意千重作者简介：云起书院超星级作家，宅斗大神，其作品风格朴实细腻，智慧励志，深受青少年及白领读者喜爱。',
		bid: '13525770',
		bookname: '司茶皇后',
		bookintro: '新帝登基，她从风光无限的茶道天才女官沦为记录安排新帝最隐私之事的彤史，不仅日夜跟随，还陪吃陪穿暖被！',
		votes: 0
	}, {
		id: 7,
		name: 'ten',
		nickname: '十月初',
		intro: '云起书院人气现言大神，文笔犀利干练，人物男强女强气场全开，本人是个炒鸡萌妹纸~',
		bid: '12491929',
		bookname: 'Boss凶猛：老公，领证吧',
		bookintro: '为了报复，一夜凌乱。睡到国民老公又如何，她并不在意。但是岳听风却自此上瘾，岂容她全身而退！',
		votes: 0
	}, {
		id: 8,
		name: 'think',
		nickname: '念响',
		intro: '念响，阅文灵异频道名家。以大叔丰富经历，连写《鬼咒》《阴阳鬼咒》精品小说。',
		bid: '369894',
		bookname: '鬼咒',
		bookintro: '小道士浪迹都市，笑傲红尘，茅山杀鬼有神方，上呼师祖收不祥。鬼咒，鬼叫连连！',
		votes: 0
	}, {
		id: 9,
		name: 'moon',
		nickname: '千寻月',
		intro: '千寻月，阅文集团大神作家，擅长创作玄幻小说。作品风格磅礴大气，内容天马行空充满想象力。',
		bid: '661867',
		bookname: '永恒圣帝',
		bookintro: '绝世天骄渡劫陨落，携带前世经验转世重生，一路横扫四方，主宰万界，成就万古最强帝君！',
		votes: 0
	}];

	exports.writers = writers;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(11);
	__vue_script__ = __webpack_require__(14);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161002\\adr\\src\\components\\MaskDownload.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(15);
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
	    var id = "./MaskDownload.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['show', 'act'],
		methods: {
			hide: function hide() {
				this.act({
					type: 'HIDE'
				});
			},
			CONFIRM: function CONFIRM() {
				this.act({
					type: 'CONFIRM'
				});
			}
		}
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask-download\" v-show=\"show\" _v-656d1870=\"\">\n\t<div class=\"mask-panel\" _v-656d1870=\"\">\n\n\t\t<p class=\"middle\" _v-656d1870=\"\">确定要兑换这本书么？</p>\n\t\t<ul class=\"bottom\" _v-656d1870=\"\">\n\t\t\t<li class=\"confirm\" @click=\"CONFIRM\" _v-656d1870=\"\">确定</li>\n\t\t\t<li class=\"cancel\" @click=\"hide\" _v-656d1870=\"\">取消</li>\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(26);
	__vue_script__ = __webpack_require__(28);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161002\\adr\\src\\components\\MaskLoading.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(29);
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
	    var id = "./MaskLoading.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {
				display: 'block'
			};
		},
		mounted: function mounted() {
			var self = this;
			var body = document.querySelector('body');
			body.style.overflow = 'hidden';
			window.addEventListener('load', function () {
				setTimeout(function () {
					window.scroll(0, 0);
					self.display = 'none';
					body.style.overflow = 'scroll';
				}, 0);
			});
		}
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask-loading\" :style=\" 'display:'+display+';' \" _v-2826e42c=\"\">\n\t<p class=\"_text\" _v-2826e42c=\"\">加载中...</p>\n</div>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(31);
	__vue_script__ = __webpack_require__(33);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161002\\adr\\src\\components\\MaskOver.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(34);
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
	    var id = "./MaskOver.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 32 */,
/* 33 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['over'],
		watch: {
			over: function over(new_val) {
				var body = document.querySelector('body');
				if (new_val === true) {
					body.style.overflow = 'hidden';
				} else {
					body.style.overflow = 'scroll';
				}
			}
		},
		data: function data() {
			return {
				img: {
					over: './img/over.png'
				}
			};
		}
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask-over\" v-show=\"over\" _v-44007614=\"\">\n\t<img :src=\"img.over\" _v-44007614=\"\">\n</div>\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(36);
	__vue_script__ = __webpack_require__(38);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161002\\adr\\src\\components\\Focus.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(39);
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
	    var id = "./Focus.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 37 */,
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				img: {
					eyes: 'img/eyes.png',
					scarecrow: 'img/scarecrow.png',
					halloween: 'img/halloween.png',
					welove: 'img/we-love.png'
				},
				ani: {
					halloween: '',
					welove: ''
				}
			};
		},
		mounted: function mounted() {
			var _this = this;

			window.addEventListener('load', function () {
				_this.play();
			});
		},
		methods: {
			play: function play() {
				var _this2 = this;

				this.ani.halloween = 'active';
				setTimeout(function () {
					_this2.ani.welove = 'active';
				}, 1000);
			}
		}
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"FOCUS\" _v-51664f54=\"\">\n\n\t<img class=\"eyes\" :src=\" img.eyes \" _v-51664f54=\"\">\n\t<img class=\"eyes_bottom\" :src=\" img.eyes \" _v-51664f54=\"\">\n\t<img class=\"eyes_right\" :src=\" 'img/eyes_right.png' \" _v-51664f54=\"\">\n\t<img class=\"eyes_4\" :src=\" 'img/eyes_right.png' \" _v-51664f54=\"\">\n\n\t<img class=\"bats\" :src=\" 'img/bats.png' \" _v-51664f54=\"\">\n\n\t<img class=\"scarecrow\" :src=\" img.scarecrow \" _v-51664f54=\"\">\n\t<img class=\"halloween\" :class=\" ani.halloween \" :src=\" img.halloween \" _v-51664f54=\"\">\n\t<img class=\"we-love\" :class=\" ani.welove \" :src=\" img.welove \" _v-51664f54=\"\">\n</div>\n";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(41);
	__vue_script__ = __webpack_require__(43);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161002\\adr\\src\\components\\Lottery.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(44);
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
	    var id = "./Lottery.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 42 */,
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['ios', 'loggedIn', 'picked', 'drawn', 'act', 'couponGot', 'couponUsed', 'voted'],
		data: function data() {
			return {
				img: {
					text_p: 'img/text_p.png',
					bar: 'img/bar.png',
					choose_p: 'img/choose-p.png',
					ghost: 'img/ghost.png',
					pumpkin: 'img/pumpkin.png',
					blur_fire: 'img/blur-fire.png',
					fire: 'img/fire.png',
					light: 'img/light.png'
				},
				info: ''
			};
		},
		mounted: function mounted() {},
		watch: {},
		computed: {
			info: function info() {
				if (this.drawn === true) {
					if (this.couponGot && !this.couponUsed) {
						return '111';
					} else {
						return '您已经抽过奖了~';
					}
				} else {
					if (this.voted) {
						return '请到投过票的平台抽奖';
					} else if (this.picked >= 0 && this.picked <= 9) {
						return '恭喜获得一次挑选机会';
					} else if (this.picked === 100) {
						return '该设备已经被其他账号投过票';
					} else {
						return '投票后将获得一次挑选机会';
					}
				}
			},
			pumpkin: function pumpkin() {
				if (this.drawn === false) {
						return 'active';
					} else {
					return '';
				}
			}
		},
		methods: {
			choose: function choose() {
				if (this.loggedIn === false) {
					Local.showToast('请登录后进行抽奖');
				} else {
					if (this.drawn === true) {
						Local.showToast('您已经抽过奖了~');
					} else {
						if (this.voted) {
							Local.showToast('请到投过票的平台抽奖');
						} else if (this.picked >= 0 && this.picked <= 9) {
							this.act({
								type: 'DRAW'
							});
						} else {
							Local.showToast('请投票后进行抽奖');
						};
					}
				}
			}
		}
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"LOTTERY\" _v-0e92c845=\"\">\n\t<img class=\"choose-p\" :src=\" img.choose_p \" _v-0e92c845=\"\">\n\t<img class=\"text_p\" :src=\" 'img/text_p'+(ios?'_ios':'')+'.png' \" _v-0e92c845=\"\">\n\t<div class=\"info__\" v-show=\"info\" _v-0e92c845=\"\">\n\t\t<img class=\"bar__\" :src=\" img.bar \" _v-0e92c845=\"\">\n\t\t<p v-show=\" info!=='111' \" _v-0e92c845=\"\">{{info}}</p>\n\t\t<div class=\"link\" v-show=\" info==='111' \" _v-0e92c845=\"\">\n\t\t\t您的兑换券尚未兑换，<span @click=\"act({type:'TO_USE_COUPON'})\" _v-0e92c845=\"\">去兑换&gt;&gt;</span>\n\t\t</div>\n\t</div>\n\t<img class=\"ghost\" :src=\" img.ghost \" _v-0e92c845=\"\">\n\t<img class=\"bat_left\" :src=\" 'img/black_bat.png' \" _v-0e92c845=\"\">\n\t<img class=\"bat_right\" :src=\" 'img/black_bat.png' \" _v-0e92c845=\"\">\n\t<div class=\"pumpkins\" _v-0e92c845=\"\">\n\t\t<div class=\"pumpkin\" :key=\"a\" v-for=\"a in 6\" :class=\" 'p'+(a-1)+' '+pumpkin \" @click=\"choose\" _v-0e92c845=\"\">\n\t\t\t<img class=\"pumpkin_img\" :src=\" img.pumpkin \" _v-0e92c845=\"\">\n\t\t\t<!-- <img class=\"pumpkin_light\" :src=\" 'img/pumpkin_light.png' \"/> -->\n\t\t</div>\n\t\t<img class=\"light\" :src=\" img.light \" _v-0e92c845=\"\">\n\t\t<img class=\"fire0\" :src=\" img.blur_fire \" _v-0e92c845=\"\">\n\t\t<img class=\"fire1\" :src=\" img.fire \" _v-0e92c845=\"\">\n\t\t<img class=\"fire2\" :src=\" img.fire \" _v-0e92c845=\"\">\n\t\t<img class=\"fire3\" :src=\" img.blur_fire \" _v-0e92c845=\"\">\n\t\t<img class=\"fire4\" :src=\" img.blur_fire \" _v-0e92c845=\"\">\n\t</div>\n</div>\n";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(46);
	__vue_script__ = __webpack_require__(48);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161002\\adr\\src\\components\\Fire.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(49);
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
	    var id = "./Fire.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 47 */,
/* 48 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function FlameParticle(host) {
		this.host = host;
		this.spawn();
	}
	FlameParticle.prototype = {
		spawn: function spawn() {
			this.speed = {
				x: -2.5 + Math.random() * 5,
				y: -25 + Math.random() * 10
			};

			var locmin = this.host.w / 2 - this.host.config.flamewidth / 2;
			var locmax = this.host.w / 2 + this.host.config.flamewidth / 2;
			this.location = {
				x: Math.random() * (locmax - locmin) + locmin,
				y: 2 * this.host.h / 3
			};

			this.radius = Math.random() * 30;

			this.life = this.host.config.flame_base_life + Math.random() * 10;
			this.remaining_life = this.life;

			this.r = this.host.config.flame_r;
			this.g = Math.round(Math.random() * (100 - 190) + 100);
			this.b = Math.round(Math.random() * (10 - 30) + 10);
		},
		draw: function draw(ctx) {
			var p = this;
			ctx.beginPath();

			p.opacity = Math.round(p.remaining_life / p.life * 100) / 100;

			var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
			gradient.addColorStop(0, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", " + p.opacity + ")");
			gradient.addColorStop(0.5, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", " + p.opacity + ")");
			gradient.addColorStop(1, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", 0)");
			ctx.fillStyle = gradient;

			ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
			ctx.fill();
		},
		step: function step() {
			var p = this;

			p.remaining_life--;
			p.radius -= 2;
			p.location.x += p.speed.x;
			p.location.y += p.speed.y;
			if (p.remaining_life < 0 || p.radius < 0) {
				p.spawn();
			}
		}
	};

	function SmokeParticle(host) {
		this.host = host;
		this.spawn();
	}
	SmokeParticle.prototype = {
		spawn: function spawn() {
			this.speed = { x: -2.5 + Math.random() * 5, y: -15 + Math.random() * 3 };

			var locmin = this.host.w / 2 - this.host.config.flamewidth / 2;
			var locmax = this.host.w / 2 + this.host.config.flamewidth / 2;
			this.location = {
				x: Math.random() * (locmax - locmin) + locmin,
				y: 2 * this.host.h / 3
			};

			this.radius = Math.random() * 10;

			this.life = 20 + Math.random() * 40;
			this.remaining_life = this.life;

			var b = Math.round(Math.random() * (120 - 255) + 120);
			this.r = b;
			this.g = b;
			this.b = b;
		},
		draw: function draw(ctx) {
			var s = this;
			ctx.beginPath();

			s.opacity = Math.round(s.remaining_life / s.life * 100) / 100;

			var gradient = ctx.createRadialGradient(s.location.x, s.location.y, 0, s.location.x, s.location.y, s.radius);
			gradient.addColorStop(0, "rgba(" + s.r + ", " + s.g + ", " + s.b + ", " + s.opacity + ")");
			gradient.addColorStop(0.5, "rgba(" + s.r + ", " + s.g + ", " + s.b + ", " + s.opacity + ")");
			gradient.addColorStop(1, "rgba(" + s.r + ", " + s.g + ", " + s.b + ", 0)");
			ctx.fillStyle = gradient;
			ctx.arc(s.location.x, s.location.y, s.radius, Math.PI * 2, false);
			ctx.fill();
		},
		step: function step() {
			var s = this;

			s.remaining_life -= 0.3;
			s.radius -= 0.2;
			s.location.x += s.speed.x;
			s.location.y += s.speed.y;
			if (s.remaining_life < 0 || s.radius < 0) {
				s.spawn();
			}
		}
	};

	function Fire(config) {
		if (config.elem) {
			this.elem = config.elem;
		} else {
			this.elem = document.createElement('canvas');
			this.elem.style.width = '50%';
			document.body.appendChild(this.elem);
		}
		this.w = this.elem.width = config.width;
		this.h = this.elem.height = config.height;
		this.ctx = this.elem.getContext("2d");

		this.config = {
			canvas_width: 50,
			canvas_height: 1000,
			particle_count: 40,
			smoke_count: 50,
			flame_base_life: 20,
			flame_r: '255',
			flamewidth: 100
		};

		this.particles = [];
		this.smoke_particles = [];

		this.interval = null;
		this.init();
	}

	Fire.prototype = {
		init: function init() {
			this.createParticles();
			this.play();
		},
		clear: function clear() {
			clearInterval(this.interval);
			this.particles = [];
			this.smoke_particles = [];
		},
		createParticles: function createParticles() {
			for (var i = 0; i < this.config.particle_count; i++) {
				this.particles.push(new FlameParticle(this));
			}
			for (var o = 0; o < this.config.smoke_count; o++) {
				this.smoke_particles.push(new SmokeParticle(this));
			}
		},
		render: function render() {
			window.requestAnimationFrame(this.render.bind(this));

			var ctx = this.ctx;
			ctx.globalCompositeOperation = "source-over";
			ctx.fillStyle = "black";

			ctx.clearRect(0, 0, this.w, this.h);
			ctx.globalCompositeOperation = "lighter";

			this.particles.forEach(function (p, i) {
				p.step();
				p.draw(ctx);
			});

			this.smoke_particles.forEach(function (s, i) {
				s.draw(ctx);
				s.step();
			});
		},
		play: function play() {
			this.render();
		}
	};

	exports.default = {
		mounted: function mounted() {
			new Fire({
				elem: document.getElementById('fire'),
				width: 400,
				height: 800
			});
		}
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n<canvas id=\"fire\" _v-0f601d6a=\"\"></canvas>\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(51);
	__vue_script__ = __webpack_require__(53);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161002\\adr\\src\\components\\MaskIntro.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(54);
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
	    var id = "./MaskIntro.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 52 */,
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _writers = __webpack_require__(3);

	exports.default = {
		props: ['show', 'writerNo', 'picked', 'act'],
		data: function data() {
			return {
				img: {
					close: 'img/icon-close.png',
					cover: 'img/covers/',
					pick: 'img/pick-larger.png'
				},
				writer: {
					id: 0,
					nickname: '--',
					intro: '--',
					bid: '0',
					bookname: '--',
					bookintro: '--'
				}
			};
		},
		watch: {
			writerNo: function writerNo() {
				this.update();
			}
		},
		mounted: function mounted() {
			this.update();
		},
		methods: {
			update: function update() {
				for (var key in this.writer) {
					this.writer[key] = _writers.writers[this.writerNo][key];
				}
			},
			toBook: function toBook() {
				Local.forceLog(common.param('act_f'), 'cover_' + this.writer.id);
				ABook.gotoDetail(this.writer.bid);
			},
			pick: function pick() {
				Local.forceLog(common.param('act_f'), 'vote_intro_' + this.writer.id);
				this.act({
					type: 'PICK',
					id: this.writer.id
				});
			},
			close: function close() {
				this.act({
					type: 'CLOSE_INTRO'
				});
			}
		}

	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MASK-INTRO\" v-show=\"show\" _v-bf49f148=\"\">\n\t<div class=\"content__\" _v-bf49f148=\"\">\n\t\t<div class=\"panel\" _v-bf49f148=\"\">\n\t\t\t<div class=\"avatar\" _v-bf49f148=\"\">\n\t\t\t\t<img class=\"avatar-img\" :src=\" 'img/avatars/'+(writer.id||0)+'.jpg' \" _v-bf49f148=\"\">\n\t\t\t</div>\n\t\t\t<p class=\"nickname\" _v-bf49f148=\"\">{{writer.nickname}}</p>\n\t\t\t<p class=\"intro__\" _v-bf49f148=\"\">{{writer.intro}}</p>\n\t\t\t<div class=\"book\" @click=\"toBook\" _v-bf49f148=\"\">\n\t\t\t\t<div class=\"upper\" _v-bf49f148=\"\">\n\t\t\t\t\t<img class=\"cover\" :src=\" img.cover+(writer.id||'0')+'.jpg' \" _v-bf49f148=\"\">\n\t\t\t\t\t<div class=\"right__\" _v-bf49f148=\"\">\n\t\t\t\t\t\t<p class=\"top__\" _v-bf49f148=\"\">\n\t\t\t\t\t\t\t代表作\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"bookname\" _v-bf49f148=\"\">\n\t\t\t\t\t\t\t{{writer.bookname}}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"lower\" _v-bf49f148=\"\">\n\t\t\t\t\t{{writer.bookintro}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"footer__\" _v-bf49f148=\"\">\n\t\t\t\t<img class=\"pick__\" :src=\"img.pick\" v-show=\"picked<0\" @click=\"pick\" _v-bf49f148=\"\">\n\t\t\t</div>\n\t\t\t<img class=\"close\" :src=\" img.close \" @click=\"close\" _v-bf49f148=\"\">\n\t\t\t\t\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(56);
	__vue_script__ = __webpack_require__(58);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161002\\adr\\src\\components\\MaskPrize.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(59);
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
	    var id = "./MaskPrize.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 56 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 57 */,
/* 58 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['show', 'prize', 'act', 'ios'],
		methods: {
			close: function close() {
				this.act({
					type: 'CLOSE_PRIZE_MASK'
				});
			}
		}
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MASK-PRIZE\" v-show=\"show\" _v-14f41202=\"\">\n\t<div class=\"cell\" _v-14f41202=\"\">\n\t\t<div class=\"panel-prize\" _v-14f41202=\"\">\n\t\t\t<img class=\"close\" :src=\" 'img/icon-close.png' \" @click=\"close\" _v-14f41202=\"\">\n\t\t\t<img class=\"panel-img\" :src=\" 'img/panel-prize.png' \" _v-14f41202=\"\">\n\t\t\t<div class=\"content\" _v-14f41202=\"\">\n\t\t\t\t<li v-if=\" prize===4 \" _v-14f41202=\"\">\n\t\t\t\t\t<img class=\"none\" :src=\" 'img/prize-none.png' \" _v-14f41202=\"\">\n\t\t\t\t\t<img class=\"btn-none\" :src=\" 'img/btn-none.png' \" @click=\"act({type:'TO_SHUPING'})\" _v-14f41202=\"\">\n\t\t\t\t</li>\t\t\t\t\t\n\t\t\t\t<li v-if=\" prize===3 \" _v-14f41202=\"\">\n\t\t\t\t\t<img class=\"vip\" :src=\" 'img/prize-vip.png' \" _v-14f41202=\"\">\n\t\t\t\t</li>\n\t\t\t\t<li v-if=\" prize===2 \" _v-14f41202=\"\">\n\t\t\t\t\t<img class=\"coupon\" :src=\" 'img/prize-coupon.png' \" _v-14f41202=\"\">\n\t\t\t\t\t<img class=\"btn-go\" :src=\" 'img/btn-go.png' \" @click=\"act({type:'TO_USE_COUPON'})\" _v-14f41202=\"\">\n\t\t\t\t</li>\n\t\t\t\t<li v-if=\" prize===1 \" _v-14f41202=\"\">\n\t\t\t\t\t<img class=\"prize-100\" :src=\" 'img/prize-100'+(ios?'_ios':'')+'.png' \" _v-14f41202=\"\">\n\t\t\t\t</li>\n\t\t\t\t<li v-if=\" prize===0 \" _v-14f41202=\"\">\n\t\t\t\t\t<img class=\"prize-500\" :src=\" 'img/prize-500'+(ios?'_ios':'')+'.png' \" _v-14f41202=\"\">\n\t\t\t\t</li>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(61);
	__vue_script__ = __webpack_require__(63);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161002\\adr\\src\\components\\Debug.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(64);
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
	    var id = "./Debug.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 61 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 62 */,
/* 63 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['state'],
		mounted: function mounted() {}
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"DEBUG\" _v-36fb4962=\"\">\n\ttestMode: {{state.testMode}}, loggedIn: {{state.loggedIn}}<br _v-36fb4962=\"\">\n\twriterNo: {{state.writerNo}}<br _v-36fb4962=\"\">\n\tpicked: {{state.picked}}, drawn: {{state.drawn}}, voted_on_other_platform: {{state.voted_on_other_platform}}<br _v-36fb4962=\"\">\n\tcouponGot: {{state.couponGot}}, couponUsed: {{state.couponUsed}}\n</div>\n";

/***/ }
/******/ ]);