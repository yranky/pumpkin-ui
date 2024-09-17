import { extend } from "@pk-ui/utils"
import { Ref } from "vue"

export const skeletonCommonProps = extend({}, {
    active: {
        type: Boolean,
        default: true
    }
})


export const skeletonProviderId = Symbol()
export interface ISkeletonProvider {
    addSkeleton?: (sk: ISkeletonExposeToParent) => void,
    removeSkeleton?: (sk: symbol) => void,
    active: Ref<boolean> | boolean
}


export interface ISkeletonExposeToParent {
    id: symbol
}