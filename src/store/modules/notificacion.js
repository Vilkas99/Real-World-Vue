export const namespaced = true

export const state = {
  notificaciones: [],
}

let nextId = 1

export const mutations = {
  PUSH(state, notificacion) {
    state.notificaciones.push({
      ...notificacion,
      id: nextId++,
    })
  },

  DELETE(state, notificacionRemover) {
    console.log('Eliminando notificación')
    state.notificaciones = state.notificaciones.filter(
      (notificacion) => notificacion.id != notificacionRemover.id
    )
  },
}

export const actions = {
  add({ commit }, notificacion) {
    commit('PUSH', notificacion)
  },

  remove({ commit }, notificacionRemover) {
    commit('DELETE', notificacionRemover)
  },
}
