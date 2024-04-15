import { extend } from "@pk-ui/utils";


export const toastEmits = ['update:modelValue']
export const positionTypes = ['top', 'bottom', 'center'] as const

export const toastProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        default: ''
    },
    overlay: {
        type: Boolean,
        default: false
    },
    overlayBackgroundColor:{
        type: String,
        default:'transparent'
    },
    position: {
        type: String,
        values: positionTypes,
        default: 'center'
    },
    duration: {
        type: Number,
        default: 2000
    }
})