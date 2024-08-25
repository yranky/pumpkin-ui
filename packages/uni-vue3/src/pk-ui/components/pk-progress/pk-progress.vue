<template>
    <view :class="[
        bem.b(),
        bem.eqm('square', props.square)
    ]" :style="{
        height: isEmptyValue(props.strokeHeight) ? '' : props.strokeHeight + 'rpx',
        background: props.trackBackground || ''
    }">
        <view :class="[
            bem.e('stroke')
        ]" :style="{
            width: `${props.percentage}%`,
            background: props.background || '',
            transitionDuration: isEmptyValue(props.transitionDuration) ? '' : props.transitionDuration + 's'
        }">
        </view>
        <view :class="[
            bem.e('pivot')
        ]" :style="{
            left: `${props.percentage}%`,
            transform: `translate(-${props.percentage}%,-50%)`,
            transitionDuration: isEmptyValue(props.transitionDuration) ? '' : props.transitionDuration + 's',
            color: props.pivotColor || '',
            fontSize: isEmptyValue(props.pivotFontSize) ? '' : props.pivotFontSize + 'rpx'
        }" v-if="props.showPivot">
            <slot name="pivot" :percentage="props.percentage"> {{ props.percentage }}%</slot>
        </view>
    </view>
</template>
<script lang="ts" setup>
import { useBem } from "@pk-ui/use"
import { progressProps } from "./pk-progress"
import "./pk-progress.less"
import { isEmptyValue } from "@pk-ui/utils"

defineOptions({
    name: 'PkPopup',
})

const props = defineProps(progressProps)

const bem = useBem('progress')

</script>