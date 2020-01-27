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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dialog/index.js":
/*!*****************************!*\
  !*** ./src/dialog/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Dialog =\n/*#__PURE__*/\nfunction () {\n  function Dialog() {\n    _classCallCheck(this, Dialog);\n\n    this._createDialog();\n  }\n\n  _createClass(Dialog, [{\n    key: \"_createDialog\",\n    value: function _createDialog() {\n      var _this = this;\n\n      this.overlay = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createComponent\"])('div', 'overlay', 'dialog-overlay');\n      this.dialogWindow = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createComponent\"])('div', 'inner content', 'dialog-popup');\n      this.overlay.appendChild(this.dialogWindow);\n      this.overlay.addEventListener('click', function () {\n        _this.close();\n      });\n      this.dialogWindow.addEventListener('click', function (event) {\n        event.stopPropagation();\n      });\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this.opened = true;\n      document.body.appendChild(this.overlay);\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.opened = false;\n      document.body.removeChild(this.overlay);\n    }\n  }]);\n\n  return Dialog;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dialog);\n\n//# sourceURL=webpack:///./src/dialog/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createComponent */ \"./src/utils/createComponent.js\");\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ \"./src/dialog/index.js\");\n\n\nvar button = Object(_utils_createComponent__WEBPACK_IMPORTED_MODULE_0__[\"createComponent\"])('button', 'open', 'button');\nvar dialog = new _dialog__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ndocument.body.appendChild(button);\nbutton.addEventListener('click', function () {\n  !dialog.opened ? dialog.open() : dialog.close();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/createComponent.js":
/*!**************************************!*\
  !*** ./src/utils/createComponent.js ***!
  \**************************************/
/*! exports provided: createComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createComponent\", function() { return createComponent; });\nvar createComponent = function createComponent(type, innerText, classNames) {\n  var element = document.createElement(type);\n  element.classList = classNames;\n  element.innerText = innerText;\n  return element;\n};\n\n//# sourceURL=webpack:///./src/utils/createComponent.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: createComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createComponent */ \"./src/utils/createComponent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createComponent\", function() { return _createComponent__WEBPACK_IMPORTED_MODULE_0__[\"createComponent\"]; });\n\n\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ })

/******/ });