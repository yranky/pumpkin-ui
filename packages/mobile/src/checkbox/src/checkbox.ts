import { extend } from "@pk-ui/utils"

export const checkboxProps = extend({}, {
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
        default: false
    }
})