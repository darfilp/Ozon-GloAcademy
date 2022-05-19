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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__.search)();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__.catalog)();\r\n\n\n//# sourceURL=webpack://ozon-gloacademy/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nconst cart = () => {\r\n    const cart = document.querySelector('#cart');\r\n    const cartModal = document.querySelector('.cart');\r\n    const cartCloseModal = document.querySelector('.cart-close');\r\n\r\n    const openCard = () => {\r\n        cartModal.style.display ='flex';\r\n    };\r\n\r\n    const closeCard = () => {\r\n        cartModal.style.display ='none';\r\n    };\r\n\r\n    cart.addEventListener('click', openCard);\r\n\r\n    cartCloseModal.addEventListener('click', closeCard);\r\n};\r\n\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\r\n\n\n//# sourceURL=webpack://ozon-gloacademy/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"catalog\": () => (/* binding */ catalog)\n/* harmony export */ });\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _filteres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filteres */ \"./src/modules/filteres.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const catalog = document.querySelector('.catalog');\r\n    const modalItems = document.querySelectorAll('.catalog-list > li');\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.matches('.catalog-list > li') || !e.target.closest('.catalog-button')) {\r\n            catalog.style.display = 'none';\r\n        } else {\r\n            catalog.style.display = 'block';\r\n        }\r\n    })\r\n\r\n    modalItems.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            const text = item.textContent;\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(data => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_0__.renderGoods)((0,_filteres__WEBPACK_IMPORTED_MODULE_2__.searchCategory)(data, text));\r\n            })\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://ozon-gloacademy/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filteres.js":
/*!*********************************!*\
  !*** ./src/modules/filteres.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterGoods\": () => (/* binding */ filterGoods),\n/* harmony export */   \"searchCategory\": () => (/* binding */ searchCategory)\n/* harmony export */ });\nconst filterGoods = (goods, value) => {\r\n    return goods.filter(good => {\r\n        return good.title.toLowerCase().includes(value.toLowerCase());\r\n    });\r\n};\r\n\r\nconst searchCategory = (goods, value) => {\r\n    return goods.filter(good => {\r\n        return value === good.category\r\n    });\r\n};\n\n//# sourceURL=webpack://ozon-gloacademy/./src/modules/filteres.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (str) => {\r\n    return fetch(`https://ozon-f8404-default-rtdb.firebaseio.com/goods.json`)\r\n    // return fetch(`https://ozon-f8404-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)\r\n    .then(response => response.json());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozon-gloacademy/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__.renderGoods)(data);\r\n    })\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://ozon-gloacademy/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = () => {\r\n    return fetch('http://localhost:3000/goods', {\r\n  method: 'POST',\r\n  body: JSON.stringify({\r\n\t\tid: 0,\r\n\t\ttitle: \"Новый файл\",\r\n\t\tprice: 33990,\r\n\t\tsale: false,\r\n\t\timg: \"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\r\n\t\thoverImg: \"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\r\n\t\tcategory: \"Игровая приставка\"\r\n\t}),\r\n  headers: {\r\n    'Content-type': 'application/json; charset=UTF-8',\r\n  },\r\n})\r\n  .then((response) => response.json())\r\n  .then((json) => json);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://ozon-gloacademy/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderGoods\": () => (/* binding */ renderGoods)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n    const wrapper = document.querySelector('.goods');\r\n    wrapper.innerHTML = '';\r\n\r\n    goods.forEach((good, index) => {\r\n        const div = document.createElement('div');\r\n        div.className = 'col-12 col-md-6 col-lg-4 col-xl-3';\r\n        const card = document.createElement('div');\r\n        card.classList.add('card');\r\n        card.innerHTML = `\r\n                                        ${good.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                                        <div class=\"card-img-wrapper\">\r\n                                            <span class=\"card-img-top\"\r\n                                                style=\"background-image: url('${good.img}')\"></span>\r\n                                        </div>\r\n                                        <div class=\"card-body justify-content-between\">\r\n                                            <div class=\"card-price\">${good.price}</div>\r\n                                            <h5 class=\"card-title\">${good.title}</h5>\r\n                                            <button class=\"btn btn-primary\">В корзину</button>\r\n                                        </div>`\r\n        div.append(card);\r\n        wrapper.append(div);\r\n    });\r\n}\n\n//# sourceURL=webpack://ozon-gloacademy/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": () => (/* binding */ search)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filteres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filteres */ \"./src/modules/filteres.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n    const search = document.querySelector('.search-wrapper_input');\r\n    search.addEventListener('input', (e) => {\r\n        const value = e.target.value;\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value).then(data => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__.renderGoods)((0,_filteres__WEBPACK_IMPORTED_MODULE_2__.filterGoods)(data, value));\r\n        })\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://ozon-gloacademy/./src/modules/search.js?");

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