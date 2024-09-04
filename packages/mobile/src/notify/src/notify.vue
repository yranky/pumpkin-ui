<template>
    <popup v-model="show" :close-on-press-overlay="false" background-color="transparent" :position="props.position"
        overflow-y="visible" :overlay="false" @onClose="emits('onClose')" @onOpen="emits('onOpen')"
        @onOpened="emits('onOpened')" @onClosed="emits('onClosed')">
        <div :class="[
            bem.b(),
            bem.m(props.type)
        ]" :style="{
            background: props.background,
            color: props.color
        }" @click="onClick">
            <slot>
                {{ props.message }}
            </slot>
        </div>
    </popup>
</template>
<script lang="ts" setup>
import { useBem, useVModel } from '@pk-ui/use'
import { notifyEmits, notifyProps } from './notify'
import Popup from '../../popup/src/popup.vue'
import './notify.less'
import { watch } from 'vue'

const props = defineProps(notifyProps)
const emits = defineEmits<notifyEmits>()
const bem = useBem('notify')
const show = useVModel(props, 'modelValue', emits)


const onClick = (e: MouseEvent) => emits('click', e)

let timer: ReturnType<typeof setTimeout>

const clearTimer = () => clearTimeout(timer)

const startTimer = () => {
    clearTimer();
    if (show.value && props.duration > 0) {
        timer = setTimeout(() => {
            updateShow(false)
        }, props.duration);
    }
}
const updateShow = (val: boolean = true) => show.value = val

watch(
    () => [show.value, props.position, props.message, props.duration, props.type],
    startTimer,
    {
        immediate: true
    }
)

defineExpose({
    updateShow
})
</script>