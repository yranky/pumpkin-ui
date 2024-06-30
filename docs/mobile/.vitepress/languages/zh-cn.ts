import { defineConfig } from "vitepress";

export default defineConfig({
    locales: {
        root: {
            title: 'PK-UI',
            description: 'PK-UI 组件库 - 移动端',
            label: '简体中文',
            lang: 'zh-CN',
            themeConfig: {
                docFooter: {
                    prev: '上一页',
                    next: '下一页'
                },
                outline: {
                    label: '页面导航'
                },
                lastUpdated: {
                    text: '最后更新于'
                },
                langMenuLabel: '多语言',
                returnToTopLabel: '回到顶部',
                sidebarMenuLabel: '菜单',
                darkModeSwitchLabel: '主题',
                lightModeSwitchTitle: '切换到浅色模式',
                darkModeSwitchTitle: '切换到深色模式',
                search: {
                    provider: 'local',
                    options: {
                        locales: {
                            'zh-CN': {
                                translations: {
                                    button: {
                                        buttonText: '搜索文档',
                                        buttonAriaLabel: '搜索文档'
                                    },
                                    modal: {
                                        noResultsText: '无法找到相关结果',
                                        resetButtonTitle: '清除查询条件',
                                        footer: {
                                            selectText: '选择',
                                            navigateText: '切换'
                                        }
                                    }
                                }
                            }
                        },
                    }
                },
                nav: [
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
                            items: [
                                {
                                    text: '基础组件',
                                    items: [
                                        {
                                            text: 'button 按钮',
                                            link: '/components/button'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
});