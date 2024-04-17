<template>
    <div class="loading-container">
        <pk-loading type="circular" />
        <pk-loading type="spinner" />
        <pk-loading type="spinner" color="red" />
        <pk-loading type="circular" color="red" />
    </div>
</template>
<script lang="ts" setup>
import { PkOverlay, PkButton, PkLoading } from "@pk-ui/mobile"
import { ref } from 'vue'

</script>
<style lang="less" scoped>
.loading-container {
    padding: 10px 0;
}
</style>