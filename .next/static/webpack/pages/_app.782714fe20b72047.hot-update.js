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

/***/ "./context/TransactionsContex.jsx":
/*!****************************************!*\
  !*** ./context/TransactionsContex.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": function() { return /* binding */ TransactionContext; },\n/* harmony export */   \"TransactionProvider\": function() { return /* binding */ TransactionProvider; }\n/* harmony export */ });\n/* harmony import */ var _Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createContext();\n//0xCa956956228e1c2708876B776F2ca469794AFE53\nvar TransactionProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), userBalance = ref1[0], setUserBalance = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), userTransactions1 = ref3[0], setUserTransactons = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        addressTo: '',\n        amount: '',\n        senderName: '',\n        message: ''\n    }), formData = ref4[0], setFormData = ref4[1];\n    var handleChange = function(e, name) {\n        setFormData(function(preveState) {\n            return _objectSpread({}, preveState, _defineProperty({}, name, e.target.value));\n        });\n    };\n    var getEthereumContract = function() {\n        var ethereum = window.ethereum;\n        var provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n        var signer = provider.getSigner();\n        var transactionContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAddress, _utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractABI, signer);\n        //console.log(provider, signer, transactionContract)\n        return transactionContract;\n    };\n    var checkAndUpdateBalance = function() {\n        var _ref = _asyncToGenerator(_Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, provider, balance, formetedBalance;\n            return _Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum);\n                        if (!currentAccount) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        _ctx.next = 5;\n                        return provider.getBalance(currentAccount);\n                    case 5:\n                        balance = _ctx.sent;\n                        formetedBalance = ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatEther(balance);\n                        //console.log(formetedBalance)\n                        setUserBalance(formetedBalance);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkAndUpdateBalance() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkIfWalletIsConnected = function() {\n        var _ref = _asyncToGenerator(_Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        _ctx.prev = 1;\n                        if (ethereum) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install Metamask'));\n                    case 4:\n                        _ctx.next = 6;\n                        return ethereum.request({\n                            method: 'eth_accounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        //console.log(`User account is ${accounts[0]}`)\n                        if (accounts.length) {\n                            setCurrentAccount(accounts[0]);\n                        } else {\n                            console.log('No accounts found for the user');\n                        }\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                        throw new Error('No Ethereum object');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return function checkIfWalletIsConnected() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, accounts;\n            return _Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        _ctx.prev = 1;\n                        if (ethereum) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", alert('Please install Metamask'));\n                    case 4:\n                        _ctx.next = 6;\n                        return ethereum.request({\n                            method: 'eth_requestAccounts'\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        if (!accounts.length) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        _ctx.next = 10;\n                        return setCurrentAccount(accounts[0]);\n                    case 10:\n                        _ctx.next = 12;\n                        return checkAndUpdateBalance();\n                    case 12:\n                        _ctx.next = 15;\n                        break;\n                    case 14:\n                        {\n                            console.log('No accounts found for the user');\n                        }\n                    case 15:\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                        throw new Error('No Ethereum object');\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    17\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var sendTransaction = function() {\n        var _ref = _asyncToGenerator(_Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, addressTo, amount, senderName, message, UserTransactionsContract, parsedAmount, transactionHash;\n            return _Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ethereum = window.ethereum;\n                        addressTo = formData.addressTo, amount = formData.amount, senderName = formData.senderName, message = formData.message;\n                        UserTransactionsContract = getEthereumContract();\n                        parsedAmount = ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.parseEther(amount);\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return ethereum.request({\n                            method: 'eth_sendTransaction',\n                            params: [\n                                {\n                                    from: currentAccount,\n                                    to: addressTo,\n                                    gas: '0x5208',\n                                    value: parsedAmount._hex\n                                }, \n                            ]\n                        });\n                    case 7:\n                        _ctx.next = 9;\n                        return UserTransactionsContract.sendTransaction(addressTo, parsedAmount, senderName, message);\n                    case 9:\n                        transactionHash = _ctx.sent;\n                        setLoading(true);\n                        console.log(\"Loading...\");\n                        _ctx.next = 14;\n                        return transactionHash.wait();\n                    case 14:\n                        console.log('success: Transactionhash', transactionHash);\n                        setLoading(false);\n                        _ctx.next = 21;\n                        break;\n                    case 18:\n                        _ctx.prev = 18;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.log(_ctx.t0);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    18\n                ]\n            ]);\n        }));\n        return function sendTransaction() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getUserTransactions = function() {\n        var _ref = _asyncToGenerator(_Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ethereum, UserTransactionsContract, userTransactions, transactions;\n            return _Users_thulasirampeddiboina_Desktop_Transfo_client_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (window) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", []);\n                    case 2:\n                        ethereum = window.ethereum;\n                        UserTransactionsContract = getEthereumContract();\n                        _ctx.next = 6;\n                        return UserTransactionsContract.getUserTransactions();\n                    case 6:\n                        userTransactions = _ctx.sent;\n                        transactions = userTransactions.map(function(eachTransaction) {\n                            return {\n                                addressTo: eachTransaction.to,\n                                amount: eachTransaction.amount && parseInt(eachTransaction.amount._hex) / Math.pow(10, 18),\n                                message: eachTransaction.message,\n                                timeStamp: eachTransaction.timeStamp && new Date(eachTransaction.timeStamp.toNumber() * 1000).toLocaleString()\n                            };\n                        });\n                        console.log('hello transactins', transactions);\n                        setUserTransactons(transactions);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getUserTransactions() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.ethereum && checkIfWalletIsConnected();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            connectWallet: connectWallet,\n            handleChange: handleChange,\n            sendTransaction: sendTransaction,\n            checkAndUpdateBalance: checkAndUpdateBalance,\n            getUserTransactions: getUserTransactions,\n            currentAccount: currentAccount,\n            userBalance: userBalance,\n            formData: formData,\n            loading: loading,\n            userTransactions: userTransactions1\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/thulasirampeddiboina/Desktop/Transfo/client/web/context/TransactionsContex.jsx\",\n        lineNumber: 152,\n        columnNumber: 5\n    }, _this));\n};\n_s(TransactionProvider, \"27p4sdCsdF4Z9TvvaK2Dfk2KOsE=\");\n_c = TransactionProvider;\nvar _c;\n$RefreshReg$(_c, \"TransactionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RyYW5zYWN0aW9uc0NvbnRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RTtBQUN6QztBQUVrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELEdBQUssQ0FBQ1Esa0JBQWtCLGlCQUFHUiwwREFBbUI7QUFDckQsRUFBNEM7QUFDckMsR0FBSyxDQUFDVSxtQkFBbUIsR0FBRyxRQUFRLFFBQVUsQ0FBQztRQUFoQkMsUUFBUSxTQUFSQSxRQUFROztJQUM1QyxHQUFLLENBQXVDUCxHQUFVLEdBQVZBLCtDQUFRLElBQTdDUSxjQUFjLEdBQXVCUixHQUFVLEtBQS9CUyxpQkFBaUIsR0FBSVQsR0FBVTtJQUN0RCxHQUFLLENBQWlDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUExQ1UsV0FBVyxHQUFvQlYsSUFBWSxLQUE5QlcsY0FBYyxHQUFJWCxJQUFZO0lBQ2xELEdBQUssQ0FBeUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDWSxPQUFPLEdBQWdCWixJQUFlLEtBQTdCYSxVQUFVLEdBQUliLElBQWU7SUFDN0MsR0FBSyxDQUEwQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFuRGMsaUJBQWdCLEdBQXdCZCxJQUFZLEtBQWxDZSxrQkFBa0IsR0FBSWYsSUFBWTtJQUMzRCxHQUFLLENBQTJCQSxJQUs5QixHQUw4QkEsK0NBQVEsQ0FBQyxDQUFDO1FBQ3hDZ0IsU0FBUyxFQUFFLENBQUU7UUFDYkMsTUFBTSxFQUFFLENBQUU7UUFDVkMsVUFBVSxFQUFFLENBQUU7UUFDZEMsT0FBTyxFQUFFLENBQUU7SUFDYixDQUFDLEdBTE1DLFFBQVEsR0FBaUJwQixJQUs5QixLQUxlcUIsV0FBVyxHQUFJckIsSUFLOUI7SUFFRixHQUFLLENBQUNzQixZQUFZLEdBQUcsUUFBUSxDQUFQQyxDQUFDLEVBQUVDLElBQUksRUFB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QU0sNkVBQ0h4QyxrQkFBa0IsQ0FBQ3NFLFFBQVE7UUFDMUIvQyxLQUFLLEVBQUUsQ0FBQztZQUNOMEIsYUFBYSxFQUFiQSxhQUFhO1lBQ2IvQixZQUFZLEVBQVpBLFlBQVk7WUFDWmdDLGVBQWUsRUFBZkEsZUFBZTtZQUNmaEIscUJBQXFCLEVBQXJCQSxxQkFBcUI7WUFDckIyQixtQkFBbUIsRUFBbkJBLG1CQUFtQjtZQUVuQnpELGNBQWMsRUFBZEEsY0FBYztZQUNkRSxXQUFXLEVBQVhBLFdBQVc7WUFDWFUsUUFBUSxFQUFSQSxRQUFRO1lBQ1JSLE9BQU8sRUFBUEEsT0FBTztZQUNQRSxnQkFBZ0IsRUFBaEJBLGlCQUFnQjtRQUNsQixDQUFDO2tCQUVBUCxRQUFROzs7Ozs7QUFHZixDQUFDO0dBbEtZRCxtQkFBbUI7S0FBbkJBLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1RyYW5zYWN0aW9uc0NvbnRleC5qc3g/YTZmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcblxuaW1wb3J0IHsgY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzcyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxuLy8weENhOTU2OTU2MjI4ZTFjMjcwODg3NkI3NzZGMmNhNDY5Nzk0QUZFNTNcbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvblByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW3VzZXJCYWxhbmNlLCBzZXRVc2VyQmFsYW5jZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt1c2VyVHJhbnNhY3Rpb25zLCBzZXRVc2VyVHJhbnNhY3RvbnNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIGFkZHJlc3NUbzogJycsXG4gICAgYW1vdW50OiAnJyxcbiAgICBzZW5kZXJOYW1lOiAnJyxcbiAgICBtZXNzYWdlOiAnJyxcbiAgfSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgbmFtZSkgPT4ge1xuICAgIHNldEZvcm1EYXRhKChwcmV2ZVN0YXRlKSA9PiAoeyAuLi5wcmV2ZVN0YXRlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pKVxuICB9XG5cbiAgY29uc3QgZ2V0RXRoZXJldW1Db250cmFjdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSlcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgIGNvbnN0IHRyYW5zYWN0aW9uQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgY29udHJhY3RBZGRyZXNzLFxuICAgICAgY29udHJhY3RBQkksXG4gICAgICBzaWduZXIsXG4gICAgKVxuICAgIC8vY29uc29sZS5sb2cocHJvdmlkZXIsIHNpZ25lciwgdHJhbnNhY3Rpb25Db250cmFjdClcbiAgICByZXR1cm4gdHJhbnNhY3Rpb25Db250cmFjdFxuICB9XG5cbiAgY29uc3QgY2hlY2tBbmRVcGRhdGVCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKVxuICAgIC8vY29uc29sZS5sb2coYGFjY291bnQke2N1cnJlbnRBY2NvdW50fWApXG4gICAgaWYgKGN1cnJlbnRBY2NvdW50KSB7XG4gICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgcHJvdmlkZXIuZ2V0QmFsYW5jZShjdXJyZW50QWNjb3VudClcbiAgICAgIC8vY29uc29sZS5sb2coJ2JhbGFuY2UnLCBiYWxhbmNlKVxuICAgICAgY29uc3QgZm9ybWV0ZWRCYWxhbmNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGJhbGFuY2UpXG4gICAgICAvL2NvbnNvbGUubG9nKGZvcm1ldGVkQmFsYW5jZSlcbiAgICAgIHNldFVzZXJCYWxhbmNlKGZvcm1ldGVkQmFsYW5jZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93XG5cbiAgICB0cnkge1xuICAgICAgaWYgKCFldGhlcmV1bSkgcmV0dXJuIGFsZXJ0KCdQbGVhc2UgaW5zdGFsbCBNZXRhbWFzaycpXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pXG4gICAgICAvL2NvbnNvbGUubG9nKGBVc2VyIGFjY291bnQgaXMgJHthY2NvdW50c1swXX1gKVxuICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCkge1xuICAgICAgICBzZXRDdXJyZW50QWNjb3VudChhY2NvdW50c1swXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBhY2NvdW50cyBmb3VuZCBmb3IgdGhlIHVzZXInKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gRXRoZXJldW0gb2JqZWN0JylcbiAgICB9XG4gIH1cblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvd1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWV0aGVyZXVtKSByZXR1cm4gYWxlcnQoJ1BsZWFzZSBpbnN0YWxsIE1ldGFtYXNrJylcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pXG4gICAgICBpZiAoYWNjb3VudHMubGVuZ3RoKSB7XG4gICAgICAgIGF3YWl0IHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxuICAgICAgICBhd2FpdCBjaGVja0FuZFVwZGF0ZUJhbGFuY2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIGFjY291bnRzIGZvdW5kIGZvciB0aGUgdXNlcicpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBFdGhlcmV1bSBvYmplY3QnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNlbmRUcmFuc2FjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3dcbiAgICBjb25zdCB7IGFkZHJlc3NUbywgYW1vdW50LCBzZW5kZXJOYW1lLCBtZXNzYWdlIH0gPSBmb3JtRGF0YVxuXG4gICAgY29uc3QgVXNlclRyYW5zYWN0aW9uc0NvbnRyYWN0ID0gZ2V0RXRoZXJldW1Db250cmFjdCgpXG5cbiAgICBjb25zdCBwYXJzZWRBbW91bnQgPSBldGhlcnMudXRpbHMucGFyc2VFdGhlcihhbW91bnQpXG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ2V0aF9zZW5kVHJhbnNhY3Rpb24nLFxuICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgIHRvOiBhZGRyZXNzVG8sXG4gICAgICAgICAgICBnYXM6ICcweDUyMDgnLCAvLyAyMTAwMCBHd2VpXG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VkQW1vdW50Ll9oZXgsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSGFzaCA9IGF3YWl0IFVzZXJUcmFuc2FjdGlvbnNDb250cmFjdC5zZW5kVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3NUbyxcbiAgICAgICAgcGFyc2VkQW1vdW50LFxuICAgICAgICBzZW5kZXJOYW1lLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgKVxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgY29uc29sZS5sb2coYExvYWRpbmcuLi5gKVxuICAgICAgYXdhaXQgdHJhbnNhY3Rpb25IYXNoLndhaXQoKVxuXG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzczogVHJhbnNhY3Rpb25oYXNoJywgdHJhbnNhY3Rpb25IYXNoKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcblxuICAgICAgLy9hd2FpdCBjaGVja0FuZFVwZGF0ZUJhbGFuY2UoKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRVc2VyVHJhbnNhY3Rpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghd2luZG93KSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93XG4gICAgY29uc3QgVXNlclRyYW5zYWN0aW9uc0NvbnRyYWN0ID0gZ2V0RXRoZXJldW1Db250cmFjdCgpXG4gICAgY29uc3QgdXNlclRyYW5zYWN0aW9ucyA9IGF3YWl0IFVzZXJUcmFuc2FjdGlvbnNDb250cmFjdC5nZXRVc2VyVHJhbnNhY3Rpb25zKClcblxuICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IHVzZXJUcmFuc2FjdGlvbnMubWFwKChlYWNoVHJhbnNhY3Rpb24pID0+ICh7XG4gICAgICBhZGRyZXNzVG86IGVhY2hUcmFuc2FjdGlvbi50byxcbiAgICAgIGFtb3VudDpcbiAgICAgICAgZWFjaFRyYW5zYWN0aW9uLmFtb3VudCAmJlxuICAgICAgICBwYXJzZUludChlYWNoVHJhbnNhY3Rpb24uYW1vdW50Ll9oZXgpIC8gMTAgKiogMTgsXG4gICAgICBtZXNzYWdlOiBlYWNoVHJhbnNhY3Rpb24ubWVzc2FnZSxcbiAgICAgIHRpbWVTdGFtcDpcbiAgICAgICAgZWFjaFRyYW5zYWN0aW9uLnRpbWVTdGFtcCAmJlxuICAgICAgICBuZXcgRGF0ZShlYWNoVHJhbnNhY3Rpb24udGltZVN0YW1wLnRvTnVtYmVyKCkgKiAxMDAwKS50b0xvY2FsZVN0cmluZygpLFxuICAgIH0pKVxuICAgIGNvbnNvbGUubG9nKCdoZWxsbyB0cmFuc2FjdGlucycsIHRyYW5zYWN0aW9ucylcbiAgICBzZXRVc2VyVHJhbnNhY3RvbnModHJhbnNhY3Rpb25zKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuZXRoZXJldW0gJiYgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8VHJhbnNhY3Rpb25Db250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjb25uZWN0V2FsbGV0LFxuICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgIHNlbmRUcmFuc2FjdGlvbixcbiAgICAgICAgY2hlY2tBbmRVcGRhdGVCYWxhbmNlLFxuICAgICAgICBnZXRVc2VyVHJhbnNhY3Rpb25zLFxuXG4gICAgICAgIGN1cnJlbnRBY2NvdW50LFxuICAgICAgICB1c2VyQmFsYW5jZSxcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIHVzZXJUcmFuc2FjdGlvbnMsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJldGhlcnMiLCJjb250cmFjdEFCSSIsImNvbnRyYWN0QWRkcmVzcyIsIlRyYW5zYWN0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJUcmFuc2FjdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50QWNjb3VudCIsInNldEN1cnJlbnRBY2NvdW50IiwidXNlckJhbGFuY2UiLCJzZXRVc2VyQmFsYW5jZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlclRyYW5zYWN0aW9ucyIsInNldFVzZXJUcmFuc2FjdG9ucyIsImFkZHJlc3NUbyIsImFtb3VudCIsInNlbmRlck5hbWUiLCJtZXNzYWdlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwicHJldmVTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0RXRoZXJldW1Db250cmFjdCIsImV0aGVyZXVtIiwid2luZG93IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJ0cmFuc2FjdGlvbkNvbnRyYWN0IiwiQ29udHJhY3QiLCJjaGVja0FuZFVwZGF0ZUJhbGFuY2UiLCJiYWxhbmNlIiwiZm9ybWV0ZWRCYWxhbmNlIiwiZ2V0QmFsYW5jZSIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJhY2NvdW50cyIsImFsZXJ0IiwicmVxdWVzdCIsIm1ldGhvZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsImNvbm5lY3RXYWxsZXQiLCJzZW5kVHJhbnNhY3Rpb24iLCJVc2VyVHJhbnNhY3Rpb25zQ29udHJhY3QiLCJwYXJzZWRBbW91bnQiLCJ0cmFuc2FjdGlvbkhhc2giLCJwYXJzZUV0aGVyIiwicGFyYW1zIiwiZnJvbSIsInRvIiwiZ2FzIiwiX2hleCIsIndhaXQiLCJnZXRVc2VyVHJhbnNhY3Rpb25zIiwidHJhbnNhY3Rpb25zIiwibWFwIiwiZWFjaFRyYW5zYWN0aW9uIiwicGFyc2VJbnQiLCJ0aW1lU3RhbXAiLCJEYXRlIiwidG9OdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/TransactionsContex.jsx\n");

/***/ })

});