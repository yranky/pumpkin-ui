<template>
    <view class="popup-container">
        <pk-cell-group>
            <pk-cell is-link @click="defaultShow = true">
                <template #title>基础用法示例</template>
            </pk-cell>
            <pk-cell is-link @click="topShow = true">
                <template #title>顶部弹出</template>
            </pk-cell>
            <pk-cell is-link @click="leftShow = true">
                <template #title>左侧弹出</template>
            </pk-cell>
            <pk-cell is-link @click="rightShow = true">
                <template #title>右侧弹出</template>
            </pk-cell>
            <pk-cell is-link @click="bottomShow = true">
                <template #title>底部弹出</template>
            </pk-cell>
            <pk-cell is-link @click="centerShow = true">
                <template #title>中间弹出</template>
            </pk-cell>
            <pk-cell is-link @click="roundShow = true">
                <template #title>圆角弹出层</template>
            </pk-cell>
            <pk-cell is-link @click="backgroundShow = true">
                <template #title>自定义内容区域背景色</template>
            </pk-cell>
        </pk-cell-group>

        <pk-popup v-model="defaultShow">
            <view class="popup-content">
                <pk-button @click="defaultShow = false">点击关闭</pk-button>
            </view>
        </pk-popup>

        <pk-popup v-model="topShow" position="top">
            <view class="popup-content">
                <pk-button @click="topShow = false">点击关闭</pk-button>
            </view>
        </pk-popup>
        <pk-popup v-model="leftShow" position="left">
            <view class="popup-content">
                <pk-button @click="leftShow = false">点击关闭</pk-button>
            </view>
        </pk-popup>
        <pk-popup v-model="rightShow" position="right">
            <view class="popup-content">
                <pk-button @click="rightShow = false">点击关闭</pk-button>
            </view>
        </pk-popup>
        <pk-popup v-model="bottomShow" position="bottom">
            <view class="popup-content">
                <pk-button @click="bottomShow = false">点击关闭</pk-button>
            </view>
        </pk-popup>
        <pk-popup v-model="centerShow" position="center">
            <view class="popup-content">
                <pk-button @click="centerShow = false">点击关闭</pk-button>
            </view>
        </pk-popup>
        <pk-popup v-model="roundShow" position="bottom" round>
            <view class="popup-content">
                <pk-button @click="roundShow = false">点击关闭</pk-button>
            </view>
        </pk-popup>
        <pk-popup v-model="backgroundShow" position="bottom" background-color="#ee772f">
            <view class="popup-content">
                <pk-button @click="backgroundShow = false">点击关闭</pk-button>
            </view>
        </pk-popup>
    </view>
</template>
<script lang="ts" setup>
import PkPopup from '@/pk-ui/components/pk-popup/pk-popup.vue'
import PkCell from '@/pk-ui/components/pk-cell/pk-cell.vue'
import PkCellGroup from '@/pk-ui/components/pk-cell/pk-cell-group.vue'
import PkButton from '@/pk-ui/components/pk-button/pk-button.vue'

import { ref } from 'vue'

const defaultShow = ref<boolean>(false)
const topShow = ref<boolean>(false)
const leftShow = ref<boolean>(false)
const rightShow = ref<boolean>(false)
const bottomShow = ref<boolean>(false)
const centerShow = ref<boolean>(false)

const roundShow = ref<boolean>(false)

const backgroundShow = ref<boolean>(false)

</script>
<style lang="less" scoped>
.popup-container {}

.popup-content {
    padding: 20px;
    display: flex;
    justify-content: center;
}
</style>