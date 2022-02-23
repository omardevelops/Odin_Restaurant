/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! steak.jpg */ "./src/steak.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0;\r\n    font-family: sans-serif;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: repeat;\r\n    background-size: cover;\r\n    background-position-y: top;\r\n    background-position-x: center;\r\n    height: 100vh;\r\n}\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nnav {\r\n    display: flex;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    padding: 15px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    margin: 0;\r\n    color: white;\r\n}\r\n\r\nnav h1 {\r\n    font-size: 3.5em;\r\n    line-height: 1;\r\n    margin: 30px 0;\r\n}\r\n\r\nnav ul, #pageContent #menu ul {\r\n    list-style-type: none;\r\n    display: flex;\r\n    gap: 60px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0;\r\n    margin: 0;\r\n    flex-wrap: wrap;\r\n    padding: 0 50px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nul button {\r\n    font-size: 2em;\r\n    padding: 15px;\r\n    border-radius: 30px;\r\n    background: none;\r\n    border: none;\r\n    color: white;\r\n    font-family: inherit;\r\n}\r\n\r\nul button:hover, .currentCategory {\r\n    background-color: rgb(255, 255, 255);\r\n    color: black;\r\n}\r\n\r\n.currentPage, .currentPage:hover {\r\n    background-color: rgb(179, 76, 76);\r\n    color: white;\r\n}\r\n\r\n a:visited, a {\r\n     color: inherit;\r\n     text-decoration: none;\r\n }\r\n\r\n#pageContent {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#pageContent #home, #pageContent #menu, #pageContent #contact {\r\n    font-size: 42px;\r\n    font-weight: 600;\r\n    color: white;\r\n    text-align: center;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    padding: 30px 15px;\r\n    border-radius: 30px;\r\n    margin: 5vw;\r\n}\r\n\r\n#pageContent #home {\r\n    width: max(40vw, 40vh);\r\n}\r\n\r\n#pageContent #home button {\r\n    width: fit-content;\r\n    font:inherit;\r\n    padding: 10px 30px;\r\n    background: none;\r\n    color: inherit;\r\n    border: 2px solid white;\r\n    transition: 0.2s;\r\n    border-radius: 15px;\r\n}\r\n\r\n#pageContent #home button:hover {\r\n    background: white;\r\n    color: black;\r\n    transition: 0.2s;\r\n}\r\n\r\n#pageContent #menu, #pageContent #contact {\r\n    width: max(80vw, 80vh);\r\n}\r\n\r\n#pageContent #menu h1, #contact h1 {\r\n    font-size: inherit;\r\n}\r\n\r\n#pageContent #menu ul {\r\n    font-size: 12px;\r\n    gap: 15px;\r\n}\r\n\r\n#pageContent #menu ul li button{\r\n    border: 2px solid white;\r\n}\r\n\r\n#pageContent #menu div {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n}\r\n\r\n.menuItem {\r\n    font-size: 24px;\r\n    padding: 15px;\r\n    background: whitesmoke;\r\n    border-radius: 15px;\r\n    width: 250px;\r\n    height: 500px;\r\n    color: black;\r\n    transition: 0.3s;\r\n}\r\n\r\n.menuItem:hover {\r\n    background: rgb(179, 76, 76);\r\n    color: white;\r\n    transition: 0.3s;\r\n}\r\n\r\n#contact #subcontainer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 25px;\r\n    flex-wrap: wrap;\r\n    gap: 50px;\r\n}\r\n\r\n#contact #subcontainer #left {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    width: 40%;\r\n}\r\n#contact #subcontainer #left .leftDiv {\r\n    background: white;\r\n    color: black;\r\n    border-radius: 15px;\r\n    width: 100%;\r\n    padding: 15px;\r\n}\r\n#contact #subcontainer #left p {\r\n    font-size: 32px;\r\n}\r\n#contact #subcontainer #socialSub img {\r\n    width: 64px;\r\n    height: 64px;\r\n    margin: 15px;\r\n}\r\n#contact #subcontainer #socialSub img:hover {\r\n    filter: contrast(0.3);\r\n}   \r\n\r\nfooter {\r\n    background: rgba(0, 0, 0, 0.8);\r\n    color: white;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,uBAAuB;IACvB,yDAAkC;IAClC,yBAAyB;IACzB,sBAAsB;IACtB,0BAA0B;IAC1B,6BAA6B;IAC7B,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,WAAW;IACX,YAAY;AAChB;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,SAAS;IACT,eAAe;IACf,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;IACpC,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;CAEC;KACI,cAAc;KACd,qBAAqB;CACzB;;AAED;IACI,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,SAAS;AACb;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,UAAU;AACd;AACA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,aAAa;AACjB;AACA;IACI,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,kBAAkB;IAClB,cAAc;AAClB","sourcesContent":["body {\r\n    margin: 0;\r\n    font-family: sans-serif;\r\n    background-image: url('steak.jpg');\r\n    background-repeat: repeat;\r\n    background-size: cover;\r\n    background-position-y: top;\r\n    background-position-x: center;\r\n    height: 100vh;\r\n}\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nnav {\r\n    display: flex;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    padding: 15px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    margin: 0;\r\n    color: white;\r\n}\r\n\r\nnav h1 {\r\n    font-size: 3.5em;\r\n    line-height: 1;\r\n    margin: 30px 0;\r\n}\r\n\r\nnav ul, #pageContent #menu ul {\r\n    list-style-type: none;\r\n    display: flex;\r\n    gap: 60px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0;\r\n    margin: 0;\r\n    flex-wrap: wrap;\r\n    padding: 0 50px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\nul button {\r\n    font-size: 2em;\r\n    padding: 15px;\r\n    border-radius: 30px;\r\n    background: none;\r\n    border: none;\r\n    color: white;\r\n    font-family: inherit;\r\n}\r\n\r\nul button:hover, .currentCategory {\r\n    background-color: rgb(255, 255, 255);\r\n    color: black;\r\n}\r\n\r\n.currentPage, .currentPage:hover {\r\n    background-color: rgb(179, 76, 76);\r\n    color: white;\r\n}\r\n\r\n a:visited, a {\r\n     color: inherit;\r\n     text-decoration: none;\r\n }\r\n\r\n#pageContent {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#pageContent #home, #pageContent #menu, #pageContent #contact {\r\n    font-size: 42px;\r\n    font-weight: 600;\r\n    color: white;\r\n    text-align: center;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    padding: 30px 15px;\r\n    border-radius: 30px;\r\n    margin: 5vw;\r\n}\r\n\r\n#pageContent #home {\r\n    width: max(40vw, 40vh);\r\n}\r\n\r\n#pageContent #home button {\r\n    width: fit-content;\r\n    font:inherit;\r\n    padding: 10px 30px;\r\n    background: none;\r\n    color: inherit;\r\n    border: 2px solid white;\r\n    transition: 0.2s;\r\n    border-radius: 15px;\r\n}\r\n\r\n#pageContent #home button:hover {\r\n    background: white;\r\n    color: black;\r\n    transition: 0.2s;\r\n}\r\n\r\n#pageContent #menu, #pageContent #contact {\r\n    width: max(80vw, 80vh);\r\n}\r\n\r\n#pageContent #menu h1, #contact h1 {\r\n    font-size: inherit;\r\n}\r\n\r\n#pageContent #menu ul {\r\n    font-size: 12px;\r\n    gap: 15px;\r\n}\r\n\r\n#pageContent #menu ul li button{\r\n    border: 2px solid white;\r\n}\r\n\r\n#pageContent #menu div {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n}\r\n\r\n.menuItem {\r\n    font-size: 24px;\r\n    padding: 15px;\r\n    background: whitesmoke;\r\n    border-radius: 15px;\r\n    width: 250px;\r\n    height: 500px;\r\n    color: black;\r\n    transition: 0.3s;\r\n}\r\n\r\n.menuItem:hover {\r\n    background: rgb(179, 76, 76);\r\n    color: white;\r\n    transition: 0.3s;\r\n}\r\n\r\n#contact #subcontainer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 25px;\r\n    flex-wrap: wrap;\r\n    gap: 50px;\r\n}\r\n\r\n#contact #subcontainer #left {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    width: 40%;\r\n}\r\n#contact #subcontainer #left .leftDiv {\r\n    background: white;\r\n    color: black;\r\n    border-radius: 15px;\r\n    width: 100%;\r\n    padding: 15px;\r\n}\r\n#contact #subcontainer #left p {\r\n    font-size: 32px;\r\n}\r\n#contact #subcontainer #socialSub img {\r\n    width: 64px;\r\n    height: 64px;\r\n    margin: 15px;\r\n}\r\n#contact #subcontainer #socialSub img:hover {\r\n    filter: contrast(0.3);\r\n}   \r\n\r\nfooter {\r\n    background: rgba(0, 0, 0, 0.8);\r\n    color: white;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.png */ "./src/map.png");
/* harmony import */ var _github_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github.svg */ "./src/github.svg");
/* harmony import */ var _twitter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./twitter.svg */ "./src/twitter.svg");
/* harmony import */ var _instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instagram.svg */ "./src/instagram.svg");






const loadContactPage = () => {
    // Create main container
    const container = document.createElement('div');
    container.id = 'contact';
    // Create menu h1
    const menuTextHeader = document.createElement('h1');
    menuTextHeader.textContent = 'Contact Us!';
    // Create subcontainer
    const subcontainer = document.createElement('div');
    subcontainer.id = 'subcontainer';
    // Create left container
    const leftContainer = document.createElement('div');
    leftContainer.id = 'left';
    // Create left divs
    let leftDivs = [];
    for (let i = 0; i < 3; i++) {
        const leftDiv = document.createElement('div');
        leftDiv.classList.add('leftDiv');
        leftDivs.push(leftDiv);
    }
    // Address Div
    const addressDiv = leftDivs[0];
    const addressText = document.createElement('p');
    addressText.innerText = 'Address: Somewhere in Texas...?';
    addressDiv.appendChild(addressText);
    leftContainer.appendChild(addressDiv);

    // Email Div
    const emailDiv = leftDivs[1];
    const emailText = document.createElement('p');
    emailText.innerText = 'E-mail: steak4all@steak.steak';
    emailDiv.appendChild(emailText);
    leftContainer.appendChild(emailDiv);

    // Social Media Div
    const socialDiv = leftDivs[2];
    const socialText = document.createElement('p');
    socialText.innerText = 'Social Media';
    socialDiv.appendChild(socialText);
    leftContainer.appendChild(socialDiv);
    // Social Media Buttons
    const github = new Image();
    github.src = _github_svg__WEBPACK_IMPORTED_MODULE_2__;
    github.id = 'githubIcon';
    const instagram = new Image();
    instagram.src = _instagram_svg__WEBPACK_IMPORTED_MODULE_4__;
    instagram.id = 'instagramIcon';
    const twitter = new Image();
    twitter.src = _twitter_svg__WEBPACK_IMPORTED_MODULE_3__;
    twitter.id = 'twitterIcon';
    const socialSubDiv = document.createElement('div');
    socialSubDiv.id = 'socialSub';
    const socialButtons = [github, instagram, twitter];
    for (const button of socialButtons) {
        socialSubDiv.appendChild(button);
        button.addEventListener('click', () => {
            if (button.id === 'githubIcon') {
                window.open('http://github.com/omarpixel9', '_blank');
            } else if (button.id === 'instagramIcon') {
                window.open('http://instagram.com/omarpixel9', '_blank');
            } else {
                window.open('http://twitter.com/omarpixel9', '_blank');
            }
        });
    }
    socialDiv.appendChild(socialSubDiv);
    
    // Create right container
    const rightContainer = document.createElement('div');
    rightContainer.id = 'right';
    const map = new Image();
    map.src = _map_png__WEBPACK_IMPORTED_MODULE_1__;
    rightContainer.appendChild(map);
    subcontainer.appendChild(leftContainer);
    subcontainer.appendChild(rightContainer);
    container.appendChild(menuTextHeader);
    container.appendChild(subcontainer);

    _index__WEBPACK_IMPORTED_MODULE_0__.pageContentDiv.appendChild(container);
        
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




const loadHomePage = () => {
    const homeTopDiv = document.createElement('div');
    const homeText = document.createElement('p');
    const showMenuButton = document.createElement('button');

    homeText.innerText = 'Delicious Steak Available!';
    showMenuButton.innerText = 'Show Menu';
    showMenuButton.addEventListener('click', () => {
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.clearPageContent)();
        const menuButton = document.getElementById('MenuButton');
        menuButton.classList.add('currentPage');
        const homeButton = document.getElementById('HomeButton');
        homeButton.classList.remove('currentPage');
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
    homeTopDiv.id = 'home';

    homeTopDiv.appendChild(homeText);
    homeTopDiv.appendChild(showMenuButton);
    _index__WEBPACK_IMPORTED_MODULE_0__.pageContentDiv.appendChild(homeTopDiv);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearPageContent": () => (/* binding */ clearPageContent),
/* harmony export */   "pageContentDiv": () => (/* binding */ pageContentDiv),
/* harmony export */   "switchTab": () => (/* binding */ switchTab)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _steak_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./steak.jpg */ "./src/steak.jpg");
/* harmony import */ var _initial_build__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial_build */ "./src/initial_build.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







(0,_initial_build__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Build initial page
const pageContentDiv = document.getElementById('pageContent');
(0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Build First Page Content

const clearPageContent = () => {
    const divChildren = Array.from(pageContentDiv.childNodes);
    divChildren.forEach(div => pageContentDiv.removeChild(div));
};
const switchTab = (newTab) => {
    const navButtons = Array.from(document.getElementsByClassName('navButton'));
    navButtons.forEach(button => button.classList.remove('currentPage'));
    newTab.classList.add('currentPage');
};

const addEventListenersToButtons = () => {
    const navButtons = Array.from(document.getElementsByClassName('navButton'));
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            clearPageContent();
            switchTab(button);
        });
        if (index === 0) {
            button.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_3__["default"]);
        } else if (index === 1) {
            button.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_4__["default"]);
        } else {
            button.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_5__["default"]);
        }
    });
};

addEventListenersToButtons();



/***/ }),

/***/ "./src/initial_build.js":
/*!******************************!*\
  !*** ./src/initial_build.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


// This file is for the initial build of the website only
const initialBuildWebpage = () => {
    const contentDiv = document.getElementById('content');
    
    // Create Nav
    const nav = document.createElement('nav');
    const logoHeader = document.createElement('h1');
    logoHeader.innerText = 'Steak 4 All';
    const navUl = document.createElement('ul');
    const tabs = ['Home', 'Menu', 'Contact'];

    tabs.forEach((tab, index) => {
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = tab;
        button.id = tab + 'Button';
        button.classList.add('navButton');
        // Set Home As Current Page
        if (index === 0) button.classList.add('currentPage');
        listItem.appendChild(button);
        navUl.appendChild(listItem);
    });
    nav.appendChild(logoHeader);
    nav.appendChild(navUl);
    contentDiv.appendChild(nav);

    // Add Placeholder for Individual Page Content
    const pageContentDiv = document.createElement('div');
    pageContentDiv.id = 'pageContent';
    contentDiv.appendChild(pageContentDiv);

    // Add Footer
    const footer = document.createElement('footer');
    contentDiv.appendChild(footer);
    footer.textContent = 'Copyright 2022 - Omarpixel9';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialBuildWebpage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _model_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model_menu */ "./src/model_menu.js");


const categories = ['All', 'Steak', 'Ribs', 'Pizza', 'Drinks', 'Dessert'];

const updateMenuToContainerView = (category) => {
    let newMenu = _model_menu__WEBPACK_IMPORTED_MODULE_1__["default"].filter(item => item.category === category);
    if (newMenu.length === 0)
        newMenu = _model_menu__WEBPACK_IMPORTED_MODULE_1__["default"];
    newMenu.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menuItem');
        menuItemDiv.id = item;

        const menuImage = new Image();
        menuImage.src = item.image;

        const menuItemName = document.createElement('h2');
        menuItemName.textContent = item.name;

        menuItemDiv.appendChild(menuImage);
        menuItemDiv.appendChild(menuItemName);
        menuContainer.appendChild(menuItemDiv);
    });

};

const loadCategory = (category) => {
    const categoryButtonsList = Array.from(document.getElementsByClassName('menuCategory'));
    const categoryButton = document.getElementById(category + 'Category');
    const menuContainer = document.getElementById('menuContainer');
    // Clear current category
    categoryButtonsList.forEach(button => button.classList.remove('currentCategory'));
    // Set new current category
    categoryButton.classList.add('currentCategory');

    // Clear Menu Container
    const menuItemDivs = Array.from(document.getElementsByClassName('menuItem'));
    menuItemDivs.forEach(div => menuContainer.removeChild(div));

    // Add Relevant Category Items
    updateMenuToContainerView(category);
};

const loadMenuPage = () => {
    // Create main container
    const container = document.createElement('div');
    container.id = 'menu';
    // Create menu h1
    const menuTextHeader = document.createElement('h1');
    menuTextHeader.textContent = 'Menu - Steak & More';

    // Create categories list
    const categoriesUl = document.createElement('ul');
    categoriesUl.id = 'categories';
    categories.forEach((category, index) => {
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = category;
        button.classList.add('menuCategory');
        button.id = category + 'Category';
        // Set Home As Current Page
        if (index === 0) button.classList.add('currentCategory');
        button.addEventListener('click', () => {
            loadCategory(category);
        })
        listItem.appendChild(button);
        categoriesUl.appendChild(listItem);
    });

    // Create menu container with items
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuContainer';
    _model_menu__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menuItem');
        menuItemDiv.id = item;

        const menuImage = new Image();
        menuImage.src = item.image;

        const menuItemName = document.createElement('h2');
        menuItemName.textContent = item.name;

        menuItemDiv.appendChild(menuImage);
        menuItemDiv.appendChild(menuItemName);
        menuContainer.appendChild(menuItemDiv);
    });

    container.appendChild(menuTextHeader);
    container.appendChild(categoriesUl);
    container.appendChild(menuContainer);

    _index__WEBPACK_IMPORTED_MODULE_0__.pageContentDiv.appendChild(container);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);

/***/ }),

/***/ "./src/model_menu.js":
/*!***************************!*\
  !*** ./src/model_menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _steak_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./steak.svg */ "./src/steak.svg");
/* harmony import */ var _ribs_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ribs.svg */ "./src/ribs.svg");
/* harmony import */ var _pizza_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pizza.svg */ "./src/pizza.svg");
/* harmony import */ var _drink_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drink.svg */ "./src/drink.svg");
/* harmony import */ var _dessert_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dessert.svg */ "./src/dessert.svg");






const menu = [{
        category: 'Steak',
        name: 'New York Style Strip',
        image: _steak_svg__WEBPACK_IMPORTED_MODULE_0__,
        description: 'The strip steak is a cut of beef steaks from the short loin from a cow.'
    },
    {
        category: 'Steak',
        name: 'Sirloin Steak',
        image: _steak_svg__WEBPACK_IMPORTED_MODULE_0__,
        description: 'The sirloin steak is cut from the sirloin, the subprimal posterior to the short loin where the T-bone, porterhouse, and club steaks are cut.'
    },
    {
        category: 'Steak',
        name: 'Tenderloin Steak',
        image: _steak_svg__WEBPACK_IMPORTED_MODULE_0__,
        description: 'Filet mignon is a cut of meat taken from the smaller end of the tenderloin, or psoas major of an animal carcass. In French, it mostly refers to cuts of pork tenderloin. The tenderloin runs along both sides of the spine, and is usually butchered as two long snake-shaped cuts of meat.'
    },
    {
        category: 'Steak',
        name: 'Porterhouse Steak',
        image: _steak_svg__WEBPACK_IMPORTED_MODULE_0__,
        description: 'The T-bone and porterhouse are steaks of beef cut from the short loin. Both steaks include a "T"-shaped lumbar vertebra with sections of abdominal internal oblique muscle on each side. Porterhouse steaks are cut from the rear end of the short loin and thus include more tenderloin steak, along with a large strip steak.'
    },
    {
        category: 'Steak',
        name: 'Hanger Steak',
        image: _steak_svg__WEBPACK_IMPORTED_MODULE_0__,
        description: `A hanger steak, also known as butcher's steak or hanging tenderloin, is a cut of beef steak prized for its flavor. This cut is taken from the plate, which is the upper belly of the animal. In the past it was among several cuts of beef sometimes known as "butcher's steak", because butchers would often keep it for themselves rather than offer it for sale. This is because the general populace believed this to be a crude cut of meat, although it is actually one of the most tender.`
    },
    {
        category: 'Ribs',
        name: 'Baby Back Ribs',
        image: _ribs_svg__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
        category: 'Ribs',
        name: 'St. Louis Style Ribs',
        image: _ribs_svg__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
        category: 'Ribs',
        name: 'Short Ribs',
        image: _ribs_svg__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
        category: 'Ribs',
        name: 'Country-Style Ribs',
        image: _ribs_svg__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
        category: 'Pizza',
        name: 'Pepperoni Pizza',
        image: _pizza_svg__WEBPACK_IMPORTED_MODULE_2__,
    },
    {
        category: 'Pizza',
        name: 'Margharita Pizza',
        image: _pizza_svg__WEBPACK_IMPORTED_MODULE_2__,
    },
    {
        category: 'Pizza',
        name: 'Super Duper Meats Pizza',
        image: _pizza_svg__WEBPACK_IMPORTED_MODULE_2__,
    },
    {
        category: 'Pizza',
        name: 'Vegan Pizza',
        image: _pizza_svg__WEBPACK_IMPORTED_MODULE_2__,
    },
    {
        category: 'Pizza',
        name: 'Grilled Chicken Pizza',
        image: _pizza_svg__WEBPACK_IMPORTED_MODULE_2__,
    },
    {
        category: 'Drinks',
        name: 'Orange Juice',
        image: _drink_svg__WEBPACK_IMPORTED_MODULE_3__,
    },
    {
        category: 'Drinks',
        name: 'Apple Juice',
        image: _drink_svg__WEBPACK_IMPORTED_MODULE_3__,
    },
    {
        category: 'Drinks',
        name: 'Pineapple Mojito',
        image: _drink_svg__WEBPACK_IMPORTED_MODULE_3__,
    },
    {
        category: 'Drinks',
        name: 'Blueberry Candy',
        image: _drink_svg__WEBPACK_IMPORTED_MODULE_3__,
    },
    {
        category: 'Dessert',
        name: 'Hot Lava Cake',
        image: _dessert_svg__WEBPACK_IMPORTED_MODULE_4__,
    },
    {
        category: 'Dessert',
        name: 'Ice Cream',
        image: _dessert_svg__WEBPACK_IMPORTED_MODULE_4__,
    },
    {
        category: 'Dessert',
        name: 'Kunafa',
        image: _dessert_svg__WEBPACK_IMPORTED_MODULE_4__,
    },
    {
        category: 'Dessert',
        name: 'Um-Ali',
        image: _dessert_svg__WEBPACK_IMPORTED_MODULE_4__,
    },
    {
        category: 'Dessert',
        name: 'Nutella Crepe',
        image: _dessert_svg__WEBPACK_IMPORTED_MODULE_4__,
    },
    {
        category: 'Dessert',
        name: 'Chocolate Chip Pie',
        image: _dessert_svg__WEBPACK_IMPORTED_MODULE_4__,
    },

];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/dessert.svg":
/*!*************************!*\
  !*** ./src/dessert.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f15c519b11b40135ce2d.svg";

/***/ }),

/***/ "./src/drink.svg":
/*!***********************!*\
  !*** ./src/drink.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61c16d5f2f9f6db46612.svg";

/***/ }),

/***/ "./src/github.svg":
/*!************************!*\
  !*** ./src/github.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ea7d9bcdf7bb4836e21.svg";

/***/ }),

/***/ "./src/instagram.svg":
/*!***************************!*\
  !*** ./src/instagram.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53cded02bdb5aafdbb7e.svg";

/***/ }),

/***/ "./src/map.png":
/*!*********************!*\
  !*** ./src/map.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "229d20ba4b42dffe3c07.png";

/***/ }),

/***/ "./src/pizza.svg":
/*!***********************!*\
  !*** ./src/pizza.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00265fa5b49a8b755e58.svg";

/***/ }),

/***/ "./src/ribs.svg":
/*!**********************!*\
  !*** ./src/ribs.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a3ddf7c1322f3a1bb30.svg";

/***/ }),

/***/ "./src/steak.jpg":
/*!***********************!*\
  !*** ./src/steak.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3bb04ed876ec1dee065.jpg";

/***/ }),

/***/ "./src/steak.svg":
/*!***********************!*\
  !*** ./src/steak.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28becaae33ccd7e5059f.svg";

/***/ }),

/***/ "./src/twitter.svg":
/*!*************************!*\
  !*** ./src/twitter.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66fb7c01cdf5503e17d2.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQ0FBUTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQ0FBUTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQ0FBUTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQ0FBUTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBUztBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBUztBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBUztBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBUztBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBUztBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBUztBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBUztBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBUztBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1Q0FBUztBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5Q0FBVztBQUMxQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5Q0FBVztBQUMxQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5Q0FBVztBQUMxQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5Q0FBVztBQUMxQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5Q0FBVztBQUMxQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5Q0FBVztBQUMxQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RJbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUFJPSkVDVF9SZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9QUk9KRUNUX1Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1BST0pFQ1RfUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vUFJPSkVDVF9SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vUFJPSkVDVF9SZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL1BST0pFQ1RfUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9QUk9KRUNUX1Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1BST0pFQ1RfUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9QUk9KRUNUX1Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vUFJPSkVDVF9SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vUFJPSkVDVF9SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vUFJPSkVDVF9SZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vUFJPSkVDVF9SZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vUFJPSkVDVF9SZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL1BST0pFQ1RfUmVzdGF1cmFudC8uL3NyYy9pbml0aWFsX2J1aWxkLmpzIiwid2VicGFjazovL1BST0pFQ1RfUmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL1BST0pFQ1RfUmVzdGF1cmFudC8uL3NyYy9tb2RlbF9tZW51LmpzIiwid2VicGFjazovL1BST0pFQ1RfUmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9QUk9KRUNUX1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vUFJPSkVDVF9SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9QUk9KRUNUX1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9QUk9KRUNUX1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9QUk9KRUNUX1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9QUk9KRUNUX1Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vUFJPSkVDVF9SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL1BST0pFQ1RfUmVzdGF1cmFudC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL1BST0pFQ1RfUmVzdGF1cmFudC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vUFJPSkVDVF9SZXN0YXVyYW50L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwic3RlYWsuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogdG9wO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbm5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjVlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIG1hcmdpbjogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwsICNwYWdlQ29udGVudCAjbWVudSB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA2MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHBhZGRpbmc6IDAgNTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxudWwgYnV0dG9uOmhvdmVyLCAuY3VycmVudENhdGVnb3J5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50UGFnZSwgLmN1cnJlbnRQYWdlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgNzYsIDc2KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4gYTp2aXNpdGVkLCBhIHtcXHJcXG4gICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiB9XFxyXFxuXFxyXFxuI3BhZ2VDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFnZUNvbnRlbnQgI2hvbWUsICNwYWdlQ29udGVudCAjbWVudSwgI3BhZ2VDb250ZW50ICNjb250YWN0IHtcXHJcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIG1hcmdpbjogNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4jcGFnZUNvbnRlbnQgI2hvbWUge1xcclxcbiAgICB3aWR0aDogbWF4KDQwdncsIDQwdmgpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFnZUNvbnRlbnQgI2hvbWUgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBmb250OmluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGFnZUNvbnRlbnQgI2hvbWUgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuI3BhZ2VDb250ZW50ICNtZW51LCAjcGFnZUNvbnRlbnQgI2NvbnRhY3Qge1xcclxcbiAgICB3aWR0aDogbWF4KDgwdncsIDgwdmgpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFnZUNvbnRlbnQgI21lbnUgaDEsICNjb250YWN0IGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4jcGFnZUNvbnRlbnQgI21lbnUgdWwge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BhZ2VDb250ZW50ICNtZW51IHVsIGxpIGJ1dHRvbntcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNwYWdlQ29udGVudCAjbWVudSBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigxNzksIDc2LCA3Nik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QgI3N1YmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QgI3N1YmNvbnRhaW5lciAjbGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcbiNjb250YWN0ICNzdWJjb250YWluZXIgI2xlZnQgLmxlZnREaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuI2NvbnRhY3QgI3N1YmNvbnRhaW5lciAjbGVmdCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG4jY29udGFjdCAjc3ViY29udGFpbmVyICNzb2NpYWxTdWIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDY0cHg7XFxyXFxuICAgIGhlaWdodDogNjRweDtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbn1cXHJcXG4jY29udGFjdCAjc3ViY29udGFpbmVyICNzb2NpYWxTdWIgaW1nOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBjb250cmFzdCgwLjMpO1xcclxcbn0gICBcXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIseURBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7O0NBRUM7S0FDSSxjQUFjO0tBQ2QscUJBQXFCO0NBQ3pCOztBQUVEO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3N0ZWFrLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IHRvcDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5uYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbm5hdiBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41ZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICBtYXJnaW46IDMwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsLCAjcGFnZUNvbnRlbnQgI21lbnUgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNjBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBwYWRkaW5nOiAwIDUwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbnVsIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnVsIGJ1dHRvbjpob3ZlciwgLmN1cnJlbnRDYXRlZ29yeSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudFBhZ2UsIC5jdXJyZW50UGFnZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzksIDc2LCA3Nik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuIGE6dmlzaXRlZCwgYSB7XFxyXFxuICAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gfVxcclxcblxcclxcbiNwYWdlQ29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3BhZ2VDb250ZW50ICNob21lLCAjcGFnZUNvbnRlbnQgI21lbnUsICNwYWdlQ29udGVudCAjY29udGFjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgcGFkZGluZzogMzBweCAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBtYXJnaW46IDV2dztcXHJcXG59XFxyXFxuXFxyXFxuI3BhZ2VDb250ZW50ICNob21lIHtcXHJcXG4gICAgd2lkdGg6IG1heCg0MHZ3LCA0MHZoKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BhZ2VDb250ZW50ICNob21lIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgZm9udDppbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BhZ2VDb250ZW50ICNob21lIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbiNwYWdlQ29udGVudCAjbWVudSwgI3BhZ2VDb250ZW50ICNjb250YWN0IHtcXHJcXG4gICAgd2lkdGg6IG1heCg4MHZ3LCA4MHZoKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BhZ2VDb250ZW50ICNtZW51IGgxLCAjY29udGFjdCBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuI3BhZ2VDb250ZW50ICNtZW51IHVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiNwYWdlQ29udGVudCAjbWVudSB1bCBsaSBidXR0b257XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFnZUNvbnRlbnQgI21lbnUgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW0ge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTc5LCA3NiwgNzYpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0ICNzdWJjb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0ICNzdWJjb250YWluZXIgI2xlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG4jY29udGFjdCAjc3ViY29udGFpbmVyICNsZWZ0IC5sZWZ0RGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcbiNjb250YWN0ICNzdWJjb250YWluZXIgI2xlZnQgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuI2NvbnRhY3QgI3N1YmNvbnRhaW5lciAjc29jaWFsU3ViIGltZyB7XFxyXFxuICAgIHdpZHRoOiA2NHB4O1xcclxcbiAgICBoZWlnaHQ6IDY0cHg7XFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG59XFxyXFxuI2NvbnRhY3QgI3N1YmNvbnRhaW5lciAjc29jaWFsU3ViIGltZzpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogY29udHJhc3QoMC4zKTtcXHJcXG59ICAgXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4IDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwYWdlQ29udGVudERpdiB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCBtYXBJbWFnZSBmcm9tIFwiLi9tYXAucG5nXCI7XHJcbmltcG9ydCBnaXRodWJJY29uIGZyb20gXCIuL2dpdGh1Yi5zdmdcIjtcclxuaW1wb3J0IHR3aXR0ZXJJY29uIGZyb20gXCIuL3R3aXR0ZXIuc3ZnXCI7XHJcbmltcG9ydCBpbnN0YWdyYW1JY29uIGZyb20gXCIuL2luc3RhZ3JhbS5zdmdcIjtcclxuXHJcbmNvbnN0IGxvYWRDb250YWN0UGFnZSA9ICgpID0+IHtcclxuICAgIC8vIENyZWF0ZSBtYWluIGNvbnRhaW5lclxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuaWQgPSAnY29udGFjdCc7XHJcbiAgICAvLyBDcmVhdGUgbWVudSBoMVxyXG4gICAgY29uc3QgbWVudVRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbWVudVRleHRIZWFkZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyEnO1xyXG4gICAgLy8gQ3JlYXRlIHN1YmNvbnRhaW5lclxyXG4gICAgY29uc3Qgc3ViY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzdWJjb250YWluZXIuaWQgPSAnc3ViY29udGFpbmVyJztcclxuICAgIC8vIENyZWF0ZSBsZWZ0IGNvbnRhaW5lclxyXG4gICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGVmdENvbnRhaW5lci5pZCA9ICdsZWZ0JztcclxuICAgIC8vIENyZWF0ZSBsZWZ0IGRpdnNcclxuICAgIGxldCBsZWZ0RGl2cyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGVmdERpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0RGl2Jyk7XHJcbiAgICAgICAgbGVmdERpdnMucHVzaChsZWZ0RGl2KTtcclxuICAgIH1cclxuICAgIC8vIEFkZHJlc3MgRGl2XHJcbiAgICBjb25zdCBhZGRyZXNzRGl2ID0gbGVmdERpdnNbMF07XHJcbiAgICBjb25zdCBhZGRyZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGFkZHJlc3NUZXh0LmlubmVyVGV4dCA9ICdBZGRyZXNzOiBTb21ld2hlcmUgaW4gVGV4YXMuLi4/JztcclxuICAgIGFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc1RleHQpO1xyXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzRGl2KTtcclxuXHJcbiAgICAvLyBFbWFpbCBEaXZcclxuICAgIGNvbnN0IGVtYWlsRGl2ID0gbGVmdERpdnNbMV07XHJcbiAgICBjb25zdCBlbWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBlbWFpbFRleHQuaW5uZXJUZXh0ID0gJ0UtbWFpbDogc3RlYWs0YWxsQHN0ZWFrLnN0ZWFrJztcclxuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsVGV4dCk7XHJcbiAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsRGl2KTtcclxuXHJcbiAgICAvLyBTb2NpYWwgTWVkaWEgRGl2XHJcbiAgICBjb25zdCBzb2NpYWxEaXYgPSBsZWZ0RGl2c1syXTtcclxuICAgIGNvbnN0IHNvY2lhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzb2NpYWxUZXh0LmlubmVyVGV4dCA9ICdTb2NpYWwgTWVkaWEnO1xyXG4gICAgc29jaWFsRGl2LmFwcGVuZENoaWxkKHNvY2lhbFRleHQpO1xyXG4gICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChzb2NpYWxEaXYpO1xyXG4gICAgLy8gU29jaWFsIE1lZGlhIEJ1dHRvbnNcclxuICAgIGNvbnN0IGdpdGh1YiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgZ2l0aHViLnNyYyA9IGdpdGh1Ykljb247XHJcbiAgICBnaXRodWIuaWQgPSAnZ2l0aHViSWNvbic7XHJcbiAgICBjb25zdCBpbnN0YWdyYW0gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGluc3RhZ3JhbS5zcmMgPSBpbnN0YWdyYW1JY29uO1xyXG4gICAgaW5zdGFncmFtLmlkID0gJ2luc3RhZ3JhbUljb24nO1xyXG4gICAgY29uc3QgdHdpdHRlciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdHdpdHRlci5zcmMgPSB0d2l0dGVySWNvbjtcclxuICAgIHR3aXR0ZXIuaWQgPSAndHdpdHRlckljb24nO1xyXG4gICAgY29uc3Qgc29jaWFsU3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzb2NpYWxTdWJEaXYuaWQgPSAnc29jaWFsU3ViJztcclxuICAgIGNvbnN0IHNvY2lhbEJ1dHRvbnMgPSBbZ2l0aHViLCBpbnN0YWdyYW0sIHR3aXR0ZXJdO1xyXG4gICAgZm9yIChjb25zdCBidXR0b24gb2Ygc29jaWFsQnV0dG9ucykge1xyXG4gICAgICAgIHNvY2lhbFN1YkRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gJ2dpdGh1Ykljb24nKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbignaHR0cDovL2dpdGh1Yi5jb20vb21hcnBpeGVsOScsICdfYmxhbmsnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChidXR0b24uaWQgPT09ICdpbnN0YWdyYW1JY29uJykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHA6Ly9pbnN0YWdyYW0uY29tL29tYXJwaXhlbDknLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbignaHR0cDovL3R3aXR0ZXIuY29tL29tYXJwaXhlbDknLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNvY2lhbERpdi5hcHBlbmRDaGlsZChzb2NpYWxTdWJEaXYpO1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgcmlnaHQgY29udGFpbmVyXHJcbiAgICBjb25zdCByaWdodENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmlnaHRDb250YWluZXIuaWQgPSAncmlnaHQnO1xyXG4gICAgY29uc3QgbWFwID0gbmV3IEltYWdlKCk7XHJcbiAgICBtYXAuc3JjID0gbWFwSW1hZ2U7XHJcbiAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChtYXApO1xyXG4gICAgc3ViY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRDb250YWluZXIpO1xyXG4gICAgc3ViY29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGV4dEhlYWRlcik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViY29udGFpbmVyKTtcclxuXHJcbiAgICBwYWdlQ29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RQYWdlOyIsImltcG9ydCB7IHBhZ2VDb250ZW50RGl2LCBzd2l0Y2hUYWIgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHsgY2xlYXJQYWdlQ29udGVudCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5jb25zdCBsb2FkSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBob21lVG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHNob3dNZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgaG9tZVRleHQuaW5uZXJUZXh0ID0gJ0RlbGljaW91cyBTdGVhayBBdmFpbGFibGUhJztcclxuICAgIHNob3dNZW51QnV0dG9uLmlubmVyVGV4dCA9ICdTaG93IE1lbnUnO1xyXG4gICAgc2hvd01lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJQYWdlQ29udGVudCgpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWVudUJ1dHRvbicpO1xyXG4gICAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3VycmVudFBhZ2UnKTtcclxuICAgICAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0hvbWVCdXR0b24nKTtcclxuICAgICAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRQYWdlJyk7XHJcbiAgICAgICAgbG9hZE1lbnVQYWdlKCk7XHJcbiAgICB9KTtcclxuICAgIGhvbWVUb3BEaXYuaWQgPSAnaG9tZSc7XHJcblxyXG4gICAgaG9tZVRvcERpdi5hcHBlbmRDaGlsZChob21lVGV4dCk7XHJcbiAgICBob21lVG9wRGl2LmFwcGVuZENoaWxkKHNob3dNZW51QnV0dG9uKTtcclxuICAgIHBhZ2VDb250ZW50RGl2LmFwcGVuZENoaWxkKGhvbWVUb3BEaXYpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWVQYWdlOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vc3RlYWsuanBnJztcclxuaW1wb3J0IGluaXRpYWxCdWlsZFdlYnBhZ2UgZnJvbSAnLi9pbml0aWFsX2J1aWxkJztcclxuaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tICcuL2hvbWUnO1xyXG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBsb2FkQ29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0JztcclxuXHJcbmluaXRpYWxCdWlsZFdlYnBhZ2UoKTsgLy8gQnVpbGQgaW5pdGlhbCBwYWdlXHJcbmNvbnN0IHBhZ2VDb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VDb250ZW50Jyk7XHJcbmxvYWRIb21lUGFnZSgpOyAvLyBCdWlsZCBGaXJzdCBQYWdlIENvbnRlbnRcclxuXHJcbmNvbnN0IGNsZWFyUGFnZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXZDaGlsZHJlbiA9IEFycmF5LmZyb20ocGFnZUNvbnRlbnREaXYuY2hpbGROb2Rlcyk7XHJcbiAgICBkaXZDaGlsZHJlbi5mb3JFYWNoKGRpdiA9PiBwYWdlQ29udGVudERpdi5yZW1vdmVDaGlsZChkaXYpKTtcclxufTtcclxuY29uc3Qgc3dpdGNoVGFiID0gKG5ld1RhYikgPT4ge1xyXG4gICAgY29uc3QgbmF2QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2QnV0dG9uJykpO1xyXG4gICAgbmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudFBhZ2UnKSk7XHJcbiAgICBuZXdUYWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudFBhZ2UnKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJzVG9CdXR0b25zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2QnV0dG9uJykpO1xyXG4gICAgbmF2QnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhclBhZ2VDb250ZW50KCk7XHJcbiAgICAgICAgICAgIHN3aXRjaFRhYihidXR0b24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZVBhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZE1lbnVQYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQ29udGFjdFBhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuYWRkRXZlbnRMaXN0ZW5lcnNUb0J1dHRvbnMoKTtcclxuXHJcbmV4cG9ydCB7Y2xlYXJQYWdlQ29udGVudCwgcGFnZUNvbnRlbnREaXYsIHN3aXRjaFRhYn07IiwiaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XHJcblxyXG4vLyBUaGlzIGZpbGUgaXMgZm9yIHRoZSBpbml0aWFsIGJ1aWxkIG9mIHRoZSB3ZWJzaXRlIG9ubHlcclxuY29uc3QgaW5pdGlhbEJ1aWxkV2VicGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgTmF2XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIGNvbnN0IGxvZ29IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbG9nb0hlYWRlci5pbm5lclRleHQgPSAnU3RlYWsgNCBBbGwnO1xyXG4gICAgY29uc3QgbmF2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgdGFicyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcclxuXHJcbiAgICB0YWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IHRhYjtcclxuICAgICAgICBidXR0b24uaWQgPSB0YWIgKyAnQnV0dG9uJztcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2QnV0dG9uJyk7XHJcbiAgICAgICAgLy8gU2V0IEhvbWUgQXMgQ3VycmVudCBQYWdlXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSBidXR0b24uY2xhc3NMaXN0LmFkZCgnY3VycmVudFBhZ2UnKTtcclxuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIG5hdlVsLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICAgIH0pO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGxvZ29IZWFkZXIpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdlVsKTtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2KTtcclxuXHJcbiAgICAvLyBBZGQgUGxhY2Vob2xkZXIgZm9yIEluZGl2aWR1YWwgUGFnZSBDb250ZW50XHJcbiAgICBjb25zdCBwYWdlQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnZUNvbnRlbnREaXYuaWQgPSAncGFnZUNvbnRlbnQnO1xyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwYWdlQ29udGVudERpdik7XHJcblxyXG4gICAgLy8gQWRkIEZvb3RlclxyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IDIwMjIgLSBPbWFycGl4ZWw5JztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxCdWlsZFdlYnBhZ2U7IiwiaW1wb3J0IHtcclxuICAgIHBhZ2VDb250ZW50RGl2XHJcbn0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kZWxfbWVudVwiO1xyXG5jb25zdCBjYXRlZ29yaWVzID0gWydBbGwnLCAnU3RlYWsnLCAnUmlicycsICdQaXp6YScsICdEcmlua3MnLCAnRGVzc2VydCddO1xyXG5cclxuY29uc3QgdXBkYXRlTWVudVRvQ29udGFpbmVyVmlldyA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgbGV0IG5ld01lbnUgPSBtZW51LmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnkgPT09IGNhdGVnb3J5KTtcclxuICAgIGlmIChuZXdNZW51Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICBuZXdNZW51ID0gbWVudTtcclxuICAgIG5ld01lbnUuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBtZW51SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lbnVJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJyk7XHJcbiAgICAgICAgbWVudUl0ZW1EaXYuaWQgPSBpdGVtO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBtZW51SW1hZ2Uuc3JjID0gaXRlbS5pbWFnZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBtZW51SXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcblxyXG4gICAgICAgIG1lbnVJdGVtRGl2LmFwcGVuZENoaWxkKG1lbnVJbWFnZSk7XHJcbiAgICAgICAgbWVudUl0ZW1EaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lKTtcclxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2KTtcclxuICAgIH0pO1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGxvYWRDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlCdXR0b25zTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudUNhdGVnb3J5JykpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXRlZ29yeSArICdDYXRlZ29yeScpO1xyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Q29udGFpbmVyJyk7XHJcbiAgICAvLyBDbGVhciBjdXJyZW50IGNhdGVnb3J5XHJcbiAgICBjYXRlZ29yeUJ1dHRvbnNMaXN0LmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Q2F0ZWdvcnknKSk7XHJcbiAgICAvLyBTZXQgbmV3IGN1cnJlbnQgY2F0ZWdvcnlcclxuICAgIGNhdGVnb3J5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRDYXRlZ29yeScpO1xyXG5cclxuICAgIC8vIENsZWFyIE1lbnUgQ29udGFpbmVyXHJcbiAgICBjb25zdCBtZW51SXRlbURpdnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVJdGVtJykpO1xyXG4gICAgbWVudUl0ZW1EaXZzLmZvckVhY2goZGl2ID0+IG1lbnVDb250YWluZXIucmVtb3ZlQ2hpbGQoZGl2KSk7XHJcblxyXG4gICAgLy8gQWRkIFJlbGV2YW50IENhdGVnb3J5IEl0ZW1zXHJcbiAgICB1cGRhdGVNZW51VG9Db250YWluZXJWaWV3KGNhdGVnb3J5KTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRNZW51UGFnZSA9ICgpID0+IHtcclxuICAgIC8vIENyZWF0ZSBtYWluIGNvbnRhaW5lclxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuaWQgPSAnbWVudSc7XHJcbiAgICAvLyBDcmVhdGUgbWVudSBoMVxyXG4gICAgY29uc3QgbWVudVRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbWVudVRleHRIZWFkZXIudGV4dENvbnRlbnQgPSAnTWVudSAtIFN0ZWFrICYgTW9yZSc7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGNhdGVnb3JpZXMgbGlzdFxyXG4gICAgY29uc3QgY2F0ZWdvcmllc1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNhdGVnb3JpZXNVbC5pZCA9ICdjYXRlZ29yaWVzJztcclxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBjYXRlZ29yeTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudUNhdGVnb3J5Jyk7XHJcbiAgICAgICAgYnV0dG9uLmlkID0gY2F0ZWdvcnkgKyAnQ2F0ZWdvcnknO1xyXG4gICAgICAgIC8vIFNldCBIb21lIEFzIEN1cnJlbnQgUGFnZVxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRDYXRlZ29yeScpO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgY2F0ZWdvcmllc1VsLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENyZWF0ZSBtZW51IGNvbnRhaW5lciB3aXRoIGl0ZW1zXHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmlkID0gJ21lbnVDb250YWluZXInO1xyXG4gICAgbWVudS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWVudUl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcclxuICAgICAgICBtZW51SXRlbURpdi5pZCA9IGl0ZW07XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIG1lbnVJbWFnZS5zcmMgPSBpdGVtLmltYWdlO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51SXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIG1lbnVJdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuXHJcbiAgICAgICAgbWVudUl0ZW1EaXYuYXBwZW5kQ2hpbGQobWVudUltYWdlKTtcclxuICAgICAgICBtZW51SXRlbURpdi5hcHBlbmRDaGlsZChtZW51SXRlbU5hbWUpO1xyXG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1EaXYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUZXh0SGVhZGVyKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yaWVzVWwpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG5cclxuICAgIHBhZ2VDb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnVQYWdlOyIsImltcG9ydCBzdGVha0ljb24gZnJvbSBcIi4vc3RlYWsuc3ZnXCI7XHJcbmltcG9ydCByaWJzSWNvbiBmcm9tIFwiLi9yaWJzLnN2Z1wiO1xyXG5pbXBvcnQgcGl6emFJY29uIGZyb20gXCIuL3BpenphLnN2Z1wiO1xyXG5pbXBvcnQgZHJpbmtJY29uIGZyb20gXCIuL2RyaW5rLnN2Z1wiO1xyXG5pbXBvcnQgZGVzc2VydEljb24gZnJvbSBcIi4vZGVzc2VydC5zdmdcIjtcclxuXHJcbmNvbnN0IG1lbnUgPSBbe1xyXG4gICAgICAgIGNhdGVnb3J5OiAnU3RlYWsnLFxyXG4gICAgICAgIG5hbWU6ICdOZXcgWW9yayBTdHlsZSBTdHJpcCcsXHJcbiAgICAgICAgaW1hZ2U6IHN0ZWFrSWNvbixcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBzdHJpcCBzdGVhayBpcyBhIGN1dCBvZiBiZWVmIHN0ZWFrcyBmcm9tIHRoZSBzaG9ydCBsb2luIGZyb20gYSBjb3cuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjYXRlZ29yeTogJ1N0ZWFrJyxcclxuICAgICAgICBuYW1lOiAnU2lybG9pbiBTdGVhaycsXHJcbiAgICAgICAgaW1hZ2U6IHN0ZWFrSWNvbixcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBzaXJsb2luIHN0ZWFrIGlzIGN1dCBmcm9tIHRoZSBzaXJsb2luLCB0aGUgc3VicHJpbWFsIHBvc3RlcmlvciB0byB0aGUgc2hvcnQgbG9pbiB3aGVyZSB0aGUgVC1ib25lLCBwb3J0ZXJob3VzZSwgYW5kIGNsdWIgc3RlYWtzIGFyZSBjdXQuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjYXRlZ29yeTogJ1N0ZWFrJyxcclxuICAgICAgICBuYW1lOiAnVGVuZGVybG9pbiBTdGVhaycsXHJcbiAgICAgICAgaW1hZ2U6IHN0ZWFrSWNvbixcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbGV0IG1pZ25vbiBpcyBhIGN1dCBvZiBtZWF0IHRha2VuIGZyb20gdGhlIHNtYWxsZXIgZW5kIG9mIHRoZSB0ZW5kZXJsb2luLCBvciBwc29hcyBtYWpvciBvZiBhbiBhbmltYWwgY2FyY2Fzcy4gSW4gRnJlbmNoLCBpdCBtb3N0bHkgcmVmZXJzIHRvIGN1dHMgb2YgcG9yayB0ZW5kZXJsb2luLiBUaGUgdGVuZGVybG9pbiBydW5zIGFsb25nIGJvdGggc2lkZXMgb2YgdGhlIHNwaW5lLCBhbmQgaXMgdXN1YWxseSBidXRjaGVyZWQgYXMgdHdvIGxvbmcgc25ha2Utc2hhcGVkIGN1dHMgb2YgbWVhdC4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGNhdGVnb3J5OiAnU3RlYWsnLFxyXG4gICAgICAgIG5hbWU6ICdQb3J0ZXJob3VzZSBTdGVhaycsXHJcbiAgICAgICAgaW1hZ2U6IHN0ZWFrSWNvbixcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBULWJvbmUgYW5kIHBvcnRlcmhvdXNlIGFyZSBzdGVha3Mgb2YgYmVlZiBjdXQgZnJvbSB0aGUgc2hvcnQgbG9pbi4gQm90aCBzdGVha3MgaW5jbHVkZSBhIFwiVFwiLXNoYXBlZCBsdW1iYXIgdmVydGVicmEgd2l0aCBzZWN0aW9ucyBvZiBhYmRvbWluYWwgaW50ZXJuYWwgb2JsaXF1ZSBtdXNjbGUgb24gZWFjaCBzaWRlLiBQb3J0ZXJob3VzZSBzdGVha3MgYXJlIGN1dCBmcm9tIHRoZSByZWFyIGVuZCBvZiB0aGUgc2hvcnQgbG9pbiBhbmQgdGh1cyBpbmNsdWRlIG1vcmUgdGVuZGVybG9pbiBzdGVhaywgYWxvbmcgd2l0aCBhIGxhcmdlIHN0cmlwIHN0ZWFrLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2F0ZWdvcnk6ICdTdGVhaycsXHJcbiAgICAgICAgbmFtZTogJ0hhbmdlciBTdGVhaycsXHJcbiAgICAgICAgaW1hZ2U6IHN0ZWFrSWNvbixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYEEgaGFuZ2VyIHN0ZWFrLCBhbHNvIGtub3duIGFzIGJ1dGNoZXIncyBzdGVhayBvciBoYW5naW5nIHRlbmRlcmxvaW4sIGlzIGEgY3V0IG9mIGJlZWYgc3RlYWsgcHJpemVkIGZvciBpdHMgZmxhdm9yLiBUaGlzIGN1dCBpcyB0YWtlbiBmcm9tIHRoZSBwbGF0ZSwgd2hpY2ggaXMgdGhlIHVwcGVyIGJlbGx5IG9mIHRoZSBhbmltYWwuIEluIHRoZSBwYXN0IGl0IHdhcyBhbW9uZyBzZXZlcmFsIGN1dHMgb2YgYmVlZiBzb21ldGltZXMga25vd24gYXMgXCJidXRjaGVyJ3Mgc3RlYWtcIiwgYmVjYXVzZSBidXRjaGVycyB3b3VsZCBvZnRlbiBrZWVwIGl0IGZvciB0aGVtc2VsdmVzIHJhdGhlciB0aGFuIG9mZmVyIGl0IGZvciBzYWxlLiBUaGlzIGlzIGJlY2F1c2UgdGhlIGdlbmVyYWwgcG9wdWxhY2UgYmVsaWV2ZWQgdGhpcyB0byBiZSBhIGNydWRlIGN1dCBvZiBtZWF0LCBhbHRob3VnaCBpdCBpcyBhY3R1YWxseSBvbmUgb2YgdGhlIG1vc3QgdGVuZGVyLmBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2F0ZWdvcnk6ICdSaWJzJyxcclxuICAgICAgICBuYW1lOiAnQmFieSBCYWNrIFJpYnMnLFxyXG4gICAgICAgIGltYWdlOiByaWJzSWNvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2F0ZWdvcnk6ICdSaWJzJyxcclxuICAgICAgICBuYW1lOiAnU3QuIExvdWlzIFN0eWxlIFJpYnMnLFxyXG4gICAgICAgIGltYWdlOiByaWJzSWNvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2F0ZWdvcnk6ICdSaWJzJyxcclxuICAgICAgICBuYW1lOiAnU2hvcnQgUmlicycsXHJcbiAgICAgICAgaW1hZ2U6IHJpYnNJY29uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjYXRlZ29yeTogJ1JpYnMnLFxyXG4gICAgICAgIG5hbWU6ICdDb3VudHJ5LVN0eWxlIFJpYnMnLFxyXG4gICAgICAgIGltYWdlOiByaWJzSWNvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2F0ZWdvcnk6ICdQaXp6YScsXHJcbiAgICAgICAgbmFtZTogJ1BlcHBlcm9uaSBQaXp6YScsXHJcbiAgICAgICAgaW1hZ2U6IHBpenphSWNvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2F0ZWdvcnk6ICdQaXp6YScsXHJcbiAgICAgICAgbmFtZTogJ01hcmdoYXJpdGEgUGl6emEnLFxyXG4gICAgICAgIGltYWdlOiBwaXp6YUljb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGNhdGVnb3J5OiAnUGl6emEnLFxyXG4gICAgICAgIG5hbWU6ICdTdXBlciBEdXBlciBNZWF0cyBQaXp6YScsXHJcbiAgICAgICAgaW1hZ2U6IHBpenphSWNvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2F0ZWdvcnk6ICdQaXp6YScsXHJcbiAgICAgICAgbmFtZTogJ1ZlZ2FuIFBpenphJyxcclxuICAgICAgICBpbWFnZTogcGl6emFJY29uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjYXRlZ29yeTogJ1BpenphJyxcclxuICAgICAgICBuYW1lOiAnR3JpbGxlZCBDaGlja2VuIFBpenphJyxcclxuICAgICAgICBpbWFnZTogcGl6emFJY29uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjYXRlZ29yeTogJ0RyaW5rcycsXHJcbiAgICAgICAgbmFtZTogJ09yYW5nZSBKdWljZScsXHJcbiAgICAgICAgaW1hZ2U6IGRyaW5rSWNvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2F0ZWdvcnk6ICdEcmlua3MnLFxyXG4gICAgICAgIG5hbWU6ICdBcHBsZSBKdWljZScsXHJcbiAgICAgICAgaW1hZ2U6IGRyaW5rSWNvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2F0ZWdvcnk6ICdEcmlua3MnLFxyXG4gICAgICAgIG5hbWU6ICdQaW5lYXBwbGUgTW9qaXRvJyxcclxuICAgICAgICBpbWFnZTogZHJpbmtJY29uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjYXRlZ29yeTogJ0RyaW5rcycsXHJcbiAgICAgICAgbmFtZTogJ0JsdWViZXJyeSBDYW5keScsXHJcbiAgICAgICAgaW1hZ2U6IGRyaW5rSWNvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2F0ZWdvcnk6ICdEZXNzZXJ0JyxcclxuICAgICAgICBuYW1lOiAnSG90IExhdmEgQ2FrZScsXHJcbiAgICAgICAgaW1hZ2U6IGRlc3NlcnRJY29uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjYXRlZ29yeTogJ0Rlc3NlcnQnLFxyXG4gICAgICAgIG5hbWU6ICdJY2UgQ3JlYW0nLFxyXG4gICAgICAgIGltYWdlOiBkZXNzZXJ0SWNvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgY2F0ZWdvcnk6ICdEZXNzZXJ0JyxcclxuICAgICAgICBuYW1lOiAnS3VuYWZhJyxcclxuICAgICAgICBpbWFnZTogZGVzc2VydEljb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGNhdGVnb3J5OiAnRGVzc2VydCcsXHJcbiAgICAgICAgbmFtZTogJ1VtLUFsaScsXHJcbiAgICAgICAgaW1hZ2U6IGRlc3NlcnRJY29uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjYXRlZ29yeTogJ0Rlc3NlcnQnLFxyXG4gICAgICAgIG5hbWU6ICdOdXRlbGxhIENyZXBlJyxcclxuICAgICAgICBpbWFnZTogZGVzc2VydEljb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGNhdGVnb3J5OiAnRGVzc2VydCcsXHJcbiAgICAgICAgbmFtZTogJ0Nob2NvbGF0ZSBDaGlwIFBpZScsXHJcbiAgICAgICAgaW1hZ2U6IGRlc3NlcnRJY29uLFxyXG4gICAgfSxcclxuXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=