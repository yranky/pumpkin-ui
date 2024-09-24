import { extend } from "@pumpkin-ui/utils"
import { PickerItem } from "../../picker-view/src/picker-view"
import { PropType } from "vue"

export type pickerEmits = {
    (event: 'update:modelValue', value: boolean): void
    (event: 'update:current', value: PickerItem['value'][] | undefined): void
    (event: 'onChange', value: PickerItem[]): void
    (event: 'onCancel'): void
    (event: 'onConfirm', value: PickerItem[]): void
}
export const pickerProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: void 0
    },
    current: {
        type: Array as PropType<PickerItem['value'][]>,
        default: void 0
    },
    backgroundColor: {
        type: String
    },
    round: {
        type: Boolean,
        default: true
    },
    closeOnPressOverlay: {
        type: Boolean,
        default: true
    }
})