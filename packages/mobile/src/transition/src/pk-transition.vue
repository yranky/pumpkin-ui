<template>
    <transition :class="[
        bem.b()
    ]" :style="{
        '--pk-transition-duration': !isEmptyValue(props.duration) ? props.duration + 'ms' : ''
    }" :appear="props.appear" :name="transitionName" @before-enter="emits('onBeforeEnter')" @enter="emits('onEnter')"
        @after-enter="emits('onAfterEnter')" @before-leave="emits('onBeforeLeave')" @leave="emits('onLeave')"
        @after-leave="emits('onAfterLeave')" @enter-cancelled="emits('onEnterCancelled')"
        @leave-cancelled="emits('onLeaveCancelled')">
        <slot></slot>
    </transition>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { transitionEmits, transitionProps } from './pk-transition'
import { useBem } from '@pk-ui/use'
import { isEmptyValue } from '@pk-ui/utils'
import './pk-transition.less'

const emits = defineEmits<transitionEmits>()
const props = defineProps(transitionProps)
const bem = useBem('transition')
const transitionName = computed(() => useBem(props.name).b())
</script>