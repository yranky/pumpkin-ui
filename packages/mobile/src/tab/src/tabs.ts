import { extend } from "@pumpkin-ui/utils"


export type tabsEmits = {
    (event: 'update:modelValue', value: string | number): void,
    (event: 'onChange', value: string | number, title: string): void
}

export const tabsProps = extend({}, {
    modelValue: {
        type: [String, Number]
    },
    scrollable: {
        type: Boolean,
        default: true
    }
})