<template>
    <popup v-model="show" fade :close-on-press="false" :overlayBackgroundColor="overlayBackgroundColor"
        backgroundColor="transparent" :position="position" overflowY="visible">
        <div :class="[
            bem.b(),
            bem.m(position)
        ]">
            <div :class="[
                bem.e('icon')
            ]">
                <slot name="icon"></slot>
            </div>
            <div :class="[
                bem.e('text')
            ]">
                <slot name="text">
                    {{ text }}
                </slot>
            </div>
        </div>
    </popup>
</template>
<script setup lang="ts">
import { useBem } from '@pk-ui/use'
import { toastProps, toastEmits } from './toast'
import { computed, watch } from 'vue'
import "./toast.less"
import Popup from '../../popup'

defineOptions({
    name: 'PkToast',
})

const props = defineProps(toastProps)

const emits = defineEmits(toastEmits)

const bem = useBem('toast')

const show = computed<boolean>({
    get() {
        return props.modelValue
    },
    set(val) {
        emits("update:modelValue", val)
    }
})

let timer: ReturnType<typeof setTimeout>

const clearTimer = () => clearTimeout(timer)
const updateShow = (val: boolean) => show.value = val

watch(
    () => [show.value, props.position, props.text, props.duration],
    () => {
        clearTimer();
        if (show && props.duration > 0) {
            timer = setTimeout(() => {
                updateShow(false)
            }, props.duration);
        }
    },
    {
        immediate: true
    }
);
</script>