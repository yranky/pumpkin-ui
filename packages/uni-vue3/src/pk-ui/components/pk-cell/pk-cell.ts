import { extend } from "@pk-ui/utils"

export const cellProps = extend({}, {
    title: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    },
    isLink: {
        type: Boolean,
        default: false
    },
    border: {
        type: Boolean,
        default: true
    },
    required: {
        type: Boolean,
        default: false
    },
    vertical: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})