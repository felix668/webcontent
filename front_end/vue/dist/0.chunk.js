webpackJsonp([0],{

/***/ 109:
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
      style: ('background:' + a.background + ';')
    }, [_vm._v("\n\t\t" + _vm._s(i) + "\n\t")])
  }))
},staticRenderFns: []}

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(99)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(112),
  /* scopeId */
  "data-v-50163485",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Carousel"
  }, [_c('div', {
    staticClass: "cards",
    style: ('transform: rotateY(' + _vm.rotateY + 'deg);-webkit-transform: rotateY(' + _vm.rotateY + 'deg);')
  }, [_c('div', {
    staticClass: "item a"
  }, [_vm._v("A")]), _c('div', {
    staticClass: "item b"
  }, [_vm._v("B")]), _c('div', {
    staticClass: "item c"
  }, [_vm._v("C")]), _c('div', {
    staticClass: "item d"
  }, [_vm._v("D")]), _c('div', {
    staticClass: "item e"
  }, [_vm._v("E")]), _c('div', {
    staticClass: "item f"
  }, [_vm._v("F")])]), _c('div', {
    staticClass: "next",
    on: {
      "click": _vm.next
    }
  }, [_vm._v("Next")]), _c('div', {
    staticClass: "prev",
    on: {
      "click": _vm.prev
    }
  }, [_vm._v("Prev")])])
},staticRenderFns: []}

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(96)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(81),
  /* template */
  __webpack_require__(109),
  /* scopeId */
  "data-v-490cc3a1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
	data: function data() {
		return {
			rotateY: 0
		};
	},
	methods: {
		next: function next() {
			this.rotateY -= 60;
		},
		prev: function prev() {
			this.rotateY += 60;
		}
	}
};

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});