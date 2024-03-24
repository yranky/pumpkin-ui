<template>
    <transition name="pk-fade" appear>
        <div :class="[
            bem.b()
        ]" v-show="show" @click="show = false">
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

const show = computed<boolean>({
    get() {
        return props.modelValue
    },
    set(val) {
        emits("update:modelValue", val)
    }
})
</script>