import Vue from 'vue'
import VueRouter from 'vue-router'
import CrearEvento from '../views/CrearEvento.vue'
import ListaEvento from '../views/ListaEvento.vue'
import MostrarEvento from '../views/MostrarEvento.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import NProgress from 'nprogress'
import store from '@/store/index.js'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'
import Example from '../views/Example.vue'

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
    props: true,
  },
  {
    path: '/evento/:id',
    name: 'mostrar-evento',
    component: MostrarEvento,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch('evento/fetchEvento', routeTo.params.id)
        .then((evento) => {
          console.log('SI se pudo wtf')
          routeTo.params.evento = evento
          next()
        })
        .catch((error) => {
          console.log(error)
          if (error.response && error.response.status == 404) {
            next({ name: '404', params: { resource: 'evento' } })
          } else {
            next({ name: 'network-error' })
          }
        })
    },
  },
  {
    path: '/evento/crear',
    name: 'crear-evento',
    component: CrearEvento,
  },

  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true,
  },
  {
    path: '/example',
    component: Example,
  },
  {
    path: '/network-error',
    name: 'network-error',
    component: NetworkError,
  },
  {
    path: '*',
    redirect: { name: '404', params: { resource: 'pagina' } },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
