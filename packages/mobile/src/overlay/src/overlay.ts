import { extend } from "@pk-ui/utils";


export const overlayEmits = ['update:modelValue', 'click']

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
    },
    zIndex: {
        type: Number
    }
})