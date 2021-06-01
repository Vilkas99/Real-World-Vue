<template>
  <div class="notification-bar">
    <p>{{ notificacion.mensaje }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    notificacion: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      timeout: null,
    }
  },

  mounted() {
    console.log('Montado')
    this.timeout = setTimeout(() => this.remove(this.notificacion), 5000)
  },

  beforeDestroy() {
    clearTimeout(this.timeout)
  },

  computed: {
    notificacionTipo() {
      return `-text-${this.notificacion.tipo}`
    },
  },

  methods: mapActions('notificacion', ['remove']),
}
</script>

<style lang="scss" scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
