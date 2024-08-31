import { Ref } from "vue"

export type checkboxEmits = {
    (event: 'update:modelValue', value: boolean): void
    (event: 'onChange', checked: boolean, value: ICheckboxValue): void
    (event: 'click', e: MouseEvent): void
}

export type ICheckboxValue = {
    checked: boolean,
    value?: boolean | string | number,
    label: string
}
export type checkboxGroupEmits = {
    (event: 'onChange', value: ICheckboxValue[]): void
    (event: 'onLimit', value: ICheckboxValue[]): void
}



export const checkboxProvideSymbol = Symbol()
export interface ICheckboxProvider {
    size?: Ref<number | undefined>,
    square?: Ref<boolean | undefined>,
    disabled?: Ref<boolean | undefined>,
    max?: Ref<number | undefined>,
    addCheckbox?: (checkbox: ICheckboxExposeToGroup) => void,
    removeCheckbox?: (checkboxId: symbol) => void,
    onCheckboxClick?: (checkboxId: symbol) => void
}


export interface ICheckboxExposeToGroup {
    id: symbol,
    getChecked: () => boolean,
    getDisabled: () => boolean,
    getLabel: () => string,
    getValue: () => string | number | boolean | undefined,
    toggle: (val?: boolean) => void
}



export interface ICheckboxGroupToggleAll {
    skipDisabled?: boolean,
    checked?: boolean
}