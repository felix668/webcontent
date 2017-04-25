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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 101);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(8)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

__webpack_require__(11);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
	data: function () {
		return {};
	},
	mounted: function () {}
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
		$html.style.fontSize = 100 * w / 750 + 'px';
		//document.getElementsByClassName('container')[0].style.height = h+'px';
		console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
	}
	setRem();
	window.addEventListener('resize', setRem);
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function createStore(modules) {

	var state = {};
	var reducers = [];
	modules.forEach(function (a) {
		for (var key in a.state) {
			state[key] = a.state[key];
		};
		reducers.push(a.reducer);
	});

	var store = {
		state: state,
		act: $act,
		dispatch: $act,
		enhance: enhance,
		merge: enhance
	};
	console.log(store);
	return store;

	function enhance(_data, _act) {
		var store = this;
		for (var key in _data) {
			store.data[key] = _data[key];
		};
		reducers.push(_act);
		return store;
	}

	function $act(action) {
		var vm = this;
		reducers.forEach(function (a) {
			a.call(vm, store.state, action);
		});
	}
}

exports.createStore = createStore;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: transparent; }\n  * :focus {\n    outline: none; }\n\n/*\r\n::-webkit-scrollbar {\r\n\tdisplay: none;\r\n}\r\n*/\nhtml {\n  font-family: 'Microsoft Yahei'; }\n\nul, li {\n  list-style: none; }\n\nimg, input {\n  display: block; }\n\n.clearfix {\n  clear: both; }\n\n/* Media Queries */\n@media (max-width: 350px) {\n  .desc {\n    font-size: 0.18rem !important; }\n  .rules p {\n    font-size: 0.16rem !important; } }\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".MaskLoading[data-v-7f899d4a]{position:fixed;left:0;top:0;width:100%;height:100%;background:#fff;z-index:9999}.MaskLoading ._text[data-v-7f899d4a]{padding:10px 0;font-size:.28rem;color:grey;text-align:center}", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./common.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./common.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  "data-v-7f899d4a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MaskLoading"
  }, [_c('p', {
    staticClass: "_text"
  }, [_vm._v("加载中...")])])
}]}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2d00ec4e", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7f899d4a&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MaskLoading.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7f899d4a&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MaskLoading.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(89)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  "data-v-211bf7d8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_books_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_books_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__store_store_books_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
	components: {
		Debugger: __webpack_require__(64),
		MaskLoading: __webpack_require__(12),
		MaskOver: __webpack_require__(67),

		Welcome: __webpack_require__(70),
		BookBlock: __webpack_require__(59),
		EndPage: __webpack_require__(65),
		Flipper: __webpack_require__(66)
	},
	data: function () {
		return __WEBPACK_IMPORTED_MODULE_0__store_store_books_js___default.a.state;
	},
	computed: {},
	watch: {},
	created: function () {},
	mounted: function () {
		this.act({ type: 'INIT' });
		//console.log(this)
	},
	methods: {
		act: __WEBPACK_IMPORTED_MODULE_0__store_store_books_js___default.a.act
	}
};

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BookBlock_less__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BookBlock_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__BookBlock_less__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var bb;

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		act: {},
		loggedIn: {},
		books: {},

		stage: {},
		current: {}
	},
	computed: {},
	components: {
		Scroller: __webpack_require__(68)
	},
	data: function () {
		return {
			class_: '',

			Y0: 0,
			Y2: 0
		};
	},
	watch: {
		stage: function (nv, ov) {
			if (ov === 1 && nv === 2) {
				this.class_ = 'leave';
			} else if (ov === 2 && nv === 1) {
				this.class_ = '';
			}
		},
		current: function (nv, ov) {
			if (nv > ov) {
				bb.next();
			} else {
				bb.prev();
			}
		},
		books: function () {
			setTimeout(() => {
				bb = new BookBlock(document.querySelector('#bb-bookblock'), {
					orientation: 'horizontal',
					speed: 700
				});
			}, 500);
		}
	},
	mounted: function () {
		// setTimeout(()=>{


		// 	// add navigation events
		// 	// document.querySelector('#bb-nav-next').addEventListener( 'click', function() {
		// 	// 	bb.next();
		// 	// 	return false;
		// 	// } );
		// 	// document.querySelector('#bb-nav-prev').addEventListener( 'click', function() {
		// 	// 	bb.prev();
		// 	// 	return false;
		// 	// } );
		// },500);
	},
	methods: {
		touchstart: function (e) {
			this.Y0 = e.changedTouches[0].pageY;
		},
		touchend: function (e) {
			this.Y2 = e.changedTouches[0].pageY;
			var distanceY = this.Y2 - this.Y0;

			this.act({
				type: 'SWITCH',
				direction: function () {
					if (distanceY > 3) {
						return 'down';
					} else if (distanceY < -3) {
						return 'up';
					} else {
						return '';
					};
				}()
			});
		}
	}
};

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	props: ['state'],
	computed: {
		writers: function () {
			var state = [];
			this.state.writers.forEach(a => {
				state.push(a.state);
			});
			return state;
		}
	},
	mounted: function () {}
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		act: {},

		loggedIn: {},
		stage: {}
	},
	data: function () {
		return {
			class_: '',

			Y0: 0,
			Y2: 0
		};
	},
	watch: {
		// stage: function(nv,ov){
		// 	if( ov===1&&nv===2 ){
		// 		this.class_ = 'enter';
		// 	}
		// }
	},
	mounted: function () {
		//this.act({type:'STAGE',i:1})
	},
	methods: {
		touchstart: function (e) {
			e.stopPropagation();
			this.Y0 = e.changedTouches[0].pageY;
		},
		touchend: function (e) {
			e.stopPropagation();
			this.Y2 = e.changedTouches[0].pageY;
			var distance = this.Y2 - this.Y0;
			if (distance > 3) {
				this.act({
					type: 'SWITCH',
					direction: 'down'
				});
			}
		}
	}
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	data: function () {
		return {
			items: [{
				background: 'red'
			}, {
				background: 'orange'
			}],
			current: 0
		};
	},
	methods: {
		turn: function () {
			this.$refs.page0.classList.add('active');
		}
	}
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	data: function () {
		return {};
	}
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		items: {
			default: function () {
				return [{}, {}, {}, {}];
			}
		},
		co: {},
		act: {}
	},
	computed: {
		books: function () {
			var books = [];
			for (let i = 2; i < this.items.length; i++) {
				books.push(this.items[i]);
			}
			return books;
		}
	},
	data: function () {
		return {
			contentW: 0,
			trainW: 0,

			switching: false,
			inCycle: false,
			moveCount: 0,
			scrolling: false,
			trainOffsetX: 0,
			offset: 0,
			x0: 0,
			X1: 0,
			X2: 0,

			Y0: 0,
			Y1: 0,
			Y2: 0,

			currentOne: 0,
			transition: '0s',
			offset: 0
		};
	},
	watch: {
		co: function (n) {
			if (n < 4) {
				this.transition = '1000ms';
				this.trainOffsetX = 0;
			} else {
				this.transition = '1000ms';
				this.trainOffsetX = -(this.trainW - this.contentW);
			}
		}
	},
	mounted: function () {
		var self = this;
		// setTimeout(()=>{
		// 	this.setWidth();
		// },50)
		// if( this.co<4 ){
		// 	this.transition = '0s';
		// 	this.trainOffsetX = 0;
		// }else{
		// 	this.transition = '0s';
		// 	this.trainOffsetX = -(this.trainW-this.contentW);
		// };
		// window.addEventListener('load',()=>{
		// 	setTimeout(()=>{
		// 		this.setWidth();
		// 	},50)
		// });
		window.addEventListener('resize', () => {
			setTimeout(() => {
				this.setWidth();
			}, 50);
		});
	},
	methods: {
		setWidth: function () {
			//var elem = this.$refs.train;
			this.contentW = Number(document.defaultView.getComputedStyle(this.$refs.content).width.replace(/px/, ''));
			this.trainW = Number(document.defaultView.getComputedStyle(this.$refs.train).width.replace(/px/, ''));
			//console.log(this.contentW,this.trainW)
			// this.width = width;
			// this.transition = '0s';
			//this.trainOffsetX = -this.currentOne*this.width;	
		},
		touchstart: function (e) {
			console.log(this.inCycle);
			this.setWidth();
			e.stopPropagation();
			if (!this.inCycle) {
				// begin a new cycle
				this.inCycle = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.transition = '0s';

				this.X0 = this.X1 = e.changedTouches[0].pageX;
				this.Y0 = this.Y1 = e.changedTouches[0].pageY;
			};
		},
		touchmove: function (e) {
			e.stopPropagation();
			if (this.inCycle) {
				this.moveCount++;
				if (!this.scrolling) {
					// decide if it can scroll at the first touchmove
					if (this.moveCount === 1) {
						this.X2 = e.changedTouches[0].pageX;
						this.Y2 = e.changedTouches[0].pageY;
						var distanceY = this.Y2 - this.Y1;
						var distanceX = this.X2 - this.X1;
						if (Math.abs(distanceY) > Math.abs(distanceX)) {
							this.scrolling = true;
						} else {
							// it is essential to preventDefault at the first touchmove
							// when using vanillajs or the subsequent touch-events would
							// not get triggered
							e.preventDefault();
						}
					}

					if (!this.scrolling) {
						this.X2 = e.changedTouches[0].pageX;
						var distance = this.X2 - this.X1;
						this.X1 = this.X2;
						this.transition = '0s';
						if (this.trainOffsetX + distance >= 0) {
							this.trainOffsetX = 0;
						} else if (this.trainOffsetX + distance <= -(this.trainW - this.contentW)) {
							this.trainOffsetX = -(this.trainW - this.contentW);
						} else {
							this.trainOffsetX += distance;
						}
						this.offset += distance;
						//console.log(this.trainOffsetX)
					}
				}
			}
		},
		touchend: function (e) {
			e.stopPropagation();
			if (this.inCycle && !this.scrolling) {
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X1;
				//this.transition = '0s';
				this.trainOffsetX += distance;
				this.switching = false;
				this.inCycle = false;
			} else {
				this.Y2 = e.changedTouches[0].pageY;
				var distanceY = this.Y2 - this.Y0;
				this.act({
					type: 'SWITCH',
					direction: function () {
						if (distanceY > 3) {
							return 'down';
						} else if (distanceY < -3) {
							return 'up';
						} else {
							return '';
						};
					}()
				});
				this.switching = false;
				this.inCycle = false;
			}
		}
	}
};

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		act: {},

		loggedIn: {},
		stage: {}
	},
	data: function () {
		return {
			class_: '',

			Y0: 0,
			Y2: 0
		};
	},
	watch: {
		stage: function (nv, ov) {
			if (ov === 0 && nv === 1) {
				this.class_ = 'leave';
			}
		}
	},
	mounted: function () {
		//this.act({type:'STAGE',i:1})
	},
	methods: {
		touchstart: function (e) {
			e.stopPropagation();
			this.Y0 = e.changedTouches[0].pageY;
		},
		touchend: function (e) {
			e.stopPropagation();
			this.Y2 = e.changedTouches[0].pageY;
			var distance = this.Y2 - this.Y0;
			if (distance < -3) {
				this.act({
					type: 'SWITCH',
					direction: 'up'
				});
			}
		}
	}
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var state = {
	img: '../adr/img',

	dev: true,

	page: 'pending',

	z_type: common.param('z_type') || 'none',

	ios: function () {
		if (window.env !== undefined) {
			return env.pt === 'ios' ? true : false;
		} else {
			var el = document.querySelector('[config]');
			var val = el.getAttribute('config');
			console.log(val);
			return (/ios/.test(val) ? true : false
			);
		};
	}(),
	share: function () {
		var el = document.querySelector('[config]');
		var val = el.getAttribute('config');
		console.log(val);
		return (/share/.test(val) ? true : false
		);
	}(),

	loggedIn: false,

	show_mask_download: false,
	show_mask_prize: false,

	first_vote: false,

	chance_to_draw: 0,
	timeleft: 0
};

function reducer(state, action) {
	var self = this;
	switch (action.type) {
		case 'TO_LOGIN':
			if (self.dev) {
				self.loggedIn = true;
			} else {
				Local.login();
			};
			break;

		case 'TO_PAGE':
			if (!self.share) {
				//Local.forceLog( common.param('act_f'),'writers_toActors' );
				console.log(location.href.replace(/books_\d\.html/g, 'books_' + action.i + '.html'));
				Local.openPage(location.href.replace(/books_\d\.html/g, 'books_' + action.i + '.html'));
			} else {
				self.act({ type: 'TO_APP' });
			}
			break;

		case 'TO_CONTACT':
			if (self.share) {
				self.act({ type: 'TO_APP' });
			} else {
				if (!self.loggedIn) {
					self.act({ type: 'TO_LOGIN' });
				} else {
					Local.openPage(location.href.replace(/(writers|actors|lottery)\.html/g, 'contact.html'));
				}
			};
			break;

		case 'TO_CHARGE':
			Local.doCharge('act', true, action.money * 100);
			break;
		case 'TO_BOOK':
			if (!self.share) {
				ABook.gotoDetail(action.bid);
			} else {
				self.act({ type: 'TO_APP' });
			}
			break;

		// For sharing:
		case 'SET_ICON':
			var pre = function () {
				// 如果当前环境为测试环境：
				if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
					return 'https://ptsolomo.reader.qq.com/book_res/event';
				} else {
					return 'https://yuedu.reader.qq.com/event';
				}
			}();
			var type = function () {
				return (/writers\.html/.test(location.href) ? 'writers' : 'actors'
				);
			}();
			var title = type === 'writers' ? '大神作家喊你来投票！' : '明星爱豆喊你来投票！';
			var desc = type === 'writers' ? '多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】' : '多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】';
			Local.$setIconForShareing(pre + '/act161202/com/share_' + type + '.html?tf=1', 'http' + (self.ios ? 's' : '') + '://ptsolomo.reader.qq.com/book_res/event/act161202/adr/img/common/thumb.png', title, desc);
			break;
		case 'SHARE':
			if (self.dev) {
				if (!self.loggedIn) {
					self.loggedIn = true;
				} else {
					self.writers[self.current].unlocked = true;
				}
			} else {
				//Local.forceLog( common.param('act_f'),self.what+'_share_'+self.current );
				if (!self.loggedIn) {
					self.act({
						type: 'LOGIN'
					});
				} else {

					Local.$share(self.href, location.href.replace(/act161203.+/, 'act161203/adr/img/qqreader.png'), 'QQ阅读6周年，大神请客，经典免费读', '我领到免费神作，你也快来吧');
				}
			}
			break;

		// For pages shared out:
		case 'SET_SECOND_SHARING':
			var type = function () {
				return (/writers\.html/.test(location.href) ? 'writers' : 'actors'
				);
			}();
			var title = type === 'writers' ? '大神作家喊你来投票！' : '明星爱豆喊你来投票！';
			var desc = type === 'writers' ? '多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】' : '多投多得，100%好礼不停，还有iPad等你赢！【中国原创文学风云榜】';
			sns.share({
				url: location.href,
				//cover: location.href.replace( /act161202.+/,'act161202/adr/img/qqreader.png' ),
				cover: 'http://solomotest4.3g.qq.com/book_res/event/act161202/adr/img/common/thumb.png',
				title: title,
				desc: desc
			}, '111');
			break;
		case 'TO_APP':
			var type = function () {
				return (/writers\.html/.test(location.href) ? 'writers' : 'actors'
				);
			}();
			var test = function () {
				if (/(solomotest4\.3g\.qq\.com|ptsolomo\.reader\.qq\.com)/.test(location.href)) {
					return true;
				} else {
					return false;
				}
			}();
			var href = function () {
				if (test) {
					if (env.pt === 'adr') {
						return 'http://solomotest4.3g.qq.com/book_res/event/act161202/adr/' + type + '.html?act_f=170105';
					} else {
						return 'https://ptsolomo.reader.qq.com/book_res/event/act161202/ios/' + type + '.html?act_f=170105';
					}
				} else {
					if (env.pt === 'adr') {
						return 'http://iyuedu.qq.com/event/act161202/adr/' + type + '.html?act_f=170105';
					} else {
						return 'https://yuedu.reader.qq.com/event/act161202/ios/' + type + '.html?act_f=170105';
					}
				};
			}();
			if (env.vw === 'wx' && env.pt === 'adr') {
				sns.open(function (installStat, plat) {
					if (installStat === -2) {//浏览器
						// window.location.href="uniteqqreader://nativepage/client/bookshelf";
						// showmask();
					} else if (installStat) {
						//已安装
						bnative.openPage(href);
						self.show_mask_download = true;
					} else {
						self.show_mask_download = true;
					}
				});
			} else {
				console.log('haha');
				bnative.openPage(href);
				setTimeout(function () {
					self.show_mask_download = true;
				}, 2000);
			};
			break;
		case 'TO_DOWNLOAD':
			bnative.downLoad('10003531');
			break;

		case 'HIDE_MASK_DOWNLOAD':
			self.show_mask_download = false;
			break;
		case 'HIDE_MASK_PRIZE':
			self.show_mask_prize = false;
			break;
	}
}

exports.default = { state: state, reducer: reducer };

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var books = [__webpack_require__(35).default, __webpack_require__(36).default, __webpack_require__(37).default, __webpack_require__(38).default];

var pages = [{
	id: 0,
	name: '畅销'
}, {
	id: 1,
	name: '经典'
}, {
	id: 2,
	name: '包月'
}, {
	id: 3,
	name: '出版'
}];

var state = {
	z_type: function () {
		var el = document.querySelector('[z-type]');
		var val = el.getAttribute('z-type');
		return Number(val);
	}(),

	sex: '',
	books: [],

	others: [],

	stage: 0,

	current: 0
};

pages.forEach(function (a) {
	if (a.id !== state.z_type) {
		state.others.push(a);
	}
});

function reducer(state, action) {
	var self = this;

	switch (action.type) {

		case 'INIT':
			if (self.dev) {
				window.addEventListener('load', function () {
					var _self$books;

					self.sex = 'male';
					(_self$books = self.books).push.apply(_self$books, _toConsumableArray(books[self.z_type][self.sex]));
					console.log(self.books);
					self.page = 'ready';
				});
			} else {
				Local.reqaObj(common.server() + 'pkg170104/init', function (data) {
					console.log(data);
					if (data.code === -4) {
						self.page = 'over';
					} else {
						self.loggedIn = data.isLogin;

						self.page = 'ready';
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			};
			break;
		case 'TAKE':
			Local.reqaObj(common.server() + 'pkg170104/pick', function (data) {
				console.log(data);
				if (data.code === -4) {
					self.page = 'over';
				} else {
					self.loggedIn = data.isLogin;

					self.page = 'ready';
				}
			}, [], function () {
				Local.showToast("网络异常，请稍候重试");
			}, 1);
			break;

		// case 'STAGE':
		// 	this.stage = action.i;
		// 	break;

		case 'SWITCH':
			console.log(self.current);
			if (self.stage === 0) {
				if (action.direction === 'up') {
					self.stage = 1;
				};
			} else if (self.stage === 1) {
				if (action.direction === 'up') {
					if (self.current < self.books.length - 1) {
						self.current++;
					} else {
						self.stage = 2;
					}
				} else if (action.direction === 'down') {
					if (self.current > 0) {
						self.current--;
					};
				}
			} else {
				if (action.direction === 'down') {
					self.stage = 1;
				}
			}
			break;

	}
}

exports.default = { state: state, reducer: reducer };

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	id: 0,
	name: '畅销',
	male: [{
		class: '花都言情',
		books: [{ "bid": "479232", "title": "校花的贴身高手", "author": "鱼人二代" }, { "bid": "13528321", "title": "透视小医神", "author": "小萌狼" }, { "bid": "520146", "title": "极品全能学生", "author": "花都大少" }, { "bid": "660366", "title": "茅山捉鬼人", "author": "青子" }, { "bid": "11420428", "title": "极品透视小仙医", "author": "流水曲觞" }]
	}, {
		class: '异世大陆',
		books: [{ "bid": "819435", "title": "一念永恒", "author": "耳根" }, { "bid": "413455", "title": "凌天战尊", "author": "风轻扬" }, { "bid": "661867", "title": "永恒圣帝", "author": "千寻月" }, { "bid": "817386", "title": "放开那个女巫", "author": "二目" }, { "bid": "804453", "title": "龙王传说", "author": "唐家三少" }]
	}, {
		class: '热血狂战',
		books: [{ "bid": "14608738", "title": "圣墟", "author": "辰东" }, { "bid": "715580", "title": "单兵为王", "author": "七品" }, { "bid": "462523", "title": "大主宰", "author": "天蚕土豆" }, { "bid": "561940", "title": "太古神王", "author": "净无痕" }, { "bid": "513571", "title": "网游之逆天戒指", "author": "上古圣贤" }]
	}, {
		class: '沙场点兵',
		books: [{ "bid": "295037", "title": "最强兵王", "author": "丛林狼" }, { "bid": "738984", "title": "抗日之特战兵王", "author": "寂寞剑客" }, { "bid": "523730", "title": "三国之召唤猛将", "author": "青铜剑客" }, { "bid": "13772999", "title": "龙组兵王", "author": "尘风" }, { "bid": "216428", "title": "超级兵王在都市", "author": "明日复明日" }]
	}, {
		class: '位面重生',
		books: [{ "bid": "648963", "title": "万古神帝", "author": "飞天鱼" }, { "bid": "1001760719", "title": "重生之都市修仙", "author": "十里剑神" }, { "bid": "462597", "title": "帝霸", "author": "厌笔萧生" }, { "bid": "808100", "title": "白袍总管", "author": "萧舒" }, { "bid": "13714606", "title": "火影之最强震遁", "author": "夜南听风" }]
	}],
	female: [{
		class: '豪门情缘',
		books: [{ "bid": "13700974", "title": "隔墙有男神：强行相爱100天", "author": "叶非夜" }, { "bid": "1000875951", "title": "豪门少奶奶：谢少的心尖宠妻", "author": "凤元糖果" }, { "bid": "13691462", "title": "99次离婚：厉少，请低调", "author": "万里里" }, { "bid": "839294", "title": "烽火红颜，少帅的女人", "author": "妤饵" }, { "bid": "823451", "title": "军长宠妻：重生农媳逆袭", "author": "懒百合" }]
	}, {
		class: '甜蜜爱恋',
		books: [{ "bid": "13430981", "title": "恶魔的专属：丫头，你好甜", "author": "默小水" }, { "bid": "13724396", "title": "军婚绵绵：顾少，宠妻无度", "author": "灿淼爱鱼" }, { "bid": "13648272", "title": "隐婚100分：惹火娇妻嫁一送一", "author": "囧囧有妖" }, { "bid": "791319", "title": "完美恋人，首席已过期", "author": "素痕残妆" }, { "bid": "12819626", "title": "隐婚蜜爱：偏执老公宠上瘾", "author": "猪宝宝萌萌哒" }]
	}, {
		class: '妃常嚣张',
		books: [{ "bid": "11758803", "title": "绝色妖娆：鬼医至尊", "author": "凤炅" }, { "bid": "610993", "title": "神医弃女：邪王霸爱小狂妃", "author": "蛇发优雅" }, { "bid": "737545", "title": "废材纨绔之腹黑邪妃", "author": "柒月甜" }, { "bid": "13302748", "title": "医毒双绝：冥王的天才宠妃", "author": "相思梓" }, { "bid": "709317", "title": "一品仙娇", "author": "文飘过峰" }]
	}, {
		class: '娘子当嫁',
		books: [{ "bid": "13714997", "title": "神医小毒妃：皇叔，别凶猛", "author": "杨十九" }, { "bid": "738867", "title": "嫡女当嫁：一等世子妃", "author": "奶油饼干" }, { "bid": "817556", "title": "摄政王绝宠之惑国煞妃", "author": "温暖的月光" }, { "bid": "827407", "title": "喜劫良缘，纨绔俏医妃", "author": "莉莉薇" }, { "bid": "825825", "title": "农女当道：山里老公好调教", "author": "紫雪凝烟" }]
	}, {
		class: '重生虐渣',
		books: [{ "bid": "13565048", "title": "快穿女配：反派BOSS有毒", "author": "墨泠" }, { "bid": "820350", "title": "重生之至尊千金", "author": "一路烦花" }, { "bid": "814031", "title": "嫡女重生：小妾不好欺", "author": "夏染雪" }, { "bid": "13755708", "title": "七零年，有点甜", "author": "七星草" }, { "bid": "497218", "title": "穿越未来之男人不好当", "author": "汝夫人" }]
	}]
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	id: 1,
	name: '经典',
	male: [{
		class: '洪荒神话',
		books: [{ "bid": "462521", "title": "完美世界", "author": "辰东", "type": "玄幻" }, { "bid": "462596", "title": "武极天下", "author": "蚕茧里的牛", "type": "玄幻" }, { "bid": "319657", "title": "三界独尊", "author": "犁天", "type": "玄幻" }, { "bid": "462522", "title": "莽荒纪", "author": "我吃西红柿", "type": "仙侠" }, { "bid": "462590", "title": "一世之尊", "author": "爱潜水的乌贼", "type": "玄幻" }, { "bid": "462589", "title": "造化之门", "author": "鹅是老五", "type": "仙侠" }, { "bid": "462599", "title": "帝尊", "author": "宅猪", "type": "仙侠" }, { "bid": "502041", "title": "惟我神尊", "author": "傲无常", "type": "玄幻" }, { "bid": "498497", "title": "苍穹龙骑", "author": "华表", "type": "玄幻" }, { "bid": "478670", "title": "全职高手", "author": "蝴蝶蓝", "type": "游戏" }]
	}, {
		class: '重生传奇',
		books: [{ "bid": "499686", "title": "重生之神级败家子", "author": "辰机唐红豆", "type": "都市" }, { "bid": "488347", "title": "唐砖", "author": "孑与2", "type": "历史" }, { "bid": "498953", "title": "大宋的智慧", "author": "孑与2", "type": "历史" }, { "bid": "485464", "title": "天才相师", "author": "打眼", "type": "都市" }, { "bid": "495203", "title": "宝鉴", "author": "打眼", "type": "都市" }, { "bid": "472524", "title": "官神", "author": "何常在", "type": "职场" }, { "bid": "486965", "title": "八零后少林方丈", "author": "黑土冒青烟", "type": "玄幻" }, { "bid": "481014", "title": "我的老婆是军阀", "author": "录事参军", "type": "历史" }, { "bid": "484857", "title": "神煌", "author": "开荒", "type": "玄幻" }, { "bid": "472154", "title": "曹贼", "author": "庚新", "type": "历史" }]
	}, {
		class: '王者涅槃',
		books: [{ "bid": "465030", "title": "凡人修仙传", "author": "忘语", "type": "仙侠" }, { "bid": "474235", "title": "吞噬星空", "author": "我吃西红柿", "type": "科幻" }, { "bid": "506017", "title": "长生界", "author": "辰东", "type": "玄幻" }, { "bid": "472518", "title": "异世邪君", "author": "风凌天下", "type": "玄幻" }, { "bid": "469498", "title": "仙逆", "author": "耳根", "type": "仙侠" }, { "bid": "471689", "title": "武神", "author": "苍天白鹤", "type": "玄幻" }, { "bid": "462952", "title": "将夜", "author": "猫腻", "type": "玄幻" }, { "bid": "486530", "title": "光明纪元", "author": "血红", "type": "玄幻" }, { "bid": "463936", "title": "惟我独仙", "author": "唐家三少", "type": "仙侠" }, { "bid": "466675", "title": "盘龙", "author": "我吃西红柿", "type": "奇幻" }]
	}, {
		class: '大神风采',
		books: [{ "bid": "469039", "title": "间客", "author": "猫腻", "type": "玄幻" }, { "bid": "478487", "title": "偷天", "author": "血红", "type": "仙侠" }, { "bid": "469493", "title": "弄潮", "author": "瑞根", "type": "职场" }, { "bid": "474065", "title": "黄金瞳", "author": "打眼", "type": "都市" }, { "bid": "476638", "title": "天珠变", "author": "唐家三少", "type": "玄幻" }, { "bid": "473634", "title": "召唤万岁", "author": "霞飞双颊", "type": "玄幻" }, { "bid": "506019", "title": "寂灭天骄", "author": "高楼大厦", "type": "科幻" }, { "bid": "471552", "title": "猎国", "author": "跳舞", "type": "玄幻" }, { "bid": "562932", "title": "黄金渔场", "author": "全金属弹壳", "type": "都市" }, { "bid": "462592", "title": "庆余年", "author": "猫腻", "type": "历史" }]
	}, {
		class: '精品书目',
		books: [{ "bid": "482821", "title": "最终进化", "author": "卷土", "type": "科幻" }, { "bid": "488055", "title": "惊门", "author": "徐公子胜治", "type": "都市" }, { "bid": "489523", "title": "超级能源强国", "author": "志鸟村", "type": "职场" }, { "bid": "484963", "title": "龙骑战机", "author": "华表", "type": "科幻" }, { "bid": "489672", "title": "胜者为王", "author": "林海听涛", "type": "体育" }, { "bid": "482324", "title": "工业霸主", "author": "齐橙", "type": "都市" }, { "bid": "479585", "title": "首席御医", "author": "银河九天", "type": "都市" }, { "bid": "467323", "title": "王牌进化", "author": "卷土", "type": "科幻" }, { "bid": "465955", "title": "恶魔法则", "author": "跳舞", "type": "玄幻" }, { "bid": "466112", "title": "琴帝", "author": "唐家三少", "type": "奇幻" }]
	}]
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	id: 2,
	name: '包月',
	male: [{
		class: '强者之巅',
		books: [{ "bid": "13503674", "title": "最强特种兵王", "author": "云中羊", "type": "军事" }, { "bid": "488601", "title": "武神空间", "author": "傅啸尘", "type": "玄幻" }, { "bid": "216416", "title": "主宰之王", "author": "快餐店", "type": "玄幻" }, { "bid": "618612", "title": "末世大回炉", "author": "二十二刀流", "type": "科幻" }, { "bid": "11636933", "title": "仙道邪君", "author": "昨夜南风", "type": "仙侠" }]
	}, {
		class: '娱乐教皇',
		books: [{ "bid": "356106", "title": "我真是大明星", "author": "尝谕", "type": "职场" }, { "bid": "467098", "title": "很纯很暧昧", "author": "鱼人二代", "type": "都市" }, { "bid": "714403", "title": "女总裁的专职司机", "author": "造化城主", "type": "都市" }, { "bid": "13812333", "title": "超级兵王", "author": "最佳恶人", "type": "军事" }, { "bid": "732092", "title": "妖孽霸主", "author": "郝帅帅", "type": "都市" }]
	}, {
		class: '茅山之术',
		books: [{ "bid": "342272", "title": "阴阳先生", "author": "巫九", "type": "灵异" }, { "bid": "616772", "title": "与千年女鬼同居的日子", "author": "卜非", "type": "灵异" }, { "bid": "349652", "title": "焚天之怒", "author": "妖夜", "type": "玄幻" }, { "bid": "432313", "title": "盖世仙尊", "author": "王小蛮", "type": "仙侠" }, { "bid": "562605", "title": "贞观大闲人", "author": "贼眉鼠眼", "type": "历史" }]
	}, {
		class: '位面王者',
		books: [{ "bid": "757329", "title": "网游之神级分解师", "author": "青烟一夜", "type": "游戏" }, { "bid": "13489043", "title": "都市至尊霸主", "author": "河帅", "type": "都市" }, { "bid": "815892", "title": "重生海贼王之副船长", "author": "天惊", "type": "二次元" }, { "bid": "13526418", "title": "九阳神诀", "author": "武小墨", "type": "武侠" }, { "bid": "497237", "title": "法师奥义", "author": "月中阴", "type": "奇幻" }]
	}]
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	id: 3,
	name: '出版',
	male: [{
		class: '----',
		books: [{ "bid": "847730", "title": "放弃我，抓紧我（上）", "author": "苏静初" }, { "bid": "815339", "title": "欢乐颂（刘涛、王凯、靳东等主演）", "author": "阿耐" }, { "bid": "726271", "title": "芈月传（全集）", "author": "蒋胜男" }, { "bid": "843542", "title": "翻译官", "author": "缪娟" }, { "bid": "803852", "title": "太子妃升职记（全集）", "author": "鲜橙" }, { "bid": "184496", "title": "孤芳不自赏", "author": "风弄" }, { "bid": "631422", "title": "秀丽江山（全四册）", "author": "李歆" }, { "bid": "827184", "title": "解密（陈学冬主演）", "author": "麦家" }, { "bid": "825037", "title": "我不是潘金莲（范冰冰主演）", "author": "刘震云" }, { "bid": "818472", "title": "九州·海上牧云记", "author": "今何在" }]
	}]
};

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(7);

var _base = __webpack_require__(33);

var _base2 = _interopRequireDefault(_base);

var _books = __webpack_require__(34);

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store.createStore)([_base2.default, _books2.default]);

exports.default = store;

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".bb-item {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n  background: #fff;\n}\n.bb-page {\n  position: absolute;\n  transform-style: preserve-3d;\n  transition-property: transform;\n}\n.bb-vertical .bb-page {\n  width: 50%;\n  height: 100%;\n  left: 50%;\n  transform-origin: left center;\n}\n.bb-horizontal .bb-page {\n  width: 100%;\n  height: 50%;\n  top: 50%;\n  transform-origin: center top;\n}\n.bb-page > div,\n.bb-outer,\n.bb-content,\n.bb-inner {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.bb-vertical .bb-content {\n  width: 200%;\n}\n.bb-horizontal .bb-content {\n  height: 200%;\n}\n.bb-page > div {\n  width: 100%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.bb-vertical .bb-back {\n  -webkit-transform: rotateY(-180deg);\n  transform: rotateY(-180deg);\n}\n.bb-horizontal .bb-back {\n  -webkit-transform: rotateX(-180deg);\n  transform: rotateX(-180deg);\n}\n.bb-outer {\n  width: 100%;\n  overflow: hidden;\n  z-index: 999;\n}\n.bb-overlay,\n.bb-flipoverlay {\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n.bb-flipoverlay {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.bb-bookblock.bb-vertical > div.bb-page:first-child,\n.bb-bookblock.bb-vertical > div.bb-page:first-child .bb-back {\n  -webkit-transform: rotateY(180deg);\n  transform: rotateY(180deg);\n}\n.bb-bookblock.bb-horizontal > div.bb-page:first-child,\n.bb-bookblock.bb-horizontal > div.bb-page:first-child .bb-back {\n  -webkit-transform: rotateX(180deg);\n  transform: rotateX(180deg);\n}\n/* Content display */\n.bb-content {\n  background: #fff;\n}\n.bb-vertical .bb-front .bb-content {\n  left: -100%;\n}\n.bb-horizontal .bb-front .bb-content {\n  top: -100%;\n}\n/* Flipping classes */\n.bb-vertical .bb-flip-next,\n.bb-vertical .bb-flip-initial {\n  -webkit-transform: rotateY(-180deg);\n  transform: rotateY(-180deg);\n}\n.bb-vertical .bb-flip-prev {\n  -webkit-transform: rotateY(0deg);\n  transform: rotateY(0deg);\n}\n.bb-horizontal .bb-flip-next,\n.bb-horizontal .bb-flip-initial {\n  -webkit-transform: rotateX(180deg);\n  transform: rotateX(180deg);\n}\n.bb-horizontal .bb-flip-prev {\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n}\n.bb-vertical .bb-flip-next-end {\n  -webkit-transform: rotateY(-15deg);\n  transform: rotateY(-15deg);\n}\n.bb-vertical .bb-flip-prev-end {\n  -webkit-transform: rotateY(-165deg);\n  transform: rotateY(-165deg);\n}\n.bb-horizontal .bb-flip-next-end {\n  -webkit-transform: rotateX(15deg);\n  transform: rotateX(15deg);\n}\n.bb-horizontal .bb-flip-prev-end {\n  -webkit-transform: rotateX(165deg);\n  transform: rotateX(165deg);\n}\n/* No JS */\n.no-js .bb-bookblock,\n.no-js ul.bb-custom-grid li {\n  width: auto;\n  height: auto;\n}\n.no-js .bb-item {\n  display: block;\n  position: relative;\n}\n* {\n  padding: 0;\n  margin: 0;\n}\n.container {\n  width: 100%;\n  padding: 50px 0;\n  background: #c05d8e;\n}\n.container .bb-custom-wrapper {\n  position: relative;\n  width: 6rem;\n  margin: 0 auto 40px;\n  text-align: center;\n}\n.container .bb-custom-wrapper .bb-bookblock {\n  position: relative;\n  width: 6rem;\n  height: 8rem;\n  margin: 0 auto;\n  z-index: 100;\n  perspective: 13rem;\n  backface-visibility: hidden;\n  box-shadow: 0 12px 20px -10px rgba(81, 64, 49, 0.6);\n}\n.container .bb-custom-wrapper .nav a {\n  font-size: 0.5rem;\n}\n.upper {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 50%;\n  font-size: 0.5rem;\n}\n.lower {\n  margin-top: 4rem;\n  width: 100%;\n  height: 4rem;\n  font-size: 0.5rem;\n  -moz-osx-font-smoothing: grayscale;\n}\n.fc-calendar-container {\n  position: relative;\n  height: 4rem;\n  width: 100%;\n  background: #fff;\n}\n.fc-calendar {\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Flipper[data-v-1e27efbb]{position:relative;width:7rem;height:11rem;margin:auto;margin-top:0;perspective:20rem}.Flipper .page[data-v-1e27efbb]{position:absolute;left:0;top:0;width:100%;height:100%;-ms-transform-origin:0 0;transform-origin:0 0;transition:3s;background:orange}.Flipper .page.active[data-v-1e27efbb]{transform:rotateX(180deg)}.Flipper .page[data-v-1e27efbb]:first-child{background:blue}", ""]);

// exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "#root .main[data-v-211bf7d8],#root[data-v-211bf7d8]{position:relative;width:100%;overflow:hidden}#root .main[data-v-211bf7d8]{height:100vh}", ""]);

// exports


/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".MaskOver[data-v-2917cf45]{display:table;position:fixed;left:0;top:0;width:100%;height:100%;background:#fff;z-index:9999}.MaskOver .content_666[data-v-2917cf45]{display:table-cell;vertical-align:middle;position:relative;width:100%;height:100%}.MaskOver .content_666 .content_667 img[data-v-2917cf45]{margin:auto;margin-bottom:.2rem;width:3rem}.MaskOver .content_666 .content_667 p[data-v-2917cf45]{font-size:.3rem;text-align:center}", ""]);

// exports


/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".BookBlock{position:absolute;left:0;top:0;width:100%;height:100vh;z-index:209;transition:transform 1s}.BookBlock.leave{transform:translate3d(0,-150%,0)}.BookBlock .header .bookClass{font-size:.26rem}.BookBlock .upper-book{float:left}.BookBlock .footer .pageNo,.BookBlock .upper-book .author,.BookBlock .upper-book .title{font-size:.26rem}", ""]);

// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".DEBUG .fixed__[data-v-6cd65906],.DEBUG[data-v-6cd65906]{position:fixed;left:0;bottom:0;width:100%;height:100px}.DEBUG .fixed__[data-v-6cd65906]{background:rgba(0,0,0,.5);color:#fff;font-size:14px;z-index:9999}", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".EndPage[data-v-798f5f35]{position:relative;width:100%;height:100vh;background:orange;z-index:199}.EndPage .to_login[data-v-798f5f35]{font-size:.3rem}", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Welcome[data-v-bc85d6e6]{position:absolute;left:0;top:0;width:100%;height:100%;background:orange;z-index:210;transition:transform 1s}.Welcome.leave[data-v-bc85d6e6]{transform:translate3d(0,-150%,0)}.Welcome .to_login[data-v-bc85d6e6]{font-size:.3rem}", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Scroller[data-v-dd51b6c2]{width:100%;margin-bottom:.25rem;overflow:hidden}.Scroller .content[data-v-dd51b6c2]{width:100%;margin:auto}.Scroller .content .long_bar[data-v-dd51b6c2]{position:relative;width:1000%}.Scroller .content .long_bar .train[data-v-dd51b6c2]{position:relative;float:left;background:orange}.Scroller .content .long_bar .train.right[data-v-dd51b6c2]{transform:translate3d(-35%,0,0)}.Scroller .content .long_bar .train .triangle[data-v-dd51b6c2]{position:absolute;left:0;bottom:0;width:1.3rem;transition:transform .3s}.Scroller .content .long_bar .train .triangle img[data-v-dd51b6c2]{width:.3rem;margin:auto}.Scroller .content .long_bar .train .item[data-v-dd51b6c2]{float:left;width:1.3rem;height:2rem;margin-right:.15rem;background:red}.Scroller .content .long_bar .train .item .title[data-v-dd51b6c2]{font-size:.26rem}.Scroller .content .long_bar .train .item .upper[data-v-dd51b6c2]{height:1.4rem;overflow:hidden}.Scroller .content .long_bar .train .item .upper .avatar[data-v-dd51b6c2]{box-sizing:border-box;width:1.04rem;height:1.04rem;margin:auto;margin-top:.12rem;border:.04rem solid #fff;border-radius:1000px;overflow:hidden;transition:transform .5s}.Scroller .content .long_bar .train .item .upper .avatar img[data-v-dd51b6c2]{width:100%;height:100%}.Scroller .content .long_bar .train .item .upper .avatar.active[data-v-dd51b6c2]{-ms-transform:scale(1.2);transform:scale(1.2)}.Scroller .content .long_bar .train .item .name[data-v-dd51b6c2]{margin-bottom:.3rem;font-size:.24rem;text-align:center;color:#636363}", ""]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./BookBlock.less", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./BookBlock.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(96)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(81),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(97)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(82),
  /* scopeId */
  "data-v-6cd65906",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(98)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(83),
  /* scopeId */
  "data-v-798f5f35",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(88)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(73),
  /* scopeId */
  "data-v-1e27efbb",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(91)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(76),
  /* scopeId */
  "data-v-2917cf45",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(100)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(85),
  /* scopeId */
  "data-v-dd51b6c2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(99)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(84),
  /* scopeId */
  "data-v-bc85d6e6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Flipper",
    on: {
      "click": _vm.turn
    }
  }, [_c('div', {
    ref: "page1",
    staticClass: "page"
  }, [_vm._v("1")]), _c('div', {
    ref: "page0",
    staticClass: "page"
  }, [_vm._v("0")])])
},staticRenderFns: []}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "root"
    }
  }, [_c('mask-loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'pending'),
      expression: " page==='pending' "
    }]
  }), _c('mask-over', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'over'),
      expression: " page==='over' "
    }]
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'ready'),
      expression: " page==='ready' "
    }],
    staticClass: "main"
  }, [_c('welcome', {
    attrs: {
      "act": _vm.act,
      "logged-in": _vm.loggedIn,
      "stage": _vm.stage
    }
  }), _c('book-block', {
    attrs: {
      "act": _vm.act,
      "books": _vm.books,
      "stage": _vm.stage,
      "current": _vm.current,
      "logged-in": _vm.loggedIn
    }
  }), _c('end-page', {
    attrs: {
      "act": _vm.act,
      "current": _vm.current,
      "logged-in": _vm.loggedIn
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 75 */,
/* 76 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MaskOver"
  }, [_c('div', {
    staticClass: "content_666"
  }, [_c('div', {
    staticClass: "content_667"
  }, [_c('img', {
    attrs: {
      "src": '../adr/img/common/over.png'
    }
  }), _c('p', [_vm._v("本期活动已结束")])])])])
},staticRenderFns: []}

/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "BookBlock",
    class: _vm.class_
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "bookClass"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.books.length > 0 ? _vm.books[_vm.current].class : '--') + "\n\t\t\t")])]), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "bb-custom-wrapper"
  }, [_c('div', {
    staticClass: "bb-bookblock",
    attrs: {
      "id": "bb-bookblock"
    },
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchend": function($event) {
        _vm.touchend($event)
      },
      "touchcancel": function($event) {
        _vm.touchend($event)
      }
    }
  }, _vm._l((_vm.books), function(a, i) {
    return _c('div', {
      staticClass: "bb-item"
    }, [_c('div', {
      staticClass: "upper",
      staticStyle: {
        "background": "url()",
        "background-size": "100% 100%"
      }
    }, _vm._l((2), function(n) {
      return _c('div', {
        staticClass: "upper-book"
      }, [_c('p', {
        staticClass: "title"
      }, [_vm._v(_vm._s(a.books[n - 1].title))]), _c('p', {
        staticClass: "author"
      }, [_vm._v(_vm._s(a.books[n - 1].author))])])
    })), _c('div', {
      staticClass: "lower",
      staticStyle: {
        "background": "url()",
        "background-size": "100% 100%"
      }
    }, [_c('scroller', {
      attrs: {
        "act": _vm.act,
        "items": a.books
      }
    })], 1)])
  }))])]), _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "pageNo"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.current + 1) + "/" + _vm._s(_vm.books.length) + "\n\t\t\t")])])])
},staticRenderFns: []}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "DEBUG"
  }, [_c('div', {
    staticClass: "fixed__"
  }, [_vm._v("\n\t\tloggedIn: " + _vm._s(_vm.state.loggedIn) + ", day: " + _vm._s(_vm.state.day)), _c('br'), _vm._v("\n\t\tcurrent: " + _vm._s(_vm.state.current)), _c('br')])])
},staticRenderFns: []}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "EndPage",
    class: _vm.class_,
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchend": function($event) {
        _vm.touchend($event)
      },
      "touchcancel": function($event) {
        _vm.touchend($event)
      }
    }
  }, [_vm._v("\n\t111\n")])
},staticRenderFns: []}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Welcome",
    class: _vm.class_,
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchend": function($event) {
        _vm.touchend($event)
      },
      "touchcancel": function($event) {
        _vm.touchend($event)
      }
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loggedIn),
      expression: "!loggedIn"
    }],
    staticClass: "to_login",
    on: {
      "click": function($event) {
        _vm.act({
          type: 'TO_LOGIN'
        })
      }
    }
  }, [_vm._v("\n\t\t登录\n\t")]), _c('div', {
    on: {
      "click": function($event) {
        _vm.act({
          type: 'TO_PAGE',
          i: 1
        })
      }
    }
  }, [_vm._v("跳转")])])
},staticRenderFns: []}

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Scroller"
  }, [_c('div', {
    ref: "content",
    staticClass: "content"
  }, [_c('div', {
    staticClass: "long_bar"
  }, [_c('div', {
    ref: "train",
    staticClass: "train",
    class: _vm.co >= 4 ? 'right' : '',
    style: ('transition:' + _vm.transition + ';transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);'),
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchmove": function($event) {
        _vm.touchmove($event)
      },
      "touchend": function($event) {
        _vm.touchend($event)
      }
    }
  }, [_vm._l((_vm.books), function(a, i) {
    return _c('div', {
      staticClass: "item"
    }, [_c('img', {
      staticClass: "cover",
      attrs: {
        "src": 'https://static.reader.qq.com/cover/' + a.bid % 1000 + '/' + a.bid + '/s_' + a.bid + '.jpg'
      }
    }), _c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(a.title))])])
  }), _c('div', {
    staticStyle: {
      "clear": "both"
    }
  })], 2)])])])
},staticRenderFns: []}

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0828767c", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1e27efbb&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Flipper.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1e27efbb&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Flipper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("ab2f0da0", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-211bf7d8&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-211bf7d8&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 90 */,
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0b7f2cbf", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2917cf45&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MaskOver.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2917cf45&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MaskOver.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("47da6a1a", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-36c0328f!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BookBlock.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-36c0328f!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BookBlock.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5cfed2f6", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6cd65906&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Debugger.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6cd65906&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Debugger.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("025de319", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-798f5f35&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EndPage.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-798f5f35&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EndPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6c3b69c3", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-bc85d6e6&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Welcome.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-bc85d6e6&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Welcome.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("17b2ee33", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-dd51b6c2&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Scroller.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-dd51b6c2&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Scroller.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var root = new Vue({
	el: '#root',
	components: {
		App: __webpack_require__(16)
	},
	template: '<app></app>'
});

/***/ })
/******/ ]);