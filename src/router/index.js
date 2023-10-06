import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import HeroCreator from "@/views/HeroCreator.vue";
import HeroPageWrapper from "@/views/HeroPageWrapper.vue";

export const router = createRouter({
    history: createWebHashHistory(),
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
            path: '/:user/',
            name: 'Hero Page',
            component: HeroPageWrapper
        }
    ]
})

