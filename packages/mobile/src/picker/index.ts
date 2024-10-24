import PkPicker from './src/picker.vue'
import type { App } from 'vue'

PkPicker.install = (app: App) => {
    app.component("PkPicker", PkPicker)
}

export default PkPicker
export { PkPicker }

export * from './src/fun/picker'