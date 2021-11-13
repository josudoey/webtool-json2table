"use strict";
self["webpackHotUpdate"]("vue_pages_home_index_mjs",{

/***/ "../vue/pages/home/render.pug":
/*!************************************!*\
  !*** ../vue/pages/home/render.pug ***!
  \************************************/
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
  return _c("div", { staticClass: "container-fluid px-0" }, [
    _vm._m(0),
    _c(
      "div",
      { staticClass: "container-fluid px-0" },
      [
        _c(
          "b-card",
          { attrs: { "no-body": "" } },
          [
            _c(
              "b-card-body",
              [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sample,
                      expression: "sample",
                    },
                  ],
                  staticClass: "w-50",
                  staticStyle: { "min-height": "calc(60vh)" },
                  domProps: { value: _vm.sample },
                  on: {
                    input: [
                      function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.sample = $event.target.value
                      },
                      _vm.translate,
                    ],
                  },
                }),
                _c("json-table", {
                  model: {
                    value: _vm.value,
                    callback: function ($$v) {
                      _vm.value = $$v
                    },
                    expression: "value",
                  },
                }),
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "navbar navbar-dark bg-dark" }, [
      _c("div", { staticClass: "navbar-brand d-flex" }, [
        _c("div", [_vm._v("String Case Helper")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.6ea2e3a104371a0264e3.hot-update.js.map