"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Transactions.jsx":
/*!*************************************!*\
  !*** ./components/Transactions.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_TransactionsContex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/TransactionsContex */ \"./context/TransactionsContex.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TransactionTile = function(transaction) {\n    console.log(\"transaction is \".concat(JSON.stringify({\n        addressTo: addressTo,\n        amount: amount,\n        message: message,\n        timeStamp: timeStamp\n    })));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        w: \"320px\",\n        borderWidth: \"0.5px\",\n        borderColor: \"whiteAlpha.500\",\n        borderRadius: \"5px\",\n        boxShadow: 20,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n            w: \"full\",\n            h: \"full\",\n            align: \"start\",\n            p: 2,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    color: \"white\",\n                    fontSize: \"xs\",\n                    children: \"\".concat(transaction.timestamp)\n                }, void 0, false, {\n                    fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    color: \"white\",\n                    fontSize: \"sm\",\n                    children: \"Sent To:  \".concat(transaction.addressTo)\n                }, void 0, false, {\n                    fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    color: \"white\",\n                    fontSize: \"sm\",\n                    children: \"Amount: \".concat(\"\".concat(transaction.amount))\n                }, void 0, false, {\n                    fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    color: \"white\",\n                    fontSize: \"sm\",\n                    children: \"Message: \".concat(transaction.message)\n                }, void 0, false, {\n                    fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this));\n};\n_c = TransactionTile;\nvar Transactions = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_TransactionsContex__WEBPACK_IMPORTED_MODULE_3__.TransactionContext), getUserTransactions = ref.getUserTransactions, userTransactions = ref.userTransactions;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(_Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return getUserTransactions();\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var trasactionsArea = function(transactions) {\n        var _this2 = _this1;\n        console.log(\"Transactions \".concat(transactions));\n        if (!transactions) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                w: \"full\",\n                justify: \"center\",\n                align: \"center\",\n                py: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    color: \"red\",\n                    children: \"Error: Error Getting Data\"\n                }, void 0, false, {\n                    fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this1));\n        }\n        if (transactions.length == 0) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                w: \"full\",\n                justify: \"center\",\n                align: \"center\",\n                py: 4,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    color: \"yellow.700\",\n                    children: \"Oops! No Transactions Found\"\n                }, void 0, false, {\n                    fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, _this1));\n        }\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Wrap, {\n            w: \"full\",\n            spacing: 4,\n            justify: \"center\",\n            children: transactions.map(function(eachTransaction, index) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TransactionTile, {\n                    transaction: eachTransaction\n                }, transactions.index + index, false, {\n                    fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, _this2);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, _this1));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        w: \"full\",\n        bgGradient: \"linear(to-r, black,gray.900, gray.800,gray.800,gray.800,pink.900)\",\n        align: \"center\",\n        justify: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n            w: \"full\",\n            minW: \"900px\",\n            maxW: \"900px\",\n            align: \"center\",\n            py: 4,\n            spacing: 6,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                    color: \"white\",\n                    fontSize: \"xl\",\n                    fontWeight: \"semibold\",\n                    children: \"Your Transactions\"\n                }, void 0, false, {\n                    fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, _this),\n                trasactionsArea(userTransactions)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/components/Transactions.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, _this));\n};\n_s(Transactions, \"CsNVATzscf2Iup9wtZj6sTLOLdI=\");\n_c1 = Transactions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transactions);\nvar _c, _c1;\n$RefreshReg$(_c, \"TransactionTile\");\n$RefreshReg$(_c1, \"Transactions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO3NHQUNqRGxDLGtEQUFJO29CQUFDeUIsS0FBSyxFQUFDLENBQVk7OEJBQUcsQ0FBMkI7Ozs7Ozs7Ozs7O1FBRzVELENBQUM7UUFDRCxNQUFNLDZFQUNIdkIsa0RBQUk7WUFBQ2UsQ0FBQyxFQUFDLENBQU07WUFBQ21CLE9BQU8sRUFBRSxDQUFDO1lBQUVILE9BQU8sRUFBQyxDQUFRO3NCQUN4Q0QsWUFBWSxDQUFDSyxHQUFHLENBQUMsUUFBUSxDQUFQQyxlQUFlLEVBQUVDLEtBQUs7OEJBQ3ZDLE1BQU0sK0RBQUxoQyxlQUFlO29CQUNkQyxXQUFXLEVBQUU4QixlQUFlO21CQUN2Qk4sWUFBWSxDQUFDTyxLQUFLLEdBQUdBLEtBQUs7Ozs7Ozs7Ozs7O0lBS3pDLENBQUM7SUFDRCxNQUFNLDZFQUNIeEMsa0RBQUk7UUFDSGtCLENBQUMsRUFBQyxDQUFNO1FBQ1J1QixVQUFVLEVBQUMsQ0FBbUU7UUFDOUVqQixLQUFLLEVBQUMsQ0FBUTtRQUNkVSxPQUFPLEVBQUMsQ0FBUTs4RkFFZmhDLG9EQUFNO1lBQ0xnQixDQUFDLEVBQUMsQ0FBTTtZQUNSd0IsSUFBSSxFQUFDLENBQU87WUFDWkMsSUFBSSxFQUFDLENBQU87WUFDWm5CLEtBQUssRUFBQyxDQUFRO1lBQ2RXLEVBQUUsRUFBRSxDQUFDO1lBQ0xFLE9BQU8sRUFBRSxDQUFDOzs0RkFFVHBDLGtEQUFJO29CQUFDeUIsS0FBSyxFQUFDLENBQU87b0JBQUNDLFFBQVEsRUFBQyxDQUFJO29CQUFDaUIsVUFBVSxFQUFDLENBQVU7OEJBQUMsQ0FFeEQ7Ozs7OztnQkFDQ1osZUFBZSxDQUFDRCxnQkFBZ0I7Ozs7Ozs7Ozs7OztBQUl6QyxDQUFDO0dBekRLRixZQUFZO01BQVpBLFlBQVk7QUEyRGxCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25zLmpzeD8wZGQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIFRleHQsIFZTdGFjaywgV3JhcCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFuc2FjdGlvbkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L1RyYW5zYWN0aW9uc0NvbnRleCdcblxuY29uc3QgVHJhbnNhY3Rpb25UaWxlID0gKHRyYW5zYWN0aW9uKSA9PiB7XG4gIGNvbnNvbGUubG9nKFxuICAgIGB0cmFuc2FjdGlvbiBpcyAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgIGFkZHJlc3NUbyxcbiAgICAgIGFtb3VudCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0aW1lU3RhbXAsXG4gICAgfSl9YCxcbiAgKVxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICB3PVwiMzIwcHhcIlxuICAgICAgYm9yZGVyV2lkdGg9XCIwLjVweFwiXG4gICAgICBib3JkZXJDb2xvcj1cIndoaXRlQWxwaGEuNTAwXCJcbiAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXG4gICAgICBib3hTaGFkb3c9ezIwfVxuICAgID5cbiAgICAgIDxWU3RhY2sgdz1cImZ1bGxcIiBoPVwiZnVsbFwiIGFsaWduPVwic3RhcnRcIiBwPXsyfT5cbiAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwieHNcIj57YCR7dHJhbnNhY3Rpb24udGltZXN0YW1wfWB9PC9UZXh0PlxuXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgZm9udFNpemU9XCJzbVwiXG4gICAgICAgID57YFNlbnQgVG86ICAke3RyYW5zYWN0aW9uLmFkZHJlc3NUb31gfTwvVGV4dD5cblxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIGZvbnRTaXplPVwic21cIlxuICAgICAgICA+e2BBbW91bnQ6ICR7YCR7dHJhbnNhY3Rpb24uYW1vdW50fWB9YH08L1RleHQ+XG5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBmb250U2l6ZT1cInNtXCJcbiAgICAgICAgPntgTWVzc2FnZTogJHt0cmFuc2FjdGlvbi5tZXNzYWdlfWB9PC9UZXh0PlxuICAgICAgPC9WU3RhY2s+XG4gICAgPC9GbGV4PlxuICApXG59XG5cbmNvbnN0IFRyYW5zYWN0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgeyBnZXRVc2VyVHJhbnNhY3Rpb25zLCB1c2VyVHJhbnNhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFxuICAgIFRyYW5zYWN0aW9uQ29udGV4dCxcbiAgKVxuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZ2V0VXNlclRyYW5zYWN0aW9ucygpXG4gIH0sIFtdKVxuICBjb25zdCB0cmFzYWN0aW9uc0FyZWEgPSAodHJhbnNhY3Rpb25zKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFRyYW5zYWN0aW9ucyAke3RyYW5zYWN0aW9uc31gKVxuICAgIGlmICghdHJhbnNhY3Rpb25zKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RmxleCB3PVwiZnVsbFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIHB5PXs0fT5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cInJlZFwiPntgRXJyb3I6IEVycm9yIEdldHRpbmcgRGF0YWB9PC9UZXh0PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICApXG4gICAgfVxuICAgIGlmICh0cmFuc2FjdGlvbnMubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4IHc9XCJmdWxsXCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgcHk9ezR9PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwieWVsbG93LjcwMFwiPntgT29wcyEgTm8gVHJhbnNhY3Rpb25zIEZvdW5kYH08L1RleHQ+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwIHc9XCJmdWxsXCIgc3BhY2luZz17NH0ganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICB7dHJhbnNhY3Rpb25zLm1hcCgoZWFjaFRyYW5zYWN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxUcmFuc2FjdGlvblRpbGVcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uPXtlYWNoVHJhbnNhY3Rpb259XG4gICAgICAgICAgICBrZXk9e3RyYW5zYWN0aW9ucy5pbmRleCArIGluZGV4fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9XcmFwPlxuICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICB3PVwiZnVsbFwiXG4gICAgICBiZ0dyYWRpZW50PVwibGluZWFyKHRvLXIsIGJsYWNrLGdyYXkuOTAwLCBncmF5LjgwMCxncmF5LjgwMCxncmF5LjgwMCxwaW5rLjkwMClcIlxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPFZTdGFja1xuICAgICAgICB3PVwiZnVsbFwiXG4gICAgICAgIG1pblc9XCI5MDBweFwiXG4gICAgICAgIG1heFc9XCI5MDBweFwiXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgcHk9ezR9XG4gICAgICAgIHNwYWNpbmc9ezZ9XG4gICAgICA+XG4gICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cInhsXCIgZm9udFdlaWdodD1cInNlbWlib2xkXCI+XG4gICAgICAgICAgWW91ciBUcmFuc2FjdGlvbnNcbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7dHJhc2FjdGlvbnNBcmVhKHVzZXJUcmFuc2FjdGlvbnMpfVxuICAgICAgPC9WU3RhY2s+XG4gICAgPC9GbGV4PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uc1xuIl0sIm5hbWVzIjpbIkZsZXgiLCJUZXh0IiwiVlN0YWNrIiwiV3JhcCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIlRyYW5zYWN0aW9uQ29udGV4dCIsIlRyYW5zYWN0aW9uVGlsZSIsInRyYW5zYWN0aW9uIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGRyZXNzVG8iLCJhbW91bnQiLCJtZXNzYWdlIiwidGltZVN0YW1wIiwidyIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJoIiwiYWxpZ24iLCJwIiwiY29sb3IiLCJmb250U2l6ZSIsInRpbWVzdGFtcCIsIlRyYW5zYWN0aW9ucyIsImdldFVzZXJUcmFuc2FjdGlvbnMiLCJ1c2VyVHJhbnNhY3Rpb25zIiwidHJhc2FjdGlvbnNBcmVhIiwidHJhbnNhY3Rpb25zIiwianVzdGlmeSIsInB5IiwibGVuZ3RoIiwic3BhY2luZyIsIm1hcCIsImVhY2hUcmFuc2FjdGlvbiIsImluZGV4IiwiYmdHcmFkaWVudCIsIm1pblciLCJtYXhXIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Transactions.jsx\n");

/***/ })

});