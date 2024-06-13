<template>
    <div class="switch-container">
        <pk-cell title="小号">
            <pk-switch v-model="value" />
        </pk-cell>
        <pk-cell title="大号">
            <pk-switch v-model="value1" size="l" />
        </pk-cell>
        <pk-cell title="中号">
            <pk-switch v-model="value2" size="m" />
        </pk-cell>
    </div>
</template>
<script lang="ts" setup>
import { PkSwitch, PkCell } from "@pk-ui/mobile";
import { ref } from "vue";

const value = ref(true)
const value1 = ref(true)
const value2 = ref(true)
</script>
<style lang="less" scoped>
.switch-container {
    padding: 10px 0;
}
</style>