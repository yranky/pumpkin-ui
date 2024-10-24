import PkCheckbox from './src/checkbox.vue'
import PkCheckboxGroup from './src/checkbox-group.vue'
import type { App } from 'vue'

PkCheckbox.install = (app: App) => {
    app.component("PkCheckbox", PkCheckbox)
}

PkCheckboxGroup.install = (app: App) => {
    app.component("PkCheckboxGroup", PkCheckboxGroup)
}

export default PkCheckbox
export { PkCheckbox, PkCheckboxGroup }
