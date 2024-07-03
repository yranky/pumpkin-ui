---
title: 按钮组件
lang: zh-cn
aside: false
---

# button 按钮

## 基本使用
```vue
<pk-button>按钮</pk-button>
```

## 代码示例
### 按钮类型
按钮有五种类型：主要按钮`primary`、朦胧按钮`hazy`、边框按钮`outline`、幽灵按钮`ghost`和链接按钮`link`。

::: code-group

```vue [示例]
    <pk-button type="primary">主要按钮 primary</pk-button>
    <pk-button type="hazy">朦胧按钮 hazy</pk-button>
    <pk-button type="outline">边框按钮 outline</pk-button>
    <pk-button type="ghost">幽灵按钮 ghost</pk-button>
    <pk-button type="link">链接按钮 link</pk-button>
```
:::

### 子文案
通过 sub-text 设置。

::: code-group

```vue [示例]
    <pk-button type="primary" sub-text="我是子文案我是子文案">主要按钮 primary</pk-button>
    <pk-button type="hazy" sub-text="我是子文案">朦胧按钮 hazy</pk-button>
    <pk-button type="outline" sub-text="我是子文案我是子文案我是子文案">边框按钮 outline</pk-button>
    <pk-button type="ghost" sub-text="我是子文案我是子文案我是子文案我是子文案我是子文案我是子文案我是子文案我是子文案我是子文案我是子文案">幽灵按钮 ghost</pk-button>
    <pk-button type="link" sub-text="我是子文案">链接按钮 link</pk-button>
```
:::

### 按钮尺寸
按钮有五种尺寸：大按钮`xl`、大按钮`l`、中按钮`m`、小按钮`s`和超小按钮`xs`。

::: code-group

```vue [示例]
    <pk-button type="primary" size="xl">大按钮 xl</pk-button>
    <pk-button type="primary" size="l">大按钮 l</pk-button>
    <pk-button type="primary" size="m">中按钮 m</pk-button>
    <pk-button type="primary" size="s">小按钮 s</pk-button>
    <pk-button type="primary" size="xs">超小按钮 xs</pk-button>
```
:::


### 圆形按钮
通过设置round属性为true，可设置圆形按钮。

::: code-group

```vue [示例]
    <pk-button type="primary" sub-text="我是子文案我是子文案" round>圆形按钮</pk-button>
    <pk-button type="primary" round>圆形按钮</pk-button>
```
:::


### 方形按钮
通过设置square属性为true，可设置方形按钮。

::: code-group

```vue [示例]
    <pk-button type="primary" sub-text="我是子文案我是子文案" square>方形按钮</pk-button>
    <pk-button type="primary" square>方形按钮</pk-button>
```
:::

### 块级元素
通过设置block属性为true，可设置块级元素。

::: code-group

```vue [示例]
    <pk-button type="primary" sub-text="我是子文案我是子文案" block>块级元素</pk-button>
    <pk-button type="primary" block>块级元素</pk-button>
```
:::

### 设置禁用
通过设置disabled属性为true，可设置禁用。

::: code-group

```vue [示例]
    <pk-button type="primary" sub-text="我是子文案我是子文案" disabled>禁用按钮</pk-button>
    <pk-button type="primary" disabled>禁用按钮</pk-button>
```
:::

### 危险按钮
通过设置danger属性为true，可设置危险按钮。

::: code-group

```vue [示例]
    <pk-button type="primary" sub-text="我是子文案我是子文案" danger>危险按钮</pk-button>
    <pk-button type="primary" danger>危险按钮</pk-button>
```
:::

### 警告按钮
通过设置warning属性为true，可设置警告按钮。

::: code-group

```vue [示例]
    <pk-button type="primary" sub-text="我是子文案我是子文案" warning>警告按钮</pk-button>
    <pk-button type="primary" warning>警告按钮</pk-button>
```
:::

### 自定义颜色
通过设置color属性设置自定义颜色。

::: code-group

```vue [示例]
    <pk-button type="primary" sub-text="我是子文案我是子文案" color="#65da79">自定义颜色</pk-button>
    <pk-button type="primary" color="linear-gradient(90deg,#F83600 0%,#F9D423 100%)">渐变色</pk-button>
```
:::

### 自定义文字颜色
通过设置text-color属性设置自定义文字颜色。

::: code-group

```vue [示例]
    <pk-button type="primary" text-color="#000000" color="#ffffff">自定义颜色</pk-button>
    <pk-button type="primary" text-color="#000000"
        color="linear-gradient(90deg,#F83600 0%,#F9D423 100%)">渐变色</pk-button>
```
:::
## API

### props

| 属性名       | 说明                         | 类型                                               | 默认值    | 可选值                                             |
| ------------ | ---------------------------- | -------------------------------------------------- | --------- | -------------------------------------------------- |
| type         | 按钮类型                     | `'primary'｜ 'hazy'｜ 'outline'｜ 'ghost'｜'link'` | `primary` | `'primary'｜ 'hazy'｜ 'outline'｜ 'ghost'｜'link'` |
| native-type  | button标签的原生type属性     | `'button'｜ 'submit'｜ 'reset'`                    | `button`  | `'button'｜ 'submit'｜ 'reset'`                    |
| text         | 按钮上的文字，也可以通过slot | `string`                                           |           |                                                    |
| sub-text     | 按钮上的字文案               | `string`                                           |           |                                                    |
| size         | 按钮尺寸                     | `'xl'｜ 'l'｜ 'm'｜ 's'｜'xs'`                     | `m`       | `'xl'｜ 'l'｜ 'm'｜ 's'｜'xs'`                     |
| round        | 圆形按钮                     | `boolean`                                          | `false`   |                                                    |
| square       | 方形按钮                     | `boolean`                                          | `false`   |                                                    |
| block        | 块级元素                     | `boolean`                                          | `false`   |                                                    |
| disabled     | 是否禁用                     | `boolean`                                          | `false`   |                                                    |
| danger       | 设置危险按钮                 | `boolean`                                          | `false`   |                                                    |
| warning      | 设置警告按钮                 | `boolean`                                          | `false`   |                                                    |
| color        | 按钮的背景色                 | `string`                                           |           |                                                    |
| text-color   | 按钮的文字颜色               | `string`                                           |           |                                                    |
| border-color | 按钮的边框颜色               | `string`                                           |           |                                                    |


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