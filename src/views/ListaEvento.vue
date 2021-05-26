.
<template>
  <div>
    <h1>Lista de eventos</h1>
    <EventoCard
      v-for="eventoBaseDatos in eventos"
      :key="eventoBaseDatos.id"
      :evento="eventoBaseDatos"
    />
    <BaseIcon />
  </div>
</template>

<script>
import EventoCard from '@/components/EventoCard.vue'
import EventoServicio from '@/services/EventoServicio.js'

export default {
  components: {
    EventoCard,
  },

  data() {
    return {
      eventos: [],
    }
  },

  created() {
    EventoServicio.getEvents()
      .then((response) => {
        this.eventos = response.data
      })
      .catch((error) => {
        console.log('Hubo un error' + error.response)
      })
  },
}
</script>

<style></style>
