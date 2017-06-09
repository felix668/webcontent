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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
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
		App: __webpack_require__(35)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_scss__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_transition_less__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_transition_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vue_transition_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_index_less__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__animations_index_less__);


//import './config.js';




Vue.directive('clickable', {
  inserted: function inserted(el, binding, vnode) {
    // console.log(vnode)
    el.addEventListener('touchstart', function (e) {
      el.classList.add('active');
    });
    el.addEventListener('touchmove', function (e) {
      el.classList.remove('active');
    });
    el.addEventListener('touchend', function (e) {
      el.classList.remove('active');
    });
    el.addEventListener('touchcancel', function (e) {
      el.classList.remove('active');
    });
  }
});

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
    id: '170507',
    act_f: '170526',
    share_title: '免费领取一本《白鹿原》',
    share_desc: '独家福利！来QQ阅读看《白鹿原》原著，不花钱！'
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
    state: 'resolved',
    hasCross: true,
    title: '--',
    info: '--',
    btn: 'gotIt'
  },
  mask_confirm: {
    show: false,
    state: 'not_bought',
    hasCross: true
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
  name_coin: function name_coin(_ref2) {
    var state = _ref2.state,
        getters = _ref2.getters;

    return state.meta.platform === 'adr' ? '书币' : '阅点';
  },


  // percent ({state,getters}) {
  //   return Math.floor( state.donated.minutes/100000000*100 );
  // },

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

    if (state.meta.platform === 'adr') {
      Local.doCharge('act', true, '');
    } else {
      Local.openrecharge();
      setTimeout(function () {
        location.href = location.href;
      }, 1000);
    }
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

    Local.forceLog(common.param('act_f'), 'to_book');
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
  TRY_SHARE: function TRY_SHARE(_ref27, action) {
    var state = _ref27.state,
        dispatch = _ref27.dispatch,
        getters = _ref27.getters;
  },
  SHARE: function SHARE(_ref28, action) {
    var state = _ref28.state,
        dispatch = _ref28.dispatch,
        getters = _ref28.getters;

    console.log(222);
    if (state.meta.share) {
      dispatch({
        type: 'SHOW',
        what: 'mask_wechat'
      });
    } else {
      // Local.forceLog( common.param('act_f'),`${state.conf.id}_share` );
      console.log('[SHARE share_href] ' + getters.share_href);
      Local.$share(getters.share_href, getters.share_thumb, state.conf.share_title, state.conf.share_desc);
    }
  },
  SET_SECOND_SHARING: function SET_SECOND_SHARING(_ref29, action) {
    var state = _ref29.state,
        dispatch = _ref29.dispatch,
        getters = _ref29.getters;

    sns.share({
      url: location.href,
      cover: getters.share_thumb,
      title: state.conf.share_title,
      desc: state.conf.share_desc
    }, '111');
    // the second argument '111' is essential or an error would be thrown
  },
  TO_APP: function TO_APP(_ref30, action) {
    var state = _ref30.state,
        dispatch = _ref30.dispatch,
        getters = _ref30.getters;

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
  TO_DOWNLOAD: function TO_DOWNLOAD(_ref31, action) {
    var state = _ref31.state,
        dispatch = _ref31.dispatch;

    bnative.downLoad('10003531');
  },
  REPLAY: function REPLAY(_ref32, action) {
    var state = _ref32.state,
        dispatch = _ref32.dispatch;

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
  ADD_TO_SHELF: function ADD_TO_SHELF(_ref33, action) {
    var state = _ref33.state,
        dispatch = _ref33.dispatch;


    Local.addToShelfBooks(JSON.stringify([action.book]));
    // Local.$addToShelf( action.book );
    // };
  },
  SHOW: function SHOW(_ref34, action) {
    var state = _ref34.state,
        dispatch = _ref34.dispatch;

    state[action.what].show = true;
  },
  HIDE: function HIDE(_ref35, action) {
    var state = _ref35.state,
        dispatch = _ref35.dispatch;

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
    coins: 0,
    bills: 0,

    price: 5.99,

    bought_before: false,
    bought: false,
    bills_taken: 0,

    returned_this_time: 0,
    returned_total: 0,

    msg: '--'

  }

};

var getters = {
  enoughMoney: function enoughMoney(_ref) {
    var state = _ref.state;

    return state.data.bills + state.data.coins >= state.data.price * 100;
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

    function getPrice() {
      if (state.meta.platform === 'adr') {
        Local.reqaObj('http://android.reader.qq.com/v6_5/nativepage/book/detail?bid=812443', function (data) {
          console.log(data);
          var _ = data.introinfo.prices;
          state.data.price = Number((_.second !== '' ? _.second : _.first).replace(/元\/本/, ''));
          init();
        }, [], function () {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      } else {
        Local.reqaObj('https://newios.reader.qq.com/v6_5_1/queryintro?origin=&bid=812443&sex=0', function (data) {
          console.log(data);
          var _ = data.introInfo.prices;
          state.data.price = Number((_.second !== '' ? _.second : _.first).replace(/元\/本/, ''));
          init();
        }, [], function () {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }

    function init() {
      Local.reqaObj(common.server() + 'pkg170507/init', function (data) {
        console.log(data);

        if (data.code === -4) {
          state.page = 'over';
        } else {

          if (data.isLogin) {
            state.user.loggedIn = true;

            state.data.coins = data.money;
            state.data.bills = data.z_money;

            if (data.hasBought === false) {} else {
              state.data.bought = true;
              if (data.pickState === -1) {
                // 如果活动开始之前购买过《白鹿原》：
                state.data.bought_before = true;
              } else if (data.pickState === 0) {
                // 如果领过书券
                state.data.bills_taken = 100;
              }
            }
          }
          state.page = 'ready';
        }
      }, [], function () {
        Local.showToast("网络异常，请稍候重试");
      }, 1);
    }

    if (state.meta.share) {
      // Local.forceLog( common.param('act_f'),`${state.conf.id}_enterShare` );
      dispatch({
        type: 'SET_SECOND_SHARING'
      });
      state.page = 'ready';
    } else {
      if (state.dev) {
        state.data.bills = 1000;
        state.page = 'ready';
      } else {
        dispatch({
          type: 'SET_ICON'
        });
        getPrice();
        Local.forceLog(common.param('act_f'), 'enter');
      }
    }
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
      dispatch({
        type: 'TO_BOOK',
        bid: 194777
      });
    }
  },
  TO_BUY: function TO_BUY(_ref4, action) {
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
    } else {
      dispatch({
        type: 'SHOW_MASK',
        case: 'confirm'
      });
    }
  },
  TO_PAY: function TO_PAY(_ref5, action) {
    var state = _ref5.state,
        dispatch = _ref5.dispatch,
        getters = _ref5.getters;

    if (state.dev) {
      state.data.bought = true;
    } else {
      Local.forceLog(common.param('act_f'), 'buy');

      Local.reqaObj(state.meta.platform === 'adr' ? 'http://allreader.3g.qq.com/common/dobuybook?bid=812443' : 'https://allreader.reader.qq.com/common/dobuybook?bid=812443&c_platform=ioswp', function (data) {
        console.log(data);
        if (data.code === 0) {
          state.data.bought = true;
          dispatch({
            type: 'ADD_TO_SHELF',
            book: {
              bid: 812443,
              title: '白鹿原',
              author: '陈忠实',
              intro: ''
            }
          });
          dispatch({
            type: 'SHOW_MASK',
            case: 'success'
          });
          Local.forceLog(common.param('act_f'), 'buy_success');
        } else {
          dispatch({
            type: 'SHOW_MASK',
            case: 'failed'
          });
        }
      }, [], function () {
        Local.showToast("网络异常，请稍候重试");
      }, 1);
    }
  },
  TO_TAKE: function TO_TAKE(_ref6, action) {
    var state = _ref6.state,
        dispatch = _ref6.dispatch,
        getters = _ref6.getters;

    if (state.meta.share) {
      dispatch({
        type: 'TO_PAGE_MAIN'
      });
    } else if (state.user.loggedIn === false) {
      dispatch({
        type: 'TO_LOGIN'
      });
    } else if (state.data.bought === false) {
      Local.forceLog(common.param('act_f'), 'btn_take');
      dispatch({
        type: 'SHOW_MASK',
        case: 'to_buy'
      });
    } else {

      if (state.dev) {
        state.data.bills_taken = 100;
        dispatch({
          type: 'SHOW_MASK',
          case: 'success_taken'
        });
        // dispatch({
        //   type: 'SHOW_MASK',
        //   case: 'failed_to_take'
        // })
      } else {
        Local.forceLog(common.param('act_f'), 'btn_take');
        Local.reqaObj(common.server() + 'pkg170507/pick', function (data) {
          console.log(data);
          if (data.code === 1) {
            state.data.bills_taken = data.money;
            dispatch({
              type: 'SHOW_MASK',
              case: 'success_taken'
            });
          } else {
            dispatch({
              type: 'SHOW_MASK',
              case: 'failed_to_take'
            });
            state.data.msg = data.msg;
            // Local.showToast(data.msg)
          }
        }, [], function () {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }
  },
  SHOW_MASK: function SHOW_MASK(_ref7, action) {
    var state = _ref7.state,
        dispatch = _ref7.dispatch,
        getters = _ref7.getters;

    var _ = state.mask_confirm;
    _.state = action.case;
    switch (action.case) {
      case 'to_buy':
        _.hasCross = true;
        break;
      case 'confirm':
        _.hasCross = true;
        break;
      case 'success':
        _.hasCross = false;
        break;
      case 'failed':
        _.hasCross = false;
        break;

      case 'success_taken':
        _.hasCross = false;
        break;
      case 'failed_to_take':
        _.hasCross = false;
        break;
    }
    dispatch({
      type: 'SHOW',
      what: 'mask_confirm'
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
		MaskLoading: __webpack_require__(37),
		MaskDownload: __webpack_require__(36),
		MaskOver: __webpack_require__(38),
		MaskWeibo: __webpack_require__(40),
		MaskWechat: __webpack_require__(39),

		MaskConfirm: __webpack_require__(41),
		MaskInfo: __webpack_require__(42),
		PartTake: __webpack_require__(43),
		VideoWhite: __webpack_require__(45),
		// PanelGod: require('components/_main/PanelGod.vue'),
		RulesPlain: __webpack_require__(44)
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


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		name_bill: function name_bill() {
			return this.$store.getters.name_bill;
		},
		name_coin: function name_coin() {
			return this.$store.getters.name_coin;
		},
		data: function data() {
			return this.$store.state.data;
		},
		enoughMoney: function enoughMoney() {
			return this.$store.getters.enoughMoney;
		},
		book_five: function book_five() {
			return this.$store.state.book_five;
		},
		conf: function conf() {
			return this.$store.state.conf;
		},
		img: function img() {
			return this.$store.state.img;
		},
		mask_confirm: function mask_confirm() {
			return this.$store.state.mask_confirm;
		}
	},
	methods: {
		hide: function hide() {
			this.$store.dispatch({
				type: 'HIDE',
				what: 'mask_confirm'
			});
		},
		confirm: function confirm() {
			if (this.enoughMoney) {
				this.$store.dispatch({
					type: 'HIDE',
					what: 'mask_confirm'
				});
				this.$store.dispatch({
					type: 'TO_PAY'
				});
			} else {
				this.$store.dispatch({
					type: 'TO_CHARGE'
				});
			}
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
//
//
//
//
//
//
//
//
//
//
//
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
		error: function error() {}
	},
	created: function created() {},
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  },
  methods: {
    click_cover: function click_cover() {
      if (this.meta.share) {
        this.$store.dispatch({
          type: 'TO_PAGE_MAIN'
        });
      } else {
        Local.forceLog(common.param('act_f'), 'to_book');
        this.$store.dispatch({
          type: 'TO_BOOK',
          bid: 812443
        });
      }
    }
  }
};

/***/ }),
/* 19 */
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
/* 20 */
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
	props: {
		id: {}
	},
	data: function data() {
		return {
			state: 'uninitialized',
			loaded: false
		};
	},
	watch: {
		'$store.state.card.current': function $storeStateCardCurrent(nv) {
			this.$refs.video.pause();
		},
		// current: function(){
		// 	if( this.state!=='pending' ){
		// 		this.state = 'ready';
		// 	};
		// },
		state: function state(_state) {
			var self = this;
			console.log('[video state] ' + _state);
			switch (_state) {
				// case 'loading':

				// 	this.$refs.video.setAttribute( 'src',DIR.video+this.video.id+'.mp4' );
				// 	console.log(this.$refs.video.src)
				// 	this.$refs.video.load();

				// 	this.$refs.video.addEventListener('pause',()=>{
				// 		if( this.state==='playing' ){
				// 			this.state = 'paused';
				// 		}
				// 	});

				// 	this.$refs.video.addEventListener('loadeddata',()=>{
				// 		console.log('loaded');
				// 		self.loaded = true;
				// 		// this.act({
				// 		// 	type: 'SET_LOADED',
				// 		// 	i: this.video.id
				// 		// })

				// 		setTimeout(()=>{
				// 			var tl2 = new TimelineMax();
				// 			tl2.to( self.$refs.t5,0.6,{
				// 				y: '-500%',
				// 				opacity: 1
				// 			})

				// 			var tl = new TimelineMax();
				// 			tl.fromTo( self.$refs.progress,1,{
				// 				transformOrigin: '0% 0%',
				// 				scaleX: 0
				// 			},{
				// 				scaleX: 1,
				// 				onComplete: function(){
				// 					if( self.state==='loading' ){
				// 						self.state = 'playing';
				// 					};
				// 				}
				// 			})
				// 		},3000)
				// 	})
				// 	break;
				case 'ready':
					// if( this.loaded ){
					// 	this.$refs.video.pause();
					// 	this.$refs.video.currentTime = 0;
					// };
					break;
				case 'playing':
					// self.$refs.video.play();
					break;
				case 'paused':
					// this.$refs.video.pause();
					break;
				case 'ended':
					break;
			}
		}
	},
	computed: {
		img: function img() {
			return this.$store.state.img;
		},
		meta: function meta() {
			return this.$store.state.meta;
		}
		// src: function(){
		// 	return location.href.replace(/act161203.+/,'act161203/video/'+this.video.id+'.mp4');
		// }

	},
	mounted: function mounted() {
		var _this = this;

		if (window && window.wView) {
			window.wView.allowsInlineMediaPlayback = "YES";
			window.wView.mediaPlaybackRequiresUserAction = "NO";
		}
		//  this.$refs.video.addEventListener('progress',()=>{
		//  	console.log('loading');
		// 	this.state = 'loading';
		// });
		// this.$refs.video.addEventListener('loadstart',()=>{
		// 	this.state = 'loading';
		// });
		this.$refs.video.addEventListener('loadeddata', function () {
			Local.forceLog(common.param('act_f'), 'play');
			console.log('loaded');
			_this.state = 'loaded';
			_this.$refs.video.play();
		});
		this.$refs.video.addEventListener('playing', function () {
			_this.state = 'playing';
		});
		this.$refs.video.addEventListener('pause', function () {
			_this.state = 'paused';
		});
		this.$refs.video.addEventListener('ended', function () {
			_this.state = 'ended';
		});
	},
	methods: {
		PLAY: function PLAY(e) {
			e.stopPropagation();
			var self = this;
			if (this.state === 'uninitialized') {
				this.state = 'loading';
				this.$refs.video.load();
			} else {
				this.$refs.video.play();
			}
			// Local.forceLog( common.param('act_f'),`play` );
		},
		PAUSE: function PAUSE() {
			this.$refs.video.pause();
		}
	}
};

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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  "data-v-67fe2cb6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  "data-v-263eac39",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(33)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(55),
  /* scopeId */
  "data-v-d33f4cca",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(34)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(56),
  /* scopeId */
  "data-v-f804e1f6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(32)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(54),
  /* scopeId */
  "data-v-8abf3bd2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  "data-v-73a27507",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  "data-v-09493530",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(27)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  "data-v-4642de36",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  "data-v-6e6d7f96",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(31)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  "data-v-879b0be2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(26)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  "data-v-2ea50dea",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_confirm.show),
      expression: "mask_confirm.show"
    }],
    staticClass: "MaskDownload"
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_confirm.hasCross),
      expression: "mask_confirm.hasCross"
    }],
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/main/close.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_confirm'
        })
      }
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_confirm.state === 'to_buy'),
      expression: " mask_confirm.state==='to_buy' "
    }],
    staticClass: "inner"
  }, [_c('div', {
    staticClass: "white_"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "font-size": "0.32rem",
      "font-weight": "bold",
      "line-height": "0.48rem",
      "text-align": "center",
      "color": "#444444"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t您尚未订阅《白鹿原》"), _c('br'), _vm._v("\r\n\t\t\t\t\t\t立即订阅即可领全额" + _vm._s(_vm.name_bill) + "哦\r\n\t\t\t\t\t")])]), _c('div', {
    staticClass: "btn__",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'SHOW_MASK',
          case: 'confirm'
        })
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t立即订阅\r\n\t\t\t\t")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_confirm.state === 'confirm'),
      expression: "mask_confirm.state==='confirm'"
    }],
    staticClass: "inner"
  }, [_vm._m(0), _c('div', {
    staticClass: "middle"
  }, [_c('div', {
    staticClass: "p0"
  }, [_c('span', {
    staticClass: "small black"
  }, [_vm._v("价格：")]), _c('span', {
    staticClass: "big red"
  }, [_vm._v(_vm._s((_vm.data.price * 100).toFixed(0)))]), _c('span', {
    staticClass: "small black"
  }, [_vm._v(_vm._s(_vm.name_coin))])]), _c('p', {
    staticClass: "p0"
  }, [_c('span', {
    staticClass: "small black"
  }, [_vm._v("余额：")]), _c('span', {
    staticClass: "big black"
  }, [_vm._v(_vm._s(_vm.data.coins))]), _c('span', {
    staticClass: "small black"
  }, [_vm._v(_vm._s(_vm.name_coin))]), _c('span', {
    staticClass: "small black",
    staticStyle: {
      "margin": "0 0.1rem"
    }
  }, [_vm._v("+")]), _c('span', {
    staticClass: "big black"
  }, [_vm._v(_vm._s(_vm.data.bills))]), _c('span', {
    staticClass: "small black"
  }, [_vm._v(_vm._s(_vm.name_bill))])])]), _c('div', {
    staticClass: "btn__",
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("\r\n\t\t\t\t\t" + _vm._s(_vm.enoughMoney ? '确认购买' : '余额不足，充值购买') + "\r\n\t\t\t\t")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_confirm.state === 'success'),
      expression: " mask_confirm.state==='success' "
    }],
    staticClass: "inner"
  }, [_vm._m(1), _c('div', {
    staticClass: "btn__",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_confirm'
        })
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t我知道了\r\n\t\t\t\t")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_confirm.state === 'failed'),
      expression: " mask_confirm.state==='failed' "
    }],
    staticClass: "inner"
  }, [_c('div', {
    staticStyle: {
      "position": "relative",
      "background": "white",
      "height": "3rem",
      "overflow": "hidden"
    }
  }, [_c('img', {
    staticStyle: {
      "width": "0.73rem",
      "margin": "auto",
      "margin-top": "0.52rem"
    },
    attrs: {
      "src": _vm.img + '/main/unhappy_face.png'
    }
  }), _vm._m(2)]), _c('div', {
    staticClass: "btn__",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_confirm'
        })
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t知道了\r\n\t\t\t\t")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_confirm.state === 'success_taken'),
      expression: " mask_confirm.state==='success_taken' "
    }],
    staticClass: "inner"
  }, [_c('div', {
    staticClass: "white_"
  }, [_c('div', {}, [_c('div', {
    staticStyle: {
      "width": "100%",
      "margin-bottom": "0.25rem",
      "font-size": "0.32rem",
      "font-weight": "bold",
      "line-height": "0.48rem",
      "text-align": "center",
      "color": "#444444"
    }
  }, [_vm._v("恭喜获得"), _c('span', {
    staticStyle: {
      "color": "#cc3f49"
    }
  }, [_vm._v(_vm._s(_vm.data.bills_taken))]), _vm._v(_vm._s(_vm.name_bill))]), _c('div', {
    staticStyle: {
      "width": "100%",
      "font-size": "0.22rem",
      "font-weight": "normal",
      "color": "#949494",
      "text-align": "center"
    }
  }, [_vm._v("有效期30天")])])]), _c('div', {
    staticClass: "btn__",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_confirm'
        })
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t好的\r\n\t\t\t\t")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_confirm.state === 'failed_to_take'),
      expression: " mask_confirm.state==='failed_to_take' "
    }],
    staticClass: "inner"
  }, [_c('div', {
    staticStyle: {
      "position": "relative",
      "background": "white",
      "height": "3rem",
      "overflow": "hidden"
    }
  }, [_c('img', {
    staticStyle: {
      "width": "0.73rem",
      "margin": "auto",
      "margin-top": "0.52rem"
    },
    attrs: {
      "src": _vm.img + '/main/unhappy_face.png'
    }
  }), _c('div', {
    staticStyle: {
      "position": "absolute",
      "left": "0",
      "top": "1.5rem",
      "width": "100%",
      "font-size": "0.32rem",
      "font-weight": "bold",
      "line-height": "0.48rem",
      "text-align": "center",
      "color": "#444444"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t" + _vm._s(_vm.data.msg) + "\r\n\t\t\t\t\t")])]), _c('div', {
    staticClass: "btn__",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_confirm'
        })
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t知道了\r\n\t\t\t\t")])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "top"
  }, [_c('p', {
    staticClass: "p0"
  }, [_vm._v("订阅多少返多少")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "white_"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "font-size": "0.32rem",
      "font-weight": "bold",
      "line-height": "0.48rem",
      "text-align": "center",
      "color": "#444444"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t购买成功！"), _c('br')])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "position": "absolute",
      "left": "0",
      "top": "1.5rem",
      "width": "100%",
      "font-size": "0.32rem",
      "font-weight": "bold",
      "line-height": "0.48rem",
      "text-align": "center",
      "color": "#444444"
    }
  }, [_vm._v("\r\n\t\t\t\t\t\t购买未成功"), _c('br'), _vm._v("\r\n\t\t\t\t\t\t请重试\r\n\t\t\t\t\t")])
}]}

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
    staticClass: "VideoWhite"
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'uninitialized' || _vm.state === 'paused' || _vm.state === 'ended'),
      expression: " state==='uninitialized'||state==='paused'||state==='ended' "
    }],
    staticClass: "btn_play",
    attrs: {
      "src": _vm.img + '/main/btn_play.png'
    },
    on: {
      "click": _vm.PLAY
    }
  }), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'loading'),
      expression: " state==='loading' "
    }],
    staticClass: "icon_loading",
    attrs: {
      "src": _vm.img + '/common/loading.svg'
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'uninitialized'),
      expression: " state==='uninitialized' "
    }],
    staticClass: "overlay"
  }, [_c('img', {
    staticClass: "snapshot",
    attrs: {
      "src": _vm.img + '/main/overlay.png'
    }
  })]), (_vm.meta.platform === 'ios') ? _c('video', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'playing' || _vm.state === 'paused' || _vm.state === 'ended'),
      expression: " state==='playing'||state==='paused'||state==='ended' "
    }],
    ref: "video",
    attrs: {
      "src": './video.mp4',
      "preload": "none",
      "poster": _vm.img + '/main/covers/0.jpg'
    },
    on: {
      "click": _vm.PAUSE
    }
  }, [_c('source', {
    attrs: {
      "type": "video/mp4"
    }
  })]) : _vm._e(), (_vm.meta.platform === 'adr') ? _c('video', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'playing' || _vm.state === 'paused' || _vm.state === 'ended'),
      expression: " state==='playing'||state==='paused'||state==='ended' "
    }],
    ref: "video",
    attrs: {
      "src": './video.mp4',
      "preload": "none",
      "poster": _vm.img + '/main/covers/0.jpg'
    },
    on: {
      "click": _vm.PAUSE
    }
  }, [_c('source', {
    attrs: {
      "type": "video/mp4"
    }
  })]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 49 */
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
  }, [_vm._v("\r\n\t\t\t\t\t" + _vm._s(_vm.mask.info) + "\r\n\t\t\t\t")]), _c('img', {
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
      "src": _vm.img + '/main/btn_to_read.png'
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
/* 50 */
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
  }, [_c('mask-confirm'), _c('mask-info'), _c('div', {
    staticClass: "header",
    staticStyle: {
      "width": "100%",
      "height": "6.87rem"
    },
    style: ('background-image:url(' + _vm.img + '/main/header_2.png);background-size:100% auto;')
  }, [_c('img', {
    staticClass: "banner",
    attrs: {
      "src": _vm.img + '/main/banner_' + _vm.meta.platform + '.png'
    }
  })]), _c('part-take'), _c('img', {
    staticClass: "bottom_img",
    attrs: {
      "src": _vm.img + 'main/bottom_img.png'
    }
  }), _c('div', {
    staticClass: "part_clip"
  }, [_c('img', {
    staticClass: "ink",
    attrs: {
      "src": _vm.img + '/main/ink.png'
    }
  }), _c('p', {
    staticClass: "p_intro_"
  }, [_vm._v("\n      \t\t张嘉译、秦海璐喊你来看《白鹿原》原著\n      \t")]), _c('video-white'), _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "0.54rem"
    }
  }), _c('img', {
    staticClass: "btn_share",
    attrs: {
      "src": _vm.img + '/main/btn_share.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'SHARE'
        })
      }
    }
  })], 1), _c('rules-plain', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.meta.share),
      expression: " !meta.share "
    }]
  }), _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "1.6rem"
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_take"
  }, [_c('img', {
    staticClass: "cover_",
    attrs: {
      "src": _vm.img + '/main/cover.png'
    }
  }), _c('div', {
    staticClass: "clickable",
    on: {
      "click": _vm.click_cover
    }
  }), _c('div', {
    staticClass: "top__"
  }, [_c('div', {
    staticClass: "left_"
  }), _c('div', {
    staticClass: "right_"
  }, [_c('p', {
    staticClass: "p_title"
  }, [_vm._v("白鹿原")]), _c('p', {
    staticClass: "p_author"
  }, [_vm._v("陈忠实 | 小说")]), _c('p', {
    staticClass: "p_price"
  }, [_vm._v(_vm._s(_vm.data.price) + "元/本")]), _c('p', {
    staticClass: "p_text"
  }, [_vm._v("\n        一部渭河平原五十年变迁的史诗，一轴中国农村班斓多彩、触目惊心的长幅画卷。\n      ")]), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.bought_before === false && _vm.data.bought === false),
      expression: " data.bought_before===false&&data.bought===false "
    }],
    staticClass: "subscribe",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_BUY'
        })
      }
    }
  }, [_vm._v("\n        立即订阅\n      ")]), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.bought_before === true || _vm.data.bought === true),
      expression: " data.bought_before===true||data.bought===true "
    }],
    staticClass: "subscribe",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_READ',
          bid: 812443
        })
      }
    }
  }, [_vm._v("\n        去阅读\n      ")])])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.bought_before === false && _vm.data.bills_taken === 0),
      expression: " data.bought_before===false&&data.bills_taken===0 "
    }],
    staticClass: "trash"
  }, [_c('div', {
    staticClass: "p_intro"
  }, [_vm._v("\n      活动期间订阅《白鹿原》即可领取全额" + _vm._s(_vm.name_bill) + "\n    ")]), _c('img', {
    staticClass: "btn_take",
    attrs: {
      "src": _vm.img + '/main/btn_take_' + _vm.meta.platform + '.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_TAKE'
        })
      }
    }
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.bought_before === true),
      expression: " data.bought_before===true "
    }],
    staticClass: "trash"
  }, [_c('div', {
    staticClass: "p_intro"
  }, [_vm._v("\n      对不起，只有活动期间订阅的用户才能参与返" + _vm._s(_vm.name_bill) + "活动哦\n    ")]), _c('img', {
    staticClass: "btn_take",
    attrs: {
      "src": _vm.img + '/main/btn_take_disabled_' + _vm.meta.platform + '.png'
    }
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.bills_taken > 0),
      expression: " data.bills_taken>0 "
    }],
    staticClass: "trash"
  }, [_c('div', {
    staticClass: "p_intro"
  }, [_vm._v("\n      您已领取过" + _vm._s(_vm.name_bill) + "\n    ")]), _c('img', {
    staticClass: "btn_take",
    attrs: {
      "src": _vm.img + '/main/btn_take_disabled_' + _vm.meta.platform + '.png'
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 52 */
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
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Rules"
  }, [_c('div', {
    staticClass: "rContent"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n\t\t\t活动规则\n\t\t")]), _c('div', {
    staticClass: "text"
  }, [_vm._m(0), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2.")]), _vm._v("活动期间，在QQ阅读" + _vm._s(_vm.meta.platform === 'adr' ? '安卓' : 'ios') + "主线客户端购买《白鹿原》原著的用户，可在活动页面领取订阅等值" + _vm._s(_vm.name_bill) + "。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("3.")]), _vm._v("返还的" + _vm._s(_vm.name_bill) + "自领取当日起30天有效。")]), _vm._m(1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("1.")]), _vm._v("活动时间：2017年5月26日-2017年6月1日。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("4.")]), _vm._v("本活动最终解释权归QQ阅读所有。")])
}]}

/***/ }),
/* 54 */
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
/* 55 */
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
/* 56 */
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);