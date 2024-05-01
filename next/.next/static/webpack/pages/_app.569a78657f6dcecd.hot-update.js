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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _mui_icons_material_Article__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Article */ \"./node_modules/@mui/icons-material/Article.js\");\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Logout */ \"./node_modules/@mui/icons-material/Logout.js\");\n/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Person */ \"./node_modules/@mui/icons-material/Person.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/Header.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  var _useUserState = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_5__.useUserState)(),\n    _useUserState2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUserState, 1),\n    user = _useUserState2[0];\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n    anchorEl = _useState[0],\n    setAnchorEl = _useState[1];\n  var open = Boolean(anchorEl);\n  var hideHeaderPathnames = ['/current/articles/edit/[id]'];\n  if (hideHeaderPathnames.includes(router.pathname)) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {}, void 0, false);\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n  var addNewArticle = function addNewArticle() {\n    var url = \"http://localhost:3000/api/v1\" + '/current/articles';\n    var headers = {\n      'Content-Type': 'application/json',\n      'access-token': localStorage.getItem('access-token'),\n      client: localStorage.getItem('client'),\n      uid: localStorage.getItem('uid')\n    };\n    (0,axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n      method: 'POST',\n      url: url,\n      headers: headers\n    }).then(function (res) {\n      router.push('/current/articles/edit/' + res.data.id);\n    })[\"catch\"](function (e) {\n      console.log(e.message);\n    });\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.AppBar, {\n    position: \"static\",\n    sx: {\n      backgroundColor: 'white',\n      color: 'black',\n      boxShadow: 'none',\n      py: '12px'\n    },\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Container, {\n      maxWidth: \"lg\",\n      sx: {\n        px: 2\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'space-between',\n          alignItems: 'center'\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/\",\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n              src: \"/logo.png\",\n              width: 133,\n              height: 40,\n              alt: \"logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this), user.isFetched && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n          children: [!user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n              color: \"primary\",\n              variant: \"contained\",\n              sx: {\n                color: 'white',\n                textTransform: 'none',\n                fontSize: 16,\n                borderRadius: 2,\n                boxShadow: 'none'\n              },\n              onClick: function onClick() {\n                router.push('/sign_in');\n              },\n              children: \"Sign in\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 19\n            }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: \"/sign_up\",\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                color: \"primary\",\n                variant: \"outlined\",\n                sx: {\n                  textTransform: 'none',\n                  fontSize: 16,\n                  lineHeight: '27px',\n                  borderRadius: 2,\n                  boxShadow: 'none',\n                  border: '1.5px solid #3EA8FF',\n                  ml: 2\n                },\n                children: \"Sign Up\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 17\n          }, _this), user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n            sx: {\n              display: 'flex'\n            },\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.IconButton, {\n              onClick: handleClick,\n              sx: {\n                p: 0\n              },\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Avatar, {\n                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 125,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 124,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 19\n            }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n              sx: {\n                ml: 2\n              },\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                color: \"primary\",\n                variant: \"contained\",\n                sx: {\n                  color: 'white',\n                  textTransform: 'none',\n                  fontSize: 16,\n                  borderRadius: 2,\n                  width: 100,\n                  boxShadow: 'none'\n                },\n                onClick: addNewArticle,\n                children: \"Add new\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 129,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 19\n            }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Menu, {\n              anchorEl: anchorEl,\n              id: \"account-menu\",\n              open: open,\n              onClose: handleClose,\n              onClick: handleClose,\n              children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                sx: {\n                  pl: 2,\n                  py: 1\n                },\n                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                  sx: {\n                    fontWeight: 'bold'\n                  },\n                  children: user.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 153,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 152,\n                columnNumber: 21\n              }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Divider, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 157,\n                columnNumber: 21\n              }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/current/articles\",\n                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {\n                  children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemIcon, {\n                    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_icons_material_Article__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                      fontSize: \"small\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 161,\n                      columnNumber: 27\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 160,\n                    columnNumber: 25\n                  }, _this), \"\\u8A18\\u4E8B\\u306E\\u7BA1\\u7406\"]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 159,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 158,\n                columnNumber: 21\n              }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/sign_out\",\n                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {\n                  children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemIcon, {\n                    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                      fontSize: \"small\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 169,\n                      columnNumber: 27\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 168,\n                    columnNumber: 25\n                  }, _this), \"\\u30B5\\u30A4\\u30F3\\u30A2\\u30A6\\u30C8\"]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 167,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 166,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 145,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this);\n};\n_s(Header, \"Dd2zTiO/LQhfUgUOaosCSPuUSug=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_5__.useUserState];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3g/YTY5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJ0aWNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnRpY2xlJ1xuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCdcbmltcG9ydCBQZXJzb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVyc29uJ1xuaW1wb3J0IHtcbiAgQXBwQmFyLFxuICBBdmF0YXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIERpdmlkZXIsXG4gIEljb25CdXR0b24sXG4gIE1lbnUsXG4gIE1lbnVJdGVtLFxuICBMaXN0SXRlbUljb24sXG4gIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSwgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VVc2VyU3RhdGUgfSBmcm9tICdAL2hvb2tzL3VzZUdsb2JhbFN0YXRlJ1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFt1c2VyXSA9IHVzZVVzZXJTdGF0ZSgpXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbClcblxuICBjb25zdCBoaWRlSGVhZGVyUGF0aG5hbWVzID0gWycvY3VycmVudC9hcnRpY2xlcy9lZGl0L1tpZF0nXVxuICBpZiAoaGlkZUhlYWRlclBhdGhuYW1lcy5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpKSByZXR1cm4gPD48Lz5cblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KVxuICB9XG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpXG4gIH1cblxuICBjb25zdCBhZGROZXdBcnRpY2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCArICcvY3VycmVudC9hcnRpY2xlcydcblxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ2FjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3MtdG9rZW4nKSxcbiAgICAgIGNsaWVudDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NsaWVudCcpLFxuICAgICAgdWlkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWlkJyksXG4gICAgfVxuXG4gICAgYXhpb3MoeyBtZXRob2Q6ICdQT1NUJywgdXJsOiB1cmwsIGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgIC50aGVuKChyZXM6IEF4aW9zUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9jdXJyZW50L2FydGljbGVzL2VkaXQvJyArIHJlcy5kYXRhLmlkKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZTogQXhpb3NFcnJvcjx7IGVycm9yOiBzdHJpbmcgfT4pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKVxuICAgICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFwcEJhclxuICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxuICAgICAgc3g9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgIHB5OiAnMTJweCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHB4OiAyIH19PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbG9nby5wbmdcIiB3aWR0aD17MTMzfSBoZWlnaHQ9ezQwfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7dXNlci5pc0ZldGNoZWQgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgeyF1c2VyLmlzU2lnbmVkSW4gJiYgKFxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9zaWduX2luJylcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25fdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzI3cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxLjVweCBzb2xpZCAjM0VBOEZGJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1sOiAyLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7dXNlci5pc1NpZ25lZEluICYmIChcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBzeD17eyBwOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25JY29uIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBtbDogMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkTmV3QXJ0aWNsZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXdcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY2NvdW50LW1lbnVcIlxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgcGw6IDIsIHB5OiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdXJyZW50L2FydGljbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICDoqJjkuovjga7nrqHnkIZcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbl9vdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nb3V0IGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICDjgrXjgqTjg7PjgqLjgqbjg4hcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQXBwQmFyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbIkFydGljbGVJY29uIiwiTG9nb3V0IiwiUGVyc29uSWNvbiIsIkFwcEJhciIsIkF2YXRhciIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkRpdmlkZXIiLCJJY29uQnV0dG9uIiwiTWVudSIsIk1lbnVJdGVtIiwiTGlzdEl0ZW1JY29uIiwiVHlwb2dyYXBoeSIsImF4aW9zIiwiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VVc2VyU3RhdGUiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsImpzeERFViIsIl9qc3hERVYiLCJIZWFkZXIiLCJfcyIsInJvdXRlciIsIl91c2VVc2VyU3RhdGUiLCJfdXNlVXNlclN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlciIsIl91c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJvcGVuIiwiQm9vbGVhbiIsImhpZGVIZWFkZXJQYXRobmFtZXMiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImFkZE5ld0FydGljbGUiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjbGllbnQiLCJ1aWQiLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwicHVzaCIsImRhdGEiLCJpZCIsImUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInBvc2l0aW9uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInB5IiwiY2hpbGRyZW4iLCJtYXhXaWR0aCIsInB4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiaXNGZXRjaGVkIiwiaXNTaWduZWRJbiIsInZhcmlhbnQiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJvbkNsaWNrIiwibGluZUhlaWdodCIsImJvcmRlciIsIm1sIiwicCIsIm9uQ2xvc2UiLCJwbCIsImZvbnRXZWlnaHQiLCJuYW1lIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n"));

/***/ })

});