import { extend } from "@pk-ui/utils"
import { skeletonCommonProps } from "./types"
import { PropType } from "vue"

export const skeletonParagraphProps = extend({}, skeletonCommonProps, {
    rows: {
        type: Number,
        default: 1
    },
    widths: {
        type: Array as PropType<number[]>,
        default: () => ([])
    }
})