import { extend } from "@pk-ui/utils"


export const actionSheetEmits = ['update:modelValue']


export const actionSheetProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
    },
})