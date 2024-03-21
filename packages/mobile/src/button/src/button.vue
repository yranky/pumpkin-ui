<template>
    <component :is="tag" :class="[
        bem.b(),
        bem.m(type),
        bem.m(size),
        bem.eqm('round', round),
        bem.eqm('square', square),
        bem.eqm('block', block),
        bem.eqm('disabled', disabled)
    ]" :type="nativeType">
        <div :class="[
        bem.e('text')
    ]">{{ text }}</div>
        <div :class="[
        bem.be('sub', 'text')
    ]" v-if="subText">
            {{ subText }}
        </div>
    </component>
</template>
<script lang="ts" setup>
import { buttonProps } from './button'
import { useBem } from '@pk-ui/use'
import './button.less'

defineOptions({
    name: 'PkButton',
})

const props = defineProps(buttonProps)

const bem = useBem('button')

</script>
