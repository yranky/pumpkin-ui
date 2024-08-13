import { withBase } from "vuepress/client"

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5173' : withBase('/demo/index.html')

export default [
    {
        activeMatch: '/components/button',
        url: BASE_URL + '#/button'
    }, {
        activeMatch: '/components/cell',
        url: BASE_URL + '#/cell'
    }, {
        activeMatch: '/components/overlay',
        url: BASE_URL + '#/overlay'
    }, {
        activeMatch: '/components/popup',
        url: BASE_URL + '#/popup'
    }, {
        activeMatch: '/components/toast',
        url: BASE_URL + '#/toast'
    }, {
        activeMatch: '/components/loading',
        url: BASE_URL + '#/loading'
    }, {
        activeMatch: '/components/action-sheet',
        url: BASE_URL + '#/action-sheet'
    }, {
        activeMatch: '/components/picker-view',
        url: BASE_URL + '#/picker-view'
    }, {
        activeMatch: '/components/picker',
        url: BASE_URL + '#/picker'
    }, {
        activeMatch: '/components/date-picker',
        url: BASE_URL + '#/date-picker'
    }, {
        activeMatch: '/components/switch',
        url: BASE_URL + '#/switch'
    }, {
        activeMatch: '/components/progress',
        url: BASE_URL + '#/progress'
    }, {
        activeMatch: '/components/divider',
        url: BASE_URL + '#/divider'
    }
];