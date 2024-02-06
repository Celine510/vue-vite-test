import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      path: '/newpage',
      name: 'newOne',
      component: () => import('../views/NewPage.vue'),
      children: [
        {
          path: 'a', // 子路徑，不需要加斜線
          component: () => import('../views/ComponentsA.vue')
        },
        {
          path: 'b',
          component: () => import('../views/ComponentsB.vue')
        },
        {
          path: 'dynamicRouter/:id', // 動態路由，:冒號後方名稱自訂
          component: () => import('../views/DynamicRouter.vue')
        },
        {
          path: 'namedView',
          component: () => import('../views/NamedView.vue'),
          children: [
            {
              path: 'c2a',
              components: {
                left: () => import('../views/ComponentsC.vue'),
                right: () => import('../views/ComponentsA.vue')
              }
            },
            {
              path: 'a2b',
              components: {
                left: () => import('../views/ComponentsA.vue'),
                right: () => import('../views/ComponentsB.vue')
              }
            }
          ]
        }
      ]
    }
  ]
});

export default router;
