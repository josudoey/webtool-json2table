import { render, staticRenderFns } from './render.pug'
const ScalarType = Symbol('ScalarType')
const ObjectType = Symbol('ObjectType')
export default {
  render,
  staticRenderFns,
  name: 'json-table',
  props: ['value'],
  data () {
    return {
      ObjectType,
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
    getColumns (items) {
      const columns = new Set()
      const names = new Set()
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        if (Array.isArray(item)) {
          columns.add([i])
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
}
