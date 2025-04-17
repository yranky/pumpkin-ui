<template>
    <div class="navbar-container">
        <pk-navbar title="固定在顶部" fixed />
        <pk-divider>一般使用</pk-divider>
        <pk-navbar title="一般使用" />
        <pk-divider>隐藏返回按钮</pk-divider>
        <pk-navbar title="隐藏返回按钮" :show-back-arrow="false" />
        <pk-divider>插槽</pk-divider>
        <pk-navbar title="标题">
            <template #left>
                左侧插槽
            </template>
            <template #right>
                右侧插槽
            </template>
        </pk-navbar>
    </div>
</template>
<script lang="ts" setup>
import { PkNavbar, PkDivider } from '@pumpkin-ui/mobile'
</script>
<style lang="less" scoped>
.navbar-container {
    min-height: 200vh;
    background: var(--pk-bg-color-light);
}
</style>