import Vue from 'vue'
import Vuex from 'vuex'
import EventoServicio from '@/services/EventoServicio.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: { id: '21da', nombre: 'Juan' },
    categorias: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
    eventos: [],
    evento: {},
    total: 0,
  },
  mutations: {
    ADD_EVENTO(state, evento) {
      state.eventos.push(evento)
    },
    SET_EVENTOS(state, eventos) {
      state.eventos = eventos
    },

    SET_TOTAL(state, numero) {
      state.total = numero
    },

    SET_EVENTO(state, evento) {
      state.evento = evento
    },
  },
  actions: {
    crearEvento({ commit }, evento) {
      return EventoServicio.postEvento(evento).then(() => {
        commit('ADD_EVENTO', evento)
      })
    },
    fetchEventos({ commit }, { pePage, page }) {
      EventoServicio.getEvents(pePage, page)
        .then((response) => {
          commit('SET_TOTAL', response.headers['x-total-count'])
          commit('SET_EVENTOS', response.data)
        })
        .catch((error) => {
          console.log('Hubo un error' + error.response)
        })
    },

    fetchEvento({ commit, getters }, id) {
      let evento = getters.getEventoId(id)

      if (evento) {
        commit('SET_EVENTO', evento)
      } else {
        EventoServicio.getEvento(id)
          .then((response) => {
            console.log(response.data)
            commit('SET_EVENTO', response.data)
          })
          .catch((error) => {
            console.log(error.response)
          })
      }
    },
  },
  modules: {},
  getters: {
    longitudCategorias: (state) => {
      return state.categorias.length
    },
    getEventoId: (state) => (id) => {
      return state.eventos.find((evento) => evento.id === id)
    },
  },
})
