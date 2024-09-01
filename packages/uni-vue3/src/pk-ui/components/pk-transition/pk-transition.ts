import { extend } from "@pk-ui/utils"

export const transitionProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        default: 'fade'
    },
    duration: {
        type: Number
    }
})