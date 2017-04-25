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
/******/ 	__webpack_require__.p = "/act170201/adr/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 110);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_scss__);

// import './debugger.js';
//import './config.js';


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var $html = document.querySelector('html');
var $body = document.querySelector('body');
var $screen = document.createElement('div');
var $rem_height = document.querySelectorAll('.rem_height');

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
    rem.h = h;
    //document.getElementsByClassName('container')[0].style.height = h+'px';
    console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
    rem.isSet = true;
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
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(101),
  /* scopeId */
  "data-v-5bf12fc9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(62)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  "data-v-b7aa2ddc",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(44)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(89),
  /* scopeId */
  "data-v-245be770",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(48)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  "data-v-371b4210",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(42)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(87),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_common_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store_farm_js__ = __webpack_require__(14);




var root = new Vue({
	el: '#root',
	store: __WEBPACK_IMPORTED_MODULE_1__store_store_farm_js__["a" /* default */],
	components: {
		App: __webpack_require__(65)
	},
	template: '<app></app>'
});

/***/ }),
/* 10 */,
/* 11 */
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
  var mutators = [];

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
    mutators.push(a.mutator);
  });

  // make state reactive
  new Vue({
    data: state
  });

  var store = {
    state: state,
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
    // call the mutators one by one
    mutators.forEach(function (a) {
      a.call(vm, { state: state, dispatch: dispatch }, action);
    });
  }
}

Vix.install = install;
Vix.createStore = createStore;
// console.log(Vix)
/* harmony default export */ __webpack_exports__["a"] = Vix;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
  img: '../adr/img/farm',

  dev: function () {
    if (common.param('z_dev') === 'true') {
      return true;
    };
    return false;
  }(),

  page: 'pending',
  loaded: false,

  meta: {
    name: function () {
      var el = document.querySelector('html');
      var val = el.getAttribute('name');
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
    console.log(val);
    return (/share/.test(val) ? true : false
    );
  }(),

  loggedIn: false,

  mask_rules: {
    show: false
  },
  mask_download: {
    show: false
  },
  mask_info: {
    show: false
  },
  mask_black: {
    show: false
  },
  mask_prize: {
    show: false
  }
};

function mutator(_ref, action) {
  var state = _ref.state,
      dispatch = _ref.dispatch;

  var self = state;
  switch (action.type) {
    case 'TO_LOGIN':
      if (self.dev) {
        self.loggedIn = true;
      } else {
        // Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_login` );
        Local.login();
      };
      break;

    // case 'TO_PAGE':
    //   var href;
    //   if( self.hasDiscount ){
    //     href = location.href.replace( /books_\d_discount\.html/g,'books_'+action.id+'_discount.html' );
    //   }else{
    //     href = location.href.replace( /books_\d\.html/g,'books_'+action.id+'.html' );
    //   };
    //   if( /\?/.test(location.href) ){
    //     href = href.replace(/\?/,'?z_replay=true&');
    //   }else{
    //     href += '?z_replay=true';
    //   };
    //   if( self.dev ){
    //     location.href = href;
    //   }else{

    //     if( self.id===action.id ){
    //       Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_replay` );
    //     }else{
    //       Local.forceLog( common.param('act_f'),`SD_${self.id}${self.hasDiscount?'discount':''}_to${action.id}${self.hasDiscount?'discount':''}` );
    //     }
    //     Local.openPage( href );

    //   };
    //   break;

    // case 'TO_CONTACT':
    //   if( self.share ){
    //     self.act({type:'TO_APP'});
    //   }else{
    //     if( !self.loggedIn ){
    //       self.act({type:'TO_LOGIN'});
    //     }else{
    //       Local.openPage( location.href.replace( /(writers|actors|lottery)\.html/g,'contact.html' ) );
    //     }
    //   };
    //   break;

    case 'TO_CHARGE':
      Local.doCharge('act', true, action.money * 100);
      break;
    case 'TO_BOOK':
      if (!self.share) {
        Local.forceLog(common.param('act_f'), 'SD_' + self.id + (self.hasDiscount ? 'discount' : '') + '_toBook');
        ABook.gotoDetail(action.bid);
      } else {
        self.act({ type: 'TO_APP' });
      }
      break;
    case 'TO_READ':
      Local.$toRead(action.bid);
      break;

    // For sharing:
    case 'SET_ICON':
      var pre = function () {
        // 如果当前环境为测试环境：
        if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
          return 'https://ptsolomo.reader.qq.com/book_res/event';
        } else {
          return 'https://yuedu.reader.qq.com/event';
        }
      }();
      var type = function () {
        return (/writers\.html/.test(location.href) ? 'writers' : 'actors'
        );
      }();
      var title = type === 'writers' ? '大神作家喊你来投票！' : '明星爱豆喊你来投票！';
      var desc = type === 'writers' ? '多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】' : '多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】';
      Local.$setIconForShareing(pre + '/act161202/com/share_' + type + '.html?tf=1', 'http' + (self.ios ? 's' : '') + '://ptsolomo.reader.qq.com/book_res/event/act161202/adr/img/common/thumb.png', title, desc);
      break;
    case 'SHARE':
      Local.forceLog(common.param('act_f'), 'share');
      MtaH5.clickStat('abc', { 'def': self.meta.name + '_' + self.meta.platform + '_share' });
      // MtaH5.clickStat('stats',{
      //   stats: `${self.meta.name}_${self.meta.platform}_share`
      // });
      if (!self.share) {
        var pre = function () {
          // 如果当前环境为测试环境：
          if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
            return 'https://ptsolomo.reader.qq.com/book_res/event';
          } else {
            return 'https://yuedu.reader.qq.com/event';
          }
        }();
        Local.$share(pre + '/act170201/adr/share.html?tf=1&act_f=170222', location.href.replace(/act170201.+/, 'act170201/adr/img/farm/thumb.jpg'), '我可能瞎了', '我们对新疆，好像有什么误解……');
      } else {
        console.log('SHOW mask_share');
        dispatch({
          type: 'SHOW',
          what: 'mask_share'
        });
      }
      break;

    // For pages shared out:
    case 'SET_SECOND_SHARING':
      sns.share({
        url: location.href,
        //cover: location.href.replace( /act161202.+/,'act161202/adr/img/qqreader.png' ),
        cover: 'http://solomotest4.3g.qq.com/book_res/event/act170201/adr/img/farm/thumb.jpg',
        title: '我可能瞎了',
        desc: '我们对新疆，好像有什么误解……'
      }, '111');
      break;
    case 'TO_APP':
      var test = function () {
        if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
          return true;
        } else {
          return false;
        }
      }();
      var href = function () {
        if (test) {
          if (env.pt === 'adr') {
            return 'http://solomotest4.3g.qq.com/book_res/event/act170201/adr/farm.html?act_f=170222';
          } else {
            return 'https://ptsolomo.reader.qq.com/book_res/event/act170201/ios/farm.html?act_f=170222';
          }
        } else {
          if (env.pt === 'adr') {
            return 'http://iyuedu.qq.com/event/act170201/adr/farm.html?act_f=170222';
          } else {
            return 'https://yuedu.reader.qq.com/event/act170201/ios/farm.html?act_f=170222';
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
            self.mask_download.show = true;
          } else {
            self.mask_download.show = true;
          }
        });
      } else {
        bnative.openPage(href);
        setTimeout(function () {
          self.mask_download.show = true;
        }, 1000);
      };
      break;
    case 'TO_DOWNLOAD':
      bnative.downLoad('10003531');
      break;
    case 'REPLAY':
      Local.forceLog(common.param('act_f'), 'replay');
      MtaH5.clickStat('abc', { 'def': self.meta.name + '_' + self.meta.platform + '_replay' });
      // MtaH5.clickStat('stats',{
      //   stats: `${self.meta.name}_${self.meta.platform}_replay`
      // });
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
      break;

    case 'SHOW':
      state[action.what].show = true;
      if (action.what === 'mask_author') {
        Local.forceLog(common.param('act_f'), 'learn');
        MtaH5.clickStat('abc', { 'def': self.meta.name + '_' + self.meta.platform + '_learn' });
        // MtaH5.clickStat('stats',{
        //   stats: `${self.meta.name}_${self.meta.platform}_learn`
        // });
      } else if (action.what === 'mask_comments') {
        Local.forceLog(common.param('act_f'), 'comments');
        MtaH5.clickStat('abc', { 'def': self.meta.name + '_' + self.meta.platform + '_comments' });
        // MtaH5.clickStat('stats',{
        //   stats: `${self.meta.name}_${self.meta.platform}_comments`
        // });
      }
      break;
    case 'HIDE':
      state[action.what].show = false;
      break;
  }
}

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutator: mutator };

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {

	change: {
		changing: false,
		stage: 0,
		page: 0
	},
	mask_author: {
		show: false
	},
	mask_comments: {
		show: false
	},
	mask_share: {
		show: false
	},
	music: {
		initialized: false,
		on: false
	}
};

function mutator(_ref, action) {
	var state = _ref.state,
	    dispatch = _ref.dispatch;

	var self = state;
	switch (action.type) {

		case 'INIT':
			Local.forceLog(common.param('act_f'), 'enter');
			window.addEventListener('load', function () {
				// MtaH5.clickStat('stats',{
				// 	'evt': `${self.meta.name}iii${self.meta.platform}iiienter`
				// });
				MtaH5.clickStat('abc', { 'def': self.meta.name + 'iii' + self.meta.platform + 'iiienter' });
			});
			if (self.share) {
				dispatch({
					type: 'SET_SECOND_SHARING'
				});
			};
			// window.addEventListener('load',()=>{
			// 	self.page = 'ready';
			// })
			if (state.dev) {
				state.page = 'ready';
			} else {
				state.page = 'ready';
			};
			console.log(state.page);
			break;
		case 'TURN_MUSIC':
			self.music.on = !self.music.on;
			break;
		case 'SWITCH':
			//console.log(action)
			if (!state.change.changing) {
				self.change.changing = true;
				setTimeout(function () {
					self.change.changing = false;
				}, 800);
				if (action.stage || action.stage === 0) {
					if (action.stage === 1) {
						self.music.initialized = true;
						self.music.on = true;
						console.log('music.on===true');
						Local.forceLog(common.param('act_f'), 'page1');
						// MtaH5.clickStat('stats',{
						// 	stats: `${self.meta.name}_${self.meta.platform}_page1`
						// });
						MtaH5.clickStat('abc', { 'def': self.meta.name + '_' + self.meta.platform + '_page1' });
					};
					state.change.stage = action.stage;
				} else if (action.page || action.page === 0) {
					state.change.page = action.page;
					Local.forceLog(common.param('act_f'), 'page' + (action.page + 1));
					MtaH5.clickStat('abc', { 'def': self.meta.name + '_' + self.meta.platform + '_page' + (action.page + 1) });
					// MtaH5.clickStat('stats',{
					// 	stats: `${self.meta.name}_${self.meta.platform}_page${action.page+1}`
					// });
					// if( action.page===3 ){
					// 	self.change.changing = true;
					// 	setTimeout(()=>{
					// 		self.change.changing = false;
					// 	},1500)
					// }
				}
			};
			break;
		case 'SWITCH_OVER':
			state.change.changing = false;
			break;
		case 'CONTINUE':
			Local.forceLog(common.param('act_f'), 'clickToRead');
			MtaH5.clickStat('abc', { 'def': self.meta.name + '_' + self.meta.platform + '_clickToRead' });
			// MtaH5.clickStat('stats',{
			// 	stats: `${self.meta.name}_${self.meta.platform}_clickToRead`
			// });
			if (!self.share) {
				dispatch({ type: 'TO_READ', bid: 244004 });
			} else {
				// if the current env is adr&&wx
				if (env.vw === 'wx' && env.pt === 'adr') {
					sns.open(function (installStat, plat) {
						if (installStat === -2) {//浏览器
							// window.location.href="uniteqqreader://nativepage/client/bookshelf";
						} else if (installStat) {
							// if qqreader is installed
							bnative.toReadBook(244004);
							setTimeout(function () {
								self.mask_download.show = true;
							}, 1000);
						} else {
							self.mask_download.show = true;
						}
					});
				} else {
					bnative.toReadBook(244004);
					setTimeout(function () {
						self.mask_download.show = true;
					}, 1000);
				};
			}
			break;

	}
}

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutator: mutator };

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vix_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farm_js__ = __webpack_require__(13);




Vue.use(__WEBPACK_IMPORTED_MODULE_0__Vix_js__["a" /* default */]);

var store = __WEBPACK_IMPORTED_MODULE_0__Vix_js__["a" /* default */].createStore([__WEBPACK_IMPORTED_MODULE_1__base_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__farm_js__["a" /* default */]]);

/* harmony default export */ __webpack_exports__["a"] = store;

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

exports.default = {
	components: {
		Debugger: __webpack_require__(79),
		MaskLoading: __webpack_require__(82),
		MaskOver: __webpack_require__(83),

		MaskDownload: __webpack_require__(71),
		MaskShare: __webpack_require__(84),
		MaskAuthor: __webpack_require__(80),
		MaskComments: __webpack_require__(81),

		MyAudio: __webpack_require__(72),
		IconMusic: __webpack_require__(70),
		Date: __webpack_require__(78),

		BookFarm: __webpack_require__(66),
		SnowConfetti: __webpack_require__(4),
		SmokyText: __webpack_require__(8),

		Pages: __webpack_require__(76),
		Fader: __webpack_require__(6),
		Comments: __webpack_require__(5)
	},
	data: function data() {
		return {};
	},
	computed: {
		page: function page() {
			return this.$store.state.page;
		},
		img: function img() {
			return this.$store.state.img;
		},
		change: function change() {
			return this.$store.state.change;
		}
	},
	watch: {},
	created: function created() {},
	mounted: function mounted() {
		console.log(this.$store);
		this.$store.dispatch({ type: 'INIT' });
	},
	methods: {
		touchmove: function touchmove(e) {
			e.preventDefault();
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    img: {},
    change: {},
    dispatch: {}
  },
  components: {
    CoverSnowConfetti: __webpack_require__(67)
  },
  data: function data() {
    return {
      openedBefore: false,
      changing: false,
      state: '',
      pages: [{
        state: ''
      }],
      current: 0
    };
  },
  watch: {
    current: function current(nv, ov) {
      var _this = this;

      // this.pages.forEach((a,i)=>{
      //  if(ov===i){
      //    a.state = 'turned';
      //  }
      // })
      this.changing = true;
      setTimeout(function () {
        _this.changing = false;
      }, 1000);

      if (nv === 1) {
        this.pages[0].state = 'turned';
        setTimeout(function () {
          _this.dispatch({
            type: 'SWITCH',
            stage: 1
          });
        }, 600);
      } else {
        this.pages[0].state = '';
      }
    },
    'change.stage': function changeStage(nv) {
      if (nv === 0) {
        this.current--;
      }
    }
  },
  mounted: function mounted() {
    // setTimeout(()=>{
    //  if( this.openedBefore===false ){
    //    this.current++;
    //  };
    // },3000)
  },
  methods: {
    handleClick: function handleClick() {
      if (!this.changing) {
        document.querySelector('audio').play();
        this.openedBefore = true;
        this.current++;
      };
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
  props: {
    change: {},
    dispatch: {}
  },
  data: function data() {
    return {
      playing: false,
      state: 'ready',
      cycle: 0,
      current: 0,
      over: false,
      comments: [{
        text: '［媒体评论］朱天文：我在台北，我读到了李娟，真不可思议我同时就在李娟那唯一无二的新疆。',
        state: ''
      }, {
        text: '［媒体评论］舒飞廉：她的出现，就像当年的萧红一样，是天才的出现。李娟和阿勒泰的关系...',
        state: ''
      }, {
        text: '［媒体评论］王安忆：她的文字一看就认出来，她的文字世界里，世界很大，时间很长，人变...',
        state: ''
      }, {
        text: '［读者评价］很多年不曾见过的温暖又干净的文字 ——dana (成都)',
        state: ''
      }, {
        text: '［读者评价］最几年读过的最好的华语散文，让我对文学有了一些... ——Xiao (New York City)',
        state: ''
      }, {
        text: '［读者评价］文笔优美，带着孩子般的童趣和观察视角。看过之后,心中涌起... ——Fairylandyy',
        state: ''
      }]
    };
  },
  watch: {
    'change.page': function changePage(nv) {
      if (nv === 3) {
        if (this.playing === false) {
          this.playing = true;
          this.start();
        };
      }
    },
    current: function current(nv) {
      if (this.over) {
        this.comments[nv].state = 'class0';
        this.comments[nv - 1 >= 0 ? nv - 1 : nv + 5].state = 'class1';
        this.comments[nv - 2 >= 0 ? nv - 2 : nv + 4].state = 'class2';
        this.comments[nv - 3 >= 0 ? nv - 3 : nv + 3].state = 'over';
        this.comments[nv - 4 >= 0 ? nv - 4 : nv + 2].state = '';
      };
    },
    state: function state(nv) {}
  },
  mounted: function mounted() {
    // this.start();
  },
  methods: {
    show: function show() {
      this.dispatch({
        type: 'SHOW',
        what: 'mask_comments'
      });
    },
    restart: function restart() {
      this.stop();
      this.start();
    },
    stop: function stop() {
      this.cycle++;
      this.comments.forEach(function (a) {
        a.state = '';
      });
    },

    start: function start() {
      var _this = this;

      this.over = false;
      var cycle = this.cycle;
      setTimeout(function () {
        if (cycle !== _this.cycle) return;
        _this.comments[0].state = 'class0';
      }, 500);
      setTimeout(function () {
        if (cycle !== _this.cycle) return;
        _this.comments[0].state = 'class1';
        _this.comments[1].state = 'class0';
      }, 2500);
      setTimeout(function () {
        if (cycle !== _this.cycle) return;
        _this.comments[0].state = 'class2';
        _this.comments[1].state = 'class1';
        _this.comments[2].state = 'class0';
        setTimeout(function () {
          if (cycle !== _this.cycle) return;
          _this.current = 3;
          _this.over = true;
          var interval = setInterval(function () {
            if (cycle !== _this.cycle) {
              clearInterval(interval);
              return;
            };
            if (_this.current + 1 <= _this.comments.length - 1) {
              _this.current++;
            } else {
              _this.current = 0;
            }
          }, 2000);
        }, 2000);
      }, 4500);
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

function Confetti(cv) {
	this.cv = cv;
	//this.style = COLORS[~~range(0, 5)];
	//this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
	this.rgb = 'rgba(255,255,255';
	//this.r = ~~range(2, 6);
	this.r = ~~Canvas.random(2, 6);
	this.r2 = 2 * this.r;
	this.spawn();
}

Confetti.prototype = {
	PI_2: 2 * Math.PI,
	xpos: 0.5,
	spawn: function spawn() {
		this.opacity = 0;
		this.dop = 0.03 * Canvas.random(1, 4);
		this.x = Canvas.random(-this.r2, this.cv.$width - this.r2);
		this.y = Canvas.random(-20, this.cv.$height - this.r2);
		this.xmax = this.cv.$width - this.r;
		this.ymax = this.cv.$height - this.r;
		//this.vx = range(0, 2) + 8 * xpos - 5;
		this.vx = Canvas.random(-3, 0);
		//this.vy = 0.7 * this.r + range(-1, 1);
		this.vy = 1 * this.r + Canvas.random(-1, 1);
	},
	draw: function draw() {
		var ref;
		this.x += this.vx;
		this.y += this.vy;
		this.opacity += this.dop;
		if (this.opacity > 1) {
			this.opacity = 1;
			this.dop *= -1;
		}
		if (this.opacity < 0 || this.y > this.ymax) {
			this.spawn();
		}
		if (!(0 < (ref = this.x) && ref < this.xmax)) {
			this.x = (this.x + this.xmax) % this.xmax;
		}
		var ctx = this.cv.$ctx;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, this.PI_2, false);
		ctx.fillStyle = this.rgb + ',' + this.opacity + ')';
		ctx.fill();
	}
};

var CanvasConfetti = Canvas.extend({
	props: function props() {
		return {
			count: 60,
			COLORS: [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]]
		};
	},
	data: function data() {
		return {
			confetti: []
		};
	},
	beforePlay: function beforePlay() {
		var _this = this;

		this.$setSize(window.innerWidth, window.innerHeight);
		window.addEventListener('resize', function () {
			_this.$setSize(window.innerWidth, window.innerHeight);
		});
		for (var i = 1, j = 1, ref = this.count; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
			this.confetti.push(new Confetti(this));
		}
	},
	render: function render() {
		this.$ctx.clearRect(0, 0, this.$width, this.$height);
		this.confetti.forEach(function (a) {
			a.draw();
		});
	}
});

var cv;

exports.default = {
	props: {
		img: {},
		change: {}
	},
	data: function data() {
		return {
			class_: ''
		};
	},
	watch: {
		'change.stage': function changeStage(nv) {
			if (nv === 1) {
				cv.$pause();
			} else if (nv === 0) {
				cv.$resume();
			}
		}
	},
	mounted: function mounted() {
		cv = new CanvasConfetti({
			el: this.$refs.confetti,
			useInterval: 20
		});
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    change: {},
    dispatch: {},
    img: {}
  },
  components: {
    Comments: __webpack_require__(5),
    SmokyText: __webpack_require__(8)
  },
  methods: {
    show: function show() {
      this.dispatch({
        type: 'SHOW',
        what: 'mask_author'
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

exports.default = {
	props: {
		img: {},
		current: {}
	},
	data: function data() {
		return {
			//current: 0,
			switching: false,
			items: [{
				state: 'current',
				background: '/bg_0.png'
			}, {
				state: '',
				background: '/bg_1.png'
			}, {
				state: '',
				background: '/bg_2.png'
			}]
		};
	},
	watch: {
		current: function current(newV, oldV) {
			var _this = this;

			this.items[newV].state = 'enter';
			this.items[oldV].state = 'leave';
			setTimeout(function () {
				_this.items[newV].state = 'current';
				_this.items[oldV].state = '';
				_this.switching = false;
			}, 2000);
		}
	},
	methods: {
		toNext: function toNext() {
			if (!this.switching) {
				this.switching = true;
				if (this.current < this.items.length - 1) {
					this.current++;
				} else {
					this.current = 0;
				}
			};
		}
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

exports.default = {
	components: {

		SnowConfetti: __webpack_require__(4),
		Page0: __webpack_require__(73),
		Page1: __webpack_require__(74),
		Page2: __webpack_require__(75),
		EndPage: __webpack_require__(68),
		Fog: __webpack_require__(7)
	},
	props: {
		change: {},
		img: {},
		dispatch: {}
	},
	watch: {
		'change.stage': function changeStage(nv) {
			if (nv === 1) {
				// $('.book112').turn('peel','br');
			}
		},
		'change.page': function changePage(nv, ov) {
			console.log(nv, ov);
			if (nv > ov) {
				$('.book112').turn('next');
			} else if (nv < ov) {
				$('.book112').turn('previous');
			}
			// $('.book112').turn('peel','br');
		}
	},
	mounted: function mounted() {
		setTimeout(function () {
			console.log(rem.val * 7.5);
			$('.book112').turn({
				width: rem.val * 7.5 * 2,
				height: rem.h,
				elevation: 50,
				gradients: true,
				autoCenter: false
			});
			// $('.book112').turn('peel','br');
		}, 500);
	},
	methods: {}
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
    'change.page': function changePage(nv, ov) {
      var _this = this;

      if (nv === 3) {
        this.class_ = 'leave';
        setTimeout(function () {
          _this.class_ = 'hidden';
        }, 1000);
      } else if (nv === 2 && ov === 3) {
        this.class_ = '';
      }
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

exports.default = {
  data: function data() {
    return {
      show: false
    };
  },
  watch: {
    // 'change': function(nv){

    // }
  },
  computed: {
    change: function change() {
      return this.$store.state.change;
    },
    music: function music() {
      return this.$store.state.music;
    }
  }
};

/***/ }),
/* 24 */
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
/* 25 */
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
		music: function music() {
			return this.$store.state.music;
		},
		change: function change() {
			return this.$store.state.change;
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
		'music.on': function musicOn(nv) {
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
			if (_this.music.on === true) {
				_this.$refs.audio.play();
			};
		});
		this.$refs.audio.addEventListener('canplaythrough', function () {
			console.log('canplaythrough');
			if (_this.music.on === true) {
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
/* 26 */
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


var tl;

exports.default = {
  props: {
    img: {},
    change: {},
    dispatch: {}
  },
  watch: {
    'change.stage': function changeStage(nv) {
      if (nv === 1) {
        setTimeout(function () {
          tl.play();
        }, 1000);
      } else if (nv === 0) {
        setTimeout(function () {
          tl.restart().pause();
        }, 500);
      }
    },
    'change.page': function changePage(nv) {
      if (nv === 1) {
        setTimeout(function () {
          tl.restart().pause();
        }, 500);
      }
      if (nv === 0) {
        tl.play();
      }
    }
  },
  mounted: function mounted() {
    var self = this;

    var t_0_0 = this.$refs.t_0_0;
    var t_0_1 = this.$refs.t_0_1;
    var t_0_2 = this.$refs.t_0_2;
    var t_0_3 = this.$refs.t_0_3;
    var t_0_4 = this.$refs.t_0_4;

    tl = new TimelineMax();

    var duration = 2;
    var delay = -1.5;

    tl.fromTo(t_0_0, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%'
    }).fromTo(t_0_1, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay
    }).fromTo(t_0_2, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay
    }).fromTo(t_0_3, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay
    }).fromTo(t_0_4, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay,
      onComplete: function onComplete() {
        self.dispatch({ type: 'SWITCH_OVER' });
        if (self.change.page === 0) {
          $('.book112').turn('peel', 'br');
        };
      }
    }).pause();
  },
  methods: {
    animate: function animate() {

      // tl.fromTo( penguin_0,0.6,{
      //  transformOrigin: '100% 100%',
      //  rotation: '50deg'
      // },{
      //  rotation: '0'
      // }).to( penguin_0,0.5,{
      //  x: '200%'
      // }).fromTo( penguin_1,0.6,{
      //  transformOrigin: '0% 100%',
      //  x: '-100%',
      //  rotation: '-50deg'
      // },{
      //  x: '0%',
      //  rotation: 0
      // }).to( penguin_1,0.5,{
      //  x: '-200%'
      // }).fromTo( penguin,0.5,{
      //  y: '50%'
      // },{
      //  y: '0%',
      //  onStart: function(){
      //  },
      //  ease: Elastic
      // }).fromTo( Focus,0.3,{
      //  opacity: 1
      // },{
      //  opacity: 0,
      //  delay: 0.3
      // }).to( Focus,0.5,{
      //  opacity: 0.7,
      //  onComplete: this.CHANGE_STAGE.bind(this)
      // })
    }
  }
};

/***/ }),
/* 27 */
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


var tl;

exports.default = {
  props: {
    img: {},
    change: {},
    dispatch: {}
  },
  watch: {
    'change.page': function changePage(nv, ov) {
      if (nv === 1) {
        tl.restart().pause();
        setTimeout(function () {
          tl.play();
        }, 500);
      }
    }
  },
  mounted: function mounted() {
    var self = this;

    var t_1_0 = this.$refs.t_1_0;
    var t_1_1 = this.$refs.t_1_1;
    var t_1_2 = this.$refs.t_1_2;
    var t_1_3 = this.$refs.t_1_3;
    var t_1_4 = this.$refs.t_1_4;

    tl = new TimelineMax();

    var duration = 2;
    var delay = -1.5;

    tl.fromTo(t_1_0, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%'
    }).fromTo(t_1_1, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay
    }).fromTo(t_1_2, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay
    }).fromTo(t_1_3, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay
    }).fromTo(t_1_4, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay,
      onComplete: function onComplete() {
        self.dispatch({ type: 'SWITCH_OVER' });
        if (self.change.page === 1) {
          $('.book112').turn('peel', 'br');
        };
      }
    }).pause();
  },
  methods: {}
};

/***/ }),
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
//
//
//
//
//
//
//
//
//
//


var tl;
exports.default = {
  props: {
    img: {},
    change: {},
    dispatch: {}
  },
  watch: {
    'change.page': function changePage(nv) {
      if (nv === 2) {
        tl.restart().pause();
        setTimeout(function () {
          tl.play();
        }, 500);
      }
    }
  },
  mounted: function mounted() {
    var self = this;

    var t_2_0 = this.$refs.t_2_0;
    var t_2_1 = this.$refs.t_2_1;
    var t_2_2 = this.$refs.t_2_2;
    var t_2_3 = this.$refs.t_2_3;
    var t_2_4 = this.$refs.t_2_4;
    var t_2_5 = this.$refs.t_2_5;

    tl = new TimelineMax();

    var duration = 2;
    var delay = -1.5;

    tl.fromTo(t_2_0, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%'
    }).fromTo(t_2_1, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay
    }).fromTo(t_2_2, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay
    }).fromTo(t_2_3, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay
    }).fromTo(t_2_4, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay
    }).fromTo(t_2_5, duration, {
      opacity: 0,
      rotationY: -90,
      x: '100%'
    }, {
      opacity: 1,
      rotationY: 0,
      x: '0%',
      delay: delay,
      onComplete: function onComplete() {
        self.dispatch({ type: 'SWITCH_OVER' });
        if (self.change.page === 2) {
          $('.book112').turn('peel', 'br');
        };
      }
    }).pause();
  },
  methods: {}
};

/***/ }),
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
//
//
//
//
//
//
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
    change: {},
    img: {},
    dispatch: {}
  },
  data: function data() {
    return {
      class_: 'hidden',
      x0: null,
      x1: null,
      dx: 0
    };
  },
  components: {
    Fader: __webpack_require__(6),
    FlipBook: __webpack_require__(69),
    Fog: __webpack_require__(7),
    SnowConfetti: __webpack_require__(4)
  },
  watch: {
    'change.stage': function changeStage(nv) {
      var _this = this;

      if (nv === 1) {
        this.class_ = '';
        setTimeout(function () {
          _this.class_ = 'enter';
        }, 50);
      } else if (nv === 0) {
        this.class_ = '';
        setTimeout(function () {
          _this.class_ = 'hidden';
        }, 1000);
      }
    }
  },
  methods: {
    touchstart: function touchstart(e) {
      this.x0 = null;
      this.x1 = null;
      this.dx = 0;
      this.x0 = e.changedTouches[0].pageX;
    },
    touchmove: function touchmove(e) {
      e.preventDefault();
      this.x1 = e.changedTouches[0].pageX;
      this.dx += this.x1 - this.x0;
      this.x0 = e.changedTouches[0].pageX;
    },
    touchend: function touchend(e) {
      console.log(this.dx);
      if (this.dx < -4) {
        this.next();
      } else if (this.dx > 4) {
        this.prev();
      }
    },
    next: function next() {
      if (this.change.page < 3) {
        this.dispatch({
          type: 'SWITCH',
          page: this.change.page + 1
        });
      };
    },
    prev: function prev() {
      if (this.change.page > 0) {
        console.log(this.change.page);
        this.dispatch({
          type: 'SWITCH',
          page: this.change.page - 1
        });
      } else {
        this.dispatch({
          type: 'SWITCH',
          stage: 0
        });
      }
    }
  }
};

/***/ }),
/* 30 */
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

exports.default = {
	data: function data() {
		return {
			className: ''
		};
	},
	mounted: function mounted() {},
	methods: {
		go: function go() {
			this.className = this.className === '' ? 'active' : '';
		}
	}
};

/***/ }),
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

function Confetti(cv) {
	this.cv = cv;
	//this.style = COLORS[~~range(0, 5)];
	//this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
	this.rgb = 'rgba(255,255,255';
	//this.r = ~~range(2, 6);
	this.r = ~~Canvas.random(2, 6);
	this.r2 = 2 * this.r;
	this.spawn();
}

Confetti.prototype = {
	PI_2: 2 * Math.PI,
	xpos: 0.5,
	spawn: function spawn() {
		this.opacity = 0;
		this.dop = 0.03 * Canvas.random(1, 4);
		this.x = Canvas.random(-this.r2, this.cv.$width - this.r2);
		this.y = Canvas.random(-20, this.cv.$height - this.r2);
		this.xmax = this.cv.$width - this.r;
		this.ymax = this.cv.$height - this.r;
		//this.vx = range(0, 2) + 8 * xpos - 5;
		this.vx = Canvas.random(-3, 0);
		//this.vy = 0.7 * this.r + range(-1, 1);
		this.vy = 1 * this.r + Canvas.random(-1, 1);
	},
	draw: function draw() {
		var ref;
		this.x += this.vx;
		this.y += this.vy;
		this.opacity += this.dop;
		if (this.opacity > 1) {
			this.opacity = 1;
			this.dop *= -1;
		}
		if (this.opacity < 0 || this.y > this.ymax) {
			this.spawn();
		}
		if (!(0 < (ref = this.x) && ref < this.xmax)) {
			this.x = (this.x + this.xmax) % this.xmax;
		}
		var ctx = this.cv.$ctx;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, this.PI_2, false);
		ctx.fillStyle = this.rgb + ',' + this.opacity + ')';
		ctx.fill();
	}
};

var CanvasConfetti = Canvas.extend({
	props: function props() {
		return {
			count: 60,
			COLORS: [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]]
		};
	},
	data: function data() {
		return {
			confetti: []
		};
	},
	beforePlay: function beforePlay() {
		var _this = this;

		this.$setSize(window.innerWidth, window.innerHeight);
		window.addEventListener('resize', function () {
			_this.$setSize(window.innerWidth, window.innerHeight);
		});
		for (var i = 1, j = 1, ref = this.count; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
			this.confetti.push(new Confetti(this));
		}
	},
	render: function render() {
		this.$ctx.clearRect(0, 0, this.$width, this.$height);
		this.confetti.forEach(function (a) {
			a.draw();
		});
	}
});

exports.default = {
	props: {
		img: {},
		change: {}
	},
	data: function data() {
		return {
			class_: ''
		};
	},
	watch: {
		'change.page': function changePage(nv, ov) {
			var _this2 = this;

			if (nv === 3) {
				this.class_ = 'leave';
				setTimeout(function () {
					_this2.class_ = 'hidden';
				}, 1000);
			} else if (nv === 2 && ov === 3) {
				this.class_ = '';
			}
		}
	},
	mounted: function mounted() {
		new CanvasConfetti({
			el: this.$refs.confetti,
			useInterval: 20
		});
	}
};

/***/ }),
/* 32 */,
/* 33 */
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

exports.default = {
  data: function data() {
    return {
      years: '',
      months: '',
      days: ''
    };
  },
  created: function created() {
    var months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    var days = ['--', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九', '三十', '三十一'];
    var date = new Date();
    this.months = months[date.getMonth()];
    this.days = days[date.getDate()];
  }
};

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		mask: function mask() {
			return this.$store.state.mask_author;
		}
	},
	data: function data() {
		return {};
	},
	methods: {
		touchmove: function touchmove(e) {
			e.stopPropagation();
		},
		hide: function hide() {
			this.$store.dispatch({
				type: 'HIDE',
				what: 'mask_author'
			});
		}
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			return this.$store.state.mask_comments;
		}
	},
	mounted: function mounted() {
		// setTimeout(()=>{
		// 	console.log('dog')
		// 	var myScroll = new IScroll('#iscroll', { mouseWheel: true });
		// },1000);
	},
	methods: {
		touchmove: function touchmove(e) {
			e.stopPropagation();
		},
		hide: function hide() {
			this.$store.dispatch({
				type: 'HIDE',
				what: 'mask_comments'
			});
		}
	}
};

/***/ }),
/* 37 */
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
/* 38 */
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
/* 39 */
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
		mask: function mask() {
			return this.$store.state.mask_share;
		}
	},
	data: function data() {
		return {};
	},
	methods: {
		touchmove: function touchmove(e) {
			e.stopPropagation();
		},
		hide: function hide() {
			this.$store.dispatch({
				type: 'HIDE',
				what: 'mask_share'
			});
		}
	}
};

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
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */,
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(41)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(86),
  /* scopeId */
  "data-v-1163c226",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(43)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(88),
  /* scopeId */
  "data-v-14cf985d",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(108),
  /* scopeId */
  "data-v-cc948358",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(90),
  /* scopeId */
  "data-v-286f8748",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(49)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  "data-v-3f4529d8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(91),
  /* scopeId */
  "data-v-30d68004",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(57)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  "data-v-6bd5e09c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  "data-v-72ef4bdc",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(50)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(95),
  /* scopeId */
  "data-v-538f04d3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(51)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  "data-v-539d1c54",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(52)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(97),
  /* scopeId */
  "data-v-53ab33d5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(98),
  /* scopeId */
  "data-v-573f2b96",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(104),
  /* scopeId */
  "data-v-75120c6e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(47)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(92),
  /* scopeId */
  "data-v-3238933c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  "data-v-a6ef5422",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(40)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(85),
  /* scopeId */
  "data-v-09ea12d8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(60)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(105),
  /* scopeId */
  "data-v-a2637ff0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(64)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(109),
  /* scopeId */
  "data-v-e723f090",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(54)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(99),
  /* scopeId */
  "data-v-593cbbaa",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.show),
      expression: "mask.show"
    }],
    staticClass: "MaskComments"
  }, [_c('div', {
    staticClass: "content_666"
  }, [_c('div', {
    staticClass: "content_667",
    style: ('background-image:url(' + _vm.img + '/bg.jpg);background-size: 4rem 4rem;')
  }, [_c('img', {
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/close.png'
    },
    on: {
      "click": _vm.hide
    }
  }), _vm._m(0)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "iscroll"
    }
  }, [_c('div', {
    staticClass: "scroller"
  }, [_c('p', {
    staticClass: "p0"
  }, [_vm._v("媒体评论")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("朱天文：我在台北，我读到了李娟，真不可思议我同时就在李娟那唯一无二的新疆。")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("舒飞廉：她的出现，就像当年的萧红一样，是天才的出现。李娟和阿勒泰的关系，就像萧红和呼兰河的关系。")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("王安忆：她的文字一看就认出来，她的文字世界里，世界很大，时间很长，人变得很小，人是偶然出现的东西。那里的世界很寂寞，人会无端制造出喧哗。")]), _c('p', {
    staticClass: "p0"
  }, [_vm._v("读者评价")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("很多年不曾见过的温暖又干净的文字——dana (成都)")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("最几年读过的最好的华语散文，让我对文学有了一些新的信心，最好的文字，在文坛之外，在真实的民间——Xiao (New York City)")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("文笔优美，带着孩子般的童趣和观察视角。看过之后,心中涌起一阵感动。好想去阿勒泰看一看。 ——Fairylandyy")])])])
}]}

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "root rem_height"
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
    staticClass: "main rem_height"
  }, [_c('mask-download'), _c('mask-author'), _c('mask-comments'), _c('mask-share'), _c('my-audio'), _c('icon-music'), _c('div', {
    staticClass: "cover rem_height",
    on: {
      "touchmove": function($event) {
        _vm.touchmove($event)
      }
    }
  }, [_c('book-farm', {
    attrs: {
      "dispatch": _vm.$store.dispatch,
      "img": _vm.img,
      "change": _vm.change
    }
  }), _c('date')], 1), _c('pages', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change,
      "dispatch": _vm.$store.dispatch
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "SmokyText",
    class: _vm.className,
    on: {
      "click": _vm.go
    }
  }, [_vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "text"
  }, [_c('span', [_vm._v("冬")]), _c('span', [_vm._v("牧")]), _c('span', [_vm._v("场")]), _c('span', [_vm._v("冬")]), _c('span', [_vm._v("牧")]), _c('span', [_vm._v("场")]), _c('br'), _c('span', [_vm._v("冬")]), _c('span', [_vm._v("牧")]), _c('span', [_vm._v("场")]), _c('span', [_vm._v("冬")]), _c('span', [_vm._v("牧")]), _c('span', [_vm._v("场")]), _c('br')])
}]}

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "BookSpace rem_height",
    on: {
      "touchstart": _vm.handleClick
    }
  }, [_c('img', {
    staticClass: "whale",
    attrs: {
      "src": _vm.img + '/bg_cover_2.png'
    }
  }), _c('div', {
    staticClass: "to_enter_1123"
  }, [_vm._v("点击进入书的世界")]), _c('div', {
    staticClass: "book",
    style: ('background-image:url(' + _vm.img + '/cover.jpg);background-size:100% 100%;')
  }, _vm._l((_vm.pages), function(a, i) {
    return _c('div', {
      staticClass: "page__",
      class: a.state,
      style: ('z-index:' + (100 - i))
    }, [_c('div', {
      staticClass: "face front"
    }, [_c('img', {
      staticClass: "tiny_cover",
      attrs: {
        "src": _vm.img + '/cover.png'
      }
    }), _c('cover-snow-confetti', {
      attrs: {
        "change": _vm.change
      }
    })], 1), _c('div', {
      staticClass: "face back"
    })])
  }))])
},staticRenderFns: []}

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Fader",
    on: {
      "click": _vm.toNext
    }
  }, _vm._l((_vm.items), function(a, i) {
    return _c('div', {
      staticClass: "item",
      class: a.state,
      style: ('background: url(' + _vm.img + a.background + ';background-size:100% auto;')
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.change.stage === 1),
      expression: "change.stage===1"
    }],
    staticClass: "end-page rem_height",
    style: ('background-image:url(' + _vm.img + '/bg.jpg);background-size:4rem 4rem;')
  }, [_c('div', {
    staticClass: "content__",
    style: ('background-image:url(' + _vm.img + '/bg.jpg);background-size:4rem 4rem;')
  }, [_c('div', {
    staticClass: "text_top"
  }, [_vm._v("\n      春天接羔，夏天催膘，秋天配种，冬天孕育。羊的一生是牧人的一年，牧人的一生呢？这绵延千里的家园，这些大地最隐秘微小的褶皱，这每一处最狭小脆弱的栖身之地……青春啊，财富啊，爱情啊，希望啊，全都默默无声……\n    ")]), _c('div', {
    staticClass: "text_title"
  }, [_vm._v("\n      《冬牧场》\n    ")]), _c('div', {
    staticClass: "text_sub"
  }, [_c('p', [_vm._v("——李娟著")]), _c('img', {
    attrs: {
      "src": _vm.img + '/to_learn.png'
    },
    on: {
      "click": _vm.show
    }
  })]), _c('div', {
    staticClass: "text_what"
  }, [_vm._v("\n      她的散文被称为本世纪最后的散文\n    ")]), _c('img', {
    staticClass: "btn_read",
    attrs: {
      "src": _vm.img + '/btn_read.png'
    },
    on: {
      "click": function($event) {
        _vm.dispatch({
          type: 'CONTINUE'
        })
      }
    }
  }), _c('comments', {
    attrs: {
      "change": _vm.change,
      "dispatch": _vm.dispatch
    }
  }), _c('div', {
    staticClass: "btnsContainer"
  }, [_c('div', {
    staticClass: "btns"
  }, [_c('div', {
    staticClass: "btn_share",
    on: {
      "click": function($event) {
        _vm.dispatch({
          type: 'SHARE'
        })
      }
    }
  }, [_vm._v("\n          分享\n        ")]), _c('div', {
    staticClass: "btn_replay",
    on: {
      "click": function($event) {
        _vm.dispatch({
          type: 'REPLAY'
        })
      }
    }
  }, [_vm._v("\n          再看一遍\n        ")])])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.change.stage === 1 && _vm.change.page < 3),
      expression: "change.stage===1&&change.page<3"
    }],
    staticClass: "IconMusic",
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TURN_MUSIC'
        })
      }
    }
  }, [_c('div', {
    staticClass: "_bar _bar0",
    class: _vm.music.on ? 'active' : ''
  }), _c('div', {
    staticClass: "_bar _bar1",
    class: _vm.music.on ? 'active' : ''
  }), _c('div', {
    staticClass: "_bar _bar2",
    class: _vm.music.on ? 'active' : ''
  })])
},staticRenderFns: []}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "DEBUG"
  }, [_c('div', {
    staticClass: "fixed__"
  }, [_vm._v("\n\t\tloggedIn: " + _vm._s(_vm.state.loggedIn) + ", day: " + _vm._s(_vm.state.day)), _c('br'), _vm._v("\n\t\tcurrent: " + _vm._s(_vm.state.current)), _c('br')])])
},staticRenderFns: []}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Fog",
    class: _vm.class_
  }, [_c('div', {
    staticClass: "img",
    style: ('background-image:url(' + _vm.img + '/fog.png); background-size:15rem auto;')
  })])
},staticRenderFns: []}

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "FlipBook"
  }, [_c('div', {
    ref: "book",
    staticClass: "book112"
  }, [_c('div', {
    staticClass: "page11",
    style: ('background-image:url(' + _vm.img + '/bg_0.png);background-size:100% auto;')
  }, [_c('page0', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change,
      "dispatch": _vm.dispatch
    }
  })], 1), _c('div', {
    staticClass: "page11"
  }), _c('div', {
    staticClass: "page11",
    style: ('background-image:url(' + _vm.img + '/bg_1.png);background-size:100% auto;')
  }, [_c('page1', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change,
      "dispatch": _vm.dispatch
    }
  })], 1), _c('div', {
    staticClass: "page11"
  }), _c('div', {
    staticClass: "page11",
    style: ('background-image:url(' + _vm.img + '/bg_2.png);background-size:100% auto;')
  }, [_c('page2', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change,
      "dispatch": _vm.dispatch
    }
  })], 1), _c('div', {
    staticClass: "page11"
  }), _c('div', {
    staticClass: "page11"
  }, [_c('end-page', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change,
      "dispatch": _vm.dispatch
    }
  })], 1)])])
},staticRenderFns: []}

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Page0 rem_height"
  }, [_c('img', {
    ref: "t_0_0",
    staticClass: "t_0_0",
    attrs: {
      "src": _vm.img + '/t_0_0.png'
    }
  }), _c('img', {
    ref: "t_0_1",
    staticClass: "t_0_1",
    attrs: {
      "src": _vm.img + '/t_0_1.png'
    }
  }), _c('img', {
    ref: "t_0_2",
    staticClass: "t_0 t_0_2",
    attrs: {
      "src": _vm.img + '/t_0_2.png'
    }
  }), _c('img', {
    ref: "t_0_3",
    staticClass: "t_0 t_0_3",
    attrs: {
      "src": _vm.img + '/t_0_3.png'
    }
  }), _c('img', {
    ref: "t_0_4",
    staticClass: "t_0 t_0_4",
    attrs: {
      "src": _vm.img + '/t_0_4.png'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Page0 rem_height"
  }, [_c('img', {
    ref: "t_1_0",
    staticClass: "t_1_0",
    attrs: {
      "src": _vm.img + '/t_1_0.png'
    }
  }), _c('img', {
    ref: "t_1_1",
    staticClass: "t_1_1",
    attrs: {
      "src": _vm.img + '/t_1_1.png'
    }
  }), _c('img', {
    ref: "t_1_2",
    staticClass: "t_1 t_1_2",
    attrs: {
      "src": _vm.img + '/t_1_2.png'
    }
  }), _c('img', {
    ref: "t_1_3",
    staticClass: "t_1 t_1_3",
    attrs: {
      "src": _vm.img + '/t_1_3.png'
    }
  }), _c('img', {
    ref: "t_1_4",
    staticClass: "t_1 t_1_4",
    attrs: {
      "src": _vm.img + '/t_1_4.png'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Page0 rem_height"
  }, [_c('img', {
    ref: "t_2_0",
    staticClass: "t_2_0",
    attrs: {
      "src": _vm.img + '/t_2_0.png'
    }
  }), _c('img', {
    ref: "t_2_1",
    staticClass: "t_2_1",
    attrs: {
      "src": _vm.img + '/t_2_1.png'
    }
  }), _c('img', {
    ref: "t_2_2",
    staticClass: "t_2 t_2_2",
    attrs: {
      "src": _vm.img + '/t_2_2.png'
    }
  }), _c('img', {
    ref: "t_2_3",
    staticClass: "t_2 t_2_3",
    attrs: {
      "src": _vm.img + '/t_2_3.png'
    }
  }), _c('img', {
    ref: "t_2_4",
    staticClass: "t_2 t_2_4",
    attrs: {
      "src": _vm.img + '/t_2_4.png'
    }
  }), _c('img', {
    ref: "t_2_5",
    staticClass: "t_2 t_2_5",
    attrs: {
      "src": _vm.img + '/t_2_5.png'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Pages rem_height",
    class: _vm.class_,
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchmove": function($event) {
        _vm.touchmove($event)
      },
      "touchend": function($event) {
        _vm.touchend(_vm.$evnet)
      }
    }
  }, [_c('flip-book', {
    attrs: {
      "img": _vm.img,
      "change": _vm.change,
      "dispatch": _vm.dispatch
    }
  }), _c('fog'), _c('snow-confetti', {
    attrs: {
      "change": _vm.change
    }
  }), _c('div', {
    staticClass: "btn_next",
    on: {
      "click": _vm.next
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.show),
      expression: "mask.show"
    }],
    staticClass: "MaskShare",
    on: {
      "click": _vm.hide
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.img + '/text_share.png'
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 100 */,
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('canvas', {
    ref: "confetti",
    staticClass: "Confetti rem_height",
    class: _vm.class_
  })
},staticRenderFns: []}

/***/ }),
/* 102 */
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
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MyAudio"
  }, [_c('audio', {
    ref: "audio",
    attrs: {
      "src": "../adr/farm.mp3",
      "preload": "",
      "loop": ""
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Date"
  }, [_c('p', {
    staticClass: "first_"
  }, [_vm._v("二零一七年" + _vm._s(_vm.months) + "月" + _vm._s(_vm.days) + "日")]), _c('p', [_vm._v("遇见")])])
},staticRenderFns: []}

/***/ }),
/* 105 */
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
/* 106 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.show),
      expression: "mask.show"
    }],
    staticClass: "MaskAuthor"
  }, [_c('div', {
    staticClass: "content_666"
  }, [_c('div', {
    staticClass: "content_667",
    style: ('background-image:url(' + _vm.img + '/bg.jpg);background-size: 4rem 4rem;')
  }, [_c('img', {
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/close.png'
    },
    on: {
      "click": _vm.hide
    }
  }), _c('p', {
    staticClass: "p0"
  }, [_vm._v("李娟")]), _c('p', {
    staticClass: "p1"
  }, [_vm._v("1979年生于新疆。高中毕业后一度跟随家庭进入阿尔泰深山牧场，经营一家杂货店和裁缝铺，与逐水草而居的哈萨克牧民共同生活。")]), _c('p', {
    staticClass: "p2"
  }, [_vm._v("1999年开始写作。出版有散文集《九篇雪》、《我的阿勒泰》、《阿勒泰的角落》、《走夜路请放声歌唱》，在读者中产生巨大回响，被誉为文坛清新之风，来自阿勒泰的精灵吟唱。现供职于阿勒泰喀纳斯景区。")])])])])
},staticRenderFns: []}

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Comments",
    on: {
      "click": _vm.show
    }
  }, _vm._l((_vm.comments), function(a) {
    return _c('div', {
      staticClass: "panel-arrow",
      class: a.state
    }, [_c('div', {
      staticClass: "arrow"
    }), _c('div', {
      staticClass: "panel"
    }, [_vm._v("\n      " + _vm._s(a.text) + "\n    ")])])
  }))
},staticRenderFns: []}

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('canvas', {
    ref: "confetti",
    staticClass: "Confetti",
    class: _vm.class_
  })
},staticRenderFns: []}

/***/ }),
/* 109 */
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ })
/******/ ]);