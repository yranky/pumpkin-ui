import { Ref } from "vue"

export type checkboxEmits = {
    (event: 'update:modelValue', value: boolean): void
    (event: 'onChange', value: boolean): void
}



export const checkboxProvideSymbol = Symbol()
export interface ICheckboxProvider {
    size?: Ref<number | undefined>,
    square?: Ref<boolean | undefined>,
    disabled?: Ref<boolean | undefined>,
    max?: Ref<number | undefined>
}