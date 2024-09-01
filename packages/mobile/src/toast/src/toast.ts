import { extend } from "@pk-ui/utils"
import { PropType } from "vue"


export const toastEmits = ['update:modelValue', 'onOpen', 'onClose', 'onOpened', 'onClosed']
export const positionTypes = ['top', 'bottom', 'center'] as const
// export const types = ['text', 'loading', 'success', 'fail', 'icon'] as const
export const types = ['text', 'loading'] as const

export const toastProps = extend({}, {
    type: {
        type: String,
        values: types,
        default: 'text'
    },
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
    overlayBackgroundColor: {
        type: String,
        default: 'transparent'
    },
    position: {
        type: String as PropType<typeof positionTypes[number]>,
        values: positionTypes,
        default: 'center'
    },
    duration: {
        type: Number,
        default: 2000
    }
})