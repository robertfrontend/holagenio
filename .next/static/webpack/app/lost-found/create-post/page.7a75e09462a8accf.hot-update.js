"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/lost-found/create-post/page",{

/***/ "(app-pages-browser)/./src/components/AuthForm.js":
/*!************************************!*\
  !*** ./src/components/AuthForm.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkAuthStatus: function() { return /* binding */ checkAuthStatus; },\n/* harmony export */   \"default\": function() { return /* binding */ AuthForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/firebaseConfig */ \"(app-pages-browser)/./src/firebase/firebaseConfig.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"(app-pages-browser)/./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ checkAuthStatus,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// Función para verificar el estado de autenticación\nconst checkAuthStatus = (callback)=>{\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.auth, (user)=>{\n        if (user) {\n            callback({\n                isAuthenticated: true,\n                user\n            });\n        } else {\n            callback({\n                isAuthenticated: false,\n                user: null\n            });\n        }\n    });\n};\nfunction AuthForm() {\n    _s();\n    const [signInWithGoogle, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useSignInWithGoogle)(_firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.auth);\n    const handleGoogleSignIn = ()=>{\n        signInWithGoogle();\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, this);\n    }\n    if (user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center p-6 rounded-md shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-bold text-gray-800 mb-4\",\n                    children: [\n                        \"\\xa1Bienvenido, \",\n                        user.user.displayName,\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lg text-gray-800 mb-6\",\n                    children: \"Ya has iniciado sesi\\xf3n y est\\xe1s listo para comenzar.\"\n                }, void 0, false, {\n                    fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center flex justify-center items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>window.location.href = \"/chat\",\n                        className: \"px-6 py-3 bg-[#ff47562f] text-[#ff4756] font-semibold rounded-md flex items-center justify-center space-x-2\",\n                        children: [\n                            \"Ir a la p\\xe1gina principal \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                size: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                                lineNumber: 43,\n                                columnNumber: 38\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center p-6 rounded-md shadow-md w-[600px] min-h-[40vh] justify-center items-center flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold text-gray-800 mb-4\",\n                children: \"Inicio de sesi\\xf3n/Registro requerido\"\n            }, void 0, false, {\n                fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleGoogleSignIn,\n                className: \"flex items-center justify-center w-full px-4 py-2 mt-4 text-white bg-blue-500  rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-5 h-5 mr-2\",\n                        viewBox: \"0 0 24 24\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fill: \"#ffffff\",\n                            d: \"M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    \"Iniciar sesi\\xf3n con Google\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-gray-800 mt-4\",\n                children: \"Inicia sesi\\xf3n o crea una cuenta para comenzar a publicar.\"\n            }, void 0, false, {\n                fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthForm, \"iIJ/kj/EMIpQbEoRUO+f1X9FoaE=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useSignInWithGoogle\n    ];\n});\n_c = AuthForm;\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0F1dGhGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBQ0U7QUFDVDtBQUNTO0FBQ2E7QUFFaEUsb0RBQW9EO0FBQzdDLE1BQU1PLGtCQUFrQixDQUFDQztJQUM5QixPQUFPUCxpRUFBa0JBLENBQUNELDBEQUFJQSxFQUFFLENBQUNTO1FBQy9CLElBQUlBLE1BQU07WUFDUkQsU0FBUztnQkFBRUUsaUJBQWlCO2dCQUFNRDtZQUFLO1FBQ3pDLE9BQU87WUFDTEQsU0FBUztnQkFBRUUsaUJBQWlCO2dCQUFPRCxNQUFNO1lBQUs7UUFDaEQ7SUFDRjtBQUNGLEVBQUU7QUFFYSxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxrQkFBa0JILE1BQU1JLFNBQVNDLE1BQU0sR0FBR1IsOEVBQW1CQSxDQUFDTiwwREFBSUE7SUFFekUsTUFBTWUscUJBQXFCO1FBQ3pCSDtJQUNGO0lBRUEsSUFBSUMsU0FBUztRQUNYLHFCQUFPLDhEQUFDRztzQkFBSTs7Ozs7O0lBQ2Q7SUFDQSxJQUFJUCxNQUFNO1FBQ1IscUJBQ0UsOERBQUNPO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs7d0JBQXdDO3dCQUN0Q1IsS0FBS0EsSUFBSSxDQUFDVSxXQUFXO3dCQUFDOzs7Ozs7OzhCQUV0Qyw4REFBQ0M7b0JBQUVILFdBQVU7OEJBQTZCOzs7Ozs7OEJBRzFDLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0k7d0JBQ0NDLFNBQVMsSUFBT0MsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7d0JBQ3ZDUixXQUFVOzs0QkFDWDswQ0FDMEIsOERBQUNmLHNGQUFVQTtnQ0FBQ3dCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3JEO0lBRUEscUJBQ0UsOERBQUNWO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBd0M7Ozs7OzswQkFJdEQsOERBQUNJO2dCQUNDQyxTQUFTUDtnQkFDVEUsV0FBVTs7a0NBR1YsOERBQUNVO3dCQUNDVixXQUFVO3dCQUNWVyxTQUFRO3dCQUNSQyxPQUFNO2tDQUVOLDRFQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsR0FBRTs7Ozs7Ozs7Ozs7b0JBRUE7Ozs7Ozs7MEJBR1IsOERBQUNaO2dCQUFFSCxXQUFVOzBCQUE2Qjs7Ozs7Ozs7Ozs7O0FBS2hEO0dBM0R3Qk47O1FBQzJCTCwwRUFBbUJBOzs7S0FEOUNLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0F1dGhGb3JtLmpzP2RhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvZmlyZWJhc2UvZmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBBcnJvd1JpZ2h0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNpZ25JbldpdGhHb29nbGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuXG4vLyBGdW5jacOzbiBwYXJhIHZlcmlmaWNhciBlbCBlc3RhZG8gZGUgYXV0ZW50aWNhY2nDs25cbmV4cG9ydCBjb25zdCBjaGVja0F1dGhTdGF0dXMgPSAoY2FsbGJhY2spID0+IHtcbiAgcmV0dXJuIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xuICAgIGlmICh1c2VyKSB7XG4gICAgICBjYWxsYmFjayh7IGlzQXV0aGVudGljYXRlZDogdHJ1ZSwgdXNlciB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soeyBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLCB1c2VyOiBudWxsIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoRm9ybSgpIHtcbiAgY29uc3QgW3NpZ25JbldpdGhHb29nbGUsIHVzZXIsIGxvYWRpbmcsIGVycm9yXSA9IHVzZVNpZ25JbldpdGhHb29nbGUoYXV0aCk7XG5cbiAgY29uc3QgaGFuZGxlR29vZ2xlU2lnbkluID0gKCkgPT4ge1xuICAgIHNpZ25JbldpdGhHb29nbGUoKTtcbiAgfTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cbiAgaWYgKHVzZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTYgcm91bmRlZC1tZCBzaGFkb3ctbWRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTRcIj5cbiAgICAgICAgICDCoUJpZW52ZW5pZG8sIHt1c2VyLnVzZXIuZGlzcGxheU5hbWV9IVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS04MDAgbWItNlwiPlxuICAgICAgICAgIFlhIGhhcyBpbmljaWFkbyBzZXNpw7NuIHkgZXN0w6FzIGxpc3RvIHBhcmEgY29tZW56YXIuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2NoYXRcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctWyNmZjQ3NTYyZl0gdGV4dC1bI2ZmNDc1Nl0gZm9udC1zZW1pYm9sZCByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgSXIgYSBsYSBww6FnaW5hIHByaW5jaXBhbCA8QXJyb3dSaWdodCBzaXplPXsyMH0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtNiByb3VuZGVkLW1kIHNoYWRvdy1tZCB3LVs2MDBweF0gbWluLWgtWzQwdmhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItNFwiPlxuICAgICAgICBJbmljaW8gZGUgc2VzacOzbi9SZWdpc3RybyByZXF1ZXJpZG9cbiAgICAgIDwvaDI+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlR29vZ2xlU2lnbklufVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcHgtNCBweS0yIG10LTQgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCBcbiAgICAgICAgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiXG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01IG1yLTJcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGw9XCIjZmZmZmZmXCJcbiAgICAgICAgICAgIGQ9XCJNMTIuMjQgMTAuMjg1VjE0LjRoNi44MDZjLS4yNzUgMS43NjUtMi4wNTYgNS4xNzQtNi44MDYgNS4xNzQtNC4wOTUgMC03LjQzOS0zLjM4OS03LjQzOS03LjU3NHMzLjM0NS03LjU3NCA3LjQzOS03LjU3NGMyLjMzIDAgMy44OTEuOTg5IDQuNzg1IDEuODQ5bDMuMjU0LTMuMTM4QzE4LjE4OSAxLjE4NiAxNS40NzkgMCAxMi4yNCAwYy02LjYzNSAwLTEyIDUuMzY1LTEyIDEyczUuMzY1IDEyIDEyIDEyYzYuOTI2IDAgMTEuNTItNC44NjkgMTEuNTItMTEuNzI2IDAtLjc4OC0uMDg1LTEuMzktLjE4OS0xLjk4OUgxMi4yNHpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICBJbmljaWFyIHNlc2nDs24gY29uIEdvb2dsZVxuICAgICAgPC9idXR0b24+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS04MDAgbXQtNFwiPlxuICAgICAgICBJbmljaWEgc2VzacOzbiBvIGNyZWEgdW5hIGN1ZW50YSBwYXJhIGNvbWVuemFyIGEgcHVibGljYXIuXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIkFycm93UmlnaHQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2lnbkluV2l0aEdvb2dsZSIsImNoZWNrQXV0aFN0YXR1cyIsImNhbGxiYWNrIiwidXNlciIsImlzQXV0aGVudGljYXRlZCIsIkF1dGhGb3JtIiwic2lnbkluV2l0aEdvb2dsZSIsImxvYWRpbmciLCJlcnJvciIsImhhbmRsZUdvb2dsZVNpZ25JbiIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZGlzcGxheU5hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNpemUiLCJzdmciLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwiZmlsbCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AuthForm.js\n"));

/***/ })

});