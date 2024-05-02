<template>
    <button :class="[
        bem.b(),
        bem.m(type),
        bem.m(size),
        bem.eqm('round', round),
        bem.eqm('square', square),
        bem.eqm('disabled', disabled),
        bem.eqm('danger', danger),
        bem.eqm('warning', warning)
    ]" @click="onClick" :style="buttonStyle">
        <view :class="[
            bem.e('text')
        ]">{{ text }}
            <slot></slot>
        </view>
        <view :class="[
            bem.be('sub', 'text')
        ]" v-if="subText">
            {{ subText }}
            <slot name="sub"></slot>
        </view>
    </button>
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
