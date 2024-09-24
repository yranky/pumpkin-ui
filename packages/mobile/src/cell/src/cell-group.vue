<template>
    <div :class="[
        bem.b(),
        bem.eqm('border', !props.lastHideBorder)
    ]">
        <div :class="[
            bem.e('header')
        ]">
            <div :class="[
                bem.e('title')
            ]">
                <slot name="title">
                    {{ props.title }}
                </slot>
            </div>
            <div :class="[
                bem.e('extra')
            ]">
                <slot name="extra"></slot>
            </div>
        </div>
        <div :class="[
            bem.e('content')
        ]">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { cellGroupProps } from './cell-group'
import { useBem } from '@pumpkin-ui/use'
import "./cell-group.less"

const props = defineProps(cellGroupProps)

const bem = useBem('cell-group')
</script>