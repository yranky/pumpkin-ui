import { extend } from "@pk-ui/utils";


export const dividerProps = extend({}, {
    dashed: {
        type: Boolean,
        default: false
    },
    size: {
        type: Number,
        default: 0.5
    }
});