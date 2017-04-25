(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
/**
 * Make a string camelcased.
 * @param  {string} string
 * @return {string}
 */
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
/**
 * Extend an object.
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
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

},{}],2:[function(require,module,exports){
'use strict';

require('./rem.js');

require('./zeal.js');

//window.addEventListener('DOMContentLoaded', function () {
//
//	$('.btn').on('touchstart', function () {
//		$('.btn-img').attr('src', 'img/btn_active.png');
//	});
//
//	$('.btn').on('touchend', function () {
//		$('.btn-img').attr('src', 'img/btn.png');
//		$('.mask').show();
//	});
//
//	$('.cancel').on('click', function () {
//		$('.mask').hide();
//	});
//
//	console.log(N);
//});

},{"./rem.js":3,"./zeal.js":4}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _2 = require('./_.js');

//var _ = require('./_.js');

// Module: core
var arr = [];
var slice = arr.slice;

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
		return arr.slice.call(this);
	}
};

Zeal.extend = Zeal.fn.extend = _2._.extend;

Zeal.extend({
	copy: _2._.copy,
	camelCase: _2._.camelCase
});

/**
 * Create a Zeal object.
 * This is a constructor.
 * @param {object|string} selector
 */
var init = Zeal.prototype.init = function (selector, context) {
	if (!context) {
		var context = document;
	}
	var elems;
	this.selector = selector;
	// $(window), $(document), $(this)
	if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object') {
		//if( Array.isArray(selector) ){
		if (selector.length) {
			for (var i = 0; i < selector.length; i++) {
				this[i] = selector[i];
			}
			this.length = selector.length;
		} else {
			this[0] = selector;
			this.length = 1;
		}
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
		;
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
	// if( elem.readyState==="complete" ){
	// 	callback();
	// }else{
	// 	elem.addEventListener( "readystatechange",function(){
	// 		if( elem.readyState==="complete" ){
	// 			alert('444')
	// 			callback();
	// 		};
	// 	});
	// };
	document.addEventListener('DOMContentLoaded', callback);
};

// Module: events
// $().on()
Zeal.fn.on = function (events, callback) {
	//alert('000')
	events = events.split(' ');
	//console.log(events);
	this.each(function (elem) {
		for (var i = 0; i < events.length; i++) {
			if ('onclick' in elem) {
				elem.addEventListener(events[i], function (e) {
					//alert('222')
					var event = {};
					event.originalEvent = e;
					event.preventDefault = e.preventDefault.bind(e);
					event.stopPropagation = e.stopPropagation.bind(e);
					callback.call(e.currentTarget, event);
				});
			} else {
				//alert('111')
				var evt = document.createEvent('evt');
			}
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
	},
	removeAttr: function removeAttr(key) {
		this.each(function (elem) {
			elem.removeAttribute(key);
		});
	}
});

// Module: DOM manipulation
Zeal.fn.extend({
	/**
  * Sets the innerHTML of matched elements.
  * @param {string} string
  */
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
		var fragment = document.createDocumentFragment();
		var container = document.createElement('div');
		this.each(function (elem) {
			if (typeof obj === 'string') {
				container.innerHTML = obj;
				arr.slice.call(container.children).forEach(function (item) {
					fragment.appendChild(item);
				});
			} else {
				obj.forEach(function (item) {
					fragment.appendChild(item);
				});
			}
			elem.insertBefore(fragment, elem.firstChild);
			fragment.textContent = '';
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
						if (!/-/.test(prop)) {
							var _prop = prop.replace(/[A-Z]/g, function (letter) {
								return '-' + letter.toLowerCase();
							});
							if (/(transform)|(transition)/.test(_prop)) {
								cssText += _prop + ':' + opts[prop] + ';-webkit-' + _prop + ':' + opts[prop] + ';';
								//console.log(cssText)
							} else {
								cssText += _prop + ':' + opts[prop] + ';';
							}
						} else {
							cssText += prop + ':' + opts[prop] + ';';
						}
					};
					elem.style.cssText += cssText;
				});
				return this;
			}
		}
	},
	width: function width(number) {
		if (number) {
			this.each(function (elem) {
				elem.style.width = number + 'px';
			});
		} else {
			return Number(Zeal.fn.css.call(this, 'width').replace(/px/, ''));
		}
	},
	height: function height(number) {
		if (number) {
			this.each(function (elem) {
				elem.style.height = number + 'px';
			});
		} else {
			return Number(Zeal.fn.css.call(this, 'height').replace(/px/, ''));
		}
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
/**
 * @param {object} opts
 * @param {number} time
 * @param {function} callback
 */
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

if (window.$ === undefined) {
	console.log('window.$ is window.Zeal.');
	window.$ = Zeal;
} else {
	window.Zeal = Zeal;
}

},{"./_.js":1}]},{},[2]);
function initSNS(){
	$('.btn').on('touchstart', function () {
	$('.btn-img').attr('src', 'img/btn_active.png');
});

$('.btn').on('touchend', function () {
	$('.btn-img').attr('src', 'img/btn.png');
	$('.mask').show();
});

$('.cancel').on('click', function () {
	$('.mask').hide();
});
	console.log(N);
}
