import { extend } from "@pk-ui/utils";



export const loadingProps = extend({}, {
    type: {
        type: String,
        default: 'spinner'
    }
})