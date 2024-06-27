<template>
    <div class="progress-container">
        <pk-progress :percentage="percent" />
        <br />
        <pk-progress :percentage="percent" background="red" />
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" />

        <br />
        <pk-button @click="add">增加</pk-button>
        <pk-button @click="reduce">减少</pk-button>
    </div>
</template>
<script lang="ts" setup>
import { PkProgress, PkButton } from '@pk-ui/mobile';
import { ref } from 'vue';

const percent = ref(0);

const add = () => {
    const pre = percent.value + 10;
    if (pre > 100) {
        percent.value = 100;
    } else {
        percent.value = pre;
    }
}

const reduce = () => {
    const pre = percent.value - 10;
    if (pre < 0) {
        percent.value = 0;
    } else {
        percent.value = pre;
    }
}
</script>
<style lang="less" scoped>
.progress-container {
    padding: 10px 10px;
}
</style>