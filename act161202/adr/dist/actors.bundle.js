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
			App: __webpack_require__(7)
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(8);
	__vue_script__ = __webpack_require__(11);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\_actors\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(90);
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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _storeActors = __webpack_require__(12);

	var _storeActors2 = _interopRequireDefault(_storeActors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			Debugger: __webpack_require__(16),
			MaskLoading: __webpack_require__(21),
			MaskOver: __webpack_require__(26),

			MaskDownload: __webpack_require__(31),

			BallotFour: __webpack_require__(36),

			Showcase: __webpack_require__(41),
			Countdown: __webpack_require__(65),

			MaskPrize: __webpack_require__(70),

			Rules: __webpack_require__(75),
			FooterFixed: __webpack_require__(80)
		},
		data: function data() {
			return _storeActors2.default.data;
		},
		computed: {},
		watch: {},
		created: function created() {},
		mounted: function mounted() {
			this.act({ type: 'INIT' });
		},
		methods: {
			act: _storeActors2.default.act
		}
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _store = __webpack_require__(13);

	var _base = __webpack_require__(14);

	var _base2 = _interopRequireDefault(_base);

	var _actors = __webpack_require__(15);

	var _actors2 = _interopRequireDefault(_actors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store.createStore)(_base2.default.data, _base2.default.act).merge(_actors2.default.data, _actors2.default.act);

	exports.default = store;

/***/ },
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
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {

		ballot_0: {
			id: 0,
			voted: -1,
			actors: [{
				uid: 0,
				id: 0,
				votes: 0
			}, {
				uid: 1,
				id: 1,
				votes: 0
			}, {
				uid: 2,
				id: 2,
				votes: 0
			}, {
				uid: 3,
				id: 3,
				votes: 0
			}]
		},
		ballot_1: {
			id: 1,
			voted: -1,
			actors: [{
				uid: 4,
				id: 0,
				votes: 0
			}, {
				uid: 5,
				id: 1,
				votes: 0
			}, {
				uid: 6,
				id: 2,
				votes: 0
			}, {
				uid: 7,
				id: 3,
				votes: 0
			}]
		}
	};

	function act(action) {
		var self = this;
		switch (action.type) {

			case 'INIT':
				if (self.dev) {

					self.timeleft = 10000;
					self.page = 'ready';
				} else {
					if (!self.share) {

						Local.forceLog(common.param('act_f'), 'actors_enter');
						self.act({ type: 'SET_ICON' });

						Local.reqaObj(common.server() + 'pkg161202/init', function (data) {
							console.log(data);

							self.loggedIn = data.isLogin;

							if (data.isLogin) {
								self.chance_to_draw = Number(data.lotteryTimes);
								self.first_vote = data.firstVote;
							};

							if (data.CountDown) {
								if (data.CountDown > 0) {
									//self.timeleft = 3600*1000;
								} else {
									self.timeleft = (3600 + data.CountDown) * 1000;
								};
							};
							if (data.voteSet) {
								data.voteSet.forEach(function (a) {
									var b = Number(a);
									if (b <= 3) {
										self.ballot_0.voted = b;
									} else {
										self.ballot_1.voted = b - 4;
									}
								});
							};

							if (data.dashenList) {
								data.dashenList.forEach(function (a) {
									var uid = Number(a.element);
									var votes = Number(a.score);
									if (uid <= 3) {
										self.ballot_0.actors[uid].votes = votes;
									} else {
										self.ballot_1.actors[uid - 4].votes = votes;
									}
								});
							}

							if (data.code === -4) {
								self.page = 'over';
							} else {

								self.page = 'ready';
							};
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					} else {
						Local.forceLog(common.param('act_f'), 'actors_share_' + env.pt);
						self.act({ type: 'SET_SECOND_SHARING' });
						self.page = 'ready';
					}
				};
				break;

			case 'VOTE':
				if (self.dev) {
					console.log(action);
					this['ballot_' + action.ballot_id].voted = action.id;
					if (self.ballot_0.voted >= 0 && self.ballot_1.voted >= 0) {
						self.chance_to_draw++;
					}
				} else {
					if (!self.share) {
						if (!self.loggedIn) {
							self.act({ type: 'TO_LOGIN' });
						} else {

							Local.forceLog(common.param('act_f'), 'actors_vote_' + action.uid);

							if (action.uid <= 9) {
								self.male_state = 'pending';
							} else {
								self.female_state = 'pending';
							}
							Local.reqaObj(common.server() + ('pkg161202/pick?id=' + action.uid), function (data) {
								if (data.code === 1) {

									Local.reqaObj(common.server() + 'pkg161202/getSQ', function (data) {}, [], function () {
										Local.showToast("网络异常，请稍候重试");
									}, 1);

									if (action.uid <= 3) {
										self.ballot_0.voted = action.id;
										self.ballot_0.actors[action.uid].votes++;
									} else {
										self.ballot_1.voted = action.id;
										self.ballot_1.actors[action.uid - 4].votes++;
									}
									if (self.ballot_0.voted >= 0 && self.ballot_1.voted >= 0) {
										self.timeleft = 3599 * 1000;
										self.chance_to_draw++;
									};
									if (self.first_vote) {
										self.first_vote = false;
										self.show_mask_prize = true;
									};
									Local.showToast('投票成功！');
								} else {
									Local.showToast(data.msg);
								}
							}, [], function () {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
							if (self.first_vote) {}
						};
					} else {
						self.act({ type: 'TO_APP' });
					};
				};
				break;
		}
	}

	exports.default = { data: data, act: act };

/***/ },
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(32);
	__vue_script__ = __webpack_require__(34);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\MaskDownload.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(35);
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
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 33 */,
/* 34 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['act'],
		methods: {
			hide: function hide() {
				this.act({
					type: 'HIDE_MASK_DOWNLOAD'
				});
			},
			CONFIRM: function CONFIRM() {
				this.act({
					type: 'TO_DOWNLOAD'
				});
			}
		}
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskDownload\" _v-47c481cb=\"\">\n\t<div class=\"mask-panel\" _v-47c481cb=\"\">\n\t\t<div class=\"top\" _v-47c481cb=\"\">下载QQ阅读，畅读海量小说</div>\n\t\t<p class=\"middle\" _v-47c481cb=\"\">如果还未安装QQ阅读，你可以：</p>\n\t\t<ul class=\"bottom\" _v-47c481cb=\"\">\n\t\t\t<li class=\"confirm\" @click=\"CONFIRM\" _v-47c481cb=\"\">下载QQ阅读</li>\n\t\t\t<li class=\"cancel\" @click=\"hide\" _v-47c481cb=\"\">取消</li>\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(37);
	__vue_script__ = __webpack_require__(39);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\BallotFour.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(40);
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
	    var id = "./BallotFour.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */,
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			share: {},
			ballot: {},
			img: {},
			act: {}
		},
		components: {},
		data: function data() {
			return {
				state: 'ready'
			};
		},
		computed: {},
		created: function created() {},
		watch: {},
		methods: {
			VOTE: function VOTE(a) {
				if (this.share) {
					this.act({
						type: 'VOTE'
					});
				} else if (this.ballot.voted >= 0) {
					Local.showToast('您已投过票了~');
				} else if (this.ballot.voted < 0) {
					if (this.state !== 'waiting') {
						this.state = 'waiting';
						this.act({
							type: 'VOTE',
							ballot_id: this.ballot.id,
							id: a.id,
							uid: a.uid
						});
					};
				}
			}
		}
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"BallotFour\" _v-55975a61=\"\">\n\t<div class=\"item\" v-for=\"a in ballot.actors\" :style=\" 'background:url('+img+'/actors/'+a.uid+'.png);background-size:100% auto;' \" _v-55975a61=\"\">\n\t\t<p class=\"votes\" v-show=\"!share\" _v-55975a61=\"\">{{a.votes}}票</p>\n\t\t<div class=\"vote\" :class=\"\n\t\t\t(ballot.voted===a.id?'voted':'')+\n\t\t\t''+\n\t\t\t(ballot.voted>=0&amp;&amp;ballot.voted!==a.id?'disabled':'') \" @click=\"VOTE(a)\" _v-55975a61=\"\">{{ballot.voted===a.id?'已投':'投票'}}</div>\n\t</div>\n</div>\n";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(42);
	__vue_script__ = __webpack_require__(44);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\Showcase.vue: named exports in *.vue files are ignored.");
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
	    var id = "./Showcase.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 43 */,
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _props$components$dat;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (_props$components$dat = {
		props: {
			items: {
				default: function _default() {
					return [{
						id: 0,
						bid: 244786,
						title: '从你的全世界路过',
						author: '张嘉佳'
					}, {
						id: 1,
						bid: 464309,
						title: '盗墓笔记',
						author: '南派三叔'
					}, {
						id: 2,
						bid: 815339,
						title: '欢乐颂',
						author: '阿耐'
					}, {
						id: 3,
						bid: 818544,
						title: '幻城',
						author: '郭敬明'
					}, {
						id: 4,
						bid: 11366903,
						title: '爵迹',
						author: '郭敬明'
					}, {
						id: 5,
						bid: 464654,
						title: '琅琊榜',
						author: '海晏'
					}, {
						id: 6,
						bid: 829138,
						title: '麻雀',
						author: '海飞'
					}, {
						id: 7,
						bid: 750056,
						title: '诛仙',
						author: '萧鼎'
					}];
				}
			},
			img: {},
			act: {}
		},
		components: {},
		data: function data() {
			return {};
		},
		watch: {},
		computed: {},
		created: function created() {}
	}, (0, _defineProperty3.default)(_props$components$dat, 'watch', {}), (0, _defineProperty3.default)(_props$components$dat, 'methods', {}), _props$components$dat);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(46);

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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(48);
	var $Object = __webpack_require__(51).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(49);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(59), 'Object', { defineProperty: __webpack_require__(55).f });

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(50),
	    core = __webpack_require__(51),
	    ctx = __webpack_require__(52),
	    hide = __webpack_require__(54),
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
/* 50 */
/***/ function(module, exports) {

	'use strict';

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// optional / simple context binding
	var aFunction = __webpack_require__(53);
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
/* 53 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(55),
	    createDesc = __webpack_require__(63);
	module.exports = __webpack_require__(59) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(56),
	    IE8_DOM_DEFINE = __webpack_require__(58),
	    toPrimitive = __webpack_require__(62),
	    dP = Object.defineProperty;

	exports.f = __webpack_require__(59) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(57);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = !__webpack_require__(59) && !__webpack_require__(60)(function () {
	  return Object.defineProperty(__webpack_require__(61)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(60)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 60 */
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(57),
	    document = __webpack_require__(50).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(57);
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
/* 63 */
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
/* 64 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Showcase\" _v-0d870638=\"\">\n\t<div class=\"item\" v-for=\"a in items\" _v-0d870638=\"\">\n\t\t<img class=\"cover\" :src=\" img+'/books/'+a.id+'.jpg' \" @click=\"act({type:'TO_BOOK',bid:a.bid})\" _v-0d870638=\"\">\n\t\t<p class=\"title\" _v-0d870638=\"\">{{a.title}}</p>\n\t\t<p class=\"author\" _v-0d870638=\"\">{{a.author}}</p>\n\t</div>\n</div>\n";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(66);
	__vue_script__ = __webpack_require__(68);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\Countdown.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(69);
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
	    var id = "./Countdown.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 66 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 67 */,
/* 68 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['adr', 'timeleft', 'img'],
		data: function data() {
			return {
				_timeleft: null,

				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			};
		},
		watch: {
			timeleft: function timeleft(nv) {
				var _this = this;

				console.log(nv);
				this._timeleft = nv;
				this.setNumbers(nv);

				var interval = setInterval(function () {
					_this._timeleft -= 1000;
					if (_this._timeleft === 0) {
						clearInterval(interval);
						location.href = location.href;
					} else {
						_this.setNumbers(_this._timeleft);
					};
				}, 1000);
			}
		},
		mounted: function mounted() {},
		methods: {
			setNumbers: function setNumbers(time) {
				var days = Math.floor(time / 1000 / 3600 / 24);
				var hours = Math.floor((time - days * 1000 * 3600 * 24) / 1000 / 3600);
				var minutes = Math.floor((time - days * 1000 * 3600 * 24 - hours * 1000 * 3600) / 1000 / 60);
				var seconds = Math.floor((time - days * 1000 * 3600 * 24 - hours * 1000 * 3600 - minutes * 1000 * 60) / 1000);

				this.hours = hours;
				this.minutes = minutes;
				this.seconds = seconds;
			},
			format: function format(num) {
				if (num < 10) {
					num = '0' + num;
				};
				return num;
			}
		}
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Countdown\" :style=\" 'background:url('+img+'/countdown.png);background-size:100% auto;' \" _v-7d1059ec=\"\">\n\t<div class=\"content11\" _v-7d1059ec=\"\">\n\t\t<p class=\"minutes\" _v-7d1059ec=\"\">{{format(minutes)}}</p>\n\t\t<p class=\"seconds\" _v-7d1059ec=\"\">{{format(seconds)}}</p>\n\t</div>\n</div>\n";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(71);
	__vue_script__ = __webpack_require__(73);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\MaskPrize.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(74);
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
/* 71 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 72 */,
/* 73 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {},
		props: {
			img: {},
			prize: {},
			ios: {},
			act: {}
		},
		data: function data() {
			return {};
		},
		computed: {},
		methods: {
			touchmove: function touchmove(e) {
				e.stopPropagation();
			}
		}
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskPrize\" @touchmove=\"touchmove\" _v-3c247adf=\"\">\n\t<div class=\"content_666\" _v-3c247adf=\"\">\n\t\t<div class=\"content_667\" _v-3c247adf=\"\">\n\t\t\t<img class=\"close\" :src=\" img+'/lottery/close.png' \" @click=\"act({type:'HIDE_MASK_PRIZE'})\" _v-3c247adf=\"\">\n\n\n\t\t\t<div class=\"kkk\" v-show=\"prize.id!==3&amp;&amp;prize.id!==7&amp;&amp;prize.id!==4&amp;&amp;prize.id!==1000\" _v-3c247adf=\"\">\n\t\t\t\t<div class=\"cong\" _v-3c247adf=\"\">\n\t\t\t\t\t恭喜您获得{{prize.name}}\n\t\t\t\t</div>\n\t\t\t\t<img class=\"p_img\" :src=\" img+'/lottery/'+prize.id+'.png' \" _v-3c247adf=\"\">\n\t\t\t\t<p class=\"p0\" _v-3c247adf=\"\">请填写您的联系方式，便于我们的工作人员与您取得联系</p>\n\t\t\t\t<div class=\"to_contact\" @click=\"act({type:'TO_CONTACT'})\" _v-3c247adf=\"\">\n\t\t\t\t\t填写联系方式\n\t\t\t\t</div>\n\t\t\t\t<p class=\"p1\" _v-3c247adf=\"\">多次获奖填写1次地址即可</p>\n\t\t\t</div>\n\t\t\t<div class=\"kkk\" v-show=\"prize.id===3||prize.id===7\" _v-3c247adf=\"\">\n\t\t\t\t<div class=\"thanks\" _v-3c247adf=\"\">感谢参与</div>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"kkk\" v-show=\"prize.id===4\" _v-3c247adf=\"\">\n\t\t\t\t<div class=\"cong\" _v-3c247adf=\"\">\n\t\t\t\t\t恭喜您获得200{{ios?'阅券':'书券'}}\n\t\t\t\t</div>\n\t\t\t\t<img class=\"p_img\" :src=\" img+'/lottery/'+prize.id+(ios?'_ios':'')+'.png' \" _v-3c247adf=\"\">\n\t\t\t\t<p class=\"pttt\" _v-3c247adf=\"\">{{ios?'阅券':'书券'}}稍后会直接发放到您的账户，请到[我的账户]中查看</p>\n\t\t\t</div>\n\t\t\t<div class=\"kkk\" v-show=\"prize.id===1000\" _v-3c247adf=\"\">\n\t\t\t\t<div class=\"cong\" _v-3c247adf=\"\">\n\t\t\t\t\t恭喜您获得20{{ios?'阅券':'书券'}}\n\t\t\t\t</div>\n\t\t\t\t<img class=\"p_img\" :src=\" img+'/lottery/4'+(ios?'_ios':'')+'.png' \" _v-3c247adf=\"\">\n\t\t\t\t<p class=\"pttt\" _v-3c247adf=\"\">{{ios?'阅券':'书券'}}稍后会直接发放到您的账户，请到[我的账户]中查看</p>\n\t\t\t</div>\n\n\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(76);
	__vue_script__ = __webpack_require__(78);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\Rules.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(79);
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
/* 76 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 77 */,
/* 78 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['act', 'img'],
		data: function data() {
			return {
				writers: function () {
					return (/writers\.html/.test(location.href)
					);
				}()
			};
		},
		methods: {
			TO_CONTACT: function TO_CONTACT() {
				this.act({
					type: 'TO_CONTACT'
				});
			}
		}

	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Rules\" _v-1ef30960=\"\">\n\t<div class=\"rContent\" _v-1ef30960=\"\">\n\t\t<img class=\"title\" :src=\" img+'/rules.png' \" _v-1ef30960=\"\">\n\t\t<div class=\"text\" v-if=\"writers\" _v-1ef30960=\"\">\n\t\t\t<p _v-1ef30960=\"\"><span class=\"no_\" _v-1ef30960=\"\">1</span>活动时间:2017年1月5日0:00-1月10日0:00。</p>\n\t\t\t<p _v-1ef30960=\"\"><span class=\"no_\" _v-1ef30960=\"\">2</span>每名用户每小时可进行一轮投票，每轮投票完成后可以参与一次抽奖。</p>\n\t\t\t<p _v-1ef30960=\"\"><span class=\"no_\" _v-1ef30960=\"\">3</span>奖品：抽中实物奖品的用户请按提示<a @click=\"TO_CONTACT\" _v-1ef30960=\"\">填写有效联系方式</a>，奖品将在活动结束后10日内，由QQ阅读客服联系后发放。阅券或书券即时发放，有效期为30天。<a @click=\"act({type:'TO_PRIZES'})\" _v-1ef30960=\"\">查看已获得奖品</a>。</p>\n\t\t</div>\n\t\t<div class=\"text\" v-if=\"!writers\" _v-1ef30960=\"\">\n\t\t\t<p _v-1ef30960=\"\"><span class=\"no_\" _v-1ef30960=\"\">1</span>活动时间:2017年1月5日0:00-1月10日0:00。</p>\n\t\t\t<p _v-1ef30960=\"\"><span class=\"no_\" _v-1ef30960=\"\">2</span>每名用户每小时可进行一轮投票，每轮投票完成后可以参与一次抽奖。</p>\n\t\t\t<p _v-1ef30960=\"\"><span class=\"no_\" _v-1ef30960=\"\">3</span>图书限时免费时间：2017年1月5日0:00-1月10日0:00。</p>\n\t\t\t<p _v-1ef30960=\"\"><span class=\"no_\" _v-1ef30960=\"\">4</span>奖品：抽中实物奖品的用户请按提示<a @click=\"TO_CONTACT\" _v-1ef30960=\"\">填写有效联系方式</a>，奖品将在活动结束后10日内，由QQ阅读客服联系后发放。阅券或书券即时发放，有效期为30天。<a @click=\"act({type:'TO_PRIZES'})\" _v-1ef30960=\"\">查看已获得奖品</a>。</p>\n\t\t</div>\n\t\t<div class=\"copyright\" _v-1ef30960=\"\">\n\t\t\t本活动最终解释权归QQ阅读所有\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(81);
	__vue_script__ = __webpack_require__(83);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\FooterFixed.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(89);
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
	    var id = "./FooterFixed.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 81 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 82 */,
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			male: {},
			female: {},
			chance: {},
			share: {},
			act: {},
			timeleft: {},
			img: {}
		},
		components: {
			Countdown: __webpack_require__(65),
			Explosion: __webpack_require__(84)
		},
		data: function data() {
			return {};
		},
		computed: {
			n: function n() {
				var n = 0;
				if (this.male >= 0) {
					n++;
				};
				if (this.female >= 0) {
					n++;
				};
				return n;
			}
		},
		watch: {},
		mounted: function mounted() {},
		methods: {}
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(85);
	__vue_script__ = __webpack_require__(87);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\Explosion.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(88);
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
	    var id = "./Explosion.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 85 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 86 */,
/* 87 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			img: {}
		}
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Explosion\" _v-0efcc424=\"\">\n\t<img :src=\" img+'/chips.png' \" _v-0efcc424=\"\">\n</div>\n";

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"FooterFixed\" _v-eae8319c=\"\">\n\t\t<div class=\"fixed\" :style=\" 'background:url('+img+'/footer_fixed.png);background-size:100% auto;' \" _v-eae8319c=\"\">\n\t\t\t\n\t\t\t<div class=\"share\" v-if=\"share\" _v-eae8319c=\"\">\n\t\t\t\t<img class=\"text_download\" :src=\" img+'/text_download_2.png' \" _v-eae8319c=\"\">\n\t\t\t\t<div class=\"btn_download\" @click=\"act({type:'TO_DOWNLOAD'})\" _v-eae8319c=\"\">\n\t\t\t\t\t下载QQ阅读\n\t\t\t\t</div>\n\t\t\t\t<div class=\"btn_open\" @click=\"act({type:'TO_APP'})\" _v-eae8319c=\"\">\n\t\t\t\t\t打开QQ阅读\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"not_share\" v-if=\"!share\" _v-eae8319c=\"\">\n<!-- \t\t\t\t<img class=\"line\" :src=\" img+'/line.png' \"\n\t\t\t\tv-show=\"chance<=0\"/> -->\n\t \t\t\t<div class=\"left_part\" :style=\" chance===0?'margin: 0.27rem auto;':'float:left;margin: 0.27rem 0.4rem 0 1.5rem;' \" _v-eae8319c=\"\">\n\t\t\t\t\t<div class=\"info\" v-show=\"n<2\" _v-eae8319c=\"\">\n\t\t\t\t\t\t<p v-show=\"n===0\" _v-eae8319c=\"\">每投2票<br _v-eae8319c=\"\">可抽奖一次</p>\n\t\t\t\t\t\t<p v-show=\"n===1\" _v-eae8319c=\"\">已投1票<br _v-eae8319c=\"\">再投1票可抽奖</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<countdown :timeleft=\"timeleft\" :img=\"img\" v-show=\"n===2\" _v-eae8319c=\"\"></countdown>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<!-- <img class=\"toLottery\"\n\t\t\t\tv-show=\"chance>0\"\n\t\t\t\t:src=\" img+'/to_draw.png' \"\n\t\t\t\t@click=\"act({type:'TO_LOTTERY'})\"> -->\n\n\t\t\t\t<div class=\"toLottery\" v-show=\"chance>0\" @click=\"act({type:'TO_LOTTERY'})\" _v-eae8319c=\"\">\n\t\t\t\t\t<img class=\"__btn\" :src=\" img+'/to_draw_2.png' \" _v-eae8319c=\"\">\n\t\t\t\t\t<explosion :img=\"img\" _v-eae8319c=\"\"></explosion>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "\n\t<div id=\"root\" _v-7420df72=\"\">\n\t\t<mask-loading v-show=\" page==='pending' \" _v-7420df72=\"\"></mask-loading>\n\t\t<mask-over v-show=\" page==='over' \" _v-7420df72=\"\"></mask-over>\n\t\t\n\t\t<div class=\"main\" v-show=\" page==='ready' \" _v-7420df72=\"\">\n\n\t\t\t<mask-download v-show=\"show_mask_download\" :act=\"act\" _v-7420df72=\"\"></mask-download>\n\t\t\t<mask-prize v-show=\"show_mask_prize\" :act=\"act\" :img=\"img\" :ios=\"ios\" :prize=\"{id:1000}\" _v-7420df72=\"\"></mask-prize>\n\n\t\t\t<img class=\"header\" :src=\" img+'/actors/header_2'+(ios?'_ios':'')+'.png' \" _v-7420df72=\"\">\n\n\t\t\t<img class=\"text_0\" :src=\" img+'/actors/text_0.png' \" _v-7420df72=\"\">\n\t\t\t<ballot-four :ballot=\"ballot_0\" :act=\"act\" :img=\"img\" :share=\"share\" _v-7420df72=\"\"></ballot-four>\n\n\t\t\t<img class=\"text_1\" :src=\" img+'/actors/text_1.png' \" _v-7420df72=\"\">\n\t\t\t<ballot-four :ballot=\"ballot_1\" :act=\"act\" :img=\"img\" :share=\"share\" _v-7420df72=\"\"></ballot-four>\n\n\t\t\t<img class=\"text_2\" :src=\" img+'/actors/text_2_2.png' \" _v-7420df72=\"\">\n\t\t\t<showcase :img=\"img\" :act=\"act\" _v-7420df72=\"\"></showcase>\n\n\t\t\t<img class=\"link\" :src=\" img+'/actors/to_another.png' \" @click=\"act({type:'TO_WRITERS'})\" _v-7420df72=\"\">\n\n\t\t\t<rules :act=\"act\" :img=\"img\" _v-7420df72=\"\"></rules>\n\n\t\t\t<footer-fixed :male=\"ballot_0.voted\" :female=\"ballot_1.voted\" :timeleft=\"timeleft\" :img=\"img\" :act=\"act\" :share=\"share\" :chance=\"chance_to_draw\" _v-7420df72=\"\"></footer-fixed>\n\t\t\t\n\t\t</div>\n\n<!-- \t\t<debugger\n\t\t:state=\"$data\"></debugger> -->\n\t</div>\n";

/***/ }
/******/ ]);