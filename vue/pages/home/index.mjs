import JSON5 from 'json5'
import { render, staticRenderFns } from './render.pug'
import { pick } from 'lodash'
import { show as toastShow } from './toast/index.mjs'
import JsonTable from './json-table/index.mjs'
import JsonPath from './json-path/index.mjs'
const persistKey = 'state'
const persistProps = ['text', 'jsonpath', 'outJSON']

export default {
  render,
  staticRenderFns,
  components: {
    JsonTable,
    JsonPath
  },
  data () {
    return {
      jsonpath: '',
      outJSON: false,
      text: '{"store":{"book":[{"category":"reference","author":"Nigel Rees","title":"Sayings of the Century","price":8.95},{"category":"fiction","author":"Evelyn Waugh","title":"Sword of Honour","price":12.99},{"category":"fiction","author":"Herman Melville","title":"Moby Dick","isbn":"0-553-21311-3","price":8.99},{"category":"fiction","author":"J. R. R. Tolkien","title":"The Lord of the Rings","isbn":"0-395-19395-8","price":22.99}],"bicycle":{"color":"red","price":19.95}}}',
      value: ''
    }
  },
  mounted () {
    window.show = toastShow.bind(this, this)
    this.load()
    this.translate()
  },
  updated () {
    this.save()
  },
  methods: {
    save: function () {
      const persisValue = JSON.stringify(pick(this.$data, persistProps))
      window.sessionStorage.setItem(persistKey, persisValue)
    },
    load () {
      const state = window.sessionStorage.getItem(persistKey)
      if (!state) {
        return
      }
      const persistState = pick(JSON.parse(state), persistProps)
      Object.assign(this.$data, persistState)
    },
    getMongoJSONText (text) {
      return text
        .replaceAll(/NumberLong\((\d+)\)/g, '$1')
        .replaceAll(/ObjectId\(("[0-9a-f]{24}")\)/g, '$1')
        .replaceAll(/ISODate\(("\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z")\)/g, '$1')
    },
    onError (err) {
      toastShow(this, {
        text: err.message,
        timeout: 2000
      })
    },
    translate () {
      try {
        const t = this.getMongoJSONText(this.text)
        this.value = JSON5.parse(t)
        this.save()
      } catch (err) {
        this.value = ''
        this.onError(err)
      }
    }
  }
}
