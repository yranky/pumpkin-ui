<template>
    <div class="search-container">
        <pk-search placeholder="请输入关键词">
            <template #left>left</template>
            <template #right>right</template>
        </pk-search>
    </div>
</template>
<script lang="ts" setup>
import { PkSearch } from '@pumpkin-ui/mobile'
import { ref } from 'vue'

</script>
<style lang="less" scoped>
.search-container {
    padding: 10px 0;
}
</style>