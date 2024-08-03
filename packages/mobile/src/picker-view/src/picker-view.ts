import { extend } from "@pk-ui/utils"


export interface PickerItem {
    label: string | number,
    value: string | number,
    children?: PickerItem[]
}

export const pickerViewEmits = ['onChange', 'update:modelValue']
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