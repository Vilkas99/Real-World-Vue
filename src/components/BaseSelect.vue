<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select
      @change="actualizarValor"
      :value="value"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <option
        v-for="elemento in opciones"
        :key="elemento"
        :value="elemento"
        :selected="elemento == value"
      >
        {{ elemento }}
      </option>
    </select>
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
    opciones: {
      type: Array,
      requred: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
