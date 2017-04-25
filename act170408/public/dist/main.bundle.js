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
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
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
		App: __webpack_require__(43)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_scss__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_transition_less__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_transition_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vue_transition_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_index_less__ = __webpack_require__(25);
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
    id: '170408',
    act_f: '170408',
    share_title: '423全民阅读，邀你益起阅读！',
    share_desc: '“你读我捐”，与QQ阅读合力为农家书屋捐书'
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

  mask_success: {
    show: false
  },
  mask_house: {
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

    return getters.pre_https + '/act' + state.conf.id + '/public/share.html?tf=1&act_f=' + state.conf.act_f + '&u=' + state.user.u + '&p=' + state.user.p + '&lot=' + state.user.lot;
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
  href_total: function href_total(_ref11) {
    var state = _ref11.state,
        getters = _ref11.getters;

    return getters.pre + '/act170410/index.html?act_f=170410';
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
  TO_PAGE_MAIN: function TO_PAGE_MAIN(_ref14, action) {
    var state = _ref14.state,
        dispatch = _ref14.dispatch,
        getters = _ref14.getters;

    dispatch({
      type: 'TO_PAGE',
      href: getters.href_main
    });
  },
  TO_PAGE_TOTAL: function TO_PAGE_TOTAL(_ref15, action) {
    var state = _ref15.state,
        dispatch = _ref15.dispatch,
        getters = _ref15.getters;

    dispatch({
      type: 'TO_PAGE',
      href: getters.href_total
    });
  },
  TO_CONTACT: function TO_CONTACT(_ref16, action) {
    var state = _ref16.state,
        dispatch = _ref16.dispatch;

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
  TO_BOOK: function TO_BOOK(_ref17, action) {
    var state = _ref17.state,
        dispatch = _ref17.dispatch;

    if (!state.share) {

      ABook.gotoDetail(action.bid);
    } else {
      dispatch({ type: 'TO_APP' });
    }
  },
  TO_READ: function TO_READ(_ref18, action) {
    var state = _ref18.state,
        dispatch = _ref18.dispatch;

    Local.$toRead(action.bid);
  },
  TO_ZHUAN_TI: function TO_ZHUAN_TI(_ref19, action) {
    var state = _ref19.state,
        dispatch = _ref19.dispatch;

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
  TO_LISTEN_BOOK: function TO_LISTEN_BOOK(_ref20, action) {
    var state = _ref20.state,
        dispatch = _ref20.dispatch;

    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'toListen');
      location.href = 'uniteqqreader://nativepage/client/listenpage?mediaId=90001027';
    }
  },
  TO_BOOKSHELF: function TO_BOOKSHELF(_ref21, action) {
    var state = _ref21.state,
        dispatch = _ref21.dispatch;

    location.href = 'uniteqqreader://nativepage/client/bookshelf';
  },
  TO_ACCOUNT: function TO_ACCOUNT(_ref22, action) {
    var state = _ref22.state,
        dispatch = _ref22.dispatch;

    location.href = state.meta.platform === 'adr' ? 'uniteqqreader://nativepage/getAcctInfo' : 'uniteqqreader://nativepage/account/index';
  },
  SET_ICON: function SET_ICON(_ref23, action) {
    var state = _ref23.state,
        dispatch = _ref23.dispatch,
        getters = _ref23.getters;

    Local.$setIconForShareing(getters.share_href, getters.share_thumb, state.conf.share_title, state.conf.share_desc);
  },
  SHARE: function SHARE(_ref24, action) {
    var state = _ref24.state,
        dispatch = _ref24.dispatch,
        getters = _ref24.getters;

    if (!state.meta.share) {

      Local.forceLog(common.param('act_f'), state.conf.id + '_share');
      console.log('[SHARE share_href] ' + getters.share_href);
      Local.$share(getters.share_href, getters.share_thumb, state.conf.share_title, state.conf.share_desc);
    } else {
      dispatch({
        type: 'SHOW',
        what: 'mask_share'
      });
    }
  },
  SET_SECOND_SHARING: function SET_SECOND_SHARING(_ref25, action) {
    var state = _ref25.state,
        dispatch = _ref25.dispatch,
        getters = _ref25.getters;

    sns.share({
      url: location.href,
      cover: getters.share_thumb,
      title: state.conf.share_title,
      desc: state.conf.share_desc
    }, '111');
    // the second argument '111' is essential or an error would be thrown
  },
  TO_APP: function TO_APP(_ref26, action) {
    var state = _ref26.state,
        dispatch = _ref26.dispatch,
        getters = _ref26.getters;

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
  TO_DOWNLOAD: function TO_DOWNLOAD(_ref27, action) {
    var state = _ref27.state,
        dispatch = _ref27.dispatch;

    bnative.downLoad('10003531');
  },
  REPLAY: function REPLAY(_ref28, action) {
    var state = _ref28.state,
        dispatch = _ref28.dispatch;

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
  ADD_TO_SHELF: function ADD_TO_SHELF(_ref29, action) {
    var state = _ref29.state,
        dispatch = _ref29.dispatch;


    Local.addToShelfBooks(JSON.stringify([action.book]));
    // Local.$addToShelf( action.book );
    // };
  },
  SHOW: function SHOW(_ref30, action) {
    var state = _ref30.state,
        dispatch = _ref30.dispatch;

    if (action.what === 'mask_donated') {
      Local.forceLog(common.param('act_f'), state.conf.id + '_btnHasDonated');
      state.user.title = '您的已捐时长';
    }
    state[action.what].show = true;
  },
  HIDE: function HIDE(_ref31, action) {
    var state = _ref31.state,
        dispatch = _ref31.dispatch;

    state[action.what].show = false;
  }
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators, getters: getters };

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
  stage: {
    current: 0
  },
  donated: {
    minutes: 0,
    books: 0
  },
  god: {
    id: 0,
    name: '--',
    donated: 0
  }
  // gods: {
  //   gods: [{
  //     id: 0,
  //     name: '辰东',
  //   },{
  //     id: 1,
  //     name: '丁墨'
  //   },{
  //     id: 2,
  //     name: '耳根'
  //   },{
  //     id: 3,
  //     name: '孑与2'
  //   },{
  //     id: 4,
  //     name: '苏小暖'
  //   },{
  //     id: 5,
  //     name: '我吃西红柿'
  //   },{
  //     id: 6,
  //     name: '叶非夜'
  //   },{
  //     id: 7,
  //     name: '夜北'
  //   },{
  //     id: 8,
  //     name: '鱼人二代'
  //   },{
  //     id: 9,
  //     name: '吱吱'
  //   }],
  //   chosen: 0,
  //   donated: 0
  // }
};

var getters = {
  // god ({state}) {
  //   return state.gods.gods[ state.gods.chosen ];
  // }
};

var mutators = {
  INIT_MAIN: function INIT_MAIN(_ref, action) {
    var state = _ref.state,
        dispatch = _ref.dispatch,
        getters = _ref.getters;

    if (state.meta.share) {
      Local.forceLog(common.param('act_f'), state.conf.id + '_enterShare');
      dispatch({
        type: 'SET_SECOND_SHARING'
      });
      dispatch({
        type: 'INIT_SHARE'
      });
    } else {
      if (state.dev) {
        state.user.time_span = 288;
        state.donated.minutes = 1222222555;
        state.page = 'ready';
      } else {

        Local.forceLog(common.param('act_f'), state.conf.id + '_enter');
        Local.reqaObj(common.server() + ('pkg' + state.conf.id + '/init'), function (data) {
          console.log(data);

          if (data.code === -4) {
            state.page = 'over';
          } else {
            state.donated.minutes = data.totalTime;
            if (data.totalTime >= 124894590) {
              state.done = true;
              state.stage.current = 1;
            };
            state.donated.books = data.totalDonateBooks;

            state.god.id = data.dashenId;
            state.god.name = data.dashenName;
            state.god.donated = data.dashenDonate;

            if (data.isLogin) {
              state.user.loggedIn = true;

              state.user.name = data.userNick;
              state.user.avatar = data.userAvor;
              state.user.time_span = data.readTime;
              state.user.donated = data.hasDonate;

              if (data.lot === 3) {
                state.user.name = '游客';
                state.user.avatar = './img/common/default.jpg';
              }

              state.user.u = data.u;
              state.user.p = data.p;
              state.user.lot = data.lot;
            }
            state.page = 'ready';
          }
        }, [], function () {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }
  },
  INIT_SHARE: function INIT_SHARE(_ref2, action) {
    var state = _ref2.state,
        dispatch = _ref2.dispatch;

    var share_init_url = common.server() + ('pkg' + state.conf.id + '/shareInit?u=' + common.param('u') + '&p=' + common.param('p')) + '&lot=' + common.param('lot');
    console.log('[share_init_url] ' + share_init_url);
    Local.reqaObj(share_init_url, function (data) {
      console.log(data);

      if (data.code === -4) {
        state.page = 'over';
      } else {
        state.stage.current = 1;

        state.donated.minutes = data.totalTime;
        if (data.totalTime >= 124894590) {
          state.done = true;
          state.stage.current = 1;
        };
        state.donated.books = data.totalDonateBooks;

        state.god.id = data.dashenId;
        state.god.name = data.dashenName;
        state.god.donated = data.dashenDonate;

        state.user.loggedIn = true;
        state.user.name = data.userNick;
        state.user.avatar = data.userAvor;
        state.user.time_span = data.readTime;
        state.user.donated = data.hasDonate;

        if (common.param('lot') === '3') {
          state.user.name = '游客';
          state.user.avatar = './img/common/default.jpg';
        }

        state.page = 'ready';
      }
    }, [], function () {
      Local.showToast("网络异常，请稍候重试");
    }, 1);
  },
  CHANGE_MAIN: function CHANGE_MAIN(_ref3, action) {
    var state = _ref3.state,
        dispatch = _ref3.dispatch;

    console.log('[CHANGE to] ' + action.to);
    state.stage.current = action.to;
  },
  DONATE: function DONATE(_ref4, action) {
    var state = _ref4.state,
        dispatch = _ref4.dispatch;

    if (state.dev) {
      var donated = state.user.time_span - state.user.time_span % 30;
      state.user.donated = donated;
      state.user.title = '捐书成功';
      state.mask_donated.show = true;
    } else {
      Local.forceLog(common.param('act_f'), state.conf.id + '_btnDonate');
      Local.reqaObj(common.server() + ('pkg' + state.conf.id + '/pick'), function (data) {
        console.log('[data pick] ' + JSON.stringify(data));
        if (data.code === 1) {
          var donated = state.user.time_span - state.user.time_span % 30;
          state.user.donated = donated;
          state.user.title = '捐书成功';
          state.mask_donated.show = true;
        } else {
          Local.showToast(data.msg);
        }
      }, [], function () {
        Local.showToast("网络异常，请稍候重试");
      }, 1);
    }
  },
  INVITE: function INVITE(_ref5, action) {
    var state = _ref5.state,
        dispatch = _ref5.dispatch;

    if (!state.user.loggedIn) {
      dispatch({
        type: 'TO_LOGIN'
      });
    } else {
      Local.forceLog(common.param('act_f'), state.conf.id + '_btnShare');
      dispatch({
        type: 'SHARE'
      });
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

exports.default = {
	components: {
		MaskLoading: __webpack_require__(45),
		MaskDownload: __webpack_require__(44),
		MaskOver: __webpack_require__(46),
		MaskWeibo: __webpack_require__(48),
		MaskWechat: __webpack_require__(47),

		PageEntry: __webpack_require__(53),
		PageMain: __webpack_require__(54)
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

var arr = [];
var uid = 0;

// var img = new Image();
// img.src = './img/red/panel.png';

function start(el) {

  var Score = function Score(el, fontSize, paneWidth) {
    this.canvas = el;
    this.fontSize = fontSize || "18";
    this.paneWidth = paneWidth || 18;
    this.ctx = this.canvas.getContext("2d");
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.plates = [null, null, null, null, null, null, null, null, null], this.number = "000000000";
    this.update(0);
    this.render();
  };

  Score.prototype = {
    update: function update(new_val) {
      new_val = new_val.toString();
      var len = this.plates.length - new_val.length;
      // implement the digits with whitespace
      for (var i = 0; i < len; i++) {
        new_val = " " + new_val;
      }
      var arr_old = this.number.split("");
      var arr_new = new_val.split("");

      for (var i = 0; i < arr_old.length; i++) {
        if (arr_new[i] !== " ") {
          arr_old[i] === " " && (arr_old[i] = "0");
          this.plates[i] = new Plate(this, parseInt(arr_old[i]), parseInt(arr_new[i]), this.paneWidth * i);
        } else {
          // the old digit is 0
          this.plates[i] = new Plate(this, 0, 0, this.paneWidth * i);
        }
      }
      this.number = new_val;
    },
    render: function render() {
      var _this = this;

      var self = this;
      this.stimer = requestAnimFrame(function () {
        self.render();
      });
      this.ctx.clearRect(0, 0, this.w, this.h);
      // draw background img
      for (var i = 0; i < this.plates.length; i++) {
        // this.ctx.drawImage( img,4+61*i,0 );
      };
      this.plates.forEach(function (a) {
        // draw the number
        if (a !== null) {
          a.draw(_this.fontSize);
          a.step();
        }
      });
      // for( let i = 0; i<8; i++ ){
      //     if (this.plates[i] != null) {
      //         this.plates[i].draw(this.ctx,this.fontSize);
      //         this.plates[i].move();
      //     }
      // }
    }
  };

  var Plate = function Plate(cv, ov, nv, x, speed, h) {
    var self = this;
    this.cv = cv;
    this.ov = ov; // the old value
    this.nv = nv; // the new value
    // height
    this.paneHeight = 66;
    this.x = x; //ºá×ø±ê
    this.y = 4;
    this.over = false;
    this.distance = function () {
      if (self.nv >= self.ov) {
        return self.paneHeight * (self.nv - self.ov);
      } else {
        return self.paneHeight * (10 - self.ov + self.nv);
      }
    }(),
    // height of one number
    this.speed = speed; //×ª¶¯ËÙ¶È
    // the numbers
    this.nubs = [];
    this.__init();
  };
  Plate.prototype = {
    __init: function __init() {
      this.nubs[0] = this.ov;
      for (var i = 1; i < 10; i++) {
        var candidate = this.nubs[0] + i;
        this.nubs[i] = candidate <= 9 ? candidate : candidate - 10;
      }
    },
    draw: function draw(fontSize) {
      var _this2 = this;

      var ctx = this.cv.ctx;
      ctx.save();
      ctx.font = '600 ' + fontSize + 'px arial';
      //       var gradient = ctx.createLinearGradient(0, 0, 0, this.h);
      // ctx.shadowColor = "#000";
      //       ctx.shadowOffsetX = 1;
      //       ctx.shadowOffsetY = 1;
      //       gradient.addColorStop("0", "#fff");
      //       gradient.addColorStop("0.2", "#444");
      //       gradient.addColorStop("0.6", "#fff");
      //       gradient.addColorStop("0.8", "#444");
      //       gradient.addColorStop("1", "#fff");
      // color of the text
      ctx.fillStyle = '#f0dabf';
      // draw the ten numbers
      this.nubs.forEach(function (a, i) {
        // remember that the number will be drawn at the top-right of its coordinates
        var numberX = _this2.x + 16;
        var numberY = _this2.y + i * _this2.paneHeight + 50;
        if (numberY > 0 && numberY < 130) {
          ctx.fillText(a, numberX, numberY);
        }
      });
      ctx.restore();
    },
    step: function step() {
      if (this.nv !== this.ov && this.over === false) {
        this.y -= 5;
        if (this.y <= 4 - this.distance) {
          this.y = 4 - this.distance;
          this.over = true;
        }
      }
    }
  };

  window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  window.cancelAFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
      window.clearTimeout(id);
    };
  }();

  //¼ÆÈëÊý×Ö
  var score1 = 0;
  var s1 = new Score(el, 46, 57);
  // setTimeout(function() {
  //   s1.update(12345);
  // },
  // 1000)
  // setInterval(function() {
  //     var d = score1 += 12345;
  //     s1.update(d);
  // },
  // 3000)
  arr.push(s1);
  uid++;
}
exports.default = {
  // props: ['act','num'],
  data: function data() {
    return {
      uid: 0,
      num: 0
    };
  },
  computed: {
    donated: function donated() {
      return this.$store.state.donated;
    }
  },
  watch: {
    '$store.state.stage.current': function $storeStateStageCurrent(nv) {
      var _this3 = this;

      setTimeout(function () {
        arr[_this3.uid].update(_this3.donated.minutes);
      }, 500);
    }
  },
  mounted: function mounted() {
    this.uid = uid;
    start(this.$refs.canvas);
    // setInterval(()=>{
    //   this.num += 12345;
    // },2000);
  },
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

exports.default = {
	props: {},
	components: {
		// Countdown: require('./Countdown.vue'),
		// Explosion: require('./Explosion.vue')
	},
	data: function data() {
		return {};
	},
	computed: {
		done: function done() {
			return this.$store.state.done;
		},
		meta: function meta() {
			return this.$store.state.meta;
		},
		user: function user() {
			return this.$store.state.user;
		},
		img: function img() {
			return this.$store.state.img;
		},
		green: function green() {
			if (this.$store.state.user.time_span - this.$store.state.user.donated >= 30) {
				return true;
			} else {
				return false;
			}
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			return this.$store.state.mask_donated;
		},
		user: function user() {
			return this.$store.state.user;
		}
	},
	created: function created() {},
	mounted: function mounted() {},
	methods: {
		touchmove: function touchmove(e) {
			e.stopPropagation();
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

exports.default = {
	data: function data() {
		return {};
	},
	computed: {
		img: function img() {
			return this.$store.state.img;
		},
		mask: function mask() {
			return this.$store.state.mask_house;
		}
	},
	created: function created() {},
	mounted: function mounted() {},
	methods: {
		touchmove: function touchmove(e) {
			e.stopPropagation();
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

exports.default = {
  computed: {
    done: function done() {
      return this.$store.state.done;
    },
    img: function img() {
      return this.$store.state.img;
    },
    meta: function meta() {
      return this.$store.state.meta;
    },
    stage: function stage() {
      return this.$store.state.stage;
    }
  },
  methods: {
    CHANGE_MAIN: function CHANGE_MAIN() {}
  }
};

/***/ }),
/* 21 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MaskHouse: __webpack_require__(52),
    MaskDonated: __webpack_require__(51),

    SvgStrokeCircle: __webpack_require__(57),
    CanvasCounter: __webpack_require__(49),
    FixedFooter: __webpack_require__(50),
    Rules: __webpack_require__(56),

    PartDone: __webpack_require__(55)
  },
  computed: {
    name_sliced: function name_sliced() {
      return this.$store.getters.name_sliced;
    },
    done: function done() {
      return this.$store.state.done;
    },
    img: function img() {
      return this.$store.state.img;
    },
    stage: function stage() {
      return this.$store.state.stage;
    },
    meta: function meta() {
      return this.$store.state.meta;
    },
    user: function user() {
      return this.$store.state.user;
    },
    god: function god() {
      return this.$store.state.god;
    },
    donated: function donated() {
      return this.$store.state.donated;
    },
    percentage: function percentage() {
      return (this.donated.minutes / 100000000).toFixed(6);
    },
    books: function books() {
      return Math.floor(this.donated.minutes / 30 * 1000 / 600000);
    }
  }
};

/***/ }),
/* 22 */
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

exports.default = {
  computed: {
    done: function done() {
      return this.$store.state.done;
    },
    meta: function meta() {
      return this.$store.state.meta;
    },
    user: function user() {
      return this.$store.state.user;
    },
    img: function img() {
      return this.$store.state.img;
    },
    donated: function donated() {
      return this.$store.state.donated;
    },
    name_sliced: function name_sliced() {
      return this.$store.getters.name_sliced;
    }
  }
};

/***/ }),
/* 23 */
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

exports.default = {
	props: {},
	computed: {
		img: function img() {
			return this.$store.state.img;
		},
		meta: function meta() {
			return this.$store.state.meta;
		}
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
/* 24 */
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

exports.default = {
	computed: {
		donated: function donated() {
			return this.$store.state.donated;
		},
		percent: function percent() {
			return this.$store.getters.percent;
		},
		percentage: function percentage() {
			return (this.donated.minutes / 100000000).toFixed(6);
		}
	},
	watch: {
		'$store.state.stage.current': function $storeStateStageCurrent() {
			var _this = this;

			setTimeout(function () {
				_this.start(_this.percentage >= 1 ? 1 : _this.percentage);
			}, 400);
		}
	},
	mounted: function mounted() {},
	methods: {
		start: function start(percentage) {
			var el = document.getElementById("arc1");
			var circle = document.querySelector('.SvgStrokeCircle .circle');
			var text = document.querySelector('.SvgStrokeCircle .text');

			function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
				var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

				return {
					x: centerX + radius * Math.cos(angleInRadians),
					y: centerY + radius * Math.sin(angleInRadians)
				};
			}

			var mode = 'plus';
			var circle_r = 30;
			var s = 65;
			var b = 83;

			function describeArc(x, y, radius, startAngle, endAngle) {
				var start = polarToCartesian(x, y, radius, endAngle);
				var end = polarToCartesian(x, y, radius, startAngle);
				var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

				circle.setAttribute('r', function () {
					if (mode === 'plus') {
						if (circle_r <= 33) {
							circle_r += 0.2;
							// circle.setAttribute('fill','hsl(331,'+(s++)+'%,'+(b++)+'%)');
						} else {
							mode = 'minus';
						}
					} else if (mode === 'minus') {
						if (circle_r >= 28) {
							circle_r -= 0.2;
							// circle.setAttribute('fill','hsl(331,'+(s--)+'%,'+(b--)+'%)');
						} else {
							mode = 'plus';
						}
					}
					return circle_r;
				}());
				// circle.setAttribute('fill','hsl(331,'+s+'%,'+b+'%)');
				circle.setAttribute('cx', start.x);
				circle.setAttribute('cy', start.y);

				text.setAttribute('x', function () {
					if (percentage < 0.1) {
						return start.x - 15;
					} else if (percentage < 1) {
						return start.x - 20;
					} else {
						return start.x - 25;
					}
				}());

				text.setAttribute('y', start.y + 6);

				return ["M", start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y].join(" ");
			}

			var cx = 378;
			var cy = 812;
			var radius = 340;
			var start_angle = -95.5;
			var progress = start_angle;
			var end_angle = -95.5 + 95.5 * 2 * percentage;
			console.log(end_angle);

			function step() {
				window.requestAnimationFrame(step);
				if (progress <= end_angle) {
					// window.requestAnimationFrame( step );
					el.setAttribute("d", describeArc(cx, cy, radius, start_angle, progress));
					progress += 2;
				} else {
					el.setAttribute("d", describeArc(cx, cy, radius, start_angle, end_angle));
				}
			}

			step();
		}
	}
};

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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(59),
  /* scopeId */
  "data-v-290f98f6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(32)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  "data-v-3d3da879",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(31)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(61),
  /* scopeId */
  "data-v-3d1e554a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(40)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(70),
  /* scopeId */
  "data-v-cf36a976",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(34)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(64),
  /* scopeId */
  "data-v-51b16e57",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(58),
  /* scopeId */
  "data-v-27c23e72",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(66),
  /* scopeId */
  "data-v-7836f178",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(41)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(71),
  /* scopeId */
  "data-v-d272b0ba",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(37)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(67),
  /* scopeId */
  "data-v-7b74c886",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(42)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(72),
  /* scopeId */
  "data-v-e84d14f0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(33)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(63),
  /* scopeId */
  "data-v-48c1c997",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(39)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(69),
  /* scopeId */
  "data-v-8f3e12b8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(60),
  /* scopeId */
  "data-v-2d416551",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(65),
  /* scopeId */
  "data-v-6e9f1f6b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(68),
  /* scopeId */
  "data-v-82e3bac0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 58 */
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
/* 59 */
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
  }, [_c('mask-download'), (_vm.meta.inWeibo) ? _c('mask-weibo') : _vm._e(), _c('mask-wechat'), _c('page-entry'), _c('page-main')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.done === true),
      expression: "done===true"
    }],
    staticClass: "PartDone"
  }, [(_vm.user.loggedIn && _vm.user.donated > 0) ? _c('div', {
    staticClass: "line"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatar
    }
  })]), _c('div', {
    staticClass: "p0"
  }, [_vm._v("\n      " + _vm._s(_vm.meta.share ? _vm.name_sliced : '我') + "为农家书屋捐出阅读时长"), _c('span', [_vm._v(_vm._s(_vm.user.donated))]), _vm._v("分钟\n    ")])]) : _vm._e(), _c('img', {
    staticClass: "torch",
    attrs: {
      "src": _vm.img + '/main/torch.png'
    }
  }), _c('div', {
    staticClass: "text"
  }, [_c('img', {
    staticClass: "text_qq",
    attrs: {
      "src": _vm.img + '/main/text_qq.png'
    }
  }), _c('img', {
    staticClass: "text_farm",
    attrs: {
      "src": _vm.img + '/main/text_farm.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'SHOW',
          what: 'mask_house'
        })
      }
    }
  }), _c('div', {
    staticClass: "text_num"
  }, [_vm._v("\n      捐" + _vm._s(_vm.donated.books) + "\n    ")]), _c('img', {
    staticClass: "text_books",
    attrs: {
      "src": _vm.img + '/main/text_books.png'
    }
  })]), _c('img', {
    staticClass: "text_rest",
    attrs: {
      "src": _vm.img + '/main/text_rest.png'
    }
  }), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.meta.share),
      expression: " meta.share "
    }],
    staticClass: "btn_to_read",
    attrs: {
      "src": _vm.img + '/main/btn_to_read.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_BOOKSHELF'
        })
      }
    }
  }), _c('img', {
    staticClass: "logo",
    attrs: {
      "src": _vm.img + '/main/logo.png'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 61 */
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
/* 62 */
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
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(!_vm.meta.share && _vm.done === false) ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.stage.current === 0),
      expression: " stage.current===0 "
    }],
    staticClass: "PageEntry",
    style: ('background-image:url(' + _vm.img + '/main/bg_entry.png);background-size:100% auto;')
  }, [_c('img', {
    staticClass: "text_entry",
    attrs: {
      "src": _vm.img + '/main/text_entry.png'
    }
  }), _c('img', {
    staticClass: "btn_join",
    attrs: {
      "src": _vm.img + '/main/btn_join.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'CHANGE_MAIN',
          to: 1
        })
      }
    }
  })]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 64 */
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
/* 65 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Rules"
  }, [_c('div', {
    staticClass: "rContent"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("- 活动规则 -")]), _c('div', {
    staticClass: "text"
  }, [_vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("5.")]), _vm._v("本活动最终解释权归QQ阅读所有" + _vm._s(_vm.meta.platform === 'ios' ? '，与苹果公司无关' : '') + "。")])]), _c('img', {
    staticClass: "logo",
    attrs: {
      "src": _vm.img + '/main/logo.png'
    }
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("1.")]), _vm._v("活动时间：4月23日-5月1日。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2.")]), _vm._v("用户每阅读30分钟可捐1000字，字数最终累计成图书捐赠给农家书屋公益项目。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("3.")]), _vm._v("活动期间，大神与您共同读书，大神捐赠字数同样用于公益事业。")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("4.")]), _vm._v("活动期间每名用户参与次数不限。")])
}]}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CanvasCounter"
  }, [_c('canvas', {
    ref: "canvas",
    attrs: {
      "unselectable": "on",
      "width": "512",
      "height": "74"
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 67 */
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
    staticClass: "MaskDonated",
    on: {
      "touchmove": _vm.touchmove
    }
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_c('img', {
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/main/close.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_donated'
        })
      }
    }
  }), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\r\n\t\t\t\t\t\t" + _vm._s(_vm.user.title) + "\r\n\t\t\t\t\t")]), _c('p', {
    staticClass: "p2"
  }, [_c('img', {
    staticClass: "icon_clock",
    attrs: {
      "src": _vm.img + '/main/icon_clock.png'
    }
  }), _c('span', [_vm._v("已捐时长")])]), _c('p', {
    staticClass: "p3"
  }, [_c('span', [_vm._v(_vm._s(Math.floor(_vm.user.donated)))]), _vm._v("分钟≈"), _c('span', [_vm._v(_vm._s(Math.floor(Math.floor(_vm.user.donated) * (1000 / 30))))]), _vm._v("字\r\n\t        ")]), _c('div', {
    staticClass: "pink"
  }, [_c('img', {
    staticClass: "hearts",
    attrs: {
      "src": _vm.img + '/main/hearts.png'
    }
  })])])])])])])
},staticRenderFns: []}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "SvgStrokeCircle"
  }, [_c('svg', {
    attrs: {
      "viewBox": "0,0,750,1000",
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
      "stop-color": "#ffa174",
      "offset": "0%"
    }
  }), _c('stop', {
    attrs: {
      "stop-color": "#d6607b",
      "offset": "41.7610013%"
    }
  }), _c('stop', {
    attrs: {
      "stop-color": "#da5ba2",
      "offset": "78.6870217%"
    }
  }), _c('stop', {
    attrs: {
      "stop-color": "#e362bc",
      "offset": "100%"
    }
  })], 1)], 1), _c('path', {
    attrs: {
      "id": "arc1",
      "fill": "none",
      "stroke": "#00BCD4",
      "stroke-width": "20"
    }
  }), _c('circle', {
    staticClass: "circle"
  }, [_c('text', {
    staticClass: "texttt",
    attrs: {
      "x": "0",
      "y": "0"
    }
  }, [_vm._v("100%")])]), _c('text', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.percent <= 125 ? _vm.percent : 125) + "%")])])])
},staticRenderFns: []}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.stage.current === 1),
      expression: "stage.current===1"
    }],
    staticClass: "PageMain"
  }, [_c('mask-house'), _c('mask-donated'), _c('div', {
    staticClass: "header",
    style: ('background-image:url(' + _vm.img + '/main/bg_0.png);background-size:100% auto;')
  }, [_c('svg-stroke-circle'), _c('canvas-counter'), _c('p', {
    staticClass: "books_length"
  }, [_vm._v("\n      " + _vm._s(_vm.donated.books)), _c('span', [_vm._v("本书")])]), _c('p', {
    staticClass: "explaination"
  }, [_vm._v("\n      （1本书≈600000字）\n    ")]), _c('div', {
    staticClass: "to_house",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'SHOW',
          what: 'mask_house'
        })
      }
    }
  })], 1), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.done === false),
      expression: " done===false "
    }],
    staticClass: "undone"
  }, [_c('div', {
    staticClass: "text"
  }, [_c('img', {
    staticClass: "text_qq",
    attrs: {
      "src": _vm.img + '/main/text_qq.png'
    }
  }), _c('img', {
    staticClass: "text_farm",
    attrs: {
      "src": _vm.img + '/main/text_farm.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'SHOW',
          what: 'mask_house'
        })
      }
    }
  }), _c('div', {
    staticClass: "text_num"
  }, [_vm._v("\n        捐10000+\n      ")]), _c('img', {
    staticClass: "text_books",
    attrs: {
      "src": _vm.img + '/main/text_books.png'
    }
  })]), (!_vm.meta.share) ? _c('div', {
    staticClass: "frame",
    style: ('background-image:url(' + _vm.img + '/main/frame.png);background-size:100% auto;background-repeat:no-repeat;')
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatar
    }
  })]), _c('div', {
    staticClass: "after"
  }, [_c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.user.loggedIn),
      expression: " !user.loggedIn "
    }],
    staticClass: "p0"
  }, [_vm._v("QQ阅读邀你一起捐书")]), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.user.loggedIn),
      expression: " user.loggedIn "
    }],
    staticClass: "p0"
  }, [_vm._v(_vm._s(_vm.name_sliced) + "，QQ阅读邀你一起捐书")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("每阅读30分钟，QQ阅读捐出1000字")]), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.user.loggedIn),
      expression: " !user.loggedIn "
    }],
    staticClass: "p_to_login",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_LOGIN'
        })
      }
    }
  }, [_vm._v("登录查看阅读时长 >")]), (_vm.user.loggedIn) ? _c('p', {
    staticClass: "p2"
  }, [_c('img', {
    staticClass: "icon_clock",
    attrs: {
      "src": _vm.img + '/main/icon_clock.png'
    }
  }), _c('span', [_vm._v("阅读时长")])]) : _vm._e(), (_vm.user.loggedIn) ? _c('p', {
    staticClass: "p3"
  }, [_c('span', [_vm._v(_vm._s(Math.floor(_vm.user.time_span)))]), _vm._v("分钟≈"), _c('span', [_vm._v(_vm._s(Math.floor(Math.floor(_vm.user.time_span) * (1000 / 30))))]), _vm._v("字\n        ")]) : _vm._e(), (_vm.user.loggedIn) ? _c('p', {
    staticClass: "p4",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'SHOW',
          what: 'mask_donated'
        })
      }
    }
  }, [_vm._v("\n          已捐时长 >\n        ")]) : _vm._e()])]) : _vm._e(), (_vm.meta.share) ? _c('div', {
    staticClass: "frame_small",
    style: ('background-image:url(' + _vm.img + '/main/frame_small.png);background-size:100% auto;background-repeat:no-repeat;')
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatar
    }
  })]), _c('div', {
    staticClass: "after"
  }, [_c('p', {
    staticClass: "p0"
  }, [_vm._v("我在QQ阅读为农家书屋捐书")]), _c('p', {
    staticClass: "p2"
  }, [_c('img', {
    staticClass: "icon_clock",
    attrs: {
      "src": _vm.img + '/main/icon_clock.png'
    }
  }), _c('span', [_vm._v("已捐时长")])]), _c('p', {
    staticClass: "p3"
  }, [_c('span', [_vm._v(_vm._s(_vm.user.donated))]), _vm._v("分钟≈"), _c('span', [_vm._v(_vm._s(Math.floor(_vm.user.donated * (1000 / 30))))]), _vm._v("字\n        ")])])]) : _vm._e(), _c('div', {
    staticClass: "frame",
    style: ('background-image:url(' + _vm.img + '/main/frame.png);background-size:100% auto;background-repeat:no-repeat;')
  }, [_c('div', {
    staticClass: "god"
  }, [_c('img', {
    staticClass: "god_avatar",
    attrs: {
      "src": _vm.img + '/main/gods/' + _vm.god.id + '.png'
    }
  }), _c('p', {
    staticClass: "p0"
  }, [_vm._v(_vm._s(_vm.god.name) + "大神陪你阅读，与你一起捐书")]), _c('p', {
    staticClass: "p2"
  }, [_c('img', {
    staticClass: "icon_clock",
    attrs: {
      "src": _vm.img + '/main/icon_clock.png'
    }
  }), _c('span', [_vm._v("已捐时长")])]), _c('p', {
    staticClass: "p3"
  }, [_c('span', [_vm._v(_vm._s(_vm.god.donated))]), _vm._v("分钟≈"), _c('span', [_vm._v(_vm._s(Math.floor(_vm.god.donated / 30 * 1000)))]), _vm._v("字\n        ")])])]), _c('img', {
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
  }), _c('rules')], 1), _c('part-done'), _c('fixed-footer')], 1)
},staticRenderFns: []}

/***/ }),
/* 70 */
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
/* 71 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "FooterFixed"
  }, [(!_vm.meta.share && _vm.done === false) ? _c('div', {
    staticClass: "fixed"
  }, [(!_vm.user.loggedIn) ? _c('img', {
    staticClass: "btn_to_login",
    attrs: {
      "src": _vm.img + '/main/btn_to_login.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_LOGIN'
        })
      }
    }
  }) : _vm._e(), (_vm.user.loggedIn && !_vm.green) ? _c('div', {
    staticClass: "btn_disabled",
    style: ('background-image:url(' + _vm.img + '/main/btn_disabled.png);background-size:100% auto;')
  }, [_vm._v("\n\t\t\t再阅读" + _vm._s(30 - (_vm.user.time_span - _vm.user.donated)) + "分钟可捐\n\t\t")]) : _vm._e(), (_vm.user.loggedIn && _vm.green) ? _c('img', {
    staticClass: "btn_donate",
    attrs: {
      "src": _vm.img + '/main/btn_donate.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'DONATE'
        })
      }
    }
  }) : _vm._e(), _c('img', {
    staticClass: "btn_share",
    attrs: {
      "src": _vm.img + '/main/btn_share.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'INVITE'
        })
      }
    }
  })]) : _vm._e(), (!_vm.meta.share && _vm.done === true) ? _c('div', {
    staticClass: "fixed"
  }, [_c('img', {
    staticClass: "btn_fruit",
    attrs: {
      "src": _vm.img + '/main/btn_fruit.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'INVITE'
        })
      }
    }
  })]) : _vm._e(), (_vm.meta.share && _vm.done === false) ? _c('div', {
    staticClass: "fixed"
  }, [_c('img', {
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
  })]) : _vm._e(), (_vm.meta.share && _vm.done === true) ? _c('div', {
    staticClass: "fixed"
  }, [_c('img', {
    staticClass: "btn_pass",
    attrs: {
      "src": _vm.img + '/main/btn_pass.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'SHOW',
          what: 'mask_wechat'
        })
      }
    }
  })]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 72 */
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
    staticClass: "MaskHouse",
    on: {
      "touchmove": _vm.touchmove
    }
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_c('img', {
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/main/close.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_house'
        })
      }
    }
  }), _c('div', {
    staticClass: "title"
  }, [_vm._v("\r\n\t\t\t\t\t农家书屋\r\n\t\t\t\t")]), _c('p', {
    staticClass: "p0"
  }, [_vm._v("\r\n\t\t\t\t\t农家书屋，是为满足农民文化需要，在行政村建立的、农民自己管理的、能提供农民实用的书报刊和音像电子产品阅读视听条件的公益性文化服务设施。解决农民群众“买书难、借书难、看书难”的问题，保障农民群众基本文化权益。\r\n\t\t\t\t")]), _c('p', {
    staticClass: "p0"
  }, [_vm._v("\r\n\t\t\t\t  QQ阅读心系“全民阅读”，将于2017年4月23日世界读书日当天，联合湖南新闻出版广电局和芒果V基金，现场向湖南省农家书屋项目捐赠图书10万册，并号召大家“益起阅读”。活动期间，根据QQ阅读用户的阅读时长，捐赠相应数量的图书，开启全国农家书屋捐书公益活动的序幕。\r\n\t\t\t\t")])])])])])
},staticRenderFns: []}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);