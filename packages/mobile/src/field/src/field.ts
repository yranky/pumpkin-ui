import { extend } from "@pk-ui/utils";


const filedTypes = ['text'] as const
export const fieldProps = extend({}, {
    title: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        values: filedTypes,
        default: 'text'
    }
})