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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --primary: #60a5fa;\r\n  --background: #e2e8f0;\r\n  --box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--background);\r\n}\r\n\r\nheader {\r\n  padding: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  background: linear-gradient(\r\n    170deg,\r\n    var(--primary) 0,\r\n    var(--primary) 60%,\r\n    var(--background) 60%,\r\n    var(--background) 80%\r\n  );\r\n}\r\n\r\n.profilecontainer {\r\n  max-width: 60rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.profiledisplay {\r\n  max-width: 30rem;\r\n  position: relative;\r\n}\r\n\r\n.portrait {\r\n  max-width: 30rem;\r\n  object-fit: cover;\r\n  height: auto;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.profiledisplay h1 {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: white;\r\n  font-weight: normal;\r\n  font-size: 3rem;\r\n  letter-spacing: 3px;\r\n}\r\n\r\n.playfair {\r\n  font-family: 'Playfair Display', serif;\r\n}\r\n\r\n.aboutbox {\r\n  max-height: 20rem;\r\n  padding: 30px 20px;\r\n  background-color: white;\r\n  box-shadow: var(--box-shadow);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n}\r\n\r\nh2 {\r\n  font-weight: 500;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.aboutbox p {\r\n  letter-spacing: 1px;\r\n  padding: 5px 0px;\r\n}\r\n\r\n.aboutbox .icons {\r\n  padding: 0px 15px;\r\n}\r\n\r\n.icons {\r\n  display: flex;\r\n  gap: 15px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.icon {\r\n  background-color: transparent;\r\n  border: none;\r\n  width: 25px;\r\n  height: auto;\r\n  cursor: pointer;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.icon:hover {\r\n  transform: scale(1.4);\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  padding: 20px;\r\n  align-items: center;\r\n  margin-bottom: 10rem;\r\n}\r\n\r\n.projectcontainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 3rem;\r\n  max-width: 1100px;\r\n}\r\n\r\n.project {\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: var(--box-shadow);\r\n  flex: 1 1 15rem;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.project:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.projectdisplay {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  padding: 10px;\r\n  color: white;\r\n  height: 20rem;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.projectinfo {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 15px;\r\n  height: 12rem;\r\n}\r\n\r\n.projectinfoheader {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\nfooter {\r\n  padding: 3rem 8rem;\r\n  background-color: var(--primary);\r\n  color: white;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 5rem;\r\n}\r\n\r\n.contactinfo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2.5rem;\r\n}\r\n\r\n.contactinfocontainer {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\nfooter .icon {\r\n  filter: invert();\r\n}\r\n\r\n@media (max-width: 944px) {\r\n  .portrait {\r\n    max-width: 20rem;\r\n  }\r\n\r\n  .profiledisplay h1 {\r\n    font-size: 2rem;\r\n    top: 3%;\r\n    transform: translateX(95%);\r\n  }\r\n}\r\n\r\n@media (max-width: 702px) {\r\n  .profilecontainer,\r\n  footer {\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  .aboutbox {\r\n    background-color: transparent;\r\n    box-shadow: none;\r\n  }\r\n\r\n  header {\r\n    background: linear-gradient(\r\n      180deg,\r\n      var(--primary) 0,\r\n      var(--primary) 60%,\r\n      var(--background) 60%,\r\n      var(--background) 80%\r\n    );\r\n  }\r\n\r\n  .profiledisplay h1 {\r\n    font-size: 3rem;\r\n    top: auto;\r\n    bottom: 0;\r\n    transform: none;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://homepage/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://homepage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://homepage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://homepage/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://homepage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderFooter)\n/* harmony export */ });\n/* harmony import */ var _icons_phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/phone.svg */ \"./src/icons/phone.svg\");\n/* harmony import */ var _icons_email_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/email.svg */ \"./src/icons/email.svg\");\n/* harmony import */ var _images_footer_large_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/footer_large.jpg */ \"./src/images/footer_large.jpg\");\n/* harmony import */ var _images_footer_small_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/footer_small.jpg */ \"./src/images/footer_small.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction renderFooter() {\r\n  const footer = document.createElement('footer');\r\n\r\n  const contactInfo = document.createElement('div');\r\n  contactInfo.className = 'contactinfo';\r\n\r\n  const contactMe = document.createElement('h2');\r\n  contactMe.className = 'playfair';\r\n  contactMe.textContent = 'Contact Me';\r\n\r\n  const getInTouch = document.createElement('p');\r\n  getInTouch.textContent =\r\n    'Please get in touch if you think our work could be mutually beneficial!';\r\n\r\n  const address = document.createElement('p');\r\n\r\n  address.innerHTML = '1234 Random Road <br>Random Town, California 12345';\r\n\r\n  const phone = document.createElement('div');\r\n  phone.className = 'contactinfocontainer';\r\n\r\n  const phoneButton = document.createElement('button');\r\n  phoneButton.className = 'footer icon';\r\n\r\n  const phoneIcon = new Image();\r\n  phoneIcon.src = _icons_phone_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n  phoneButton.appendChild(phoneIcon);\r\n\r\n  phone.appendChild(phoneButton);\r\n\r\n  const phoneNumber = document.createElement('p');\r\n  phoneNumber.textContent = '(555) 555-5555';\r\n\r\n  phone.appendChild(phoneNumber);\r\n\r\n  const email = document.createElement('div');\r\n  email.className = 'contactinfocontainer';\r\n\r\n  const emailButton = document.createElement('button');\r\n  emailButton.className = 'footer icon';\r\n\r\n  const emailIcon = new Image();\r\n  emailIcon.src = _icons_email_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n  emailButton.appendChild(emailIcon);\r\n\r\n  email.appendChild(emailButton);\r\n\r\n  const emailAddress = document.createElement('p');\r\n  emailAddress.textContent = 'ashleywilliams.is.not.real@gmail.com';\r\n\r\n  email.appendChild(emailAddress);\r\n\r\n  const icons = document.createElement('div');\r\n  icons.className = 'icons';\r\n\r\n  const githubButton = document.createElement('button');\r\n  githubButton.className = 'icon';\r\n\r\n  const githubIcon = new Image();\r\n  githubIcon.src =\r\n    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';\r\n\r\n  githubButton.appendChild(githubIcon);\r\n\r\n  icons.appendChild(githubButton);\r\n\r\n  const linkedInButton = document.createElement('button');\r\n  linkedInButton.className = 'icon';\r\n\r\n  const linkedInIcon = new Image();\r\n  linkedInIcon.src =\r\n    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg';\r\n\r\n  linkedInButton.appendChild(linkedInIcon);\r\n\r\n  icons.appendChild(linkedInButton);\r\n\r\n  const xButton = document.createElement('button');\r\n  xButton.className = 'icon';\r\n\r\n  const xIcon = new Image();\r\n  xIcon.src =\r\n    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg';\r\n\r\n  xButton.appendChild(xIcon);\r\n\r\n  icons.appendChild(xButton);\r\n\r\n  contactInfo.appendChild(contactMe);\r\n  contactInfo.appendChild(getInTouch);\r\n  contactInfo.appendChild(address);\r\n  contactInfo.appendChild(phone);\r\n  contactInfo.appendChild(email);\r\n  contactInfo.appendChild(icons);\r\n\r\n  footer.appendChild(contactInfo);\r\n\r\n  const footerImage = document.createElement('picture');\r\n\r\n  const footerLarge = document.createElement('source');\r\n  footerLarge.srcset = _images_footer_large_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n  footerLarge.media = '(min-width: 944px)';\r\n\r\n  const footerSmall = document.createElement('source');\r\n  footerLarge.srcset = _images_footer_small_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n  footerLarge.media = '(max-width: 944px)';\r\n\r\n  const defaultFooter = new Image();\r\n  defaultFooter.className = 'portrait';\r\n  defaultFooter.src = _images_footer_large_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\n  footerImage.appendChild(footerLarge);\r\n  footerImage.appendChild(footerSmall);\r\n  footerImage.appendChild(defaultFooter);\r\n\r\n  footer.appendChild(footerImage);\r\n\r\n  return footer;\r\n}\r\n\n\n//# sourceURL=webpack://homepage/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderHeader)\n/* harmony export */ });\n/* harmony import */ var _images_header_large_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/header_large.jpg */ \"./src/images/header_large.jpg\");\n/* harmony import */ var _images_header_small_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/header_small.jpg */ \"./src/images/header_small.jpg\");\n\r\n\r\n\r\nfunction renderHeader() {\r\n  const header = document.createElement('header');\r\n\r\n  const profileContainer = document.createElement('div');\r\n  profileContainer.className = 'profilecontainer';\r\n\r\n  const profiledisplay = document.createElement('div');\r\n  profiledisplay.className = 'profiledisplay';\r\n\r\n  const headerImage = document.createElement('picture');\r\n\r\n  const headerLarge = document.createElement('source');\r\n  headerLarge.srcset = _images_header_large_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  headerLarge.media = '(min-width: 944px)';\r\n\r\n  const headerSmall = document.createElement('source');\r\n  headerSmall.srcset = _images_header_small_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n  headerSmall.media = '(max-width: 944px)';\r\n\r\n  headerImage.appendChild(headerLarge);\r\n  headerImage.appendChild(headerSmall);\r\n\r\n  const defaultHeader = new Image();\r\n  defaultHeader.className = 'portrait';\r\n  defaultHeader.src = _images_header_large_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n  headerImage.appendChild(defaultHeader);\r\n\r\n  profiledisplay.appendChild(headerImage);\r\n\r\n  const profilename = document.createElement('h1');\r\n  profilename.className = 'playfair';\r\n  profilename.textContent = 'Ashley Williams';\r\n\r\n  profiledisplay.appendChild(profilename);\r\n\r\n  profileContainer.appendChild(profiledisplay);\r\n\r\n  const aboutBox = document.createElement('div');\r\n  aboutBox.className = 'aboutbox';\r\n\r\n  const aboutHeader = document.createElement('h2');\r\n  aboutHeader.className = 'playfair';\r\n  aboutHeader.textContent = 'About me';\r\n\r\n  aboutBox.appendChild(aboutHeader);\r\n\r\n  const aboutDescription = document.createElement('p');\r\n  aboutDescription.textContent =\r\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';\r\n\r\n  aboutBox.appendChild(aboutDescription);\r\n\r\n  const icons = document.createElement('div');\r\n  icons.className = 'icons';\r\n\r\n  const githubButton = document.createElement('button');\r\n  githubButton.className = 'icon';\r\n\r\n  const githubIcon = new Image();\r\n  githubIcon.src =\r\n    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';\r\n\r\n  githubButton.appendChild(githubIcon);\r\n\r\n  icons.appendChild(githubButton);\r\n\r\n  const linkedInButton = document.createElement('button');\r\n  linkedInButton.className = 'icon';\r\n\r\n  const linkedInIcon = new Image();\r\n  linkedInIcon.src =\r\n    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg';\r\n\r\n  linkedInButton.appendChild(linkedInIcon);\r\n\r\n  icons.appendChild(linkedInButton);\r\n\r\n  const xButton = document.createElement('button');\r\n  xButton.className = 'icon';\r\n\r\n  const xIcon = new Image();\r\n  xIcon.src =\r\n    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg';\r\n\r\n  xButton.appendChild(xIcon);\r\n\r\n  icons.appendChild(xButton);\r\n\r\n  aboutBox.appendChild(icons);\r\n\r\n  profileContainer.appendChild(aboutBox);\r\n\r\n  header.appendChild(profileContainer);\r\n\r\n  return header;\r\n}\r\n\n\n//# sourceURL=webpack://homepage/./src/components/header.js?");

/***/ }),

/***/ "./src/components/mywork.js":
/*!**********************************!*\
  !*** ./src/components/mywork.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderMyWork)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/components/project.js\");\n\r\n\r\nfunction renderMyWork() {\r\n  const colors = [\r\n    '#991b1b',\r\n    '#818cf8',\r\n    '#16a34a',\r\n    '#e879f9',\r\n    '#f59e0b',\r\n    '#38bdf8',\r\n  ];\r\n  const myWork = document.createElement('main');\r\n\r\n  const header = document.createElement('h2');\r\n  header.textContent = 'My work';\r\n  header.className = 'playfair';\r\n\r\n  myWork.appendChild(header);\r\n\r\n  const projects = document.createElement('div');\r\n  projects.className = 'projectcontainer';\r\n\r\n  for (let index = 0; index < 6; index++) {\r\n    projects.appendChild((0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(colors[index]));\r\n  }\r\n\r\n  myWork.appendChild(projects);\r\n\r\n  return myWork;\r\n}\r\n\n\n//# sourceURL=webpack://homepage/./src/components/mywork.js?");

/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _icons_openlink_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/openlink.svg */ \"./src/icons/openlink.svg\");\n\r\n\r\nfunction createProject(color) {\r\n  const project = document.createElement('div');\r\n  project.className = 'project';\r\n\r\n  const projectDisplay = document.createElement('div');\r\n  projectDisplay.className = 'projectdisplay playfair';\r\n  projectDisplay.style.backgroundColor = color;\r\n\r\n  projectDisplay.textContent = 'screenshot of project';\r\n\r\n  project.appendChild(projectDisplay);\r\n\r\n  const projectInfo = document.createElement('div');\r\n  projectInfo.className = 'projectinfo';\r\n\r\n  const projectInfoHeader = document.createElement('div');\r\n  projectInfoHeader.className = 'projectinfoheader';\r\n\r\n  const projectName = document.createElement('h3');\r\n  projectName.textContent = 'Project name';\r\n\r\n  projectInfoHeader.appendChild(projectName);\r\n\r\n  const icons = document.createElement('div');\r\n  icons.className = 'icons';\r\n\r\n  const githubButton = document.createElement('button');\r\n  githubButton.className = 'icon';\r\n\r\n  const githubIcon = new Image();\r\n  githubIcon.src =\r\n    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';\r\n\r\n  githubButton.appendChild(githubIcon);\r\n\r\n  icons.appendChild(githubButton);\r\n\r\n  const shareButton = document.createElement('button');\r\n  shareButton.className = 'icon';\r\n\r\n  const shareIcon = new Image();\r\n  shareIcon.src = _icons_openlink_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n  shareButton.appendChild(shareIcon);\r\n\r\n  icons.appendChild(shareButton);\r\n\r\n  projectInfoHeader.appendChild(icons);\r\n\r\n  projectInfo.appendChild(projectInfoHeader);\r\n\r\n  const projectDescription = document.createElement('p');\r\n\r\n  projectDescription.textContent =\r\n    'Short description of the project. Just a couple sentences will do.';\r\n\r\n  projectInfo.appendChild(projectDescription);\r\n\r\n  project.appendChild(projectInfo);\r\n\r\n  return project;\r\n}\r\n\n\n//# sourceURL=webpack://homepage/./src/components/project.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_mainpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/mainpage */ \"./src/pages/mainpage.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\r\n\r\n\r\n(0,_pages_mainpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://homepage/./src/index.js?");

/***/ }),

/***/ "./src/pages/mainpage.js":
/*!*******************************!*\
  !*** ./src/pages/mainpage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderMain)\n/* harmony export */ });\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_mywork__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/mywork */ \"./src/components/mywork.js\");\n\r\n\r\n\r\n\r\nfunction renderMain() {\r\n  const body = document.querySelector('body');\r\n\r\n  body.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n  body.appendChild((0,_components_mywork__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n  body.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n}\r\n\n\n//# sourceURL=webpack://homepage/./src/pages/mainpage.js?");

/***/ }),

/***/ "./src/icons/email.svg":
/*!*****************************!*\
  !*** ./src/icons/email.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c7a364af28c1fc7cbb30.svg\";\n\n//# sourceURL=webpack://homepage/./src/icons/email.svg?");

/***/ }),

/***/ "./src/icons/openlink.svg":
/*!********************************!*\
  !*** ./src/icons/openlink.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ede19ed228086e87d89.svg\";\n\n//# sourceURL=webpack://homepage/./src/icons/openlink.svg?");

/***/ }),

/***/ "./src/icons/phone.svg":
/*!*****************************!*\
  !*** ./src/icons/phone.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b454d6aeda1578fa2ba.svg\";\n\n//# sourceURL=webpack://homepage/./src/icons/phone.svg?");

/***/ }),

/***/ "./src/images/footer_large.jpg":
/*!*************************************!*\
  !*** ./src/images/footer_large.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d1da618d57b819506356.jpg\";\n\n//# sourceURL=webpack://homepage/./src/images/footer_large.jpg?");

/***/ }),

/***/ "./src/images/footer_small.jpg":
/*!*************************************!*\
  !*** ./src/images/footer_small.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"274e79af544aac57722b.jpg\";\n\n//# sourceURL=webpack://homepage/./src/images/footer_small.jpg?");

/***/ }),

/***/ "./src/images/header_large.jpg":
/*!*************************************!*\
  !*** ./src/images/header_large.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"60a231a102535c5a53a0.jpg\";\n\n//# sourceURL=webpack://homepage/./src/images/header_large.jpg?");

/***/ }),

/***/ "./src/images/header_small.jpg":
/*!*************************************!*\
  !*** ./src/images/header_small.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb706dfc91edfbc61a5f.jpg\";\n\n//# sourceURL=webpack://homepage/./src/images/header_small.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;