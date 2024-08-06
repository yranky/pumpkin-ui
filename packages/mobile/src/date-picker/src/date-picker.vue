<template>
    <picker v-model="_show" v-model:current="current" :items="dateColumns" v-bind="$attrs" />
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import { computed, ref, useAttrs } from 'vue'
import { pickerEmits, pickerProps } from './date-picker'
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

const dateColumns = ref<PickerItem[][]>([])
const current = ref<PickerItem['value'][]>([])
const updateColumns = () => {
    const min = DateUtils(props.min || DateUtils().add(-15, 'year'))
    const max = DateUtils(props.max || DateUtils().add(15, 'year'))
    const columns = [];

    if (props.type.includes('year') || props.type.includes('Y')) {
        const year = Array(max.year() - min.year() + 1).fill(0).map((_, index) => {
            return {
                label: `${min.year() + index}`,
                value: min.year() + index
            }
        })

        columns.push(year)
    }

    dateColumns.value = columns
}
updateColumns()

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