(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./rem.js');

var app = new Vue({
	el: 'body',
	data: {
		// isLogin: false,
		// over: false,

		ios: /ios/.test(document.title) ? true : false,
		testMode: false,

		page: '',

		phone: '',
		qq: '',
		name: '',
		address: '',

		phoneError: '',
		qqError: ''
	},
	computed: {},
	ready: function ready() {
		this.getData();
	},
	methods: {
		getData: function getData() {
			var self = this;
			Local.reqaObj(common.server() + 'getContact', function (data) {
				console.log(data);
				if (self.testMode) {
					data.isLogin = true;
					data.phone = '13011111111';
					data.qq = '111111111';
					data.name = '张飞';
					data.address = '';
				}
				if (data.isLogin) {
					if (data.phone) {
						self.phone = data.phone;
						self.qq = data.qq;
						self.name = data.name;
						self.address = data.address;
						self.page = 'done';
					} else {
						self.page = 'editing';
					}
				};
			}, [], function () {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
		},
		checkPhone: function checkPhone() {
			if (/^1[3|4|5|8]\d{9}$/.test(this.phone)) {
				this.phoneError = '';
				return true;
			} else {
				this.phoneError = '请输入正确的手机号码';
				return false;
			}
		},
		checkQQ: function checkQQ() {
			if (/^(\d{5,})$/.test(this.qq)) {
				this.qqError = '';
				return true;
			} else {
				this.qqError = '请输入正确的QQ号码';
				return false;
			}
		},
		edit: function edit() {
			this.page = 'editing';
		},
		submit: function submit() {
			var self = this;
			var one = this.checkPhone();
			var two = this.checkQQ();
			if (one && two) {
				// var info = {
				// 	phone: this.phone,
				// 	qq: this.qq,
				// 	name: this.name,
				// 	address: this.address
				// };
				// console.log( JSON.stringify(info) )
				Local.reqaObj(common.server() + ('setContact?act_f=' + common.param('act_f') + '&phone=' + self.phone + '&qq=' + self.qq + '&name=' + self.name + '&address=' + self.address), function (data) {
					console.log(data);
					if (data.isLogin) {
						if (data.code === 0) {
							Local.showToast("提交成功");
							self.page = 'done';
						} else {
							Local.showToast("系统繁忙，请稍后再试试");
						}
					} else {
						Local.login();
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
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
