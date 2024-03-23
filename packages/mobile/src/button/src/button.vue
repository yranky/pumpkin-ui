<template>
    <component :is="tag" :disabled="disabled" :aria-disabled="disabled" :class="[
        bem.b(),
        bem.m(type),
        bem.m(size),
        bem.eqm('round', round),
        bem.eqm('square', square),
        bem.eqm('block', block),
        bem.eqm('disabled', disabled),
        bem.eqm('danger', danger),
        bem.eqm('warning', warning)
    ]" :type="nativeType" @click="onClick" :style="buttonStyle">
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
import { buttonProps, buttonEmits, useButtonStyle } from './button'
import { useBem } from '@pk-ui/use'
import './button.less'

defineOptions({
    name: 'PkButton',
})

const props = defineProps(buttonProps)

const bem = useBem('button')

const emit = defineEmits(buttonEmits)

const buttonStyle = useButtonStyle(props)

const onClick = (event: MouseEvent) => {
    if (!props.disabled) {
        emit('click', event);
    }
}

</script>
