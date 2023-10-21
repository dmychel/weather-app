/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n  padding: 0;\n  border: 0;\n}\n\n:root {\n  font-family: 'Roboto Condensed', sans-serif;\n  --font-color: rgb(12, 12, 12);\n}\n\nbody {\n  overflow: hidden;\n  display: block;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n\n/* search bar */\n\nform {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n.form input {\n  padding: 5px;\n  border-radius: 15px;\n}\n\n.current-weather-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  width: fit-content;\n}\n\n.current-weather-container > .current-location {\n  font-size: 0.85rem;\n}\n\n\n.current-weather-container > .current-temp {\n  font-size: 3rem;\n}\n\n.current-weather-container > .current-condition {\n  color: rgb(59, 59, 59);\n}\n\n.current-weather-container > .current-forecast-container {\n  display: flex;\n  gap: 1em;\n}\n\n.current-weather-container > .update {\n  font-size: .85rem;\n}\n\n\n/*  weekly forecast */\n.forecast-container {\n  display: flex;\n  margin-bottom: 5%;\n  gap: 2em;\n  height: fit-content;\n  overflow-x: auto;\n  justify-content: center;\n}\n\n.forecast-container > .card {\n  min-width: 200px;\n  text-align: center;\n  background-color: gray;\n  border: 2px solid;\n\n  background: rgba(51, 42, 42, 0.233);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.185);\n  backdrop-filter: blur(7px);\n  -webkit-backdrop-filter: blur(7px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  font-size: 1.5rem;\n}\n\n\n/* metric slider - the box around the slider */\n\n.scale-container {\n  position: absolute;\n  right: 50px\n}\n\n.switch {\n  position: relative;\n  display: flex;\n  width: 56px;\n  height: 28px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* metric slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgb(3, 133, 126);\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked+.slider {\n  background-color: rgb(85, 60, 60);\n}\n\ninput:focus+.slider {\n  box-shadow: 0 0 1px rgb(3, 133, 126);\n}\n\ninput:checked+.slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n\n/* dynamic backgrounds */\n.sunny {\n  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.473), rgb(254, 166, 32), rgb(85, 51, 1));\n  background-size: 400% 400%;\n   animation: gradient 15s ease infinite;\n   height: 100vh;\n}\n\n.cloudy {\n  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.473), rgb(0, 185, 223), rgb(1, 82, 99));\n  background-size: 400% 400%;\n   animation: gradient 15s ease infinite;\n   height: 100vh;\n}\n\n.rain {\n  background: linear-gradient(to bottom right, rgb(111, 158, 194), rgb(10, 52, 85), rgb(0, 16, 27));\n  background-size: 400% 400%;\n   animation: gradient 15s ease infinite;\n   height: 100vh;\n}\n\n.snow {\n  background: linear-gradient(to bottom right, rgb(250, 250, 250), rgb(102, 177, 216), rgb(48, 79, 95));\n  background-size: 400% 400%;\n   animation: gradient 15s ease infinite;\n   height: 100vh;\n}\n\n.mist {\n  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.473), rgb(50, 58, 59), rgb(14, 46, 53));\n  background-size: 400% 400%;\n   animation: gradient 15s ease infinite;\n   height: 100vh;\n}\n\n.heavy {\n  background: linear-gradient(to bottom right, rgb(114, 112, 112), rgb(119, 110, 156), #541c55);\n  background-size: 400% 400%;\n   animation: gradient 15s ease infinite;\n   height: 100vh;\n}\n\n@keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n\n/* MEDIA QUERIES */\n@media only screen and (max-width: 680px) {\n  .scale-container {\n    position: absolute;\n    top: 100px;\n    right: 25px;\n  }\n\n  .scale-label {\n    position: absolute;\n    top: 0;\n    right: 70px;\n  }\n\n  input[type=text] {\n    height: 30px;\n  }\n\n  .forecast-container {\n    justify-content: left;\n  }\n\n  .card {\n    height: fit-content;\n    width: 150px;\n    overflow: scroll;\n  }\n} `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/authentication.js":
/*!***************************************!*\
  !*** ./src/scripts/authentication.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AUTHENTICATION: () => (/* binding */ AUTHENTICATION)\n/* harmony export */ });\nconst AUTHENTICATION = '70fd96990af1420bb59234705231309'\n\n//# sourceURL=webpack://weather-app/./src/scripts/authentication.js?");

/***/ }),

/***/ "./src/scripts/currentWeather.js":
/*!***************************************!*\
  !*** ./src/scripts/currentWeather.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentWeatherInfo: () => (/* binding */ currentWeatherInfo)\n/* harmony export */ });\n/* harmony import */ var _dateFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateFormatter */ \"./src/scripts/dateFormatter.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/scripts/dom.js\");\n/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast */ \"./src/scripts/forecast.js\");\n\n\n\n\nasync function currentWeatherInfo(weather, forecast) {\n  let hourlyForecast = [];\n\n  const parseHourly = value => {\n    let hour = value.forecast.forecastday[0].hour;\n    for (let i = 0; i < hour.length; i++) {\n      hourlyForecast.push(hour[i].temp_f, hour[i].condition.text);\n   };\n  };\n\n  parseHourly(forecast);\n  (0,_dateFormatter__WEBPACK_IMPORTED_MODULE_0__.currentTime)()\n\n  let scale = document.getElementById('scale').checked;\n\n  // location\n  let location = {\n    city: weather.location.name,\n    state: weather.location.region,\n  };\n\n  // current weather\n  let currentWeather = weather.current;\n  let update = weather.current.last_updated;\n\n\n\n  // forecast\n  let forecastTemp = forecast.forecast.forecastday[0].day\n\n\n  // display metric\n  if (scale != true) {\n    _dom__WEBPACK_IMPORTED_MODULE_1__.display.displayCurrentWeather(location, currentWeather, forecastTemp, update)\n  }\n  else {\n    _dom__WEBPACK_IMPORTED_MODULE_1__.display.displayCurrentWeather_C(location, currentWeather, forecastTemp, update);\n  };\n};\n\n//# sourceURL=webpack://weather-app/./src/scripts/currentWeather.js?");

/***/ }),

/***/ "./src/scripts/dateFormatter.js":
/*!**************************************!*\
  !*** ./src/scripts/dateFormatter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentDate: () => (/* binding */ currentDate),\n/* harmony export */   currentTime: () => (/* binding */ currentTime),\n/* harmony export */   formatCurrentDate: () => (/* binding */ formatCurrentDate),\n/* harmony export */   formatDate: () => (/* binding */ formatDate)\n/* harmony export */ });\nfunction formatDate(date) {\n    const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'short' })\n    return formatter.format(new Date(date))\n}\n\nfunction formatCurrentDate(date) {\n    const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: \"medium\", timeStyle: \"medium\" })\n    return formatter.format(new Date(date))\n}\n\nfunction currentDate() {\n    const formatter = new Intl.DateTimeFormat('en-US', {day: '2-digit'})\n    const date = new Date();\n    let year = date.getFullYear();\n    let month = date.getMonth() + 1;\n    let day = formatter.format(date);\n\n    let current = `${year}-${month}-${day}`\n    return current\n}\n\nfunction currentTime() {\n    const formatter  = new Intl.DateTimeFormat(undefined, {\n        hour:\"numeric\"\n    })\n//     const date = moment()\n//    console.log(date)\n}\n\n//# sourceURL=webpack://weather-app/./src/scripts/dateFormatter.js?");

/***/ }),

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   display: () => (/* binding */ display)\n/* harmony export */ });\n/* harmony import */ var _dynamicBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamicBackground */ \"./src/scripts/dynamicBackground.js\");\n/* harmony import */ var _dateFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateFormatter */ \"./src/scripts/dateFormatter.js\");\n\n\n\n\n\nconst display = (() => {\n    // Dom Elements\n    const main = document.querySelector(\"main\");\n    const currentWeatherContainer = document.createElement(\"section\");\n    const forecastContainer = document.createElement('section');\n\n    // append\n    main.appendChild(currentWeatherContainer);\n    main.appendChild(forecastContainer);\n\n    const displayCurrentWeather = (location, weather, forecastTemp, update) => {\n        (0,_dynamicBackground__WEBPACK_IMPORTED_MODULE_0__.background)(weather.condition.text)\n        // reset html\n        currentWeatherContainer.innerHTML = '';\n\n        // create html elements\n        const locationEl = document.createElement(\"div\");\n        const feelsLikeEl = document.createElement(\"div\");\n        const tempEl = document.createElement('p');\n        const condition = document.createElement('p');\n        const forecastContainer = document.createElement('div');\n        const highTemp = document.createElement('p');\n        const lowTemp = document.createElement('p');\n        const updateEl = document.createElement('div');\n\n        // set content\n        locationEl.textContent = `${location.city}, ${location.state}`;\n        tempEl.textContent = `${weather.temp_f}` + '°';\n        condition.textContent = `${weather.condition.text}`;\n        highTemp.textContent = `H:${forecastTemp.maxtemp_f}`;\n        lowTemp.textContent = `L:${forecastTemp.mintemp_f}`\n        updateEl.textContent = `Updated ${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.formatCurrentDate)(update)}`;\n\n\n        // append\n        currentWeatherContainer.appendChild(locationEl);\n        currentWeatherContainer.appendChild(tempEl);\n        currentWeatherContainer.appendChild(condition);\n        currentWeatherContainer.appendChild(forecastContainer);\n        currentWeatherContainer.appendChild(updateEl);\n\n        forecastContainer.append(highTemp);\n        forecastContainer.append(lowTemp);\n\n\n        // assign class\n        currentWeatherContainer.classList = 'current-weather-container';\n        condition.classList = 'current-condition'\n        feelsLikeEl.classList = 'temperature';\n        tempEl.classList = 'current-temp';\n        forecastContainer.classList = 'current-forecast-container'\n        locationEl.classList = 'current-location';\n        updateEl.classList = 'update';\n    };\n\n    const displayWeek = week => {\n        // reset html\n        forecastContainer.innerHTML = '';\n        for (let i = 0; i < week.length; i++) {\n            // create html elements\n            const card = document.createElement('div');\n            const maxTemp = document.createElement('p');\n            const minTemp = document.createElement('p');\n            const condition = document.createElement('img');\n            const date = document.createElement('p');\n\n            // set content\n            condition.src = `${week[i].day.condition.icon}`;\n            maxTemp.textContent = `${week[i].day.maxtemp_f}` + '°';\n            minTemp.textContent = `${week[i].day.mintemp_f}` + '°';\n            date.textContent = `${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.formatDate)(week[i].date)}` + '°';\n\n\n            // append elements\n            card.appendChild(condition);\n            card.appendChild(maxTemp);\n            card.appendChild(minTemp);\n            card.appendChild(date)\n            forecastContainer.appendChild(card);\n\n            // assign class\n            card.classList = 'card';\n            condition.classList = 'condition-img';\n            forecastContainer.classList = 'forecast-container';\n            maxTemp.classList = 'max-temp';\n            minTemp.classList = 'min-temp';\n        }\n    };\n\n    // celsius\n    const displayWeek_C = week => {\n        // reset html\n        forecastContainer.innerHTML = '';\n        for (let i = 0; i < week.length; i++) {\n            // create html elements\n            const card = document.createElement('div');\n            const maxTemp = document.createElement('p');\n            const minTemp = document.createElement('p');\n            const condition = document.createElement('img');\n            const date = document.createElement('p');\n\n            // set content\n            condition.src = `${week[i].day.condition.icon}`;\n            maxTemp.textContent = `${week[i].day.maxtemp_c}` + '°';\n            minTemp.textContent = `${week[i].day.mintemp_c}` + '°';\n            date.textContent = `${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.formatDate)(week[i].date)}`;\n\n\n            // append elements\n            card.appendChild(condition);\n            card.appendChild(maxTemp);\n            card.appendChild(minTemp);\n            card.appendChild(date)\n            forecastContainer.appendChild(card);\n\n            // assign class\n            card.classList = 'card';\n            condition.classList = 'condition-img';\n            maxTemp.classList = 'max-temp';\n            minTemp.classList = 'min-temp';\n        }\n\n        forecastContainer.classList = 'forecast-container';\n    };\n\n    const displayCurrentWeather_C = (location, weather, forecastTemp, update) => {\n        (0,_dynamicBackground__WEBPACK_IMPORTED_MODULE_0__.background)(weather.condition.text)\n        // reset html\n        currentWeatherContainer.innerHTML = '';\n\n        // create html elements\n        const locationEl = document.createElement(\"div\");\n        const feelsLikeEl = document.createElement(\"div\");\n        const tempEl = document.createElement('p');\n        const condition = document.createElement('p');\n        const forecastContainer = document.createElement('div');\n        const highTemp = document.createElement('p');\n        const lowTemp = document.createElement('p');\n        const updateEl = document.createElement('div');\n\n        // set content\n        locationEl.textContent = `${location.city}, ${location.state}`;\n        tempEl.textContent = `${weather.temp_c}` + '°';\n        condition.textContent = `${weather.condition.text}`;\n        highTemp.textContent = `H:${forecastTemp.maxtemp_c}`;\n        lowTemp.textContent = `L:${forecastTemp.mintemp_c}`\n        updateEl.textContent = `Updated ${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.formatCurrentDate)(update)}`;\n\n\n        // append\n        currentWeatherContainer.appendChild(locationEl);\n        currentWeatherContainer.appendChild(tempEl);\n        currentWeatherContainer.appendChild(condition);\n        currentWeatherContainer.appendChild(forecastContainer);\n        currentWeatherContainer.appendChild(updateEl);\n\n        forecastContainer.append(highTemp);\n        forecastContainer.append(lowTemp);\n\n\n        // assign class\n        currentWeatherContainer.classList = 'current-weather-container';\n        condition.classList = 'current-condition'\n        feelsLikeEl.classList = 'temperature';\n        tempEl.classList = 'current-temp';\n        forecastContainer.classList = 'current-forecast-container'\n        locationEl.classList = 'current-location';\n        updateEl.classList = 'update';\n    };\n\n    const displayHourlyForecast = forecast => {\n        forecastContainer.innerHTML = '';\n        console.log(forecast)\n        for (let i = 0; i < week.length; i++) {\n            // create html elements\n            const hourCard = document.createElement('div');\n            const maxTemp = document.createElement('p');\n            const minTemp = document.createElement('p');\n            const condition = document.createElement('img');\n            const date = document.createElement('p');\n\n            // set content\n            condition.src = `${week[i].day.condition.icon}`;\n            maxTemp.textContent = `${week[i].day.maxtemp_f}` + '°';\n            minTemp.textContent = `${week[i].day.mintemp_f}` + '°';\n            date.textContent = `${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.formatDate)(week[i].date)}` + '°';\n\n\n            // append elements\n            card.appendChild(condition);\n            card.appendChild(maxTemp);\n            card.appendChild(minTemp);\n            card.appendChild(date)\n            forecastContainer.appendChild(card);\n\n            // assign class\n            card.classList = 'card';\n            condition.classList = 'condition-img';\n            forecastContainer.classList = 'forecast-container';\n            maxTemp.classList = 'max-temp';\n            minTemp.classList = 'min-temp';\n        }\n    }\n\n    return { displayCurrentWeather, displayWeek, displayWeek_C, displayCurrentWeather_C, displayHourlyForecast };\n})();\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/dom.js?");

/***/ }),

/***/ "./src/scripts/dynamicBackground.js":
/*!******************************************!*\
  !*** ./src/scripts/dynamicBackground.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   background: () => (/* binding */ background)\n/* harmony export */ });\nfunction background(value) {\n    const body = document.querySelector('body')\n    let condition = value.toLowerCase()\n    if (condition.includes('sunny')) {\n        body.classList = 'sunny'\n    }\n    else if (condition.includes('cloudy') || condition.includes('clear')) {\n        body.classList = 'cloudy'\n    }\n    else if (condition.includes('overcast') || condition.includes('rain')) {\n        body.classList = 'rain'\n    }\n    else if (condition.includes('snow')) {\n        body.classList = 'snow'\n    }\n    else if (condition.includes('mist')) {\n        body.classList = 'mist'\n    }\n    else if (condition.includes('heavy')) {\n        body.classList = 'heavy'\n    }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/dynamicBackground.js?");

/***/ }),

/***/ "./src/scripts/forecast.js":
/*!*********************************!*\
  !*** ./src/scripts/forecast.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   forecastInfo: () => (/* binding */ forecastInfo)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/scripts/dom.js\");\n\n\nfunction forecastInfo(weather) {\n    let scale = document.getElementById('scale').checked;\n    let week = weather.forecast.forecastday;\n    if (scale != true) {\n        _dom__WEBPACK_IMPORTED_MODULE_0__.display.displayWeek(week)\n    }\n    else {\n        _dom__WEBPACK_IMPORTED_MODULE_0__.display.displayWeek_C(week)\n    }\n}\n\n//# sourceURL=webpack://weather-app/./src/scripts/forecast.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _weatherAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI.js */ \"./src/scripts/weatherAPI.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.js */ \"./src/scripts/search.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/scripts/dom.js\");\n\n\n\n\n\n\n(0,_weatherAPI_js__WEBPACK_IMPORTED_MODULE_1__.search)('osaka')\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/search.js":
/*!*******************************!*\
  !*** ./src/scripts/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   locationInput: () => (/* binding */ locationInput)\n/* harmony export */ });\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI */ \"./src/scripts/weatherAPI.js\");\n\n\nfunction locationInput() {\n    const form = document.getElementById('locationForm')\n    form.addEventListener('submit', (e) => {\n        e.preventDefault()\n\n        let userInput = document.getElementById('locationInput').value;\n        (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_0__.search)(userInput);\n    })\n}\n\nlocationInput()\n\n//# sourceURL=webpack://weather-app/./src/scripts/search.js?");

/***/ }),

/***/ "./src/scripts/weatherAPI.js":
/*!***********************************!*\
  !*** ./src/scripts/weatherAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   search: () => (/* binding */ search)\n/* harmony export */ });\n/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication */ \"./src/scripts/authentication.js\");\n/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast */ \"./src/scripts/forecast.js\");\n/* harmony import */ var _currentWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentWeather */ \"./src/scripts/currentWeather.js\");\n/* harmony import */ var _dateFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dateFormatter */ \"./src/scripts/dateFormatter.js\");\n\n\n\n\n\n\n// search location\nasync function search(value) {\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/search.json?key=${_authentication__WEBPACK_IMPORTED_MODULE_0__.AUTHENTICATION}&q=${value}`,\n    { mode: \"cors\" }\n  );\n  response.json().then(function (response) {\n    if (response.length < 1) {\n      alert('please type a city, state, or country')\n    }\n    else {\n      let location = response[0].name;\n      let day = (0,_dateFormatter__WEBPACK_IMPORTED_MODULE_3__.currentDate)()\n      getWeather(location,day)\n    }\n  });\n\n}\n\nasync function getWeather(location,day) {\n  try {\n    // aquire api data\n    const weather = await fetch(\n      `https://api.weatherapi.com/v1/current.json?key=${_authentication__WEBPACK_IMPORTED_MODULE_0__.AUTHENTICATION}&q=${location}`,\n      { mode: \"cors\" }\n    );\n\n    const forecast = await fetch(\n      `https://api.weatherapi.com/v1/history.json?key=${_authentication__WEBPACK_IMPORTED_MODULE_0__.AUTHENTICATION}&q=${location}&dt=${day}`,\n      { mode: \"cors\" }\n    );\n\n    const futureForecast = await fetch(\n      `https://api.weatherapi.com/v1/forecast.json?key=${_authentication__WEBPACK_IMPORTED_MODULE_0__.AUTHENTICATION}&q=${location}&days=3`,\n      { mode: \"cors\" }\n    );\n\n    // set variables = to api data\n    const weatherData = await weather.json();\n    const forecastData = await forecast.json();\n    const futureForecastData = await futureForecast.json().then(futureForecast => {(0,_forecast__WEBPACK_IMPORTED_MODULE_1__.forecastInfo)(futureForecast)});\n\n    const currentWeather = Promise.all([weatherData, forecastData]).then((0,_currentWeather__WEBPACK_IMPORTED_MODULE_2__.currentWeatherInfo)(weatherData, forecastData));\n\n  } catch (error) {\n    console.log(error)\n    alert('Please try again')\n  }\n}\n\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/weatherAPI.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;