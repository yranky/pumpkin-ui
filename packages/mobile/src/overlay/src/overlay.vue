<template>
    <transition :name="transitionName.b()" appear>
        <div :class="[
            bem.b()
        ]" v-show="show" @click="onClick" :style="{
            backgroundColor,
            '--pk-overlay-z-index': props.zIndex
        }">
            <slot></slot>
        </div>
    </transition>
</template>
<script setup lang="ts">
import { useBem } from '@pumpkin-ui/use'
import './overlay.less'
import { overlayEmits, overlayProps } from './overlay'
import { computed } from 'vue'

const props = defineProps(overlayProps)

const emits = defineEmits(overlayEmits)

const bem = useBem('overlay')
const transitionName = useBem('fade')

const show = computed<boolean>({
    get() {
        return props.modelValue
    },
    set(val) {
        emits("update:modelValue", val)
    }
})

const onClick = (event: MouseEvent) => {
    hideOverlay(true)
    emits('click', event)
    props.closeOnPress && emits('onCloseByClick')
}

const showOverlay = () => {
    show.value = true
}

const hideOverlay = (press: boolean = false) => {
    if (press && !props.closeOnPress) return
    show.value = false
}

defineExpose({
    showOverlay,
    hideOverlay
})

</script>