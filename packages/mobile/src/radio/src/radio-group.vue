<template>
    <div :class="[
        bem.b(),
        bem.eqm('vertical', props.vertical)
    ]">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import './radio-group.less'
import { computed, provide, ref, toRefs, watch } from 'vue'
import { radioGroupProps } from './radio-group'
import { IRadioExposeToGroup, IRadioProvider, radioGroupEmits, radioProvideSymbol } from './types'

defineOptions({
    name: 'PkRadioGroup'
})

const bem = useBem('radio-group')
const props = defineProps(radioGroupProps)
const emits = defineEmits<radioGroupEmits>()
const { size, square, disabled } = toRefs(props)

const radios = ref<IRadioExposeToGroup[]>([])

const addRadio = (radio: IRadioExposeToGroup) => {
    radios.value.push(radio as IRadioExposeToGroup)

    //init radio
    if (value.value !== void 0 && radio.getValue() === value.value) radio.toggle(true)
}
const removeRadio = (radioId: symbol) => {
    radios.value = radios.value.filter(radio => radio.id !== radioId)
}

const onRadioClick = (radioId: symbol) => {
    const radio = getRadioExpose(radioId)
    if (!radio) return
    if (radio.getDisabled() || radio.getChecked()) return
    radios.value.forEach(r => r.getChecked() && r.toggle(false))
    radio.toggle(true)
}

const getRadioExpose = (radioId: symbol) => {
    return radios.value.find(radio => radio.id === radioId)
}

const onRadioUpdate = (radioId: symbol) => {
    const radio = getRadioExpose(radioId)
    if (!radio) return
    if (radio.getChecked()) radios.value.forEach(r => r.id !== radioId && r.toggle(false))
    const currentChecked = radios.value.find(r => r.getChecked())
    if (currentChecked) {
        const val = currentChecked.getValue()
        val !== value.value && emits('onChange', value.value)
        value.value = val
    }
}

provide<IRadioProvider>(radioProvideSymbol, {
    size: size,
    square: square,
    disabled: disabled,
    addRadio,
    removeRadio,
    onRadioClick,
    onRadioUpdate
})

const _value = ref<boolean | string | number>()
const value = computed({
    get() {
        if (props.modelValue === void 0) return _value.value
        return props.modelValue
    },
    set(val) {
        if (props.modelValue === void 0) _value.value = val
        else val !== void 0 && emits('update:modelValue', val)
    }
})
//update radio checked
watch(() => value.value, (val) => val !== void 0 && radios.value.forEach(r => r.getValue() === val && r.toggle(true)))

</script>