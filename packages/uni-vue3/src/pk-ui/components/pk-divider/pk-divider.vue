<template>
    <div :class="[
        bem.b(),
        bem.m(props.contentPosition)
    ]" :style="{
        color: props.color || ''
    }">
        <div :class="[
            bem.e('left')
        ]" :style="{
            borderTopColor: props.borderColor || '',
            borderTopStyle: props.dashed ? 'dashed' : 'solid',
            borderTopWidth: isEmptyValue(props.size) ? '' : (props.size * 2) + 'rpx'
        }"></div>
        <div :class="[
            bem.e('content')
        ]" v-if="$slot.default">
            <slot></slot>
        </div>
        <div :class="[
            bem.e('right')
        ]" :style="{
            borderTopColor: props.borderColor || '',
            borderTopStyle: props.dashed ? 'dashed' : 'solid',
            borderTopWidth: isEmptyValue(props.size) ? '' : (props.size * 2) + 'rpx'
        }"></div>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from "@pk-ui/use"
import { dividerProps } from "./pk-divider"
import "./pk-divider.less"
import { useSlots } from "vue"
import { isEmptyValue } from "@pk-ui/utils"
defineOptions({
    name: 'PkDivider',
})
const props = defineProps(dividerProps)
const bem = useBem('divider')
const $slot = useSlots()


</script>