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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/act170104/adr/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 169);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
	data: function () {
		return {};
	},
	mounted: function () {}
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(4);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', function () {

	window.rem = function () {};
	var rem = window.rem;

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
		rem.val = 100 * w / 750;
		rem.h = h;
		//document.getElementsByClassName('container')[0].style.height = h+'px';
		console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
	}
	setRem();
	window.addEventListener('resize', setRem);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(5)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(7),
  /* scopeId */
  "data-v-2dd3aeb2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MaskLoading"
  }, [_c('p', {
    staticClass: "_text"
  }, [_vm._v("加载中...")])])
}]}

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function createStore(modules) {

	var state = {};
	var reducers = [];
	modules.forEach(function (a) {
		for (var key in a.state) {
			state[key] = a.state[key];
		};
		reducers.push(a.reducer);
	});

	var store = {
		state: state,
		act: $act,
		dispatch: $act,
		enhance: enhance,
		merge: enhance
	};
	//console.log(store)
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
			a.call(vm, store.state, action);
		});
	}
}

exports.createStore = createStore;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(93)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(153),
  /* scopeId */
  "data-v-765585a9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _vue = __webpack_require__(166);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = new _vue2.default({
	el: '#root',
	components: {
		App: __webpack_require__(118)
	},
	template: '<app></app>'
});

/***/ }),
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
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_red_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_red_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__store_store_red_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
	components: {
		//Debugger: require('../lib/Debugger.vue'),
		MaskLoading: __webpack_require__(6),
		//MaskOver: require('../lib/MaskOver.vue'),

		Swiper: __webpack_require__(123)

		//Rules: require('../lib/Rules.vue'),
		//FooterFixed: require('../lib/FooterFixed.vue')
	},
	data: function () {
		return __WEBPACK_IMPORTED_MODULE_0__store_store_red_js___default.a.state;
	},
	computed: {},
	watch: {},
	created: function () {},
	mounted: function () {
		this.act({ type: 'INIT' });
		//console.log(this)
	},
	methods: {
		act: __WEBPACK_IMPORTED_MODULE_0__store_store_red_js___default.a.act
	}
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var arr = [];
var uid = 0;

var img = new Image();
img.src = './img/red/panel.png';

function haha(el) {

	var Score = function (el, fontSize, fontWidth) {
		this.canvas = el;
		this.fontSize = fontSize || "18";
		this.fontWidth = fontWidth || 18;
		this.ctx = this.canvas.getContext("2d");
		this.w = this.canvas.width;
		this.h = this.canvas.height;
		this.mub_list = [null, null, null, null, null, null, null, null], this.all_mub = "00000000";
	};

	Score.prototype = {
		update: function (n) {
			var len = this.mub_list.length - n.toString().length;
			for (var i = 0; i < len; i++) {
				n = " " + n;
			}
			var k2 = n.toString().split(""),
			    k1 = this.all_mub.toString().split(""),
			    j = 0;
			for (var i = 0; i < 8; i++) {
				if (k2[i] != " ") {
					k1[i] == " " && (k1[i] = "0");
					this.mub_list[i] = new Mub(parseInt(k1[i]), 16 + this.fontWidth * j, parseInt(k2[i]), 1.5, 65);
					j++;
				} else {
					this.mub_list[i] = new Mub(0, 16 + this.fontWidth * j, 0, 9 - i, 65);
					j++;
				}
			}
			this.all_mub = n.toString();
		},
		draw: function () {
			var self = this;
			this.stimer = requestAnimFrame(function () {
				self.draw();
			});
			this.ctx.clearRect(0, 0, this.w, this.h);
			for (let i = 0; i < 8; i++) {
				this.ctx.drawImage(img, 4 + 61 * i, 0);
			};
			this.mub_list.forEach(a => {
				if (a !== null) {
					a.draw(this.ctx, this.fontSize);
					a.move();
				}
			});
			// for( let i = 0; i<8; i++ ){
			//     if (this.mub_list[i] != null) {
			//         this.mub_list[i].draw(this.ctx,this.fontSize);
			//         this.mub_list[i].move();
			//     }
			// }
		}
	};

	var Mub = function (a, x, n, speed, h) {
		this.a = a; //µ±Ç°Í£Ö¹µÄÊý×Ö
		this.n = n; //¸üÐÂµ½µÄÊý×Ö
		this.x = x; //ºá×ø±ê
		this.h = h;
		this.speed = speed; //×ª¶¯ËÙ¶È
		this.y = -this.h * 4 - 8;
		this.nub = [];
		this.__init();
	};
	Mub.prototype = {
		__init: function () {
			this.nub[5] = this.a;
			for (var i = 6; i < 10; i++) {
				this.nub[i - 1] == 0 ? this.nub[i] = 9 : this.nub[i] = this.nub[i - 1] - 1;
			}
			for (var i = 4; i >= 0; i--) {
				this.nub[i + 1] == 9 ? this.nub[i] = 0 : this.nub[i] = this.nub[i + 1] + 1;
			}
		},
		draw: function (ctx, fontSize) {
			ctx.save();
			ctx.font = fontSize + "px arial";
			//       var gradient = ctx.createLinearGradient(0, 0, 0, this.h);
			// ctx.shadowColor = "#000";
			//       ctx.shadowOffsetX = 1;
			//       ctx.shadowOffsetY = 1;
			//       gradient.addColorStop("0", "#fff");
			//       gradient.addColorStop("0.2", "#444");
			//       gradient.addColorStop("0.6", "#fff");
			//       gradient.addColorStop("0.8", "#444");
			//       gradient.addColorStop("1", "#fff");
			ctx.fillStyle = '#774445';
			for (var i = 0; i < this.nub.length; i++) {
				var _y = this.y + i * this.h;
				if (_y > 0 && _y < 130) {
					ctx.fillText(this.nub[i], this.x, _y);
				}
			}
			ctx.restore();
		},
		move: function () {
			if (this.n !== this.nub[5]) {
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

	//¼ÆÈëÊý×Ö
	var score1 = 0;
	var s1 = new Score(el, 54, 61);
	s1.update(score1);
	s1.draw();
	// setInterval(function() {
	//     var d = score1 += 9234;
	//     s1.update(d);
	// },
	// 2000)
	arr.push(s1);
	uid++;
}
/* harmony default export */ __webpack_exports__["default"] = {
	props: ['act', 'num'],
	data: function () {
		return {
			uid: 0
		};
	},
	watch: {
		num: function (nv) {
			arr[this.uid].update(nv);
		}
	},
	mounted: function () {
		this.uid = uid;
		haha(this.$refs.canvas);
	},
	methods: {}

};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		state: {}
	},
	components: {
		CanvasCounter: __webpack_require__(22)
	},
	data: function () {
		return {};
	},
	watch: {
		'state.qqReader': function (nv, ov) {
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
		'state.mqq': function (nv, ov) {
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

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		state: {}
	},
	components: {},
	data: function () {
		return {};
	},
	watch: {
		'state.DAU': function (nv, ov) {
			var options = {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			};
			var demo = new CountUp("DAU", ov, nv, 0, 2.5, options);
			demo.start();
		},
		'state.total_growth': function (nv, ov) {
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

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		state: {}
	},
	components: {},
	data: function () {
		return {};
	},
	watch: {
		'state.qqReader.total': function (nv, ov) {
			var options = {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			};
			var demo = new CountUp("qq_reader_uv", ov, nv, 0, 2.5, options);
			demo.start();
		},
		'state.mqq.total': function (nv, ov) {
			var options = {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			};
			var demo = new CountUp("qq_uv", ov, nv, 0, 2.5, options);
			demo.start();
		}
	},
	computed: {},
	methods: {}
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		state: {}
	},
	components: {
		CanvasCounter: __webpack_require__(22)
	},
	data: function () {
		return {};
	},
	watch: {
		'state.qqReader': function (nv, ov) {
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
		'state.total_growth': function (nv, ov) {
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

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	components: {
		Card0: __webpack_require__(119),
		Card1: __webpack_require__(120),
		Card2: __webpack_require__(121),
		Card3: __webpack_require__(122)
	},
	props: {
		act: {},
		img: {},
		cardZero: {},
		cardOne: {},
		cardTwo: {},
		cardThree: {},
		items: {
			default: function () {
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
			default: 'ease-out' //'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
		},
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
	data: function () {
		return {
			width: 0,

			//items: [],

			switching: false,
			inCycle: false,
			moveCount: 0,
			scrolling: false,
			trainOffsetX: 0,
			offset: 0,
			X1: 0,
			X2: 0,

			currentOne: 0,
			transition: '0s',
			offset: 0
		};
	},
	computed: {
		author: function () {
			return this.items[this.currentOne].name;
		}
	},
	watch: {
		items: function () {
			//this.copy = this.items;
		},
		currentOne: function (new_val) {
			this.act({
				type: 'SWITCH',
				i: new_val
			});
		}
	},
	mounted: function () {
		//console.log(this.$refs)
		var self = this;
		// this.items = (function(){
		// 	var items = JSON.parse( JSON.stringify(self.raw) );
		// 	return items;
		// })();
		window.addEventListener('load', () => {
			this.setWidth();
		});
		window.addEventListener('resize', () => {
			setTimeout(() => {
				this.setWidth();
			}, 50);
		});
		if (this.autoplay) {
			setInterval(() => {
				if (!this.inCycle) {
					this.toNext();
				};
			}, this.interval);
		}
	},
	methods: {
		__toItem: function (name) {
			var i;
			this.items.forEach(a => {
				if (a.name === name) {
					i = a.id;
				}
			});
			this.toCard(i);
		},
		setWidth: function () {
			var elem = this.$refs.swiper;
			var width = Number(document.defaultView.getComputedStyle(elem).width.replace(/px/, ''));
			this.width = width;
			this.transition = '0s';
			this.trainOffsetX = -this.currentOne * this.width;
		},
		toNext: function () {
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
				setTimeout(() => {
					this.transition = '0s';
					if (this.carousel && this.currentOne === 0) {
						this.trainOffsetX = 0;
					};
					this.switching = false;
					this.inCycle = false;
				}, this.duration);
			}
		},
		toPrev: function () {
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
			setTimeout(() => {
				this.transition = '0s';
				if (this.carousel && this.currentOne === this.items.length - 1) {
					this.trainOffsetX = -this.currentOne * this.width;
				};
				this.switching = false;
				this.inCycle = false;
			}, this.duration);
		},
		toCard: function (i) {
			this.currentOne = i;
			this.transition = this.duration + 'ms ' + this.ease;
			this.trainOffsetX = -this.currentOne * this.width;
			setTimeout(() => {
				this.transition = '0s';
				this.switching = false;
				this.inCycle = false;
			}, this.duration);
		},
		touchstart: function (e) {
			e.stopPropagation();
			console.log(this.inCycle);
			if (!this.inCycle && !this.switching) {
				// begin a new cycle
				this.inCycle = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.transition = '0s';

				this.X0 = this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
			};
		},
		touchmove: function (e) {
			e.stopPropagation();
			if (this.inCycle && !this.switching) {
				this.moveCount++;
				if (!this.scrolling) {
					// decide if it can scroll at the first touchmove
					if (this.moveCount === 1) {
						this.X2 = e.changedTouches[0].pageX;
						this.Y2 = e.changedTouches[0].pageY;
						var distanceY = this.Y2 - this.Y1;
						var distanceX = this.X2 - this.X1;
						if (Math.abs(distanceY) > Math.abs(distanceX)) {
							this.scrolling = true;
						} else {
							// it is essential to preventDefault at the first touchmove
							// when using vanillajs or the subsequent touch-events would
							// not get triggered
							e.preventDefault();
						}
					}

					if (!this.scrolling && this.sticky) {
						this.X2 = e.changedTouches[0].pageX;
						var distance = this.X2 - this.X1;
						this.X1 = this.X2;
						this.trainOffsetX += distance;
						this.offset += distance;
						//console.log(this.trainOffsetX)
					}
				}
			}
		},
		touchend: function (e) {
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

/***/ }),
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var state = {
	img: './img',
	dev: true,
	page: 'pending',

	current: -1,

	times: ['--:--', '--:--', '--:--', '--:--'],
	card0: {
		total: 0,
		qqReader: 0,
		mqq: 0
	},
	card1: {
		DAU: 0,
		ratio: 0,
		total_growth: 0,
		ratio2: 0
	},
	card2: {
		qqReader: {
			total: 0,
			peak: 0,
			time: '--:--'
		},
		mqq: {
			total: 0,
			peak: 0,
			time: '--:--'
		}
	},
	card3: {
		times_of_opening: 0,
		times_of_downloading: 0
	}
};

function reducer(state, action) {
	var self = state;
	var vm = this;
	switch (action.type) {

		case 'INIT':
			if (self.dev) {
				window.addEventListener('load', function () {

					self.times[0] = function () {
						var str = 1010 + '';
						return str.substr(0, 2) + ':' + str.substr(2, 2);
					}();
					self.card0.total = 11111;
					self.card0.qqReader = 112311;
					self.card0.mqq = 111221;

					self.times[1] = '11';
					self.card1.DAU = 555;
					self.card1.ratio = 10;
					self.card1.total_growth = 777;
					self.card1.ratio2 = 1.22;

					self.times[2] = '22';
					self.card2.qqReader.total = 12345;
					self.card2.qqReader.peak = 1111;
					self.card2.qqReader.time = function () {
						var str = 201701062101 + '';
						return str.substr(8, 2) + ':' + str.substr(10, 2);
					}();
					self.card2.mqq.total = 13356;
					self.card2.mqq.peak = 1122;
					self.card2.mqq.time = function () {
						var str = 201701062122 + '';
						return str.substr(8, 2) + ':' + str.substr(10, 2);
					}();

					self.times[3] = '33';
					self.card3.times_of_opening += 3456;
					self.card3.times_of_downloading += 3654;
					setInterval(function () {
						self.card0.total += 12345;
						self.card0.qqReader += 12345;
						self.card0.mqq += 12345;

						self.card1.DAU += 2356;
						self.card1.ratio += 0.1;
						self.card1.count += 10;
						self.card1.total_growth += 777;

						self.card2.qqReader.total += 345;
						self.card2.qqReader.peak += 11;
						self.card2.mqq.total += 1356;
						self.card2.mqq.peak += 23;

						self.card3.times_of_opening += 3456;
						self.card3.times_of_downloading += 3654;
					}, 5000);
					self.page = 'ready';
				});
			} else {
				vm.act({ type: 'REQUEST' });
				window.addEventListener('load', function () {
					self.page = 'ready';
				});
			};
			break;
		case 'SWITCH':
			self.current = action.i;
			break;
		case 'REQUEST':
			vm.act({ type: 'CARD_0' });
			vm.act({ type: 'CARD_1' });
			vm.act({ type: 'CARD_2' });
			vm.act({ type: 'CARD_3' });
			break;
		case 'CARD_0':
			common.ajax(location.origin + '/servlet/UserServlet?method=getKpi', function (res) {
				self.times[0] = function () {
					var str = res.time + '';
					return str.substr(0, 2) + ':' + str.substr(2, 2);
				}();
				// 红包总发放量：
				self.card0.total = Number(res.all);
				// QQ阅读发放量：
				self.card0.qqReader = Number(res.qqreader);
				// 手Q阅读发放量：
				self.card0.mqq = Number(res.qq);
				if (self.current === -1) {
					self.current = 0;
				};
				setTimeout(function () {
					vm.act({ type: 'CARD_0' });
				}, 5000);
			}, null, function () {
				setTimeout(function () {
					vm.act({ type: 'CARD_0' });
				}, 5000);
			});
			break;
		case 'CARD_1':
			common.ajax(location.origin + '/servlet/UserServlet?method=getRealUv', function (res) {
				// 数据时段：
				self.times[1] = function () {
					var str = res.time + '';
					return str.substr(0, 2) + ':' + str.substr(2, 2);
				}();

				// 今日DAU：
				self.card1.DAU = Number(res.dau);
				// 环比昨天涨幅：
				self.card1.ratio = Number(res.growpercent);

				// 今日新增用户：
				self.card1.total_growth = Number(res.realNewUser);
				// 环比昨天涨幅：
				self.card1.ratio2 = Number(res.accNewUser);
				setTimeout(function () {
					vm.act({ type: 'CARD_1' });
				}, 5000);
			}, null, function () {
				setTimeout(function () {
					vm.act({ type: 'CARD_1' });
				}, 5000);
			});
			break;
		case 'CARD_2':
			common.ajax(location.origin + '/servlet/UserServlet?method=getPageActUv', function (res) {
				self.times[2] = res.statisTime;
				// QQ阅读累计访问量：
				self.card2.qqReader.total = Number(res.QQReaderAccPv);
				// QQ阅读访问量峰值：
				self.card2.qqReader.peak = Number(res.QQReaderMaxPv);
				// QQ阅读访问量峰值时段：
				self.card2.qqReader.time = function () {
					var str = res.QQReaderMaxPvTime + '';
					return str.substr(8, 2) + ':' + str.substr(10, 2);
				}();

				// 手Q阅读累计访问量：
				self.card2.mqq.total = Number(res.QQAccPv);
				// 手Q阅读访问量峰值：
				self.card2.mqq.peak = Number(res.QQMaxPv);
				// 手Q阅读访问量峰值时段：
				self.card2.mqq.time = function () {
					var str = res.QQMaxPvTime + '';
					return str.substr(8, 2) + ':' + str.substr(10, 2);
				}();

				setTimeout(function () {
					vm.act({ type: 'CARD_2' });
				}, 30000);
			}, null, function () {
				setTimeout(function () {
					vm.act({ type: 'CARD_2' });
				}, 30000);
			});
			break;
		case 'CARD_3':
			common.ajax(location.origin + '/servlet/UserServlet?method=getActiPageUv', function (res) {
				self.times[3] = res.statisTime;
				// 累计打开QQ阅读人数：
				self.card3.times_of_opening = Number(res.QQReaderAccPv);
				// 累计下载QQ阅读人数：
				self.card3.times_of_downloading = Number(res.QQReaderMaxPv);
				setTimeout(function () {
					vm.act({ type: 'CARD_3' });
				}, 30000);
			}, null, function () {
				setTimeout(function () {
					vm.act({ type: 'CARD_3' });
				}, 30000);
			});
			break;
	}
}

exports.default = { state: state, reducer: reducer };

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(10);

var _red = __webpack_require__(68);

var _red2 = _interopRequireDefault(_red);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store.createStore)([_red2.default]);

exports.default = store;

/***/ }),
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
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(100)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(160),
  /* scopeId */
  "data-v-c8cb541a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(105)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(165),
  /* scopeId */
  "data-v-fcfeb68e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(104)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(164),
  /* scopeId */
  "data-v-fce2878c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(103)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(163),
  /* scopeId */
  "data-v-fcc6588a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(102)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(162),
  /* scopeId */
  "data-v-fcaa2988",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(101)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(161),
  /* scopeId */
  "data-v-d99bb7ba",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
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
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CanvasCounter"
  }, [_c('canvas', {
    ref: "canvas",
    attrs: {
      "unselectable": "on",
      "width": "490",
      "height": "77"
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "root"
    }
  }, [_c('mask-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'pending'),
      expression: " page==='pending' "
    }]
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'ready'),
      expression: " page==='ready' "
    }],
    staticClass: "main",
    staticStyle: {
      "background": "url(img/red/bg.png)",
      "background-size": "100% 100%"
    }
  }, [_c('div', {
    staticClass: "time"
  }, _vm._l((_vm.times), function(a, i) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (i === _vm.current),
        expression: "i===current"
      }],
      staticClass: "number"
    }, [_vm._v(_vm._s(_vm.times[i]))])
  })), _c('swiper', {
    attrs: {
      "act": _vm.act,
      "img": _vm.img,
      "card-zero": _vm.card0,
      "card-one": _vm.card1,
      "card-two": _vm.card2,
      "card-three": _vm.card3
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Swiper__"
  }, [_c('div', {
    ref: "swiper",
    staticClass: "Swiper",
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchmove": function($event) {
        _vm.touchmove($event)
      },
      "touchend": function($event) {
        _vm.touchend($event)
      },
      "touchcancel": function($event) {
        _vm.touchend($event)
      }
    }
  }, [_c('ul', {
    staticClass: "train",
    class: _vm.carousel ? 'carousel' : '',
    style: ('transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);transition:' + _vm.transition + ';' +
      '-webkit-transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);-webkit-transition:' + _vm.transition + ';')
  }, [(_vm.carousel) ? _c('li', {
    staticClass: "item",
    staticStyle: {
      "background": "url(img/scotches.png) no-repeat 0% 100%",
      "background-size": "2.4rem auto"
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[_vm.items.length - 2].name) + "\r\n\t\t\t")]) : _vm._e(), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    staticStyle: {
      "background": "url(img/scotches.png) no-repeat 0% 100%",
      "background-size": "2.4rem auto"
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[_vm.items.length - 1].name) + "\r\n\t\t\t")]) : _vm._e(), _vm._l((_vm.items), function(item, i) {
    return _c('li', {
      key: item.id,
      class: 'item ' + (i === _vm.currentOne ? 'active' : '')
    }, [_c('div', {
      staticClass: "shadow"
    }), _c('div', {
      staticClass: "content",
      staticStyle: {
        "background": "url(img/red/card_2.png) no-repeat center",
        "background-size": "auto 100%"
      }
    }, [(i === 0) ? _c('card0', {
      attrs: {
        "state": _vm.cardZero,
        "img": _vm.img
      }
    }) : _vm._e(), (i === 1) ? _c('card1', {
      attrs: {
        "state": _vm.cardOne,
        "img": _vm.img
      }
    }) : _vm._e(), (i === 2) ? _c('card2', {
      attrs: {
        "state": _vm.cardTwo,
        "img": _vm.img
      }
    }) : _vm._e(), (i === 3) ? _c('card3', {
      attrs: {
        "state": _vm.cardThree,
        "img": _vm.img
      }
    }) : _vm._e()], 1)])
  }), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    staticStyle: {
      "background": "url(img/scotches.png) no-repeat 0% 100%",
      "background-size": "2.4rem auto"
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[0].name) + "\r\n\t\t\t")]) : _vm._e(), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    staticStyle: {
      "background": "url(img/scotches.png) no-repeat 0% 100%",
      "background-size": "2.4rem auto"
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[1].name) + "\r\n\t\t\t")]) : _vm._e()], 2)]), _c('ul', {
    staticClass: "pagination"
  }, _vm._l((_vm.items), function(item, i) {
    return _c('li', {
      staticClass: "dot",
      class: 'item ' + (i === _vm.currentOne ? 'active' : ''),
      on: {
        "click": function($event) {
          _vm.toCard(i)
        }
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Card3"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "1.96rem"
    }
  }), _c('div', {
    staticClass: "banner",
    staticStyle: {
      "background": "url(img/red/banner.png)",
      "background-size": "100% 100%"
    }
  }, [_vm._v("\n\t\tQQ阅读活动页行为\n\t")]), _c('div', {
    staticClass: "part"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("累计打开QQ阅读人数")]), _c('canvas-counter', {
    attrs: {
      "num": _vm.state.times_of_opening
    }
  })], 1), _c('div', {
    staticClass: "part"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("累计下载QQ阅读人数")]), _c('canvas-counter', {
    attrs: {
      "num": _vm.state.times_of_downloading
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Card2"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "1.96rem"
    }
  }), _c('div', {
    staticClass: "banner",
    staticStyle: {
      "background": "url(img/red/banner.png)",
      "background-size": "100% 100%"
    }
  }, [_vm._v("\n\t\t活动页面流量（UV）\n\t")]), _vm._m(0), _c('div', {
    staticClass: "part"
  }, [_c('div', {
    staticClass: "part_left"
  }, [_c('img', {
    staticClass: "logo_blue",
    attrs: {
      "src": _vm.img + '/red/logo_qq_reader.png'
    }
  })]), _vm._m(1), _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "_36"
  }, [_vm._v(_vm._s(_vm.state.qqReader.peak))]), _c('p', {
    staticClass: "_24"
  }, [_vm._v("(时间：" + _vm._s(_vm.state.qqReader.time) + ")")])])]), _c('div', {
    staticClass: "part"
  }, [_c('div', {
    staticClass: "part_left"
  }, [_c('img', {
    staticClass: "logo_red",
    attrs: {
      "src": _vm.img + '/red/logo_mqq.png'
    }
  })]), _vm._m(2), _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "_36"
  }, [_vm._v(_vm._s(_vm.state.mqq.peak))]), _c('p', {
    staticClass: "_24"
  }, [_vm._v("(时间：" + _vm._s(_vm.state.mqq.time) + ")")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part"
  }, [_c('div', {
    staticClass: "part_left"
  }), _c('div', {
    staticClass: "part_middle"
  }, [_c('p', {
    staticClass: "_28"
  }, [_vm._v("累计访问量")])]), _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "_28"
  }, [_vm._v("峰值")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_middle"
  }, [_c('p', {
    staticClass: "_36",
    attrs: {
      "id": "qq_reader_uv"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_middle"
  }, [_c('p', {
    staticClass: "_36",
    attrs: {
      "id": "qq_uv"
    }
  })])
}]}

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Card1"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "1.96rem"
    }
  }), _c('div', {
    staticClass: "banner",
    staticStyle: {
      "background": "url(img/red/banner.png)",
      "background-size": "100% 100%"
    }
  }, [_vm._v("\n\t\tQQ阅读实时流量\n\t")]), _c('div', {
    staticClass: "part"
  }, [_vm._m(0), _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "top_title"
  }, [_vm._v("环比昨天涨幅")]), _c('p', {
    staticClass: "bottom_title"
  }, [_vm._v(_vm._s(_vm.state.ratio.toFixed(3)) + "%")])])]), _c('div', {
    staticClass: "part"
  }, [_vm._m(1), _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "top_title"
  }, [_vm._v("环比昨天涨幅")]), _c('p', {
    staticClass: "bottom_title"
  }, [_vm._v(_vm._s(_vm.state.ratio2.toFixed(3)) + "%")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_left"
  }, [_c('p', {
    staticClass: "top_title"
  }, [_vm._v("DAU")]), _c('p', {
    staticClass: "bottom_title",
    attrs: {
      "id": "DAU"
    }
  }, [_vm._v("0")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_left"
  }, [_c('p', {
    staticClass: "top_title"
  }, [_vm._v("新增用户")]), _c('p', {
    staticClass: "bottom_title",
    attrs: {
      "id": "total_growth"
    }
  }, [_vm._v("0")])])
}]}

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Card0"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "1.96rem"
    }
  }), _c('div', {
    staticClass: "banner",
    staticStyle: {
      "background": "url(img/red/banner.png)",
      "background-size": "100% 100%"
    }
  }, [_vm._v("\n\t\t红包总发放量\n\t")]), _c('canvas-counter', {
    attrs: {
      "num": _vm.state.total
    }
  }), _c('div', {
    staticClass: "part_qq_reader"
  }, [_c('div', {
    staticClass: "part_left"
  }, [_c('img', {
    staticClass: "logo_qq_reader",
    attrs: {
      "src": _vm.img + '/red/logo_qq_reader.png'
    }
  })]), _vm._m(0)]), _c('div', {
    staticClass: "part_mqq"
  }, [_c('div', {
    staticClass: "part_left"
  }, [_c('img', {
    staticClass: "logo_mqq",
    attrs: {
      "src": _vm.img + '/red/logo_mqq.png'
    }
  })]), _vm._m(1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("QQ阅读发放量")]), _c('p', {
    attrs: {
      "id": "qqReader"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("手Q阅读发放量")]), _c('p', {
    attrs: {
      "id": "mqq"
    }
  })])
}]}

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = window.Vue;

/***/ }),
/* 167 */,
/* 168 */,
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ })
/******/ ]);