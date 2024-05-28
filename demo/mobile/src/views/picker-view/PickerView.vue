<template>
    <div class="picker-view-container">
        <pk-picker-view :items="colItems" :visibleItemCount="7"></pk-picker-view>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { PkPickerView } from '@pk-ui/mobile';

const colItems = [
    {
        label: '1',
        value: '1'
    },
    {
        label: '2',
        value: '2'
    },
    {
        label: '3',
        value: '3'
    },
    {
        label: '4',
        value: '4'
    },
    {
        label: '5',
        value: '5'
    },
    {
        label: '6',
        value: '6'
    },
    {
        label: '7',
        value: '7'
    }
]
</script>
<style lang="less" scoped>
.picker-view-container {
    padding: 10px 0;
}
</style>