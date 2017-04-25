webpackJsonp([3],{

/***/ 102:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    staticClass: "test",
    attrs: {
      "viewBox": "0,0,1000,1000",
      "pointer-events": "all",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('defs', [_c('linearGradient', {
    attrs: {
      "id": "linearGradient-1",
      "x1": "0%",
      "y1": "100%",
      "x2": "100%",
      "y2": "100%"
    }
  }, [_c('stop', {
    attrs: {
      "stop-color": "#2090F8",
      "offset": "0%"
    }
  }), _c('stop', {
    attrs: {
      "stop-color": "#01FCE4",
      "offset": "41.7610013%"
    }
  }), _c('stop', {
    attrs: {
      "stop-color": "#0BFF8C",
      "offset": "78.6870217%"
    }
  }), _c('stop', {
    attrs: {
      "stop-color": "#51FF00",
      "offset": "100%"
    }
  })], 1)], 1), _c('circle', {
    staticClass: "circle-red",
    attrs: {
      "cx": "500",
      "cy": "500",
      "r": "200",
      "stroke": "url(#linearGradient-1)"
    }
  }), _c('circle', {
    staticClass: "circle-red-1",
    attrs: {
      "cx": "500",
      "cy": "500",
      "r": "100",
      "stroke": "url(#linearGradient-1)"
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CubeWhite"
  }, [_c('div', {
    staticClass: "space3d"
  }, [_c('div', {
    staticClass: "cube",
    class: _vm.recalibrating ? 'recalibrating' : '',
    style: ('transform: rotateX(' + _vm.rotateX + 'deg) rotateY(' + _vm.rotateY + 'deg);-webkit-transform:rotateX(' + _vm.rotateX + 'deg) rotateY(' + _vm.rotateY + 'deg);'),
    on: {
      "click": _vm.recalibrate
    }
  }, [_c('div', {
    staticClass: "face face-front"
  }), _c('div', {
    staticClass: "face face-top"
  }), _c('div', {
    staticClass: "face face-bottom"
  }), _c('div', {
    staticClass: "face face-left"
  }), _c('div', {
    staticClass: "face face-right"
  }), _c('div', {
    staticClass: "face face-back"
  })])])])
},staticRenderFns: []}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(89)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  "data-v-0ded9466",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(94)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  "data-v-45db51ab",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 76:
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

exports.default = {
	data: function data() {
		return {
			rotationRate: {
				alpha: '111'
			},
			rotateX: 0,
			rotateY: 0,
			recalibrating: false
		};
	},
	created: function created() {
		var self = this;
		if (window.DeviceMotionEvent) {
			window.addEventListener('devicemotion', self.handler.bind(self), false);
		} else {
			console.log('Sorry, your browser doesn\'t support DeviceMotionEvent.');
		}
	},
	methods: {
		recalibrate: function recalibrate(e) {
			var _this = this;

			this.recalibrating = true;
			this.rotateX = 0;
			this.rotateY = 0;
			setTimeout(function () {
				_this.recalibrating = false;
			}, 1000);
		},
		handler: function handler(e) {
			if (!this.recalibrating) {
				this.rotationRate.alpha = e.rotationRate.alpha;

				var nextX = this.rotateX - e.rotationRate.alpha * 3;
				// if(nextX>=45){
				// 	nextX = 45;
				// }else if(nextX<=-45){
				// 	nextX = -45;
				// }
				this.rotateX = nextX;

				var nextY = this.rotateY + e.rotationRate.beta * 3;
				// if(nextY>=45){
				// 	nextY = 45;
				// }else if(nextY<=-45){
				// 	nextY = -45;
				// }
				this.rotateY = nextY;
			}
		}
	}
};

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var strokeCircle = {};
module.exports = strokeCircle;

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});