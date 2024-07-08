import PkCell from './src/cell.vue'
import PkCellGroup from './src/cell-group.vue'
import type { App } from 'vue'

PkCell.install = (app: App) => {
    app.component(PkCell.name, PkCell)
}

PkCellGroup.install = (app: App) => {
    app.component(PkCellGroup.name, PkCellGroup)
}

export default PkCell
export { PkCell, PkCellGroup }
