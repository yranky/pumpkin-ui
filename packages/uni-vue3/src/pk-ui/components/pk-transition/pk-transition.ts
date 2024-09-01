import { extend } from "@pk-ui/utils"
import { transitionNames } from "./types"

export const transitionProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        values: transitionNames,
        default: 'fade'
    },
    duration: {
        type: Number
    },
    customClass: {
        type: [String, Array],
        default: []
    },
    styles: {
        type: Object,
        default: () => ({})
    }
})