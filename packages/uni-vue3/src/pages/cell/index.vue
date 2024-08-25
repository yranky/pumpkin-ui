<template>
    <view class="cell-container">
        <pk-divider>基础用法</pk-divider>
        <pk-cell title="标题" value="内容"></pk-cell>
        <pk-cell title="标题2" value="内容2"></pk-cell>

        <pk-divider>展示右箭头</pk-divider>
        <pk-cell title="标题" value="内容" is-link></pk-cell>
        <pk-cell title="标题2" value="内容2" is-link></pk-cell>

        <pk-divider>展示分割线</pk-divider>
        <pk-cell title="显示分割线" value="内容"></pk-cell>
        <pk-cell title="隐藏分割线" value="内容2" :border="false"></pk-cell>

        <pk-divider>星号</pk-divider>
        <pk-cell title="显示星号" value="内容" required></pk-cell>

        <pk-divider>垂直布局</pk-divider>
        <pk-cell title="垂直布局" value="内容" vertical></pk-cell>
        <pk-cell title="垂直布局" value="内容" vertical is-link></pk-cell>

        <pk-divider>单元格组</pk-divider>
        <pk-cell-group title="单元格组标题">
            <pk-cell title="单元格1" value="内容1"></pk-cell>
            <pk-cell title="单元格2" value="内容2"></pk-cell>
            <pk-cell title="单元格3" value="内容3"></pk-cell>
        </pk-cell-group>


        <pk-divider>CellGroup插槽</pk-divider>
        <pk-cell-group>
            <template #title>
                自定义标题
            </template>
            <template #extra>
                更多
            </template>
            <pk-cell title="单元格1" value="内容1"></pk-cell>
            <pk-cell title="单元格2" value="内容2"></pk-cell>
            <pk-cell title="单元格3" value="内容3"></pk-cell>
        </pk-cell-group>

        <pk-divider>Cell插槽</pk-divider>
        <pk-cell is-link>
            <template #title>
                单元格1标题
            </template>
            <template #right-icon>
                📈
            </template>
            <template #bottom>
                bottom下的内容
            </template>
            单元格1内容
        </pk-cell>

    </view>
</template>
<script lang="ts" setup>
import PkCell from '@/pk-ui/components/pk-cell/pk-cell.vue'
import PkCellGroup from '@/pk-ui/components/pk-cell/pk-cell-group.vue'
import PkDivider from '@/pk-ui/components/pk-divider/pk-divider.vue'

</script>
<style lang="less" scoped>
.cell-container {
    padding: 20rpx 0;
}
</style>