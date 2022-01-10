/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/ui.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/ui.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  height: 100vh;\\n  width: 100%;\\n  margin: 0;\\n  padding: 0; }\\n\\n#content {\\n  display: flex;\\n  height: 100vh;\\n  width: 100%;\\n  flex-direction: column; }\\n  #content header {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    background-color: #f3736a;\\n    height: 60px; }\\n    #content header #menuBtn {\\n      background: none;\\n      border: none;\\n      font-size: 2em;\\n      cursor: pointer; }\\n  #content #main {\\n    display: flex;\\n    justify-content: center;\\n    height: 100%;\\n    width: 100%; }\\n  #content #formBg {\\n    position: absolute;\\n    height: 100%;\\n    width: 100%;\\n    background: #00000021;\\n    z-index: 1; }\\n  #content #form {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%) scale(1);\\n    background-color: #ffffff;\\n    border-radius: 0.5em;\\n    box-shadow: #000000 0px 0px 20px;\\n    z-index: 2;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-evenly;\\n    align-items: flex-start;\\n    padding: 2em; }\\n    #content #form .formTitle {\\n      font-weight: 800;\\n      align-self: center;\\n      font-size: 1.1em;\\n      margin-bottom: 1em; }\\n    #content #form .formLabel {\\n      line-height: 1em;\\n      color: #747474; }\\n    #content #form .formText {\\n      background: #ffffff;\\n      border: solid #747474 1px;\\n      border-radius: 0.2em;\\n      width: 18em;\\n      height: 2em;\\n      margin-bottom: 1em; }\\n    #content #form .formSubmit {\\n      align-self: center;\\n      height: 2.5em;\\n      width: 8em;\\n      margin-top: 1em;\\n      border-style: none;\\n      background-color: #4d72d8;\\n      box-shadow: #00000073 0px 0px 4px;\\n      color: white;\\n      font-weight: 600;\\n      border-radius: 1em;\\n      transition: 0.2s; }\\n      #content #form .formSubmit:hover {\\n        background-color: #6884d3; }\\n      #content #form .formSubmit:active {\\n        background-color: #8096d1; }\\n  #content #left {\\n    background: #e9e9e9;\\n    height: 100%;\\n    width: 200px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 2em;\\n    transition: 0.3s; }\\n    #content #left #projectList {\\n      display: flex;\\n      flex-direction: column;\\n      align-items: flex-start;\\n      justify-content: flex-start;\\n      width: 100%;\\n      height: 100%;\\n      padding-top: 1.2em;\\n      gap: 0.5em; }\\n      #content #left #projectList #projectsTitleTop {\\n        display: flex;\\n        width: 100%;\\n        justify-content: space-between;\\n        align-items: center;\\n        border-bottom: solid black 1px; }\\n        #content #left #projectList #projectsTitleTop #projectsTitle {\\n          font-weight: 700;\\n          font-size: 1.2em;\\n          margin-bottom: 0.2em; }\\n        #content #left #projectList #projectsTitleTop #newProjectBtn {\\n          padding: 0;\\n          background: none;\\n          border: none;\\n          font-size: 2em;\\n          cursor: pointer; }\\n          #content #left #projectList #projectsTitleTop #newProjectBtn:hover {\\n            color: #555555; }\\n      #content #left #projectList .project,\\n      #content #left #projectList .projectActive {\\n        height: 1.2em;\\n        display: flex;\\n        justify-content: space-between;\\n        align-items: center;\\n        cursor: pointer;\\n        font-weight: 400;\\n        color: #4e4e4e;\\n        width: 100%;\\n        border-radius: 0.2em;\\n        padding: 0.1em;\\n        transition: 0.2s; }\\n        #content #left #projectList .project:hover,\\n        #content #left #projectList .projectActive:hover {\\n          color: #292929;\\n          background-color: #ffffff; }\\n        #content #left #projectList .project:active,\\n        #content #left #projectList .projectActive:active {\\n          color: black; }\\n        #content #left #projectList .project .projectTitle,\\n        #content #left #projectList .projectActive .projectTitle {\\n          width: 100%; }\\n        #content #left #projectList .project .projectDelBtn,\\n        #content #left #projectList .projectActive .projectDelBtn {\\n          display: flex;\\n          align-items: center;\\n          justify-content: center;\\n          background: none;\\n          border: none;\\n          transition: 0.2s;\\n          font-size: 0.7em; }\\n          #content #left #projectList .project .projectDelBtn:hover,\\n          #content #left #projectList .projectActive .projectDelBtn:hover {\\n            font-size: 1em; }\\n      #content #left #projectList .projectActive {\\n        color: #000000;\\n        font-weight: 500; }\\n        #content #left #projectList .projectActive:hover {\\n          color: black; }\\n  #content #right {\\n    background-color: #ffffff;\\n    width: auto;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    flex: 1;\\n    padding: 2em;\\n    overflow: hidden; }\\n    #content #right #selectedProject {\\n      width: 100%;\\n      height: 100%;\\n      display: flex;\\n      flex-direction: column;\\n      align-items: flex-start;\\n      padding-top: 2em; }\\n      #content #right #selectedProject #selectedProjectTop {\\n        display: flex;\\n        gap: 0.2em;\\n        flex-direction: column;\\n        justify-content: flex-end; }\\n        #content #right #selectedProject #selectedProjectTop #selectedProjectTitle,\\n        #content #right #selectedProject #selectedProjectTop #selectedProjectDescription {\\n          height: 30px;\\n          display: flex;\\n          font-size: 1.5em;\\n          font-weight: 800;\\n          line-height: 32px;\\n          padding-left: 2px;\\n          cursor: pointer; }\\n        #content #right #selectedProject #selectedProjectTop:hover {\\n          color: #4e4e4e; }\\n        #content #right #selectedProject #selectedProjectTop #selectedProjectDescription {\\n          font-size: 1em;\\n          font-weight: 500;\\n          line-height: 31px;\\n          align-items: flex-start; }\\n        #content #right #selectedProject #selectedProjectTop #projectTitleEdit,\\n        #content #right #selectedProject #selectedProjectTop #projectDescriptionEdit {\\n          font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n          resize: none;\\n          border: none;\\n          display: flex;\\n          height: 30px;\\n          font-size: 1.5em;\\n          font-weight: 800;\\n          justify-content: center;\\n          background-color: #e6e6e6;\\n          border-radius: 0.3em;\\n          color: #464646; }\\n          #content #right #selectedProject #selectedProjectTop #projectTitleEdit::selection,\\n          #content #right #selectedProject #selectedProjectTop #projectDescriptionEdit::selection {\\n            background-color: #969696; }\\n          #content #right #selectedProject #selectedProjectTop #projectTitleEdit::placeholder,\\n          #content #right #selectedProject #selectedProjectTop #projectDescriptionEdit::placeholder {\\n            font-weight: 200;\\n            color: #999999; }\\n        #content #right #selectedProject #selectedProjectTop #projectDescriptionEdit {\\n          font-size: 1em;\\n          font-weight: 500; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/styles/ui.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/ui.scss":
/*!****************************!*\
  !*** ./src/styles/ui.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./ui.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/ui.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ui_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/styles/ui.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/assets/ sync ^\.\/.*$ ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./ctc-img1.jpg\": \"./src/assets/ctc-img1.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://todo/./src/assets/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ui.js */ \"./src/js/ui.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', (0,_js_ui_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDom\": () => (/* binding */ createDom)\n/* harmony export */ });\nfunction createDom(domType, domId, domClass, domImgSource) {\n  let dom = document.createElement(domType);\n  if (domId) dom.setAttribute(\"id\", domId);\n  if (domClass) dom.classList.add(domClass);\n  if (domImgSource) dom.setAttribute(\"src\", getSource(domImgSource));\n  return dom;\n}\n\nfunction getSource(e) {\n    let source = __webpack_require__(\"./src/assets sync recursive ^\\\\.\\\\/.*$\")(`./${e}`);\n    console.log(source);\n    return source\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n\n\nfunction createHeader() {\n  let leftStatus = true;\n  content.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"header\", \"header\"));\n\n  header.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"div\", \"headerLeft\"));\n  headerLeft.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"button\", \"menuBtn\"));\n  menuBtn.textContent = \"☰\";\n  menuBtn.addEventListener(\"click\", () => {\n    toggleLeft();\n  });\n\n  header.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"div\", \"headerRight\"));\n\n  function toggleLeft() {\n    if (leftStatus === true) {\n      //   left.setAttribute(\"id\", \"leftHidden\");\n      left.style.transform = \"translateX(-150px)\";\n      left.style.width = \"0\";\n      left.style.padding = \"2em 0\";\n      leftStatus = false;\n    } else {\n        // leftHidden.setAttribute(\"id\", \"left\");\n        left.style.transform = \"none\";\n        left.style.width = \"200px\";\n        left.style.padding = \"2em\";\n\n      leftStatus = true;\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n\n//# sourceURL=webpack://todo/./src/js/header.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"listProjects\": () => (/* binding */ listProjects),\n/* harmony export */   \"updateProject\": () => (/* binding */ updateProject),\n/* harmony export */   \"removeProject\": () => (/* binding */ removeProject),\n/* harmony export */   \"restore\": () => (/* binding */ restore)\n/* harmony export */ });\nlet projects;\n\nfunction restore() {\n  if (!localStorage.myLibrary) projects = [];\n  else {\n    let items = localStorage.getItem(\"projects\");\n    items = JSON.parse(items);\n    projects = items;\n  }\n}\nfunction sendToLocal() {\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n}\n\nfunction createProject(arr) {\n  projects.push({\n    title: arr[0],\n    description: arr[1],\n    tasks: [],\n  });\n  sendToLocal();\n}\nfunction updateProject(index, type, update) {\n  if (type === \"title\") projects[index].title = update;\n  if (type === \"description\") projects[index].description = update;\n  sendToLocal();\n}\nfunction removeProject(i) {\n    projects.splice(i, 1)\n    sendToLocal()\n}\nfunction listProjects() {\n  return projects;\n}\n\n\n\n//# sourceURL=webpack://todo/./src/js/project.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _styles_ui_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ui.scss */ \"./src/styles/ui.scss\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n\n\n\n\n\nfunction loadHomepage() {\n  (0,_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  content.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"div\", \"main\"));\n  main.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"div\", \"left\"));\n  main.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"div\", \"right\"));\n  (0,_project__WEBPACK_IMPORTED_MODULE_1__.restore)();\n  renderProjectLeft();\n}\n\nfunction renderProjectLeft() {\n  //creates project list\n  (function createProjectList() {\n    // create projectList div and Description\n    left.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"div\", \"projectList\"));\n    projectList.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"div\", \"projectsTitleTop\"));\n    projectsTitleTop.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"span\", \"projectsTitle\"));\n    projectsTitle.textContent = \"Projects\";\n\n    projectsTitleTop.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"button\", \"newProjectBtn\"));\n    newProjectBtn.textContent = \"+\";\n\n    //create form on button click\n    newProjectBtn.addEventListener(\"click\", () => {\n      createForm();\n      form.innerHTML = `\n                <span class=\"formTitle\">NEW PROJECT</span>\n                <label class =\"formLabel\" for =\"projectName\">Title*</label>\n                <input require type=\"text\" class = \"formText\" id=\"projectName\" name =\"projectName\">\n                <label class =\"formLabel\" for =\"projectDescription\">Description</label>\n                <input require type=\"text\" class = \"formText\" id=\"projectDescription\" name =\"projectDescription\">\n                <button type=\"submit\" class =\"formSubmit\" id =\"projectSubmit\">Submit</button>\n                `;\n      //submit eventlistener\n      projectSubmit.addEventListener(\"click\", (e) => {\n        (0,_project__WEBPACK_IMPORTED_MODULE_1__.createProject)(returnFormSubmit(e));\n        let projects = (0,_project__WEBPACK_IMPORTED_MODULE_1__.listProjects)();\n        let index = projects.length - 1;\n        renderProject(index);\n        toggleProject(index);\n      });\n    });\n  })();\n  //creates a project named \"default\" if no projects saved\n  (function reloadProjects() {\n    let projects = (0,_project__WEBPACK_IMPORTED_MODULE_1__.listProjects)();\n    if (projects === []) {\n      (0,_project__WEBPACK_IMPORTED_MODULE_1__.createProject)([\"Default\", \"No Description\"]);\n      renderProject(0);\n      renderProjectRight(0);\n    } else {\n      for (let i = 0; i < projects.length; i++) {\n        renderProject(i);\n      }\n      renderProjectRight(0);\n      toggleProject(0);\n    }\n  })();\n  //renders the new project on the left\n  function renderProject(i) {\n    let projects = (0,_project__WEBPACK_IMPORTED_MODULE_1__.listProjects)();\n    projectList.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"div\", `project${i}`, \"project\"));\n\n    //renders title & delete btn\n    const project = document.getElementById(`project${i}`);\n    project.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"div\", `projectTitle${i}`, \"projectTitle\"));\n    project.appendChild(\n      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"button\", `projectDelBtn${i}`, \"projectDelBtn\")\n    ).textContent = \"🗑️\";\n\n    //listener for project selection & del btn\n    const projectTitle = document.getElementById(`projectTitle${i}`);\n    projectTitle.addEventListener(\"click\", () => {\n      toggleProject(i);\n    });\n    document\n      .getElementById(`projectDelBtn${i}`)\n      .addEventListener(\"click\", () => {\n        removeProjectLeft(i);\n        toggleProject(i - 1);\n      });\n\n    projectTitle.textContent = `• ${projects[i].title}`;\n  }\n\n  function toggleProject(i) {\n    toggleProjectClass();\n    let project = document.getElementById(`project${i}`);\n    project.className = \"projectActive\";\n    removeProjectRight();\n    renderProjectRight(i);\n    function toggleProjectClass() {\n      document.querySelectorAll(\".projectActive\").forEach((e) => {\n        e.className = \"project\";\n      });\n    }\n  }\n}\nfunction removeProjectLeft(i) {\n  let project = document.getElementById(`project${i}`);\n  projectList.removeChild(project);\n  (0,_project__WEBPACK_IMPORTED_MODULE_1__.removeProject)(i);\n}\nfunction renderProjectRight(i) {\n  let projects = (0,_project__WEBPACK_IMPORTED_MODULE_1__.listProjects)();\n  right.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"div\", \"selectedProject\"));\n\n  //renders top part of the project\n  createSelectedProjectTop();\n  function createSelectedProjectTop() {\n    selectedProject.innerHTML = \"\";\n    selectedProject.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"div\", \"selectedProjectTop\"));\n\n    selectedProjectTop.appendChild(\n      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"span\", \"selectedProjectTitle\")\n    ).textContent = projects[i].title;\n\n    selectedProjectTop.appendChild(\n      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"span\", \"selectedProjectDescription\")\n    ).textContent = projects[i].description;\n\n    //listeners for opening edit\n    selectedProjectTitle.addEventListener(\"click\", projectTopEdit);\n    selectedProjectDescription.addEventListener(\"click\", projectTopEdit);\n  }\n  function projectTopEdit() {\n    selectedProjectTop.innerHTML = `\n    <textarea id=\"projectTitleEdit\" name =\"projectTitleEdit\" placeHolder=\"Title\">${selectedProjectTitle.textContent}</textarea>\n    <textarea id=\"projectDescriptionEdit\" name =\"projectDescriptionEdit\" placeHolder=\"Description\">${selectedProjectDescription.textContent}</textarea>\n    <button id=\"projectEditConfirm\">Confirm</button>\n    `;\n    projectEditConfirm.addEventListener(\"click\", () => {\n      let project = document.getElementById(`project${i}`);\n      (0,_project__WEBPACK_IMPORTED_MODULE_1__.updateProject)(i, \"title\", projectTitleEdit.value);\n      (0,_project__WEBPACK_IMPORTED_MODULE_1__.updateProject)(i, \"description\", projectDescriptionEdit.value);\n      project.textContent = `• ${projectTitleEdit.value}`;\n      createSelectedProjectTop();\n    });\n  }\n}\nfunction removeProjectRight() {\n  right.removeChild(selectedProject);\n}\n\n//form functions\nfunction returnFormSubmit(e) {\n  e.preventDefault();\n  let arr = [];\n  arr.push(projectName.value);\n  arr.push(projectDescription.value);\n  removeForm();\n  return arr;\n}\nfunction createForm() {\n  content.prepend((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"div\", \"formBg\"));\n  formBg.addEventListener(\"click\", removeForm);\n  content.prepend((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createDom)(\"form\", \"form\"));\n}\nfunction removeForm() {\n  content.removeChild(formBg);\n  content.removeChild(form);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomepage);\n\n\n//# sourceURL=webpack://todo/./src/js/ui.js?");

/***/ }),

/***/ "./src/assets/ctc-img1.jpg":
/*!*********************************!*\
  !*** ./src/assets/ctc-img1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a24a96e9ba20a01dfdac.jpg\";\n\n//# sourceURL=webpack://todo/./src/assets/ctc-img1.jpg?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;