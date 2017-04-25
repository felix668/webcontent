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

	__webpack_require__(2);

	__webpack_require__(3);
	//import '../debugger.js';


	Vue.component('app', __webpack_require__(7));

	var root = new Vue({
		el: '#root',
		template: '<app></app>'
	});

/***/ },
/* 1 */
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
			$html.style.fontSize = 100 * w / 750 + 'px';
			//document.getElementsByClassName('container')[0].style.height = h+'px';
			console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
		}
		setRem();
		window.addEventListener('resize', setRem);
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var root = location.href.replace(/act161203.+/, 'act161203/adr/');

	window.DIR = {
		video: root + 'video/'
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__vue_script__ = __webpack_require__(8);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\_index\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(122);
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
	    var id = "./App.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	__webpack_require__(9);

	var _store = __webpack_require__(11);

	exports.default = {
		components: {
			Debugger: __webpack_require__(13),
			MaskLoading: __webpack_require__(19),
			MaskOver: __webpack_require__(24),

			Focus: __webpack_require__(29),

			MainBlock: __webpack_require__(34),
			MaskBooks: __webpack_require__(78)
		},
		data: function data() {
			return _store.data;
		},
		computed: {
			href: function href() {
				var self = this;
				return location.href.replace(/act161203.+/, 'act161203/com/share.html?tf=1&uid=' + self.uid + '&aid=' + self.current + '&act_f=161222&tl=' + self.tl);
			}
		},
		watch: {},
		created: function created() {},
		mounted: function mounted() {
			this.act({ type: 'INIT' });
		},
		methods: {
			act: _store.act
		}
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {
		dev: false,

		page: 'pending',

		what: function () {
			var el = document.querySelector('[what]');
			var val = el.getAttribute('what');
			return val;
		}(),

		adr: function () {
			var el = document.querySelector('[config]');
			var val = el.getAttribute('config');
			console.log(val);
			return (/adr/.test(val) ? true : false
			);
		}(),

		ios: function () {
			var el = document.querySelector('[config]');
			var val = el.getAttribute('config');
			console.log(val);
			return (/ios/.test(val) ? true : false
			);
		}(),

		share: function () {
			var el = document.querySelector('[config]');
			var val = el.getAttribute('config');
			return (/share/.test(val) ? true : false
			);
		}(),
		entry: function () {
			var el = document.querySelector('[config]');
			var val = el.getAttribute('config');
			return (/entry/.test(val) ? true : false
			);
		}(),

		loggedIn: false,
		vip: false,
		uid: '',
		avatar: './img/default.jpg',

		stage: -1,
		mask_books: false,

		day: 0,
		current: 0,

		total: 0,

		writers: __webpack_require__(12).default,

		info: {
			time: 0,
			billsAvailable: 0,
			billsReceived: 0
		},

		tl: ''
	};

	function act(action) {
		var self = this;
		switch (action.type) {
			case 'CHANGE_STAGE':
				this.stage = action.n;
				break;
			case 'SWITCH':
				this.current = action.n;
				Local.forceLog(common.param('act_f'), self.what + '_switch');
				break;
			case 'CHANGE_STATE':
				this.writers[action.i].state = action.state;
				break;
			case 'SET_LOADED':
				this.writers[action.i].loaded = true;
				break;

			case 'EXCHANGE':
				if (self.dev) {} else {
					if (!self.loggedIn) {
						self.act({
							type: 'LOGIN'
						});
					} else {
						if (!self.ios) {
							Local.reqaObj("http://adr.reader.qq.com/6_2/weekReadTime/presentBilling", function (data) {
								if (data.code === 0) {
									Local.showToast("领取成功");
									location.href = location.href;
								} else {
									Local.showToast(data.msg);
								}
							}, [], function () {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
						} else {
							Local.reqaObj("https://ptbookios.reader.qq.com/v6_3_7/weekReadTime/presentBilling", function (data) {
								if (data.code === 0) {
									Local.showToast("领取成功");
									location.href = location.href;
								} else {
									Local.showToast(data.msg);
								}
							}, [], function () {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
						}
					}
				}
				break;

			case 'PLAY_VIDEO':
				Local.forceLog(common.param('act_f'), self.what + '_play_' + action.i);
				break;

			case 'INIT':
				if (self.dev) {
					self.day = 2;
					self.writers[6].unlocked = true;
					self.stage = 0;
					self.page = 'ready';
				} else {

					if (self.entry && self.ios) {
						var client = common.param('client');
						if (client === 2 && client === 3) {
							if (window.iOSNative) {
								//iOSNative.customUI('红包','000000');
							};
						}
					};

					// 每次分享操作完成后，客户端将会自动调用的回调函数：
					// url：分享出去的链接，success:是否分享成功
					window.afterShare = function (url, success) {
						//Local.showToast('分享成功！');
						Local.reqaObj(common.server() + ('pkg161203/pick?idx=' + self.current), function (data) {
							if (data.code === 1) {
								self.writers[self.current].unlocked = true;
								self.total++;
							};
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					};

					Local.forceLog(common.param('act_f'), self.what + '_enter');

					Local.reqaObj(common.server() + 'pkg161203/init', function (data) {
						console.log(data);

						self.loggedIn = data.isLogin;

						// self.day = data.index;
						// self.total = Number( data.totalFreeNumber );

						// if( data.isLogin ){
						// 	if( data.hasFreeList ){
						// 		data.hasFreeList.forEach(a=>{
						// 			self.writers[Number(a)].unlocked = true;
						// 		})
						// 	};

						// 	if( data.uid ){
						// 		self.uid = data.uid;
						// 	};
						// 	if( data.userAvor ){
						// 		self.avatar = data.userAvor;
						// 	};
						// };

						// if( data.tl ){
						// 	self.tl = data.tl;
						// };

						// if( data.code===-4 ){
						// 	self.page = 'over';
						// }else{

						if (self.entry) {
							if (!self.ios) {
								Local.reqaObj('http://adr.reader.qq.com/6_2/getWeekReadTime', function (data) {
									console.log(data);
									self.info.time = data.weekExchangeInfo.weekReadTime;
									self.info.billsAvailable = data.weekExchangeInfo.canExchangeBilling;
									self.info.billsReceived = data.weekExchangeInfo.exchangedBilling;

									self.page = 'ready';
									self.stage = 1;
								}, [], function () {
									Local.showToast("网络异常，请稍候重试");
								}, 1);
							} else {
								Local.reqaObj('https://ptbookios.reader.qq.com/v6_3_7/getWeekReadTime', function (data) {
									console.log(data);
									if (data.isLogin) {
										self.info.time = data.weekExchangeInfo.weekReadTime;
										self.info.billsAvailable = data.weekExchangeInfo.canExchangeBilling;
										self.info.billsReceived = data.weekExchangeInfo.exchangedBilling;
									};

									self.page = 'ready';
									self.stage = 1;
								}, [], function () {
									Local.showToast("网络异常，请稍候重试");
								}, 1);
							}
						} else {
							// var href = location.href
							// .replace( /http:\/\/solomotest4\.3g\.qq\.com/,'https://ptsolomo.reader.qq.com' )
							// .replace( /http:\/\/iyuedu\.qq\.com/,'https://yuedu.reader.qq.com' )
							// .replace( /act161203.+/,`act161203/com/share.html?uid=${self.uid}&aid=${self.current}&act_f=act_f=161222` );
							// Local.setIconForShareing(
							// 	self.href,
							//              location.href.replace( /act161203.+/,'act161203/adr/img/qqreader.png' ),
							//              '大神送祝福',
							//              'QQ阅读大神送祝福'
							// );

							// self.page = 'ready';
							// self.stage = 0;
						};
						//};
					}, [], function () {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				};
				break;
			case 'MOCK':
				break;
			case 'LOGIN':
				if (self.dev) {
					self.loggedIn = true;
				} else {
					Local.login();
				};
				break;

			case 'PICK':
				Local.reqaObj(common.server() + ('pkg161203/pick?idx=' + self.current), function (data) {
					console.log(data);
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				break;

			case 'TO_BUY':
				Local.forceLog(common.param('act_f'), 'THXbuy_' + action.bid);
				break;
			case 'MINUS':
				if (this.timeleft - 60000 > 0) {
					this.timeleft -= 60000;
				} else {
					this.timeleft = 0;
				}
				break;
			case 'TO_PLAY':
				Local.openPage(self.href);
				break;

			case 'TO_JINGXUAN':
				Local.forceLogTemp(self.page_no, 'to_shucheng', 0);
				MtaH5.clickStat('to_shucheng', {
					'page': self.page_no
				});
				Local.toJingxuan();
				break;
			case 'TO_BAOYUE_ZONE':
				Local.forceLogTemp(self.page_no, 'to_baoyuequ', 0);
				MtaH5.clickStat('to_baoyuequ', {
					'page': self.page_no
				});
				Local.toBaoyueZone();
				break;

			case 'SHOW_MASK':
				this.mask_books = true;
				Local.forceLog(common.param('act_f'), self.what + '_check');
				break;
			case 'HIDE_MASK':
				setTimeout(function () {
					self.mask_books = false;
				}, 300);
				break;
			case 'TO_DOWNLOAD':
				N.downLoad(null, '10003531');
				break;

			case '_TO_BOOK':
				if (!self.share) {
					ABook.gotoDetail(action.bid);
				} else {
					self.act({
						type: 'SHOW_MASK'
					});
				}
				break;
			case '_SHARE':
				//console.log(location.href.replace(/svn/,''))
				if (self.dev) {
					if (!self.loggedIn) {
						self.loggedIn = true;
					} else {
						self.writers[self.current].unlocked = true;
					}
				} else {
					Local.forceLog(common.param('act_f'), self.what + '_share_' + self.current);
					if (!self.loggedIn) {
						self.act({
							type: 'LOGIN'
						});
					} else {

						Local.$share(self.href, location.href.replace(/act161203.+/, 'act161203/adr/img/qqreader.png'), 'QQ阅读6周年，大神请客，经典免费读', '我领到免费神作，你也快来吧');
					}
				}
				break;
		}
	}

	exports.data = data;
	exports.act = act;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = [{
		id: 0,
		state: 'pending',
		loaded: false,
		name: '犁天',
		desc: '阅文旗下创世中文网大神作家',
		unlocked: false,
		books: [{
			bid: 13510168,
			title: '至高主宰',
			price: 51.82
		}, {
			bid: 483050,
			title: '不朽神王',
			price: 126.49
		}, {
			bid: 475518,
			title: '气冲星河',
			price: 144.48
		}]
	}, {
		id: 1,
		state: 'pending',
		loaded: false,
		name: '血红',
		desc: '白金作家，擅长玄幻热血风格',
		unlocked: false,
		books: [{
			bid: 717341,
			title: '巫神纪',
			price: 158.99
		}, {
			bid: 462593,
			title: '三界血歌',
			price: 196.33
		}, {
			bid: 468921,
			title: '逍行纪',
			price: 96.48
		}]
	}, {
		id: 2,
		state: 'pending',
		loaded: false,
		name: '鱼人二代',
		desc: '白金作家，都市小说第一人',
		unlocked: false,
		books: [{
			bid: 825477,
			title: '总裁校花爱上我',
			price: 47.71
		}, {
			bid: 501245,
			title: '极品修真强少',
			price: 187.33
		}, {
			bid: 467098,
			title: '很纯很暧昧',
			price: 327.89
		}]
	}, {
		id: 3,
		state: 'pending',
		loaded: false,
		name: '骷髅精灵',
		desc: '大神级作者',
		unlocked: false,
		books: [{
			bid: 13694333,
			title: '斗战狂潮',
			price: 18.77
		}, {
			bid: 498380,
			title: '星战风暴',
			price: 179.03
		}, {
			bid: 486914,
			title: '圣堂',
			price: 118.42
		}]
	}, {
		id: 4,
		state: 'pending',
		loaded: false,
		name: '叶非夜',
		desc: '白金作家，言情天后',
		unlocked: false,
		books: [{
			bid: 749834,
			title: '傲娇男神住我家：99次说爱你',
			price: 48.42
		}, {
			bid: 612464,
			title: '国民老公带回家',
			price: 41.19
		}]
	}, {
		id: 5,
		state: 'pending',
		loaded: false,
		name: '冷青衫',
		desc: '人气白金作者',
		unlocked: false,
		books: [{
			bid: 421015,
			title: '一世倾城：冷宫弃妃',
			price: 267.45
		}, {
			bid: 424736,
			title: '少女太后：弃妇荣华',
			price: 24.85
		}, {
			bid: 407914,
			title: '冷宫欢',
			price: 31.48
		}]
	}, {
		id: 6,
		state: 'pending',
		loaded: false,
		name: '公子衍',
		desc: '白金作家，文风搞怪，文笔诙谐',
		unlocked: false,
		books: [{
			bid: 727913,
			title: 'Hello，继承者',
			price: 125.73
		}, {
			bid: 536171,
			title: '娱乐大亨的秘宠：甜心小呆妻',
			price: 93.67
		}]
	}, {
		id: 7,
		state: 'pending',
		loaded: false,
		name: '夜北',
		desc: '白金作者，古言大神',
		unlocked: false,
		books: [{
			bid: 626275,
			title: '绝世神医：腹黑大小姐',
			price: 150.61
		}, {
			bid: 236549,
			title: '绝世神偷：废柴七小姐',
			price: 134.17
		}]
	}];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(14);
	__vue_script__ = __webpack_require__(17);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\components\\Debugger.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(18);
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
	    var id = "./Debugger.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['state'],
		computed: {
			writers: function writers() {
				var state = [];
				this.state.writers.forEach(function (a) {
					state.push(a.state);
				});
				return state;
			}
		},
		mounted: function mounted() {}
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"DEBUG\" _v-596f8950=\"\">\n\t<div class=\"fixed__\" _v-596f8950=\"\">\n\t\tloggedIn: {{state.loggedIn}}, day: {{state.day}}<br _v-596f8950=\"\">\n\t\tcurrent: {{state.current}}<br _v-596f8950=\"\">\n\t</div>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(20);
	__vue_script__ = __webpack_require__(22);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\components\\MaskLoading.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(23);
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
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {};
		},
		mounted: function mounted() {}
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskLoading\" _v-5f0b55c9=\"\">\n\t<p class=\"_text\" _v-5f0b55c9=\"\">加载中...</p>\n</div>\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(25);
	__vue_script__ = __webpack_require__(27);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\components\\MaskOver.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(28);
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
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {};
		}
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskOver\" _v-e0ec9cd2=\"\">\n\t<div class=\"content_666\" _v-e0ec9cd2=\"\">\n\t\t<div class=\"content_667\" _v-e0ec9cd2=\"\">\n\t\t\t<img :src=\" 'img/over.png' \" _v-e0ec9cd2=\"\">\n\t\t\t<p _v-e0ec9cd2=\"\">本期活动已结束</p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(30);
	__vue_script__ = __webpack_require__(32);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\components\\Focus.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(33);
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
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['stage', 'act'],
		components: {},
		data: function data() {
			return {
				penguin_0: '',
				penguin_1: '',
				bg_focus: ''
			};
		},
		created: function created() {},
		watch: {
			stage: function stage(new_val) {
				if (new_val === 0) {
					this.animate();
				}
			}
		},
		mounted: function mounted() {},
		methods: {
			animate: function animate() {
				var self = this;

				var penguin_0 = this.$refs.penguin_0;
				var penguin_1 = this.$refs.penguin_1;
				var penguin = this.$refs.penguin;
				var title_0 = this.$refs.title_0;
				var title_1 = this.$refs.title_1;
				var Focus = this.$refs.Focus;
				var group = this.$refs.group;

				var tl3 = new TimelineMax();
				tl3.fromTo(group, 1.5, {
					transformOrigin: '50% 50%',
					scale: 0.98
				}, {
					scale: 1.02
				}).to(group, 0.8, {
					scale: 1
				});

				var tl2 = new TimelineMax();
				tl2.to(title_0, 1, {
					opacity: 1
				}).to(title_1, 1, {
					opacity: 1
				});

				var tl = new TimelineMax();
				tl.fromTo(penguin_0, 0.6, {
					transformOrigin: '100% 100%',
					rotation: '50deg'
				}, {
					rotation: '0'
				}).to(penguin_0, 0.5, {
					x: '200%'
				}).fromTo(penguin_1, 0.6, {
					transformOrigin: '0% 100%',
					x: '-100%',
					rotation: '-50deg'
				}, {
					x: '0%',
					rotation: 0
				}).to(penguin_1, 0.5, {
					x: '-200%'
				}).fromTo(penguin, 0.5, {
					y: '50%'
				}, {
					y: '0%',
					onStart: function onStart() {},
					ease: Elastic
				}).fromTo(Focus, 0.3, {
					opacity: 1
				}, {
					opacity: 0,
					delay: 0.3
				}).to(Focus, 0.5, {
					opacity: 0.7,
					onComplete: this.CHANGE_STAGE.bind(this)
				});
			},
			CHANGE_STAGE: function CHANGE_STAGE() {
				this.act({
					type: 'CHANGE_STAGE',
					n: 1
				});
			}
		}
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Focus\" ref=\"Focus\" _v-62737ab1=\"\">\n\n\t<img class=\"logo\" :src=\" '../adr/img/logo.png' \" _v-62737ab1=\"\">\n\n\t<div class=\"content\" _v-62737ab1=\"\">\n\t\t<img class=\"bg_focus\" :src=\" 'img/bg_focus_2.png' \" :class=\" bg_focus \" _v-62737ab1=\"\">\n\t\t<div class=\"group\" ref=\"group\" _v-62737ab1=\"\">\n\t\t\t<img class=\"man\" :src=\" 'img/man.png' \" _v-62737ab1=\"\">\n\t\t\t<img class=\"penguin\" ref=\"penguin\" :src=\" 'img/penguin_2.png' \" _v-62737ab1=\"\">\n\t\t\t<img class=\"shelf\" :src=\" 'img/shelf_2.png' \" _v-62737ab1=\"\">\n\t\t</div>\n\t</div>\n\n\t<img class=\"penguin_0\" ref=\"penguin_0\" :class=\" penguin_0 \" :src=\" 'img/penguin_0_2.png' \" _v-62737ab1=\"\">\n\t<img class=\"penguin_1\" ref=\"penguin_1\" :class=\" penguin_1 \" :src=\" 'img/penguin_1_2.png' \" _v-62737ab1=\"\">\n\t\n\t<img class=\"title_0\" :src=\" 'img/title_0.png' \" ref=\"title_0\" _v-62737ab1=\"\">\n\t<img class=\"title_1\" :src=\" 'img/title_1.png' \" ref=\"title_1\" _v-62737ab1=\"\">\n\n\n\t<img class=\"camera\" :src=\" 'img/camera.png' \" _v-62737ab1=\"\">\n\t\n\t<p class=\"skip\" @click=\"CHANGE_STAGE\" _v-62737ab1=\"\">跳过 &gt;</p>\n</div>\n";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(35);
	__vue_script__ = __webpack_require__(37);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\components\\MainBlock.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(77);
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
	    var id = "./MainBlock.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			writers: {},
			current: {},
			act: {},
			day: {},
			stage: {},
			total: {},
			entry: {},
			avatar: {},
			adr: {},
			info: {}
		},
		components: {
			Swiper: __webpack_require__(38),
			FreeBooks: __webpack_require__(67),
			Rules: __webpack_require__(72)
		},
		data: function data() {
			return {};
		},
		created: function created() {},
		watch: {},
		methods: {}
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(39);
	__vue_script__ = __webpack_require__(41);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\components\\Swiper.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(66);
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
	    var id = "./Swiper.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(42);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			MyVideo: __webpack_require__(61)
		},
		props: {
			act: {},
			day: {},
			stage: {},
			yyb: {},
			items: {},
			style: {
				default: ''
			},
			carousel: {
				default: false
			},
			sticky: {
				default: false
			},
			autoplay: {
				default: false
			},
			duration: {
				default: 500
			},
			interval: {
				default: 1000
			},
			authors: {}
		},
		data: function data() {
			return (0, _defineProperty3.default)({
				width: 0,

				switching: false,
				inCycle: false,
				moveCount: 0,
				scrolling: false,
				trainOffsetX: 0,
				offset: 0,
				X1: 0,
				X2: 0,

				currentOne: 0,
				transition: '0s'
			}, 'offset', 0);
		},
		computed: {
			author: function author() {
				return this.items[this.currentOne].name;
			}
		},
		watch: {
			day: function day(newVal) {
				this.currentOne = newVal;
			},
			currentOne: function currentOne(new_val, old) {
				this.act({
					type: 'SWITCH',
					n: new_val
				});
			},
			stage: function stage(neo) {
				var self = this;
				if (neo === 1) {

					var tl = new TimelineMax();
					var advice = this.$refs.advice;

					tl.fromTo(advice, 1, {
						opacity: 0
					}, {
						opacity: 1
					}).to(advice, 1, {
						opacity: 0.5
					}).to(advice, 1, {
						opacity: 1
					}).to(advice, 1, {
						opacity: 0,
						onComplete: function onComplete() {
							advice.style.display = 'none';
						}
					});

					var tl2 = new TimelineMax();
					var swiper = this.$refs.swiper;
					tl2.to(swiper, 0.5, {
						x: '-40%',
						rotation: '-3deg'
					}).to(swiper, 0.5, {
						x: '40%',
						rotation: '3deg'
					}).to(swiper, 0.5, {
						x: '0%',
						rotation: 0
					});
				}
			}
		},
		mounted: function mounted() {
			var _this = this;

			var self = this;

			window.addEventListener('load', function () {
				_this.setWidth();
			});
			window.addEventListener('resize', function () {
				setTimeout(function () {
					_this.setWidth();
				}, 50);
			});
			if (this.autoplay) {
				setInterval(function () {
					if (!_this.inCycle) {
						_this.toNext();
					};
				}, this.interval);
			}
		},
		methods: {
			__toItem: function __toItem(name) {
				var i;
				this.items.forEach(function (a) {
					if (a.name === name) {
						i = a.id;
					}
				});
				this.toCard(i);
			},
			setWidth: function setWidth() {
				var elem = this.$refs.swiper;
				var width = Number(document.defaultView.getComputedStyle(elem).width.replace(/px/, ''));
				this.width = width;
				this.transition = '0s';
				this.trainOffsetX = -this.currentOne * this.width;
			},
			toNext: function toNext() {
				var _this2 = this;

				if (true) {
					this.switching = true;
					this.transition = this.duration + 'ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					if (this.currentOne < this.items.length - 1) {
						this.currentOne++;
						this.trainOffsetX = -this.currentOne * this.width;
					} else if (this.carousel) {
						this.currentOne = 0;
						this.trainOffsetX = -this.items.length * this.width;
					} else {
						this.trainOffsetX = -this.currentOne * this.width;
					}
					setTimeout(function () {
						_this2.transition = '0s';
						if (_this2.carousel && _this2.currentOne === 0) {
							_this2.trainOffsetX = 0;
						};
						_this2.switching = false;
						_this2.inCycle = false;
					}, this.duration);
				}
			},
			toPrev: function toPrev() {
				var _this3 = this;

				this.switching = true;
				this.transition = this.duration + 'ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				if (this.currentOne > 0) {
					this.currentOne--;
					this.trainOffsetX = -this.currentOne * this.width;
				} else if (this.carousel) {
					this.currentOne = this.items.length - 1;
					this.trainOffsetX = this.width;
				} else {
					this.trainOffsetX = -this.currentOne * this.width;
				}
				setTimeout(function () {
					_this3.transition = '0s';
					if (_this3.carousel && _this3.currentOne === _this3.items.length - 1) {
						_this3.trainOffsetX = -_this3.currentOne * _this3.width;
					};
					_this3.switching = false;
					_this3.inCycle = false;
				}, this.duration);
			},
			toCard: function toCard(i) {
				var _this4 = this;

				this.currentOne = i;
				this.transition = this.duration + 'ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				this.trainOffsetX = -this.currentOne * this.width;
				setTimeout(function () {
					_this4.transition = '0s';
					_this4.switching = false;
					_this4.inCycle = false;
				}, this.duration);
			},
			touchstart: function touchstart(e) {
				console.log(this.inCycle);
				e.stopPropagation();
				if (!this.inCycle) {
					this.inCycle = true;

					this.moveCount = 0;
					this.scrolling = false;
					this.transition = '0s';

					this.X0 = this.X1 = e.changedTouches[0].pageX;
					this.Y1 = e.changedTouches[0].pageY;
				};
			},
			touchmove: function touchmove(e) {
				e.stopPropagation();
				if (this.inCycle) {
					this.moveCount++;
					if (!this.scrolling) {
						if (this.moveCount === 1) {
							this.X2 = e.changedTouches[0].pageX;
							this.Y2 = e.changedTouches[0].pageY;
							var distanceY = this.Y2 - this.Y1;
							var distanceX = this.X2 - this.X1;
							if (Math.abs(distanceY) > Math.abs(distanceX)) {
								this.scrolling = true;
							} else {
								e.preventDefault();
							}
						}

						if (!this.scrolling && this.sticky) {
							this.X2 = e.changedTouches[0].pageX;
							var distance = this.X2 - this.X1;
							this.X1 = this.X2;
							this.trainOffsetX += distance;
							this.offset += distance;
						}
					}
				}
			},
			touchend: function touchend(e) {
				e.stopPropagation();
				if (this.inCycle && !this.scrolling) {
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2 - this.X0;
					if (distance < -5) {
						this.toNext();
					} else if (distance > 5) {
						this.toPrev();
					} else {
						if (!this.switching) {
							this.switching = false;
							this.inCycle = false;
						};
					}
				} else {
					this.switching = false;
					this.inCycle = false;
				}
			}
		}
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(43);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(45);
	var $Object = __webpack_require__(48).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(46);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(56), 'Object', { defineProperty: __webpack_require__(52).f });

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(47),
	    core = __webpack_require__(48),
	    ctx = __webpack_require__(49),
	    hide = __webpack_require__(51),
	    PROTOTYPE = 'prototype';

	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      IS_WRAP = type & $export.W,
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE],
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
	      key,
	      own,
	      out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? function (C) {
	      var F = function F(a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0:
	              return new C();
	            case 1:
	              return new C(a);
	            case 2:
	              return new C(a, b);
	          }return new C(a, b, c);
	        }return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	      // make static versions for prototype methods
	    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// optional / simple context binding
	var aFunction = __webpack_require__(50);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(52),
	    createDesc = __webpack_require__(60);
	module.exports = __webpack_require__(56) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(53),
	    IE8_DOM_DEFINE = __webpack_require__(55),
	    toPrimitive = __webpack_require__(59),
	    dP = Object.defineProperty;

	exports.f = __webpack_require__(56) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(54);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = !__webpack_require__(56) && !__webpack_require__(57)(function () {
	  return Object.defineProperty(__webpack_require__(58)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(57)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(54),
	    document = __webpack_require__(47).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(54);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(62);
	__vue_script__ = __webpack_require__(64);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\lib\\MyVideo.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(65);
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
	    var id = "./MyVideo.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 62 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 63 */,
/* 64 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			video: {},
			current: {},
			act: {},
			yyb: {}
		},
		data: function data() {
			return {
				state: 'pending',
				loaded: false
			};
		},
		watch: {
			current: function current() {
				if (this.state !== 'pending') {
					this.state = 'ready';
				};
			},
			state: function state(_state) {
				var _this = this;

				var self = this;
				switch (_state) {
					case 'loading':
						var tl0 = new TimelineMax();

						tl0.to(this.$refs.t0, 0.6, {
							y: '-1000%',
							opacity: 1,
							ease: Expo.easeOut
						}).to(this.$refs.t1, 0.6, {
							y: '-900%',
							opacity: 1
						}).to(this.$refs.t2, 0.6, {
							y: '-800%',
							opacity: 1
						}).to(this.$refs.t3, 0.6, {
							y: '-700%',
							opacity: 1
						}).to(this.$refs.t4, 0.6, {
							y: '-600%',
							opacity: 1
						});

						var tlx = new TimelineMax();
						tlx.fromTo(self.$refs.progress, 0.6, {
							transformOrigin: '0% 0%',
							scaleX: 0
						}, {
							scaleX: 1
						}).fromTo(self.$refs.progress, 0.6, {
							transformOrigin: '0% 0%',
							scaleX: 0
						}, {
							scaleX: 1
						}).fromTo(self.$refs.progress, 0.6, {
							transformOrigin: '0% 0%',
							scaleX: 0
						}, {
							scaleX: 1
						}).fromTo(self.$refs.progress, 0.6, {
							transformOrigin: '0% 0%',
							scaleX: 0
						}, {
							scaleX: 1
						}).fromTo(self.$refs.progress, 0.6, {
							transformOrigin: '0% 0%',
							scaleX: 0
						}, {
							scaleX: 1
						}).to(self.$refs.progress, 0, {
							scaleX: 0
						});

						this.$refs.video.setAttribute('src', DIR.video + this.video.id + '.mp4');
						console.log(this.$refs.video.src);
						this.$refs.video.load();

						this.$refs.video.addEventListener('pause', function () {
							if (_this.state === 'playing') {
								_this.state = 'paused';
							}
						});

						this.$refs.video.addEventListener('loadeddata', function () {
							console.log('loaded');
							self.loaded = true;


							setTimeout(function () {
								var tl2 = new TimelineMax();
								tl2.to(self.$refs.t5, 0.6, {
									y: '-500%',
									opacity: 1
								});

								var tl = new TimelineMax();
								tl.fromTo(self.$refs.progress, 1, {
									transformOrigin: '0% 0%',
									scaleX: 0
								}, {
									scaleX: 1,
									onComplete: function onComplete() {
										if (self.state === 'loading') {
											self.state = 'playing';
										};
									}
								});
							}, 3000);
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
		computed: {
			src: function src() {
				return location.href.replace(/act161203.+/, 'act161203/video/' + this.video.id + '.mp4');
			}
		},
		mounted: function mounted() {},
		methods: {
			PLAY: function PLAY(e) {
				this.act({
					type: 'PLAY_VIDEO',
					i: this.video.id
				});
				e.stopPropagation();
				var self = this;
				if (this.state === 'pending') {
					if (!this.loaded) {
						self.state = 'loading';
					};
				} else if (this.state === 'ready') {
					self.state = 'playing';
				} else if (this.state === 'paused') {
					self.state = 'playing';
				}
			},
			PAUSE: function PAUSE() {
				if (this.$refs.video.ended) {
					this.$refs.video.play();
				} else {
					this.state = 'paused';
				};
			}
		}
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MyVideo\" _v-7b311949=\"\">\n\t\n\t<img class=\"play\" :src=\" 'img/play_2.png' \" v-show=\" !yyb&amp;&amp;state!=='playing'&amp;&amp;state!=='loading' \" @click=\"PLAY($event)\" _v-7b311949=\"\">\n\t\n\t<img class=\"bob\" :src=\" 'img/cards/'+video.id+'.jpg' \" v-show=\" state==='pending'||state==='loading'||state==='ready' \" _v-7b311949=\"\">\n\t\n\t<!-- <p class=\"advice\" v-if=\" state==='pending'||state==='ready' \">建议在wifi环境下观看</p> -->\n\n\t<div class=\"loading\" v-show=\" state==='loading' \" _v-7b311949=\"\">\n\n\t\t\t<p class=\"text text_0\" ref=\"t0\" _v-7b311949=\"\">大神开始试妆</p>\n\t\t\t<p class=\"text text_1\" ref=\"t1\" _v-7b311949=\"\">大神正在准备台词</p>\n\t\t\t<p class=\"text text_2\" ref=\"t2\" _v-7b311949=\"\">导演摄影已到位</p>\n\t\t\t<p class=\"text text_3\" ref=\"t3\" _v-7b311949=\"\">大神正在酝酿情绪</p>\n\t\t\t<p class=\"text text_4\" ref=\"t4\" _v-7b311949=\"\">准备好了</p>\n\t\t\t<p class=\"text text_5\" ref=\"t5\" _v-7b311949=\"\">action!</p>\n\n\t\t<div class=\"progress\" ref=\"progress\" :class=\" state==='loading'?'_loading':'' \" _v-7b311949=\"\"></div>\n\t</div>\n\n\t<video ref=\"video\" src=\"./video/2.mp4\" preload=\"metadata\" v-show=\" state==='playing'||state==='paused' \" _v-7b311949=\"\">\n\t\t<source type=\"video/mp4\" _v-7b311949=\"\">  \n\t</video>\n\t<div class=\"glass\" v-show=\" state==='playing'||state==='paused' \" @click=\"PAUSE()\" _v-7b311949=\"\"></div>\n\t\n</div>\n";

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Swiper__\" _v-485ba7ef=\"\">\n\t<div class=\"blurred\" _v-485ba7ef=\"\">\n\t\t<img v-for=\"n in 8\" :src=\" 'img/blurred_bg/'+(n-1)+'.jpg' \" :class=\" n===currentOne+1?'active':'' \" ref=\"blurred_img\" _v-485ba7ef=\"\">\n\t</div>\n\t<!-- <img class=\"light\" :src=\" 'img/light.png' \"/> -->\n\t<div class=\"Swiper\" ref=\"swiper\" @touchstart=\"touchstart($event)\" @touchmove=\"touchmove($event)\" @touchend=\"touchend($event)\" @touchcancel=\"touchend($event)\" _v-485ba7ef=\"\">\n\n\t\t<div class=\"item\" :class=\" \n\t\t\t(i===currentOne?'current ':' ')+\n\t\t\t(i===currentOne-1?'prev ':' ')+\n\t\t\t(i===currentOne+1?'next ':' ')+\n\t\t\t(i>currentOne+1?'right ':' ')+\n\t\t\t(i<currentOne-1?'left ':' ') \" v-for=\"(a,i) in items\" :key=\"a.id\" _v-485ba7ef=\"\">\n\t\t\t<my-video :video=\"a\" :act=\"act\" :current=\"currentOne\" :yyb=\"yyb\" _v-485ba7ef=\"\"></my-video>\n\t\t\t\n\t\t</div>\n\n<!-- \t\t\t<ul class=\"pagination\" v-if=\"false\">\n\t\t\t<li v-for=\"(item,i) in items\"\n\t\t\tclass=\"dot\"\n\t\t\t:class=\" 'item '+(i===currentOne?'active':'') \"\n\t\t\t@click=\"toCard(i)\">\n\t\t\t</li>\n\t\t</ul> -->\n\t</div>\n\n\t<p class=\"advice__\" ref=\"advice\" _v-485ba7ef=\"\">建议在wifi环境下观看</p>\n\n\t<img class=\"arrow arrow_right\" :src=\" 'img/arrow_right.png' \" @click=\"toNext\" v-show=\"currentOne<items.length-1\" _v-485ba7ef=\"\">\n\t<img class=\"arrow arrow_left\" :src=\" 'img/arrow_left.png' \" @click=\"toPrev\" v-show=\"currentOne>0\" _v-485ba7ef=\"\">\n\n</div>\n";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(68);
	__vue_script__ = __webpack_require__(70);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\components\\FreeBooks.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(71);
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
	    var id = "./FreeBooks.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 69 */,
/* 70 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			writers: {},
			current: {},
			act: {},
			total: {},
			yyb: {}
		},
		components: {},
		computed: {
			books: function books() {
				return this.writers[this.current].books;
			},
			unlocked: function unlocked() {
				return this.writers[this.current].unlocked;
			}
		},
		methods: {
			SHOW_MASK: function SHOW_MASK() {
				this.act({
					type: 'SHOW_MASK'
				});
			},
			_TO_BOOK: function _TO_BOOK(bid) {
				this.act({
					type: '_TO_BOOK',
					bid: bid
				});
			},
			_SHARE: function _SHARE() {
				this.act({
					type: '_SHARE'
				});
			}
		}
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"FreeBooks\" _v-2abf09f7=\"\">\n\n\t\t<div class=\"textBellow\" _v-2abf09f7=\"\">\n\t\t\t<p class=\"name\" _v-2abf09f7=\"\">{{writers[current].name}}</p>\n\t\t\t<p class=\"desc\" _v-2abf09f7=\"\">{{writers[current].desc}}</p>\n\t\t</div>\n\n<!-- \t\t<div class=\"books\">\n\t\t\t<div class=\"book\"\n\t\t\tv-for=\"a in books\">\n\t\t\t\t<div class=\"cover\"\n\t\t\t\t@click=\"_TO_BOOK(a.bid)\">\n\t\t\t\t\t<img class=\"cover_img\" :src=\" 'img/covers/x_'+a.bid+'.jpg' \"/>\n\t\t\t\t\t<img class=\"lock\" :src=\" 'img/lock.png' \"\n\t\t\t\t\tv-show=\" !yyb&&!unlocked \"/>\n\t\t\t\t\t<p class=\"orange\"\n\t\t\t\t\tv-show=\" !yyb&&unlocked \">已加入书架</p>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"title\">{{a.title}}</p>\n\t\t\t\t<p class=\"price\">{{a.price}}元</p>\n\t\t\t</div>\n\t\t</div> -->\n\n\t\t<div class=\"books_container\" _v-2abf09f7=\"\">\n\t\t\t<div class=\"books\" v-for=\"(a,i) in writers\" v-show=\" i===current \" _v-2abf09f7=\"\">\n\t\t\t\t<div class=\"book\" v-for=\"b in a.books\" _v-2abf09f7=\"\">\n\t\t\t\t\t<div class=\"cover\" @click=\"_TO_BOOK(b.bid)\" _v-2abf09f7=\"\">\n\t\t\t\t\t\t<img class=\"cover_img\" :src=\" 'img/covers/x_'+b.bid+'.jpg' \" _v-2abf09f7=\"\">\n\t\t\t\t\t\t<img class=\"lock\" :src=\" 'img/lock.png' \" v-show=\" !yyb&amp;&amp;!a.unlocked \" _v-2abf09f7=\"\">\n\t\t\t\t\t\t<p class=\"orange\" v-show=\" !yyb&amp;&amp;a.unlocked \" _v-2abf09f7=\"\">已7天限免</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"title\" _v-2abf09f7=\"\">{{b.title}}</p>\n\t\t\t\t\t<p class=\"price\" _v-2abf09f7=\"\">{{b.price}}元</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n<!-- \t\t<div class=\"info\" v-if=\"!yyb\">\n\t\t\t<img class=\"share_to_unlock\" :src=\" 'img/share_to_unlock.png' \"/>\n\t\t\t<p>{{unlocked?'已解锁限免权':'分享即可解锁限免权'}}</p>\n\t\t</div> -->\n\t\t\n\t\t<div class=\"buttons\" v-if=\"!yyb\" _v-2abf09f7=\"\">\n\t\t\t<img class=\"share_btn\" :src=\" 'img/btn_share.png' \" @click=\"_SHARE\" _v-2abf09f7=\"\">\n\t\t\t<p class=\"how_many\" v-if=\"!yyb\" _v-2abf09f7=\"\">已有<span _v-2abf09f7=\"\">{{total}}</span>人获得限时免费</p>\n\t\t</div>\n\t\t\n\t\t<p class=\"notice\" v-if=\"!yyb\" _v-2abf09f7=\"\">分享到平台后点击<span _v-2abf09f7=\"\">「返回QQ阅读」</span>方可享受限免</p>\n\t\t<img class=\"check_btn\" :src=\" 'img/check_btn.png' \" v-if=\"!yyb\" @click=\"SHOW_MASK\" _v-2abf09f7=\"\">\n\t</div>\n";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(73);
	__vue_script__ = __webpack_require__(75);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\components\\Rules.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(76);
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
	    var id = "./Rules.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 73 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 74 */,
/* 75 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['adr']
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Rules\" _v-f48b7160=\"\">\n\t<div class=\"rContent\" _v-f48b7160=\"\">\n\t\t<div class=\"title\" _v-f48b7160=\"\">\n\t\t\t活动规则\n\t\t</div>\n\t\t<p _v-f48b7160=\"\"><span _v-f48b7160=\"\">1.</span>2016年12月23日15点-2016年12月30日24点。</p>\n\t\t<p _v-f48b7160=\"\"><span _v-f48b7160=\"\">2.</span>用户成功分享活动后，即可获得对应大神书籍的7天限时免费阅读权。</p>\n\t\t<p v-if=\"!adr\" _v-f48b7160=\"\"><span _v-f48b7160=\"\">3.</span>iOS游客用户无法参加本次活动。</p>\n\t\t<p _v-f48b7160=\"\"><span _v-f48b7160=\"\">{{adr?'3.':'4.'}}</span>活动结束后，再分享时将无法获得相关免费权益。</p>\n\t\t<div class=\"copyright\" _v-f48b7160=\"\">\n\t\t\t本活动最终解释权归QQ阅读所有\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MainBlock\" _v-5c160ca6=\"\">\n\t<img class=\"ice\" :src=\" 'img/ice.png' \" v-if=\"entry\" _v-5c160ca6=\"\">\n\n\t<div class=\"entry\" v-if=\"entry\" style=\"background:url(img/bg_exchange_2.png);background-size:100% auto;\" _v-5c160ca6=\"\">\n\t\t<div class=\"entry_main\" _v-5c160ca6=\"\">\n\t\t\t<div class=\"avatar\" _v-5c160ca6=\"\">\n\t\t\t\t<img :src=\" avatar \" _v-5c160ca6=\"\">\n\t\t\t</div>\n\t\t\t<p class=\"time\" _v-5c160ca6=\"\">本周阅读时长：{{info.time}}分钟</p>\n\t\t\t<div class=\"billsAvailable\" _v-5c160ca6=\"\">\n\t\t\t\t<img class=\"coin\" :src=\" 'img/coin.png' \" _v-5c160ca6=\"\">\n\t\t\t\t<span _v-5c160ca6=\"\">当前可兑换：{{info.billsAvailable}}书券</span>\n\t\t\t</div>\n\t\t\t<div class=\"exchange\" _v-5c160ca6=\"\">\n\t\t\t\t<img class=\"btn_exchange\" :src=\" 'img/btn_exchange.png' \" @click=\"act({type:'EXCHANGE'})\" _v-5c160ca6=\"\">\n\t\t\t\t<p class=\"billsReceived\" _v-5c160ca6=\"\">本周已兑换{{info.billsReceived}}书券</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"index_part\" _v-5c160ca6=\"\">\n\t\t<swiper :items=\" writers \" :act=\"act\" :stage=\"stage\" :day=\"day\" _v-5c160ca6=\"\"></swiper>\n\t\t\n\t\t<div class=\"lower_part\" style=\"background:url(img/main_bg_2.png);background-size:100% auto;\" _v-5c160ca6=\"\">\n\t\t\t<img class=\"text_snowman\" :src=\" 'img/text_snowman.png' \" _v-5c160ca6=\"\">\n\n\t\t\t<free-books :writers=\" writers \" :current=\" current \" :total=\"total\" :act=\"act\" _v-5c160ca6=\"\"></free-books>\n\t\t\t\n\t\t\t<rules :adr=\"adr\" _v-5c160ca6=\"\"></rules>\n\t\t</div>\n\t</div>\n\n</div>\n";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(79);
	__vue_script__ = __webpack_require__(81);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\components\\MaskBooks.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(121);
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
	    var id = "./MaskBooks.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 79 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 80 */,
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _toConsumableArray2 = __webpack_require__(82);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {},
		props: {
			act: {},
			writers: {}
		},
		data: function data() {
			return {};
		},
		computed: {
			books: function books() {
				var books = [];
				this.writers.forEach(function (a) {
					if (a.unlocked) {
						books.push.apply(books, (0, _toConsumableArray3.default)(a.books));
					};
				});
				return books;
			}
		},
		methods: {
			HIDE_MASK: function HIDE_MASK() {
				this.act({
					type: 'HIDE_MASK'
				});
			},
			touchmove: function touchmove(e) {
				e.stopPropagation();
			}
		}
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(83);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(85);
	__webpack_require__(114);
	module.exports = __webpack_require__(48).Array.from;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $at = __webpack_require__(86)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(89)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(87),
	    defined = __webpack_require__(88);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";

	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LIBRARY = __webpack_require__(90),
	    $export = __webpack_require__(46),
	    redefine = __webpack_require__(91),
	    hide = __webpack_require__(51),
	    has = __webpack_require__(92),
	    Iterators = __webpack_require__(93),
	    $iterCreate = __webpack_require__(94),
	    setToStringTag = __webpack_require__(110),
	    getPrototypeOf = __webpack_require__(112),
	    ITERATOR = __webpack_require__(111)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';

	var returnThis = function returnThis() {
	  return this;
	};

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";

	module.exports = true;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(51);

/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var create = __webpack_require__(95),
	    descriptor = __webpack_require__(60),
	    setToStringTag = __webpack_require__(110),
	    IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(51)(IteratorPrototype, __webpack_require__(111)('iterator'), function () {
	  return this;
	});

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(53),
	    dPs = __webpack_require__(96),
	    enumBugKeys = __webpack_require__(108),
	    IE_PROTO = __webpack_require__(105)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(58)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(109).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(52),
	    anObject = __webpack_require__(53),
	    getKeys = __webpack_require__(97);

	module.exports = __webpack_require__(56) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(98),
	    enumBugKeys = __webpack_require__(108);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = __webpack_require__(92),
	    toIObject = __webpack_require__(99),
	    arrayIndexOf = __webpack_require__(102)(false),
	    IE_PROTO = __webpack_require__(105)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(100),
	    defined = __webpack_require__(88);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(101);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(99),
	    toLength = __webpack_require__(103),
	    toIndex = __webpack_require__(104);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(87),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(87),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var shared = __webpack_require__(106)('keys'),
	    uid = __webpack_require__(107);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(47),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';

	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';

	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(47).document && document.documentElement;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var def = __webpack_require__(52).f,
	    has = __webpack_require__(92),
	    TAG = __webpack_require__(111)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var store = __webpack_require__(106)('wks'),
	    uid = __webpack_require__(107),
	    _Symbol = __webpack_require__(47).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(92),
	    toObject = __webpack_require__(113),
	    IE_PROTO = __webpack_require__(105)('IE_PROTO'),
	    ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(88);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ctx = __webpack_require__(49),
	    $export = __webpack_require__(46),
	    toObject = __webpack_require__(113),
	    call = __webpack_require__(115),
	    isArrayIter = __webpack_require__(116),
	    toLength = __webpack_require__(103),
	    createProperty = __webpack_require__(117),
	    getIterFn = __webpack_require__(118);

	$export($export.S + $export.F * !__webpack_require__(120)(function (iter) {
	  Array.from(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(53);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// check on default Array iterator
	var Iterators = __webpack_require__(93),
	    ITERATOR = __webpack_require__(111)('iterator'),
	    ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $defineProperty = __webpack_require__(52),
	    createDesc = __webpack_require__(60);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classof = __webpack_require__(119),
	    ITERATOR = __webpack_require__(111)('iterator'),
	    Iterators = __webpack_require__(93);
	module.exports = __webpack_require__(48).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(101),
	    TAG = __webpack_require__(111)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ITERATOR = __webpack_require__(111)('iterator'),
	    SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskInfo\" @touchmove=\"touchmove\" _v-0bc2a977=\"\">\n\t<div class=\"content_666\" _v-0bc2a977=\"\">\n\t\t<div class=\"content_667\" :style=\" 'background:url(img/panel_books.png);background-size:100% 100%;' \" _v-0bc2a977=\"\">\n\t\t\t<img class=\"close\" :src=\" 'img/close.png' \" @click=\"HIDE_MASK\" _v-0bc2a977=\"\">\n\t\t\t<p class=\"empty\" v-if=\"books.length===0\" _v-0bc2a977=\"\">尚未有解锁限免权的书籍</p>\n\t\t\t<div class=\"list\" _v-0bc2a977=\"\">\n\t\t\t\t<div class=\"item\" v-for=\"a in books\" _v-0bc2a977=\"\">\n\t\t\t\t\t<img class=\"cover\" :src=\" 'img/covers/x_'+a.bid+'.jpg' \" @click=\"act({type:'_TO_BOOK',bid:a.bid})\" _v-0bc2a977=\"\">\n\t\t\t\t\t<div class=\"right\" _v-0bc2a977=\"\">\n\t\t\t\t\t\t<p class=\"title\" _v-0bc2a977=\"\">{{a.title}}</p>\n\t\t\t\t\t\t<img class=\"pill\" :src=\" 'img/pill.png' \" _v-0bc2a977=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "\n\t<div id=\"root\">\n\t\t<mask-loading v-show=\" page==='pending' \"></mask-loading>\n\t\t<mask-over v-show=\" page==='over' \"></mask-over>\n\t\t\n\t\t<div class=\"main\" v-show=\" page==='ready' \">\n\t\t\t\n\t\t\t<mask-books \n\t\t\tv-show=\" mask_books \"\n\t\t\t:writers=\"writers\"\n\t\t\t:act=\"act\"></mask-books>\n\t\t\t\n\t\t\t<focus \n\t\t\tv-show=\" stage===0 \" :stage=\"stage\" :act=\"act\"></focus>\n\t\t\t\n\t\t\t<main-block\n\t\t\tv-show=\" stage===1 \" \n\t\t\t:writers=\" writers \"\n\t\t\t:current=\" current \" \n\t\t\t:day=\" day \"\n\t\t\t:avatar=\"avatar\"\n\t\t\t:info=\"info\"\n\t\t\t:entry=\"entry\"\n\t\t\t:total=\"total\"\n\t\t\t:stage=\"stage\"\n\t\t\t:adr=\"adr\"\n\t\t\t:act=\"act\"></main-block>\n\t\t\t\n\t\t</div>\n\n<!-- \t\t<debugger\n\t\t:state=\"$data\"></debugger> -->\n\t</div>\n";

/***/ }
/******/ ]);