import { defineClientConfig } from 'vuepress/client'
import { PkButton } from '@pk-ui/mobile'
import '@pk-ui/mobile/theme/index.less'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component('PkButton', PkButton)
    },
    setup() { },
    layouts: {},
    rootComponents: [],
})