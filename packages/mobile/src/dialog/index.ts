import PkDialog from './src/dialog.vue'
import type { App } from 'vue'

PkDialog.install = (app: App) => {
    app.component("PkDialog", PkDialog)
}

export default PkDialog
export { PkDialog }
export * from './src/fun/dialog'