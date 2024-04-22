<template>
    <popup v-model="show" backgroundColor="transparent" position="bottom" overflowY="visible">

    </popup>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import { computed } from 'vue'
import { pickerEmits, pickerProps } from './picker'
import Popup from '../../popup/src/popup.vue'
import './picker.less'

defineOptions({
    name: 'PkPicker',
})

const props = defineProps(pickerProps)

const emits = defineEmits(pickerEmits)

const bem = useBem('picker')

const show = computed<boolean>({
    get() {
        return props.modelValue
    },
    set(val) {
        emits("update:modelValue", val)
    }
})
</script>