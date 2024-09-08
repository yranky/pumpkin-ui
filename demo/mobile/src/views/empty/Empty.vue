<template>
    <div class="empty-container">
        <pk-divider>基础用法</pk-divider>
        <pk-empty></pk-empty>

        <pk-divider>自定义图标</pk-divider>
        <pk-empty icon="https://usc.douyeblog.top/img/logo.png"></pk-empty>

        <pk-divider>自定义文案</pk-divider>
        <pk-empty>自定义文案</pk-empty>
    </div>
</template>
<script lang="ts" setup>
import { PkEmpty, PkDivider } from '@pk-ui/mobile'


</script>
<style lang="less" scoped>
.empty-container {
    padding: 10px 0;
}
</style>