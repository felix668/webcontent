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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var $testMode = false;
var $ios = false;

exports.$testMode = $testMode;
exports.$ios = $ios;

},{}],3:[function(require,module,exports){
'use strict';

var _config = require('./config.js');

require('./zeal.js');

require('./rem.js');

require('./z.swiper.js');

//alert('swiper is ok')

//alert('zeal is ok')
var $ = window.jQuery;
//alert('$?')

//alert('config is ok')
if (!_config.$ios) {
	Local.init();
}
//通知服务器用户进入了该页面。
forceLog(param('act_f'));

//alert('huh?')
// var state = {

// }

// function render(){

// }

$(document).ready(function () {


	var $main = $('.main');
	var $maskOver = $('.maskOver');
	var $maskSuccessful = $('.maskSuccessful');
	var $maskOut = $('.maskOut');

	var $state1 = $('.state1');
	var $couponUnreceived = $('.couponUnreceived');
	//var $couponOver = $('.couponOver');
	var $couponOut = $('.couponOut');
	var $couponReceived = $('.couponReceived');
	var $code = $('.code');

	var $inputElem = $('.inputElem');
	var $error = $('.error');

	var $state2 = $('.state2');
	var $before = $('.before');
	var $after = $('.after');
	var $over = $('.over');

	Local.reqaObj(server() + "pkg160604/init", function (data) {
		if (_config.$testMode) {
			data.isLogin = true;
			//data.isOver = false;
			data.hasGetCoupon = false;
			data.hasFree = false;
			data.hasPickedByQimei = true;
			data.hasPickedByQq = false;
			data.couponNum = 2;
			data.code = -2;
			data.coupon = 'DSAGWQE;JGELW';
		};
		console.log(data);
		//alert(JSON.stringify(data))
		if (data.isLogin === false) {
			//用户未登录
			if (data.code === -4) {
				//活动已结束
				$maskOver.show();
				$couponOut.show();
				$over.show();
			} else {
				//活动未结束
				$couponUnreceived.show();
				$before.show();
			};
		} else if (data.isLogin === true) {
			//如果用户已登录

			if (data.hasGetCoupon === true) {
				//如果用户已经领过兑换券
				$couponReceived.show();
			} else if (data.code === -4) {
				//如果活动已结束
				$couponOut.show();
			} else if (data.couponNum <= 0) {
				//如果兑换券领光了
				$couponOut.show();
			} else {
				$couponUnreceived.show();
			};

			if (data.hasPickedByQimei === true && data.hasPickedByQq === false) {
				//如果该设备已领取过且该账号未领取过
				$over.show();
				$('.textGrey').html('该设备已领取过');
			} else if (data.hasFree) {
				//如果用户已领取福利2
				$after.show();
			} else if (data.code === -4) {
				//如果活动已结束
				$over.show();
			} else {
				$before.show();
			}
		}
		if (data.coupon) {
			$code.html(data.coupon);
		}
		$('.score').html(data.book.mark + '分');
		$('.favorite').html(data.book.hotValue + ' 收藏');
	});

	$('.swiper').swipe({
		mode: 'touch'
	});

	//如果这个参数为偶数
	if (Number(param('act_f')) % 2 === 0) {
		$('.getCoupon').removeClass('ka-pop');
	}

	$('.getCoupon').on('click', function () {
		//alert('111')
		//通知服务器用户点击了“立即领取”按钮。
		forceLog(param('act_f'), 'pick');
		try {
			Local.reqaObj(server() + "pkg160604/pick", function (data) {
				if (_config.$testMode) {
					data.code = 1;
					data.coupon = 'this is for test';
				}
				console.log(data);

				switch (data.code) {
					case -2:
						//用户未登录
						console.log('Try to login.');
						Local.login();
						break;
					case 0:
						//兑换券已被抢光
						$maskOut.show();
						$state1.hide();
						$couponOut.show();
						break;
					case 1:
						//兑换券领取成功
						$code.html(data.coupon);
						$maskSuccessful.show();
						$state1.hide();
						$couponReceived.show();
						break;

				}
			});
		} catch (e) {
			alert(e);
		}
	});

	$inputElem.on('focus', function () {
		$error.html('');
	});
	$('.complete').on('touchend', function () {
		var value = $inputElem[0].value;
		console.log($inputElem[0].value);
		if (value === null || value === undefined || value === '') {
			$error.html('未输入神秘暗语');
		} else {
			Local.reqaObj(server() + "pkg160604/pick2?ay=" + value, function (data) {
				if (_config.$testMode) {
					data.code = 1;
				}
				console.log(data);

				switch (data.code) {
					case -2:
						//用户未登录
						console.log('Try to login.');
						Local.login();
						break;
					case 0:
						//神秘暗语是错误的
						$error.html('神秘暗语错误');
						$inputElem[0].value = null;
						break;
					case 1:
						//成功
						$state2.hide();
						$after.show();
						break;

				}
			});
		};
	});

	$('.gotitSuccessful').on('click', function () {
		$maskSuccessful.hide();
	});
	$('.gotitOut').on('click', function () {
		$('.maskOut').hide();
	});

	$('.upper').on('click', function () {
		//通知服务器用户点击了书封。
		forceLog(param('act_f'), 'book');
		ABook.gotoDetail('806806');
	});

	$('.readItNow').on('touchend', function () {
		//通知服务器用户点击了“立即阅读”按钮。
		forceLog(param('act_f'), 'readNow');
		try {
			// Local.addToShelf({
			// 	bid : '806806',
			// 	title: '原来你还在这里',
			// 	author: '辛夷坞'
			// }, 0);
			ABook.gotoDetail('806806');
		} catch (e) {
			alert(e);
		}
	});
});

},{"./config.js":2,"./rem.js":4,"./z.swiper.js":5,"./zeal.js":6}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";

var _config = require("./config.js");

var $ = window.jQuery;
//console.log('ccc')
$.fn.swipe = function (opts) {

	var $$swiper = this;
	var $$train = $$swiper.find(".train");
	// The sequence will not change after any DOM manipulation.
	var $$items = $$swiper.find(".item");
	var $$tabs = $('.dot');

	var $$text = ['1. 打开微信，点击“我>钱包>电影票”。', '2. 点击“我的>优惠码通兑”。', '3. 兑换成功，支付时从“可用优惠”中勾选即可。'];

	var $swiperText = $('.swiperText');

	// $$width is the width of this swiper.
	var $$width = $$swiper.width(),
	    $$height = $$items.height(),
	    //$$swiper.height(),
	$$length = $$items.length;
	//console.log('000')
	(function () {
		//$(document).ready(function(){
		//console.log('111')
		var $$currentOne = 0;
		var $$target;
		var $$switching = false;
		// Configuration.
		var $$mode = opts.mode || "slider",
		    $$direction = opts.direction || "horizontal",
		    $$autoplay = opts.autoplay || false,
		    $$carousel = opts.carousel || false,
		    $$sticky = opts.sticky || true,
		    $$interval = opts.interval || 4000,
		    $$duration = opts.duration || 300;

		var $$keyControll = opts.keyControll || true,
		    $$wheelControll = opts.wheelControll || true;

		function $$init() {
			$$currentOne = 0;
			$$target = 0;
			$$switching = false;
			$$width = $$swiper.width();
			$$items.width($$width);
			$$height = $$items.height();
			$$swiper.height($$height);
			$$train.css({
				transform: 'translate3d(0,0,0)',
				//webkitTransform: 'translate3d(0,0,0)',
				left: 0
			});
			$$renderTabs();
		}
		$(window).on('resize', $$init);

		function $$renderTabs() {
			console.log($$currentOne);
			$$tabs.removeClass("active");
			$$tabs.eq($$currentOne).addClass("active");
		}

		$$swiper.css({
			position: "relative"
		});
		$$train.css({
			position: "absolute",
			left: 0,
			top: 0
		});

		//			
		if ($$mode === 'touch') {
			var trainOffsetX;
			var itemOffsetX;
			var currentItemScale;
			var otherItemScale;
			var isDown;
			var originalX;
			var prevX;
			var currentX;
			var touchStartTime, touchEndTime;
			var Y1, Y2;
			var scrollPrevented;

			(function () {
				var toCard = function toCard(i) {
					//console.log($$width);
					$$items.css({
						//webkitTransition:$$duration/1000+'s',
						transition: $$duration / 1000 + 's' });
					$$items.addClass('inactive');
					$$items.eq(i).removeClass('inactive');
					$$train.css({
						transition: '0.3s',
						transform: 'translate3d(' + -i * $$width + 'px,0,0)'
						//webkitTransition: '0.3s',
						//webkitTransform: 'translate3d('+(-i*$$width)+'px,0,0)'
					});
					// $$items.eq( $$currentOne ).css({
					// 	transform: ''
					// });
					// $$items.eq( $$currentOne-1 ).css({
					// 	transition: '0.3s',
					// 	transform: 'scale(0.8)'
					// })
					// $('.HEXAGON').removeClass('active');
					// $('.HEXAGON').eq( $$currentOne ).addClass('active');
					$swiperText.html($$text[i]);
					$$renderTabs();
					setTimeout(function () {
						currentItemScale = 1;
						otherItemScale = 0.8;
						$$switching = false;
					}, $$duration);
					// $$train.animate( {
					// 	left:(-i*$$width)
					// },$$duration,function(){
					// 	$$renderTabs();

					// 	$('.HEXAGON').removeClass('active');
					// 	$('.HEXAGON').eq( $$currentOne ).addClass('active');

					// 	$$switching = false;
					// } );
				};

				var next = function next() {
					if (!$$switching) {
						$$currentOne++;
						if ($$currentOne === $$length) {
							$$currentOne = 0;
						};
						toCard($$currentOne);
					};
				};

				var prev = function prev() {
					$$currentOne--;
					if ($$currentOne === -1) {
						$$currentOne = $$length - 1;
					};
					toCard($$currentOne);
				};

				trainOffsetX = 0;
				itemOffsetX = 0;
				currentItemScale = 1;
				otherItemScale = 0.8;
				isDown = false;
				scrollPrevented = false;


				$$items.addClass('inactive');
				$$items.eq(0).removeClass('inactive');

				$$train.on("mousedown touchstart", function (e) {

					if (true) {
						scrollPrevented = false;
						trainOffsetX = -$$currentOne * $$width;
						$$switching = true;
						//e.preventDefault();
						isDown = true;
						touchStartTime = new Date().getTime();
						//console.log(e.changedTouches[0].pageX)
						if (e.originalEvent) {
							originalX = e.originalEvent.changedTouches[0].pageX;
							Y1 = e.originalEvent.changedTouches[0].pageY;
						} else {
							originalX = e.changedTouches[0].pageX;
							Y1 = e.changedTouches[0].pageY;
						}
						prevX = originalX;
						if ($$carousel === true) {
							if ($$currentOne === $$length - 1) {
								$$items.eq(0).appendTo($$train);
								$$train.css({ left: '+=' + $$width + 'px' });
							}
						}
					};
				});
				$$train.on("mousemove touchmove", function (e) {

					if (isDown) {
						if (e.originalEvent) {
							currentX = e.originalEvent.changedTouches[0].pageX;
							Y2 = e.originalEvent.changedTouches[0].pageY;
						} else {
							currentX = e.changedTouches[0].pageX;
							Y2 = e.changedTouches[0].pageY;
						}
						var distanceY = Y2 - Y1;
						var distance = currentX - prevX;
						prevX = currentX;
						//console.log(distance)
						trainOffsetX += distance;
						itemOffsetX += distance;
						currentItemScale += 0.2 * distance / $$width;
						otherItemScale = otherItemScale !== 1 ? 0.8 + 0.2 * Math.abs(itemOffsetX) / $$width : 1;
						//console.log(currentItemScale)

						if (!scrollPrevented && Math.abs(distance) < Math.abs(distanceY)) {} else {
							e.preventDefault();
							scrollPrevented = true;
							if ($$sticky) {
								//The train will move.
								$$train.css({
									transition: '0s',
									transform: 'translate3d(' + trainOffsetX + 'px,0,0)'
									//webkitTransition: '0s',
									//webkitTransform: 'translate3d('+trainOffsetX+'px,0,0)'
								});
								// $$items.eq( $$currentOne ).css({
								// 	transition: '0s',
								// 	transform: 'scale('+currentItemScale+')'
								// })
								// // $$items.eq( $$currentOne-1 ).css({
								// // 	transition: '0s',
								// // 	transform: 'scale('+otherItemScale+')'
								// // })
								// $$items.eq( $$currentOne+1 ).css({
								// 	transition: '0s',
								// 	transform: 'scale('+otherItemScale+')'
								// })
							};
						}

						// // $$train.css( {left:"+="+distance+"px"},0 );
					};
				});
				$$train.on("mouseup mouseleave touchend", function (e) {
					if (isDown) {
						touchEndTime = new Date().getTime();
						var timeSpan = touchEndTime - touchStartTime;
						//console.log( timeSpan );
						if (e.originalEvent) {
							currentX = e.originalEvent.changedTouches[0].pageX;
						} else {
							currentX = e.changedTouches[0].pageX;
						}
						var distance = currentX - originalX;
						if (timeSpan < 200 || distance < -0.25 * $$width || distance > 0.25 * $$width) {
							if (distance < 0) {
								if ($$currentOne < $$length - 1) {
									$$currentOne++;
								} else {
									$$currentOne = $$length - 1;
								}
								// if( $$currentOne===$$length ){
								// 	$$currentOne = $$carousel?0:($$length-1);
								// }else{
								// 	//通知服务器用户浏览了哪张卡片。
								// 	//forceLog( param('act_f'),'card-'+$$currentOne );
								// 	//$$statistics.cards.push( $$currentOne );
								// 	//console.log( $$currentOne,'card-'+arr[$$currentOne].bid );
								// }
							} else if (distance > 0) {
								if ($$currentOne > 0) {
									$$currentOne--;
								} else {
									$$currentOne = 0;
								}
								// if( $$currentOne===-1 ){
								// 	$$currentOne = $$carousel?($$length-1):0;
								// // }else{
								// // 	//通知服务器用户浏览了哪张卡片。
								// // 	//forceLog( param('act_f'),'card-'+$$currentOne );
								// // 	//$$statistics.cards.push( $$currentOne );
								// // 	//console.log( $$currentOne,'card-'+arr[$$currentOne].bid );
								// // }
							}
						}

						// if( $$carousel===true&&$$currentOne===0 ){
						// 	$$train.animate(
						// 		{left:-($$length-1)*$$width},
						// 		$$duration,
						// 		function(){
						// 			$$items.eq(0).prependTo($$train);
						// 			$$train.css({left:0});
						// 			$$renderTabs();
						// 			$$switching = false;
						// 		}
						// 	 )
						// };
						//console.log( $$currentOne );
						//console.log( toCard );
						toCard($$currentOne);
						isDown = false;
					};
				});


				if ($$keyControll) {
					$(document).on('keydown', function () {});
				}
				// if( $$wheelControll ){
				// 	$$train.on("mousewheel DOMMouseScroll",function(e){
				// 		e.preventDefault();
				// 		console.log(e.originalEvent.detail)
				// 		if( e.originalEvent.detail>0 ){
				// 			next();
				// 		}else{
				// 			prev();
				// 		};
				// 	});
				// }
				if ($$autoplay) {
					setInterval(next, 4000);
				}
				// $$swiper.find(".next").on("click",next);
				// $$swiper.find(".prev").on("click",prev);

				// var hexagons = $('.HEXAGON');
				// hexagons.on('click',function(){
				// 	if( true ){
				// 		//switching = true;
				// 		//for jQuery
				// 		var i = $(this).index('.HEXAGON');
				// 		//通知服务器用户点击了哪个六边形。
				// 		//forceLog( param('act_f'),'hexagon-'+i );
				// 		//$$statistics.hexagons.push(i);
				// 		console.log( i,'hexagon-'+i );
				// 		hexagons.removeClass('active');
				// 		$(this).addClass('active');
				// 		$$currentOne = i;
				// 		toCard( $$currentOne );
				// 	}
				// })
			})();
		};
	})();
};

},{"./config.js":2}],6:[function(require,module,exports){
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

},{"./_.js":1}]},{},[3]);
