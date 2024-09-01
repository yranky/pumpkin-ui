import { extend } from "@pk-ui/utils"

export const positionTypes = ['top', 'bottom', 'left', 'right', 'center'] as const
export const overflowYTypes = ['auto', 'scroll', 'hidden', 'visible', 'clip'] as const

export const popupProps = extend({}, {
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
        type: String,
        values: overflowYTypes,
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