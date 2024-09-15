import PkDialog from './src/dialog.vue'
import type { App } from 'vue'

PkDialog.install = (app: App) => {
    app.component(PkDialog.name, PkDialog)
}

export default PkDialog
export { PkDialog }