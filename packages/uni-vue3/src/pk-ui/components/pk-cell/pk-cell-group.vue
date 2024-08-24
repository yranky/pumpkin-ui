<template>
    <view :class="[
        bem.b(),
        bem.eqm('border', !props.lastHideBorder)
    ]">
        <view :class="[
            bem.e('header')
        ]">
            <view :class="[
                bem.e('title')
            ]">
                <slot name="title">
                    {{ props.title }}
                </slot>
            </view>
            <view :class="[
                bem.e('extra')
            ]">
                <slot name="extra"></slot>
            </view>
        </view>
        <view :class="[
            bem.e('content')
        ]">
            <slot></slot>
        </view>
    </view>
</template>
<script lang="ts" setup>
import { cellGroupProps } from './pk-cell-group'
import { useBem } from '@pk-ui/use'
import "./pk-cell-group.less"

defineOptions({
    name: 'PkCellGroup',
})

const props = defineProps(cellGroupProps)

const bem = useBem('cell-group')
</script>