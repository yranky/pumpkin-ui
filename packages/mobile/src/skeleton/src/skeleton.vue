<template>
    <div :class="[
        bem.b()
    ]">
        <slot name="template" v-if="props.loading">
            <div :class="[
                bem.e('content')
            ]">
                <div :class="[
                    bem.e('image')
                ]" v-if="props.avatar">
                    <skeleton-avatar />
                </div>
                <div :class="[
                    bem.e('paragraph')
                ]" v-if="props.paragraph || props.title">
                    <skeleton-paragraph v-if="props.title" :rows="1" :widths="[40]" />
                    <skeleton-paragraph v-if="props.paragraph" :rows="props.rows" />
                </div>
            </div>
        </slot>
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import { useBem } from '@pumpkin-ui/use'
import './skeleton.less'
import { skeletonProps } from './skeleton'
import { provide, ref, toRefs } from 'vue'
import { ISkeletonExposeToParent, ISkeletonProvider, skeletonProviderId } from './types'
import SkeletonAvatar from './skeleton-avatar.vue'
import SkeletonParagraph from './skeleton-paragraph.vue'

const bem = useBem('skeleton')
const props = defineProps(skeletonProps)
const { active } = toRefs(props)

const skeletons = ref<ISkeletonExposeToParent[]>([])

const addSkeleton = (skeleton: ISkeletonExposeToParent) => {
    skeletons.value.push(skeleton as ISkeletonExposeToParent)
}
const removeSkeleton = (skeletonId: symbol) => {
    skeletons.value = skeletons.value.filter(skeleton => skeleton.id !== skeletonId)
}

provide<ISkeletonProvider>(skeletonProviderId, {
    addSkeleton,
    removeSkeleton,
    active: active
})

</script>