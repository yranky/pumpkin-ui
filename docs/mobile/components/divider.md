---
title: 分割线
lang: zh-cn
aside: false
---

# Divider 分割线

## 基本使用
```vue
<pk-divider></pk-divider>
```

## 代码示例
### 基础用法
创建一条分割线。

::: code-tabs#default
@tab template

```vue [template]
    <pk-divider />
```

@tab script
```js [script]
import { PkDivider } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::


### 自定义文本
通过默认插槽自定义文本。
::: code-tabs#text
@tab template

```vue [template]
    <pk-divider>自定义文本</pk-divider> 
```

@tab script
```js [script]
import { PkDivider } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::

### 虚线
设置`dashed`为`true`，显示为虚线。

::: code-tabs#dashed
@tab template

```vue [template]
    <pk-divider dashed>虚线</pk-divider>
```

@tab script
```js [script]
import { PkDivider } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::



### 自定义颜色
组件默认提供了`borderColor`和`color`属性分别用于修改分割线颜色和内容文本颜色。

::: code-tabs#color
@tab template

```vue [template]
    <pk-divider border-color="red">实线</pk-divider>
    <pk-divider dashed border-color="red">虚线</pk-divider>
    <pk-divider dashed border-color="red" color="red">字体颜色</pk-divider>
```

@tab script
```js [script]
import { PkDivider } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::


### 内容文字位置
通过`contentPosition`属性修改内容文字位置。

::: code-tabs#content-position
@tab template

```vue [template]
    <pk-divider content-position="left">左侧</pk-divider>
    <pk-divider>默认中间</pk-divider>
    <pk-divider content-position="right">右侧</pk-divider>
    <pk-divider content-position="right">我是长文本我是长文本我是长文本我是长文本我是长文本我是长文本</pk-divider>
```

@tab script
```js [script]
import { PkDivider } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::


### 分割线粗细
通过`size`属性修改分割线粗细。

::: code-tabs#size
@tab template

```vue [template]
    <pk-divider :size="2">分割线粗细 2px</pk-divider>
    <pk-divider :size="2" dashed>分割线粗细 2px</pk-divider>
```

@tab script
```js [script]
import { PkDivider } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::



## API

### Props

| 属性名           | 说明               | 类型                        | 默认值   | 可选值                      |
| ---------------- | ------------------ | --------------------------- | -------- | --------------------------- |
| size             | 线条粗细           | `number`                    | `0.5`    |                             |
| border-color     | 分割线颜色         | `string`                    |          |                             |
| color            | 分割线内容文本颜色 | `string`                    |          |                             |
| dashed           | 虚线               | `boolean`                   | `false`  |                             |
| content-position | 内容文本位置       | `'left'｜'center'｜'right'` | `center` | `'left'｜'center'｜'right'` |


### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |


### Slots

| 插槽名  | 说明                                           |
| ------- | ---------------------------------------------- |
| default | 内容文本区域，可通过`content-position`控制位置 |


::: code-tabs#slot
@tab template

```vue [template]
    <pk-divider content-position="left">左侧</pk-divider>
    <pk-divider>默认中间</pk-divider>
    <pk-divider content-position="right">右侧</pk-divider>
    <pk-divider content-position="right">我是长文本我是长文本我是长文本我是长文本我是长文本我是长文本</pk-divider>
```

@tab script
```js [script]
import { PkDivider } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::


### Exposes

| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |


## 样式变量

| 名称                           | 默认值                         | 说明 |
| ------------------------------ | ------------------------------ | ---- |
| --pk-divider-color             | var(--pk-border-color)         |      |
| --pk-divider-style             | solid                          |      |
| --pk-divider-size              | 1px                            |      |
| --pk-divider-margin-horizontal | var(--pk-margin-m)             |      |
| --pk-divider-font-color        | var(--pk-text-color-secondary) |      |