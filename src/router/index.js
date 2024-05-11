import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/views/HomePage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        /*{
            path: '/search',
            name: 'SearchPage',
            component: SearchPage,
        },
        {
            path: '/creator',
            name: 'HeroCreator',
            component: HeroCreator,
        },*/
        {
            path: '/:user',
            name: 'HeroPage',
            component: HeroPage
        },
        /*{
            path: '/:user/:nocolor',
            name: 'HeroPageNoColor',
            component: HeroPage,
        }*/
    ]
})