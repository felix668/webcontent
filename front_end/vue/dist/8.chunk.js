webpackJsonp([8],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(97)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(110),
  /* scopeId */
  "data-v-4f392ae4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 110:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CardsTwo",
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
  }, _vm._l((_vm.papers), function(a, i) {
    return _c('div', {
      staticClass: "paper__",
      class: a.status
    })
  }))
},staticRenderFns: []}

/***/ }),

/***/ 79:
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
//
//
//
//

exports.default = {
	props: ['act'],
	data: function data() {
		return {
			papers: [{
				status: ''
			}, {
				status: ''
			}],

			moveCount: 0,
			canScroll: true,

			X0: null,
			X1: null,
			Y0: null,
			Y1: null
		};
	},
	mounted: function mounted() {
		var self = this;
		self.papers[0].status = 'next';
		self.papers[1].status = 'first';
	},
	methods: {
		touchstart: function touchstart(e) {
			this.moveCount = 0;
			this.canScroll = true;
			this.X0 = e.changedTouches[0].pageX;
			this.Y0 = e.changedTouches[0].pageY;
			console.log(this.X0);
		},
		touchmove: function touchmove(e) {
			this.moveCount++;
			if (this.moveCount === 1) {
				this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
				var dY = this.Y1 - this.Y0;
				var dX = this.X1 - this.X0;
				if (Math.abs(dY) > Math.abs(dX)) {
					this.canScroll = true;
				} else {
					this.canScroll = false;
				}
			};
			if (!this.canScroll) {
				e.preventDefault();
			}
		},
		touchend: function touchend(e) {
			if (!this.canScroll) {
				this.X1 = e.changedTouches[0].pageX;
				var dX = this.X1 - this.X0;
				if (dX < 0) {
					this.switch__();
				}
			}
		},
		switch__: function switch__() {
			if (this.papers[0].status === 'enter') {
				this.papers[0].status = 'leave';
				this.papers[1].status = 'enter';
			} else {
				this.papers[0].status = 'enter';
				this.papers[1].status = 'leave';
			}
		}
	}
};

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});