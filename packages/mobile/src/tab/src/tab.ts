import { extend } from "@pumpkin-ui/utils"

export const tabProps = extend({}, {
    title: {
        type: String,
        default: ''
    },
    name: {
        type: [String, Number]
    }
})