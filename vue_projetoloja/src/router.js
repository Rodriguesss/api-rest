import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Produtos',
      component: () => import('@/views/Produtos/')
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: () => import('@/views/Cadastro/')
    },
    {
      path: '/editar/:produto_id',
      name: 'Editar',
      component: () => import('@/views/Editar/')
    },
    {
      path: '/deletar/:produto_id',
      name: 'Deletar',
      component: () => import('@/views/Deletar/')
    }
  ]
})
