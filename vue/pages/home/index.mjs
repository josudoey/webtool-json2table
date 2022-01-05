import JSON5 from 'json5'
import { render, staticRenderFns } from './render.pug'
import { pick } from 'lodash'
import JsonTable from './json-table/index.mjs'
const persistKey = 'state'
const persistProps = ['text']
export default {
  render,
  staticRenderFns,
  components: {
    JsonTable
  },
  data () {
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
    translate () {
      try {
        const t = this.getMongoJSONText(this.text)
        this.value = JSON5.parse(t)
        this.save()
      } catch (err) {
        this.value = ''
        this.$bvToast.toast(err.message, {
          title: 'Parse Error',
          autoHideDelay: 1000,
          appendToast: true
        })
      }
    }
  }
}
