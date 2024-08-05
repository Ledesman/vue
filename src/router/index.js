import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
     {
      path: '/contador',
      name: 'contador',
       component: () => import('../modules/contador/Contador.vue')
    },   {
      path: '/lista-de-tareas',
      name: 'ListaDeTarea',
       component: () => import('../modules/listaDeTareas/ListaDetarea.vue')
    }, 
      {
      path: '/registrar',
      name: 'Registrar',
       component: () => import('../modules/registro/views/Registrar.vue')
    }
  ]
})

export default router
