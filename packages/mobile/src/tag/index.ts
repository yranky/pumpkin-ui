import PkTag from './src/tag.vue'
import type { App } from 'vue'

PkTag.install = (app: App) => {
    app.component("PkTag", PkTag)
}

export default PkTag
export { PkTag }
