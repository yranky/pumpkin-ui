---
title: 按钮组件
lang: zh-cn
aside: false
---

# button 按钮

## 基本使用
```
<pk-button>按钮</pk-button>
```
::: code-group

```vue [组合式API]
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
            <pk-button type="link" text="点击事件" block warning @click="onClick"></pk-button>
            <pk-button type="link" text="点击事件 禁用" disabled block warning @click="onClick"></pk-button>
        </div>


        <div>自定义颜色</div>
        <pk-button text="primary 主按钮" warning color="#22a4f1"></pk-button>
        <pk-button type="hazy" text="hazy 朦胧按钮" warning color="#22a4f1"></pk-button>
        <pk-button type="outline" text="outline 边框按钮" warning color="#22a4f1"></pk-button>
        <pk-button type="ghost" text="ghost 幽灵按钮" warning color="#22a4f1"></pk-button>
        <pk-button type="link" text="link 链接按钮" warning color="#22a4f1"></pk-button>

        <pk-button text="primary 主按钮" warning :color="computedColor" @click="onClick"></pk-button>
        <pk-button type="hazy" text="hazy 朦胧按钮" warning :color="computedColor" @click="onClick"></pk-button>
        <pk-button type="outline" text="outline 边框按钮" warning :color="computedColor" @click="onClick"></pk-button>
        <pk-button type="ghost" text="ghost 幽灵按钮" warning :color="computedColor" @click="onClick"></pk-button>
        <pk-button type="link" text="link 链接按钮" warning :color="computedColor" @click="onClick"></pk-button>
        <pk-button text="primary 主按钮" warning :color="computedColor" @click="onClick" block></pk-button>
        <pk-button type="hazy" text="hazy 朦胧按钮" warning :color="computedColor" @click="onClick" block></pk-button>
    </div>
</template>
<script lang="ts" setup>
import { PkButton } from '@pk-ui/mobile'
import { computed, ref } from 'vue';

const buttonColorList = [
    '#22a4f1',
    'linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)',
    'linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)',
    'linear-gradient( 135deg, #FAD7A1 10%, #E96D71 100%)',
    'linear-gradient( 135deg, #F1CA74 10%, #A64DB6 100%)'
]

const currentColor = ref(0)

const computedColor = computed(() => {
    return buttonColorList[currentColor.value % buttonColorList.length]
})

const onClick = () => {
    console.log('点击事件')

    currentColor.value++;
}

</script>
<style lang="less" scoped>
.button-container {
    padding: 10px;

    :deep(.pk-button) {
        margin: 5px;
    }
}
</style>
```
:::


## API

### props

| 属性名       | 说明                     | 类型                                               | 默认值    | 可选值                                             |
| ------------ | ------------------------ | -------------------------------------------------- | --------- | -------------------------------------------------- |
| type         | 按钮类型                 | `'primary'｜ 'hazy'｜ 'outline'｜ 'ghost'｜'link'` | `primary` | `'primary'｜ 'hazy'｜ 'outline'｜ 'ghost'｜'link'` |
| native-type  | button标签的原生type属性 | `'button'｜ 'submit'｜ 'reset'`                    | `button`  | `'button'｜ 'submit'｜ 'reset'`                    |
| text         | 按钮上的文字             | `string`                                           |           |                                                    |
| sub-text     | 按钮上的字文字           | `string`                                           |           |                                                    |
| size         | 按钮尺寸                 | `'xl'｜ 'l'｜ 'm'｜ 's'｜'xs'`                     | `m`       | `'xl'｜ 'l'｜ 'm'｜ 's'｜'xs'`                     |
| round        | 圆形按钮                 | `boolean`                                          | `false`   |                                                    |
| square       | 方形按钮                 | `boolean`                                          | `false`   |                                                    |
| block        | 块级元素                 | `boolean`                                          | `false`   |                                                    |
| disabled     | 是否禁用                 | `boolean`                                          | `false`   |                                                    |
| danger       | 设置危险按钮             | `boolean`                                          | `false`   |                                                    |
| warning      | 设置警告按钮             | `boolean`                                          | `false`   |                                                    |
| color        | 按钮的背景色             | `string`                                           |           |                                                    |
| text-color   | 按钮的文字颜色           | `string`                                           |           |                                                    |
| border-color | 按钮的边框颜色           | `string`                                           |           |                                                    |


### Events

| 事件名 | 说明                              | 回调参数                              |
| ------ | --------------------------------- | ------------------------------------- |
| change | triggers when fixed state changed | ^[Function]`(fixed: boolean) => void` |



### Slots

| 插槽名  | 说明                      |
| ------- | ------------------------- |
| default | customize default content |



### Exposes

| 名称   | 说明                        | 类型说明                |
| ------ | --------------------------- | ----------------------- |
| update | update affix state manually | ^[Function]`() => void` |



## 样式变量

| 名称   | 默认字                      | 说明                    |
| ------ | --------------------------- | ----------------------- |
| update | update affix state manually | ^[Function]`() => void` |