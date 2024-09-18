import { extend } from "@pk-ui/utils"
import { PropType } from "vue"

export type dialogEmits = {
    (event: 'update:modelValue', value: boolean): void
    (event: 'onConfirm'): void
    (event: 'onCancel'): void
    (event: 'onOpen'): void
    (event: 'onClose'): void
    (event: 'onOpened'): void
    (event: 'onClosed'): void
}
export const messageAlignTypes = ['left', 'center', 'right'] as const
export const dialogProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
    },
    overlay: {
        type: Boolean,
        default: true
    },
    overlayBackgroundColor: {
        type: String
    },
    title: {
        type: String
    },
    message: {
        type: String,
        default: ''
    },
    messageAlign: {
        type: String as PropType<typeof messageAlignTypes[number]>,
        default: 'center'
    },
    showClose: {
        type: Boolean,
        default: false
    },
    showConfirmButton: {
        type: Boolean,
        default: true
    },
    confirmButtonText: {
        type: String,
        default: '确认'
    },
    confirmButtonColor: {
        type: String
    },
    showCancelButton: {
        type: Boolean,
        default: true
    },
    cancelButtonText: {
        type: String,
        default: '取消'
    },
    cancelButtonColor: {
        type: String
    },
    buttonReverse: {
        type: Boolean,
        default: false
    },
    closeOnPressOverlay: {
        type: Boolean,
        default: false
    }
})