import { extend } from "@pk-ui/utils"
import { loadingTypes } from "./types"

export const loadingProps = extend({}, {
    type: {
        type: String,
        values: loadingTypes,
        default: 'circular'
    },
    color: {
        type: String,
        default: ''
    },
    vertical: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        default: ''
    },
    textColor: {
        type: String,
        default: ''
    },
    size: {
        type: String
    },
    textSize: {
        type: String
    }
})