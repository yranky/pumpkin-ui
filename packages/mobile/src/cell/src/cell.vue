<template>
    <div :class="[
        bem.b(),
        bem.eqm('border', border)]">
        <div :class="[
        bem.e('top')
    ]">
            <div :class="[
        bem.e('title')
    ]">
                {{ title }}
            </div>

            <div :class="[
        bem.e('value')
    ]">
                {{ value }}
            </div>

            <div v-if="isLink" :class="[
        bem.e('right')
    ]">
                <RightOutlined />
            </div>
        </div>
        <div :class="[
        bem.e('bottom')
    ]">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { cellProps } from './cell'
import { useBem } from '@pk-ui/use'
import { RightOutlined } from '@ant-design/icons-vue'
import "./cell.less"

defineOptions({
    name: 'PkCell',
})

const props = defineProps(cellProps)

const bem = useBem('cell')


</script>