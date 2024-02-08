import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
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
        path: 'dynamicRouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          // route 的值是每次進入路由時帶入的 route；跟在元件用 this.$route 是相同的，只是改在路由表觸發
          // console.log(route);
          return {
            id: route.params.id
          };
        }
      },
      {
        path: 'routerNavigation', // 動態路由，:冒號後方名稱自訂
        component: () => import('../views/RouterNavigation.vue')
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
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*', // 星號代表全部
    component: () => import('../views/NotFound.vue')
  },
  // 重新導向
  {
    path: '/newPage/:pathMatch(.*)*', 
    redirect: {
      name: 'home' 
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if(to.fullPath.match('newpage')) { // 當抵達指定頁面就滾動到指定高度
      return {
        top: 0
      }
    }
    return{
      top: 100
    }
  },
});

export default router;
