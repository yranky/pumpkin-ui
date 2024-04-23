import { extend } from "@pk-ui/utils"


export interface PickerItem{
    label: String|Number,
    value: String | Number,
    children?: PickerItem[]
}

export const pickerViewEmits = []
export const pickerViewProps = extend({}, {
    items: {
        type: Array as () => PickerItem[],
        default: () => []
    },
    visibleItemCount: {
        type: Number,
        default:5
    },
    itemHeight: {
        type: Number,
        default:50
    }
})