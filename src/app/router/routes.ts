import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: async () => await import('src/shared/ui/layouts/main-layout/MainLayout.vue'),
    children: [
      { path: '', component: async () => (await import('src/pages/index-page')).IndexPage },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: async () => (await import('src/pages/error-not-found')).ErrorNotFound,
  },
]

export default routes
