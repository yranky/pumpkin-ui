<template>
    <div class="picker-container">
        <pk-cell-group>
            <pk-cell is-link @click="showDefaultPicker">
                <template #title>基础用法</template>
            </pk-cell>
            <pk-cell is-link @click="showChangeToolbar">
                <template #title>修改toolbar</template>
            </pk-cell>
            <pk-cell is-link @click="showDefaultValuePicker">
                <template #title>设置默认值</template>
            </pk-cell>
            <pk-cell is-link @click="showOnChangeToolbar">
                <template #title>监听onChange事件</template>
            </pk-cell>
            <pk-cell is-link @click="showNotCloseOnPressOverlay">
                <template #title>禁用点击overlay关闭</template>
            </pk-cell>
        </pk-cell-group>
    </div>
</template>
<script lang="ts" setup>
import { PkCellGroup, Toast, PkCell, Picker } from "@pk-ui/mobile"
const items = [{
    label: '水果',
    value: '水果',
    children: [{
        label: '苹果',
        value: '苹果'
    }, {
        label: '香蕉',
        value: '香蕉'
    }, {
        label: '橙子',
        value: '橙子',
        children: [
            {
                label: '甜',
                value: '甜'
            },
            {
                label: '酸',
                value: '酸'
            }
        ]
    }]
}]

const showDefaultPicker = () => {
    Picker.showPicker(items).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.label))}`)
        else Toast.showToast('取消选择')
    })
}

const showChangeToolbar = () => {
    Picker.showPicker({
        items,
        cancelText: '我要取消',
        confirmText: '我要确定',
        title: '请选择'
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.label))}`)
        else Toast.showToast('取消选择')
    })
}

const showOnChangeToolbar = () => {
    Picker.showPicker({
        items,
        onChange: (values) => {
            Toast.showToast(`值变化:${JSON.stringify(values.map(item => item.label))}`)
        }
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.label))}`)
        else Toast.showToast('取消选择')
    })
}

const showDefaultValuePicker = () => {
    Picker.showPicker({
        items,
        current: ['水果', '橙子', '酸']
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.label))}`)
        else Toast.showToast('取消选择')
    })
}

const showNotCloseOnPressOverlay = () => {
    Picker.showPicker({
        items,
        closeOnPressOverlay: false
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.label))}`)
        else Toast.showToast('取消选择')
    })
}


</script>
<style lang="less" scoped>
.picker-container {
    padding: 10px 0;
}
</style>