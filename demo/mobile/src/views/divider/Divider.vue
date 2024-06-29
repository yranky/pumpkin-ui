<template>
    <div class="divider-container">
        <pk-divider />
        <br />
        <pk-divider>自定义文本</pk-divider>
        <br />
        <pk-divider dashed>自定义文本</pk-divider>
    </div>
</template>
<script lang="ts" setup>
import { PkDivider } from "@pk-ui/mobile";

</script>
<style lang="less" scoped>
.divider-container {
    padding: 10px 0;
}
</style>