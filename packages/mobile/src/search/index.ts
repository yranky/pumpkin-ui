import PkSearch from './src/search.vue'
import type { App } from 'vue'

PkSearch.install = (app: App) => {
    app.component("PkSearch", PkSearch)
}

export default PkSearch
export { PkSearch }
