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

const ScalarType = Symbol('ScalarType')
const ObjectType = Symbol('ObjectType')
const ArrayType = Symbol('ArrayType')
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: _render_pug__WEBPACK_IMPORTED_MODULE_0__.render,
  staticRenderFns: _render_pug__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  name: 'json-table',
  props: ['value'],
  data: () => {
    return {
      ObjectType,
      ArrayType,
      ScalarType
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
    isArrayItem (index, item) {
      if (typeof item !== 'object') {
        return false
      }
      return this.value[index] === item
    },
    getColumns (items) {
      const columns = new Set()
      const names = new Set()
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        if (Array.isArray(item)) {
          columns.add([i, ArrayType])
          continue
        } else if (this.isNull(item)) {
          columns.add(null)
          continue
        } else if (typeof item === 'object') {
          for (const name of Object.keys(item)) {
            if (names.has(name)) {
              continue
            }
            names.add(name)
            columns.add(Symbol(name))
          }
          continue
        }
        columns.add(ScalarType)
      }
      return Array.from(columns)
    }
  }
});


/***/ })

});
//# sourceMappingURL=vue_pages_home_index_mjs.ff344aae9633523433e7.hot-update.js.map