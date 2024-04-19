import { extend } from "@pk-ui/utils"
import { PropType } from "vue"


export const actionSheetEmits = ['update:modelValue']
export interface ActionSheetItem{
    name: String,
    color?: String,
    disabled?: Boolean,
    loading?: Boolean
}


export const actionSheetProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
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
        default:''
    },
    subtitle: {
        type: String,
        default:''
    }
})