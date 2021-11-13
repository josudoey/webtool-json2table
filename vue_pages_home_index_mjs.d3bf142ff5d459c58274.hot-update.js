"use strict";
self["webpackHotUpdate"]("vue_pages_home_index_mjs",{

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
    getColumnNames (items) {
      const names = new Set()
      for (const item of items) {
        if (Array.isArray(item)) {
          names.add('')
          continue
        } else if (typeof item === 'object') {
          continue
        }
        names.add('')
      }
      return Array.from(names)
    }
  }
});


/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.d3bf142ff5d459c58274.hot-update.js.map