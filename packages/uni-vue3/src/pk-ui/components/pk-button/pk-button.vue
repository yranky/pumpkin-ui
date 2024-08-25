<template>
    <button :class="[
        bem.b(),
        bem.m(props.type),
        bem.m(props.size),
        bem.eqm('round', props.round),
        bem.eqm('square', props.square),
        bem.eqm('block', props.block),
        bem.eqm('disabled', props.disabled || props.loading),
        bem.eqm('danger', props.danger),
        bem.eqm('warning', props.warning),
        buttonStyleAndClassName.className
    ]" @click="onClick" :style="buttonStyleAndClassName.style" @touchstart="">
        <view :class="bem.e('container')">
            <slot name="loading">
                <pk-loading :class="[
                    bem.e('loading')
                ]" :type="props.loadingType" :size="props.loadingSize" v-if="props.loading" />
            </slot>
            <view :class="[
                bem.e('content')
            ]">
                <view :class="[
                    bem.e('text')
                ]">{{ props.text }}
                    <slot></slot>
                </view>
                <view :class="[
                    bem.be('sub', 'text')
                ]" v-if="subText">
                    <slot name="sub">
                        {{ props.subText }}
                    </slot>
                </view>
            </view>
        </view>
    </button>
</template>
<script lang="ts" setup>
import { buttonProps, useButtonStyleAndClassName } from './pk-button'
import { buttonEmits, bem } from './types'
import './pk-button.less'
import PkLoading from '../pk-loading/pk-loading.vue'

defineOptions({
    name: 'PkButton',
})

const props = defineProps(buttonProps)

const emits = defineEmits(buttonEmits)

const buttonStyleAndClassName = useButtonStyleAndClassName(props)

const onClick = (event: MouseEvent) => {
    if (!props.disabled && !props.loading) {
        emits('click', event);
    }
}

</script>
