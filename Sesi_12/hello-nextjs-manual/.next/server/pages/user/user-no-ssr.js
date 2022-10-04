"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/user/user-no-ssr";
exports.ids = ["pages/user/user-no-ssr"];
exports.modules = {

/***/ "./pages/user/user-no-ssr.js":
/*!***********************************!*\
  !*** ./pages/user/user-no-ssr.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://jsonplaceholder.typicode.com/users\").then((res)=>res.json()).then((data)=>setUsers(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"ID\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Hactiv8\\\\SIB_A-Muh-Fahrial-S_React\\\\Sesi_12\\\\hello-nextjs-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Hactiv8\\\\SIB_A-Muh-Fahrial-S_React\\\\Sesi_12\\\\hello-nextjs-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Hactiv8\\\\SIB_A-Muh-Fahrial-S_React\\\\Sesi_12\\\\hello-nextjs-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Hactiv8\\\\SIB_A-Muh-Fahrial-S_React\\\\Sesi_12\\\\hello-nextjs-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Hactiv8\\\\SIB_A-Muh-Fahrial-S_React\\\\Sesi_12\\\\hello-nextjs-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.id\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Hactiv8\\\\SIB_A-Muh-Fahrial-S_React\\\\Sesi_12\\\\hello-nextjs-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.name\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Hactiv8\\\\SIB_A-Muh-Fahrial-S_React\\\\Sesi_12\\\\hello-nextjs-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.email\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Hactiv8\\\\SIB_A-Muh-Fahrial-S_React\\\\Sesi_12\\\\hello-nextjs-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, user.id, true, {\n                            fileName: \"E:\\\\Hactiv8\\\\SIB_A-Muh-Fahrial-S_React\\\\Sesi_12\\\\hello-nextjs-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"E:\\\\Hactiv8\\\\SIB_A-Muh-Fahrial-S_React\\\\Sesi_12\\\\hello-nextjs-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Hactiv8\\\\SIB_A-Muh-Fahrial-S_React\\\\Sesi_12\\\\hello-nextjs-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL3VzZXItbm8tc3NyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFFN0IsU0FBU0UsSUFBSSxHQUFHO0lBQzdCLE1BQU0sS0FBQ0MsS0FBSyxNQUFFQyxRQUFRLE1BQUlILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRXRDRCxnREFBUyxDQUFDLElBQU07UUFDZEssS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQ2hEQyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRSxDQUFDLENBQ3pCRixJQUFJLENBQUMsQ0FBQ0csSUFBSSxHQUFLTCxRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1AscUJBQ0U7a0JBQ0UsNEVBQUNDLE9BQUs7OzhCQUNKLDhEQUFDQyxPQUFLOzhCQUNKLDRFQUFDQyxJQUFFOzswQ0FDRCw4REFBQ0MsSUFBRTswQ0FBQyxJQUFFOzs7OztvQ0FBSzswQ0FDWCw4REFBQ0EsSUFBRTswQ0FBQyxNQUFJOzs7OztvQ0FBSzswQ0FDYiw4REFBQ0EsSUFBRTswQ0FBQyxPQUFLOzs7OztvQ0FBSzs7Ozs7OzRCQUNYOzs7Ozt3QkFDQzs4QkFDUiw4REFBQ0MsT0FBSzs4QkFDSFgsS0FBSyxDQUFDWSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxpQkFDZCw4REFBQ0osSUFBRTs7OENBQ0QsOERBQUNLLElBQUU7OENBQUVELElBQUksQ0FBQ0UsRUFBRTs7Ozs7d0NBQU07OENBQ2xCLDhEQUFDRCxJQUFFOzhDQUFFRCxJQUFJLENBQUNHLElBQUk7Ozs7O3dDQUFNOzhDQUNwQiw4REFBQ0YsSUFBRTs4Q0FBRUQsSUFBSSxDQUFDSSxLQUFLOzs7Ozt3Q0FBTTs7MkJBSGRKLElBQUksQ0FBQ0UsRUFBRTs7OztnQ0FJWCxDQUNMOzs7Ozt3QkFDSTs7Ozs7O2dCQUNGO3FCQUNQLENBQ0g7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlci91c2VyLW5vLXNzci5qcz83ZDMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0VXNlcnMoZGF0YSkpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICAgICAgPHRkPnt1c2VyLmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt1c2VyLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3VzZXIuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJ1c2VycyIsInNldFVzZXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwidXNlciIsInRkIiwiaWQiLCJuYW1lIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/user-no-ssr.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user/user-no-ssr.js"));
module.exports = __webpack_exports__;

})();