import PkOverlay from './src/overlay.vue'
import type { App } from 'vue'

PkOverlay.install = (app: App) => {
    app.component(PkOverlay.name, PkOverlay)
}

export default PkOverlay
export { PkOverlay }
