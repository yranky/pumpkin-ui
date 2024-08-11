import { extend } from "@pk-ui/utils"
import { PickerItem } from "./picker-view"

export type pickerColumnEmits = {
    (event: 'onChange', value: PickerItem): void
}

export const pickerColumnProps = extend({}, {
    colItems: {
        type: Array as () => PickerItem[],
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