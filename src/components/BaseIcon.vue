.
<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="ancho" :height="alto">
      <use v-bind="{ 'xlink:href': '/feather-sprite.svg#' + nombre }" />
    </svg>
    <slot></slot>
  </div>
</template>

<script>
import feather from 'feather-icons'
export default {
  props: {
    nombre: String,
    ancho: {
      tipo: [Number, String],
      default: 24,
    },
    alto: {
      tipo: [Number, String],
      default: 24,
    },
  },
  computed: {
    svg() {
      return feather.icons[this.nombre].toSvg({
        class: 'icon',
        width: this.ancho,
        height: this.height,
      })
    },
  },
}
</script>

<style scopped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
  margin-right: 12px;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
