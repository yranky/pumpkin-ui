<template>
    <div class="toast-container">
        <pk-button block @click="show = !show">显示遮罩层</pk-button>
    </div>
    <pk-toast v-model="show" />
</template>
<script lang="ts" setup>
import { PkToast, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const show = ref<boolean>(false)

</script>
<style lang="less" scoped>
.toast-container {
    padding: 10px 0;
}
</style>