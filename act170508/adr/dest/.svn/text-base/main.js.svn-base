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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/activity/BookEventFront/WebContent/act170508/src/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-429816ce", Component.options)
  } else {
    hotAPI.reload("data-v-429816ce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var data = {
	searchBook: {
		bid: '12345',
		title: '胜者为王',
		author: '临海听涛',
		cover: '../adr/public/images/book1.jpg',
		introduction: '胜者为王胜者为王胜者为王胜者为王胜者为王胜者为王胜者为王胜者为王胜者为王胜者为王'
	},
	booklist1: [{
		bid: '01',
		title: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者',
		isBuy: true
	}, {
		bid: '02',
		title: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者',
		isBuy: false
	}, {
		bid: '03',
		title: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者',
		isBuy: true
	}, {
		bid: '04',
		title: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者',
		isBuy: false
	}, {
		bid: '05',
		title: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者',
		isBuy: false
	}, {
		bid: '06',
		title: '书名',
		cover: '../adr/public/images/book1.jpg',
		author: '作者',
		isBuy: false
	}],
	booklist2: [{
		bid: '01',
		title: '书名2',
		cover: '../adr/public/images/book1.jpg',
		author: '作者'
	}],
	booklist3: [{
		bid: '01',
		title: '书名3',
		cover: '../adr/public/images/book1.jpg',
		author: '作者'
	}]
};
exports.default = data;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.component('app', __webpack_require__(3));
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _data = __webpack_require__(4);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		maskLoading: __webpack_require__(10),
		maskOver: __webpack_require__(11),
		maskEject: __webpack_require__(12)
	},
	data: function data() {
		return {
			loading: true,
			over: false, //活动结束
			islogin: true,
			maskshow: false,
			inptxt: '',
			showsearch: false, //是否显示搜索结果
			searched: 0, //是否有搜索结果0有搜索结果，－1屏蔽书，－2查询不到
			received: '', //是否领取过,领取过为书籍bid
			selectbid: '', //选择的书的bid
			searchBook: {}, //搜索结果
			publishUse: false, //是否出版身份
			booklist1: [],
			booklist2: [],
			booklist3: []
		};
	},
	methods: {
		initpage: function initpage() {
			var self = this;
			self.loading = false;
			Local.init();
			Local.reqaObj(server() + "pkg170501/page4Init", function (data) {
				console.log(data);
				if (data.code == -4) {
					self.over = true;
				}
				self.islogin = data.isLogin;
				self.received = data.received;
				self.publishUse = data.publishUse;
				if (self.publishUse) {
					self.booklist1 = data.bookList1;
				} else {
					self.booklist1 = data.bookList1;
					self.booklist2 = data.bookList2;
					self.booklist3 = data.bookList3;
				}
			}, [], function () {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			forceLog(param("act_f"), 'four_enter_free');
		},
		//跳转书籍详情
		gotodetail: function gotodetail(bid) {
			ABook.gotoDetail(bid);
		},
		delesearch: function delesearch() {
			var self = this;
			self.inptxt = '';
			$("input").blur();
			$(".delesearch").addClass('hide');
			self.showsearch = false;
		},
		intblur: function intblur(e) {
			var self = this;
			var len = self.inptxt.length;
			if (len > 0) {
				$(".delesearch").removeClass('hide');
				if (e.keyCode == 13) {
					Local.reqaObj(server() + "pkg170501/page4Search?searchContent=" + encodeURI(self.inptxt), function (data) {
						console.log(data, +'&&' + self.searched);
						//self.showsearch=true;
						self.searched = data.code;
						self.showsearch = true;
						if (self.searched == 0) {
							//self.searchBook=database.searchBook;
							self.searchBook = data.book;
							forceLog(param("act_f"), 'four_search_result');
						} else {
							forceLog(param("act_f"), 'four_search_noresult');
						}
					}, [], function () {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
					$("input").blur();
				}
			} else {
				$(".delesearch").addClass('hide');
				self.showsearch = false;
			}
		},
		showbang: function showbang(e) {
			var self = this;
			var $cur = $(e.currentTarget);
			var ind = $cur.index();
			$('.bangtab li').eq(ind).addClass('active').siblings().removeClass('active');
			$('.bangbox ul').eq(ind).removeClass('hide').siblings().addClass('hide');
		},
		receive: function receive(bid) {
			var self = this;
			if (self.islogin) {
				if (self.received == bid) {
					console.log(self.received + ',' + bid);
					ABook.gotoRead(bid);
				} else {
					self.selectbid = bid;
					self.maskshow = true;
				}
			} else {
				Local.login();
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 7 */
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

exports.default = {
	data: function data() {
		return {
			receiveok: false
		};
	},
	props: ['mask', 'received', 'bookid'],
	mounted: function mounted() {},
	methods: {
		selectok: function selectok(bid) {
			var self = this;
			console.log(bid);
			Local.reqaObj(server() + "pkg170501/page4Accept?bid=" + bid, function (data) {
				console.log(data);
				if (data.code == 1) {
					self.$parent.received = data.received;
					self.$parent.showsearch = false;
					self.$parent.inptxt = '';
					$(".delesearch").addClass('hide');
					self.receiveok = true;
				}
				forceLog(param("act_f"), 'four_recevie_free');
			}, [], function () {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		},
		gotoshelf: function gotoshelf() {
			var self = this;
			self.closemask();
			Local.openBookShelf();
		},
		goreadbook: function goreadbook(bid) {
			var self = this;
			ABook.gotoRead(bid);
			self.closemask();
		},
		closemask: function closemask() {
			this.receiveok = false;
			this.$parent.maskshow = false;
			this.$parent.showsearch = false;
			this.$parent.inptxt = '';
			$(".delesearch").addClass('hide');
		}
	}
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(14),
  /* scopeId */
  "data-v-4a7920bd",
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/activity/BookEventFront/WebContent/act170508/src/MaskLoading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MaskLoading.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a7920bd", Component.options)
  } else {
    hotAPI.reload("data-v-4a7920bd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(15),
  /* scopeId */
  "data-v-673629ba",
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/activity/BookEventFront/WebContent/act170508/src/MaskOver.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MaskOver.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-673629ba", Component.options)
  } else {
    hotAPI.reload("data-v-673629ba", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/lichunxia/Desktop/activity/BookEventFront/WebContent/act170508/src/ejectMask.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ejectMask.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d1c57b6c", Component.options)
  } else {
    hotAPI.reload("data-v-d1c57b6c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
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
    staticClass: "contbox"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('div', {
    staticClass: "tite"
  }, [_vm._v("－" + _vm._s(_vm.received ? '你已经领取限免书，快去书架看书吧' : '有心仪的书？直接搜索限免') + "－")]), _c('div', {
    staticClass: "searchbox"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inptxt),
      expression: "inptxt"
    }],
    attrs: {
      "type": "text",
      "placeholder": "搜索书名，立享限免"
    },
    domProps: {
      "value": (_vm.inptxt)
    },
    on: {
      "keyup": function($event) {
        _vm.intblur($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inptxt = $event.target.value
      }
    }
  }), _c('div', {
    staticClass: "delesearch hide",
    on: {
      "click": _vm.delesearch
    }
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showsearch),
      expression: "showsearch"
    }],
    staticClass: "searchResult"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.searched == 0),
      expression: "searched==0"
    }],
    staticClass: "searchBook"
  }, [_c('img', {
    staticClass: "cover",
    attrs: {
      "src": _vm.searchBook.cover
    }
  }), _c('p', {
    staticClass: "bookname"
  }, [_vm._v(_vm._s(_vm.searchBook.title))]), _c('p', {
    staticClass: "author"
  }, [_vm._v(_vm._s(_vm.searchBook.author))]), _c('p', [_vm._v(_vm._s(_vm.searchBook.intro))]), _c('a', {
    staticClass: "recevbtn",
    on: {
      "click": function($event) {
        _vm.receive(_vm.searchBook.bid)
      }
    }
  }, [_vm._v("领取限免")])]), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.searched != 0),
      expression: "searched!=0"
    }],
    staticClass: "nosearch"
  }, [_vm._v(_vm._s(_vm.searched == -2 ? '查询不到你想要的书籍，请准确输入哦' : '抱歉，当前书籍未参加活动，换本书试试吧'))])])]), _c('div', {
    staticClass: "tite"
  }, [_vm._v("－还没想好？看看平台最热门的书吧－")]), _c('ul', {
    staticClass: "bangtab"
  }, [_c('li', {
    staticClass: "active",
    on: {
      "click": function($event) {
        _vm.showbang($event)
      }
    }
  }, [_vm._v("畅销榜")]), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.publishUse),
      expression: "!publishUse"
    }],
    on: {
      "click": function($event) {
        _vm.showbang($event)
      }
    }
  }, [_vm._v("风云榜")]), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.publishUse),
      expression: "!publishUse"
    }],
    on: {
      "click": function($event) {
        _vm.showbang($event)
      }
    }
  }, [_vm._v("经典榜")])]), _c('div', {
    staticClass: "bangbox"
  }, [_c('ul', {
    staticClass: "booklist"
  }, _vm._l((_vm.booklist1), function(books, index) {
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
    }, [_vm._v(_vm._s(books.title))]), _c('p', [_vm._v(_vm._s(books.author))]), _c('a', {
      staticClass: "votebtn",
      class: {
        disabeled: _vm.received != '', isselected: _vm.received == books.bid
      },
      on: {
        "click": function($event) {
          _vm.receive(books.bid)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.received == books.bid ? '去看书' : '选它'))])])])
  })), _c('ul', {
    staticClass: "booklist hide"
  }, _vm._l((_vm.booklist2), function(books, index) {
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
    }, [_vm._v(_vm._s(books.title))]), _c('p', [_vm._v(_vm._s(books.author))]), _c('a', {
      staticClass: "votebtn",
      class: {
        disabeled: _vm.received != '', isselected: _vm.received == books.bid
      },
      on: {
        "click": function($event) {
          _vm.receive(books.bid)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.received == books.bid ? '去看书' : '选它'))])])])
  })), _c('ul', {
    staticClass: "booklist hide"
  }, _vm._l((_vm.booklist3), function(books, index) {
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
    }, [_vm._v(_vm._s(books.title))]), _c('p', [_vm._v(_vm._s(books.author))]), _c('a', {
      staticClass: "votebtn",
      class: {
        disabeled: _vm.received != '', isselected: _vm.received == books.bid
      },
      on: {
        "click": function($event) {
          _vm.receive(books.bid)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.received == books.bid ? '去看书' : '选它'))])])])
  }))])])]), _vm._m(0)]), _c('mask-loading', {
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
  }), _c('mask-eject', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.maskshow),
      expression: "maskshow"
    }],
    attrs: {
      "mask": _vm.maskshow,
      "received": _vm.received,
      "bookid": _vm.selectbid
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rules"
  }, [_c('h4', [_vm._v("－ 活动规则－")]), _c('p', [_c('span', [_vm._v("1.")]), _vm._v("本活动为幸运福利活动，仅部分用户可参与。")]), _c('p', [_c('span', [_vm._v("2.")]), _vm._v("参与活动用户仅限领取一本书享受限时免费在线阅读，限免期为10天。活动结束后不再提供免费阅读。")]), _c('p', [_c('span', [_vm._v("3.")]), _vm._v("活动最终解释权归QQ阅读所有。")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-429816ce", module.exports)
  }
}

/***/ }),
/* 14 */
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
     require("vue-hot-reload-api").rerender("data-v-4a7920bd", module.exports)
  }
}

/***/ }),
/* 15 */
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
     require("vue-hot-reload-api").rerender("data-v-673629ba", module.exports)
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mask"
  }, [(_vm.receiveok) ? _c('div', {
    staticClass: "tiparea"
  }, [_c('div', {
    staticClass: "gifticon"
  }), _c('div', {
    staticClass: "votes"
  }, [_c('h4', [_vm._v("领取成功")]), _c('p', [_vm._v("这本书已为你加入书架，快去看书吧")]), _c('a', {
    staticClass: "closbtn",
    on: {
      "click": function($event) {
        _vm.goreadbook(_vm.bookid)
      }
    }
  }, [_vm._v("去看书")])])]) : _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.received == ''),
      expression: "received==''"
    }],
    staticClass: "tiparea"
  }, [_c('div', {
    staticClass: "gifticon"
  }), _c('div', {
    staticClass: "votes"
  }, [_c('p', {
    staticClass: "online"
  }, [_vm._v("决定选择这本书，"), _c('br'), _vm._v("享受10天限免特权？")]), _c('div', {
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
      value: (_vm.received != ''),
      expression: "received!=''"
    }],
    staticClass: "tiparea"
  }, [_c('div', {
    staticClass: "gifticon"
  }), _c('div', {
    staticClass: "closemk",
    on: {
      "click": _vm.closemask
    }
  }), _c('div', {
    staticClass: "votes"
  }, [_c('p', {
    staticClass: "online"
  }, [_vm._v("你已领取过限免书籍了，"), _c('br'), _vm._v("快去读书吧")]), _c('a', {
    staticClass: "closbtn",
    on: {
      "click": function($event) {
        _vm.gotoshelf()
      }
    }
  }, [_vm._v("去书架看书")])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d1c57b6c", module.exports)
  }
}

/***/ })
/******/ ]);