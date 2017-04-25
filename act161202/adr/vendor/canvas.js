(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
	function Canvas(opts) {
		_classCallCheck(this, Canvas);

		this._options = opts;
		this._props = opts.props;
		this._data = opts.data;

		this.beforePlay = opts.beforePlay;
		this.render = opts.render;

		for (var key in opts.methods) {
			this[key] = opts.methods[key];
		}
	}

	_createClass(Canvas, [{
		key: '_init_cv',
		value: function _init_cv(kkk) {
			var cv = this;
			cv.$el = typeof kkk.el === 'string' ? document.querySelector(kkk.el) : kkk.el;
			cv.$ctx = cv.$el.getContext('2d');

			cv.$width = cv.$el.width || 1000;
			cv.$height = cv.$el.height || 1000;

			// init props
			var props = this._props ? this._props() : {};
			for (var key in props) {
				cv[key] = props[key];
			}
			for (var key in kkk.props) {
				cv[key] = kkk.props[key];
			}
			// init data
			var data = this._data();
			for (var key in data) {
				cv[key] = data[key];
			}

			this._listen();
			if (kkk.responsive === true) {
				this._response();
			}

			this._start();
		}
	}, {
		key: '_start',
		value: function _start() {
			this._playing = false;
			this._tick = 0;
			this._time = new Date().getTime();
			this._fps = 0;

			//this._initCache();
			this.beforePlay();

			this._playing = true;
			this._play();
		}
	}, {
		key: '_response',
		value: function _response() {
			var _this = this;

			window.addEventListener('resize', function () {
				_this.$width = _this.$el.width = window.innerWidth;
				_this.$height = _this.$el.height = window.innerHeight;
			});
		}
		//onResize(){}

	}, {
		key: '_initCache',
		value: function _initCache() {
			this._cache = document.createElement('canvas');
			this._cache.width = 1000;
			this._cache.height = 1000;
			this.$ctx = this._cache.getContext('2d');
		}
	}, {
		key: '_render',
		value: function _render() {
			this.$ctx.clearRect(0, 0, this.$width, this.$height);
			this.$ctx.drawImage(this._cache, 0, 0);
		}
	}, {
		key: '_listen',
		value: function _listen() {
			var _this2 = this;

			this.$el.addEventListener('click', function () {
				if (_this2._playing) {
					_this2.$pause();
				} else {
					_this2.$resume();
				}
			});
			// document.addEventListener('keydown',()=>{
			// 	console.log(111)
			// 	this._playing = false;
			// 	setTimeout(()=>{
			// 		this._start();
			// 	},1000)

			// })
		}
	}, {
		key: '$pause',
		value: function $pause() {
			this._playing = false;
		}
	}, {
		key: '$resume',
		value: function $resume() {
			this._playing = true;
			this._play();
		}
	}, {
		key: '$setSize',
		value: function $setSize(width, height) {
			this.$el.width = this.$width = width;
			this.$el.height = this.$height = height;
		}
	}, {
		key: '_play',
		value: function _play() {
			if (this._playing) {
				requestAnimationFrame(this._play.bind(this));
				this.render();
				this._renderFPS();
				//this._render();
			};
		}
	}]);

	return Canvas;
}();

// create a subclass of Canvas


Canvas.extend = function (opts) {
	function Sub(kkk) {
		this._init_cv(kkk);
	}
	Sub.prototype = new Canvas(opts);
	return Sub;
};

Canvas.random = function (min, max) {
	return min + (max - min) * Math.random();
};

Canvas.prototype._renderFPS = function () {
	this._tick++;
	if (this._tick === 60) {
		var newTime = new Date().getTime();
		this._fps = Math.round(1 / ((newTime - this._time) / 1000 / 60));

		this._time = newTime;
		this._tick = 0;
	}
	this.$ctx.fillStyle = 'red';
	this.$ctx.font = '14px Microsoft Yahei';
	this.$ctx.fillText(this._fps + ' FPS', 10, 20, 100);
};

Canvas.random = function (min, max) {
	return min + Math.random() * (max - min);
};

window.Canvas = Canvas;

// export {Canvas};

},{}]},{},[1]);
