import { defineConfig } from 'vitepress'
import zhCn from './languages/zh-cn'

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
        ...zhCn.locales
    }
})