<template>
    <div class="toast-container">
        <pk-cell-group>
            <pk-cell is-link @click="showDefaultToast">
                <template #title>显示toast</template>
            </pk-cell>
        </pk-cell-group>
    </div>
</template>
<script lang="ts" setup>
import { PkToast, PkButton, PkCell, PkCellGroup, showToast } from "@pk-ui/mobile"
import { ref } from 'vue'

const showDefaultToast = () => {
    showToast({})
}

</script>
<style lang="less" scoped>
.toast-container {
    padding: 0;
}
</style>