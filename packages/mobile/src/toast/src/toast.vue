<template>
    <popup v-model="show" fade :close-on-press-overlay="false" :overlay-background-color="props.overlayBackgroundColor"
        background-color="transparent" :position="props.position" overflow-y="visible" :overlay="props.overlay"
        @onClose="emits('onClose')" @onOpen="emits('onOpen')" @onOpened="emits('onOpened')"
        @onClosed="emits('onClosed')">
        <div :class="[
            bem.b(),
            bem.m(props.position),
            bem.m(props.type)
        ]">
            <div :class="[
                bem.e('icon')
            ]" v-if="props.type === 'icon' || props.type === 'loading'">
                <slot name="icon">
                    <loading v-if="props.type === 'loading'" color="currentColor" />
                </slot>
            </div>
            <div :class="[
                bem.e('text')
            ]">
                <slot name="text">
                    {{ props.text }}
                </slot>
            </div>
        </div>
    </popup>
</template>
<script setup lang="ts">
import { useBem, useVModel } from '@pumpkin-ui/use'
import { toastProps, toastEmits } from './toast'
import { watch } from 'vue'
import "./toast.less"
import Popup from '../../popup'
import Loading from '../../loading'

const props = defineProps(toastProps)

const emits = defineEmits(toastEmits)

const bem = useBem('toast')

const show = useVModel(props, 'modelValue', emits)

let timer: ReturnType<typeof setTimeout>

const clearTimer = () => clearTimeout(timer)

const startTimer = () => {
    clearTimer();
    if (show.value && props.duration > 0 && props.type !== 'loading') {
        timer = setTimeout(() => {
            updateShow(false)
        }, props.duration);
    }
}
const updateShow = (val: boolean = true) => show.value = val

watch(
    () => [show.value, props.position, props.text, props.duration],
    startTimer,
    {
        immediate: true
    }
)

defineExpose({
    updateShow
})
</script>