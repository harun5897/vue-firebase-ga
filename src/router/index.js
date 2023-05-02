import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/company-profile',
    name: 'company-profile',
    component: () => import('../views/CompanyProfile.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/Faq.vue')
  }
]

const router = createRouter ({
  history: createWebHistory(),
  routes
})

export default router