import PkLoading from './src/loading.vue'
import type { App } from 'vue'

PkLoading.install = (app: App) => {
    app.component(PkLoading.name, PkLoading)
}

export default PkLoading
export { PkLoading }
