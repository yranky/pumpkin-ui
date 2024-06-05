import PkField from './src/field.vue'
import type { App } from 'vue'

PkField.install = (app: App) => {
    app.component(PkField.name, PkField)
}

export default PkField
export { PkField }
