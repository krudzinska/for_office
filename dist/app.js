/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(13);

__webpack_require__(14);

$('.text').each(function () {
        var tekst = $(this).html();
        tekst = tekst.replace(/(\s)([\S])[\s]+/g, "$1$2&nbsp;"); //jednoznakowe
        tekst = tekst.replace(/(\s)([^<][\S]{1})[\s]+/g, "$1$2&nbsp;"); //dwuznakowe
        tekst = tekst.replace(/(\s)([^<][\S]{2})[\s]+/g, "$1$2&nbsp;");
        $(this).html(tekst);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(3);
exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nbody {\n  line-height: 1;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n  text-decoration: none;\n  cursor: pointer;\n}\n\ninput,\nselect {\n  vertical-align: middle;\n}\n\nbutton {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  font-weight: normal;\n  outline: 0;\n}\n\n.logo {\n  background-image: url(" + escape(__webpack_require__(5)) + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 85px;\n  min-width: 157px;\n  width: 180px;\n}\n\n@media (min-width: 768px) {\n  .logo {\n    background-position: left;\n    height: 10vh;\n    width: 157px;\n  }\n}\n\n.burger {\n  align-items: center;\n  background: white;\n  border: 1px solid #bbbbbb;\n  border-radius: 2px;\n  box-shadow: 0 0 5px #888888;\n  color: #33190a;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.4rem;\n  justify-content: center;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 10;\n  height: 40px;\n  width: 50px;\n}\n\n@media (min-width: 768px) {\n  .burger {\n    display: none;\n  }\n}\n\n.burger p {\n  border-bottom: 1px solid #33190a;\n  width: 30px;\n  height: 8px;\n}\n\n.header {\n  background: white;\n  color: #33190a;\n  display: flex;\n  min-height: 10%;\n  justify-content: space-between;\n  padding: 0 10px 0 0;\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .header {\n    height: 10vh;\n  }\n}\n\n.header .header_logo {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .header .header_logo {\n    justify-content: flex-start;\n  }\n}\n\n.header .header_logo p {\n  align-self: flex-end;\n  font-size: 1.1rem;\n  padding-left: 25px;\n  padding-bottom: 10px;\n}\n\n.header .header_logo p span {\n  font-weight: bold;\n}\n\n.header .header_nav {\n  background: #33190a;\n  height: 100vh;\n  min-width: 150px;\n  padding: 50px 0 50px 0;\n  position: fixed;\n  right: -200px;\n  top: 0;\n  width: 200px;\n  z-index: 2;\n}\n\n@media (min-width: 768px) {\n  .header .header_nav {\n    background: white;\n    display: flex;\n    flex-direction: row;\n    height: auto;\n    padding: 15px 0 0 0;\n    right: 0;\n    width: auto;\n  }\n}\n\n.header .header_nav ul {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n}\n\n@media (min-width: 768px) {\n  .header .header_nav ul {\n    flex-direction: row;\n  }\n}\n\n.header .header_nav ul button {\n  color: #c6b37d;\n  font-size: 1.2rem;\n  margin: 30px 0 0 0;\n}\n\n@media (min-width: 768px) {\n  .header .header_nav ul button {\n    margin: 0 0 0 10px;\n  }\n\n  .header .header_nav ul button:hover {\n    color: #33190a;\n    cursor: pointer;\n  }\n}\n\n.header .header_nav ul button.active {\n  color: #1e0f06;\n}\n\n.gallery {\n  background: #33190a;\n  height: 50vh;\n  min-height: 35vh;\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .gallery {\n    height: 35vh;\n  }\n}\n\n.gallery .gallerry_pic {\n  background-image: url(" + escape(__webpack_require__(6)) + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.main {\n  align-items: center;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  min-height: 52vh;\n  justify-content: flex-start;\n  overflow-y: auto;\n  padding: 25px 25px 5px 25px;\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .main {\n    height: 52vh;\n  }\n}\n\n.main article {\n  max-width: 1050px;\n  width: 100%;\n}\n\n.main h2 {\n  color: #33190a;\n  font-size: 1.4rem;\n  letter-spacing: 3px;\n  padding-bottom: 20px;\n}\n\n.main h3 {\n  font-size: 1.2rem;\n}\n\n.main p {\n  border-left: 4px solid #33190a;\n  color: #333;\n  font-size: 1.2rem;\n  line-height: 1.6rem;\n  padding: 5px 0 0 20px;\n  text-align: justify;\n  width: 100%;\n}\n\n.team_gallery {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.team_gallery li {\n  height: 280px;\n  margin-bottom: 10px;\n  min-width: 200px;\n  position: relative;\n  width: 100%;\n}\n\n.team_gallery li.team_info {\n  flex-grow: 1;\n  height: auto;\n}\n\n.team_gallery li.team_info p {\n  font-size: 1.1rem;\n}\n\n.team_gallery li:first-child {\n  background-image: url(" + escape(__webpack_require__(7)) + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.team_gallery li:nth-child(3) {\n  background-image: url(" + escape(__webpack_require__(8)) + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.team_gallery li:nth-child(5) {\n  background-image: url(" + escape(__webpack_require__(9)) + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.team_gallery li .team_gallery_label {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 0;\n  bottom: 25px;\n  display: block;\n  left: 0;\n  line-height: 55px;\n  min-height: 55px;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  z-index: 2;\n}\n\n@media (min-width: 768px) {\n  .team_gallery li .team_gallery_label {\n    display: none;\n  }\n}\n\n@media (min-width: 768px) {\n  .team_gallery li {\n    margin-right: 8px;\n    width: calc(20% - 8px);\n  }\n}\n\n.contact ul {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.contact ul li {\n  margin: 20px;\n}\n\n.contact ul h3 {\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n}\n\n.footer {\n  align-items: center;\n  background: #33190a;\n  color: #e5dcc4;\n  display: flex;\n  font-size: 0.9rem;\n  flex-direction: column;\n  min-height: 3%;\n  justify-content: space-between;\n  padding: 5px 10px 5px 10px;\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .footer {\n    flex-direction: row;\n    font-size: 0.6rem;\n    height: 3vh;\n  }\n}\n\n.footer .footer_contact {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 10px;\n  order: 1;\n}\n\n.footer .footer_contact p {\n  padding: 5px 15px 5px 0;\n}\n\n.footer .footer_contact a {\n  color: #e5dcc4;\n  padding: 5px 0 5px 0;\n}\n\n@media (min-width: 768px) {\n  .footer .footer_contact {\n    font-size: 0.7rem;\n    margin-bottom: 0;\n    order: 2;\n  }\n}\n\n.footer .footer_logo {\n  background-image: url(" + escape(__webpack_require__(10)) + ");\n  background-position: right;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 30px;\n  margin-bottom: 10px;\n  order: 2;\n  width: 100px;\n}\n\n@media (min-width: 768px) {\n  .footer .footer_logo {\n    background-size: contain;\n    height: 3vh;\n    order: 3;\n    margin-bottom: 0;\n    width: 50px;\n  }\n}\n\n.footer .copyright {\n  font-size: 0.6rem;\n  order: 3;\n}\n\n@media (min-width: 768px) {\n  .footer .copyright {\n    order: 1;\n  }\n}\n\n.app {\n  font-family: 'Lato', sans-serif;\n  min-height: 100vh;\n  width: 100vw;\n}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8a995b5c8cdd6f61920c892523e91013.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "574f7fa5042a9946ed5f40c380f4b5d1.jpg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9f9f3a8f29b35b3aca31a0545da279a6.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "907e1a3a75b280f922d807d2b4af1e77.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8ee733153851837aaa1c49c3b4a18057.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8595a388849696a1705cab4fa8118eef.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var burger = document.querySelector('.burger');
var nav = document.querySelector('.header_nav');

var showMenu = function showMenu() {
    nav.classList.toggle('show');

    if (burger.innerHTML === "<p></p><p></p><p></p>") {
        burger.innerHTML = 'X';
    } else {
        burger.innerHTML = '<p></p><p></p><p></p>';
    }
};

burger.addEventListener("click", showMenu);

var $nav = $('.header_nav');
$('.burger').click(function () {
    if ($nav.hasClass('show')) {
        $nav.animate({
            right: 0
        });
    } else {
        $nav.animate({
            right: -200
        });
    }
});

$('article').hide();
$('article.active').show();

$('#profil_btn').click(function () {
    $('article.active').removeClass('active').hide();
    $('button.active').removeClass('active');
    $('#profil_btn').addClass('active');
    $('#profil').addClass('active').fadeIn(1500);
});

$('#team_btn').click(function () {
    $('article.active').removeClass('active').hide();
    $('button.active').removeClass('active');
    $('#team_btn').addClass('active');
    $('#team').addClass('active').fadeIn(1500);
});

$('#offer_btn').click(function () {
    $('article.active').removeClass('active').hide();
    $('button.active').removeClass('active');
    $('#offer_btn').addClass('active');
    $('#offer').addClass('active').fadeIn(1500);
});

$('#blog_btn').click(function () {
    $('article.active').removeClass('active').hide();
    $('button.active').removeClass('active');
    $('#blog_btn').addClass('active');
    $('#blog').addClass('active').fadeIn(1500);
});

$('#contact_btn').click(function () {
    $('article.active').removeClass('active').hide();
    $('button.active').removeClass('active');
    $('#contact_btn').addClass('active');
    $('#contact').addClass('active').fadeIn(1500);
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$('#team_gallery li').mouseenter(function () {
    $(this).children('.team_gallery_label').fadeIn();
});

$('#team_gallery li').mouseleave(function () {
    $(this).children('.team_gallery_label').fadeOut();
});

$('.team_info').hide();
$('#team_info1').fadeIn();

$('#team_member1').click(function () {
    $('.team_info').hide();
    $('#team_info1').slideDown(700);
});

$('#team_member2').click(function () {
    $('.team_info').hide();
    $('#team_info2').slideDown(700);
});

$('#team_member3').click(function () {
    $('.team_info').hide();
    $('#team_info3').slideDown(700);
});

/***/ })
/******/ ]);