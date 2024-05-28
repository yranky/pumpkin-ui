<template>
    <div :class="[
        bem.b()
    ]">
        <div :class="[
            bem.e('content')
        ]">
            <picker-column :col-items="items" :visible-item-count="visibleItemCount" :item-height="itemHeight" />
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
import { pickerViewProps, pickerViewEmits } from './picker-view'
import pickerColumn from './picker-column.vue'
import './picker-view.less'
import { computed } from 'vue';

defineOptions({
    name: 'PkPickerView',
})

const props = defineProps(pickerViewProps)

const emits = defineEmits(pickerViewEmits)

const bem = useBem('picker-view')

const maskHeight = computed(() => {
    return (props.visibleItemCount - 1) / 2 * props.itemHeight
})
</script>