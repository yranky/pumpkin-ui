<template>
    <div class="button-container">
        <pk-divider>按钮类型</pk-divider>
        <div class="button-row">
            <pk-button type="primary">主要按钮 primary</pk-button>
            <pk-button type="hazy">朦胧按钮 hazy</pk-button>
            <pk-button type="outline">边框按钮 outline</pk-button>
            <pk-button type="ghost">幽灵按钮 ghost</pk-button>
            <pk-button type="link">链接按钮 link</pk-button>
        </div>

        <pk-divider>子文案</pk-divider>
        <div class="button-row">
            <pk-button type="primary" sub-text="我是子文案我是子文案">主要按钮 primary</pk-button>
            <pk-button type="hazy" sub-text="我是子文案">朦胧按钮 hazy</pk-button>
            <pk-button type="outline" sub-text="我是子文案我是子文案我是子文案">边框按钮 outline</pk-button>
            <pk-button type="ghost" sub-text="我是子文案我是子文案我是子文案我是子文案我是子文案我是子文案我是子文案我是子文案我是子文案我是子文案">幽灵按钮 ghost</pk-button>
            <pk-button type="link" sub-text="我是子文案">链接按钮 link</pk-button>
        </div>

        <pk-divider>按钮尺寸</pk-divider>
        <div class="button-row">
            <pk-button type="primary" size="xl">大按钮 xl</pk-button>
            <pk-button type="primary" size="l">大按钮 l</pk-button>
            <pk-button type="primary" size="m">中按钮 m</pk-button>
            <pk-button type="primary" size="s">小按钮 s</pk-button>
            <pk-button type="primary" size="xs">超小按钮 xs</pk-button>
        </div>

        <pk-divider>圆形按钮</pk-divider>
        <div class="button-row">
            <pk-button type="primary" sub-text="我是子文案我是子文案" round>圆形按钮</pk-button>
            <pk-button type="primary" round>圆形按钮</pk-button>
        </div>

        <pk-divider>方形按钮</pk-divider>
        <div class="button-row">
            <pk-button type="primary" sub-text="我是子文案我是子文案" square>方形按钮</pk-button>
            <pk-button type="primary" square>方形按钮</pk-button>
        </div>

        <pk-divider>块级元素</pk-divider>
        <div class="button-row">
            <pk-button type="primary" sub-text="我是子文案我是子文案" block>块级元素</pk-button>
            <pk-button type="primary" block>块级元素</pk-button>
        </div>

        <pk-divider>禁用按钮</pk-divider>
        <div class="button-row">
            <pk-button type="primary" sub-text="我是子文案我是子文案" disabled>禁用按钮</pk-button>
            <pk-button type="primary" disabled>禁用按钮</pk-button>
        </div>

        <pk-divider>危险按钮</pk-divider>
        <div class="button-row">
            <pk-button type="primary" sub-text="我是子文案我是子文案" danger>危险按钮</pk-button>
            <pk-button type="primary" danger>危险按钮</pk-button>
        </div>

        <pk-divider>警告按钮</pk-divider>
        <div class="button-row">
            <pk-button type="primary" sub-text="我是子文案我是子文案" warning>警告按钮</pk-button>
            <pk-button type="primary" warning>警告按钮</pk-button>
        </div>

        <pk-divider>自定义颜色</pk-divider>
        <div class="button-row">
            <pk-button type="primary" color="#65da79">自定义颜色</pk-button>
            <pk-button type="primary" color="linear-gradient(90deg,#F83600 0%,#F9D423 100%)">渐变色</pk-button>
        </div>

        <pk-divider>自定义文字颜色</pk-divider>
        <div class="button-row">
            <pk-button type="primary" text-color="#000000" color="#ffffff">自定义文字颜色</pk-button>
            <pk-button type="primary" text-color="#000000"
                color="linear-gradient(90deg,#F83600 0%,#F9D423 100%)">自定义文字颜色</pk-button>
        </div>

        <pk-divider>加载状态</pk-divider>
        <div class="button-row">
            <pk-button type="primary" loading>默认图标样式</pk-button>
            <pk-button type="primary" loading loading-type="spinner">spinner图标样式</pk-button>
            <pk-button type="primary" loading loading-type="circular" loading-size="35px">35px</pk-button>
        </div>


    </div>
</template>
<script lang="ts" setup>
import { PkButton, PkDivider } from '@pk-ui/mobile'
import { computed, ref } from 'vue';


</script>
<style lang="less" scoped>
.button-container {
    padding: 10px;

    .button-row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        :deep(.pk-button) {
            margin: 5px;
        }
    }
}
</style>