import PkCell from './src/cell.vue'
import type { App } from 'vue'

PkCell.install = (app: App) => {
    app.component(PkCell.name, PkCell)
}

export default PkCell
export { PkCell }
