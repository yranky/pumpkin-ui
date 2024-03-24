<template>
    <div :class="[
        bem.b()
    ]">

    </div>
    <pk-overlay v-model="show" />
</template>
<script setup lang="ts">
import { useBem } from '@pk-ui/use';
import PkOverlay from '../../overlay/src/overlay.vue'
import { popupProps, popupEmits } from './popup'
import { computed } from 'vue';

defineOptions({
    name: 'PkPopup',
})

const props = defineProps(popupProps)

const emits = defineEmits(popupEmits)

const bem = useBem('popup')

const show = computed<boolean>({
    get() {
        return props.modelValue
    },
    set(val) {
        emits("update:modelValue", val)
    }
})
</script>