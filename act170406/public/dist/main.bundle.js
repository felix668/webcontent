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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
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
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(26)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  "data-v-685debe1",
  /* cssModules */
  null
)

module.exports = Component.exports


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
		App: __webpack_require__(29)
	},
	template: '<app></app>'
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rem_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rem_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__rem_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_scss__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_transition_less__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_transition_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vue_transition_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_index_less__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__animations_index_less__);

// import './debugger.js';
//import './config.js';




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
  img: './img/',

  dev: function () {
    if (common.param('z_dev') === 'true') {
      return true;
    } else {
      return true;
    };
  }(),

  page: 'pending',
  loaded: false,

  conf: {
    id: '170406',
    act_f: '170406',
    share_title: '423全民阅读，邀你共读接力',
    share_desc: '来QQ阅读，与你所爱的明星共同朗读'
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

    return getters.pre_https + '/act' + state.conf.id + '/public/share.html?tf=1&act_f=' + state.conf.act_f + '&u=' + state.user.u + '&p=' + state.user.p + '&lot=' + state.user.lot;
  },
  share_thumb: function share_thumb(_ref4) {
    var state = _ref4.state,
        getters = _ref4.getters;

    return getters.pre_https + '/act' + state.conf.id + '/public/img/main/thumb.jpg';
  },
  href_main: function href_main(_ref5) {
    var state = _ref5.state,
        getters = _ref5.getters;

    return getters.pre + '/act' + state.conf.id + '/public/main' + (state.meta.platform === 'adr' ? '' : '_ios') + '.html?act_f=' + state.conf.act_f;
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
        dispatch = _ref8.dispatch;

    var href = pre() + '/act170410/index.html?act_f=170410';
    console.log(href);
    if (state.meta.share) {
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
    } else {
      if (state.meta.platform === 'adr') {
        Local.openPage(href);
      } else {
        Local.openInside(href);
      }
    };
  },
  TO_CONTACT: function TO_CONTACT(_ref9, action) {
    var state = _ref9.state,
        dispatch = _ref9.dispatch;

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
  TO_BOOK: function TO_BOOK(_ref10, action) {
    var state = _ref10.state,
        dispatch = _ref10.dispatch;

    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      });
    } else {
      ABook.gotoDetail(action.bid);
    };
  },
  TO_READ: function TO_READ(_ref11, action) {
    var state = _ref11.state,
        dispatch = _ref11.dispatch;

    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'read_' + action.id);
      if (action.bid === 813820 || action.bid === 832013) {
        ABook.gotoDetail(action.bid);
      } else {
        Local.$toRead(action.bid);
      }
    };
  },
  TO_LISTEN_BOOK: function TO_LISTEN_BOOK(_ref12, action) {
    var state = _ref12.state,
        dispatch = _ref12.dispatch;

    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'toListen');
      location.href = 'uniteqqreader://nativepage/client/listenpage?mediaId=90001027';
    }
  },
  TO_ZHUAN_TI: function TO_ZHUAN_TI(_ref13, action) {
    var state = _ref13.state,
        dispatch = _ref13.dispatch;

    if (state.meta.share) {
      dispatch({
        type: 'TO_APP'
      });
    } else {
      Local.forceLog(common.param('act_f'), 'learn_' + action.id);
      if (state.meta.platform === 'adr') {
        // location.href = `uniteqqreader://webpage/http://iyuedu.qq.com/android/5_3/topicV2.html?tid=${action.zid.adr}`;
        Local.openPage('http://iyuedu.qq.com/android/5_3/topicV2.html?tid=' + action.zid.adr);
      } else {
        // location.href = `uniteqqreader://webpage/https://iyuedu.qq.com/ios/6_1/topicV2.html?tid=${action.zid.ios}`;
        // location.href = `uniteqqreader://webpage/https://yuedu.reader.qq.com/common/common/topicV2.html?tid=${action.zid.ios}`;
        Local.openInside('https://yuedu.reader.qq.com/common/common/topicV2.html?tid=' + action.zid.ios);
      }
    }
  },
  TO_ACCOUNT: function TO_ACCOUNT(_ref14, action) {
    var state = _ref14.state,
        dispatch = _ref14.dispatch;

    location.href = state.meta.platform === 'adr' ? 'uniteqqreader://nativepage/getAcctInfo' : 'uniteqqreader://nativepage/account/index';
  },
  SET_ICON: function SET_ICON(_ref15, action) {
    var state = _ref15.state,
        dispatch = _ref15.dispatch;

    var href = pre('https') + '/act' + state.conf.id + '/public/share.html?tf=1&act_f=' + state.conf.act_f;
    Local.$setIconForShareing(href, share_thumb(), state.conf.share_title, state.conf.share_desc);
  },
  SHARE: function SHARE(_ref16, action) {
    var state = _ref16.state,
        dispatch = _ref16.dispatch;

    // Local.forceLog( common.param('act_f'),`share` );
    // // MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_share`})
    if (!state.meta.share) {

      var href = pre('https') + '/act' + state.conf.id + '/public/share.html?tf=1&act_f=' + state.conf.act_f;
      Local.forceLog(common.param('act_f'), 'share');
      Local.$share(href,
      // `http://solomotest4.3g.qq.com/book_res/event/act170406/public/img/main/thumb.jpg`,
      share_thumb(), state.conf.share_title, state.conf.share_desc);
    } else {
      dispatch({
        type: 'SHOW',
        what: 'mask_share'
      });
    }
  },
  SET_SECOND_SHARING: function SET_SECOND_SHARING(_ref17, action) {
    var state = _ref17.state,
        dispatch = _ref17.dispatch;

    sns.share({
      url: location.href,
      //cover: location.href.replace( /act161202.+/,'act161202/adr/img/qqreader.png' ),
      cover: share_thumb(),
      title: state.conf.share_title,
      desc: state.conf.share_desc
    }, '111');
    // the second argument '111' is essential or an error would be thrown
  },
  TO_APP: function TO_APP(_ref18, action) {
    var state = _ref18.state,
        dispatch = _ref18.dispatch;

    // Local.forceLog( common.param('act_f'),`${state.meta.batch}_toApp` );

    var href = pre() + '/act' + state.conf.id + '/public/main' + (env.pt === 'adr' ? '' : '_ios') + '.html?act_f=' + state.conf.act_f;
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
  TO_DOWNLOAD: function TO_DOWNLOAD(_ref19, action) {
    var state = _ref19.state,
        dispatch = _ref19.dispatch;

    bnative.downLoad('10026761');
  },
  REPLAY: function REPLAY(_ref20, action) {
    var state = _ref20.state,
        dispatch = _ref20.dispatch;

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
  ADD_TO_SHELF: function ADD_TO_SHELF(_ref21, action) {
    var state = _ref21.state,
        dispatch = _ref21.dispatch;


    Local.addToShelfBooks(JSON.stringify([action.book]));
    // Local.$addToShelf( action.book );
    // };
  },
  SHOW: function SHOW(_ref22, action) {
    var state = _ref22.state,
        dispatch = _ref22.dispatch;

    state[action.what].show = true;
  },
  HIDE: function HIDE(_ref23, action) {
    var state = _ref23.state,
        dispatch = _ref23.dispatch;

    state[action.what].show = false;
  }
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators, getters: getters };

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var actors = [{
  id: 0,
  name: '黄轩',
  intro: '黄轩，著名男演员，作品《推拿》《芈月传》《亲爱的翻译官》《芳华》《妖猫传》等',
  book: {
    bid: 749907,
    zid: {
      adr: 326461,
      ios: 326462
    },
    name: '《牧羊少年奇幻之旅》',
    author: '保罗·柯艾略',
    intro: '一本“足以改变读者心灵一生”的寓言，政要、巨星隆重推荐！'
  }
}, {
  id: 1,
  name: '严屹宽',
  intro: '严屹宽，著名男演员，代表作《爵迹》、《三生三世十里桃花》、《倾世皇妃》等 ',
  book: {
    bid: 713429,
    zid: {
      adr: 326646,
      ios: 326647
    },
    name: '《云雀叫了一整天》',
    author: '木心',
    intro: '现代文学史中一位金句纷披的大家，收录代表诗篇《从前慢》'
  }
}, {
  id: 2,
  name: '马可',
  intro: '马可，男演员，代表作《花千骨》《思美人》等',
  book: {
    bid: 630052,
    zid: {
      adr: 326643,
      ios: 326664
    },
    name: '《寂静的春天》',
    author: '蕾切尔·卡森',
    intro: '柴静关注的现代环保运动肇始之作，刘慈欣《三体》的直接源头'
  }
}, {

  id: 3,
  name: '付辛博',
  intro: '付辛博，著名男演员，代表作《寻找前世之旅》《乱世丽人行》《青丘狐传说》《古剑奇谭二》等',
  book: {
    bid: 813820,
    zid: {
      adr: 326660,
      ios: 326700
    },
    name: '《瓦尔登湖》',
    author: '亨利·戴维·梭罗',
    intro: '名家翻译，全译本，适合在寂寞和恬静时静静地读，读得静静。'
  }
}, {
  id: 4,
  name: '颖儿',
  intro: '颖儿，著名女演员，代表作：《千山暮雪》、《解密》、《古剑奇谭二》等 ',
  book: {
    bid: 812684,
    zid: {
      adr: 326716,
      ios: 326742
    },
    name: '《当你老了》',
    author: '叶芝',
    intro: '央视新闻推荐版本，浪漫主义者献给女神的100首炽热诗篇'
  }
}, {
  id: 5,
  name: '李一桐',
  intro: '李一桐，新生代小花旦，代表作《新射雕英雄传》《半妖倾城》《海棠经雨胭脂透》等 ',
  book: {
    bid: 812451,
    zid: {
      adr: 326745,
      ios: 326757
    },
    name: '《沿着塞纳河到翡冷翠》',
    author: '黄永玉',
    intro: '收入黄永玉先生在此次艺术之旅中创作的大量油画、水彩、素描'
  }
}, {

  id: 6,
  name: '宋威龙',
  intro: '宋威龙，新生代男演员，代表作《凤囚凰》《三好差生》《半妖倾城》等',
  book: {
    bid: 216212,
    zid: {
      adr: 326746,
      ios: 326747
    },
    name: '《小王子》',
    author: '安托万·德·圣-埃克苏佩里',
    intro: '唯一官方认可简体中文译本，全套官方正版插图，畅销二百万册'
  }
}, {
  id: 7,
  name: '秦俊杰',
  intro: '秦俊杰，90后演技派小生，代表作《大唐荣耀》《青云志》《网球王子》《满城尽带黄金甲》等',
  book: {
    bid: 623386,
    zid: {
      adr: 326749,
      ios: 326753
    },
    name: '《一个人的朝圣》',
    author: '蕾秋·乔伊斯',
    intro: '首席畅销小说！他以为人生就这么过去了，直到收到那封信……'
  }
}, {
  id: 8,
  name: '靳梦佳',
  intro: '靳梦佳，湖南卫视娱乐频道当家主持人，主持湖南娱乐《娱乐急先锋》等节目。',
  book: {
    bid: 446536,
    name: '《乖，摸摸头》',
    author: '大冰',
    intro: '别那么孤独，请相信，这个世界上真的有人在过着你想要的生活'
  }
}, {

  id: 9,
  name: '张宸',
  intro: '张宸，中国跳水运动员。一战成名：2005年国际泳联跳水大奖赛珠海站男子单人10米台冠军。',
  book: {
    bid: 813816,
    name: '《稻草人》',
    author: '叶圣陶',
    intro: '中国现代第一本为儿童而写的童话集，国家教育部推荐读物！'
  }
}, {
  id: 10,
  name: '薛泽源',
  intro: '薛泽源，中央戏剧学院学生，代表作《愿有人陪你颠沛流离》。',
  book: {
    bid: 414951,
    name: '《愿有人陪你颠沛流离》',
    author: '卢思浩',
    intro: '能接吻就不要说话，能拥抱就不要吵架，能行动就不要发呆……'
  }
}, {
  id: 11,
  name: '北京猎手冰球队',
  intro: '北京猎手冰球队',
  book: {
    bid: 166655,
    name: '《少年中国说》',
    author: '梁启超',
    intro: '精选梁启超在政论、文论、讲演和诗词等方面最具代表性的作品'
  }
}, {

  id: 12,
  name: '四川北川羌族民族艺术团',
  intro: '羌族少数民族，中国西部的一个古老的民族，被称为“云朵上的民族”。',
  book: {
    bid: 166655,
    name: '《少年中国说》',
    author: '梁启超',
    intro: '精选梁启超在政论、文论、讲演和诗词等方面最具代表性的作品'
  }
}, {
  id: 13,
  name: '麦麦&马俊熙',
  intro: '麦麦&马俊熙',
  book: {
    bid: 166655,
    name: '《少年中国说》',
    author: '梁启超',
    intro: '精选梁启超在政论、文论、讲演和诗词等方面最具代表性的作品'
  }
}, {
  id: 14,
  name: '史文翔',
  intro: '史文翔，内地男演员。代表作《周末父母》《谈判官》；综艺《一年级》。',
  book: {
    bid: 832013,
    zid: {
      adr: 326816,
      ios: 326820
    },
    name: '《生如夏花，死如秋叶：泰戈尔经典诗选》',
    author: '泰戈尔',
    intro: '至真至美的文学经典，典藏百年的美文精粹，郑振铎权威译本！'
  }
}];

var state = {
  cards: function () {
    var arr = [];
    var ids = [];
    var date = new Date().getDate();
    var hours = new Date().getHours();
    console.log('[date] ' + date);
    console.log('[hours] ' + hours);
    if (date === 20) {
      if (hours >= 13) {
        ids = [5, 0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 13];
      } else {
        ids = [0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 13];
      };
      ids.forEach(function (id) {
        arr.push(actors[id]);
      });
      console.log(arr);
      return arr;
    } else if (date === 21) {
      if (hours >= 13) {
        ids = [6, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13];
      } else {
        ids = [5, 0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 13];
        // ids = [0,1,2,3,4,5,8,9,10,11,12,13];
      };
      ids.forEach(function (id) {
        arr.push(actors[id]);
      });
      return arr;
    } else if (date === 22) {
      if (hours >= 13) {
        ids = [7, 0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13];
      } else {
        ids = [6, 0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13];
        // ids = [0,1,2,3,4,5,6,8,9,10,11,12,13];
      }
      ids.forEach(function (id) {
        arr.push(actors[id]);
      });
      return arr;
    } else {
      ids = [0, 1, 2, 3, 4, 5, 6, 7, 14, 8, 9, 10, 11, 12, 13];
      arr = ids.map(function (a) {
        return actors[a];
      });
      return arr;
    }
  }(),
  lottery: {
    state: 'ready',
    coins: '--'
  },
  card: {
    current: 0
  }
};

var mutators = {
  INIT_MAIN: function INIT_MAIN(_ref, action) {
    var state = _ref.state,
        dispatch = _ref.dispatch;


    if (state.meta.share) {
      dispatch({
        type: 'SET_SECOND_SHARING'
      });
      state.page = 'ready';
    } else {
      Local.forceLog(common.param('act_f'), 'enter');
      // dispatch({
      //   type: 'SET_ICON'
      // })
      if (state.dev) {
        state.page = 'ready';
      } else {
        state.page = 'ready';
      }
    }
  },
  CHANGE_CARD: function CHANGE_CARD(_ref2, action) {
    var state = _ref2.state,
        dispatch = _ref2.dispatch;

    state.card.current = action.to;
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

exports.default = {
	components: {
		MaskLoading: __webpack_require__(31),
		MaskDownload: __webpack_require__(30),
		MaskOver: __webpack_require__(32),

		SwiperCards: __webpack_require__(35),
		Rules: __webpack_require__(34)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    a: {}
  },
  components: {
    VideoCard: __webpack_require__(1)
  },
  computed: {
    img: function img() {
      return this.$store.state.img;
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

exports.default = {
	components: {
		CardItem: __webpack_require__(33),
		VideoCard: __webpack_require__(1)
	},
	props: {
		act: {},
		img: {},
		// items: {
		// 	default: function(){
		// 		return [{},{},{},{},{},{},{}];
		// 	}
		// },
		style: {
			default: ''
		},
		ease: {
			default: 'ease-out' //'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
		},
		carousel: {
			default: true
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
		share_btn: function share_btn() {
			return this.$store.state.share_btn;
		},
		pic: function pic() {
			return this.$store.state.pic;
		},

		img: function img() {
			return this.$store.state.img;
		},
		items: function items() {
			return this.$store.state.cards;
		}
	},
	watch: {
		items: function items() {
			//this.copy = this.items;
		},
		currentOne: function currentOne(new_val) {
			this.$store.dispatch({
				type: 'CHANGE_CARD',
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
		// setTimeout(()=>{
		// 	this.toCard(5);
		// },1000);
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
			Local.forceLog(common.param('act_f'), 'play_' + _this.id);
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
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  "data-v-e48a5518",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  "data-v-418e3077",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  "data-v-5ddf54c6",
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
  __webpack_require__(13),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  "data-v-45c4e243",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(27)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  "data-v-8f849206",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  "data-v-5e3e9fad",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(21)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  "data-v-1558f801",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Swiper__",
    style: ('background-image:url(' + _vm.img + '/main/bg_factory.png);background-size:100% auto;'),
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
  }, [_c('img', {
    staticClass: "arrow_left",
    attrs: {
      "src": _vm.img + '/main/arrow_left.png'
    },
    on: {
      "click": _vm.toPrev
    }
  }), _c('img', {
    staticClass: "arrow_right",
    attrs: {
      "src": _vm.img + '/main/arrow_right.png'
    },
    on: {
      "click": _vm.toNext
    }
  }), _c('div', {
    ref: "swiper",
    staticClass: "Swiper"
  }, [_c('ul', {
    staticClass: "train",
    class: _vm.carousel ? 'carousel' : '',
    style: ('transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);transition:' + _vm.transition + ';' +
      '-webkit-transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);-webkit-transition:' + _vm.transition + ';')
  }, [(_vm.carousel) ? _c('li', {
    staticClass: "item",
    class: _vm.currentOne === _vm.items.length - 2 ? 'active' : ''
  }, [_c('card-item', {
    attrs: {
      "a": _vm.items[_vm.items.length - 2]
    }
  })], 1) : _vm._e(), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    class: _vm.currentOne === _vm.items.length - 1 ? 'active' : ''
  }, [_c('card-item', {
    attrs: {
      "a": _vm.items[_vm.items.length - 1]
    }
  })], 1) : _vm._e(), _vm._l((_vm.items), function(a, i) {
    return _c('li', {
      key: a.id,
      staticClass: "item",
      class: i === _vm.currentOne ? 'active' : ''
    }, [_c('card-item', {
      attrs: {
        "a": a
      }
    })], 1)
  }), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    class: _vm.currentOne === 0 ? 'active' : ''
  }, [_c('card-item', {
    attrs: {
      "a": _vm.items[0]
    }
  })], 1) : _vm._e(), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    class: _vm.currentOne === 1 ? 'active' : ''
  }, [_c('card-item', {
    attrs: {
      "a": _vm.items[1]
    }
  })], 1) : _vm._e(), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })], 2)])])
},staticRenderFns: []}

/***/ }),
/* 37 */
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
/* 38 */
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
  }, [_vm._v("1.")]), _vm._v("活动时间：4月20日11点 - 5月2日0点。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("2.")]), _vm._v("活动期间用户可观看明星阅读视频，试读相关书籍。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("3.")]), _vm._v("所有用户可邀请好友观看视频，参与共读接力。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("4.")]), _vm._v("明星视频顺序按微博发布时间排序。")]), _c('p', [_c('span', {
    staticClass: "no_"
  }, [_vm._v("5.")]), _vm._v("本活动最终解释权归QQ阅读所有。")])])])])
}]}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "VideoCard"
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
      "src": _vm.img + '/main/loading.svg'
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'uninitialized' || (_vm.meta.platform === 'ios')),
      expression: " state==='uninitialized'||( meta.platform==='ios' ) "
    }],
    staticClass: "overlay"
  }, [_c('img', {
    staticClass: "snapshot",
    attrs: {
      "src": _vm.img + '/main/snapshot/' + _vm.id + '.jpg'
    }
  })]), (_vm.meta.platform === 'ios') ? _c('video', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.state === 'playing'),
      expression: " state==='playing' "
    }],
    ref: "video",
    attrs: {
      "src": './video/' + _vm.id + '.mp4',
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
      "src": './video/' + _vm.id + '.mp4',
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
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CardItem",
    style: ('background-image:url(' + _vm.img + '/main/panel_2.png);background-size:100% auto;')
  }, [_c('video-card', {
    attrs: {
      "id": _vm.a.id
    }
  }), _c('div', {
    staticClass: "red_overlay",
    style: ('background-image:url(' + _vm.img + '/main/overlay.png);background-size:100% auto;')
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.a.name) + "朗诵" + _vm._s(_vm.a.book.name))]), _c('div', {
    staticClass: "intro"
  }, [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.a.intro))])])]), _c('div', {
    staticClass: "bottom_"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "0.76rem",
      "margin-bottom": "0.3rem"
    }
  }, [(_vm.a.book.zid) ? _c('div', {
    staticClass: "btn",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_ZHUAN_TI',
          zid: _vm.a.book.zid,
          id: _vm.a.id
        })
      }
    }
  }, [_vm._v("了解" + _vm._s(_vm.a.name))]) : _vm._e()]), _c('div', {
    staticClass: "two_"
  }, [_c('div', {
    staticClass: "left_"
  }, [_c('div', {
    staticClass: "book",
    style: ('background-image:url(' + _vm.img + '/main/book.png);background-size:100% auto;'),
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_BOOK',
          bid: _vm.a.book.bid
        })
      }
    }
  }, [_c('img', {
    staticClass: "cover",
    attrs: {
      "src": _vm.img + '/main/covers/' + _vm.a.book.bid + '.jpg'
    }
  })])]), _c('div', {
    staticClass: "right_"
  }, [_c('p', {
    staticClass: "book_name"
  }, [_vm._v(_vm._s(_vm.a.book.name))]), _c('p', {
    staticClass: "book_time"
  }, [_vm._v(_vm._s(_vm.a.book.intro))]), _c('div', {
    staticClass: "to_read",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_READ',
          bid: _vm.a.book.bid,
          id: _vm.a.id
        })
      }
    }
  }, [_vm._v("\n          立即阅读\n        ")])])])])], 1)
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
    style: ('background-image:url(' + _vm.img + '/main/bg.png);background-size:100% auto;')
  }, [_c('swiper-cards'), (!_vm.meta.share) ? _c('img', {
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
  }) : _vm._e()], 1), (!_vm.meta.share) ? _c('div', {
    staticStyle: {
      "width": "100%",
      "height": "0.7rem",
      "background": "#090f14"
    }
  }) : _vm._e(), _c('div', {
    staticClass: "warp"
  }, [_c('img', {
    staticClass: "btn_warp",
    attrs: {
      "src": _vm.img + '/main/btn_warp.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_PAGE'
        })
      }
    }
  })]), (!_vm.meta.share) ? _c('rules') : _vm._e(), _c('img', {
    staticClass: "footer",
    attrs: {
      "src": _vm.img + '/main/footer.png'
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);