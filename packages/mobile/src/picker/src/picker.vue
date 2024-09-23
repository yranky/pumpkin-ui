<template>
    <popup ref="popupRef" v-model="_show" :class="[
        bem.b()
    ]" :style="{
        '--pk-picker-background': props.backgroundColor
    }" position="bottom" overflowY="visible" :close-on-press-overlay="props.closeOnPressOverlay" :round="props.round"
        v-bind="$attrs" @onCloseByClick="onCancel">
        <picker-toolbar v-bind="$attrs" @onConfirm="onConfirm" @onCancel="onCancel" />
        <picker-view ref="pickerViewRef" v-bind="$attrs" v-model="_current"
            @onChange="emits('onChange', $event)"></picker-view>
    </popup>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import { computed, ref, useAttrs } from 'vue'
import { pickerEmits, pickerProps } from './picker'
import Popup from '../../popup/src/popup.vue'
import PickerView from '../../picker-view/src/picker-view.vue'
import PickerToolbar from '../../picker-view/src/picker-toolbar.vue'
import './picker.less'
import { PickerItem } from '../../picker-view/src/picker-view'

const props = defineProps(pickerProps)

const emits = defineEmits<pickerEmits>()

const $attrs = useAttrs()

const bem = useBem('picker')

const pickerViewRef = ref<InstanceType<typeof PickerView>>()
const popupRef = ref<InstanceType<typeof Popup>>()

const onConfirm = () => {
    const items = pickerViewRef.value?.getValues()
    items && emits('onConfirm', items)
    //hide
    popupRef.value?.hidePopup()
}

const onCancel = () => {
    emits('onCancel')
    //hide
    popupRef.value?.hidePopup()
}


const __show = ref<boolean>(false)

const _show = computed<boolean>({
    get() {
        if (props.modelValue !== void 0) return props.modelValue
        return __show.value
    },
    set(val) {
        if (props.modelValue !== void 0) return emits("update:modelValue", val)
        __show.value = val
    }
})

const __current = ref<PickerItem['value'][]>([])
const _current = computed<PickerItem['value'][] | undefined>({
    get() {
        if (props.current !== void 0) return props.current

        return __current.value
    },
    set(val) {
        if (props.current !== void 0) return emits("update:current", val)
        __current.value = val || []
    }
})

const updateShow = (val: boolean = true) => _show.value = val
defineExpose({
    updateShow
})

</script>