(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./rem.js');

function App(config) {
	this.elem = config.elem;
	this.obj = $(this.elem);

	this.result = this.obj.find('.result');
	this.list_1 = this.obj.find('.list-1');
	this.list_2 = this.obj.find('.list-2');
	this.list_3 = this.obj.find('.list-3');
	this.list_4 = this.obj.find('.list-4');

	this.testMode = true;
	//根据document.title判断该页面是安卓版还是ios版。
	this.ios = document.title === 'ios' ? true : false;

	this.data = null;

	this.init();
}

App.prototype = {
	init: function init() {
		//通知服务器用户进入了index.html页面。
		//Local.forceLog( common.param('act_f'),'index' );

		//从服务器获取数据。
		this.getData();
	},
	renderList: function renderList(items) {
		function item(i) {
			var __item = '\n\t\t\t\t<ul class="result-item">\n\t\t\t\t\t<li class="avatar" style="background: url(img/round.png); background-size: 100%;">\n\t\t\t\t\t\t<div class="avatar-img">\n\t\t\t\t\t\t\t<img src="' + items[i].avor + '"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="name">\n\t\t\t\t\t\t' + items[i].name + '\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="coin">\n\t\t\t\t\t\t\u6D88\u8017\u4E66\u5E01\uFF1A<span>' + items[i].score + '</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t';
			return __item;
		}
		this.list_1.append(item(0));
		this.list_2.append(item(1) + item(2));
		this.list_3.append(item(3) + item(4) + item(5));
		this.list_4.append(item(6) + item(7) + item(8) + item(9));
	},
	getData: function getData() {
		var self = this;
		self.result.show();
		// Local.reqaObj( common.server()+'pkg160801/init', function(data) {
		// 	console.log(data);

		// 	self.data = data;

		// 	// 渲染中奖用户的列表：
		// 	self.renderList( data.rankList );
		// 	self.result.css({
		// 		transition: '0s',
		// 		transform: 'translate3d(0,0,0)'
		// 	})
		// 	self.result.show();

		// }, [], function() {
		// 	Local.showToast("网络异常，请稍候重试");
		// }, 1);
	}
};

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
