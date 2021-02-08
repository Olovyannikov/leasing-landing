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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var items = document.querySelectorAll(\".accordion button\");\n\n  var _loop = function _loop(i) {\n    items[i].addEventListener('click', function () {\n      items[i].classList.toggle('accordion-button--active');\n    });\n  };\n\n  for (var i = 0; i < items.length; i++) {\n    _loop(i);\n  }\n\n  function toggleAccordion() {\n    var itemToggle = this.getAttribute('aria-expanded');\n\n    for (var _i = 0; _i < items.length; _i++) {\n      items[_i].setAttribute('aria-expanded', 'false');\n    }\n\n    if (itemToggle === 'false') {\n      this.setAttribute('aria-expanded', 'true');\n    }\n  }\n\n  items.forEach(function (item) {\n    return item.addEventListener('click', toggleAccordion);\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/accordion.js?");

/***/ }),

/***/ "./src/js/modules/animation.js":
/*!*************************************!*\
  !*** ./src/js/modules/animation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var animItems = document.querySelectorAll('._anim-items');\n\n  if (animItems.length > 0) {\n    var animOnScroll = function animOnScroll() {\n      for (var i = 0; i < animItems.length; i++) {\n        var animItem = animItems[i];\n        var animItemHeight = animItem.offsetHeight;\n        var animItemOffset = offset(animItem).top;\n        var animStart = 4;\n        var animItemPoint = window.innerHeight - animItemHeight / animStart;\n\n        if (animItemHeight > window.innerHeight) {\n          animItemPoint = window.innerHeight - window.innerHeight / animStart;\n        }\n\n        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {\n          animItem.classList.add('_active');\n        } else {\n          if (!animItem.classList.contains('_anim-no-hide')) {\n            animItem.classList.remove('_active');\n          }\n        }\n      }\n    };\n\n    var offset = function offset(el) {\n      var rect = el.getBoundingClientRect();\n      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;\n      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n      return {\n        top: rect.top + scrollTop,\n        left: rect.left + scrollLeft\n      };\n    };\n\n    window.addEventListener('scroll', animOnScroll);\n    setTimeout(function () {\n      animOnScroll();\n    }, 300);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/animation.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animation */ \"./src/js/modules/animation.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion */ \"./src/js/modules/accordion.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  Object(_modules_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });