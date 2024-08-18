import { extend } from "@pk-ui/utils";
import { PropType } from "vue";
import { FieldRuleTrigger, IFormValueItem } from "./types";


export type formEmits = {
    (event: 'onSubmit', values: IFormValueItem[]): void
}
export const formProps = extend({}, {
    title: {
        type: String,
        default: ''
    },
    validateTrigger: {
        type: Array as PropType<FieldRuleTrigger[]>,
        default: () => ['onSubmit']
    },
    validateFirst: {
        type: Boolean,
        default: false
    }
})