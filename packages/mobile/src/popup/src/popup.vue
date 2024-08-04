<template>
    <teleport to="body" :disabled="!props.appendToBody">
        <transition
            :name="props.position === 'center' || props.fade ? transitionFadeName.b() : transitionSlideName.b(props.position)"
            appear @after-enter="onAfterEnter" @after-leave="onAfterLeave">
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
        </transition>
        <overlay ref="overlayRef" v-if="props.overlay" v-model="show" v-bind="$attrs"
            :background-color="props.overlayBackgroundColor" />
    </teleport>
</template>
<script setup lang="ts">
import { useBem } from '@pk-ui/use';
import Overlay from '../../overlay/src/overlay.vue'
import { popupProps, popupEmits } from './popup'
import { computed, ref, useAttrs, watch } from 'vue';
import "./popup.less"

defineOptions({
    name: 'PkPopup',
})

const props = defineProps(popupProps)

const emits = defineEmits(popupEmits)

const $attrs = useAttrs()

const bem = useBem('popup')
const transitionSlideName = useBem('slide')
const transitionFadeName = useBem('fade')
const overlayRef = ref<InstanceType<typeof Overlay>>()

const show = computed<boolean>({
    get() {
        return props.modelValue
    },
    set(val) {
        emits("update:modelValue", val)
    }
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