<template>
    <div class="picker-view-container">
        <pk-divider>基础用法:受控模式</pk-divider>
        <pk-picker-view :items="colItems"></pk-picker-view>
        <pk-divider>默认值</pk-divider>
        <pk-picker-view :items="colItems2" v-model="values"></pk-picker-view>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { PkPickerView, PkDivider } from '@pk-ui/mobile'


const colItems = ref([
    [
        {
            label: '水果',
            value: '水果'
        }, {
            label: '蔬菜',
            value: '蔬菜'
        }
    ],
    [
        {
            label: '选项一',
            value: '选项一'
        }, {
            label: '选项二',
            value: '选项二'
        }
    ]
])

const values = ref(['苹果', '梨', '沙梨', '沙梨2'])

const colItems2 = ref([{
    label: '水果',
    value: '水果',
    children: [{
        label: '苹果',
        value: '苹果'
    }, {
        label: '香蕉',
        value: '香蕉'
    }, {
        label: '梨',
        value: '梨',
        children: [
            {
                label: '雪梨',
                value: '雪梨'
            },
            {
                label: '沙梨',
                value: '沙梨',
                children: [
                    {
                        label: '沙梨1',
                        value: '沙梨1'
                    },
                    {
                        label: '沙梨2',
                        value: '沙梨2'
                    }
                ]
            }
        ]
    }]
}, {
    label: '蔬菜',
    value: '蔬菜',
    children: [{
        label: '土豆',
        value: '土豆'
    }, {
        label: '西红柿',
        value: '西红柿'
    }, {
        label: '黄瓜',
        value: '黄瓜'
    }]
}])
</script>
<style lang="less" scoped>
.picker-view-container {
    padding: 10px 0;
}
</style>