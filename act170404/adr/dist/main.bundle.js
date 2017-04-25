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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_common_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store_js__ = __webpack_require__(8);




var root = new Vue({
	el: '#root',
	store: __WEBPACK_IMPORTED_MODULE_1__store_store_js__["a" /* default */],
	components: {
		App: __webpack_require__(25)
	},
	template: '<app></app>'
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rem_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rem_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__rem_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debugger_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debugger_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__debugger_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_scss__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_transition_less__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_transition_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vue_transition_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_index_less__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__animations_index_less__);


//import './config.js';




/***/ }),
/* 3 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

  if (/(iyuedu\.qq\.com|yuedu\.reader\.qq\.com)/.test(location.href)) {
    // if the current page is formal
    if (!/z_debugger=true/.test(location.href)) {
      return;
    }
  }

  var body = document.querySelector('body');
  var square = document.createElement('div');
  var mask = document.createElement('div');

  square.style.cssText += 'position:fixed; right:0; top:0;' + 'width:0.5rem; height:0.5rem;' + 'background:black; opacity: 0.8; z-index: 99999;';
  mask.style.cssText += 'position:fixed; left:0; top:0;' + 'box-sizing:border-box; width:100%; height:50%;' + 'padding:20px; word-break:break-all; overflow:scroll; background:black; opacity:0.8; z-index:99999; color:white; font-size: 16px; display:none;';
  body.appendChild(square);
  body.appendChild(mask);

  var log = console.log.bind(console);
  console.log = function (arg) {
    log(arg);
    if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
      mask.innerHTML += '<p>' + JSON.stringify(arg) + '</p>';
    } else {
      mask.innerHTML += '<p>' + arg + '</p>';
    }
  };
  console.log('[debugger] Debugger initialized.');
  window.onerror = function (msg, uri, line) {
    // console.log(arguments)
    mask.innerHTML += '<p style="color:red;">' + msg + '<br/>' + uri + '<br/>' + line + '</p>';
  };

  var btn_refresh = document.createElement('div');
  btn_refresh.style.cssText += 'display: none;' + 'position: fixed; left: 0; bottom: 0;' + 'width: 200px; height: 50px;' + 'background: orange; color: black; font-size: 16px; line-height: 50px; text-align: center;' + 'z-index:9999;';
  btn_refresh.innerHTML = 'Refresh';
  btn_refresh.addEventListener('click', function () {
    location.href = location.href;
  });
  body.appendChild(btn_refresh);

  var btn_to_dev = document.createElement('div');
  btn_to_dev.style.cssText += 'display: none;' + 'position: fixed; left: 200px; bottom: 0;' + 'width: 200px; height: 50px;' + 'background: #0f88eb; color: black; font-size: 16px; line-height: 50px; text-align: center;' + 'z-index:9999;';
  btn_to_dev.innerHTML = 'DevMode';
  btn_to_dev.addEventListener('click', function () {
    location.href = location.href + (location.href.match(/\?/) ? '&' : '') + 'z_dev=true';
  });
  body.appendChild(btn_to_dev);

  square.addEventListener('click', function () {
    mask.style.display = '';
    btn_refresh.style.display = '';
    btn_to_dev.style.display = '';
  });
  mask.addEventListener('click', function () {
    mask.style.display = 'none';
    btn_refresh.style.display = 'none';
    btn_to_dev.style.display = 'none';
  });
})();

/***/ }),
/* 4 */
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
/* 5 */
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
  var getters = {};

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

    if (a.getters) {
      var _loop = function _loop(_key) {
        if (getters[_key] !== undefined) {
          throw new Error('[Vix] getters.' + _key + ' is already occupied.');
        } else {
          Object.defineProperty(getters, _key, {
            enumerable: true,
            configurable: true,
            // writable: elKey?true:false,
            get: function get() {
              return a.getters[_key]({ state: state, getters: getters });
            }
          });
          // getters[key] = function(){
          //   return a.getters[key]({state,getters});
          // };
        };
      };

      for (var _key in a.getters) {
        _loop(_key);
      };
    }
  });

  // make state reactive
  new Vue({
    data: state
  });

  var store = {
    state: state,
    mutators: mutators,
    getters: getters,
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
      mutators[action.type].call(vm, { state: state, dispatch: dispatch, getters: getters }, action);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
  img: '../adr/img/',

  dev: function () {
    if (common.param('z_dev') === 'true') {
      return true;
    } else {
      return false;
    };
  }(),

  page: 'pending',
  loaded: false,

  conf: {
    id: '170404',
    act_f: '170404',
    share_title: '423全民阅读，1亿红包大派送',
    share_desc: 'QQ阅读发力全民阅读，海量红包，等你来拿'
  },

  user: {
    loggedIn: false,
    isGuest: false,
    name: '我',
    ticket: ''
  },

  meta: {
    inTest: function () {
      return (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)
      );
    }(),
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
    platform: function () {
      var el = document.querySelector('html');
      var val = el.getAttribute('platform');
      if (window.env) {
        val = window.env.pt;
      };
      console.log('[platform] ' + val);
      return val;
    }(),
    ios: function () {
      if (window.env !== undefined) {
        return env.pt === 'ios' ? true : false;
      } else {
        var el = document.querySelector('html');
        var val = el.getAttribute('platform');
        console.log(val);
        return (/ios/.test(val) ? true : false
        );
      };
    }()
  },

  share: function () {
    var el = document.querySelector('[config]');
    var val = el.getAttribute('config');
    return (/share/.test(val) ? true : false
    );
  }(),

  mask_rules: {
    show: false
  },
  mask_form: {
    show: false
  },
  mask_confirm: {
    show: false
  },
  mask_download: {
    show: false
  }
};

var getters = {
  pre: function pre(_ref) {
    var state = _ref.state,
        getters = _ref.getters;

    if (state.meta.inTest) {
      if (state.meta.platform === 'adr') {
        return 'http://solomotest4.3g.qq.com/book_res/event';
      } else {
        return 'https://ptsolomo.reader.qq.com/book_res/event';
      }
    } else {
      if (state.meta.platform === 'adr') {
        return 'http://iyuedu.qq.com/event';
      } else {
        return 'https://yuedu.reader.qq.com/event';
      }
    }
  },
  pre_https: function pre_https(_ref2) {
    var state = _ref2.state,
        getters = _ref2.getters;

    if (state.meta.inTest) {
      return 'https://ptsolomo.reader.qq.com/book_res/event';
    } else {
      return 'https://yuedu.reader.qq.com/event';
    }
  },
  share_href: function share_href(_ref3) {
    var state = _ref3.state,
        getters = _ref3.getters;

    return getters.pre_https + '/act' + state.conf.id + '/adr/share.html?tf=1&act_f=' + state.conf.act_f + '&u=' + state.user.u + '&p=' + state.user.p + '&lot=' + state.user.lot;
  },
  share_thumb: function share_thumb(_ref4) {
    var state = _ref4.state,
        getters = _ref4.getters;

    return getters.pre_https + '/act' + state.conf.id + '/adr/img/main/thumb.jpg';
  },
  href_main: function href_main(_ref5) {
    var state = _ref5.state,
        getters = _ref5.getters;

    return getters.pre + '/act' + state.conf.id + '/' + (state.meta.platform === 'adr' ? 'adr' : 'ios') + '/main.html?act_f=' + state.conf.act_f;
  },
  href_total: function href_total(_ref6) {
    var state = _ref6.state,
        getters = _ref6.getters;

    return getters.pre + '/act170410/index.html?act_f=170410';
  }
};

function pre(mode) {
  var pre = '';
  if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
    // if we are in testing environment
    if (mode === 'https') {
      pre = 'https://ptsolomo.reader.qq.com/book_res/event';
    } else if (window.env && window.env.pt === 'adr' || state.meta.platform === 'adr') {
      pre = 'http://solomotest4.3g.qq.com/book_res/event';
    } else {
      pre = 'https://ptsolomo.reader.qq.com/book_res/event';
    }
  } else {
    if (mode === 'https') {
      pre = 'https://yuedu.reader.qq.com/event';
    } else if (window.env && window.env.pt === 'adr' || state.meta.platform === 'adr') {
      pre = 'http://iyuedu.qq.com/event';
    } else {
      pre = 'https://yuedu.reader.qq.com/event';
    }
  }
  return pre;
}
function share_thumb() {
  return pre('https') + '/act' + state.conf.id + '/public/img/main/thumb.jpg';
}

var mutators = {
  TO_LOGIN: function TO_LOGIN(_ref7, action) {
    var state = _ref7.state;

    if (state.dev) {
      state.loggedIn = true;
      state.user.loggedIn = true;
    } else {
      // Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_login` );
      Local.login();
    };
  },
  TO_PAGE: function TO_PAGE(_ref8, action) {
    var state = _ref8.state,
        dispatch = _ref8.dispatch,
        getters = _ref8.getters;

    console.log('[TO_PAGE href] ' + action.href);
    if (state.meta.share) {
      // if the current env is adr&&wx
      if (env.vw === 'wx' && env.pt === 'adr') {
        sns.open(function (installStat, plat) {
          if (installStat === -2) {//浏览器
            // window.location.href="uniteqqreader://nativepage/client/bookshelf";
          } else if (installStat) {
            // if qqreader is installed
            bnative.openPage(action.href);
            state.mask_download.show = true;
          } else {
            state.mask_download.show = true;
          }
        });
      } else {
        bnative.openPage(action.href);
        setTimeout(function () {
          state.mask_download.show = true;
        }, 1000);
      };
    } else {
      if (state.meta.platform === 'adr') {
        Local.openPage(action.href);
      } else {
        Local.openInside(action.href);
      }
    }
  },
  TO_PAGE_MAIN: function TO_PAGE_MAIN(_ref9, action) {
    var state = _ref9.state,
        dispatch = _ref9.dispatch,
        getters = _ref9.getters;

    dispatch({
      type: 'TO_PAGE',
      href: getters.href_main
    });
  },
  TO_PAGE_TOTAL: function TO_PAGE_TOTAL(_ref10, action) {
    var state = _ref10.state,
        dispatch = _ref10.dispatch,
        getters = _ref10.getters;

    dispatch({
      type: 'TO_PAGE',
      href: getters.href_total
    });
  },
  TO_CONTACT: function TO_CONTACT(_ref11, action) {
    var state = _ref11.state,
        dispatch = _ref11.dispatch;

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
  TO_BOOK: function TO_BOOK(_ref12, action) {
    var state = _ref12.state,
        dispatch = _ref12.dispatch;

    if (!state.share) {

      ABook.gotoDetail(action.bid);
    } else {
      dispatch({ type: 'TO_APP' });
    }
  },
  TO_READ: function TO_READ(_ref13, action) {
    var state = _ref13.state,
        dispatch = _ref13.dispatch;

    Local.$toRead(action.bid);
  },
  TO_LISTEN_BOOK: function TO_LISTEN_BOOK(_ref14, action) {
    var state = _ref14.state,
        dispatch = _ref14.dispatch;

    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'toListen');
      location.href = 'uniteqqreader://nativepage/client/listenpage?mediaId=90001027';
    }
  },
  TO_ACCOUNT: function TO_ACCOUNT(_ref15, action) {
    var state = _ref15.state,
        dispatch = _ref15.dispatch;

    location.href = state.meta.platform === 'adr' ? 'uniteqqreader://nativepage/getAcctInfo' : 'uniteqqreader://nativepage/account/index';
  },
  SET_ICON: function SET_ICON(_ref16, action) {
    var state = _ref16.state,
        dispatch = _ref16.dispatch;

    var pre = function () {
      // 如果当前环境为测试环境：
      if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
        return 'https://ptsolomo.reader.qq.com/book_res/event';
      } else {
        return 'https://yuedu.reader.qq.com/event';
      }
    }();

    var href = pre + ('/act170404/adr/share.html?tf=1&act_f=' + state.conf.act_f);

    Local.$setIconForShareing(href, location.href.replace(/act170404.+/, 'act170404/adr/img/main/thumb.jpg'), state.conf.share_title, state.conf.share_desc);
  },
  SHARE: function SHARE(_ref17, action) {
    var state = _ref17.state,
        dispatch = _ref17.dispatch;

    // Local.forceLog( common.param('act_f'),`share` );
    Local.forceLog(common.param('act_f'), state.conf.id + '_btnShare');
    // // MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_share`})
    if (!state.meta.share) {

      var pre = function () {
        // 如果当前环境为测试环境：
        if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
          return 'https://ptsolomo.reader.qq.com/book_res/event';
        } else {
          return 'https://yuedu.reader.qq.com/event';
        }
      }();
      var act_f = state.conf.act_f;
      var href = pre + ('/act170404/adr/share.html?tf=1&act_f=' + act_f);

      // Local.forceLog( common.param('act_f'),`${state.meta.batch}_toShare` );
      Local.$share(href, location.href.replace(/act170404.+/, 'act170404/adr/img/main/thumb.jpg'), state.conf.share_title, state.conf.share_desc);
    } else {
      dispatch({
        type: 'SHOW',
        what: 'mask_share'
      });
    }
  },
  SET_SECOND_SHARING: function SET_SECOND_SHARING(_ref18, action) {
    var state = _ref18.state,
        dispatch = _ref18.dispatch;

    sns.share({
      url: location.href,
      //cover: location.href.replace( /act161202.+/,'act161202/adr/img/qqreader.png' ),
      cover: 'https://ptsolomo.reader.qq.com/book_res/event/act170404/adr/img/main/thumb.jpg',
      title: state.conf.share_title,
      desc: state.conf.share_desc
    }, '111');
    // the second argument '111' is essential or an error would be thrown
  },
  TO_APP: function TO_APP(_ref19, action) {
    var state = _ref19.state,
        dispatch = _ref19.dispatch;

    // Local.forceLog( common.param('act_f'),`${state.meta.batch}_toApp` );
    var test = function () {
      if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
        return true;
      } else {
        return false;
      }
    }();
    var id = state.conf.id;
    var act_f = state.conf.act_f;
    var href = function () {
      if (test) {
        if (env.pt === 'adr') {
          return 'http://solomotest4.3g.qq.com/book_res/event/act' + id + '/adr/main.html?act_f=' + act_f;
        } else {
          return 'https://ptsolomo.reader.qq.com/book_res/event/act' + id + '/ios/main.html?act_f=' + act_f;
        }
      } else {
        if (env.pt === 'adr') {
          return 'http://iyuedu.qq.com/event/act' + id + '/adr/main.html?act_f=' + act_f;
        } else {
          return 'https://yuedu.reader.qq.com/event/act' + id + '/ios/main.html?act_f=' + act_f;
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
  TO_DOWNLOAD: function TO_DOWNLOAD(_ref20, action) {
    var state = _ref20.state,
        dispatch = _ref20.dispatch;

    bnative.downLoad('10026765');
  },
  REPLAY: function REPLAY(_ref21, action) {
    var state = _ref21.state,
        dispatch = _ref21.dispatch;

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
  ADD_TO_SHELF: function ADD_TO_SHELF(_ref22, action) {
    var state = _ref22.state,
        dispatch = _ref22.dispatch;


    Local.addToShelfBooks(JSON.stringify([action.book]));
    // Local.$addToShelf( action.book );
    // };
  },
  SHOW: function SHOW(_ref23, action) {
    var state = _ref23.state,
        dispatch = _ref23.dispatch;

    state[action.what].show = true;
  },
  HIDE: function HIDE(_ref24, action) {
    var state = _ref24.state,
        dispatch = _ref24.dispatch;

    state[action.what].show = false;
  }
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators, getters: getters };

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
  lottery: {
    state: 'ready',
    text: '恭喜您',
    text2: '获得',
    coins: '--'
  }
};

var mutators = {
  INIT_MAIN: function INIT_MAIN(_ref, action) {
    var state = _ref.state,
        dispatch = _ref.dispatch;

    // if( true ){
    //   state.lottery.coins = 300;
    //   state.lottery.state = 'done';
    // };
    if (state.meta.share) {
      Local.forceLog(common.param('act_f'), state.conf.id + '_enterShare');
      dispatch({
        type: 'SET_SECOND_SHARING'
      });
      state.page = 'ready';
    } else {
      if (state.dev) {
        state.page = 'ready';
      } else {
        Local.forceLog(common.param('act_f'), state.conf.id + '_enter');
        Local.reqaObj(common.server() + ('pkg' + state.conf.id + '/init'), function (data) {
          console.log(data);
          if (data.code === -4) {
            state.page = 'over';
          } else {
            // dispatch({
            //   type: 'SET_ICON'
            // })
            if (data.isLogin) {
              state.user.loggedIn = true;

              if (data.money > 0) {
                if (data.qq === true) {
                  state.lottery.text = '您已经领取过';
                  state.lottery.text2 = '';
                } else if (data.device === true) {
                  state.lottery.text = '该设备已经领取过';
                  state.lottery.text2 = '';
                };
                state.lottery.coins = data.money;
                state.lottery.state = 'done';
              } else {
                if (data.hasRunOut === true) {
                  state.lottery.state = 'out';
                }
              }

              // if( data.device===true ){

              // };
              // if( data.hasRunOut===true ){
              //   state.lottery.state = 'out';
              // }else if( data.money>0 ){
              //   state.lottery.coins = data.money;
              //   state.lottery.state = 'done';
              // }
            }
            state.page = 'ready';
          }
          // state.page = 'ready';
          // state.page = 'over';
        }, [], function () {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }
  },
  DRAW_LOTTERY: function DRAW_LOTTERY(_ref2, action) {
    var state = _ref2.state,
        dispatch = _ref2.dispatch;

    state.lottery.state = 'pending';

    if (state.dev) {
      setTimeout(function () {
        // state.lottery.coins = 200;
        // state.lottery.state = 'success';
        state.lottery.state = 'out';
      }, 1000);
    } else {
      Local.forceLog(common.param('act_f'), state.conf.id + '_btnDraw');
      Local.reqaObj(common.server() + ('pkg' + state.conf.id + '/pick'), function (data) {
        console.log(data);
        if (data.code === 1 && data.money > 0) {
          // 成功获得书券
          state.lottery.coins = data.money;
          state.lottery.state = 'success';
        } else if (data.code === -4 || data.hasRunOut === true) {
          // 书券已经被抢光
          state.lottery.state = 'out';
        } else {
          // 其他情况
          Local.showToast(data.msg);
        }
      }, [], function () {
        Local.showToast("网络异常，请稍候重试");
      }, 1);
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators };

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vix_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_js__ = __webpack_require__(9);





Vue.use(__WEBPACK_IMPORTED_MODULE_0__Vix_js__["a" /* default */]);

var store = __WEBPACK_IMPORTED_MODULE_0__Vix_js__["a" /* default */].createStore([__WEBPACK_IMPORTED_MODULE_1__base_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__main_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__test_js__["a" /* default */]]);

/* harmony default export */ __webpack_exports__["a"] = store;

/***/ }),
/* 9 */
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

		Local.forceLog(common.param('act_f'), 'enter');

		window.CLOSE_WINDOW = function () {
			console.log('CLOSE_WINDOW');
			dispatch({
				type: 'CLOSE_WINDOW'
			});
			return true;
		};

		state.page = 'ready';
	},
	TURN_AUDIO: function TURN_AUDIO(_ref2, action) {
		var state = _ref2.state,
		    dispatch = _ref2.dispatch;

		state.audio.on = !state.audio.on;
	},
	CHANGE: function CHANGE(_ref3, action) {
		var state = _ref3.state,
		    dispatch = _ref3.dispatch;

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
/* 10 */
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

exports.default = {
	components: {
		MaskLoading: __webpack_require__(27),
		MaskDownload: __webpack_require__(26),
		MaskOver: __webpack_require__(28),

		Bag: __webpack_require__(29),
		Rules: __webpack_require__(30)
	},
	data: function data() {
		return {};
	},
	computed: {
		change_main: function change_main() {
			return this.$store.state.change_main;
		},
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
		this.$store.dispatch({ type: 'INIT_MAIN' });
	},
	methods: {
		touchmove: function touchmove(e) {
			e.preventDefault();
		}
	}
};

/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
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

exports.default = {
	data: function data() {
		return {};
	}
};

/***/ }),
/* 14 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      state: '',
      class_: ''
    };
  },
  computed: {
    meta: function meta() {
      return this.$store.state.meta;
    },
    img: function img() {
      return this.$store.state.img;
    },
    lottery: function lottery() {
      return this.$store.state.lottery;
    },
    user: function user() {
      return this.$store.state.user;
    }
  },
  watch: {
    // 'lottery.state': function(nv){
    //   if( nv==='success' ){
    //     this.class_ = 'ani-rubber-band';
    //   }
    // }
  },
  methods: {
    click: function click() {
      if (this.meta.share) {
        this.$store.dispatch({
          type: 'TO_PAGE_MAIN'
        });
      } else if (this.user.loggedIn === false) {
        this.$store.dispatch({
          type: 'TO_LOGIN'
        });
      } else if (this.lottery.state === 'ready') {
        this.class_ = 'ani-rubber-band';
        this.$store.dispatch({
          type: 'DRAW_LOTTERY'
        });
      }
    }
  }
};

/***/ }),
/* 15 */
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

exports.default = {
	props: {
		id: {},
		hasDiscount: {},

		act: {},
		img: {}
	},
	data: function data() {
		return {
			writers: function () {
				return (/writers\.html/.test(location.href)
				);
			}()
		};
	},
	methods: {
		TO_CONTACT: function TO_CONTACT() {
			this.act({
				type: 'TO_CONTACT'
			});
		}
	}

};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(21)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  "data-v-1b33dc1c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  "data-v-45deb875",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  "data-v-7ea05442",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(20)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(32),
  /* scopeId */
  "data-v-19b5cd7e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(19)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(31),
  /* scopeId */
  "data-v-01bcda80",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  "data-v-4dde1fef",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Bag"
  }, [_c('img', {
    staticClass: "coin_0 a-float-1800",
    attrs: {
      "src": _vm.img + 'main/coin_0.png'
    }
  }), _c('img', {
    staticClass: "coin_1 a-float-coin-1000",
    attrs: {
      "src": _vm.img + 'main/coin_1.png'
    }
  }), _c('img', {
    staticClass: "coin_2 a-float-coin-1500",
    attrs: {
      "src": _vm.img + 'main/coin_2.png'
    }
  }), _c('img', {
    staticClass: "coin_3 a-float-coin-1000",
    attrs: {
      "src": _vm.img + 'main/coin_3.png'
    }
  }), _c('img', {
    staticClass: "coin_4 a-float-2000",
    attrs: {
      "src": _vm.img + 'main/coin_4.png'
    }
  }), _c('img', {
    staticClass: "coin_5 a-float-2000",
    attrs: {
      "src": _vm.img + 'main/coin_5.png'
    }
  }), _c('div', {
    staticStyle: {
      "height": "3.54rem"
    }
  }), _c('img', {
    staticClass: "rp_0 a-float-1800 layer-10",
    attrs: {
      "src": _vm.img + 'main/rp_0' + (_vm.meta.ios ? '_ios' : '') + '.png'
    }
  }), _c('img', {
    staticClass: "rp_1 a-float-1800",
    attrs: {
      "src": _vm.img + 'main/rp_1' + (_vm.meta.ios ? '_ios' : '') + '.png'
    }
  }), _c('img', {
    staticClass: "rp_2 a-float-2000 layer-10",
    attrs: {
      "src": _vm.img + 'main/rp_2' + (_vm.meta.ios ? '_ios' : '') + '.png'
    }
  }), _c('img', {
    staticClass: "rp_3 a-float-1800",
    attrs: {
      "src": _vm.img + 'main/rp_3' + (_vm.meta.ios ? '_ios' : '') + '.png'
    }
  }), _c('img', {
    staticClass: "rp_4 a-float-1800",
    attrs: {
      "src": _vm.img + 'main/rp_4' + (_vm.meta.ios ? '_ios' : '') + '.png'
    }
  }), _c('img', {
    staticClass: "rp_5 a-float-1800 layer-10",
    attrs: {
      "src": _vm.img + 'main/rp_5' + (_vm.meta.ios ? '_ios' : '') + '.png'
    }
  }), _c('img', {
    staticClass: "bag_img",
    class: _vm.class_,
    attrs: {
      "src": _vm.img + 'main/bag_2' + (_vm.meta.ios ? '_ios' : '') + '.png'
    }
  }), _c('img', {
    staticClass: "btn_draw",
    attrs: {
      "src": _vm.img + 'main/btn.png'
    },
    on: {
      "click": _vm.click
    }
  }), _c('transition', {
    attrs: {
      "name": "scale"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.lottery.state === 'success' || _vm.lottery.state === 'done'),
      expression: " lottery.state==='success'||lottery.state==='done' "
    }],
    staticClass: "panel_success layer-20"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": _vm.img + '/main/panel_success.png'
    }
  }), _c('div', {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "p0"
  }, [_vm._v(_vm._s(_vm.lottery.text))]), _c('p', {
    staticClass: "p1"
  }, [_c('span', {
    staticClass: "aaa"
  }, [_vm._v(_vm._s(_vm.lottery.text2))]), _c('span', {
    staticClass: "bbb"
  }, [_vm._v(_vm._s(_vm.lottery.coins))]), _c('span', {
    staticClass: "aaa"
  }, [_vm._v(_vm._s(_vm.meta.ios ? '阅' : '书') + "券")])]), _c('p', {
    staticClass: "check",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_ACCOUNT'
        })
      }
    }
  }, [_vm._v("查看" + _vm._s(_vm.meta.ios ? '阅' : '书') + "券明细 >")])])])]), _c('transition', {
    attrs: {
      "name": "scale"
    }
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.lottery.state === 'out'),
      expression: " lottery.state==='out' "
    }],
    staticClass: "panel_out layer-20",
    attrs: {
      "src": _vm.img + '/main/panel_out.png'
    }
  })])], 1)
},staticRenderFns: []}

/***/ }),
/* 32 */
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
  }), _vm._m(0)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n\t\t\t\t本期活动已结束"), _c('br'), _vm._v("\n\t\t\t\t本活动只支持湖南卫视直播期间"), _c('br'), _vm._v("\n\t\t\t\t4月23日19:30-21:00参加\n\t\t\t")])
}]}

/***/ }),
/* 33 */
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
  }, [_c('mask-download'), _c('div', {
    staticClass: "header",
    style: ('background-image:url(' + _vm.img + '/main/bg' + (_vm.meta.ios ? '_ios' : '') + '.png);background-size:100% auto;')
  }, [_c('bag'), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.meta.share),
      expression: "!meta.share"
    }],
    staticClass: "btn_invite",
    attrs: {
      "src": _vm.img + '/main/btn_invite.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'SHARE'
        })
      }
    }
  }), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.meta.share),
      expression: "meta.share"
    }],
    staticClass: "btn_to_app",
    attrs: {
      "src": _vm.img + '/main/btn_to_app.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_PAGE_MAIN'
        })
      }
    }
  }), _c('div', {
    staticClass: "warp"
  }, [_c('img', {
    staticClass: "btn_warp",
    attrs: {
      "src": _vm.img + '/main/btn_warp.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_PAGE_TOTAL'
        })
      }
    }
  })])], 1), _c('rules', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.meta.share),
      expression: "!meta.share"
    }]
  }), _c('img', {
    staticClass: "footer",
    attrs: {
      "src": _vm.img + '/main/footer.png'
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Rules"
  }, [_c('div', {
    staticClass: "rContent"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("- 活动规则 -")]), _c('div', {
    staticClass: "text"
  }, [_c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("1.")]), _vm._v("活动时间：4月23日19：30-21：00。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2.")]), _vm._v("活动期间，每位用户仅有一次抽奖机会（同一设备或同一账号视为同一用户）。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("3.")]), _vm._v("奖品将于1小时内发放至中奖者账户中，可用户抵扣购书款。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("4.")]), _vm._v("利用任何作弊手段获取的奖品都将被收回。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("5.")]), _vm._v("本活动最终解释权归QQ阅读所有。")])])])])
}]}

/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);