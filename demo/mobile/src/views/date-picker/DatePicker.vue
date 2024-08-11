<template>
    <div class="date-picker-container">
        <pk-cell-group>
            <pk-cell is-link @click="showDefaultDatePicker">
                <template #title>基础用法</template>
            </pk-cell>
            <pk-cell is-link @click="showDatePickerWithDefaultDate">
                <template #title>默认值(2022/01/01)</template>
            </pk-cell>
            <pk-cell is-link @click="showDatePickerWidthMinMax">
                <template #title>设置日期范围(2022/01/01 - 2022/12/31)</template>
            </pk-cell>
            <pk-cell is-link @click="showDatePickerTime">
                <template #title>时间选择</template>
            </pk-cell>
            <pk-cell is-link @click="showDatePickerWithDefaultTime">
                <template #title>时间选择默认值(12:00:00)</template>
            </pk-cell>
            <pk-cell is-link @click="showItemFilterDatePicker">
                <template #title>选项过滤(不显示7月)</template>
            </pk-cell>
            <pk-cell is-link @click="showItemFormatterDatePicker">
                <template #title>选项label自定义</template>
            </pk-cell>
            <pk-cell is-link @click="showNotCloseOnPressOverlay">
                <template #title>禁用点击overlay关闭</template>
            </pk-cell>
        </pk-cell-group>
    </div>
</template>
<script lang="ts" setup>
import { PkCellGroup, Toast, PkCell, DatePicker } from "@pk-ui/mobile"

const showDefaultDatePicker = () => {
    DatePicker.showDatePicker().then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

const showDatePickerWithDefaultDate = () => {
    DatePicker.showDatePicker({
        current: new Date(2022, 0, 1)
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

const showDatePickerWidthMinMax = () => {
    DatePicker.showDatePicker({
        min: new Date(2022, 0, 1),
        max: new Date(2022, 11, 31)
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

const showDatePickerTime = () => {
    DatePicker.showDatePicker({
        type: ['hour', 'minute', 'second']
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

const showDatePickerWithDefaultTime = () => {
    DatePicker.showDatePicker({
        type: ['hour', 'minute', 'second'],
        current: new Date(2024, 0, 1, 12, 0, 0)
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

const showItemFilterDatePicker = () => {
    DatePicker.showDatePicker({
        filter: (type, item) => {
            if (type === 'month') return item.value !== 7

            return true
        }
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

const showItemFormatterDatePicker = () => {
    DatePicker.showDatePicker({
        formatter: (type, item) => {
            let unit = ''
            if (type === 'year') unit = '年'
            else if (type === 'month') unit = '月'
            else if (type === 'day') unit = '日'

            return {
                ...item,
                label: item.label + unit
            }
        }
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

const showNotCloseOnPressOverlay = () => {
    DatePicker.showDatePicker({
        closeOnPressOverlay: false
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

</script>
<style lang="less" scoped>
.date-picker-container {
    padding: 10px 0;
}
</style>