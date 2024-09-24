<template>
    <div class="badge-container">
        <pk-divider>基础用法</pk-divider>
        <pk-badge :content="1111">
            <div class="badge-item"></div>
        </pk-badge>
        <pk-badge :content="20">
            <div class="badge-item"></div>
        </pk-badge>
        <pk-badge :content="1">
            <div class="badge-item"></div>
        </pk-badge>
        <pk-badge content="hot">
            <div class="badge-item"></div>
        </pk-badge>
        <pk-badge content="自定义">
            <div class="badge-item"></div>
        </pk-badge>
        <pk-divider>小红点</pk-divider>
        <pk-badge dot>
            <div class="badge-item"></div>
        </pk-badge>
        <pk-divider>偏移</pk-divider>
        <pk-badge dot :offset="[-5, 5]">
            <div class="badge-item"></div>
        </pk-badge>
        <pk-divider>数字0显隐</pk-divider>
        <pk-badge :content="0">
            <div class="badge-item"></div>
        </pk-badge>
        <pk-badge :content="0" show-zero>
            <div class="badge-item"></div>
        </pk-badge>
        <pk-divider>自定义颜色</pk-divider>
        <pk-badge :content="100" background="#42b983">
            <div class="badge-item"></div>
        </pk-badge>
        <pk-divider>最大数值</pk-divider>
        <pk-badge :content="10000" :max="10">
            <div class="badge-item"></div>
        </pk-badge>
        <pk-divider>单独使用</pk-divider>
        <pk-badge :content="10000"></pk-badge>
        <pk-badge content="hot"></pk-badge>
        <pk-badge content="自定义文字"></pk-badge>
        <pk-badge content="自定义文字" background="#42b983"></pk-badge>
    </div>
</template>
<script lang="ts" setup>
import { PkDivider, PkBadge } from '@pumpkin-ui/mobile'
import { computed, ref } from 'vue'


</script>
<style lang="less" scoped>
.badge-container {
    padding: 10px 0;

    .badge-item {
        width: 50px;
        height: 50px;
        background: black;
        margin-left: 20px;
        position: relative;
    }
}
</style>