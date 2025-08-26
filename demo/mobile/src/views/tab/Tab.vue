<template>
    <div class="tab-container">
        <pk-tabs v-model="currentModel" @on-change="onChange">
            <pk-tab :title="tabText" v-if="showTab1" :name="1"></pk-tab>
            <pk-tab title="标签2" :name="2">2</pk-tab>
            <pk-tab title="标签3" :name="3">3</pk-tab>
            <pk-tab title="标签4" :name="4">4</pk-tab>
            <pk-tab title="标签5" :name="5">5</pk-tab>
            <pk-tab title="标签6" :name="6">6</pk-tab>
            <pk-tab title="标签7" :name="7">7</pk-tab>
            <pk-tab title="标签8" :name="8">8</pk-tab>
            <pk-tab title="标签9" :name="9">9</pk-tab>
            <pk-tab title="标签0" :name="99">0</pk-tab>
            <!-- <pk-tab title="标签1" v-if="showTab1"></pk-tab>
            <pk-tab title="标签66" v-if="showTab1"></pk-tab>
            <pk-tab title="标签666" v-if="showTab1"></pk-tab>
            <pk-tab title="标签66666" v-if="showTab2"></pk-tab> -->
        </pk-tabs>
        <pk-tabs v-model="currentModel" @on-change="onChange" :scrollable="false">
            <pk-tab :title="tabText" v-if="showTab1" :name="1"></pk-tab>
            <pk-tab title="标签2" :name="2">2</pk-tab>
            <pk-tab title="标签3" :name="3">3</pk-tab>
            <pk-tab title="标签4" :name="4">4</pk-tab>
            <pk-tab title="标签5" :name="5">5</pk-tab>
            <pk-tab title="标签6" :name="6">6</pk-tab>
            <pk-tab title="标签7" :name="7">7</pk-tab>
            <pk-tab title="标签8" :name="8">8</pk-tab>
            <pk-tab title="标签9" :name="9">9</pk-tab>
            <pk-tab title="标签0" :name="99">0</pk-tab>
            <!-- <pk-tab title="标签1" v-if="showTab1"></pk-tab>
            <pk-tab title="标签66" v-if="showTab1"></pk-tab>
            <pk-tab title="标签666" v-if="showTab1"></pk-tab>
            <pk-tab title="标签66666" v-if="showTab2"></pk-tab> -->
        </pk-tabs>
        <pk-tabs>
            <pk-tab title="标签2">标签2</pk-tab>
            <pk-tab title="标签3">标签3s</pk-tab>
        </pk-tabs>
    </div>
</template>
<script lang="ts" setup>
import { PkTab, PkTabs } from '@pumpkin-ui/mobile'
import { ref, watch } from 'vue'

const showTab1 = ref(false)
const showTab2 = ref(false)

const currentModel = ref(99)

watch(currentModel, (val) => {
    console.log('currentModel', val)
}, {
    immediate: true
})

const tabText = ref('标签6')

setTimeout(() => {
    tabText.value = '标签6-1'
}, 8000)

setTimeout(() => {
    showTab1.value = true

    setTimeout(() => {
        showTab2.value = true
    })
}, 3000)

const onChange = (val, title) => {
    console.log(val, title)
}
</script>
<style lang="less" scoped>
.tab-container {
    padding: 10px 0;
}
</style>