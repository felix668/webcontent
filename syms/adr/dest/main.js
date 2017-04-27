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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/work/2017/05/syms/src/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b2a1ffe", Component.options)
  } else {
    hotAPI.reload("data-v-4b2a1ffe", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var data = {
	selected: false, //书架书选取，未选false，已选返回bid
	bookshelf: [{
		bid: '1',
		bookname: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者'
	}, {
		bid: '2',
		bookname: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者'
	}, {
		bid: '3',
		bookname: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者'
	}],
	keyreceive: false, //一键领取
	booklist: [{
		bid: '01',
		bookname: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者',
		iselect: true
	}, {
		bid: '02',
		bookname: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者',
		iselect: false
	}, {
		bid: '03',
		bookname: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者',
		iselect: true
	}, {
		bid: '04',
		bookname: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者',
		iselect: false
	}, {
		bid: '05',
		bookname: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者',
		iselect: false
	}, {
		bid: '06',
		bookname: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者',
		iselect: false
	}]
};
exports.default = data;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Vue.component('app', __webpack_require__(2));
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
/* 5 */
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

module.exports = {
  data: function data() {
    return {};
  },
  methods: {
    closemask: function closemask() {
      this.$parent.showbrowers = false;
    }
  }
};

/***/ }),
/* 6 */
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

module.exports = {
	data: function data() {
		return {};
	},
	props: ['show'],
	mounted: function mounted() {},
	methods: {
		closemask: function closemask() {
			this.show = false;
			console.log(self.show);
		},
		downapp: function downapp() {
			N.downLoad(null, '10026762');
			this.show = false;
		}
	}
};

/***/ }),
/* 7 */
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

module.exports = {
	data: function data() {
		return {};
	},
	mounted: function mounted() {}
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		maskLoading: __webpack_require__(16),
		maskOver: __webpack_require__(17),
		maskDownload: __webpack_require__(15),
		maskBrowes: __webpack_require__(14),
		maskEject: __webpack_require__(18)
	},
	data: function data() {
		return {
			loading: true,
			over: false, //活动结束
			urlis: '',
			islogin: false,
			showbrowers: false,
			downshow: false,
			maskshow: false,
			masktype: '',
			selectbid: '', //选择的书的bid
			shelfshow: true, //书架无书不展示
			selected: false, //书架书选取，未选false，已选返回bid
			bookshelf: [],
			keyreceive: false, //一键领取
			booklist: []
		};
	},
	methods: {
		initpage: function initpage() {
			var self = this;
			Local.init();
			self.loading = false;
			self.selected = _data2.default.selected;
			self.bookshelf = _data2.default.bookshelf;
			self.keyreceive = _data2.default.keyreceive;
			self.booklist = _data2.default.booklist;
			var len = self.bookshelf.length;
			if (len == 0) {
				self.shelfshow = false;
			} else {
				self.shelfshow = true;
			}
			// Local.reqaObj(server() + "pkg170409/init?pt="+self.urlis, function(data) {
			// 	console.log(data);
			// 	self.loading=false;
			// }, [], function() {
			// 	Local.showToast("网络异常，请稍候重试");
			// }, 1);
			//forceLog('param("act_f")','zgzyindex'+self.urlis);
		},
		islast: function islast() {
			var self = this;
			var len = self.booklist.length;
			var num = 0;
			for (var i = 0; i < len; i++) {
				if (self.booklist[i].iselect) {
					num++;
				}
			}
			console.log(num);
			return num;
		},
		//跳转书籍详情
		gotodetail: function gotodetail(bid) {
			ABook.gotoDetail(bid);
		},
		selectit: function selectit(bid) {
			var self = this;
			if (!self.selected) {
				self.maskshow = true;
				self.masktype = 'shelfmask';
				self.selectbid = bid;
			} else if (self.selected == bid) {
				ABook.gotoRead(bid);
			}
		},
		receive: function receive(ind, bid) {
			var self = this;
			var len = self.booklist.length;
			if (self.booklist[ind].iselect) {
				ABook.gotoRead(bid);
			} else {
				// Local.reqaObj(server() + "pkg170409/init?bid="+bid, function(data) {
				self.booklist[ind].iselect = true;
				if (self.islast() == len) {
					self.keyreceive = true;
				}
				console.log('领取成功，限免10天');
				// 	Local.showToast("领取成功，限免10天");
				// }, [], function() {
				// 	Local.showToast("网络异常，请稍候重试");
				// }, 1);
			}
		},
		onekey: function onekey() {
			var self = this;
			if (self.keyreceive) {
				console.log('goshelf');
				//Local.openBookShelf();
			} else {
				// Local.reqaObj(server() + "pkg170409/init?bid="+bid, function(data) {
				self.maskshow = true;
				self.masktype = 'booklistmask';
				self.keyreceive = true;
				var len = self.booklist.length;
				for (var i = 0; i < len; i++) {
					self.booklist[i].iselect = true;
				}
				// }, [], function() {
				// 	Local.showToast("网络异常，请稍候重试");
				// }, 1); 
			}
		}
	},
	created: function created() {
		//页面初始化
		this.initpage();
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 9 */
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

module.exports = {
	data: function data() {
		return {};
	},
	props: ['type', 'mask', 'bookid'],
	mounted: function mounted() {},
	methods: {
		selectok: function selectok(bid) {
			var self = this;
			// Local.reqaObj(server() + "pkg170409/init?bid="+bid, function(data) {
			self.$parent.selected = bid;
			console.log('已成功领取限免书');
			// 	Local.showToast("已成功领取限免书");
			// }, [], function() {
			// 	Local.showToast("网络异常，请稍候重试");
			// }, 1);
			self.closemask();
		},
		gotoshelf: function gotoshelf() {
			var self = this;
			Local.openBookShelf();
			self.closemask();
		},
		closemask: function closemask() {
			this.$parent.maskshow = false;
			this.$parent.masktype = '';
		}
	}
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
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
__webpack_require__(13)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  "data-v-e56b363c",
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/work/2017/05/syms/src/MaskBrowers.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MaskBrowers.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e56b363c", Component.options)
  } else {
    hotAPI.reload("data-v-e56b363c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  "data-v-159cccf8",
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/work/2017/05/syms/src/MaskDownload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MaskDownload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-159cccf8", Component.options)
  } else {
    hotAPI.reload("data-v-159cccf8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  "data-v-7c0516f0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/work/2017/05/syms/src/MaskLoading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MaskLoading.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c0516f0", Component.options)
  } else {
    hotAPI.reload("data-v-7c0516f0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(20),
  /* scopeId */
  "data-v-2b0e4c60",
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/work/2017/05/syms/src/MaskOver.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MaskOver.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b0e4c60", Component.options)
  } else {
    hotAPI.reload("data-v-2b0e4c60", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/work/2017/05/syms/src/ejectMask.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ejectMask.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b87293d", Component.options)
  } else {
    hotAPI.reload("data-v-3b87293d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MaskDownload"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_c('div', {
    staticClass: "top"
  }, [_vm._v("下载QQ阅读，畅读海量小说")]), _c('p', {
    staticClass: "middle"
  }, [_vm._v("如果还未安装QQ阅读，你可以：")]), _c('ul', {
    staticClass: "bottom"
  }, [_c('li', {
    staticClass: "confirm",
    on: {
      "click": _vm.downapp
    }
  }, [_vm._v("下载QQ阅读")]), _c('li', {
    staticClass: "cancel",
    on: {
      "click": _vm.closemask
    }
  }, [_vm._v("取消")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-159cccf8", module.exports)
  }
}

/***/ }),
/* 20 */
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
     require("vue-hot-reload-api").rerender("data-v-2b0e4c60", module.exports)
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mask"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.type == 'shelfmask'),
      expression: "type=='shelfmask'"
    }],
    staticClass: "tiparea"
  }, [_c('div', {
    staticClass: "votes"
  }, [_c('p', {
    staticClass: "online"
  }, [_vm._v("决定选择这本书，享受10天限免特权？")]), _c('div', {
    staticClass: "btnbox"
  }, [_c('a', {
    staticClass: "btnno",
    on: {
      "click": _vm.closemask
    }
  }, [_vm._v("取消")]), _c('a', {
    staticClass: "btnok",
    on: {
      "click": function($event) {
        _vm.selectok(_vm.bookid)
      }
    }
  }, [_vm._v("确定")])])])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.type == 'booklistmask'),
      expression: "type=='booklistmask'"
    }],
    staticClass: "tiparea"
  }, [_c('div', {
    staticClass: "closemk",
    on: {
      "click": _vm.closemask
    }
  }), _c('div', {
    staticClass: "votes"
  }, [_c('h4', [_vm._v("领取成功")]), _vm._m(0), _c('a', {
    staticClass: "closbtn",
    on: {
      "click": _vm.gotoshelf
    }
  }, [_vm._v("去书架看书")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("领取的全部限免书已为你加入书架，"), _c('br'), _vm._v("限免10天")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3b87293d", module.exports)
  }
}

/***/ }),
/* 22 */
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
    staticClass: "connect"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.shelfshow),
      expression: "shelfshow"
    }],
    staticClass: "shelfbook"
  }, [_vm._m(0), _c('ul', {
    staticClass: "booklist"
  }, _vm._l((_vm.bookshelf), function(books) {
    return _c('li', [_c('div', {
      staticClass: "bookface"
    }, [_c('img', {
      attrs: {
        "src": books.cover
      }
    })]), _c('p', {
      staticClass: "bookname"
    }, [_vm._v(_vm._s(books.bookname))]), _c('p', [_vm._v(_vm._s(books.author))]), _c('a', {
      staticClass: "votebtn",
      class: {
        disabeled: _vm.selected, isselected: _vm.selected == books.bid
      },
      on: {
        "click": function($event) {
          _vm.selectit(books.bid)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.selected == books.bid ? '去看书' : '选TA'))])])])
  }))]), _vm._m(1), _c('ul', {
    staticClass: "booklist"
  }, _vm._l((_vm.booklist), function(books, index) {
    return _c('li', [_c('div', {
      staticClass: "bookface",
      on: {
        "click": function($event) {
          _vm.gotodetail(books.bid)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": books.cover
      }
    })]), _c('p', {
      staticClass: "bookname"
    }, [_vm._v(_vm._s(books.bookname))]), _c('p', [_vm._v(_vm._s(books.author))]), _c('a', {
      staticClass: "votebtn",
      class: {
        isselected: books.iselect
      },
      on: {
        "click": function($event) {
          _vm.receive(index, books.bid)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(books.iselect ? '去看书' : '领限免'))])])])
  })), _c('div', {
    staticClass: "keyall",
    on: {
      "click": _vm.onekey
    }
  }, [_vm._v(_vm._s(_vm.keyreceive ? '去书架看书' : '一键全部领限免')), _c('ul', {
    staticClass: "arrows"
  }, [_c('img', {
    attrs: {
      "src": '../adr/public/images/arrow.png'
    }
  }), _c('img', {
    attrs: {
      "src": '../adr/public/images/arrow.png'
    }
  }), _c('img', {
    attrs: {
      "src": '../adr/public/images/arrow.png'
    }
  })])])]), _vm._m(2)]), _c('mask-loading', {
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
  }), _c('mask-browes', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showbrowers),
      expression: "showbrowers"
    }]
  }), _c('mask-eject', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.maskshow),
      expression: "maskshow"
    }],
    attrs: {
      "mask": _vm.maskshow,
      "type": _vm.masktype,
      "bookid": _vm.selectbid
    }
  }), _c('mask-download', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.downshow),
      expression: "downshow"
    }],
    attrs: {
      "show": _vm.downshow
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tite"
  }, [_vm._v("任选一本，畅读10日"), _c('p', [_vm._v("你正在关注这些书")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tite"
  }, [_vm._v("抢鲜好书，对您免费"), _c('p', [_vm._v("根据你的兴趣推荐")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rules"
  }, [_c('h4', [_vm._v("－ 活动规则－")]), _c('p', [_c('span', [_vm._v("1.")]), _vm._v("时间：2017年1月28日10点 -  2月3日0点")]), _c('p', [_c('span', [_vm._v("2.")]), _vm._v("充值赠送：单次(一次性)充值达到指定额度，则赠送对应额度阅券，多充多送！")]), _c('p', [_c('span', [_vm._v("3.")]), _vm._v("活动所赠阅券有效期均为15天并且即时到账，可用于直接购买书籍；")]), _c('p', [_c('span', [_vm._v("4.")]), _vm._v("首充优惠活动仅限第一次充值用户参加，其余用户无法参加；")]), _c('p', [_c('span', [_vm._v("5.")]), _vm._v("最终解释权归QQ阅读所有。")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4b2a1ffe", module.exports)
  }
}

/***/ }),
/* 23 */
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
     require("vue-hot-reload-api").rerender("data-v-7c0516f0", module.exports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "maskbrow",
    on: {
      "click": function($event) {
        _vm.closemask()
      }
    }
  }, [_c('img', {
    attrs: {
      "src": '../adr/public/images/browers.png'
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e56b363c", module.exports)
  }
}

/***/ })
/******/ ]);