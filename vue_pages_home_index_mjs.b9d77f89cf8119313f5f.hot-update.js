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
  return _c("div", { staticClass: "d-inline-block small p-0 m-0 w-100" }, [
    _vm.isNull(_vm.value)
      ? _c("div", { staticClass: "p-0 pb-1 m-0" })
      : _vm.isScalarType(_vm.value)
      ? _c("div", { staticClass: "p-0 pb-1 m-0" }, [_vm._v(_vm._s(_vm.value))])
      : Array.isArray(_vm.value)
      ? _c("table", { staticClass: "table table-bordered m-0" }, [
          _c(
            "tbody",
            [
              _c(
                "tr",
                _vm._l(_vm.getColumnNames(_vm.value), function (name) {
                  return _c(
                    "th",
                    { staticClass: "p-0 m-0" },
                    [_c("json-table", { attrs: { value: name } })],
                    1
                  )
                }),
                0
              ),
              _vm._l(_vm.value, function (item) {
                return _c(
                  "tr",
                  _vm._l(_vm.getColumnNames(_vm.value), function (key) {
                    return _c(
                      "td",
                      { staticClass: "p-0 m-0" },
                      [
                        _vm.isNull(item)
                          ? void 0
                          : _vm.getColumnName(key) !== null
                          ? [_c("json-table", { attrs: { value: item[key] } })]
                          : [_c("json-table", { attrs: { value: item } })],
                      ],
                      2
                    )
                  }),
                  0
                )
              }),
            ],
            2
          ),
        ])
      : typeof _vm.value === "object"
      ? _c(
          "table",
          { staticClass: "table table table-bordered m-0" },
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
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../vue/pages/home/json-table/index.mjs":
/*!**********************************************!*\
  !*** ../vue/pages/home/json-table/index.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.pug */ "../vue/pages/home/json-table/render.pug");

const ScalarType = Symbol('ArrayType')
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: _render_pug__WEBPACK_IMPORTED_MODULE_0__.render,
  staticRenderFns: _render_pug__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  name: 'json-table',
  props: ['value'],
  data: () => {
    return {
      ScalarType: ScalarType
    }
  },
  mounted () {
  },
  methods: {
    typeof (v) {
      return typeof v
    },
    isNull (item) {
      return typeof item === 'undefined' || item === null
    },
    isScalarType (item) {
      const typ = typeof item
      return typ === 'string' || typ === 'number' || typ === 'boolean'
    },
    getColumnName (sym) {
      if (typeof sym !== 'symbol') {
        return null
      }
      return sym.description
    },
    getColumnNames (items) {
      const names = new Set()
      const columnName = new Set()
      for (const item of items) {
        if (Array.isArray(item)) {
          names.add(item)
          continue
        } else if (this.isNull(item)) {
          names.add(null)
          continue
        } else if (typeof item === 'object') {
          for (const name of Object.keys(item)) {
            if (columnName.has(name)) {
              continue
            }
            names.add(Symbol(name))
          }
          continue
        }
        names.add(ScalarType)
      }
      return Array.from(names)
    }
  }
});


/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.b9d77f89cf8119313f5f.hot-update.js.map