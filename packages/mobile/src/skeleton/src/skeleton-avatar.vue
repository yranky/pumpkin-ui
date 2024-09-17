<template>
    <div :class="[
        bem.b(),
        bem.eqm('active', active),
        bem.m(props.shape)
    ]">

    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pk-ui/use'
import './skeleton-avatar.less'
import { skeletonAvatarProps } from './skeleton-avatar'
import { computed, inject, onBeforeUnmount, ref, unref } from 'vue'
import { ISkeletonProvider, skeletonProviderId } from './types'
import { isEmptyValue } from '@pk-ui/utils'

defineOptions({
    name: 'PkSkeletonAvatar'
})

const bem = useBem('skeleton-avatar')
const props = defineProps(skeletonAvatarProps)


const active = computed(() => isEmptyValue(props.active) ? unref(_active) : props.active)
const { addSkeleton, removeSkeleton, active: _active } = inject<ISkeletonProvider>(skeletonProviderId, {
    active: true
})
const skeletonId = ref(Symbol())
addSkeleton && addSkeleton({
    id: skeletonId.value
})


onBeforeUnmount(() => {
    removeSkeleton && removeSkeleton(skeletonId.value)
})

</script>