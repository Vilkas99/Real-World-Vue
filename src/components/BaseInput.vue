<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      type="text"
      :value="value"
      @input="actualizarValor"
      v-on="listeners"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import { formfieldMixin } from '../mixins/formfieldMixin'

export default {
  mixins: [formfieldMixin],
  props: {
    label: {
      type: String,
      default: '',
    },
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
