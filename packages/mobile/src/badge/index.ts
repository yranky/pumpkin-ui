import PkBadge from './src/badge.vue'
import type { App } from 'vue'

PkBadge.install = (app: App) => {
    app.component("PkBadge", PkBadge)
}

export default PkBadge
export { PkBadge }
