import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import pkTheme from './theme'

export default defineUserConfig({
  lang: 'zh-Hans',
  title: 'pumpkin-ui',
  description: 'pumpkin-ui 组件库 - 移动端',
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
                  text: 'Icon 图标',
                  link: '/components/icon'
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
                }, {
                  text: 'DatePicker 日期时间选择器',
                  link: '/components/date-picker'
                }, {
                  text: 'Switch 开关',
                  link: '/components/switch'
                }, {
                  text: 'Field 输入项',
                  link: '/components/field'
                }, {
                  text: 'Form 表单',
                  link: '/components/form'
                }, {
                  text: 'Checkbox 复选框',
                  link: '/components/checkbox'
                }, {
                  text: 'Radio 单选框',
                  link: '/components/radio'
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
                }, {
                  text: 'Notify 消息提示',
                  link: '/components/notify'
                }, {
                  text: 'Skeleton 骨架屏',
                  link: '/components/skeleton'
                }, {
                  text: 'Dialog 对话框',
                  link: '/components/dialog'
                }
              ]
            },
            {
              text: '展示组件',
              children: [
                {
                  text: 'Progress 进度条',
                  link: '/components/progress'
                },
                {
                  text: 'Divider 分割线',
                  link: '/components/divider'
                },
                {
                  text: 'Badge 徽标',
                  link: '/components/badge'
                },
                {
                  text: 'Empty 空元素',
                  link: '/components/empty'
                },
                {
                  text: 'Tag 标签',
                  link: '/components/tag'
                },
                {
                  text: 'Tab 标签页',
                  link: '/components/tab'
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
      title: 'pumpkin-ui',
      description: 'pumpkin-ui 组件库 - 移动端'
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
