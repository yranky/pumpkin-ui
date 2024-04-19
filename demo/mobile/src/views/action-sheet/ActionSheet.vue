<template>
    <div class="action-sheet-container">
        <pk-button @click="show = !show">显示actionSheet</pk-button>
        <pk-action-sheet :actions="[
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
            }
        ]" v-model="show" title="测试" />
    </div>
</template>
<script lang="ts" setup>
import { PkActionSheet, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const show = ref<boolean>(true)

</script>
<style lang="less" scoped>
.action-sheet-container {
    padding: 10px 0;
}
</style>