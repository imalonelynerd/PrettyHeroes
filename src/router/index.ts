import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import HeroPage from '@/views/HeroPage.vue'
import HeroCreator from '@/views/HeroCreator.vue'
import HeroFinder from '@/views/HeroFinder.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: HeroFinder
    },
    {
      path: '/creator',
      name: 'HeroCreator',
      component: HeroCreator
    },
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
