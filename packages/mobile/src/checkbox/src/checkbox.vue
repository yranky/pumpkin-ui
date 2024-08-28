<template>
    <div :class="[
        bem.b(),
        bem.eqm('active', checked),
        bem.eqm('square', square),
        bem.eqm('disabled', disabled)
    ]" @click="onClick">
        <div :class="[
            bem.e('box')
        ]">
            <slot name="icon" v-if="checked">
                <pk-icon name="check-outlined" />
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
import { useBem } from '@pk-ui/use'
import PkIcon from '../../icon/src/icon.vue'
import './checkbox.less'
import { checkboxProps } from './checkbox'
import { computed, inject, ref, useSlots, watch } from 'vue'
import { checkboxEmits, checkboxProvideSymbol, ICheckboxProvider } from './types'
import { isEmptyValue } from '@pk-ui/utils'
defineOptions({
    name: 'PkCheckbox'
})
const emits = defineEmits<checkboxEmits>()
const bem = useBem('checkbox')
const props = defineProps(checkboxProps)
const $slots = useSlots()

const _checked = ref<boolean>(false)
const checked = computed<boolean>({
    set(val) {
        if (props.modelValue === void 0) _checked.value = val
        else emits('update:modelValue', val)
    },
    get() {
        if (props.modelValue === void 0) return _checked.value
        return props.modelValue
    }
})
const square = computed(() => isEmptyValue(props.square) ? (groupSquare?.value ? true : false) : (props.square || false))
const disabled = computed(() => isEmptyValue(props.disabled) ? (groupDisabled?.value ? true : false) : (props.disabled || false))


const onClick = (e: MouseEvent) => {
    if (disabled.value) return
    checked.value = !checked.value
    emits('onChange', checked.value)
}

const { square: groupSquare, size: groupSize, disabled: groupDisabled, max: groupMax } = inject<ICheckboxProvider>(checkboxProvideSymbol, {})
</script>