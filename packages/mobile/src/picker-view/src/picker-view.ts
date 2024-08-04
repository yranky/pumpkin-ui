import { extend } from "@pk-ui/utils"


export interface PickerItem {
    label: string | number,
    value: string | number,
    children?: PickerItem[]
}

export type pickerViewEmits = {
    (event: 'onChange', value: PickerItem[]): void,
    (event: 'update:modelValue', value: PickerItem['value'][]): void
}
export const pickerViewProps = extend({}, {
    modelValue: {
        type: Array as () => PickerItem['value'][],
        default: void 0
    },
    items: {
        type: Array as () => PickerItem[] | PickerItem[][],
        default: () => []
    },
    visibleItemCount: {
        type: Number,
        default: 5
    },
    itemHeight: {
        type: Number,
        default: 50
    }
})