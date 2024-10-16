import { extend } from "@pumpkin-ui/utils"
import { FieldRule } from "../../form"
import { PropType } from "vue"

export type fieldEmits = {
    (event: 'update:modelValue', value: string | number): void
    (event: 'onFocus', e: FocusEvent): void,
    (event: 'onBlur', e: FocusEvent): void,
    (event: 'onChange', value: string | number): void,
    (event: 'onClear'): void,
    (event: 'click', e: MouseEvent): void
}
// const fieldTypes = ['text', 'color', 'date', 'datetime-local', 'email', 'hidden', 'month', 'number', 'password', 'tel', 'time', 'url', 'week', 'button', 'checkbox', 'file', 'image', 'radio', 'range', 'reset', 'search', 'submit'] as const
const fieldTypes = ['text', 'color', 'date', 'datetime-local', 'email', 'hidden', 'month', 'number', 'password', 'tel', 'time', 'url', 'week'] as const
export const fieldInputAlign = ['left', 'center', 'right'] as const
const fieldLabelAlign = ['left', 'center', 'right'] as const
export const fieldClearTrigger = ['always', 'auto'] as const
export const fieldProps = extend({}, {
    modelValue: {
        type: [String, Number],
        default: ''
    },
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
    placeholder: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    },
    type: {
        type: String as PropType<typeof fieldTypes[number]>,
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
    validateAutoTrim: {
        type: Boolean,
        default: true
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
    },
    clearTrigger: {
        type: String as PropType<typeof fieldClearTrigger[number]>,
        values: fieldClearTrigger,
        default: 'auto'
    },
    rows: {
        type: Number,
        default: 1,
        validator: (value: number) => value >= 1
    },
    autosize: {
        type: Boolean,
        default: false
    },
    // https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input
    max: {
        type: Number
    },
    min: {
        type: Number
    },
    maxlength: {
        type: Number
    },
    minlength: {
        type: Number
    },
    autocomplete: {
        type: String,
        default: ''
    }
})