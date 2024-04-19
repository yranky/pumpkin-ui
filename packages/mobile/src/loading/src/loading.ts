import { extend } from "@pk-ui/utils";



export const loadingTypes = ['circular','spinner'] as const
export const loadingProps = extend({}, {
    type: {
        type: String,
        values:loadingTypes,
        default: 'circular'
    },
    color: {
        type: String,
        default:''
    }
})