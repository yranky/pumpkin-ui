import { extend } from "@pumpkin-ui/utils"

export const radioGroupProps = extend({}, {
    modelValue: {
        type: [String, Number, Boolean],
        default: void 0
    },
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
    vertical: {
        type: Boolean,
        default: false
    }
})