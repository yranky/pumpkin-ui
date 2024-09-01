<template>
    <div class="radio-container">
        <pk-divider>基础用法</pk-divider>
        <pk-radio-group>
            <pk-radio>单选框1</pk-radio>
            <pk-radio>单选框2</pk-radio>
        </pk-radio-group>


        <pk-divider>方形</pk-divider>
        <pk-radio-group square>
            <pk-radio>方形</pk-radio>
            <pk-radio>方形</pk-radio>
            <pk-radio>方形</pk-radio>
            <pk-radio :square="false">默认</pk-radio>
        </pk-radio-group>

        <pk-divider>禁用</pk-divider>
        <pk-radio-group disabled>
            <pk-radio>禁用</pk-radio>
            <pk-radio>禁用</pk-radio>
            <pk-radio>禁用</pk-radio>
            <pk-radio :disabled="false">非禁用</pk-radio>
        </pk-radio-group>

        <pk-divider>大小</pk-divider>
        <pk-radio-group :size="30">
            <pk-radio>大小30</pk-radio>
            <pk-radio>大小30</pk-radio>
            <pk-radio>大小30</pk-radio>
            <pk-radio :size="20">大小20</pk-radio>
        </pk-radio-group>

        <pk-divider>纵向排列</pk-divider>
        <pk-radio-group vertical>
            <pk-radio>选项一</pk-radio>
            <pk-radio>选项二</pk-radio>
            <pk-radio>选项三</pk-radio>
            <pk-radio>选项四</pk-radio>
        </pk-radio-group>

        <pk-divider>默认值(Radio)</pk-divider>
        <pk-radio-group>
            <pk-radio :modelValue="true">选项一</pk-radio>
            <pk-radio>选项二</pk-radio>
        </pk-radio-group>
        <pk-divider>默认值(RadioGroup)</pk-divider>
        <pk-radio-group :modelValue="2">
            <pk-radio :value="1">选项一</pk-radio>
            <pk-radio :value="2">选项二</pk-radio>
        </pk-radio-group>

        <pk-divider>事件</pk-divider>
        <pk-radio-group @on-change="onChange">
            <pk-radio :value="1">选项一</pk-radio>
            <pk-radio :value="2">选项二</pk-radio>
        </pk-radio-group>

        <pk-divider>自定义图标</pk-divider>
        <pk-radio-group>
            <pk-radio-group>
                <pk-radio label="选项" :value="1">
                    <template #icon>
                        <pk-icon name="alert-outlined" />
                    </template>
                </pk-radio>
            </pk-radio-group>
        </pk-radio-group>
    </div>
</template>
<script lang="ts" setup>
import { PkRadio, PkRadioGroup, PkIcon, PkDivider, Toast } from '@pk-ui/mobile'
import { ref } from 'vue'

const onChange = (value) => {
    Toast.showToast(JSON.stringify(value))
}
</script>
<style lang="less" scoped>
.radio-container {
    padding: 10px 0;
}
</style>