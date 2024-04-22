import { extend } from "@pk-ui/utils"


export const pickerEmits = ['update:modelValue']
export const pickerProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
    },
})