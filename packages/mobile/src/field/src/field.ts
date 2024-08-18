import { extend } from "@pk-ui/utils"
import { FieldRule } from "../../form"
import { PropType } from "vue"

export type fieldEmits = {
    (event: 'update:modelValue', value: string): void
    (event: 'onFocus', e: FocusEvent): void,
    (event: 'onBlur', e: FocusEvent): void,
    (event: 'onChange', value: string): void,
    (event: 'onClear'): void
}
const fieldTypes = ['text'] as const
const fieldInputAlign = ['left', 'center', 'right'] as const
const fieldLabelAlign = ['left', 'center', 'right'] as const
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
        values: fieldTypes,
        default: 'text'
    },
    rules: {
        type: Array as PropType<FieldRule[]>
    },
    readonly: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    isLink: {
        type: Boolean,
        default: false
    },
    inputAlign: {
        type: String as PropType<typeof fieldInputAlign[number]>,
    },
    labelAlign: {
        type: String as PropType<typeof fieldLabelAlign[number]>
    },
    vertical: {
        type: Boolean,
        default: false
    },
    clearable: {
        type: Boolean,
        default: true
    }
})