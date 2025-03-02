"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/page",{

/***/ "(app-pages-browser)/./src/components/AuthForm.js":
/*!************************************!*\
  !*** ./src/components/AuthForm.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkAuthStatus: function() { return /* binding */ checkAuthStatus; },\n/* harmony export */   \"default\": function() { return /* binding */ AuthForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/firebaseConfig */ \"(app-pages-browser)/./src/firebase/firebaseConfig.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"(app-pages-browser)/./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ checkAuthStatus,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// Función para verificar el estado de autenticación\nconst checkAuthStatus = (callback)=>{\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.auth, (user)=>{\n        if (user) {\n            callback({\n                isAuthenticated: true,\n                user\n            });\n        } else {\n            callback({\n                isAuthenticated: false,\n                user: null\n            });\n        }\n    });\n};\nfunction AuthForm() {\n    _s();\n    const [signInWithGoogle, user, loading, error] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useSignInWithGoogle)(_firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__.auth);\n    const handleGoogleSignIn = ()=>{\n        signInWithGoogle();\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, this);\n    }\n    if (user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center p-6 rounded-md shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-bold text-gray-800 mb-4\",\n                    children: [\n                        \"\\xa1Bienvenido, \",\n                        user.user.displayName,\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lg text-gray-800 mb-6\",\n                    children: \"Ya has iniciado sesi\\xf3n y est\\xe1s listo para comenzar.\"\n                }, void 0, false, {\n                    fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center flex justify-center items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>window.location.href = \"/chat\",\n                        className: \"px-6 py-3 bg-[#ff47562f] text-[#ff4756] font-semibold rounded-md flex items-center justify-center space-x-2\",\n                        children: [\n                            \"Ir a la p\\xe1gina principal \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                size: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                                lineNumber: 43,\n                                columnNumber: 38\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center p-6 rounded-md shadow-md w-[600px] min-h-[40vh] justify-center items-center flex flex-col bg-[#ff47562f] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold text-[#ff4756] mb-4\",\n                children: \"Dom Aprende\"\n            }, void 0, false, {\n                fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold text-[#ff4756] mb-4\",\n                children: \"Inicio de sesi\\xf3n/Registro requerido\"\n            }, void 0, false, {\n                fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleGoogleSignIn,\n                className: \"flex items-center justify-center w-full px-4 py-2 mt-4 text-white bg-blue-500  rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-5 h-5 mr-2\",\n                        viewBox: \"0 0 24 24\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fill: \"#ffffff\",\n                            d: \"M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    \"Iniciar sesi\\xf3n con Google\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-gray-800 mt-4\",\n                children: \"Inicia sesi\\xf3n o crea una cuenta para comenzar a publicar.\"\n            }, void 0, false, {\n                fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertfrontend/Documents/2025/Development/domaprende/src/components/AuthForm.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthForm, \"iIJ/kj/EMIpQbEoRUO+f1X9FoaE=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useSignInWithGoogle\n    ];\n});\n_c = AuthForm;\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0F1dGhGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBQ0U7QUFDVDtBQUNTO0FBQ2E7QUFFaEUsb0RBQW9EO0FBQzdDLE1BQU1PLGtCQUFrQixDQUFDQztJQUM5QixPQUFPUCxpRUFBa0JBLENBQUNELDBEQUFJQSxFQUFFLENBQUNTO1FBQy9CLElBQUlBLE1BQU07WUFDUkQsU0FBUztnQkFBRUUsaUJBQWlCO2dCQUFNRDtZQUFLO1FBQ3pDLE9BQU87WUFDTEQsU0FBUztnQkFBRUUsaUJBQWlCO2dCQUFPRCxNQUFNO1lBQUs7UUFDaEQ7SUFDRjtBQUNGLEVBQUU7QUFFYSxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxrQkFBa0JILE1BQU1JLFNBQVNDLE1BQU0sR0FBR1IsOEVBQW1CQSxDQUFDTiwwREFBSUE7SUFFekUsTUFBTWUscUJBQXFCO1FBQ3pCSDtJQUNGO0lBRUEsSUFBSUMsU0FBUztRQUNYLHFCQUFPLDhEQUFDRztzQkFBSTs7Ozs7O0lBQ2Q7SUFDQSxJQUFJUCxNQUFNO1FBQ1IscUJBQ0UsOERBQUNPO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs7d0JBQXdDO3dCQUN0Q1IsS0FBS0EsSUFBSSxDQUFDVSxXQUFXO3dCQUFDOzs7Ozs7OzhCQUV0Qyw4REFBQ0M7b0JBQUVILFdBQVU7OEJBQTZCOzs7Ozs7OEJBRzFDLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0k7d0JBQ0NDLFNBQVMsSUFBT0MsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7d0JBQ3ZDUixXQUFVOzs0QkFDWDswQ0FDMEIsOERBQUNmLHNGQUFVQTtnQ0FBQ3dCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3JEO0lBRUEscUJBQ0UsOERBQUNWO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUM7Ozs7OzswQkFDdkQsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUF5Qzs7Ozs7OzBCQUd2RCw4REFBQ0k7Z0JBQ0NDLFNBQVNQO2dCQUNURSxXQUFVOztrQ0FHViw4REFBQ1U7d0JBQ0NWLFdBQVU7d0JBQ1ZXLFNBQVE7d0JBQ1JDLE9BQU07a0NBRU4sNEVBQUNDOzRCQUNDQyxNQUFLOzRCQUNMQyxHQUFFOzs7Ozs7Ozs7OztvQkFFQTs7Ozs7OzswQkFHUiw4REFBQ1o7Z0JBQUVILFdBQVU7MEJBQTZCOzs7Ozs7Ozs7Ozs7QUFLaEQ7R0EzRHdCTjs7UUFDMkJMLDBFQUFtQkE7OztLQUQ5Q0siLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXV0aEZvcm0uanM/ZGEzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9maXJlYmFzZS9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IEFycm93UmlnaHQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2lnbkluV2l0aEdvb2dsZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5cbi8vIEZ1bmNpw7NuIHBhcmEgdmVyaWZpY2FyIGVsIGVzdGFkbyBkZSBhdXRlbnRpY2FjacOzblxuZXhwb3J0IGNvbnN0IGNoZWNrQXV0aFN0YXR1cyA9IChjYWxsYmFjaykgPT4ge1xuICByZXR1cm4gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIGNhbGxiYWNrKHsgaXNBdXRoZW50aWNhdGVkOiB0cnVlLCB1c2VyIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayh7IGlzQXV0aGVudGljYXRlZDogZmFsc2UsIHVzZXI6IG51bGwgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhGb3JtKCkge1xuICBjb25zdCBbc2lnbkluV2l0aEdvb2dsZSwgdXNlciwgbG9hZGluZywgZXJyb3JdID0gdXNlU2lnbkluV2l0aEdvb2dsZShhdXRoKTtcblxuICBjb25zdCBoYW5kbGVHb29nbGVTaWduSW4gPSAoKSA9PiB7XG4gICAgc2lnbkluV2l0aEdvb2dsZSgpO1xuICB9O1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuICBpZiAodXNlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtNiByb3VuZGVkLW1kIHNoYWRvdy1tZFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbWItNFwiPlxuICAgICAgICAgIMKhQmllbnZlbmlkbywge3VzZXIudXNlci5kaXNwbGF5TmFtZX0hXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTgwMCBtYi02XCI+XG4gICAgICAgICAgWWEgaGFzIGluaWNpYWRvIHNlc2nDs24geSBlc3TDoXMgbGlzdG8gcGFyYSBjb21lbnphci5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvY2hhdFwiKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyBiZy1bI2ZmNDc1NjJmXSB0ZXh0LVsjZmY0NzU2XSBmb250LXNlbWlib2xkIHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC0yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBJciBhIGxhIHDDoWdpbmEgcHJpbmNpcGFsIDxBcnJvd1JpZ2h0IHNpemU9ezIwfSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC02IHJvdW5kZWQtbWQgc2hhZG93LW1kIHctWzYwMHB4XSBtaW4taC1bNDB2aF0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXggZmxleC1jb2wgYmctWyNmZjQ3NTYyZl0gXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtWyNmZjQ3NTZdIG1iLTRcIj5Eb20gQXByZW5kZTwvaDI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtWyNmZjQ3NTZdIG1iLTRcIj5cbiAgICAgICAgSW5pY2lvIGRlIHNlc2nDs24vUmVnaXN0cm8gcmVxdWVyaWRvXG4gICAgICA8L2gyPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVHb29nbGVTaWduSW59XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBweC00IHB5LTIgbXQtNCB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIFxuICAgICAgICByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgID5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbD1cIiNmZmZmZmZcIlxuICAgICAgICAgICAgZD1cIk0xMi4yNCAxMC4yODVWMTQuNGg2LjgwNmMtLjI3NSAxLjc2NS0yLjA1NiA1LjE3NC02LjgwNiA1LjE3NC00LjA5NSAwLTcuNDM5LTMuMzg5LTcuNDM5LTcuNTc0czMuMzQ1LTcuNTc0IDcuNDM5LTcuNTc0YzIuMzMgMCAzLjg5MS45ODkgNC43ODUgMS44NDlsMy4yNTQtMy4xMzhDMTguMTg5IDEuMTg2IDE1LjQ3OSAwIDEyLjI0IDBjLTYuNjM1IDAtMTIgNS4zNjUtMTIgMTJzNS4zNjUgMTIgMTIgMTJjNi45MjYgMCAxMS41Mi00Ljg2OSAxMS41Mi0xMS43MjYgMC0uNzg4LS4wODUtMS4zOS0uMTg5LTEuOTg5SDEyLjI0elwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIEluaWNpYXIgc2VzacOzbiBjb24gR29vZ2xlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTgwMCBtdC00XCI+XG4gICAgICAgIEluaWNpYSBzZXNpw7NuIG8gY3JlYSB1bmEgY3VlbnRhIHBhcmEgY29tZW56YXIgYSBwdWJsaWNhci5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiQXJyb3dSaWdodCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTaWduSW5XaXRoR29vZ2xlIiwiY2hlY2tBdXRoU3RhdHVzIiwiY2FsbGJhY2siLCJ1c2VyIiwiaXNBdXRoZW50aWNhdGVkIiwiQXV0aEZvcm0iLCJzaWduSW5XaXRoR29vZ2xlIiwibG9hZGluZyIsImVycm9yIiwiaGFuZGxlR29vZ2xlU2lnbkluIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJkaXNwbGF5TmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2l6ZSIsInN2ZyIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJmaWxsIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AuthForm.js\n"));

/***/ })

});