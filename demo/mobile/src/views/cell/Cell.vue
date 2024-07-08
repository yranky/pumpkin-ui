<template>
    <div class="cell-container">
        <pk-divider>基础用法</pk-divider>
        <pk-cell title="标题" value="内容"></pk-cell>
        <pk-cell title="标题2" value="内容2"></pk-cell>

        <pk-divider>展示右箭头</pk-divider>
        <pk-cell title="标题" value="内容" is-link></pk-cell>
        <pk-cell title="标题2" value="内容2" is-link></pk-cell>

        <pk-divider>展示分割线</pk-divider>
        <pk-cell title="显示分割线" value="内容内容内容内容内容内容内容内容内容内容内容内容内容"></pk-cell>
        <pk-cell title="隐藏分割线" value="内容2" :border="false"></pk-cell>

        <pk-divider>星号</pk-divider>
        <pk-cell title="显示星号" value="内容" required></pk-cell>

        <pk-divider>垂直布局</pk-divider>
        <pk-cell title="垂直布局" value="内容" vertical></pk-cell>
        <pk-cell title="垂直布局" value="内容" vertical is-link></pk-cell>

    </div>
</template>
<script lang="ts" setup>
import { PkCell, PkDivider } from "@pk-ui/mobile";

</script>
<style lang="less" scoped>
.cell-container {
    padding: 10px 0;
}
</style>