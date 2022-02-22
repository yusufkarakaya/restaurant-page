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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const contact = document.createElement('div')\n    contact.classList.add('contact')\n\n    const phoneNumber = document.createElement('p')\n    phoneNumber.textContent = '📞 123 456 789'\n\n    const address = document.createElement('p')\n    address.textContent = '🏠 Culver City 90054, Los Angeles, USA'\n\n\n    contact.appendChild(phoneNumber)\n    contact.appendChild(address)\n\n    return contact\n}\n\nfunction loadContact() {\n    const main = document.getElementById('main')\n    main.textContent = ''\n    main.appendChild(createContact())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n\n    const home = document.createElement('div')\n    home.classList.add('home')\n    const homeLeft = document.createElement('div')\n    const homeRight = document.createElement('div')\n    homeLeft.classList.add('homeLeft')\n    homeRight.classList.add('homeRight')\n\n    const title = document.createElement('h1')\n    title.innerHTML = \"Make your next meal \" + '</br>' + \"A memorable one\"\n    const description = document.createElement('p')\n    description.textContent = \"Dummy content description\"\n\n    homeLeft.appendChild(title)\n    homeLeft.appendChild(description)\n    home.appendChild(homeLeft)\n    home.appendChild(homeRight)\n\n    return home\n}\n\nfunction loadHome() {\n    const main = document.getElementById('main')\n    main.textContent = ''\n    main.appendChild(createHome())\n    return main\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const menu = document.createElement('div')\n\n    menu.appendChild(createParagraph('welcome to menu page'))\n\n    return menu\n}\n\nfunction createParagraph(text) {\n    const paragraph = document.createElement('p')\n    paragraph.textContent = text\n    return paragraph\n}\n\nfunction loadMenu() {\n    const main = document.getElementById('main')\n    main.textContent = ''\n    main.appendChild(createMenu())\n    return main\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement('header')\n    header.classList.add('header')\n    const titleLogo = document.createElement('h1')\n    titleLogo.classList.add('logo')\n    titleLogo.textContent = 'mediterranean restaurant'\n    titleLogo.addEventListener('click', () => {\n        const home = document.getElementById('home')\n        setActiveButton(home)\n        ;(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    })\n\n    header.appendChild(titleLogo)\n    header.appendChild(createNav())\n\n    return header\n}\n\nfunction createNav() {\n    const nav = document.createElement('nav')\n    nav.classList.add('nav')\n\n    const menu = document.createElement('button')\n    menu.classList.add('button-nav')\n    menu.textContent = 'Menu'\n    menu.addEventListener('click', () => {\n        setActiveButton(menu)\n        ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    })\n\n    const home = document.createElement('button')\n    home.classList.add('button-nav')\n    home.setAttribute('id', 'home')\n    home.textContent = 'Home'\n    home.addEventListener('click', () => {\n        setActiveButton(home)\n        ;(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    })\n\n    const contact = document.createElement('button')\n\n    contact.classList.add('button-nav')\n    contact.textContent = 'Contact'\n    contact.addEventListener('click', () => {\n        setActiveButton(contact)\n        ;(0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    })\n\n    nav.appendChild(home)\n    nav.appendChild(menu)\n    nav.appendChild(contact)\n\n    return nav\n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll(\".button-nav\");\n\n    buttons.forEach((button) => {\n        if (button !== this) {\n            button.classList.remove(\"active\");\n        }\n    });\n    button.classList.add(\"active\");\n}\n\nfunction createMain() {\n    const main = document.createElement('main')\n    main.setAttribute('id', 'main')\n    main.setAttribute('class', 'main')\n    return main\n}\n\nfunction createFooter() {\n    const footer = document.createElement('footer')\n    const copy = document.createElement('p')\n    copy.textContent = 'Made by Yusuf Karakaya'\n    footer.appendChild(copy)\n\n    return footer\n}\n\nfunction initializeWebsite() {\n    const content = document.getElementById('content')\n\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    setActiveButton(document.querySelector(\".button-nav\"));\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant/./src/website.js?");

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