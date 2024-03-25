import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Button from '../views/button/Button.vue'
import Cell from '../views/cell/Cell.vue'
import Overlay from '../views/overlay/Overlay.vue'
import Popup from '../views/popup/Popup.vue'

const routes = [
    { path: '/button', component: Button },
    { path: '/cell', component: Cell },
    { path: '/overlay', component: Overlay },
    { path: '/popup', component: Popup }
]



export const router = createRouter({
    history: createWebHistory(),
    routes,
})