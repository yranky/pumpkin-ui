import { extend } from "@pk-ui/utils"
import { PropType } from "vue"


export interface PickerItem {
    label: string | number,
    value: string | number,
    children?: PickerItem[]
}

export type pickerViewEmits = {
    (event: 'onChange', value: PickerItem[]): void,
    (event: 'update:modelValue', value: PickerItem['value'][]): void,
    (event: 'onBeforeUpdateEmits', updateValues: (columns: PickerItem['value'][]) => void, updateScroll: Function, values: PickerItem['value'][]): void
}
export const pickerViewProps = extend({}, {
    modelValue: {
        type: Array as PropType<PickerItem['value'][]>,
        default: void 0
    },
    items: {
        type: Array as PropType<PickerItem[] | PickerItem[][]>,
        default: () => []
    },
    visibleItemCount: {
        type: Number,
        default: 5
    },
    itemHeight: {
        type: Number,
        default: 50
    },
    beforeUpdateEmitsHooks: {
        type: Boolean,
        default: false
    }
})