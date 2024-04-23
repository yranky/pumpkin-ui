import { extend } from "@pk-ui/utils"


export interface PickerItem{
    label: String|Number,
    value: String | Number,
    children?: PickerItem[]
}

export const pickerEmits = ['update:modelValue']
export const pickerProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: false
    },
    items: {
        type: Array as () => PickerItem[],
        default: () => []
    }
})