<template>
    <teleport to="body" :disabled="!appendToBody">
        <transition :name="transitionFadeName.b()" appear>
            <div :class="[
        bem.b()
    ]" v-show="show">
                <slot></slot>
            </div>
        </transition>
    </teleport>
</template>
<script setup lang="ts">
import { useBem } from '@pk-ui/use';
import { toastProps, toastEmits } from './toast'
import { computed } from 'vue';
import "./toast.less"

defineOptions({
    name: 'PkToast',
})

const props = defineProps(toastProps)

const emits = defineEmits(toastEmits)

const bem = useBem('toast')
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