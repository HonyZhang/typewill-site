import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/shared/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/features/home/views/HomePage.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/features/about/views/AboutPage.vue')
        },
        {
          path: 'projects',
          name: 'projects',
          component: () => import('@/features/projects/views/ProjectsPage.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('@/features/blog/views/BlogPage.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/features/contact/views/ContactPage.vue')
        }
      ]
    }
  ]
})

export default router 