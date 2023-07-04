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

/***/ "./webpage/js/index.js":
/*!*****************************!*\
  !*** ./webpage/js/index.js ***!
  \*****************************/
/***/ (() => {

eval("\n\n// Отримати посилання на форму\nconst form = document.querySelector('form');\n\n\n// Обробник події для відправки форми\nform.addEventListener('submit', (event) => {\n  event.preventDefault(); // Заборонити стандартну відправку форми\n\n  // Отримати значення полів форми\n  const name = document.getElementById('name').value;\n  const presence = document.getElementById('presence').value;\n  const drinks = Array.from(document.querySelectorAll('input[name=\"drinks\"]:checked')).map((checkbox) => checkbox.value);\n  const car = Array.from(document.querySelectorAll('input[name=\"car\"]:checked')).map((checkbox) => checkbox.value);\n\n  // Відправити дані на сервер\n  fetch('/submit', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ name, presence, drinks, car }),\n  })\n    \n    .then(function(response) {\n\n      // Додати додаткові дії після відправки форми, якщо потрібно\n      const successMessage = response.data.message;\n    \n      // Відображення сповіщення про успішне відправлення\n      successMessage.textContent = successMsg;\n      \n      // Очищення форми або здійснення інших дій\n      form.reset();\n    })\n    .catch((error) => {\n      console.error('Error:', error);\n      // Обробити помилку відправки форми, якщо потрібно\n    });\n});\n\n\n\n//# sourceURL=webpack://web/./webpage/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./webpage/js/index.js"]();
/******/ 	
/******/ })()
;