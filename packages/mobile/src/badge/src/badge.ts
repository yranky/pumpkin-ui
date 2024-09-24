import { extend } from "@pumpkin-ui/utils"
import { PropType } from "vue"

export const badgeProps = extend({}, {
    content: {
        type: [String, Number] as PropType<string | number>
    },
    background: {
        type: String
    },
    dot: {
        type: Boolean,
        default: false
    },
    max: {
        type: Number,
        default: 99
    },
    showZero: {
        type: Boolean,
        default: false
    },
    offset: {
        type: Array as PropType<number[]>,
        default: () => [0, 0]
    }
})