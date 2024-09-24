<template>
    <popup ref="popupRef" v-model="show" fade :close-on-press-overlay="props.closeOnPressOverlay"
        :overlay-background-color="props.overlayBackgroundColor" background-color="transparent" overflow-y="visible"
        :overlay="props.overlay" @onClose="emits('onClose')" @onOpen="emits('onOpen')" @onOpened="emits('onOpened')"
        @onClosed="emits('onClosed')" @onCloseByClick="onCancelClick">
        <pk-transition name="bounce" v-show="show">
            <div :class="[
                bem.b(),
                bem.eqm('has-footer', showFooter)
            ]">
                <div :class="[
                    bem.e('title')
                ]" v-if="!isEmptyValue(props.title) || $slots.title">
                    <slot name="title">
                        {{ props.title }}
                    </slot>
                </div>
                <div :class="[
                    bem.e('content')
                ]" :style="{
                    'text-align': props.messageAlign
                }">
                    <slot>
                        {{ props.message }}
                    </slot>
                </div>
                <div :class="[
                    bem.e('action'),
                    bem.eqm('reverse', !!props.buttonReverse)
                ]" v-if="showFooter">
                    <slot name="action">
                        <div :class="[
                            bem.e('action-item')
                        ]" v-if="props.showCancelButton" @click="onCancelClick">
                            <pk-button type="link" block :textColor="props.cancelButtonColor">{{
                                props.cancelButtonText
                                }}</pk-button>
                        </div>
                        <div :class="[
                            bem.e('action-item')
                        ]" v-if="props.showConfirmButton" @click="onConfirmClick">
                            <pk-button type="link" block :textColor='props.confirmButtonColor'>{{
                                props.confirmButtonText }}</pk-button>
                        </div>
                    </slot>
                </div>
                <div :class="[
                    bem.e('close')
                ]" v-if="$slots.close || props.showClose" @click="onCloseClick">
                    <slot name="close">
                        <icon name="close-outlined" />
                    </slot>
                </div>
            </div>
        </pk-transition>
    </popup>
</template>
<script lang="ts" setup>
import { useBem, useVModel } from '@pumpkin-ui/use'
import { dialogEmits, dialogProps } from './dialog'
import PkButton from '../../button/src/button.vue'
import Popup from '../../popup/src/popup.vue'
import Icon from '../../icon/src/icon.vue'
import PkTransition from '../../transition/src/pk-transition.vue'
import './dialog.less'
import { computed, ref, useSlots } from 'vue'
import { isEmptyValue } from '@pumpkin-ui/utils'

const bem = useBem('dialog')
const props = defineProps(dialogProps)
const emits = defineEmits<dialogEmits>()

const show = useVModel(props, 'modelValue', emits)
const $slots = useSlots()

const showFooter = computed(() => {
    return !!(props.showCancelButton || props.showConfirmButton || $slots.action)
})

const onCloseClick = () => {
    updateShow(false)
    emits('onCancel')
}

const onCancelClick = () => {
    updateShow(false)
    emits('onCancel')
}

const onConfirmClick = () => {
    updateShow(false)
    emits('onConfirm')
}


const popupRef = ref<InstanceType<typeof Popup>>()
const updateShow = (val: boolean = true) => {
    if (val) popupRef.value?.showPopup()
    else popupRef.value?.hidePopup()
}

defineExpose({
    updateShow
})

</script>