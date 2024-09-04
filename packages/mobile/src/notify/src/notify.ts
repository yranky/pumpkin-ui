import { extend } from "@pk-ui/utils"
import { PropType } from "vue"


export type notifyEmits = {
    (event: 'update:modelValue', value: boolean): void
    (event: 'click', e: MouseEvent): void
    (event: 'onClose'): void
    (event: 'onOpen'): void
    (event: 'onOpened'): void
    (event: 'onClosed'): void
}

export const positionTypes = ['top', 'bottom'] as const
export const notifyTypes = ['primary', 'success', 'warning', 'error'] as const
export const notifyProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
    },
    position: {
        type: String as PropType<typeof positionTypes[number]>,
        default: 'top'
    },
    duration: {
        type: Number,
        default: 2000
    },
    message: {
        type: String,
        default: ''
    },
    type: {
        type: String as PropType<typeof notifyTypes[number]>,
        default: 'primary'
    },
    background: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    }
})