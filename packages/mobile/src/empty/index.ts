import PkEmpty from './src/empty.vue'
import type { App } from 'vue'

PkEmpty.install = (app: App) => {
    app.component(PkEmpty.name, PkEmpty)
}

export default PkEmpty
export { PkEmpty }
