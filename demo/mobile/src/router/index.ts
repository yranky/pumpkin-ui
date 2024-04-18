import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    { path: '/button', component: ()=>import("../views/button/Button.vue") },
    { path: '/cell', component: ()=>import("../views/cell/Cell.vue") },
    { path: '/overlay', component: ()=>import("../views/overlay/Overlay.vue") },
    { path: '/popup', component: ()=>import("../views/popup/Popup.vue") },
    { path: '/toast', component: ()=>import("../views/toast/Toast.vue") },
    { path: '/loading', component: () => import('../views/loading/Loading.vue') },
    { path: '/action-sheet', component: ()=>import('../views/action-sheet/ActionSheet.vue') }
]



export const router = createRouter({
    history: createWebHistory(),
    routes,
})