import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import Button from '../views/button/Button.vue';

const routes = [
    { path: '/button', component: Button }
]



export const router = createRouter({
    history: createWebHistory(),
    routes,
})