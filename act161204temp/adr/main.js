webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

	__webpack_require__(5);

	var _vue = __webpack_require__(17);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//var data=require("./data");
	var page = new _vue2.default({
		el: 'body',
		data: {
			showmask: '',
			over: false,
			initdata: {},
			loaded: false,
			islogin: false,
			pagetype: 4
		},
		created: function created() {
			this.initp();
		},
		methods: {
			initp: function initp() {
				var self = this;
				Local.init();
				Local.reqaObj(server() + "pkg161204/init?gs="+param("gs"), function (data) {
				    console.log(data);
					self.initdata = data;
					self.islogin = data.isLogin;
					self.loaded = true;
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
				forceLog("LYHindex","","");
			}
		},
		components: {
			top: __webpack_require__(18),
			box1: __webpack_require__(21),
			box2: __webpack_require__(25),
			box3: __webpack_require__(30),
			box4: __webpack_require__(37),
			box5: __webpack_require__(41),
			overBox: __webpack_require__(45),
			maskSelect: __webpack_require__(51),
			maskShelf: __webpack_require__(57)
		}
	});

/***/ }
]);