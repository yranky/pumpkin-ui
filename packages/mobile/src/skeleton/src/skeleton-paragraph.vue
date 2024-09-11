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
import { computed, inject, onBeforeUnmount, ref } from 'vue'
import { isEmptyValue } from '@pk-ui/utils'
import { ISkeletonProvider, skeletonProviderId } from './types'

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
        if (isEmptyValue(props.widths[i])) {
            if (i < rowNumber - 1) rowWidths.push('100%')
            else rowWidths.push('60%')
        }
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



const { addSkeleton, removeSkeleton } = inject<ISkeletonProvider>(skeletonProviderId, {})
const skeletonId = ref(Symbol())
addSkeleton && addSkeleton({
    id: skeletonId.value
})


onBeforeUnmount(() => {
    removeSkeleton && removeSkeleton(skeletonId.value)
})

</script>