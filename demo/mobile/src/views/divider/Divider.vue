<template>
    <div class="divider-container">
        <div class="title">基础用法</div>
        <pk-divider />
        <br />

        <div class="title">自定义文本</div>
        <pk-divider>自定义文本</pk-divider>
        <br />

        <div class="title">虚线</div>
        <pk-divider dashed>虚线</pk-divider>
        <br />

        <div class="title">自定义颜色</div>
        <pk-divider border-color="red">实线</pk-divider>
        <pk-divider dashed border-color="red">虚线</pk-divider>
        <pk-divider dashed border-color="red" color="red">字体颜色</pk-divider>
        <br />


        <div class="title">内容文字位置</div>
        <pk-divider content-position="left">左侧</pk-divider>
        <pk-divider>默认中间</pk-divider>
        <pk-divider content-position="right">右侧</pk-divider>
        <pk-divider content-position="right">我是长文本我是长文本我是长文本我是长文本我是长文本我是长文本</pk-divider>
        <br />


        <div class="title">分割线粗细</div>
        <pk-divider :size="2">分割线粗细 2px</pk-divider>
        <pk-divider :size="2" dashed>分割线粗细 2px</pk-divider>

    </div>
</template>
<script lang="ts" setup>
import { PkDivider } from "@pumpkin-ui/mobile"

</script>
<style lang="less" scoped>
.divider-container {
    padding: 10px 0;

    .title {
        font-size: 12px;
        padding: 5px 10px;
        color: var(--pk-text-color-secondary)
    }
}
</style>