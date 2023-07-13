import { createWebHistory } from 'vue-router';
// https://router.vuejs.org/api/interfaces/routeroptions.html
// const runtimeConfig = useRuntimeConfig();
// const { apiBase } = runtimeConfig.public;
export default {
  routes: () => [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/index.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/pages/demo/index.vue'),
    },
  ],
  history: (base: any) => {
    return process.client ? createWebHistory(base) : null; /* default */
  },
};
