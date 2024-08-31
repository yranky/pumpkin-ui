<template>
    <div :class="[
        bem.b(),
        bem.eqm('active', checked),
        bem.eqm('square', square),
        bem.eqm('disabled', disabled)
    ]" @click="onClick">
        <div :class="[
            bem.e('box'),
            bem.eqm('custom', !!$slots.icon)
        ]" :style="{
            '--pk-radio-size': isEmptyValue(size) ? '' : `${size}px`,
            fontSize: isEmptyValue(size) ? '' : `${size}px`,
        }">
            <slot name="icon" :checked="checked">
                <pk-icon v-if="checked" name="check-outlined" />
            </slot>
        </div>
        <div :class="[
            bem.e('label')
        ]" v-if="$slots.default || props.label">
            <slot>
                {{ props.label }}
            </slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useBem, useVModel } from '@pk-ui/use'
import PkIcon from '../../icon/src/icon.vue'
import './radio.less'
import { radioProps } from './radio'
import { computed, inject, onBeforeMount, onBeforeUnmount, ref, useSlots, watch } from 'vue'
import { IRadioProvider, radioEmits, radioProvideSymbol } from './types'
import { isEmptyValue } from '@pk-ui/utils'
defineOptions({
    name: 'PkRadio'
})
const emits = defineEmits<radioEmits>()
const bem = useBem('radio')
const props = defineProps(radioProps)
const $slots = useSlots()


const checked = useVModel(props, 'modelValue', emits)


const square = computed(() => isEmptyValue(props.square) && group.value ? (groupSquare?.value ? true : false) : (props.square || false))
const disabled = computed(() => isEmptyValue(props.disabled) && group.value ? (groupDisabled?.value ? true : false) : (props.disabled || false))
const size = computed(() => isEmptyValue(props.size) && group.value ? (isEmptyValue(groupSize?.value) ? '' : groupSize?.value) : (isEmptyValue(props.size) ? '' : props.size))
const group = ref(props.group)


const onClick = (e: MouseEvent) => {
    emits('click', e)
    //controlled by group
    if (onRadioClick && group.value) {
        onRadioClick(radioId.value)
    } else {
        if (disabled.value || checked.value) return
        checked.value = !checked.value
    }
}

const radioId = ref(Symbol())
const { square: groupSquare, size: groupSize, disabled: groupDisabled, addRadio, removeRadio, onRadioClick, onRadioUpdate } = inject<IRadioProvider>(radioProvideSymbol, {})
watch(() => checked.value, () => group.value && onRadioUpdate && onRadioUpdate(radioId.value), { immediate: true })


const toggle = (val?: boolean) => {
    if (val === void 0) checked.value = !checked.value
    else checked.value = !!val
}


onBeforeMount(() => {
    group.value && addRadio && addRadio({
        id: radioId.value,
        getChecked: () => checked.value,
        getDisabled: () => disabled.value,
        toggle,
        getLabel: () => props.label,
        getValue: () => props.value
    })
})

onBeforeUnmount(() => {
    group.value && removeRadio && removeRadio(radioId.value)
})

defineExpose({
    toggle
})
</script>