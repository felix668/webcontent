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
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(90)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  "data-v-2719a36f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(71),
  /* scopeId */
  "data-v-0f922082",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_red_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_store_red_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__store_store_red_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		//Debugger: require('../lib/Debugger.vue'),
		MaskLoading: __webpack_require__(12),
		//MaskOver: require('../lib/MaskOver.vue'),

		Swiper: __webpack_require__(69)

		//Rules: require('../lib/Rules.vue'),
		//FooterFixed: require('../lib/FooterFixed.vue')
	},
	data: function () {
		return __WEBPACK_IMPORTED_MODULE_0__store_store_red_js___default.a.state;
	},
	computed: {},
	watch: {},
	created: function () {},
	mounted: function () {
		this.act({ type: 'INIT' });
		//console.log(this)
	},
	methods: {
		act: __WEBPACK_IMPORTED_MODULE_0__store_store_red_js___default.a.act
	}
};

/***/ }),
/* 20 */,
/* 21 */
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

var arr = [];
var uid = 0;

var img = new Image();
img.src = './img/red/panel.png';

function haha(el) {

	var Score = function (el, fontSize, fontWidth) {
		this.canvas = el;
		this.fontSize = fontSize || "18";
		this.fontWidth = fontWidth || 18;
		this.ctx = this.canvas.getContext("2d");
		this.w = this.canvas.width;
		this.h = this.canvas.height;
		this.mub_list = [null, null, null, null, null, null, null, null], this.all_mub = "00000000";
	};

	Score.prototype = {
		update: function (n) {
			var len = this.mub_list.length - n.toString().length;
			for (var i = 0; i < len; i++) {
				n = " " + n;
			}
			var k2 = n.toString().split(""),
			    k1 = this.all_mub.toString().split(""),
			    j = 0;
			for (var i = 0; i < 8; i++) {
				if (k2[i] != " ") {
					k1[i] == " " && (k1[i] = "0");
					this.mub_list[i] = new Mub(parseInt(k1[i]), 16 + this.fontWidth * j, parseInt(k2[i]), 1.5, 65);
					j++;
				} else {
					this.mub_list[i] = new Mub(0, 16 + this.fontWidth * j, 0, 9 - i, 65);
					j++;
				}
			}
			this.all_mub = n.toString();
		},
		draw: function () {
			var self = this;
			this.stimer = requestAnimFrame(function () {
				self.draw();
			});
			this.ctx.clearRect(0, 0, this.w, this.h);
			for (let i = 0; i < 8; i++) {
				this.ctx.drawImage(img, 4 + 61 * i, 0);
			};
			this.mub_list.forEach(a => {
				if (a !== null) {
					a.draw(this.ctx, this.fontSize);
					a.move();
				}
			});
			// for( let i = 0; i<8; i++ ){
			//     if (this.mub_list[i] != null) {
			//         this.mub_list[i].draw(this.ctx,this.fontSize);
			//         this.mub_list[i].move();
			//     }
			// }
		}
	};

	var Mub = function (a, x, n, speed, h) {
		this.a = a; //µ±Ç°Í£Ö¹µÄÊý×Ö
		this.n = n; //¸üÐÂµ½µÄÊý×Ö
		this.x = x; //ºá×ø±ê
		this.h = h;
		this.speed = speed; //×ª¶¯ËÙ¶È
		this.y = -this.h * 4 - 8;
		this.nub = [];
		this.__init();
	};
	Mub.prototype = {
		__init: function () {
			this.nub[5] = this.a;
			for (var i = 6; i < 10; i++) {
				this.nub[i - 1] == 0 ? this.nub[i] = 9 : this.nub[i] = this.nub[i - 1] - 1;
			}
			for (var i = 4; i >= 0; i--) {
				this.nub[i + 1] == 9 ? this.nub[i] = 0 : this.nub[i] = this.nub[i + 1] + 1;
			}
		},
		draw: function (ctx, fontSize) {
			ctx.save();
			ctx.font = fontSize + "px arial";
			//       var gradient = ctx.createLinearGradient(0, 0, 0, this.h);
			// ctx.shadowColor = "#000";
			//       ctx.shadowOffsetX = 1;
			//       ctx.shadowOffsetY = 1;
			//       gradient.addColorStop("0", "#fff");
			//       gradient.addColorStop("0.2", "#444");
			//       gradient.addColorStop("0.6", "#fff");
			//       gradient.addColorStop("0.8", "#444");
			//       gradient.addColorStop("1", "#fff");
			ctx.fillStyle = '#774445';
			for (var i = 0; i < this.nub.length; i++) {
				var _y = this.y + i * this.h;
				if (_y > 0 && _y < 130) {
					ctx.fillText(this.nub[i], this.x, _y);
				}
			}
			ctx.restore();
		},
		move: function () {
			if (this.n !== this.nub[5]) {
				this.y += 7.5 / this.speed;
				if (this.h * 4 + 8 + this.y == this.h) {
					this.nub.splice(0, 0, this.nub.pop());
					this.y = -this.h * 4 - 8;
				}
			}
		}
	};

	window.requestAnimFrame = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
			window.setTimeout(callback, 1000 / 60);
		};
	}();

	window.cancelAFrame = function () {
		return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
			window.clearTimeout(id);
		};
	}();

	//¼ÆÈëÊý×Ö
	var score1 = 0;
	var s1 = new Score(el, 54, 61);
	s1.update(score1);
	s1.draw();
	// setInterval(function() {
	//     var d = score1 += 9234;
	//     s1.update(d);
	// },
	// 2000)
	arr.push(s1);
	uid++;
}
/* harmony default export */ __webpack_exports__["default"] = {
	props: ['act', 'num'],
	data: function () {
		return {
			uid: 0
		};
	},
	watch: {
		num: function (nv) {
			arr[this.uid].update(nv);
		}
	},
	mounted: function () {
		this.uid = uid;
		haha(this.$refs.canvas);
	},
	methods: {}

};

/***/ }),
/* 22 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		state: {}
	},
	components: {
		CanvasCounter: __webpack_require__(15)
	},
	data: function () {
		return {};
	},
	watch: {
		'state.qqReader': function (nv, ov) {
			var options = {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			};
			var demo = new CountUp("qqReader", ov, nv, 0, 2.5, options);
			demo.start();
		},
		'state.mqq': function (nv, ov) {
			var options = {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			};
			var demo = new CountUp("mqq", ov, nv, 0, 2.5, options);
			demo.start();
		}
	},
	computed: {},
	methods: {}
};

/***/ }),
/* 23 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		state: {}
	},
	components: {},
	data: function () {
		return {};
	},
	watch: {
		'state.DAU': function (nv, ov) {
			var options = {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			};
			var demo = new CountUp("DAU", ov, nv, 0, 2.5, options);
			demo.start();
		},
		'state.total_growth': function (nv, ov) {
			var options = {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			};
			var demo = new CountUp("total_growth", ov, nv, 0, 2.5, options);
			demo.start();
		}
	},
	computed: {},
	methods: {}
};

/***/ }),
/* 24 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		img: {},
		state: {}
	},
	components: {},
	data: function () {
		return {};
	},
	watch: {
		'state.qqReader.total': function (nv, ov) {
			var options = {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			};
			var demo = new CountUp("qq_reader_uv", ov, nv, 0, 2.5, options);
			demo.start();
		},
		'state.mqq.total': function (nv, ov) {
			var options = {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			};
			var demo = new CountUp("qq_uv", ov, nv, 0, 2.5, options);
			demo.start();
		}
	},
	computed: {},
	methods: {}
};

/***/ }),
/* 25 */
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

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		img: {},
		state: {}
	},
	components: {
		CanvasCounter: __webpack_require__(15)
	},
	data: function () {
		return {};
	},
	watch: {
		'state.qqReader': function (nv, ov) {
			var options = {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			};
			var demo = new CountUp("qqReader", ov, nv, 0, 2.5, options);
			demo.start();
		},
		'state.total_growth': function (nv, ov) {
			var options = {
				useEasing: true,
				useGrouping: true,
				separator: ',',
				decimal: '.',
				prefix: '',
				suffix: ''
			};
			var demo = new CountUp("total_growth", ov, nv, 0, 2.5, options);
			demo.start();
		}
	},
	computed: {},
	methods: {}
};

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		Card0: __webpack_require__(60),
		Card1: __webpack_require__(61),
		Card2: __webpack_require__(62),
		Card3: __webpack_require__(63)
	},
	props: {
		act: {},
		img: {},
		cardZero: {},
		cardOne: {},
		cardTwo: {},
		cardThree: {},
		items: {
			default: function () {
				return [{
					id: 0,
					name: '刘十八',
					desc: '刘十八',
					song: '刘十八',
					comment: '听说你唱歌都不在调上的来一首听听吧'
				}, {
					id: 1,
					name: '流水无痕',
					desc: '流水无痕',
					song: '流水无痕',
					comment: '听说你唱歌都不在调上的来一首听听吧'
				}, {
					id: 2,
					name: '苏小暖',
					desc: '苏小暖',
					song: '苏小暖',
					comment: '听说你唱歌都不在调上的来一首听听吧'
				}, {
					id: 3,
					name: '太上布衣',
					desc: '太上布衣',
					song: '太上布衣',
					comment: '听说你唱歌都不在调上的来一首听听吧'
				}];
			}
		},
		style: {
			default: ''
		},
		ease: {
			default: 'ease-out' //'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
		},
		carousel: {
			default: false
		},
		sticky: {
			default: true
		},
		autoplay: {
			default: false
		},
		duration: {
			default: 400
		},
		interval: {
			default: 1000
		}
	},
	data: function () {
		return {
			width: 0,

			//items: [],

			switching: false,
			inCycle: false,
			moveCount: 0,
			scrolling: false,
			trainOffsetX: 0,
			offset: 0,
			X1: 0,
			X2: 0,

			currentOne: 0,
			transition: '0s',
			offset: 0
		};
	},
	computed: {
		author: function () {
			return this.items[this.currentOne].name;
		}
	},
	watch: {
		items: function () {
			//this.copy = this.items;
		},
		currentOne: function (new_val) {
			this.act({
				type: 'SWITCH',
				i: new_val
			});
		}
	},
	mounted: function () {
		//console.log(this.$refs)
		var self = this;
		// this.items = (function(){
		// 	var items = JSON.parse( JSON.stringify(self.raw) );
		// 	return items;
		// })();
		window.addEventListener('load', () => {
			this.setWidth();
		});
		window.addEventListener('resize', () => {
			setTimeout(() => {
				this.setWidth();
			}, 50);
		});
		if (this.autoplay) {
			setInterval(() => {
				if (!this.inCycle) {
					this.toNext();
				};
			}, this.interval);
		}
	},
	methods: {
		__toItem: function (name) {
			var i;
			this.items.forEach(a => {
				if (a.name === name) {
					i = a.id;
				}
			});
			this.toCard(i);
		},
		setWidth: function () {
			var elem = this.$refs.swiper;
			var width = Number(document.defaultView.getComputedStyle(elem).width.replace(/px/, ''));
			this.width = width;
			this.transition = '0s';
			this.trainOffsetX = -this.currentOne * this.width;
		},
		toNext: function () {
			if (true) {
				this.switching = true;
				this.transition = this.duration + 'ms ' + this.ease;
				if (this.currentOne < this.items.length - 1) {
					this.currentOne++;
					this.trainOffsetX = -this.currentOne * this.width;
				} else if (this.carousel) {
					this.currentOne = 0;
					this.trainOffsetX = -this.items.length * this.width;
				} else {
					this.trainOffsetX = -this.currentOne * this.width;
				}
				setTimeout(() => {
					this.transition = '0s';
					if (this.carousel && this.currentOne === 0) {
						this.trainOffsetX = 0;
					};
					this.switching = false;
					this.inCycle = false;
				}, this.duration);
			}
		},
		toPrev: function () {
			this.switching = true;
			this.transition = this.duration + 'ms ' + this.ease;
			if (this.currentOne > 0) {
				this.currentOne--;
				this.trainOffsetX = -this.currentOne * this.width;
			} else if (this.carousel) {
				this.currentOne = this.items.length - 1;
				this.trainOffsetX = this.width;
			} else {
				this.trainOffsetX = -this.currentOne * this.width;
			}
			setTimeout(() => {
				this.transition = '0s';
				if (this.carousel && this.currentOne === this.items.length - 1) {
					this.trainOffsetX = -this.currentOne * this.width;
				};
				this.switching = false;
				this.inCycle = false;
			}, this.duration);
		},
		toCard: function (i) {
			this.currentOne = i;
			this.transition = this.duration + 'ms ' + this.ease;
			this.trainOffsetX = -this.currentOne * this.width;
			setTimeout(() => {
				this.transition = '0s';
				this.switching = false;
				this.inCycle = false;
			}, this.duration);
		},
		touchstart: function (e) {
			e.stopPropagation();
			console.log(this.inCycle);
			if (!this.inCycle && !this.switching) {
				// begin a new cycle
				this.inCycle = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.transition = '0s';

				this.X0 = this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
			};
		},
		touchmove: function (e) {
			e.stopPropagation();
			if (this.inCycle && !this.switching) {
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

					if (!this.scrolling && this.sticky) {
						this.X2 = e.changedTouches[0].pageX;
						var distance = this.X2 - this.X1;
						this.X1 = this.X2;
						this.trainOffsetX += distance;
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
				var distance = this.X2 - this.X0;
				if (distance < -5) {
					this.toNext();
				} else if (distance > 5) {
					this.toPrev();
				} else {
					if (!this.switching) {
						this.switching = false;
						this.inCycle = false;
					};
				}
			} else {
				this.switching = false;
				this.inCycle = false;
			}
		}
	}
};

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var state = {
	img: './img',
	dev: false,
	page: 'pending',

	current: -1,

	times: ['--:--', '--:--', '--:--', '--:--'],
	card0: {
		total: 0,
		qqReader: 0,
		mqq: 0
	},
	card1: {
		DAU: 0,
		ratio: 0,
		total_growth: 0,
		ratio2: 0
	},
	card2: {
		qqReader: {
			total: 0,
			peak: 0,
			time: '--:--'
		},
		mqq: {
			total: 0,
			peak: 0,
			time: '--:--'
		}
	},
	card3: {
		times_of_opening: 0,
		times_of_downloading: 0
	}
};

function reducer(state, action) {
	var self = state;
	var vm = this;
	switch (action.type) {

		case 'INIT':
			if (self.dev) {
				window.addEventListener('load', function () {

					self.times[0] = function () {
						var str = 1010 + '';
						return str.substr(0, 2) + ':' + str.substr(2, 2);
					}();
					self.card0.total = 11111;
					self.card0.qqReader = 112311;
					self.card0.mqq = 111221;

					self.times[1] = '11';
					self.card1.DAU = 555;
					self.card1.ratio = 10;
					self.card1.total_growth = 777;
					self.card1.ratio2 = 1.22;

					self.times[2] = '22';
					self.card2.qqReader.total = 12345;
					self.card2.qqReader.peak = 1111;
					self.card2.qqReader.time = function () {
						var str = 201701062101 + '';
						return str.substr(8, 2) + ':' + str.substr(10, 2);
					}();
					self.card2.mqq.total = 13356;
					self.card2.mqq.peak = 1122;
					self.card2.mqq.time = function () {
						var str = 201701062122 + '';
						return str.substr(8, 2) + ':' + str.substr(10, 2);
					}();

					self.times[3] = '33';
					self.card3.times_of_opening += 3456;
					self.card3.times_of_downloading += 3654;
					setInterval(function () {
						self.card0.total += 12345;
						self.card0.qqReader += 12345;
						self.card0.mqq += 12345;

						self.card1.DAU += 2356;
						self.card1.ratio += 0.1;
						self.card1.count += 10;
						self.card1.total_growth += 777;

						self.card2.qqReader.total += 345;
						self.card2.qqReader.peak += 11;
						self.card2.mqq.total += 1356;
						self.card2.mqq.peak += 23;

						self.card3.times_of_opening += 3456;
						self.card3.times_of_downloading += 3654;
					}, 5000);
					self.page = 'ready';
				});
			} else {
				vm.act({ type: 'REQUEST' });
				window.addEventListener('load', function () {
					self.page = 'ready';
				});
			};
			break;
		case 'SWITCH':
			self.current = action.i;
			break;
		case 'REQUEST':
			vm.act({ type: 'CARD_0' });
			vm.act({ type: 'CARD_1' });
			vm.act({ type: 'CARD_2' });
			vm.act({ type: 'CARD_3' });
			break;
		case 'CARD_0':
			common.ajax(location.origin + '/servlet/UserServlet?method=getKpi', function (res) {
				self.times[0] = function () {
					var str = res.time + '';
					return str.substr(0, 2) + ':' + str.substr(2, 2);
				}();
				// 红包总发放量：
				self.card0.total = Number(res.all);
				// QQ阅读发放量：
				self.card0.qqReader = Number(res.qqreader);
				// 手Q阅读发放量：
				self.card0.mqq = Number(res.qq);
				if (self.current === -1) {
					self.current = 0;
				};
				setTimeout(function () {
					vm.act({ type: 'CARD_0' });
				}, 5000);
			}, null, function () {
				setTimeout(function () {
					vm.act({ type: 'CARD_0' });
				}, 5000);
			});
			break;
		case 'CARD_1':
			common.ajax(location.origin + '/servlet/UserServlet?method=getRealUv', function (res) {
				// 数据时段：
				self.times[1] = function () {
					var str = res.time + '';
					return str.substr(0, 2) + ':' + str.substr(2, 2);
				}();

				// 今日DAU：
				self.card1.DAU = Number(res.dau);
				// 环比昨天涨幅：
				self.card1.ratio = Number(res.growpercent);

				// 今日新增用户：
				self.card1.total_growth = Number(res.realNewUser);
				// 环比昨天涨幅：
				self.card1.ratio2 = Number(res.accNewUser);
				setTimeout(function () {
					vm.act({ type: 'CARD_1' });
				}, 5000);
			}, null, function () {
				setTimeout(function () {
					vm.act({ type: 'CARD_1' });
				}, 5000);
			});
			break;
		case 'CARD_2':
			common.ajax(location.origin + '/servlet/UserServlet?method=getPageActUv', function (res) {
				self.times[2] = res.statisTime;
				// QQ阅读累计访问量：
				self.card2.qqReader.total = Number(res.QQReaderAccPv);
				// QQ阅读访问量峰值：
				self.card2.qqReader.peak = Number(res.QQReaderMaxPv);
				// QQ阅读访问量峰值时段：
				self.card2.qqReader.time = function () {
					var str = res.QQReaderMaxPvTime + '';
					return str.substr(8, 2) + ':' + str.substr(10, 2);
				}();

				// 手Q阅读累计访问量：
				self.card2.mqq.total = Number(res.QQAccPv);
				// 手Q阅读访问量峰值：
				self.card2.mqq.peak = Number(res.QQMaxPv);
				// 手Q阅读访问量峰值时段：
				self.card2.mqq.time = function () {
					var str = res.QQMaxPvTime + '';
					return str.substr(8, 2) + ':' + str.substr(10, 2);
				}();

				setTimeout(function () {
					vm.act({ type: 'CARD_2' });
				}, 30000);
			}, null, function () {
				setTimeout(function () {
					vm.act({ type: 'CARD_2' });
				}, 30000);
			});
			break;
		case 'CARD_3':
			common.ajax(location.origin + '/servlet/UserServlet?method=getActiPageUv', function (res) {
				self.times[3] = res.statisTime;
				// 累计打开QQ阅读人数：
				self.card3.times_of_opening = Number(res.QQReaderAccPv);
				// 累计下载QQ阅读人数：
				self.card3.times_of_downloading = Number(res.QQReaderMaxPv);
				setTimeout(function () {
					vm.act({ type: 'CARD_3' });
				}, 30000);
			}, null, function () {
				setTimeout(function () {
					vm.act({ type: 'CARD_3' });
				}, 30000);
			});
			break;
	}
}

exports.default = { state: state, reducer: reducer };

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(7);

var _red = __webpack_require__(39);

var _red2 = _interopRequireDefault(_red);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store.createStore)([_red2.default]);

exports.default = store;

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "#root .main[data-v-0f922082],#root[data-v-0f922082]{position:relative;width:100%;overflow:hidden}#root .main[data-v-0f922082]{height:12.17rem}#root .main .time[data-v-0f922082]{position:absolute;left:2.4rem;top:1.78rem;width:2.7rem;height:.7rem}#root .main .time .number[data-v-0f922082]{position:relative;width:100%;height:100%;line-height:.7rem;font-size:.36rem;text-align:center;color:#774445}#root .main .header_writers[data-v-0f922082]{width:100%;margin-bottom:.55rem}#root .main .male_writer[data-v-0f922082]{width:5.64rem;margin:auto;margin-bottom:.49rem}#root .main .female_writer[data-v-0f922082]{width:5.64rem;margin:auto;margin-top:.56rem;margin-bottom:.44rem}#root .main .link[data-v-0f922082]{width:4.8rem;margin:auto;margin-top:.58rem;margin-bottom:.6rem;overflow:hidden}#root .main .link img[data-v-0f922082]{width:100%}", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Swiper__[data-v-1891591d]{position:relative;width:100%;margin-top:1.96rem;overflow:hidden}.Swiper__ .Swiper[data-v-1891591d]{position:relative;width:6.4rem;height:8.28rem;margin:auto;margin-bottom:.38rem}.Swiper__ .Swiper .train[data-v-1891591d]{width:2000%;height:100%}.Swiper__ .Swiper .train.carousel[data-v-1891591d]{margin-left:-200%}.Swiper__ .Swiper .train .item[data-v-1891591d]{position:relative;float:left;width:5%;height:100%;transition-property:transform,opacity;transition-duration:.5s;opacity:.6;-ms-transform:scale(.95);transform:scale(.95)}.Swiper__ .Swiper .train .item .shadow[data-v-1891591d]{position:absolute;left:5%;top:20%;width:90%;height:80%;box-shadow:0 0 1rem #000}.Swiper__ .Swiper .train .item .content[data-v-1891591d]{position:absolute;width:100%;height:100%;font-size:.3rem;line-height:.84rem;text-align:center;background:#f0f0ef}.Swiper__ .Swiper .train .item.active[data-v-1891591d]{-ms-transform:scale(1);transform:scale(1);opacity:1}.Swiper__ .pagination[data-v-1891591d]{overflow:hidden;display:table;margin:auto}.Swiper__ .pagination .dot[data-v-1891591d]{float:left;width:.16rem;height:.16rem;margin:.08rem;border-radius:1000px;background:#6c556f}.Swiper__ .pagination .dot.active[data-v-1891591d]{-ms-transform:scale(1.2);transform:scale(1.2);background:#fffbef}", ""]);

// exports


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".CanvasCounter[data-v-2719a36f]{width:4.85rem;margin:auto}.CanvasCounter canvas[data-v-2719a36f]{width:100%}", ""]);

// exports


/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Card3[data-v-33707afc]{position:relative;width:6.24rem;margin:auto}.Card3 .banner[data-v-33707afc]{width:4.59rem;height:1.09rem;margin:auto;margin-bottom:.5rem;font-size:.32rem;line-height:1.09rem;text-align:center;color:#fff0e6}.Card3 .part[data-v-33707afc]{width:5.38rem;margin:auto;overflow:hidden}.Card3 .part .title[data-v-33707afc]{margin-bottom:.24rem;font-size:.28rem;line-height:.28rem;color:#664243}.Card3 .part[data-v-33707afc]:nth-child(3){height:1.59rem;border-bottom:1px dotted #ebd1c5}.Card3 .part[data-v-33707afc]:nth-child(4){padding-top:.34rem}", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Card2[data-v-338ca9fe]{position:relative;width:6.24rem;margin:auto}.Card2 .banner[data-v-338ca9fe]{width:4.59rem;height:1.09rem;margin:auto;margin-bottom:.4rem;font-size:.32rem;line-height:1.09rem;text-align:center;color:#fff0e6}.Card2 .part[data-v-338ca9fe]{width:5.38rem;margin:auto;overflow:hidden}.Card2 .part ._28[data-v-338ca9fe]{margin-left:.24rem;margin-top:.28rem;font-size:.28rem;line-height:.28rem;text-align:left;color:#664243}.Card2 .part ._36[data-v-338ca9fe]{margin-left:.24rem;margin-top:.4rem;margin-bottom:.14rem;font-size:.36rem;line-height:.36rem;text-align:left;color:#664243}.Card2 .part ._24[data-v-338ca9fe]{margin-left:.14rem;font-size:.24rem;line-height:.24rem;text-align:left;color:#664243}.Card2 .part .logo_blue[data-v-338ca9fe]{width:.66rem;margin-top:.18rem}.Card2 .part .logo_red[data-v-338ca9fe]{width:.6rem;margin-top:.2rem}.Card2 .part[data-v-338ca9fe]:nth-child(3){height:.82rem;border-bottom:1px dotted #ebd1c5}.Card2 .part[data-v-338ca9fe]:nth-child(4){height:1.36rem;border-bottom:1px dotted #ebd1c5}.Card2 .part[data-v-338ca9fe]:nth-child(5){height:1.54rem}.Card2 .part .part_left[data-v-338ca9fe]{box-sizing:border-box;float:left;width:.77rem;height:100%;border-right:1px dotted #ebd1c5}.Card2 .part .part_middle[data-v-338ca9fe]{width:2.54rem;border-right:1px dotted #ebd1c5}.Card2 .part .part_middle[data-v-338ca9fe],.Card2 .part .part_right[data-v-338ca9fe]{box-sizing:border-box;float:left;height:100%}", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Card1[data-v-33a8d900]{position:relative;width:6.24rem;margin:auto}.Card1 .banner[data-v-33a8d900]{width:4.59rem;height:1.09rem;margin:auto;margin-bottom:.62rem;font-size:.32rem;line-height:1.09rem;text-align:center;color:#fff0e6}.Card1 .part[data-v-33a8d900]{width:5.38rem;margin:auto;overflow:hidden}.Card1 .part[data-v-33a8d900]:nth-child(3){margin-bottom:.4rem;border-bottom:1px dotted #ebd1c5}.Card1 .part .part_left[data-v-33a8d900]{float:left;width:3.24rem}.Card1 .part .top_title[data-v-33a8d900]{margin-left:.14rem;margin-bottom:.22rem;color:#664243;font-size:.28rem;line-height:.28rem;text-align:left}.Card1 .part .bottom_title[data-v-33a8d900]{margin-left:.14rem;margin-bottom:.46rem;font-size:.46rem;line-height:.46rem;text-align:left;color:#774445}", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ".Card0[data-v-33c50802]{position:relative;width:6.24rem;margin:auto}.Card0 .banner[data-v-33c50802]{width:4.59rem;height:1.09rem;margin:auto;margin-bottom:.48rem;font-size:.32rem;line-height:1.09rem;text-align:center;color:#fff0e6}.Card0 .part_left[data-v-33c50802]{float:left;width:2.7rem}.Card0 .part_left .logo_qq_reader[data-v-33c50802]{width:.88rem;margin-left:1.12rem}.Card0 .part_left .logo_mqq[data-v-33c50802]{width:.8rem;margin-left:1.16rem}.Card0 .part_right[data-v-33c50802]{float:left}.Card0 .part_right .title[data-v-33c50802]{margin-bottom:.22rem;font-size:.28rem;line-height:.38rem;color:#664243}.Card0 .part_qq_reader[data-v-33c50802]{margin-bottom:.22rem;overflow:hidden}.Card0 .part_qq_reader #qqReader[data-v-33c50802]{float:left;font-size:.46rem;line-height:.46rem;color:#774445}.Card0 .part_mqq[data-v-33c50802]{margin-bottom:.22rem;overflow:hidden}.Card0 .part_mqq #mqq[data-v-33c50802]{float:left;font-size:.46rem;line-height:.46rem;color:#774445}", ""]);

// exports


/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(95)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(80),
  /* scopeId */
  "data-v-33c50802",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(94)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(79),
  /* scopeId */
  "data-v-33a8d900",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(93)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(78),
  /* scopeId */
  "data-v-338ca9fe",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(92)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(77),
  /* scopeId */
  "data-v-33707afc",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(87)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(72),
  /* scopeId */
  "data-v-1891591d",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 70 */,
/* 71 */
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
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.page === 'ready'),
      expression: " page==='ready' "
    }],
    staticClass: "main",
    staticStyle: {
      "background": "url(img/red/bg.png)",
      "background-size": "100% 100%"
    }
  }, [_c('div', {
    staticClass: "time"
  }, _vm._l((_vm.times), function(a, i) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (i === _vm.current),
        expression: "i===current"
      }],
      staticClass: "number"
    }, [_vm._v(_vm._s(_vm.times[i]))])
  })), _c('swiper', {
    attrs: {
      "act": _vm.act,
      "img": _vm.img,
      "card-zero": _vm.card0,
      "card-one": _vm.card1,
      "card-two": _vm.card2,
      "card-three": _vm.card3
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Swiper__"
  }, [_c('div', {
    ref: "swiper",
    staticClass: "Swiper",
    on: {
      "touchstart": function($event) {
        _vm.touchstart($event)
      },
      "touchmove": function($event) {
        _vm.touchmove($event)
      },
      "touchend": function($event) {
        _vm.touchend($event)
      },
      "touchcancel": function($event) {
        _vm.touchend($event)
      }
    }
  }, [_c('ul', {
    staticClass: "train",
    class: _vm.carousel ? 'carousel' : '',
    style: ('transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);transition:' + _vm.transition + ';' +
      '-webkit-transform:translate3d(' + _vm.trainOffsetX + 'px,0,0);-webkit-transition:' + _vm.transition + ';')
  }, [(_vm.carousel) ? _c('li', {
    staticClass: "item",
    staticStyle: {
      "background": "url(img/scotches.png) no-repeat 0% 100%",
      "background-size": "2.4rem auto"
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[_vm.items.length - 2].name) + "\r\n\t\t\t")]) : _vm._e(), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    staticStyle: {
      "background": "url(img/scotches.png) no-repeat 0% 100%",
      "background-size": "2.4rem auto"
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[_vm.items.length - 1].name) + "\r\n\t\t\t")]) : _vm._e(), _vm._l((_vm.items), function(item, i) {
    return _c('li', {
      key: item.id,
      class: 'item ' + (i === _vm.currentOne ? 'active' : '')
    }, [_c('div', {
      staticClass: "shadow"
    }), _c('div', {
      staticClass: "content",
      staticStyle: {
        "background": "url(img/red/card_2.png) no-repeat center",
        "background-size": "auto 100%"
      }
    }, [(i === 0) ? _c('card0', {
      attrs: {
        "state": _vm.cardZero,
        "img": _vm.img
      }
    }) : _vm._e(), (i === 1) ? _c('card1', {
      attrs: {
        "state": _vm.cardOne,
        "img": _vm.img
      }
    }) : _vm._e(), (i === 2) ? _c('card2', {
      attrs: {
        "state": _vm.cardTwo,
        "img": _vm.img
      }
    }) : _vm._e(), (i === 3) ? _c('card3', {
      attrs: {
        "state": _vm.cardThree,
        "img": _vm.img
      }
    }) : _vm._e()], 1)])
  }), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    staticStyle: {
      "background": "url(img/scotches.png) no-repeat 0% 100%",
      "background-size": "2.4rem auto"
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[0].name) + "\r\n\t\t\t")]) : _vm._e(), (_vm.carousel) ? _c('li', {
    staticClass: "item",
    staticStyle: {
      "background": "url(img/scotches.png) no-repeat 0% 100%",
      "background-size": "2.4rem auto"
    }
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.items[1].name) + "\r\n\t\t\t")]) : _vm._e()], 2)]), _c('ul', {
    staticClass: "pagination"
  }, _vm._l((_vm.items), function(item, i) {
    return _c('li', {
      staticClass: "dot",
      class: 'item ' + (i === _vm.currentOne ? 'active' : ''),
      on: {
        "click": function($event) {
          _vm.toCard(i)
        }
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "CanvasCounter"
  }, [_c('canvas', {
    ref: "canvas",
    attrs: {
      "unselectable": "on",
      "width": "490",
      "height": "77"
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 76 */,
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Card3"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "1.96rem"
    }
  }), _c('div', {
    staticClass: "banner",
    staticStyle: {
      "background": "url(img/red/banner.png)",
      "background-size": "100% 100%"
    }
  }, [_vm._v("\n\t\tQQ阅读活动页行为\n\t")]), _c('div', {
    staticClass: "part"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("累计打开QQ阅读人数")]), _c('canvas-counter', {
    attrs: {
      "num": _vm.state.times_of_opening
    }
  })], 1), _c('div', {
    staticClass: "part"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("累计下载QQ阅读人数")]), _c('canvas-counter', {
    attrs: {
      "num": _vm.state.times_of_downloading
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Card2"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "1.96rem"
    }
  }), _c('div', {
    staticClass: "banner",
    staticStyle: {
      "background": "url(img/red/banner.png)",
      "background-size": "100% 100%"
    }
  }, [_vm._v("\n\t\t活动页面流量（UV）\n\t")]), _vm._m(0), _c('div', {
    staticClass: "part"
  }, [_c('div', {
    staticClass: "part_left"
  }, [_c('img', {
    staticClass: "logo_blue",
    attrs: {
      "src": _vm.img + '/red/logo_qq_reader.png'
    }
  })]), _vm._m(1), _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "_36"
  }, [_vm._v(_vm._s(_vm.state.qqReader.peak))]), _c('p', {
    staticClass: "_24"
  }, [_vm._v("(时间：" + _vm._s(_vm.state.qqReader.time) + ")")])])]), _c('div', {
    staticClass: "part"
  }, [_c('div', {
    staticClass: "part_left"
  }, [_c('img', {
    staticClass: "logo_red",
    attrs: {
      "src": _vm.img + '/red/logo_mqq.png'
    }
  })]), _vm._m(2), _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "_36"
  }, [_vm._v(_vm._s(_vm.state.mqq.peak))]), _c('p', {
    staticClass: "_24"
  }, [_vm._v("(时间：" + _vm._s(_vm.state.mqq.time) + ")")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part"
  }, [_c('div', {
    staticClass: "part_left"
  }), _c('div', {
    staticClass: "part_middle"
  }, [_c('p', {
    staticClass: "_28"
  }, [_vm._v("累计访问量")])]), _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "_28"
  }, [_vm._v("峰值")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_middle"
  }, [_c('p', {
    staticClass: "_36",
    attrs: {
      "id": "qq_reader_uv"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_middle"
  }, [_c('p', {
    staticClass: "_36",
    attrs: {
      "id": "qq_uv"
    }
  })])
}]}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Card1"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "1.96rem"
    }
  }), _c('div', {
    staticClass: "banner",
    staticStyle: {
      "background": "url(img/red/banner.png)",
      "background-size": "100% 100%"
    }
  }, [_vm._v("\n\t\tQQ阅读实时流量\n\t")]), _c('div', {
    staticClass: "part"
  }, [_vm._m(0), _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "top_title"
  }, [_vm._v("环比昨天涨幅")]), _c('p', {
    staticClass: "bottom_title"
  }, [_vm._v(_vm._s(_vm.state.ratio.toFixed(3)) + "%")])])]), _c('div', {
    staticClass: "part"
  }, [_vm._m(1), _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "top_title"
  }, [_vm._v("环比昨天涨幅")]), _c('p', {
    staticClass: "bottom_title"
  }, [_vm._v(_vm._s(_vm.state.ratio2.toFixed(3)) + "%")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_left"
  }, [_c('p', {
    staticClass: "top_title"
  }, [_vm._v("DAU")]), _c('p', {
    staticClass: "bottom_title",
    attrs: {
      "id": "DAU"
    }
  }, [_vm._v("0")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_left"
  }, [_c('p', {
    staticClass: "top_title"
  }, [_vm._v("新增用户")]), _c('p', {
    staticClass: "bottom_title",
    attrs: {
      "id": "total_growth"
    }
  }, [_vm._v("0")])])
}]}

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Card0"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "1.96rem"
    }
  }), _c('div', {
    staticClass: "banner",
    staticStyle: {
      "background": "url(img/red/banner.png)",
      "background-size": "100% 100%"
    }
  }, [_vm._v("\n\t\t红包总发放量\n\t")]), _c('canvas-counter', {
    attrs: {
      "num": _vm.state.total
    }
  }), _c('div', {
    staticClass: "part_qq_reader"
  }, [_c('div', {
    staticClass: "part_left"
  }, [_c('img', {
    staticClass: "logo_qq_reader",
    attrs: {
      "src": _vm.img + '/red/logo_qq_reader.png'
    }
  })]), _vm._m(0)]), _c('div', {
    staticClass: "part_mqq"
  }, [_c('div', {
    staticClass: "part_left"
  }, [_c('img', {
    staticClass: "logo_mqq",
    attrs: {
      "src": _vm.img + '/red/logo_mqq.png'
    }
  })]), _vm._m(1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("QQ阅读发放量")]), _c('p', {
    attrs: {
      "id": "qqReader"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "part_right"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("手Q阅读发放量")]), _c('p', {
    attrs: {
      "id": "mqq"
    }
  })])
}]}

/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("19588ade", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0f922082&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0f922082&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6ccb20e8", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1891591d&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Swiper.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1891591d&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Swiper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3e52b913", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2719a36f&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CanvasCounter.vue", function() {
     var newContent = require("!!./../../../../node_modules/css-loader/index.js?minimize!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2719a36f&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CanvasCounter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0c92bc9e", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?minimize!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-33707afc&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card3.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js?minimize!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-33707afc&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card3.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("05c042e0", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?minimize!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-338ca9fe&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card2.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js?minimize!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-338ca9fe&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card2.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2c12d407", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?minimize!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-33a8d900&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card1.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js?minimize!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-33a8d900&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card1.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("83488490", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?minimize!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-33c50802&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card0.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js?minimize!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-33c50802&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card0.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var root = new Vue({
	el: '#root',
	components: {
		App: __webpack_require__(17)
	},
	template: '<app></app>'
});

/***/ })
/******/ ]);