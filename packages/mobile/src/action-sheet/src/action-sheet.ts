import { extend } from "@pumpkin-ui/utils"
import { PropType } from "vue"


export const actionSheetEmits = ['update:modelValue', 'onOpen', 'onClose', 'onOpened', 'onClosed', 'onItemClick', 'onCancel']
export interface ActionSheetItem {
    name: string,
    color?: string,
    disabled?: boolean,
    loading?: boolean
}


export const actionSheetProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: void 0
    },
    actions: {
        type: Array as PropType<ActionSheetItem[]>,
        default: () => []
    },
    cancel: {
        type: Boolean,
        default: true
    },
    cancelText: {
        type: String,
        default: '取消'
    },
    title: {
        type: String,
        default: ''
    },
    subTitle: {
        type: String,
        default: ''
    },
    overlay: {
        type: Boolean,
        default: true
    },
    overlayBackgroundColor: {
        type: String,
        default: ''
    },
    closeOnPressOverlay: {
        type: Boolean,
        default: true
    },
    closeOnClickAction: {
        type: Boolean,
        default: true
    }
})