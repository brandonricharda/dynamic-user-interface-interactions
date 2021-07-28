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

/***/ "./src/findHashKeyByValue.js":
/*!***********************************!*\
  !*** ./src/findHashKeyByValue.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst findHashKeyByValue = (function(hash, value) {\n    return Object.keys(hash).find(key => hash[key] == value);\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findHashKeyByValue);\n\n//# sourceURL=webpack://image-slider/./src/findHashKeyByValue.js?");

/***/ }),

/***/ "./src/imageController.js":
/*!********************************!*\
  !*** ./src/imageController.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _findHashKeyByValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findHashKeyByValue */ \"./src/findHashKeyByValue.js\");\n\n\nconst imageController = (function() {\n    let activeImage = document.getElementById(\"active-image\")\n    let previousButton = document.getElementById(\"previous-button\");\n    let nextButton = document.getElementById(\"next-button\");\n\n    let images = {\n        1: \"./images/golden-gate.jpeg\",\n        2: \"./images/los-angeles.jpeg\",\n        3: \"./images/new-york.jpeg\"\n    }\n\n    let imageCount = Object.keys(images).length;\n\n    previousButton.addEventListener(\"click\", function() {\n        let src = activeImage.getAttribute(\"src\");\n        let currentKey = (0,_findHashKeyByValue__WEBPACK_IMPORTED_MODULE_0__.default)(images, src);\n        if (currentKey == 1) {\n            activeImage.setAttribute(\"src\", images[imageCount]);\n        } else {\n            let newKey = parseInt(currentKey) - 1;\n            activeImage.setAttribute(\"src\", images[newKey]);\n        }\n    });\n\n    nextButton.addEventListener(\"click\", function() {\n        let src = activeImage.getAttribute(\"src\");\n        let currentKey = (0,_findHashKeyByValue__WEBPACK_IMPORTED_MODULE_0__.default)(images, src);\n        if (currentKey == imageCount) {\n            activeImage.setAttribute(\"src\", images[1]);\n        } else {\n            let newKey = parseInt(currentKey) + 1;\n            activeImage.setAttribute(\"src\", images[newKey]);\n        }\n    });\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageController);\n\n//# sourceURL=webpack://image-slider/./src/imageController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { default: imageController } = __webpack_require__(/*! ./imageController */ \"./src/imageController.js\");\nconst { default: navButtonController } = __webpack_require__(/*! ./navButtonController */ \"./src/navButtonController.js\");\n\nnavButtonController();\nimageController();\n\n//# sourceURL=webpack://image-slider/./src/index.js?");

/***/ }),

/***/ "./src/navButtonController.js":
/*!************************************!*\
  !*** ./src/navButtonController.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navButtonController = (function(){\n    let previousButton = document.getElementById(\"previous-button\");\n    let nextButton = document.getElementById(\"next-button\");\n\n    previousButton.addEventListener(\"click\", function() {\n        console.log(\"Previous button clicked\");\n    });\n\n    nextButton.addEventListener(\"click\", function() {\n        console.log(\"Next button clicked\");\n    });\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navButtonController);\n\n//# sourceURL=webpack://image-slider/./src/navButtonController.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;