<template>
    <picker ref="pickerRef" v-model="_show" v-model:current="current" :before-update-emits-hooks="true"
        :items="dateColumns" v-bind="$attrs" @on-change="onChange" @onBeforeUpdateEmits="onBeforeUpdateEmits" />
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import { computed, nextTick, ref, useAttrs } from 'vue'
import { checkValueIsInColumns, DatePickerSimpleType, getColumns, getCurrentSelectDateItemByColumnsAndType, getValueByDate, pickerEmits, pickerProps, sortDateType } from './date-picker'
import picker from '../../picker/src/picker.vue'
import './date-picker.less'
import { PickerItem } from '../../picker-view/src/picker-view'
import { DateUtils } from '@pk-ui/utils'

defineOptions({
    name: 'PkDatePicker',
})

const props = defineProps(pickerProps)

const emits = defineEmits<pickerEmits>()

const $attrs = useAttrs()

const bem = useBem('date-picker')

const __show = ref<boolean>(false)

const pickerRef = ref<InstanceType<typeof picker>>()

const dateColumns = ref<PickerItem[][]>([])
const current = ref<PickerItem['value'][]>([])
const updateColumns = (values?: PickerItem['value'][]) => {
    const newColumns = getColumns({
        min: props.min,
        max: props.max,
        type: props.type,
        formatter: props.formatter,
        filter: props.filter,
        current: getCurrentSelectDateItemByColumnsAndType(values || current.value, props.type)
    })
    dateColumns.value = newColumns
}

const updateDefaultValue = () => {
    const date = DateUtils(props.current || DateUtils())
    const isInColumns = checkValueIsInColumns(props.type, date, dateColumns.value)
    if (isInColumns) current.value = getValueByDate(props.type, date)
    else current.value = dateColumns.value.map((column) => column[0] ? column[0].value : '')
}
updateColumns()
// set Default Value
updateDefaultValue()

const onChange = (values: PickerItem[]) => {
    emits('onChange', values)
}

const correctValues = (nextValues: PickerItem['value'][], newColumns: PickerItem[][]): PickerItem['value'][] => {
    const correctValues: PickerItem['value'][] = []
    newColumns.forEach((col, index) => {
        const item = col.find(i => i.value === nextValues[index])
        // check new value is in new columns
        if (!item) {
            // get the nearest value. if the month is 31 days ,change to the month which has 30 days,we need to correct.
            const values = newColumns[index].map(i => i.value) as number[]
            let nearestValue = values[0]
            for (let i = 1; i < values.length; i++) {
                if (Math.abs(values[i] - (nextValues[index] as number)) < Math.abs((nextValues[index] as number) - nearestValue)) {
                    nearestValue = values[i]
                }
            }
            correctValues[index] = nearestValue
        } else correctValues[index] = nextValues[index]
    })
    return correctValues
}

const onBeforeUpdateEmits = (updateValues: (columns: PickerItem['value'][]) => void, updateScroll: Function, values: PickerItem['value'][]) => {
    //update columns
    updateColumns(values)
    //correct values and update picker view's values
    updateValues(correctValues(values, dateColumns.value))
    // then update scroll
    nextTick(() => {
        updateScroll()
    })
}

const _show = computed<boolean>({
    get() {
        if (props.modelValue !== void 0) return props.modelValue
        return __show.value
    },
    set(val) {
        if (props.modelValue !== void 0) return emits("update:modelValue", val)
        __show.value = val
    }
})

const updateShow = (val: boolean = true) => _show.value = val

defineExpose({
    updateShow
})

</script>