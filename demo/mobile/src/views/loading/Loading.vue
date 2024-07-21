<template>
    <div class="loading-container">
        <pk-divider>基础用法</pk-divider>
        <div class="loading-row">
            <pk-loading></pk-loading>
            <pk-loading type="spinner"></pk-loading>
        </div>

        <pk-divider>显示加载文案</pk-divider>
        <div class="loading-row">
            <pk-loading>加载中...</pk-loading>
            <pk-loading type="spinner" text="加载中..."></pk-loading>
        </div>

        <pk-divider>垂直排列</pk-divider>
        <div class="loading-row">
            <pk-loading vertical>加载中...</pk-loading>
        </div>

        <pk-divider>自定义图标大小</pk-divider>
        <div class="loading-row">
            <pk-loading size="20px"></pk-loading>
        </div>

        <pk-divider>自定义图标颜色</pk-divider>
        <div class="loading-row">
            <pk-loading color="red"></pk-loading>
            <pk-loading type="spinner" color="red"></pk-loading>
        </div>

        <pk-divider>自定义文字颜色</pk-divider>
        <div class="loading-row">
            <pk-loading color="red" text-color="red">加载中...</pk-loading>
            <pk-loading type="spinner" color="green" text-color="#FF6F00">加载中...</pk-loading>
        </div>

        <pk-divider>自定义文字大小</pk-divider>
        <div class="loading-row">
            <pk-loading color="red" text-size="18px">加载中...</pk-loading>
        </div>

        <pk-divider>插槽</pk-divider>
        <div class="loading-row">
            <pk-loading color="red">
                <template #icon>
                    <div class="loading-icon"></div>
                </template>
                加载中...
            </pk-loading>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { PkDivider, PkLoading } from "@pk-ui/mobile"
import { ref } from 'vue'

</script>
<style lang="less" scoped>
.loading-container {
    padding: 10px 0;

    .loading-row {
        display: flex;
    }
}

.loading-icon {
    width: 20px;
    height: 20px;
    border: 2px solid red;
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