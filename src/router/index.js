import {createRouter, createWebHistory} from 'vue-router'
import HeroPage from "@/views/HeroPage.vue";
import HeroCreator from "@/views/HeroCreator.vue"
import HomePage from "@/views/HomePage.vue";
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
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/creator',
            name: 'Hero Creator',
            component: HeroCreator
        },
        {
            path: '/:user',
            name: 'Hero Page',
            component: HeroPage
        }
    ]
})

