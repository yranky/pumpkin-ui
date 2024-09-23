import PkTransition from './src/pk-transition.vue'
import type { App } from 'vue'

PkTransition.install = (app: App) => {
    app.component("PkTransition", PkTransition)
}

export default PkTransition
export { PkTransition }
