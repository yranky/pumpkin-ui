import { withBase } from "vuepress/client"

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5173' : withBase('/demo/index.html')

export default [
    {
        activeMatch: '/components/button',
        url: BASE_URL + '#/button'
    }, {
        activeMatch: '/components/cell',
        url: BASE_URL + '#/cell'
    }
];