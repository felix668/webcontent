(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Canvas.extend();
*/

function noop() {}

var Canvas = function () {
  function Canvas(options) {
    _classCallCheck(this, Canvas);

    this._options = options;
    this._props = options.props;
    this._data = options.data;

    this.beforePlay = options.beforePlay;
    this.render = options.render;

    for (var key in options.methods) {
      this[key] = options.methods[key];
    }
  }

  _createClass(Canvas, [{
    key: '_init_cv',
    value: function _init_cv(cvOpts) {
      var cv = this;
      cv.$el = typeof cvOpts.el === 'string' ? document.querySelector(cvOpts.el) : cvOpts.el;
      cv.$ctx = cv.$el.getContext('2d');

      function proxy(key, thunk, setter) {
        Object.defineProperty(cv, key, {
          enumerable: true,
          configurable: true,
          // writable: elKey?true:false,
          get: function get() {
            return thunk();
          },
          set: setter
        });
      }
      proxy('$w', function () {
        return cv.$el.width;
      }, function (newVal) {
        cv.$el.width = newVal;
      });
      proxy('$h', function () {
        return cv.$el.height;
      }, function (newVal) {
        cv.$el.height = newVal;
      });
      proxy('$cx', function () {
        return cv.$el.width / 2;
      }, noop);

      // init props
      var props = this._props ? this._props() : {};
      for (var key in props) {
        cv[key] = props[key];
      }
      for (var key in cvOpts.props) {
        cv[key] = cvOpts.props[key];
      }

      // init config
      cv._config = {
        renderFPS: true,
        useInterval: false,
        responsive: true,
        pausable: true
      };
      for (var _key in cvOpts.config) {
        cv._config[_key] = cvOpts.config[_key];
      }
      if (typeof cv._config.useInterval === 'number') {
        window.requestAnimationFrame = function (callback) {
          window.setTimeout(callback, 1000 / cv._config.useInterval);
        };
      }
      if (cv._config.responsive === true) {
        cv.$fit();
      }
      if (cv._config.pausable === true) {
        cv.$el.addEventListener('click', function () {
          if (cv._playing) {
            cv.$pause();
          } else {
            cv.$resume();
          }
        });
      };

      // init data
      var data = this._data();
      for (var key in data) {
        cv[key] = data[key];
      }

      this._listen();

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

      // document.addEventListener('keydown',()=>{
      //  console.log(111)
      //  this._playing = false;
      //  setTimeout(()=>{
      //    this._start();
      //  },1000)

      // })
    }
  }, {
    key: '$fit',
    value: function $fit() {
      var _this = this;

      this.$el.width = window.innerWidth;
      this.$el.height = window.innerHeight;
      window.addEventListener('resize', function () {
        _this.$el.width = window.innerWidth;
        _this.$el.height = window.innerHeight;
      });
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
      this.$w = width;
      this.$h = height;
    }
  }, {
    key: '_play',
    value: function _play() {
      if (this._playing) {
        requestAnimationFrame(this._play.bind(this));
        this.render();
        if (this._config.renderFPS) {
          this._renderFPS();
        };
        //this._render();
      };
    }
  }]);

  return Canvas;
}();

Canvas.version = '0.0.1';
// create a subclass of Canvas and return it
Canvas.extend = function (opts) {
  function Subclass(cvOpts) {
    this._init_cv(cvOpts);
  }
  Subclass.prototype = new Canvas(opts);
  return Subclass;
};

Canvas.random = function (min, max) {
  return min + (max - min) * Math.random();
};
Canvas.randomInt = function (min, max) {
  return ~ ~(min + (max - min + 1) * Math.random());
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

window.Canvas = Canvas;

exports.default = Canvas;

},{}]},{},[1]);
