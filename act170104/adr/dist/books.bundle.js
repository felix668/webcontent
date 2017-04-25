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
/******/ 	return __webpack_require__(__webpack_require__.s = 167);
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
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */,
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
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var root = new Vue({
	el: '#root',
	components: {
		App: __webpack_require__(106)
	},
	template: '<app></app>'
});

// if(module.hot) {
// 	module.hot.accept(function(err) {
// 		if(err) {
// 			console.error("Cannot apply hot update", err);
// 		}
// 	});
// }

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_books_js__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_books_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__store_store_books_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

		MaskRules: __webpack_require__(129),
		MaskInfo: __webpack_require__(128),
		MaskBlack: __webpack_require__(127),

		Welcome: __webpack_require__(132),
		BookBlock: __webpack_require__(124),
		EndPage: __webpack_require__(125),
		Flipper: __webpack_require__(126)
	},
	data: function () {
		return __WEBPACK_IMPORTED_MODULE_0__store_store_books_js___default.a.state;
	},
	computed: {},
	watch: {},
	created: function () {},
	mounted: function () {
		this.act({ type: 'INIT' });
		//console.log(this)
	},
	methods: {
		act: __WEBPACK_IMPORTED_MODULE_0__store_store_books_js___default.a.act,
		touchstart: function (e) {
			//e.preventDefault();
		}
	}
};

/***/ }),
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
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BookBlock_less__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BookBlock_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__BookBlock_less__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var bb;

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		id: {},
		name: {},
		count: {},
		days: {},
		hasDiscount: {},
		discount: {},

		act: {},
		img: {},
		loggedIn: {},

		name: {},
		books: {},

		stage: {},
		current: {}
	},
	computed: {},
	components: {
		Scroller: __webpack_require__(131)
	},
	data: function () {
		return {
			show: false,
			class_: '',

			initialized: false,
			hand: '',

			Y0: 0,
			Y2: 0
		};
	},
	watch: {
		stage: function (nv, ov) {
			if (ov === 1 && nv === 2) {
				this.class_ = 'leave';
			} else if (ov === 2 && nv === 1) {
				this.class_ = '';
			} else if (ov === 0 && nv === 1) {
				if (this.initialized === false) {
					//this.show = true;
					this.hand = 'active';
					this.initialized = true;
					setTimeout(() => {
						this.hand = '';
					}, 4000);
				};
			}
		},
		current: function (nv, ov) {
			if (nv > ov) {
				bb.next();
			} else {
				bb.prev();
			}
		},
		books: function () {
			setTimeout(() => {
				bb = new BookBlock(document.querySelector('#bb-bookblock'), {
					orientation: 'horizontal',
					speed: 300
				});
			}, 500);
		}
	},
	mounted: function () {
		// setTimeout(()=>{


		// 	// add navigation events
		// 	// document.querySelector('#bb-nav-next').addEventListener( 'click', function() {
		// 	// 	bb.next();
		// 	// 	return false;
		// 	// } );
		// 	// document.querySelector('#bb-nav-prev').addEventListener( 'click', function() {
		// 	// 	bb.prev();
		// 	// 	return false;
		// 	// } );
		// },500);
	},
	methods: {
		touchstart: function (e) {
			e.stopPropagation();
			this.Y0 = e.changedTouches[0].pageY;
		},
		touchmove: function (e) {
			e.stopPropagation();
			e.preventDefault();
		},
		touchend: function (e) {
			//e.stopPropagation();
			this.Y2 = e.changedTouches[0].pageY;
			var distanceY = this.Y2 - this.Y0;

			this.act({
				type: 'SWITCH',
				direction: function () {
					if (distanceY > 3) {
						return 'down';
					} else if (distanceY < -3) {
						return 'up';
					} else {
						return 'do nothing';
					};
				}()
			});
		},
		click: function (e) {
			e.stopPropagation();
			//this.act({type:'SWITCH',direction:'up'})
		}
	}
};

/***/ }),
/* 51 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		id: {},
		hasDiscount: {},
		act: {},

		img: {},
		others: {},
		loggedIn: {},
		stage: {}
	},
	components: {
		Rules: __webpack_require__(130)
	},
	data: function () {
		return {
			class_: '',

			Y0: 0,
			Y2: 0
		};
	},
	watch: {
		// stage: function(nv,ov){
		// 	if( ov===1&&nv===2 ){
		// 		this.class_ = 'enter';
		// 	}
		// }
	},
	mounted: function () {
		//this.act({type:'STAGE',i:1})
	},
	methods: {
		touchstart: function (e) {
			e.stopPropagation();
			this.Y0 = e.changedTouches[0].pageY;
		},
		touchmove: function (e) {
			e.preventDefault();
		},
		touchend: function (e) {
			e.stopPropagation();
			this.Y2 = e.changedTouches[0].pageY;
			var distance = this.Y2 - this.Y0;
			if (distance > 3) {
				this.act({
					type: 'SWITCH',
					direction: 'down'
				});
			}
		}
	}
};

/***/ }),
/* 52 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	data: function () {
		return {
			items: [{
				background: 'red'
			}, {
				background: 'orange'
			}],
			current: 0
		};
	},
	methods: {
		turn: function () {
			this.$refs.page0.classList.add('active');
		}
	}
};

/***/ }),
/* 53 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		state: {},
		act: {}
	},
	methods: {
		click: function () {
			this.act({ type: 'HIDE', what: 'mask_black' });
		}
	}
};

/***/ }),
/* 54 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		state: {},
		act: {}
	},
	methods: {
		click: function () {
			this.act({ type: 'HIDE', what: 'mask_info' });
			this.act({ type: 'SWITCH', direction: 'up' });
		}
	}
};

/***/ }),
/* 55 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		id: {},
		hasDiscount: {},

		img: {},
		state: {},
		act: {}
	},
	mounted: function () {},
	methods: {}
};

/***/ }),
/* 56 */
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
		id: {},
		hasDiscount: {},

		act: {},
		img: {}
	},
	data: function () {
		return {
			writers: function () {
				return (/writers\.html/.test(location.href)
				);
			}()
		};
	},
	methods: {
		TO_CONTACT: function () {
			this.act({
				type: 'TO_CONTACT'
			});
		}
	}

};

/***/ }),
/* 57 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		items: {
			default: function () {
				return [{}, {}, {}, {}];
			}
		},
		img: {},
		discount: {},
		co: {},
		act: {}
	},
	computed: {
		books: function () {
			// var books = [];
			// for( let i = 2;i<this.items.length;i++ ){
			// 	books.push( this.items[i] );
			// }
			// return books;
		}
	},
	data: function () {
		return {
			contentW: 0,
			trainW: 0,

			switching: false,
			inCycle: false,
			moveCount: 0,
			scrolling: false,
			trainOffsetX: 0,
			offset: 0,
			x0: 0,
			X1: 0,
			X2: 0,

			Y0: 0,
			Y1: 0,
			Y2: 0,

			currentOne: 0,
			transition: '0s',
			offset: 0
		};
	},
	watch: {
		co: function (n) {
			if (n < 4) {
				this.transition = '1000ms';
				this.trainOffsetX = 0;
			} else {
				this.transition = '1000ms';
				this.trainOffsetX = -(this.trainW - this.contentW);
			}
		}
	},
	mounted: function () {
		var self = this;
		// setTimeout(()=>{
		// 	this.setWidth();
		// },50)
		// if( this.co<4 ){
		// 	this.transition = '0s';
		// 	this.trainOffsetX = 0;
		// }else{
		// 	this.transition = '0s';
		// 	this.trainOffsetX = -(this.trainW-this.contentW);
		// };
		// window.addEventListener('load',()=>{
		// 	setTimeout(()=>{
		// 		this.setWidth();
		// 	},50)
		// });
		window.addEventListener('resize', () => {
			setTimeout(() => {
				this.setWidth();
			}, 50);
		});
	},
	methods: {
		setWidth: function () {
			//var elem = this.$refs.train;
			this.contentW = Number(document.defaultView.getComputedStyle(this.$refs.content).width.replace(/px/, ''));
			this.trainW = Number(document.defaultView.getComputedStyle(this.$refs.train).width.replace(/px/, ''));
			//console.log(this.contentW,this.trainW)
			// this.width = width;
			// this.transition = '0s';
			//this.trainOffsetX = -this.currentOne*this.width;	
		},
		touchstart: function (e) {
			//console.log(this.inCycle)
			this.setWidth();
			e.stopPropagation();
			if (!this.inCycle) {
				// begin a new cycle
				this.inCycle = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.transition = '0s';

				this.X0 = this.X1 = e.changedTouches[0].pageX;
				this.Y0 = this.Y1 = e.changedTouches[0].pageY;
			};
		},
		touchmove: function (e) {
			e.stopPropagation();
			if (this.inCycle) {
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
						//console.log(this.trainOffsetX)
					}
					e.preventDefault();
				} else {
					e.preventDefault();
				}
			}
		},
		touchend: function (e) {
			e.stopPropagation();
			if (this.inCycle && !this.scrolling) {
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X1;
				//this.transition = '0s';
				this.trainOffsetX += distance;
				this.switching = false;
				this.inCycle = false;
			} else {
				this.Y2 = e.changedTouches[0].pageY;
				var distanceY = this.Y2 - this.Y0;
				//console.log(distanceY)
				this.act({
					type: 'SWITCH',
					direction: function () {
						if (distanceY > 3) {
							return 'down';
						} else if (distanceY < -3) {
							return 'up';
						} else {
							return '';
						};
					}()
				});
				this.switching = false;
				this.inCycle = false;
			}
		}
	}
};

/***/ }),
/* 58 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		id: {},
		taken: {},
		hasDiscount: {},
		discount: {},
		black: {},
		img: {},
		act: {},

		replay: {},
		loggedIn: {},
		stage: {}
	},
	data: function () {
		return {
			class_: '',

			Y0: 0,
			Y2: 0
		};
	},
	watch: {
		stage: function (nv, ov) {
			if (ov === 0 && nv === 1) {
				this.class_ = 'leave';
			} else if (ov === 1 && nv === 0) {
				this.class_ = '';
			}
		}
	},
	mounted: function () {
		//this.act({type:'STAGE',i:1})
	},
	methods: {
		touchstart: function (e) {
			e.stopPropagation();
			this.Y0 = e.changedTouches[0].pageY;
		},
		touchmove: function (e) {
			e.stopPropagation();
			e.preventDefault();
		},
		touchend: function (e) {
			e.stopPropagation();
			this.Y2 = e.changedTouches[0].pageY;
			var distance = this.Y2 - this.Y0;
			if (distance < -3) {
				this.act({
					type: 'SWITCH',
					direction: 'up'
				});
			}
		}
	}
};

/***/ }),
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var state = {
	img: '../adr/img/booksList',

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

function reducer(state, action) {
	var self = this;
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
			self[action.what].show = true;
			break;
		case 'HIDE':
			console.log('hide');
			self[action.what].show = false;
			break;
	}
}

exports.default = { state: state, reducer: reducer };

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var books = [__webpack_require__(63).default, __webpack_require__(64).default, __webpack_require__(65).default, __webpack_require__(66).default];

var pages = [{
	id: 0,
	name: '畅销',
	count: 25,
	days: 5
}, {
	id: 1,
	name: '经典',
	count: 50,
	days: 5
}, {
	id: 2,
	name: '包月',
	count: 20,
	days: 5
}, {
	id: 3,
	name: '影视',
	count: 10,
	days: 5
}];

var z_type = function () {
	var el = document.querySelector('[z-type]');
	var val = el.getAttribute('z-type');
	return Number(val);
}();

var state = {
	z_type: z_type,
	id: z_type,
	name: pages[z_type].name,
	count: pages[z_type].count,
	days: pages[z_type].days,
	others: function () {
		var arr = [];
		pages.forEach(function (a) {
			if (a.id !== z_type && a.id !== 2) {
				arr.push(a);
			}
		});
		return arr;
	}(),
	hasDiscount: function () {
		return (/_discount/.test(location.href)
		);
	}(),
	replay: common.param('z_replay') === 'true' ? true : false,

	sex: '',
	taken: false,
	black: false,

	discount: '限免',

	books: [],

	stage: 0,
	current: 0,
	switching: false
};

function reducer(state, action) {
	var self = this;

	switch (action.type) {

		case 'INIT':
			if (self.dev) {
				window.addEventListener('load', function () {
					var _self$books;

					// self.loggedIn = true;
					// self.black = true;
					// self.mask_black.show = true;

					self.sex = 'female';
					(_self$books = self.books).push.apply(_self$books, _toConsumableArray(books[self.z_type][self.sex]));
					if (self.z_type !== 2) {
						if (self.hasDiscount) {
							self.discount = '7折';
						};
					};
					//console.log(self.books)
					// setTimeout(()=>{
					// 	self.stage = 1;
					// 	self.stage = 2;
					// },50);
					if (self.replay) {
						self.stage = 1;
						self.loggedIn = true;
						setTimeout(function () {
							//self.stage = 2;
							self.page = 'ready';
						}, 500);
					} else {
						// self.loggedIn = true;
						// self.stage = 1;
						// self.stage = 2;
						self.page = 'ready';
					}
				});
			} else {
				//Local.forceLog( common.param('act_f'),'writers_toActors' );
				Local.forceLog(common.param('act_f'), 'SD_' + self.id + (self.hasDiscount ? 'discount' : '') + '_cover');
				Local.reqaObj(common.server() + 'pkg170104/init', function (data) {
					if (data) {
						console.log(data);
					};
					if (data.code === -4) {
						self.page = 'over';
					} else {
						self.loggedIn = data.isLogin;
						if (data.isLogin) {
							var _self$books2;

							self.sex = data.gender === 1 ? 'male' : 'female';
							(_self$books2 = self.books).push.apply(_self$books2, _toConsumableArray(books[self.z_type][self.sex]));

							// if( data.canPick===1 ){
							// }else if( data.canPick===-3 ){
							// 	self.taken = true;
							// }else{
							// 	self.black = true;
							// 	self.mask_black.show = true;
							// };

							// if( self.z_type!==2 ){
							// 	if( self.hasDiscount ){
							// 		if( data.isBlackUser ){
							// 			self.discount = '7折';
							// 		}else{
							// 			self.discount = '3折';
							// 		}
							// 	};
							// };

							if (data.isBlackUser) {
								self.black = true;
							};

							if (self.hasDiscount) {
								if (data.isBlackUser) {
									self.discount = '7折';
								} else {
									self.discount = '3折';
								}
							} else {
								if (data.isBlackUser) {
									self.mask_black.show = true;
								};
								if (self.z_type === 2) {
									if (data.canPick === 1) {} else if (data.canPick === -3) {
										self.taken = true;
									} else {
										// self.black = true;
										// self.mask_black.show = true;
									};
								};
							};
							// if( self.z_type===2 ){
							// 	if( self.black ){
							// 		self.mask_black.show = true;
							// 	};

							// 	if( data.canPick===1 ){
							// 	}else if( data.canPick===-3 ){
							// 		self.taken = true;
							// 	}else{
							// 		// self.black = true;
							// 		// self.mask_black.show = true;
							// 	};
							// }else{
							// 	if( self.hasDiscount ){
							// 		if( self.black ){
							// 			self.discount = '7折';
							// 		}else{
							// 			self.discount = '3折';
							// 		}
							// 	}else{
							// 		self.mask_black.show = true;
							// 	}
							// }
						};
						if (self.replay) {
							self.stage = 1;
							setTimeout(function () {
								self.page = 'ready';
							}, 500);
						} else {
							setTimeout(function () {
								self.page = 'ready';
							}, 500);
						}
					};
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
			break;
		case 'TAKE':
			if (self.dev) {
				self.taken = true;
				self.mask_info.show = true;
			} else {
				Local.forceLog(common.param('act_f'), 'SD_' + self.id + (self.hasDiscount ? 'discount' : '') + '_take');
				Local.reqaObj(common.server() + 'pkg170104/pick', function (data) {
					console.log(data);
					if (data.code === 1) {
						self.taken = true;
						self.mask_info.show = true;
					} else {
						Local.showToast(data.msg);
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
			break;

		// case 'STAGE':
		// 	this.stage = action.i;
		// 	break;

		case 'SWITCH':
			//console.log(self.current)
			//console.log(self.stage+' '+self.current)
			if (!self.switching) {
				if (self.loggedIn) {
					if (!self.hasDiscount && self.black) {} else {
						self.switching = true;
						if (self.stage === 0) {
							if (action.direction === 'up') {
								self.stage = 1;
								Local.forceLog(common.param('act_f'), 'SD_' + self.id + (self.hasDiscount ? 'discount' : '') + '_card' + self.current);
							};
							setTimeout(function () {
								self.switching = false;
							}, 400);
						} else if (self.stage === 1) {
							if (action.direction === 'up') {
								if (self.current < self.books.length - 1) {
									self.current++;
									Local.forceLog(common.param('act_f'), 'SD_' + self.id + (self.hasDiscount ? 'discount' : '') + '_card' + self.current);
								} else {
									self.stage = 2;
								}
							} else if (action.direction === 'down') {
								if (self.current > 0) {
									self.current--;
									Local.forceLog(common.param('act_f'), 'SD_' + self.id + (self.hasDiscount ? 'discount' : '') + '_card' + self.current);
								} else {
									self.stage = 0;
								}
							};
							setTimeout(function () {
								self.switching = false;
							}, 800);
						} else {
							if (action.direction === 'down') {
								self.stage = 1;
								Local.forceLog(common.param('act_f'), 'SD_' + self.id + (self.hasDiscount ? 'discount' : '') + '_card' + self.current);
							}
							setTimeout(function () {
								self.switching = false;
							}, 500);
						}
					};
				};
			};
			break;
		// case 'REPLAY':
		// 	location.href = location.href;
		// 	break;

	}
}

exports.default = { state: state, reducer: reducer };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	id: 0,
	name: '畅销',
	male: [{
		className: '花都言情',
		books: [{ "bid": "479232", "title": "校花的贴身高手", "author": "鱼人二代" }, { "bid": "13528321", "title": "透视小医神", "author": "小萌狼" }, { "bid": "520146", "title": "极品全能学生", "author": "花都大少" }, { "bid": "660366", "title": "茅山捉鬼人", "author": "青子" }, { "bid": "11420428", "title": "极品透视小仙医", "author": "流水曲觞" }]
	}, {
		className: '异世大陆',
		books: [{ "bid": "819435", "title": "一念永恒", "author": "耳根" }, { "bid": "413455", "title": "凌天战尊", "author": "风轻扬" }, { "bid": "661867", "title": "永恒圣帝", "author": "千寻月" }, { "bid": "817386", "title": "放开那个女巫", "author": "二目" }, { "bid": "804453", "title": "龙王传说", "author": "唐家三少" }]
	}, {
		className: '热血狂战',
		books: [{ "bid": "14608738", "title": "圣墟", "author": "辰东" }, { "bid": "715580", "title": "单兵为王", "author": "七品" }, { "bid": "462523", "title": "大主宰", "author": "天蚕土豆" }, { "bid": "561940", "title": "太古神王", "author": "净无痕" }, { "bid": "513571", "title": "网游之逆天戒指", "author": "上古圣贤" }]
	}, {
		className: '沙场点兵',
		books: [{ "bid": "295037", "title": "最强兵王", "author": "丛林狼" }, { "bid": "738984", "title": "抗日之特战兵王", "author": "寂寞剑客" }, { "bid": "523730", "title": "三国之召唤猛将", "author": "青铜剑客" }, { "bid": "13772999", "title": "龙组兵王", "author": "尘风" }, { "bid": "216428", "title": "超级兵王在都市", "author": "明日复明日" }]
	}, {
		className: '位面重生',
		books: [{ "bid": "648963", "title": "万古神帝", "author": "飞天鱼" }, { "bid": "1001760719", "title": "重生之都市修仙", "author": "十里剑神" }, { "bid": "462597", "title": "帝霸", "author": "厌笔萧生" }, { "bid": "808100", "title": "白袍总管", "author": "萧舒" }, { "bid": "13714606", "title": "火影之最强震遁", "author": "夜南听风" }]
	}],
	female: [{
		className: '豪门情缘',
		books: [{ "bid": "13700974", "title": "隔墙有男神：强行相爱100天", "author": "叶非夜" }, { "bid": "1000875951", "title": "豪门少奶奶：谢少的心尖宠妻", "author": "凤元糖果" }, { "bid": "13691462", "title": "99次离婚：厉少，请低调", "author": "万里里" }, { "bid": "839294", "title": "烽火红颜，少帅的女人", "author": "妤饵" }, { "bid": "823451", "title": "军长宠妻：重生农媳逆袭", "author": "懒百合" }]
	}, {
		className: '甜蜜爱恋',
		books: [{ "bid": "13430981", "title": "恶魔的专属：丫头，你好甜", "author": "默小水" }, { "bid": "13724396", "title": "军婚绵绵：顾少，宠妻无度", "author": "灿淼爱鱼" }, { "bid": "13648272", "title": "隐婚100分：惹火娇妻嫁一送一", "author": "囧囧有妖" }, { "bid": "791319", "title": "完美恋人，首席已过期", "author": "素痕残妆" }, { "bid": "12819626", "title": "隐婚蜜爱：偏执老公宠上瘾", "author": "猪宝宝萌萌哒" }]
	}, {
		className: '妃常嚣张',
		books: [{ "bid": "11758803", "title": "绝色妖娆：鬼医至尊", "author": "凤炅" }, { "bid": "610993", "title": "神医弃女：邪王霸爱小狂妃", "author": "蛇发优雅" }, { "bid": "737545", "title": "废材纨绔之腹黑邪妃", "author": "柒月甜" }, { "bid": "13302748", "title": "医毒双绝：冥王的天才宠妃", "author": "相思梓" }, { "bid": "709317", "title": "一品仙娇", "author": "文飘过峰" }]
	}, {
		className: '娘子当嫁',
		books: [{ "bid": "13714997", "title": "神医小毒妃：皇叔，别凶猛", "author": "杨十九" }, { "bid": "738867", "title": "嫡女当嫁：一等世子妃", "author": "奶油饼干" }, { "bid": "817556", "title": "摄政王绝宠之惑国煞妃", "author": "温暖的月光" }, { "bid": "827407", "title": "喜劫良缘，纨绔俏医妃", "author": "莉莉薇" }, { "bid": "825825", "title": "农女当道：山里老公好调教", "author": "紫雪凝烟" }]
	}, {
		className: '重生虐渣',
		books: [{ "bid": "13565048", "title": "快穿女配：反派BOSS有毒", "author": "墨泠" }, { "bid": "820350", "title": "重生之至尊千金", "author": "一路烦花" }, { "bid": "814031", "title": "嫡女重生：小妾不好欺", "author": "夏染雪" }, { "bid": "13755708", "title": "七零年，有点甜", "author": "七星草" }, { "bid": "497218", "title": "穿越未来之男人不好当", "author": "汝夫人" }]
	}]
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	id: 1,
	name: '经典',
	male: [{
		className: '洪荒神话',
		books: [{ "bid": "462521", "title": "完美世界", "author": "辰东", "type": "玄幻" }, { "bid": "462596", "title": "武极天下", "author": "蚕茧里的牛", "type": "玄幻" }, { "bid": "319657", "title": "三界独尊", "author": "犁天", "type": "玄幻" }, { "bid": "462589", "title": "造化之门", "author": "鹅是老五", "type": "仙侠" }, { "bid": "462599", "title": "帝尊", "author": "宅猪", "type": "仙侠" }, { "bid": "462522", "title": "莽荒纪", "author": "我吃西红柿", "type": "仙侠" }, { "bid": "462590", "title": "一世之尊", "author": "爱潜水的乌贼", "type": "玄幻" }, { "bid": "478670", "title": "全职高手", "author": "蝴蝶蓝", "type": "游戏" }, { "bid": "502041", "title": "惟我神尊", "author": "傲无常", "type": "玄幻" }, { "bid": "498497", "title": "苍穹龙骑", "author": "华表", "type": "玄幻" }]
	}, {
		className: '重生传奇',
		books: [{ "bid": "499686", "title": "重生之神级败家子", "author": "辰机唐红豆", "type": "都市" }, { "bid": "488347", "title": "唐砖", "author": "孑与2", "type": "历史" }, { "bid": "498953", "title": "大宋的智慧", "author": "孑与2", "type": "历史" }, { "bid": "486965", "title": "八零后少林方丈", "author": "黑土冒青烟", "type": "玄幻" }, { "bid": "481014", "title": "我的老婆是军阀", "author": "录事参军", "type": "历史" }, { "bid": "485464", "title": "天才相师", "author": "打眼", "type": "都市" }, { "bid": "495203", "title": "宝鉴", "author": "打眼", "type": "都市" }, { "bid": "472524", "title": "官神", "author": "何常在", "type": "职场" }, { "bid": "484857", "title": "神煌", "author": "开荒", "type": "玄幻" }, { "bid": "472154", "title": "曹贼", "author": "庚新", "type": "历史" }]
	}, {
		className: '王者涅槃',
		books: [{ "bid": "465030", "title": "凡人修仙传", "author": "忘语", "type": "仙侠" }, { "bid": "474235", "title": "吞噬星空", "author": "我吃西红柿", "type": "科幻" }, { "bid": "506017", "title": "长生界", "author": "辰东", "type": "玄幻" }, { "bid": "471689", "title": "武神", "author": "苍天白鹤", "type": "玄幻" }, { "bid": "486530", "title": "光明纪元", "author": "血红", "type": "玄幻" }, { "bid": "472518", "title": "异世邪君", "author": "风凌天下", "type": "玄幻" }, { "bid": "469498", "title": "仙逆", "author": "耳根", "type": "仙侠" }, { "bid": "462952", "title": "将夜", "author": "猫腻", "type": "玄幻" }, { "bid": "463936", "title": "惟我独仙", "author": "唐家三少", "type": "仙侠" }, { "bid": "466675", "title": "盘龙", "author": "我吃西红柿", "type": "奇幻" }]
	}, {
		className: '大神风采',
		books: [{ "bid": "469039", "title": "间客", "author": "猫腻", "type": "玄幻" }, { "bid": "474065", "title": "黄金瞳", "author": "打眼", "type": "都市" }, { "bid": "476638", "title": "天珠变", "author": "唐家三少", "type": "玄幻" }, { "bid": "478487", "title": "偷天", "author": "血红", "type": "仙侠" }, { "bid": "469493", "title": "弄潮", "author": "瑞根", "type": "职场" }, { "bid": "562932", "title": "黄金渔场", "author": "全金属弹壳", "type": "都市" }, { "bid": "462592", "title": "庆余年", "author": "猫腻", "type": "历史" }, { "bid": "473634", "title": "召唤万岁", "author": "霞飞双颊", "type": "玄幻" }, { "bid": "506019", "title": "寂灭天骄", "author": "高楼大厦", "type": "科幻" }, { "bid": "471552", "title": "猎国", "author": "跳舞", "type": "玄幻" }]
	}, {
		className: '精品书目',
		books: [{ "bid": "482821", "title": "最终进化", "author": "卷土", "type": "科幻" }, { "bid": "484963", "title": "龙骑战机", "author": "华表", "type": "科幻" }, { "bid": "489672", "title": "胜者为王", "author": "林海听涛", "type": "体育" }, { "bid": "488055", "title": "惊门", "author": "徐公子胜治", "type": "都市" }, { "bid": "489523", "title": "超级能源强国", "author": "志鸟村", "type": "职场" }, { "bid": "479585", "title": "首席御医", "author": "银河九天", "type": "都市" }, { "bid": "467323", "title": "王牌进化", "author": "卷土", "type": "科幻" }, { "bid": "466112", "title": "琴帝", "author": "唐家三少", "type": "奇幻" }, { "bid": "482324", "title": "工业霸主", "author": "齐橙", "type": "都市" }, { "bid": "465955", "title": "恶魔法则", "author": "跳舞", "type": "玄幻" }]
	}],

	female: [{
		className: '重生指南',
		books: [{ "bid": "504494", "title": "金陵春", "author": "吱吱", "type": "古代言情" }, { "bid": "389037", "title": "嫡女重生记", "author": "六月浩雪", "type": "古代言情" }, { "bid": "562666", "title": "诛砂", "author": "希行", "type": "古代言情" }, { "bid": "502790", "title": "大妆", "author": "青铜穗", "type": "古代言情" }, { "bid": "462604", "title": "阿莞", "author": "予方", "type": "古代言情" }, { "bid": "483704", "title": "世婚", "author": "意千重", "type": "古代言情" }, { "bid": "490750", "title": "九重紫", "author": "吱吱", "type": "古代言情" }, { "bid": "518780", "title": "重生之温婉", "author": "六月浩雪", "type": "古代言情" }, { "bid": "492355", "title": "嫡谋", "author": "面北眉南", "type": "古代言情" }, { "bid": "488923", "title": "良婿", "author": "意千重", "type": "古代言情" }]
	}, {
		className: '名门手札',
		books: [{ "bid": "476149", "title": "药窕淑女", "author": "琴律", "type": "古代言情" }, { "bid": "488360", "title": "富贵荣华", "author": "府天", "type": "古代言情" }, { "bid": "485550", "title": "药结同心", "author": "希行", "type": "古代言情" }, { "bid": "490631", "title": "原配宝典", "author": "寒武记", "type": "古代言情" }, { "bid": "481987", "title": "卿本风流", "author": "林家成", "type": "古代言情" }, { "bid": "609652", "title": "倾世宠妻", "author": "寒武记", "type": "古代言情" }, { "bid": "486141", "title": "花开锦绣", "author": "吱吱", "type": "古代言情" }, { "bid": "498318", "title": "娇娘医经", "author": "希行", "type": "古代言情" }, { "bid": "490991", "title": "名门医女", "author": "希行", "type": "古代言情" }, { "bid": "476791", "title": "冠盖满京华", "author": "府天", "type": "古代言情" }]
	}, {
		className: '宅斗攻略',
		books: [{ "bid": "503263", "title": "炮灰攻略", "author": "莞尔wr", "type": "古代言情" }, { "bid": "480780", "title": "金风玉露", "author": "柳暗花溟", "type": "古代言情" }, { "bid": "478442", "title": "国色芳华", "author": "意千重", "type": "古代言情" }, { "bid": "481251", "title": "丹凤朝阳", "author": "卫风", "type": "古代言情" }, { "bid": "496959", "title": "美人温雅", "author": "林家成", "type": "古代言情" }, { "bid": "474018", "title": "庶女攻略", "author": "吱吱", "type": "古代言情" }, { "bid": "503032", "title": "掌家娘子", "author": "云霓", "type": "古代言情" }, { "bid": "502561", "title": "盛世妖颜", "author": "寒武记", "type": "古代言情" }, { "bid": "475094", "title": "新唐遗玉", "author": "三月果", "type": "古代言情" }, { "bid": "475692", "title": "生于望族", "author": "Loeva", "type": "古代言情" }]
	}, {
		className: '职同道合',
		books: [{ "bid": "827190", "title": "田园闺事", "author": "莞尔wr", "type": "古代言情" }, { "bid": "491151", "title": "补天记", "author": "寒武记", "type": "玄幻言情" }, { "bid": "490002", "title": "美人谋律", "author": "柳暗花溟", "type": "古代言情" }, { "bid": "465629", "title": "猫游记", "author": "禾早", "type": "游戏竞技" }, { "bid": "481689", "title": "珠光宝鉴", "author": "短耳猫咪", "type": "现代言情" }, { "bid": "518777", "title": "北宋生活顾问", "author": "阿昧", "type": "古代言情" }, { "bid": "483614", "title": "重生空间守则", "author": "寒武记", "type": "古代言情" }, { "bid": "486594", "title": "重生小地主", "author": "弱颜", "type": "古代言情" }, { "bid": "495762", "title": "伪宋杀手日志", "author": "袖唐", "type": "古代言情" }, { "bid": "483650", "title": "伪术士的悠闲生活", "author": "糖拌饭", "type": "仙侠奇缘" }]
	}, {
		className: '精品风向',
		books: [{ "bid": "392495", "title": "美人为馅", "author": "丁墨", "type": "现代言情" }, { "bid": "465893", "title": "家有妖夫", "author": "晚歌清雅", "type": "浪漫青春" }, { "bid": "480310", "title": "极品女仙", "author": "金铃动", "type": "仙侠奇缘" }, { "bid": "527361", "title": "千金归来", "author": "shisanchun", "type": "现代言情" }, { "bid": "491874", "title": "仙灵图谱", "author": "云芨", "type": "仙侠奇缘" }, { "bid": "500820", "title": "宁小闲御神录", "author": "风行水云间", "type": "玄幻言情" }, { "bid": "533779", "title": "征服游戏：野性小妻难驯服", "author": "公子如雪", "type": "现代言情" }, { "bid": "607991", "title": "神医弃女：鬼帝的驭兽狂妃", "author": "MS芙子", "type": "玄幻言情" }, { "bid": "480953", "title": "重生超级巨星", "author": "迷路的龙", "type": "现代言情" }, { "bid": "487564", "title": "银河第一纪元", "author": "迷路的龙", "type": "科幻空间" }]
	}]
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	id: 2,
	name: '包月',
	male: [{
		className: '强者之巅',
		books: [{ "bid": "13503674", "title": "最强特种兵王", "author": "云中羊", "type": "军事" }, { "bid": "488601", "title": "武神空间", "author": "傅啸尘", "type": "玄幻" }, { "bid": "216416", "title": "主宰之王", "author": "快餐店", "type": "玄幻" }, { "bid": "618612", "title": "末世大回炉", "author": "二十二刀流", "type": "科幻" }, { "bid": "11636933", "title": "仙道邪君", "author": "昨夜南风", "type": "仙侠" }]
	}, {
		className: '娱乐教皇',
		books: [{ "bid": "356106", "title": "我真是大明星", "author": "尝谕", "type": "职场" }, { "bid": "467098", "title": "很纯很暧昧", "author": "鱼人二代", "type": "都市" }, { "bid": "714403", "title": "女总裁的专职司机", "author": "造化城主", "type": "都市" }, { "bid": "13812333", "title": "超级兵王", "author": "最佳恶人", "type": "军事" }, { "bid": "732092", "title": "妖孽霸主", "author": "郝帅帅", "type": "都市" }]
	}, {
		className: '茅山之术',
		books: [{ "bid": "342272", "title": "阴阳先生", "author": "巫九", "type": "灵异" }, { "bid": "616772", "title": "与千年女鬼同居的日子", "author": "卜非", "type": "灵异" }, { "bid": "349652", "title": "焚天之怒", "author": "妖夜", "type": "玄幻" }, { "bid": "432313", "title": "盖世仙尊", "author": "王小蛮", "type": "仙侠" }, { "bid": "562605", "title": "贞观大闲人", "author": "贼眉鼠眼", "type": "历史" }]
	}, {
		className: '位面王者',
		books: [{ "bid": "757329", "title": "网游之神级分解师", "author": "青烟一夜", "type": "游戏" }, { "bid": "13489043", "title": "都市至尊霸主", "author": "河帅", "type": "都市" }, { "bid": "815892", "title": "重生海贼王之副船长", "author": "天惊", "type": "二次元" }, { "bid": "13526418", "title": "九阳神诀", "author": "武小墨", "type": "武侠" }, { "bid": "497237", "title": "法师奥义", "author": "月中阴", "type": "奇幻" }]
	}],
	female: [{
		className: '甜蜜娇妻',
		books: [{ "bid": "536171", "title": "娱乐大亨的秘宠：甜心小呆妻", "author": "公子衍", "type": "现代言情" }, { "bid": "738907", "title": "腹黑老公溺宠：老婆不准躲", "author": "望月存雅", "type": "现代言情" }, { "bid": "11308842", "title": "翻窗做案：老公手下留情", "author": "灿淼爱鱼 ", "type": "现代言情" }, { "bid": "11352352", "title": "饿狼缠身：老公，别过来", "author": "饭掌柜", "type": "现代言情" }, { "bid": "13358773", "title": "Boss缠上身：娇妻，太撩人！", "author": "千桃", "type": "现代言情" }]
	}, {
		className: '医笑倾城',
		books: [{ "bid": "11315301", "title": "战神伪高冷：天降医妃拐回家", "author": "银子洛", "type": "古代言情" }, { "bid": "749395", "title": "弃女重生：神医太子妃", "author": "小小牧童", "type": "古代言情" }, { "bid": "717927", "title": "鸾凤还巢：锦绣嫡女倾天下", "author": "风吹小白菜 ", "type": "古代言情" }, { "bid": "815740", "title": "回眸医笑，冷王的神秘嫡妃", "author": "青酒沐歌", "type": "古代言情" }, { "bid": "631042", "title": "废材逆世：腹黑邪妃太嚣张", "author": "蓝白格子", "type": "玄幻言情" }]
	}, {
		className: '爱古恋今',
		books: [{ "bid": "758986", "title": " 娇宠令", "author": "叶惠美", "type": "古代言情" }, { "bid": "673982", "title": "京门风月", "author": "西子情", "type": "古代言情" }, { "bid": "174552", "title": "先婚厚爱", "author": "莫萦", "type": "现代言情" }, { "bid": "750439", "title": "妃要爬墙：王爷，相亲请排队", "author": "原来", "type": "古代言情" }, { "bid": "788312", "title": "豪门首席宠妻如命", "author": "水绕天涯", "type": "现代言情" }]
	}, {
		className: '群英荟萃',
		books: [{ "bid": "639825", "title": "快穿炮灰女配", "author": "本宫微胖", "type": "科幻空间" }, { "bid": "13772570", "title": "恶魔校草：甜吻拽丫头", "author": "夜清欢", "type": "浪漫青春" }, { "bid": "812784", "title": "巧姻缘，暗王的绝色傻妃", "author": "轻妩媚", "type": "仙侠奇缘" }, { "bid": "315769", "title": "首席的天价小妻子", "author": "韩降雪", "type": "现代言情" }, { "bid": "14607930", "title": "尸姐攻略", "author": "一缕冥火", "type": "科幻空间" }]
	}]
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	id: 3,
	name: '影视',
	male: [{
		className: '情感谍战',
		books: [{ "bid": "847730", "title": "放弃我，抓紧我（上）", "author": "苏静初" }, { "bid": "815339", "title": "欢乐颂（刘涛、王凯、靳东等主演）", "author": "阿耐" }, { "bid": "843542", "title": "翻译官", "author": "缪娟" }, { "bid": "827184", "title": "解密（陈学冬主演）", "author": "麦家" }, { "bid": "825037", "title": "我不是潘金莲（范冰冰主演）", "author": "刘震云" }]
	}, {
		className: '历史古装',
		books: [{ "bid": "726271", "title": "芈月传（全集）", "author": "蒋胜男" }, { "bid": "803852", "title": "太子妃升职记（全集）", "author": "鲜橙" }, { "bid": "184496", "title": "孤芳不自赏", "author": "风弄" }, { "bid": "631422", "title": "秀丽江山（全四册）", "author": "李歆" }, { "bid": "818472", "title": "九州·海上牧云记", "author": "今何在" }]
	}],
	female: [{
		className: '情感谍战',
		books: [{ "bid": "847730", "title": "放弃我，抓紧我（上）", "author": "苏静初" }, { "bid": "815339", "title": "欢乐颂（刘涛、王凯、靳东等主演）", "author": "阿耐" }, { "bid": "843542", "title": "翻译官", "author": "缪娟" }, { "bid": "827184", "title": "解密（陈学冬主演）", "author": "麦家" }, { "bid": "825037", "title": "我不是潘金莲（范冰冰主演）", "author": "刘震云" }]
	}, {
		className: '历史古装',
		books: [{ "bid": "726271", "title": "芈月传（全集）", "author": "蒋胜男" }, { "bid": "803852", "title": "太子妃升职记（全集）", "author": "鲜橙" }, { "bid": "184496", "title": "孤芳不自赏", "author": "风弄" }, { "bid": "631422", "title": "秀丽江山（全四册）", "author": "李歆" }, { "bid": "818472", "title": "九州·海上牧云记", "author": "今何在" }]
	}]
};

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(10);

var _base = __webpack_require__(60);

var _base2 = _interopRequireDefault(_base);

var _books = __webpack_require__(62);

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store.createStore)([_base2.default, _books2.default]);

exports.default = store;

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */,
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */,
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */,
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(94)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(154),
  /* scopeId */
  "data-v-793ea10c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(99)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(159),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(75)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(135),
  /* scopeId */
  "data-v-25c1dc81",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(88)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(148),
  /* scopeId */
  "data-v-6b4b25f2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(79)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(139),
  /* scopeId */
  "data-v-46f0646e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(77)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(137),
  /* scopeId */
  "data-v-38624f54",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(73)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(133),
  /* scopeId */
  "data-v-11784ac1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(80)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(140),
  /* scopeId */
  "data-v-4cc7cea4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(89)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(149),
  /* scopeId */
  "data-v-6b7450d3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(81)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(141),
  /* scopeId */
  "data-v-4def91d9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state.show),
      expression: "state.show"
    }],
    staticClass: "MaskRules"
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_c('img', {
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/close.png'
    },
    on: {
      "click": function($event) {
        _vm.act({
          type: 'HIDE',
          what: 'mask_rules'
        })
      }
    }
  }), _c('img', {
    staticClass: "rules_header",
    attrs: {
      "src": _vm.img + '/rules_header.png'
    }
  }), (_vm.id === 2) ? _c('div', {
    staticClass: "text"
  }, [_vm._m(0), _vm._m(1)]) : _vm._e(), (_vm.id !== 2 && _vm.hasDiscount === false) ? _c('div', {
    staticClass: "text"
  }, [_vm._m(2), _vm._m(3)]) : _vm._e(), (_vm.id !== 2 && _vm.hasDiscount === true) ? _c('div', {
    staticClass: "text"
  }, [_vm._m(4), _vm._m(5)]) : _vm._e()])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("1")]), _vm._v("活动时间：2017年1月31日-2月4日。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2")]), _vm._v("活动期间内，指定用户将领取到30天包月vip体验卡，在包月有效期内，看包月书籍全部免费。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("1")]), _vm._v("活动时间：2017年1月31日-2月4日。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2")]), _vm._v("活动期间内，此书单内书籍全部免费阅读。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("1")]), _vm._v("活动时间：2017年2月5日-2月7日。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2")]), _vm._v("活动期间内，可以以优惠价格购买书单内作品，特价结束后将恢复原价。")])
}]}

/***/ }),
/* 134 */,
/* 135 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "EndPage",
    class: _vm.class_,
    style: ('background:url(' + _vm.img + '/bg_1.png);background-size:100% auto;'),
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
  }, [_c('img', {
    staticClass: "more",
    attrs: {
      "src": _vm.img + '/more.png'
    }
  }), (_vm.id !== 2) ? _c('div', {
    staticClass: "links"
  }, _vm._l((_vm.others), function(a) {
    return _c('div', {
      staticClass: "chicken_book",
      style: ('background:url(' + _vm.img + '/chicken_book.png);background-size:100% auto;'),
      on: {
        "click": function($event) {
          _vm.act({
            type: 'TO_PAGE',
            id: a.id
          })
        }
      }
    }, [_c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(a.name) + _vm._s(!_vm.hasDiscount ? '免费' : '折扣'))])])
  })) : _vm._e(), (_vm.id === 2) ? _c('div', {
    staticClass: "links_2"
  }, _vm._l((_vm.others), function(a) {
    return _c('div', {
      staticClass: "chicken_book",
      style: ('background:url(' + _vm.img + '/chicken_book.png);background-size:100% auto;'),
      on: {
        "click": function($event) {
          _vm.act({
            type: 'TO_PAGE',
            id: a.id
          })
        }
      }
    }, [_c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(a.name) + _vm._s(!_vm.hasDiscount ? '免费' : '折扣'))])])
  })) : _vm._e(), _c('img', {
    staticClass: "replay",
    attrs: {
      "src": _vm.img + '/replay.png'
    },
    on: {
      "click": function($event) {
        _vm.act({
          type: 'TO_PAGE',
          id: _vm.id
        })
      }
    }
  }), _c('rules', {
    attrs: {
      "id": _vm.id,
      "has-discount": _vm.hasDiscount
    }
  }), _c('div', {
    staticClass: "copyright"
  }, [_vm._v("\n\t\t本活动最终解释权归QQ阅读所有\n\t")])], 1)
},staticRenderFns: []}

/***/ }),
/* 136 */,
/* 137 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state.show),
      expression: "state.show"
    }],
    staticClass: "MaskInfo"
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_vm._m(0), _c('p', {
    staticClass: "p1"
  }, [_vm._v("\r\n\t\t\t\t快去查看更多会员专享好书吧\r\n\t\t\t")]), _vm._m(1), _c('img', {
    staticClass: "btn",
    attrs: {
      "src": _vm.img + '/btn_got_it.png'
    },
    on: {
      "click": _vm.click
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "p0"
  }, [_vm._v("\r\n\t\t\t\t成功领取"), _c('span', [_vm._v("30天会员")]), _vm._v("资格\r\n\t\t\t")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "p2"
  }, [_vm._v("\r\n\t\t\t30天会员稍后会直接发放到您的账户，\r\n请到"), _c('span', [_vm._v("「我的账户」")]), _vm._v("中查看\r\n\t\t\t")])
}]}

/***/ }),
/* 138 */,
/* 139 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state.show),
      expression: "state.show"
    }],
    staticClass: "MaskBlack"
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_c('p', {
    staticClass: "p0"
  }, [_vm._v("\r\n\t\t\t\t活动只针对特定用户参加\r\n\t\t\t")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("\r\n\t\t\t\t祝新春快乐~~\r\n\t\t\t")]), _c('img', {
    staticClass: "btn",
    attrs: {
      "src": _vm.img + '/btn_got_it.png'
    },
    on: {
      "click": _vm.click
    }
  })])])])
},staticRenderFns: []}

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Rules"
  }, [_c('div', {
    staticClass: "rContent"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("活动规则")]), (_vm.id === 2) ? _c('div', {
    staticClass: "text"
  }, [_vm._m(0), _vm._m(1)]) : _vm._e(), (_vm.id !== 2 && _vm.hasDiscount === false) ? _c('div', {
    staticClass: "text"
  }, [_vm._m(2), _vm._m(3)]) : _vm._e(), (_vm.id !== 2 && _vm.hasDiscount === true) ? _c('div', {
    staticClass: "text"
  }, [_vm._m(4), _vm._m(5)]) : _vm._e()])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("1.")]), _vm._v("活动时间：2017年1月31日-2月4日。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2.")]), _vm._v("活动期间内，指定用户将领取到30天包月vip体验卡，在包月有效期内，看包月书籍全部免费。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("1.")]), _vm._v("活动时间：2017年1月31日-2月4日。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2.")]), _vm._v("活动期间内，此书单内书籍全部免费阅读。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("1.")]), _vm._v("活动时间：2017年2月5日-2月7日。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2.")]), _vm._v("活动期间内，可以以优惠价格购买书单内作品，特价结束后将恢复原价。")])
}]}

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Welcome",
    class: _vm.class_,
    style: ('background:url(' + _vm.img + '/bg_0.png);background-size:100% auto;'),
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
  }, [_c('p', {
    staticClass: "to_rules",
    on: {
      "click": function($event) {
        _vm.act({
          type: 'SHOW',
          what: 'mask_rules'
        })
      }
    }
  }, [_vm._v("活动规则")]), _c('img', {
    staticClass: "banner",
    attrs: {
      "src": _vm.img + '/banner_' + _vm.id + (_vm.hasDiscount ? '_discount' : '') + '.png'
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loggedIn && _vm.id !== 2),
      expression: "!loggedIn&&id!==2"
    }],
    staticClass: "to_login",
    style: ('background:url(' + _vm.img + '/btn.png);background-size:100% 100%;'),
    on: {
      "click": function($event) {
        _vm.act({
          type: 'TO_LOGIN'
        })
      }
    }
  }, [_vm._v("\n\t\t登录" + _vm._s(_vm.hasDiscount ? '享折扣' : '免费读') + "\n\t")]), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loggedIn && _vm.id === 2),
      expression: "!loggedIn&&id===2"
    }],
    staticClass: "to_login_to",
    attrs: {
      "src": _vm.img + '/btn_2.png'
    },
    on: {
      "click": function($event) {
        _vm.act({
          type: 'TO_LOGIN'
        })
      }
    }
  }), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loggedIn && _vm.id === 2 && _vm.black === false && _vm.taken === false),
      expression: "loggedIn&&id===2&&black===false&&taken===false"
    }],
    staticClass: "to_login_to",
    attrs: {
      "src": _vm.img + '/btn_to_take.png'
    },
    on: {
      "click": function($event) {
        _vm.act({
          type: 'TAKE'
        })
      }
    }
  }), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loggedIn && _vm.id === 2 && _vm.black === false && _vm.taken === true),
      expression: "loggedIn&&id===2&&black===false&&taken===true"
    }],
    staticClass: "to_login_to",
    attrs: {
      "src": _vm.img + '/btn_taken.png'
    }
  }), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!(!_vm.loggedIn || (!_vm.hasDiscount && _vm.black))),
      expression: " !(!loggedIn||(!hasDiscount&&black)) "
    }],
    staticClass: "circled_arrow",
    attrs: {
      "src": _vm.img + '/circled_arrow.png'
    },
    on: {
      "click": function($event) {
        _vm.act({
          type: 'SWITCH',
          direction: 'up'
        })
      }
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Flipper",
    on: {
      "click": _vm.turn
    }
  }, [_c('div', {
    ref: "page1",
    staticClass: "page"
  }, [_vm._v("1")]), _c('div', {
    ref: "page0",
    staticClass: "page"
  }, [_vm._v("0")])])
},staticRenderFns: []}

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Scroller"
  }, [_c('div', {
    ref: "content",
    staticClass: "content"
  }, [_c('div', {
    staticClass: "long_bar"
  }, [_c('div', {
    ref: "train",
    staticClass: "train",
    class: _vm.co >= 4 ? 'right' : '',
    style: ('transition:' + _vm.transition + ';transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);'),
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
  }, [_vm._l((_vm.items), function(a, i) {
    return _c('div', {
      staticClass: "item",
      on: {
        "click": function($event) {
          _vm.act({
            type: 'TO_BOOK',
            bid: a.bid
          })
        }
      }
    }, [_c('img', {
      staticClass: "cover",
      attrs: {
        "src": 'https://static.reader.qq.com/cover/' + a.bid % 1000 + '/' + a.bid + '/b_' + a.bid + '.jpg'
      }
    }), _c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(a.title))]), _c('p', {
      staticClass: "author"
    }, [_vm._v(_vm._s(a.author))]), _c('div', {
      staticClass: "discount",
      style: ('background:url(' + _vm.img + '/discount.png);background-size:100% 100%;')
    }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.discount) + "\t\n\t\t\t\t\t")])])
  }), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })], 2)])])])
},staticRenderFns: []}

/***/ }),
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "root"
    },
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      }
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
  }, [_c('mask-rules', {
    attrs: {
      "id": _vm.id,
      "has-discount": _vm.hasDiscount,
      "img": _vm.img,
      "state": _vm.mask_rules,
      "act": _vm.act
    }
  }), _c('mask-info', {
    attrs: {
      "img": _vm.img,
      "state": _vm.mask_info,
      "act": _vm.act
    }
  }), _c('mask-black', {
    attrs: {
      "img": _vm.img,
      "state": _vm.mask_black,
      "act": _vm.act
    }
  }), _c('welcome', {
    attrs: {
      "replay": _vm.replay,
      "id": _vm.id,
      "taken": _vm.taken,
      "black": _vm.black,
      "has-discount": _vm.hasDiscount,
      "discount": _vm.discount,
      "act": _vm.act,
      "img": _vm.img,
      "logged-in": _vm.loggedIn,
      "stage": _vm.stage
    }
  }), _c('book-block', {
    attrs: {
      "id": _vm.id,
      "count": _vm.count,
      "days": _vm.days,
      "has-discount": _vm.hasDiscount,
      "discount": _vm.discount,
      "act": _vm.act,
      "img": _vm.img,
      "name": _vm.name,
      "books": _vm.books,
      "stage": _vm.stage,
      "current": _vm.current,
      "logged-in": _vm.loggedIn
    }
  }), _c('end-page', {
    attrs: {
      "id": _vm.id,
      "has-discount": _vm.hasDiscount,
      "act": _vm.act,
      "img": _vm.img,
      "others": _vm.others,
      "current": _vm.current,
      "logged-in": _vm.loggedIn
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "BookBlock",
    class: _vm.class_,
    style: ('background:url(' + _vm.img + '/bg_1.png);background-size:100% auto;'),
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
  }, [_c('img', {
    staticClass: "hand",
    class: _vm.hand,
    attrs: {
      "src": _vm.img + '/hand.png'
    }
  }), _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "0.5rem"
    }
  }), (_vm.id !== 1) ? _c('div', {
    staticClass: "header",
    style: ('background:url(' + _vm.img + '/header_0.png);background-size:100% 100%;')
  }, [(_vm.id !== 2 && !_vm.hasDiscount) ? _c('div', {
    staticClass: "header-title_0"
  }, [_c('span', [_vm._v(_vm._s(_vm.count))]), _vm._v("本" + _vm._s(_vm.name) + "书限免"), _c('span', [_vm._v(_vm._s(_vm.days))]), _vm._v("天\n\t\t\t")]) : _vm._e(), (_vm.id !== 2 && _vm.hasDiscount) ? _c('div', {
    staticClass: "header-title_0"
  }, [_c('span', [_vm._v(_vm._s(_vm.count))]), _vm._v("本" + _vm._s(_vm.name) + "书全场"), _c('span', [_vm._v(_vm._s(_vm.discount))]), _vm._v("购\n\t\t\t")]) : _vm._e(), (_vm.id === 2) ? _c('div', {
    staticClass: "header-title_0"
  }, [_vm._v("\n\t\t\t\t金牌好书 "), _c('span', [_vm._v("包月会员")]), _vm._v("专享\n\t\t\t")]) : _vm._e()]) : _vm._e(), (_vm.id === 1) ? _c('div', {
    staticClass: "header",
    style: ('background:url(' + _vm.img + '/header.png);background-size:100% 100%;')
  }, [(!_vm.hasDiscount) ? _c('div', {
    staticClass: "header-title"
  }, [_c('span', [_vm._v(_vm._s(_vm.count))]), _vm._v("本" + _vm._s(_vm.name) + "书限免"), _c('span', [_vm._v(_vm._s(_vm.days))]), _vm._v("天\n\t\t\t")]) : _vm._e(), (_vm.hasDiscount) ? _c('div', {
    staticClass: "header-title"
  }, [_c('span', [_vm._v(_vm._s(_vm.count))]), _vm._v("本" + _vm._s(_vm.name) + "书全场"), _c('span', [_vm._v(_vm._s(_vm.discount))]), _vm._v("购\n\t\t\t")]) : _vm._e(), _c('div', {
    staticClass: "bookClass"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.books.length > 0 ? _vm.books[_vm.current].className : '--') + "\n\t\t\t")])]) : _vm._e(), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "bb-custom-wrapper"
  }, [_c('div', {
    staticClass: "bb-bookblock",
    attrs: {
      "id": "bb-bookblock"
    }
  }, _vm._l((_vm.books), function(a, i) {
    return _c('div', {
      staticClass: "bb-item"
    }, [_c('div', {
      staticClass: "upper"
    }, [(_vm.id !== 1) ? _c('div', {
      staticClass: "zero"
    }, [_c('div', {
      staticStyle: {
        "clear": "both"
      }
    }), _c('div', {
      staticClass: "flowers"
    }, [_c('img', {
      staticClass: "img_",
      attrs: {
        "src": _vm.img + '/flowers.png'
      }
    }), _c('div', {
      staticClass: "chars"
    }, [_c('div', {
      staticClass: "char"
    }, [_vm._v(_vm._s(_vm.books.length > 0 ? _vm.books[i].className[0] : '-'))]), _c('div', {
      staticClass: "char"
    }, [_vm._v(_vm._s(_vm.books.length > 0 ? _vm.books[i].className[1] : '-'))]), _c('div', {
      staticClass: "char"
    }, [_vm._v(_vm._s(_vm.books.length > 0 ? _vm.books[i].className[2] : '-'))]), _c('div', {
      staticClass: "char"
    }, [_vm._v(_vm._s(_vm.books.length > 0 ? _vm.books[i].className[3] : '-'))])])]), _vm._l((a.books.slice(0, 2)), function(b, ii) {
      return _c('div', {
        staticClass: "item__",
        on: {
          "click": function($event) {
            _vm.act({
              type: 'TO_BOOK',
              bid: b.bid
            })
          }
        }
      }, [_c('img', {
        staticClass: "cover",
        attrs: {
          "src": 'https://static.reader.qq.com/cover/' + b.bid % 1000 + '/' + b.bid + '/b_' + b.bid + '.jpg'
        }
      }), _c('p', {
        staticClass: "title"
      }, [_vm._v(_vm._s(b.title))]), _c('p', {
        staticClass: "author"
      }, [_vm._v(_vm._s(b.author))]), _c('div', {
        staticClass: "discount",
        style: ('background:url(' + _vm.img + '/discount.png);background-size:100% 100%;')
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.id === 2 ? '包月' : _vm.discount) + "\n\t\t\t\t\t\t\t\t\t")])])
    })], 2) : _vm._e(), (_vm.id === 1) ? _c('scroller', {
      attrs: {
        "act": _vm.act,
        "img": _vm.img,
        "items": a.books.slice(0),
        "discount": _vm.discount
      }
    }) : _vm._e()], 1), _c('div', {
      staticClass: "lower"
    }, [(_vm.id !== 1) ? _c('div', {
      staticClass: "zero"
    }, [_c('div', {
      staticClass: "train__"
    }, _vm._l((a.books.slice(2)), function(b, ii) {
      return _c('div', {
        staticClass: "item__",
        on: {
          "click": function($event) {
            _vm.act({
              type: 'TO_BOOK',
              bid: b.bid
            })
          }
        }
      }, [_c('img', {
        staticClass: "cover",
        attrs: {
          "src": 'https://static.reader.qq.com/cover/' + b.bid % 1000 + '/' + b.bid + '/b_' + b.bid + '.jpg'
        }
      }), _c('p', {
        staticClass: "title"
      }, [_vm._v(_vm._s(b.title))]), _c('p', {
        staticClass: "author"
      }, [_vm._v(_vm._s(b.author))]), _c('div', {
        staticClass: "discount",
        style: ('background:url(' + _vm.img + '/discount.png);background-size:100% 100%;')
      }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.id === 2 ? '包月' : _vm.discount) + "\n\t\t\t\t\t\t\t\t\t\t")])])
    }))]) : _vm._e()])])
  }))])]), _c('img', {
    staticClass: "bottom_pages",
    attrs: {
      "src": _vm.img + '/bottom_pages.png'
    }
  }), _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "footer-title",
    on: {
      "click": function($event) {
        _vm.click($event)
      }
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s((_vm.books.length > 0 && _vm.books.length - 1 > _vm.current) ? _vm.books[_vm.current + 1].className + ' ' : '更多好书单 ')), _c('img', {
    staticClass: "small_arrow",
    attrs: {
      "src": _vm.img + '/small_arrow.png'
    }
  })]), _c('div', {
    staticClass: "pageNo"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.current + 1) + "/" + _vm._s(_vm.books.length) + "\n\t\t\t")])])])
},staticRenderFns: []}

/***/ }),
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ })
/******/ ]);