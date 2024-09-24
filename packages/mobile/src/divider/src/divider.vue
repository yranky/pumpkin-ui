<template>
    <div :class="[
        bem.b(),
        bem.m(props.contentPosition)
    ]" :style="{
        '--pk-divider-style': props.dashed ? 'dashed' : 'solid',
        '--pk-divider-size': (props.size * 2) + 'px',
        '--pk-divider-color': props.borderColor,
        '--pk-divider-font-color': props.color
    }">
        <div :class="[
            bem.e('left')
        ]"></div>
        <div :class="[
            bem.e('content')
        ]" v-if="$slots.default">
            <slot></slot>
        </div>
        <div :class="[
            bem.e('right')
        ]"></div>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from "@pumpkin-ui/use"
import { dividerProps } from "./divider"
import "./divider.less"
import { useSlots } from "vue"

const props = defineProps(dividerProps)

const bem = useBem('divider')

const $slots = useSlots()


</script>