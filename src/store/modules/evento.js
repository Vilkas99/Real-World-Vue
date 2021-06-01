import EventoServicio from '@/services/EventoServicio.js'

export const namespaced = true

export const state = {
  eventos: [],
  evento: {},
  total: 0,
  perPage: 3,
}

export const mutations = {
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
}

export const actions = {
  crearEvento({ commit, dispatch }, evento) {
    return EventoServicio.postEvento(evento)
      .then(() => {
        commit('ADD_EVENTO', evento)
        const notificacion = {
          tipo: 'error',
          mensaje: 'Se creó correctamente el evento',
        }

        dispatch('notificacion/add', notificacion, { root: true })
      })
      .catch((error) => {
        const notificacion = {
          tipo: 'error',
          mensaje: 'Hubo un problema creando el evento' + error.message,
        }

        dispatch('notificacion/add', notificacion, { root: true })
        throw error
      })
  },
  fetchEventos({ commit, dispatch, state }, { page }) {
    return EventoServicio.getEvents(state.perPage, page)
      .then((response) => {
        commit('SET_TOTAL', response.headers['x-total-count'])
        commit('SET_EVENTOS', response.data)
      })
      .catch((error) => {
        const notificacion = {
          tipo: 'error',
          mensaje:
            'Mi preciosa hermosa divina Shalom no está conmigo :c  ' +
            error.message,
        }

        dispatch('notificacion/add', notificacion, { root: true })
      })
  },

  fetchEvento({ commit, getters }, id) {
    let evento = getters.getEventoId(id)

    if (evento) {
      commit('SET_EVENTO', evento)
      return evento
    } else {
      return EventoServicio.getEvento(id).then((response) => {
        console.log(response.data)
        commit('SET_EVENTO', response.data)
        return response.data
      })
    }
  },
}

export const getters = {
  longitudCategorias: (state) => {
    return state.categorias.length
  },
  getEventoId: (state) => (id) => {
    return state.eventos.find((evento) => evento.id === id)
  },
}
