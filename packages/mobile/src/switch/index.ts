import PkSwitch from './src/switch.vue'
import type { App } from 'vue'

PkSwitch.install = (app: App) => {
    app.component(PkSwitch.name, PkSwitch)
}

export default PkSwitch
export { PkSwitch }
