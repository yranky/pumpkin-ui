<template>
    <div class="checkbox-container">
        <pk-divider>基础用法</pk-divider>
        <pk-checkbox-group>
            <pk-checkbox>复选框1</pk-checkbox>
            <pk-checkbox>复选框2</pk-checkbox>
        </pk-checkbox-group>
        <pk-divider>方形</pk-divider>
        <pk-checkbox-group square>
            <pk-checkbox>方形</pk-checkbox>
            <pk-checkbox>方形</pk-checkbox>
            <pk-checkbox>方形</pk-checkbox>
            <pk-checkbox :square="false">默认</pk-checkbox>
        </pk-checkbox-group>
        <pk-divider>禁用</pk-divider>
        <pk-checkbox-group disabled>
            <pk-checkbox>禁用</pk-checkbox>
            <pk-checkbox>禁用</pk-checkbox>
            <pk-checkbox>禁用</pk-checkbox>
            <pk-checkbox :disabled="false">非禁用</pk-checkbox>
        </pk-checkbox-group>
        <pk-divider>大小</pk-divider>
        <pk-checkbox-group :size="30">
            <pk-checkbox>大小30</pk-checkbox>
            <pk-checkbox>大小30</pk-checkbox>
            <pk-checkbox>大小30</pk-checkbox>
            <pk-checkbox :size="20">大小20</pk-checkbox>
        </pk-checkbox-group>
        <pk-divider>最多选中（2个）</pk-divider>
        <pk-checkbox-group :max="2">
            <pk-checkbox>选项一</pk-checkbox>
            <pk-checkbox>选项二</pk-checkbox>
            <pk-checkbox>选项三</pk-checkbox>
            <pk-checkbox>选项四</pk-checkbox>
        </pk-checkbox-group>
        <pk-divider>纵向排列</pk-divider>
        <pk-checkbox-group vertical>
            <pk-checkbox>选项一</pk-checkbox>
            <pk-checkbox>选项二</pk-checkbox>
            <pk-checkbox>选项三</pk-checkbox>
            <pk-checkbox>选项四</pk-checkbox>
        </pk-checkbox-group>

        <pk-divider>默认选中</pk-divider>
        <pk-checkbox-group>
            <pk-checkbox v-model="firstChecked">选项一</pk-checkbox>
            <pk-checkbox>选项二</pk-checkbox>
            <pk-checkbox>选项三</pk-checkbox>
            <pk-checkbox>选项四</pk-checkbox>
        </pk-checkbox-group>

        <pk-divider>事件</pk-divider>
        <pk-checkbox-group @on-change="onChange" @on-limit="onLimit" :max="2">
            <pk-checkbox label="选项一" :value="1" v-model="firstChecked">选项一</pk-checkbox>
            <pk-checkbox label="选项二" :value="2">选项二</pk-checkbox>
            <pk-checkbox label="选项三" :value="3">选项三</pk-checkbox>
            <pk-checkbox label="选项四" :value="4">选项四</pk-checkbox>
        </pk-checkbox-group>

        <pk-divider>自定义图标</pk-divider>
        <pk-checkbox-group>
            <pk-checkbox label="选项一" :value="1">
                <template #icon>
                    <pk-icon name="alert-outlined" />
                </template>
            </pk-checkbox>
        </pk-checkbox-group>
    </div>
</template>
<script lang="ts" setup>
import { PkCheckbox, PkCheckboxGroup, PkDivider, Toast, PkIcon } from '@pk-ui/mobile'
import { ref } from 'vue'

const firstChecked = ref(true)

const onChange = (value) => {
    Toast.show(JSON.stringify(value))
}
const onLimit = (value) => {
    Toast.show('最多只能选择两个')
}
</script>
<style lang="less" scoped>
.checkbox-container {
    padding: 10px 0;
}
</style>