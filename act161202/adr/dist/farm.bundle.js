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

	var root = new Vue({
		el: '#root',
		components: {
			App: __webpack_require__(101)
		},
		template: '<app></app>'
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(3);

/***/ },
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
			$html.style.fontSize = 100 * w / 750 + 'px';
			//document.getElementsByClassName('container')[0].style.height = h+'px';
			console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
		}
		setRem();
		window.addEventListener('resize', setRem);
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function createStore(data, act) {

		var reducers = [act];

		var store = {
			data: data,
			act: $act,
			dispatch: $act,
			enhance: enhance,
			merge: enhance
		};

		return store;

		function enhance(_data, _act) {
			var store = this;
			for (var key in _data) {
				store.data[key] = _data[key];
			};
			reducers.push(_act);
			return store;
		}

		function $act(action) {
			var vm = this;
			reducers.forEach(function (a) {
				a.call(vm, action);
			});
		}
	}

	exports.createStore = createStore;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {
		img: '../adr/img',

		dev: true,

		page: 'pending',

		z_type: common.param('z_type') || 'none',

		ios: function () {
			if (window.env !== undefined) {
				return env.pt === 'ios' ? true : false;
			} else {
				var el = document.querySelector('[config]');
				var val = el.getAttribute('config');
				console.log(val);
				return (/ios/.test(val) ? true : false
				);
			};
		}(),
		share: function () {
			var el = document.querySelector('[config]');
			var val = el.getAttribute('config');
			console.log(val);
			return (/share/.test(val) ? true : false
			);
		}(),

		loggedIn: false,

		show_mask_download: false,
		show_mask_prize: false,

		first_vote: false,

		chance_to_draw: 0,
		timeleft: 0
	};

	function act(action) {
		var self = this;
		switch (action.type) {
			case 'TO_LOGIN':
				if (self.dev) {
					self.loggedIn = true;
				} else {
					Local.login();
				};
				break;
			case 'TO_LOTTERY':
				if (!self.loggedIn) {
					self.act({ type: 'TO_LOGIN' });
				} else {
					if (/writers\.html/.test(location.href)) {
						Local.forceLog(common.param('act_f'), 'writers_toLottery');
						Local.openPage(location.href.replace(/(writers\.html\?)|(actors\.html\?)/g, 'lottery.html?z_type=writers&z_chance=' + self.chance_to_draw + '&'));
					} else {
						Local.forceLog(common.param('act_f'), 'actors_toLottery');
						Local.openPage(location.href.replace(/(writers\.html\?)|(actors\.html\?)/g, 'lottery.html?z_type=actors&z_chance=' + self.chance_to_draw + '&'));
					}
				}
				break;
			case 'TO_PRIZES':
				if (!self.share) {
					if (!self.loggedIn) {
						self.act({ type: 'TO_LOGIN' });
					} else {
						if (/writers/.test(location.href)) {
							Local.openPage(location.href.replace(/(writers|actors|lottery)\.html\?/g, 'prizes.html?z_type=writers&'));
							// Local.openPage( './prizes.html?z_type=writers' );
						} else {
							Local.openPage(location.href.replace(/(writers|actors|lottery)\.html\?/g, 'prizes.html?z_type=actors&'));
						}
					}
				} else {
					self.act({ type: 'TO_APP' });
				}
				break;
			case 'TO_CONTACT':
				if (self.share) {
					self.act({ type: 'TO_APP' });
				} else {
					if (!self.loggedIn) {
						self.act({ type: 'TO_LOGIN' });
					} else {
						Local.openPage(location.href.replace(/(writers|actors|lottery)\.html/g, 'contact.html'));
					}
				};
				break;
			case 'TO_ACTORS':
				if (!self.share) {
					Local.forceLog(common.param('act_f'), 'writers_toActors');
					Local.openPage(location.href.replace(/(writers|actors|lottery)\.html/g, 'actors.html'));
				} else {
					self.act({ type: 'TO_APP' });
				}
				break;
			case 'TO_WRITERS':
				if (!self.share) {
					Local.forceLog(common.param('act_f'), 'actors_toWritters');
					Local.openPage(location.href.replace(/(writers|actors|lottery)\.html/g, 'writers.html'));
				} else {
					self.act({ type: 'TO_APP' });
				};
				break;

			case 'TO_CHARGE':
				Local.doCharge('act', true, action.money * 100);
				break;
			case 'TO_BOOK':
				if (!self.share) {
					ABook.gotoDetail(action.bid);
				} else {
					self.act({ type: 'TO_APP' });
				}
				break;

			// For sharing:
			case 'SET_ICON':
				var pre = function () {
					// 如果当前环境为测试环境：
					if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
						return 'https://ptsolomo.reader.qq.com/book_res/event';
					} else {
						return 'https://yuedu.reader.qq.com/event';
					}
				}();
				var type = function () {
					return (/writers\.html/.test(location.href) ? 'writers' : 'actors'
					);
				}();
				var title = type === 'writers' ? '大神作家喊你来投票！' : '明星爱豆喊你来投票！';
				var desc = type === 'writers' ? '多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】' : '多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】';
				Local.$setIconForShareing(pre + '/act161202/com/share_' + type + '.html?tf=1', 'http' + (self.ios ? 's' : '') + '://ptsolomo.reader.qq.com/book_res/event/act161202/adr/img/common/thumb.png', title, desc);
				break;
			case 'SHARE':
				if (self.dev) {
					if (!self.loggedIn) {
						self.loggedIn = true;
					} else {
						self.writers[self.current].unlocked = true;
					}
				} else {
					//Local.forceLog( common.param('act_f'),self.what+'_share_'+self.current );
					if (!self.loggedIn) {
						self.act({
							type: 'LOGIN'
						});
					} else {

						Local.$share(self.href, location.href.replace(/act161203.+/, 'act161203/adr/img/qqreader.png'), 'QQ阅读6周年，大神请客，经典免费读', '我领到免费神作，你也快来吧');
					}
				}
				break;

			// For pages shared out:
			case 'SET_SECOND_SHARING':
				var type = function () {
					return (/writers\.html/.test(location.href) ? 'writers' : 'actors'
					);
				}();
				var title = type === 'writers' ? '大神作家喊你来投票！' : '明星爱豆喊你来投票！';
				var desc = type === 'writers' ? '多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】' : '多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】';
				sns.share({
					url: location.href,
					//cover: location.href.replace( /act161202.+/,'act161202/adr/img/qqreader.png' ),
					cover: 'http://solomotest4.3g.qq.com/book_res/event/act161202/adr/img/common/thumb.png',
					title: title,
					desc: desc
				}, '111');
				break;
			case 'TO_APP':
				var type = function () {
					return (/writers\.html/.test(location.href) ? 'writers' : 'actors'
					);
				}();
				var test = function () {
					if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
						return true;
					} else {
						return false;
					}
				}();
				var href = function () {
					if (test) {
						if (env.pt === 'adr') {
							return 'http://solomotest4.3g.qq.com/book_res/event/act161202/adr/' + type + '.html?act_f=170105';
						} else {
							return 'https://ptsolomo.reader.qq.com/book_res/event/act161202/ios/' + type + '.html?act_f=170105';
						}
					} else {
						if (env.pt === 'adr') {
							return 'http://iyuedu.qq.com/event/act161202/adr/' + type + '.html?act_f=170105';
						} else {
							return 'https://yuedu.reader.qq.com/event/act161202/ios/' + type + '.html?act_f=170105';
						}
					};
				}();
				if (env.vw === 'wx' && env.pt === 'adr') {
					sns.open(function (installStat, plat) {
						if (installStat === -2) {//浏览器
							// window.location.href="uniteqqreader://nativepage/client/bookshelf";
							// showmask();
						} else if (installStat) {
							//已安装
							bnative.openPage(href);
							self.show_mask_download = true;
						} else {
							self.show_mask_download = true;
						}
					});
				} else {
					console.log('haha');
					bnative.openPage(href);
					setTimeout(function () {
						self.show_mask_download = true;
					}, 2000);
				};
				break;
			case 'TO_DOWNLOAD':
				bnative.downLoad('10003531');
				break;

			case 'HIDE_MASK_DOWNLOAD':
				self.show_mask_download = false;
				break;
			case 'HIDE_MASK_PRIZE':
				self.show_mask_prize = false;
				break;
		}
	}

	exports.default = { data: data, act: act };

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(17);
	__vue_script__ = __webpack_require__(19);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\Debugger.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(20);
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
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */
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
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"DEBUG\" _v-06c0f150=\"\">\n\t<div class=\"fixed__\" _v-06c0f150=\"\">\n\t\tloggedIn: {{state.loggedIn}}, day: {{state.day}}<br _v-06c0f150=\"\">\n\t\tcurrent: {{state.current}}<br _v-06c0f150=\"\">\n\t</div>\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(22);
	__vue_script__ = __webpack_require__(24);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\MaskLoading.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(25);
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
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {};
		},
		mounted: function mounted() {}
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskLoading\" _v-44e089c9=\"\">\n\t<p class=\"_text\" _v-44e089c9=\"\">加载中...</p>\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(27);
	__vue_script__ = __webpack_require__(29);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\MaskOver.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(30);
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
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */,
/* 29 */
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
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskOver\" _v-8e3e04d2=\"\">\n\t<div class=\"content_666\" _v-8e3e04d2=\"\">\n\t\t<div class=\"content_667\" _v-8e3e04d2=\"\">\n\t\t\t<img :src=\" '../adr/img/common/over.png' \" _v-8e3e04d2=\"\">\n\t\t\t<p _v-8e3e04d2=\"\">本期活动已结束</p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(102);
	__vue_script__ = __webpack_require__(104);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\_farm\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(118);
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
/* 102 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 103 */,
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _storeFarm = __webpack_require__(105);

	var _storeFarm2 = _interopRequireDefault(_storeFarm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			Debugger: __webpack_require__(16),
			MaskLoading: __webpack_require__(21),
			MaskOver: __webpack_require__(26),

			SnowConfetti: __webpack_require__(107),
			SmokyText: __webpack_require__(108),

			Fader: __webpack_require__(113)
		},
		data: function data() {
			return _storeFarm2.default.data;
		},
		computed: {},
		watch: {},
		created: function created() {},
		mounted: function mounted() {
			this.act({ type: 'INIT' });
		},
		methods: {
			act: _storeFarm2.default.act
		}
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _store = __webpack_require__(13);

	var _base = __webpack_require__(14);

	var _base2 = _interopRequireDefault(_base);

	var _farm = __webpack_require__(106);

	var _farm2 = _interopRequireDefault(_farm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store.createStore)(_base2.default.data, _base2.default.act).merge(_farm2.default.data, _farm2.default.act);

	exports.default = store;

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {};

	function act(action) {
		var self = this;
		switch (action.type) {

			case 'INIT':
				if (self.dev) {
					self.page = 'ready';
				} else {
					self.page = 'ready';
				};
				break;
		}
	}

	exports.default = { data: data, act: act };

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';

	function Confetti(cv) {
		this.cv = cv;
		//this.style = COLORS[~~range(0, 5)];
		//this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
		this.rgb = 'rgba(255,255,255';
		//this.r = ~~range(2, 6);
		this.r = ~~Canvas.random(2, 6);
		this.r2 = 2 * this.r;
		this.spawn();
	}

	Confetti.prototype = {
		PI_2: 2 * Math.PI,
		xpos: 0.5,
		spawn: function spawn() {
			this.opacity = 0;
			this.dop = 0.03 * Canvas.random(1, 4);
			this.x = Canvas.random(-this.r2, this.cv.$width - this.r2);
			this.y = Canvas.random(-20, this.cv.$height - this.r2);
			this.xmax = this.cv.$width - this.r;
			this.ymax = this.cv.$height - this.r;
			//this.vx = range(0, 2) + 8 * xpos - 5;
			this.vx = Canvas.random(-3, 0);
			//this.vy = 0.7 * this.r + range(-1, 1);
			this.vy = 1 * this.r + Canvas.random(-1, 1);
		},
		draw: function draw() {
			var ref;
			this.x += this.vx;
			this.y += this.vy;
			this.opacity += this.dop;
			if (this.opacity > 1) {
				this.opacity = 1;
				this.dop *= -1;
			}
			if (this.opacity < 0 || this.y > this.ymax) {
				this.spawn();
			}
			if (!(0 < (ref = this.x) && ref < this.xmax)) {
				this.x = (this.x + this.xmax) % this.xmax;
			}
			var ctx = this.cv.$ctx;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, this.PI_2, false);
			ctx.fillStyle = this.rgb + ',' + this.opacity + ')';
			ctx.fill();
		}
	};

	var HAHA = Canvas.extend({
		props: function props() {
			return {
				count: 60,
				COLORS: [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]]
			};
		},
		data: function data() {
			return {
				confetti: []
			};
		},
		beforePlay: function beforePlay() {
			var _this = this;

			this.$setSize(window.innerWidth, window.innerHeight);
			window.addEventListener('resize', function () {
				_this.$setSize(window.innerWidth, window.innerHeight);
			});
			for (var i = 1, j = 1, ref = this.count; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
				this.confetti.push(new Confetti(this));
			}
		},
		render: function render() {
			this.$ctx.clearRect(0, 0, this.$width, this.$height);
			this.confetti.forEach(function (a) {
				a.draw();
			});
		}
	});

	module.exports = {
		template: '\n\t<canvas ref="confetti"\n\tstyle="display:block;background:url(http://madsoap.net/img/cover.jpg);background-size:100% auto;"></canvas>\n\t',
		mounted: function mounted() {
			new HAHA({
				el: this.$refs.confetti
			});
		}
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(109);
	__vue_script__ = __webpack_require__(111);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\SmokyText.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(112);
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
	    var id = "./SmokyText.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 109 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 110 */,
/* 111 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				className: ''
			};
		},
		mounted: function mounted() {},
		methods: {
			go: function go() {
				this.className = this.className === '' ? 'active' : '';
			}
		}
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"SmokyText\" :class=\"className\"\n@click=\"go\">\n\t<p class=\"text\">\n\t\t<span>冬</span><span>牧</span><span>场</span><span>冬</span><span>牧</span><span>场</span><br/>\n\t\t<span>冬</span><span>牧</span><span>场</span><span>冬</span><span>牧</span><span>场</span><br/>\n\t</p>\n</div>\n";

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(114);
	__vue_script__ = __webpack_require__(116);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\Fader.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(117);
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
	    var id = "./Fader.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 114 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 115 */,
/* 116 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				current: 0,
				switching: false,
				items: [{
					state: 'current',
					background: 'red'
				}, {
					state: '',
					background: 'orange'
				}, {
					state: '',
					background: 'yellow'
				}]
			};
		},
		watch: {
			current: function current(newV, oldV) {
				var _this = this;

				this.items[newV].state = 'enter';
				this.items[oldV].state = 'leave';
				setTimeout(function () {
					_this.items[newV].state = 'current';
					_this.items[oldV].state = '';
					_this.switching = false;
				}, 2000);
			}
		},
		methods: {
			toNext: function toNext() {
				if (!this.switching) {
					this.switching = true;
					if (this.current < this.items.length - 1) {
						this.current++;
					} else {
						this.current = 0;
					}
				};
			}
		}
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Fader\" @click=\"toNext\" _v-3879d44f=\"\">\n\t<div class=\"item\" v-for=\"(a,i) in items\" :class=\"a.state\" _v-3879d44f=\"\">\n\t</div>\n</div>\n";

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "\n\t<div id=\"root\" _v-5742b76c=\"\">\n\t\t<mask-loading v-show=\" page==='pending' \" _v-5742b76c=\"\"></mask-loading>\n\t\t<mask-over v-show=\" page==='over' \" _v-5742b76c=\"\"></mask-over>\n\t\t\n\t\t<div class=\"main\" v-show=\" page==='ready' \" _v-5742b76c=\"\">\n\t\t\t<snow-confetti _v-5742b76c=\"\"></snow-confetti>\n\t\t\t<smoky-text _v-5742b76c=\"\"></smoky-text>\n<!-- \t\t\t<fader></fader> -->\n\t\t</div>\n\n<!-- \t\t<debugger\n\t\t:state=\"$data\"></debugger> -->\n\t</div>\n";

/***/ }
/******/ ]);