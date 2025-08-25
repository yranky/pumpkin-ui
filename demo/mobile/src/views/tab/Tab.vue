<template>
    <div class="tab-container">
        <pk-tabs>
            <pk-tab :title="tabText" v-if="showTab1"></pk-tab>
            <pk-tab title="标签2"></pk-tab>
            <pk-tab title="标签3"></pk-tab>
            <pk-tab title="标签1" v-if="showTab1"></pk-tab>
            <pk-tab title="标签66" v-if="showTab1"></pk-tab>
            <pk-tab title="标签666" v-if="showTab1"></pk-tab>
            <pk-tab title="标签66666" v-if="showTab2"></pk-tab>
        </pk-tabs>
    </div>
</template>
<script lang="ts" setup>
import { PkTab, PkTabs } from '@pumpkin-ui/mobile'
import { ref } from 'vue'

const showTab1 = ref(false)
const showTab2 = ref(false)

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

</script>
<style lang="less" scoped>
.tab-container {
    padding: 10px 0;
}
</style>