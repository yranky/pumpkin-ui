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
import { useBem } from '@pk-ui/use'
import './overlay.less'
import { overlayEmits, overlayProps } from './overlay';
import { computed } from 'vue';

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
    if (props.closeOnPress) show.value = false

    emits('click', event)
}

</script>