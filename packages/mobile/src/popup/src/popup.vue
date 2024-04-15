<template>
    <teleport to="body" :disabled="!appendToBody">
        <transition :name="position === 'center' || fade ? transitionFadeName.b() : transitionSlideName.b(position)"
            appear>
            <div :class="[
                bem.b(),
                bem.m(position)
            ]" v-show="show" :style="{
                background: backgroundColor
            }">
                <slot></slot>
            </div>
        </transition>
        <pk-overlay v-if="overlay" v-model="show" v-bind="$attrs" :backgroundColor="overlayBackgroundColor" />
    </teleport>
</template>
<script setup lang="ts">
import { useBem } from '@pk-ui/use';
import PkOverlay from '../../overlay/src/overlay.vue'
import { popupProps, popupEmits } from './popup'
import { computed } from 'vue';
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
</script>