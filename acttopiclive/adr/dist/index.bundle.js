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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
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
__webpack_require__(20)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  "data-v-2683be74",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

// import '../common/debugger.js';
__webpack_require__(18);

Vue.component('imgBlured', __webpack_require__(35));
Vue.component('stack-both', __webpack_require__(32));
Vue.component('countdown', __webpack_require__(28));
Vue.component('buttonAlarm', __webpack_require__(34));
Vue.component('mask-loading', __webpack_require__(1));
Vue.component('debug', __webpack_require__(29));

Vue.component('app', __webpack_require__(27));

var root = new Vue({
	el: '#root',
	template: '<app></app>'
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

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
		$html.style.fontSize = 100 * w / 720 + 'px';
		//document.getElementsByClassName('container')[0].style.height = h+'px';
		console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
	}
	setRem();
	window.addEventListener('resize', setRem);
});

module.exports = {};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(17);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		maskLoading: __webpack_require__(1),
		maskOver: __webpack_require__(31),
		maskDownload: __webpack_require__(30),

		Swiper: __webpack_require__(33)
	},
	data: function data() {
		return {
			dev: false,

			page: 'pending',

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

			show_mask: false,

			loggedIn: false,

			// 头图
			focus_img: '',
			show_notice: false,
			notice: '--',

			play_text: '播放',
			href: '',

			//距离直播开始的时间：
			timeleft: 14400000,
			show_alarm: true,
			// 'pending','unset','resolved','set'
			alarmState: 'pending',
			livetime: '',

			// 作家介绍
			intro: 'Hi，我是叶非夜,日销15.6万言情天福布斯年度人气作家，直播内容预告如下',
			introList: [],
			// 我的作品
			text_title: '--',
			text_total: '--',
			items: [],

			// 随便聊聊
			show_chat: false,
			theme_color: 'white',
			chat_title: '--',
			chat_text: '--',
			video_id: 's03424eytr3',

			// 页面底部的图片
			show_bottom_pic: true,
			bottom_pic: '',

			inProcessing: false,
			obj: {}

		};
	},
	created: function created() {},
	mounted: function mounted() {
		this.act({ type: 'INIT' });
		//console.log(this)
		// this.items = [{
		// 	id: 0,
		// 	title: '美国队长',
		// 	score: 6.7,
		// 	intro: 'Cocain business controlls America!',
		// 	_class: ''
		// }];
	},
	methods: {
		SHOW_MASK: function SHOW_MASK() {
			this.act({ type: 'SHOW_MASK' });
		},
		TO_PLAY: function TO_PLAY() {
			this.act({ type: 'TO_PLAY' });
		},
		act: function act(action) {
			var self = this;
			switch (action.type) {
				case 'INIT':
					if (self.dev) {
						var _self$items;

						self.share = true;
						self.timeleft = 0;
						self.text_title = '我写的书';
						self.text_total = '共2000万字';
						var books = [{
							id: 0,
							_class: '',
							title: '三国演义水浒传西游记',
							score: 8.8,
							intro: '三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记',
							cover: './img/pic.jpg',
							bid: 111,
							corner: '新书推荐'
						}, {
							id: 1,
							_class: '',
							title: '三国演义水浒传西游记',
							score: 8.8,
							intro: '三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记',
							cover: './img/focus.png',
							bid: 111,
							corner: '人气'
						}, {
							id: 2,
							_class: '',
							title: '三国演义水浒传西游记',
							score: 8.8,
							intro: '三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记三国演义水浒传西游记',
							cover: './img/thumb.jpg',
							bid: 111,
							corner: '新作'
						}];
						books.forEach(function (a) {
							if (a.intro.length > 150) {
								a.intro = a.intro.substr(0, 150) + ' ...';
							};
						});
						(_self$items = self.items).push.apply(_self$items, books);
						self.introList = ['--', '--', '--', '--'];
						self.show_chat = true;
						self.theme_color = 'grey';
						self.page = 'ready';
					} else {
						// if(self.share){
						// 	window.initSNS = function(){
						// 		S.share({
						// 			url: location.href,
						// 			cover: '',//location.href.replace(/share\.html/,'img/qqreader.png'),
						// 			title: 'QQ阅读大神直播',
						// 			desc: 'QQ阅读大神直播'
						// 		})
						// 	};
						// };
						Local.forceLog('-1', 'topic_live_index');
						Local.reqaObj(common.server() + 'topic/live/init?topicid=' + common.param('topicid'), function (data) {
							var _self$introList;

							console.log(data);
							var __ = data.topic;

							self.loggedIn = data.isLogin;

							self.focus_img = __.headimg;
							self.show_notice = __.havebroadcast;
							self.notice = __.broadcast;

							self.timeleft = __.timeleft;
							self.play_text = __.timeleft < -3600000 ? '已结束' : '播放';
							self.href = __.href;

							self.show_alarm = __.haveremindtime;
							if (self.timeleft <= 14400000) {
								self.show_alarm = false;
							};
							self.alarmState = data.reserved === true ? 'resolved' : 'unset';
							self.livetime = __.livetime;

							self.intro = __.authotitle;
							(_self$introList = self.introList).push.apply(_self$introList, _toConsumableArray(__.authointro));

							self.text_title = __.bookmodule.title;
							self.text_total = __.bookmodule.comment;
							__.bookmodule.books.forEach(function (a, i) {
								if (a.intro.length > 150) {
									a.intro = a.intro.substr(0, 150) + ' ...';
								};
								console.log(a.intro);
								self.items.push({
									id: i,
									_class: '',
									title: a.title,
									score: Number(a.score),
									intro: a.intro,
									cover: a.cover,
									bid: a.bid,
									corner: a.extra
								});
							});

							self.show_chat = __.havevideo;
							self.theme_color = data.color;
							self.chat_title = __.videotitle;
							self.chat_text = __.videointro;
							self.video_id = __.videourl;

							self.show_bottom_pic = __.haveintroimg;
							self.bottom_pic = __.introimg;

							if (!self.share) {
								// 如果当前页面不是分享页：
								var url = function () {
									var pre = function () {
										// 如果当前环境为测试环境：
										if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
											return 'https://ptsolomo.reader.qq.com/book_res/event';
										} else {
											return 'https://yuedu.reader.qq.com/event';
										}
									}();
									return pre + '/acttopiclive/adr/share.html?tf=1&topicid=' + common.param('topicid');
								}();
								// 设置右上角的分享图标：
								Local.setIconForShareing(url, data.shareimg, data.sharetitle, data.shareintro);
							} else {
								// 如果当前页面为分享页：
								self.obj = {
									url: location.href,
									cover: data.shareimg,
									title: data.sharetitle,
									desc: data.shareintro
								};
								// 设置用于二次分享的信息：
								sns.share(self.obj);
								// function __share(){
								// 	S.share( self.obj )
								// }
								// if(window.S){
								// 	__share();
								// }else{
								// 	var interval = setInterval(()=>{
								// 		if(window.S){
								// 			__share();
								// 			clearInterval(interval);
								// 		};
								// 	},500);
								// }
							}

							//self.act({type:'MOCK'});

							self.page = 'ready';
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					};
					break;
				case 'MOCK':
					self.timeleft = 10000;
					break;
				case 'SET_ALARM':
					Local.forceLog('-1', 'topic_live_to_reserve');
					if (self.loggedIn === false) {
						Local.login();
					} else if (self.alarmState === 'unset') {
						try {
							Local.reqaObj(common.server() + ('topic/live/reserve?tid=' + common.param('topicid')), function (data) {
								//console.log( JSON.stringify(data) )
								self.alarmState = 'set';
							}, [], function () {
								Local.showToast("网络异常，请稍候重试");
							}, 1);
						} catch (e) {
							console.log(e);
						}
					};
					break;
				case 'MINUS':
					if (this.timeleft - 60000 > 0) {
						this.timeleft -= 60000;
					} else {
						this.timeleft = 0;
					};
					if (this.timeleft <= 14400000) {
						this.show_alarm = false;
					};
					break;
				case 'SHOW_MASK':
					if (!self.inProcessing) {
						self.inProcessing = true;
						var href = function () {
							if (env.pt === 'adr') {
								return 'http://iyuedu.qq.com/event/acttopiclive/adr/index.html?topicid=' + common.param('topicid');
							} else {
								return 'https://yuedu.reader.qq.com/event/acttopiclive/ios/index.html?topicid=' + common.param('topicid');
							}
						}();

						// href = href.replace(
						// 	/acttopiclive.*/,
						// 	'acttopiclive/'+env.pt+'/index.html?topicid='+common.param('topicid')
						// );
						//console.log(href);
						//N.openPage( href );
						sns.open(function (installStat, plat) {
							if (installStat == -2) {
								bnative.openPage(href);
							} else if (installStat) {
								bnative.openPage(href);
							} else {}
						});
						setTimeout(function () {
							self.show_mask = true;
							self.inProcessing = false;
						}, 3000);
					}
					break;
				case 'TO_PLAY':
					Local.forceLog('-1', 'topic_live_to_play');
					//Local.openPage( self.href );
					location.href = self.href;
					break;
				case 'TO_DOWNLOAD':
					N.downLoad(null, '10003531');
					break;
				case 'HIDE_MASK':
					self.show_mask = false;
					break;
				case 'TO_BOOK':
					Local.forceLog('-1', 'topic_live_to_book_' + action.bid);
					if (!self.share) {
						ABook.gotoDetail(action.bid);
					} else {
						self.act({
							type: 'SHOW_MASK'
						});
					}
					break;
			}
		}
	}
};

/***/ }),
/* 7 */
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

module.exports = {
	props: ['timeleft', 'act', 'style'],
	data: function data() {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			img: {
				time: 'img/time.png'
			}
		};
	},
	watch: {
		timeleft: function timeleft(new_val) {
			this.setNumbers(new_val);
		}
	},
	mounted: function mounted() {
		var _this = this;

		this.setNumbers(this.timeleft);
		setInterval(function () {
			_this.act({
				type: 'MINUS',
				value: 60000
			});
		}, 60000);
	},
	methods: {
		setNumbers: function setNumbers(time) {
			var days = Math.floor(time / 1000 / 3600 / 24);
			var hours = Math.floor((time - days * 1000 * 3600 * 24) / 1000 / 3600);
			var minutes = Math.floor((time - days * 1000 * 3600 * 24 - hours * 1000 * 3600) / 1000 / 60);
			//days = this.format(days);
			hours = this.format(hours);
			minutes = this.format(minutes);
			this.days = days;
			this.hours = hours;
			this.minutes = minutes;
			//console.log(this.days)
		},
		format: function format(num) {
			if (num < 10) {
				num = '0' + num;
			};
			return num;
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

exports.default = {
	props: ['state'],
	mounted: function mounted() {}
};

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

module.exports = {
	props: ['show', 'act'],
	methods: {
		hide: function hide() {
			this.act({
				type: 'HIDE_MASK'
			});
		},
		TO_DOWNLOAD: function TO_DOWNLOAD() {
			this.act({
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


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: ['items', 'act'],
	data: function data() {
		return {
			img: {
				cover: './img/cover.png',
				stars: './img/stars.png'
			},

			cards: [],
			nav: [],
			dot: 0,

			switching: false,
			canScroll: true,
			X1: null,
			X2: null,
			Y1: null,
			Y2: null,
			moveCount: 0
		};
	},
	watch: {
		items: function items() {
			var self = this;
			setTimeout(function () {
				self.getData();
			}, 300);
		}
	},
	created: function created() {},
	methods: {
		getData: function getData() {
			var self = this;
			var cards = JSON.parse(JSON.stringify(self.items)).reverse();
			//console.log(cards)
			if (cards.length === 1) {
				//cards[1] = JSON.parse( JSON.stringify(cards[0]) );
				//cards[2] = JSON.parse( JSON.stringify(cards[0]) );
				//cards[3] = JSON.parse( JSON.stringify(cards[0]) );
				//this.cards = cards;
				this.nav = [0];
				this.navLength = 1;
			} else if (cards.length === 2) {
				cards[2] = JSON.parse(JSON.stringify(cards[0]));
				cards[3] = JSON.parse(JSON.stringify(cards[1]));
				//this.cards = cards;
				this.nav = [0, 1];
				this.navLength = 2;
			} else if (cards.length === 3) {
				cards[3] = JSON.parse(JSON.stringify(cards[0]));
				cards[4] = JSON.parse(JSON.stringify(cards[1]));
				cards[5] = JSON.parse(JSON.stringify(cards[2]));
				//this.cards = cards;
				this.nav = [0, 1, 2];
				this.navLength = 3;
			} else {
				var nav = [];
				for (var i = 0; i < cards.length; i++) {
					nav[i] = i;
				}
				this.nav = nav;
				this.navLength = cards.length;
			}
			cards.forEach(function (a, i) {
				a.id = i;
			});
			this.cards = cards;

			this.length = this.cards.length;
			this.current = this.length - 1;
			//window.addEventListener('load',function(){
			if (self.cards.length === 1) {
				self.cards[0]._class = 'toFirst';
			} else if (self.cards.length >= 4) {
				self.cards[self.current]._class = 'toFirst';
				self.cards[self.current - 1]._class = 'toSecond';
				self.cards[self.current - 2]._class = 'toThird';
			}
			//})
		},
		play: function play(direction) {
			var self = this;
			if (!self.switching) {
				self.switching = true;
				if (self.dot < self.navLength - 1) {
					self.dot++;
				} else {
					self.dot = 0;
				}
				console.log('true');
				this.cards[this.current]._class = 'wira-' + direction;
				this.cards[this.current - 1]._class = 'toFirst';
				this.cards[this.current - 2]._class = 'toSecond';
				this.cards[this.current - 3]._class = 'toThird';
				setTimeout(function () {
					self.cards.unshift(self.cards.splice(-1, 1)[0]);
					self.cards[0]._class = '';
					self.switching = false;
				}, 600);
			};
		},
		touchstart: function touchstart(e) {
			this.moveCount = 0;
			this.canScroll = true;
			this.X1 = e.changedTouches[0].pageX;
			this.Y1 = e.changedTouches[0].pageY;
		},
		touchmove: function touchmove(e) {
			this.moveCount++;
			if (this.moveCount === 1) {
				this.X2 = e.changedTouches[0].pageX;
				this.Y2 = e.changedTouches[0].pageY;
				var dY = this.Y2 - this.Y1;
				var dX = this.X2 - this.X1;
				if (Math.abs(dY) > 2 * Math.abs(dX)) {
					this.canScroll = true;
				} else {
					this.canScroll = false;
				}
			};
			if (!this.canScroll) {
				e.preventDefault();
			};
		},
		touchend: function touchend(e) {
			if (!this.canScroll) {
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X1;
				if (distance > 0) {
					if (this.nav.length > 1) {
						this.play('right');
					};
				} else if (distance < 0) {
					if (this.nav.length > 1) {
						this.play('left');
					};
				}
			};
		},
		TO_BOOK: function TO_BOOK(bid) {
			this.act({
				type: 'TO_BOOK',
				bid: bid
			});
		}
	}
};

/***/ }),
/* 13 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	props: {
		act: {},
		img: {},
		items: {
			default: function _default() {
				return [];
			}
		},
		style: {
			default: ''
		},
		ease: {
			default: 'ease-out' //'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
		},
		carousel: {
			default: false
		},
		sticky: {
			default: true
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
		author: function author() {
			return this.items[this.currentOne].name;
		}
	},
	watch: {
		items: function items() {
			//this.copy = this.items;
		},
		currentOne: function currentOne(new_val) {}
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
/* 14 */
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

module.exports = {
	// alarm: 'pending', 'unset', 'resolved', 'set'
	props: ['alarm', 'act'],
	data: function data() {
		return {
			img: {
				before: 'img/btn-before.png',
				after: 'img/btn-after.png',
				bell: 'img/bell.png',
				check: 'img/check.png'
			}
		};
	},
	methods: {
		setAlarm: function setAlarm() {
			console.log(this.alarm);
			if (this.alarm === 'unset') {
				this.act({
					type: 'SET_ALARM'
				});
			};
		}
	}
};

/***/ }),
/* 15 */
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

module.exports = {
	data: function data() {
		return {
			img: {
				pic: 'img/pic.jpg'
			}
		};
	}
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".DEBUG[data-v-6ffcd92e]{position:relative;width:100%;height:100px}.DEBUG .fixed__[data-v-6ffcd92e]{position:fixed;left:0;bottom:0;width:100%;height:100px;background:rgba(0,0,0,.5);color:#fff;font-size:14px;z-index:9999}", ""]);

// exports


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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  null,
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
  __webpack_require__(7),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  "data-v-864df572",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  "data-v-6ffcd92e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(26)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  "data-v-c8cc6b24",
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
  __webpack_require__(11),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  "data-v-55a20fba",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(44),
  /* scopeId */
  "data-v-ba8e3d82",
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
  __webpack_require__(13),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  "data-v-77a99a5c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(19)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  "data-v-1da321ca",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-blurred"
  }, [_c('img', {
    staticClass: "img-1",
    attrs: {
      "src": _vm.img.pic
    }
  }), _c('img', {
    staticClass: "img-2",
    attrs: {
      "src": _vm.img.pic
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 37 */
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
      "src": 'img/over.png'
    }
  }), _c('p', [_vm._v("本期活动已结束")])])])])
},staticRenderFns: []}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: 'button ' + _vm.alarm,
    on: {
      "click": _vm.setAlarm
    }
  }, [_c('img', {
    class: 'p-before ' + _vm.alarm,
    attrs: {
      "src": _vm.img.before
    }
  }), _c('img', {
    class: 'p-after ' + _vm.alarm,
    attrs: {
      "src": _vm.img.after
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "DEBUG"
  }, [_c('div', {
    staticClass: "fixed__"
  }, [_vm._v("\n\t\tloggedIn: " + _vm._s(_vm.state.loggedIn)), _c('br'), _vm._v("\n\t\tshow_notice: " + _vm._s(_vm.state.show_notice) + ", timeleft: " + _vm._s(_vm.state.timeleft)), _c('br'), _vm._v("\n\t\tshow_alarm: " + _vm._s(_vm.state.show_alarm) + ", alarmState: " + _vm._s(_vm.state.alarmState)), _c('br'), _vm._v("\n\t\tshow_chat: " + _vm._s(_vm.state.show_chat)), _c('br'), _vm._v("\n\t\tshow_bottom_pic: " + _vm._s(_vm.state.show_bottom_pic) + "\n\t")])])
},staticRenderFns: []}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Swiper__"
  }, [_c('div', {
    staticClass: "covers"
  }, _vm._l((_vm.items), function(a, i) {
    return _c('div', {
      staticClass: "cover",
      class: i === _vm.currentOne ? 'active' : '',
      on: {
        "click": _vm.to_book
      }
    }, [_c('div', {
      staticClass: "shadow"
    }), _c('img', {
      staticClass: "cover_img",
      attrs: {
        "src": a.cover
      }
    }), (a.corner) ? _c('p', {
      staticClass: "corner"
    }, [_vm._v("\r\n\t\t\t\t" + _vm._s(a.corner) + "\r\n\t\t\t")]) : _vm._e()])
  })), _c('div', {
    ref: "swiper",
    staticClass: "Swiper",
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
  }, [_c('ul', {
    staticClass: "train",
    class: _vm.carousel ? 'carousel' : '',
    style: ('transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);transition:' + _vm.transition + ';' +
      '-webkit-transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);-webkit-transition:' + _vm.transition + ';')
  }, [(_vm.carousel) ? _c('li', {
    staticClass: "item",
    staticStyle: {
      "background": "url(img/scotches.png) no-repeat 0% 100%",
      "background-size": "2.4rem auto"
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[_vm.items.length - 2].name) + "\r\n\t\t\t")]) : _vm._e(), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    staticStyle: {
      "background": "url(img/scotches.png) no-repeat 0% 100%",
      "background-size": "2.4rem auto"
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[_vm.items.length - 1].name) + "\r\n\t\t\t")]) : _vm._e(), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  }), _vm._l((_vm.items), function(a, i) {
    return _c('li', {
      key: a.id,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "cont"
    }, [_c('div', {
      staticClass: "shadow"
    }), _c('div', {
      class: 'card',
      on: {
        "click": function($event) {
          _vm.act({
            type: 'TO_BOOK',
            bid: a.bid
          })
        }
      }
    }, [_c('div', {
      staticClass: "part-top"
    }, [_c('div', {
      staticClass: "right"
    }, [_c('div', {
      staticClass: "title_table"
    }, [_c('div', {
      staticClass: "title_cell"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(a.title) + "\r\n\t\t\t\t\t\t\t\t\t")])]), _c('div', {
      staticClass: "stars"
    }, [_c('div', {
      staticClass: "bg",
      style: ('width:' + a.score * 10 + '%;')
    }), _c('img', {
      staticClass: "starsImg",
      attrs: {
        "src": './img/stars.png'
      }
    })]), _c('p', {
      staticClass: "score"
    }, [_vm._v(_vm._s(a.score) + "分")])])]), _c('p', {
      staticClass: "intro"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t" + _vm._s(a.intro) + "\r\n\t\t\t\t\t\t")])])])])
  }), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    staticStyle: {
      "background": "url(img/scotches.png) no-repeat 0% 100%",
      "background-size": "2.4rem auto"
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[0].name) + "\r\n\t\t\t")]) : _vm._e(), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    staticStyle: {
      "background": "url(img/scotches.png) no-repeat 0% 100%",
      "background-size": "2.4rem auto"
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[1].name) + "\r\n\t\t\t")]) : _vm._e()], 2), _c('ul', {
    staticClass: "pagination"
  }, _vm._l((_vm.items), function(item, i) {
    return (_vm.items.length > 1) ? _c('li', {
      staticClass: "dot",
      class: 'item ' + (i === _vm.currentOne ? 'active' : ''),
      on: {
        "click": function($event) {
          _vm.toCard(i)
        }
      }
    }) : _vm._e()
  }))])])
},staticRenderFns: []}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "COUNTDOWN",
    style: (_vm.style)
  }, [_c('img', {
    staticClass: "timeImg",
    attrs: {
      "src": _vm.img.time
    }
  }), _c('div', {
    staticClass: "content11"
  }, [_c('p', {
    staticClass: "days"
  }, [_vm._v(_vm._s(_vm.days))]), _c('p', {
    staticClass: "hours"
  }, [_vm._v(_vm._s(_vm.hours))]), _c('p', {
    staticClass: "minutes"
  }, [_vm._v(_vm._s(_vm.minutes))])])])
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
  }), (_vm.page === 'over') ? _c('mask-over') : _vm._e(), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'ready'),
      expression: " page==='ready' "
    }],
    staticClass: "main"
  }, [_c('mask-download', {
    attrs: {
      "show": _vm.show_mask,
      "act": _vm.act
    }
  }), _c('div', {
    staticClass: "focus",
    style: ('background-image: url(' + _vm.focus_img + ');background-size: 100% auto;')
  }, [_c('div', {
    staticClass: "margin"
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show_notice),
      expression: "show_notice"
    }],
    staticClass: "notice"
  }, [_c('img', {
    attrs: {
      "src": 'img/horn.png'
    }
  }), _vm._v(_vm._s(_vm.notice) + "\n\t\t\t\t")])]), _c('div', {
    staticClass: "front_con",
    style: ('background-image:url(img/front.png);background-size:100% auto;display:' + (_vm.share || (!_vm.share && _vm.timeleft > 0) ? 'block' : 'none'))
  }, [(!_vm.share) ? _c('div', {
    staticClass: "front"
  }, [_c('img', {
    staticClass: "timeleft",
    style: (_vm.show_alarm ? '' : 'left:0.98rem;top:0.5rem;'),
    attrs: {
      "src": 'img/timeleft.png'
    }
  }), _c('countdown', {
    style: (_vm.show_alarm ? '' : 'left:2.86rem;top:0.3rem;'),
    attrs: {
      "timeleft": _vm.timeleft,
      "act": _vm.act
    }
  }), (_vm.show_alarm) ? _c('button-alarm', {
    attrs: {
      "alarm": _vm.alarmState,
      "act": _vm.act
    }
  }) : _vm._e()], 1) : _vm._e()]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.share && _vm.timeleft <= 0),
      expression: "!share&&timeleft<=0"
    }],
    staticClass: "play",
    on: {
      "click": _vm.TO_PLAY
    }
  }, [_c('img', {
    staticClass: "replay",
    attrs: {
      "src": 'img/replay_3.png'
    }
  }), _c('p', {
    staticClass: "play_text"
  }, [_vm._v(_vm._s(_vm.play_text))])]), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.share),
      expression: "share"
    }],
    staticClass: "btn_toread",
    attrs: {
      "src": 'img/btn_toread_3.png'
    },
    on: {
      "click": _vm.SHOW_MASK
    }
  }), _c('div', {
    staticClass: "middle"
  }, [_c('img', {
    staticClass: "open-quote",
    attrs: {
      "src": 'img/open-quote.png'
    }
  }), _c('div', {
    staticClass: "middle-top"
  }, [_c('img', {
    staticClass: "close-quote",
    attrs: {
      "src": 'img/close-quote.png'
    }
  }), _c('p', {
    staticClass: "p-black"
  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.intro) + "\n\t\t\t\t\t")]), _c('ul', _vm._l((_vm.introList), function(a) {
    return _c('li', [(_vm.introList.length > 1) ? _c('span', [_vm._v("◆")]) : _vm._e(), _vm._v(_vm._s(a))])
  }))]), _c('div', {
    staticClass: "my_books"
  }, [_c('p', {
    staticClass: "my_books_title"
  }, [_vm._v(_vm._s(_vm.text_title))]), _c('div', {
    staticClass: "text_table"
  }, [_c('div', {
    staticClass: "text_cell"
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.text_total) + "\n\t\t\t\t\t\t")])])]), _c('swiper', {
    attrs: {
      "items": _vm.items,
      "act": _vm.act
    }
  })], 1), (_vm.show_chat) ? _c('div', {
    staticClass: "chat",
    style: ('background:' + _vm.theme_color)
  }, [_c('div', {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "chat_title"
  }, [_vm._v(_vm._s(_vm.chat_title))]), _c('p', {
    staticClass: "chat_text"
  }, [_vm._v(_vm._s(_vm.chat_text))]), _c('div', {
    staticClass: "video-frame"
  }, [_c('iframe', {
    attrs: {
      "frameborder": "0",
      "width": "100%",
      "height": "100%",
      "src": 'https://v.qq.com/iframe/player.html?vid=' + _vm.video_id + '&tiny=0&auto=0',
      "allowfullscreen": ""
    }
  })], 1)])]) : _vm._e(), _c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show_bottom_pic),
      expression: "show_bottom_pic"
    }],
    staticClass: "bottom_pic",
    attrs: {
      "src": _vm.bottom_pic
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Stack"
  }, [_c('div', {
    staticClass: "space"
  }, [_c('ul', {
    staticClass: "stack",
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchmove": function($event) {
        _vm.touchmove($event)
      },
      "touchend": function($event) {
        _vm.touchend($event)
      }
    }
  }, _vm._l((_vm.cards), function(a, i) {
    return _c('li', {
      key: a.id,
      class: 'card ' + a._class,
      on: {
        "click": function($event) {
          _vm.TO_BOOK(a.bid)
        }
      }
    }, [_c('div', {
      staticClass: "part-top"
    }, [_c('div', {
      staticClass: "right"
    }, [_c('div', {
      staticClass: "title_table"
    }, [_c('div', {
      staticClass: "title_cell"
    }, [_vm._v("\r\n\t\t\t\t\t\t\t\t" + _vm._s(a.title) + "\r\n\t\t\t\t\t\t\t")])]), _c('div', {
      staticClass: "stars"
    }, [_c('div', {
      staticClass: "bg",
      style: ('width:' + a.score * 10 + '%;')
    }), _c('img', {
      staticClass: "starsImg",
      attrs: {
        "src": _vm.img.stars
      }
    })]), _c('p', {
      staticClass: "score"
    }, [_vm._v(_vm._s(a.score) + "分")])])]), _c('p', {
      staticClass: "intro"
    }, [_vm._v("\r\n\t\t\t\t\t" + _vm._s(a.intro) + "\r\n\t\t\t\t")]), _c('div', {
      staticClass: "cover"
    }, [_c('img', {
      staticClass: "cover_img",
      attrs: {
        "src": a.cover
      }
    }), (a.corner) ? _c('p', {
      staticClass: "corner"
    }, [_vm._v("\r\n\t\t\t\t\t\t" + _vm._s(a.corner) + "\r\n\t\t\t\t\t")]) : _vm._e()])])
  }))]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.nav.length > 1),
      expression: " nav.length>1 "
    }],
    staticClass: "nav"
  }, _vm._l((_vm.nav), function(a, i) {
    return _c('li', {
      class: i === _vm.dot ? 'active' : ''
    })
  }))])
},staticRenderFns: []}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "mask-download"
  }, [_c('div', {
    staticClass: "mask-panel"
  }, [_c('p', {
    staticClass: "top"
  }, [_vm._v("下载QQ阅读，畅读海量小说")]), _c('p', {
    staticClass: "middle_part"
  }, [_vm._v("如果还未安装QQ阅读，你可以：")]), _c('ul', {
    staticClass: "bottom"
  }, [_c('li', {
    staticClass: "confirm",
    on: {
      "click": _vm.TO_DOWNLOAD
    }
  }, [_vm._v("下载QQ阅读")]), _c('li', {
    staticClass: "cancel",
    on: {
      "click": _vm.hide
    }
  }, [_vm._v("取消")])])])])
},staticRenderFns: []}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(47)("1154f766", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-6ffcd92e\",\"scoped\":true,\"hasInlineConfig\":true}!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Debug.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-6ffcd92e\",\"scoped\":true,\"hasInlineConfig\":true}!./../../../../node_modules/sass-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Debug.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(5)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);