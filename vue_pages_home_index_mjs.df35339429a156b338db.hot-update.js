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
    getMongoJSON (text) {
      return text
        .replace(/ObjectId\(("[0-9a-f]{24}")\)/g, '$1')
        .replace(/ISODate\(("\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z")\)/g, '$1')
    },
    translate () {
      try {
        const t = this.getMongoJSON(this.text)
        console.log(t)
        this.value = json5__WEBPACK_IMPORTED_MODULE_0__.parse(t)
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


/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.df35339429a156b338db.hot-update.js.map