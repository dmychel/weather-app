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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto Condensed', sans-serif;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 100vh;\n  width: 100vw;\n  text-align: center;\n  box-shadow: inset 3px 4px 10px #251903af;\n  overflow: hidden;\n  user-select: none;\n  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.473), rgb(0, 185, 223), rgb(0, 185, 223));\n}\n\n\n/* user form */\n.form {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n  padding: 20px;\n  border-radius: 2px solid;\n}\n\ninput[type=text] {\n  width: 200px;\n  border-radius: 50px;\n  border: none;\n  padding: 5px;\n}\n\nform {\n  width: 100%;\n}\n\nform > div {\n  display: flex;\n  gap: 1em;\n}\n\n /* The switch - the box around the slider */\n\n .scale-container {\n  position: absolute;\n  right: 50px\n }\n\n .switch {\n  position: relative;\n  display: flex;\n  width: 56px;\n  height: 28px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgb(3, 133, 126);\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: rgb(85, 60, 60);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px rgb(3, 133, 126);\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n} \n\n/* current weather */\n.current-weather-container{\n  /* placement */\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n\n  /* sizing */\n  padding: 50px;\n  width: fit-content;\n  height: auto;\n  font-size: 1.75rem;\n\n  /* other */\n  background: rgba(255, 255, 255, 0.425);\n  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n  backdrop-filter: blur( 7px );\n  -webkit-backdrop-filter: blur( 7px );\n  border-radius: 10px;\n  border: 1px solid rgba( 255, 255, 255, 0.18 );\n}\n\n.current-condition-img {\n  max-width: 100%;\n  height: auto;\n}\n\n\n.update {\n  font-size: .85rem;\n}\n\n\n/* weekly forecast */\n.forecast-container {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n  padding: 20px;\n}\n\n.card {\n  /* position */\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: space-evenly;\n  align-items: center;\n\n  /* sizing */\n  height: 100%;\n  width: 200px;\n\n  /* other */\n  background: rgba(255, 255, 255, 0.295);\n  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\n  backdrop-filter: blur( 7px );\n  -webkit-backdrop-filter: blur( 7px );\n  border-radius: 10px;\n  border: 1px solid rgba( 255, 255, 255, 0.18 );\n  font-size: 1.5rem;\n  gap: .5em;\n}\n\n.condition-img {\n  max-width: 50%;\n  height: auto;\n}\n\n\n.min-temp {\n  font-size: 1rem;\n  color: rgb(59, 59, 59);\n}\n\n.current-temp {\n  font-size: 2rem;\n}\n\n/* MEDIA QUERIES */\n@media only screen and (max-width: 480px){\n  .scale-container {\n    position: absolute;\n    top: 100px;\n    right: 25px;\n  }\n\n  .scale-label {\n    position: absolute;\n    top: 0;\n    right: 70px;\n  };\n\n  input[type=text] {\n    height: 30px;\n  }\n\n  .current-weather-container {\n    padding: 20px;\n  }\n\n  .forecast-container {\n    display: flex;\n    align-items: center;\n    gap: 2em;\n    overflow: hidden;\n  }\n\n  .card {\n    height: fit-content;\n    width: 150px;\n    overflow: scroll;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentWeatherInfo: () => (/* binding */ currentWeatherInfo)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/scripts/dom.js\");\n\n\nfunction currentWeatherInfo(weather) {\n  let scale = document.getElementById('scale').checked;\n  let location = {\n    city: weather.location.name,\n    state: weather.location.region,\n  };\n  let currentWeather = weather.current;\n  let update = weather.current.last_updated;\n\n  if (scale != true) {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.display.displayCurrentWeather(location, currentWeather, update)\n  }\n  else {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.display.displayCurrentWeather_C(location, currentWeather, update);\n  }\n};\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/currentWeather.js?");

/***/ }),

/***/ "./src/scripts/dateFormatter.js":
/*!**************************************!*\
  !*** ./src/scripts/dateFormatter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatCurrentDate: () => (/* binding */ formatCurrentDate),\n/* harmony export */   formatDate: () => (/* binding */ formatDate)\n/* harmony export */ });\nfunction formatDate(date) {\n    const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'short' })\n    return formatter.format(new Date(date))\n}\n\nfunction formatCurrentDate(date) {\n    const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: \"medium\", timeStyle: \"medium\" })\n    return formatter.format(new Date(date))\n}\n\n//# sourceURL=webpack://weather-app/./src/scripts/dateFormatter.js?");

/***/ }),

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   display: () => (/* binding */ display)\n/* harmony export */ });\n/* harmony import */ var _dynamicBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamicBackground */ \"./src/scripts/dynamicBackground.js\");\n/* harmony import */ var _dateFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateFormatter */ \"./src/scripts/dateFormatter.js\");\n\n\n\n\n\nconst display = (() => {\n    // Dom Elements\n    const main = document.querySelector(\"main\");\n    const currentWeatherContainer = document.createElement(\"section\");\n    const forecastContainer = document.createElement('section');\n\n    // append\n    main.appendChild(currentWeatherContainer);\n    main.appendChild(forecastContainer);\n\n    const displayCurrentWeather = (location, weather, update) => {\n        (0,_dynamicBackground__WEBPACK_IMPORTED_MODULE_0__.background)(weather.condition.text)\n        // reset html\n        currentWeatherContainer.innerHTML = '';\n\n        // create html elements\n        const condition = document.createElement('img');\n        const feelsLikeEl = document.createElement(\"div\");\n        const tempEl = document.createElement('p');\n        const locationEl = document.createElement(\"div\");\n        const updateEl = document.createElement('div');\n\n        // set content\n        condition.src = `${weather.condition.icon}`;\n        feelsLikeEl.textContent = `Feels like ${weather.feelslike_f}`;\n        tempEl.textContent = `${weather.temp_f}`;\n        locationEl.textContent = `${location.city}, ${location.state}`;\n        updateEl.textContent = `Updated ${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.formatCurrentDate)(update)}`;\n\n\n        // append\n        currentWeatherContainer.appendChild(condition);\n        currentWeatherContainer.appendChild(feelsLikeEl);\n        currentWeatherContainer.appendChild(tempEl);\n        currentWeatherContainer.appendChild(locationEl);\n        currentWeatherContainer.appendChild(updateEl);\n\n        // assign class\n        currentWeatherContainer.classList = 'current-weather-container';\n        condition.classList = 'current-condition-img'\n        feelsLikeEl.classList = 'temperature';\n        tempEl.classList = 'current-temp';\n        locationEl.classList = 'current-location';\n        updateEl.classList = 'update';\n    };\n\n    const displayWeek = week => {\n        // reset html\n        forecastContainer.innerHTML = '';\n        for (let i = 0; i < week.length; i++) {\n            // create html elements\n            const card = document.createElement('div');\n            const maxTemp = document.createElement('p');\n            const minTemp = document.createElement('p');\n            const condition = document.createElement('img');\n            const date = document.createElement('p');\n\n            // set content\n            condition.src = `${week[i].day.condition.icon}`;\n            maxTemp.textContent = `${week[i].day.maxtemp_f}`;\n            minTemp.textContent = `${week[i].day.mintemp_f}`;\n            date.textContent = `${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.formatDate)(week[i].date)}`;\n\n\n            // append elements\n            card.appendChild(condition);\n            card.appendChild(maxTemp);\n            card.appendChild(minTemp);\n            card.appendChild(date)\n            forecastContainer.appendChild(card);\n\n            // assign class\n            card.classList = 'card';\n            condition.classList = 'condition-img';\n            maxTemp.classList = 'max-temp';\n            minTemp.classList = 'min-temp';\n        }\n\n        forecastContainer.classList = 'forecast-container';\n    };\n\n    // celsius\n    const displayWeek_C = week => {\n        // reset html\n        forecastContainer.innerHTML = '';\n        for (let i = 0; i < week.length; i++) {\n            // create html elements\n            const card = document.createElement('div');\n            const maxTemp = document.createElement('p');\n            const minTemp = document.createElement('p');\n            const condition = document.createElement('img');\n            const date = document.createElement('p');\n\n            // set content\n            condition.src = `${week[i].day.condition.icon}`;\n            maxTemp.textContent = `${week[i].day.maxtemp_c}`;\n            minTemp.textContent = `${week[i].day.mintemp_c}`;\n            date.textContent = `${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.formatDate)(week[i].date)}`;\n\n\n            // append elements\n            card.appendChild(condition);\n            card.appendChild(maxTemp);\n            card.appendChild(minTemp);\n            card.appendChild(date)\n            forecastContainer.appendChild(card);\n\n            // assign class\n            card.classList = 'card';\n            condition.classList = 'condition-img';\n            maxTemp.classList = 'max-temp';\n            minTemp.classList = 'min-temp';\n        }\n\n        forecastContainer.classList = 'forecast-container';\n    };\n\n    const displayCurrentWeather_C = (location, weather, update) => {\n        (0,_dynamicBackground__WEBPACK_IMPORTED_MODULE_0__.background)(weather.condition.text)\n        // reset html\n        currentWeatherContainer.innerHTML = '';\n\n        // create html elements\n        const condition = document.createElement('img');\n        const feelsLikeEl = document.createElement(\"div\");\n        const tempEl = document.createElement('p');\n        const locationEl = document.createElement(\"div\");\n        const updateEl = document.createElement('div');\n\n        // set content\n        condition.src = `${weather.condition.icon}`;\n        feelsLikeEl.textContent = `Feels like ${weather.feelslike_c}`;\n        tempEl.textContent = `${weather.temp_c}`;\n        locationEl.textContent = `${location.city}, ${location.state}`;\n        updateEl.textContent = `Updated ${(0,_dateFormatter__WEBPACK_IMPORTED_MODULE_1__.formatCurrentDate)(update)}`;\n\n\n        // append\n        currentWeatherContainer.appendChild(condition);\n        currentWeatherContainer.appendChild(feelsLikeEl);\n        currentWeatherContainer.appendChild(tempEl);\n        currentWeatherContainer.appendChild(locationEl);\n        currentWeatherContainer.appendChild(updateEl);\n\n        // assign class\n        currentWeatherContainer.classList = 'current-weather-container';\n        condition.classList = 'current-condition-img'\n        feelsLikeEl.classList = 'temperature';\n        tempEl.classList = 'current-temp';\n        locationEl.classList = 'current-location';\n        updateEl.classList = 'update';\n    };\n\n    return { displayCurrentWeather, displayWeek, displayWeek_C, displayCurrentWeather_C };\n})();\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/dom.js?");

/***/ }),

/***/ "./src/scripts/dynamicBackground.js":
/*!******************************************!*\
  !*** ./src/scripts/dynamicBackground.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   background: () => (/* binding */ background)\n/* harmony export */ });\nfunction background(value) {\n    const main = document.querySelector('main')\n    let condition = value.toLowerCase()\n    if (condition.includes('sunny')) {\n        main.style.backgroundImage = 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.473), rgb(254, 166, 32), rgb(85, 51, 1))'\n    }\n    else if (condition.includes('cloudy')) {\n        main.style.backgroundImage = 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.473), rgb(0, 185, 223), rgb(0, 185, 223))'\n    }\n    else if (condition.includes('rain')) {\n        main.style.backgroundImage = 'linear-gradient(to bottom right, rgb(111, 158, 194), rgb(10, 52, 85), rgb(0, 16, 27))'\n    }\n    else if (condition.includes('snow')) {\n        main.style.backgroundImage = 'linear-gradient(to bottom right, rgb(250, 250, 250), rgb(102, 177, 216), rgb(48, 79, 95))'\n    }\n    else if (condition.includes('mist')) {\n        main.style.backgroundImage = 'linear-gradient(to bottom right, rgb(227, 229, 231), rgb(26, 179, 135), rgb(10, 75, 56)))'\n    }\n    else if (condition.includes('heavy')) {\n        main.style.backgroundImage = 'linear-gradient(to bottom right, #727070, #776e9c, #0602161))'\n    }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/dynamicBackground.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   search: () => (/* binding */ search)\n/* harmony export */ });\n/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication */ \"./src/scripts/authentication.js\");\n/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast */ \"./src/scripts/forecast.js\");\n/* harmony import */ var _currentWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentWeather */ \"./src/scripts/currentWeather.js\");\n\n\n\n\n// fetch weatherAPI\n// display weatherAPI data\n// display weatherAPI 3 day forecast\n// display in F & C\n// search current weather for desired location\n\nasync function search(value) {\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/search.json?key=${_authentication__WEBPACK_IMPORTED_MODULE_0__.AUTHENTICATION}&q=${value}`,\n    { mode: \"cors\" }\n  );\n  response.json().then(function (response) {\n    if (response.length < 1) {\n      console.log(response)\n      alert('please type a city, state, or country')\n    }\n    else {\n      let location = response[0].name;\n      getForecast(location);\n      getCurrentWeather(location);\n    }\n  });\n\n}\n\nasync function getForecast(value) {\n  try {\n    const response = await fetch(\n      `https://api.weatherapi.com/v1/forecast.json?key=${_authentication__WEBPACK_IMPORTED_MODULE_0__.AUTHENTICATION}&q=${value}&days=3`,\n      { mode: \"cors\" }\n    );\n\n    response.json().then(function (response) {\n      (0,_forecast__WEBPACK_IMPORTED_MODULE_1__.forecastInfo)(response);\n    });\n  } catch (error) {\n    alert('error please try again')\n  }\n}\n\nasync function getCurrentWeather(value) {\n  try {\n    const response = await fetch(\n      `https://api.weatherapi.com/v1/current.json?key=${_authentication__WEBPACK_IMPORTED_MODULE_0__.AUTHENTICATION}&q=${value}`,\n      { mode: \"cors\" }\n    );\n\n    response.json().then(function (response) {\n      (0,_currentWeather__WEBPACK_IMPORTED_MODULE_2__.currentWeatherInfo)(response);\n    });\n  } catch (error) {\n    alert('error please try again')\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/weatherAPI.js?");

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