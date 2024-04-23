<template>
    <div :class="[
        bem.b()
    ]">
        <div :class="[
            bem.e('content')
        ]">
            <div :class="[
                bem.e('column')
            ]">
                <div :class="[
                    bem.e('column-item')
                ]" v-for="item in 10" :key="item">1212</div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import { pickerViewProps, pickerViewEmits } from './picker-view'
import './picker-view.less'

defineOptions({
    name: 'PkPickerView',
})

const props = defineProps(pickerViewProps)

const emits = defineEmits(pickerViewEmits)

const bem = useBem('picker-view')
</script>