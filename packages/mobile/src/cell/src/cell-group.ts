import { extend } from "@pumpkin-ui/utils"

export const cellGroupProps = extend({}, {
    title: {
        type: String,
        default: ''
    },
    lastHideBorder: {
        type: Boolean,
        default: true
    }
})