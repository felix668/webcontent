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


	Vue.component('app', __webpack_require__(139));

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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
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
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
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
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	__webpack_require__(140);
	__vue_script__ = __webpack_require__(142);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] act161203\\adr\\src\\_yyb\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(147);
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
/* 140 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 141 */,
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	__webpack_require__(143);

	var _store = __webpack_require__(145);

	exports.default = {
		components: {
			MaskLoading: __webpack_require__(19),
			Swiper: __webpack_require__(38),
			FreeBooks: __webpack_require__(67)

		},
		data: function data() {
			return _store.data;
		},
		computed: {},
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
/* 143 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 144 */,
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {
		dev: false,
		yyb: true,

		page: 'pending',

		what: function () {
			var el = document.querySelector('[what]');
			var val = el.getAttribute('what');
			return val;
		}(),

		current: 0,

		day: 0,
		stage: 0,

		total: 0,

		writers: __webpack_require__(146).default

	};

	function act(action) {
		var self = this;
		switch (action.type) {
			case 'INIT':
				// window.addEventListener('load',()=>{
				// 	self.page = 'ready';
				// });
				//Local.forceLog( common.param('act_f'),self.what+'_enter' );
				common.ajax('https://event.reader.qq.com/andmain/pkg161203/sum?act_f=' + common.param('act_f') + '&act_b=' + self.what + '_enter', function () {}, function () {});

				common.ajax('https://event.reader.qq.com/andmain/pkg161203/init', function (data) {
					console.log(data);
					self.total = data.totalFreeNumber;
					self.page = 'ready';
				}, function () {});
				break;
			case 'SWITCH':
				this.current = action.n;
				break;
			case 'PARTICIPATE':
				//Local.forceLog( common.param('act_f'),self.what+'_btn' );
				common.ajax('https://event.reader.qq.com/andmain/pkg161203/sum?act_f=' + common.param('act_f') + '&act_b=' + self.what + '_btn', function () {}, function () {});
				var href = function () {
					if (env.pt === 'adr') {
						return 'http://iyuedu.qq.com/event/act161203/adr/index.html?act_f=161222';
					} else {
						return 'https://yuedu.reader.qq.com/event/act161203/ios/index.html?act_f=161222';
					}
				}();
				// bnative.openPage(
				// 	href,
				// 	'111'
				// );
				// JsBridge.call("getAppInfo", { packagenames:"com.tencent.mm" }, function(ret) {
				// 	if( ret.install ){

				// 	}else{
				// 		setTimeout(()=>{
				// 			location.href = 'tmast://appdetails?pname=com.qq.reader&scene=20040102&oplist=1;2&via=ANDROIDZT.YYB.CAMPAIGN.$1_10254&iphoneid=487608658';
				// 		},2000);
				// 	}
				// });

				JsBridge.call("getAppInfo", { packagenames: "com.qq.reader" }, function (ret) {
					var data = JSON.parse(ret.data || "{}");
					if (data["com.qq.reader"] && data["com.qq.reader"].install) {
						//console.log('installed');
						bnative.openPage(href, '111');
					} else {
						setTimeout(function () {
							location.href = 'tmast://appdetails?pname=com.qq.reader&scene=20040102&oplist=1;2&via=ANDROIDZT.YYB.CAMPAIGN.$1_10254&iphoneid=487608658';
						}, 300);
					}
				});
				break;
		}
	}

	exports.data = data;
	exports.act = act;

/***/ },
/* 146 */
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
/* 147 */
/***/ function(module, exports) {

	module.exports = "\n\t<div id=\"root\" _v-d21fe532=\"\">\n\t\t<mask-loading v-show=\" page==='pending' \" _v-d21fe532=\"\"></mask-loading>\n\t\t\n\t\t<div class=\"main\" v-show=\" page==='ready' \" _v-d21fe532=\"\">\n\t\t\t\n\t\t\t<div class=\"yyb\" _v-d21fe532=\"\">\n\t\t\t\t<swiper :items=\" writers \" :act=\"act\" :stage=\"stage\" :day=\"day\" :yyb=\"true\" _v-d21fe532=\"\"></swiper>\n\n\t\t\t\t<div class=\"lower_part\" style=\"background:url(img/main_bg_2.png);background-size:100% auto;\" _v-d21fe532=\"\">\n\t\t\t\t\t<img class=\"text_snowman\" :src=\" 'img/text_snowman.png' \" _v-d21fe532=\"\">\n\n\t\t\t\t\t<free-books :writers=\" writers \" :current=\" current \" :total=\"total\" :act=\"act\" :yyb=\"true\" _v-d21fe532=\"\"></free-books>\n\n\t\t\t\t\t<p class=\"_how_many\" _v-d21fe532=\"\">已有<span _v-d21fe532=\"\">{{total}}</span>人获得限时免费</p>\n\t\t\t\t\t<a class=\"btn\" @click=\"act({type:'PARTICIPATE'})\" _v-d21fe532=\"\">\n\t\t\t\t\t\t<img class=\"btn_participate\" :src=\" 'img/btn_participate.png' \" _v-d21fe532=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t\t<img class=\"trees\" :src=\" 'img/trees.png' \" _v-d21fe532=\"\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\n<!-- \t\t<debugger\n\t\t:state=\"$data\"></debugger> -->\n\t</div>\n";

/***/ }
/******/ ]);