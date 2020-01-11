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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/footer/footer.css":
/*!***********************************!*\
  !*** ./src/app/footer/footer.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/footer/footer.css?");

/***/ }),

/***/ "./src/app/header/header.css":
/*!***********************************!*\
  !*** ./src/app/header/header.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/header/header.css?");

/***/ }),

/***/ "./src/app/header/header.js":
/*!**********************************!*\
  !*** ./src/app/header/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(document.querySelector('.header__item'));\n\n//# sourceURL=webpack:///./src/app/header/header.js?");

/***/ }),

/***/ "./src/app/login/login.css":
/*!*********************************!*\
  !*** ./src/app/login/login.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/login/login.css?");

/***/ }),

/***/ "./src/app/login/login.js":
/*!********************************!*\
  !*** ./src/app/login/login.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/login/login.js?");

/***/ }),

/***/ "./src/app/main/main.css":
/*!*******************************!*\
  !*** ./src/app/main/main.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/main/main.css?");

/***/ }),

/***/ "./src/app/main/main.js":
/*!******************************!*\
  !*** ./src/app/main/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/main/main.js?");

/***/ }),

/***/ "./src/app/slider/slider.css":
/*!***********************************!*\
  !*** ./src/app/slider/slider.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/slider/slider.css?");

/***/ }),

/***/ "./src/app/slider/slider.js":
/*!**********************************!*\
  !*** ./src/app/slider/slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sliderMain() {\n  var mainElement = document.querySelector('.slider');\n  var sliderWrapper = mainElement.querySelector('.slider__wrapper');\n  var sliderItems = mainElement.querySelectorAll('.slider__item');\n  var sliderControls = mainElement.querySelectorAll('.slider__control');\n  var sliderControlLeft = mainElement.querySelector('.slider__control_left');\n  var sliderControlRight = mainElement.querySelector('.slider__control_right');\n  var wrapperWidth = parseInt(getComputedStyle(sliderWrapper).width);\n  var itemWidth = parseInt(getComputedStyle(sliderItems[0]).width);\n  var positionLeftItem = 0;\n  var transform = 0;\n  var step = itemWidth / wrapperWidth * 100;\n  var items = [];\n  sliderItems.forEach(function (item, index) {\n    items.push({\n      item: item,\n      position: index,\n      transform: 0\n    });\n  });\n  var position = {\n    getMin: 0,\n    getMax: items.length - 1\n  };\n\n  function transformItem(direction) {\n    if (direction == 'right') {\n      if (positionLeftItem + wrapperWidth / itemWidth - 1 >= position.getMax) {\n        return;\n      }\n\n      if (!sliderControlLeft.classList.contains('slider__control_show')) {\n        sliderControlLeft.classList.add('slider__control_show');\n      }\n\n      if (sliderControlRight.classList.contains('slider__control_show') && positionLeftItem + wrapperWidth / itemWidth >= position.getMax) {\n        sliderControlRight.classList.remove('slider__control_show');\n      }\n\n      positionLeftItem++;\n      transform -= step;\n    }\n\n    if (direction == 'left') {\n      if (positionLeftItem <= position.getMin) {\n        return;\n      }\n\n      if (!sliderControlRight.classList.contains('slider__control_show')) {\n        sliderControlRight.classList.add('slider__control_show');\n      }\n\n      if (sliderControlLeft.classList.contains('slider__control_show') && positionLeftItem - 1 <= position.getMin) {\n        sliderControlLeft.classList.remove('slider__control_show');\n      }\n\n      positionLeftItem--;\n      transform += step;\n    }\n\n    sliderWrapper.style.transform = 'translateX(' + transform + '%)';\n  }\n\n  function controlClick(event) {\n    if (event.target.classList.contains('slider__control')) {\n      event.preventDefault();\n      var direction = event.target.classList.contains('slider__control_right') ? 'right' : 'left';\n      transformItem(direction);\n    }\n  }\n\n  function setUpListeners() {\n    sliderControls.forEach(function (item) {\n      item.addEventListener('click', controlClick);\n    });\n  }\n\n  setUpListeners();\n}\n\nfunction hideSlider() {\n  var button = document.querySelector('.hide-slider__button');\n  var slider = document.getElementsByClassName('slider')[0];\n  var labelImg = document.querySelector('.hide-slider__label').firstChild;\n  button.addEventListener('click', function () {\n    slider.classList.toggle('shown');\n    var shown = slider.classList.contains('shown');\n\n    if (shown) {\n      labelImg.src = './src/app/images/arrow-up.png';\n    } else {\n      labelImg.src = './src/app/images/arrow-down.png';\n    }\n  });\n}\n\nhideSlider();\nsliderMain();\n\n//# sourceURL=webpack:///./src/app/slider/slider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_header_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/header/header.css */ \"./src/app/header/header.css\");\n/* harmony import */ var _app_header_header_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_header_header_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/header/header.js */ \"./src/app/header/header.js\");\n/* harmony import */ var _app_header_header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_header_header_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_slider_slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/slider/slider.css */ \"./src/app/slider/slider.css\");\n/* harmony import */ var _app_slider_slider_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_slider_slider_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_slider_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/slider/slider.js */ \"./src/app/slider/slider.js\");\n/* harmony import */ var _app_slider_slider_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_slider_slider_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_main_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/main/main.css */ \"./src/app/main/main.css\");\n/* harmony import */ var _app_main_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_main_main_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_main_main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/main/main.js */ \"./src/app/main/main.js\");\n/* harmony import */ var _app_main_main_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_main_main_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_footer_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/footer/footer.css */ \"./src/app/footer/footer.css\");\n/* harmony import */ var _app_footer_footer_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_footer_footer_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _app_login_login_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/login/login.css */ \"./src/app/login/login.css\");\n/* harmony import */ var _app_login_login_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_app_login_login_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _app_login_login_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/login/login.js */ \"./src/app/login/login.js\");\n/* harmony import */ var _app_login_login_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_app_login_login_js__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });