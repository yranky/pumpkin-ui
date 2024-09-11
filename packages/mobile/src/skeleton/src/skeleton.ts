import { extend } from "@pk-ui/utils"
import { skeletonCommonProps } from "./types"

export const skeletonProps = extend({}, skeletonCommonProps, {
    loading: {
        type: Boolean,
        default: true
    },
    avatar: {
        type: Boolean,
        default: true
    },
    title: {
        type: Boolean,
        default: true
    },
    paragraph: {
        type: Boolean,
        default: true
    },
    rows: {
        type: Number,
        default: 3
    }
})