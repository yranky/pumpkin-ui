import { extend } from "@pk-ui/utils"

export type pickerEmits = {
    (event: 'update:modelValue', value: boolean): void
}

const type = ['year', 'month', 'day', 'hour', 'minute', 'second', 'Y', 'M', 'D', 'H', 'm', 's'] as const
type TypeMap = typeof type[number][]

export const pickerProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: void 0
    },
    min: {
        type: [String, Date],
        default: void 0
    },
    max: {
        type: [String, Date],
        default: void 0
    },
    type: {
        type: Array as () => TypeMap,
        default: () => (['year', 'month', 'day'])
    }
})