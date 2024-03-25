<template>
    <div class="popup-container">
        <pk-button block @click="show = !show">显示遮罩层</pk-button>
        <br />
        <pk-button block @click="topShow = !topShow">显示遮罩层(top)</pk-button>
        <br />
        <pk-button block @click="leftShow = !leftShow">显示遮罩层(left)</pk-button>
        <br />
        <pk-button block @click="bottomShow = !bottomShow">显示遮罩层(bottom)</pk-button>
        <br />
        <pk-button block @click="rightShow = !rightShow">显示遮罩层(right)</pk-button>
        <br />
        <pk-popup v-model="show">
            <div>测试测试</div>
        </pk-popup>
        <pk-popup v-model="topShow" position="top">
            <div>测试测试</div>
        </pk-popup>
        <pk-popup v-model="leftShow" position="left">
            <div>测试测试</div>
        </pk-popup>
        <pk-popup v-model="bottomShow" position="bottom">
            <div>测试测试</div>
        </pk-popup>
        <pk-popup v-model="rightShow" position="right">
            <div>测试测试</div>
        </pk-popup>
    </div>
</template>
<script lang="ts" setup>
import { PkPopup, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const show = ref<boolean>(false)
const topShow = ref<boolean>(false)
const leftShow = ref<boolean>(false)
const bottomShow = ref<boolean>(false)
const rightShow = ref<boolean>(false)

</script>
<style lang="less" scoped>
.popup-container {
    padding: 10px 0;
}
</style>