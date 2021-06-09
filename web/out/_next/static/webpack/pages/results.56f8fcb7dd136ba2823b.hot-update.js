webpackHotUpdate_N_E("pages/results",{

/***/ "./components/vis_submission_matrix.tsx":
/*!**********************************************!*\
  !*** ./components/vis_submission_matrix.tsx ***!
  \**********************************************/
/*! exports provided: SubmissionMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubmissionMatrix\", function() { return SubmissionMatrix; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _vis_submission_matrix_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vis_submission_matrix.module.css */ \"./components/vis_submission_matrix.module.css\");\n/* harmony import */ var _vis_submission_matrix_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vis_submission_matrix_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/usr/local/google/home/gehrmann/Documents/GEM-benchmark.github.io/web/components/vis_submission_matrix.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar SubmissionMatrix = /*#__PURE__*/function (_React$PureComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SubmissionMatrix, _React$PureComponent);\n\n  var _super = _createSuper(SubmissionMatrix);\n\n  function SubmissionMatrix() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SubmissionMatrix);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      datasetHierarchy: []\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SubmissionMatrix, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      // console.log(this.state.datasetHierarchy, \"--- this.state.datasetHierarchy\");\n      var filters = this.props.submissionFilter;\n      var highligted = this.props.highlighted;\n\n      var submissionClasses = function submissionClasses(s, ds) {\n        return [_vis_submission_matrix_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.dsBox, highligted.indexOf(\"\".concat(s, \".\").concat(ds)) > -1 ? _vis_submission_matrix_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.dsBoxHover : '', filters ? filters.indexOf(\"\".concat(s, \".\").concat(ds)) > -1 ? _vis_submission_matrix_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.selected : _vis_submission_matrix_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.nonSelected : ''].join(\" \");\n      };\n\n      var tasklist = this.state.datasetHierarchy.map(function (t) {\n        var datasets = t.datasets.map(function (dd) {\n          var ds = dd.ds;\n          var submissions = dd.submissions.map(function (sn) {\n            return __jsx(\"div\", {\n              key: sn,\n              className: submissionClasses(sn, ds),\n              onMouseEnter: function onMouseEnter() {\n                return _this2.props.onHover([\"\".concat(sn, \".\").concat(ds)], true);\n              },\n              onMouseLeave: function onMouseLeave() {\n                return _this2.props.onHover([\"\".concat(sn, \".\").concat(ds)], false);\n              },\n              __self: _this2,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 22\n              }\n            }, sn);\n          });\n          return __jsx(\"div\", {\n            key: dd.ds,\n            style: {\n              display: \"flex\"\n            },\n            __self: _this2,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 16\n            }\n          }, __jsx(\"div\", {\n            className: _vis_submission_matrix_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.metaBox,\n            onMouseEnter: function onMouseEnter() {\n              return _this2.props.onHover(dd.submissions.map(function (sn) {\n                return \"\".concat(sn, \".\").concat(ds);\n              }), true);\n            },\n            onMouseLeave: function onMouseLeave() {\n              return _this2.props.onHover(dd.submissions.map(function (sn) {\n                return \"\".concat(sn, \".\").concat(ds);\n              }), false);\n            },\n            __self: _this2,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 11\n            }\n          }, dd.ds), __jsx(\"div\", {\n            __self: _this2,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 11\n            }\n          }, submissions));\n        });\n        return __jsx(\"div\", {\n          key: t.task,\n          style: {\n            display: \"flex\",\n            margin: \"2pt 0\"\n          },\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 14\n          }\n        }, __jsx(\"div\", {\n          className: _vis_submission_matrix_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.metaMetaBox,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 9\n          }\n        }, t.task), __jsx(\"div\", {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 9\n          }\n        }, datasets));\n      });\n      return __jsx(\"div\", {\n        className: _vis_submission_matrix_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.matrix,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 12\n        }\n      }, tasklist);\n    }\n  }], [{\n    key: \"getDerivedStateFromProps\",\n    value: function getDerivedStateFromProps(props, oldStates) {\n      var dsFullName = function dsFullName(ds) {\n        return \"\".concat(ds);\n      };\n\n      var datasetHierarchy = Object.keys(props.config.challenges).sort().map(function (task) {\n        var datasets = props.config.challenges[task].datasets.map(function (dsPart) {\n          var ds = dsFullName(dsPart);\n          var submissions = props.scores.filter(function (score) {\n            return ds in score;\n          }).map(function (score) {\n            return score.submission_name;\n          });\n          return {\n            ds: ds,\n            submissions: submissions\n          };\n        }).filter(function (x) {\n          return x.submissions.length > 0;\n        }).sort(function (a, b) {\n          return d3__WEBPACK_IMPORTED_MODULE_9__[\"ascending\"](a.ds, b.ds);\n        });\n        return {\n          task: task,\n          datasets: datasets\n        };\n      });\n      return {\n        datasetHierarchy: datasetHierarchy\n      };\n    }\n  }]);\n\n  return SubmissionMatrix;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);\n\nObject(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(SubmissionMatrix, \"defaultProps\", {\n  submissionFilter: null,\n  // onHover: (sn, hov) => console.log(sn, hov, \"--- sn,hov\"),\n  highlighted: []\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aXNfc3VibWlzc2lvbl9tYXRyaXgudHN4PzM4MDEiXSwibmFtZXMiOlsiU3VibWlzc2lvbk1hdHJpeCIsImRhdGFzZXRIaWVyYXJjaHkiLCJmaWx0ZXJzIiwicHJvcHMiLCJzdWJtaXNzaW9uRmlsdGVyIiwiaGlnaGxpZ3RlZCIsImhpZ2hsaWdodGVkIiwic3VibWlzc2lvbkNsYXNzZXMiLCJzIiwiZHMiLCJzdHlsZSIsImRzQm94IiwiaW5kZXhPZiIsImRzQm94SG92ZXIiLCJzZWxlY3RlZCIsIm5vblNlbGVjdGVkIiwiam9pbiIsInRhc2tsaXN0Iiwic3RhdGUiLCJtYXAiLCJ0IiwiZGF0YXNldHMiLCJkZCIsInN1Ym1pc3Npb25zIiwic24iLCJvbkhvdmVyIiwiZGlzcGxheSIsIm1ldGFCb3giLCJ0YXNrIiwibWFyZ2luIiwibWV0YU1ldGFCb3giLCJtYXRyaXgiLCJvbGRTdGF0ZXMiLCJkc0Z1bGxOYW1lIiwiT2JqZWN0Iiwia2V5cyIsImNvbmZpZyIsImNoYWxsZW5nZXMiLCJzb3J0IiwiZHNQYXJ0Iiwic2NvcmVzIiwiZmlsdGVyIiwic2NvcmUiLCJzdWJtaXNzaW9uX25hbWUiLCJ4IiwibGVuZ3RoIiwiYSIsImIiLCJkMyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQXVCTyxJQUFNQSxnQkFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLGdOQUdVO0FBQ05DLHNCQUFnQixFQUFFO0FBRFosS0FIVjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFxQ1c7QUFBQTs7QUFDUDtBQUNBLFVBQU1DLE9BQU8sR0FBRyxLQUFLQyxLQUFMLENBQVdDLGdCQUEzQjtBQUNBLFVBQU1DLFVBQVUsR0FBRyxLQUFLRixLQUFMLENBQVdHLFdBQTlCOztBQUNBLFVBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFJQyxFQUFKLEVBQVc7QUFDbkMsZUFBTyxDQUFDQyx3RUFBSyxDQUFDQyxLQUFQLEVBQ0xOLFVBQVUsQ0FBQ08sT0FBWCxXQUFzQkosQ0FBdEIsY0FBMkJDLEVBQTNCLEtBQW1DLENBQUMsQ0FBcEMsR0FBd0NDLHdFQUFLLENBQUNHLFVBQTlDLEdBQTJELEVBRHRELEVBRUxYLE9BQU8sR0FDSkEsT0FBTyxDQUFDVSxPQUFSLFdBQW1CSixDQUFuQixjQUF3QkMsRUFBeEIsS0FBZ0MsQ0FBQyxDQUFqQyxHQUNDQyx3RUFBSyxDQUFDSSxRQURQLEdBQ2tCSix3RUFBSyxDQUFDSyxXQUZwQixHQUdILEVBTEMsRUFNTEMsSUFOSyxDQU1BLEdBTkEsQ0FBUDtBQU9ELE9BUkQ7O0FBV0EsVUFBTUMsUUFBUSxHQUFHLEtBQUtDLEtBQUwsQ0FBV2pCLGdCQUFYLENBQTRCa0IsR0FBNUIsQ0FBZ0MsVUFBQUMsQ0FBQyxFQUFJO0FBQ3BELFlBQU1DLFFBQVEsR0FBR0QsQ0FBQyxDQUFDQyxRQUFGLENBQVdGLEdBQVgsQ0FBZSxVQUFBRyxFQUFFLEVBQUk7QUFDcEMsY0FBTWIsRUFBRSxHQUFHYSxFQUFFLENBQUNiLEVBQWQ7QUFDQSxjQUFNYyxXQUFXLEdBQUdELEVBQUUsQ0FBQ0MsV0FBSCxDQUNqQkosR0FEaUIsQ0FDYixVQUFBSyxFQUFFO0FBQUEsbUJBQUk7QUFDVCxpQkFBRyxFQUFFQSxFQURJO0FBRVQsdUJBQVMsRUFBRWpCLGlCQUFpQixDQUFDaUIsRUFBRCxFQUFLZixFQUFMLENBRm5CO0FBR1QsMEJBQVksRUFBRTtBQUFBLHVCQUFNLE1BQUksQ0FBQ04sS0FBTCxDQUFXc0IsT0FBWCxDQUFtQixXQUFJRCxFQUFKLGNBQVVmLEVBQVYsRUFBbkIsRUFBb0MsSUFBcEMsQ0FBTjtBQUFBLGVBSEw7QUFJVCwwQkFBWSxFQUFFO0FBQUEsdUJBQU0sTUFBSSxDQUFDTixLQUFMLENBQVdzQixPQUFYLENBQW1CLFdBQUlELEVBQUosY0FBVWYsRUFBVixFQUFuQixFQUFvQyxLQUFwQyxDQUFOO0FBQUEsZUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBS1RlLEVBTFMsQ0FBSjtBQUFBLFdBRFcsQ0FBcEI7QUFPQSxpQkFBTztBQUFLLGVBQUcsRUFBRUYsRUFBRSxDQUFDYixFQUFiO0FBQWlCLGlCQUFLLEVBQUU7QUFBQ2lCLHFCQUFPLEVBQUU7QUFBVixhQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0w7QUFDRSxxQkFBUyxFQUFFaEIsd0VBQUssQ0FBQ2lCLE9BRG5CO0FBRUUsd0JBQVksRUFBRTtBQUFBLHFCQUFNLE1BQUksQ0FBQ3hCLEtBQUwsQ0FBV3NCLE9BQVgsQ0FBbUJILEVBQUUsQ0FBQ0MsV0FBSCxDQUFlSixHQUFmLENBQW1CLFVBQUFLLEVBQUU7QUFBQSxpQ0FBT0EsRUFBUCxjQUFhZixFQUFiO0FBQUEsZUFBckIsQ0FBbkIsRUFBNEQsSUFBNUQsQ0FBTjtBQUFBLGFBRmhCO0FBR0Usd0JBQVksRUFBRTtBQUFBLHFCQUFNLE1BQUksQ0FBQ04sS0FBTCxDQUFXc0IsT0FBWCxDQUFtQkgsRUFBRSxDQUFDQyxXQUFILENBQWVKLEdBQWYsQ0FBbUIsVUFBQUssRUFBRTtBQUFBLGlDQUFPQSxFQUFQLGNBQWFmLEVBQWI7QUFBQSxlQUFyQixDQUFuQixFQUE0RCxLQUE1RCxDQUFOO0FBQUEsYUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUlFYSxFQUFFLENBQUNiLEVBSkwsQ0FESyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBTWMsV0FBTixDQU5LLENBQVA7QUFRRCxTQWpCZ0IsQ0FBakI7QUFrQkEsZUFBTztBQUFLLGFBQUcsRUFBRUgsQ0FBQyxDQUFDUSxJQUFaO0FBQWtCLGVBQUssRUFBRTtBQUFDRixtQkFBTyxFQUFFLE1BQVY7QUFBa0JHLGtCQUFNLEVBQUU7QUFBMUIsV0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNMO0FBQUssbUJBQVMsRUFBRW5CLHdFQUFLLENBQUNvQixXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW9DVixDQUFDLENBQUNRLElBQXRDLENBREssRUFFTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU1QLFFBQU4sQ0FGSyxDQUFQO0FBSUQsT0F2QmdCLENBQWpCO0FBeUJBLGFBQU87QUFBSyxpQkFBUyxFQUFFWCx3RUFBSyxDQUFDcUIsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQmQsUUFBL0IsQ0FBUDtBQUNEO0FBOUVIO0FBQUE7QUFBQSw2Q0Fha0NkLEtBYmxDLEVBYXNENkIsU0FidEQsRUFhaUU7QUFFN0QsVUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ3hCLEVBQUQ7QUFBQSx5QkFBV0EsRUFBWDtBQUFBLE9BQW5COztBQUNBLFVBQU1SLGdCQUFnQixHQUFHaUMsTUFBTSxDQUFDQyxJQUFQLENBQVloQyxLQUFLLENBQUNpQyxNQUFOLENBQWFDLFVBQXpCLEVBQ3RCQyxJQURzQixHQUV0Qm5CLEdBRnNCLENBRWxCLFVBQUFTLElBQUksRUFBSTtBQUNYLFlBQU1QLFFBQVEsR0FDWmxCLEtBQUssQ0FBQ2lDLE1BQU4sQ0FBYUMsVUFBYixDQUF3QlQsSUFBeEIsRUFBOEJQLFFBQTlCLENBQ0dGLEdBREgsQ0FDTyxVQUFBb0IsTUFBTSxFQUFJO0FBQ2IsY0FBTTlCLEVBQUUsR0FBR3dCLFVBQVUsQ0FBQ00sTUFBRCxDQUFyQjtBQUNBLGNBQU1oQixXQUFXLEdBQUdwQixLQUFLLENBQUNxQyxNQUFOLENBQ2pCQyxNQURpQixDQUNWLFVBQUFDLEtBQUs7QUFBQSxtQkFBSWpDLEVBQUUsSUFBSWlDLEtBQVY7QUFBQSxXQURLLEVBRWpCdkIsR0FGaUIsQ0FFYixVQUFBdUIsS0FBSztBQUFBLG1CQUFJQSxLQUFLLENBQUNDLGVBQVY7QUFBQSxXQUZRLENBQXBCO0FBR0EsaUJBQU87QUFBQ2xDLGNBQUUsRUFBRkEsRUFBRDtBQUFLYyx1QkFBVyxFQUFYQTtBQUFMLFdBQVA7QUFDRCxTQVBILEVBUUdrQixNQVJILENBUVUsVUFBQUcsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNyQixXQUFGLENBQWNzQixNQUFkLEdBQXVCLENBQTNCO0FBQUEsU0FSWCxFQVNHUCxJQVRILENBU1EsVUFBQ1EsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsaUJBQ0pDLDRDQUFBLENBQWFGLENBQUMsQ0FBQ3JDLEVBQWYsRUFBbUJzQyxDQUFDLENBQUN0QyxFQUFyQixDQURJO0FBQUEsU0FUUixDQURGO0FBWUEsZUFBTztBQUFDbUIsY0FBSSxFQUFKQSxJQUFEO0FBQU9QLGtCQUFRLEVBQVJBO0FBQVAsU0FBUDtBQUNELE9BaEJzQixDQUF6QjtBQWlCQSxhQUFPO0FBQUNwQix3QkFBZ0IsRUFBaEJBO0FBQUQsT0FBUDtBQUNEO0FBbENIOztBQUFBO0FBQUEsRUFDVWdELDRDQUFLLENBQUNDLGFBRGhCOzswRkFBYWxELGdCLGtCQU9XO0FBQ3BCSSxrQkFBZ0IsRUFBRSxJQURFO0FBRXBCO0FBQ0FFLGFBQVcsRUFBRTtBQUhPLEMiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Zpc19zdWJtaXNzaW9uX21hdHJpeC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NvbG9yTWFuYWdlcn0gZnJvbSBcIi4uL2xpYi92aXNfY29sb3JfbWFuYWdlclwiO1xuaW1wb3J0IHtFdmFsQ29uZmlndXJhdGlvbiwgU2NvcmVzfSBmcm9tIFwiLi4vbGliL3Jlc3VsdHNcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi92aXNfc3VibWlzc2lvbl9tYXRyaXgubW9kdWxlLmNzc1wiXG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcblxuXG5pbnRlcmZhY2UgU3ViTWF0UHJvcHMge1xuICBjb25maWc6IEV2YWxDb25maWd1cmF0aW9uLFxuICBzY29yZXM6IFNjb3Jlc1tdLFxuICBzdWJtaXNzaW9uRmlsdGVyOiBzdHJpbmdbXSB8IG51bGwsXG4gIG9uSG92ZXI6IChzOiBzdHJpbmdbXSwgaG92ZXJlZDogYm9vbGVhbikgPT4gdm9pZCxcbiAgaGlnaGxpZ2h0ZWQ6IHN0cmluZ1tdLFxuICAvLyBvbkRhdGFzZXRTZWxlY3Q6IChkYXRhc2V0czogc3RyaW5nW10pID0+IHZvaWQsXG4gIC8vIG9uRGF0YXNldEhvdmVyOiAoZGF0YXNldDogc3RyaW5nLCBob3ZlcjogYm9vbGVhbikgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgRFNIaWVyYXJjaHkge1xuICB0YXNrOiBzdHJpbmcsXG4gIGRhdGFzZXRzOiB7IGRzOiBzdHJpbmcsIHN1Ym1pc3Npb25zOiBzdHJpbmdbXSB9W11cbn1cblxuXG5pbnRlcmZhY2UgU3ViTWF0U3RhdGVzIHtcbiAgZGF0YXNldEhpZXJhcmNoeTogRFNIaWVyYXJjaHlbXVxufVxuXG5leHBvcnQgY2xhc3MgU3VibWlzc2lvbk1hdHJpeFxuICBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8U3ViTWF0UHJvcHMsIFN1Yk1hdFN0YXRlcz4ge1xuXG4gIHN0YXRlID0ge1xuICAgIGRhdGFzZXRIaWVyYXJjaHk6IFtdIGFzIERTSGllcmFyY2h5W11cbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3VibWlzc2lvbkZpbHRlcjogbnVsbCxcbiAgICAvLyBvbkhvdmVyOiAoc24sIGhvdikgPT4gY29uc29sZS5sb2coc24sIGhvdiwgXCItLS0gc24saG92XCIpLFxuICAgIGhpZ2hsaWdodGVkOiBbXVxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wczogU3ViTWF0UHJvcHMsIG9sZFN0YXRlcykge1xuXG4gICAgY29uc3QgZHNGdWxsTmFtZSA9IChkcykgPT4gYCR7ZHN9YFxuICAgIGNvbnN0IGRhdGFzZXRIaWVyYXJjaHkgPSBPYmplY3Qua2V5cyhwcm9wcy5jb25maWcuY2hhbGxlbmdlcylcbiAgICAgIC5zb3J0KClcbiAgICAgIC5tYXAodGFzayA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFzZXRzID1cbiAgICAgICAgICBwcm9wcy5jb25maWcuY2hhbGxlbmdlc1t0YXNrXS5kYXRhc2V0c1xuICAgICAgICAgICAgLm1hcChkc1BhcnQgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkcyA9IGRzRnVsbE5hbWUoZHNQYXJ0KVxuICAgICAgICAgICAgICBjb25zdCBzdWJtaXNzaW9ucyA9IHByb3BzLnNjb3Jlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoc2NvcmUgPT4gZHMgaW4gc2NvcmUpXG4gICAgICAgICAgICAgICAgLm1hcChzY29yZSA9PiBzY29yZS5zdWJtaXNzaW9uX25hbWUpXG4gICAgICAgICAgICAgIHJldHVybiB7ZHMsIHN1Ym1pc3Npb25zfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LnN1Ym1pc3Npb25zLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT5cbiAgICAgICAgICAgICAgZDMuYXNjZW5kaW5nKGEuZHMsIGIuZHMpKVxuICAgICAgICByZXR1cm4ge3Rhc2ssIGRhdGFzZXRzfVxuICAgICAgfSlcbiAgICByZXR1cm4ge2RhdGFzZXRIaWVyYXJjaHl9XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRhdGFzZXRIaWVyYXJjaHksIFwiLS0tIHRoaXMuc3RhdGUuZGF0YXNldEhpZXJhcmNoeVwiKTtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5wcm9wcy5zdWJtaXNzaW9uRmlsdGVyO1xuICAgIGNvbnN0IGhpZ2hsaWd0ZWQgPSB0aGlzLnByb3BzLmhpZ2hsaWdodGVkXG4gICAgY29uc3Qgc3VibWlzc2lvbkNsYXNzZXMgPSAocywgZHMpID0+IHtcbiAgICAgIHJldHVybiBbc3R5bGUuZHNCb3gsXG4gICAgICAgIGhpZ2hsaWd0ZWQuaW5kZXhPZihgJHtzfS4ke2RzfWApID4gLTEgPyBzdHlsZS5kc0JveEhvdmVyIDogJycsXG4gICAgICAgIGZpbHRlcnMgP1xuICAgICAgICAgIChmaWx0ZXJzLmluZGV4T2YoYCR7c30uJHtkc31gKSA+IC0xID9cbiAgICAgICAgICAgIHN0eWxlLnNlbGVjdGVkIDogc3R5bGUubm9uU2VsZWN0ZWQpXG4gICAgICAgICAgOiAnJ1xuICAgICAgXS5qb2luKFwiIFwiKVxuICAgIH1cblxuXG4gICAgY29uc3QgdGFza2xpc3QgPSB0aGlzLnN0YXRlLmRhdGFzZXRIaWVyYXJjaHkubWFwKHQgPT4ge1xuICAgICAgY29uc3QgZGF0YXNldHMgPSB0LmRhdGFzZXRzLm1hcChkZCA9PiB7XG4gICAgICAgIGNvbnN0IGRzID0gZGQuZHM7XG4gICAgICAgIGNvbnN0IHN1Ym1pc3Npb25zID0gZGQuc3VibWlzc2lvbnNcbiAgICAgICAgICAubWFwKHNuID0+IDxkaXZcbiAgICAgICAgICAgIGtleT17c259XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N1Ym1pc3Npb25DbGFzc2VzKHNuLCBkcyl9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMucHJvcHMub25Ib3ZlcihbYCR7c259LiR7ZHN9YF0sIHRydWUpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnByb3BzLm9uSG92ZXIoW2Ake3NufS4ke2RzfWBdLCBmYWxzZSl9XG4gICAgICAgICAgPntzbn08L2Rpdj4pXG4gICAgICAgIHJldHVybiA8ZGl2IGtleT17ZGQuZHN9IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCJ9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLm1ldGFCb3h9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMucHJvcHMub25Ib3ZlcihkZC5zdWJtaXNzaW9ucy5tYXAoc24gPT4gYCR7c259LiR7ZHN9YCksIHRydWUpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnByb3BzLm9uSG92ZXIoZGQuc3VibWlzc2lvbnMubWFwKHNuID0+IGAke3NufS4ke2RzfWApLCBmYWxzZSl9XG4gICAgICAgICAgPntkZC5kc308L2Rpdj5cbiAgICAgICAgICA8ZGl2PntzdWJtaXNzaW9uc308L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9KVxuICAgICAgcmV0dXJuIDxkaXYga2V5PXt0LnRhc2t9IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpbjogXCIycHQgMFwifX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tZXRhTWV0YUJveH0+e3QudGFza308L2Rpdj5cbiAgICAgICAgPGRpdj57ZGF0YXNldHN9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICB9KVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tYXRyaXh9Pnt0YXNrbGlzdH08L2Rpdj5cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/vis_submission_matrix.tsx\n");

/***/ })

})