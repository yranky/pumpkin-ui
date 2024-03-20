<template>
    <component :is="tag" :class="[
        bem.b(),
        bem.m(type),
        bem.m(size),
        bem.eqm('round', round),
        bem.eqm('squre', squre),
        bem.eqm('block', block)
    ]" :type="nativeType">
        <span :class="[
        bem.e('text')
    ]">{{ text }}</span>
    </component>
</template>
<script lang="ts" setup>
import { ButtonTypes, buttonProps } from './button'
import { useBem } from '@pk-ui/use'
import './button.less'

defineOptions({
    name: 'PkButton',
})

const props = defineProps(buttonProps)

const bem = useBem('button')

</script>
