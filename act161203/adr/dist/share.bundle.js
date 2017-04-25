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


	Vue.component('app', __webpack_require__(123));

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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
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
/* 29 */,
/* 30 */,
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
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
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
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(124);
	__vue_script__ = __webpack_require__(126);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\_share\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(138);
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
/* 124 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 125 */,
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(127);

	exports.default = {
		components: {
			Debugger: __webpack_require__(13),
			MaskLoading: __webpack_require__(19),
			MaskOver: __webpack_require__(24),

			MyVideo: __webpack_require__(61),

			Rules: __webpack_require__(72),
			MaskDownload: __webpack_require__(128),

			List: __webpack_require__(133)
		},
		data: function data() {
			return _store.data;
		},
		computed: {
			books: function books() {
				return this.writers[this.current].books;
			}
		},
		watch: {},
		created: function created() {},
		mounted: function mounted() {
			this.act({ type: 'INIT_SHARE' });
		},
		methods: {
			act: _store.act,
			_TO_BOOK: function _TO_BOOK(bid) {
				this.act({
					type: '_TO_BOOK',
					bid: bid
				});
			}
		}
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {
		dev: true,
		page: 'pending',

		what: function () {
			var el = document.querySelector('[what]');
			var val = el.getAttribute('what');
			return val;
		}(),

		uid: '',
		nickname: '游客用户',
		avatar: 'img/default.jpg',
		current: 0,

		co: 0,

		total: 0,

		mask: false,

		writers: __webpack_require__(12).default
	};

	function act(action) {
		var _this = this;

		var self = this;
		switch (action.type) {
			case 'SWITCH':
				this.co = action.i;
				break;
			case 'INIT_SHARE':
				if (self.dev) {
					self.current = 1;
					//self.nickname = '--';
					self.page = 'ready';
				} else {

					Local.forceLog(common.param('act_f'), self.what + '_enter_' + env.pt);
					// common.ajax(
					// 	'https://event.reader.qq.com/andmain/pkg161203/sum?act_f='+common.param('act_f')+'&act_b='+self.what+'_enter_'+env.pt,
					// 	function(){},
					// 	function(){}
					// );

					sns.share({
						cover: location.href.replace(/act161203.+/, 'act161203/adr/img/qqreader.png'),
						url: location.href,
						title: 'QQ阅读6周年，大神请客，经典免费读',
						desc: '我领到免费神作，你也快来吧'
					}, '111');

					self.current = Number(common.param('aid'));
					self.co = self.current;

					common.ajax('https://event.reader.qq.com/andmain/pkg161203/shareInit?uid=' + common.param('uid') + '&aid=' + common.param('aid'), function (data) {
						console.log(data);
						self.current = Number(common.param('aid'));
						if (data.userNick) {
							self.nickname = data.userNick;
						};
						if (data.userAvor) {
							self.avatar = data.userAvor;
						};
						self.total = data.totalFreeNumber;
						if (data.code === -4) {
							self.page = 'over';
						} else {
							self.page = 'ready';
						};
					}, function () {});
				}
				break;

			case 'PLAY_VIDEO':
				Local.forceLog(common.param('act_f'), self.what + '_play_' + action.i + '_' + env.pt);
				// common.ajax(
				// 	'https://event.reader.qq.com/andmain/pkg161203/sum?act_f='+common.param('act_f')+'&act_b='+self.what+'_play_'+action.i+'_'+env.pt,
				// 	function(){},
				// 	function(){}
				// );
				break;

			case 'PARTICIPATE':
				Local.forceLog(common.param('act_f'), self.what + '_btn' + '_' + env.pt);
				// common.ajax(
				// 	'https://event.reader.qq.com/andmain/pkg161203/sum?act_f='+common.param('act_f')+'&act_b='+self.what+'_btn_'+env.pt,
				// 	function(){},
				// 	function(){}
				// );
				var href = function () {
					if (env.pt === 'adr') {
						return 'http://iyuedu.qq.com/event/act161203/adr/index.html?act_f=161222';
					} else {
						return 'https://yuedu.reader.qq.com/event/act161203/ios/index.html?act_f=161222';
					}
				}();
				bnative.openPage(href, '111');
				setTimeout(function () {
					_this.mask = true;
				}, 2000);
				break;
			case 'DOWNLOAD':
				bnative.downLoad('111', '10003531');
				break;
			case 'HIDE':
				this.mask = false;
				break;
			case '_TO_BOOK':
				bnative.toBookDetail(action.bid);
				setTimeout(function () {
					_this.mask = true;
				}, 2000);
				break;
		}
	}

	exports.data = data;
	exports.act = act;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(129);
	__vue_script__ = __webpack_require__(131);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\lib\\MaskDownload.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(132);
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
/* 129 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 130 */,
/* 131 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['act'],
		methods: {
			hide: function hide() {
				this.act({
					type: 'HIDE'
				});
			},
			CONFIRM: function CONFIRM() {
				this.act({
					type: 'DOWNLOAD'
				});
			}
		}
	};

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskDownload\" _v-48712d6a=\"\">\n\t<div class=\"mask-panel\" _v-48712d6a=\"\">\n\t\t<div class=\"top\" _v-48712d6a=\"\">下载QQ阅读，畅读海量小说</div>\n\t\t<p class=\"middle\" _v-48712d6a=\"\">如果还未安装QQ阅读，你可以：</p>\n\t\t<ul class=\"bottom\" _v-48712d6a=\"\">\n\t\t\t<li class=\"confirm\" @click=\"CONFIRM\" _v-48712d6a=\"\">下载QQ阅读</li>\n\t\t\t<li class=\"cancel\" @click=\"hide\" _v-48712d6a=\"\">取消</li>\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(134);
	__vue_script__ = __webpack_require__(136);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\components\\List.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(137);
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
	    var id = "./List.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 134 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 135 */,
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(42);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		props: {
			writers: {},
			co: {},
			act: {}
		},
		data: function data() {
			return (0, _defineProperty3.default)({
				contentW: 0,
				trainW: 0,

				switching: false,
				inCycle: false,
				moveCount: 0,
				scrolling: false,
				trainOffsetX: 0,
				offset: 0,
				X1: 0,
				X2: 0,
				Y1: 0,
				Y2: 0,

				currentOne: 0,
				transition: '0s'
			}, 'offset', 0);
		},
		watch: {
			co: function co(n) {
				if (n < 4) {
					this.transition = '1000ms';
					this.trainOffsetX = 0;
				} else {
					this.transition = '1000ms';
					this.trainOffsetX = -(this.trainW - this.contentW);
				}
			}
		},
		mounted: function mounted() {
			var _this = this;

			var self = this;
			this.setWidth();

			window.addEventListener('load', function () {
				_this.setWidth();
			});
			window.addEventListener('resize', function () {
				setTimeout(function () {
					_this.setWidth();
				}, 50);
			});
		},
		methods: {
			setWidth: function setWidth() {
				this.contentW = Number(document.defaultView.getComputedStyle(this.$refs.content).width.replace(/px/, ''));
				this.trainW = Number(document.defaultView.getComputedStyle(this.$refs.train).width.replace(/px/, ''));
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

						if (!this.scrolling) {
							this.X2 = e.changedTouches[0].pageX;
							var distance = this.X2 - this.X1;
							this.X1 = this.X2;
							this.transition = '0s';
							if (this.trainOffsetX + distance >= 0) {
								this.trainOffsetX = 0;
							} else if (this.trainOffsetX + distance <= -(this.trainW - this.contentW)) {
								this.trainOffsetX = -(this.trainW - this.contentW);
							} else {
								this.trainOffsetX += distance;
							}
							this.offset += distance;
						}
					}
				}
			},
			touchend: function touchend(e) {
				e.stopPropagation();
				if (this.inCycle && !this.scrolling) {
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2 - this.X1;

					this.trainOffsetX += distance;
					this.switching = false;
					this.inCycle = false;
				} else {
					this.switching = false;
					this.inCycle = false;
				}
			}
		}
	};

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"List\" _v-575e4e56=\"\">\n\t<div class=\"content\" ref=\"content\" _v-575e4e56=\"\">\n\t\t<div class=\"train\" :class=\" co>=4?'right':'' \" :style=\" 'transition:'+transition+';transform:translate3d('+trainOffsetX+'px,0,0);' \" @touchstart=\"touchstart($event)\" @touchmove=\"touchmove($event)\" @touchend=\"touchend($event)\" ref=\"train\" _v-575e4e56=\"\">\n\t\t\t<div class=\"triangle\" :style=\" 'transform: translate3d('+co*100+'%,0,0);' \" _v-575e4e56=\"\">\n\t\t\t\t<img :src=\" 'img/share/triangle.png' \" _v-575e4e56=\"\">\n\t\t\t</div>\n\t\t\t<div class=\"item\" v-for=\"(a,i) in writers\" _v-575e4e56=\"\">\n\t\t\t\t<div class=\"upper\" _v-575e4e56=\"\">\n\t\t\t\t\t<div class=\"avatar\" :class=\" i===co?'active':'' \" @click=\"act({type:'SWITCH',i:i})\" _v-575e4e56=\"\">\n\t\t\t\t\t\t<img :src=\" 'img/cards/'+i+'.jpg' \" _v-575e4e56=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"name\" _v-575e4e56=\"\">{{a.name}}</p>\n\t\t\t</div>\n\t\t\t<div style=\"clear:both\" _v-575e4e56=\"\"></div>\n\t\t</div>\n\t</div>\n</div>\t\n";

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "\n\t<div id=\"root\" _v-609dc104=\"\">\n\t\t<mask-loading v-show=\" page==='pending' \" _v-609dc104=\"\"></mask-loading>\n\t\t<mask-over v-show=\" page==='over' \" _v-609dc104=\"\"></mask-over>\n\t\t\n\t\t<div class=\"main\" v-show=\" page==='ready' \" style=\"background:url(img/share/bg_7.png);background-size:100% auto;\" _v-609dc104=\"\">\n\t\t\t<img class=\"logo\" :src=\" 'img/logo.png' \" _v-609dc104=\"\">\n\n\t\t\t<mask-download v-show=\"mask\" :act=\"act\" _v-609dc104=\"\"></mask-download>\n\n\t\t\t<div class=\"info\" _v-609dc104=\"\">\n\t\t\t\t<div class=\"avatar\" _v-609dc104=\"\">\n\t\t\t\t\t<img :src=\" avatar \" _v-609dc104=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text_part\" _v-609dc104=\"\"><span _v-609dc104=\"\">{{nickname}}</span>获得了{{writers[current].name}}大神{{writers[current].books.length}}本书籍的限免阅读权，你也快来参加吧~</div>\n\t\t\t</div>\n\n\t\t\t<list :writers=\"writers\" :co=\"co\" :act=\"act\" _v-609dc104=\"\"></list>\n\n\t\t\t<div class=\"books_container\" _v-609dc104=\"\">\n\t\t\t\t<div class=\"books\" v-for=\"(a,i) in writers\" v-show=\" i===co \" _v-609dc104=\"\">\n\t\t\t\t\t<div class=\"book\" v-for=\"b in a.books\" _v-609dc104=\"\">\n\t\t\t\t\t\t<div class=\"cover\" @click=\"act({type:'PARTICIPATE'})\" _v-609dc104=\"\">\n\t\t\t\t\t\t\t<img class=\"cover_img\" :src=\" 'img/covers/x_'+b.bid+'.jpg' \" _v-609dc104=\"\">\n<!-- \t\t\t\t\t\t\t<img class=\"lock\" :src=\" 'img/lock.png' \"\n\t\t\t\t\t\t\tv-show=\" !yyb&&!a.unlocked \"/>\n\t\t\t\t\t\t\t<p class=\"orange\"\n\t\t\t\t\t\t\tv-show=\" !yyb&&a.unlocked \">已7天限免</p> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"title\" _v-609dc104=\"\">{{b.title}}</p>\n\t\t\t\t\t\t<p class=\"price\" _v-609dc104=\"\">{{b.price}}元</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n<!-- \t\t\t<div class=\"books\">\n\t\t\t\t<div class=\"book\"\n\t\t\t\tv-for=\"a in books\">\n\t\t\t\t\t<div class=\"cover\"\n\t\t\t\t\t@click=\"act({type:'PARTICIPATE'})\">\n\t\t\t\t\t\t<img class=\"cover_img\" :src=\" 'img/covers/x_'+a.bid+'.jpg' \"/>\n\t\t\t\t\t\t<img class=\"lock\" :src=\" 'img/lock.png' \"\n\t\t\t\t\t\tv-show=\" !unlocked \"/>\n\t\t\t\t\t\t<p class=\"orange\"\n\t\t\t\t\t\tv-show=\"unlocked\">已加入书架</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"title\">{{a.title}}</p>\n\t\t\t\t\t<p class=\"price\">{{a.price}}元</p>\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t\t<div class=\"block\" _v-609dc104=\"\">\n\t\t\t\t<img class=\"participate\" :src=\" 'img/share/participate_2.png' \" @click=\"act({type:'PARTICIPATE'})\" _v-609dc104=\"\">\n\n\t\t\t\t<p class=\"total\" _v-609dc104=\"\">已有<span _v-609dc104=\"\">{{total}}</span>人获得限时免费</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"video_block\" :style=\" 'background:url(img/blurred_bg/'+current+'.jpg);background-size:100% 100%;' \" _v-609dc104=\"\">\n\t\t\t\t<!-- <img class=\"light\" :src=\" 'img/light.png' \"/> -->\n\t\t\t\t<div class=\"content\" _v-609dc104=\"\">\n\t\t\t\t\t<p class=\"name\" _v-609dc104=\"\">{{writers[current].name}}</p>\n\t\t\t\t\t<p class=\"desc\" _v-609dc104=\"\">{{writers[current].desc}}</p>\n\t\t\t\t\t<my-video :video=\"writers[current]\" :current=\"current\" :act=\"act\" _v-609dc104=\"\"></my-video>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<p class=\"text_enter\" @click=\"act({type:'PARTICIPATE'})\" _v-609dc104=\"\">去QQ阅读观看更多大神祝福视频 &gt;&gt;</p>\n\n\t\t\t<rules _v-609dc104=\"\"></rules>\n\t\t</div>\n\n<!-- \t\t<debugger\n\t\t:state=\"$data\"></debugger> -->\n\t</div>\n";

/***/ }
/******/ ]);