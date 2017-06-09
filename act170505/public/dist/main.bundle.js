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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
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
		App: __webpack_require__(31)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_scss__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_transition_less__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_transition_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vue_transition_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_index_less__ = __webpack_require__(19);
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
    // console.log(options)
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

function computed(options) {
  var obj = {};
  if (options.state) {
    options.state.forEach(function (a) {
      obj[a] = function () {
        return this.$store.state[a];
      };
    });
  }
  if (options.getters) {
    options.getters.forEach(function (a) {
      obj[a] = function () {
        return this.$store.getters[a];
      };
    });
  }
  if (options.computed) {
    for (var key in options.computed) {
      obj[key] = options.computed[key];
    }
  }
  return obj;
}

Vix.install = install;
Vix.createStore = createStore;
Vix.computed = computed;
// console.log(Vix)
/* harmony default export */ __webpack_exports__["a"] = Vix;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// z_dev
// z_debugger

var state = {
  img: './img/',

  dev: function () {
    if (common.param('z_dev') === 'true') {
      return true;
    } else {
      return false;
    };
  }(),

  page: 'pending',
  loaded: false,
  done: false,

  conf: {
    type: function () {
      return (/two\.html/.test(location.href) ? 'two' : 'five'
      );
    }(),
    id: '170505',
    act_f: '17053100',
    share_title: '423全民阅读，邀你益起阅读！',
    share_desc: '“你读我捐”，与QQ阅读合力为农家书屋捐书',
    topic: common.param('topic') || '302720,302720,302720,302720'
  },

  user: {
    loggedIn: false,
    isGuest: false,
    name: '我',
    avatar: './img/common/default.jpg',
    time_span: 0,
    donated: 0,
    title: '您的已捐时长',

    u: null,
    p: null,
    lot: null,
    god: {
      donated: 0
    }
  },

  meta: {

    inTest: function () {
      return (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)
      );
    }(),
    inWechat: function () {
      return navigator.userAgent.match(/MicroMessenger/) ? true : false;
    }(),
    inWeibo: function () {
      return navigator.userAgent.match(/Weibo/) ? true : false;
    }(),
    fullPage: function () {
      return (/z_fullPage=true/.test(location.href)
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
    vw: function () {
      if (window.env && window.env.vw) {
        return env.vw;
      };
    }()
  },

  // share: (function(){
  //   var el = document.querySelector('[config]');
  //   var val = el.getAttribute('config');
  //   return /share/.test( val )?true:false
  // })(),

  mask_prize: {
    show: false
  },
  mask_confirm: {
    show: false
  },
  mask_donated: {
    show: false
  },
  mask_download: {
    show: false
  },
  mask_wechat: {
    show: false
  }
};

var getters = {
  name_sliced: function name_sliced(_ref) {
    var state = _ref.state,
        getters = _ref.getters;

    var name = state.user.name;
    if (typeof name === 'string' && name.length > 9) {
      return name.slice(0, 7) + '...';
    } else {
      return name;
    }
  },
  percent: function percent(_ref2) {
    var state = _ref2.state,
        getters = _ref2.getters;

    return Math.floor(state.donated.minutes / 100000000 * 100);
  },
  chars_total: function chars_total(_ref3) {
    var state = _ref3.state,
        getters = _ref3.getters;

    return Math.floor(Math.floor(state.user.time_span) * (1000 / 30));
  },
  chars_donated: function chars_donated(_ref4) {
    var state = _ref4.state,
        getters = _ref4.getters;

    return Math.floor(Math.floor(state.user.donated) * (1000 / 30));
  },
  time_left: function time_left(_ref5) {
    var state = _ref5.state,
        getters = _ref5.getters;

    return state.user.time_span - state.user.donated;
  },
  pre: function pre(_ref6) {
    var state = _ref6.state,
        getters = _ref6.getters;

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
  pre_https: function pre_https(_ref7) {
    var state = _ref7.state,
        getters = _ref7.getters;

    if (state.meta.inTest) {
      return 'https://ptsolomo.reader.qq.com/book_res/event';
    } else {
      return 'https://yuedu.reader.qq.com/event';
    }
  },
  share_href: function share_href(_ref8) {
    var state = _ref8.state,
        getters = _ref8.getters;

    return getters.pre_https + '/act' + state.conf.id + '/public/test_1_share.html?tf=1&act_f=' + state.conf.act_f;
  },
  share_thumb: function share_thumb(_ref9) {
    var state = _ref9.state,
        getters = _ref9.getters;

    return getters.pre_https + '/act' + state.conf.id + '/public/img/main/thumb.jpg';
  },
  href_main: function href_main(_ref10) {
    var state = _ref10.state,
        getters = _ref10.getters;

    return getters.pre + '/act' + state.conf.id + '/public/main' + (state.meta.platform === 'adr' ? '' : '_ios') + '.html?act_f=' + state.conf.act_f;
  },
  href_two: function href_two(_ref11) {
    var state = _ref11.state,
        getters = _ref11.getters;

    return getters.pre + '/act' + state.conf.id + '/public/two.html?act_f=' + state.conf.act_f;
  },
  href_test_0: function href_test_0(_ref12) {
    var state = _ref12.state,
        getters = _ref12.getters;

    return getters.pre + '/act' + state.conf.id + '/public/test_0_' + state.meta.platform + '.html?act_f=' + state.conf.act_f;
  },
  href_test_1: function href_test_1(_ref13) {
    var state = _ref13.state,
        getters = _ref13.getters;

    return getters.pre + '/act' + state.conf.id + '/public/test_1_' + state.meta.platform + '.html?act_f=' + state.conf.act_f;
  },
  href_total: function href_total(_ref14) {
    var state = _ref14.state,
        getters = _ref14.getters;

    return getters.pre + '/act170410/index.html?act_f=170410';
  }
};

var mutators = {
  TO_LOGIN: function TO_LOGIN(_ref15, action) {
    var state = _ref15.state;

    if (state.dev) {
      state.loggedIn = true;
      state.user.loggedIn = true;
    } else {
      // Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_login` );
      Local.login();
    };
  },
  TO_PAGE: function TO_PAGE(_ref16, action) {
    var state = _ref16.state,
        dispatch = _ref16.dispatch,
        getters = _ref16.getters;

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
  TO_ROOKIE_ZONE: function TO_ROOKIE_ZONE(_ref17, action) {
    var state = _ref17.state,
        dispatch = _ref17.dispatch,
        getters = _ref17.getters;

    Local.forceLog(common.param('act_f'), 'to_rookie_zone');
    location.href = 'uniteqqreader://nativepage/client/rookiezone?tab=0';
  },
  TO_PAGE_MAIN: function TO_PAGE_MAIN(_ref18, action) {
    var state = _ref18.state,
        dispatch = _ref18.dispatch,
        getters = _ref18.getters;

    dispatch({
      type: 'TO_PAGE',
      href: getters.href_main
    });
  },
  TO_PAGE_TOTAL: function TO_PAGE_TOTAL(_ref19, action) {
    var state = _ref19.state,
        dispatch = _ref19.dispatch,
        getters = _ref19.getters;

    dispatch({
      type: 'TO_PAGE',
      href: getters.href_total
    });
  },
  TO_CONTACT: function TO_CONTACT(_ref20, action) {
    var state = _ref20.state,
        dispatch = _ref20.dispatch;

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
  TO_CHARGE: function TO_CHARGE(_ref21, action) {
    var state = _ref21.state,
        dispatch = _ref21.dispatch,
        getters = _ref21.getters;

    Local.doCharge('act', true, '');
  },
  TO_BOOK: function TO_BOOK(_ref22, action) {
    var state = _ref22.state,
        dispatch = _ref22.dispatch;

    if (!state.share) {
      Local.forceLog(common.param('act_f'), 'to_book_' + action.bid);
      ABook.gotoDetail(action.bid);
    } else {
      dispatch({ type: 'TO_APP' });
    }
  },
  TO_READ: function TO_READ(_ref23, action) {
    var state = _ref23.state,
        dispatch = _ref23.dispatch;

    Local.$toRead(action.bid);
  },
  TO_ZHUAN_TI: function TO_ZHUAN_TI(_ref24, action) {
    var state = _ref24.state,
        dispatch = _ref24.dispatch;

    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'learn_' + action.id);
      if (state.meta.platform === 'adr') {
        Local.openPage('http://iyuedu.qq.com/android/5_3/topicV2.html?tid=' + action.zid.adr);
      } else {
        Local.openInside('https://yuedu.reader.qq.com/common/common/topicV2.html?tid=' + action.zid.ios);
      }
    }
  },
  TO_LISTEN_BOOK: function TO_LISTEN_BOOK(_ref25, action) {
    var state = _ref25.state,
        dispatch = _ref25.dispatch;

    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'toListen');
      location.href = 'uniteqqreader://nativepage/client/listenpage?mediaId=90001027';
    }
  },
  TO_BOOKSHELF: function TO_BOOKSHELF(_ref26, action) {
    var state = _ref26.state,
        dispatch = _ref26.dispatch;

    location.href = 'uniteqqreader://nativepage/client/bookshelf';
  },
  TO_ACCOUNT: function TO_ACCOUNT(_ref27, action) {
    var state = _ref27.state,
        dispatch = _ref27.dispatch;

    location.href = state.meta.platform === 'adr' ? 'uniteqqreader://nativepage/getAcctInfo' : 'uniteqqreader://nativepage/account/index';
  },
  CLOSE_WINDOW: function CLOSE_WINDOW(_ref28, action) {
    var state = _ref28.state,
        dispatch = _ref28.dispatch;

    Local.closePage();
  },
  SET_ICON: function SET_ICON(_ref29, action) {
    var state = _ref29.state,
        dispatch = _ref29.dispatch,
        getters = _ref29.getters;

    Local.$setIconForShareing(getters.share_href, getters.share_thumb, state.conf.share_title, state.conf.share_desc);
  },
  SHARE: function SHARE(_ref30, action) {
    var state = _ref30.state,
        dispatch = _ref30.dispatch,
        getters = _ref30.getters;

    if (!state.meta.share) {

      // Local.forceLog( common.param('act_f'),`${state.conf.id}_share` );
      console.log('[SHARE share_href] ' + getters.share_href);
      Local.$share(getters.share_href, getters.share_thumb, state.conf.share_title, state.conf.share_desc);
    } else {
      dispatch({
        type: 'SHOW',
        what: 'mask_share'
      });
    }
  },
  SET_SECOND_SHARING: function SET_SECOND_SHARING(_ref31, action) {
    var state = _ref31.state,
        dispatch = _ref31.dispatch,
        getters = _ref31.getters;

    sns.share({
      url: location.href,
      cover: getters.share_thumb,
      title: state.conf.share_title,
      desc: state.conf.share_desc
    }, '111');
    // the second argument '111' is essential or an error would be thrown
  },
  TO_APP: function TO_APP(_ref32, action) {
    var state = _ref32.state,
        dispatch = _ref32.dispatch,
        getters = _ref32.getters;

    // Local.forceLog( common.param('act_f'),`${state.meta.batch}_toApp` );

    var href = getters.href_main;
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
  TO_DOWNLOAD: function TO_DOWNLOAD(_ref33, action) {
    var state = _ref33.state,
        dispatch = _ref33.dispatch;

    bnative.downLoad('10003531');
  },
  REPLAY: function REPLAY(_ref34, action) {
    var state = _ref34.state,
        dispatch = _ref34.dispatch;

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
  ADD_TO_SHELF: function ADD_TO_SHELF(_ref35, action) {
    var state = _ref35.state,
        dispatch = _ref35.dispatch;


    Local.addToShelfBooks(JSON.stringify([action.book]));
    // Local.$addToShelf( action.book );
    // };
  },
  SHOW: function SHOW(_ref36, action) {
    var state = _ref36.state,
        dispatch = _ref36.dispatch;

    state[action.what].show = true;
  },
  HIDE: function HIDE(_ref37, action) {
    var state = _ref37.state,
        dispatch = _ref37.dispatch;

    state[action.what].show = false;
  }
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators, getters: getters };

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
  data: {
    taken: false,
    taken_platform: null,
    timeleft: 0,
    done: false
  },
  btn_take: {
    state: 'ready'
  },
  gods: []
};

var getters = {
  enoughMoney: function enoughMoney(_ref) {
    var state = _ref.state;

    return state.bills + state.coins >= state.price * 100;
  }
};

var mutators = {
  // CHANGE_CURRENT ({state,dispatch,getters},action) {
  //   state.gods[action.i][current] = action.current;
  // },
  INIT_MAIN: function INIT_MAIN(_ref2, action) {
    var state = _ref2.state,
        dispatch = _ref2.dispatch,
        getters = _ref2.getters;

    if (state.meta.share) {
      // Local.forceLog( common.param('act_f'),`${state.conf.id}_enterShare` );
      dispatch({
        type: 'SET_SECOND_SHARING'
      });
      // dispatch({
      //   type: 'INIT_SHARE'
      // })
      state.page = 'ready';
    } else {
      if (state.dev) {
        var _state$gods;

        setTimeout(function () {
          state.data.timeleft = 1000000000;
        }, 1000);
        (_state$gods = state.gods).push.apply(_state$gods, [{
          name: '辰东',
          intro: '登顶百度小说风云榜榜首的网络作家。其作品想象力丰富，爽文写法的开山大家。',
          current: 0,
          books: [{
            title: '芈月传'

          }, {
            title: '三国演义'
          }, {
            title: '水浒传'
          }]
        }, {
          name: '辰东',
          intro: '登顶百度小说风云榜榜首的网络作家。其作品想象力丰富，爽文写法的开山大家。',
          current: 0,
          books: [{
            title: ''
          }, {
            title: ''
          }]
        }]);
        setTimeout(function () {
          state.page = 'ready';
        }, 10);
      } else {
        var href_init;

        (function () {
          var init = function init() {
            Local.reqaObj(common.server() + 'pkg170505/init?n='+common.param("n"), function (data) {
              console.log(data);

              if (data.code === -4) {
                state.page = 'over';
              } else {
                data.displayList.forEach(function (a) {
                  state.gods.push({
                    avatar: a.avator,
                    name: a.name,
                    intro: a.intro.length > 400 ? a.intro.slice(0, 40) + '...' : a.intro,
                    current: 0,
                    books: a.books.map(function (b, i) {
                      return {
                        bid: Number(b.id),
                        title: b.title,
                        cover: b.cover,
                        category: b.categoryName,
                        chapters: Number(b.lastChapter),
                        finished: b.finished === "0" ? false : true
                      };
                    })
                  });
                });
                if (data.isLogin) {
                  state.user.loggedIn = true;
                  // if (data.last > 0) {
                  //   state.data.taken = true;
                  //   state.data.timeleft = data.last;
                  // } else if (data.last < 0) {
                  //   state.data.taken = true;
                  //   state.data.timeleft = 0;
                  // }
                }
              }

              setTimeout(function () {
                state.page = 'ready';
              }, 10);
            }, [], function () {
              Local.showToast("网络异常，请稍候重试");
            }, 1);
          };

          Local.forceLog(common.param('act_f'), 'enter');
          console.log(location.href);
          href_init = 'http' + (state.meta.platform === 'adr' ? '' : 's') + '://' + (state.meta.inTest ? 'pt' : 'new') + 'common.reader.qq.com/common/newUser/giftListV2?' + (state.meta.platform === 'ios' ? '&c_platform=ioswp' : '');

          console.log(href_init);
          Local.reqaObj(href_init, function (data) {
            console.log(data);
            if (data.isLogin) {
              data.giftlist.forEach(function (a) {
                if (a.giftid === 10) {
                  console.log('isobtained: ' + a.isobtained);
                  // 如果用户已经领取过：
                  if (a.isobtained === 1) {
                    // if (a.extParam.platform) {
                    //   // 如果领取的平台 与 当前平台相同：
                    //   state.data.taken_platform = a.extParam.platform === 'ioswp' ? 'ios' : 'adr';
                    //   if (state.data.taken_platform === state.meta.platform) {
                    //     // 如果
                    if (a.extParam.obtainCode === 1 || a.extParam.obtainCode === 3) {
                      state.data.taken = 'qq';
                      console.log(state.data.taken);
                      var timeleft = a.extParam.endTime - data.systemTime;
                      if (timeleft <= 0) {
                        timeleft = 0;
                      }
                      state.data.timeleft = timeleft;
                      console.log('timeleft: ' + timeleft);
                      // 如果当前设备领取过，而当前账号没有领取过：
                    } else if (a.extParam.obtainCode === 2) {
                      state.data.taken = 'device';
                    }
                    //   }
                    // }
                  }
                }
              });
            };

            init();
          }, [], function () {
            Local.showToast("网络异常，请稍候重试");
          }, 1);
        })();
      }
    }
  },
  TO_TAKE: function TO_TAKE(_ref3, action) {
    var state = _ref3.state,
        dispatch = _ref3.dispatch,
        getters = _ref3.getters;

    if (state.btn_take.state !== 'ready') {
      return;
    } else if (state.meta.share) {} else {
      if (state.dev) {
        state.data.taken = true;
      } else {
        Local.forceLog(common.param('act_f'), 'btn_take');
        if (state.user.loggedIn === false) {
          dispatch({
            type: 'TO_LOGIN'
          });
        } else {
          // if (state.data.taken_platform === state.meta.platform) {
          //   Local.showToast('该账号已经领取过')
          // }
          if (state.data.taken === 'device') {
            Local.showToast('该设备已经领取过');
          } else {
            state.btn_take.state = 'pending';
            Local.reqaObj('http' + (state.meta.platform === 'adr' ? '' : 's') + '://' + (state.meta.inTest ? 'pt' : 'new') + 'common.reader.qq.com/common/newUser/getGift?giftId=10' + (state.meta.platform === 'ios' ? '&c_platform=ioswp' : ''), function (data) {
              console.log(data);
              // success
              if (data.code === 0) {
                Local.showToast('领取成功！');
                setTimeout(function () {
                  location.href = location.href;
                }, 1500);
              } else {
                Local.showToast(data.rookieMsg);
                // setTimeout(() => {
                //   location.href = location.href;
                // }, 2000);
              }
            }, [], function () {
              Local.showToast("网络异常，请稍候重试");
            }, 1);
          }
        }
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators, getters: getters };

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

exports.default = {
	components: {
		MaskLoading: __webpack_require__(33),
		MaskDownload: __webpack_require__(32),
		MaskOver: __webpack_require__(34),
		MaskWeibo: __webpack_require__(36),
		MaskWechat: __webpack_require__(35),

		Countdown: __webpack_require__(37),
		PanelGod: __webpack_require__(38)
	},
	data: function data() {
		return {};
	},
	computed: {
		btn_take: function btn_take() {
			return this.$store.state.btn_take;
		},
		data: function data() {
			return this.$store.state.data;
		},
		gods: function gods() {
			return this.$store.state.gods;
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

exports.default = {
	computed: {
		img: function img() {
			return this.$store.state.img;
		},
		meta: function meta() {
			return this.$store.state.meta;
		},
		mask_wechat: function mask_wechat() {
			return this.$store.state.mask_wechat;
		}
	},
	methods: {}
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

exports.default = {
	computed: {
		img: function img() {
			return this.$store.state.img;
		},
		meta: function meta() {
			return this.$store.state.meta;
		}
	},
	methods: {}
};

/***/ }),
/* 16 */
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

exports.default = {
	// props: ['timeleft'],
	data: function data() {
		return {
			// timeleft: null,
			_timeleft: null,

			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};
	},
	computed: {
		img: function img() {
			return this.$store.state.img;
		}
	},
	watch: {
		'$store.state.data.timeleft': function $storeStateDataTimeleft(nv) {
			var _this = this;

			console.log(nv);
			this._timeleft = nv;
			this.setNumbers(nv);

			var interval = setInterval(function () {
				//console.log(111)
				_this._timeleft -= 1000;
				if (_this._timeleft === 0) {
					clearInterval(interval);
					location.href = location.href;
				} else {
					// var seconds;
					// var minutes;
					// seconds = this.seconds - 1;
					// if( seconds<0 ){
					// 	seconds = 59;
					// 	minutes = this.minutes - 1;
					// }else{
					// 	minutes = this.minutes;
					// }
					// this.seconds = seconds;
					// this.minutes = minutes;
					// this.hours = hours;
					_this.setNumbers(_this._timeleft);
				};
			}, 1000);
		}
	},
	mounted: function mounted() {
		// setTimeout(()=>{
		// 	this.timeleft = 1000000000;
		// },1000)
	},
	methods: {
		setNumbers: function setNumbers(time) {
			var days = Math.floor(time / 1000 / 3600 / 24);
			var hours = Math.floor((time - days * 1000 * 3600 * 24) / 1000 / 3600);
			var minutes = Math.floor((time - days * 1000 * 3600 * 24 - hours * 1000 * 3600) / 1000 / 60);
			var seconds = Math.floor((time - days * 1000 * 3600 * 24 - hours * 1000 * 3600 - minutes * 1000 * 60) / 1000);
			//days = this.format(days);
			//hours = this.format(hours);
			// minutes = this.format(minutes);
			// seconds = this.format(seconds);
			this.days = days;
			this.hours = hours;
			this.minutes = minutes;
			this.seconds = seconds;
			//console.log(this.days)
		},
		format: function format(num) {
			if (num < 10) {
				num = '0' + num;
			};
			return num;
		}
	}
};

/***/ }),
/* 17 */
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

exports.default = {
	props: ['god'],
	components: {
		SwiperCards: __webpack_require__(39)
	},
	data: function data() {
		return {};
	},
	computed: {
		img: function img() {
			return this.$store.state.img;
		}
	},
	watch: {},
	mounted: function mounted() {},
	methods: {}
};

/***/ }),
/* 18 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		// Controls: require('lib/_main/Controls.vue'),
		// BtnShare: require('./BtnShare.vue'),
	},
	props: {
		act: {},
		img: {},
		items: {
			default: function _default() {
				return [];
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
			default: true
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

			t0: 0,
			t1: 0,

			currentOne: 0,
			transition: '0s'
		}, 'offset', 0);
	},
	computed: {
		title: function title() {
			return this.items[this.currentOne].title;
		},
		done: function done() {
			return this.$store.state.data.done;
		},
		pic: function pic() {
			return this.$store.state.pic;
		},

		img: function img() {
			return this.$store.state.img;
		}
	},
	watch: {
		items: function items() {
			console.log('hhh');
			// setTimeout(()=>{
			// 	this.setWidth();
			// 	if( this.items.length>2 ){
			// 		this.toNext();
			// 	}
			// },600)
		},
		'$store.state.page': function $storeStatePage(nv) {
			var _this = this;

			console.log(nv);
			setTimeout(function () {
				_this.setWidth();
				if (_this.items.length > 2) {
					_this.toNext();
				}
			}, 600);
		},
		currentOne: function currentOne(new_val) {
			// console.log(111)
			// this.$store.dispatch({
			// 	type: 'CHANGE_CURRENT',
			// 	current: new_val
			// })
		}
	},
	mounted: function mounted() {
		var _this2 = this;

		//console.log(this.$refs)
		var self = this;
		// this.items = (function(){
		// 	var items = JSON.parse( JSON.stringify(self.raw) );
		// 	return items;
		// })();
		// console.log(this.trainOffsetX)
		window.addEventListener('DOMContentLoaded', function () {
			setTimeout(function () {
				_this2.setWidth();
			}, 600);
		});
		// window.addEventListener('load',()=>{
		// 	this.setWidth();
		// });
		window.addEventListener('resize', function () {
			setTimeout(function () {
				_this2.setWidth();
			}, 50);
		});
		if (this.autoplay) {
			setInterval(function () {
				if (!_this2.inCycle) {
					_this2.toNext();
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
			var _this3 = this;

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
					_this3.transition = '0s';
					if (_this3.carousel && _this3.currentOne === 0) {
						_this3.trainOffsetX = 0;
					};
					_this3.switching = false;
					_this3.inCycle = false;
				}, this.duration);
			}
		},
		toPrev: function toPrev() {
			var _this4 = this;

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
				_this4.transition = '0s';
				if (_this4.carousel && _this4.currentOne === _this4.items.length - 1) {
					_this4.trainOffsetX = -_this4.currentOne * _this4.width;
				};
				_this4.switching = false;
				_this4.inCycle = false;
			}, this.duration);
		},
		toCard: function toCard(i) {
			var _this5 = this;

			this.currentOne = i;
			this.transition = this.duration + 'ms ' + this.ease;
			this.trainOffsetX = -this.currentOne * this.width;
			setTimeout(function () {
				_this5.transition = '0s';
				_this5.switching = false;
				_this5.inCycle = false;
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

				this.t0 = new Date().getTime();
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

						this.offset += distance;

						var current__ = Math.round(-this.trainOffsetX / this.width);
						if (current__ < 0) {
							current__ = 0;
						}
						if (current__ > this.items.length - 1) {
							current__ = this.items.length - 1;
						}
						this.currentOne = current__;
						console.log(current__);
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

				this.t1 = new Date().getTime();
				var timespan = this.t1 - this.t0;
				if (timespan < 300) {
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
					var current__ = Math.round(-this.trainOffsetX / this.width);
					if (current__ < 0) {
						current__ = 0;
					}
					if (current__ > this.items.length - 1) {
						current__ = this.items.length - 1;
					}
					this.currentOne = current__;
					this.toCard(current__);
				}
			} else {
				this.switching = false;
				this.inCycle = false;
			}
		}
	}
};

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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  "data-v-66ad2d98",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  "data-v-2a8f3437",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  "data-v-f4004c46",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  "data-v-315dc603",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(27)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  "data-v-de625cd6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(26)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(44),
  /* scopeId */
  "data-v-72491dc9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  "data-v-fea035b2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  "data-v-f7d9945c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  "data-v-0b244c41",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "SwiperCards"
  }, [_c('div', {
    staticClass: "Swiper__",
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
  }, [_c('div', {
    ref: "swiper",
    staticClass: "Swiper"
  }, [_c('ul', {
    staticClass: "train",
    class: _vm.carousel ? 'carousel' : '',
    style: ('transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);transition:' + _vm.transition + ';' +
      '-webkit-transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);-webkit-transition:' + _vm.transition + ';')
  }, [(_vm.carousel) ? _c('li', {
    staticClass: "item",
    class: _vm.currentOne === 5 ? 'active' : ''
  }, [_c('img', {
    staticClass: "card",
    attrs: {
      "src": _vm.img + '/main/cards/5.jpg'
    }
  })]) : _vm._e(), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    class: _vm.currentOne === 6 ? 'active' : ''
  }, [_c('img', {
    staticClass: "card",
    attrs: {
      "src": _vm.img + '/main/cards/6.jpg'
    }
  })]) : _vm._e(), _vm._l((_vm.items), function(a, i) {
    return _c('li', {
      key: a.id,
      staticClass: "item",
      class: i === _vm.currentOne ? 'active' : '',
      on: {
        "click": function($event) {
          _vm.$store.dispatch({
            type: 'TO_BOOK',
            bid: a.bid
          })
        }
      }
    }, [_c('img', {
      staticClass: "card",
      attrs: {
        "src": a.cover
      }
    })])
  }), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    class: _vm.currentOne === 0 ? 'active' : ''
  }, [_c('img', {
    staticClass: "card",
    attrs: {
      "src": _vm.img + '/main/cards/0.jpg'
    }
  })]) : _vm._e(), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    class: _vm.currentOne === 1 ? 'active' : ''
  }, [_c('img', {
    staticClass: "card",
    attrs: {
      "src": _vm.img + '/main/cards/1.jpg'
    }
  })]) : _vm._e(), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })], 2)])]), _c('div', {
    staticClass: "title"
  }, [_vm._v("\r\n\t\t" + _vm._s(_vm.items[_vm.currentOne].title) + "\r\n\t")]), _c('div', {
    staticClass: "category"
  }, [_vm._v("\r\n\t\t" + _vm._s(_vm.items[_vm.currentOne].category) + " | " + _vm._s(_vm.items[_vm.currentOne].finished ? '完结共' : '连载至') + _vm._s(_vm.items[_vm.currentOne].chapters) + "章\r\n\t")])])
},staticRenderFns: []}

/***/ }),
/* 41 */
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
/* 42 */
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
      "src": './img/common/over.png'
    }
  }), _c('p', [_vm._v("本期活动已结束")])])])])
},staticRenderFns: []}

/***/ }),
/* 43 */
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
  }), _c('mask-download'), (_vm.meta.inWeibo) ? _c('mask-weibo') : _vm._e(), _c('mask-wechat'), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'ready'),
      expression: " page==='ready' "
    }],
    staticClass: "main",
    style: ('background-image:url(' + _vm.img + '/main/bg.png);background-size:100% auto;')
  }, [_c('div', {
    staticClass: "header"
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.taken !== 'qq'),
      expression: " data.taken!=='qq' "
    }],
    staticClass: "btn_to_take",
    attrs: {
      "src": _vm.img + '/main/btn_to_take.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_TAKE'
        })
      }
    }
  }), _c('countdown', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.taken === 'qq'),
      expression: " data.taken==='qq' "
    }]
  })], 1), _vm._l((_vm.gods), function(a) {
    return _c('panel-god', {
      attrs: {
        "god": a
      }
    })
  }), _c('img', {
    staticClass: "btn_check_more",
    attrs: {
      "src": _vm.img + '/main/btn_check_more.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_ROOKIE_ZONE'
        })
      }
    }
  })], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MaskWeibo"
  }, [_c('img', {
    attrs: {
      "src": _vm.img + '/common/mask_weibo.png'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_wechat.show),
      expression: "mask_wechat.show"
    }],
    staticClass: "MaskWechat",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_wechat'
        })
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.img + '/common/mask_wechat.png'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 46 */
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
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "PanelGod",
    style: ('background-image: url(' + _vm.img + '/main/panel_bg.png);background-size:100% 100%;')
  }, [_c('div', {
    staticClass: "avatar",
    style: ('background-image:url(' + _vm.god.avatar + ');background-size: 100% 100%;')
  }), _c('div', {
    staticClass: "name"
  }, [_c('div', {
    staticClass: "les"
  }), _c('div', {
    staticClass: "middle"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.god.name) + "\n\t\t")]), _c('div', {
    staticClass: "les"
  })]), _c('div', {
    staticClass: "intro"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.god.intro) + "\n\t")]), _c('swiper-cards', {
    attrs: {
      "items": _vm.god.books
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Countdown"
  }, [_c('img', {
    staticClass: "countdown_title",
    attrs: {
      "src": _vm.img + 'main/countdown_title.png'
    }
  }), _c('div', {
    staticClass: "outer"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('p', {
    staticClass: "time days"
  }, [_vm._v(_vm._s(_vm.format(_vm.days)))]), _c('div', {
    staticClass: "text"
  }, [_vm._v("天")]), _c('p', {
    staticClass: "time hours"
  }, [_vm._v(_vm._s(_vm.format(_vm.hours)))]), _c('div', {
    staticClass: "text"
  }, [_vm._v("时")]), _c('p', {
    staticClass: "time minutes"
  }, [_vm._v(_vm._s(_vm.format(_vm.minutes)))]), _c('div', {
    staticClass: "text"
  }, [_vm._v("分")]), _c('p', {
    staticClass: "time seconds"
  }, [_vm._v(_vm._s(_vm.format(_vm.seconds)))]), _c('div', {
    staticClass: "text"
  }, [_vm._v("秒")])])])])
},staticRenderFns: []}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);