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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	Vue.component('app', __webpack_require__(2));
	var root = new Vue({
		el: '#root',
		template: '<app></app>'
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	(function (doc, win) {
	    var docEl = doc.documentElement,
	        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	    function recalc() {
	        var clientWidth = docEl.clientWidth;
	        if (!clientWidth) return;
	        // console.log(clientWidth)
	        clientWidth = clientWidth > 750 ? 750 : clientWidth;
	        docEl.style.fontSize = clientWidth / 7.5 + 'px';
	    };
	    if (!doc.addEventListener) return;
	    win.addEventListener(resizeEvt, recalc, false);
	    doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(3);
	if (Object.keys(__vue_script__).some(function (key) {
	  return key !== "default" && key !== "__esModule";
	})) {
	  console.warn("[vue-loader] src/app.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(20);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-87bc0ca8/app.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			maskLoading: __webpack_require__(4),
			maskFuwuhao: __webpack_require__(11),
			maskResult: __webpack_require__(14)
		},
		data: function data() {
			return {
				loading: true,
				open: false,
				login: true,
				showmask: false,
				intok: false,
				holder: '',
				showfwh: false,
				config: [{
					platform: '',
					title: '去微信关注QQ阅读公众号获口令',
					startTime: '1489654414',
					endTime: '1489654414',
					timers: '',
					skipValue: 'http://www.baidu.com',
					skipType: 2,
					skipDesc: '如何关注',
					actid: '',
					subAct: [{
						toolNum: '100',
						toolType: 0,
						prize: '',
						pic: './images/prizeimg.png',
						pickedNumber: '1000',
						desc: '去QQ阅读公众号《xxx》书中找口令' }]

				}],
				passgift: {
					code: -109,
					errcode: 0,
					type: '',
					amount: '100',
					gigttt: '',
					pic: './images/prizeimg.png',
					expireTime: '1489654414',
					ptxt: '',
					bookinfos: [],
					url: ''
				}

			};
		},
		methods: {
			initpage: function initpage() {
				var self = this;
				Local.init();
				Local.reqaObj(server() + "template/passwordgift/init?qimei=12351235", function (data) {
					self.loading = false;
					self.login = data.isLogin;
					self.config = data.acts;
					var stet = void 0;
					for (var i = 0; i < self.config.length; i++) {
						var stime = self.config[i].startTime;
						var etime = self.config[i].endTime;
						self.config[i].timers = self.getTime(stime, etime);
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param('act_f'));
			},
			getTime: function getTime(startT, endT) {
				var st = new Date(startT);
				var et = new Date(endT);
				var rest = st.getFullYear() + '-' + parseInt(st.getMonth() + 1) + '-' + st.getDate() + ' ' + st.getHours() + '点 ~ ' + et.getFullYear() + '-' + parseInt(et.getMonth() + 1) + '-' + et.getDate() + ' ' + et.getHours() + '点';
				return rest;
			},
			gogurl: function gogurl(url, type, actd, e) {
				var $cur = $(e.currentTarget);
				var self = this;
				if (type == 3) {
					Local.go(url);
				}
				if (type == 2) {
					self.showfwh = true;
				}
				forceLog(param('act_f'), 'goUrl' + actd);
			},
			intblur: function intblur(ev) {
				var self = this;
				var len = self.holder.length;
				if (len > 0) {
					if (ev.keyCode == 13) {
						self.showtank(self.holder);
						$("input").blur();
						forceLog(param('act_f'), 'keyNum');
					}
				}
			},
			actions: function actions(kouling, e) {
				var $cur = $(e.currentTarget);
				var self = this;
				if (self.login) {
					if (self.holder.length > 0) {
						self.showtank(kouling);
					}
					forceLog(param('act_f'), 'btnNum');
				} else {
					Local.login();
				}
			},
			showtank: function showtank(kouling) {
				var self = this;
				Local.init();
				Local.reqaObj(server() + "template/passwordgift/pick?password=" + encodeURI(kouling), function (data) {
					console.log(data);
					self.passgift = data;
					var timer = null;
					self.showmask = true;
					if (self.passgift.code == -108) {
						var rand = -Math.floor(Math.random() * 3);
						self.passgift.errcode = rand;
						console.info(self.passgift.errcode);
					}
					if (self.passgift.code == 0) {
						$(".chaibag").addClass('chaianim');
						$(".tiparea").addClass('anmat');
						var exptime = new Date(self.passgift.expireTime);
						var txt = exptime.getFullYear() + '年' + parseInt(exptime.getMonth() + 1) + '月' + exptime.getDate() + '日';
						if (self.passgift.type == 0) {
							self.passgift.gigttt = '限时免费读';
							self.passgift.ptxt = '免费读至' + txt;
						}
						if (self.passgift.type == 20) {
							self.passgift.gigttt = '书包限时免费读';
							self.passgift.ptxt = '免费读至' + txt;
						}
						if (self.passgift.type == 1) {
							self.passgift.gigttt = self.passgift.amount + '书券';
							self.passgift.ptxt = '有效期至' + txt;
						}
						if (self.passgift.type == 3) {
							self.passgift.gigttt = self.passgift.amount + '成长值';
							self.passgift.ptxt = '加速升级，更多福利';
						}
						if (self.passgift.type == 4) {
							self.passgift.gigttt = self.passgift.amount + '天包月体验卡';
							self.passgift.ptxt = '有效期至' + txt + '，赶紧使用吧';
						}
						if (self.passgift.type == 5) {
							self.passgift.gigttt = self.passgift.amount + '书币';
						}
						if (self.passgift.type == 6) {
							self.passgift.gigttt = self.passgift.amount + '次抽奖机会';
						}
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param('act_f'), 'recevied');
			}
		},
		watch: {
			holder: {
				handler: function handler(val, oldval) {
					if (val.length > 0) {
						$("#btnok").removeClass('disabled');
					} else {
						$("#btnok").addClass('disabled');
					}
				},
				deep: true
			}
		},
		created: function created() {
			this.initpage();
		}
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(5);
	__vue_script__ = __webpack_require__(9);
	if (Object.keys(__vue_script__).some(function (key) {
	  return key !== "default" && key !== "__esModule";
	})) {
	  console.warn("[vue-loader] src/MaskLoading.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(10);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-2859459b/MaskLoading.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {};
		},
		mounted: function mounted() {}
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskLoading\" _v-2859459b=\"\">\n\t<p class=\"_text\" _v-2859459b=\"\"><img :src=\"'images/loading.png'\" _v-2859459b=\"\">正在加载...</p>\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(12);
	if (Object.keys(__vue_script__).some(function (key) {
	  return key !== "default" && key !== "__esModule";
	})) {
	  console.warn("[vue-loader] src/MaskFuwuhao.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(13);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-84327d30/MaskFuwuhao.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {

		data: function data() {
			return {};
		},
		methods: {
			closetk: function closetk() {
				this.$parent.showfwh = false;
			}
		}
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"fwhmask\">\n\t<div class=\"fwhtip\">\n\t\t<p>打开微信</p>\n\t\t<ul>\n\t\t\t<li><span>1.</span>打开微信</li>\n\t\t\t<li><span>2.</span>搜索“QQ阅读服务号”，点击进入\n\t\t\t\t<img :src=\"'images/fwhimgs.jpg'\" />\n\t\t\t</li>\n\t\t\t<li><span>3.</span>关注服务号，在历史推送文章中寻找当期口令</li>\n\t\t</ul>\n\t\t<div class=\"btn_close\" @click=\"closetk\">我知道啦</div>\n\t</div>\n</div>\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(15);
	if (Object.keys(__vue_script__).some(function (key) {
	  return key !== "default" && key !== "__esModule";
	})) {
	  console.warn("[vue-loader] src/MaskResult.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(19);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-4af3df8e/MaskResult.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stringify = __webpack_require__(16);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
		props: ['show', 'tktype', 'hold', 'chai', 'errstat', 'prizeco', 'prrzeinfo'],
		data: function data() {
			return {};
		},
		methods: {
			closemask: function closemask() {
				this.$parent.showmask = false;
				$("#btnok").addClass('disabled');
				$(".chaibag").removeClass('chaianim');
				$(".tiparea").removeClass('anmat');
				this.$parent.holder = '';
			},
			goviparea: function goviparea() {
				Local.goMontharea();
				this.closemask();
				forceLog(param('act_f'), 'goMontharea');
			},
			godraw: function godraw(url) {
				Local.go(url);
				this.closemask();
				forceLog(param('act_f'), 'goLucydraw');
			},
			goreadbook: function goreadbook(onebbid) {
				Local.addToShelfBooks((0, _stringify2.default)(onebbid));
				console.log(onebbid[0].bid);
				ABook.gotoRead(onebbid[0].bid);
				this.closemask();
				forceLog(param('act_f'), 'goRead');
			},
			goshelf: function goshelf(bookbid) {
				Local.addToShelfBooks((0, _stringify2.default)(bookbid));
				Local.goShelf();
				this.closemask();
				forceLog(param('act_f'), 'goShelf');
			}
		}
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(18),
	    $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) {
	  // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask\">\n\t<div class=\"flash\" v-show=\"tktype==0\"><img :src=\"'images/flash.png'\" /></div>\n\t<div class=\"tiparea\" v-show=\"tktype==-105 || tktype==-109\">\n\t\t<img :src=\"'images/dclq.png'\" class=\"dclq\" />\n\t\t<p v-show=\"tktype==-109\">不要贪心哦，同一个口令只能领取一次礼包</p>\n\t\t<p v-show=\"tktype==-105\">本礼包为限量领取，已领罄<br>少侠，下回请早点来</p>\n\t\t<div class=\"btn_close\" @click=\"closemask\">我知道啦</div>\n\t</div>\n\t<div class=\"tiparea\" v-show=\"tktype==-108\">\n\t\t<div class=\"icon_close\" @click=\"closemask\"></div>\n\t\t<img :src=\"errstat==-1?'images/errimg3.png':errstat==-2?'images/errimg1.png':'images/errimg2.png'\" class=\"errimg\" />\n\t\t<p class=\"errtxt\">很遗憾，您的口令没有对应的礼包<br>{{errstat==-1?'需要下凡历个劫':errstat==-2?'三思而行哦':'遇到挫折要不放弃，不抛弃'}}</p>\n\t</div>\n\t<div class=\"tiparea\" v-show=\"tktype==0\">\n\t\t<div class=\"icon_close\" v-show=\"prizeco==0 || prizeco==4 || prizeco==6 || prizeco==20\" @click=\"closemask\"></div>\n\t\t<p class=\"prizett\">恭喜获得{{ prrzeinfo.gigttt }}</p>\n\t\t<div class=\"prizimg\">\n\t\t\t<img :src=\" prrzeinfo.pic \" class=\"errimg\" />\n\t\t</div>\n\t\t<p class=\"errtxt\">{{ prrzeinfo.ptxt }}</p>\n\t\t<div class=\"btn_close\" v-show=\"prizeco==1 || prizeco==3 || prizeco==5\" @click=\"closemask\">我知道啦</div>\n\t\t<div class=\"btn_close\" v-show=\"prizeco==4\" @click=\"goviparea\">去包月专区享特权</div>\n\t\t<div class=\"btn_close\" v-show=\"prizeco==6\" @click=\"godraw(prrzeinfo.url)\">去抽奖</div>\n\t\t<div class=\"btn_close\" v-show=\"prizeco==0\" @click=\"goreadbook(prrzeinfo.bookinfos)\">去阅读</div>\n\t\t<div class=\"btn_close\" v-show=\"prizeco==20\" @click=\"goshelf(prrzeinfo.bookinfos)\">去书架阅读</div>\n\t</div>\n</div>\t\n";

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\">\n\t\t<div class=\"banner\">\n\t\t\t<div class=\"chaibag\"></div>\n\t\t\t<div class=\"redbag\">\n\t\t\t\t<p class=\"logintxt\" v-show=\"!login\">登录输入口令，领红包</p>\n\t\t\t\t<div v-show=\"login\">\n\t\t\t\t\t<input type=\"text\" class='kouling' placeholder=\"输入口令，100%领红包\" v-model='holder'  @keyup=\"intblur($event)\" ref=\"inptxt\" />\n\t\t\t\t</div>\n\t\t\t\t<div id=\"btnok\" class=\"btn\" v-bind:class=\"{ disabled: login }\" @click=\"actions(holder,$event)\">{{ login ? '确 定':'登 录'}}</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<ul class=\"actlist\">\n\t\t\t<li v-for=\"(item, index) in config\">\n\t\t\t\t<div class=\"titlebox\">\n\t\t\t\t\t<span>{{ index+1 }}</span> / {{ item.title }}\n\t\t\t\t\t<p> 活动时间：{{ item.timers}}</p>\n\t\t\t\t\t<div class=\"goconcern\" @click=\"gogurl(item.skipValue,item.skipType,item.actid,$event)\">{{ item.skipDesc }}</div>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"prizelist\">\n\t\t\t\t\t<li v-for=\"plist in item.subAct\">\n\t\t\t\t\t\t<div class=\"prizeimg\">\n\t\t\t\t\t\t\t<img :src=\"plist.pic\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"prizinfo\">\n\t\t\t\t\t\t\t<p class=\"tt\">{{ plist.prize }}</p>\n\t\t\t\t\t\t\t<p class=\"personnum\">已有{{ plist.pickedNumber }}人领取</p>\n\t\t\t\t\t\t\t<p class=\"findpass\">{{ plist.desc }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"finised\" v-show=\"plist.noneLeft\"></div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n</div>\n<mask-loading v-show=\"loading\"></mask-loading>\n<mask-fuwuhao v-show=\"showfwh\"></mask-fuwuhao>\n<mask-result v-show=\"showmask\" :show.sync='showmask' :tktype=\"passgift.code\" hold=\"holder\" :chai='open' :errstat=\"passgift.errcode\" :prizeco=\"passgift.type\" :prrzeinfo=\"passgift\"></mask-result>\n</div>\n";

/***/ }
/******/ ]);