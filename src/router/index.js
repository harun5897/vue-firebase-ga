import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue')
  },
  {
    path: '/dashboard/guru',
    name: 'dashboard-data-guru',
    component: () => import('@/views/dashboard/DashboardGuru.vue')
  },
  {
    path: '/dashboard/mata-pelajaran',
    name: 'dashboard-mata-pelajaran',
    component: () => import('@/views/dashboard/DashboardMataPelajaran.vue')
  },
  {
    path: '/dashboard/jam-pelajaran',
    name: 'dashboard-jam-pelajaran',
    component: () => import('@/views/dashboard/DashboardJamPelajaran.vue')
  },
  {
    path: '/dashboard/form/guru',
    name: 'dashboard-form-guru',
    component: () => import('@/views/dashboard/form-guru/FormGuru.vue')
  },
  {
    path: '/dashboard/guru/detail',
    name: 'dashboard-guru-detail',
    component: () => import('@/views/dashboard/form-guru/FormGuruDetail.vue')
  },
]

const router = createRouter ({
  history: createWebHistory(),
  routes
})

export default router