<template>
    <view class="toast-container">
        <pk-cell-group>
            <!-- <pk-cell is-link @click="Toast.showToast('基础用法')">
                <template #title>基础用法</template>
</pk-cell>
<pk-cell is-link @click="showLoading">
    <template #title>加载用法</template>
</pk-cell>
<pk-cell is-link @click="showLoadingClose">
    <template #title>加载用法（通过close关闭）</template>
</pk-cell>
<pk-cell is-link @click="Toast.showToast({
                text: 'top',
                position: 'top'
            })">
    <template #title>top</template>
</pk-cell> -->
            <!-- <pk-cell is-link @click="Toast.showToast({
                text: 'bottom',
                position: 'bottom'
            })">
                <template #title>bottom</template>
            </pk-cell>
            <pk-cell is-link @click="Toast.showToast({
                text: 'center',
                position: 'center'
            })">
                <template #title>center</template>
            </pk-cell>
            <pk-cell is-link @click="Toast.setMultiple(true); Toast.showToast('开启同时显示多个')">
                <template #title>开启同时显示多个</template>
            </pk-cell>
            <pk-cell is-link @click="Toast.setMultiple(false); Toast.showToast('关闭同时显示多个')">
                <template #title>关闭同时显示多个</template>
            </pk-cell> -->
        </pk-cell-group>
        <pk-toast text="测试测试" v-model="toastShow" />
    </view>
</template>
<script lang="ts" setup>
import PkCell from '@/pk-ui/components/pk-cell/pk-cell.vue'
import PkCellGroup from '@/pk-ui/components/pk-cell/pk-cell-group.vue'
import PkToast from '@/pk-ui/components/pk-toast/pk-toast.vue'
import { ref } from 'vue'

// const showLoading = () => {
//     Toast.showLoading('加载加载')

//     setTimeout(() => {
//         Toast.hideLoading()
//     }, 2000)
// }

// const showLoadingClose = () => {
//     const { close } = Toast.showLoading('加载，close关闭')

//     setTimeout(() => {
//         close();
//     }, 2000)
// }

const toastShow = ref(true)

</script>
<style lang="less" scoped>
.toast-container {
    padding: 0;
}
</style>