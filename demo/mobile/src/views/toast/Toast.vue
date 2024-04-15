<template>
    <div class="toast-container">
        <pk-button block @click="show = !show">显示toast</pk-button>
        <pk-button block @click="show = !showTop">显示toast top</pk-button>
        <pk-button block @click="show = !showBottom">显示toast bottom</pk-button>
    </div>
    <pk-toast v-model="show" text="测试" position="center" />
    <pk-toast v-model="showBottom" text="测试" position="bottom" />
    <pk-toast v-model="showTop" text="测试" position="top" />
</template>
<script lang="ts" setup>
import { PkToast, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const show = ref<boolean>(false)
const showTop = ref<boolean>(false)
const showBottom = ref<boolean>(false)

</script>
<style lang="less" scoped>
.toast-container {
    padding: 10px 0;
}
</style>