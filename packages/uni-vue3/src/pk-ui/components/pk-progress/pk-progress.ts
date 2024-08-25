import { extend } from "@pk-ui/utils"


export const progressProps = extend({}, {
    percentage: {
        type: Number,
        default: 0
    },
    strokeHeight: {
        type: Number,
        default: 4
    },
    background: {
        type: String,
        default: ''
    },
    trackBackground: {
        type: String,
        default: ''
    },
    square: {
        type: Boolean,
        default: false
    },
    transitionDuration: {
        type: Number
    },
    pivotColor: {
        type: String
    },
    pivotFontSize: {
        type: Number,
        default: 26
    },
    showPivot: {
        type: Boolean,
        default: false
    }
})