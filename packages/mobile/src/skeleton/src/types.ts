import { extend } from "@pk-ui/utils"

export const skeletonCommonProps = extend({}, {
    active: {
        type: Boolean,
        default: true
    }
})


export const skeletonProviderId = Symbol()
export interface ISkeletonProvider {
    addSkeleton?: (sk: ISkeletonExposeToParent) => void,
    removeSkeleton?: (sk: symbol) => void
}


export interface ISkeletonExposeToParent {
    id: symbol
}