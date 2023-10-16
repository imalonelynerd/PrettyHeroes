import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import HeroCreator from "@/views/HeroCreator.vue";
import HeroPage from "@/views/HeroPage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/creator',
            name: 'Hero Creator',
            component: HeroCreator,
        },
        {
            path: '/:user',
            name: 'Hero Page',
            component: HeroPage
        },
        {
            path: '/:user/:nocolor',
            name: 'Hero Page with no color',
            component: HeroPage,
        }
    ]
})