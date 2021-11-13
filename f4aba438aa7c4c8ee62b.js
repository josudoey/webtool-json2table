"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vue_pages_home_index_mjs"],{

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
            _c("b-card-body", [
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
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.result,
                    expression: "result",
                  },
                ],
                staticClass: "w-50",
                staticStyle: { "min-height": "calc(60vh)" },
                domProps: { value: _vm.result },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.result = $event.target.value
                  },
                },
              }),
            ]),
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
/* harmony import */ var _render_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.pug */ "../vue/pages/home/render.pug");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash/pick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


const persistKey = 'state'
const persistProps = ['sample', 'value']
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: _render_pug__WEBPACK_IMPORTED_MODULE_0__.render,
  staticRenderFns: _render_pug__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  data: () => {
    return {
      sample: '{hello: \'world\'}',
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
      const persisValue = JSON.stringify(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash/pick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.$data, persistProps))
      window.sessionStorage.setItem(persistKey, persisValue)
    },
    load () {
      const state = window.sessionStorage.getItem(persistKey)
      if (!state) {
        return
      }
      const persistState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash/pick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(JSON.parse(state), persistProps)
      Object.assign(this.$data, persistState)
    },
    translate () {
      console.log(this.value)
    }
  }
});


/***/ })

}]);
//# sourceMappingURL=f4aba438aa7c4c8ee62b.js.map