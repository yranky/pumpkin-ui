import PkActionSheet from './src/action-sheet.vue'
import type { App } from 'vue'

PkActionSheet.install = (app: App) => {
    app.component(PkActionSheet.name, PkActionSheet)
}

export default PkActionSheet
export { PkActionSheet }
