<template>
    <div class="picker-container">
        <pk-button @click="show = !show">显示picker</pk-button>
        <pk-picker :items="[
            {
                label: '选项一'
            },
            {
                label: '选项二'
            }, {
                label: '选项三'
            }, {
                label: '选项四'
            }, {
                label: '选项五'
            }, {
                label: '选项6'
            }, {
                label: '选项7'
            }, {
                label: '选项8'
            }, {
                label: '选项9'
            }
        ]" v-model="show" title="测试" />
    </div>
</template>
<script lang="ts" setup>
import { PkOverlay, PkButton, PkLoading, PkPicker } from "@pk-ui/mobile"
import { ref } from 'vue'



const show = ref<boolean>(true)

</script>
<style lang="less" scoped>
.picker-container {
    padding: 10px 0;
}
</style>