<template>
    <div class="search-container">
        <pk-divider>基础用法</pk-divider>
        <pk-search />

        <pk-divider>事件监听</pk-divider>
        <pk-search @on-search="onSearch" />

        <pk-divider>隐藏搜索按钮</pk-divider>
        <pk-search :show-search-button="false" />

        <pk-divider>禁用</pk-divider>
        <pk-search disabled :show-search-button="false" />

        <pk-divider>输入框对齐方式</pk-divider>
        <pk-search input-text-align="center" />

        <pk-divider>插槽</pk-divider>
        <pk-search>
            <template #left-icon>icon</template>
            <template #left>left</template>
            <template #right-icon>icon</template>
            <template #right>right</template>
        </pk-search>

    </div>
</template>
<script lang="ts" setup>
import { PkSearch, PkDivider, Toast } from '@pumpkin-ui/mobile'
import { ref } from 'vue'

const onSearch = (value) => {
    Toast.show(`搜索内容：${value}`);
}

</script>
<style lang="less" scoped>
.search-container {
    min-height: 100vh;
    background-color: #f5f5f5;
}
</style>