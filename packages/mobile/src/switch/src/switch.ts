import { extend } from "@pumpkin-ui/utils"
import { loadingTypes } from "../../loading/src/loading"
import { PropType } from "vue"

export const switchSizeTypes = ['l', 'm', 's'] as const
export const switchEmits = ['update:modelValue', 'click', 'onChange']
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
    },
    loadingColor: {
        type: String
    },
    background: {
        type: String
    },
    inactiveBackground: {
        type: String
    },
    beforeChange: {
        type: Function as PropType<(oldValue: boolean, newValue: boolean) => boolean | Promise<boolean>>
    }
})