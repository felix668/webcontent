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
/******/ 	return __webpack_require__(__webpack_require__.s = 168);
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
/* 8 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: ['state'],
	computed: {
		writers: function () {
			var state = [];
			this.state.writers.forEach(a => {
				state.push(a.state);
			});
			return state;
		}
	},
	mounted: function () {}
};

/***/ }),
/* 9 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	data: function () {
		return {};
	}
};

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(91)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(151),
  /* scopeId */
  "data-v-7114b98b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  "data-v-46f3853a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  "data-v-0334fb79",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MaskOver"
  }, [_c('div', {
    staticClass: "content_666"
  }, [_c('div', {
    staticClass: "content_667"
  }, [_c('img', {
    attrs: {
      "src": '../adr/img/common/over.png'
    }
  }), _c('p', [_vm._v("本期活动已结束")])])])])
},staticRenderFns: []}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "DEBUG"
  }, [_c('div', {
    staticClass: "fixed__"
  }, [_vm._v("\n\t\tloggedIn: " + _vm._s(_vm.state.loggedIn) + ", day: " + _vm._s(_vm.state.day)), _c('br'), _vm._v("\n\t\tcurrent: " + _vm._s(_vm.state.current)), _c('br')])])
},staticRenderFns: []}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(92)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(152),
  /* scopeId */
  "data-v-728da3d4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(76)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(136),
  /* scopeId */
  "data-v-2d85ce74",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(95)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(155),
  /* scopeId */
  "data-v-7a3b560e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(74)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(134),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var root = new Vue({
	el: '#root',
	components: {
		App: __webpack_require__(107)
	},
	template: '<app></app>'
});

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_farm_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_farm_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__store_store_farm_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		Debugger: __webpack_require__(14),
		MaskLoading: __webpack_require__(6),
		MaskOver: __webpack_require__(15),

		MaskAuthor: __webpack_require__(112),
		MaskComments: __webpack_require__(113),

		BookFarm: __webpack_require__(108),
		SnowConfetti: __webpack_require__(13),
		SmokyText: __webpack_require__(21),

		Pages: __webpack_require__(117),
		Fader: __webpack_require__(19),
		Comments: __webpack_require__(18)
	},
	data: function () {
		return __WEBPACK_IMPORTED_MODULE_0__store_store_farm_js___default.a.state;
	},
	computed: {},
	watch: {},
	created: function () {},
	mounted: function () {
		this.dispatch({ type: 'INIT' });
	},
	methods: {
		dispatch: __WEBPACK_IMPORTED_MODULE_0__store_store_farm_js___default.a.dispatch
	}
};

/***/ }),
/* 28 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		change: {},
		dispatch: {}
	},
	components: {
		CoverSnowConfetti: __webpack_require__(109)
	},
	data: function () {
		return {
			state: '',
			pages: [{
				state: ''
			}],
			current: 0
		};
	},
	watch: {
		current: function (nv, ov) {
			this.pages.forEach((a, i) => {
				if (ov === i) {
					a.state = 'turned';
				}
			});
		}
	},
	mounted: function () {},
	methods: {
		handleClick: function () {
			this.current++;
			setTimeout(() => {
				this.dispatch({
					type: 'SWITCH',
					stage: 1
				});
			}, 600);
		}
	}
};

/***/ }),
/* 29 */
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

/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    change: {},
    dispatch: {}
  },
  data: function () {
    return {
      current: 0,
      over: false,
      comments: [{
        text: '［媒体评论］朱天文：我在台北，我读到了李娟，真不可思议我同时就在李娟那唯一无二的新疆。',
        state: ''
      }, {
        text: '［媒体评论］舒飞廉：她的出现，就像当年的萧红一样，是天才的出现。李娟和阿勒泰的关系...',
        state: ''
      }, {
        text: '［媒体评论］王安忆：她的文字一看就认出来，她的文字世界里，世界很大，时间很长，人变...',
        state: ''
      }, {
        text: '［读者评价］很多年不曾见过的温暖又干净的文字 ——dana (成都)',
        state: ''
      }, {
        text: '［读者评价］最几年读过的最好的华语散文，让我对文学有了一些... ——Xiao (New York City)',
        state: ''
      }, {
        text: '［读者评价］文笔优美，带着孩子般的童趣和观察视角。看过之后,心中涌起... ——Fairylandyy',
        state: ''
      }]
    };
  },
  watch: {
    'change.page': function (nv) {
      if (nv === 3) {
        this.start();
      }
    },
    current: function (nv) {
      if (this.over) {
        this.comments[nv].state = 'class0';
        this.comments[nv - 1 >= 0 ? nv - 1 : nv + 5].state = 'class1';
        this.comments[nv - 2 >= 0 ? nv - 2 : nv + 4].state = 'class2';
        this.comments[nv - 3 >= 0 ? nv - 3 : nv + 3].state = 'over';
        this.comments[nv - 4 >= 0 ? nv - 4 : nv + 2].state = '';
      };
    }
  },
  mounted: function () {
    // this.start();
  },
  methods: {
    show() {
      this.dispatch({
        type: 'SHOW',
        what: 'mask_comments'
      });
    },
    start: function () {
      setTimeout(() => {
        this.comments[0].state = 'class0';
      }, 500);
      setTimeout(() => {
        this.comments[0].state = 'class1';
        this.comments[1].state = 'class0';
      }, 2500);
      setTimeout(() => {
        this.comments[0].state = 'class2';
        this.comments[1].state = 'class1';
        this.comments[2].state = 'class0';
        setTimeout(() => {
          this.current = 3;
          this.over = true;
          setInterval(() => {
            if (this.current + 1 <= this.comments.length - 1) {
              this.current++;
            } else {
              this.current = 0;
            }
          }, 2000);
        }, 2000);
      }, 4500);
    }
  }
};

/***/ }),
/* 30 */
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
	spawn: function () {
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
	draw: function () {
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

const CanvasConfetti = Canvas.extend({
	props: function () {
		return {
			count: 60,
			COLORS: [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]]
		};
	},
	data: function () {
		return {
			confetti: []
		};
	},
	beforePlay: function () {
		this.$setSize(window.innerWidth, window.innerHeight);
		window.addEventListener('resize', () => {
			this.$setSize(window.innerWidth, window.innerHeight);
		});
		for (let i = 1, j = 1, ref = this.count; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
			this.confetti.push(new Confetti(this));
		}
	},
	render: function () {
		this.$ctx.clearRect(0, 0, this.$width, this.$height);
		this.confetti.forEach(a => {
			a.draw();
		});
	}
});

var cv;

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		change: {}
	},
	data: function () {
		return {
			class_: ''
		};
	},
	watch: {
		'change.stage': function (nv) {
			if (nv === 1) {
				cv.$pause();
			}
		}
	},
	mounted: function () {
		cv = new CanvasConfetti({
			el: this.$refs.confetti,
			useInterval: 20
		});
	}
};

/***/ }),
/* 31 */
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

/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    change: {},
    dispatch: {},
    img: {}
  },
  components: {
    Comments: __webpack_require__(18),
    SmokyText: __webpack_require__(21)
  },
  methods: {
    show: function () {
      this.dispatch({
        type: 'SHOW',
        what: 'mask_author'
      });
    }
  }
};

/***/ }),
/* 32 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		current: {}
	},
	data: function () {
		return {
			//current: 0,
			switching: false,
			items: [{
				state: 'current',
				background: '/bg_0.png'
			}, {
				state: '',
				background: '/bg_1.png'
			}, {
				state: '',
				background: '/bg_2.png'
			}]
		};
	},
	watch: {
		current: function (newV, oldV) {
			this.items[newV].state = 'enter';
			this.items[oldV].state = 'leave';
			setTimeout(() => {
				this.items[newV].state = 'current';
				this.items[oldV].state = '';
				this.switching = false;
			}, 2000);
		}
	},
	methods: {
		toNext: function () {
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

/***/ }),
/* 33 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	components: {

		SnowConfetti: __webpack_require__(13),
		Page0: __webpack_require__(114),
		Page1: __webpack_require__(115),
		Page2: __webpack_require__(116),
		EndPage: __webpack_require__(110),
		Fog: __webpack_require__(20)
	},
	props: {
		change: {},
		img: {},
		dispatch: {}
	},
	watch: {
		'change.stage': function (nv) {
			if (nv === 1) {
				$('.book112').turn('peel', 'br');
			}
		},
		'change.page': function (nv) {
			$('.book112').turn('next');
			$('.book112').turn('peel', 'br');
		}
	},
	mounted: function () {
		setTimeout(() => {
			console.log(rem.val * 7.5);
			$('.book112').turn({
				width: rem.val * 7.5 * 2,
				height: rem.h,
				elevation: 50,
				gradients: true,
				autoCenter: false
			});
			// $('.book112').turn('peel','br');
		}, 500);
	},
	methods: {}
};

/***/ }),
/* 34 */
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

/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    img: {},
    change: {}
  },
  data: function () {
    return {
      class_: ''
    };
  },
  watch: {
    'change.page': function (nv) {
      if (nv === 3) {
        this.class_ = 'leave';
        setTimeout(() => {
          this.class_ = 'hidden';
        }, 1000);
      }
    }
  }
};

/***/ }),
/* 35 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	components: {},
	props: {
		img: {},
		mask: {},
		dispatch: {}
	},
	data: function () {
		return {};
	},
	computed: {},
	methods: {
		touchmove: function (e) {
			e.stopPropagation();
		},
		hide: function () {
			this.dispatch({
				type: 'HIDE',
				what: 'mask_author'
			});
		}
	}
};

/***/ }),
/* 36 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	components: {},
	props: {
		img: {},
		mask: {},
		dispatch: {}
	},
	data: function () {
		return {};
	},
	computed: {},
	watch: {
		'mask.show': function () {}
	},
	mounted: function () {
		// setTimeout(()=>{
		// 	console.log('dog')
		// 	var myScroll = new IScroll('#iscroll', { mouseWheel: true });
		// },1000);
	},
	methods: {
		touchmove: function (e) {
			e.stopPropagation();
		},
		hide: function () {
			this.dispatch({
				type: 'HIDE',
				what: 'mask_comments'
			});
		}
	}
};

/***/ }),
/* 37 */
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

/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    img: {},
    change: {}
  },
  watch: {
    'change.stage': function (nv) {
      if (nv === 1) {
        setTimeout(() => {
          this.animate();
        }, 1000);
      }
    }
  },
  methods: {
    animate: function () {
      // console.log(this.$refs)
      var t = this.$refs.t_0;
      var t_0_0 = this.$refs.t_0_0;
      var t_0_1 = this.$refs.t_0_1;
      var t_0_2 = this.$refs.t_0_2;
      var t_0_3 = this.$refs.t_0_3;
      var t_0_4 = this.$refs.t_0_4;

      var tl = new TimelineMax();
      var duration = 1;

      tl.fromTo(t_0_0, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_0_1, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_0_2, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_0_3, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_0_4, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      });

      // tl.fromTo( penguin_0,0.6,{
      //  transformOrigin: '100% 100%',
      //  rotation: '50deg'
      // },{
      //  rotation: '0'
      // }).to( penguin_0,0.5,{
      //  x: '200%'
      // }).fromTo( penguin_1,0.6,{
      //  transformOrigin: '0% 100%',
      //  x: '-100%',
      //  rotation: '-50deg'
      // },{
      //  x: '0%',
      //  rotation: 0
      // }).to( penguin_1,0.5,{
      //  x: '-200%'
      // }).fromTo( penguin,0.5,{
      //  y: '50%'
      // },{
      //  y: '0%',
      //  onStart: function(){
      //  },
      //  ease: Elastic
      // }).fromTo( Focus,0.3,{
      //  opacity: 1
      // },{
      //  opacity: 0,
      //  delay: 0.3
      // }).to( Focus,0.5,{
      //  opacity: 0.7,
      //  onComplete: this.CHANGE_STAGE.bind(this)
      // })
    }
  }
};

/***/ }),
/* 38 */
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

/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    img: {},
    change: {}
  },
  watch: {
    'change.page': function (nv) {
      if (nv === 1) {
        setTimeout(() => {
          this.animate();
        }, 500);
      }
    }
  },
  methods: {
    animate: function () {
      // console.log(this.$refs)
      var t = this.$refs.t_1;
      var t_1_0 = this.$refs.t_1_0;
      var t_1_1 = this.$refs.t_1_1;
      var t_1_2 = this.$refs.t_1_2;
      var t_1_3 = this.$refs.t_1_3;
      var t_1_4 = this.$refs.t_1_4;

      var tl = new TimelineMax();
      var duration = 1;

      tl.fromTo(t_1_0, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_1_1, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_1_2, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_1_3, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_1_4, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      });

      // tl.fromTo( penguin_0,0.6,{
      //  transformOrigin: '100% 100%',
      //  rotation: '50deg'
      // },{
      //  rotation: '0'
      // }).to( penguin_0,0.5,{
      //  x: '200%'
      // }).fromTo( penguin_1,0.6,{
      //  transformOrigin: '0% 100%',
      //  x: '-100%',
      //  rotation: '-50deg'
      // },{
      //  x: '0%',
      //  rotation: 0
      // }).to( penguin_1,0.5,{
      //  x: '-200%'
      // }).fromTo( penguin,0.5,{
      //  y: '50%'
      // },{
      //  y: '0%',
      //  onStart: function(){
      //  },
      //  ease: Elastic
      // }).fromTo( Focus,0.3,{
      //  opacity: 1
      // },{
      //  opacity: 0,
      //  delay: 0.3
      // }).to( Focus,0.5,{
      //  opacity: 0.7,
      //  onComplete: this.CHANGE_STAGE.bind(this)
      // })
    }
  }
};

/***/ }),
/* 39 */
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

/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    img: {},
    change: {}
  },
  watch: {
    'change.page': function (nv) {
      if (nv === 2) {
        setTimeout(() => {
          this.animate();
        }, 500);
      }
    }
  },
  methods: {
    animate: function () {
      // console.log(this.$refs)
      var t = this.$refs.t_2;
      var t_2_0 = this.$refs.t_2_0;
      var t_2_1 = this.$refs.t_2_1;
      var t_2_2 = this.$refs.t_2_2;
      var t_2_3 = this.$refs.t_2_3;
      var t_2_4 = this.$refs.t_2_4;
      var t_2_5 = this.$refs.t_2_5;

      var tl = new TimelineMax();
      var duration = 1;

      tl.fromTo(t_2_0, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_2_1, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_2_2, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_2_3, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_2_4, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      }).fromTo(t_2_5, duration, {
        opacity: 0,
        rotationY: -90,
        x: '100%'
      }, {
        opacity: 1,
        rotationY: 0,
        x: '0%'
      });

      // tl.fromTo( penguin_0,0.6,{
      //  transformOrigin: '100% 100%',
      //  rotation: '50deg'
      // },{
      //  rotation: '0'
      // }).to( penguin_0,0.5,{
      //  x: '200%'
      // }).fromTo( penguin_1,0.6,{
      //  transformOrigin: '0% 100%',
      //  x: '-100%',
      //  rotation: '-50deg'
      // },{
      //  x: '0%',
      //  rotation: 0
      // }).to( penguin_1,0.5,{
      //  x: '-200%'
      // }).fromTo( penguin,0.5,{
      //  y: '50%'
      // },{
      //  y: '0%',
      //  onStart: function(){
      //  },
      //  ease: Elastic
      // }).fromTo( Focus,0.3,{
      //  opacity: 1
      // },{
      //  opacity: 0,
      //  delay: 0.3
      // }).to( Focus,0.5,{
      //  opacity: 0.7,
      //  onComplete: this.CHANGE_STAGE.bind(this)
      // })
    }
  }
};

/***/ }),
/* 40 */
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

/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    change: {},
    img: {},
    dispatch: {}
  },
  data: function () {
    return {
      class_: '',
      x0: null,
      x1: null,
      dx: 0
    };
  },
  components: {
    Fader: __webpack_require__(19),
    FlipBook: __webpack_require__(111),
    Fog: __webpack_require__(20),
    SnowConfetti: __webpack_require__(13)
  },
  watch: {
    'change.stage': function (nv) {
      if (nv === 1) {
        setTimeout(() => {
          this.class_ = 'enter';
        }, 50);
      }
    }
  },
  methods: {
    touchstart: function (e) {
      this.x0 = null;
      this.x1 = null;
      this.dx = 0;
      this.x0 = e.changedTouches[0].pageX;
    },
    touchmove: function (e) {
      this.x1 = e.changedTouches[0].pageX;
      this.dx += this.x1 - this.x0;
      this.x0 = e.changedTouches[0].pageX;
    },
    touchend: function (e) {
      console.log(this.dx);
      if (this.dx < -4 || this.dx === 0) {
        this.next();
      }
    },
    next: function () {
      if (this.change.page < 3) {
        this.dispatch({
          type: 'SWITCH',
          page: this.change.page + 1
        });
      };
    }
  }
};

/***/ }),
/* 41 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	data: function () {
		return {
			className: ''
		};
	},
	mounted: function () {},
	methods: {
		go: function () {
			this.className = this.className === '' ? 'active' : '';
		}
	}
};

/***/ }),
/* 42 */
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
	spawn: function () {
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
	draw: function () {
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

const CanvasConfetti = Canvas.extend({
	props: function () {
		return {
			count: 60,
			COLORS: [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]]
		};
	},
	data: function () {
		return {
			confetti: []
		};
	},
	beforePlay: function () {
		this.$setSize(window.innerWidth, window.innerHeight);
		window.addEventListener('resize', () => {
			this.$setSize(window.innerWidth, window.innerHeight);
		});
		for (let i = 1, j = 1, ref = this.count; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
			this.confetti.push(new Confetti(this));
		}
	},
	render: function () {
		this.$ctx.clearRect(0, 0, this.$width, this.$height);
		this.confetti.forEach(a => {
			a.draw();
		});
	}
});

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		change: {}
	},
	data: function () {
		return {
			class_: ''
		};
	},
	watch: {
		'change.page': function (nv) {
			if (nv === 3) {
				this.class_ = 'leave';
				setTimeout(() => {
					this.class_ = 'hidden';
				}, 1000);
			}
		}
	},
	mounted: function () {
		new CanvasConfetti({
			el: this.$refs.confetti,
			useInterval: 20
		});
	}
};

/***/ }),
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Vix = {};

function createStore(modules) {

	var state = {};
	var mutators = [];

	modules.forEach(function (a) {
		// shallowly merge a.state into state
		for (var key in a.state) {
			if (state[key] !== undefined) {
				throw new Error("state." + key + " is already occupied.");
			} else {
				state[key] = a.state[key];
			};
		};
		// mutator is a function that takes the action
		// and mutate the state
		mutators.push(a.mutator);
	});

	var store = {
		state: state,
		act: dispatch,
		dispatch: dispatch,
		enhance: enhance,
		merge: enhance
	};
	//console.log(store)
	return store;

	function enhance(_ref) {
		var state = _ref.state,
		    reducer = _ref.reducer;

		var store = this;
		for (var key in state) {
			store.state[key] = state[key];
		};
		mutators.push(mutator);
		return store;
	}

	// dispatch an action which will change the state
	function dispatch(action) {
		var vm = this;
		// call the mutators one by one
		mutators.forEach(function (a) {
			a.call(vm, { state: state, dispatch: dispatch }, action);
		});
	}
}

Vix.createStore = createStore;

exports.default = Vix;

/***/ }),
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var state = {
	img: '../adr/img/farm',

	dev: true,

	page: 'pending',
	loaded: false,

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

	mask_rules: {
		show: false
	},
	mask_download: {
		show: false
	},
	mask_info: {
		show: false
	},
	mask_black: {
		show: false
	},
	mask_prize: {
		show: false
	}
};

function mutator(_ref, action) {
	var state = _ref.state,
	    dispatch = _ref.dispatch;

	var self = state;
	switch (action.type) {
		case 'TO_LOGIN':
			if (self.dev) {
				self.loggedIn = true;
			} else {
				Local.forceLog(common.param('act_f'), 'SD_' + self.id + (self.hasDiscount ? 'discount' : '') + '_login');
				Local.login();
			};
			break;

		case 'TO_PAGE':
			var href;
			if (self.hasDiscount) {
				href = location.href.replace(/books_\d_discount\.html/g, 'books_' + action.id + '_discount.html');
			} else {
				href = location.href.replace(/books_\d\.html/g, 'books_' + action.id + '.html');
			};
			if (/\?/.test(location.href)) {
				href = href.replace(/\?/, '?z_replay=true&');
			} else {
				href += '?z_replay=true';
			};
			if (self.dev) {
				location.href = href;
			} else {

				if (self.id === action.id) {
					Local.forceLog(common.param('act_f'), 'SD_' + self.id + (self.hasDiscount ? 'discount' : '') + '_replay');
				} else {
					Local.forceLog(common.param('act_f'), 'SD_' + self.id + (self.hasDiscount ? 'discount' : '') + '_to' + action.id + (self.hasDiscount ? 'discount' : ''));
				}
				Local.openPage(href);
			};
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

		case 'TO_CHARGE':
			Local.doCharge('act', true, action.money * 100);
			break;
		case 'TO_BOOK':
			if (!self.share) {
				Local.forceLog(common.param('act_f'), 'SD_' + self.id + (self.hasDiscount ? 'discount' : '') + '_toBook');
				ABook.gotoDetail(action.bid);
			} else {
				self.act({ type: 'TO_APP' });
			}
			break;
		case 'TO_READ':
			Local.$toRead(action.bid);
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

		case 'SHOW':
			state[action.what].show = true;
			break;
		case 'HIDE':
			state[action.what].show = false;
			break;
	}
}

exports.default = { state: state, mutator: mutator };

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var state = {

	change: {
		stage: 0,
		page: 0
	},
	mask_author: {
		show: false
	},
	mask_comments: {
		show: false
	}
};

function mutator(_ref, action) {
	var state = _ref.state,
	    dispatch = _ref.dispatch;

	var $ = state;
	switch (action.type) {

		case 'INIT':
			if (state.dev) {
				state.page = 'ready';
				// setTimeout(()=>{
				// 	state.stage++;
				// },2000);
			} else {
				state.page = 'ready';
			};
			break;
		case 'SWITCH':
			// console.log(action)
			if (action.stage) {
				state.change.stage = action.stage;
			} else if (action.page) {
				state.change.page = action.page;
			}
			break;
		case 'REPLAY':
			location.href = location.href;
			break;
	}
}

exports.default = { state: state, mutator: mutator };

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Vix = __webpack_require__(59);

var _Vix2 = _interopRequireDefault(_Vix);

var _base = __webpack_require__(61);

var _base2 = _interopRequireDefault(_base);

var _farm = __webpack_require__(67);

var _farm2 = _interopRequireDefault(_farm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = _Vix2.default.createStore([_base2.default, _farm2.default]);

exports.default = store;

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */,
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */,
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(90)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(150),
  /* scopeId */
  "data-v-6bc840e8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(78)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(138),
  /* scopeId */
  "data-v-399b59c2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(146),
  /* scopeId */
  "data-v-556bfdd2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(96)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(156),
  /* scopeId */
  "data-v-8ebbbd4c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(97)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(157),
  /* scopeId */
  "data-v-a27fb454",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(98)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(158),
  /* scopeId */
  "data-v-a4658412",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(87)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(147),
  /* scopeId */
  "data-v-64d5ce40",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(82)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(142),
  /* scopeId */
  "data-v-4efa1151",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(83)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(143),
  /* scopeId */
  "data-v-4f0828d2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(84)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(144),
  /* scopeId */
  "data-v-4f164053",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(85)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(145),
  /* scopeId */
  "data-v-52aa3814",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
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
/* 134 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "SmokyText",
    class: _vm.className,
    on: {
      "click": _vm.go
    }
  }, [_vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "text"
  }, [_c('span', [_vm._v("冬")]), _c('span', [_vm._v("牧")]), _c('span', [_vm._v("场")]), _c('span', [_vm._v("冬")]), _c('span', [_vm._v("牧")]), _c('span', [_vm._v("场")]), _c('br'), _c('span', [_vm._v("冬")]), _c('span', [_vm._v("牧")]), _c('span', [_vm._v("场")]), _c('span', [_vm._v("冬")]), _c('span', [_vm._v("牧")]), _c('span', [_vm._v("场")]), _c('br')])
}]}

/***/ }),
/* 135 */,
/* 136 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Fader",
    on: {
      "click": _vm.toNext
    }
  }, _vm._l((_vm.items), function(a, i) {
    return _c('div', {
      staticClass: "item",
      class: a.state,
      style: ('background: url(' + _vm.img + a.background + ';background-size:100% auto;')
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 137 */,
/* 138 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "BookSpace"
  }, [_c('div', {
    staticClass: "book",
    style: ('background-image:url(' + _vm.img + '/cover.jpg);background-size:100% 100%;'),
    on: {
      "click": _vm.handleClick
    }
  }, _vm._l((_vm.pages), function(a, i) {
    return _c('div', {
      staticClass: "page__",
      class: a.state,
      style: ('z-index:' + (100 - i))
    }, [_c('div', {
      staticClass: "face front"
    }, [_c('img', {
      staticClass: "tiny_cover",
      attrs: {
        "src": _vm.img + '/cover.png'
      }
    }), _c('cover-snow-confetti', {
      attrs: {
        "change": _vm.change
      }
    })], 1), _c('div', {
      staticClass: "face back"
    })])
  }))])
},staticRenderFns: []}

/***/ }),
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Page0"
  }, [_c('img', {
    ref: "t_0_0",
    staticClass: "t_0_0",
    attrs: {
      "src": _vm.img + '/t_0_0.png'
    }
  }), _c('img', {
    ref: "t_0_1",
    staticClass: "t_0_1",
    attrs: {
      "src": _vm.img + '/t_0_1.png'
    }
  }), _c('img', {
    ref: "t_0_2",
    staticClass: "t_0 t_0_2",
    attrs: {
      "src": _vm.img + '/t_0_2.png'
    }
  }), _c('img', {
    ref: "t_0_3",
    staticClass: "t_0 t_0_3",
    attrs: {
      "src": _vm.img + '/t_0_3.png'
    }
  }), _c('img', {
    ref: "t_0_4",
    staticClass: "t_0 t_0_4",
    attrs: {
      "src": _vm.img + '/t_0_4.png'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Page0"
  }, [_c('img', {
    ref: "t_1_0",
    staticClass: "t_1_0",
    attrs: {
      "src": _vm.img + '/t_1_0.png'
    }
  }), _c('img', {
    ref: "t_1_1",
    staticClass: "t_1_1",
    attrs: {
      "src": _vm.img + '/t_1_1.png'
    }
  }), _c('img', {
    ref: "t_1_2",
    staticClass: "t_1 t_1_2",
    attrs: {
      "src": _vm.img + '/t_1_2.png'
    }
  }), _c('img', {
    ref: "t_1_3",
    staticClass: "t_1 t_1_3",
    attrs: {
      "src": _vm.img + '/t_1_3.png'
    }
  }), _c('img', {
    ref: "t_1_4",
    staticClass: "t_1 t_1_4",
    attrs: {
      "src": _vm.img + '/t_1_4.png'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Page0"
  }, [_c('img', {
    ref: "t_2_0",
    staticClass: "t_2_0",
    attrs: {
      "src": _vm.img + '/t_2_0.png'
    }
  }), _c('img', {
    ref: "t_2_1",
    staticClass: "t_2_1",
    attrs: {
      "src": _vm.img + '/t_2_1.png'
    }
  }), _c('img', {
    ref: "t_2_2",
    staticClass: "t_2 t_2_2",
    attrs: {
      "src": _vm.img + '/t_2_2.png'
    }
  }), _c('img', {
    ref: "t_2_3",
    staticClass: "t_2 t_2_3",
    attrs: {
      "src": _vm.img + '/t_2_3.png'
    }
  }), _c('img', {
    ref: "t_2_4",
    staticClass: "t_2 t_2_4",
    attrs: {
      "src": _vm.img + '/t_2_4.png'
    }
  }), _c('img', {
    ref: "t_2_5",
    staticClass: "t_2 t_2_5",
    attrs: {
      "src": _vm.img + '/t_2_5.png'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.change.stage === 1),
      expression: "change.stage===1"
    }],
    staticClass: "Pages",
    class: _vm.class_
  }, [_c('flip-book', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change,
      "dispatch": _vm.dispatch
    }
  }), _c('fog', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change
    }
  }), _c('snow-confetti', {
    attrs: {
      "change": _vm.change
    }
  }), _c('div', {
    staticClass: "btn_next",
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchmove": function($event) {
        _vm.touchmove($event)
      },
      "touchend": function($event) {
        _vm.touchend(_vm.$evnet)
      }
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('canvas', {
    ref: "confetti",
    staticClass: "Confetti",
    class: _vm.class_
  })
},staticRenderFns: []}

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.show),
      expression: "mask.show"
    }],
    staticClass: "MaskAuthor"
  }, [_c('div', {
    staticClass: "content_666"
  }, [_c('div', {
    staticClass: "content_667",
    style: ('background-image:url(' + _vm.img + '/bg.jpg);background-size: 4rem 4rem;')
  }, [_c('img', {
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/close.png'
    },
    on: {
      "click": _vm.hide
    }
  }), _vm._m(0)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "iscroll"
    }
  }, [_c('div', {
    staticClass: "scroller"
  }, [_c('p', {
    staticClass: "p0"
  }, [_vm._v("媒体评论")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("朱天文：我在台北，我读到了李娟，真不可思议我同时就在李娟那唯一无二的新疆。")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("舒飞廉：她的出现，就像当年的萧红一样，是天才的出现。李娟和阿勒泰的关系，就像萧红和呼兰河的关系。")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("王安忆：她的文字一看就认出来，她的文字世界里，世界很大，时间很长，人变得很小，人是偶然出现的东西。那里的世界很寂寞，人会无端制造出喧哗。")]), _c('p', {
    staticClass: "p0"
  }, [_vm._v("读者评价")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("很多年不曾见过的温暖又干净的文字——dana (成都)")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("最几年读过的最好的华语散文，让我对文学有了一些新的信心，最好的文字，在文坛之外，在真实的民间——Xiao (New York City)")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("文笔优美，带着孩子般的童趣和观察视角。看过之后,心中涌起一阵感动。好想去阿勒泰看一看。 ——Fairylandyy")])])])
}]}

/***/ }),
/* 148 */,
/* 149 */,
/* 150 */
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
  }), _c('mask-over', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'over'),
      expression: " page==='over' "
    }]
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'ready'),
      expression: " page==='ready' "
    }],
    staticClass: "main"
  }, [_c('mask-author', {
    attrs: {
      "img": _vm.img,
      "mask": _vm.mask_author,
      "dispatch": _vm.dispatch
    }
  }), _c('mask-comments', {
    attrs: {
      "img": _vm.img,
      "mask": _vm.mask_comments,
      "dispatch": _vm.dispatch
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (true),
      expression: "true"
    }],
    staticClass: "cover",
    style: ('background:url(' + _vm.img + '/bg_cover.png);background-size:100% auto;')
  }, [_c('book-farm', {
    attrs: {
      "dispatch": _vm.dispatch,
      "img": _vm.img,
      "change": _vm.change
    }
  })], 1), _c('pages', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change,
      "dispatch": _vm.dispatch
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('canvas', {
    ref: "confetti",
    staticClass: "Confetti",
    class: _vm.class_
  })
},staticRenderFns: []}

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Comments",
    on: {
      "click": _vm.show
    }
  }, _vm._l((_vm.comments), function(a) {
    return _c('div', {
      staticClass: "panel-arrow",
      class: a.state
    }, [_c('div', {
      staticClass: "arrow"
    }), _c('div', {
      staticClass: "panel"
    }, [_vm._v("\n      " + _vm._s(a.text) + "\n    ")])])
  }))
},staticRenderFns: []}

/***/ }),
/* 153 */,
/* 154 */,
/* 155 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Fog",
    class: _vm.class_
  }, [_c('div', {
    staticClass: "img",
    style: ('background-image:url(' + _vm.img + '/fog.png); background-size:15rem auto;')
  })])
},staticRenderFns: []}

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.change.stage === 1),
      expression: "change.stage===1"
    }],
    staticClass: "end-page",
    style: ('background-image:url(' + _vm.img + '/bg.jpg);background-size:4rem 4rem;')
  }, [_c('div', {
    staticClass: "text_top"
  }, [_vm._v("\n    春天接羔，夏天催膘，秋天配种，冬天孕育。羊的一生是牧人的一年，牧人的一生呢？这绵延千里的家园，这些大地最隐秘微小的褶皱，这每一处最狭小脆弱的栖身之地……青春啊，财富啊，爱情啊，希望啊，全都默默无声……\n  ")]), _c('div', {
    staticClass: "text_title"
  }, [_vm._v("\n    《冬牧场》\n  ")]), _c('div', {
    staticClass: "text_sub"
  }, [_c('p', [_vm._v("——李娟著")]), _c('img', {
    attrs: {
      "src": _vm.img + '/to_learn.png'
    },
    on: {
      "click": _vm.show
    }
  })]), _c('div', {
    staticClass: "text_what"
  }, [_vm._v("\n    她的散文被称为本世纪最后的散文\n  ")]), _c('img', {
    staticClass: "btn_read",
    attrs: {
      "src": _vm.img + '/btn_read.png'
    }
  }), _c('comments', {
    attrs: {
      "change": _vm.change,
      "dispatch": _vm.dispatch
    }
  }), _c('div', {
    staticClass: "btns"
  }, [_c('div', {
    staticClass: "btn_share"
  }, [_vm._v("\n      分享\n    ")]), _c('div', {
    staticClass: "btn_replay",
    on: {
      "click": function($event) {
        _vm.dispatch({
          type: 'REPLAY'
        })
      }
    }
  }, [_vm._v("\n      再看一遍\n    ")])])], 1)
},staticRenderFns: []}

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "FlipBook"
  }, [_c('div', {
    ref: "book",
    staticClass: "book112"
  }, [_c('div', {
    staticClass: "page11",
    style: ('background-image:url(' + _vm.img + '/bg_0.png);background-size:100% auto;')
  }, [_c('page0', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change
    }
  })], 1), _c('div', {
    staticClass: "page11"
  }), _c('div', {
    staticClass: "page11",
    style: ('background-image:url(' + _vm.img + '/bg_1.png);background-size:100% auto;')
  }, [_c('page1', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change
    }
  })], 1), _c('div', {
    staticClass: "page11"
  }), _c('div', {
    staticClass: "page11",
    style: ('background-image:url(' + _vm.img + '/bg_2.png);background-size:100% auto;')
  }, [_c('page2', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change
    }
  })], 1), _c('div', {
    staticClass: "page11"
  }), _c('div', {
    staticClass: "page11"
  }, [_c('end-page', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change,
      "dispatch": _vm.dispatch
    }
  })], 1)])])
},staticRenderFns: []}

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.show),
      expression: "mask.show"
    }],
    staticClass: "MaskAuthor"
  }, [_c('div', {
    staticClass: "content_666"
  }, [_c('div', {
    staticClass: "content_667",
    style: ('background-image:url(' + _vm.img + '/bg.jpg);background-size: 4rem 4rem;')
  }, [_c('img', {
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/close.png'
    },
    on: {
      "click": _vm.hide
    }
  }), _c('p', {
    staticClass: "p0"
  }, [_vm._v("李娟")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("1979年生于新疆。高中毕业后一度跟随家庭进入阿尔泰深山牧场，经营一家杂货店和裁缝铺，与逐水草而居的哈萨克牧民共同生活。")]), _c('p', {
    staticClass: "p2"
  }, [_vm._v("1999年开始写作。出版有散文集《九篇雪》、《我的阿勒泰》、《阿勒泰的角落》、《走夜路请放声歌唱》，在读者中产生巨大回响，被誉为文坛清新之风，来自阿勒泰的精灵吟唱。现供职于阿勒泰喀纳斯景区。")])])])])
},staticRenderFns: []}

/***/ }),
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ })
/******/ ]);