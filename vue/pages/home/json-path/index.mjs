import * as render from './render.pug'
import jp from 'jsonpath'

export default {
  ...render,
  props: ['value', 'path', 'count'],
  data () {
    return {
      result: null,
      err: null
    }
  },
  watch: {
    value () {
      this.query()
    }
  },
  mounted () {
    this.query()
  },
  methods: {
    query () {
      this.err = null
      const { value, path, count } = this
      try {
        this.result = jp.query(value, path, count)
      } catch (err) {
        this.err = err
        this.$emit('error', err)
      }
    }
  }
}
