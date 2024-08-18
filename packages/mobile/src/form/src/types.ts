export type FieldRuleTrigger = 'onBlur' | 'onChange' | 'onSubmit'

export type FieldRule = {
    pattern?: RegExp,
    trigger?: FieldRuleTrigger | FieldRuleTrigger[],
    message?: string,
    required?: boolean,
    validator?: (rule: FieldRule, value: any) => Promise<boolean> | boolean,
    formatter?: (value: any) => Promise<any> | any
}


export type IFormValidateErrorResult = {
    name: string,
    message: string,
    label: string,
    value: any
}

export type IFormValueItem = {
    name: string,
    label: string
    value: any,
}