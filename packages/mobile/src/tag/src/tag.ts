import { extend } from "@pk-ui/utils"
import { PropType } from "vue"

export const tagTypes = ['primary', 'hazy', 'ghost'] as const
export const tagSizeTypes = ['l', 'm', 's'] as const
export type tagEmits = {
    (event: 'click', e: MouseEvent): void
    (event: 'onClose'): void
    (event: 'update:modelValue', value: boolean): void
}
export const tagProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: true
    },
    size: {
        type: String as PropType<typeof tagSizeTypes[number]>,
        values: tagSizeTypes,
        default: 'm'
    },
    type: {
        type: String as PropType<typeof tagTypes[number]>,
        values: tagTypes,
        default: 'primary'
    },
    closable: {
        type: Boolean,
        default: false
    },
    background: {
        type: String,
        default: ''
    },
    textColor: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: "close-outlined"
    },
    classPrefix: {
        type: String
    },
})