<template>
    <div class="picker-container">
        <pk-button @click="show = !show">显示actionSheet</pk-button>
        <pk-picker :actions="[
            {
                name: '选项一'
            },
            {
                name: '选项二',
                color: 'red'
            }, {
                name: '选项三',
                loading: true
            }, {
                name: '选项四',
                disabled: true
            }, {
                name: '选项五'
            }, {
                name: '选项6'
            }, {
                name: '选项7'
            }, {
                name: '选项8'
            }, {
                name: '选项9'
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