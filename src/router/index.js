import {createRouter, createWebHashHistory} from 'vue-router'
/*import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].json) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HeroPage.vue')
    }
  ]
})

export default router
*/

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/creator',
            name: 'Hero Creator',
        },
        {
            path: '/:user/',
            name: 'Hero Page',
        }
    ]
})

