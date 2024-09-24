import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import "@pumpkin-ui/mobile/theme/index.less"

createApp(App).use(router).mount('#app')
