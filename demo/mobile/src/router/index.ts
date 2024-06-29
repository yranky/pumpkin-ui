import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    { path: '/button', component: () => import("../views/button/Button.vue") },
    { path: '/cell', component: () => import("../views/cell/Cell.vue") },
    { path: '/overlay', component: () => import("../views/overlay/Overlay.vue") },
    { path: '/popup', component: () => import("../views/popup/Popup.vue") },
    { path: '/toast', component: () => import("../views/toast/Toast.vue") },
    { path: '/loading', component: () => import('../views/loading/Loading.vue') },
    { path: '/action-sheet', component: () => import('../views/action-sheet/ActionSheet.vue') },
    { path: '/picker', component: () => import('../views/picker/Picker.vue') },
    { path: '/picker-view', component: () => import('../views/picker-view/PickerView.vue') },
    { path: '/field', component: () => import('../views/field/Field.vue') },
    { path: '/switch', component: () => import('../views/switch/Switch.vue') },
    { path: '/progress', component: () => import('../views/progress/Progress.vue') },
    { path: '/divider', component: () => import('../views/divider/Divider.vue') }
]



export const router = createRouter({
    history: createWebHistory(),
    routes,
})