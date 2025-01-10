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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src\\pages\\api\\login.js */ \"(api)/./src/pages/api/login.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/login\",\n        pathname: \"/api/login\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _src_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmxvZ2luJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGc3JjJTVDcGFnZXMlNUNhcGklNUNsb2dpbi5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUN3RDtBQUN4RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsb0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLG9EQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vc3JjXFxcXHBhZ2VzXFxcXGFwaVxcXFxsb2dpbi5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCAnZGVmYXVsdCcpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbG9naW5cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9sb2dpblwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/login.js":
/*!********************************!*\
  !*** ./src/pages/api/login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst users = [\n    {\n        id: 1,\n        email: \"muskan@gmail.com\",\n        password: \"muskan\",\n        name: \"User One\"\n    },\n    {\n        id: 2,\n        email: \"prachi@gmail.com\",\n        password: \"prachi\",\n        name: \"User Two\"\n    }\n];\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email, password } = req.body;\n        const user = users.find((u)=>u.email === email && u.password === password);\n        if (!user) {\n            return res.status(401).json({\n                status: 0,\n                message: \"Invalid email or password\"\n            });\n        }\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n            id: user.id,\n            email: user.email\n        }, process.env.NEXT_LOCALE_JWT_SECRET, {\n            expiresIn: \"1h\"\n        });\n        return res.status(200).json({\n            status: 1,\n            token\n        });\n    }\n    res.status(405).json({\n        status: 0,\n        message: \"Method not allowed\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxRQUFRO0lBQ1o7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0NBQ0Q7QUFFYyxTQUFTQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDdEMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFTixLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHRyxJQUFJRyxJQUFJO1FBQ3BDLE1BQU1DLE9BQU9WLE1BQU1XLElBQUksQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRVYsS0FBSyxLQUFLQSxTQUFTVSxFQUFFVCxRQUFRLEtBQUtBO1FBRWpFLElBQUksQ0FBQ08sTUFBTTtZQUNULE9BQU9ILElBQ0pNLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7Z0JBQUVELFFBQVE7Z0JBQUdFLFNBQVM7WUFBNEI7UUFDNUQ7UUFFQSxNQUFNQyxRQUFRakIsd0RBQVEsQ0FDcEI7WUFBRUUsSUFBSVMsS0FBS1QsRUFBRTtZQUFFQyxPQUFPUSxLQUFLUixLQUFLO1FBQUMsR0FDakNnQixRQUFRQyxHQUFHLENBQUNDLHNCQUFzQixFQUNsQztZQUFFQyxXQUFXO1FBQUs7UUFFcEIsT0FBT2QsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRCxRQUFRO1lBQUdHO1FBQU07SUFDakQ7SUFFQVQsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFRCxRQUFRO1FBQUdFLFNBQVM7SUFBcUI7QUFDbEUiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbXVza2FuIG1haGVuZHJhXFxOZXh0dGFzayAtIEZDXFxzcmNcXHBhZ2VzXFxhcGlcXGxvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5jb25zdCB1c2VycyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGVtYWlsOiBcIm11c2thbkBnbWFpbC5jb21cIixcbiAgICBwYXNzd29yZDogXCJtdXNrYW5cIixcbiAgICBuYW1lOiBcIlVzZXIgT25lXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBlbWFpbDogXCJwcmFjaGlAZ21haWwuY29tXCIsXG4gICAgcGFzc3dvcmQ6IFwicHJhY2hpXCIsXG4gICAgbmFtZTogXCJVc2VyIFR3b1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQodSA9PiB1LmVtYWlsID09PSBlbWFpbCAmJiB1LnBhc3N3b3JkID09PSBwYXNzd29yZCk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg0MDEpXG4gICAgICAgIC5qc29uKHsgc3RhdHVzOiAwLCBtZXNzYWdlOiBcIkludmFsaWQgZW1haWwgb3IgcGFzc3dvcmRcIiB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxuICAgICAgeyBpZDogdXNlci5pZCwgZW1haWw6IHVzZXIuZW1haWwgfSxcbiAgICAgIHByb2Nlc3MuZW52Lk5FWFRfTE9DQUxFX0pXVF9TRUNSRVQsXG4gICAgICB7IGV4cGlyZXNJbjogXCIxaFwiIH1cbiAgICApO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogMSwgdG9rZW4gfSk7XG4gIH1cblxuICByZXMuc3RhdHVzKDQwNSkuanNvbih7IHN0YXR1czogMCwgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcbn0iXSwibmFtZXMiOlsiand0IiwidXNlcnMiLCJpZCIsImVtYWlsIiwicGFzc3dvcmQiLCJuYW1lIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJ1c2VyIiwiZmluZCIsInUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInRva2VuIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX0xPQ0FMRV9KV1RfU0VDUkVUIiwiZXhwaXJlc0luIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();