import PkIcon from './src/icon.vue'
import type { App } from 'vue'

PkIcon.install = (app: App) => {
    app.component("PkIcon", PkIcon)
}

export default PkIcon
export { PkIcon }
