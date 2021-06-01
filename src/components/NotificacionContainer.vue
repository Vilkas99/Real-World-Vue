<template>
  <div class="notification-container">
    <NotificacionBar
      v-for="notificacion in notificaciones"
      :key="notificacion.id"
      :notificacion="notificacion"
    />
  </div>
</template>

<script>
import NotificacionBar from '@/components/NotificacionBar.vue'
import { mapState } from 'vuex'

export default {
  components: {
    NotificacionBar,
  },
  computed: mapState('notificacion', ['notificaciones']),
}
</script>

<style lang="scss" scoped>
.notification-container {
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 40px;
}
</style>
