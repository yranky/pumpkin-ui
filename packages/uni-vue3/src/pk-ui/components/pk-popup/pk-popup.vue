<template>
    <pk-overlay ref="overlayRef" v-if="props.overlay" v-model="show" v-bind="$attrs"
        :background-color="props.overlayBackgroundColor" :close-on-press="props.closeOnPressOverlay" />
    <pk-transition v-model="show" :name="transitionName" appear @on-after-enter="onAfterEnter"
        @on-after-leave="onAfterLeave" :custom-class="[
            bem.m(props.position),
            bem.b()
        ]" :styles="{
            position: 'fixed',
            background: '#fff',
            ...transitionStyles
        }">
        <view :class="[
            bem.e('wrapper'),
            bem.eqm('round', props.round)
        ]" :style="{
            background: props.backgroundColor,
            overflowY: props.overflowY as any
        }">
            <slot></slot>
        </view>
    </pk-transition>
</template>
<script setup lang="ts">
import { useBem } from '@pk-ui/use'
import PkOverlay from '../pk-overlay/pk-overlay.vue'
import PkTransition from '../pk-transition/pk-transition.vue'
import { popupProps } from './pk-popup'
import { popupEmits } from './types'
import { computed, ref, useAttrs, watch } from 'vue'
import "./pk-popup.less"

defineOptions({
    name: 'PkPopup'
})

const props = defineProps(popupProps)

const emits = defineEmits(popupEmits)

const $attrs = useAttrs()

const bem = useBem('popup')
const overlayRef = ref<InstanceType<typeof PkOverlay>>()

const show = computed<boolean>({
    get() {
        return props.modelValue
    },
    set(val) {
        emits("update:modelValue", val)
    }
})

const transitionName = computed(() => {
    if (props.fade) return 'fade'
    else if (props.position === 'center') return 'fade'
    return `slide-${props.position}`
})

const onAfterEnter = () => emits("onOpened")
const onAfterLeave = () => emits("onClosed")

watch(show, (val) => {
    if (val) emits("onOpen")
    else emits("onClose")
})

const showPopup = () => {
    if (overlayRef.value) overlayRef.value.showOverlay()
    else show.value = true
}

const hidePopup = () => {
    if (overlayRef.value) overlayRef.value.hideOverlay()
    else show.value = false
}

const transitionStyles = computed(() => {
    switch (props.position) {
        case 'top':
            return {
                top: 0,
                left: 0,
                width: '100%'
            }
        case 'bottom':
            return {
                bottom: 0,
                width: '100%'
            }
        case 'left':
            return {
                left: 0,
                top: 0,
                height: '100%'
            }
        case 'right':
            return {
                right: 0,
                top: 0,
                height: '100%'
            }
        default:
            return {
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }
    }
})

defineExpose({
    showPopup,
    hidePopup
})

</script>