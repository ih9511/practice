import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomeRoutes from '@/home/router/HomeRoutes'
import BoardRoutes from '@/board/router/BoardRoutes'


const routes: Array<RouteRecordRaw> = [
  ...HomeRoutes,
  ...BoardRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
