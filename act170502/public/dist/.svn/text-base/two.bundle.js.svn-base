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
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rem_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rem_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__rem_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debugger_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debugger_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__debugger_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_scss__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_transition_less__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_transition_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vue_transition_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_index_less__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__animations_index_less__);


//import './config.js';




/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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

function mapState(arr) {
  return arr.map(function (a) {
    return function () {
      return store.state[a];
    };
  });
}

Vix.install = install;
Vix.createStore = createStore;
// console.log(Vix)
/* harmony default export */ __webpack_exports__["a"] = Vix;

/***/ }),
/* 5 */
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
    id: '170502',
    act_f: '170502',
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
  TO_PAGE_MAIN: function TO_PAGE_MAIN(_ref17, action) {
    var state = _ref17.state,
        dispatch = _ref17.dispatch,
        getters = _ref17.getters;

    dispatch({
      type: 'TO_PAGE',
      href: getters.href_main
    });
  },
  TO_PAGE_TOTAL: function TO_PAGE_TOTAL(_ref18, action) {
    var state = _ref18.state,
        dispatch = _ref18.dispatch,
        getters = _ref18.getters;

    dispatch({
      type: 'TO_PAGE',
      href: getters.href_total
    });
  },
  TO_CONTACT: function TO_CONTACT(_ref19, action) {
    var state = _ref19.state,
        dispatch = _ref19.dispatch;

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
  TO_CHARGE: function TO_CHARGE(_ref20, action) {
    var state = _ref20.state,
        dispatch = _ref20.dispatch,
        getters = _ref20.getters;

    Local.doCharge('act', true, '');
  },
  TO_BOOK: function TO_BOOK(_ref21, action) {
    var state = _ref21.state,
        dispatch = _ref21.dispatch;

    if (!state.share) {

      ABook.gotoDetail(action.bid);
    } else {
      dispatch({ type: 'TO_APP' });
    }
  },
  TO_READ: function TO_READ(_ref22, action) {
    var state = _ref22.state,
        dispatch = _ref22.dispatch;

    Local.$toRead(action.bid);
  },
  TO_ZHUAN_TI: function TO_ZHUAN_TI(_ref23, action) {
    var state = _ref23.state,
        dispatch = _ref23.dispatch;

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
  TO_LISTEN_BOOK: function TO_LISTEN_BOOK(_ref24, action) {
    var state = _ref24.state,
        dispatch = _ref24.dispatch;

    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'toListen');
      location.href = 'uniteqqreader://nativepage/client/listenpage?mediaId=90001027';
    }
  },
  TO_BOOKSHELF: function TO_BOOKSHELF(_ref25, action) {
    var state = _ref25.state,
        dispatch = _ref25.dispatch;

    location.href = 'uniteqqreader://nativepage/client/bookshelf';
  },
  TO_ACCOUNT: function TO_ACCOUNT(_ref26, action) {
    var state = _ref26.state,
        dispatch = _ref26.dispatch;

    location.href = state.meta.platform === 'adr' ? 'uniteqqreader://nativepage/getAcctInfo' : 'uniteqqreader://nativepage/account/index';
  },
  CLOSE_WINDOW: function CLOSE_WINDOW(_ref27, action) {
    var state = _ref27.state,
        dispatch = _ref27.dispatch;

    Local.closePage();
  },
  SET_ICON: function SET_ICON(_ref28, action) {
    var state = _ref28.state,
        dispatch = _ref28.dispatch,
        getters = _ref28.getters;

    Local.$setIconForShareing(getters.share_href, getters.share_thumb, state.conf.share_title, state.conf.share_desc);
  },
  SHARE: function SHARE(_ref29, action) {
    var state = _ref29.state,
        dispatch = _ref29.dispatch,
        getters = _ref29.getters;

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
  SET_SECOND_SHARING: function SET_SECOND_SHARING(_ref30, action) {
    var state = _ref30.state,
        dispatch = _ref30.dispatch,
        getters = _ref30.getters;

    sns.share({
      url: location.href,
      cover: getters.share_thumb,
      title: state.conf.share_title,
      desc: state.conf.share_desc
    }, '111');
    // the second argument '111' is essential or an error would be thrown
  },
  TO_APP: function TO_APP(_ref31, action) {
    var state = _ref31.state,
        dispatch = _ref31.dispatch,
        getters = _ref31.getters;

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
  TO_DOWNLOAD: function TO_DOWNLOAD(_ref32, action) {
    var state = _ref32.state,
        dispatch = _ref32.dispatch;

    bnative.downLoad('10003531');
  },
  REPLAY: function REPLAY(_ref33, action) {
    var state = _ref33.state,
        dispatch = _ref33.dispatch;

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
  ADD_TO_SHELF: function ADD_TO_SHELF(_ref34, action) {
    var state = _ref34.state,
        dispatch = _ref34.dispatch;


    Local.addToShelfBooks(JSON.stringify([action.book]));
    // Local.$addToShelf( action.book );
    // };
  },
  SHOW: function SHOW(_ref35, action) {
    var state = _ref35.state,
        dispatch = _ref35.dispatch;

    state[action.what].show = true;
  },
  HIDE: function HIDE(_ref36, action) {
    var state = _ref36.state,
        dispatch = _ref36.dispatch;

    state[action.what].show = false;
  }
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators, getters: getters };

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
  gender: 99,

  deal: {
    inProcessing: false,
    bought: false
  },
  bills: 0,
  coins: 0,
  priceOriginal: 0,
  price: -1,

  intro: '--',
  books: [],

  book_five: {
    bid: 0,
    cover: '',
    title: '----',
    author: '----',
    intro: '5元钱在今天能买什么？3个鸡蛋，1瓶加多宝，或者也可以买到9位知名作家数百个日夜的心血结晶。3000万字，只需5元即可全部购买。3000万字，只需5元即可全部购买。3000万字，只需5元即可全部购买。'
  }

};

var getters = {
  enoughMoney: function enoughMoney(_ref) {
    var state = _ref.state;

    return state.bills + state.coins >= state.price * 100;
  }
};

var mutators = {
  INIT_TWO: function INIT_TWO(_ref2, action) {
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

        state.page = 'ready';
      } else {
        Local.forceLog(common.param('act_f'), 'two_enter_gender' + state.gender);
        Local.reqaObj(common.server() + ('pkg170501/batchInit?topic=' + state.conf.topic), function (data) {
          console.log(data);

          if (data.code === -4) {
            state.page = 'over';
          } else {
            state.intro = data.batchPackage.bagName;
            state.books = data.batchPackage.bookInfo;
            state.priceOriginal = Number(data.batchPackage.originalBagMoney);
            state.price = Number(data.batchPackage.discountBagMoney);
            if (data.isLogin) {
              state.user.loggedIn = true;
              state.gender = data.gender;

              state.bills = Number(data.z_money);
              state.coins = Number(data.money);
              if (data.userHasBoughtPackageId.length > 0) {
                state.deal.bought = true;
              }
            }
          }

          state.page = 'ready';
        }, [], function () {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }
  },
  INIT_FIVE: function INIT_FIVE(_ref3, action) {
    var state = _ref3.state,
        dispatch = _ref3.dispatch,
        getters = _ref3.getters;

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

        state.page = 'ready';
      } else {
        Local.forceLog(common.param('act_f'), 'five_enter_topic' + state.conf.topic);
        Local.reqaObj(common.server() + ('pkg170501/buyInit?topic=' + state.conf.topic), function (data) {
          console.log(data);

          if (data.code === -4) {
            state.page = 'over';
          } else {

            if (data.isLogin) {
              state.user.loggedIn = true;

              state.priceOriginal = Number(data.data.oriPrice);
              state.price = Number(data.data.currPrice);

              state.bills = Number(data.data.bookCoin);
              state.coins = Number(data.data.bookTicket);
              if (data.data.isBuy === 1) {
                state.deal.bought = true;
              }
              state.book_five.cover = data.data.cover;
              state.book_five.bid = data.data.bid;
              state.book_five.title = data.data.title;
              state.book_five.author = data.data.author;
              state.book_five.intro = data.data.content;
            } else {
              dispatch({
                type: 'TO_LOGIN'
              });
            }
          }

          state.page = 'ready';
        }, [], function () {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }
  },
  DO_SOMETHING: function DO_SOMETHING(_ref4, action) {
    var state = _ref4.state,
        dispatch = _ref4.dispatch,
        getters = _ref4.getters;

    // dispatch({
    //   type: 'SHOW',
    //   what: 'mask_prize'
    // })
    if (state.meta.share) {
      dispatch({
        type: 'TO_PAGE',
        href: getters.href_two
      });
    } else if (state.user.loggedIn === false) {
      dispatch({
        type: 'TO_LOGIN'
      });
    } else if (state.deal.bought === false) {
      if (state.conf.type === 'two') {
        Local.forceLog(common.param('act_f'), 'two_buy_gender' + state.gender);
      } else {
        Local.forceLog(common.param('act_f'), 'five_buy_topic' + state.conf.topic);
      }

      dispatch({
        type: 'SHOW',
        what: 'mask_confirm'
      });
    } else {
      if (state.conf.type === 'two') {
        dispatch({
          type: 'TO_BOOKSHELF'
        });
      } else {
        dispatch({
          type: 'TO_READ',
          bid: state.book_five.bid
        });
      }
    }
  },
  TO_BUY: function TO_BUY(_ref5, action) {
    var state = _ref5.state,
        dispatch = _ref5.dispatch,
        getters = _ref5.getters;

    if (getters.enoughMoney === false) {
      dispatch({
        type: 'TO_CHARGE'
      });
    } else {
      if (state.dev) {
        state.deal.bought = true;
        dispatch({
          type: 'SHOW',
          what: 'mask_prize'
        });
      } else {
        if (state.deal.inProcessing === false) {
          state.deal.inProcessing = true;

          if (state.conf.type === 'two') {
            Local.reqaObj(common.server() + ('pkg170501/batchBuy?pickId=0&topic=' + state.conf.topic), function (data) {
              console.log(data);
              if (data.code === 1) {
                state.deal.bought = true;
                dispatch({
                  type: 'SHOW',
                  what: 'mask_prize'
                });
                Local.forceLog(common.param('act_f'), 'two_success_gender' + state.gender);
              } else {}
            }, [], function () {
              Local.showToast("网络异常，请稍候重试");
            }, 1);
          } else {
            Local.reqaObj(common.server() + ('pkg170501/buy?topic=' + state.conf.topic), function (data) {
              console.log(data);
              if (data.code === 1) {
                state.deal.bought = true;
                dispatch({
                  type: 'SHOW',
                  what: 'mask_prize'
                });
                Local.forceLog(common.param('act_f'), 'five_success_topic' + state.conf.topic);
              } else {}
            }, [], function () {
              Local.showToast("网络异常，请稍候重试");
            }, 1);
          }
        }
      }
    }
  },
  INIT_TEST_0: function INIT_TEST_0(_ref6, action) {
    var state = _ref6.state,
        dispatch = _ref6.dispatch;

    window.CLOSE_WINDOW = function () {
      console.log('CLOSE_WINDOW');
      dispatch({
        type: 'CLOSE_WINDOW'
      });
      return true;
    };
    state.page = 'ready';
  },
  INIT_TEST_1: function INIT_TEST_1(_ref7, action) {
    var state = _ref7.state,
        dispatch = _ref7.dispatch;

    window.CLOSE_WINDOW = function () {
      console.log('CLOSE_WINDOW');
      dispatch({
        type: 'CLOSE_WINDOW'
      });
      return true;
    };
    state.page = 'ready';
  }
  // INIT_SHARE ({state,dispatch},action) {
  //   var share_init_url = common.server()+`pkg${state.conf.id}/shareInit?u=${common.param('u')}&p=${common.param('p')}`+'&lot='+common.param('lot');
  //   console.log( '[share_init_url] '+share_init_url );
  //   Local.reqaObj( share_init_url, function(data) {
  //     console.log(data);

  //     if( data.code===-4 ){
  //       state.page = 'over';
  //     }else{
  //       state.stage.current = 1;

  //       state.donated.minutes = data.totalTime;
  //       if( data.totalTime>=124894590 ){
  //         state.done = true;
  //         state.stage.current = 1;
  //       };
  //       state.donated.books = data.totalDonateBooks;

  //       state.god.id = data.dashenId;
  //       state.god.name = data.dashenName;
  //       state.god.donated = data.dashenDonate;

  //       state.user.loggedIn = true;
  //       state.user.name = data.userNick;
  //       state.user.avatar = data.userAvor;
  //       state.user.time_span = data.readTime;
  //       state.user.donated = data.hasDonate;

  //       if( common.param('lot')==='3' ){
  //         state.user.name = '游客';
  //         state.user.avatar = './img/common/default.jpg';
  //       }

  //       state.page = 'ready';
  //     }
  //   }, [], function() {
  //     Local.showToast("网络异常，请稍候重试");
  //   }, 1);

  // },
  // CHANGE_MAIN ({state,dispatch},action) {
  //   console.log('[CHANGE to] '+action.to)
  //   state.stage.current = action.to;
  // },
  // DONATE ({state,dispatch},action) {
  //   if( state.dev ){
  //     var donated = state.user.time_span - state.user.time_span%30;
  //     state.user.donated = donated;
  //     state.user.title = '捐书成功';
  //     state.mask_donated.show = true;
  //   }else{
  //     Local.forceLog( common.param('act_f'),`${state.conf.id}_btnDonate` );
  //     Local.reqaObj( common.server()+`pkg${state.conf.id}/pick`, function(data) {
  //       console.log('[data pick] '+JSON.stringify(data));
  //       if( data.code===1 ){
  //         var donated = state.user.time_span - state.user.time_span%30;
  //         state.user.donated = donated;
  //         state.user.title = '捐书成功';
  //         state.mask_donated.show = true;
  //       }else{
  //         Local.showToast( data.msg );
  //       }
  //     }, [], function() {
  //       Local.showToast("网络异常，请稍候重试");
  //     }, 1);
  //   }
  // },
  // INVITE ({state,dispatch},action) {
  //   if( !state.user.loggedIn ){
  //     dispatch({
  //       type: 'TO_LOGIN'
  //     })
  //   }else{
  //     Local.forceLog( common.param('act_f'),`${state.conf.id}_btnShare` );
  //     dispatch({
  //       type: 'SHARE'
  //     })
  //   }
  // }

};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators, getters: getters };

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vix_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_js__ = __webpack_require__(8);





Vue.use(__WEBPACK_IMPORTED_MODULE_0__Vix_js__["a" /* default */]);

var store = __WEBPACK_IMPORTED_MODULE_0__Vix_js__["a" /* default */].createStore([__WEBPACK_IMPORTED_MODULE_1__base_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__main_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__test_js__["a" /* default */]]);

/* harmony default export */ __webpack_exports__["a"] = store;

/***/ }),
/* 8 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 10 */
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
/* 11 */
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
/* 12 */
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

exports.default = {
	computed: {
		conf: function conf() {
			return this.$store.state.conf;
		}
	},
	methods: {
		go_to: function go_to() {
			if (this.conf.type === 'two') {
				this.$store.dispatch({
					type: 'TO_BOOKSHELF'
				});
			} else {
				this.$store.dispatch({
					type: 'TO_READ',
					bid: this.$store.state.book_five.bid
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

exports.default = {
	props: {},
	computed: {
		img: function img() {
			return this.$store.state.img;
		}
	},
	data: function data() {
		return {};
	}
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

module.exports = {
	computed: {
		coins: function coins() {
			return this.$store.state.coins;
		},
		bills: function bills() {
			return this.$store.state.bills;
		},
		price: function price() {
			return this.$store.state.price;
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
					type: 'TO_BUY'
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
//
//
//
//
//
//

exports.default = {
	components: {
		ButtonRaised: __webpack_require__(35)
	},
	props: {},
	data: function data() {
		return {};
	},
	computed: {
		conf: function conf() {
			return this.$store.state.conf;
		},
		img: function img() {
			return this.$store.state.img;
		},
		mask_prize: function mask_prize() {
			return this.$store.state.mask_prize;
		}
	},
	methods: {
		touchmove: function touchmove(e) {
			e.stopPropagation();
		}
	}
};

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
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  "data-v-9defff98",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(21)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  "data-v-2521cb80",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  "data-v-9523cf00",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  "data-v-521478d2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(26)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(44),
  /* scopeId */
  "data-v-70431aec",
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
  "data-v-71db7edc",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  "data-v-3a7fc716",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  "data-v-2de87212",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  "data-v-4691a638",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 39 */
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
/* 40 */
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
    staticClass: "top"
  }, [_c('p', {
    staticClass: "p0"
  }, [_vm._v(_vm._s(_vm.conf.type === 'two' ? '超值好书打包买' : '好书抢购倒计时'))]), _c('p', {
    staticClass: "p1"
  }, [_vm._v(_vm._s(_vm.conf.type === 'two' ? '9本优惠购' : ('《' + _vm.book_five.title + '》')))])]), _c('div', {
    staticClass: "middle"
  }, [_c('p', {
    staticClass: "p0"
  }, [_c('span', {
    staticClass: "small"
  }, [_vm._v("价格：")]), _c('span', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.price * 100))]), _c('span', {
    staticClass: "small"
  }, [_vm._v("书币")])]), _c('p', {
    staticClass: "p1"
  }, [_c('span', {
    staticClass: "small"
  }, [_vm._v("余额：")]), _c('span', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.coins))]), _c('span', {
    staticClass: "small"
  }, [_vm._v("书币+")]), _c('span', {
    staticClass: "big"
  }, [_vm._v(_vm._s(_vm.bills))]), _c('span', {
    staticClass: "small"
  }, [_vm._v("书券")])])]), _c('div', {
    staticClass: "ButtonRaisedFive",
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.enoughMoney ? '确认购买' : '余额不足，充值购买') + "\r\n\t\t\t")])])])])
},staticRenderFns: []}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "IconArrows"
  }, [_c('img', {
    staticClass: "arrow arrow1",
    attrs: {
      "src": _vm.img + 'common/arrow.png'
    }
  }), _c('img', {
    staticClass: "arrow arrow2",
    attrs: {
      "src": _vm.img + 'common/arrow.png'
    }
  }), _c('img', {
    staticClass: "arrow arrow3",
    attrs: {
      "src": _vm.img + 'common/arrow.png'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_prize.show),
      expression: " mask_prize.show "
    }],
    staticClass: "MaskPrize",
    on: {
      "touchmove": _vm.touchmove
    }
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "content_outer"
  }, [(_vm.conf.type === 'two') ? _c('img', {
    staticClass: "gift",
    attrs: {
      "src": _vm.img + '/main/gift.png'
    }
  }) : _vm._e(), (_vm.conf.type === 'five') ? _c('img', {
    staticClass: "crown",
    attrs: {
      "src": _vm.img + '/main/crown.png'
    }
  }) : _vm._e(), _c('img', {
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/main/close.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_prize'
        })
      }
    }
  }), _c('div', {
    staticClass: "content_inner"
  }, [_c('p', {
    staticClass: "p0"
  }, [_vm._v(_vm._s(_vm.conf.type === 'two' ? '抢购成功' : '回禀陛下'))]), _c('p', {
    staticClass: "p1"
  }, [_vm._v(_vm._s(_vm.conf.type === 'two' ? '买了这么多好书，快去书架看看吧' : '这本书已加入书架，请您阅览。'))]), _c('button-raised')], 1)])])])])
},staticRenderFns: []}

/***/ }),
/* 43 */
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
    staticClass: "ButtonRaised",
    on: {
      "click": _vm.go_to
    }
  }, [_vm._v("\n\t" + _vm._s(_vm.conf.type === 'two' ? '去书架看书' : '待朕一阅') + "\n")])
},staticRenderFns: []}

/***/ }),
/* 46 */
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

exports.default = {
	props: {},
	components: {
		IconArrows: __webpack_require__(36)
	},
	data: function data() {
		return {};
	},
	computed: {
		deal: function deal() {
			return this.$store.state.deal;
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
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(49)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  "data-v-81c1eee6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "FooterFixed"
  }, [_c('div', {
    staticClass: "fixed"
  }, [_c('div', {
    staticClass: "btn_buy",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'DO_SOMETHING'
        })
      }
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.deal.bought ? '去书架看书' : '我要抢购') + "\n\t\t\t\t"), _c('icon-arrows')], 1)])])
},staticRenderFns: []}

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_common_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store_js__ = __webpack_require__(7);




var root = new Vue({
	el: '#root',
	store: __WEBPACK_IMPORTED_MODULE_1__store_store_js__["a" /* default */],
	components: {
		App: __webpack_require__(69)
	},
	template: '<app></app>'
});

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
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

exports.default = {
	components: {
		MaskLoading: __webpack_require__(31),
		MaskDownload: __webpack_require__(30),
		MaskOver: __webpack_require__(32),
		MaskWeibo: __webpack_require__(34),
		MaskWechat: __webpack_require__(33),

		FixedFooter: __webpack_require__(50),
		MaskConfirm: __webpack_require__(37),
		MaskPrize: __webpack_require__(38)
	},
	data: function data() {
		return {};
	},
	computed: {
		intro: function intro() {
			return this.$store.state.intro;
		},
		priceOriginal: function priceOriginal() {
			return this.$store.state.priceOriginal;
		},
		price: function price() {
			return this.$store.state.price;
		},
		books: function books() {
			return this.$store.state.books;
		},
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
		this.$store.dispatch({ type: 'INIT_TWO' });
	},
	methods: {
		touchmove: function touchmove(e) {
			e.preventDefault();
		}
	}
};

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(62)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(72),
  /* scopeId */
  "data-v-0d814368",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 70 */,
/* 71 */,
/* 72 */
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
    staticClass: "main"
  }, [_c('mask-confirm'), _c('mask-prize'), _c('div', {
    staticClass: "header",
    style: ('background-image:url(' + _vm.img + '/main/header.jpg);background-size:100% auto;')
  }), _c('div', {
    staticClass: "text__",
    style: ('background-image:url(' + _vm.img + '/main/bg_middle.png);background-size:100% auto;')
  }, [_c('p', {
    staticClass: "p0"
  }, [_vm._v("\n          " + _vm._s(_vm.intro) + "\n        ")]), _c('p', {
    staticClass: "p1"
  }, [_c('span', {
    staticClass: "span0"
  }, [_vm._v("原价" + _vm._s(_vm.priceOriginal) + "元")]), _c('span', {
    staticClass: "span1"
  }, [_vm._v(" 打包活动价" + _vm._s(_vm.price) + "元")])])]), _c('div', {
    staticClass: "part_middle",
    style: ('background-image:url(' + _vm.img + '/main/bg_middle.png);background-size:100%;')
  }, [_c('div', {
    staticClass: "Showcase"
  }, _vm._l((_vm.books), function(a) {
    return _c('div', {
      staticClass: "book",
      on: {
        "click": function($event) {
          _vm.$store.dispatch({
            type: 'TO_BOOK',
            bid: a.bid
          })
        }
      }
    }, [_c('div', {
      staticClass: "part_left"
    }, [_c('img', {
      staticClass: "cover",
      attrs: {
        "src": a.cover
      }
    })]), _c('div', {
      staticClass: "part_right"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(a.title))]), _c('p', {
      staticClass: "author"
    }, [_vm._v(_vm._s(a.author))]), _c('p', {
      staticClass: "intro"
    }, [_vm._v(_vm._s(a.intro))])])])
  }))]), _c('img', {
    staticClass: "bg_bottom",
    attrs: {
      "src": _vm.img + '/main/bg_bottom.png'
    }
  }), _c('fixed-footer')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


/***/ })
/******/ ]);