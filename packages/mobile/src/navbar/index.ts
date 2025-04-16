import PkNavbar from './src/navbar.vue'
import type { App } from 'vue'

PkNavbar.install = (app: App) => {
    app.component("PkNavbar", PkNavbar)
}

export default PkNavbar
export { PkNavbar }
