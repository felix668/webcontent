(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import {debug} from './debug.js';


require('./rem.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App(config) {
		_classCallCheck(this, App);

		this.elem = config.elem;
		this.obj = $(this.elem);
		this.signin = this.obj.find('.signin');
		this.mine = this.obj.find('.mine');
		this.myAvatar = this.obj.find('.myAvatar');
		this.myName = this.obj.find('.myName');
		this.coinNumber = this.obj.find('.coinNumber');
		this.myRanking = this.obj.find('.myRanking');
		this.toBookshelf = this.obj.find('.toBookshelf');
		this.list = this.obj.find('.list');

		this.loading = this.obj.find('.loading');

		this.testMode = false;
		this.ios = document.title === 'ios' ? true : false;

		this.n = 0;
		this.data = null;

		this.init();
	}

	_createClass(App, [{
		key: 'init',
		value: function init() {
			Local.forceLog(common.param('act_f'), 'more');
			if (!this.ios) {
				this.getAndroidOSVersion();
			};
			this.getData();
			this.listen();
		}
	}, {
		key: 'getAndroidOSVersion',
		value: function getAndroidOSVersion() {
			var v = Number(navigator.userAgent.match(/Android \d/)[0].replace(/Android /, ''));
			if (v < 5) {
				this.toBookshelf.hide();
			};
		}
	}, {
		key: 'getData',
		value: function getData() {
			var self = this;
			Local.reqaObj(common.server() + 'pkg160801/morerank', function (data) {
				if (self.testMode) {
					data.isLogin = true;
					data.myrank = 30;
					data.rankList = data.rankList.slice(0, 45);
				}
				//如果rankList这一数组的长度小于200：
				if (data.rankList.length < 200) {
					for (var i = data.rankList.length; i < 200; i++) {
						data.rankList[i] = {
							avor: 'img/default.jpg',
							name: '暂无',
							score: '暂无',
							rank: i
						};
					}
				};
				self.data = data;
				//如果用户已登录：
				if (data.isLogin) {
					self.signin.hide();
					if (!data.mynick && !data.myavor) {
						self.myAvatar.attr('src', 'img/default.png');
						self.myName.html('游客');
					} else {
						self.myAvatar.attr('src', data.myavor);
						self.myName.html(data.mynick);
					}
					self.coinNumber.html(data.myscore);
					self.myRanking.html(data.myrank === -1 || data.myscore === 0 ? '--' : data.myrank > 200 ? '200+' : data.myrank);
					self.mine.show();
				}
				self.arr = data.rankList;
				self.appendItems(data.rankList);
			}, [], function () {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		}
	}, {
		key: 'appendItems',
		value: function appendItems(items) {
			var str, str2;
			for (var i = this.n; i < this.n + 15; i++) {
				if (i < 200) {
					if (i < 10) {
						str = '<img src="img/badge' + (i < 3 ? i : '') + '.png"/>';
					} else {
						str = '';
					}
					if (i < 15) {
						str2 = '<div class="round">\n\t\t\t\t\t\t\t\t<img src="' + items[i].avor + '"/>\n\t\t\t\t\t\t</div>';
					} else {
						str2 = '';
					}
					this.list.append('<li class="listItem">\n\t\t\t\t\t\t<div class="badge">\n\t\t\t\t\t\t\t' + str + '\n\t\t\t\t\t\t\t<p>' + (i + 1) + '</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="avatar">\n\t\t\t\t\t\t\t' + (i === 0 ? '<img class="crown" src="img/crown.png"/>' : '') + '\n\t\t\t\t\t\t\t' + str2 + '\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class="name" style="' + (items[i].rank === this.data.myrank ? 'color:#f65555' : '') + '">\n\t\t\t\t\t\t\t' + items[i].name + '\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class="number" style="' + (items[i].rank === this.data.myrank ? 'color:#f65555' : '') + '">\n\t\t\t\t\t\t\t' + items[i].score + '\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</li>');
				};
			}
			this.n += 15;
		}
	}, {
		key: 'listen',
		value: function listen() {
			var self = this;
			self.signin.on('touchstart', function (e) {
				e.preventDefault();
				self.signin.css({
					background: '#5FB07E'
				});
			});
			self.signin.on('touchend', function (e) {
				e.preventDefault();
				self.signin.css({
					background: '#6CC990'
				});
				if (self.ios) {
					Local.login(false, 'd');
				} else {
					Local.login();
				}
			});
			self.toBookshelf.on('click', function () {
				Local.openBookShelf();
			});
			$(window).on('scroll', function () {
				//如果滚动条到达了页面最底部：
				//alert( ''+$(window).scrollTop()+','+$(document).height()+','+window.innerHeight )
				if ($(window).scrollTop() === $(document).height() - window.innerHeight) {
					if (self.n <= self.data.rankList.length) {
						self.appendItems(self.arr);
					} else {
						self.loading.hide();
						self.loading.html('没有更多数据了');
					}
				}
			});
		}
	}]);

	return App;
}();

new App({
	elem: document.getElementsByTagName('body')[0]
});

},{"./rem.js":2}],2:[function(require,module,exports){
'use strict';

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
		console.log('rem: Size of the viewport is ' + w + '*' + h + '.');
	}
	setRem();
	window.addEventListener('resize', setRem);
});

},{}]},{},[1]);
