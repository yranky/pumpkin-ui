<template>
    <div class="toast-container">
        <pk-button block @click="show = !show">显示toast</pk-button>
        <pk-button block @click="showTop = !showTop">显示toast top</pk-button>
        <pk-button block @click="showBottom = !showBottom">显示toast bottom</pk-button>
        <pk-button block @click="showLoadingCenter = !showLoadingCenter">显示toast loading center</pk-button>
        <pk-button block @click="showLoadingCenterText = !showLoadingCenterText">显示toast(有提示文字)</pk-button>
    </div>
    <pk-toast v-model="show" text="测试" position="center" />
    <pk-toast v-model="showBottom" text="测试" position="bottom" />
    <pk-toast v-model="showTop" text="测试" position="top" />
    <pk-toast v-model="showLoadingCenter" position="center" type="loading" />
    <pk-toast v-model="showLoadingCenterText" text="测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试" position="center"
        type="loading" />
</template>
<script lang="ts" setup>
import { PkToast, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const show = ref<boolean>(false)
const showTop = ref<boolean>(false)
const showBottom = ref<boolean>(false)
const showLoadingCenter = ref<boolean>(false)
const showLoadingCenterText = ref<boolean>(false)

</script>
<style lang="less" scoped>
.toast-container {
    padding: 10px 0;
}
</style>