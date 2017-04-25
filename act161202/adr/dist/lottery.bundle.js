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
			App: __webpack_require__(119)
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
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(120);
	__vue_script__ = __webpack_require__(122);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\_lottery\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(131);
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
/* 120 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 121 */,
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _storeLottery = __webpack_require__(123);

	var _storeLottery2 = _interopRequireDefault(_storeLottery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			Debugger: __webpack_require__(16),
			MaskLoading: __webpack_require__(21),
			MaskOver: __webpack_require__(26),

			MaskPrize: __webpack_require__(70),
			Lottery: __webpack_require__(126)
		},
		data: function data() {
			return _storeLottery2.default.data;
		},
		computed: {
			prize: function prize() {
				return this.prizes[this.result.res];
			}
		},
		watch: {},
		created: function created() {},
		mounted: function mounted() {
			this.act({ type: 'INIT' });
		},
		methods: {
			act: _storeLottery2.default.act
		}
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _store = __webpack_require__(13);

	var _base = __webpack_require__(14);

	var _base2 = _interopRequireDefault(_base);

	var _lottery = __webpack_require__(124);

	var _lottery2 = _interopRequireDefault(_lottery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store.createStore)(_base2.default.data, _base2.default.act).merge(_lottery2.default.data, _lottery2.default.act);

	exports.default = store;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {

		chance: function () {
			console.log(location.href);
			return 0;
		}(),
		result: {
			i: 0,
			res: 0
		},

		prizes: __webpack_require__(125).default

	};

	function act(action) {
		var self = this;
		switch (action.type) {

			case 'INIT':
				if (self.dev) {
					self.chance = 5;
					self.show_mask_prize = true;
					self.page = 'ready';
				} else {
					console.log(self.z_type);

					Local.reqaObj(common.server() + ('pkg161202/lotteryTimes' + (self.z_type === 'writers' ? '2' : '')), function (data) {
						console.log(data);
						if (data.code === -4) {
							self.page = 'over';
						} else {
							self.loggedIn = data.isLogin;
							self.chance = Number(data.lotteryTimes);
							self.page = 'ready';
						}
					}, [], function () {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				};
				break;

			case 'DRAW':
				if (self.dev) {
					self.result = {
						i: self.result.i++,
						res: 4
					};
				} else {
					if (self.z_type === 'writers') {
						Local.forceLog(common.param('act_f'), 'writers_draw');
					} else {
						Local.forceLog(common.param('act_f'), 'actors_draw');
					};
					Local.reqaObj(common.server() + ('pkg161202/doLottery' + (self.z_type === 'writers' ? '2' : '')), function (data) {
						console.log(data);
						if (data.code === 1) {
							self.result = {
								i: self.result.i++,
								res: Number(data.prizeId)
							};
						} else {
							Local.showToast('抽奖未成功');
						}
					}, [], function () {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				}
				break;
			case 'SHOW_MASK':
				self.show_mask_prize = true;
				self.chance--;
				break;
			case 'BACK':
				if (self.z_type === 'writers') {
					Local.forceLog(common.param('act_f'), 'writers_return');
				} else {
					Local.forceLog(common.param('act_f'), 'actors_return');
				};
				history.go(-1);
				break;

		}
	}

	exports.default = { data: data, act: act };

/***/ },
/* 125 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = [{
		id: 0,
		name: '明星周边'
	}, {
		id: 1,
		name: 'QQ阅读公仔'
	}, {
		id: 2,
		name: 'iPad'
	}, {
		id: 3,
		name: '感谢参与'
	}, {
		id: 4,
		name: '书券'
	}, {
		id: 5,
		name: '入场资格邀请函'
	}, {
		id: 6,
		name: '线香礼盒'
	}, {
		id: 7,
		name: '感谢参与'
	}];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(127);
	__vue_script__ = __webpack_require__(129);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\Lottery.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(130);
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
/* 127 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 128 */,
/* 129 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			img: {},
			chance: {},
			result: {},
			act: {},
			ios: {}
		},
		data: function data() {
			var self = this;
			return {
				pressed: false,
				inDrawing: false,
				current: 0,
				trophies: [{
					name: '明星周边'
				}, {
					name: 'QQ阅读公仔'
				}, {
					name: 'iPad'
				}, {
					name: '感谢参与'
				}, {
					name: function () {
						return self.ios ? '阅券' : '书券';
					}()
				}, {
					name: '入场资格邀请函'
				}, {
					name: '线香礼盒'
				}, {
					name: '感谢参与'
				}]
			};
		},
		watch: {
			result: function result(nv) {
				this.fake(nv.res);
			}
		},
		computed: {},
		methods: {
			drawtouchstart: function drawtouchstart() {},
			drawtouchmove: function drawtouchmove() {},
			drawtouchend: function drawtouchend() {},
			drawtouchcancel: function drawtouchcancel() {},
			click: function click() {
				if (!this.inDrawing) {
					if (this.chance === 0) {
						Local.showToast('暂无抽奖机会~');
					} else if (this.chance > 0) {
						this.inDrawing = true;
						this.act({ type: 'DRAW' });
					}
				};
			},
			fake: function fake(res) {
				var self = this;
				var cycle = 0;
				var duration = 100;
				function move() {
					self.current++;
					if (self.current === 8) {
						self.current = 0;
						cycle++;
					};
					duration += 10;
					if (cycle === 3 && self.current === res) {
						setTimeout(function () {
							self.act({ type: 'SHOW_MASK' });
							self.inDrawing = false;
						}, 1000);
					} else {
						setTimeout(move, duration);
					}
				}
				setTimeout(move, duration);
			}
		}
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Lottery\" _v-0cdc773c=\"\">\n\t<div class=\"content\" _v-0cdc773c=\"\">\n\t\t<div class=\"btn\" :style=\" pressed?'background:#ffce20;border-radius: 0.1rem;':'background: url('+img+'/lottery/draw.png) no-repeat;background-size: 100%;' \" @touchstart=\"drawtouchstart\" @touchmove=\"drawtouchmove\" @touchend=\"drawtouchend\" @touchcancel=\"drawtouchcancel\" @click=\"click\" _v-0cdc773c=\"\">\n\t\t<p _v-0cdc773c=\"\">抽奖</p>\n\t\t<p _v-0cdc773c=\"\">您有(<span class=\"chance\" _v-0cdc773c=\"\">{{chance||0}}</span>)次抽奖机会</p>\n\t</div>\n\t<div v-for=\"(a,i) in trophies\" class=\"trophy\" :class=\" 'trophy'+i+(i===current?' active':'') \" _v-0cdc773c=\"\">\n\t\t<div class=\"table\" _v-0cdc773c=\"\">\n\t\t\t<div class=\"cell\" _v-0cdc773c=\"\">\n\t\t\t\t<img :src=\" img+'/lottery/'+i+(i===4&amp;&amp;ios?'_ios':'')+'.png' \" _v-0cdc773c=\"\">\n\t\t\t</div>\n\t\t</div>\n\t\t<p class=\"name\" _v-0cdc773c=\"\">{{a.name}}</p>\n\t</div>\n</div>\n</div>";

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "\n\t<div id=\"root\" _v-331c914f=\"\">\n\t\t<mask-loading v-show=\" page==='pending' \" _v-331c914f=\"\"></mask-loading>\n\t\t<mask-over v-show=\" page==='over' \" _v-331c914f=\"\"></mask-over>\n\t\t\n\t\t<div class=\"main\" v-show=\" page==='ready' \" _v-331c914f=\"\">\n\t\t\t\n\t\t\t<mask-prize :act=\"act\" v-show=\"show_mask_prize\" :prize=\"prize\" :img=\"img\" :ios=\"ios\" _v-331c914f=\"\"></mask-prize>\n\n\t\t\t<img class=\"header\" :src=\" img+'/lottery/header_2.png' \" _v-331c914f=\"\">\n\n\t\t\t<lottery :act=\"act\" :chance=\"chance\" :result=\"result\" :img=\"img\" :ios=\"ios\" _v-331c914f=\"\"></lottery>\n\n\t\t\t<p class=\"check\" @click=\"act({type:'TO_PRIZES'})\" _v-331c914f=\"\">查看我的奖品&gt;&gt;</p>\n\t\t\t<img class=\"back\" :src=\" img+'/lottery/btn_2.png' \" @click=\"act({type:'BACK'})\" _v-331c914f=\"\">\n\t\t</div>\n\n<!-- \t\t<debugger\n\t\t:state=\"$data\"></debugger> -->\n\t</div>\n";

/***/ }
/******/ ]);