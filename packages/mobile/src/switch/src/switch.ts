import { extend } from "@pk-ui/utils";

export const switchSizeTypes = ['l', 'm', 's'] as const
export const switchProps = extend({}, {
    size: {
        type: String,
        values: switchSizeTypes,
        default: 'm'
    },
})