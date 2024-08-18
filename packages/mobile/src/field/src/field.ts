import { extend } from "@pk-ui/utils"
import { FieldRule } from "../../form"
import { PropType } from "vue"

export type fieldEmits = {
    (event: 'update:modelValue', value: string): void
    (event: 'onFocus', e: FocusEvent): void,
    (event: 'onBlur', e: FocusEvent): void,
    (event: 'onChange', value: string): void
}
const filedTypes = ['text'] as const
export const fieldProps = extend({}, {
    label: {
        type: String,
        default: ""
    },
    required: {
        type: Boolean,
        default: false
    },
    border: {
        type: Boolean,
        default: true
    },
    modelValue: {
        type: String,
        default: void 0
    },
    placeholder: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        values: filedTypes,
        default: 'text'
    },
    rules: {
        type: Array as PropType<FieldRule[]>
    }
})