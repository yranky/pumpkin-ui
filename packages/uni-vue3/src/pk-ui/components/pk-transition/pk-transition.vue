<template>
    <uni-transition :custom-class="[
        bem.b(),
        ...customClass
    ].join(' ')" :show="show" :mode-class="[props.name]"
        :duration="!isEmptyValue(props.duration) ? props.duration : 300" @change="onChange" :styles="{
            'position': 'relative',
            'z-index': 9999,
            ...styles
        }">
        <slot></slot>
    </uni-transition>
</template>
<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import { transitionProps } from './pk-transition'
import { useBem } from '@pk-ui/use'
import { isEmptyValue } from '@pk-ui/utils'
import './pk-transition.less'
import UniTransition from '../../libs/components/uni-transition/components/uni-transition/uni-transition.vue'

type transitionEmits = {
    (event: 'onBeforeEnter'): void,
    (event: 'onEnter'): void,
    (event: 'onAfterEnter'): void,
    (event: 'onBeforeLeave'): void,
    (event: 'onLeave'): void,
    (event: 'onAfterLeave'): void,
    (event: 'update:modelValue', value: boolean): void
}

const emits = defineEmits<transitionEmits>()
const props = defineProps(transitionProps)
const bem = useBem('transition')
const customClass = computed(() => {
    if (props.customClass instanceof Array) return props.customClass
    else return [props.customClass]
})

const show = ref(props.modelValue)
let isUpdating = false
watch(() => props.modelValue, (val => {
    if (!isUpdating) {
        isUpdating = true
        show.value = val
        nextTick(() => isUpdating = false)
    }
}))
watch(show, (val) => {
    if (!isUpdating && val !== show.value) emits('update:modelValue', show.value)
})

const onChange = (e: { detail: boolean }) => {
    if (e.detail) emits('onAfterEnter')
    else emits('onAfterLeave')
}

watch(() => show.value, () => {
    if (show.value) {
        emits('onBeforeEnter')
        nextTick(() => emits('onEnter'))
    } else {
        emits('onBeforeLeave')
        emits('onLeave')
    }
})
</script>