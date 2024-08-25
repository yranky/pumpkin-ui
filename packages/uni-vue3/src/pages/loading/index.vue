<template>
    <view class="loading-container">
        <pk-divider>基础用法</pk-divider>
        <view class="loading-row">
            <pk-loading></pk-loading>
            <pk-loading type="spinner"></pk-loading>
        </view>

        <pk-divider>显示加载文案</pk-divider>
        <view class="loading-row">
            <pk-loading>加载中...</pk-loading>
            <pk-loading type="spinner" text="加载中..."></pk-loading>
        </view>

        <pk-divider>垂直排列</pk-divider>
        <view class="loading-row">
            <pk-loading vertical>加载中...</pk-loading>
        </view>

        <pk-divider>自定义图标大小</pk-divider>
        <view class="loading-row">
            <pk-loading :size="40"></pk-loading>
        </view>

        <pk-divider>自定义图标颜色</pk-divider>
        <view class="loading-row">
            <pk-loading color="red"></pk-loading>
            <pk-loading type="spinner" color="red"></pk-loading>
        </view>

        <pk-divider>自定义文字颜色</pk-divider>
        <view class="loading-row">
            <pk-loading color="red" text-color="red">加载中...</pk-loading>
            <pk-loading type="spinner" color="green" text-color="#FF6F00">加载中...</pk-loading>
        </view>

        <pk-divider>自定义文字大小</pk-divider>
        <view class="loading-row">
            <pk-loading color="red" :text-size="36">加载中...</pk-loading>
        </view>

        <pk-divider>插槽</pk-divider>
        <view class="loading-row">
            <pk-loading color="red">
                <template #icon>
                    <view class="loading-icon"></view>
                </template>
                加载中...
            </pk-loading>
        </view>
    </view>
</template>
<script lang="ts" setup>
import PkLoading from '@/pk-ui/components/pk-loading/pk-loading.vue'
import PkDivider from '@/pk-ui/components/pk-divider/pk-divider.vue'
import { ref } from 'vue'

</script>
<style lang="less" scoped>
.loading-container {
    padding: 20rpx 0;
    color: grey;

    .loading-row {
        display: flex;
    }
}

.loading-icon {
    width: 40rpx;
    height: 40rpx;
    border: 4rpx solid red;
    border-top-color: transparent;
    border-radius: 100%;
    animation: demo-circle infinite 1s linear;
}

@keyframes demo-circle {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>