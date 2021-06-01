export const formfieldMixin = {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: [String, Number],
  },
  methods: {
    actualizarValor(event) {
      this.$emit('input', event.target.value)
    },
  },
}
