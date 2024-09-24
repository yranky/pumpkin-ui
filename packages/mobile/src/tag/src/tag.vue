<template>
    <div :class="[
        bem.b(),
        bem.m(props.size),
        bem.m(props.type)
    ]" v-if="show" :style="{
        '--pk-tag-primary-background': isEmptyValue(props.background) ? '' : props.background,
        color: isEmptyValue(props.textColor) ? '' : props.textColor
    }" @click="onClick">
        <div :class="[
            bem.e('content')
        ]">
            <slot></slot>
        </div>
        <div :class="[
            bem.e('icon')
        ]" v-if="$slots.icon || props.closable" @click.stop="onClose">
            <slot name="icon">
                <icon :name="props.icon" :class-prefix="props.classPrefix" />
            </slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useBem, useVModel } from '@pumpkin-ui/use'
import { tagEmits, tagProps } from './tag'
import Icon from '../../icon/src/icon.vue'
import './tag.less'
import { useSlots } from 'vue'
import { isEmptyValue } from '@pumpkin-ui/utils'

const bem = useBem('tag')
const props = defineProps(tagProps)
const emits = defineEmits<tagEmits>()

const $slots = useSlots()

const onClick = (e: MouseEvent) => {
    emits('click', e)
}

const show = useVModel(props, 'modelValue', emits)

const onClose = () => {
    if (props.closable) show.value = false
    emits('onClose')
}

</script>