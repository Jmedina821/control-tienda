"use strict";
(() => {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "./pages/api/hello.ts":
/*!****************************!*\
  !*** ./pages/api/hello.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();

async function createUser() {
  return await prisma.user.create({
    data: {
      email: "medinajesus821@gmail.com",
      password: "1234567",
      name: "jmedina"
    }
  });
}

async function handler(req, res) {
  const user = await createUser();
  res.status(200).json(user);
}

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/hello.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2hlbGxvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7O0FBUUEsZUFBZUUsVUFBZixHQUE0QjtBQUMxQixTQUFPLE1BQU1ELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFaLENBQW1CO0FBQzlCQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFLDBCQURIO0FBRUpDLE1BQUFBLFFBQVEsRUFBRSxTQUZOO0FBR0pDLE1BQUFBLElBQUksRUFBRTtBQUhGO0FBRHdCLEdBQW5CLENBQWI7QUFPRDs7QUFFYyxlQUFlQyxPQUFmLENBQ2JDLEdBRGEsRUFFYkMsR0FGYSxFQUdiO0FBQ0EsUUFBTVIsSUFBSSxHQUFHLE1BQU1ELFVBQVUsRUFBN0I7QUFDQVMsRUFBQUEsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJWLElBQXJCO0FBQ0Q7Ozs7Ozs7Ozs7QUMzQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250cm9sLXRpZW5kYS8uL3BhZ2VzL2FwaS9oZWxsby50cyIsIndlYnBhY2s6Ly9jb250cm9sLXRpZW5kYS9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG50eXBlIERhdGEgPSB7XG4gIGVtYWlsOiBzdHJpbmcsXG4gIHBhc3N3b3JkOiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZ3xudWxsXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoKSB7XG4gIHJldHVybiBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIGVtYWlsOiBcIm1lZGluYWplc3VzODIxQGdtYWlsLmNvbVwiLFxuICAgICAgcGFzc3dvcmQ6IFwiMTIzNDU2N1wiLFxuICAgICAgbmFtZTogXCJqbWVkaW5hXCJcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxuKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBjcmVhdGVVc2VyKCk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiY3JlYXRlVXNlciIsInVzZXIiLCJjcmVhdGUiLCJkYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsIm5hbWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=