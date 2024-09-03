import PkNotify from './src/notify.vue'
import type { App } from 'vue'

PkNotify.install = (app: App) => {
    app.component(PkNotify.name, PkNotify)
}

export default PkNotify
export { PkNotify }
