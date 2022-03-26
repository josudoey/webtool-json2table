
import * as render from './render.pug'

const componentConfig = {
  ...render,
  data () {
    return {
      opened: true,
      text: '',
      timeout: 1000
    }
  },
  computed: {

  },
  created () {
  },
  mounted () {

  },
  destroyed () {
    this.$el.remove()
  },
  methods: {
    onChanged (opened) {
      if (opened) {
        return
      }
      const self = this
      setTimeout(function () {
        self.$destroy()
      }, 2000)
    }
  }
}

export function show ($parent, options) {
  // ref see https://github.com/bootstrap-vue/bootstrap-vue/blob/1d59417df6869e2b04c651f6caeed9474cf14a84/src/components/toast/helpers/bv-toast.js#L112-L140
  const Vue = $parent.$root.constructor
  const Toast = Vue.extend(componentConfig)
  const vm = new Toast({
    parent: $parent
  })
  Object.assign(vm, options)

  const div = document.createElement('div')
  document.body.appendChild(div)
  vm.$mount(div)
  return vm
}
export default componentConfig
