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
import { provide, ref, toRefs } from 'vue'
import { checkboxGroupEmits, checkboxProvideSymbol, ICheckboxExposeToGroup, ICheckboxGroupToggleAll, ICheckboxProvider, ICheckboxValue } from './types'
import { checkboxGroupProps } from './checkbox-group'

defineOptions({
    name: 'PkCheckboxGroup'
})

const bem = useBem('checkbox-group')
const props = defineProps(checkboxGroupProps)
const emits = defineEmits<checkboxGroupEmits>()
const { size, square, disabled, max } = toRefs(props)

const checkboxs = ref<ICheckboxExposeToGroup[]>([])

const addCheckbox = (checkbox: ICheckboxExposeToGroup) => {
    checkboxs.value.push(checkbox as ICheckboxExposeToGroup)
}
const removeCheckbox = (checkboxId: symbol) => {
    checkboxs.value = checkboxs.value.filter(checkbox => checkbox.id !== checkboxId)
}

const onCheckboxClick = (checkboxId: symbol) => {
    const checkbox = getCheckboxExpose(checkboxId)
    if (!checkbox) return
    if (checkbox.getDisabled()) return
    if (typeof props.max === 'number' && checkboxs.value.filter(checkbox => checkbox.getChecked()).length >= props.max && !checkbox.getChecked()) return emits('onLimit', getValues())
    checkbox.toggle()
    emits('onChange', getValues())
}

const getCheckboxExpose = (checkboxId: symbol) => {
    return checkboxs.value.find(checkbox => checkbox.id === checkboxId)
}

const getValues = (): ICheckboxValue[] => {
    return checkboxs.value.map(i => {
        return {
            label: i.getLabel(),
            value: i.getValue(),
            checked: i.getChecked()
        }
    })
}

const toggleAll = (options?: ICheckboxGroupToggleAll | boolean) => {
    if (typeof options === 'boolean') checkboxs.value.forEach(i => i.toggle(options))
    else if (typeof options === 'object') {
        checkboxs.value.forEach(i => {
            if (i.getDisabled() && options.skipDisabled) return
            if (options.checked === void 0) i.toggle()
            else i.toggle(options.checked)
        })
    } else checkboxs.value.forEach(i => i.toggle())
}

provide<ICheckboxProvider>(checkboxProvideSymbol, {
    size: size,
    square: square,
    disabled: disabled,
    max: max,
    addCheckbox,
    removeCheckbox,
    onCheckboxClick
})

defineExpose({
    getValues,
    toggleAll
})
</script>