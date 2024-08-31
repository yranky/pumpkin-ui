import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('../views/Index.vue') },
    { path: '/button', component: () => import("../views/button/Button.vue") },
    { path: '/cell', component: () => import("../views/cell/Cell.vue") },
    { path: '/overlay', component: () => import("../views/overlay/Overlay.vue") },
    { path: '/popup', component: () => import("../views/popup/Popup.vue") },
    { path: '/toast', component: () => import("../views/toast/Toast.vue") },
    { path: '/loading', component: () => import('../views/loading/Loading.vue') },
    { path: '/action-sheet', component: () => import('../views/action-sheet/ActionSheet.vue') },
    { path: '/picker-view', component: () => import('../views/picker-view/PickerView.vue') },
    { path: '/picker', component: () => import('../views/picker/Picker.vue') },
    { path: '/date-picker', component: () => import('../views/date-picker/DatePicker.vue') },
    { path: '/switch', component: () => import('../views/switch/Switch.vue') },
    { path: '/progress', component: () => import('../views/progress/Progress.vue') },
    { path: '/divider', component: () => import('../views/divider/Divider.vue') },
    { path: '/form', component: () => import('../views/form/Form.vue') },
    { path: '/field', component: () => import('../views/field/Field.vue') },
    { path: '/icon', component: () => import('../views/icon/Icon.vue') },
    { path: '/checkbox', component: () => import('../views/checkbox/Checkbox.vue') },
    { path: '/radio', component: () => import('../views/radio/Radio.vue') }
]



export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})