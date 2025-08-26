import { extend } from "@pumpkin-ui/utils"


export type tabsEmits = {
    (event: 'update:modelValue', value: string | number): void
}

export const tabsProps = extend({}, {
    modelValue: {
        type: [String, Number]
    }
})