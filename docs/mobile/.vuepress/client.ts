import { defineClientConfig } from 'vuepress/client'
import { PkButton } from '@pumpkin-ui/mobile'
import '@pumpkin-ui/mobile/theme/index.less'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component('PkButton', PkButton)
    },
    setup() { },
    layouts: {},
    rootComponents: [],
})