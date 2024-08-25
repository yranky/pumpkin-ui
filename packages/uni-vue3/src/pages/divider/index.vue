<template>
    <view class="divider-container">
        <view class="title">基础用法</view>
        <pk-divider />
        <br />

        <view class="title">自定义文本</view>
        <pk-divider>自定义文本</pk-divider>
        <br />

        <view class="title">虚线</view>
        <pk-divider dashed>虚线</pk-divider>
        <br />

        <view class="title">自定义颜色</view>
        <pk-divider border-color="red">实线</pk-divider>
        <pk-divider dashed border-color="red">虚线</pk-divider>
        <pk-divider dashed border-color="red" color="red">字体颜色</pk-divider>
        <br />


        <view class="title">内容文字位置</view>
        <pk-divider content-position="left">左侧</pk-divider>
        <pk-divider>默认中间</pk-divider>
        <pk-divider content-position="right">右侧</pk-divider>
        <pk-divider content-position="right">我是长文本我是长文本我是长文本我是长文本我是长文本我是长文本</pk-divider>
        <br />


        <view class="title">分割线粗细</view>
        <pk-divider :size="4">分割线粗细 4rpx</pk-divider>
        <pk-divider :size="4" dashed>分割线粗细 4rpx</pk-divider>

    </view>
</template>
<script lang="ts" setup>
import pkDivider from '@/pk-ui/components/pk-divider/pk-divider.vue'

</script>
<style lang="less" scoped>
.divider-container {
    padding: 20rpx 0;

    .title {
        font-size: 24rpx;
        padding: 10rpx 20rpx;
        color: var(--pk-text-color-secondary)
    }
}
</style>