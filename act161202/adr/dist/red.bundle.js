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
			App: __webpack_require__(144)
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
/* 64 */,
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
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
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
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(145);
	__vue_script__ = __webpack_require__(147);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\_red\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(180);
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
/* 145 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 146 */,
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _storeRed = __webpack_require__(148);

	var _storeRed2 = _interopRequireDefault(_storeRed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			Debugger: __webpack_require__(16),
			MaskLoading: __webpack_require__(21),
			MaskOver: __webpack_require__(26),

			Swiper: __webpack_require__(150),

			Rules: __webpack_require__(75),
			FooterFixed: __webpack_require__(80)
		},
		data: function data() {
			return _storeRed2.default.data;
		},
		computed: {},
		watch: {},
		created: function created() {},
		mounted: function mounted() {
			this.act({ type: 'INIT' });
		},
		methods: {
			act: _storeRed2.default.act
		}
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _store = __webpack_require__(13);

	var _base = __webpack_require__(14);

	var _base2 = _interopRequireDefault(_base);

	var _red = __webpack_require__(149);

	var _red2 = _interopRequireDefault(_red);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store.createStore)(_base2.default.data, _base2.default.act).merge(_red2.default.data, _red2.default.act);

	exports.default = store;

/***/ },
/* 149 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {
		card0: {
			total: 0,
			qqReader: 0,
			mqq: 0
		},
		card1: {
			DAU: 0,
			ratio: 0,
			count: 0,
			total_growth: 0
		}
	};

	function act(action) {
		var self = this;
		switch (action.type) {

			case 'INIT':
				if (self.dev) {
					self.card0.total = 11111;
					self.card0.qqReader = 112311;
					self.card0.mqq = 111221;
					self.card1.DAU = 555;
					self.card1.ratio = 10;
					self.card1.count = 6665;
					self.card1.total_growth = 777;
					setInterval(function () {
						self.card0.total += 12345;
						self.card0.qqReader += 12345;
						self.card0.mqq += 12345;

						self.card1.total_growth += 777;
					}, 5000);
					self.page = 'ready';
				} else {
					console.log(self.z_type);
					Local.reqaObj(common.server() + ('pkg161202/prize' + (self.z_type === 'writers' ? '2' : '')), function (data) {
						console.log(data);

						if (data.code === -4) {
							self.page = 'over';
						} else {
							if (data.prizeList) {
								// for( var key in data.prizeList ){
								// 	self.items.push({
								// 		id: Number( key ),
								// 		name: data.prizeList[key]
								// 	});
								// };
								data.prizeList.forEach(function (a) {
									self.items.push({
										id: Number(a.prizeId),
										name: a.prizeName
									});
								});
							};
							self.page = 'ready';
						};
					}, [], function () {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				};
				break;
		}
	}

	exports.default = { data: data, act: act };

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(151);
	__vue_script__ = __webpack_require__(153);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\Swiper.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(179);
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
/* 151 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 152 */,
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			Card0: __webpack_require__(154),
			Card1: __webpack_require__(164),
			Card2: __webpack_require__(169),
			Card3: __webpack_require__(174)
		},
		props: {
			img: {},
			cardZero: {},
			cardOne: {},
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
					}];
				}
			},
			style: {
				default: ''
			},
			ease: {
				default: 'ease-out' },
			carousel: {
				default: false
			},
			sticky: {
				default: true
			},
			autoplay: {
				default: false
			},
			duration: {
				default: 400
			},
			interval: {
				default: 1000
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
					this.transition = this.duration + 'ms ' + this.ease;
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
				this.transition = this.duration + 'ms ' + this.ease;
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
				this.transition = this.duration + 'ms ' + this.ease;
				this.trainOffsetX = -this.currentOne * this.width;
				setTimeout(function () {
					_this4.transition = '0s';
					_this4.switching = false;
					_this4.inCycle = false;
				}, this.duration);
			},
			touchstart: function touchstart(e) {
				e.stopPropagation();
				console.log(this.inCycle);
				if (!this.inCycle && !this.switching) {
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
				if (this.inCycle && !this.switching) {
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
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(155);
	__vue_script__ = __webpack_require__(157);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\Cards\\Card0.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(163);
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
	    var id = "./Card0.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 155 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 156 */,
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			img: {},
			state: {}
		},
		components: {
			CanvasCounter: __webpack_require__(158)
		},
		data: function data() {
			return {};
		},
		watch: {
			'state.qqReader': function stateQqReader(nv, ov) {
				var options = {
					useEasing: true,
					useGrouping: true,
					separator: ',',
					decimal: '.',
					prefix: '',
					suffix: ''
				};
				var demo = new CountUp("qqReader", ov, nv, 0, 2.5, options);
				demo.start();
			},
			'state.mqq': function stateMqq(nv, ov) {
				var options = {
					useEasing: true,
					useGrouping: true,
					separator: ',',
					decimal: '.',
					prefix: '',
					suffix: ''
				};
				var demo = new CountUp("mqq", ov, nv, 0, 2.5, options);
				demo.start();
			}
		},
		computed: {},
		methods: {}
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(159);
	__vue_script__ = __webpack_require__(161);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\CanvasCounter.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(162);
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
	    var id = "./CanvasCounter.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 159 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 160 */,
/* 161 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function haha() {
		var score = function score(id, fontSize, fontWidth) {
			this.canvas = document.getElementById(id), this.fontSize = fontSize || "18";
			this.fontWidth = fontWidth || 18;
			this.ctx = this.canvas.getContext("2d");
			this.w = this.canvas.width;
			this.h = this.canvas.height;
			this.mub_list = [null, null, null, null, null, null, null, null, null], this.all_mub = "000000000";
		};

		score.prototype = {
			update: function update(n) {
				var len = this.mub_list.length - n.toString().length;
				for (var i = 0; i < len; i++) {
					n = " " + n;
				}
				var k2 = n.toString().split(""),
				    k1 = this.all_mub.toString().split(""),
				    j = 0;
				for (var i = 0; i < 9; i++) {
					if (k2[i] != " ") {
						k1[i] == " " && (k1[i] = "0");
						this.mub_list[i] = new a_mub(parseInt(k1[i]), this.fontWidth * j, parseInt(k2[i]), 9 - i, 30);
						j++;
					}
				}
				this.all_mub = n.toString();
			},
			draw: function draw() {
				var _self = this;
				this.stimer = requestAnimFrame(function () {
					_self.draw();
				});
				this.ctx.clearRect(0, 0, this.w, this.h);
				for (var i = 0; i < 9; i++) {
					if (this.mub_list[i] != null) {
						this.mub_list[i].dr(this.ctx, this.fontSize);
						this.mub_list[i].move();
					}
				}
			}
		};

		var a_mub = function a_mub(a, x, n, speed, h) {
			this.a = a;
			this.n = n;
			this.x = x;
			this.h = h;
			this.speed = speed;
			this.y = -this.h * 4 - 8;
			this.nub = [];
			this.__init();
		};
		a_mub.prototype = {
			__init: function __init() {
				this.nub[5] = this.a;
				for (var i = 6; i < 10; i++) {
					this.nub[i - 1] == 0 ? this.nub[i] = 9 : this.nub[i] = this.nub[i - 1] - 1;
				}
				for (var i = 4; i >= 0; i--) {
					this.nub[i + 1] == 9 ? this.nub[i] = 0 : this.nub[i] = this.nub[i + 1] + 1;
				}
			},
			dr: function dr(ctx, fontSize) {
				ctx.save();
				ctx.font = fontSize + "px arial";
				var gradient = ctx.createLinearGradient(0, 0, 0, this.h);
				ctx.shadowColor = "#000";
				ctx.shadowOffsetX = 1;
				ctx.shadowOffsetY = 1;
				gradient.addColorStop("0", "#fff");
				gradient.addColorStop("0.2", "#444");
				gradient.addColorStop("0.6", "#fff");
				gradient.addColorStop("0.8", "#444");
				gradient.addColorStop("1", "#fff");
				ctx.fillStyle = gradient;
				for (var i = 0; i < this.nub.length; i++) {
					var _y = this.y + i * this.h;
					if (_y > 0 && _y < 60) {
						ctx.fillText(this.nub[i], this.x, _y);
					}
				}
				ctx.restore();
			},
			move: function move() {
				if (this.n != this.nub[5]) {
					this.y += 7.5 / this.speed;
					if (this.h * 4 + 8 + this.y == this.h) {
						this.nub.splice(0, 0, this.nub.pop());
						this.y = -this.h * 4 - 8;
					}
				}
			}
		};

		window.requestAnimFrame = function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
				window.setTimeout(callback, 1000 / 60);
			};
		}();

		window.cancelAFrame = function () {
			return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
				window.clearTimeout(id);
			};
		}();

		var score1 = 11111;
		var s1 = new score("myCanvas", 28, 20);
		s1.update(score1);
		s1.draw();
		setInterval(function () {
			var d = score1 += 2118;
			s1.update(d);
		}, 2000);
	}
	exports.default = {
		props: ['act', 'img'],
		data: function data() {
			return {};
		},
		mounted: function mounted() {
			haha();
		},
		methods: {}

	};

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"CanvasCounter\" _v-17ca985d=\"\">\n\t<canvas unselectable=\"on\" id=\"myCanvas\" width=\"180\" height=\"30\" _v-17ca985d=\"\"></canvas>\n</div>\n";

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Card0\" _v-5babb6e0=\"\">\n\t<div class=\"banner\" style=\"background:url(img/red/banner.png);background-size:100% 100%;\" _v-5babb6e0=\"\">\n\t\t红包总发放量\n\t</div>\n\t<canvas-counter _v-5babb6e0=\"\"></canvas-counter>\n\t<div class=\"part_qq_reader\" _v-5babb6e0=\"\">\n\t\t<div class=\"part_left\" _v-5babb6e0=\"\">\n\t\t\t<img class=\"logo_qq_reader\" :src=\" img+'/red/logo_qq_reader.png' \" _v-5babb6e0=\"\">\n\t\t</div>\n\t\t<div class=\"part_right\" _v-5babb6e0=\"\">\n\t\t\t<p class=\"title\" _v-5babb6e0=\"\">QQ阅读发放量</p>\n\t\t\t<p id=\"qqReader\" _v-5babb6e0=\"\"></p>\n\t\t</div>\n\t</div>\n\t<div class=\"part_mqq\" _v-5babb6e0=\"\">\n\t\t<div class=\"part_left\" _v-5babb6e0=\"\">\n\t\t\t<img class=\"logo_mqq\" :src=\" img+'/red/logo_mqq.png' \" _v-5babb6e0=\"\">\n\t\t</div>\n\t\t<div class=\"part_right\" _v-5babb6e0=\"\">\n\t\t\t<p class=\"title\" _v-5babb6e0=\"\">QQ阅读发放量</p>\n\t\t\t<p id=\"mqq\" _v-5babb6e0=\"\"></p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(165);
	__vue_script__ = __webpack_require__(167);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\Cards\\Card1.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(168);
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
	    var id = "./Card1.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 165 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 166 */,
/* 167 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			img: {},
			state: {}
		},
		components: {},
		data: function data() {
			return {};
		},
		watch: {
			'state.qqReader': function stateQqReader(nv, ov) {
				var options = {
					useEasing: true,
					useGrouping: true,
					separator: ',',
					decimal: '.',
					prefix: '',
					suffix: ''
				};
				var demo = new CountUp("qqReader", ov, nv, 0, 2.5, options);
				demo.start();
			},
			'state.total_growth': function stateTotal_growth(nv, ov) {
				var options = {
					useEasing: true,
					useGrouping: true,
					separator: ',',
					decimal: '.',
					prefix: '',
					suffix: ''
				};
				var demo = new CountUp("total_growth", ov, nv, 0, 2.5, options);
				demo.start();
			}
		},
		computed: {},
		methods: {}
	};

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Card1\" _v-5bb9ce61=\"\">\n\t<div class=\"banner\" style=\"background:url(img/red/banner.png);background-size:100% 100%;\" _v-5bb9ce61=\"\">\n\t\tQQ阅读实时流量\n\t</div>\n\t<div class=\"part\" _v-5bb9ce61=\"\">\n\t\t<div class=\"part_left\" _v-5bb9ce61=\"\">\n\t\t\t<p class=\"top_title\" _v-5bb9ce61=\"\">实时DAU</p>\n\t\t\t<p class=\"bottom_title\" _v-5bb9ce61=\"\">0</p>\n\t\t</div>\n\t\t<div class=\"part_right\" _v-5bb9ce61=\"\">\n\t\t\t<p class=\"top_title\" _v-5bb9ce61=\"\">环比昨天涨幅</p>\n\t\t\t<p class=\"bottom_title\" _v-5bb9ce61=\"\">0%</p>\n\t\t</div>\n\t</div>\n\t<div class=\"part\" _v-5bb9ce61=\"\">\n\t\t<div class=\"part_left\" _v-5bb9ce61=\"\">\n\t\t\t<p class=\"top_title\" _v-5bb9ce61=\"\">实时新增人数</p>\n\t\t\t<p class=\"bottom_title\" _v-5bb9ce61=\"\">0</p>\n\t\t</div>\n\t\t<div class=\"part_right\" _v-5bb9ce61=\"\">\n\t\t\t<p class=\"top_title\" _v-5bb9ce61=\"\">累计新增人数</p>\n\t\t\t<p class=\"bottom_title\" id=\"total_growth\" _v-5bb9ce61=\"\"></p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(170);
	__vue_script__ = __webpack_require__(172);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\Cards\\Card2.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(173);
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
	    var id = "./Card2.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 170 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 171 */,
/* 172 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			img: {},
			state: {}
		},
		components: {},
		data: function data() {
			return {};
		},
		watch: {
			'state.qqReader': function stateQqReader(nv, ov) {
				var options = {
					useEasing: true,
					useGrouping: true,
					separator: ',',
					decimal: '.',
					prefix: '',
					suffix: ''
				};
				var demo = new CountUp("qqReader", ov, nv, 0, 2.5, options);
				demo.start();
			},
			'state.total_growth': function stateTotal_growth(nv, ov) {
				var options = {
					useEasing: true,
					useGrouping: true,
					separator: ',',
					decimal: '.',
					prefix: '',
					suffix: ''
				};
				var demo = new CountUp("total_growth", ov, nv, 0, 2.5, options);
				demo.start();
			}
		},
		computed: {},
		methods: {}
	};

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Card2\" _v-5bc7e5e2=\"\">\n\t<div class=\"banner\" style=\"background:url(img/red/banner.png);background-size:100% 100%;\" _v-5bc7e5e2=\"\">\n\t\t活动页面流量（UV）\n\t</div>\n\t<div class=\"part\" _v-5bc7e5e2=\"\">\n\t\t<div class=\"part_left\" _v-5bc7e5e2=\"\">\n\t\t\t\n\t\t</div>\n\t\t<div class=\"part_middle\" _v-5bc7e5e2=\"\">\n\t\t\t<p class=\"_28\" _v-5bc7e5e2=\"\">累计访问量</p>\n\t\t</div>\n\t\t<div class=\"part_right\" _v-5bc7e5e2=\"\">\n\t\t\t<p class=\"_28\" _v-5bc7e5e2=\"\">峰值</p>\n\t\t</div>\n\t</div>\n\t<div class=\"part\" _v-5bc7e5e2=\"\">\n\t\t<div class=\"part_left\" _v-5bc7e5e2=\"\">\n\t\t\t<img class=\"logo_blue\" :src=\" img+'/red/logo_qq_reader.png' \" _v-5bc7e5e2=\"\">\n\t\t</div>\n\t\t<div class=\"part_middle\" _v-5bc7e5e2=\"\">\n\t\t\t<p class=\"_36\" _v-5bc7e5e2=\"\">0</p>\n\t\t</div>\n\t\t<div class=\"part_right\" _v-5bc7e5e2=\"\">\n\t\t\t<p class=\"_36\" _v-5bc7e5e2=\"\">0</p>\n\t\t\t<p class=\"_24\" _v-5bc7e5e2=\"\">(时间：20:40)</p>\n\t\t</div>\n\t</div>\n\t<div class=\"part\" _v-5bc7e5e2=\"\">\n\t\t<div class=\"part_left\" _v-5bc7e5e2=\"\">\n\t\t\t<img class=\"logo_red\" :src=\" img+'/red/logo_mqq.png' \" _v-5bc7e5e2=\"\">\t\n\t\t</div>\n\t\t<div class=\"part_middle\" _v-5bc7e5e2=\"\">\n\t\t\t<p class=\"_36\" _v-5bc7e5e2=\"\">0</p>\n\t\t</div>\n\t\t<div class=\"part_right\" _v-5bc7e5e2=\"\">\n\t\t\t<p class=\"_36\" _v-5bc7e5e2=\"\">0</p>\n\t\t\t<p class=\"_24\" _v-5bc7e5e2=\"\">(时间：20:40)</p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(175);
	__vue_script__ = __webpack_require__(177);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\Cards\\Card3.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(178);
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
	    var id = "./Card3.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 175 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 176 */,
/* 177 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			img: {},
			state: {}
		},
		components: {},
		data: function data() {
			return {};
		},
		watch: {
			'state.qqReader': function stateQqReader(nv, ov) {
				var options = {
					useEasing: true,
					useGrouping: true,
					separator: ',',
					decimal: '.',
					prefix: '',
					suffix: ''
				};
				var demo = new CountUp("qqReader", ov, nv, 0, 2.5, options);
				demo.start();
			},
			'state.total_growth': function stateTotal_growth(nv, ov) {
				var options = {
					useEasing: true,
					useGrouping: true,
					separator: ',',
					decimal: '.',
					prefix: '',
					suffix: ''
				};
				var demo = new CountUp("total_growth", ov, nv, 0, 2.5, options);
				demo.start();
			}
		},
		computed: {},
		methods: {}
	};

/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Card3\" _v-5bd5fd63=\"\">\n\t<div class=\"banner\" style=\"background:url(img/red/banner.png);background-size:100% 100%;\" _v-5bd5fd63=\"\">\n\t\tQQ阅读活动页行为\n\t</div>\n\t<div class=\"part\" _v-5bd5fd63=\"\">\n\t\t<p class=\"title\" _v-5bd5fd63=\"\">累计打开QQ阅读人数</p>\n\t</div>\n\t<div class=\"part\" _v-5bd5fd63=\"\">\n\t\t\n\t</div>\n</div>\n";

/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Swiper__\" _v-3715f3ef=\"\">\n\t<div class=\"Swiper\" ref=\"swiper\" @touchstart=\"touchstart($event)\" @touchmove=\"touchmove($event)\" @touchend=\"touchend($event)\" @touchcancel=\"touchend($event)\" _v-3715f3ef=\"\">\n\t\t<ul class=\"train\" :class=\" carousel?'carousel':'' \" :style=\" \n\t\t\t\t'transform:translate3d('+trainOffsetX+'px,0,0);transition:'+transition+';'+\n\t\t\t\t'-webkit-transform:translate3d('+trainOffsetX+'px,0,0);-webkit-transition:'+transition+';' \" _v-3715f3ef=\"\">\n\t\t\t<li class=\"item\" v-if=\"carousel\" style=\"background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;\" _v-3715f3ef=\"\">\n\t\t\t\t{{items[items.length-2].name}}\n\t\t\t</li>\n\t\t\t<li class=\"item\" v-if=\"carousel\" style=\"background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;\" _v-3715f3ef=\"\">\n\t\t\t\t{{items[items.length-1].name}}\n\t\t\t</li>\n\n\t\t\t<li :class=\" 'item '+(i===currentOne?'active':'') \" v-for=\"(item,i) in items\" :key=\"item.id\" style=\"background:url(img/red/card.png) no-repeat 0% 100%;background-size:100% 100%;\" _v-3715f3ef=\"\">\n\t\t\t\t<card0 v-if=\"i===0\" :state=\"cardZero\" :img=\"img\" _v-3715f3ef=\"\"></card0>\n\t\t\t\t<card1 v-if=\"i===1\" :state=\"cardOne\" :img=\"img\" _v-3715f3ef=\"\"></card1>\n\t\t\t\t<card2 v-if=\"i===2\" :state=\"cardOne\" :img=\"img\" _v-3715f3ef=\"\"></card2>\n\t\t\t\t<card3 v-if=\"i===3\" :state=\"cardOne\" :img=\"img\" _v-3715f3ef=\"\"></card3>\n\t\t\t</li>\n\n\t\t\t<li class=\"item\" v-if=\"carousel\" style=\"background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;\" _v-3715f3ef=\"\">\n\t\t\t\t{{items[0].name}}\n\t\t\t</li>\n\t\t\t<li class=\"item\" v-if=\"carousel\" style=\"background:url(img/scotches.png) no-repeat 0% 100%;background-size:2.4rem auto;\" _v-3715f3ef=\"\">\n\t\t\t\t{{items[1].name}}\n\t\t\t</li>\n\t\t</ul>\n\n\t</div>\n\t<ul class=\"pagination\" _v-3715f3ef=\"\">\n\t\t<li v-for=\"(item,i) in items\" class=\"dot\" :class=\" 'item '+(i===currentOne?'active':'') \" @click=\"toCard(i)\" _v-3715f3ef=\"\">\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = "\n\t<div id=\"root\" _v-10f57717=\"\">\n\t\t<mask-loading v-show=\" page==='pending' \" _v-10f57717=\"\"></mask-loading>\n\t\t<mask-over v-show=\" page==='over' \" _v-10f57717=\"\"></mask-over>\n\t\t\n\t\t<div class=\"main\" v-show=\" page==='ready' \" style=\"background:url(img/red/bg.png);background-size:100% 100%;\" _v-10f57717=\"\">\n\t\t\t\n\t\t\t<swiper :img=\"img\" :card-zero=\"card0\" :card-one=\"card1\" _v-10f57717=\"\"></swiper>\n\t\t\t\n\t\t</div>\n\n<!-- \t\t<debugger\n\t\t:state=\"$data\"></debugger> -->\n\t</div>\n";

/***/ }
/******/ ]);