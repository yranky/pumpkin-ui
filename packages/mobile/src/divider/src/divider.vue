<template>
    <div :class="[
        bem.b()
    ]" :style="{
        '--pk-divider-style': props.dashed ? 'dashed' : 'solid',
        '--pk-divider-size': (props.size * 2) + 'px'
    }">
        <div :class="[
            bem.e('left')
        ]"></div>
        <div :class="[
            bem.e('content')
        ]">
            <slot></slot>
        </div>
        <div :class="[
            bem.e('right')
        ]"></div>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from "@pk-ui/use";
import { dividerProps } from "./divider";
import "./divider.less"

defineOptions({
    name: 'PkDivider',
})

const props = defineProps(dividerProps)

const bem = useBem('divider')


</script>