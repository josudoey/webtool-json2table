"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vue_pages_home_index_mjs"],{

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
    Array.isArray(_vm.value)
      ? _c("table", { staticClass: "table table-bordered" }, [
          _c(
            "tbody",
            _vm._l(_vm.value, function (item) {
              return _c("tr", [
                _c(
                  "td",
                  { staticClass: "p-0 m-0" },
                  [_c("json-table", { attrs: { value: item } })],
                  1
                ),
              ])
            }),
            0
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



/***/ }),

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
      { staticClass: "container-fluid px-0 d-flex flex-wrap" },
      [
        _c(
          "b-card",
          { staticClass: "w-50", attrs: { "no-body": "" } },
          [
            _c("b-card-body", [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.text,
                    expression: "text",
                  },
                ],
                staticClass: "w-100",
                staticStyle: { "min-height": "calc(60vh)" },
                domProps: { value: _vm.text },
                on: {
                  input: [
                    function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.text = $event.target.value
                    },
                    _vm.translate,
                  ],
                },
              }),
            ]),
          ],
          1
        ),
        _c(
          "b-card",
          {
            staticClass: "w-50",
            staticStyle: { "min-height": "calc(60vh)" },
            attrs: { "no-body": "" },
          },
          [
            _c(
              "b-card-body",
              [
                _c("json-table", {
                  staticClass: "w-50",
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
        _c("div", [_vm._v("JSON to table")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "../vue/pages/home/index.mjs":
/*!***********************************!*\
  !*** ../vue/pages/home/index.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var json5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json5 */ "../node_modules/json5/dist/index.js");
/* harmony import */ var _render_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.pug */ "../vue/pages/home/render.pug");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var _json_table_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json-table/index.mjs */ "../vue/pages/home/json-table/index.mjs");




const persistKey = 'state'
const persistProps = ['text']
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: _render_pug__WEBPACK_IMPORTED_MODULE_1__.render,
  staticRenderFns: _render_pug__WEBPACK_IMPORTED_MODULE_1__.staticRenderFns,
  components: {
    JsonTable: _json_table_index_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: () => {
    return {
      text: '{hello: \'world\'}',
      value: ''
    }
  },
  mounted () {
    this.load()
    this.translate()
  },
  updated () {
    this.save()
  },
  methods: {
    save: function () {
      const persisValue = JSON.stringify((0,lodash__WEBPACK_IMPORTED_MODULE_2__.pick)(this.$data, persistProps))
      window.sessionStorage.setItem(persistKey, persisValue)
    },
    load () {
      const state = window.sessionStorage.getItem(persistKey)
      if (!state) {
        return
      }
      const persistState = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pick)(JSON.parse(state), persistProps)
      Object.assign(this.$data, persistState)
    },
    translate () {
      try {
        this.value = json5__WEBPACK_IMPORTED_MODULE_0__.parse(this.text)
        this.save()
      } catch (err) {
        this.$bvToast.toast(err.message, {
          title: 'Parse Error',
          autoHideDelay: 1000,
          appendToast: true
        })
      }
    }
  }
});


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: _render_pug__WEBPACK_IMPORTED_MODULE_0__.render,
  staticRenderFns: _render_pug__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  name: 'json-table',
  props: ['value'],
  data: () => {
    return {
    }
  },
  mounted () {
  },
  methods: {
    typeof (v) {
      return typeof v
    },
    getColumn (items) {
      const columns = new Set()
      for (const item of items) {
        if (Array.isArray(item)) {
          columns.add('')
          continue
        } else if (typeof item === 'object') {
          continue
        }
        columns.add('')
      }
      return Array.from(columns)
    }
  }
});


/***/ })

}]);
//# sourceMappingURL=b21c4613fa1ff39b11ff.js.map