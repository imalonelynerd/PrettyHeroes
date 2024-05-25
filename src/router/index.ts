import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import HeroPage from '@/views/HeroPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    /*{
     *          path: '/search',
     *          name: 'SearchPage',
     *          components: SearchPage,
},
{
path: '/creator',
name: 'HeroCreator',
components: HeroCreator,
},*/
    {
      path: '/:user',
      name: 'HeroPage',
      component: HeroPage
    }
    /*{
     *          path: '/:user/:nocolor',
     *          name: 'HeroPageNoColor',
     *          components: HeroPage,
}*/
  ]
})

export default router
