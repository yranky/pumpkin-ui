<template>
    <div :class="[
        bem.b()
    ]">
        <div :class="[
            bem.e('content')
        ]">
            <div :class="[
                bem.e('wrapper')
            ]">
                <picker-column :class="[
                    bem.e('column')
                ]" ref="pickerColumnRef" :col-items="item" :visible-item-count="visibleItemCount"
                    :item-height="itemHeight" @change="(...args) => onPickerColumnChange(...args, index)"
                    v-for="(item, index) in columns" :key="index" />
            </div>
        </div>
        <div :class="[
            bem.e('mask'),
            bem.m('top')
        ]" :style="{
            height: maskHeight + 'px'
        }">

        </div>
        <div :class="[
            bem.e('mask'),
            bem.m('bottom')
        ]" :style="{
            height: maskHeight + 'px'
        }">

        </div>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import { pickerViewProps, pickerViewEmits, PickerItem } from './picker-view'
import PickerColumn from './picker-column.vue'
import './picker-view.less'
import { computed, nextTick, readonly, ref, watch } from 'vue';

defineOptions({
    name: 'PkPickerView',
})

const props = defineProps(pickerViewProps)

const emits = defineEmits(pickerViewEmits)

const bem = useBem('picker-view')

const maskHeight = computed(() => {
    return (props.visibleItemCount - 1) / 2 * props.itemHeight
})

const pickerColumnRef = ref<InstanceType<typeof PickerColumn>[]>()

const onPickerColumnChange = (value: PickerItem, index: number) => {
    if (value.value === values.value[index]) return

    values.value[index] = value.value
    //update value and children view
    updateValues(index + 1)
}

const checkIsControlled = () => {
    return !(props.items.length > 0 && props.items[0] instanceof Array)
}

const updateValues = (startIndex: number = 0, emit: boolean = true) => {
    //delete outrange values
    values.value.splice(columns.value.length, columns.value.length)

    const items = columns.value.map((children, index) => {
        const itemIndex = children.findIndex(col => col.value === values.value[index])
        if (index >= startIndex) {
            if (itemIndex > 0) pickerColumnRef.value?.[index]?.setOffetByIndex(itemIndex)
            else {
                pickerColumnRef.value?.[index]?.setOffetByIndex(0)
                //reset out children value
                values.value[index] = children[0].value
            }
        }
        return readonly(itemIndex > 0 ? children[itemIndex] : children[0])
    })
    //update v-model
    if (props.modelValue !== void 0) props.modelValue.splice(0, props.modelValue.length, ...items.map(item => item.value))
    //dispatch change event
    emit && emits('onChange', items)

    return items
}

const values = ref<PickerItem['value'][]>([])

watch(() => props.modelValue, (value) => {
    nextTick(() => {
        //check need update values and view
        if (value && value.length === values.value.length && value.every((val, index) => val === values.value[index])) return
        //delete outrange values
        value && values.value.splice(value.length, values.value.length)
        //update values
        value?.forEach((val, index) => {
            values.value[index] = val
        })
        //update view
        updateValues(0, false)
    })
}, { immediate: true, deep: true })


const columns = computed<PickerItem[][]>(() => {
    //if not controlled
    if (!checkIsControlled()) return props.items as PickerItem[][]

    //if controlled,need convert
    let currentCol: PickerItem[] = props.items as PickerItem[],
        cols: PickerItem[][] = [],
        deep = 0

    while (currentCol.length > 0) {
        cols.push(currentCol)
        const value = values.value[deep]
        if (value !== void 0) {
            const tmp = currentCol.find(col => col.value === value)
            if (tmp !== void 0) currentCol = tmp.children || []
            else currentCol = currentCol[0].children || []
        } else currentCol = currentCol[0].children || []
        deep++
    }

    return cols
})

</script>