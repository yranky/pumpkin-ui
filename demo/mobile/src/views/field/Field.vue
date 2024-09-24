<template>
    <div class="field-container">
        <pk-divider>基础用法</pk-divider>
        <pk-field v-model="textValue" label="测试" placeholder="请输入内容" />
        <pk-divider>类型</pk-divider>
        <pk-form>
            <pk-field v-model="numberValue" label="数字类型" placeholder="请输入数字" />
            <pk-field v-model="textValue" label="颜色值" placeholder="请选择" type="color" />
        </pk-form>
        <pk-divider>显示*号</pk-divider>
        <pk-field v-model="textValue" label="显示*号" placeholder="请输入" required></pk-field>
        <pk-divider>只读禁用</pk-divider>
        <pk-field v-model="textValue" label="只读" placeholder="只读" readonly></pk-field>
        <pk-field v-model="textValue" label="禁用" placeholder="禁用" disabled></pk-field>
        <pk-divider>点击效果</pk-divider>
        <pk-field v-model="textValue" label="点击效果" placeholder="点击效果" readonly is-link></pk-field>

        <pk-divider>垂直模式</pk-divider>
        <pk-form>
            <pk-field vertical v-model="numberValue" label="数字类型" placeholder="请输入数字" />
            <pk-field vertical v-model="textValue" label="颜色值" placeholder="请选择" type="color" />
            <pk-field vertical v-model="textValue" label="点击效果" placeholder="点击效果" readonly is-link></pk-field>
        </pk-form>

        <pk-divider>清空按钮的显示</pk-divider>
        <pk-form>
            <pk-field v-model="textValue" label="不显示清空按钮" placeholder="不显示清空按钮" :clearable="false"></pk-field>
            <pk-field v-model="textValue" label="一直显示清空按钮" placeholder="一直显示清空按钮" clear-trigger="always"></pk-field>
            <pk-field v-model="textValue" label="自动显示清空按钮" placeholder="自动显示清空按钮" clear-trigger="auto"></pk-field>
        </pk-form>


        <pk-divider>文本框的高度</pk-divider>
        <pk-form>
            <pk-field v-model="textValue" label="行数为3" placeholder="行数为3" :rows="3"></pk-field>
            <pk-field v-model="textValue" label="行数为3且autosize" placeholder="行数为3且autosize" autosize
                :rows="3"></pk-field>
            <pk-field v-model="textValue" label="仅autosize" placeholder="仅autosize" autosize></pk-field>
        </pk-form>


    </div>
</template>
<script lang="ts" setup>
import { PkField, PkDivider, PkForm } from "@pumpkin-ui/mobile"
import { ref } from "vue"

const textValue = ref('')
const numberValue = ref(123)

</script>
<style lang="less" scoped>
.field-container {
    padding: 10px 0;
    min-height: 100vh;
    background: #edeef1;
}
</style>