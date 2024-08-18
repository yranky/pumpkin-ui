import PkForm from './src/form.vue'
import type { App } from 'vue'

PkForm.install = (app: App) => {
    app.component(PkForm.name, PkForm)
}

export default PkForm
export { PkForm }

export * from './src/types'