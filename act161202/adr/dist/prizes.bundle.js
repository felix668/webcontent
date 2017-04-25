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
			App: __webpack_require__(132)
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
/* 131 */,
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(133);
	__vue_script__ = __webpack_require__(135);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\_prizes\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(143);
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
/* 133 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 134 */,
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _storePrizes = __webpack_require__(136);

	var _storePrizes2 = _interopRequireDefault(_storePrizes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			Debugger: __webpack_require__(16),
			MaskLoading: __webpack_require__(21),
			MaskOver: __webpack_require__(26),

			ListPrizes: __webpack_require__(138),
			Lottery: __webpack_require__(126)
		},
		data: function data() {
			return _storePrizes2.default.data;
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
			act: _storePrizes2.default.act
		}
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _store = __webpack_require__(13);

	var _base = __webpack_require__(14);

	var _base2 = _interopRequireDefault(_base);

	var _prizes = __webpack_require__(137);

	var _prizes2 = _interopRequireDefault(_prizes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store.createStore)(_base2.default.data, _base2.default.act).merge(_prizes2.default.data, _prizes2.default.act);

	exports.default = store;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var data = {

		prizes: __webpack_require__(125).default,

		items: []

	};

	function act(action) {
		var self = this;
		switch (action.type) {

			case 'INIT':
				if (self.dev) {
					var _self$items;

					(_self$items = self.items).push.apply(_self$items, _toConsumableArray(self.prizes));
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
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(139);
	__vue_script__ = __webpack_require__(141);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161202\\adr\\src\\lib\\ListPrizes.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(142);
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
	    var id = "./ListPrizes.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 139 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 140 */,
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(45);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _props$components$dat;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (_props$components$dat = {
		props: {
			items: {},
			img: {},
			act: {},
			ios: {}
		},
		components: {},
		data: function data() {
			return {};
		},
		watch: {},
		computed: {},
		created: function created() {},
		mounted: function mounted() {}
	}, (0, _defineProperty3.default)(_props$components$dat, "watch", {}), (0, _defineProperty3.default)(_props$components$dat, "methods", {}), _props$components$dat);

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ListPrizes\" _v-1a5b3556=\"\">\n\t<div class=\"none\" v-if=\"items.length===0\" _v-1a5b3556=\"\">您还没有任何奖品</div>\n\t<div class=\"item\" v-for=\"a in items\" _v-1a5b3556=\"\">\n\t\t<img class=\"thumb\" :src=\" img+'/prizes_/'+a.id+(a.name==='200阅券'?'_ios':'')+'.png' \" _v-1a5b3556=\"\">\n\t\t<div class=\"name\" _v-1a5b3556=\"\">\n\t\t\t{{a.name}}\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "\n\t<div id=\"root\" _v-5343e5f5=\"\">\n\t\t<mask-loading v-show=\" page==='pending' \" _v-5343e5f5=\"\"></mask-loading>\n\t\t<mask-over v-show=\" page==='over' \" _v-5343e5f5=\"\"></mask-over>\n\t\t\n\t\t<div class=\"main\" v-show=\" page==='ready' \" _v-5343e5f5=\"\">\n\t\t\t\n\t\t\t<list-prizes :items=\"items\" :img=\"img\" :ios=\"ios\" _v-5343e5f5=\"\"></list-prizes>\n\t\t\t\n\t\t</div>\n\n<!-- \t\t<debugger\n\t\t:state=\"$data\"></debugger> -->\n\t</div>\n";

/***/ }
/******/ ]);