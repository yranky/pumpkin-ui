<template>
    <div class="overlay-container">
        <pk-button block @click="show = !show">显示遮罩层</pk-button>
        <br />
        <pk-button block @click="showCustomBg = !showCustomBg">自定义颜色</pk-button>
        <pk-overlay v-model="show"></pk-overlay>
        <pk-overlay v-model="showCustomBg" backgroundColor="rgba(30, 56, 161,.3)"></pk-overlay>
    </div>
</template>
<script lang="ts" setup>
import { PkOverlay, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const show = ref<boolean>(false)
const showCustomBg = ref<boolean>(false)

</script>
<style lang="less" scoped>
.overlay-container {
    padding: 10px 0;
}
</style>