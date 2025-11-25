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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  const contactDiv = document.createElement(\"div\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.textContent = \"Contact Us\";\r\n\r\n  const phone = document.createElement(\"p\");\r\n  phone.textContent = \"📞 123-456-789\";\r\n\r\n  contactDiv.appendChild(title);\r\n  contactDiv.appendChild(phone);\r\n\r\n  content.appendChild(contactDiv);\r\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/contact.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  const homeDiv = document.createElement(\"div\");\r\n  homeDiv.classList.add(\"home\");\r\n\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"Best Pizza in Town\";\r\n\r\n  const desc = document.createElement(\"p\");\r\n  desc.textContent = \"Welcome to our amazing restaurant! Handmade pizzas since 1980.\";\r\n\r\n  homeDiv.appendChild(headline);\r\n  homeDiv.appendChild(desc);\r\n\r\n  content.appendChild(homeDiv);\r\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction clearContent() {\r\n  const content = document.getElementById(\"content\");\r\n  content.textContent = \"\";\r\n}\r\n\r\nfunction addNavEvents() {\r\n  document.getElementById(\"homeBtn\").addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n\r\n  document.getElementById(\"menuBtn\").addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  document.getElementById(\"contactBtn\").addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n}\r\n\r\nfunction init() {\r\n  addNavEvents();\r\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://odin_restaurant/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  const menuDiv = document.createElement(\"div\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.textContent = \"Menu\";\r\n\r\n  const item = document.createElement(\"p\");\r\n  item.textContent = \"Pizza Margherita — €12\";\r\n\r\n  menuDiv.appendChild(title);\r\n  menuDiv.appendChild(item);\r\n\r\n  content.appendChild(menuDiv);\r\n}\n\n//# sourceURL=webpack://odin_restaurant/./src/menu.js?\n}");

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