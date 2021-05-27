.
<template>
  <div>
    <h1>Lista de eventos</h1>
    <EventoCard
      v-for="eventoBaseDatos in eventos"
      :key="eventoBaseDatos.id"
      :evento="eventoBaseDatos"
    />

    <template v-if="page != 1">
      <router-link
        :to="{ name: 'lista-evento', query: { page: page - 1 } }"
        rel="prev"
      >
        Página anterior
      </router-link>
    </template>
    |

    <template v-if="totalElementos < total">
      <router-link
        :to="{ name: 'lista-evento', query: { page: page + 1 } }"
        rel="next"
      >
        Página siguiente
      </router-link>
    </template>
  </div>
</template>

<script>
import EventoCard from '@/components/EventoCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventoCard,
  },

  created() {
    this.$store.dispatch('fetchEventos', {
      pePage: 3,
      page: this.page,
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page || 1)
    },

    totalElementos() {
      return this.page * 3
    },
    ...mapState(['eventos', 'total']),
  },
}
</script>

<style></style>
