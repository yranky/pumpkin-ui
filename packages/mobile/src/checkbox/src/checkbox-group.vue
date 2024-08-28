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
import './checkbox-group.less'
import { provide, toRefs } from 'vue'
import { checkboxProvideSymbol, ICheckboxProvider } from './types'
import { checkboxGroupProps } from './checkbox-group'

defineOptions({
    name: 'PkCheckboxGroup'
})

const bem = useBem('checkbox-group')
const props = defineProps(checkboxGroupProps)
const { size, square, disabled, max } = toRefs(props)

provide<ICheckboxProvider>(checkboxProvideSymbol, {
    size: size,
    square: square,
    disabled: disabled,
    max: max
})
</script>