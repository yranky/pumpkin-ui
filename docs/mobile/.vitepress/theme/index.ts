import DefaultTheme from 'vitepress/theme'


import { PkButton } from '@pk-ui/mobile'

import '@pk-ui/mobile/theme/index.less'


export default {
    ...DefaultTheme,
    enhanceApp: ({ app }) => {
        app.use(PkButton)
    }
};


