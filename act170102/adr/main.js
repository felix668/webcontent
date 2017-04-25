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
	$('.thumbs-cotnainer').each(function () {
		$(this).swiper({
			speed: 200,
			slidesPerView: 'auto',
			calculateHeight: true
		});
	});
	$('.pp-cotnainer').each(function () {
		$(this).swiper({
			speed: 300,
			slidesPerView: 'auto',
			calculateHeight: true
		});
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
	    var id = "_v-69077b53/app.vue";
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
			maskOver: __webpack_require__(11)
		},
		data: function data() {
			return {
				loading: true,
				over: false,
				pagenum: 'C',
				booklist16man: [{
					bid: '804248',
					cover: 'images/m16book1.jpg',
					bname: '玄界之门',
					authors: '忘语'
				}, {
					bid: '356106',
					cover: 'images/m16book2.jpg',
					bname: '我真是大明星',
					authors: '尝谕'
				}, {
					bid: '819435',
					cover: 'images/m16book3.jpg',
					bname: '一念永恒',
					authors: '耳根'
				}, {
					bid: '13723851',
					cover: 'images/m16book4.jpg',
					bname: '天影',
					authors: '萧鼎'
				}, {
					bid: '629993',
					cover: 'images/m16book5.jpg',
					bname: '雪鹰领主',
					authors: '我吃西红柿'
				}, {
					bid: '706064',
					cover: 'images/m16book6.jpg',
					bname: '弑天刃',
					authors: '小刀锋利'
				}, {
					bid: '743973',
					cover: 'images/m16book7.jpg',
					bname: '五行天',
					authors: '方想'
				}, {
					bid: '490223',
					cover: 'images/m16book8.jpg',
					bname: '龙皇武神',
					authors: '步征'
				}, {
					bid: '13667321',
					cover: 'images/m16book9.jpg',
					bname: '美食供应商',
					authors: '会做菜的猫'
				}, {
					bid: '753601',
					cover: 'images/m16book10.jpg',
					bname: '银狐',
					authors: '孑与2'
				}],
				booklist16wom: [{
					bid: '185422',
					cover: 'images/w16book1.jpg',
					bname: '邪王追妻：废材逆天小姐',
					authors: '苏小暖'
				}, {
					bid: '801989',
					cover: 'images/w16book2.jpg',
					bname: '君九龄',
					authors: '希行'
				}, {
					bid: '13700974',
					cover: 'images/w16book3.jpg',
					bname: '隔墙有男神：强行相爱100天',
					authors: '叶非夜'
				}, {
					bid: '815556',
					cover: 'images/w16book4.jpg',
					bname: '慕南枝',
					authors: '吱吱'
				}, {
					bid: '626275',
					cover: 'images/w16book5.jpg',
					bname: '绝世神医：腹黑大小姐',
					authors: '夜北'
				}, {
					bid: '749834',
					cover: 'images/w16book6.jpg',
					bname: '傲娇男神住我家：99次说爱你',
					authors: '叶非夜'
				}, {
					bid: '607991',
					cover: 'images/w16book7.jpg',
					bname: '神医弃女：鬼帝的驭兽狂妃',
					authors: 'MS芙子'
				}, {
					bid: '704011',
					cover: 'images/w16book8.jpg',
					bname: '毒步天下：特工神医小兽妃',
					authors: '穆丹枫'
				}, {
					bid: '727913',
					cover: 'images/w16book9.jpg',
					bname: 'Hello，继承者',
					authors: '公子衍'
				}, {
					bid: '816551',
					cover: 'images/w16book10.jpg',
					bname: '长嫡',
					authors: '莞尔wr'
				}],
				booklist15man: [{
					bid: '500680',
					cover: 'images/m15book1.jpg',
					bname: '我欲封天',
					authors: '耳根'
				}, {
					bid: '462589',
					cover: 'images/m15book2.jpg',
					bname: '造化之门',
					authors: '鹅是老五'
				}, {
					bid: '462590',
					cover: 'images/m15book3.jpg',
					bname: '一世之尊',
					authors: '爱潜水的乌贼'
				}, {
					bid: '456867',
					cover: 'images/m15book4.jpg',
					bname: '天域苍穹',
					authors: '风凌天下'
				}, {
					bid: '498380',
					cover: 'images/m15book5.jpg',
					bname: '星战风暴',
					authors: '骷髅精灵'
				}, {
					bid: '499690',
					cover: 'images/m15book6.jpg',
					bname: '超品相师',
					authors: '九灯和善'
				}, {
					bid: '498953',
					cover: 'images/m15book7.jpg',
					bname: '大宋的智慧',
					authors: '孑与2'
				}, {
					bid: '319657',
					cover: 'images/m15book8.jpg',
					bname: '三界独尊',
					authors: '犁天'
				}, {
					bid: '462521',
					cover: 'images/m15book9.jpg',
					bname: '完美世界',
					authors: '辰东'
				}, {
					bid: '357735',
					cover: 'images/m15book10.jpg',
					bname: '择天记',
					authors: '猫腻'
				}],
				booklist15wom: [{
					bid: '185422',
					cover: 'images/w15book1.jpg',
					bname: '邪王追妻：废材逆天小姐',
					authors: '苏小暖'
				}, {
					bid: '612464',
					cover: 'images/w15book2.jpg',
					bname: '国民老公带回家',
					authors: '叶非夜'
				}, {
					bid: '504494',
					cover: 'images/w15book3.jpg',
					bname: '金陵春',
					authors: '吱吱'
				}, {
					bid: '238544',
					cover: 'images/w15book4.jpg',
					bname: '惊世毒妃：轻狂大小姐',
					authors: ' 白天'
				}, {
					bid: '503263',
					cover: 'images/w15book5.jpg',
					bname: '炮灰攻略',
					authors: '莞尔wr'
				}, {
					bid: '562666',
					cover: 'images/w15book6.jpg',
					bname: '诛砂',
					authors: '希行'
				}, {
					bid: '626275',
					cover: 'images/w15book7.jpg',
					bname: '绝世神医：腹黑大小姐',
					authors: '夜北'
				}, {
					bid: '533779',
					cover: 'images/w15book8.jpg',
					bname: '征服游戏：野性小妻难驯服',
					authors: '公子如雪'
				}, {
					bid: '609652',
					cover: 'images/w15book9.jpg',
					bname: '倾世宠妻',
					authors: '寒武记'
				}, {
					bid: '178049',
					cover: 'images/w15book10.jpg',
					bname: '爆笑宠妃：爷我等你休妻',
					authors: '梵缺'
				}],
				photos: [{
					imgurl: 'images/photo1.jpg',
					tit: '2015中国原创文学风云榜颁奖盛典'
				}, {
					imgurl: 'images/photo2.jpg',
					tit: '阅文集团大师顾问团'
				}, {
					imgurl: 'images/photo3.jpg',
					tit: '阅文集团高层领导'
				}, {
					imgurl: 'images/photo5.jpg',
					tit: '阅文集团CEO吴文辉'
				}, {
					imgurl: 'images/photo6.jpg',
					tit: '柳岩为第十、九、八名获奖者颁奖'
				}, {
					imgurl: 'images/photo7.jpg',
					tit: '猫腻得奖'
				}, {
					imgurl: 'images/photo8.jpg',
					tit: '陈坤颁奖'
				}, {
					imgurl: 'images/photo9.jpg',
					tit: '刘震云为《琅琊榜》出品方代表颁奖'
				}, {
					imgurl: 'images/photo10.jpg',
					tit: '陈坤现身原创文学风云榜'
				}, {
					imgurl: 'images/photo11.jpg',
					tit: '“正版联盟”成立仪式'
				}, {
					imgurl: 'images/photo12.jpg',
					tit: 'SNH48人气少女组合表演'
				}]
			};
		},
		methods: {
			initpage: function initpage() {
				var self = this;
				Local.init();
				Local.reqaObj(server() + "pkg170101/init", function (data) {
					console.log(data);
					self.loading = false;
					self.pagenum = data.code;
					self.over = data.isover;
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog("170109");
			},
			godetail: function godetail(bid, wz) {
				console.log(bid);
				ABook.gotoDetail(bid);
				forceLog("170109", wz + bid);
			},

			share: function share() {
				var shareObj = {
					url: "http://iyuedu.qq.com/event/act170101/com/index.html?tf=1",
					cover: "http://iyuedu.qq.com/event/act170101/com/images/cover.jpg",
					title: "风云榜颁奖盛典正在直播中！",
					desc: "想看胡歌、何炅、张天爱、猫腻、苏小暖等重量级明星、大神作家的快来！"
				};
				console.log(shareObj.url);
				Local.shareTopic(shareObj.url, shareObj.cover, shareObj.title, shareObj.desc, 1);
				forceLog("170109", "share");
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
	    var id = "_v-54d23042/MaskLoading.vue";
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

	module.exports = "\n<div class=\"MaskLoading\" _v-54d23042=\"\">\n\t<p class=\"_text\" _v-54d23042=\"\"><img :src=\"'images/loading.png'\" _v-54d23042=\"\">正在加载...</p>\n</div>\n";

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
	    var id = "_v-4a2edc84/MaskOver.vue";
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

	module.exports = "\n<div class=\"over\" _v-4a2edc84=\"\">\n\t<div class=\"over-c\" _v-4a2edc84=\"\">\n        <img :src=\"'images/over.png'\" alt=\"本期活动已结束\" _v-4a2edc84=\"\">\n        <p class=\"over-p1\" _v-4a2edc84=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-4a2edc84=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\">\n\t\t<div class=\"bannerA\" v-if=\"pagenum=='A'\"></div>\n\t\t<div class=\"banner\" v-if=\"pagenum!='A'\"></div>\n\t\t<div class=\"timebox\">\n\t\t\t<div class=\"ttbox tt16\">\n\t\t\t\t<img :src=\"'images/tt16.png'\" />\n\t\t\t\t<div class=\"ttA\" v-show=\"pagenum=='A'\">\n\t\t\t\t\t<h4></h4>\n\t\t\t\t\t<p>1月10日敬请期待</p>\n\t\t\t\t</div>\n\t\t\t\t<!---->\n\t\t\t\t<div class=\"ttBC\" v-show=\"pagenum=='B' || pagenum=='C'\">\n\t\t\t\t\t<h4></h4>\n\t\t\t\t\t<p>精彩视频（建议在wifi下观看）</p>\n\t\t\t\t\t<div class=\"videbox\">\n\t\t\t\t\t\t\t<div class=\"videframe\">\n\t\t\t\t\t\t\t\t<iframe frameborder=\"0\" width=\"100%\" height=\"100%\" :src=\"'../com/video.html'\" allowfullscreen></iframe>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!---->\n\t\t\t\t<div class=\"ttD\" v-show=\"pagenum=='D'\">\n\t\t\t\t\t<h4></h4>\n\t\t\t\t\t<p>精彩视频（建议在wifi下观看）</p>\n\t\t\t\t\t<div class=\"videbox\">\n\t\t\t\t\t\t\t<div class=\"videframe\">\n\t\t\t\t\t\t\t\t<iframe frameborder=\"0\" width=\"100%\" height=\"100%\" :src=\"'../com/video.html'\" allowfullscreen></iframe>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!---->\n\t\t\t<div class=\"booklist\" v-show=\"pagenum=='C'|| pagenum=='D'\">\n\t\t\t\t<div class=\"tt2\"></div>\n\t\t\t\t<p class=\"smalltt\">17年1月10号 19:00-1月11号 19:00限时免费读</p>\n\t\t\t\t<div class=\"childtt\">男生频道</div>\n\t\t\t\t<div class=\"bookbox swiper-container thumbs-cotnainer\">\n\t\t\t\t\t<ul class=\"swiper-wrapper\">\n\t\t\t\t\t\t<li class=\"swiper-slide\" v-for=\"book in booklist16man\" @click=\"godetail(book.bid,'16man')\">\n\t\t\t\t\t\t\t<img :src=\"book.cover\" />\n\t\t\t\t\t\t\t<p class=\"bookname\">{{ book.bname }}</p>\n\t\t\t\t\t\t\t<p>{{ book.authors }}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"childtt\">女生频道</div>\n\t\t\t\t<div class=\"bookbox swiper-container thumbs-cotnainer\">\n\t\t\t\t\t<ul class=\"swiper-wrapper\">\n\t\t\t\t\t\t<li class=\"swiper-slide\" v-for=\"book in booklist16wom\" @click=\"godetail(book.bid,'16wom')\">\n\t\t\t\t\t\t   <img :src=\"book.cover\" />\n\t\t\t\t\t\t   <p class=\"bookname\">{{ book.bname }}</p>\n\t\t\t\t\t\t   <p>{{ book.authors }}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t\t<!---->\n\t\t\t<div class=\"ttbox tt15\">\n\t\t\t\t<img :src=\"'images/tt15.png'\" />\n\t\t\t\t<h4></h4>\n\t\t\t\t<p>精彩视频（建议在wifi下观看）</p>\n\t\t\t</div>\n\t\t\t<div class=\"videbox\">\n\t\t\t\t\t<div class=\"videframe\">\n\t\t\t\t\t\t<iframe frameborder=\"0\" width=\"100%\" height=\"100%\" :src=\"'http://v.qq.com/iframe/player.html?vid=v035374u8u4&tiny=0&auto=0'\" allowfullscreen></iframe>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!---->\n\t\t\t<div class=\"booklist\">\n\t\t\t\t<div class=\"tt2\"></div>\n\t\t\t\t<div class=\"childtt\">男生频道</div>\n\t\t\t\t<div class=\"bookbox swiper-container thumbs-cotnainer\">\n\t\t\t\t\t<ul class=\"swiper-wrapper\">\n\t\t\t\t\t\t<li class=\"swiper-slide\" v-for=\"book in booklist15man\" @click=\"godetail(book.bid,'15man')\">\n\t\t\t\t\t\t\t<img :src=\"book.cover\" />\n\t\t\t\t\t\t\t<p class=\"bookname\">{{ book.bname }}</p>\n\t\t\t\t\t\t\t<p>{{ book.authors }}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"childtt\">女生频道</div>\n\t\t\t\t<div class=\"bookbox swiper-container thumbs-cotnainer\">\n\t\t\t\t\t<ul class=\"swiper-wrapper\">\n\t\t\t\t\t\t<li class=\"swiper-slide\" v-for=\"book in booklist15wom\" @click=\"godetail(book.bid,'15wom')\">\n\t\t\t\t\t\t   <img :src=\"book.cover\" />\n\t\t\t\t\t\t   <p class=\"bookname\">{{ book.bname }}</p>\n\t\t\t\t\t\t   <p>{{ book.authors }}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t\t<!---->\n\t\t\t<div class=\"photobox\">\n\t\t\t\t<div class=\"tt2\"></div>\n\t\t\t\t<div class=\"photolist swiper-container pp-cotnainer\">\n\t\t\t\t\t<ul class=\"swiper-wrapper\">\n\t\t\t\t\t\t<li class=\"swiper-slide\" v-for=\"photo in photos\">\n\t\t\t\t\t\t\t<div class=\"ppbox\">\n\t\t\t\t\t\t\t\t<img :src=\"photo.imgurl\" />\n\t\t\t\t\t\t\t\t<p>{{ photo.tit }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"btnbox\">\n\t\t\t<a href=\"javascript:\" @click=\"share\"></a>\n\t\t</div>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n</div>\n";

/***/ }
/******/ ]);