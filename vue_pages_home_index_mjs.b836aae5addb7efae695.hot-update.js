"use strict";
self["webpackHotUpdate"]("vue_pages_home_index_mjs",{

/***/ "../vue/pages/home/json-table/render.pug":
/*!***********************************************!*\
  !*** ../vue/pages/home/json-table/render.pug ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "d-inline-block" }, [
    typeof _vm.value === "object" && Object.keys(_vm.value)
      ? _c("table", { staticClass: "table" }, [
          Object.keys(_vm.value).length > 0
            ? _c("thead", [
                _c(
                  "tr",
                  _vm._l(Object.keys(_vm.value), function (key) {
                    return _c("th", [_vm._v(_vm._s(key))])
                  }),
                  0
                ),
              ])
            : _vm._e(),
        ])
      : _c("span", [_vm._v(_vm._s(_vm.value))]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.b836aae5addb7efae695.hot-update.js.map