import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'zh-Hans',
  title: 'PK-UI',
  description: 'PK-UI 组件库 - 移动端',
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        navbar: [
          {
            text: '指南',
            activeMatch: '/guide/',
            link: '/guide/quickstart'
          },
          {
            text: '组件',
            activeMatch: '/components/',
            link: '/components/button'
          }
        ],
        sidebar: {
          '/components/': [
            {
              text: '基础组件',
              children: [
                {
                  text: 'button 按钮',
                  link: '/components/button'
                }
              ]
            }
          ]
        }
      }
    }
  }),
  locales: {
    '/': {
      lang: 'zh-Hans',
      title: 'PK-UI',
      description: 'PK-UI 组件库 - 移动端'
    }
  },
  bundler: viteBundler(),
  plugins: [
    searchPlugin({

    })
  ]
})
