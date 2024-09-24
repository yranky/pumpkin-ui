<template>
    <teleport to="body" :disabled="!props.appendToBody">
        <pk-transition :name="transitionName" appear @on-after-enter="onAfterEnter" @on-after-leave="onAfterLeave">
            <div :class="[
                bem.b(),
                bem.m(props.position),
                bem.eqm('round', props.round)
            ]" v-show="show" :style="{
                background: props.backgroundColor,
                overflowY: props.overflowY
            }">
                <slot></slot>
            </div>
        </pk-transition>
        <overlay ref="overlayRef" v-if="props.overlay" v-model="show" v-bind="$attrs"
            :background-color="props.overlayBackgroundColor" :close-on-press="props.closeOnPressOverlay" />
    </teleport>
</template>
<script setup lang="ts">
import { useBem } from '@pumpkin-ui/use'
import Overlay from '../../overlay/src/overlay.vue'
import PkTransition from '../../transition/src/pk-transition.vue'
import { transitionNames } from '../../transition/src/types'
import { popupProps, popupEmits } from './popup'
import { computed, ref, useAttrs, watch } from 'vue'
import "./popup.less"

const props = defineProps(popupProps)

const emits = defineEmits(popupEmits)

const $attrs = useAttrs()

const bem = useBem('popup')
const overlayRef = ref<InstanceType<typeof Overlay>>()

const show = computed<boolean>({
    get() {
        return props.modelValue
    },
    set(val) {
        emits("update:modelValue", val)
    }
})

const transitionName = computed<typeof transitionNames[number]>(() => {
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

defineExpose({
    showPopup,
    hidePopup
})

</script>