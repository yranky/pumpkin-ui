<template>
    <div class="notify-container">
        <pk-cell-group>
            <pk-cell is-link @click="Notify.show('基础用法')">
                <template #title>基础用法</template>
            </pk-cell>
            <pk-cell is-link @click="Notify.show({
                message: 'top',
                position: 'top'
            })">
                <template #title>top</template>
            </pk-cell>
            <pk-cell is-link @click="Notify.show({
                message: 'bottom',
                position: 'bottom'
            })">
                <template #title>bottom</template>
            </pk-cell>
            <pk-cell is-link @click="Notify.success('成功提示')">
                <template #title>成功提示</template>
            </pk-cell>
            <pk-cell is-link @click="Notify.error('错误提示')">
                <template #title>错误提示</template>
            </pk-cell>
            <pk-cell is-link @click="Notify.warning('警告提示')">
                <template #title>警告提示</template>
            </pk-cell>
            <pk-cell is-link
                @click="Notify.show('超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本')">
                <template #title>超长文本</template>
            </pk-cell>
            <pk-cell is-link @click="Notify.setMultiple(true); Toast.show('开启同时显示多个')">
                <template #title>开启同时显示多个</template>
            </pk-cell>
            <pk-cell is-link @click="Notify.setMultiple(false); Toast.show('关闭同时显示多个')">
                <template #title>关闭同时显示多个</template>
            </pk-cell>
        </pk-cell-group>
    </div>
</template>
<script lang="ts" setup>
import { Notify, Toast, PkCell, PkCellGroup } from "@pk-ui/mobile"

</script>
<style lang="less" scoped>
.notify-container {
    padding: 0;
}
</style>