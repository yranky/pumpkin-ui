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

defineOptions({
    name: 'PkSkeletonAvatar'
})

const bem = useBem('skeleton-avatar')
const props = defineProps(skeletonAvatarProps)

</script>