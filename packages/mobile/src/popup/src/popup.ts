import { extend } from "@pk-ui/utils";


export const popupEmits = ['update:modelValue']

export const popupProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
    }
})