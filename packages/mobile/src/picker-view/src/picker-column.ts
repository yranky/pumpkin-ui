import { extend } from "@pk-ui/utils"
import { PickerItem } from "./picker-view"

export const pickerColumnEmits = []
export const pickerColumnProps = extend({}, {
    colItems: {
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