import { extend } from "@pk-ui/utils";

export const switchSizeTypes = ['l', 'm', 's'] as const
export const switchEmits = ['update:modelValue']
export const switchProps = extend({}, {
    size: {
        type: String,
        values: switchSizeTypes,
        default: 'm'
    },
    modelValue: {
        type: Boolean,
        default: false
    },
})