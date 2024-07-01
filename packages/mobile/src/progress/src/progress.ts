import { extend } from "@pk-ui/utils";


export const progressProps = extend({}, {
    percentage: {
        type: Number,
        default: 0
    },
    strokeHeight: {
        type: Number,
        default: 2
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
        type: Number,
        default: 0.3
    },
    pivotColor: {
        type: String,
        default: ''
    },
    pivotFontSize: {
        type: Number,
        default: 13
    },
    showPivot: {
        type: Boolean,
        default: false
    }
})