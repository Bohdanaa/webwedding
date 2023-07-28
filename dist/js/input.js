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

/***/ "./webpage/js/input.js":
/*!*****************************!*\
  !*** ./webpage/js/input.js ***!
  \*****************************/
/***/ (() => {

eval("var input = document.getElementById(\"name\");\nvar label = document.querySelector(\".feedback__label-name\");\nvar input1 = document.getElementById(\"myInput\");\ninput1.addEventListener(\"click\", function () {\n  this.value = \"Відправлено\";\n});\ninput.addEventListener(\"focus\", function () {\n  label.textContent = \"Ім`я та прізвище\";\n  label.style.margin = \"-15px\"; // Змінюємо margin на 10px\n});\n\ninput.addEventListener(\"blur\", function () {\n  if (input.value === \"\") {\n    label.textContent = \"Будь ласка ведіть свої дані\";\n    label.style.margin = \"0\";\n  }\n});\n\n//# sourceURL=webpack://web/./webpage/js/input.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./webpage/js/input.js"]();
/******/ 	
/******/ })()
;