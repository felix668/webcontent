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

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _2 = __webpack_require__(1);

	//var _ = require('./_.js');

	// Module: core
	var arr = [];

	// This is a factory function to create a Zeal object.
	// @param {string} selector
	var Zeal = function Zeal(selector, context) {
		return new Zeal.prototype.init(selector, context);
	};

	Zeal.fn = Zeal.prototype = {
		each: function each(callback) {
			for (var i = 0; i < this.length; i++) {
				callback(this[i], i);
			}
		},
		eq: function eq(i) {
			return Zeal(this[i]);
		},
		index: function index(selector) {
			var theOne = this[0];
			var match = Zeal(selector);
			var _index = -1;
			match.each(function (elem, i) {
				if (theOne === elem) {
					_index = i;
				}
			});
			return _index;
		},
		siblings: function siblings() {},
		toArray: function toArray() {
			return [].slice.call(this);
		}
	};

	Zeal.extend = Zeal.fn.extend = _2._.extend;

	Zeal.extend({
		copy: _2._.copy,
		camelCase: _2._.camelCase
	});

	// This is a constructor.
	// @param {string} selector
	var init = Zeal.prototype.init = function (selector, context) {
		if (!context) {
			var context = document;
		}
		var elems;
		this.selector = selector;
		// $(window), $(document), $(this)
		if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object') {
			this[0] = selector;
			this.length = 1;
		};

		if (typeof selector === 'string') {
			if (selector === '') {
				this.length = 1;
			} else if (/>/.test(selector)) {
				elems = context.querySelectorAll(selector);
			} else if (/^#/.test(selector)) {
				// $('#id')
				var string = selector.replace(/#/, '');
				elems = context.getElementById(string);
			} else if (/^\./.test(selector)) {
				// $('.className')
				var string = selector.replace(/\./, '');
				elems = context.getElementsByClassName(string);
			} else {
				// $('tagName')
				elems = context.getElementsByTagName(selector);
			}
			if (elems.length) {
				for (var i = 0; i < elems.length; i++) {
					this[i] = elems[i];
				}
			} else {
				this[0] = elems;
			}
			this.length = elems.length;
		};
	};
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	Zeal.fn = Zeal.prototype;
	init.prototype = Zeal.prototype;
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	Zeal.fn.find = function (selector) {
		var context = this[0];
		return Zeal(selector, context);
	};

	// $(document).ready()
	Zeal.fn.ready = function (callback) {
		// this[0] is actually document.
		var elem = this[0];
		if (elem.readyState === "complete") {
			callback();
		} else {
			elem.addEventListener("readystatechange", function () {
				if (elem.readyState === "complete") {
					callback();
				};
			});
		};
	};

	// Module: events
	// $().on()
	Zeal.fn.on = function (events, callback) {
		events = events.split(' ');
		console.log(events);
		this.each(function (elem) {
			for (var i = 0; i < events.length; i++) {
				elem.addEventListener(events[i], function (e) {
					var event = {};
					event.originalEvent = e;
					event.preventDefault = e.preventDefault.bind(e);
					event.stopPropagation = e.stopPropagation.bind(e);
					callback.call(e.currentTarget, event);
				});
			};
		});
	};

	Zeal.fn.extend({
		// @param {string} className
		addClass: function addClass(className) {
			this.each(function (elem) {
				elem.classList.add(className);
			});
			return this;
		},
		removeClass: function removeClass(className) {
			this.each(function (elem) {
				elem.classList.remove(className);
			});
			return this;
		},
		attr: function attr(name, value) {
			if (arguments.length === 1) {
				return this[0].getAttribute(name);
			} else {
				this.each(function (elem) {
					elem.setAttribute(name, value);
				});
				return this;
			}
		}
	});

	// Module: DOM manipulation
	Zeal.fn.extend({
		// @param {string} string
		html: function html(string) {
			this.each(function (elem) {
				elem.innerHTML = string;
			});
			return this;
		},
		append: function append(obj) {
			this.each(function (elem) {
				if (typeof obj === 'string') {
					elem.innerHTML += obj;
				} else {
					for (var i = 0; i < obj.length; i++) {
						elem.appendChild(obj[i]);
					}
				}
			});
		},
		prepend: function prepend(obj) {
			this.each(function (elem) {
				for (var i = 0; i < obj.length; i++) {
					elem.insertBefore(obj[i], elem.childNodes[0]);
				}
			});
		},
		remove: function remove() {
			this.each(function (elem) {
				elem.parentNode.removeChild(elem);
			});
		}

	});

	// Module: css
	Zeal.fn.extend({
		// @param {object} opts
		css: function css(opts) {
			if (arguments.length === 1) {
				if (typeof arguments[0] === 'string') {
					// css( name )
					var elem = this[0] || this;
					var name = arguments[0];
					return document.defaultView.getComputedStyle(elem)[name];
				} else {
					// typeof arguments[0]==='object'
					this.each(function (elem) {
						var cssText = '';
						for (var prop in opts) {
							cssText += prop + ':' + opts[prop] + ';';
							//this[i].style[prop] = opts[prop];
						};
						elem.style.cssText += cssText;
					});
					return this;
				}
			}
		},
		width: function width() {
			return Number(Zeal.fn.css.call(this, 'width').replace(/px/, ''));
		},
		height: function height() {
			return Number(Zeal.fn.css.call(this, 'height').replace(/px/, ''));
		},
		hide: function hide() {
			this.each(function (elem) {
				elem.style.display = 'none';
			});
			return this;
		},
		show: function show() {
			this.each(function (elem) {
				elem.style.display = 'block';
			});
			return this;
		}
	});

	// Module: animate
	// @param {object} opts
	// @param {number} time
	// @param {function} callback
	Zeal.fn.animate = function (opts, duration, callback) {
		this.each(function (elem) {
			var p = {};
			var target = {};
			var dp = {};
			var interval;
			var iteration = Math.ceil(duration / 10);
			var i = 0;
			//console.log(iteration);
			for (var prop in opts) {
				p[prop] = Number(document.defaultView.getComputedStyle(elem)[prop].replace(/px/, ''));
				if (/\+|\-/.test(opts[prop])) {
					target[prop] = p[prop] + Number(opts[prop].replace(/(px)|\+|\=/g, ''));
				} else {
					target[prop] = opts[prop];
				}
				dp[prop] = (target[prop] - p[prop]) / (duration / 10);
			}
			interval = setInterval(function () {
				if (i < iteration) {
					for (var prop in opts) {
						p[prop] += dp[prop];
						elem.style[prop] = p[prop] + (prop === 'opacity' ? 0 : "px");
					};
					i++;
				} else {
					clearInterval(interval);
					for (var prop in opts) {
						elem.style[prop] = target[prop];
					};
					if (callback) {
						callback();
					};
				};
			}, 10);
		});
	};
	//
	Zeal.fn.extend({
		slideUp: function slideUp(duration, callback) {
			this.css({ overflow: 'hidden' });
			this.animate({ height: 0 }, duration, callback);
		},
		fadeOut: function fadeOut(duration, callback) {
			this.animate({ opacity: 0 }, duration, callback);
		},
		fadeIn: function fadeIn(duration) {
			this.animate({ opacity: 1 }, duration);
		},
		fadeToggle: function fadeToggle(duration) {
			this.each(function (elem, i) {
				var currentOpacity = Number(document.defaultView.getComputedStyle(elem).opacity);
				if (currentOpacity === 1) {
					Zeal(elem).fadeOut(duration);
				} else if (currentOpacity === 0) {
					Zeal(elem).fadeIn(duration);
				};
			});
		}
	});

	// Module: ajax
	Zeal.ajax = function (obj) {
		var xhr = new XMLHttpRequest();
		xhr.open(obj.type, obj.url);
		xhr.send(obj.data || null);
		xhr.onreadystatechange = function () {
			var data = xhr.responseText;
			if (xhr.status === 200) {
				obj.success(data);
			};
		};
	};

	window.$ = Zeal;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _ = {
		bubbleSort: bubbleSort,
		camelCase: camelCase,
		copy: copy,
		//each
		extend: extend,
		forEach: forEach
		//map
	};

	// Functions to process strings.
	function camelCase(string) {
		string = string.replace(/(-[a-z]?)|(_[a-z]?)/ig, function (match) {
			return match.replace(/-|_/, '').toUpperCase();
		});
		return string;
	}

	// Functions to process arrays.
	function forEach(arr, callback) {
		for (var i = 0; i < arr.length; i++) {
			callback(arr[i], i);
		}
	}
	function bubbleSort(arr) {
		var i = 0;
		while (i < arr.length - 1) {
			for (var j = i + 1; j < arr.length - 1; j++) {
				if (arr[i] > arr[j]) {
					var x = arr[i];
					arr[i] = arr[j];
					arr[j] = x;
				};
			};
			i++;
		}
		return arr;
	}

	// Functions to process objects.
	function extend(obj) {
		var target = this;
		for (var p in obj) {
			target[p] = obj[p];
		}
		return target;
	}

	function copy(src, deep) {
		var __copy;
		if ((typeof src === "undefined" ? "undefined" : _typeof(src)) === "object") {
			if (src.length) {
				__copy = [];
			} else {
				__copy = {};
			};
			for (var x in src) {
				if (deep && _typeof(src[x]) === "object") {
					__copy[x] = Zeal.copy(src[x], true);
				} else {
					__copy[x] = src[x];
				};
			};
			return __copy;
		};
	};

	window._ = _;

	exports._ = _;

/***/ }
/******/ ]);