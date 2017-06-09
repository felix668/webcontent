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
    // type: (function(){
    //   return /two\.html/.test(location.href)?'two':'five';
    // })(),
    id: '170504',
    act_f: '170519',
    share_title: '免费领取《欢乐颂2》原著',
    share_desc: 'QQ阅读送《欢乐颂2》精彩剧透，免费看结局！'
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

  mask_info: {
    show: false,
    case: '--',
    state: 'resolved',
    hasCross: true,
    title: '--',
    info: '--',
    btn: 'gotIt'
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
  name_bill: function name_bill(_ref) {
    var state = _ref.state,
        getters = _ref.getters;

    return state.meta.platform === 'adr' ? '书券' : '阅券';
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

    return getters.pre_https + '/act' + state.conf.id + '/public/main_share.html?tf=1&act_f=' + state.conf.act_f;
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
  }
};

var mutators = {
  TO_LOGIN: function TO_LOGIN(_ref12, action) {
    var state = _ref12.state;

    if (state.dev) {
      state.loggedIn = true;
      state.user.loggedIn = true;
    } else {
      // Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_login` );
      Local.login();
    };
  },
  TO_PAGE: function TO_PAGE(_ref13, action) {
    var state = _ref13.state,
        dispatch = _ref13.dispatch,
        getters = _ref13.getters;

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
  TO_ROOKIE_ZONE: function TO_ROOKIE_ZONE(_ref14, action) {
    var state = _ref14.state,
        dispatch = _ref14.dispatch,
        getters = _ref14.getters;

    console.log('rookie');
    location.href = 'uniteqqreader://nativepage/client/rookiezone';
  },
  TO_PAGE_MAIN: function TO_PAGE_MAIN(_ref15, action) {
    var state = _ref15.state,
        dispatch = _ref15.dispatch,
        getters = _ref15.getters;

    dispatch({
      type: 'TO_PAGE',
      href: getters.href_main
    });
  },
  TO_PAGE_TOTAL: function TO_PAGE_TOTAL(_ref16, action) {
    var state = _ref16.state,
        dispatch = _ref16.dispatch,
        getters = _ref16.getters;


    dispatch({
      type: 'TO_PAGE',
      href: getters.href_total
    });
  },
  TO_CONTACT: function TO_CONTACT(_ref17, action) {
    var state = _ref17.state,
        dispatch = _ref17.dispatch;

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
  TO_CHARGE: function TO_CHARGE(_ref18, action) {
    var state = _ref18.state,
        dispatch = _ref18.dispatch,
        getters = _ref18.getters;

    Local.doCharge('act', true, '');
  },
  TO_BOOK: function TO_BOOK(_ref19, action) {
    var state = _ref19.state,
        dispatch = _ref19.dispatch;

    if (!state.share) {

      ABook.gotoDetail(action.bid);
    } else {
      dispatch({ type: 'TO_APP' });
    }
  },
  TO_READ: function TO_READ(_ref20, action) {
    var state = _ref20.state,
        dispatch = _ref20.dispatch;

    Local.$toRead(action.bid);
  },
  TO_ZHUAN_TI: function TO_ZHUAN_TI(_ref21, action) {
    var state = _ref21.state,
        dispatch = _ref21.dispatch;

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
  TO_LISTEN_BOOK: function TO_LISTEN_BOOK(_ref22, action) {
    var state = _ref22.state,
        dispatch = _ref22.dispatch;

    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'toListen');
      location.href = 'uniteqqreader://nativepage/client/listenpage?mediaId=90001027';
    }
  },
  TO_BOOKSHELF: function TO_BOOKSHELF(_ref23, action) {
    var state = _ref23.state,
        dispatch = _ref23.dispatch;

    location.href = 'uniteqqreader://nativepage/client/bookshelf';
  },
  TO_ACCOUNT: function TO_ACCOUNT(_ref24, action) {
    var state = _ref24.state,
        dispatch = _ref24.dispatch;

    location.href = state.meta.platform === 'adr' ? 'uniteqqreader://nativepage/getAcctInfo' : 'uniteqqreader://nativepage/account/index';
  },
  CLOSE_WINDOW: function CLOSE_WINDOW(_ref25, action) {
    var state = _ref25.state,
        dispatch = _ref25.dispatch;

    Local.closePage();
  },
  SET_ICON: function SET_ICON(_ref26, action) {
    var state = _ref26.state,
        dispatch = _ref26.dispatch,
        getters = _ref26.getters;

    Local.$setIconForShareing(getters.share_href, getters.share_thumb, state.conf.share_title, state.conf.share_desc);
  },
  SHARE: function SHARE(_ref27, action) {
    var state = _ref27.state,
        dispatch = _ref27.dispatch,
        getters = _ref27.getters;

    if (state.meta.share) {
      dispatch({
        type: 'SHOW',
        what: 'mask_wechat'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'share');
      console.log('[SHARE share_href] ' + getters.share_href);
      Local.$share(getters.share_href, getters.share_thumb, state.conf.share_title, state.conf.share_desc);
    }
  },
  SET_SECOND_SHARING: function SET_SECOND_SHARING(_ref28, action) {
    var state = _ref28.state,
        dispatch = _ref28.dispatch,
        getters = _ref28.getters;

    sns.share({
      url: location.href,
      cover: getters.share_thumb,
      title: state.conf.share_title,
      desc: state.conf.share_desc
    }, '111');
    // the second argument '111' is essential or an error would be thrown
  },
  TO_APP: function TO_APP(_ref29, action) {
    var state = _ref29.state,
        dispatch = _ref29.dispatch,
        getters = _ref29.getters;

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
  TO_DOWNLOAD: function TO_DOWNLOAD(_ref30, action) {
    var state = _ref30.state,
        dispatch = _ref30.dispatch;

    bnative.downLoad('10003531');
  },
  REPLAY: function REPLAY(_ref31, action) {
    var state = _ref31.state,
        dispatch = _ref31.dispatch;

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
  ADD_TO_SHELF: function ADD_TO_SHELF(_ref32, action) {
    var state = _ref32.state,
        dispatch = _ref32.dispatch;


    Local.addToShelfBooks(JSON.stringify([action.book]));
    // Local.$addToShelf( action.book );
    // };
  },
  SHOW: function SHOW(_ref33, action) {
    var state = _ref33.state,
        dispatch = _ref33.dispatch;

    state[action.what].show = true;
  },
  HIDE: function HIDE(_ref34, action) {
    var state = _ref34.state,
        dispatch = _ref34.dispatch;

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
    out: false,

    subscribed: 0,
    returned_this_time: 0,
    returned_total: 0

  }

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
      dispatch({
        type: 'SET_ICON'
      });
      if (state.dev) {
        state.page = 'ready';
      } else {
        Local.forceLog(common.param('act_f'), 'enter');
        Local.reqaObj(common.server() + 'pkg170504/init', function (data) {
          console.log(data);

          if (data.code === -4) {
            state.page = 'over';
          } else {
            if (data.hasRunOut === true) {
              state.data.out = true;
            }
            if (data.isLogin) {
              state.user.loggedIn = true;
            }
            state.page = 'ready';
          }
        }, [], function () {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }
  },
  PLAY: function PLAY() {
    Local.forceLog(common.param('act_f'), 'play');
  },
  TO_BOOK_ODE: function TO_BOOK_ODE(_ref3, action) {
    var state = _ref3.state,
        dispatch = _ref3.dispatch,
        getters = _ref3.getters;

    if (state.meta.share) {
      dispatch({
        type: 'TO_PAGE_MAIN'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'toBook');
      dispatch({
        type: 'TO_BOOK',
        bid: 194777
      });
    }
  },
  TO_TAKE: function TO_TAKE(_ref4, action) {
    var state = _ref4.state,
        dispatch = _ref4.dispatch,
        getters = _ref4.getters;

    if (state.meta.share) {
      dispatch({
        type: 'TO_PAGE_MAIN'
      });
    } else if (state.user.loggedIn === false) {
      dispatch({
        type: 'TO_LOGIN'
      });
    } else if (state.mask_info.state === 'resolved') {

      Local.forceLog(common.param('act_f'), 'take');

      state.mask_info.state = 'pending';
      Local.reqaObj(common.server() + 'pkg170504/pick', function (data) {
        console.log(data);
        if (data.code === -10) {
          dispatch({
            type: 'RESOLVE',
            case: 'out'
          });
        } else if (data.code === 1) {
          state.data.returned_this_time = data.thisPick;
          state.data.returned_total = data.hasPick;
          dispatch({
            type: 'RESOLVE',
            case: 'success'
          });
        } else if (data.code === -3) {
          if (data.hasPick === 0) {
            dispatch({
              type: 'RESOLVE',
              case: 'unsubscribed'
            });
          } else {
            state.data.returned_total = data.hasPick;
            dispatch({
              type: 'RESOLVE',
              case: 'not_enough'
            });
          }
        } else {
          Local.showToast(data.msg);
        }

        state.mask_info.state = 'resolved';
      }, [], function () {
        Local.showToast("网络异常，请稍候重试");
      }, 1);
    }
  },
  RESOLVE: function RESOLVE(_ref5, action) {
    var state = _ref5.state,
        dispatch = _ref5.dispatch,
        getters = _ref5.getters;

    var _ = state.mask_info;
    _.case = action.case;
    switch (action.case) {
      case 'out':
        _.title = getters.name_bill + '\u88AB\u9886\u5B8C';
        _.info = '\u6765\u665A\u4E00\u6B65\uFF0C300\u4E07' + getters.name_bill + '\u5DF2\u88AB\u9886\u5B8C\uFF0C\u671F\u5F85\u4E0B\u6B21\u6D3B\u52A8';
        _.hasCross = false;
        _.btn = 'got_it';
        break;
      case 'success':
        _.title = '恭喜你，领取成功';
        _.info = '\u60A8\u5DF2\u8BA2\u9605\u6D88\u8D39' + state.data.returned_this_time + '\uFF0C\u8FD4\u60A8' + state.data.returned_this_time + getters.name_bill + '\uFF0C\u7D2F\u8BA1\u9886\u53D6' + state.data.returned_total + getters.name_bill + '\uFF0C\u53EF\u53BB\u201C\u6211\u7684\u8D26\u6237\u201D\u67E5\u770B';
        _.hasCross = false;
        _.btn = 'got_it';
        break;
      case 'unsubscribed':
        _.title = '很遗憾，领取失败';
        _.info = '\u60A8\u5728\u6D3B\u52A8\u671F\u95F4\u8BA2\u9605\u6D88\u8D39\u4E3A0\uFF0C\u4E0D\u652F\u6301\u8FD4\u5238\uFF0C\u6D3B\u52A8\u671F\u95F4\u8BFB\u300A\u6B22\u4E50\u98822\u300B\u6D88\u8D39\u591A\u5C11\uFF0C\u8FD4\u591A\u5C11\uFF0C\u53BB\u4E66\u7C4D\u8BE6\u60C5\u9875\u70B9\u51FB\u4E0B\u8F7D\u5373\u53EF\u8BA2\u9605';
        _.hasCross = true;
        _.btn = '';
        break;
      case 'not_enough':
        _.title = '很遗憾，领取失败';
        _.info = '\u60A8\u5DF2\u9886\u53D6' + state.data.returned_total + getters.name_bill + '\uFF0C\u7EE7\u7EED\u8BA2\u9605\u300A\u6B22\u4E50\u98822\u300B\uFF0C\u8FD8\u53EF\u8FD4\u5238';
        _.hasCross = true;
        _.btn = '';
        break;
    }
    dispatch({
      type: 'SHOW',
      what: 'mask_info'
    });
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

		MaskInfo: __webpack_require__(37),
		PartTake: __webpack_require__(38),
		// PanelGod: require('components/_main/PanelGod.vue'),
		RulesPlain: __webpack_require__(39)
	},
	data: function data() {
		return {};
	},
	computed: {
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	},
	computed: {
		img: function img() {
			return this.$store.state.img;
		},
		mask: function mask() {
			return this.$store.state.mask_info;
		},
		error: function error() {},
		name_bill: function name_bill() {
			return this.$store.getters.name_bill;
		}
		// form_(){
		// 	return this.$store.state.form;
		// }

	},
	created: function created() {},
	mounted: function mounted() {},
	methods: {}
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name_bill: function name_bill() {
      return this.$store.getters.name_bill;
    },
    img: function img() {
      return this.$store.state.img;
    },
    data: function data() {
      return this.$store.state.data;
    },
    meta: function meta() {
      return this.$store.state.meta;
    }
  }
};

/***/ }),
/* 18 */
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

exports.default = {
	data: function data() {
		return {
			writers: function () {
				return (/writers\.html/.test(location.href)
				);
			}()
		};
	},
	computed: {
		name_bill: function name_bill() {
			return this.$store.getters.name_bill;
		},
		img: function img() {
			return this.$store.state.img;
		},
		meta: function meta() {
			return this.$store.state.meta;
		}
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
__webpack_require__(22)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  "data-v-0201f11a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  "data-v-a6910f94",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  "data-v-0460cc04",
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
  "data-v-080de182",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  "data-v-7be60954",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(27)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  "data-v-719c722a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  "data-v-11b89ef3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(26)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(44),
  /* scopeId */
  "data-v-39e34053",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  "data-v-fd8a00e8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 40 */
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
  }, [_c('mask-info'), _c('img', {
    staticClass: "header",
    attrs: {
      "src": _vm.img + '/main/header_2.png'
    }
  }), _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "6.54rem"
    }
  }), _c('part-take'), _c('div', {
    staticClass: "part_clip"
  }, [_c('img', {
    staticClass: "banner_clip",
    attrs: {
      "src": _vm.img + '/main/banner_clip.png'
    }
  }), _c('p', {
    staticClass: "p_intro_"
  }, [_vm._v("\n      \t\t《欢乐颂2》正在东方卫视、浙江卫视、腾讯视频同步热播\n      \t")]), _c('div', {
    staticClass: "video"
  }, [_c('iframe', {
    attrs: {
      "frameborder": "0",
      "width": "640",
      "height": "498",
      "src": "https://v.qq.com/iframe/player.html?vid=s0023h9vfaw&tiny=0&auto=0",
      "allowfullscreen": ""
    }
  })], 1), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.meta.share),
      expression: " !meta.share "
    }],
    staticClass: "btn_share",
    attrs: {
      "src": _vm.img + '/main/btn_share' + (_vm.meta.platform === 'adr' ? '' : '_ios') + '.png'
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
      expression: " meta.share "
    }],
    staticClass: "btn_share",
    attrs: {
      "src": _vm.img + '/main/btn_to_reader.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_PAGE_MAIN'
        })
      }
    }
  })]), _c('rules-plain', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.meta.share),
      expression: " !meta.share "
    }]
  }), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.meta.share),
      expression: " meta.share "
    }],
    staticClass: "logo",
    attrs: {
      "src": _vm.img + 'main/logo.png'
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 41 */
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
  return _c('transition', {
    attrs: {
      "name": "slide-up"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.show),
      expression: "mask.show"
    }],
    staticClass: "MaskForm"
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.hasCross),
      expression: "mask.hasCross"
    }],
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/main/close.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_info'
        })
      }
    }
  }), _c('div', {
    staticClass: "title"
  }, [_vm._v("\r\n\t\t\t\t\t" + _vm._s(_vm.mask.title) + "\r\n\t\t\t\t")]), _c('div', {
    staticClass: "info"
  }, [_vm._v("\r\n\t\t\t\t\t" + _vm._s(_vm.mask.info)), _c('br')]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.case === 'unsubscribed' || _vm.mask.case === 'not_enough'),
      expression: " mask.case === 'unsubscribed' || mask.case === 'not_enough' "
    }],
    staticClass: "info",
    staticStyle: {
      "text-align": "center",
      "color": "#333333"
    }
  }, [_vm._v("\r\n\t\t\t\t\t订阅后返回当前活动页领取" + _vm._s(_vm.name_bill) + "\r\n\t\t\t\t")]), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.btn === 'got_it'),
      expression: " mask.btn==='got_it' "
    }],
    staticClass: "btn",
    attrs: {
      "src": _vm.img + '/main/btn_got_it.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_info'
        })
      }
    }
  }), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.btn !== 'got_it'),
      expression: " mask.btn!=='got_it' "
    }],
    staticClass: "btn",
    attrs: {
      "src": _vm.img + '/main/btn_to_read_2.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_BOOK_ODE'
        })
      }
    }
  })])])])])
},staticRenderFns: []}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_take"
  }, [_c('img', {
    staticClass: "banner_take",
    attrs: {
      "src": _vm.img + '/main/banner_take.png'
    }
  }), _c('div', {
    staticClass: "p_intro"
  }, [_vm._v("\n    QQ阅读请你读《欢乐颂2》(订阅多少返多少)"), _c('br'), _vm._v("\n    共300万" + _vm._s(_vm.name_bill) + "，先到先得\n  ")]), _c('div', {
    staticClass: "panel_pink"
  }, [_c('div', {
    staticClass: "part0",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_BOOK_ODE'
        })
      }
    }
  }, [_c('div', {
    staticClass: "left_"
  }, [_c('img', {
    staticClass: "book",
    attrs: {
      "src": _vm.img + '/main/book_2.png'
    }
  })]), _vm._m(0)]), _c('div', {
    staticClass: "part1"
  }, [_c('p', {
    staticClass: "p0"
  }, [_vm._v("\n        点击书封进入书籍详情页，再点击下载即可订阅"), _c('br'), _c('span', {
    staticStyle: {
      "color": "#3e9ea0"
    }
  }, [_vm._v("订阅后返回当前活动页领取" + _vm._s(_vm.name_bill))])]), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.out === false),
      expression: " data.out===false "
    }],
    staticClass: "btn_to_take",
    attrs: {
      "src": _vm.img + '/main/btn_to_take' + (_vm.meta.platform === 'adr' ? '_adr' : '_ios') + '.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_TAKE'
        })
      }
    }
  }), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.out === true),
      expression: " data.out===true "
    }],
    staticClass: "btn_to_take",
    attrs: {
      "src": _vm.img + '/main/btn_out.png'
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right_"
  }, [_c('p', {
    staticClass: "p_title"
  }, [_vm._v("欢乐颂2")]), _c('p', {
    staticClass: "p_text"
  }, [_vm._v("\n          贫寒HR樊胜美、文艺闺秀关雎尔、小城姑娘邱莹莹与海归金领安迪、富二代小妖精曲筱绡，在欢乐颂小区上演中国都市版“老友记”。\n        ")]), _c('p', {
    staticClass: "learn_more"
  }, [_vm._v("\n          了解更多 >\n        ")])])
}]}

/***/ }),
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Rules"
  }, [_c('div', {
    staticClass: "rContent"
  }, [_c('img', {
    staticClass: "banner_rules",
    attrs: {
      "src": _vm.img + '/main/banner_rules.png'
    }
  }), _c('div', {
    staticClass: "text"
  }, [_vm._m(0), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2.")]), _vm._v("活动期间，在QQ阅读主线客户端，购买《欢乐颂2》，所有订阅花费全额返还等值" + _vm._s(_vm.name_bill) + "，总值3万元" + _vm._s(_vm.name_bill) + "，先到先得。")]), _vm._m(1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("1.")]), _vm._v("活动时间：2017年5月19日至5月21日。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("3.")]), _vm._v("本活动最终解释权归QQ阅读所有。")])
}]}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);