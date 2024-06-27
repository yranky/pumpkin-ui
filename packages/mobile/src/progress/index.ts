import PkProgress from './src/progress.vue'
import type { App } from 'vue'

PkProgress.install = (app: App) => {
    app.component(PkProgress.name, PkProgress)
}

export default PkProgress
export { PkProgress }
