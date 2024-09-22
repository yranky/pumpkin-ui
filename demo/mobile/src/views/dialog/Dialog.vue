<template>
    <div class="dialog-container">
        <pk-cell-group>
            <pk-cell is-link @click="Dialog.show('基础用法')">
                <template #title>基础用法</template>
            </pk-cell>
            <pk-cell is-link @click="Dialog.show({
                messageAlign: 'left',
                message: '我是内容'
            })">
                <template #title>内容左对齐</template>
            </pk-cell>
            <pk-cell is-link @click="Dialog.show({
                messageAlign: 'right',
                message: '我是内容'
            })">
                <template #title>内容右对齐</template>
            </pk-cell>
            <pk-cell is-link @click="Dialog.show({
                title: '标题',
                message: '我是内容'
            })">
                <template #title>标题</template>
            </pk-cell>
            <pk-cell is-link @click="Dialog.show({
                message: '我是内容',
                showClose: true
            })">
                <template #title>显示关闭按钮</template>
            </pk-cell>
            <pk-cell is-link @click="Dialog.show({
                message: '我是内容',
                showCancelButton: false
            })">
                <template #title>不显示取消按钮</template>
            </pk-cell>
            <pk-cell is-link @click="Dialog.show({
                message: '我是内容',
                confirmButtonText: '确认按钮'
            })">
                <template #title>确认按钮文本</template>
            </pk-cell>
            <pk-cell is-link @click="Dialog.show({
                message: '我是内容',
                cancelButtonColor: 'red'
            })">
                <template #title>取消按钮颜色</template>
            </pk-cell>
            <pk-cell is-link @click="Dialog.show({
                message: '我是内容',
                buttonReverse: true
            })">
                <template #title>按钮位置反转</template>
            </pk-cell>
            <pk-cell is-link @click="openEventDialog">
                <template #title>事件监听</template>
            </pk-cell>
            <pk-cell is-link @click="Dialog.show({
                message: '我是内容',
                closeOnPressOverlay: true
            })">
                <template #title>点击遮罩层关闭</template>
            </pk-cell>
        </pk-cell-group>
    </div>
</template>
<script lang="ts" setup>
import { Dialog, PkCellGroup, PkCell, Toast } from '@pk-ui/mobile'

const openEventDialog = () => {
    Dialog.show({
        message: '我是内容',
        onClose: () => {
            console.log('关闭了')
        },
        onClosed: () => {
            console.log('关闭动画结束了')
        },
        onOpen: () => {
            console.log('打开了')
        },
        onOpened: () => {
            console.log('打开动画结束了')
        },
        onConfirm: () => {
            console.log('点击了确定')
            Toast.showToast('点击了确定')
        },
        onCancel: () => {
            console.log('点击了取消')
            Toast.showToast('点击了取消')
        }
    }).then((res => {
        console.log(`promise结果：${JSON.stringify(res)}`)
    }))
}
</script>
<style lang="less" scoped>
.dialog-container {
    padding: 0;
}
</style>