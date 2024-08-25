import { extend } from "@pk-ui/utils";
import { PropType } from "vue";
import { FieldRuleTrigger, IFormValidateErrorResult, IFormValueItem } from "./types";


export type formEmits = {
    (event: 'onSubmit', values: IFormValueItem[]): void,
    (event: 'onSubmitFailed', error: IFormValidateErrorResult[]): void,
    (event: 'onSubmitValidate'): void,
    (event: 'onSubmitValidateComplete', errors: IFormValidateErrorResult[]): void
}
export const formProps = extend({}, {
    validateTrigger: {
        type: Array as PropType<FieldRuleTrigger[]>,
        default: () => ['onSubmit']
    },
    validateFirst: {
        type: Boolean,
        default: false
    },
    showErrorMessage: {
        type: Boolean,
        default: true
    }
})