<template>
    <div :class="[
        bem.b(),
        bem.eqm('active', props.active)
    ]" :style="{
        width: item
    }" v-for="(item, index) in rows" :key="index"></div>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import './skeleton-paragraph.less'
import { skeletonParagraphProps } from './skeleton-paragraph'
import { computed } from 'vue'
import { isEmptyValue } from '@pk-ui/utils'

defineOptions({
    name: 'PkSkeletonParagraph'
})

const bem = useBem('skeleton-paragraph')
const props = defineProps(skeletonParagraphProps)


const rows = computed(() => {
    let rowNumber = props.rows
    if (!(typeof rowNumber === 'number')) rowNumber = 1
    const rowWidths: string[] = []

    for (let i = 0; i < rowNumber; i++) {
        if (isEmptyValue(props.widths[i])) rowWidths.push('100%')
        else {
            let width: string | number = props.widths[i]
            if (typeof width === 'number') {
                width = width > 100 ? 100 : width
                width = `${width}%`
            }
            rowWidths.push(width)
        }
    }

    return rowWidths
})

</script>