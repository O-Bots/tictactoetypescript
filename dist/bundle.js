/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: #0d1117;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  color: #e0f7fa;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
}
.modal .modal-contents {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  background: #121212;
  color: #e0f7fa;
  padding: 15px 10px;
  border-radius: 5px;
  border: 2px solid #00ffff;
  box-shadow: 0 0 20px 2px rgba(0, 255, 255, 0.25), 0 0 0 1px #00ffff;
  min-width: 250px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  gap: 24px;
}
.modal .modal-contents ul {
  list-style: none;
  padding: 0;
  margin: 0 0 3px 0;
  width: 60%;
}
.modal .modal-contents ul li {
  margin-bottom: 3px;
}
.modal .modal-contents ul li label {
  margin-left: 8px;
  color: #e0f7fa;
}
.modal .modal-contents button {
  background: #1a1a1a;
  color: #00ffff;
  border: 2px solid #00ffff;
  border-radius: 6px;
  padding: 8px 20px;
  font-size: 1.1em;
  font-family: inherit;
  cursor: pointer;
  margin: 0 8px;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 0 8px 0 rgba(0, 255, 255, 0.2);
}
.modal .modal-contents button:hover, .modal .modal-contents button:focus {
  background: #00ffff;
  color: #121212;
  box-shadow: 0 0 16px 2px rgba(0, 255, 255, 0.5333333333);
}

.main_frame {
  display: inline-block;
  border: 2px solid #00ffff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.15);
  background: #121212;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.main_frame * {
  margin: 0;
  padding: 0;
}
.main_frame .title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4vh;
  min-height: 45px;
  background-color: #1f2f34;
  border-radius: 10px 10px 0 0;
}
.main_frame .title h1 {
  font-size: 1.8em;
  line-height: 1;
  width: 100%;
  text-align: center;
  color: #00ffff;
  text-shadow: 0 0 5px #00ffff;
}
.main_frame .notification {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3vh;
  min-height: 40px;
  background-color: #1a1a1a;
  margin-bottom: 5px;
  border-bottom: 1px solid #00ffff;
}
.main_frame .notification h2, .main_frame .notification #player_one_score, .main_frame .notification #player_two_score {
  font-size: 1.4em;
  line-height: 1;
  margin: 0 8px;
  color: #e0f7fa;
}
.main_frame .notification #player_one_score {
  order: -1;
}
.main_frame .notification #player_two_score {
  order: 1;
}
.main_frame .container {
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  border-radius: 8px;
}
.main_frame .container .frame {
  display: flex;
  justify-content: center;
  height: fit-content;
  width: fit-content;
}
.main_frame .container .frame .grid {
  justify-content: center;
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(var(--board-size), clamp(120px, min(15vw, 20vh), 180px));
  grid-template-rows: repeat(var(--board-size), clamp(120px, min(15vw, 20vh), 180px));
  gap: 0.5vh;
  margin: 0 auto;
}
.main_frame .container .frame .cell {
  display: flex;
  border: 2px solid #00ffff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background: #0e1a1f;
  font-size: 5em;
  color: #e0f7fa;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}
.main_frame .container .frame .cell:hover {
  background-color: #1f2f34;
  transform: scale(1.05);
}`, "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,oDAAA;EACA,cAAA;AACJ;;AACA;EACI,cAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,OAAA;EACA,MAAA;EACA,8BAAA;AAEJ;AAAI;EACI,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mEAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,oDAAA;EACA,SAAA;AAER;AAAQ;EACI,gBAAA;EACA,UAAA;EACA,iBAAA;EACA,UAAA;AAEZ;AADY;EACI,kBAAA;AAGhB;AAFgB;EACI,gBAAA;EACA,cAAA;AAIpB;AACQ;EACI,mBAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,oBAAA;EACA,eAAA;EACA,aAAA;EACA,wDAAA;EACA,4CAAA;AACZ;AACQ;EACI,mBAAA;EACA,cAAA;EACA,wDAAA;AACZ;;AAIA;EACI,qBAAA;EACA,yBAAA;EACA,mBAAA;EACA,4CAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,2BAAA;AADJ;AAGI;EACI,SAAA;EACA,UAAA;AADR;AAGI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,gBAAA;EACA,yBAAA;EACA,4BAAA;AADR;AAGQ;EACI,gBAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;EACA,cAAA;EACA,4BAAA;AADZ;AAKI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,gCAAA;AAHR;AAKQ;EACI,gBAAA;EACA,cAAA;EACA,aAAA;EACA,cAAA;AAHZ;AAKQ;EACI,SAAA;AAHZ;AAKQ;EACI,QAAA;AAHZ;AAOI;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;AALR;AAMQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAJZ;AAKY;EACI,uBAAA;EACA,YAAA;EACA,aAAA;EACA,sFAAA;EACA,mFAAA;EACA,UAAA;EACA,cAAA;AAHhB;AAKY;EACI,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,cAAA;EACA,cAAA;EACA,eAAA;EACA,iDAAA;AAHhB;AAMY;EACI,yBAAA;EACA,sBAAA;AAJhB","sourcesContent":["body {\r\n    background-color: #0d1117;\r\n    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;\r\n    color: #e0f7fa;\r\n}\r\n.modal  {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 1000;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    left: 0;\r\n    top: 0;\r\n    background: rgba(0,0,0,0.6);\r\n\r\n    .modal-contents {\r\n        position: absolute;\r\n        left: 50%;\r\n        top: 40%;\r\n        transform: translate(-50%, -50%);\r\n        background: #121212;\r\n        color: #e0f7fa;\r\n        padding: 15px 10px;\r\n        border-radius: 5px;\r\n        border: 2px solid #00ffff;\r\n        box-shadow: 0 0 20px 2px rgba(0,255,255,0.25), 0 0 0 1px #00ffff;\r\n        min-width: 250px;\r\n        min-height: 120px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;\r\n        gap: 24px;\r\n\r\n        ul {\r\n            list-style: none;\r\n            padding: 0;\r\n            margin: 0 0 3px 0;\r\n            width: 60%;\r\n            li {\r\n                margin-bottom: 3px;\r\n                label {\r\n                    margin-left: 8px;\r\n                    color: #e0f7fa;\r\n                }\r\n            }\r\n        }\r\n\r\n        button {\r\n            background: #1a1a1a;\r\n            color: #00ffff;\r\n            border: 2px solid #00ffff;\r\n            border-radius: 6px;\r\n            padding: 8px 20px;\r\n            font-size: 1.1em;\r\n            font-family: inherit;\r\n            cursor: pointer;\r\n            margin: 0 8px;\r\n            transition: background 0.2s, color 0.2s, box-shadow 0.2s;\r\n            box-shadow: 0 0 8px 0 #00ffff33;\r\n        }\r\n        button:hover, button:focus {\r\n            background: #00ffff;\r\n            color: #121212;\r\n            box-shadow: 0 0 16px 2px #00ffff88;\r\n        }\r\n    }\r\n}\r\n\r\n.main_frame {\r\n    display: inline-block;\r\n    border: 2px solid #00ffff;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 15px rgba(0, 255, 255, 0.15);\r\n    background: #121212;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n\r\n    * {\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .title {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        height: 4vh;\r\n        min-height: 45px;\r\n        background-color: #1f2f34;\r\n        border-radius: 10px 10px 0 0;\r\n\r\n        h1 {\r\n            font-size: 1.8em;\r\n            line-height: 1;\r\n            width: 100%;\r\n            text-align: center;\r\n            color: #00ffff;\r\n            text-shadow: 0 0 5px #00ffff;\r\n        }\r\n    }\r\n\r\n    .notification {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        height: 3vh;\r\n        min-height: 40px;\r\n        background-color: #1a1a1a;\r\n        margin-bottom: 5px;\r\n        border-bottom: 1px solid #00ffff;\r\n\r\n        h2, #player_one_score, #player_two_score {\r\n            font-size: 1.4em;\r\n            line-height: 1;\r\n            margin: 0 8px;\r\n            color: #e0f7fa;\r\n        }\r\n        #player_one_score {\r\n            order: -1;\r\n        }\r\n        #player_two_score {\r\n            order: 1;\r\n        }\r\n    }\r\n\r\n    .container {\r\n        position: relative;\r\n        display: flex;\r\n        justify-content: center;\r\n        height: 100%;\r\n        border-radius: 8px;\r\n        .frame {\r\n            display: flex;\r\n            justify-content: center;\r\n            height: fit-content;\r\n            width: fit-content;\r\n            .grid {\r\n                justify-content: center;\r\n                padding: 6px;\r\n                display: grid;\r\n                grid-template-columns: repeat(var(--board-size), clamp(120px, min(15vw, 20vh), 180px));\r\n                grid-template-rows: repeat(var(--board-size), clamp(120px, min(15vw, 20vh), 180px));\r\n                gap: .5vh;\r\n                margin: 0 auto;\r\n            }\r\n            .cell {\r\n                display: flex;\r\n                border: 2px solid #00ffff;\r\n                border-radius: 8px;\r\n                justify-content: center;\r\n                align-items: center;\r\n                background: #0e1a1f;\r\n                font-size: 5em;\r\n                color: #e0f7fa;\r\n                cursor: pointer;\r\n                transition: background-color 0.3s, transform 0.2s;\r\n            }\r\n\r\n            .cell:hover {\r\n                background-color: #1f2f34;\r\n                transform: scale(1.05);\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/funcUtil.ts":
/*!*************************!*\
  !*** ./src/funcUtil.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.winCombos = void 0;
exports.createBoard = createBoard;
exports.delay = delay;
exports.checkDraw = checkDraw;
exports.checkWinner = checkWinner;
exports.cpuMouseClick = cpuMouseClick;
exports.getBestStart = getBestStart;
exports.firstCpuMove = firstCpuMove;
exports.secondSetCpuMove = secondSetCpuMove;
exports.cpuRandomMoves = cpuRandomMoves;
exports.blockOrWin = blockOrWin;
const cellPositions = [];
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function createBoard(boardSize) {
    /*
    *To-do: move error to board size checking func when implimented
    */
    if (!Number.isInteger(boardSize) || boardSize < 2) {
        throw new Error("Board size must be an integer greater than or equal to 2.");
    }
    const grid = document.getElementById('board');
    if (grid) {
        grid.style.setProperty('--board-size', String(boardSize));
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.style.setProperty('--cell-colour', 'rgb(255, 255, 255)');
                cell.setAttribute('data-cell', `${i},${j}`);
                grid.appendChild(cell);
            }
            ;
        }
        ;
    }
    ;
}
;
const winCombos = (boardSize) => {
    const rows = [];
    const columns = [];
    const firstDiagonal = [];
    const secondDiagonal = [];
    /*
    * Creates an array with the values of each cell element separated into [row, col] coords
    */
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const dataCell = cell.getAttribute('data-cell');
        if (dataCell) {
            const [row, col] = dataCell.split(',').map(Number);
            cellPositions.push({ row, col });
        }
    });
    /*
    * Separate the cells into sub arrays for each row
    */
    for (let i = 0; i < boardSize; i++) {
        rows.push(cellPositions.slice(i * boardSize, (i + 1) * boardSize));
    }
    /*
    * Separate the cells into sub arrays for each column
    */
    for (let j = 0; j < boardSize; j++) {
        columns.push(rows.map(row => row[j]));
    }
    /*
    * Separate the cells into sub arrays for each diagonal
    */
    for (let i = 0; i < boardSize; i++) {
        firstDiagonal.push(rows[i][i]);
        secondDiagonal.push(rows[i][boardSize - 1 - i]);
    }
    return { combos: [...rows, ...columns, firstDiagonal, secondDiagonal], cells };
};
exports.winCombos = winCombos;
function checkDraw(firstArr, secondArr, boardSize) {
    if (firstArr.length + secondArr.length === boardSize * boardSize) {
        return true;
    }
    else {
        return false;
    }
    ;
}
;
function checkWinner(playerMoves, combos, boardSize) {
    if (playerMoves.length < boardSize)
        return false;
    for (const winArry of combos) {
        if (winArry.every(winCell => playerMoves.some(move => move.row === winCell.row && move.col === winCell.col))) {
            return true;
        }
    }
    return false;
}
;
function blockOrWin(boardSize, playerMoveArr, opponentMoveArr) {
    const { combos } = winCombos(boardSize);
    if (Array.isArray(playerMoveArr) && Array.isArray(opponentMoveArr)) {
        if (playerMoveArr.length < 2)
            return false;
        const combosLeft = combos.map(combo => combo.filter(move => !playerMoveArr.some(playerMove => playerMove.row === move.row && playerMove.col === move.col)));
        for (const combo of combosLeft) {
            if (combo.length === 1) {
                const isPresent = opponentMoveArr.some(opponentMove => opponentMove.row === combo[0].row && opponentMove.col === combo[0].col);
                if (!isPresent) {
                    return [combo[0].row, combo[0].col];
                }
            }
        }
    }
    return false;
}
function cpuMouseClick(cpuTarget) {
    return __awaiter(this, void 0, void 0, function* () {
        const cpu = document.querySelector(`.cell[data-cell="${cpuTarget[0]},${cpuTarget[1]}"]`);
        if (!cpu)
            return;
        const cpuClick = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
        });
        cpu.dispatchEvent(cpuClick);
    });
}
function getBestStart(boardSize) {
    const mid = Math.floor(boardSize / 2);
    if (boardSize % 2 === 1) {
        // Odd-sized board: single center
        return [
            { row: mid, col: mid },
            { row: 0, col: 0 },
            { row: 0, col: boardSize - 1 },
            { row: boardSize - 1, col: 0 },
            { row: boardSize - 1, col: boardSize - 1 }
        ];
    }
    else {
        return [
            { row: 0, col: 0 },
            { row: 0, col: boardSize - 1 },
            { row: boardSize - 1, col: 0 },
            { row: boardSize - 1, col: boardSize - 1 }
        ];
    }
}
;
function firstCpuMove(boardSize, moveArr) {
    return __awaiter(this, void 0, void 0, function* () {
        let bestStartMoves = getBestStart(boardSize);
        const mid = Math.floor(boardSize / 2);
        if (Array.isArray(moveArr) && moveArr.length === 0) {
            const rngMove = Math.floor(Math.random() * bestStartMoves.length);
            const move = bestStartMoves[rngMove];
            return yield cpuMouseClick([move.row, move.col]);
        }
        else if (Array.isArray(moveArr) && moveArr.length === 1) {
            if (moveArr[0].col === mid && moveArr[0].row === mid) {
                bestStartMoves = bestStartMoves.filter(move => !(move.row === moveArr[0].row && move.col === moveArr[0].col));
            }
            else {
                return yield cpuMouseClick([mid, mid]);
            }
        }
        ;
        const rngMove = Math.floor(Math.random() * bestStartMoves.length);
        const move = bestStartMoves[rngMove];
        return yield cpuMouseClick([move.row, move.col]);
    });
}
;
function getDirectlyConnectedCells(boardSize) {
    const mid = Math.floor(boardSize / 2);
    const cells = [];
    for (let i = 0; i < boardSize; i++) {
        if (i !== mid) {
            cells.push({ row: mid, col: i });
            cells.push({ row: i, col: mid });
        }
    }
    return cells;
}
function secondSetCpuMove(boardSize, playerMoveArr, opponentMoveArr) {
    return __awaiter(this, void 0, void 0, function* () {
        let bestMoves = getBestStart(boardSize);
        const mid = Math.floor(boardSize / 2);
        if (Array.isArray(playerMoveArr) && Array.isArray(opponentMoveArr)) {
            if ((playerMoveArr[0].col === mid && playerMoveArr[0].row === mid)) {
                bestMoves = bestMoves.filter(move => ((move.row === opponentMoveArr[0].row || move.col === opponentMoveArr[0].col) &&
                    !(move.row === opponentMoveArr[0].row && move.col === opponentMoveArr[0].col)));
                if (bestMoves.length === 2 && playerMoveArr.length + opponentMoveArr.length === 3) {
                    bestMoves = getDirectlyConnectedCells(boardSize);
                }
            }
            else if (opponentMoveArr[0].col === mid && opponentMoveArr[0].row === mid) {
                bestMoves = bestMoves.filter(move => ((move.row !== playerMoveArr[0].row && move.col !== playerMoveArr[0].col) &&
                    !(move.row === playerMoveArr[0].row && move.col === playerMoveArr[0].col) &&
                    !(move.row === opponentMoveArr[0].row && move.col === opponentMoveArr[0].col)));
            }
        }
        const rngMove = Math.floor(Math.random() * bestMoves.length);
        const move = bestMoves[rngMove];
        yield cpuMouseClick([move.row, move.col]);
    });
}
;
function cpuRandomMoves(firstPlayerMoves, secondPlayerMoves) {
    return __awaiter(this, void 0, void 0, function* () {
        let unique = [];
        cellPositions.forEach(cell => {
            if (!unique.some(uniq => uniq.row === cell.row && uniq.col === cell.col)) {
                unique.push(cell);
            }
        });
        const allMoves = [firstPlayerMoves, secondPlayerMoves].flat();
        const movesLeft = unique.filter(cell => !allMoves.some(move => move.row === cell.row && move.col === cell.col));
        const rngMove = Math.floor(Math.random() * movesLeft.length);
        const move = movesLeft[rngMove];
        yield cpuMouseClick([move.row, move.col]);
    });
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./../src/styles.scss */ "./src/styles.scss");
const funcUtil_1 = __webpack_require__(/*! ./funcUtil */ "./src/funcUtil.ts");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const gameStart = document.querySelector('.start-btn');
const updates = document.querySelector('.notification h2');
const playerOneScore = document.getElementById('player_one_score');
const playerTwoScore = document.getElementById('player_two_score');
const gameArea = document.querySelector('.grid');
const DEFAULT_PLAYERS = [
    { label: "X", color: "rgb(0, 212, 255)", cpu: false, name: "Player one" },
    { label: "O", color: "rgb(0, 255, 179)", cpu: false, name: "Player two" }
];
let firstPlayerMoves = [];
let secondPlayerMoves = [];
let currentPlayerIndex = 0;
let boardSize = 3;
let playerFirstMove = false;
let hardMode = false;
let vsCpu = false;
let vsTwitch = false;
let demo = false;
const checkboxVariableMap = {
    playerFirstMove: () => { playerFirstMove = getCheckboxValue('playerFirstMove'); updatePlayerNames(); },
    hardMode: () => { hardMode = getCheckboxValue('hardMode'); },
    vsCpu: () => { vsCpu = getCheckboxValue('vsCpu'); updatePlayerNames(); },
    demo: () => { demo = getCheckboxValue('demo'); updatePlayerNames(); },
    vsTwitch: () => { vsTwitch = getCheckboxValue('vsTwitch'); }
};
/**
 * Helper to get the checked value of a checkbox by id.
 */
function getCheckboxValue(id) {
    const element = document.getElementById(id);
    return element ? element.checked : false;
}
/**
 * Updates the DEFAULT_PLAYERS' names and cpu flags based on vsCpu and playerFirstMove.
 */
function updatePlayerNames() {
    // Reset both to default
    DEFAULT_PLAYERS[0].name = 'Player one';
    DEFAULT_PLAYERS[1].name = 'Player two';
    DEFAULT_PLAYERS[1].cpu = false;
    DEFAULT_PLAYERS[0].cpu = false;
    if (vsCpu && !playerFirstMove) {
        DEFAULT_PLAYERS[0].name = 'Cpu';
        DEFAULT_PLAYERS[0].cpu = true;
    }
    else if (vsCpu && playerFirstMove) {
        DEFAULT_PLAYERS[1].name = 'Cpu';
        DEFAULT_PLAYERS[1].cpu = true;
    }
    else if (demo) {
        DEFAULT_PLAYERS[0].name = 'Player one';
        DEFAULT_PLAYERS[1].name = 'Player two';
        DEFAULT_PLAYERS[0].cpu = true;
        DEFAULT_PLAYERS[1].cpu = true;
    }
}
/*
* Creates delay to cpu move execution
*/
window.addEventListener('DOMContentLoaded', (e) => {
    // Set initial variable values and update player names
    Object.keys(checkboxVariableMap).forEach(id => {
        checkboxVariableMap[id]();
    });
    // Add event listeners for checkboxes
    checkboxes.forEach((checkbox) => {
        const checkboxElement = checkbox;
        const id = checkboxElement.id;
        if (checkboxVariableMap[id]) {
            checkboxElement.addEventListener('change', () => {
                checkboxVariableMap[id]();
                // Optionally, update UI or reset game here if needed
            });
        }
    });
    gameFlow();
    gameStart.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
        if (DEFAULT_PLAYERS[currentPlayerIndex].cpu) {
            cpu();
        }
    });
    /**
    * Un-comment below to set auto play
    */
    // document.getElementById('demo')?.click()
    // document.getElementById('hardMode')?.click()
    // gameStart.click()
});
/*
*Generates the cells for the game based on the boardSize variable
*/
(0, funcUtil_1.createBoard)(boardSize);
const { combos, cells } = (0, funcUtil_1.winCombos)(boardSize);
/*
*Gathers all possible win combinations (rows, columns, diagonals) for a board
*and returns an object containing an array of the win combinations and the NodeList of cell elements.
*/
(0, funcUtil_1.winCombos)(boardSize);
updates.textContent = `${DEFAULT_PLAYERS[currentPlayerIndex].name}'s turn`;
updates.style.color = DEFAULT_PLAYERS[currentPlayerIndex].color;
playerOneScore.textContent = (0).toString();
playerOneScore.style.color = DEFAULT_PLAYERS[0].color;
playerTwoScore.textContent = (0).toString();
playerTwoScore.style.color = DEFAULT_PLAYERS[1].color;
function gameFlow() {
    cells.forEach((cell) => {
        cell.addEventListener("click", (e) => {
            if ((0, funcUtil_1.checkWinner)(firstPlayerMoves, combos, boardSize) ||
                (0, funcUtil_1.checkWinner)(secondPlayerMoves, combos, boardSize) ||
                (0, funcUtil_1.checkDraw)(firstPlayerMoves, secondPlayerMoves, boardSize))
                return;
            const currentPlayer = DEFAULT_PLAYERS[currentPlayerIndex];
            const target = e.target;
            if (target.textContent)
                return;
            const value = target.dataset.cell;
            if (!value)
                return;
            const [row, col] = value.split(',').map(Number);
            const move = { row, col };
            target.style.background = currentPlayer.color;
            target.textContent = currentPlayer.label;
            if (currentPlayer.label === DEFAULT_PLAYERS[0].label) {
                firstPlayerMoves.push(move);
            }
            else if (currentPlayer.label === DEFAULT_PLAYERS[1].label) {
                secondPlayerMoves.push(move);
            }
            ;
            if ((0, funcUtil_1.checkWinner)(firstPlayerMoves, combos, boardSize)) {
                updates.textContent = `${DEFAULT_PLAYERS[0].name} wins`;
                updates.style.color = DEFAULT_PLAYERS[0].color;
                playerOneScore.textContent = (parseInt(playerOneScore.textContent || "0") + 1).toString();
                gameOver();
            }
            else if ((0, funcUtil_1.checkWinner)(secondPlayerMoves, combos, boardSize)) {
                updates.textContent = `${DEFAULT_PLAYERS[1].name} wins`;
                updates.style.color = DEFAULT_PLAYERS[1].color;
                playerTwoScore.textContent = (parseInt(playerTwoScore.textContent || "0") + 1).toString();
                gameOver();
            }
            else if ((0, funcUtil_1.checkDraw)(firstPlayerMoves, secondPlayerMoves, boardSize)) {
                updates.textContent = 'Draw game';
                updates.style.color = "rgb(133, 14, 14)";
                gameOver();
            }
            else {
                currentPlayerIndex = (currentPlayerIndex + 1) % DEFAULT_PLAYERS.length;
                if (DEFAULT_PLAYERS[currentPlayerIndex].cpu && !demo) {
                    updates.textContent = `Cpu's turn`;
                }
                else {
                    updates.textContent = `${DEFAULT_PLAYERS[currentPlayerIndex].name}'s turn`;
                }
                updates.style.color = DEFAULT_PLAYERS[currentPlayerIndex].color;
                if (DEFAULT_PLAYERS[currentPlayerIndex].cpu) {
                    cpu();
                }
            }
            ;
        });
    });
}
;
function cpu() {
    return __awaiter(this, void 0, void 0, function* () {
        const numberOfMoves = firstPlayerMoves.length + secondPlayerMoves.length;
        yield (0, funcUtil_1.delay)(700);
        if (!DEFAULT_PLAYERS.some(player => player.cpu))
            return;
        //Playing winning moves
        if (currentPlayerIndex === 0) {
            if ((0, funcUtil_1.blockOrWin)(boardSize, firstPlayerMoves, secondPlayerMoves)) {
                let winningMove = (0, funcUtil_1.blockOrWin)(boardSize, firstPlayerMoves, secondPlayerMoves);
                if (Array.isArray(winningMove)) {
                    return (0, funcUtil_1.cpuMouseClick)([winningMove[0], winningMove[1]]);
                }
            }
        }
        else if (currentPlayerIndex === 1) {
            if ((0, funcUtil_1.blockOrWin)(boardSize, secondPlayerMoves, firstPlayerMoves)) {
                let winningMove = (0, funcUtil_1.blockOrWin)(boardSize, secondPlayerMoves, firstPlayerMoves);
                if (Array.isArray(winningMove)) {
                    return (0, funcUtil_1.cpuMouseClick)([winningMove[0], winningMove[1]]);
                }
            }
        }
        ;
        //Blocking winning moves
        if (currentPlayerIndex === 0) {
            if ((0, funcUtil_1.blockOrWin)(boardSize, secondPlayerMoves, firstPlayerMoves)) {
                let winningMove = (0, funcUtil_1.blockOrWin)(boardSize, secondPlayerMoves, firstPlayerMoves);
                if (Array.isArray(winningMove)) {
                    return (0, funcUtil_1.cpuMouseClick)([winningMove[0], winningMove[1]]);
                }
            }
        }
        else if (currentPlayerIndex === 1) {
            if ((0, funcUtil_1.blockOrWin)(boardSize, firstPlayerMoves, secondPlayerMoves)) {
                let winningMove = (0, funcUtil_1.blockOrWin)(boardSize, firstPlayerMoves, secondPlayerMoves);
                if (Array.isArray(winningMove)) {
                    return (0, funcUtil_1.cpuMouseClick)([winningMove[0], winningMove[1]]);
                }
            }
        }
        ;
        if (!hardMode)
            return (0, funcUtil_1.cpuRandomMoves)(firstPlayerMoves, secondPlayerMoves);
        if (numberOfMoves <= 1 && hardMode) {
            if (currentPlayerIndex === 0) {
                return (0, funcUtil_1.firstCpuMove)(boardSize, secondPlayerMoves);
            }
            else if (currentPlayerIndex === 1) {
                return (0, funcUtil_1.firstCpuMove)(boardSize, firstPlayerMoves);
            }
        }
        ;
        if (numberOfMoves >= 2 && numberOfMoves <= 3 && hardMode) {
            if (currentPlayerIndex === 0) {
                return (0, funcUtil_1.secondSetCpuMove)(boardSize, firstPlayerMoves, secondPlayerMoves);
            }
            else if (currentPlayerIndex === 1) {
                return (0, funcUtil_1.secondSetCpuMove)(boardSize, secondPlayerMoves, firstPlayerMoves);
            }
        }
        (0, funcUtil_1.cpuRandomMoves)(firstPlayerMoves, secondPlayerMoves);
    });
}
;
function gameOver() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, funcUtil_1.delay)(1300);
        const cells = document.querySelectorAll('.cell');
        const updates = document.querySelector('.notification h2');
        cells.forEach(cell => {
            const element = cell;
            element.textContent = "";
            element.style.background = '#0e1a1f';
        });
        firstPlayerMoves = [];
        secondPlayerMoves = [];
        updates.textContent = `${DEFAULT_PLAYERS[currentPlayerIndex].name}'s turn`;
        updates.style.color = DEFAULT_PLAYERS[currentPlayerIndex].color;
        if (DEFAULT_PLAYERS[currentPlayerIndex].cpu) {
            cpu();
        }
    });
}
gameArea.addEventListener('click', (e) => {
});


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map