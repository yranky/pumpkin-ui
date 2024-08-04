import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import pkTheme from './theme'

export default defineUserConfig({
  lang: 'zh-Hans',
  title: 'PK-UI',
  description: 'PK-UI 组件库 - 移动端',
  theme: pkTheme({
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
                  text: 'Button 按钮',
                  link: '/components/button'
                },
                {
                  text: 'Cell 单元格',
                  link: '/components/cell'
                },
                {
                  text: 'Popup 弹出层',
                  link: '/components/popup'
                },
                {
                  text: 'Toast 轻提示',
                  link: '/components/toast'
                }
              ]
            },
            {
              text: '表单组件',
              children: [
                {
                  text: 'PickerView 选择器视图',
                  link: '/components/picker-view'
                }, {
                  text: 'Picker 选择器',
                  link: '/components/picker'
                }
              ]
            },
            {
              text: '反馈组件',
              children: [
                {
                  text: 'Overlay 遮罩',
                  link: '/components/overlay'
                }, {
                  text: 'Loading 加载',
                  link: '/components/loading'
                }, {
                  text: 'ActionSheet 动作面板',
                  link: '/components/action-sheet'
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

    }),
    mdEnhancePlugin({
      codetabs: true
    })
  ]
})
