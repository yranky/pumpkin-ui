import { FieldRule, FieldRuleTrigger } from "@pk-ui/mobile"

export interface IFieldExposeToForm {
    getName: () => string,
    getValue: () => any,
    getRules: () => FieldRule[] | void
    setValidateMessage: (info: string) => void
    getLabel: () => string
    fieldId: Symbol
}

export const formProvideSymbol = Symbol('formProvide')

export interface IFormProvide {
    addField: (field: IFieldExposeToForm) => void,
    removeField: (fieldId: Symbol) => void,
    triggerEmit: (trigger: FieldRuleTrigger, fieldId: Symbol) => void
}