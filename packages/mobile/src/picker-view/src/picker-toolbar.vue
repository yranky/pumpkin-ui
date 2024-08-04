<template>
    <div :class="[
        bem.b()
    ]">
        <div :class="[
            bem.e('left')
        ]" @click="emits('onCancel')">
            {{ props.cancelText }}
        </div>
        <div :class="[
            bem.e('title')
        ]">
            {{ props.title }}
        </div>
        <div :class="[
            bem.e('right')
        ]" @click="emits('onConfirm')">
            {{ props.confirmText }}
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import './picker-toolbar.less'
import { pickerToolbarEmits, pickerToolbarProps } from './picker-toolbar'

defineOptions({
    name: 'PkPickerView',
})

const props = defineProps(pickerToolbarProps)

const emits = defineEmits(pickerToolbarEmits)

const bem = useBem('picker-toolbar')

</script>