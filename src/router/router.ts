import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/components/dashboard/Dashboard.vue'
import Portfolio from '@/components/portfolio/Portfolio.vue'
import Lab from '@/components/lab/Lab.vue'
import Code from '@/components/code/Code.vue'

const routes = [
  { path: '/', component: Dashboard },

  { path: '/dashboard', component: Dashboard },
  { path: '/portfolio', component: Portfolio },
  { path: '/lab', component: Lab },
  { path: '/code', component: Code},
]

export const router = createRouter({
  routes,
  history: createWebHistory()
})