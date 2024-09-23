import PkOverlay from './src/overlay.vue'
import type { App } from 'vue'

PkOverlay.install = (app: App) => {
    app.component("PkOverlay", PkOverlay)
}

export default PkOverlay
export { PkOverlay }
