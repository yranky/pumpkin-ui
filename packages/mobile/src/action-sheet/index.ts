import PkActionSheet from './src/action-sheet.vue'
import type { App } from 'vue'

PkActionSheet.install = (app: App) => {
    app.component("PkActionSheet", PkActionSheet)
}

export default PkActionSheet
export { PkActionSheet }

export * from './src/fun/action-sheet'