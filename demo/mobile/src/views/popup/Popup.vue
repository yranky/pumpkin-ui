<template>
    <div class="popup-container">
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
        </pk-cell-group>

        <pk-popup v-model="defaultShow">
            <div class="popup-content">
                <pk-button @click="defaultShow = false">点击关闭</pk-button>
            </div>
        </pk-popup>

        <pk-popup v-model="topShow" position="top">
            <div class="popup-content">
                <pk-button @click="topShow = false">点击关闭</pk-button>
            </div>
        </pk-popup>
        <pk-popup v-model="leftShow" position="left">
            <div class="popup-content">
                <pk-button @click="leftShow = false">点击关闭</pk-button>
            </div>
        </pk-popup>
        <pk-popup v-model="rightShow" position="right">
            <div class="popup-content">
                <pk-button @click="rightShow = false">点击关闭</pk-button>
            </div>
        </pk-popup>
        <pk-popup v-model="bottomShow" position="bottom">
            <div class="popup-content">
                <pk-button @click="bottomShow = false">点击关闭</pk-button>
            </div>
        </pk-popup>
        <pk-popup v-model="centerShow" position="center">
            <div class="popup-content">
                <pk-button @click="centerShow = false">点击关闭</pk-button>
            </div>
        </pk-popup>
        <pk-popup v-model="roundShow" position="bottom" round>
            <div class="popup-content">
                <pk-button @click="roundShow = false">点击关闭</pk-button>
            </div>
        </pk-popup>
    </div>
</template>
<script lang="ts" setup>
import { PkPopup, PkCell, PkCellGroup, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const defaultShow = ref<boolean>(false)
const topShow = ref<boolean>(false)
const leftShow = ref<boolean>(false)
const rightShow = ref<boolean>(false)
const bottomShow = ref<boolean>(false)
const centerShow = ref<boolean>(false)

const roundShow = ref<boolean>(false)

</script>
<style lang="less" scoped>
.popup-container {}

.popup-content {
    padding: 20px;
    display: flex;
    justify-content: center;
}
</style>