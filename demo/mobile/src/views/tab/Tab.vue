<template>
    <div class="tab-container">
        <pk-tabs>
            <pk-tab></pk-tab>
            <pk-tab></pk-tab>
        </pk-tabs>
    </div>
</template>
<script lang="ts" setup>
import { PkTab, PkTabs } from '@pumpkin-ui/mobile'
</script>
<style lang="less" scoped>
.tab-container {
    padding: 10px 0;
}
</style>