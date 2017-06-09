/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cachef
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _html = document.querySelector('html');
var _body = document.querySelector('body');

// create a div and insert it into <body>
// by which we can get viewportWidth and viewportHeight
var _viewport = document.createElement('div');
_viewport.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
_body.insertBefore(_viewport, _body.firstChild);

var Manager = function () {
  function Manager() {
    _classCallCheck(this, Manager);

    this.initialized = false;
    this._callingHooks = false;

    this.drawingWidth = 750;

    this.rem = 0;
    this.viewportWidth = 0;
    this.viewportHeight = 0;
    this.viewportRatio = 0;

    this.hooks = {
      updated: []
    };
    this.init();
  }

  _createClass(Manager, [{
    key: 'init',
    value: function init() {
      var _this = this;

      if (this.initialized === false) {
        this.update();
        window.addEventListener('resize', this.update.bind(this));
        document.addEventListener('DOMContentLoaded', function () {
          _this.update();
        });
        this.initialized = true;
      } else {
        throw new Error('[soap-rem] REM is already initialized.');
      }
    }
  }, {
    key: 'setDrawingWidth',
    value: function setDrawingWidth(val) {
      if (typeof val === 'number') {
        this.drawingWidth = val;
        this.update();
      } else {
        throw new TypeError('[soap-rem] drawingWidth must be a number');
      }
    }
  }, {
    key: 'update',
    value: function update() {
      if (this._callingHooks) {
        throw new Error('You can\'t call function REM.update in the callback of function REM.on.');
      }
      // get width and height of current viewport
      _viewport.style.display = 'block';
      var w = Number(document.defaultView.getComputedStyle(_viewport).width.replace(/px/, ''));
      var h = Number(document.defaultView.getComputedStyle(_viewport).height.replace(/px/, ''));

      // Update viewportWidth, viewportHeight and viewportRatio
      this.viewportWidth = w;
      this.viewportHeight = h;
      this.viewportRatio = h / w;
      _viewport.style.display = 'none';

      // Calculate and update the value of rem
      this.rem = 100 * w / this.drawingWidth;
      _html.style.fontSize = this.rem + 'px';

      [].forEach.call(document.querySelectorAll('.rem_full_height'), function (a) {
        a.style.cssText += 'height: ' + h + 'px;';
      });

      // call the hooks
      this.callHooks('updated');

      console.debug('[soap-rem] Rem reset. Size of the viewport is ' + w + '*' + h + '.');
    }
  }, {
    key: 'on',
    value: function on(event, callback) {
      if (typeof callback === 'function') {
        this.hooks[event].push(callback);
        return this.removeHook.bind(this, this.hooks[event], callback);
      } else {
        throw new TypeError('[soap-rem] Expect the callback to be a function.');
      }
    }
  }, {
    key: 'callHooks',
    value: function callHooks(event) {
      this.hooks[event].forEach(function (hook) {
        if (typeof hook === 'function') {
          hook();
        }
      });
    }
  }, {
    key: 'removeHook',
    value: function removeHook(arr, fn) {
      var index = arr.indexOf(fn);
      arr.splice(index, 1);
    }
  }]);

  return Manager;
}();

var manager = new Manager();

var REM = {
  getRem: function getRem() {
    return manager.rem;
  },
  getViewportWidth: function getViewportWidth() {
    return manager.viewportWidth;
  },
  getViewportHeight: function getViewportHeight() {
    console.log(manager.viewportHeight);
    return manager.viewportHeight;
  },
  getValues: function getValues() {
    return {
      viewportWidth: manager.viewportWidth,
      viewportHeight: manager.viewportHeight,
      viewportRatio: manager.viewportRatio,
      rem: manager.rem
    };
  },

  setDrawingWidth: manager.setDrawingWidth.bind(manager),
  update: manager.update.bind(manager),
  on: manager.on.bind(manager)
};

/* harmony default export */ __webpack_exports__["default"] = REM;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_common_js__ = __webpack_require__(3);
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rem_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debugger_js__ = __webpack_require__(4);
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
/* 4 */
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
    act_f: '170507',
    share_title: '白鹿原',
    share_desc: '白鹿原'
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


  // percent ({state,getters}) {
  //   return Math.floor( state.donated.minutes/100000000*100 );
  // },

  chars_total: function chars_total(_ref2) {
    var state = _ref2.state,
        getters = _ref2.getters;

    return Math.floor(Math.floor(state.user.time_span) * (1000 / 30));
  },
  chars_donated: function chars_donated(_ref3) {
    var state = _ref3.state,
        getters = _ref3.getters;

    return Math.floor(Math.floor(state.user.donated) * (1000 / 30));
  },
  time_left: function time_left(_ref4) {
    var state = _ref4.state,
        getters = _ref4.getters;

    return state.user.time_span - state.user.donated;
  },
  pre: function pre(_ref5) {
    var state = _ref5.state,
        getters = _ref5.getters;

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
  pre_https: function pre_https(_ref6) {
    var state = _ref6.state,
        getters = _ref6.getters;

    if (state.meta.inTest) {
      return 'https://ptsolomo.reader.qq.com/book_res/event';
    } else {
      return 'https://yuedu.reader.qq.com/event';
    }
  },
  share_href: function share_href(_ref7) {
    var state = _ref7.state,
        getters = _ref7.getters;

    return getters.pre_https + '/act' + state.conf.id + '/public/main_share.html?tf=1&act_f=' + state.conf.act_f;
  },
  share_thumb: function share_thumb(_ref8) {
    var state = _ref8.state,
        getters = _ref8.getters;

    return getters.pre_https + '/act' + state.conf.id + '/public/img/main/thumb.jpg';
  },
  href_main: function href_main(_ref9) {
    var state = _ref9.state,
        getters = _ref9.getters;

    return getters.pre + '/act' + state.conf.id + '/public/main' + (state.meta.platform === 'adr' ? '' : '_ios') + '.html?act_f=' + state.conf.act_f;
  },
  href_two: function href_two(_ref10) {
    var state = _ref10.state,
        getters = _ref10.getters;

    return getters.pre + '/act' + state.conf.id + '/public/two.html?act_f=' + state.conf.act_f;
  }
};

var mutators = {
  TO_LOGIN: function TO_LOGIN(_ref11, action) {
    var state = _ref11.state;

    if (state.dev) {
      state.loggedIn = true;
      state.user.loggedIn = true;
    } else {
      // Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_login` );
      Local.login();
    };
  },
  TO_PAGE: function TO_PAGE(_ref12, action) {
    var state = _ref12.state,
        dispatch = _ref12.dispatch,
        getters = _ref12.getters;

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
  TO_ROOKIE_ZONE: function TO_ROOKIE_ZONE(_ref13, action) {
    var state = _ref13.state,
        dispatch = _ref13.dispatch,
        getters = _ref13.getters;

    console.log('rookie');
    location.href = 'uniteqqreader://nativepage/client/rookiezone';
  },
  TO_MORE_GIFTS: function TO_MORE_GIFTS(_ref14, action) {
    var state = _ref14.state,
        dispatch = _ref14.dispatch,
        getters = _ref14.getters;

    var href;
    if (state.meta.platform === 'adr') {
      href = 'http://iyuedu.qq.com/common/common/privilegeV2.html';
    } else {
      href = 'https://yuedu.reader.qq.com/common/common/privilegeV2.html';
    }
    // location.href = 'uniteqqreader://webpage/.../todaytask.html';
    dispatch({
      type: 'TO_PAGE',
      href: href
    });
  },
  TO_UPGRADE: function TO_UPGRADE(_ref15, action) {
    var state = _ref15.state,
        dispatch = _ref15.dispatch,
        getters = _ref15.getters;

    location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.qq.reader';
  },
  TO_PAGE_MAIN: function TO_PAGE_MAIN(_ref16, action) {
    var state = _ref16.state,
        dispatch = _ref16.dispatch,
        getters = _ref16.getters;

    dispatch({
      type: 'TO_PAGE',
      href: getters.href_main
    });
  },
  TO_PAGE_TOTAL: function TO_PAGE_TOTAL(_ref17, action) {
    var state = _ref17.state,
        dispatch = _ref17.dispatch,
        getters = _ref17.getters;


    dispatch({
      type: 'TO_PAGE',
      href: getters.href_total
    });
  },
  TO_CONTACT: function TO_CONTACT(_ref18, action) {
    var state = _ref18.state,
        dispatch = _ref18.dispatch;

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
  TO_CHARGE: function TO_CHARGE(_ref19, action) {
    var state = _ref19.state,
        dispatch = _ref19.dispatch,
        getters = _ref19.getters;

    if (state.meta.platform === 'adr') {
      Local.doCharge('act', true, '');
    } else {
      Local.openrecharge();
      setTimeout(function () {
        location.href = location.href;
      }, 1000);
    }
  },
  TO_OPEN_VIP: function TO_OPEN_VIP(_ref20, action) {
    var state = _ref20.state,
        dispatch = _ref20.dispatch,
        getters = _ref20.getters;

    Local.openVip(state.user.loggedIn);
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
  TRY_SHARE: function TRY_SHARE(_ref29, action) {
    var state = _ref29.state,
        dispatch = _ref29.dispatch,
        getters = _ref29.getters;
  },
  SHARE: function SHARE(_ref30, action) {
    var state = _ref30.state,
        dispatch = _ref30.dispatch,
        getters = _ref30.getters;

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
    latest: true,

    coins: 0,
    bills: 0,

    price: 5.99,

    bought_before: false,

    bought: false,

    out: false,
    takenBefore: false,
    bills_taken: 0,

    state: '',
    canScrape: false,

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

    // function getPrice() {
    //   if (state.meta.platform === 'adr') {
    //     Local.reqaObj('http://android.reader.qq.com/v6_5/nativepage/book/detail?bid=812443', function(data) {
    //       console.log(data);
    //       var _ = data.introinfo.prices;
    //       state.data.price = Number((_.second !== '' ? _.second : _.first).replace(/元\/本/, ''));
    //       init();
    //     }, [], function() {
    //       Local.showToast("网络异常，请稍候重试");
    //     }, 1);
    //   } else {
    //     Local.reqaObj('https://newios.reader.qq.com/v6_5_1/queryintro?origin=&bid=812443&sex=0', function(data) {
    //       console.log(data);
    //       var _ = data.introInfo.prices;
    //       state.data.price = Number((_.second !== '' ? _.second : _.first).replace(/元\/本/, ''));
    //       init();
    //     }, [], function() {
    //       Local.showToast("网络异常，请稍候重试");
    //     }, 1);
    //   }
    // }

    if (state.meta.share) {
      // Local.forceLog( common.param('act_f'),`${state.conf.id}_enterShare` );
      dispatch({
        type: 'SET_SECOND_SHARING'
      });
      state.page = 'ready';
    } else {
      if (state.dev) {
        // state.data.takenBefore = true;
        // state.data.bills_taken = 123;

        // state.data.out = true;

        state.page = 'ready';
      } else {
        // dispatch({
        //   type: 'SET_ICON'
        // })
        console.log(navigator.userAgent);
        Local.forceLog(common.param('act_f'), 'enter');
        Local.reqaObj(common.server() + 'pkg170601/init', function (data) {
          console.log(data);

          if (data.code === -4) {
            state.page = 'over';
          } else {

            if (data.verok === false) {
              state.data.latest = false;
            } else {
              state.data.latest = true;
              if (data.isLogin) {
                state.user.loggedIn = true;
                // if (data.verok === false) {
                //   state.data.latest = false;
                //   // console.log(state.data.latest)
                // } else {
                //   state.data.latest = true;
                // } 

                if (data.picked > 0) {
                  state.data.takenBefore = true;
                  state.data.bills_taken = data.picked;
                } else if (data.noneleft === true) {
                  state.data.out = true;
                } else if (data.canPick === true) {}
              }
            }

            state.page = 'ready';
          }
        }, [], function () {
          Local.showToast("网络异常，请稍候重试");
        }, 1);

        // Local.forceLog( common.param('act_f'),`two_enter_gender${state.gender}` );
      }
    }
  },

  // TO_BOOK_ODE({ state, dispatch, getters }, action) {
  //   if (state.meta.share) {
  //     dispatch({
  //       type: 'TO_PAGE_MAIN'
  //     })
  //   } else {
  //     dispatch({
  //       type: 'TO_BOOK',
  //       bid: 194777
  //     })
  //   }
  // },
  TO_BUY: function TO_BUY(_ref3, action) {
    var state = _ref3.state,
        dispatch = _ref3.dispatch,
        getters = _ref3.getters;

    if (state.meta.share) {
      dispatch({
        type: 'TO_PAGE_MAIN'
      });
    } else if (state.user.loggedIn === false) {
      dispatch({
        type: 'TO_LOGIN'
      });
    } else {
      if (state.dev) {
        state.data.bought = true;
        dispatch({
          type: 'HIDE',
          what: 'mask_confirm'
        });
      } else {
        Local.forceLog(common.param('act_f'), 'btn_' + action.month);
        console.log(state.meta.platform);
        console.log(action.month);
        if (state.meta.platform === 'adr') {
          var isNew = common.param('is999');
          var href = isNew=="true"?  'uniteqqreader://nativepage/vip/openbybookcoin?month=' + action.month
              :'uniteqqreader://nativepage/vip/open';
          // console.log(href)
          location.href = href;
          // dispatch({
          //   type: 'TO_OPEN_VIP'
          // })
        } else {
          console.log(action.month);
          C.callCocoa({
            method: 'paymonthvip',
            month: action.month
          });
        }
        dispatch({
          type: 'HIDE',
          what: 'mask_confirm'
        });
      }
    }
  },

  // TO_PAY({ state, dispatch, getters }, action) {
  //   Local.reqaObj('http://allreader.3g.qq.com/common/dobuybook?bid=812443', function(data) {
  //     console.log(data);
  //     state.data.bought = true;
  //     dispatch({
  //       type: 'SHOW_MASK',
  //       case: 'failed'
  //     })
  //   }, [], function() {
  //     Local.showToast("网络异常，请稍候重试");
  //   }, 1);
  // },
  TRY_TAKE: function TRY_TAKE(_ref4, action) {
    var state = _ref4.state,
        dispatch = _ref4.dispatch,
        getters = _ref4.getters;

    console.log('This is new.');
    Local.forceLog(common.param('act_f'), 'btn_take');

    if (state.meta.share) {
      dispatch({
        type: 'TO_PAGE_MAIN'
      });
    } else if (state.user.loggedIn === false) {
      dispatch({
        type: 'TO_LOGIN'
      });
      // } else if (state.data.bought === false) {
      //   setTimeout(() => {
      //     dispatch({
      //       type: 'SHOW_MASK',
      //       case: 'failed'
      //     })
      //   }, 300)
    } else {

      if (state.dev) {
        state.data.canScrape = true;

        state.data.bills_taken = 100;
        state.data.bills_taken = -1;
        // dispatch({
        //   type: 'SHOW_MASK',
        //   case: 'success_taken'
        // })
        // dispatch({
        //   type: 'SHOW_MASK',
        //   case: 'failed_to_take'
        // })
      } else {
        console.log('pkg170601/pick');

        state.data.state = 'pending';
        Local.reqaObj(common.server() + 'pkg170601/pick', function (data) {
          console.log(data);
          if (data.code === 0) {
            state.data.canScrape = true;
            state.data.bills_taken = data.tokennumber;
          } else if (data.code === -11) {
            state.data.canScrape = true;
            state.data.bills_taken = -1;
          } else if (data.code === -12) {
            dispatch({
              type: 'SHOW_MASK',
              case: 'failed'
            });
          }
          state.data.state = '';
        }, [], function () {
          Local.showToast("网络异常，请稍候重试");
        }, 1);
      }
    }
  },
  SHOW_MASK: function SHOW_MASK(_ref5, action) {
    var state = _ref5.state,
        dispatch = _ref5.dispatch,
        getters = _ref5.getters;

    var _ = state.mask_confirm;
    _.state = action.case;
    switch (action.case) {
      case 'out':
        _.hasCross = false;
        break;
      case 'failed':
        _.hasCross = true;
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

		MaskConfirm: __webpack_require__(42),
		MaskInfo: __webpack_require__(43),
		PartTake: __webpack_require__(44),
		CanvasCard: __webpack_require__(41),
		// PanelGod: require('components/_main/PanelGod.vue'),
		RulesPlain: __webpack_require__(45)
	},
	data: function data() {
		return {};
	},
	computed: {
		name_bill: function name_bill() {
			return this.$store.getters.name_bill;
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

var _rem = __webpack_require__(1);

var _rem2 = _interopRequireDefault(_rem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  computed: {
    name_bill: function name_bill() {
      return this.$store.getters.name_bill;
    },
    data: function data() {
      return this.$store.state.data;
    },
    meta: function meta() {
      return this.$store.state.meta;
    }
  },
  mounted: function mounted() {
    var _this = this;

    var el = this.$refs.canvas;
    var rem;
    var ctx = el.getContext('2d');
    var img = new Image();
    img.src = './img/main/overlay_' + this.meta.platform + '.png';
    img.onload = function () {
      _rem2.default.update();
    };

    _rem2.default.on('updated', function () {
      rem = _rem2.default.getRem();
      el.setAttribute('width', 6.34 * rem);
      el.setAttribute('height', 1.9 * rem);

      ctx.beginPath();
      ctx.drawImage(img, 0, 0, 6.34 * rem, 1.9 * rem);
      // ctx.rect(0, 0, 6.34*rem, 1.9*rem);
      // ctx.beginPath();
      // ctx.fillStyle = 'grey';
      // ctx.rect(0, 0, el.width, el.height);
      ctx.fill();
      // ctx.globalCompositeOperation = 'destination-out';
      // el.style.cssText += `width: ${6.34*rem}px; height: ${1.9*rem}px;`;
    });
    _rem2.default.update();

    var offsetLeft = null;
    var offsetTop = null;

    function getOffset(key, el) {
      var offset = 0;
      function add(el) {
        offset += el['offset' + key];
        if (el.offsetParent) {
          add(el.offsetParent);
        }
      }
      add(el);
      return offset;
    }

    el.addEventListener('touchstart', function (e) {
      if (_this.data.state === 'pending') {
        return;
      } else if (_this.data.canScrape === false) {
        _this.$store.dispatch({
          type: 'TRY_TAKE'
        });
      } else {
        if (offsetLeft === null) {
          offsetLeft = getOffset('Left', el);
          offsetTop = getOffset('Top', el);
        }
        // console.log(offsetTop)
        // console.log(e.changedTouches[0])
        ctx.globalCompositeOperation = 'destination-out';
        var x = e.changedTouches[0].pageX - offsetLeft;
        var y = e.changedTouches[0].pageY - offsetTop;
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(x, y, 0.5 * rem, 0, Math.PI * 2, true);
        ctx.fill();
      }
    });
    el.addEventListener('touchmove', function (e) {
      if (_this.data.canScrape === true) {
        // e.preventDefault();
        // ctx.globalCompositeOperation = 'destination-out';
        var x = e.changedTouches[0].pageX - offsetLeft;
        var y = e.changedTouches[0].pageY - offsetTop;
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(x, y, 0.5 * rem, 0, Math.PI * 2, true);
        ctx.fill();
      }
    });
    var Card = Canvas.extend({
      data: function data() {
        return {};
      },
      beforePlay: function beforePlay() {},
      render: function render() {}
    });
    // new Card({
    //   el: this.$refs.canvas,

    // })
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
//
//
//
//
//

/***/ }),
/* 17 */
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

module.exports = {
	computed: {
		data: function data() {
			return this.$store.state.data;
		},
		meta: function meta() {
			return this.$store.state.meta;
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
__webpack_require__(31)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  "data-v-bace509e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(34)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(56),
  /* scopeId */
  "data-v-cbedf818",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(32)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(54),
  /* scopeId */
  "data-v-bb42c300",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(33)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(55),
  /* scopeId */
  "data-v-bdf20780",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  "data-v-89f926dc",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(26)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  "data-v-1072a1a8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  "data-v-b0e7e182",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  "data-v-0a89aa8d",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  "data-v-1e53999e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(27)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  "data-v-1900d491",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  "data-v-0f447c4a",
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
      value: (_vm.mask_confirm.state === 'failed'),
      expression: " mask_confirm.state==='failed' "
    }],
    staticClass: "inner failed"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\r\n\t\t\t\t\t刮奖失败\r\n\t\t\t\t")]), _c('div', {
    staticClass: "text"
  }, [_vm._v("\r\n\t\t\t\t\t需要在活动期间开通包月即可刮奖，100%中奖，不支持短信，包月体验卡开通哦\r\n\t\t\t\t")]), _c('img', {
    staticClass: "tape_3_2",
    attrs: {
      "src": _vm.img + '/main/tape_3_2.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_BUY',
          month: 3
        })
      }
    }
  }), _c('img', {
    staticClass: "tape_6_2",
    attrs: {
      "src": _vm.img + '/main/tape_6_2.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_BUY',
          month: 6
        })
      }
    }
  }), _c('img', {
    staticClass: "tape_12_2",
    attrs: {
      "src": _vm.img + '/main/tape_12_2_' + _vm.meta.platform + '.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_BUY',
          month: 12
        })
      }
    }
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_confirm.state === 'out'),
      expression: " mask_confirm.state==='out' "
    }],
    staticClass: "inner out"
  }, [_vm._m(0), _c('img', {
    staticClass: "btn_known",
    attrs: {
      "src": _vm.img + '/main/btn_known.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'HIDE',
          what: 'mask_confirm'
        })
      }
    }
  })])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info"
  }, [_vm._v("\r\n\t\t\t\t\t很遗憾"), _c('br'), _vm._v("\r\n\t\t\t\t\t来晚一步，奖品已被抢光\r\n\t\t\t\t")])
}]}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Rules"
  }, [_c('div', {
    staticClass: "rContent"
  }, [_c('img', {
    staticClass: "words_rules",
    attrs: {
      "src": _vm.img + '/main/words_rules.png'
    }
  }), _c('div', {
    staticClass: "text"
  }, [_vm._m(0), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2.")]), _vm._v("活动期间在6.5.1版本客户端内一次性开通3个月包月可获赠1个月，一次性开通6个月包月可获赠2个月，一次性开通12个月包月可获得有效期30天的1888" + _vm._s(_vm.name_bill) + "。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("3.")]), _vm._v("活动期间在活动页面开通包月的用户可获得一次抽奖，奖品总计500万" + _vm._s(_vm.name_bill) + "，有效期7天，数量有限，先到先得。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("4.")]), _vm._v("本活动最终解释权归QQ阅读所有" + _vm._s(_vm.meta.platform === 'adr' ? '' : '，与苹果公司无关') + "。")])]), _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "0.68rem"
    }
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("1.")]), _vm._v("活动时间：2017年6月8日-6月18日。")])
}]}

/***/ }),
/* 48 */
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
/* 49 */
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
  }, [_vm._v("\n        一部渭河平原五十年变迁的雄奇史诗，一轴中国农村班斓多彩、触目惊心的长幅画卷。\n      ")]), _c('p', {
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
  }, [_vm._v("\n      对不起，只有活动期间订阅的用户才能参与返书券活动哦\n    ")]), _c('img', {
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
  }, [_vm._v("\n      您已领取过书券\n    ")]), _c('img', {
    staticClass: "btn_take",
    attrs: {
      "src": _vm.img + '/main/btn_take_disabled_' + _vm.meta.platform + '.png'
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CanvasCard"
  }, [_c('div', {
    staticClass: "scrapable"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.takenBefore === true),
      expression: " data.takenBefore===true "
    }],
    staticClass: "taken_before"
  }, [_c('p', {
    staticClass: "p0"
  }, [_vm._v("\n        您已获得" + _vm._s(_vm.data.bills_taken) + _vm._s(_vm.name_bill) + "\n      ")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("\n        可去我的账户查看\n      ")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.takenBefore === false && _vm.data.out === true),
      expression: " data.takenBefore===false&&data.out===true "
    }],
    staticClass: "out"
  }, [_vm._v("\n      很遗憾奖品已被抢完\n    ")]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.takenBefore === false && _vm.data.bills_taken > 0),
      expression: " data.takenBefore===false&&data.bills_taken>0 "
    }],
    staticClass: "prize"
  }, [_c('p', {
    staticClass: "p0"
  }, [_vm._v("\n        恭喜获得" + _vm._s(_vm.data.bills_taken) + _vm._s(_vm.name_bill) + "\n      ")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("\n        可去我的账户查看\n      ")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.takenBefore === false && _vm.data.bills_taken === -1),
      expression: " data.takenBefore===false&&data.bills_taken===-1 "
    }],
    staticClass: "out"
  }, [_vm._v("\n      很遗憾奖品已被抢完\n    ")]), _c('canvas', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.out === false && _vm.data.takenBefore === false),
      expression: " data.out===false && data.takenBefore===false "
    }],
    ref: "canvas",
    staticClass: "overlay",
    attrs: {
      "width": "634",
      "height": "190"
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 53 */
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
  }, [_c('mask-confirm'), _c('mask-info'), _c('img', {
    staticClass: "header",
    attrs: {
      "src": _vm.img + '/main/header.png'
    }
  }), _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "6.52rem"
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.latest === false),
      expression: " data.latest===false "
    }],
    staticClass: "not_latest"
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v("\n          本活动只支持QQ阅读最新版本6.5.1，您的QQ阅读版本太低，赶快升级参与活动吧\n        ")]), _c('img', {
    staticClass: "btn_to_upgrade",
    attrs: {
      "src": _vm.img + '/main/btn_to_upgrade.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_UPGRADE'
        })
      }
    }
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.latest),
      expression: " data.latest "
    }],
    staticClass: "benefits"
  }, [_c('img', {
    staticClass: "words_benefits",
    attrs: {
      "src": _vm.img + '/main/words_benefits.png'
    }
  }), _c('img', {
    staticClass: "panel_benefits",
    attrs: {
      "src": _vm.img + '/main/panel_benefits.png'
    }
  }), _c('p', {
    staticClass: "all",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_MORE_GIFTS'
        })
      }
    }
  }, [_vm._v("全部好处 >")])]), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.latest),
      expression: " data.latest "
    }],
    staticClass: "words_gifts",
    attrs: {
      "src": _vm.img + '/main/words_gifts.png'
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.latest),
      expression: " data.latest "
    }],
    staticClass: "part_1"
  }, [_c('div', {
    staticClass: "title_"
  }, [_vm._v("\n          豪礼1：送包月、送" + _vm._s(_vm.name_bill) + "\n        ")]), _c('img', {
    staticClass: "tape_3",
    attrs: {
      "src": _vm.img + '/main/tape_3.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_BUY',
          month: 3
        })
      }
    }
  }), _c('img', {
    staticClass: "tape_6",
    attrs: {
      "src": _vm.img + '/main/tape_6.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_BUY',
          month: 6
        })
      }
    }
  }), _c('img', {
    staticClass: "tape_12",
    attrs: {
      "src": _vm.img + '/main/tape_12_' + _vm.meta.platform + '.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_BUY',
          month: 12
        })
      }
    }
  }), _c('div', {
    staticClass: "tips"
  }, [_vm._v("\n          短信，包月体验卡开通不支持参与活动\n        ")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.latest),
      expression: " data.latest "
    }],
    staticClass: "part_2"
  }, [_c('div', {
    staticClass: "title_"
  }, [_vm._v("\n          豪礼2：抽奖，100%中奖\n        ")]), _c('canvas-card')], 1), _c('rules-plain', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.data.latest),
      expression: " data.latest "
    }]
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 54 */
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
/* 55 */
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
/* 56 */
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);