import { extend } from "@pk-ui/utils"
import { skeletonCommonProps } from "./types"
import { PropType } from "vue"


export const skeletonShape = ['circle', 'square'] as const
export const skeletonAvatarProps = extend({}, skeletonCommonProps, {
    size: {
        type: Number
    },
    shape: {
        type: String as PropType<typeof skeletonShape[number]>,
        default: 'circle'
    }
})