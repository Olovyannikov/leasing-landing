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

/***/ "./src/js/modules/inputmask.js":
/*!*************************************!*\
  !*** ./src/js/modules/inputmask.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar inputMask = function inputMask() {\n  var inputPhone = document.getElementById(\"maskTel\");\n\n  inputPhone.oninput = function () {\n    return phoneMask(inputPhone);\n  };\n\n  function phoneMask(inputEl) {\n    var patStringArr = \"+7(___)___-__-__\".split('');\n    var arrPush = [3, 4, 5, 7, 8, 9, 11, 12, 14, 15];\n    var val = inputEl.value;\n    var arr = val.replace(/\\D+/g, \"\").split('').splice(1);\n    var n;\n    var ni;\n    arr.forEach(function (s, i) {\n      n = arrPush[i];\n      patStringArr[n] = s;\n      ni = i;\n    });\n    arr.length < 10 ? inputEl.style.color = '#F59595' : inputEl.style.color = '#5AB772';\n    arr.length < 10 ? inputEl.style.border = '2px solid #F59595' : inputEl.style.border = '2px solid #5AB772';\n    inputEl.value = patStringArr.join('');\n    n ? inputEl.setSelectionRange(n + 1, n + 1) : inputEl.setSelectionRange(17, 17);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (inputMask);\n\n//# sourceURL=webpack:///./src/js/modules/inputmask.js?");

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(options) {\n    _classCallCheck(this, Modal);\n\n    var defaultOptions = {\n      isOpen: function isOpen() {},\n      isClose: function isClose() {}\n    };\n    this.options = options;\n    this.modal = document.querySelector('.modal');\n    this.speed = false;\n    this.animation = false;\n    this.isOpen = false;\n    this.modalContainer = false;\n    this.previousActiveElement = false;\n    this.fixBlocks = document.querySelectorAll(\".fix-block\");\n    this.focusElements = [\"a[href]\", \"input\", \"button\", \"select\", \"textarea\", \"[tabindex]\"];\n    this.events();\n  }\n\n  _createClass(Modal, [{\n    key: \"events\",\n    value: function events() {\n      if (this.modal) {\n        document.addEventListener(\"click\", function (e) {\n          var clickedElement = e.target.closest(\"[data-path]\");\n\n          if (clickedElement) {\n            var target = clickedElement.dataset.path;\n            var animation = clickedElement.dataset.animation;\n            var speed = clickedElement.dataset.speed;\n            this.animation = animation ? animation : \"fade\";\n            this.speed = speed ? parseInt(speed) : 300;\n            this.modalContainer = document.querySelector(\"[data-target=\\\"\".concat(target, \"\\\"]\"));\n            this.open();\n            return;\n          }\n\n          if (e.target.closest(\".modal-close\")) {\n            this.close();\n            return;\n          }\n        }.bind(this));\n        window.addEventListener(\"keydown\", function (e) {\n          if (e.keyCode === 27) {\n            if (this.isOpen) {\n              this.close();\n            }\n          }\n\n          if (e.keyCode === 9 && this.isOpen) {\n            this.focusCatch(e);\n            return;\n          }\n        }.bind(this));\n        this.modal.addEventListener(\"click\", function (e) {\n          if (!e.target.classList.contains(\"modal__container\") && !e.target.closest(\".modal__container\")) {\n            this.close();\n          }\n        }.bind(this));\n      }\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      var _this = this;\n\n      this.previousActiveElement = document.activeElement;\n      this.modal.style.setProperty(\"--transition-time\", \"\".concat(this.speed / 1000, \"s\"));\n      this.disableScroll();\n      this.modalContainer.classList.add(\"modal-open\");\n      this.modalContainer.parentElement.classList.add('is-open');\n      this.modalContainer.classList.add(this.animation);\n      setTimeout(function () {\n        _this.options.isOpen(_this);\n\n        _this.modalContainer.classList.add(\"animate-open\");\n\n        _this.isOpen = true;\n\n        _this.focusTrap();\n      }, this.speed);\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      if (this.modalContainer) {\n        this.modalContainer.classList.remove(\"animate-open\");\n        this.modalContainer.classList.remove(this.animation);\n        this.modalContainer.parentElement.classList.remove('is-open');\n        this.modalContainer.classList.remove(\"modal-open\");\n        this.enableScroll();\n        this.options.isClose(this);\n        this.isOpen = false;\n        this.focusTrap();\n      }\n    }\n  }, {\n    key: \"focusCatch\",\n    value: function focusCatch(e) {\n      var focusable = this.modalContainer.querySelectorAll(this.focusElements);\n      var focusArray = Array.prototype.slice.call(focusable);\n      var focusedIndex = focusArray.indexOf(document.activeElement);\n\n      if (e.shiftKey && focusedIndex === 0) {\n        focusArray[focusArray.length - 1].focus();\n        e.preventDefault();\n      }\n\n      if (!e.shiftKey && focusedIndex === focusArray.length - 1) {\n        focusArray[0].focus();\n        e.preventDefault();\n      }\n    }\n  }, {\n    key: \"focusTrap\",\n    value: function focusTrap() {\n      var focusable = this.modalContainer.querySelectorAll(this.focusElements);\n\n      if (this.isOpen) {\n        focusable[0].focus();\n      } else {\n        this.previousActiveElement.focus();\n      }\n    }\n  }, {\n    key: \"disableScroll\",\n    value: function disableScroll() {\n      var pagePosition = window.scrollY;\n      this.lockPadding();\n      document.body.classList.add(\"disable-scroll\");\n      document.body.dataset.position = pagePosition;\n      document.body.style.top = -pagePosition + \"px\";\n    }\n  }, {\n    key: \"enableScroll\",\n    value: function enableScroll() {\n      var pagePosition = parseInt(document.body.dataset.position, 10);\n      this.unlockPadding();\n      document.body.style.top = \"auto\";\n      document.body.classList.remove(\"disable-scroll\");\n      window.scroll({\n        top: pagePosition,\n        left: 0\n      });\n      document.body.removeAttribute(\"data-position\");\n    }\n  }, {\n    key: \"lockPadding\",\n    value: function lockPadding() {\n      var paddingOffset = window.innerWidth - document.body.offsetWidth + \"px\";\n      this.fixBlocks.forEach(function (el) {\n        el.style.paddingRight = paddingOffset;\n      });\n      document.body.style.paddingRight = paddingOffset;\n    }\n  }, {\n    key: \"unlockPadding\",\n    value: function unlockPadding() {\n      this.fixBlocks.forEach(function (el) {\n        el.style.paddingRight = \"0px\";\n      });\n      document.body.style.paddingRight = \"0px\";\n    }\n  }]);\n\n  return Modal;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var modal = new Modal({\n    isOpen: function isOpen(modal) {\n      console.log(modal);\n      console.log(\"opened\");\n    },\n    isClose: function isClose() {\n      console.log(\"closed\");\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animation */ \"./src/js/modules/animation.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion */ \"./src/js/modules/accordion.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/js/modules/modal.js\");\n/* harmony import */ var _modules_inputmask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/inputmask */ \"./src/js/modules/inputmask.js\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  Object(_modules_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_modules_inputmask__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });