import { Ref } from "vue"

export type radioEmits = {
    (event: 'update:modelValue', value: boolean): void
    (event: 'click', e: MouseEvent): void
}

export type radioGroupEmits = {
    (event: 'update:modelValue', value: boolean | string | number): void
    (event: 'onChange', value?: boolean | string | number): void
}



export const radioProvideSymbol = Symbol()
export interface IRadioProvider {
    size?: Ref<number | undefined>,
    square?: Ref<boolean | undefined>,
    disabled?: Ref<boolean | undefined>,
    addRadio?: (radio: IRadioExposeToGroup) => void,
    removeRadio?: (radioId: symbol) => void,
    onRadioClick?: (radioId: symbol) => void,
    onRadioUpdate?: (radioId: symbol) => void
}


export interface IRadioExposeToGroup {
    id: symbol,
    getChecked: () => boolean,
    getDisabled: () => boolean,
    getLabel: () => string,
    getValue: () => string | number | boolean | undefined,
    toggle: (val: boolean, emit?: boolean) => void
}