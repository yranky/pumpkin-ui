import { withBase } from 'vitepress'

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5173/' : withBase('/demo/index.html');

export default [
    {
        activeMatch: '/components/button',
        url: BASE_URL + '#/button'
    }
];