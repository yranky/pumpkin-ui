<template>
    <div class="skeleton-container">
        <pk-divider>基础用法</pk-divider>
        <pk-skeleton :loading="true"></pk-skeleton>

        <pk-divider>无动画</pk-divider>
        <pk-skeleton :loading="true" :active="false"></pk-skeleton>

        <pk-divider>不显示头像</pk-divider>
        <pk-skeleton :loading="true" :avatar="false"></pk-skeleton>

        <pk-divider>不显示标题</pk-divider>
        <pk-skeleton :loading="true" :title="false"></pk-skeleton>

        <pk-divider>不显示段落</pk-divider>
        <pk-skeleton :loading="true" :paragraph="false"></pk-skeleton>

        <pk-divider>段落行数6</pk-divider>
        <pk-skeleton :loading="true" :rows="6"></pk-skeleton>

        <pk-divider>自定义</pk-divider>
        <pk-skeleton :loading="true">
            <template #template>
                <pk-skeleton-avatar></pk-skeleton-avatar>
                <pk-skeleton-paragraph :rows="3" :widths="['80%', 90, 100]"></pk-skeleton-paragraph>
                <pk-skeleton-paragraph></pk-skeleton-paragraph>
            </template>
        </pk-skeleton>

    </div>
</template>
<script lang="ts" setup>
import { PkSkeleton, PkSkeletonAvatar, PkSkeletonParagraph, PkDivider } from '@pumpkin-ui/mobile'

</script>
<style lang="less" scoped>
.skeleton-container {
    padding: 10px;
}
</style>