import PkPopup from './src/popup.vue'
import type { App } from 'vue'

PkPopup.install = (app: App) => {
    app.component(PkPopup.name, PkPopup)
}

export default PkPopup
export { PkPopup }
