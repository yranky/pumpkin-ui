<template>
    <div class="action-sheet-container">
        <pk-button @click="show = !show">显示actionSheet</pk-button>
        <pk-action-sheet v-model="show" />
    </div>
</template>
<script lang="ts" setup>
import { PkActionSheet, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const show = ref<boolean>(true)

</script>
<style lang="less" scoped>
.action-sheet-container {
    padding: 10px 0;
}
</style>