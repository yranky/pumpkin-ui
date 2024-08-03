import { extend } from "@pk-ui/utils"


export interface PickerItem {
    label: string | number,
    value: string | number,
    children?: PickerItem[]
}

export const pickerViewEmits = ['onChange']
export const pickerViewProps = extend({}, {
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