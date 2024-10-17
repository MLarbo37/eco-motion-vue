import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/powerStation',
      name: 'powerStation',
      component: () => import('../views/PowerStationView.vue')
    },
    {
      path: '/chargers',
      name: 'chargers',
      component: () => import('../views/ChargerView.vue')
    },
    {
      path:'/services',
      name:'services',
      component:()=> import('../views/ServiceView.vue')
    },
    {
      path:'/catalogue',
      name:'catalogue',
      component:()=> import('../views/CatalogueView.vue')
    }
  ]
})

export default router
