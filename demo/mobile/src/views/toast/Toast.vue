<template>
    <div class="toast-container">
        <pk-cell-group>
            <pk-cell is-link @click="Toast.show('基础用法')">
                <template #title>基础用法</template>
            </pk-cell>
            <pk-cell is-link @click="showLoading">
                <template #title>加载用法</template>
            </pk-cell>
            <pk-cell is-link @click="showLoadingClose">
                <template #title>加载用法（通过close关闭）</template>
            </pk-cell>
            <pk-cell is-link @click="Toast.show({
                text: 'top',
                position: 'top'
            })">
                <template #title>top</template>
            </pk-cell>
            <pk-cell is-link @click="Toast.show({
                text: 'bottom',
                position: 'bottom'
            })">
                <template #title>bottom</template>
            </pk-cell>
            <pk-cell is-link @click="Toast.show({
                text: 'center',
                position: 'center'
            })">
                <template #title>center</template>
            </pk-cell>
            <pk-cell is-link @click="Toast.setMultiple(true); Toast.show('开启同时显示多个')">
                <template #title>开启同时显示多个</template>
            </pk-cell>
            <pk-cell is-link @click="Toast.setMultiple(false); Toast.show('关闭同时显示多个')">
                <template #title>关闭同时显示多个</template>
            </pk-cell>
        </pk-cell-group>
    </div>
</template>
<script lang="ts" setup>
import { Toast, PkButton, PkCell, PkCellGroup } from "@pumpkin-ui/mobile"

const showLoading = () => {
    Toast.showLoading('加载加载')

    setTimeout(() => {
        Toast.hideLoading()
    }, 2000)
}

const showLoadingClose = () => {
    const { close } = Toast.showLoading('加载，close关闭')

    setTimeout(() => {
        close();
    }, 2000)
}

</script>
<style lang="less" scoped>
.toast-container {
    padding: 0;
}
</style>