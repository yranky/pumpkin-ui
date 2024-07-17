<template>
    <popup v-model="_show" fade :close-on-press="false" :overlay-background-color="props.overlayBackgroundColor"
        background-color="transparent" :position="props.position" overflow-y="visible" :overlay="props.overlay"
        @onClose="emits('onClose')" @onOpen="emits('onOpen')" @onOpened="emits('onOpened')"
        @onClosed="emits('onClosed')">
        <div :class="[
            bem.b(),
            bem.m(position),
            bem.m(type)
        ]">
            <div :class="[
                bem.e('icon')
            ]" v-if="type === 'icon' || type === 'loading'">
                <slot name="icon">
                    <loading v-if="type === 'loading'" color="currentColor" />
                </slot>
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
import { computed, ref, watch } from 'vue'
import "./toast.less"
import Popup from '../../popup'
import Loading from '../../loading'

defineOptions({
    name: 'PkToast',
})

const props = defineProps(toastProps)

const emits = defineEmits(toastEmits)

const bem = useBem('toast')

const __show = ref<boolean>(false)
const _show = computed<boolean>({
    get() {
        // if (props.modelValue !== void 0) return props.modelValue
        return __show.value
    },
    set(val) {
        // if (props.modelValue !== void 0) return emits("update:modelValue", val)
        __show.value = val
    }
})

let timer: ReturnType<typeof setTimeout>

const clearTimer = () => clearTimeout(timer)

const startTimer = () => {
    clearTimer();
    if (_show.value && props.duration > 0) {
        timer = setTimeout(() => {
            updateShow(false)
        }, props.duration);
    }
}
const updateShow = (val: boolean) => _show.value = val

watch(
    () => [_show.value, props.position, props.text, props.duration],
    startTimer,
    {
        immediate: true
    }
)


defineExpose({
    updateShow
})
</script>