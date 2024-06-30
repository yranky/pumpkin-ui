import DefaultTheme from 'vitepress/theme'


import { PkButton } from '@pk-ui/mobile'

import '@pk-ui/mobile/theme/index.less'
import './style.css'


export default {
    ...DefaultTheme,
    enhanceApp: ({ app }) => {
        app.use(PkButton)
    }
};


