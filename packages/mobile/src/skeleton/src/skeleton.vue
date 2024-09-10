<template>
    <div :class="[
        bem.b()
    ]">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import './skeleton.less'
import { skeletonProps } from './skeleton'

defineOptions({
    name: 'PkSkeleton'
})

const bem = useBem('skeleton')
const props = defineProps(skeletonProps)

</script>