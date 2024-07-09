<template>
    <div class="overlay-container">
        <pk-divider>基础用法</pk-divider>
        <pk-button block @click="show = !show">显示遮罩层</pk-button>
        <pk-overlay v-model="show"></pk-overlay>

        <pk-divider>自定义背景颜色</pk-divider>
        <pk-button block @click="showCustomBg = !showCustomBg">自定义颜色</pk-button>
        <pk-overlay v-model="showCustomBg" background-color="rgba(30, 56, 161,.3)"></pk-overlay>

        <pk-divider>禁止点击关闭</pk-divider>
        <pk-button block @click="startShowNotCloseOnPress">禁止点击关闭(3s后自动关闭)</pk-button>
        <pk-overlay v-model="showNotCloseOnPress" :close-on-press="false"></pk-overlay>

        <pk-divider>z-index层级</pk-divider>
        <pk-button block @click="showZIndex = true">z-index层级为3</pk-button>
        <pk-overlay v-model="showZIndex" :z-index="3"></pk-overlay>

        <pk-divider>插槽</pk-divider>
        <pk-button block @click="showSlot = true">插槽</pk-button>
        <pk-overlay v-model="showSlot">
            <div @click.stop>内容内容</div>
        </pk-overlay>
    </div>
</template>
<script lang="ts" setup>
import { PkOverlay, PkButton, PkDivider } from "@pk-ui/mobile"
import { ref } from 'vue'

const show = ref<boolean>(false)
const showCustomBg = ref<boolean>(false)

const showNotCloseOnPress = ref<boolean>(false)
const startShowNotCloseOnPress = () => {
    showNotCloseOnPress.value = true
    setTimeout(() => {
        showNotCloseOnPress.value = false
    }, 3000)
}

const showZIndex = ref<boolean>(false)

const showSlot = ref<boolean>(false)
</script>
<style lang="less" scoped>
.overlay-container {
    padding: 10px 0;
}
</style>