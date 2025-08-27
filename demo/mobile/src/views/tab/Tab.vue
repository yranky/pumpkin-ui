<template>
    <div class="tab-container">
        <pk-divider>基本使用</pk-divider>
        <pk-tabs>
            <pk-tab title="标签1">标签1内容</pk-tab>
            <pk-tab title="标签2">标签2内容</pk-tab>
        </pk-tabs>
        <pk-divider>可滑动</pk-divider>
        <pk-tabs>
            <pk-tab title="标签1" :name="1">1</pk-tab>
            <pk-tab title="标签2" :name="2">2</pk-tab>
            <pk-tab title="标签3" :name="3">3</pk-tab>
            <pk-tab title="标签4" :name="4">4</pk-tab>
            <pk-tab title="标签5" :name="5">5</pk-tab>
            <pk-tab title="标签6" :name="6">6</pk-tab>
            <pk-tab title="标签7" :name="7">7</pk-tab>
            <pk-tab title="标签8" :name="8">8</pk-tab>
            <pk-tab title="标签最后一个" :name="9">9</pk-tab>
        </pk-tabs>
        <pk-divider>默认值</pk-divider>
        <pk-tabs :model-value="5">
            <pk-tab title="标签1" :name="1">1</pk-tab>
            <pk-tab title="标签2" :name="2">2</pk-tab>
            <pk-tab title="标签3" :name="3">3</pk-tab>
            <pk-tab title="标签4" :name="4">4</pk-tab>
            <pk-tab title="标签5" :name="5">5</pk-tab>
            <pk-tab title="标签6" :name="6">6</pk-tab>
            <pk-tab title="标签7" :name="7">7</pk-tab>
            <pk-tab title="标签8" :name="8">8</pk-tab>
            <pk-tab title="标签最后一个" :name="9">9</pk-tab>
        </pk-tabs>



        <pk-divider>onChange</pk-divider>
        <pk-tabs @on-change="(value, title) => Toast.show(`title:${title},value:${value}`)">
            <pk-tab title="标签1" :name="1">1</pk-tab>
            <pk-tab title="标签2" :name="2">2</pk-tab>
            <pk-tab title="标签3" :name="3">3</pk-tab>
            <pk-tab title="标签4" :name="4">4</pk-tab>
            <pk-tab title="标签5" :name="5">5</pk-tab>
            <pk-tab title="标签6" :name="6">6</pk-tab>
            <pk-tab title="标签7" :name="7">7</pk-tab>
            <pk-tab title="标签8" :name="8">8</pk-tab>
            <pk-tab title="标签最后一个" :name="9">9</pk-tab>
        </pk-tabs>
    </div>
</template>
<script lang="ts" setup>
import { PkTab, PkTabs, PkDivider, Toast } from '@pumpkin-ui/mobile'

</script>
<style lang="less" scoped>
.tab-container {
    padding: 10px 0;
}
</style>