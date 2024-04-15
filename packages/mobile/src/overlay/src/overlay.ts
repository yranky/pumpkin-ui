import { extend } from "@pk-ui/utils";


export const overlayEmits = ['update:modelValue']

export const overlayProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
    },
    backgroundColor: {
        type: String,
        default: ''
    },
    closeOnPress: {
        type: Boolean,
        default: true
    }
})