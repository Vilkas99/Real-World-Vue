import Vue from 'vue'
import VueRouter from 'vue-router'
import CrearEvento from '../views/CrearEvento.vue'
import ListaEvento from '../views/ListaEvento.vue'
import MostrarEvento from '../views/MostrarEvento.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '@/components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'lista-evento',
    component: ListaEvento,
  },
  {
    path: '/evento/:id',
    name: 'mostrar-evento',
    component: MostrarEvento,
    props: true,
  },
  {
    path: '/evento/crear',
    name: 'crear-evento',
    component: CrearEvento,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
