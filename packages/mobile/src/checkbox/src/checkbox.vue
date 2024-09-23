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
            '--pk-checkbox-size': isEmptyValue(size) ? '' : `${size}px`,
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
import './checkbox.less'
import { checkboxProps } from './checkbox'
import { computed, inject, onBeforeUnmount, ref, useSlots } from 'vue'
import { checkboxEmits, checkboxProvideSymbol, ICheckboxProvider } from './types'
import { isEmptyValue } from '@pk-ui/utils'


const emits = defineEmits<checkboxEmits>()
const bem = useBem('checkbox')
const props = defineProps(checkboxProps)
const $slots = useSlots()

const checked = useVModel(props, 'modelValue', emits)

const square = computed(() => isEmptyValue(props.square) && group.value ? (groupSquare?.value ? true : false) : (props.square || false))
const disabled = computed(() => isEmptyValue(props.disabled) && group.value ? (groupDisabled?.value ? true : false) : (props.disabled || false))
const size = computed(() => isEmptyValue(props.size) && group.value ? (isEmptyValue(groupSize?.value) ? '' : groupSize?.value) : (isEmptyValue(props.size) ? '' : props.size))
const group = ref(props.group)


const onClick = (e: MouseEvent) => {
    emits('click', e)
    const currentValue = checked.value

    //controlled by group
    if (onCheckboxClick && group.value) {
        onCheckboxClick(checkboxId.value)
        if (currentValue !== checked.value) emits('onChange', checked.value, {
            label: props.label,
            value: props.value,
            checked: checked.value
        })
    } else {
        if (disabled.value) return
        checked.value = !checked.value
        emits('onChange', checked.value, {
            label: props.label,
            value: props.value,
            checked: checked.value
        })
    }
}

const checkboxId = ref(Symbol())
const { square: groupSquare, size: groupSize, disabled: groupDisabled, addCheckbox, removeCheckbox, onCheckboxClick } = inject<ICheckboxProvider>(checkboxProvideSymbol, {})


const toggle = (val?: boolean) => {
    if (val === void 0) checked.value = !checked.value
    else checked.value = !!val
}

group.value && addCheckbox && addCheckbox({
    id: checkboxId.value,
    getChecked: () => checked.value,
    getDisabled: () => disabled.value,
    toggle,
    getLabel: () => props.label,
    getValue: () => props.value
})

onBeforeUnmount(() => {
    group.value && removeCheckbox && removeCheckbox(checkboxId.value)
})

defineExpose({
    toggle
})
</script>