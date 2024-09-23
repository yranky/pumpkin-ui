import PkDatePicker from './src/date-picker.vue'
import type { App } from 'vue'

PkDatePicker.install = (app: App) => {
    app.component("PkDatePicker", PkDatePicker)
}

export default PkDatePicker
export { PkDatePicker }

export * from './src/fun/date-picker'