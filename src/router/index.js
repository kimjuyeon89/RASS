import { createRouter, createWebHistory } from 'vue-router'
import CodingList from '@/pages/CodingList.vue'
import Components from '@/pages/Components.vue'
import Login from '@/pages/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CodingList,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/components',
      name: 'components',
      component: Components,
    },
    {
      path: '/main',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        { path: '/main', component: () => import('@/pages/Main.vue') },
      ],
    },
    {
      path: '/sub/:category/:id',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '/sub/:category/:id',
          component: () => import('@/pages/sub/Index.vue'),
        },
      ],
    },
    {
      path: '/gis/:category/:id',
      component: () => import('@/layouts/GisLayout.vue'),
      children: [
        {
          path: '/gis/:category/:id',
          component: () => import('@/pages/gis/Index.vue'),
        },
      ],
    },
    {
      path: '/popup/:category/:id',
      component: () => import('@/pages/popup/Index.vue'),
    },
    {
      path: '/popup/window/:category/:id',
      component: () => import('@/pages/popup/window/Index.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('@/pages/ErrorNotFound.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
