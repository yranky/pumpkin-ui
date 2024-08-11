import { extend } from "@pk-ui/utils";
import { loadingTypes } from "../../loading/src/loading";

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
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    loadingSize: {
        type: String,
        default: ''
    },
    loadingType: {
        type: String,
        values: loadingTypes,
        default: 'circular'
    }
})