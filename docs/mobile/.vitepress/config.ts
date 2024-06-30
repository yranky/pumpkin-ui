import { defineConfig } from 'vitepress'

export default defineConfig({
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    rewrites: {
        'zh-CN/:rest*': ':rest*'
    },
    themeConfig: {
        i18nRouting: true,
        search: {
            provider: 'local'
        }
    },
    locales: {
        root: {
            title: 'PK-UI',
            description: 'PK-UI 组件库 - 移动端',
            label: '简体中文',
            lang: 'zh-CN',
            themeConfig: {

            }
        }
    }
})