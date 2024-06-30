import DefaultTheme from 'vitepress/theme'


import { PkButton } from '@pk-ui/mobile'

import '@pk-ui/mobile/theme/index.less'
import './style.css'
import WithPreviewLayout from './layouts/withPreviewLayout.vue';


export default {
    ...DefaultTheme,
    Layout: WithPreviewLayout,
    enhanceApp: ({ app }) => {
        app.use(PkButton)
    }
};


