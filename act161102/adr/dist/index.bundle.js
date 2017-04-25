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

	//import '../debug.js';
	__webpack_require__(2);

	Vue.component('app', __webpack_require__(6));

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

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__vue_script__ = __webpack_require__(7);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161102\\adr\\src\\_index\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(37);
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	__webpack_require__(8);

	var _store = __webpack_require__(10);

	exports.default = {
		components: {
			debug: __webpack_require__(11),
			maskLoading: __webpack_require__(17),
			maskOver: __webpack_require__(22),
			swiperLite: __webpack_require__(27),
			rules: __webpack_require__(32)
		},
		data: function data() {
			return _store.data;
		},
		computed: {
			chance: function chance() {
				return 2 - this.wanted.length;
			}
		},
		watch: {
			killed: function killed(new_val) {
				var _this = this;

				new_val.forEach(function (a) {
					_this.books.forEach(function (b) {
						if (a === b.bid) {
							b.killed = true;
						};
					});
				});
			},
			wanted: function wanted(new_val) {
				var _this2 = this;

				new_val.forEach(function (a) {
					_this2.books_wanted.forEach(function (b) {
						if (a === b.bid) {
							b.wanted = true;
						};
					});
				});
			}
		},
		created: function created() {},
		mounted: function mounted() {
			this.act({ type: 'INIT' });
		},
		methods: {
			act: _store.act,
			TO_BOOK: function TO_BOOK(bid) {
				this.act({
					type: 'TO_BOOK',
					bid: bid
				});
			},
			TO_BUY: function TO_BUY(bid) {
				this.act({
					type: 'TO_BUY',
					bid: bid
				}), this.act({
					type: 'TO_BOOK',
					bid: bid
				});
			},
			I_WANT: function I_WANT(bid, i) {
				this.act({
					type: 'I_WANT',
					bid: bid,
					i: i
				});
			}
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var data = {
		dev: false,

		page: 'pending',

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

		loggedIn: false,
		// 秒杀专场
		stageNo: -2,
		timeNext: 100000000,
		killed: [],
		books: function () {
			var books = [];
			for (var i = 0; i < 6; i++) {
				books[i] = {
					title: '',
					bid: '',
					left: 0,
					killed: false
				};
			};
			return books;
		}(),
		randomBook: {},

		// 想要
		wanted: [],
		books_wanted: function () {
			var wanted = [];
			for (var i = 0; i < 4; i++) {
				wanted[i] = {
					bid: '--',
					title: '--',
					author: 'author',
					price: '0.05元/千字',
					number: 10,
					wanted: false,
					discount: '5',
					plus: false,
					canBuy: false
				};
			};
			wanted[2].discount = '3';
			wanted[3].discount = '3';
			return wanted;
		}()
	};
	function act(action) {
		var self = this;
		switch (action.type) {
			case 'INIT':
				//self.page = 'ready';
				// if(self.share){
				// 	window.initSNS = function(){
				// 		S.share({
				// 			url: location.href,
				// 			cover: location.href.replace(/share\.html/,'img/qqreader.png'),
				// 			title: 'QQ阅读大神直播',
				// 			desc: 'QQ阅读大神直播'
				// 		})
				// 	};
				// };
				Local.forceLog(common.param('act_f'), 'THXInit');
				Local.reqaObj(common.server() + 'pkg161102/init', function (data) {
					console.log(data);

					self.loggedIn = data.isLogin;

					if (data.todaySK) {
						data.todaySK.forEach(function (a, i) {
							self.books[i].title = a.split('_')[0];
							self.books[i].bid = a.split('_')[1];
						});
					};
					data.skBookRestNumber.forEach(function (a, i) {
						self.books[i].left = 100 - Number(a);
					});
					if (data.randomSk) {
						self.randomBook.title = data.randomSk.split('_')[0];
						self.randomBook.bid = data.randomSk.split('_')[1];
					};
					if (data.hasSKSet) {
						var _self$killed;

						(_self$killed = self.killed).push.apply(_self$killed, _toConsumableArray(data.hasSKSet));
					};
					self.stageNo = data.timeIdx;
					self.timeNext = data.restTimeToNext;

					data.bookingLists.forEach(function (a, i) {
						self.books_wanted[i].title = a.split('_')[0];
						self.books_wanted[i].bid = a.split('_')[1];
						self.books_wanted[i].author = a.split('_')[2];
					});
					for (var key in data.bookingMap) {
						self.books_wanted.forEach(function (a) {
							if (a.bid === key) {
								a.number = Number(data.bookingMap[key]);
							};
						});
					};
					data.canBuy.forEach(function (a) {
						self.books_wanted.forEach(function (b) {
							if (b.bid === a) {
								b.canBuy = true;
							};
						});
					});
					if (data.hasBookSet) {
						var _self$wanted;

						(_self$wanted = self.wanted).push.apply(_self$wanted, _toConsumableArray(data.hasBookSet));
					};

					if (self.dev) {
						self.act({ type: 'MOCK' });
					}
					self.page = 'ready';
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				break;
			case 'MOCK':
				self.books.forEach(function (a) {
					a.left = 100;
				});
				self.books[0].left = 1;
				self.books[1].left = 66;
				self.books[2].left = 0;
				self.timeNext = 800;
				setTimeout(function () {
					self.stageNo = 1;
				}, 6000);
				self.books_wanted[0].number = 3200;
				self.books_wanted[1].number = 4999;
				self.books_wanted[2].number = 4999;
				break;
			case 'LOGIN':
				if (self.dev) {
					self.loggedIn = true;
				} else {
					Local.login();
				};
				break;
			case 'KILL':
				if (self.dev) {
					self.killed.push(action.bid);
				} else if (!self.loggedIn) {
					Local.forceLog(common.param('act_f'), 'THXsk_' + action.bid);
					Local.login();
				} else {
					Local.forceLog(common.param('act_f'), 'THXsk_' + action.bid);
					Local.reqaObj(common.server() + 'pkg161102/pick?pd=' + action.bid, function (data) {
						if (data.code === 1) {
							self.killed.push(action.bid);
							Local.showToast('秒杀成功，已为您加入书架');
						} else if (data.code === -99) {
							Local.showToast('哎呀手慢了，没抢到');
						};
					}, [], function () {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				}
				break;
			case 'I_WANT':
				if (!self.loggedIn) {
					Local.forceLog(common.param('act_f'), 'THXbook_' + action.bid);
					self.act({
						type: 'LOGIN'
					});
				} else {
					if (self.dev) {
						self.wanted.push(action.bid);
						self.books_wanted[action.i].number++;
						self.books_wanted[action.i].plus = true;
					} else {
						Local.forceLog(common.param('act_f'), 'THXbook_' + action.bid);
						Local.reqaObj(common.server() + 'pkg161102/booking?pd=' + action.bid, function (data) {
							if (data.code === 1) {
								self.wanted.push(action.bid);
								self.books_wanted[action.i].number++;
								self.books_wanted[action.i].plus = true;
								Local.addToShelfBooks(action.bid);
								Local.showToast('此书已为您加入书架');
							} else if (data.code === -3) {
								Local.showToast('');
							};
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					};
				}
				break;
			case 'TO_BUY':
				Local.forceLog(common.param('act_f'), 'THXbuy_' + action.bid);
				break;
			case 'SET_ALARM':
				if (self.loggedIn === false) {
					Local.login();
				} else if (self.alarmState === 'unset') {
					try {
						Local.reqaObj(common.server() + 'topic/live/reserve?livetime=' + self.livetime.replace(/\s/g, ''), function (data) {
							//console.log( JSON.stringify(data) )
							self.alarmState = 'set';
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					} catch (e) {
						console.log(e);
					}
				};
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
			case 'HIDE_MASK':
				self.show_mask = false;
				break;
			case 'TO_BOOK':
				if (!self.share) {
					ABook.gotoDetail(action.bid);
				} else {
					self.act({
						type: 'SHOW_MASK'
					});
				}
				break;

			// 分享页：
			case 'SHOW_MASK':
				if (!self.inProcessing) {
					self.inProcessing = true;
					var href = location.href;
					href = href.replace(/acttopiclive.*/, 'acttopiclive/' + env.pt + '/index.html?topicid=' + common.param('topicid'));
					console.log(href);
					N.openPage(href);
					setTimeout(function () {
						self.show_mask = true;
						self.inProcessing = false;
					}, 3000);
				}
				break;
			case 'TO_DOWNLOAD':
				N.downLoad(null, '10003531');
				break;
		}
	}

	exports.data = data;
	exports.act = act;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(12);
	__vue_script__ = __webpack_require__(15);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161102\\adr\\src\\components\\Debug.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(16);
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
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */,
/* 15 */
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
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"DEBUG\" _v-6cb29b2e=\"\">\n\t<div class=\"fixed__\" _v-6cb29b2e=\"\">\n\t\tloggedIn: {{state.loggedIn}}<br _v-6cb29b2e=\"\">\n\t\tstageNo: {{state.stageNo}}, timeNext: {{state.timeNext}}<br _v-6cb29b2e=\"\">\n\t\tkilled: {{JSON.stringify(state.killed)}}<br _v-6cb29b2e=\"\">\n\t\twanted: {{JSON.stringify(state.wanted)}}<br _v-6cb29b2e=\"\">\n\t</div>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(18);
	__vue_script__ = __webpack_require__(20);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161102\\adr\\src\\components\\MaskLoading.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(21);
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
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {};
		},
		mounted: function mounted() {}
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskLoading\" _v-ed0cfe6a=\"\">\n\t<p class=\"_text\" _v-ed0cfe6a=\"\">加载中...</p>\n</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(23);
	__vue_script__ = __webpack_require__(25);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161102\\adr\\src\\components\\MaskOver.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(26);
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
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */
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
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskOver\" _v-aa4d9456=\"\">\n\t<div class=\"content_666\" _v-aa4d9456=\"\">\n\t\t<div class=\"content_667\" _v-aa4d9456=\"\">\n\t\t\t<img :src=\" 'img/over.png' \" _v-aa4d9456=\"\">\n\t\t\t<p _v-aa4d9456=\"\">本期活动已结束</p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(28);
	__vue_script__ = __webpack_require__(30);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161102\\adr\\src\\components\\SwiperLite.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(31);
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
	    var id = "./SwiperLite.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ = {
		X0: null,
		X1: null,
		X2: null,
		offset: 0,
		moveCount: 0,
		train: null
	};

	exports.default = {
		props: {
			items: {
				default: function _default() {
					return [{
						dot: '11:00 开抢',
						background: 'red'
					}, {
						dot: '17:00 开抢',
						background: 'orange'
					}, {
						dot: '20:00 开抢',
						background: 'yellow'
					}];
				}
			},
			style: {},
			sticky: {
				default: true
			},
			autoplay: {
				default: false
			},
			duration: {
				default: 300
			},
			interval: {
				default: 500
			},
			stageNo: {
				default: -2
			},
			timeNext: {},
			books: {},
			randomBook: {
				default: {}
			},
			act: {}
		},
		data: function data() {
			return {
				width: 0,

				switching: false,
				inCycle: false,
				moveCount: 0,
				scrolling: false,

				trainOffsetX: 0,
				transition: '0s',
				trainStyle: '',

				X0: 0,
				X1: 0,
				X2: 0,

				currentOne: 0,
				offset: 0
			};
		},
		computed: {},
		watch: {
			stageNo: function stageNo(new_val) {
				if (new_val >= 0) {
					this.toCard(new_val);
				};
			}
		},
		mounted: function mounted() {
			var _this = this;

			var time = new Date();
			var str = time.toString();
			console.log(new Date(str));
			_.train = this.$el.querySelector('.train');

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
					_this.toNext();
				}, this.interval);
			}
		},
		methods: {
			KILL: function KILL(bid) {
				this.act({
					type: 'KILL',
					bid: bid
				});
			},
			TO_BOOK: function TO_BOOK(bid) {
				this.act({
					type: 'TO_BOOK',
					bid: bid
				});
			},
			setWidth: function setWidth() {
				this.transition = false;
				var elem = this.$el;
				var width = Number(document.defaultView.getComputedStyle(elem).width.replace(/px/, ''));
				this.width = width;
				_.train.style.transition = '0s';
				_.train.style.webkitTransition = '0s';
				_.offset = -this.currentOne * this.width;
				_.train.style.transform = 'translate3d(' + _.offset + 'px,0,0)';
				_.train.style.webkitTransform = 'translate3d(' + _.offset + 'px,0,0)';
			},
			toNext: function toNext() {
				if (this.currentOne < this.items.length - 1) {
					this.currentOne++;
				};
				_.train.style.transition = '0.3s';
				_.train.style.webkitTransition = '0.3s';
				_.offset = -this.currentOne * this.width;
				_.train.style.transform = 'translate3d(' + _.offset + 'px,0,0)';
				_.train.style.webkitTransform = 'translate3d(' + _.offset + 'px,0,0)';
			},
			toPrev: function toPrev() {
				if (this.currentOne > 0) {
					this.currentOne--;
				};
				_.train.style.transition = '0.3s';
				_.train.style.webkitTransition = '0.3s';
				_.offset = -this.currentOne * this.width;
				_.train.style.transform = 'translate3d(' + _.offset + 'px,0,0)';
				_.train.style.webkitTransform = 'translate3d(' + _.offset + 'px,0,0)';
			},
			toCard: function toCard(i) {
				var _this2 = this;

				this.currentOne = i;
				_.train.style.transition = '0.3s';
				_.train.style.webkitTransition = '0.3s';
				_.offset = -i * this.width;
				_.train.style.transform = 'translate3d(' + _.offset + 'px,0,0)';
				_.train.style.webkitTransform = 'translate3d(' + _.offset + 'px,0,0)';
				setTimeout(function () {
					_.train.style.transition = '0s';
					_.train.style.webkitTransition = '0s';
					_this2.switching = false;
				}, this.duration);
			},
			touchstart: function touchstart(e) {
				console.log(this.switching);
				if (this.switching === false) {
					this.inCycle = true;

					this.moveCount = 0;
					this.scrolling = false;
					_.train.style.transition = '0s';
					_.train.style.webkitTransition = '0s';

					this.X0 = this.X1 = e.changedTouches[0].pageX;
					this.Y1 = e.changedTouches[0].pageY;
				};
			},
			touchmove: function touchmove(e) {
				if (this.inCycle) {
					this.moveCount++;
					if (!this.scrolling) {
						if (this.moveCount === 1) {
							this.X2 = e.changedTouches[0].pageX;
							this.Y2 = e.changedTouches[0].pageY;
							var distanceY = this.Y2 - this.Y1;
							var distanceX = this.X2 - this.X1;
							if (Math.abs(distanceY) > 1.2 * Math.abs(distanceX)) {
								this.scrolling = true;
							} else {
								e.preventDefault();
							}
						};
						if (!this.scrolling && this.sticky) {
							this.X2 = e.changedTouches[0].pageX;
							var distance = this.X2 - this.X1;
							this.X1 = this.X2;

							_.offset += distance;
							_.train.style.transform = 'translate3d(' + _.offset + 'px,0,0)';
							_.train.style.webkitTransform = 'translate3d(' + _.offset + 'px,0,0)';
						}
					};
				};
			},
			touchend: function touchend(e) {
				var _this3 = this;

				if (this.inCycle) {
					if (!this.scrolling) {
						this.X2 = e.changedTouches[0].pageX;
						var distance = this.X2 - this.X0;

						if (distance < 0) {
							this.switching = true;
							this.toNext();
							setTimeout(function () {
								_.train.style.transition = '0s';
								_.train.style.webkitTransition = '0s';
								_this3.switching = false;
							}, this.duration);
						} else if (distance > 0) {
							this.switching = true;
							this.toPrev();
							setTimeout(function () {
								_.train.style.transition = '0s';
								_.train.style.webkitTransition = '0s';
								_this3.switching = false;
							}, this.duration);
						} else {
							this.switching = false;
							this.inCycle = false;
						};
					};
				};
			}
		}
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"SwiperLite\" :style=\"style\" @touchstart=\"touchstart($event)\" @touchmove=\"touchmove($event)\" @touchend=\"touchend($event)\" @touchcancel=\"touchend($event)\" _v-3c28c20a=\"\">\n\t<ul class=\"pagination\" _v-3c28c20a=\"\">\n\t\t<div class=\"strip\" _v-3c28c20a=\"\"></div>\n\t\t<div class=\"dots\" _v-3c28c20a=\"\">\n\t\t\t<li class=\"dot\" v-for=\"(a,i) in items\" _v-3c28c20a=\"\">\n\t\t\t<div class=\"pill\" :class=\" i===currentOne?'active':'' \" @click=\" toCard(i) \" _v-3c28c20a=\"\">{{a.dot}}</div>\n\t\t\t<div class=\"triangle\" v-show=\" i===currentOne \" _v-3c28c20a=\"\"></div>\n\t\t</li></div>\n\t\n\t</ul>\n\t<ul class=\"train\" _v-3c28c20a=\"\">\n\t\t<li :class=\" 'item '+(i===currentOne?'active':'') \" v-for=\"(item,i) in items\" :key=\"item.background\" _v-3c28c20a=\"\">\n\t\t\t<div class=\"card\" _v-3c28c20a=\"\">\n\t\t\t\t<img class=\"cardImg\" :src=\" 'img/card.png' \" _v-3c28c20a=\"\">\n\t\t\t\t<div class=\"content--\" _v-3c28c20a=\"\">\n\t\t\t\t\t<div class=\"panel-heading\" _v-3c28c20a=\"\">\n\t\t\t\t\t\t<p class=\"text-left\" _v-3c28c20a=\"\">秒杀第{{i+1}}场</p>\n\t\t\t\t\t\t<p class=\"text-right\" v-if=\"i<=stageNo\" _v-3c28c20a=\"\">已开抢</p>\n\t\t\t\t\t\t<p class=\"text-right\" v-if=\"i>stageNo\" :style=\" i===stageNo+1&amp;&amp;timeNext<900?'color:#d11391':'color:#333333' \" _v-3c28c20a=\"\">{{i===0?'11':(i===1?'17':'20')}}:00<span v-if=\"i===stageNo+1&amp;&amp;timeNext<900\" _v-3c28c20a=\"\">即将</span>开抢</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\" _v-3c28c20a=\"\">\n\t\t\t\t\t\t<div class=\"book\" v-for=\"n in 2\" _v-3c28c20a=\"\">\n\t\t\t\t\t\t\t<div class=\"cover\" _v-3c28c20a=\"\">\n\t\t\t\t\t\t\t\t<img class=\"free\" :src=\" 'img/free.png' \" _v-3c28c20a=\"\">\n\t\t\t\t\t\t\t\t<img class=\"coverImg\" :src=\" 'img/covers/'+books[i*2+n-1].bid+'.jpg' \" @click=\"TO_BOOK(books[i*2+n-1].bid)\" _v-3c28c20a=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class=\"title\" _v-3c28c20a=\"\">{{books[i*2+n-1].title}}</p>\n\t\t\t\t\t\t\t<div class=\"btnBuy\" _v-3c28c20a=\"\">\n\t\t\t\t\t\t\t\t<!-- 秒杀成功 -->\n\t\t\t\t\t\t\t\t<img class=\"buy_killed\" :src=\" 'img/buy_killed.png' \" v-show=\" books[i*2+n-1].killed \" _v-3c28c20a=\"\">\n\t\t\t\t\t\t\t\t<img class=\"buy_disabled\" :src=\" 'img/buy_disabled.png' \" v-show=\" !books[i*2+n-1].killed &amp;&amp; (i>stageNo)\" _v-3c28c20a=\"\">\n\t\t\t\t\t\t\t\t<img class=\"buy\" :src=\" 'img/buy.png' \" v-show=\"!books[i*2+n-1].killed&amp;&amp;books[i*2+n-1].left>0&amp;&amp;i<=stageNo\" @click=\"KILL(books[i*2+n-1].bid)\" _v-3c28c20a=\"\">\n\t\t\t\t\t\t\t\t<img class=\"buy_out\" :src=\" 'img/buy_out.png' \" v-show=\" !books[i*2+n-1].killed &amp;&amp; (books[i*2+n-1].left<=0)\" _v-3c28c20a=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"desc\" _v-3c28c20a=\"\">\n\t\t\t\t\t\t\t\t<!-- 秒杀未开始 -->\n\t\t\t\t\t\t\t\t<p v-if=\"i>stageNo\" _v-3c28c20a=\"\">限100册</p>\n\t\t\t\t\t\t\t\t<p v-if=\"i<=stageNo &amp;&amp; !books[i*2+n-1].killed &amp;&amp; books[i*2+n-1].left===100\" _v-3c28c20a=\"\">限{{books[i*2+n-1].left}}册</p>\n\t\t\t\t\t\t\t\t<p v-if=\"i<=stageNo &amp;&amp; !books[i*2+n-1].killed &amp;&amp; books[i*2+n-1].left<100 &amp;&amp; books[i*2+n-1].left>0\" _v-3c28c20a=\"\">剩余{{books[i*2+n-1].left}}册</p>\n\t\t\t\t\t\t\t\t<p v-if=\"books[i*2+n-1].killed\" _v-3c28c20a=\"\">已加入书架</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</li>\n\t\t<div class=\"randomBook\" v-if=\"randomBook.title\" _v-3c28c20a=\"\">\n\t\t\t<div class=\"random_book\" _v-3c28c20a=\"\">\n\t\t\t\t<img class=\"random_book_img\" :src=\" 'img/random_book.png' \" _v-3c28c20a=\"\">\n\t\t\t\t<div class=\"content119\" _v-3c28c20a=\"\">\n\t\t\t\t\t<img :src=\" 'img/covers/'+randomBook.bid+'.jpg' \" _v-3c28c20a=\"\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div style=\"clear:both;\" _v-3c28c20a=\"\"></div>\n\t</ul>\n</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(33);
	__vue_script__ = __webpack_require__(35);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161102\\adr\\src\\components\\Rules.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(36);
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
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['ios']
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Rules\" _v-0645485c=\"\">\n\t<img class=\"wave\" :src=\" 'img/wave.png' \" _v-0645485c=\"\">\n\t<div class=\"rContent\" _v-0645485c=\"\">\n\t\t<div class=\"rTitle\" _v-0645485c=\"\">\n\t\t\t活动规则\n\t\t</div>\n\t\t<p _v-0645485c=\"\"><span _v-0645485c=\"\">1.</span>活动时间：11月24日 10:00 - 11月27日 24:00</p>\n\t\t<p _v-0645485c=\"\"><span _v-0645485c=\"\">2.</span>秒杀专场：每天3场活动，每场2本书，指定场次活动开始后，将发放100份限免权限，有效期7天，先到先得，送完为止。</p>\n\t\t<p _v-0645485c=\"\"><span _v-0645485c=\"\">3.</span>我要折扣：每本书达到指定“想看”人数后，折扣开启，持续7天，活动期间，每人有两次“想看”的机会。</p>\n\t\t<p v-if=\"ios\" _v-0645485c=\"\"><span _v-0645485c=\"\">4.</span>ios游客用户需要将书手动加入书架。</p>\n\t\t<div class=\"copyright\" _v-0645485c=\"\">\n\t\t\t本活动最终解释权归QQ阅读所有\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "\n\t<div id=\"root\">\n\t\t<mask-loading v-show=\" page==='pending' \"></mask-loading>\n\t\t<mask-over v-show=\" page==='over' \"></mask-over>\n\t\t\n\t\t<div class=\"main\" v-show=\" page==='ready' \"\n\t\tstyle=\"background:url(img/bg.png);background-size:100% auto;\">\n\n\t\t\t<img class=\"banner_kill\" :src=\" 'img/banner_kill.png' \"/>\n\t\t\t<swiper-lite \n\t\t\t:stage-no=\"stageNo\"\n\t\t\t:time-next=\"timeNext\"\n\t\t\t:books=\"books\"\n\t\t\t:random-book=\"randomBook\"\n\t\t\t:act=\"act\"></swiper-lite>\n\n\t\t\t<div class=\"books_wanted\">\n\t\t\t\t<div class=\"banner\">\n\t\t\t\t\t<p>您还有 <span>{{chance}}</span> 次说“想看”的机会</p>\n\t\t\t\t\t<img class=\"banner_want\" :src=\" 'img/banner_want_3.png' \"/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"book_wanted\"\n\t\t\t\tv-for=\"(a,i) in books_wanted\">\n\t\t\t\t\t<div class=\"book_\"\n\t\t\t\t\t@click=\"TO_BOOK(a.bid)\">\n\t\t\t\t\t\t<img class=\"bookImg\" :src=\" 'img/book.png' \"/>\n\t\t\t\t\t\t<img class=\"cover\" :src=\" 'img/covers/'+a.bid+'.jpg' \"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<img class=\"panel--\" :src=\" 'img/panel.png' \"/>\n\t\t\t\t\t<div class=\"content__\">\n\t\t\t\t\t\t<div class=\"top11\">\n\t\t\t\t\t\t\t<p class=\"title\">{{a.title}}</p>\n\t\t\t\t\t\t\t<p class=\"author\">{{a.author}}</p>\n\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t<p class=\"old\"\n\t\t\t\t\t\t\t\t:style=\" a.number>=5000?'text-decoration:line-through':'' \">{{a.price}}</p>\n\t\t\t\t\t\t\t\t<p class=\"new\"\n\t\t\t\t\t\t\t\tv-if=\" a.number>=5000 \">0.0{{a.discount==='5'?'2':'1'}}元/千字</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"bottom11\">\n\t\t\t\t\t\t\t<div class=\"star\">\n\t\t\t\t\t\t\t\t<p>{{a.discount}}折</p>\n\t\t\t\t\t\t\t\t<img class=\"starImg\" :src=\" 'img/star_'+(a.number<5000?'before':'after')+'.png' \"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"state\">\n\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t<div class=\"bar\"\n\t\t\t\t\t\t\t\t\t:style=\" 'width:'+(a.number/5000*100)+'%' \"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"bna\">\n\t\t\t\t\t\t\t\t\t<p class=\"before\"\n\t\t\t\t\t\t\t\t\tv-if=\"a.number<5000\">还需{{5000-a.number}}人</p>\n\t\t\t\t\t\t\t\t\t<p class=\"after\"\n\t\t\t\t\t\t\t\t\tv-if=\"a.number>=5000\">\n\t\t\t\t\t\t\t\t\t\t已到5000人，开启{{a.discount}}折\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p class=\"plus1\" :class=\" a.plus?'active':'' \">\n\t\t\t\t\t\t\t\t\t\t+1\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"want\">\n\t\t\t\t\t\t\t\t<img :src=\" 'img/want.png' \"\n\t\t\t\t\t\t\t\tv-if=\"a.number<5000&&(chance>0&&!a.wanted)\"\n\t\t\t\t\t\t\t\t@click=\"I_WANT(a.bid,i)\"/>\n\t\t\t\t\t\t\t\t<img :src=\" 'img/want_waiting.png' \"\n\t\t\t\t\t\t\t\tv-if=\"a.number<5000&&(chance<=0||a.wanted)\"/>\n\t\t\t\t\t\t\t\t<img :src=\" 'img/want_ten.png' \"\n\t\t\t\t\t\t\t\tv-if=\"a.number>=5000&&!a.canBuy\"/>\n\t\t\t\t\t\t\t\t<img :src=\" 'img/want_buy.png' \"\n\t\t\t\t\t\t\t\tv-if=\"a.number>=5000&&a.canBuy\"\n\t\t\t\t\t\t\t\t@click=\"TO_BUY(a.bid)\"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"info\" v-if=\"a.number>=5000\">* 每日10点开启，去书籍详情页点击下载即可购买 *</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- <img class=\"btn_share\" :src=\" 'img/btn_share.png' \"/> -->\n\n\t\t\t<rules :ios=\"ios\"></rules>\n\t\t</div>\n<!-- \t\t<debug \n\t\t:state=\"$data\"></debug> -->\n\t</div>\n";

/***/ }
/******/ ]);