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
/******/ 	__webpack_require__.p = "/newuserarea6/adr/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
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
__webpack_require__(16)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  "data-v-39296e46",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _App = __webpack_require__(25);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new Vue({
	el: '#root',
	render: function render(h) {
		return h(_App2.default);
	}
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(15);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', function () {

	var $html = document.querySelector('html');
	var $body = document.querySelector('body');
	var $screen = document.createElement('div');

	$screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
	$body.insertBefore($screen, $body.firstChild);

	function setRem() {
		$screen.style.display = 'block';
		var w = Number(document.defaultView.getComputedStyle($screen).width.replace(/px/, ''));
		var h = Number(document.defaultView.getComputedStyle($screen).height.replace(/px/, ''));
		$screen.style.display = 'none';
		$html.style.fontSize = 100 * w / 750 + 'px';
		//document.getElementsByClassName('container')[0].style.height = h+'px';
		console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
	}
	setRem();
	window.addEventListener('resize', setRem);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var data = {
	dev: false,

	page: 'pending',

	img: '../adr/img',

	ios: function () {
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		console.log(val);
		return (/ios/.test(val) ? true : false
		);
	}(),

	share: function () {
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		return (/share/.test(val) ? true : false
		);
	}(),

	first: function () {
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		return (/first/.test(val) ? true : false
		);
	}(),
	charge: function () {
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		return (/charge/.test(val) ? true : false
		);
	}(),
	monthly: function () {
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		return (/monthly/.test(val) ? true : false
		);
	}(),

	page_no: function () {
		var el = document.querySelector('[page-no]');
		var val = el.getAttribute('page-no');
		return val;
	}(),

	loggedIn: false,
	vip: false,

	charged: {
		f1: false,
		f10: false,
		10: false,
		20: false,
		50: false
	},
	have: {
		f1: false,
		f10: false,
		10: false,
		20: false,
		50: false
	},

	opened: false,
	haveGift: false,

	mask: {
		show: false,
		line1: '',
		line2: '',
		text: '',
		cb: ''
	}
};

function act(action) {
	var self = this;
	switch (action.type) {
		case 'INIT':
			if (self.dev) {
				self.page = 'ready';
			} else {
				// Local.forceLogTemp( self.page_no,'enter',0 );
				//self.page = 'ready';
				// if(self.share){
				// 	window.initSNS = function(){
				// 		S.share({
				// 			url: location.href,
				// 			cover: location.href.replace(/share\.html/,'img/qqreader.png'),
				// 			title: 'QQ阅读大神直播',
				// 			desc: 'QQ阅读大神直播'
				// 		})
				// 	};
				// };
				Local.forceLog(common.param('act_f'), 'enter');
				Local.reqaObj(common.server() + 'newuserarea6/init', function (data) {
					console.log(data);

					self.loggedIn = data.isLogin;
					self.vip = data.isVip;

					if (data.picked === true) {
						self.have.f1 = true;
						self.have.f10 = true;
					};
					if (data.haspickmonth === true) {
						self.haveGift = true;
					}

					if (self.dev) {
						self.act({ type: 'MOCK' });
					}
					self.page = 'ready';
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
			break;
		case 'MOCK':
			break;
		case 'LOGIN':
			if (self.dev) {
				self.loggedIn = true;
			} else {
				Local.login();
			};
			break;

		case 'HIDE_MASK':
			setTimeout(function () {
				self.mask.show = false;
			}, 300);
			break;
		case 'CHARGE':
			//Local.forceLogTemp( self.page_no,'charge',action.money );
			// MtaH5.clickStat('charge',{
			// 	'page': self.page_no,
			// 	'money': action.money
			// });
			if (!self.loggedIn) {
				self.act({
					type: 'LOGIN'
				});
			} else {
				if (self.dev) {
					if (self.first) {
						self.charged['f' + action.money] = true;
					} else {
						self.charged[action.money] = true;
					}
				} else {
					Local.doCharge('act', true, action.money * 100);
				}
			};
			self.act({
				type: 'HIDE_MASK'
			});
			break;
		case 'GET_BILLS':
			if (self.dev) {
				if (!self.loggedIn) {
					self.loggedIn = true;
				} else {
					if (!self.charged[(self.first ? 'f' : '') + action.money]) {
						self.mask.line1 = '领取失败';
						self.mask.line2 = '需要先充值才可领取书券哦(如您已充值，系统正在处理，请稍等重试)';
						self.mask.text = '充值' + action.money + '元';
						self.mask.cb = 'CHARGE';
						self.mask.money = action.money;
						self.mask.show = true;
					} else {
						if (self.first) {
							self.have['f1'] = true;
							self.have['f10'] = true;
						} else {
							self.have[action.money] = true;
						}
						self.mask.line1 = '已领取成功';
						self.mask.line2 = '书券已及时到账，可以去我的账户查看';
						self.mask.text = '朕知道了';
						self.mask.cb = 'HIDE_MASK';
						self.mask.show = true;
					}
				}
			} else {
				//Local.forceLogTemp( self.page_no,'take',action.money );
				// MtaH5.clickStat('take',{
				// 	'page': self.page_no,
				// 	'money': action.money
				// });
				if (!self.loggedIn) {
					self.act({
						type: 'LOGIN'
					});
				} else {
					//console.log( common.server()+`topic/oldcz/pick?pagetype=${self.first?1:2}&count=${action.money*100}` );
					Local.reqaObj(common.server() + ('topic/oldcz/pick?pagetype=' + (self.first ? 1 : 2) + '&count=' + action.money * 100 + '&page=' + self.page_no), function (data) {
						console.log(data);
						if (data.code === 0) {
							if (self.first) {
								self.have['f1'] = true;
								self.have['f10'] = true;
							};
							self.mask.line1 = '已领取成功';
							self.mask.line2 = '书券已及时到账，可以去我的账户查看';
							self.mask.text = '朕知道了';
							self.mask.cb = 'HIDE_MASK';
							self.mask.show = true;
						} else {
							self.mask.line1 = '领取失败';
							self.mask.line2 = '需要先充值才可领取书券哦(如您已充值，系统正在处理，请稍等重试)';
							self.mask.text = '充值' + action.money + '元';
							self.mask.cb = 'CHARGE';
							self.mask.money = action.money;
							self.mask.show = true;
							//Local.showToast( data.msg );
						}
					}, [], function () {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				}
			}
			break;

		case 'OPEN':
			if (self.dev) {
				if (!self.loggedIn) {
					self.loggedIn = true;
				} else {
					if (!self.opened) {
						self.opened = true;
					}
				}
			} else {
				Local.forceLog(common.param('act_f'), 'open');
				// MtaH5.clickStat('open_month',{
				// 	'page': self.page_no
				// });
				if (!self.loggedIn) {
					self.act({
						type: 'LOGIN'
					});
				} else {
					Local.openVip(true);
				}
			}
			self.act({
				type: 'HIDE_MASK'
			});
			break;
		case 'GET_GIFT':
			if (self.dev) {
				if (!self.loggedIn) {
					self.loggedIn = true;
				} else {
					if (!self.opened) {
						self.mask.line1 = '领取失败';
						self.mask.line2 = '需要先开通/续费包月才可领取哦(如您已开通/续费包月，系统正在处理，请稍等重试)';
						self.mask.text = '开通/续费一个月包月';
						self.mask.cb = 'OPEN';
						self.mask.show = true;
					} else {
						self.haveGift = true;
						self.mask.line1 = '已领取成功';
						self.mask.line2 = '包月日期至XX年X月X日';
						self.mask.text = '朕知道了';
						self.mask.cb = 'HIDE_MASK';
						self.mask.show = true;
					}
				}
			} else {
				Local.forceLog(common.param('act_f'), 'take');
				// MtaH5.clickStat('take_month',{
				// 	'page': self.page_no
				// });
				if (!self.loggedIn) {
					self.act({
						type: 'LOGIN'
					});
				} else {
					//console.log('GET_GIFT')
					Local.reqaObj(common.server() + 'newuserarea6/pick', function (data) {
						console.log(data);
						if (data.code === 0) {
							if (!self.ios) {
								JSContent.obtainGift(JSON.stringify({
									id: 7
								}));
							};
							self.haveGift = true;
							self.mask.line1 = '已领取成功';
							self.mask.line2 = '包月日期至' + data.endtime;
							self.mask.text = '朕知道了';
							self.mask.cb = 'HIDE_MASK';
							self.mask.show = true;
						} else {
							self.mask.line1 = '领取失败';
							self.mask.line2 = '需要先开通/续费包月才可领取哦(如您已开通/续费包月，系统正在处理，请稍等重试)';
							self.mask.text = '开通/续费一个月包月';
							self.mask.cb = 'OPEN';
							self.mask.show = true;
							Local.showToast(data.msg);
						}
					}, [], function () {
						Local.showToast("网络异常，请稍候重试");
					}, 1);
				};
			}
			break;

		// case 'I_WANT':
		// 	if( !self.loggedIn ){
		// 		Local.forceLog( common.param('act_f'),'THXbook_'+action.bid );
		// 		self.act({
		// 			type: 'LOGIN'
		// 		})
		// 	}else{
		// 		if(self.dev){
		// 			self.wanted.push(action.bid);
		// 			self.books_wanted[action.i].number++;
		// 			self.books_wanted[action.i].plus = true;
		// 		}else{
		// 			Local.forceLog( common.param('act_f'),'THXbook_'+action.bid );
		// 			Local.reqaObj( common.server()+'pkg161102/booking?pd='+action.bid, function(data) {
		// 				if( data.code===1 ){
		// 					self.wanted.push(action.bid);
		// 					self.books_wanted[action.i].number++;
		// 					self.books_wanted[action.i].plus = true;
		// 					Local.addToShelfBooks(action.bid);
		// 					Local.showToast('此书已为您加入书架');
		// 				}else if( data.code===-3 ){
		// 					Local.showToast('');
		// 				};
		// 			}, [], function() {
		// 				Local.showToast("网络异常，请稍候重试");
		// 			}, 1);
		// 		};
		// 	}
		// 	break;
		// case 'TO_BUY':
		// 	Local.forceLog( common.param('act_f'),'THXbuy_'+action.bid );
		// 	break;
		// case 'SET_ALARM':
		// 	if( self.loggedIn===false ){
		// 		Local.login();
		// 	}else if( self.alarmState==='unset' ){
		// 		try{
		// 		Local.reqaObj( common.server()+`topic/live/reserve?livetime=`+self.livetime.replace(/\s/g,''), function(data) {
		// 			//console.log( JSON.stringify(data) )
		// 			self.alarmState = 'set';
		// 		}, [], function() {
		// 			Local.showToast("网络异常，请稍候重试");
		// 		}, 1);
		// 		}catch(e){
		// 			console.log(e)
		// 		}
		// 	};
		// 	break;
		// case 'MINUS':
		// 	if( this.timeleft-60000>0 ){
		// 		this.timeleft -= 60000;
		// 	}else{
		// 		this.timeleft = 0;
		// 	}
		// 	break;
		// case 'TO_PLAY':
		// 	Local.openPage( self.href );
		// 	break;

		case 'TO_JINGXUAN':
			//Local.forceLogTemp( self.page_no,'to_shucheng',0 );
			// MtaH5.clickStat('to_shucheng',{
			// 	'page': self.page_no
			// });
			Local.$toJingxuan();
			break;
		case 'TO_BAOYUE_ZONE':
			Local.forceLog(common.param('act_f'), 'to_baoyue');
			// MtaH5.clickStat('to_baoyuequ',{
			// 	'page': self.page_no
			// });
			Local.$toBaoyueZone();
			break;
		// case 'TO_BOOK':
		// 	if(!self.share){
		// 		ABook.gotoDetail( action.bid );
		// 	}else{
		// 		self.act({
		// 			type: 'SHOW_MASK'
		// 		})
		// 	}
		// 	break;

		// 分享页：
		// case 'SHOW_MASK':
		// 	if(!self.inProcessing){
		// 		self.inProcessing = true;
		// 		var href = location.href;
		// 		href = href.replace(
		// 			/acttopiclive.*/,
		// 			'acttopiclive/'+env.pt+'/index.html?topicid='+common.param('topicid')
		// 		);
		// 		console.log(href);
		// 		N.openPage( href );
		// 		setTimeout(()=>{
		// 			self.show_mask = true;
		// 			self.inProcessing = false;
		// 		},3000)
		// 	}
		// 	break;
		// case 'TO_DOWNLOAD':
		// 	N.downLoad(null, '10003531');
		// 	break;
	}
}

exports.data = data;
exports.act = act;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _store = __webpack_require__(5);

exports.default = {
	components: {
		Debug: __webpack_require__(27),
		MaskLoading: __webpack_require__(29),
		MaskOver: __webpack_require__(30),
		MaskInfo: __webpack_require__(28),

		Charge: __webpack_require__(26),
		Monthly: __webpack_require__(31),

		Rules: __webpack_require__(32)
	},
	data: function data() {
		return _store.data;
	},
	computed: {},
	watch: {},
	created: function created() {},
	mounted: function mounted() {
		this.act({ type: 'INIT' });
	},
	methods: {
		act: _store.act
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

/***/ }),
/* 7 */
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

exports.default = {
	props: {
		money: {},
		text: {},
		act: {},
		cb: {},
		style: {
			default: ''
		}
	},
	data: function data() {
		return {
			pressed: false
		};
	},
	methods: {
		touchstart: function touchstart() {
			this.pressed = true;
		},
		touchmove: function touchmove() {
			this.pressed = false;
		},
		touchend: function touchend() {
			if (this.pressed) {
				this.act({
					type: this.cb,
					money: this.money || 0
				});
			};
			this.pressed = false;
		},
		touchcancel: function touchcancel() {
			this.pressed = false;
		}
	}
};

/***/ }),
/* 8 */
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

exports.default = {
	props: ['ios', 'act', 'first', 'charged', 'have', 'monthly', 'img'],
	components: {
		Btn: __webpack_require__(1)
	},
	data: function data() {
		return {
			items: []
		};
	},
	created: function created() {
		this.setItems(this.first);
	},
	watch: {
		first: function first(new_val) {
			this.setItems(new_val);
		}
	},
	methods: {
		GET_BILLS: function GET_BILLS(money) {
			this.act({
				type: 'GET_BILLS',
				money: money
			});
		},
		setItems: function setItems(first) {
			if (first) {
				this.items = [{
					coins: 100,
					bills: 100,
					money: 1
				}, {
					coins: 1000,
					bills: 500,
					money: 10
				}];
			} else {
				this.items = [{
					coins: 1000,
					bills: 58,
					money: 10
				}, {
					coins: 2000,
					bills: 128,
					money: 20
				}, {
					coins: 5000,
					bills: 328,
					money: 50
				}];
			}
		}
	}
};

/***/ }),
/* 9 */
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

exports.default = {
	props: ['state'],
	mounted: function mounted() {}
};

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

exports.default = {
	components: {
		Btn: __webpack_require__(1)
	},
	props: ['act', 'mask', 'img'],
	data: function data() {
		return {};
	},
	methods: {
		HIDE_MASK: function HIDE_MASK() {
			this.act({
				type: 'HIDE_MASK'
			});
		},
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
	props: ['img'],
	data: function data() {
		return {};
	}
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: ['ios', 'vip', 'act', 'haveGift', 'img'],
	components: {
		Btn: __webpack_require__(1)
	},
	methods: {
		GET_GIFT: function GET_GIFT() {
			this.act({
				type: 'GET_GIFT'
			});
		}
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

exports.default = {
	props: ['ios', 'charge', 'monthly', 'first', 'img']
};

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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(20)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  "data-v-7c0526df",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(21)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  "data-v-a1e0fe7a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(19)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  "data-v-750491d8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  "data-v-dc2319ee",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  "data-v-a5c4cf9e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  "data-v-b2466fa2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(17)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  "data-v-4de5fd8e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(18)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  "data-v-55a877b8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Btn",
    class: _vm.pressed ? 'pressed' : '',
    style: (_vm.style),
    on: {
      "touchstart": _vm.touchstart,
      "touchmove": _vm.touchmove,
      "touchend": _vm.touchend,
      "touchcancel": _vm.touchcancel
    }
  }, [_vm._v("\n\t" + _vm._s(_vm.text) + "\n")])
},staticRenderFns: []}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Monthly"
  }, [_c('img', {
    staticClass: "banner_monthly",
    attrs: {
      "src": _vm.img + '/banner_monthly.png'
    }
  }), _c('div', {
    staticClass: "panel--"
  }, [_c('div', {
    staticClass: "panel-upper"
  }, [_vm._m(0), _c('p', {
    staticClass: "info"
  }, [_vm._v("最多只赠送一个月包月哦！")]), _c('Btn', {
    style: ('margin-bottom: 0.24rem;'),
    attrs: {
      "act": _vm.act,
      "text": '立即开通/续费1个月',
      "cb": 'OPEN'
    }
  }), (!_vm.haveGift) ? _c('p', {
    staticClass: "bottom"
  }, [_vm._v("\n\t\t\t\t已开通/续费包月，"), _c('a', {
    on: {
      "click": _vm.GET_GIFT
    }
  }, [_vm._v("领取赠送的1个月包月>")])]) : _vm._e(), (_vm.haveGift) ? _c('p', {
    staticClass: "bottom"
  }, [_c('a', {
    on: {
      "click": function($event) {
        _vm.act({
          type: 'TO_BAOYUE_ZONE'
        })
      }
    }
  }, [_vm._v("已领取，去包月书区看书>")])]) : _vm._e()], 1), _c('img', {
    staticClass: "curve",
    attrs: {
      "src": _vm.img + '/curve.png'
    }
  }), _c('div', {
    staticClass: "previledge"
  }, [_vm._v("\n\t\t\t- 包月专享 -\n\t\t")]), _c('img', {
    staticClass: "covers",
    attrs: {
      "src": _vm.img + '/covers.png'
    }
  }), _c('p', {
    staticClass: "line line_1"
  }, [_vm._v("1. 包月库内10万册书籍在线免费读")]), _c('p', {
    staticClass: "line line_2"
  }, [_vm._v("2. 非包月库内书籍、看书听书8折优惠")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "table"
  }, [_c('span', {
    staticClass: "bold"
  }, [_vm._v("现在开通/续费1个月")]), _c('span', {
    staticClass: "small"
  }, [_vm._v("+")]), _c('span', {
    staticClass: "big"
  }, [_vm._v("送1个月")])])
}]}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Rules"
  }, [_c('div', {
    staticClass: "rContent"
  }, [_c('img', {
    staticClass: "r_title",
    attrs: {
      "src": _vm.img + '/r_title.png'
    }
  }), (_vm.charge && _vm.monthly) ? _c('div', {
    staticClass: "subtitle"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.first ? '首充' : '充赠') + "活动\n\t\t")]) : _vm._e(), (_vm.charge) ? _c('p', [_c('span', [_vm._v("1.")]), _vm._v("一次性充值指定金额，即赠送对应额度" + _vm._s(_vm.ios ? '阅券' : '书券') + "，" + _vm._s(_vm.first ? '每位用户只限领取一次' : '多充多赠，次数不限') + "。")]) : _vm._e(), (_vm.charge) ? _c('p', [_c('span', [_vm._v("2.")]), _vm._v("所赠" + _vm._s(_vm.ios ? '阅券' : '书券') + "有效期为15天。需手动领取，如未领取则视为放弃。")]) : _vm._e(), (_vm.charge && _vm.monthly) ? _c('div', {
    staticClass: "subtitle"
  }, [_vm._v("\n\t\t\t包月特权\n\t\t")]) : _vm._e(), (_vm.monthly) ? _c('p', [_c('span', [_vm._v("1.")]), _vm._v("该福利仅支持在本页面开通可享。")]) : _vm._e(), (_vm.monthly) ? _c('p', [_c('span', [_vm._v("2.")]), _vm._v("额外获赠的一个月包月特权，需手动领取，如未领取则视为放弃。")]) : _vm._e(), _c('div', {
    staticClass: "copyright"
  }, [_vm._v("\n\t\t\t本活动最终解释权归QQ阅读所有\n\t\t")])])])
},staticRenderFns: []}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "DEBUG"
  }, [_c('div', {
    staticClass: "fixed__"
  }, [_vm._v("\n\t\tloggedIn: " + _vm._s(_vm.state.loggedIn) + ", page_no: " + _vm._s(_vm.state.page_no) + " ,first: " + _vm._s(_vm.state.first)), _c('br'), _vm._v("\n\t\tcharged: " + _vm._s(JSON.stringify(_vm.state.charged))), _c('br'), _vm._v("\n\t\thave: " + _vm._s(JSON.stringify(_vm.state.have))), _c('br'), _vm._v("\n\t\topened: " + _vm._s(_vm.state.opened) + ", haveGift: " + _vm._s(_vm.state.haveGift) + "\n\t")])])
},staticRenderFns: []}

/***/ }),
/* 37 */
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
    }],
    attrs: {
      "img": _vm.img
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'ready'),
      expression: " page==='ready' "
    }],
    staticClass: "main"
  }, [_c('mask-info', {
    attrs: {
      "img": _vm.img,
      "mask": _vm.mask,
      "act": _vm.act
    }
  }), _c('img', {
    staticClass: "title_img",
    attrs: {
      "src": _vm.img + '/title_img' + ((_vm.charge && _vm.monthly) ? '' : (_vm.charge ? '_charge' : '_monthly')) + '.png'
    }
  }), (_vm.charge) ? _c('charge', {
    attrs: {
      "img": _vm.img,
      "ios": _vm.ios,
      "act": _vm.act,
      "first": _vm.first,
      "charged": _vm.charged,
      "have": _vm.have,
      "monthly": _vm.monthly
    }
  }) : _vm._e(), (_vm.monthly) ? _c('monthly', {
    attrs: {
      "img": _vm.img,
      "act": _vm.act,
      "vip": _vm.vip,
      "have-gift": _vm.haveGift,
      "ios": _vm.ios
    }
  }) : _vm._e(), _c('rules', {
    attrs: {
      "img": _vm.img,
      "charge": _vm.charge,
      "monthly": _vm.monthly,
      "first": _vm.first,
      "ios": _vm.ios
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Charge"
  }, [_c('img', {
    staticClass: "banner_charge",
    attrs: {
      "src": _vm.img + '/banner_charge.png'
    }
  }), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "info__"
  }, [_vm._v("\n\t\t\t1书券=0.01元，可用来购买书籍\n\t\t")]), (_vm.first) ? _c('div', {
    staticClass: "info__2"
  }, [_vm._v("\n\t\t\t两个金额只能选择一个哦！\n\t\t")]) : _vm._e()]), _vm._l((_vm.items), function(a, i) {
    return _c('div', {
      key: a.money,
      staticClass: "panel--"
    }, [_c('div', {
      staticClass: "table"
    }, [_c('span', {
      staticClass: "small"
    }, [_vm._v(_vm._s(a.coins) + "书币")]), _c('img', {
      staticClass: "coins",
      attrs: {
        "src": _vm.img + '/coins.png'
      }
    }), _c('span', {
      staticClass: "small"
    }, [_vm._v("+")]), _c('span', {
      staticClass: "big"
    }, [_vm._v(_vm._s(a.bills))]), _c('span', {
      staticClass: "small"
    }, [_vm._v("书券")]), _c('img', {
      staticClass: "bills",
      attrs: {
        "src": _vm.img + '/bills.png'
      }
    })]), _c('Btn', {
      attrs: {
        "act": _vm.act,
        "money": a.money,
        "text": '充' + a.money + '元领取',
        "cb": 'CHARGE'
      }
    }), (!_vm.have[_vm.first ? ('f' + a.money) : a.money]) ? _c('p', {
      staticClass: "bottom"
    }, [_vm._v("\n\t\t\t我已充值" + _vm._s(a.money) + "元，"), _c('a', {
      on: {
        "click": function($event) {
          _vm.GET_BILLS(a.money)
        }
      }
    }, [_vm._v("领取" + _vm._s(a.bills) + "书券>")])]) : _vm._e(), (_vm.have[_vm.first ? ('f' + a.money) : a.money] && !_vm.monthly) ? _c('p', {
      staticClass: "bottom"
    }, [_c('a', {
      on: {
        "click": function($event) {
          _vm.act({
            type: 'TO_JINGXUAN'
          })
        }
      }
    }, [_vm._v("已领取，去书城找书>")])]) : _vm._e(), (_vm.have[_vm.first ? ('f' + a.money) : a.money] && _vm.monthly) ? _c('p', {
      staticClass: "bottom"
    }, [_c('a', [_vm._v("已领取")])]) : _vm._e()], 1)
  })], 2)
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
  return _c('div', {
    staticClass: "MaskOver"
  }, [_c('div', {
    staticClass: "content_666"
  }, [_c('div', {
    staticClass: "content_667"
  }, [_c('img', {
    attrs: {
      "src": _vm.img + '/over.png'
    }
  }), _c('p', [_vm._v("本期活动已结束")])])])])
},staticRenderFns: []}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.show),
      expression: "mask.show"
    }],
    staticClass: "MaskInfo",
    on: {
      "touchmove": function($event) {
        _vm.touchmove($event)
      }
    }
  }, [_c('div', {
    staticClass: "content_666"
  }, [_c('div', {
    staticClass: "content_667"
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mask.text !== '朕知道了'),
      expression: " mask.text!=='朕知道了' "
    }],
    staticClass: "close",
    attrs: {
      "src": _vm.img + '/close.png'
    },
    on: {
      "click": _vm.HIDE_MASK
    }
  }), _c('div', {
    staticClass: "useless"
  }), _c('p', {
    staticClass: "line1"
  }, [_vm._v(_vm._s(_vm.mask.line1))]), _c('p', {
    staticClass: "line2"
  }, [_vm._v(_vm._s(_vm.mask.line2))]), _c('Btn', {
    style: ('width:3.92rem;margin-bottom:0.34rem;color:black;'),
    attrs: {
      "money": _vm.mask.money,
      "text": _vm.mask.text,
      "act": _vm.act,
      "cb": _vm.mask.cb
    }
  })], 1)])])
},staticRenderFns: []}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);