import PkRadio from './src/radio.vue'
import PkRadioGroup from './src/radio-group.vue'
import type { App } from 'vue'

PkRadio.install = (app: App) => {
    app.component(PkRadio.name, PkRadio)
}

PkRadioGroup.install = (app: App) => {
    app.component(PkRadioGroup.name, PkRadioGroup)
}

export default PkRadio
export { PkRadio, PkRadioGroup }
