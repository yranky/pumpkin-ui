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
                ]" :col-items="item" :visible-item-count="visibleItemCount" :item-height="itemHeight"
                    @change="(...args) => onPickerColumnChange(...args, index)" v-for="(item, index) in columns"
                    :key="index" />
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
import { computed, ref } from 'vue';

defineOptions({
    name: 'PkPickerView',
})

const props = defineProps(pickerViewProps)

const emits = defineEmits(pickerViewEmits)

const bem = useBem('picker-view')

const maskHeight = computed(() => {
    return (props.visibleItemCount - 1) / 2 * props.itemHeight
})

const onPickerColumnChange = (value: PickerItem, index: number) => {
    values.value[index] = value.value
    console.log('切换值', value, index)
}


const values = ref<PickerItem['value'][]>([])
const columns = computed<PickerItem[][]>(() => {
    // if (props.items.length > 0 && props.items[0] instanceof Array) return props.items
    let currentCol: PickerItem[] = props.items,
        cols: PickerItem[][] = [],
        deep = 0

    while (currentCol.length > 0) {
        cols.push(currentCol)
        const value = values.value[deep]
        if (value !== void 0) {
            const tmp = currentCol.find(col => col.value === value)
            if (tmp !== void 0) currentCol = tmp.children || []
            else currentCol = currentCol[0].children || []
        } else {
            currentCol = currentCol[0].children || []
        }
        deep++
    }

    return cols
})

</script>