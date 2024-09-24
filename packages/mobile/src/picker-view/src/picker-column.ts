import { extend } from "@pumpkin-ui/utils"
import { PickerItem } from "./picker-view"
import { PropType } from "vue"

export type pickerColumnEmits = {
    (event: 'onChange', value: PickerItem): void
}

export const pickerColumnProps = extend({}, {
    colItems: {
        type: Array as PropType<PickerItem[]>,
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