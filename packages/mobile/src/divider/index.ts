import PkDivider from './src/divider.vue'
import type { App } from 'vue'

PkDivider.install = (app: App) => {
    app.component(PkDivider.name, PkDivider)
}

export default PkDivider
export { PkDivider }
