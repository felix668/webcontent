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
	__webpack_require__(8);

	Vue.component('mask-confirm', __webpack_require__(10));

	var app = new Vue({
		el: '#root',
		data: {
			ios: /ios/.test(document.title) ? true : false,

			writers: _writers.writers,
			couponUsed: false,

			i: -1,
			show: false

		},
		computed: {},
		created: function created() {
			var self = this;
			this.getData();
		},
		methods: {
			toBook: function toBook(i) {
				ABook.gotoDetail(this.writers[i].bid);
			},
			use: function use(i) {
				var self = this;
				this.i = i;
				this.show = true;
			},
			act: function act(action) {
				var self = this;
				console.log(action);
				switch (action.type) {
					case 'HIDE':
						this.show = false;
						break;
					case 'CONFIRM':
						console.log(self.i);
						Local.reqaObj(common.server() + ('pkg161002/getbook?bid=' + _writers.writers[self.i].bid), function (data) {
							Local.showToast('兑换成功！');
							self.couponUsed = true;
							self.show = false;
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
						break;
				}
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
						self.loggedIn = data.isLogin;
						self.writers.forEach(function (a, i) {
							a.votes = data.authorvotes[i];
						});
						if (data.isLogin) {
							self.picked = data.votewho;
							self.drawn = data.drawn;
							self.couponGot = data.havecoupon;
							self.couponUsed = data.usecoupon;
						}
						console.log(self.picked);
					};
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
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
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
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

/***/ }
/******/ ]);