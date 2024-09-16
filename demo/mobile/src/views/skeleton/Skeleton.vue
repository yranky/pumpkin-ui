<template>
    <div class="skeleton-container">
        <pk-skeleton>
            <!-- <pk-skeleton-avatar />
            <pk-skeleton-avatar shape="square" />
            <pk-skeleton-paragraph :rows="5" :widths="[
                20
            ]" /> -->
        </pk-skeleton>
    </div>
</template>
<script lang="ts" setup>
import { PkSkeleton, PkSkeletonAvatar, PkSkeletonParagraph } from '@pk-ui/mobile'

</script>
<style lang="less" scoped>
.skeleton-container {
    padding: 10px;
}
</style>