<template>
    <div :class="[
        bem.b(),
        bem.eqm('square', props.square)
    ]" :style="{
        '--pk-progress-stroke-height': props.strokeHeight + 'px',
        '--pk-progress-track-background': props.trackBackground,
        '--pk-progress-stroke-background': props.background,
        '--pk-progress-transition-duration': typeof props.transitionDuration === 'number' ? props.transitionDuration + 's' : '',
        '--pk-progress-pivot-color': props.pivotColor,
        '--pk-progress-pivot-font-size': props.pivotFontSize + 'px'
    }">
        <div :class="[
            bem.e('stroke')
        ]" :style="{
            width: `${props.percentage}%`
        }">
        </div>
        <div :class="[
            bem.e('pivot')
        ]" :style="{
            left: `${props.percentage}%`,
            transform: `translate(-${props.percentage}%,-50%)`
        }" v-if="props.showPivot">
            <slot name="pivot" :percentage="props.percentage"> {{ props.percentage }}%</slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from "@pk-ui/use"
import { progressProps } from "./progress"
import "./progress.less"

const props = defineProps(progressProps)

const bem = useBem('progress')

</script>