<template>
    <div :class="[
        bem.b(),
        bem.eqm('active', props.active),
        bem.m(props.shape)
    ]">

    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import './skeleton-avatar.less'
import { skeletonAvatarProps } from './skeleton-avatar'
import { inject, onBeforeUnmount, ref } from 'vue'
import { ISkeletonProvider, skeletonProviderId } from './types'

defineOptions({
    name: 'PkSkeletonAvatar'
})

const bem = useBem('skeleton-avatar')
const props = defineProps(skeletonAvatarProps)



const { addSkeleton, removeSkeleton } = inject<ISkeletonProvider>(skeletonProviderId, {})
const skeletonId = ref(Symbol())
addSkeleton && addSkeleton({
    id: skeletonId.value
})


onBeforeUnmount(() => {
    removeSkeleton && removeSkeleton(skeletonId.value)
})

</script>