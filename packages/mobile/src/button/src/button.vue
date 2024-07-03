<template>
    <component :is="props.tag" :disabled="props.disabled" :aria-disabled="props.disabled" :class="[
        bem.b(),
        bem.m(props.type),
        bem.m(props.size),
        bem.eqm('round', props.round),
        bem.eqm('square', props.square),
        bem.eqm('block', props.block),
        bem.eqm('disabled', props.disabled || props.loading),
        bem.eqm('danger', props.danger),
        bem.eqm('warning', props.warning)
    ]" :type="nativeType" @click="onClick" :style="buttonStyle">
        <div :class="bem.e('container')">
            <Loading :class="[
                bem.e('loading')
            ]" :type="props.loadingType" v-if="props.loading" />
            <div :class="[
                bem.e('content')
            ]">
                <div :class="[
                    bem.e('text')
                ]">{{ props.text }}
                    <slot></slot>
                </div>
                <div :class="[
                    bem.be('sub', 'text')
                ]" v-if="subText">
                    {{ props.subText }}
                    <slot name="sub"></slot>
                </div>
            </div>
        </div>
    </component>
</template>
<script lang="ts" setup>
import { buttonProps, buttonEmits, useButtonStyle } from './button'
import { useBem } from '@pk-ui/use'
import './button.less'
import Loading from '../../loading/src/loading.vue';

defineOptions({
    name: 'PkButton',
})

const props = defineProps(buttonProps)

const bem = useBem('button')

const emit = defineEmits(buttonEmits)

const buttonStyle = useButtonStyle(props)

const onClick = (event: MouseEvent) => {
    if (!props.disabled && !props.loading) {
        emit('click', event);
    }
}

</script>
