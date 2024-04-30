"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/Header.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n  var router = useRouter();\n  var _useUserState = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_4__.useUserState)(),\n    _useUserState2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUserState, 1),\n    user = _useUserState2[0];\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n    anchorEl = _useState[0],\n    setAnchorEl = _useState[1];\n  var open = Boolean(anchorEl);\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AppBar, {\n    position: \"static\",\n    sx: {\n      backgroundColor: 'white',\n      color: 'black',\n      boxShadow: 'none',\n      py: '12px'\n    },\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n      maxWidth: \"lg\",\n      sx: {\n        px: 2\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'space-between',\n          alignItems: 'center'\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/\",\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n              src: \"/logo.png\",\n              width: 133,\n              height: 40,\n              alt: \"logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), user.isFetched && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n          children: [!user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: \"/sign_in\",\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                color: \"primary\",\n                variant: \"contained\",\n                sx: {\n                  color: 'white',\n                  textTransform: 'none',\n                  fontSize: 16,\n                  borderRadius: 2,\n                  boxShadow: 'none'\n                },\n                children: \"Sign in\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 19\n            }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n              color: \"primary\",\n              variant: \"outlined\",\n              sx: {\n                textTransform: 'none',\n                fontSize: 16,\n                borderRadius: 2,\n                boxShadow: 'none',\n                border: '1.5px solid #3EA8FF',\n                ml: 2\n              },\n              children: \"Sign Up\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 17\n          }, _this), user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            children: user.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 35\n          }, _this)]\n        }, void 0, true)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n_s(Header, \"Dd2zTiO/LQhfUgUOaosCSPuUSug=\", true, function () {\n  return [_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_4__.useUserState];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxHQUFBQyxLQUNOLENBQUM7QUFFYixDQUFDO0FBQUFyQyxFQUFBLENBN0VLRCxNQUFNO0VBQUEsUUFFS0wsK0RBQVk7QUFBQTtBQUFBcUQsRUFBQSxHQUZ2QmhELE1BQU07QUErRVosK0RBQWVBLE1BQU07QUFBQSxJQUFBZ0QsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeD9hNjk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcnRpY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FydGljbGUnXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0J1xuaW1wb3J0IFBlcnNvbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QZXJzb24nXG5pbXBvcnQge1xuICBBcHBCYXIsXG4gIEF2YXRhcixcbiAgQm94LFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgSWNvbkJ1dHRvbixcbiAgTWVudSxcbiAgTWVudUl0ZW0sXG4gIExpc3RJdGVtSWNvbixcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVVzZXJTdGF0ZSB9IGZyb20gJ0AvaG9va3MvdXNlR2xvYmFsU3RhdGUnXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3VzZXJdID0gdXNlVXNlclN0YXRlKClcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gIH1cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxBcHBCYXJcbiAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcbiAgICAgIHN4PXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICBweTogJzEycHgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzeD17eyBweDogMiB9fT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2xvZ28ucG5nXCIgd2lkdGg9ezEzM30gaGVpZ2h0PXs0MH0gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAge3VzZXIuaXNGZXRjaGVkICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHshdXNlci5pc1NpZ25lZEluICYmIChcbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduX2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzEuNXB4IHNvbGlkICMzRUE4RkYnLFxuICAgICAgICAgICAgICAgICAgICAgIG1sOiAyLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge3VzZXIuaXNTaWduZWRJbiAmJiA8Qm94Pnt1c2VyLm5hbWV9PC9Cb3g+fVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0FwcEJhcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJBcHBCYXIiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJJbWFnZSIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZVVzZXJTdGF0ZSIsImpzeERFViIsIl9qc3hERVYiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIkhlYWRlciIsIl9zIiwicm91dGVyIiwidXNlUm91dGVyIiwiX3VzZVVzZXJTdGF0ZSIsIl91c2VVc2VyU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VyIiwiX3VzZVN0YXRlIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIm9wZW4iLCJCb29sZWFuIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsInBvc2l0aW9uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInB5IiwiY2hpbGRyZW4iLCJtYXhXaWR0aCIsInB4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiaXNGZXRjaGVkIiwiaXNTaWduZWRJbiIsInZhcmlhbnQiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJtbCIsIm5hbWUiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n"));

/***/ })

});