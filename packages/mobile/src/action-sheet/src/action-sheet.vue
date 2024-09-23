<template>
    <popup v-model="_show" position="bottom" :overlay="props.overlay"
        :close-on-press-overlay="props.closeOnPressOverlay" :overlay-background-color="props.overlayBackgroundColor"
        @onClose="emits('onClose')" @onOpen="emits('onOpen')" @onOpened="emits('onOpened')"
        @onClosed="emits('onClosed')" @onCloseByClick="onCancel">
        <div :class="[
            bem.b()
        ]">
            <div :class="[
                bem.e('header')
            ]" v-if="!!props.title || !!props.subTitle">
                <div :class="[
                    bem.e('title')
                ]" v-if="!!props.title">
                    {{ props.title }}
                </div>
                <div :class="[
                    bem.e('subtitle')
                ]" v-if="!!props.subTitle">
                    {{ props.subTitle }}
                </div>
            </div>

            <div :class="[
                bem.e('content')
            ]">
                <div :class="[
                    bem.e('item'),
                    bem.eqm('loading', !!item.loading),
                    bem.eqm('disabled', !!item.disabled)
                ]" v-for="(item, index) in props.actions" :key="item.name" @click="itemClick(item, index)" :style="{
                    '--pk-action-sheet-color': item.color
                }">
                    <loading :class="[
                        bem.e('item-icon')
                    ]" color="currentColor" v-if="item.loading" />
                    <span :class="[
                        bem.e('text')
                    ]">
                        {{ item.name }}
                    </span>
                </div>
            </div>

            <div :class="[
                bem.e('footer')
            ]" v-if="props.cancel">
                <div :class="[
                    bem.e('item')
                ]" @click="onCancel">
                    {{ props.cancelText }}
                </div>
            </div>
        </div>
    </popup>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import Popup from '../../popup/src/popup.vue'
import Loading from '../../loading/src/loading.vue'
import './action-sheet.less'
import { computed, ref } from 'vue'
import { actionSheetProps, actionSheetEmits, ActionSheetItem } from './action-sheet'

const bem = useBem('action-sheet')

const props = defineProps(actionSheetProps)

const emits = defineEmits(actionSheetEmits)

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

const itemClick = (item: ActionSheetItem, index: number) => {
    if (item.disabled || item.loading) return
    emits('onItemClick', item, index)
    if (props.closeOnClickAction) updateShow(false)
}

const onCancel = () => {
    emits('onCancel')
    if (props.closeOnClickAction) updateShow(false)
}

const updateShow = (val: boolean = true) => _show.value = val
defineExpose({
    updateShow
})
</script>