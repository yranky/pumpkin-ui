import { extend } from "@pk-ui/utils"
import { PropType } from "vue"

export const checkboxProps = extend({}, {
    modelValue: {
        type: Boolean as PropType<boolean>,
        default: void 0
    },
    size: {
        type: Number,
        default: 20
    },
    label: {
        type: String,
        default: ''
    },
    square: {
        type: Boolean,
        default: void 0
    },
    value: {
        type: [String, Boolean, Number] as PropType<unknown>
    },
    disabled: {
        type: Boolean,
        default: void 0
    },
    group: {
        type: Boolean,
        default: true
    }
})