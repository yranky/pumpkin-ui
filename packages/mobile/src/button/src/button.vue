<template>
    <component :is="tag" :class="[
        bem.b(),
        bem.m(type)
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
