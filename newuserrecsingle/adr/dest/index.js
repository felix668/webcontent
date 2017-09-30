/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

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
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    function recalc() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        // console.log(clientWidth)
        clientWidth = clientWidth > 750 ? 750 : clientWidth;
        docEl.style.fontSize = clientWidth / 7.5 + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/activity/BookEventFront/WebContent/newuserrecsingle/src/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c17227c", Component.options)
  } else {
    hotAPI.reload("data-v-2c17227c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.component('app', __webpack_require__(4));
var root = new Vue({
	el: '#root',
	template: '<app></app>'
});
// $('.thumbs-cotnainer').each(function(){
// 		$(this).swiper({
// 			speed:200,
// 			slidesPerView:'auto',
// 			calculateHeight: true
// 		})
// 	});

/***/ }),
/* 7 */,
/* 8 */
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

exports.default = {
	components: {
		maskLoading: __webpack_require__(14),
		maskOver: __webpack_require__(15)
	},
	data: function data() {
		return {
			loading: true,
			over: false, //活动结束
			isLogin: true,
			urlis: 'adr',
			endtime: false,
			book: {},
			isobtained: 0,
			prefer: '',
			moreshow: false,
			isnew: false
		};
	},
	methods: {
		initpage: function initpage() {
			var self = this;
			self.urlis = document.querySelector('html').getAttribute('platform');
			if (self.urlis == 'adr') {
				Local.init();
			}
			var day = param('day');
			Local.reqaObj(server() + "newuser/recommendsingle?type=2&day=" + day, function (data) {
				console.log(data);
				self.loading = false;
				if (data.code == -4) {
					self.over = true;
				}
				self.isLogin = data.isLogin;
				self.book = data.book;
				self.isobtained = data.isobtained;
				self.prefer = data.prefer;
				self.isnew = data.isnew;
				if (self.isnew) {
					self.moreshow = true;
				} else {
					self.moreshow = false;
				}
				if (data.endtime) {
					var arr = data.endtime.split('-');
					self.endtime = parseInt(arr[1]) + '月' + parseInt(arr[2]) + '日';
				} else {
					self.endtime = data.endtime;
				}
				console.log(self.endtime);
			}, [], function () {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			forceLog(param("act_f"), 'newuserrecsingle');
		},
		//跳转书籍详情
		gotodetail: function gotodetail(bid) {
			ABook.gotoDetail(bid);
			forceLog(param("act_f"), 'bookdetail');
		},
		timeFreeRead: function timeFreeRead(bid) {
			var self = this;
			if (self.isLogin) {
				ABook.gotoRead(bid);
				forceLog(param("act_f"), 'readbtn');
			} else {
				Local.login();
				forceLog(param("act_f"), 'loginbtn');
			}
		},
		gomorefree: function gomorefree() {
			var self = this;
			if (self.isLogin) {
				if (self.urlis == 'adr') {
					window.location.href = "http://iyuedu.qq.com/common/common/newUserGiftFree10.html?giftId=15&prefer=" + self.prefer + '&isobtained=' + self.isobtained;
				} else {
					window.location.href = "https://yuedu.reader.qq.com/common/common/newUserGiftFree10.html?giftId=15&prefer=" + self.prefer + '&isobtained=' + self.isobtained;
				}
				forceLog(param("act_f"), 'morefreebtn');
			} else {
				Local.login();
			}
		}
	},
	created: function created() {
		//页面初始化
		this.initpage();
	}
};

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(21),
  /* scopeId */
  "data-v-68c844b1",
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/activity/BookEventFront/WebContent/newuserrecsingle/src/MaskLoading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MaskLoading.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68c844b1", Component.options)
  } else {
    hotAPI.reload("data-v-68c844b1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(22),
  /* scopeId */
  "data-v-74856baf",
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/activity/BookEventFront/WebContent/newuserrecsingle/src/MaskOver.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MaskOver.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74856baf", Component.options)
  } else {
    hotAPI.reload("data-v-74856baf", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "root"
    }
  }, [_c('div', {
    staticClass: "warp"
  }, [_c('div', {
    staticClass: "ban"
  }), _c('div', {
    staticClass: "boxshadow"
  }, [_c('div', {
    staticClass: "boxcard"
  }, [_c('div', {
    staticClass: "bookcover"
  }, [_c('img', {
    attrs: {
      "src": _vm.book.cover
    }
  })]), _c('div', {
    staticClass: "bookinfo"
  }, [_c('h4', [_vm._v(_vm._s(_vm.book.title))]), _c('p', [_c('span', [_vm._v(_vm._s(_vm.book.author) + " ")]), _vm._v(_vm._s(_vm.book.category) + "|" + _vm._s(_vm.book.finished == 1 ? '完结' : '连载'))]), _c('p', {
    staticClass: "lijian"
  }, [_vm._v("主编力荐")]), _c('p', {
    staticClass: "introduct"
  }, [_vm._v(_vm._s(_vm.book.extra))])]), _c('a', {
    staticClass: "readbtn",
    on: {
      "click": function($event) {
        _vm.timeFreeRead(_vm.book.bid)
      }
    }
  }, [_vm._v(_vm._s(_vm.isLogin ? '限时免费读' : '登录后免费读'))]), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.endtime),
      expression: "endtime"
    }],
    staticClass: "freeTime"
  }, [_vm._v("免费阅读至" + _vm._s(_vm.endtime))])])]), _c('div', {
    staticClass: "titles"
  }, [_vm._v("书籍介绍")]), _c('div', {
    staticClass: "boxshadow"
  }, [_c('div', {
    staticClass: "boxcard"
  }, [_c('p', {
    staticClass: "jiejian"
  }, [_vm._v(_vm._s(_vm.book.intro))])])]), _c('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.moreshow),
      expression: "moreshow"
    }],
    staticClass: "gomore",
    on: {
      "click": _vm.gomorefree
    }
  }, [_vm._v("查看更多免费书籍")])]), _c('mask-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }]
  }), _c('mask-over', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.over),
      expression: "over"
    }]
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2c17227c", module.exports)
  }
}

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MaskLoading"
  }, [_c('p', {
    staticClass: "_text"
  }, [_c('img', {
    attrs: {
      "src": '../adr/public/images/loading.png'
    }
  }), _vm._v("正在加载...")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-68c844b1", module.exports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "over"
  }, [_c('div', {
    staticClass: "over-c"
  }, [_c('img', {
    attrs: {
      "src": '../adr/public/images/over.png',
      "alt": "本期活动已结束"
    }
  }), _c('p', {
    staticClass: "over-p1"
  }, [_vm._v("本期活动已结束")]), _c('p', {
    staticClass: "over-p2"
  }, [_vm._v("敬请期待下一波活动")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-74856baf", module.exports)
  }
}

/***/ })
/******/ ]);