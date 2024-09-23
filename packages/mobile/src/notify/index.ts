import PkNotify from './src/notify.vue'
import type { App } from 'vue'

PkNotify.install = (app: App) => {
    app.component("PkNotify", PkNotify)
}

export default PkNotify
export { PkNotify }

export * from './src/fun/notify'