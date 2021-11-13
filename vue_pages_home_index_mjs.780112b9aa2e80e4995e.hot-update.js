"use strict";
self["webpackHotUpdate"]("vue_pages_home_index_mjs",{

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var _json_table_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json-table/index.mjs */ "../vue/pages/home/json-table/index.mjs");



const persistKey = 'state'
const persistProps = ['sample', 'value']
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: _render_pug__WEBPACK_IMPORTED_MODULE_0__.render,
  staticRenderFns: _render_pug__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  components: {
    JSONTable: _json_table_index_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
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
      const persisValue = JSON.stringify((0,lodash__WEBPACK_IMPORTED_MODULE_1__.pick)(this.$data, persistProps))
      window.sessionStorage.setItem(persistKey, persisValue)
    },
    load () {
      const state = window.sessionStorage.getItem(persistKey)
      if (!state) {
        return
      }
      const persistState = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pick)(JSON.parse(state), persistProps)
      Object.assign(this.$data, persistState)
    },
    translate () {
      console.log(this.value)
    }
  }
});


/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.780112b9aa2e80e4995e.hot-update.js.map