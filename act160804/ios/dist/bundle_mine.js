(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./rem.js');

var app = new Vue({
	el: 'body',
	data: {
		isLogin: false,
		over: false,

		ios: /ios/.test(document.title) ? true : false,

		testMode: false,
		maskShown: false,

		prizes: ['iphone6', '10成长值', '金士顿U盘', '5书券', '小米手环', '小米耳机', '100元沪江网校学习卡', '50元沪江网校学习卡', '200元沪江网校学习卡'],
		prizes_ios: ['iphone6', '未中奖', '乐扣乐扣保温杯', '5阅券', '小米移动电源', '小米路由器', '100元沪江网校学习卡', '50元沪江网校学习卡', '200元沪江网校学习卡'],
		// 我的奖品列表：
		myPrizes: []
	},
	computed: {},
	ready: function ready() {
		this.fake();
		// 获取数据并更新model：
		this.getData();
	},
	methods: {
		fake: function fake() {
			var self = this;
			// 供测试用的数据：
			if (self.testMode) {
				var myPrizes = [{
					prizename: '金士顿U盘'
				}, {
					prizename: '小米手环'
				}, {
					prizename: '100元沪江网校学习卡',
					cardkey: 'Y1008791C0122CD676'
				}, {
					prizename: '50元沪江网校学习卡',
					cardkey: 'Y1008791C0122CD676'
				}];
				// 为数组中的每个奖品添加对应的no，即number：
				myPrizes.forEach(function (a) {
					if (self.ios) {
						self.prizes_ios.forEach(function (b, i) {
							if (b === a.prizename) {
								a.no = i;
							}
						});
					} else {
						self.prizes.forEach(function (b, i) {
							if (b === a.prizename) {
								a.no = i;
							}
						});
					}
					self.myPrizes.push(a);
				});
			};
		},
		getData: function getData() {
			var self = this;
			Local.reqaObj(common.server() + 'pkg160804/cardswin', function (data) {
				console.log(data);
				if (data.prizes) {
					// 为数组中的每个奖品添加对应的no，即number：
					data.prizes.forEach(function (a) {
						if (self.ios) {
							self.prizes_ios.forEach(function (b, i) {
								if (b === a.prizename) {
									a.no = i;
								}
							});
						} else {
							self.prizes.forEach(function (b, i) {
								if (b === a.prizename) {
									a.no = i;
								}
							});
						}
						self.myPrizes.push(a);
					});
				};
			}, [], function () {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		},
		showMask: function showMask() {
			this.maskShown = true;
		},
		closeMask: function closeMask() {
			this.maskShown = false;
		}
	}
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
