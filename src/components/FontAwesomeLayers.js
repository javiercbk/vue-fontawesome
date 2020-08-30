import { defineComponent, h } from 'vue'
import { config } from '@fortawesome/fontawesome-svg-core'
import { addStaticClass } from '../utils'

export default defineComponent({
  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },

  setup (props, context) {
    const { familyPrefix } = config
    let { data: { staticClass } } = context

    const classes = [
      `${familyPrefix}-layers`,
      ...(props.fixedWidth ? [`${familyPrefix}-fw`] : [])
    ]

    return () =>  h(
      'div',
      {
        ...context.data,
        staticClass: addStaticClass(staticClass, classes)
      },
      context.children
    )
  }
})
