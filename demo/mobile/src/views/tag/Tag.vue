<template>
    <div class="tag-container">
        <pk-divider>基础用法</pk-divider>
        <div class="tag-item">
            <pk-tag>标签</pk-tag>
        </div>
        <pk-divider>大小</pk-divider>
        <div class="tag-items">
            <div class="tag-item">
                <pk-tag size="l">大</pk-tag>
            </div>
            <div class="tag-item">
                <pk-tag size="m">中</pk-tag>
            </div>
            <div class="tag-item">
                <pk-tag size="s">小</pk-tag>
            </div>
        </div>
        <pk-divider>类型</pk-divider>
        <div class="tag-items">
            <div class="tag-item">
                <pk-tag type="primary">主要 primary</pk-tag>
            </div>
            <div class="tag-item">
                <pk-tag type="hazy">朦胧 hazy</pk-tag>
            </div>
            <div class="tag-item">
                <pk-tag type="ghost">幽灵 ghost</pk-tag>
            </div>
        </div>
        <pk-divider>关闭</pk-divider>
        <div class="tag-items">
            <div class="tag-item">
                <pk-tag type="primary" size="l" closable>关闭按钮</pk-tag>
            </div>
            <div class="tag-item">
                <pk-tag type="hazy" size="l" closable>关闭按钮</pk-tag>
            </div>
            <div class="tag-item">
                <pk-tag type="ghost" size="l" closable>关闭按钮</pk-tag>
            </div>
        </div>
        <pk-divider>自定义颜色</pk-divider>
        <div class="tag-items">
            <div class="tag-item">
                <pk-tag type="primary" size="l" closable background="#F92F2F">#F92F2F</pk-tag>
            </div>
            <div class="tag-item">
                <pk-tag type="primary" size="l" closable background="#F92F2F" text-color="black">#F92F2F，黑色字体</pk-tag>
            </div>
            <div class="tag-item">
                <pk-tag type="hazy" size="l" closable background="#F92F2F">#F92F2F</pk-tag>
            </div>
            <div class="tag-item">
                <pk-tag type="ghost" size="l" closable background="#F92F2F">#F92F2F</pk-tag>
            </div>
        </div>
        <pk-divider>自定义右侧关闭图标</pk-divider>
        <div class="tag-items">
            <div class="tag-item">
                <pk-tag type="primary" size="l" closable icon="bulb-outlined">自定义图标</pk-tag>
            </div>
            <div class="tag-item">
                <pk-tag type="primary" size="l" closable icon="bulb-outlined" background="#F92F2F">自定义图标</pk-tag>
            </div>
            <div class="tag-item">
                <pk-tag type="hazy" size="l" closable icon="bulb-outlined">自定义图标</pk-tag>
            </div>
            <div class="tag-item">
                <pk-tag type="ghost" size="l" closable icon="bulb-outlined">自定义图标</pk-tag>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { PkTag, PkDivider } from '@pumpkin-ui/mobile'

</script>
<style lang="less" scoped>
.tag-container {
    padding: 10px 0;

    .tag-items {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .tag-item {
            margin: 3px 0;
            margin-right: 10px;
        }
    }
}
</style>