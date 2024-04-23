import PkPickerView from './src/picker-view.vue'
import type { App } from 'vue'

PkPickerView.install = (app: App) => {
    app.component(PkPickerView.name, PkPickerView)
}

export default PkPickerView
export { PkPickerView }
