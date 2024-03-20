import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import "@pk-ui/mobile/theme/index.less"

createApp(App).use(router).mount('#app')
