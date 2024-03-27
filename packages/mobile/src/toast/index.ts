import PkToast from './src/toast.vue'
import type { App } from 'vue'

PkToast.install = (app: App) => {
    app.component(PkToast.name, PkToast)
}

export default PkToast
export { PkToast }
