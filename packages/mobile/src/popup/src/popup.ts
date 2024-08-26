import { extend } from "@pk-ui/utils"
import { PropType } from "vue"


export const popupEmits = ['update:modelValue', 'onOpen', 'onClose', 'onOpened', 'onClosed']
export const positionTypes = ['top', 'bottom', 'left', 'right', 'center'] as const
export const overflowYTypes = ['auto', 'scroll', 'hidden', 'visible', 'clip'] as const

export const popupProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
    },
    position: {
        type: String as PropType<typeof positionTypes[number]>,
        values: positionTypes,
        default: 'center'
    },
    appendToBody: {
        type: Boolean,
        default: true
    },
    overlay: {
        type: Boolean,
        default: true
    },
    overlayBackgroundColor: {
        type: String,
        default: ''
    },
    fade: {
        type: Boolean,
        default: false
    },
    backgroundColor: {
        type: String,
        default: ''
    },
    overflowY: {
        type: String as PropType<typeof overflowYTypes[number]>,
        default: 'auto'
    },
    round: {
        type: Boolean,
        default: false
    },
    closeOnPressOverlay: {
        type: Boolean,
        default: true
    }
})