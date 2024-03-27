import { extend } from "@pk-ui/utils";


export const toastEmits = ['update:modelValue']
export const positionTypes = ['top', 'bottom', 'center'] as const

export const toastProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
    },
    position: {
        type: String,
        values: positionTypes,
        default: 'center'
    },
    appendToBody: {
        type: Boolean,
        default: true
    }
})