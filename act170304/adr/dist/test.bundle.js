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
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_transition_less__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_transition_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vue_transition_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keyframes_less__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keyframes_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__keyframes_less__);

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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
  img: '../adr/img/',

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
    }(),
    normal: function () {
      if (common.param('z_normal') === 'true') {
        return true;
      } else {
        return false;
      }
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

    // Local.forceLog( common.param('act_f'),`share` );
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
          return 'http://solomotest4.3g.qq.com/book_res/event/act170304/adr/main.html?act_f=' + act_f;
        } else {
          return 'https://ptsolomo.reader.qq.com/book_res/event/act170304/ios/main.html?act_f=' + act_f;
        }
      } else {
        if (env.pt === 'adr') {
          return 'http://iyuedu.qq.com/event/act170304/adr/main.html?act_f=' + act_f;
        } else {
          return 'https://yuedu.reader.qq.com/event/act170304/ios/main.html?act_f=' + act_f;
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
    if (action.what === 'mask_form') {
      Local.forceLog(common.param('act_f'), 'to_form');
    }
  },
  HIDE: function HIDE(_ref14, action) {
    var state = _ref14.state,
        dispatch = _ref14.dispatch;

    state[action.what].show = false;
  }
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators };

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
		share_btn: {
				show: false
		},
		pic: {
				bg: 0,
				playing: false,
				slogan: 0,
				done: false
		},
		change_main: {
				stage: 'fall'
		}
};

var mutators = {
		INIT_MAIN: function INIT_MAIN(_ref, action) {
				var state = _ref.state,
				    dispatch = _ref.dispatch;


				Local.forceLog(common.param('act_f'), 'enter');

				var pre = function () {
						// 如果当前环境为测试环境：
						// if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
						//   return 'https://ptsolomo.reader.qq.com/book_res/event';
						// }else{
						//   return 'https://yuedu.reader.qq.com/event';
						// }
						if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
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
						};
				}();
				var bg = pre + '/act170304/adr/img/main/cards/0.jpg';
				for (var i = 0; i < 6; i++) {
						var _bg = pre + '/act170304/adr/img/main/cards/' + i + '.jpg';
						Local.cacheImage(_bg);
				}

				window.CLOSE_WINDOW = function () {
						console.log('CLOSE_WINDOW');
						dispatch({
								type: 'CLOSE_WINDOW'
						});
						return true;
				};

				// if( state.meta.share ){
				// 	dispatch({
				// 		type: 'SET_SECOND_SHARING'
				// 	});
				// 	state.page = 'ready';
				// }else{
				// 	// Local.forceLog( common.param('act_f'),`enter` );
				// 	dispatch({
				// 		type: 'SET_ICON'
				// 	});
				// 	state.page = 'ready';

				// }
				state.page = 'ready';
		},
		CLOSE_WINDOW: function CLOSE_WINDOW(_ref2, action) {
				var state = _ref2.state,
				    dispatch = _ref2.dispatch;

				if (state.pic.done === true) {
						state.pic.done = false;
				} else {
						Local.closePage();
				}
		},

		// TURN_AUDIO ({state,dispatch},action) {
		// 	Local.forceLog( common.param('act_f'),`play` );
		// 	state.audio.on = !state.audio.on;
		// },
		TO_FACTORY: function TO_FACTORY(_ref3, action) {
				var state = _ref3.state,
				    dispatch = _ref3.dispatch;

				Local.forceLog(common.param('act_f'), 'toFactory');
				state.change_main.stage = 'factory';
		},
		PICK_BG: function PICK_BG(_ref4, action) {
				var state = _ref4.state,
				    dispatch = _ref4.dispatch;

				state.pic.bg = action.i;
		},
		NEXT_SLOGAN: function NEXT_SLOGAN(_ref5, action) {
				var state = _ref5.state,
				    dispatch = _ref5.dispatch;

				if (state.pic.playing === true) {
						if (state.pic.slogan < 11) {
								state.pic.slogan++;
						} else {
								state.pic.slogan = 0;
						}
						setTimeout(function () {
								dispatch({
										type: 'NEXT_SLOGAN'
								});
						}, 200);
				};
		},
		PLAY_SLOGAN: function PLAY_SLOGAN(_ref6, action) {
				var state = _ref6.state,
				    dispatch = _ref6.dispatch;

				state.pic.playing = true;
				dispatch({
						type: 'NEXT_SLOGAN'
				});
				Local.forceLog(common.param('act_f'), 'fingerprint');
		},
		STOP_SLOGAN: function STOP_SLOGAN(_ref7, action) {
				var state = _ref7.state,
				    dispatch = _ref7.dispatch;

				state.share_btn.show = true;
				state.pic.playing = false;
		},
		CHANGE_MAIN: function CHANGE_MAIN(_ref8, action) {
				var state = _ref8.state,
				    dispatch = _ref8.dispatch;

				console.log(action);
				state.change_main.stage = action.to;
		},
		SHARE_PIC: function SHARE_PIC(_ref9, action) {
				var state = _ref9.state,
				    dispatch = _ref9.dispatch;

				Local.forceLog(common.param('act_f'), 'share_bg' + state.pic.bg + '_slogan' + state.pic.slogan);
				state.pic.done = true;
				var pre = function () {
						// 如果当前环境为测试环境：
						// if( /(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href) ){
						//   return 'https://ptsolomo.reader.qq.com/book_res/event';
						// }else{
						//   return 'https://yuedu.reader.qq.com/event';
						// }
						if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
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
						};
				}();
				var bg = pre + ('/act170304/adr/img/main/cards/' + state.pic.bg + '.jpg');
				var slogan = pre + ('/act170304/adr/img/main/slogan/' + state.pic.slogan + '.png');
				console.log(bg);
				console.log(slogan);

				Local.shareStyleImage(bg, slogan);
		},
		SUBMIT_FORM: function SUBMIT_FORM(_ref10, action) {
				var state = _ref10.state,
				    dispatch = _ref10.dispatch;

				var pl = action.form;
				localStorage.form = JSON.stringify(action.form);
				Local.forceLog(88888, pl.city.val + '|' + pl.school.val + '|' + pl.name.val + '|' + pl.qq.val + '|' + pl.mobile.val);
		}
		// CLICK_BTN ({state,dispatch},action) {
		// 	if( state.meta.share ){
		// 		dispatch({
		// 			type: 'TO_APP'
		// 		})
		// 	}else{
		// 		dispatch({
		// 			type: 'SHARE'
		// 		})
		// 	}
		// }

};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators };

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vix_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_js__ = __webpack_require__(10);





Vue.use(__WEBPACK_IMPORTED_MODULE_0__Vix_js__["a" /* default */]);

var store = __WEBPACK_IMPORTED_MODULE_0__Vix_js__["a" /* default */].createStore([__WEBPACK_IMPORTED_MODULE_1__base_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__main_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__test_js__["a" /* default */]]);

/* harmony default export */ __webpack_exports__["a"] = store;

/***/ }),
/* 10 */
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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  "data-v-afb68318",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  "data-v-6657b340",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(15)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  "data-v-ac17c100",
  /* cssModules */
  null
)

module.exports = Component.exports


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
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "DEBUG"
  }, [_c('div', {
    staticClass: "fixed__"
  }, [_vm._v("\n\t\tloggedIn: " + _vm._s(_vm.state.loggedIn) + ", day: " + _vm._s(_vm.state.day)), _c('br'), _vm._v("\n\t\tcurrent: " + _vm._s(_vm.state.current)), _c('br')])])
},staticRenderFns: []}

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_common_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store_js__ = __webpack_require__(9);




var root = new Vue({
	el: '#root',
	store: __WEBPACK_IMPORTED_MODULE_1__store_store_js__["a" /* default */],
	components: {
		App: __webpack_require__(64)
	},
	template: '<app></app>'
});

/***/ }),
/* 27 */,
/* 28 */
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

exports.default = {
	components: {
		Debugger: __webpack_require__(17),
		MaskLoading: __webpack_require__(18),
		MaskOver: __webpack_require__(19),

		MaskDownload: __webpack_require__(65),
		BooksFallTwo: __webpack_require__(67),
		Incoming: __webpack_require__(68)
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
		},
		change: function change() {
			return this.$store.state.change;
		},
		show: function show() {
			if (this.change.stage === 1) {
				if (this.meta.platform === 'adr') {
					if (this.meta.normal === true) {
						return false;
					} else {
						return true;
					}
				} else {
					// ios
					if (this.meta.normal === true) {
						return false;
					} else {
						return false;
					}
				}
			} else {
				return false;
			}
		}
	},
	watch: {
		'change.stage': function changeStage() {}
	},
	created: function created() {},
	mounted: function mounted() {
		this.$store.dispatch({ type: 'INIT' });
	},
	methods: {
		close: function close() {
			Local.closePage();
			// history.go(-1);
			// window.close();
		},

		touchmove: function touchmove(e) {
			e.preventDefault();
		}
	}
};

/***/ }),
/* 29 */
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
/* 30 */,
/* 31 */
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

exports.default = {
	computed: {
		img: function img() {
			return '../adr/img/books_fall_2';
		},
		meta: function meta() {
			return this.$store.state.meta;
		}
	},
	components: {},
	data: function data() {
		return {
			arr: [{
				val: 1
			}, {
				val: 2
			}, {
				val: 3
			}, {
				val: 4
			}, {
				val: 5
			}, {
				val: 6
			}, {
				val: 7
			}, {
				val: 8
			}, {
				val: 9
			}, {
				val: 10
			}, {
				val: 11
			}, {
				val: 12
			}, {
				val: 1
			}, {
				val: 7
			}, {
				val: 11
			}, {
				val: 13
			}, {
				val: 14
			}, {
				val: 13
			}],
			class_: ''
		};
	},
	created: function created() {},
	watch: {
		// stage: function(new_val){
		// 	if( new_val===0 ){
		// 		this.animate();
		// 	}
		// }
	},
	mounted: function mounted() {
		var _this = this;

		setTimeout(function () {
			_this.class_ = 'active';
			setTimeout(function () {
				_this.$store.dispatch({
					type: 'CHANGE',
					to: 1
				});
			}, 3400);
		}, 250);
	},
	methods: {
		jump: function jump() {
			if (this.meta.share) {
				this.$store.dispatch({
					type: 'TO_APP'
				});
			}
		},
		animate: function animate() {},
		CHANGE_STAGE: function CHANGE_STAGE() {}
	}
};

/***/ }),
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
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      class_: ''
    };
  },
  computed: {
    img: function img() {
      return this.$store.state.img;
    },
    change: function change() {
      return this.$store.state.change;
    }
  },
  watch: {
    'change.stage': function changeStage(nv) {
      if (nv === 1) {
        this.class_ = 'active';
      }
    }
  }
};

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  "data-v-73b4724a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(90),
  /* scopeId */
  "data-v-55328734",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(91),
  /* scopeId */
  "data-v-681143b8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  "data-v-6d537a83",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
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
/* 91 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "BooksFallTwo rem_height",
    on: {
      "click": _vm.jump
    }
  }, [_c('img', {
    staticClass: "bg",
    class: _vm.class_,
    attrs: {
      "src": _vm.img + '/bg.jpg'
    }
  }), _c('div', {
    staticClass: "content"
  }, _vm._l((_vm.arr), function(a) {
    return _c('img', {
      staticClass: "book",
      class: _vm.class_,
      attrs: {
        "src": _vm.img + '/' + a.val + '.png'
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),
/* 92 */,
/* 93 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Incoming",
    class: _vm.class_
  }, [_c('img', {
    staticClass: "img_",
    attrs: {
      "src": _vm.img + '/test/incoming.jpg'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 94 */
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
  }, [_c('mask-download'), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: " show "
    }],
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/test/close.png'
    },
    on: {
      "click": _vm.close
    }
  }), _c('books-fall-two'), _c('incoming')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ })
/******/ ]);