import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Button from '../views/button/Button.vue'
import Cell from '../views/cell/Cell.vue'

const routes = [
    { path: '/button', component: Button },
    { path: '/cell', component: Cell }
]



export const router = createRouter({
    history: createWebHistory(),
    routes,
})