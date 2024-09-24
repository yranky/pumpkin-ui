<template>
    <div :class="[
        bem.b(),
        bem.m(props.size),
        bem.eqm('active', value),
        bem.eqm('disabled', props.disabled),
        bem.eqm('loading', props.loading)
    ]" @click="onSwitchClick" :style="{
        '--pk-switch-loading-size': props.loadingSize,
        '--pk-switch-active-background': props.background,
        '--pk-switch-inactive-background': props.inactiveBackground
    }">
        <div :class="[
            bem.e('slide')
        ]">
            <slot name="slide">
                <Loading :class="[
                    bem.e('loading')
                ]" :type="props.loadingType" :color="props.loadingColor" v-if="props.loading" />
            </slot>
        </div>
        <div :class="[
            bem.e('wrapper')
        ]">
            <div :class="[
                bem.e('close')
            ]">
            </div>
            <div :class="[
                bem.e('open')
            ]">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { switchEmits, switchProps } from './switch'
import { useBem, useVModel } from '@pumpkin-ui/use'
import './switch.less'
import Loading from '../../loading/src/loading.vue'

const props = defineProps(switchProps)
const emits = defineEmits(switchEmits)

const bem = useBem('switch')

const onSwitchClick = (event: MouseEvent) => {
    emits('click', event)
    if (!props.disabled && !props.loading) updateValue(!value.value)
}

const updateValue = async (val: boolean) => {
    if (typeof props.beforeChange === 'function') {
        const next = await props.beforeChange(value.value, val)

        if (next === false) return
    }

    value.value = val
    emits('onChange', val)
}


const value = useVModel(props, 'modelValue', emits)
</script>