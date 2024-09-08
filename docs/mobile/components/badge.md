---
title: 徽标
lang: zh-cn
aside: false
---

# Badge 徽标

## 基本使用
```vue
<pk-badge></pk-badge>
```

## 代码示例
### 基础用法

::: code-tabs#default
@tab vue

```vue [示例]
    <pk-badge :content="1111">
        <div class="badge-item"></div>
    </pk-badge>
    <pk-badge :content="20">
        <div class="badge-item"></div>
    </pk-badge>
    <pk-badge :content="1">
        <div class="badge-item"></div>
    </pk-badge>
    <pk-badge content="hot">
        <div class="badge-item"></div>
    </pk-badge>
    <pk-badge content="自定义">
        <div class="badge-item"></div>
    </pk-badge>
```
:::


### 小红点
可通过设置`dot`属性为`true`，展示为小红点，此时``content`失效。

::: code-tabs#dot
@tab vue

```vue [示例]
    <pk-badge dot>
        <div class="badge-item"></div>
    </pk-badge>
```
:::


### 偏移
可通过设置`offset`属性为设置偏移，单位为px，参数接收数组，第一个值为竖直方向上的偏移值，第二个值为水平方向上的偏移值。

::: code-tabs#offset
@tab vue

```vue [示例]
    <pk-badge dot :offset="[-5, 5]">
        <div class="badge-item"></div>
    </pk-badge>
```
:::


### 数字0显隐
设置`show-zero`属性为`true`，当`content`为数字`0`时，显示。

::: code-tabs#show-zero
@tab vue

```vue [示例]
    <pk-badge :content="0">
        <div class="badge-item"></div>
    </pk-badge>
    <pk-badge :content="0" show-zero>
        <div class="badge-item"></div>
    </pk-badge>
```
:::


### 自定义颜色
设置`background`属性为可修改徽标的背景颜色。

::: code-tabs#background
@tab vue

```vue [示例]
    <pk-badge :content="100" background="#42b983">
        <div class="badge-item"></div>
    </pk-badge>
```
:::


### 最大数值
设置`max`属性为可修改徽标的最大值，当`content`为`Number`,且超过最大值时，显示`max`值。

::: code-tabs#max
@tab vue

```vue [示例]
    <pk-badge :content="10000" :max="10">
        <div class="badge-item"></div>
    </pk-badge>
```
:::

### 单独使用
支持单独使用。

::: code-tabs#on
@tab vue

```vue [示例]
    <pk-badge :content="10000"></pk-badge>
    <pk-badge content="hot"></pk-badge>
    <pk-badge content="自定义文字"></pk-badge>
    <pk-badge content="自定义文字" background="#42b983"></pk-badge>
```
:::



## API

### Props
| 属性名     | 说明                                                                 | 类型             | 默认值  | 可选值 |
| ---------- | -------------------------------------------------------------------- | ---------------- | ------- | ------ |
| content    | 徽标显示的内容                                                       | `string｜number` |         |        |
| background | 徽标颜色                                                             | `string`         |         |        |
| dot        | 显示为小红点，此时`content`失效                                      | `boolean`        | `false` |        |
| max        | 当`content`为`Number`，且大于此值时，将显示为此值                    | `number`         | `99`    |        |
| show-zero  | 当`content`为`Number`，且为`0`,通过此值控制是否显示`0`               | `boolean`        | `false` |        |
| offset     | 接收数组，第一个值为竖直方向上的偏移值，第二个值为水平方向上的偏移值 | `number[]`       | `[0,0]` |        |


### Events
| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |


### Slots

| 插槽名  | 说明         |
| ------- | ------------ |
| default | 默认插槽     |
| content | 徽标内容插槽 |

### Exposes
| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |


## 样式变量

| 名称                          | 默认值                | 说明 |
| ----------------------------- | --------------------- | ---- |
| --pk-badge-padding-vertical   | 0                     |      |
| --pk-badge-padding-horizontal | 5px                   |      |
| --pk-badge-background         | var(--pk-error-color) |      |
| --pk-badge-font-size          | 12px                  |      |
| --pk-badge-color              | #ffffff               |      |
| --pk-badge-dot-size           | 8px                   |      |