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
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(24);
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
	    var id = "_v-dce648f0/app.vue";
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
			maskLogin: __webpack_require__(11),
			maskOver: __webpack_require__(14),
			maskChat: __webpack_require__(18),
			ejectMask: __webpack_require__(21)
		},
		data: function data() {
			return {
				ispageB: false,
				loading: true,
				over: false,
				login: false,
				maskshow: false,
				voteshow: false,
				promotevote: false,
				chatshow: false,
				hongdian: false,
				columnId: '',
				username: 'Feirang',
				userface: 'images/userface.png',
				shelfshow: false,
				bookshelf: [],
				listbook: [],
				ticket: 2,
				ismengzhu: false,
				bookMonthCnt: 0,
				bookname: '',
				tktype: 11,
				num: 0,
				timerok: true
			};
		},
		methods: {
			initpage: function initpage() {
				var self = this;
				Local.init();
				Local.reqaObj(server() + "pkg161205new/init", function (data) {
					console.log(data);
					self.loading = false;
					if (param("page") == 2) {
						self.ispageB = true;
					}
					if (data.code == -3) {
						self.over = true;
					}
					self.login = data.isLogin;
					if (self.login) {
						self.hongdian = data.hasread;
						self.username = data.usernick;
						self.userface = data.usericon ? data.usericon : "images/defaultface.png";
						self.columnId = data.columnId;
						self.bookshelf = data.shelf;
						self.listbook = data.columnBooks;
						self.ticket = data.ticket;
						var shelfLen = self.bookshelf.length;
						if (shelfLen > 0) {
							self.shelfshow = true;
						} else {
							self.shelfshow = false;
						}
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog(param("act_f"), 'page' + param("page"));
			},
			gogoodbook: function gogoodbook() {
				var self = this;
				window.location.href = 'uniteqqreader://nativepage/rank/list?actionId=' + self.columnId;
				console.log('uniteqqreader://nativepage/rank/list?actionId=' + self.columnId);
			},
			gopromote: function gopromote() {
				var self = this;
				self.maskshow = true;
				self.promotevote = true;
			},
			gochatlist: function gochatlist() {
				var self = this;
				Local.reqaObj(server() + "pkg161205/read", function (data) {
					self.hongdian = true;
					self.chatshow = true;

					if (self.timerok) {
						self.$refs.child.$emit('chatscroll', self.num);
					}
				}, [], function () {
					Local.showToast('网络异常，请稍候重试');
				}, 1);
				forceLog(param("act_f"), "read" + param("page"));
			},
			votes: function votes(booklist) {
				var self = this;
				self.bookname = booklist.title;
				var bid = booklist.id;
				if (self.ticket == 0) {
					self.maskshow = true;
					self.voteshow = true;
				} else {
					Local.reqaObj(server() + "pkg161205/vote?bid=" + bid, function (data) {
						console.log(data);
						self.ismengzhu = data.ismengzhu;
						self.bookMonthCnt = data.bookMonthCount;
						self.tktype = data.code;
						self.maskshow = true;
						self.voteshow = true;
					}, [], function () {
						Local.showToast('网络异常，请稍候重试');
					}, 1);
				}
				forceLog(param("act_f"), "vote" + param("page"));
			},
			godetail: function godetail(bid, wz) {
				ABook.gotoDetail(bid);
				forceLog(param("act_f"), "gotobook" + param("page") + wz + bid);
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
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
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
	    var id = "_v-f7bae912/MaskLoading.vue";
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

	module.exports = "\n<div class=\"MaskLoading\" _v-f7bae912=\"\">\n\t<p class=\"_text\" _v-f7bae912=\"\"><img :src=\"'images/loading.png'\" _v-f7bae912=\"\">正在加载...</p>\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(12);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/maskLogin.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-57129804/maskLogin.vue";
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
		mounted: function mounted() {},
		methods: {
			login: function login() {
				console.log("qingdenglu");
				Local.login();
			}
		}
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"login\">\n\t<div class=\"liu\"></div>\n\t<img class=\"imgbox\" :src=\"'images/loginimg.jpg'\" />\n\t<a href=\"javascript:\" class=\"loginbtn\" @click=\"login\">\n\t\t<span>登录参与</span>\n\t</a>\n</div>\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(15);
	__vue_template__ = __webpack_require__(17);
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
	    var id = "_v-69300aa9/MaskOver.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"over\" _v-69300aa9=\"\">\n\t<div class=\"over-c\" _v-69300aa9=\"\">\n        <img :src=\"'images/over.png'\" alt=\"本期活动已结束\" _v-69300aa9=\"\">\n        <p class=\"over-p1\" _v-69300aa9=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-69300aa9=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(19);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/maskChat.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-d4efa9e6/maskChat.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {
				chatinfo: [{
					cover: 'images/face1.png',
					nname: '小生',
					info: '猫腻大神，好喜欢你的书',
					infoimg: ''
				}, {
					cover: 'images/face2.png',
					nname: '猫腻',
					info: '谢谢，喜欢我的书可以给我投月票哦',
					infoimg: ''
				}, {
					cover: 'images/face3.png',
					nname: '见见',
					info: '投月票有啥用？',
					infoimg: ''
				}, {
					cover: 'images/face4.png',
					nname: '唐家三少',
					info: '月票是对你喜欢的作者的回馈，投月票，会提升作者月票榜排名，激励大神写出更好的作品哦～',
					infoimg: [{
						imgface: 'images/tkimg1.jpg'
					}, {
						imgface: 'images/tkimg2.jpg'
					}]
				}, {
					cover: 'images/face5.png',
					nname: '飞龙在天',
					info: '大神大神，我有月票，可以在哪里投',
					infoimg: ''
				}, {
					cover: 'images/face6.png',
					nname: '辰东',
					info: '可在书籍详情页、章节互动页、阅读尾页等页面对作品投月票',
					infoimg: [{
						imgface: 'images/tkimg3.jpg'
					}, {
						imgface: 'images/tkimg4.jpg'
					}]
				}, {
					cover: 'images/face7.png',
					nname: '菜头',
					info: '大神，在哪里可以查到我有没有月票',
					infoimg: ''
				}, {
					cover: 'images/face8.png',
					nname: '叶非夜',
					info: '可以进入个人中心查看月票详细信息哦',
					infoimg: [{ imgface: 'images/tkimg5.jpg' }]
				}, {
					cover: 'images/face9.png',
					nname: '大飞',
					info: '大神，我没有月票，如何获得呢？',
					infoimg: ''
				}, {
					cover: 'images/face10.png',
					nname: '夜北',
					info: '订阅书籍达到指定标准后根据VIP等级赠送月票',
					infoimg: [{ imgface: 'images/tkimg6.jpg' }]
				}, {
					cover: 'images/face6.png',
					nname: '辰东',
					info: '现在也可以在活动页投月票哦',
					infoimg: ''
				}],
				timer: ''
			};
		},
		props: ['mask', 'username', 'scrolsstart', 'num', 'timerok'],
		mounted: function mounted() {},
		methods: {
			closechat: function closechat() {
				var self = this;
				self.mask = false;
				self.timerok = false;
				clearInterval(self.timer);
				$("#scrolling li").show();
				$("#scrolling li").addClass('animations');
				$(".govote").show();
			}
		},
		created: function created() {
			this.$on("chatscroll", function (data) {
				var self = this;
				self.num = data;
				setTimeout(function () {
					var heiH = $("#wrapper").height();
					var len = $("#scrolling li").length;
					var scrollH = 0;
					$("#scrolling li").eq(self.num).show();
					$("#scrolling li").eq(self.num).addClass('animations');
					self.timer = setInterval(function () {
						self.num++;
						if (self.num > len) {
							self.num = len;
							$(".govote").show();
							clearInterval(self.timer);
						}
						console.log(self.num);
						$("#scrolling li").eq(self.num).show();
						$("#scrolling li").eq(self.num).addClass('animations');
						scrollH = $("#scrolling").height();
						var offsetY = scrollH - heiH;
						if (scrollH >= heiH) {
							$("#scroller").scrollTop(offsetY);
						}
					}, 2000);
				}, 100);
			});
		}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"maskchat\">\n\t<div class=\"chatbox\">\n\t\t<div class=\"closechat\" @click=\"closechat\"></div>\n\t\t<p>{{ username }} 加入群聊</p>\n\t\t<div class=\"chatlist\" id=\"wrapper\">\n\t\t\t<div id=\"scroller\">\n\t\t\t\t<div id=\"scrolling\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li v-for=\"chatlist in chatinfo\">\n\t\t\t\t\t\t\t<div class=\"face_name\">\n\t\t\t\t\t\t\t\t<img :src=\"chatlist.cover\" />\n\t\t\t\t\t\t\t\t{{ chatlist.nname }}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"chatinfo\">\n\t\t\t\t\t\t\t\t{{ chatlist.info }}\n\t\t\t\t\t\t\t\t<div class=\"imgbox\">\n\t\t\t\t\t\t\t\t\t<img v-for=\"imgs in chatlist.infoimg\" :src=\"imgs.imgface\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"govote\" @click=\"closechat\"><span>立刻去投月票</span></div>\n\t\t\t\t\t<div class=\"h7\"></div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(22);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ejectMask.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(23);
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
	    var id = "_v-d893d8f8/ejectMask.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {};
		},
		props: ['maskshow', 'voteshow', 'promotevote', 'voteyue', 'tktype', 'ismengzhu', 'bookname', 'bookmothcnt'],
		mounted: function mounted() {},
		methods: {
			tovotes: function tovotes() {
				Local.openPage('help/help6.2.html');
				this.maskshow = false;
				this.promotevote = false;
				this.voteshow = false;
			},
			closemask: function closemask() {
				this.maskshow = false;
				this.voteshow = false;
				this.promotevote = false;
			}
		}
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask\">\n\t<div class=\"tiparea\" v-show=\"voteshow\">\n\t\t<div class=\"votes\" v-if=\"voteyue==0 || tktype==-10000\">\n\t\t\t<div class=\"closemk\" @click=\"closemask\"></div>\n\t\t\t<h4>月票数量不足</h4>\n\t\t\t<p class=\"online\">订阅消费及打赏可获得更多月票</p>\n\t\t\t<a href=\"javascript:\" class=\"closbtn\" @click=\"tovotes\">如何获得更多月票</a>\n\t\t</div>\n\t\t<div class=\"votes\" v-if=\"tktype==0\">\n\t\t\t<h4>投票成功</h4>\n\t\t\t<p class=\"bookname\">{{bookname}}</p>\n\t\t\t<p class=\"online\">获得2张月票（投1票=2票）</p>\n\t\t\t<a href=\"javascript:\" class=\"closbtn\" @click=\"closemask\">知道啦</a>\n\t\t</div>\n\t\t<div class=\"votes\" v-if=\"!ismengzhu && (tktype==-10001 || tktype==-10002)\">\n\t\t\t<h4>投票失败</h4>\n\t\t\t<p>普通VIP 用户对单本作品每日最多投2票，每月最多投5票。您投票已超出限制</p>\n\t\t\t<a href=\"javascript:\" class=\"closbtn\" @click=\"closemask\">知道啦</a>\n\t\t</div>\n\t\t\n\t\t<div class=\"votes\" v-if=\"ismengzhu && (tktype==-10001 || tktype==-10002)\">\n\t\t\t<h4>投票失败</h4>\n\t\t\t<p>该书盟主用户每日最多5票，每月最多投5票，您投票已超出限制</p>\n\t\t\t<a href=\"javascript:\" class=\"closbtn\" @click=\"closemask\">知道啦</a>\n\t\t</div>\t\n\t\t\n\t</div>\n\t<div class=\"tiparea\" v-show=\"promotevote\">\n\t\t<div class=\"closemk\" @click=\"closemask\"></div>\n\t\t<div class=\"votes\">\n\t\t\t<h4>如何获得月票</h4>\n\t\t\t<p class=\"online\">订阅消费及打赏可获得月票</p>\n\t\t\t<a href=\"javascript:\" class=\"closbtn\" @click=\"tovotes\">查看详情</a>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"wrap\" v-show=\"login\">\n\t\t<div class=\"topbox\">\n\t\t\t<div class=\"sixyear\"></div>\n\t\t\t<div :class=\"{ pageB:ispageB }\">\n\t\t\t<div class=\"newsbox\" @click=\"gochatlist\">\n\t\t\t\t<p class=\"tts\"><span class=\"username\">{{ username }}</span><span class=\"hot\">，你收到了1条新消息<i v-show=\"!hongdian\"></i></span></p>\n\t\t\t\t<p>有3个读者正在和大神们聊天，去观看></p>\n\t\t\t</div>\n\t\t    </div>\n\t\t\t<div class=\"userinfo\">\n\t\t\t\t<div class=\"facebox\"><span class=\"face\"><img :src=userface /></span>月票：<span class=\"votenum\">{{ ticket }}</span> 张<a href=\"javascript:\" @click=\"gopromote\">如何获得月票? ></a></div>\n\t\t\t\t<p>活动期间投月票双倍计，投1票算2票！</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"bookshelf\" v-show=\"shelfshow\">\n\t\t\t<div class=\"title\">月票好书正在读</div>\n\t\t\t<ul class=\"booklist\">\n\t\t\t\t<li v-for=\"books in bookshelf\">\n\t\t\t\t\t<div class=\"bookface\" @click=\"godetail(books.id,'shelf')\">\n\t\t\t\t\t\t<img :src=\"books.cover\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"bookname\">{{ books.title }}</p>\n\t\t\t\t\t<p>{{ books.author }}</p>\n\t\t\t\t\t<a href=\"javascript:\" class=\"votebtn\" @click=\"votes(books)\"><span>投1票</span></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"listbook\">\n\t\t\t<div class=\"title\">原创文学风云榜</div>\n\t\t\t<ul class=\"booklist\">\n\t\t\t\t<li v-for=\"books in listbook\">\n\t\t\t\t\t<div class=\"bookface\" @click=\"godetail(books.id,'list')\">\n\t\t\t\t\t\t<img :src=\"books.cover\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"bookname\">{{ books.title }}</p>\n\t\t\t\t\t<p>{{ books.author }}</p>\n\t\t\t\t\t<a href=\"javascript:\" class=\"votebtn\" @click=\"votes(books)\"><span>投1票</span></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"morebook\" @click=\"gogoodbook\">更多好书 ></div>\n\t\t<div class=\"aboutvote\">\n\t\t\t<img :src=\"'images/deng.png'\" />\n\t\t\t<h4>活动规则</h4>\n\t\t\t<p><span>1.</span>活动时间：12月29日 00:00-2017年1月7日 23:59</p>\n\t\t\t<p><span>2.</span>活动期间投1张月票，作品翻倍计算！投2张，算4张！以此类推，打赏月票，同样翻倍！</p>\n\t\t\t<p><span>3.</span>投月票获得的积分、成长值不会翻倍</p>\n\t\t\t<a href=\"javascript:Local.openPage('help/help6.html')\">更深入的了解月票 ></a>\n\t\t\t\n\t\t</div>\n\t</div>\n\t<mask-login v-show=\"!login\"></mask-login>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<mask-chat v-show=\"chatshow\" :mask.sync=\"chatshow\" \n\t\t\t\t\t\t\t\t :username=\"username\" \n\t\t\t\t\t\t\t\t :num=\"num\"\n\t\t\t\t\t\t\t\t :timerok.sync=\"timerok\"\n\t\t\t\t\t\t\t\t v-ref:child>\n\t</mask-chat>\n\t<eject-mask v-show=\"maskshow\" :maskshow.sync=\"maskshow\"\n\t\t\t\t\t\t\t\t  :voteshow.sync=\"voteshow\"\n\t\t\t\t\t\t\t\t  :promotevote.sync=\"promotevote\"\n\t                              :voteyue=\"ticket\" \n\t                              :tktype=\"tktype\"\n\t                              :ismengzhu=\"ismengzhu\"\n\t                              :bookname=\"bookname\"\n\t                              :bookmothcnt=\"bookMonthCnt\">\n\t</eject-mask>\n</div>\n";

/***/ }
/******/ ]);