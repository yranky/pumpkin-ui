<template>
    <div class="button-container">
        <div>按钮类型</div>
        <pk-button text="primary 主按钮"></pk-button>
        <pk-button type="hazy" text="hazy 朦胧按钮"></pk-button>
        <pk-button type="outline" text="outline 边框按钮"></pk-button>
        <pk-button type="ghost" text="ghost 幽灵按钮"></pk-button>
        <pk-button type="link" text="link 链接按钮"></pk-button>
        <div>块级</div>
        <div style="display: flex;flex-direction: column;align-items: center;">
            <pk-button text="primary 主按钮" block></pk-button>
            <pk-button type="hazy" text="hazy 朦胧按钮" block></pk-button>
            <pk-button type="outline" text="outline 边框按钮" block></pk-button>
            <pk-button type="ghost" text="ghost 幽灵按钮" block></pk-button>
            <pk-button type="link" text="link 链接按钮" block></pk-button>
        </div>
        <div>圆形</div>
        <pk-button text="primary 主按钮" round></pk-button>
        <pk-button type="hazy" text="hazy 朦胧按钮" round></pk-button>
        <pk-button type="outline" text="outline 边框按钮" round></pk-button>
        <pk-button type="ghost" text="ghost 幽灵按钮" round></pk-button>
        <div>方形</div>
        <pk-button text="primary 主按钮" square></pk-button>
        <pk-button type="hazy" text="hazy 朦胧按钮" square></pk-button>
        <pk-button type="outline" text="outline 边框按钮" square></pk-button>
        <pk-button type="ghost" text="ghost 幽灵按钮" square></pk-button>

        <div>按大小</div>
        <pk-button size="xl" text="primary 主按钮 xl" square></pk-button>
        <pk-button size="l" text="primary 主按钮 l" square></pk-button>
        <pk-button size="m" text="primary 主按钮 m" square></pk-button>
        <pk-button size="s" text="primary 主按钮 s" square></pk-button>
        <pk-button size="xs" text="primary 主按钮 xs" square></pk-button>

        <pk-button type="hazy" size="xl" text="hazy 朦胧按钮 xl" round></pk-button>
        <pk-button type="hazy" size="l" text="hazy 朦胧按钮 l" round></pk-button>
        <pk-button type="hazy" size="m" text="hazy 朦胧按钮 m" round></pk-button>
        <pk-button type="hazy" size="s" text="hazy 朦胧按钮 s" round></pk-button>
        <pk-button type="hazy" size="xs" text="hazy 朦胧按钮 xs" round></pk-button>

        <pk-button type="outline" size="xl" text="outline 边框按钮 xl" square></pk-button>
        <pk-button type="outline" size="l" text="outline 边框按钮 l" square></pk-button>
        <pk-button type="outline" size="m" text="outline 边框按钮 m" square></pk-button>
        <pk-button type="outline" size="s" text="outline 边框按钮 s" square></pk-button>
        <pk-button type="outline" size="xs" text="outline 边框按钮 xs" square></pk-button>


        <pk-button type="ghost" size="xl" text="ghost 幽灵按钮 xl"></pk-button>
        <pk-button type="ghost" size="l" text="ghost 幽灵按钮 l"></pk-button>
        <pk-button type="ghost" size="m" text="ghost 幽灵按钮 m"></pk-button>
        <pk-button type="ghost" size="s" text="ghost 幽灵按钮 s"></pk-button>
        <pk-button type="ghost" size="xs" text="ghost 幽灵按钮 xs"></pk-button>

        <div>禁用</div>
        <pk-button text="primary 主按钮" disabled></pk-button>
        <pk-button type="hazy" text="hazy 朦胧按钮" square disabled></pk-button>
        <pk-button type="outline" text="outline 边框按钮" disabled></pk-button>
        <pk-button type="ghost" text="ghost 幽灵按钮" round disabled></pk-button>



        <div>副标题</div>
        <pk-button text="primary 主按钮" sub-text="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题"></pk-button>
        <pk-button type="hazy" text="hazy 朦胧按钮" sub-text="副标题"></pk-button>
        <pk-button type="outline" text="outline 边框按钮" sub-text="副标题"></pk-button>
        <pk-button type="ghost" text="ghost 幽灵按钮" sub-text="副标题"></pk-button>
        <pk-button type="link" text="link 链接按钮" sub-text="副标题"></pk-button>
        <div style="display: flex;flex-direction: column;align-items: center;">
            <pk-button text="primary 主按钮" block sub-text="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题"></pk-button>
            <pk-button text="primary 主按钮" block sub-text="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" round></pk-button>
            <pk-button text="primary 主按钮" block sub-text="副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题" square></pk-button>
            <pk-button type="hazy" text="hazy 朦胧按钮" block sub-text="副标题"></pk-button>
            <pk-button type="outline" text="outline 边框按钮" block sub-text="副标题"></pk-button>
            <pk-button type="ghost" text="ghost 幽灵按钮" block sub-text="副标题"></pk-button>
            <pk-button type="link" text="link 链接按钮" block sub-text="副标题"></pk-button>
        </div>


        <div>危险按钮</div>
        <pk-button text="primary 主按钮" danger></pk-button>
        <pk-button type="hazy" text="hazy 朦胧按钮" danger></pk-button>
        <pk-button type="outline" text="outline 边框按钮" danger></pk-button>
        <pk-button type="ghost" text="ghost 幽灵按钮" danger></pk-button>
        <pk-button type="link" text="link 链接按钮" danger></pk-button>
        <div style="display: flex;flex-direction: column;align-items: center;">
            <pk-button text="primary 主按钮" block danger></pk-button>
            <pk-button type="hazy" text="hazy 朦胧按钮" block danger></pk-button>
            <pk-button type="outline" text="outline 边框按钮" block danger></pk-button>
            <pk-button type="ghost" text="ghost 幽灵按钮" block danger></pk-button>
            <pk-button type="link" text="link 链接按钮" block danger></pk-button>
        </div>



        <div>警告按钮</div>
        <pk-button text="primary 主按钮" warning></pk-button>
        <pk-button type="hazy" text="hazy 朦胧按钮" warning></pk-button>
        <pk-button type="outline" text="outline 边框按钮" warning></pk-button>
        <pk-button type="ghost" text="ghost 幽灵按钮" warning></pk-button>
        <pk-button type="link" text="link 链接按钮" warning></pk-button>
        <div style="display: flex;flex-direction: column;align-items: center;">
            <pk-button text="primary 主按钮" block warning></pk-button>
            <pk-button type="hazy" text="hazy 朦胧按钮" block warning></pk-button>
            <pk-button type="outline" text="outline 边框按钮" block warning></pk-button>
            <pk-button type="ghost" text="ghost 幽灵按钮" block warning></pk-button>
            <pk-button type="link" text="link 链接按钮" block warning></pk-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { PkButton } from '@pk-ui/mobile'


</script>
<style lang="less" scoped>
.button-container {
    padding: 10px;

    :deep(.pk-button) {
        margin: 5px;
    }
}
</style>