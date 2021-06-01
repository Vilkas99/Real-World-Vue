.
<template>
  <div>
    <h1>Eventos para {{ usuario.usuario.nombre }}</h1>
    <EventoCard
      v-for="eventoBaseDatos in evento.eventos"
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

    <template v-if="totalElementos < evento.total">
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
import store from '@/store/index'

const obtenerEventos = (to, next) => {
  const paginaActual = parseInt(to.query.page || 1)
  store
    .dispatch('evento/fetchEventos', {
      page: paginaActual,
    })
    .then(() => {
      to.params.page = paginaActual
      next()
    })
}

export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },

  components: {
    EventoCard,
  },

  beforeRouteEnter(to, from, next) {
    obtenerEventos(to, next)
  },

  beforeRouteUpdate(to, from, next) {
    obtenerEventos(to, next)
  },

  data() {
    return {
      palabra: '12',
    }
  },

  computed: {
    totalElementos() {
      return this.page * 3
    },
    ...mapState(['evento', 'usuario']),
  },
}
</script>

<style></style>
