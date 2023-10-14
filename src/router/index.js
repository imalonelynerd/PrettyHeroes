import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import HeroCreator from "@/views/HeroCreator.vue";
import HeroPage from "@/views/HeroPage.vue";

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
            component: HeroPage
        }
    ]
})

