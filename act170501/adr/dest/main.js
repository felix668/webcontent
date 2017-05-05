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
	// $('.thumbs-cotnainer').each(function(){
	// 		$(this).swiper({
	// 			speed:200,
	// 			slidesPerView:'auto',
	// 			calculateHeight: true
	// 		})
	// 	});

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
	__vue_template__ = __webpack_require__(29);
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
	    var id = "_v-11b17837/app.vue";
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

	var _data = __webpack_require__(4);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			maskLoading: __webpack_require__(5),
			maskOver: __webpack_require__(12),
			maskDownload: __webpack_require__(16),
			maskBrowes: __webpack_require__(21),
			maskEject: __webpack_require__(26)
		},
		data: function data() {
			return {
				loading: true,
				over: false,
				islogin: false,
				showbrowers: false,
				downshow: false,
				maskshow: false,
				masktype: '',
				selectbid: '',
				shelfshow: true,
				selected: false,
				bookshelf: [],
				keyreceive: false,
				booklist: [],
				moreclick: true
			};
		},
		methods: {
			initpage: function initpage() {
				var self = this;
				Local.init();
				Local.reqaObj(server() + "pkg170501/init1", function (data) {
					console.log(data);
					self.loading = false;
					self.islogin = data.isLogin;
					self.keyreceive = data.free.pickedAll;
					self.booklist = data.free.books;
					if (data.shelf != '') {
						self.bookshelf = data.shelf.books;
						self.selected = data.shelf.picked;
					} else {
						self.bookshelf = [];
						self.selected = false;
					}
					var len = self.bookshelf.length;
					console.log(len);
					if (len == 0) {
						self.shelfshow = false;
					} else {
						self.shelfshow = true;
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			},
			islast: function islast() {
				var self = this;
				var len = self.booklist.length;
				var num = 0;
				for (var i = 0; i < len; i++) {
					if (self.booklist[i].picked) {
						num++;
					}
				}
				console.log(num);
				return num;
			},

			gotodetail: function gotodetail(bid) {
				ABook.gotoDetail(bid);
			},
			selectit: function selectit(bid) {
				var self = this;
				if (self.islogin) {
					if (!self.selected) {
						self.maskshow = true;
						self.masktype = 'shelfmask';
						self.selectbid = bid;
					} else if (self.selected == bid) {
						ABook.gotoRead(bid);
					}
				} else {
					Local.login();
				}
			},
			receive: function receive(ind, bid) {
				var self = this;
				var len = self.booklist.length;
				if (self.islogin) {
					if (self.booklist[ind].picked) {
						ABook.gotoRead(bid);
					} else {
						Local.reqaObj(server() + "pkg170501/pick1?type=2&bid=" + bid, function (data) {
							console.log(data);
							self.booklist[ind].picked = true;
							if (self.islast() == len) {
								self.keyreceive = true;
							}
							if (data.code == 0) {
								Local.showToast("领取成功，限免10天");
							} else {
								Local.showToast(data.msg);
							}
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					}
				} else {
					Local.login();
				}
			},
			onekey: function onekey() {
				var self = this;
				if (self.islogin) {
					if (self.keyreceive) {
						Local.openBookShelf();
					} else {
						Local.reqaObj(server() + "pkg170501/pickall1", function (data) {
							console.log(data);
							self.maskshow = true;
							self.masktype = 'booklistmask';
							self.keyreceive = true;
							var len = self.booklist.length;
							for (var i = 0; i < len; i++) {
								self.booklist[i].picked = true;
							}
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					}
				} else {
					Local.login();
				}
			}
		},
		created: function created() {
			this.initpage();
		}
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {
		selected: false, //书架书选取，未选false，已选返回bid
		bookshelf: [{
			bid: '1',
			bookname: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者'
		}, {
			bid: '2',
			bookname: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者'
		}, {
			bid: '3',
			bookname: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者'
		}],
		keyreceive: false, //一键领取
		booklist: [{
			bid: '01',
			bookname: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者',
			iselect: true
		}, {
			bid: '02',
			bookname: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者',
			iselect: false
		}, {
			bid: '03',
			bookname: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者',
			iselect: true
		}, {
			bid: '04',
			bookname: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者',
			iselect: false
		}, {
			bid: '05',
			bookname: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者',
			iselect: false
		}, {
			bid: '06',
			bookname: '书名',
			cover: '../adr/public/images/book1.jpg',
			author: '作者',
			iselect: false
		}]
	};
	exports.default = data;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(6);
	__vue_script__ = __webpack_require__(10);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskLoading.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(11);
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
	    var id = "_v-a299edb4/MaskLoading.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {};
		},
		mounted: function mounted() {}
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskLoading\" _v-a299edb4=\"\">\n\t<p class=\"_text\" _v-a299edb4=\"\"><img :src=\"'../adr/public/images/loading.png'\" _v-a299edb4=\"\">正在加载...</p>\n</div>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(13);
	__vue_template__ = __webpack_require__(15);
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
	    var id = "_v-83a5f94c/MaskOver.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"over\" _v-83a5f94c=\"\">\n\t<div class=\"over-c\" _v-83a5f94c=\"\">\n        <img :src=\"'../adr/public/images/over.png'\" alt=\"本期活动已结束\" _v-83a5f94c=\"\">\n        <p class=\"over-p1\" _v-83a5f94c=\"\">本期活动已结束</p>\n        <p class=\"over-p2\" _v-83a5f94c=\"\">敬请期待下一波活动</p>\n    </div>\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(17);
	__vue_script__ = __webpack_require__(19);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskDownload.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-1841ee0e/MaskDownload.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {};
		},
		props: ['show'],
		mounted: function mounted() {},
		methods: {
			closemask: function closemask() {
				this.show = false;
				console.log(self.show);
			},
			downapp: function downapp() {
				N.downLoad(null, '10026762');
				this.show = false;
			}
		}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MaskDownload\" _v-1841ee0e=\"\">\n\t<div class=\"mask-panel\" _v-1841ee0e=\"\">\n\t\t<div class=\"top\" _v-1841ee0e=\"\">下载QQ阅读，畅读海量小说</div>\n\t\t<p class=\"middle\" _v-1841ee0e=\"\">如果还未安装QQ阅读，你可以：</p>\n\t\t<ul class=\"bottom\" _v-1841ee0e=\"\">\n\t\t\t<li class=\"confirm\" @click=\"downapp\" _v-1841ee0e=\"\">下载QQ阅读</li>\n\t\t\t<li class=\"cancel\" @click=\"closemask\" _v-1841ee0e=\"\">取消</li>\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(22);
	__vue_script__ = __webpack_require__(24);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/MaskBrowers.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(25);
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
	    var id = "_v-800f51d0/MaskBrowers.vue";
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

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  data: function data() {
	    return {};
	  },
	  methods: {
	    closemask: function closemask() {
	      this.$parent.showbrowers = false;
	    }
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"maskbrow\" @click=\"closemask()\" _v-800f51d0=\"\">\n\t<img :src=\"'../adr/public/images/browers.png'\" _v-800f51d0=\"\">\n</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(27);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ejectMask.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(28);
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
	    var id = "_v-434f9e1a/ejectMask.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {};
		},
		props: ['type', 'mask', 'bookid'],
		mounted: function mounted() {},
		methods: {
			selectok: function selectok(bid) {
				var self = this;
				Local.reqaObj(server() + "pkg170501/pick1?type=1&bid=" + bid, function (data) {
					console.log(data);
					self.$parent.selected = bid;
					if (data.code == 0) {
						Local.showToast("已成功领取限免书");
					} else {
						Local.showToast(data.msg);
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				self.closemask();
			},
			gotoshelf: function gotoshelf() {
				var self = this;
				Local.openBookShelf();
				self.closemask();
			},
			closemask: function closemask() {
				this.$parent.maskshow = false;
				this.$parent.masktype = '';
			}
		}
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask\">\n\t<div class=\"tiparea\" v-show=\"type=='shelfmask'\">\n\t\t<div class=\"votes\">\n\t\t\t<p class=\"online\">决定选择这本书，<br>享受10天限免特权？</p>\n\t\t\t<div class=\"btnbox\">\n\t\t\t\t<a class=\"btnno\" @click=\"closemask\">取消</a>\n\t\t\t\t<a class=\"btnok\" @click=\"selectok(bookid)\">确定</a>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"tiparea\" v-show=\"type=='booklistmask'\">\n\t\t<div class=\"gifticon\"></div>\n\t\t<div class=\"closemk\" @click=\"closemask\"></div>\n\t\t<div class=\"votes\">\n\t\t\t<h4>领取成功</h4>\n\t\t\t<p>领取的全部限免书已为你加入书架<span>限免10天<span></p>\n\t\t\t<a class=\"closbtn\" @click=\"gotoshelf\">去书架看书</a>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<div class=\"warp\">\n\t\t<div class=\"ban\"></div>\n\t\t<div class=\"connect\">\n\t\t<div class=\"contbox\">\n\t\t\t<div class=\"shelfbook\" v-show=\"shelfshow\">\n\t\t\t\t<div  class='tite'>任选一本，畅读10日<p>你正在关注这些书</p></div>\n\t\t\t\t<ul class=\"booklist\">\n\t\t\t\t\t<li v-for=\"books in bookshelf\">\n\t\t\t\t\t\t<div class=\"bookface\">\n\t\t\t\t\t\t\t<img :src=\"books.cover\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"bookname\">{{ books.title }}</p>\n\t\t\t\t\t\t<p>{{ books.author }}</p>\n\t\t\t\t\t\t<a class=\"votebtn\" v-bind:class=\"{ disabeled:selected,isselected:selected==books.bid }\" @click=\"selectit(books.bid)\"><span>{{ selected==books.bid?'去看书':'选TA'}}</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div  class='tite'>抢鲜好书，对你免费<p>根据你的兴趣推荐</p></div>\n\t\t\t<ul class=\"booklist\">\n\t\t\t\t<li v-for=\"(books,index) in booklist\">\n\t\t\t\t\t<div class=\"bookface\" @click=\"gotodetail(books.bid)\">\n\t\t\t\t\t\t<img :src=\"books.cover\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"bookname\">{{ books.title }}</p>\n\t\t\t\t\t<p>{{ books.author }}</p>\n\t\t\t\t\t<a class=\"votebtn\" v-bind:class=\"{ isselected:books.picked }\" @click=\"receive(index,books.bid)\"><span>{{books.picked?'去看书':'领限免'}}</span></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class=\"keyall\" @click=\"onekey\">{{ keyreceive?'去书架看书':'一键全部领限免'}}<ul class=\"arrows\"><img :src=\"'../adr/public/images/arrow.png'\"><img :src=\"'../adr/public/images/arrow.png'\"><img :src=\"'../adr/public/images/arrow.png'\"></ul></div>\n\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"rules\">\n\t\t\t<h4>－ 活动规则－</h4>\n\t\t\t<p><span>1.</span>本活动为幸运福利活动，仅部分用户可参与。</p>\n\t\t\t<p><span>2.</span>页面内限免书籍需手动领取，领取后可免费阅读10日。</p>\n\t\t\t<p><span>3.</span>限免特权到期后，书籍不再提供免费阅读。</p>\n\t\t\t<p><span>4.</span>活动最终解释权归QQ阅读所有。</p>\n\t\t</div>\n\t</div>\n\t<mask-loading v-show=\"loading\"></mask-loading>\n\t<mask-over v-show=\"over\"></mask-over>\n\t<mask-browes v-show=\"showbrowers\"></mask-browes>\n\t<mask-eject v-show=\"maskshow\" :mask=\"maskshow\" :type=\"masktype\" :bookid='selectbid'></mask-eject>\n\t<mask-download v-show=\"downshow\" :show.sync=\"downshow\"></mask-download>\n</div>\n";

/***/ }
/******/ ]);