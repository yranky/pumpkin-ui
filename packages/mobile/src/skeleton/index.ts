import PkSkeleton from './src/skeleton.vue'
import PkSkeletonAvatar from './src/skeleton-avatar.vue'
import PkSkeletonParagraph from './src/skeleton-paragraph.vue'
import type { App } from 'vue'

PkSkeleton.install = (app: App) => {
    app.component("PkSkeleton", PkSkeleton)
}

PkSkeletonAvatar.install = (app: App) => {
    app.component("PkSkeletonAvatar", PkSkeletonAvatar)
}


PkSkeletonParagraph.install = (app: App) => {
    app.component("PkSkeletonParagraph", PkSkeletonParagraph)
}

export default PkSkeleton
export { PkSkeleton, PkSkeletonAvatar, PkSkeletonParagraph }
