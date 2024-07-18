<template>
    <div class="toast-container">
        <pk-cell-group>
            <pk-cell is-link @click="showDefaultToast">
                <template #title>显示toast</template>
            </pk-cell>
            <pk-cell is-link @click="showDefaultLoading">
                <template #title>显示loading</template>
            </pk-cell>
        </pk-cell-group>
    </div>
</template>
<script lang="ts" setup>
import { Toast, PkButton, PkCell, PkCellGroup } from "@pk-ui/mobile"
import { ref } from 'vue'

const showDefaultToast = function () {
    Toast.showToast({
        text: '测试测试',
        onClose() {
            console.log('关闭了', this)
        },
        onOpen() {
            console.log('打开了', this)
        },
        onClosed() {
            console.log('关闭结束了', this)
        },
        onOpened() {
            console.log('打开结束了', this)
        }
    })
}

const showDefaultLoading = () => {
    Toast.showLoading()
}

</script>
<style lang="less" scoped>
.toast-container {
    padding: 0;
}
</style>