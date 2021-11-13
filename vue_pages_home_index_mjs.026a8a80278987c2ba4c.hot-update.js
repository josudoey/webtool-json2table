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
  return _c("div", { staticClass: "d-inline-block small p-0 m-0" }, [
    _vm.isNull(_vm.value)
      ? _c("div", { staticClass: "p-0 m-0" })
      : Array.isArray(_vm.value)
      ? _c("table", { staticClass: "table table-bordered" }, [
          _c(
            "tbody",
            [
              _c(
                "tr",
                _vm._l(_vm.getColumnNames(_vm.value), function (name) {
                  return _c(
                    "th",
                    [_c("json-table", { attrs: { value: name } })],
                    1
                  )
                }),
                0
              ),
              _vm._l(_vm.value, function (item) {
                return _c(
                  "tr",
                  [
                    _vm.isNull(item)
                      ? _c("td", { staticClass: "p-0 m-0" })
                      : _c("td", { staticClass: "p-0 m-0" }),
                  ],
                  2
                )
              }),
            ],
            2
          ),
        ])
      : typeof _vm.value === "object"
      ? _c(
          "table",
          { staticClass: "table" },
          [
            Object.keys(_vm.value).length > 0
              ? [
                  _c(
                    "tbody",
                    _vm._l(_vm.value, function (v, key) {
                      return _c("tr", [
                        _c("th", { staticClass: "p-0 m-0" }, [
                          _vm._v(_vm._s(key)),
                        ]),
                        _c(
                          "td",
                          { staticClass: "p-0 m-0" },
                          [_c("json-table", { attrs: { value: v } })],
                          1
                        ),
                      ])
                    }),
                    0
                  ),
                ]
              : _vm._e(),
          ],
          2
        )
      : _c("div", { staticClass: "p-0 m-0" }, [_vm._v(_vm._s(_vm.value))]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.026a8a80278987c2ba4c.hot-update.js.map