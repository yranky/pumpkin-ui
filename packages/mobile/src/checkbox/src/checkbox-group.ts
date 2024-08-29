import { extend } from "@pk-ui/utils"
import { PropType } from "vue"

export const checkboxGroupProps = extend({}, {
    size: {
        type: Number,
        default: void 0
    },
    square: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    max: {
        type: Number,
        default: void 0
    },
    vertical: {
        type: Boolean,
        default: false
    }
})