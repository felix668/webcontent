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
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  "data-v-6acf159e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rem_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rem_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__rem_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_scss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_scss__);

// import './debugger.js';
//import './config.js';


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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = {
  title: '第一章 楚氏半乢州',
  body: ['大晋西南边荒，十万莽荒之侧，乢（gai）州新立不足百年，独占十万大山地利。', '玄武岩混合铁汁垒成的乢州城墙通体漆黑，一弯银钩洒下淡淡清辉，乢州城在月色下犹如一头黑色巨兽，静静的匍匐在山岭之中。', '“天干物燥，小心火烛！”', '值夜的更夫有气无力的声音在乢州城的大街小巷中回荡，几只流浪的猫狗在街头巷尾对峙，狗吠声、猫叫声，更有路边院墙的檐瓦被逃窜的猫儿踩落，掉落地面摔得粉碎的脆响。', '几条黑影从街头巷角拐了出来，站在路边向空荡荡并无人影的道路两侧张望了一阵，悄无声息的取出一根又一根青铜铸成的短杖，用力的插在街头。', '三尺多长的短杖亮起，一条条奇异的纹路犹如活物在短杖上流动，短杖上喷出淡淡的青色光芒，迅速融入了朦胧的月色，一个直径数里的结界将乢州城东的一座巨大宅邸笼罩在内。', '这个结界不仅封锁了空中，更渗入地下，化为一个硕大的圆球，将地下也彻底封锁。', '巨宅内灯火通明，四处紧要所在，无数劲装打扮的家丁护卫屏住呼吸，双手下垂，谨然肃立。十几队身披软甲，腰间佩剑的护卫牵着一头头体型壮硕、小牛犊子大小的虎头獒，顺着院墙往来游走。', '无数衣饰华丽的丫鬟、侍女犹如穿花蝴蝶一般，围绕着巨宅正中的一进院落小步奔走，俏丽的脸蛋绷得紧紧的，无形透着一股子让人窒息的紧张气息。', '宅邸的主人，乢州楚氏，又号称‘半乢州’。', '九代之前，楚氏高祖只是走街过巷的街头小贩，不知哪里来的大造化，家当犹如滚雪球一般越滚越大，后来更参与了大晋开辟乢州的开荒大计，一举奠定了乢州第一豪门的基础。', '今日楚氏独占乢州盐、铁、生药、皮毛、木材、桑蚕等营生，门下盐工、矿工、药工、木工、猎户、织工数以十万计，一州之人皆云‘乢州风流十分，楚氏独占半州’。', '正中的那进院落中，数十名劲装悍妇垂手肃立，站在院子游廊下不敢出声。', '院子里，一名身材高大，身穿紫色锦缎员外袍，袍子上绣满了万字不到头喜庆花纹，看去五十岁许的虬髯男子紧张得浑身直哆嗦，眼睛直勾勾的盯着院子正房紧闭的房门。', '偶尔房门开合一下，几个仆妇、侍女快步的进出，虬髯男子身边的空气中就突然响起尖锐的‘嗤嗤’声，好似有一名高明的剑客正在急速挥剑一般。', '另一名身穿青色秀士长衫，生得面容俊朗的青年男子则是背着双手，犹如走马灯一样绕着院子乱窜。这男子步伐看似不快，身影却拉成了一条长长的青色影子，只听满院子‘嗖嗖’风声，寻常人根本看不清这青年的身影。', '突然间，虬髯大汉狠狠一跺脚，指着快步乱走的青年男子厉声喝道：“混账东西，说了多少次了，每逢大事有静气，静，静，静，精气，静心，静神！”', '话音未落，正房的房门突然打开，一个健壮婆子冲了出来，大声叫唤道：“快，快，烧好的热水，快，快，棉布巾！叫大夫仔细备着，唉哟！”', '‘咕咚’一声，虬髯大汉双腿一软跪在了地上，他举起双手，看着天空低声的咕哝道：“唉哟，列祖列宗保佑，我楚氏九代单传，九代单传啊！一定要老小平安，一定要是个大胖孙儿！”', '青年男子‘唰’的一下停在了虬髯大汉身边，双手按在大汉肩膀上干笑道：“爹，每逢大事有静气啊！”', '虬髯大汉一跃而起，一巴掌拍在了青年男子的肩膀上：“混账东西，这不是大事，这是天大的事啊！我楚氏九代单传！列祖列宗咧，这次可一定不能出篓子咧！”', '就听急促的脚步声传来，一名身穿青色长衫的清癯老人急匆匆的走进院子，凑到了虬髯大汉和青年男子身边，急促的低声说道：“老爷，少爷，江大人来了。”', '“哪个江大人？”青年男子还没吭声，虬髯大汉已经目光一瞪，恶狠狠的朝那清癯老人横了一眼。', '“江馗江大人！”清癯老人脖子一缩，干笑道：“老奴知晓这几日……”', '虬髯大汉蛮横的打断了清癯老人的话：“知道这几日家里有大事，还来通告什么？回他一句，老子没空，恕不见客！如有不服，只管向上面告老子啊！”', '话刚说完，院子门口一声长笑传来：“楚野老爷子，本官不远千里漏夜拜访，老爷子怎能闭门拒客？这可不合规矩，本官可是带着公事来的。”', '随着笑声，一名身穿朱红锦缎长袍，方正的国字脸微微泛紫，一对大眼炯炯有神，整个人生得道貌岸然一派正气凛然的中年大汉大踏步走进了院子。', '虬髯大汉顿时震怒，指着紫面大汉怒道：“江馗，老子下令关闭所有门户，你怎生进来的？”', '紫面大汉江馗微微一笑，指了指地面笑道：“当然是从下面进来的！”', '虬髯大汉楚野老脸一僵，冷哼道：“老子家里有事，这几日管你公事不公事，老子没这份心思，你过三日再来！”', '江馗眉头微微一皱，他大步到了楚野面前，压低了声音沉声问道：“也不用等三日之后，本官这次过来，只是问你一句话，五日前你送上去的那份信函中说的事情可是真的？”', '楚野眉头一挑，沉声道：“什么事情？”', '江馗抬起目光，冷声道：“莽荒遗民！”', '一旁的青年男子凑了过来，他皱眉问道：“江大人，这事是千真万确的，他们的使者就在城外山中，随时可以见面！”', '江馗顿时皱起了眉头，他看着青年男子若有所思的说道：“楚风大人所说可是真的？他们的使者就在城外山中？唔，这件事情，还得斟酌斟酌，两位大人，请看！”', '江馗双手一翻，两手握拳放在了楚野和楚风父子面前……']
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
  img: '../adr/img/',

  dev: function () {
    // if( common.param('z_dev')==='true' ){
    //   return true;
    // };
    return false;
  }(),

  page: 'pending',
  loaded: false,

  conf: {
    act_f: {
      one: '170319',
      two: '170321'
    },
    share_title: {
      one: '玄幻王者血红新书来袭',
      two: '玄幻王者血红新书剧透'
    },
    share_desc: {
      one: '测试你的性格与哪位主角相似，赢血红完本书免费阅读！',
      two: '分享新书内容，抢血红经典老书限免！'
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
  SET_ICON: function SET_ICON() {
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
  },
  SHARE: function SHARE(_ref5, action) {
    var state = _ref5.state,
        dispatch = _ref5.dispatch;

    // Local.forceLog( common.param('act_f'),`share` );
    // MtaH5.clickStat('abc',{'def':`${self.meta.name}_${self.meta.platform}_share`})
    if (!state.meta.share) {
      if (state.user.loggedIn === false) {
        dispatch({
          type: 'TO_LOGIN'
        });
      } else {
        if (state.dev) {
          state.books.shared = true;
        }
        var pre = function () {
          // 如果当前环境为测试环境：
          if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
            return 'https://ptsolomo.reader.qq.com/book_res/event';
          } else {
            return 'https://yuedu.reader.qq.com/event';
          }
        }();
        var act_f = state.conf.act_f[state.meta.batch];
        var href = pre + ('/act170301/adr/' + state.meta.batch + '_share.html?tf=1&act_f=' + act_f);
        if (state.meta.batch === 'one') {
          href += '&z_score=' + state.ques.finalScore + '&z_ticket=' + state.user.ticket;
        };
        // console.log(href)
        Local.forceLog(common.param('act_f'), state.meta.batch + '_toShare');
        Local.$share(href, location.href.replace(/act170301.+/, 'act170301/adr/img/thumb_' + state.meta.batch + '.jpg'), state.conf.share_title[state.meta.batch], state.conf.share_desc[state.meta.batch]);

        if (state.meta.batch === 'two' && state.user.isGuest) {
          setTimeout(function () {
            dispatch({
              type: 'COMPLETE_SHARING'
            });
          }, 2500);
        }
      };
    } else {
      dispatch({
        type: 'SHOW',
        what: 'mask_share'
      });
    }
  },
  SET_SECOND_SHARING: function SET_SECOND_SHARING(_ref6, action) {
    var state = _ref6.state,
        dispatch = _ref6.dispatch;

    sns.share({
      url: location.href,
      //cover: location.href.replace( /act161202.+/,'act161202/adr/img/qqreader.png' ),
      cover: 'https://ptsolomo.reader.qq.com/book_res/event/act170301/adr/img/thumb_' + state.meta.batch + '.jpg',
      title: state.conf.share_title[state.meta.batch],
      desc: state.conf.share_desc[state.meta.batch]
    }, '111');
    // the second argument '111' is essential or an error would be thrown
  },
  TO_APP: function TO_APP(_ref7, action) {
    var state = _ref7.state,
        dispatch = _ref7.dispatch;

    Local.forceLog(common.param('act_f'), state.meta.batch + '_toApp');
    var test = function () {
      if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
        return true;
      } else {
        return false;
      }
    }();
    var act_f = state.conf.act_f[state.meta.batch];
    var href = function () {
      if (test) {
        if (env.pt === 'adr') {
          return 'http://solomotest4.3g.qq.com/book_res/event/act170301/adr/' + state.meta.batch + '.html?act_f=' + act_f;
        } else {
          return 'https://ptsolomo.reader.qq.com/book_res/event/act170301/ios/' + state.meta.batch + '.html?act_f=' + act_f;
        }
      } else {
        if (env.pt === 'adr') {
          return 'http://iyuedu.qq.com/event/act170301/adr/' + state.meta.batch + '.html?act_f=' + act_f;
        } else {
          return 'https://yuedu.reader.qq.com/event/act170301/ios/' + state.meta.batch + '.html?act_f=' + act_f;
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
  TO_DOWNLOAD: function TO_DOWNLOAD(_ref8, action) {
    var state = _ref8.state,
        dispatch = _ref8.dispatch;

    bnative.downLoad('10003531');
  },
  REPLAY: function REPLAY(_ref9, action) {
    var state = _ref9.state,
        dispatch = _ref9.dispatch;

    Local.forceLog(common.param('act_f'), 'replay');
    MtaH5.clickStat('abc', { 'def': self.meta.name + '_' + self.meta.platform + '_replay' });
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
  ADD_TO_SHELF: function ADD_TO_SHELF(_ref10, action) {
    var state = _ref10.state,
        dispatch = _ref10.dispatch;

    // if( state.meta.platform==='ios' ){
    // Local.addToShelfBooks( JSON.stringify([{
    //   author: "犹似",
    //   unitprice: "5",
    //   title: "豪门重生：恶魔千金归来",
    //   price: "220",
    //   totalWords: "4401310",
    //   bid: "452754"
    // }]) );
    Local.addToShelfBooks(JSON.stringify([action.book]));
    // Local.$addToShelf( action.book );
    // };
  },
  SHOW: function SHOW(_ref11, action) {
    var state = _ref11.state,
        dispatch = _ref11.dispatch;

    state[action.what].show = true;
  },
  HIDE: function HIDE(_ref12, action) {
    var state = _ref12.state,
        dispatch = _ref12.dispatch;

    state[action.what].show = false;
  }
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators };

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var books = {
	one: [{
		bid: 462593,
		title: '三界血歌',
		intro: '三界血歌',
		author: '血红'
	}, {
		bid: 468921,
		title: '逍行纪',
		intro: '逍行纪',
		author: '血红'
	}, {
		bid: 472394,
		title: '邪龙道',
		intro: '邪龙道',
		author: '血红'
	}],
	two: [{
		bid: 486530,
		title: '光明纪元',
		intro: '光明纪元',
		author: '血红'
	}, {
		bid: 478487,
		title: '偷天',
		intro: '偷天',
		author: '血红'
	}, {
		bid: 463748,
		title: '邪风曲',
		intro: '邪风曲',
		author: '血红'
	}]
};

var state = {
	books: {
		shared: false,
		books: [],
		candidate: 0,
		// the picked book's bid
		picked: 0,
		expired_at: '--'
	},
	boiler: __webpack_require__(5).default
};

var mutators = {
	INIT: function INIT(_ref, action) {
		var state = _ref.state,
		    dispatch = _ref.dispatch;

		state.books.books = books[state.meta.batch];
		if (state.meta.share) {
			dispatch({
				type: 'SET_SECOND_SHARING'
			});
			// var score;
			// var query = location.search.replace(/\?/,'').split('&');
			// query.forEach(a=>{
			// 	if( a==='z_score' ){
			// 		score = a.replace(/z_score=/,'');
			// 	}
			// })
			var score = common.param('z_score');
			var ticket = common.param('z_ticket');
			dispatch({
				type: 'FINISH_QUES',
				score: score
			});
			console.log(ticket);
			Local.reqaObj(common.server() + ('pkg170301/testshareinit?userticket=' + ticket), function (data) {
				console.log('success');
				console.log(data);
				if (typeof data.nick === 'string') {
					state.user.name = data.nick;
				};
				state.page = 'ready';
			}, [], function () {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			console.log('???');
		} else {

			if (state.dev) {
				setTimeout(function () {
					dispatch({
						type: 'FINISH_QUES',
						score: 100
					});
				}, 3000);
				state.page = 'ready';
			} else {
				// Local.forceLog( common.param('act_f'),`enter` );
				// window.addEventListener('load',()=>{
				// 	// MtaH5.clickStat('stats',{
				// 	// 	'evt': `${self.meta.name}iii${self.meta.platform}iiienter`
				// 	// });
				// 	MtaH5.clickStat('abc',{'def':`${self.meta.name}iii${self.meta.platform}iiienter`})
				// })
				Local.forceLog(common.param('act_f'), 'one_enter');
				Local.reqaObj(common.server() + 'pkg170301/testinit', function (data) {
					console.log(data);
					if (data.code === -4) {
						state.page = 'over';
					} else {
						state.loggedIn = data.isLogin;
						state.user.loggedIn = data.isLogin;
						if (data.userticket) {
							state.user.ticket = encodeURIComponent(data.userticket);
							// .replace(/(=+)$/,'');
							console.log(state.user.ticket);
						};

						if (data.tested !== undefined && data.tested !== false) {
							dispatch({
								type: 'FINISH_QUES',
								score: Number(data.tested)
							});
						};
						if (data.picked !== undefined && data.picked !== false) {
							dispatch({
								type: 'FINISH_PICK',
								bid: Number(data.picked[0]),
								date: Number(data.picked[1])
							});
						};

						state.page = 'ready';
					};
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
		}
	},
	INIT_QUES: function INIT_QUES(_ref2, action) {
		var state = _ref2.state,
		    dispatch = _ref2.dispatch;

		state.books.books = books.one;
		if (state.dev) {
			state.page = 'ready';
		} else {
			Local.reqaObj(common.server() + 'pkg170301/testinit', function (data) {
				console.log(data);
				if (data.code === -4) {
					state.page = 'over';
				} else {
					state.loggedIn = data.isLogin;
					state.user.loggedIn = data.isLogin;
					state.user.ticket = encodeURIComponent(data.userticket);

					if (data.picked !== undefined && data.picked !== false) {
						dispatch({
							type: 'FINISH_PICK',
							bid: Number(data.picked[0]),
							date: Number(data.picked[1])
						});
					};

					state.page = 'ready';
				};
			}, [], function () {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		};
	},
	INIT_TWO: function INIT_TWO(_ref3, action) {
		var state = _ref3.state,
		    dispatch = _ref3.dispatch;

		window.afterShare = function () {
			dispatch({
				type: 'COMPLETE_SHARING'
			});
		};
		state.books.books = books[state.meta.batch];
		if (state.dev) {
			state.page = 'ready';
		} else {
			if (state.meta.share) {
				dispatch({
					type: 'SET_SECOND_SHARING'
				});
				state.page = 'ready';
			} else {
				Local.forceLog(common.param('act_f'), 'two_enter');
				Local.reqaObj(common.server() + 'pkg170301/shareinit', function (data) {
					console.log(data);
					if (data.code === -4) {
						state.page = 'over';
					} else {
						state.loggedIn = data.isLogin;
						state.user.loggedIn = data.isLogin;

						if (data.isLogin === true) {
							if (data.isguest === true) {
								state.user.isGuest = true;
							};
							if (data.shared === true) {
								state.books.shared = true;
							};
							if (data.picked !== undefined && data.picked !== false) {
								dispatch({
									type: 'FINISH_PICK',
									bid: Number(data.picked[0]),
									date: Number(data.picked[1])
								});
							};
						};

						state.page = 'ready';
					};
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			}
		};
	},
	COMPLETE_SHARING: function COMPLETE_SHARING(_ref4, action) {
		var state = _ref4.state,
		    dispatch = _ref4.dispatch;

		Local.forceLog(common.param('act_f'), 'two_shared');
		Local.reqaObj(common.server() + 'pkg170301/sharesuccess', function (data) {}, [], function () {
			Local.showToast("网络异常，请稍候重试");
		}, 1);
		state.books.shared = true;
		// Local.showToast('分享成功');
	},
	INIT_BOILER: function INIT_BOILER(_ref5, action) {
		var state = _ref5.state,
		    dispatch = _ref5.dispatch;

		state.page = 'ready';
	},
	TO_BOILER: function TO_BOILER(_ref6, action) {
		var state = _ref6.state,
		    dispatch = _ref6.dispatch;

		if (state.meta.share) {
			var href = location.href.replace(/(one_share|two_share)\.html/g, 'boiler.html');
			location.href = href;
			// dispatch({type:'TO_APP'});
		} else {
			var href = location.href.replace(/(one|two)\.html/g, 'boiler.html');
			if (state.dev) {
				location.href = href;
			} else {
				Local.openInside(href);
			};
			Local.forceLog(common.param('act_f'), state.meta.batch + '_toBoiler');
		}
	},
	TO_QUES: function TO_QUES(_ref7, action) {
		var state = _ref7.state,
		    dispatch = _ref7.dispatch;

		if (state.share) {
			dispatch({
				type: 'TO_APP'
			});
		} else {
			if (state.user.loggedIn === false) {
				dispatch({
					type: 'TO_LOGIN'
				});
			} else {
				var href = location.href.replace(/one\.html/g, 'ques.html');
				if (state.dev) {
					location.href = href;
				} else {
					Local.openInside(href);
				};
			};
			Local.forceLog(common.param('act_f'), 'one_toQues');
		}
	},
	PICK_BOOK_CONFIRM: function PICK_BOOK_CONFIRM(_ref8, action) {
		var state = _ref8.state,
		    dispatch = _ref8.dispatch;

		state.books.candidate = action.bid;
		dispatch({
			type: 'SHOW',
			what: 'mask_confirm'
		});
	},
	PICK_BOOK: function PICK_BOOK(_ref9, action) {
		var state = _ref9.state,
		    dispatch = _ref9.dispatch;

		if (state.dev) {
			state.books.picked = action.bid;
			dispatch({
				type: 'HIDE',
				what: 'mask_confirm'
			});
		} else {
			Local.reqaObj(common.server() + ('pkg170301/' + (state.meta.batch === 'one' ? 'test' : 'share') + 'pick?bid=' + action.bid), function (data) {
				console.log(data);
				if (data.code === 0) {
					dispatch({
						type: 'FINISH_PICK',
						bid: action.bid,
						date: Number(data.time)
					});
					var book = function () {
						var book;
						state.books.books.forEach(function (a) {
							if (a.bid === action.bid) {
								book = a;
							}
						});
						return book;
					}();
					dispatch({
						type: 'ADD_TO_SHELF',
						book: book
					});
					dispatch({
						type: 'HIDE',
						what: 'mask_confirm'
					});
					// Local.showToast('已加入书架');
				} else {
					Local.showToast(data.msg);
				}
			}, [], function () {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		}
	},
	FINISH_PICK: function FINISH_PICK(_ref10, action) {
		var state = _ref10.state,
		    dispatch = _ref10.dispatch;

		state.books.picked = action.bid;
		state.books.expired_at = function () {
			var date = new Date(action.date);
			var years = date.getFullYear();
			var months = date.getMonth() + 1;
			var days = date.getDate();
			return years + '年' + months + '月' + days + '日';
		}();
	},
	SWITCH: function SWITCH(_ref11, action) {
		var state = _ref11.state,
		    dispatch = _ref11.dispatch;

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
	},
	SWITCH_OVER: function SWITCH_OVER(_ref12, action) {
		var state = _ref12.state,
		    dispatch = _ref12.dispatch;

		state.change.changing = false;
	},
	CONTINUE: function CONTINUE(_ref13, action) {
		var state = _ref13.state,
		    dispatch = _ref13.dispatch;

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
	}
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators };

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var results = [{
	title: '属于《巫神纪》主角姬昊型',
	desc: '自信勇敢又积极向上，果敢坚毅的你有着超强的人格魅力，在团队中是众人最坚强的后盾！',
	text: '我是姬昊型的主角'
}, {
	title: '属于《三界血歌》主角殷血歌型',
	desc: '处变不惊，心思缜密的你，可能让敌人觉得阴冷腹黑，但朋友却会认为你内向稳重让人感到安心。',
	text: '我是殷血歌型的主角'
}, {
	title: '属于《光明纪元》主角林齐型',
	desc: '有些小贪心，但是却并不小气！脾气有些火爆，但对心爱的人却异常温和！有着些许缺点，但却能始终坚守自己心中的原则！',
	text: '我是林齐型的主角'
}];

var state = {
	ques: {
		state: '',
		status: 'resolved',
		picked: -1,

		questions: [{
			ask: '一觉醒来你发现自己穿越在一个山洞中，你会:',
			options: [{
				option: 'A | 立刻起身出山洞看看',
				score: 20
			}, {
				option: 'B | 先观察山洞中的环境',
				score: 5
			}, {
				option: 'C | 查看自身情况',
				score: 1
			}]
		}, {
			ask: '出山洞后你加入了门派，一次任务中兄弟被人欺负了，你会:',
			options: [{
				option: 'A | 回门派集合兄弟一起打回去',
				score: 20
			}, {
				option: 'B | 先回营地，晚上摸黑一个个修理他们',
				score: 5
			}, {
				option: 'C | 冲上去暴揍他们，不管打不打得过',
				score: 1
			}]
		}, {
			ask: '外出组队历练，你觉得你在队伍中的角色会是？',
			options: [{
				option: 'A | 队长类的角色，擅长指挥和组织',
				score: 20
			}, {
				option: 'B | 刺客类的角色，杀敌时一击毙命',
				score: 5
			}, {
				option: 'C | 战士类的角色，冲锋在前',
				score: 1
			}]
		}, {
			ask: '历练过程中居然遇见了你生命中的女神，你觉得她？',
			options: [{
				option: 'A | 温柔美丽，让人如沐春风',
				score: 20
			}, {
				option: 'B | 性感知性，还带一些冷艳',
				score: 5
			}, {
				option: 'C | 活泼俏皮，像个小公主',
				score: 1
			}]
		}, {
			ask: '你和女神准备金盆洗手，你希望在哪里隐居？',
			options: [{
				option: 'A | 一个开满油菜花的美丽平原村庄',
				score: 20
			}, {
				option: 'B | 一个深山中的世外桃源',
				score: 5
			}, {
				option: 'C | 一个能看到蔚蓝大海的海边渔村',
				score: 1
			}]
		}],
		current: 0,

		result: {
			title: '--',
			desc: '--',
			text: '--'
		},

		res: 0,
		finalScore: 0
	}

};

var mutators = {
	ANSWER_ONE: function ANSWER_ONE(_ref, action) {
		var state = _ref.state,
		    dispatch = _ref.dispatch;

		console.log(action.i);
		var qu = state.ques;
		if (qu.status !== 'pending') {
			qu.status = 'pending';
			qu.picked = action.i;
			qu.finalScore += qu.questions[qu.current].options[action.i].score;
			setTimeout(function () {
				if (qu.current < 4) {
					qu.current++;
					qu.picked = -1;
					qu.status = 'resolved';
				} else {
					dispatch({
						type: 'SUBMIT_QUES',
						score: qu.finalScore
					});
				}
			}, 400);
		};
	},
	SUBMIT_QUES: function SUBMIT_QUES(_ref2, action) {
		var state = _ref2.state,
		    dispatch = _ref2.dispatch;

		if (state.dev === false) {
			Local.forceLog(common.param('act_f'), 'one_finishedQues');
			Local.reqaObj(common.server() + ('pkg170301/testsubmit?result=' + action.score), function (data) {
				console.log(data);
				if (data.code === 0) {
					dispatch({
						type: 'FINISH_QUES',
						score: state.ques.finalScore
					});
				} else {
					Local.showToast(data.msg);
				}
			}, [], function () {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		} else {
			dispatch({
				type: 'FINISH_QUES',
				score: state.ques.finalScore
			});
		};
	},
	FINISH_QUES: function FINISH_QUES(_ref3, action) {
		var state = _ref3.state,
		    dispatch = _ref3.dispatch;

		(function (score) {
			var qu = state.ques;
			qu.finalScore = score;
			if (score > 55) {
				qu.res = 0;
			} else if (score < 25) {
				qu.res = 2;
			} else {
				qu.res = 1;
			}
			qu.result = results[qu.res];
			qu.state = 'done';
		})(action.score);
	}
};

/* harmony default export */ __webpack_exports__["a"] = { state: state, mutators: mutators };

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vix_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ques_js__ = __webpack_require__(8);





Vue.use(__WEBPACK_IMPORTED_MODULE_0__Vix_js__["a" /* default */]);

var store = __WEBPACK_IMPORTED_MODULE_0__Vix_js__["a" /* default */].createStore([__WEBPACK_IMPORTED_MODULE_1__base_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__book_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__ques_js__["a" /* default */]]);

/* harmony default export */ __webpack_exports__["a"] = store;

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

module.exports = {
	data: function data() {
		return {};
	},
	mounted: function mounted() {}
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
//
//
//
//
//
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
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
__webpack_require__(15)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  "data-v-14938e97",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  "data-v-6451b063",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  "data-v-03fe2586",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "DEBUG"
  }, [_c('div', {
    staticClass: "fixed__"
  }, [_vm._v("\n\t\tloggedIn: " + _vm._s(_vm.state.loggedIn) + ", day: " + _vm._s(_vm.state.day)), _c('br'), _vm._v("\n\t\tcurrent: " + _vm._s(_vm.state.current)), _c('br')])])
},staticRenderFns: []}

/***/ }),
/* 22 */
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

exports.default = {
  components: {
    BooksThree: __webpack_require__(1)
  },
  data: function data() {
    return {};
  },
  computed: {
    img: function img() {
      return this.$store.state.img;
    },
    books: function books() {
      return this.$store.state.books;
    },
    ques: function ques() {
      return this.$store.state.ques;
    }
  },
  methods: {
    TO_QUES: function TO_QUES() {
      this.$store.dispatch({
        type: 'TO_QUES'
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
//
//
//
//
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
  props: ['pickable'],
  computed: {
    img: function img() {
      return this.$store.state.img;
    },
    meta: function meta() {
      return this.$store.state.meta;
    },
    books: function books() {
      return this.$store.state.books;
    },
    ques: function ques() {
      return this.$store.state.ques;
    },
    iii: function iii() {
      var _this = this;

      var iii;
      this.$store.state.books.books.forEach(function (a, i) {
        if (a.bid === _this.$store.state.books.picked) {
          iii = a.title;
        }
      });
      return iii;
    }
  }
};

/***/ }),
/* 25 */
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

module.exports = {
	computed: {
		mask_confirm: function mask_confirm() {
			return this.$store.state.mask_confirm;
		}
	},
	methods: {
		cancel: function cancel() {
			this.$store.dispatch({
				type: 'HIDE',
				what: 'mask_confirm'
			});
		},
		confirm: function confirm() {
			this.$store.dispatch({
				type: 'PICK_BOOK',
				bid: this.$store.state.books.candidate
			});
		}
	}
};

/***/ }),
/* 26 */
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
__webpack_require__(28)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  "data-v-2bd5e801",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(27)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  "data-v-25d7bfe7",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  "data-v-5cd94271",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask_confirm.show),
      expression: "mask_confirm.show"
    }],
    staticClass: "MaskConfirm"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_c('div', {
    staticClass: "top"
  }, [_vm._v("选择这本书免费读？")]), _c('ul', {
    staticClass: "bottom"
  }, [_c('li', {
    staticClass: "cancel",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v("取消")]), _c('li', {
    staticClass: "confirm",
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("确认")])])])])
},staticRenderFns: []}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.ques.finalScore !== 0),
      expression: "ques.finalScore!==0"
    }],
    staticClass: "AfterTest"
  }, [_c('img', {
    staticClass: "replay",
    attrs: {
      "src": _vm.img + '/replay.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'TO_QUES'
        })
      }
    }
  }), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }), _c('p', {
    staticClass: "title_"
  }, [_vm._v("你" + _vm._s(_vm.ques.result.title))]), _c('p', {
    staticClass: "desc_"
  }, [_vm._v(_vm._s(_vm.ques.result.desc))]), _c('img', {
    staticClass: "to_showoff",
    attrs: {
      "src": _vm.img + '/btn_showoff.png'
    },
    on: {
      "click": function($event) {
        _vm.$store.dispatch({
          type: 'SHARE'
        })
      }
    }
  }), _c('books-three', {
    attrs: {
      "pickable": true
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "BooksThree"
  }, [(_vm.pickable === true) ? _c('div', {
    staticClass: "pss"
  }, [_c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.meta.batch === 'one'),
      expression: " meta.batch==='one' "
    }],
    staticClass: "p0"
  }, [_vm._v("任选一本书免费读")]), (_vm.books.picked > 0) ? _c('p', {
    staticClass: "p1"
  }, [_vm._v("已选《" + _vm._s(_vm.iii) + "》,免费读至" + _vm._s(_vm.books.expired_at))]) : _vm._e()]) : _vm._e(), _c('div', {
    staticClass: "the_books"
  }, _vm._l((_vm.books.books), function(a, i) {
    return _c('div', {
      staticClass: "tri"
    }, [_c('img', {
      staticClass: "cover",
      attrs: {
        "src": _vm.img + '/covers/' + a.bid + '.png'
      },
      on: {
        "click": function($event) {
          _vm.$store.dispatch({
            type: 'TO_BOOK',
            bid: a.bid
          })
        }
      }
    }), _c('p', {
      staticClass: "name__"
    }, [_vm._v(_vm._s(a.title))]), (_vm.pickable === true) ? _c('div', {
      staticStyle: {
        "height": "0.15rem"
      }
    }) : _vm._e(), (_vm.pickable === true && _vm.books.picked === 0) ? _c('div', {
      staticClass: "small_btn",
      on: {
        "click": function($event) {
          _vm.$store.dispatch({
            type: 'PICK_BOOK_CONFIRM',
            bid: a.bid
          })
        }
      }
    }, [_vm._v("选TA免费读")]) : _vm._e(), (_vm.pickable === true && _vm.books.picked !== 0 && _vm.books.picked !== a.bid) ? _c('div', {
      staticClass: "small_btn disabled"
    }, [_vm._v("选TA免费读")]) : _vm._e(), (_vm.pickable === true && _vm.books.picked === a.bid) ? _c('div', {
      staticClass: "small_btn active",
      on: {
        "click": function($event) {
          _vm.$store.dispatch({
            type: 'TO_READ',
            bid: a.bid
          })
        }
      }
    }, [_vm._v("去阅读")]) : _vm._e()])
  }))])
},staticRenderFns: []}

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_common_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store_book_js__ = __webpack_require__(9);




var root = new Vue({
	el: '#root',
	store: __WEBPACK_IMPORTED_MODULE_1__store_store_book_js__["a" /* default */],
	components: {
		App: __webpack_require__(61)
	},
	template: '<app></app>'
});

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */
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
	components: {
		Debugger: __webpack_require__(17),
		MaskLoading: __webpack_require__(18),
		MaskOver: __webpack_require__(19),

		MaskDownload: __webpack_require__(33),
		MaskConfirm: __webpack_require__(32),

		Ques: __webpack_require__(64),
		AfterTest: __webpack_require__(31)
	},
	data: function data() {
		return {};
	},
	computed: {
		ques: function ques() {
			return this.$store.state.ques;
		},
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
		this.$store.dispatch({ type: 'INIT_QUES' });
	},
	methods: {
		touchmove: function touchmove(e) {
			e.preventDefault();
		}
	}
};

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */
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
  components: {},
  data: function data() {
    return {};
  },
  computed: {
    img: function img() {
      return this.$store.state.img;
    },
    ques: function ques() {
      return this.$store.state.ques;
    }
  },
  methods: {}
};

/***/ }),
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
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(73),
  /* scopeId */
  "data-v-51a2ea47",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  "data-v-6c47a2af",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
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
    staticClass: "main rem_height",
    style: ('background-image:url(' + _vm.img + '/test_bg.png);background-size:100% auto;')
  }, [_c('mask-download'), _c('mask-confirm'), _c('ques'), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.ques.state === 'done'),
      expression: " ques.state==='done' "
    }],
    staticClass: "result_"
  }, [_c('after-test')], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.ques.state !== 'done'),
      expression: " ques.state!=='done' "
    }],
    staticClass: "Ques"
  }, [_c('div', {
    staticClass: "hex",
    style: ('background-image:url(' + _vm.img + '/hex.png);background-size:100% 100%;')
  }, [_vm._v("\n    " + _vm._s(_vm.ques.current + 1) + "/5\n  ")]), _c('p', {
    staticClass: "ask"
  }, [_vm._v(_vm._s(_vm.ques.questions[_vm.ques.current].ask))]), _vm._l((_vm.ques.questions[_vm.ques.current].options), function(a, i) {
    return _c('div', {
      key: "i",
      staticClass: "option",
      style: ((i === _vm.ques.picked && _vm.ques.status === 'pending') ?
        'background-image:url(' + _vm.img + '/option_active.png);background-size:100% 100%;color:#a08861;' :
        'background-image:url(' + _vm.img + '/option.png);background-size:100% 100%;'),
      on: {
        "click": function($event) {
          _vm.$store.dispatch({
            type: 'ANSWER_ONE',
            i: i
          })
        }
      }
    }, [_vm._v("\n    " + _vm._s(a.option) + "\n  ")])
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ })
/******/ ]);