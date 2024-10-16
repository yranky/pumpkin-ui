import { extend } from "@pumpkin-ui/utils"
import { PropType } from "vue"
import { fieldClearTrigger, fieldInputAlign } from "../../field/src/field"


export type searchEmits = {
    (event: 'update:modelValue', value: string): void,
    (event: 'click', e: MouseEvent): void,
    (event: 'onSearch', value: string): void,
    (event: 'onClear'): void,
    (event: 'onChange', e: string): void,
    (event: 'onBlur', e: FocusEvent): void,
    (event: 'onFocus', e: FocusEvent): void,
    (event: 'onClickLeftSearchIcon', e: MouseEvent): void
}

export const searchProps = extend({}, {
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    },
    readonly: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    inputAlign: {
        type: String as PropType<typeof fieldInputAlign[number]>,
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