<template>
    <div class="cell-container">
        <pk-cell title="标题" value="值"></pk-cell>
        <pk-cell title="标题" value="值"></pk-cell>
        <pk-cell title="标题" value="值" is-link></pk-cell>
        <pk-cell title="标题" value="值"></pk-cell>
        <pk-cell title="标题" value="值" is-link></pk-cell>
        <pk-cell title="标题" value="值">
            <template #bottom>
                我是底部插槽我是底部插槽我是底部插槽我是底部插槽我是底部插槽我是底部插槽我是底部插槽
            </template>
        </pk-cell>

        <pk-cell title="无底部线" :border="false"></pk-cell>

        <pk-cell title="标题" value="值">
            <template #bottom>
                我是底部插槽我是底部插槽我是底部插槽我是底部插槽我是底部插槽我是底部插槽我是底部插槽
            </template>
        </pk-cell>

        <pk-cell title="标题" value="值">
            <template #bottom>
                我是底部插槽我是底部插槽我是底部插槽我是底部插槽我是底部插槽我是底部插槽我是底部插槽
            </template>
        </pk-cell>

        <pk-cell title="标题" value="值">
            <template #bottom>
                我是底部插槽我是底部插槽我是底部插槽我是底部插槽我是底部插槽我是底部插槽我是底部插槽
            </template>
        </pk-cell>
    </div>
</template>
<script lang="ts" setup>
import { PkCell } from "@pk-ui/mobile";

</script>
<style lang="less" scoped>
.cell-container {
    padding: 10px 0;
}
</style>