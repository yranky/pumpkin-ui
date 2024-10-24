import PkButton from './src/button.vue'
import type { App } from 'vue'

PkButton.install = (app: App) => {
    app.component("PkButton", PkButton)
}

export default PkButton
export { PkButton }
