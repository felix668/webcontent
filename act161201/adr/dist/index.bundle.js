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

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function () {
		var body = document.querySelector('body');
		var square = document.createElement('div');
		var mask = document.createElement('div');

		square.style.cssText += 'position:fixed; right:0; top:0; width:0.5rem; height:0.5rem; background:black; opacity: 0.8;';
		mask.style.cssText += 'position:fixed; left:0; top:0; box-sizing:border-box; width:100%; height:50%; padding:20px; word-break:break-all; overflow:scroll; background:black; opacity:0.8; z-index:999; color:white; font-size: 16px; display:none;';
		body.appendChild(square);
		body.appendChild(mask);

		var log = console.log.bind(console);
		console.log = function (arg) {
			log(arg);
			if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
				mask.innerHTML += '<p>' + JSON.stringify(arg) + '</p>';
			} else {
				mask.innerHTML += '<p>' + arg + '</p>';
			}
		};
		window.onerror = function (msg, uri, line) {
			// console.log(arguments)
			mask.innerHTML += '<p style="color:red;">' + msg + '<br/>' + uri + '<br/>' + line + '</p>';
		};

		square.addEventListener('click', function () {
			mask.style.display = 'block';
		});
		mask.addEventListener('click', function () {
			mask.style.display = 'none';
		});
	})();

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
	  console.warn("[vue-loader] act161201\\adr\\src\\_index\\App.vue: named exports in *.vue files are ignored.");
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
			debug: __webpack_require__(12),
			maskLoading: __webpack_require__(18),
			maskOver: __webpack_require__(23),

			Slider: __webpack_require__(28),

			rules: __webpack_require__(72)
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
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {
		dev: true,

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
				if (self.dev) {
					self.page = 'ready';
				} else {
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

						// if( data.todaySK ){
						// 	data.todaySK.forEach((a,i)=>{
						// 		self.books[i].title = a.split('_')[0];
						// 		self.books[i].bid = a.split('_')[1];
						// 	});
						// };
						// data.skBookRestNumber.forEach((a,i)=>{
						// 	self.books[i].left = 100 - Number(a);
						// });
						// if( data.randomSk ){
						// 	self.randomBook.title = data.randomSk.split('_')[0];
						// 	self.randomBook.bid = data.randomSk.split('_')[1];
						// };
						// if( data.hasSKSet ){
						// 	self.killed.push(...data.hasSKSet);
						// };
						// self.stageNo = data.timeIdx;
						// self.timeNext = data.restTimeToNext;

						// data.bookingLists.forEach((a,i)=>{
						// 	self.books_wanted[i].title = a.split('_')[0];
						// 	self.books_wanted[i].bid = a.split('_')[1];
						// 	self.books_wanted[i].author = a.split('_')[2];
						// });
						// for(var key in data.bookingMap){
						// 	self.books_wanted.forEach(a=>{
						// 		if(a.bid===key){
						// 			a.number = Number( data.bookingMap[key] );
						// 		};
						// 	});
						// };
						// data.canBuy.forEach(a=>{
						// 	self.books_wanted.forEach(b=>{
						// 		if(b.bid===a){
						// 			b.canBuy = true;
						// 		};
						// 	});
						// });
						// if( data.hasBookSet ){
						// 	self.wanted.push(...data.hasBookSet);
						// };

						if (self.dev) {
							self.act({ type: 'MOCK' });
						}
						self.page = 'ready';
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(13);
	__vue_script__ = __webpack_require__(16);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161201\\adr\\src\\components\\Debug.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(17);
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
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */,
/* 16 */
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
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"DEBUG\" _v-1793a124=\"\">\n\t<div class=\"fixed__\" _v-1793a124=\"\">\n\t\tloggedIn: {{state.loggedIn}}<br _v-1793a124=\"\">\n\t\tstageNo: {{state.stageNo}}, timeNext: {{state.timeNext}}<br _v-1793a124=\"\">\n\t\tkilled: {{JSON.stringify(state.killed)}}<br _v-1793a124=\"\">\n\t\twanted: {{JSON.stringify(state.wanted)}}<br _v-1793a124=\"\">\n\t</div>\n</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(19);
	__vue_script__ = __webpack_require__(21);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161201\\adr\\src\\components\\MaskLoading.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(22);
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
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {};
		},
		mounted: function mounted() {}
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskLoading\" _v-768ce50b=\"\">\n\t<p class=\"_text\" _v-768ce50b=\"\">加载中...</p>\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(24);
	__vue_script__ = __webpack_require__(26);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161201\\adr\\src\\components\\MaskOver.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(27);
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
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */,
/* 26 */
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
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskOver\" _v-d84b8cd6=\"\">\n\t<div class=\"content_666\" _v-d84b8cd6=\"\">\n\t\t<div class=\"content_667\" _v-d84b8cd6=\"\">\n\t\t\t<img :src=\" 'img/over.png' \" _v-d84b8cd6=\"\">\n\t\t\t<p _v-d84b8cd6=\"\">本期活动已结束</p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(29);
	__vue_script__ = __webpack_require__(31);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161201\\adr\\src\\components\\Slider.vue: named exports in *.vue files are ignored.");
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
	    var id = "./Slider.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			items: {
				default: ['#6dace2', '#af9180', 'yellow']
			},
			duration: {
				default: 200
			}
		},
		components: {
			Swiper: __webpack_require__(32),
			SwiperLite: __webpack_require__(61),
			MyAudio: __webpack_require__(66)
		},
		data: function data() {
			return {
				viewportHeight: 0,
				color: 'black',
				current: 1,
				Y1: null,
				Y2: null
			};
		},
		mounted: function mounted() {
			var _this = this;

			this.viewportHeight = window.innerHeight;
			window.addEventListener('resize', function () {
				_this.viewportHeight = window.innerHeight;
			}, 50);
		},
		methods: {
			keydown: function keydown(e) {
				console.log(e);
			},
			touchstart: function touchstart(e) {
				this.Y1 = e.changedTouches[0].pageY;
			},
			touchmove: function touchmove(e) {
				e.preventDefault();
			},
			touchend: function touchend(e) {
				this.Y2 = e.changedTouches[0].pageY;
				var distance = this.Y2 - this.Y1;

				if (distance < -10) {
					this.toNext();
				} else if (distance > 10) {
					if (this.current > 0) {
						this.current--;
					}
				}
			},
			toNext: function toNext() {
				if (this.current < this.items.length - 1) {
					this.current++;
				}
			}
		}
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(33);
	__vue_script__ = __webpack_require__(35);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161201\\adr\\src\\components\\Swiper.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(60);
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
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(36);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			Song: __webpack_require__(55)
		},
		props: {
			items: {
				default: function _default() {
					return [{
						id: 0,
						name: '刘十八',
						desc: '刘十八',
						song: '刘十八',
						comment: '听说你唱歌都不在调上的来一首听听吧'
					}, {
						id: 1,
						name: '流水无痕',
						desc: '流水无痕',
						song: '流水无痕',
						comment: '听说你唱歌都不在调上的来一首听听吧'
					}, {
						id: 2,
						name: '苏小暖',
						desc: '苏小暖',
						song: '苏小暖',
						comment: '听说你唱歌都不在调上的来一首听听吧'
					}, {
						id: 3,
						name: '太上布衣',
						desc: '太上布衣',
						song: '太上布衣',
						comment: '听说你唱歌都不在调上的来一首听听吧'
					}, {
						id: 4,
						name: '忘记呼吸的猫',
						desc: '忘记呼吸的猫',
						song: '忘记呼吸的猫',
						comment: '听说你唱歌都不在调上的来一首听听吧'
					}, {
						id: 5,
						name: '梧桐火',
						desc: '梧桐火',
						song: '梧桐火',
						comment: '听说你唱歌都不在调上的来一首听听吧'
					}, {
						id: 6,
						name: '彦七',
						desc: '彦七',
						song: '彦七',
						comment: '听说你唱歌都不在调上的来一首听听吧'
					}, {
						id: 7,
						name: '夜七歌',
						desc: '夜七歌',
						song: '夜七歌',
						comment: '听说你唱歌都不在调上的来一首听听吧'
					}];
				}
			},
			style: {
				default: ''
			},
			carousel: {
				default: true
			},
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
				default: 1000
			},
			authors: {
				default: ['刘十八', '流水无痕', '苏小暖', '太上布衣', '忘记呼吸的猫', '梧桐火', '彦七', '夜七歌']
			}
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
			items: function items() {},
			currentOne: function currentOne(new_val) {}
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
					if (distance < 0) {
						this.toNext();
					} else if (distance > 0) {
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(37);

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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(39);
	var $Object = __webpack_require__(42).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(40);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(50), 'Object', { defineProperty: __webpack_require__(46).f });

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(41),
	    core = __webpack_require__(42),
	    ctx = __webpack_require__(43),
	    hide = __webpack_require__(45),
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
/* 41 */
/***/ function(module, exports) {

	'use strict';

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// optional / simple context binding
	var aFunction = __webpack_require__(44);
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
/* 44 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(46),
	    createDesc = __webpack_require__(54);
	module.exports = __webpack_require__(50) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(47),
	    IE8_DOM_DEFINE = __webpack_require__(49),
	    toPrimitive = __webpack_require__(53),
	    dP = Object.defineProperty;

	exports.f = __webpack_require__(50) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(48);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = !__webpack_require__(50) && !__webpack_require__(51)(function () {
	  return Object.defineProperty(__webpack_require__(52)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(51)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(48),
	    document = __webpack_require__(41).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(48);
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
/* 54 */
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(56);
	__vue_script__ = __webpack_require__(58);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161201\\adr\\src\\components\\Song.vue: named exports in *.vue files are ignored.");
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
	    var id = "./Song.vue";
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			writer: {},
			currentOne: {}
		},
		data: function data() {
			return {
				scaleX: 0
			};
		},
		watch: {
			currentOne: function currentOne() {}
		},
		mounted: function mounted() {
			this.$refs.audio.volume = 0.8;
		},
		methods: {
			click: function click() {
				this.$refs.audio.paused ? this.play() : this.pause();
			},
			play: function play() {
				var _this = this;

				if (this.$refs.audio.paused) {
					this.$refs.audio.play();
					var interval = setInterval(function () {
						var a = _this.calc();
						if (a === 1) {
							_this.reset();
						};
					}, 1000);
				};
			},
			pause: function pause() {
				if (!this.$refs.audio.paused) {
					this.$refs.audio.pause();
				};
			},
			reset: function reset() {
				this.$refs.audio.pause();

				this.$refs.audio.currentTime = 0;
				this.scaleX = 0;
			},
			calc: function calc() {
				var duration = this.$refs.audio.duration;
				var currentTime = this.$refs.audio.currentTime;
				this.scaleX = currentTime / duration;
				return this.scaleX;
			}
		}
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Song\" _v-e6017e6c=\"\">\n\t<div class=\"left_part\" _v-e6017e6c=\"\"></div>\n\t<div class=\"middle_part\" _v-e6017e6c=\"\">\n\t\t<div class=\"comment\" _v-e6017e6c=\"\">\n\t\t\t<div class=\"avatar\" _v-e6017e6c=\"\">\n\t\t\t\t<img :src=\" 'img/avatar.jpg' \" _v-e6017e6c=\"\">\n\t\t\t</div>\n\t\t\t<p class=\"comment_text\" _v-e6017e6c=\"\">{{writer.desc}}</p>\n\t\t</div>\n\t\t<div class=\"middle_\" _v-e6017e6c=\"\">\n\t\t\t<div class=\"avatar_\" _v-e6017e6c=\"\">\n\t\t\t\t<img :src=\" 'img/avatar.jpg' \" _v-e6017e6c=\"\">\n\t\t\t</div>\n\t\t\t<div class=\"block\" @click=\"click\" _v-e6017e6c=\"\">\n\t\t\t\t<p class=\"song_name\" _v-e6017e6c=\"\">{{writer.song}}</p>\n\t\t\t\t<div class=\"runtime\" :style=\" 'transform:scaleX('+scaleX+')' \" _v-e6017e6c=\"\"></div>\n\t\t\t\t<audio ref=\"audio\" src=\"heart_beat.mp3\" _v-e6017e6c=\"\"></audio>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"bottom_\" _v-e6017e6c=\"\">\n\t\t\t<p class=\"b_left\" _v-e6017e6c=\"\">\n\t\t\t\t“想听歌还是八卦呀？来大神说提问吧”\n\t\t\t</p>\n\t\t\t<div class=\"to_ask\" _v-e6017e6c=\"\">\n\t\t\t\t去提问\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"right_part\" _v-e6017e6c=\"\">\n\t</div>\n</div>\n";

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Swiper__\" style=\"background:url(img/radio.png);background-size:100% 11.14rem;\" _v-1e8a176d=\"\">\n\t<div class=\"screen\" _v-1e8a176d=\"\">\n\t\t<div class=\"Swiper\" ref=\"swiper\" @touchstart=\"touchstart($event)\" @touchmove=\"touchmove($event)\" @touchend=\"touchend($event)\" @touchcancel=\"touchend($event)\" _v-1e8a176d=\"\">\n\t\t\t<ul class=\"train\" :class=\" carousel?'carousel':'' \" :style=\" \n\t\t\t\t\t'transform:translate3d('+trainOffsetX+'px,0,0);transition:'+transition+';'+\n\t\t\t\t\t'-webkit-transform:translate3d('+trainOffsetX+'px,0,0);-webkit-transition:'+transition+';' \" _v-1e8a176d=\"\">\n\t\t\t\t<li class=\"item\" v-if=\"carousel\" style=\"background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;\" _v-1e8a176d=\"\">\n\t\t\t\t\t{{items[items.length-2].name}}\n\t\t\t\t</li>\n\t\t\t\t<li class=\"item\" v-if=\"carousel\" style=\"background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;\" _v-1e8a176d=\"\">\n\t\t\t\t\t{{items[items.length-1].name}}\n\t\t\t\t</li>\n\t\t\t\t<li :class=\" 'item '+(i===currentOne?'active':'') \" v-for=\"(item,i) in items\" :key=\"item.id\" style=\"background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;\" _v-1e8a176d=\"\">{{item.name}}</li>\n\t\t\t\t<li class=\"item\" v-if=\"carousel\" style=\"background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;\" _v-1e8a176d=\"\">\n\t\t\t\t\t{{items[0].name}}\n\t\t\t\t</li>\n\t\t\t\t<li class=\"item\" v-if=\"carousel\" style=\"background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;\" _v-1e8a176d=\"\">\n\t\t\t\t\t{{items[1].name}}\n\t\t\t\t</li>\n\t\t\t</ul>\n<!-- \t\t\t<ul class=\"pagination\" v-if=\"false\">\n\t\t\t\t<li v-for=\"(item,i) in items\"\n\t\t\t\tclass=\"dot\"\n\t\t\t\t:class=\" 'item '+(i===currentOne?'active':'') \"\n\t\t\t\t@click=\"toCard(i)\">\n\t\t\t\t</li>\n\t\t\t</ul> -->\n\t\t</div>\n\t\t<div class=\"needle\" _v-1e8a176d=\"\">\n\n\t\t</div>\n\t</div>\n\t<p class=\"desc\" _v-1e8a176d=\"\">{{items[currentOne].desc}}</p>\n\t<ul class=\"songs\" _v-1e8a176d=\"\">\n\t\t<li v-for=\"(a,i) in items\" v-show=\" i===currentOne \" _v-1e8a176d=\"\">\n\t\t\t<song :writer=\"a\" :current-one=\"currentOne\" _v-1e8a176d=\"\"></song>\n\t\t</li>\n\t</ul>\n\t<ul class=\"tabs\" _v-1e8a176d=\"\">\n\t\t<li v-for=\"(a,i) in authors\" :class=\" a===author?'active':'' \" @click=\" __toItem(a) \" _v-1e8a176d=\"\">{{a}}</li>\n\t</ul>\n</div>\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(62);
	__vue_script__ = __webpack_require__(64);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161201\\adr\\src\\components\\SwiperLite.vue: named exports in *.vue files are ignored.");
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
	    var id = "./SwiperLite.vue";
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
/* 65 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"SwiperLite\" :style=\"style\" @touchstart=\"touchstart($event)\" @touchmove=\"touchmove($event)\" @touchend=\"touchend($event)\" @touchcancel=\"touchend($event)\" _v-e28a9a8a=\"\">\n\t<ul class=\"pagination\" _v-e28a9a8a=\"\">\n\t\t<div class=\"strip\" _v-e28a9a8a=\"\"></div>\n\t\t<div class=\"dots\" _v-e28a9a8a=\"\">\n\t\t\t<li class=\"dot\" v-for=\"(a,i) in items\" _v-e28a9a8a=\"\">\n\t\t\t<div class=\"pill\" :class=\" i===currentOne?'active':'' \" @click=\" toCard(i) \" _v-e28a9a8a=\"\">{{a.dot}}</div>\n\t\t\t<div class=\"triangle\" v-show=\" i===currentOne \" _v-e28a9a8a=\"\"></div>\n\t\t</li></div>\n\t\n\t</ul>\n\t<ul class=\"train\" _v-e28a9a8a=\"\">\n\t\t<li :class=\" 'item '+(i===currentOne?'active':'') \" v-for=\"(item,i) in items\" :key=\"item.background\" _v-e28a9a8a=\"\">\n\t\t\t<div class=\"card\" _v-e28a9a8a=\"\">\n\t\t\t\t<img class=\"cardImg\" :src=\" 'img/card.png' \" _v-e28a9a8a=\"\">\n\n\t\t\t</div>\t\n\t\t</li>\n<!-- \t\t<div class=\"randomBook\"\n\t\tv-if=\"randomBook.title\">\n\t\t\t<div class=\"random_book\">\n\t\t\t\t<img class=\"random_book_img\" :src=\" 'img/random_book.png' \"/>\n\t\t\t\t<div class=\"content119\">\n\t\t\t\t\t<img :src=\" 'img/covers/'+randomBook.bid+'.jpg' \"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\t\t<div style=\"clear:both;\" _v-e28a9a8a=\"\"></div>\n\t</ul>\n</div>\n";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(67);
	__vue_script__ = __webpack_require__(69);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161201\\adr\\src\\components\\MyAudio.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(70);
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
	    var id = "./MyAudio.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 67 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 68 */,
/* 69 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		created: function created() {},
		methods: {
			play: function play() {
				this.$refs.audio.play();
			}
		}
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MyAudio\" _v-8c550b36=\"\">\n\t<div class=\"play\" @click=\"play\" _v-8c550b36=\"\"></div>\n\t<audio ref=\"audio\" src=\"heart_beat.mp3\" _v-8c550b36=\"\"></audio>\n</div>\n";

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Slider\" @touchstart=\"touchstart($event)\" @touchmove=\"touchmove($event)\" @touchend=\"touchend($event)\" @keypress=\"keydown($event)\" ref=\"slider\" :style=\" 'height:'+viewportHeight+'px' \" _v-44ce8b56=\"\">\n\t<ul class=\"train\" :style=\" 'transform: translate3d(0,'+(-current*10)+'%,0)' \" _v-44ce8b56=\"\">\n\t\t<li class=\"item\" style=\"background:#7ab7eb;\" _v-44ce8b56=\"\">\n\t\t\t<swiper _v-44ce8b56=\"\"></swiper>\n\t\t\t<img class=\"arrow\" :src=\" 'img/arrow.png' \" _v-44ce8b56=\"\">\n\t\t</li>\n\t\t<li class=\"item\" :style=\" 'background:url(img/bg_1.png);background-size:100% auto;' \" _v-44ce8b56=\"\">\n\t\t\t<swiper _v-44ce8b56=\"\"></swiper>\n\t\t\t<img class=\"arrow\" :src=\" 'img/arrow.png' \" _v-44ce8b56=\"\">\n\t\t</li>\n\t\t<li class=\"item\" _v-44ce8b56=\"\">\n\t\t\t<swiper _v-44ce8b56=\"\"></swiper>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(73);
	__vue_script__ = __webpack_require__(75);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161201\\adr\\src\\components\\Rules.vue: named exports in *.vue files are ignored.");
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
		props: ['ios']
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Rules\" _v-f73e1fdc=\"\">\n\t<img class=\"wave\" :src=\" 'img/wave.png' \" _v-f73e1fdc=\"\">\n\t<div class=\"rContent\" _v-f73e1fdc=\"\">\n\t\t<div class=\"rTitle\" _v-f73e1fdc=\"\">\n\t\t\t活动规则\n\t\t</div>\n\t\t<p _v-f73e1fdc=\"\"><span _v-f73e1fdc=\"\">1.</span>活动时间：11月24日 10:00 - 11月27日 24:00</p>\n\t\t<p _v-f73e1fdc=\"\"><span _v-f73e1fdc=\"\">2.</span>秒杀专场：每天3场活动，每场2本书，指定场次活动开始后，将发放100份限免权限，有效期7天，先到先得，送完为止。</p>\n\t\t<p _v-f73e1fdc=\"\"><span _v-f73e1fdc=\"\">3.</span>我要折扣：每本书达到指定“想看”人数后，折扣开启，持续7天，活动期间，每人有两次“想看”的机会。</p>\n\t\t<p v-if=\"ios\" _v-f73e1fdc=\"\"><span _v-f73e1fdc=\"\">4.</span>ios游客用户需要将书手动加入书架。</p>\n\t\t<div class=\"copyright\" _v-f73e1fdc=\"\">\n\t\t\t本活动最终解释权归QQ阅读所有\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "\n\t<div id=\"root\">\n\t\t<mask-loading v-show=\" page==='pending' \"></mask-loading>\n\t\t<mask-over v-show=\" page==='over' \"></mask-over>\n\t\t\n\t\t<div class=\"main\" v-show=\" page==='ready' \"\n\t\tstyle=\"background:url(img/bg.png);background-size:100% auto;\">\n\n\t\t\t<slider></slider>\n\n\t\t\t<!-- <rules :ios=\"ios\"></rules> -->\n\t\t</div>\n<!-- \t\t<debug \n\t\t:state=\"$data\"></debug> -->\n\t</div>\n";

/***/ }
/******/ ]);