<template>
    <pk-transition v-model="show">
        <view :class="[
            bem.b()
        ]" @click="onClick" :style="{
            backgroundColor,
            zIndex: isEmptyValue(props.zIndex) ? '' : props.zIndex
        }">
            <slot></slot>
        </view>
    </pk-transition>
</template>
<script setup lang="ts">
import { useBem } from '@pk-ui/use'
import './pk-overlay.less'
import { overlayEmits, overlayProps } from './pk-overlay'
import { computed } from 'vue'
import { isEmptyValue } from '@pk-ui/utils'
import PkTransition from '../pk-transition/pk-transition.vue'

defineOptions({
    name: 'PkOverlay',
})

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