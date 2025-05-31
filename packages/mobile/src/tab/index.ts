import PkTab from './src/tab.vue'
import PkTabs from './src/tabs.vue'
import type { App } from 'vue'

PkTabs.install = (app: App) => {
    app.component("PkTabs", PkTabs)
}

PkTab.install = (app: App) => {
    app.component("PkTab", PkTab)
}

export default PkTabs
export { PkTabs, PkTab }
