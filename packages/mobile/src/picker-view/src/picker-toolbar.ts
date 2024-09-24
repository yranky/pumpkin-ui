import { extend } from "@pumpkin-ui/utils"

export const pickerToolbarEmits = ['onCancel', 'onConfirm']
export const pickerToolbarProps = extend({}, {
    title: {
        type: String,
        default: ''
    },
    cancelText: {
        type: String,
        default: '取消'
    },
    confirmText: {
        type: String,
        default: '确定'
    }
})