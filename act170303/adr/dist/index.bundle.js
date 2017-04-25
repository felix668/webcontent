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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rem_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rem_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__rem_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_scss__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyframes_less__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyframes_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__keyframes_less__);

// import './debugger.js';
//import './config.js';



/***/ }),
/* 2 */
/***/ (function(module, exports) {

var $html = document.querySelector('html');
var $body = document.querySelector('body');
var $screen = document.createElement('div');

$screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
$body.insertBefore($screen, $body.firstChild);

var rem = {
  isSet: false,
  designWidth: 750,
  val: null,
  h: null,

  init: function init(designWidth) {
    rem.set(designWidth);
    window.addEventListener('resize', rem.set);
  },
  set: function set() {
    $screen.style.display = 'block';
    var w = Number(document.defaultView.getComputedStyle($screen).width.replace(/px/, ''));
    var h = Number(document.defaultView.getComputedStyle($screen).height.replace(/px/, ''));
    $screen.style.display = 'none';
    $html.style.fontSize = 100 * w / rem.designWidth + 'px';
    rem.val = 100 * w / 750;
    rem.w = w;
    rem.h = h;
    //document.getElementsByClassName('container')[0].style.height = h+'px';
    console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
    rem.isSet = true;
    var $rem_height = document.querySelectorAll('.rem_height');
    [].forEach.call($rem_height, function (a) {
      a.style.height = h + 'px';
    });
  }
};

document.addEventListener('DOMContentLoaded', function () {

  if (!rem.isSet) {
    rem.init(750);
  }
});

window.rem = rem;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Vix = {
  version: '0.0.1'
};

function install(Vue) {
  var _init = Vue.prototype._init;
  Vue.prototype._init = function (options) {
    // if ( options === void 0 ) options = {};

    // options.init = options.init
    //   ? [vuexInit].concat(options.init)
    //   : vuexInit

    if (options.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
    _init.call(this, options);
  };
}

function createStore(modules) {

  var state = {};
  var mutators = {};

  modules.forEach(function (a) {
    // shallowly merge a.state into state
    for (var key in a.state) {
      if (state[key] !== undefined) {
        throw new Error('[Vix] state.' + key + ' is already occupied.');
      } else {
        state[key] = a.state[key];
      };
    };
    // mutator is a function that takes the action
    // and mutate the state
    for (var key in a.mutators) {
      if (mutators[key] !== undefined) {
        throw new Error('[Vix] mutators.' + key + ' is already occupied.');
      } else {
        mutators[key] = a.mutators[key];
      };
    };
  });

  // make state reactive
  new Vue({
    data: state
  });

  var store = {
    state: state,
    mutators: mutators,
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
    // call the mutator with the same name of action.type
    if (typeof mutators[action.type] === 'function') {
      mutators[action.type].call(vm, { state: state, dispatch: dispatch }, action);
    } else {
      throw new Error('[Vix] "' + action.type + '" is an invalid action-type.');
    }
  }
}

Vix.install = install;
Vix.createStore = createStore;
// console.log(Vix)
/* harmony default export */ __webpack_exports__["a"] = Vix;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
  img: '../adr/img/',

  dev: function () {
    // if( common.param('z_dev')==='true' ){
    //   return true;
    // };
    return true;
  }(),

  page: 'pending',
  loaded: false,

  conf: {
    act_f: {
      one: '170330'
    },
    share_title: {
      one: '有声有色，悦读于乐'
    },
    share_desc: {
      one: '听正版有声小说《九州•海上牧云记》尽在QQ阅读'
    }
  },

  user: {
    loggedIn: false,
    isGuest: false,
    name: '我',
    ticket: ''
  },

  meta: {
    share: function () {
      var el = document.querySelector('[config]');
      var val = el.getAttribute('config');
      return (/share/.test(val) ? true : false
      );
    }(),

    name: function () {
      var el = document.querySelector('html');
      var val = el.getAttribute('name');
      return val;
    }(),
    batch: function () {
      var el = document.querySelector('html');
      var val = el.getAttribute('batch');
      return val;
    }(),
    platform: function () {
      var el = document.querySelector('html');
      var val = el.getAttribute('platform');
      return val;
    }()
  },

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
    return (/share/.test(val) ? true : false
    );
  }(),

  loggedIn: false,

  mask_confirm: {
    show: false
  },
  mask_download: {
    show: false
  }
};

var mutators = {
  TO_LOGIN: function TO_LOGIN(_ref, action) {
    var state = _ref.state;

    if (state.dev) {
      state.loggedIn = true;
      state.user.loggedIn = true;
    } else {
      // Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_login` );
      Local.login();
    };
  },
  TO_PAGE: function TO_PAGE() {},
  TO_CONTACT: function TO_CONTACT(_ref2, action) {
    var state = _ref2.state,
        dispatch = _ref2.dispatch;

    if (state.meta.share) {
      dispatch({ type: 'TO_APP' });
    } else {
      if (state.user.loggedIn === false) {
        dispatch({ type: 'TO_LOGIN' });
      } else {
        Local.openPage(location.href.replace(/(writers|actors|lottery)\.html/g, 'contact.html'));
      }
    };
  },
  TO_CHARGE: function TO_CHARGE() {
    Local.doCharge('act', true, action.money * 100);
  },
  TO_BOOK: function TO_BOOK(_ref3, action) {
    var state = _ref3.state,
        dispatch = _ref3.dispatch;

    if (!state.share) {

      if (state.meta.batch === 'one') {
        if (state.meta.name === 'one') {
          Local.forceLog(common.param('act_f'), 'one_cover_main_' + action.bid);
        } else {
          Local.forceLog(common.param('act_f'), 'one_cover_ques_' + action.bid);
        }
      } else {
        if (state.books.shared === false) {
          Local.forceLog(common.param('act_f'), 'two_cover_before_' + action.bid);
        } else {
          Local.forceLog(common.param('act_f'), 'two_cover_after_' + action.bid);
        }
      }

      ABook.gotoDetail(action.bid);
    } else {
      dispatch({ type: 'TO_APP' });
    }
  },
  TO_READ: function TO_READ(_ref4, action) {
    var state = _ref4.state,
        dispatch = _ref4.dispatch;

    Local.$toRead(action.bid);
  },
  TO_LISTEN_BOOK: function TO_LISTEN_BOOK(_ref5, action) {
    var state = _ref5.state,
        dispatch = _ref5.dispatch;

    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'toListen');
      location.href = 'uniteqqreader://nativepage/client/listenpage?mediaId=90001027';
    }
  },
  SET_ICON: function SET_ICON(_ref6, action) {
    var state = _ref6.state,
        dispatch = _ref6.dispatch;

    var pre = function () {
      // 如果当前环境为测试环境：
      if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
        return 'https://ptsolomo.reader.qq.com/book_res/event';
      } else {
        return 'https://yuedu.reader.qq.com/event';
      }
    }();

    var href = pre + ('/act170303/adr/share.html?tf=1&act_f=' + state.conf.act_f.one);

    Local.$setIconForShareing(href, location.href.replace(/act170303.+/, 'act170303/adr/img/thumb.jpg'), state.conf.share_title.one, state.conf.share_desc.one);
  },
  SHARE: function SHARE(_ref7, action) {
    var state = _ref7.state,
        dispatch = _ref7.dispatch;

    Local.forceLog(common.param('act_f'), 'share');
    // MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_share`})
    if (!state.meta.share) {

      var pre = function () {
        // 如果当前环境为测试环境：
        if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
          return 'https://ptsolomo.reader.qq.com/book_res/event';
        } else {
          return 'https://yuedu.reader.qq.com/event';
        }
      }();
      var act_f = state.conf.act_f.one;
      var href = pre + ('/act170303/adr/share.html?tf=1&act_f=' + act_f);

      // Local.forceLog( common.param('act_f'),`${state.meta.batch}_toShare` );
      Local.$share(href, location.href.replace(/act170303.+/, 'act170303/adr/img/thumb.jpg'), state.conf.share_title.one, state.conf.share_desc.one);
    } else {
      dispatch({
        type: 'SHOW',
        what: 'mask_share'
      });
    }
  },
  SET_SECOND_SHARING: function SET_SECOND_SHARING(_ref8, action) {
    var state = _ref8.state,
        dispatch = _ref8.dispatch;

    sns.share({
      url: location.href,
      //cover: location.href.replace( /act161202.+/,'act161202/adr/img/qqreader.png' ),
      cover: 'https://ptsolomo.reader.qq.com/book_res/event/act170303/adr/img/thumb.jpg',
      title: state.conf.share_title.one,
      desc: state.conf.share_desc.one
    }, '111');
    // the second argument '111' is essential or an error would be thrown
  },
  TO_APP: function TO_APP(_ref9, action) {
    var state = _ref9.state,
        dispatch = _ref9.dispatch;

    // Local.forceLog( common.param('act_f'),`${state.meta.batch}_toApp` );
    var test = function () {
      if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
        return true;
      } else {
        return false;
      }
    }();
    var act_f = state.conf.act_f.one;
    var href = function () {
      if (test) {
        if (env.pt === 'adr') {
          return 'http://solomotest4.3g.qq.com/book_res/event/act170303/adr/index.html?act_f=' + act_f;
        } else {
          return 'https://ptsolomo.reader.qq.com/book_res/event/act170303/ios/index.html?act_f=' + act_f;
        }
      } else {
        if (env.pt === 'adr') {
          return 'http://iyuedu.qq.com/event/act170303/adr/index.html?act_f=' + act_f;
        } else {
          return 'https://yuedu.reader.qq.com/event/act170303/ios/index.html?act_f=' + act_f;
        }
      };
    }();
    // if the current env is adr&&wx
    if (env.vw === 'wx' && env.pt === 'adr') {
      sns.open(function (installStat, plat) {
        if (installStat === -2) {//浏览器
          // window.location.href="uniteqqreader://nativepage/client/bookshelf";
        } else if (installStat) {
          // if qqreader is installed
          bnative.openPage(href);
          state.mask_download.show = true;
        } else {
          state.mask_download.show = true;
        }
      });
    } else {
      bnative.openPage(href);
      setTimeout(function () {
        state.mask_download.show = true;
      }, 1000);
    };
  },
  TO_DOWNLOAD: function TO_DOWNLOAD(_ref10, action) {
    var state = _ref10.state,
        dispatch = _ref10.dispatch;

    bnative.downLoad('10003531');
  },
  REPLAY: function REPLAY(_ref11, action) {
    var state = _ref11.state,
        dispatch = _ref11.dispatch;

    Local.forceLog(common.param('act_f'), 'replay');
    // MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_replay`})
    if (window.env && env.vw === 'wx') {
      location.href = function () {
        if (/\?/.test(location.href)) {
          return location.href + '&zrand=' + new Date().getTime();
        } else {
          return location.href + '?zrand=' + new Date().getTime();
        }
      }();
    } else {
      location.href = location.href;
    }
  },
  ADD_TO_SHELF: function ADD_TO_SHELF(_ref12, action) {
    var state = _ref12.state,
        dispatch = _ref12.dispatch;


    Local.addToShelfBooks(JSON.stringify([action.book]));
    // Local.$addToShelf( action.book );
    // };
  },
  SHOW: function SHOW(_ref13, action) {
    var state = _ref13.state,
        dispatch = _ref13.dispatch;

    state[action.what].show = true;
  },
  HIDE: function HIDE(_ref14, action) {
    var state = _ref14.state,
        dispatch = _ref14.dispatch;

    state[action.what].show = false;
  }
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators };

/***/ }),
/* 5 */
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

exports.default = {
	props: ['state'],
	computed: {
		writers: function writers() {
			var state = [];
			this.state.writers.forEach(function (a) {
				state.push(a.state);
			});
			return state;
		}
	},
	mounted: function mounted() {}
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

module.exports = {
	data: function data() {
		return {};
	},
	mounted: function mounted() {}
};

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
//
//
//
//

exports.default = {
	data: function data() {
		return {};
	}
};

/***/ }),
/* 8 */
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

module.exports = {
	computed: {
		mask_download: function mask_download() {
			return this.$store.state.mask_download;
		}
	},
	methods: {
		hide: function hide() {
			this.$store.dispatch({
				type: 'HIDE',
				what: 'mask_download'
			});
		},
		CONFIRM: function CONFIRM() {
			this.$store.dispatch({
				type: 'TO_DOWNLOAD'
			});
		}
	}
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  "data-v-219f03d5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  "data-v-65ab07a1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  "data-v-70a30ebf",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  "data-v-6d39c22f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "DEBUG"
  }, [_c('div', {
    staticClass: "fixed__"
  }, [_vm._v("\n\t\tloggedIn: " + _vm._s(_vm.state.loggedIn) + ", day: " + _vm._s(_vm.state.day)), _c('br'), _vm._v("\n\t\tcurrent: " + _vm._s(_vm.state.current)), _c('br')])])
},staticRenderFns: []}

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_download.show),
      expression: "mask_download.show"
    }],
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
      "click": _vm.CONFIRM
    }
  }, [_vm._v("下载QQ阅读")]), _c('li', {
    staticClass: "cancel",
    on: {
      "click": _vm.hide
    }
  }, [_vm._v("取消")])])])])
},staticRenderFns: []}

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_common_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store_js__ = __webpack_require__(26);




var root = new Vue({
	el: '#root',
	store: __WEBPACK_IMPORTED_MODULE_1__store_store_js__["a" /* default */],
	components: {
		App: __webpack_require__(49)
	},
	template: '<app></app>'
});

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var state = {
	audio: {
		on: false
	},
	change: {
		stage: 0
	}
};

var mutators = {
	INIT: function INIT(_ref, action) {
		var state = _ref.state,
		    dispatch = _ref.dispatch;

		if (state.meta.share) {
			dispatch({
				type: 'SET_SECOND_SHARING'
			});
			state.page = 'ready';
		} else {
			Local.forceLog(common.param('act_f'), 'enter');
			dispatch({
				type: 'SET_ICON'
			});
			state.page = 'ready';
		}
	},
	TURN_AUDIO: function TURN_AUDIO(_ref2, action) {
		var state = _ref2.state,
		    dispatch = _ref2.dispatch;

		Local.forceLog(common.param('act_f'), 'play');
		state.audio.on = !state.audio.on;
	},
	CHANGE: function CHANGE(_ref3, action) {
		var state = _ref3.state,
		    dispatch = _ref3.dispatch;

		if (action.to === 4) {
			Local.forceLog(common.param('act_f'), 'end');
		};
		state.change.stage = action.to;
	},
	CLICK_BTN: function CLICK_BTN(_ref4, action) {
		var state = _ref4.state,
		    dispatch = _ref4.dispatch;

		if (state.meta.share) {
			dispatch({
				type: 'TO_APP'
			});
		} else {
			dispatch({
				type: 'SHARE'
			});
		}
	}
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators };

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vix_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(25);




Vue.use(__WEBPACK_IMPORTED_MODULE_0__Vix_js__["a" /* default */]);

var store = __WEBPACK_IMPORTED_MODULE_0__Vix_js__["a" /* default */].createStore([__WEBPACK_IMPORTED_MODULE_1__base_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */]]);

/* harmony default export */ __webpack_exports__["a"] = store;

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */
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

exports.default = {
	components: {
		Debugger: __webpack_require__(15),
		MaskLoading: __webpack_require__(16),
		MaskOver: __webpack_require__(17),

		MaskDownload: __webpack_require__(18),
		SwiperNine: __webpack_require__(58)
	},
	data: function data() {
		return {};
	},
	computed: {
		page: function page() {
			return this.$store.state.page;
		},
		meta: function meta() {
			return this.$store.state.meta;
		},
		img: function img() {
			return this.$store.state.img;
		}
	},
	watch: {},
	created: function created() {},
	mounted: function mounted() {
		this.$store.dispatch({ type: 'INIT' });
	},
	methods: {
		touchmove: function touchmove(e) {
			e.preventDefault();
		}
	}
};

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */
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

exports.default = {
	computed: {
		audio: function audio() {
			return this.$store.state.audio;
		}
	},
	watch: {
		// 'change.stage': function(nv){
		// 	if(nv===1&&this.music.initialized===false){
		// 		this.$refs.audio.pause();
		// 		setTimeout(()=>{
		// 			this.$refs.audio.play();
		// 		},50);
		// 	}
		// },
		'audio.on': function audioOn(nv) {
			if (nv === true) {
				this.$refs.audio.play();
			} else {
				this.$refs.audio.pause();
			}
		}
	},
	created: function created() {},
	mounted: function mounted() {
		var _this = this;

		// this.$refs.audio.load();
		this.$refs.audio.addEventListener('loadeddata', function () {
			console.log('loadeddata');
			if (_this.audio.on === true) {
				_this.$refs.audio.play();
			};
		});
		this.$refs.audio.addEventListener('canplaythrough', function () {
			console.log('canplaythrough');
			if (_this.audio.on === true) {
				_this.$refs.audio.play();
			};
		});
		// document.addEventListener("WeixinJSBridgeReady",()=>{
		// 	console.log('WeixinJSBridgeReady')
		// 	if( this.music.on===true ){
		// 		this.$refs.audio.play();
		// 	};
		//   }, false);
	},
	methods: {}
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data$watch$computed$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = (_data$watch$computed$ = {
  data: function data() {
    return {
      id: null,
      bars: [{
        class_: 'active'
      }, {
        class_: 'active'
      }, {
        class_: 'active'
      }]
    };
  },
  watch: {
    // 'change': function(nv){

    // }
  },
  computed: {
    img: function img() {
      return this.$store.state.img;
    },
    audio: function audio() {
      return this.$store.state.audio;
    }
  }
}, _defineProperty(_data$watch$computed$, 'watch', {
  'audio.on': function audioOn(nv) {
    if (nv === true) {
      this.play();
    } else {
      this.stop();
    }
  }
}), _defineProperty(_data$watch$computed$, 'mounted', function mounted() {}), _defineProperty(_data$watch$computed$, 'methods', {
  play: function play() {
    var _this = this;

    this.bars[0].class_ = '';
    this.bars[1].class_ = '';
    this.bars[2].class_ = '';
    var tick = -1;
    this.id = setInterval(function () {
      if (tick === -1) {
        _this.bars[0].class_ = '';
        _this.bars[1].class_ = '';
        _this.bars[2].class_ = '';
      } else {
        _this.bars[tick].class_ = 'active';
      }
      if (tick < 2) {
        tick++;
      } else {
        tick = -1;
      }
    }, 500);
  },
  stop: function stop() {
    clearInterval(this.id);
    this.bars[0].class_ = 'active';
    this.bars[1].class_ = 'active';
    this.bars[2].class_ = 'active';
  }
}), _data$watch$computed$);

/***/ }),
/* 34 */
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

exports.default = {
  components: {},
  data: function data() {
    return {
      class_: ''
    };
  },
  computed: {
    img: function img() {
      return this.$store.state.img;
    }
  },
  watch: {},
  mounted: function mounted() {
    var _this = this;

    window.addEventListener('DOMContentLoaded', function () {
      var w = rem.w;
      var h = rem.h;
      var ratio = h / w;
      console.log(ratio);
      if (ratio > 1.5224) {
        _this.class_ = 'below';
      }
    });
  }
};

/***/ }),
/* 35 */
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

exports.default = {
  components: {},
  data: function data() {
    return {
      class_: ''
    };
  },
  computed: {
    img: function img() {
      return this.$store.state.img;
    }
  },
  watch: {},
  mounted: function mounted() {
    var _this = this;

    window.addEventListener('DOMContentLoaded', function () {
      var w = rem.w;
      var h = rem.h;
      var ratio = h / w;
      console.log(ratio);
      if (ratio < 1.4) {
        _this.class_ = 'small';
      }
    });
  }
};

/***/ }),
/* 36 */
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

exports.default = {
  components: {
    IconBroadcast: __webpack_require__(53),
    AudioNine: __webpack_require__(52)
  },
  data: function data() {
    return {
      syb: ''
    };
  },
  computed: {
    img: function img() {
      return this.$store.state.img;
    }
  },
  watch: {
    '$store.state.change.stage': function $storeStateChangeStage(nv) {
      var _this = this;

      if (nv === 2) {
        setTimeout(function () {
          _this.syb = 'enter-up';
        }, 300);
      }
    }
  }
};

/***/ }),
/* 37 */
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

exports.default = {
  components: {},
  data: function data() {
    return {
      text_0: '',
      text_1: '',
      logo: '',

      btn: '',
      btn_replay: ''
    };
  },
  computed: {
    img: function img() {
      return this.$store.state.img;
    },
    meta: function meta() {
      return this.$store.state.meta;
    },
    change: function change() {
      return this.$store.state.change;
    }
  },
  watch: {
    'change.stage': function changeStage(nv) {
      var _this = this;

      if (nv === 4) {
        setTimeout(function () {
          _this.text_0 = 'enter-up';
        }, 500);
        setTimeout(function () {
          _this.text_1 = 'enter-up';
        }, 800);
        setTimeout(function () {
          _this.logo = 'enter-up';
        }, 1100);
        setTimeout(function () {
          _this.btn = 'enter-up';
        }, 1400);
        setTimeout(function () {
          _this.btn_replay = 'enter-up';
        }, 1700);
      }
    }
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		Page0: __webpack_require__(54),
		Page1: __webpack_require__(55),
		Page2: __webpack_require__(56),
		Page4: __webpack_require__(57)
	},
	props: {
		act: {},
		img: {},
		items: {
			default: function _default() {
				return [{}, {}, {}, {}, {}];
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
			default: false
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
	data: function data() {
		return _defineProperty({
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
			transition: '0s'
		}, 'offset', 0);
	},
	computed: {
		img: function img() {
			return this.$store.state.img;
		}
	},
	watch: {
		items: function items() {
			//this.copy = this.items;
		},
		currentOne: function currentOne(new_val) {
			this.$store.dispatch({
				type: 'CHANGE',
				to: new_val
			});
		}
	},
	mounted: function mounted() {
		var _this = this;

		//console.log(this.$refs)
		var self = this;
		// this.items = (function(){
		// 	var items = JSON.parse( JSON.stringify(self.raw) );
		// 	return items;
		// })();
		// console.log(this.trainOffsetX)
		window.addEventListener('DOMContentLoaded', function () {
			setTimeout(function () {
				_this.setWidth();
			}, 600);
		});
		// window.addEventListener('load',()=>{
		// 	this.setWidth();
		// });
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
		// var e = document.createEvent("Event");
		// e.init("resize", true, true);
		// window.dispatchEvent(e);
	},
	methods: {
		to_book: function to_book() {
			this.act({ type: 'TO_BOOK', bid: this.items[this.currentOne].bid });
		},

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
			console.log('trainOffsetX:' + this.trainOffsetX);
		},
		toNext: function toNext() {
			var _this2 = this;

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
			this.transition = this.duration + 'ms ' + this.ease;
			this.trainOffsetX = -this.currentOne * this.width;
			setTimeout(function () {
				_this4.transition = '0s';
				_this4.switching = false;
				_this4.inCycle = false;
			}, this.duration);
		},
		touchstart: function touchstart(e) {
			e.stopPropagation();
			// console.log(this.items)
			console.log(this.inCycle);
			console.log(this.trainOffsetX);
			// if( isNaN(this.trainOffsetX) ){
			// 	this.trainOffsetX = 0;
			// }
			if (!this.inCycle && !this.switching) {
				this.setWidth();
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
		touchmove: function touchmove(e) {
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
						// console.log(this.trainOffsetX)
						this.offset += distance;
						//console.log(this.trainOffsetX)
					}
				}
			}
		},
		touchend: function touchend(e) {
			e.stopPropagation();
			if (this.inCycle && !this.scrolling) {
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X0;
				// console.log(distance)
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
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(40)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(60),
  /* scopeId */
  "data-v-5e0c688f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(66),
  /* scopeId */
  "data-v-7cef7740",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(39)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(59),
  /* scopeId */
  "data-v-416adb00",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(42)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  "data-v-7715e1b9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(43)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(63),
  /* scopeId */
  "data-v-7723f93a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(44)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(64),
  /* scopeId */
  "data-v-773210bb",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(65),
  /* scopeId */
  "data-v-774e3fbd",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(41)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(61),
  /* scopeId */
  "data-v-6ac83a7c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "IconBroadcast"
  }, _vm._l((_vm.bars), function(a, i) {
    return _c('img', {
      staticClass: "_bar",
      class: '_bar' + i + ' ' + a.class_,
      attrs: {
        "src": _vm.img + '/bc_' + i + '.png'
      }
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 60 */
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
  }, [_c('mask-download'), _c('swiper-nine')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Swiper__ rem_height"
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentOne > 0),
      expression: " currentOne>0 "
    }],
    staticClass: "arrow_left pop-left",
    attrs: {
      "src": _vm.img + '/arrow_left.png'
    },
    on: {
      "click": _vm.toPrev
    }
  }), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentOne < 4),
      expression: " currentOne<4 "
    }],
    staticClass: "arrow_right pop-right",
    attrs: {
      "src": _vm.img + '/arrow_right.png'
    },
    on: {
      "click": _vm.toNext
    }
  }), _c('div', {
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
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[_vm.items.length - 1].name) + "\r\n\t\t\t")]) : _vm._e(), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }), _vm._l((_vm.items), function(a, i) {
    return _c('li', {
      key: a.id,
      staticClass: "item",
      style: ('background-image:url(' + _vm.img + '/bg_' + i + '.png); background-size:100% auto;')
    }, [(i === 0) ? _c('page0') : _vm._e(), (i === 1) ? _c('page1') : _vm._e(), (i === 2) ? _c('page2') : _vm._e(), (i === 4) ? _c('page4') : _vm._e()], 1)
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
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[1].name) + "\r\n\t\t\t")]) : _vm._e()], 2)])])
},staticRenderFns: []}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Page0"
  }, [_c('div', {
    staticClass: "frame",
    class: _vm.class_
  }), _c('img', {
    staticClass: "title_text",
    class: _vm.class_,
    attrs: {
      "src": _vm.img + '/title_text.png'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Page1"
  }, [_c('img', {
    staticClass: "paper",
    class: _vm.class_,
    attrs: {
      "src": _vm.img + '/paper.png'
    }
  }), _c('div', {
    staticClass: "btn_to_listen",
    style: ('background-image:url(' + _vm.img + '/btn_to_listen.png);background-size:3.8rem 1.04rem;'),
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_LISTEN_BOOK'
        })
      }
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Page2"
  }, [_c('img', {
    staticClass: "syb",
    class: _vm.syb,
    attrs: {
      "src": _vm.img + '/syb.png'
    }
  }), _c('div', {
    staticClass: "btn_blog",
    style: ('background-image:url(' + _vm.img + '/btn_blog.png);background-size:3.8rem 1.04rem;'),
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TURN_AUDIO'
        })
      }
    }
  }, [_c('icon-broadcast'), _c('audio-nine')], 1)])
},staticRenderFns: []}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Page4"
  }, [_c('img', {
    staticClass: "text_0",
    class: _vm.text_0,
    attrs: {
      "src": _vm.img + '/text_0.png'
    }
  }), _c('img', {
    staticClass: "text_1",
    class: _vm.text_1,
    attrs: {
      "src": _vm.img + '/text_1.png'
    }
  }), _c('img', {
    staticClass: "logo",
    class: _vm.logo,
    attrs: {
      "src": _vm.img + '/logo.png'
    }
  }), _c('img', {
    staticClass: "btn_share",
    class: _vm.btn,
    attrs: {
      "src": _vm.img + '/btn_' + (_vm.meta.share ? 'to_app' : 'share') + '.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'CLICK_BTN'
        })
      }
    }
  }), _c('img', {
    staticClass: "btn_replay",
    class: _vm.btn_replay,
    attrs: {
      "src": _vm.img + '/btn_replay.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'REPLAY'
        })
      }
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "AudioNine"
  }, [_c('audio', {
    ref: "audio",
    attrs: {
      "src": "../adr/intro.mp3",
      "preload": "",
      "loop": ""
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ })
/******/ ]);