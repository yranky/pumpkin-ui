<template>
    <div class="overlay-container">
        <pk-button block @click="show = !show">显示遮罩层</pk-button>
        <pk-popup v-model="show"></pk-popup>
    </div>
</template>
<script lang="ts" setup>
import { PkPopup, PkButton } from "@pk-ui/mobile"
import {ref} from 'vue'

const show = ref<boolean>(false)

</script>
<style lang="less" scoped>
.overlay-container {
    padding: 10px 0;
}
</style>