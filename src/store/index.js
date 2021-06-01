import Vue from 'vue'
import Vuex from 'vuex'

import * as usuario from '@/store/modules/usuario.js'
import * as evento from '@/store/modules/evento.js'
import * as notificacion from '@/store/modules/notificacion.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    usuario,
    evento,
    notificacion,
  },
  state: {
    categorias: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
  },
})
