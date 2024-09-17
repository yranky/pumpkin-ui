import { extend } from "@pk-ui/utils"
import { skeletonCommonProps } from "./types"
import { PropType } from "vue"

export const skeletonParagraphProps = extend({}, skeletonCommonProps, {
    active: {
        type: Boolean,
        default: void 0
    },
    rows: {
        type: Number,
        default: 1
    },
    widths: {
        type: Array as PropType<(string | number)[]>,
        default: () => ([])
    }
})