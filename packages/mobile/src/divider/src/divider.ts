import { extend } from "@pk-ui/utils";


export const dividerContentPositions = ['left', 'center', 'right'] as const
export const dividerProps = extend({}, {
    dashed: {
        type: Boolean,
        default: false
    },
    size: {
        type: Number,
        default: 0.5
    },
    borderColor: {
        type: String
    },
    color: {
        type: String
    },
    contentPosition: {
        type: String,
        values: dividerContentPositions,
        default: 'center'
    }
});