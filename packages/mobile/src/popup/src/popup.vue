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
        <pk-overlay v-if="props.overlay" v-model="show" v-bind="$attrs"
            :backgroundColor="props.overlayBackgroundColor" />
    </teleport>
</template>
<script setup lang="ts">
import { useBem } from '@pk-ui/use';
import PkOverlay from '../../overlay/src/overlay.vue'
import { popupProps, popupEmits } from './popup'
import { computed, watch } from 'vue';
import "./popup.less"

defineOptions({
    name: 'PkPopup',
})

const props = defineProps(popupProps)

const emits = defineEmits(popupEmits)

const bem = useBem('popup')
const transitionSlideName = useBem('slide')
const transitionFadeName = useBem('fade')

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

</script>