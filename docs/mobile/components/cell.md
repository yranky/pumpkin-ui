---
title: 单元格组件
lang: zh-cn
aside: false
---

# Cell 单元格

## 基本使用
```vue
<pk-cell>按钮</pk-cell>
```

## 配合CellGroup
```vue
<pk-cell-group>
  <pk-cell>按钮</pk-cell>
  <pk-cell>按钮</pk-cell>
</pk-cell-group>
```

## 代码示例
### 基础用法
单独使用`Cell`。
::: code-tabs#shell
@tab vue
```vue
<pk-cell title="标题" value="内容"></pk-cell>
<pk-cell title="标题2" value="内容2"></pk-cell>
```
:::

### 展示右箭头
可通过`is-link`属性设置右箭头显示隐藏，默认为`false`。

::: code-tabs#shell
@tab vue
```vue
<pk-cell title="标题" value="内容" is-link></pk-cell>
<pk-cell title="标题2" value="内容2" is-link></pk-cell>
```
:::

### 显示分割线
可通过`border`属性设置下方分割线显示隐藏，默认为`true`。

::: code-tabs#shell
@tab vue
```vue
<pk-cell title="显示分割线" value="内容"></pk-cell>
<pk-cell title="隐藏分割线" value="内容2" :border="false"></pk-cell>
```
:::

### 显示星号
可通过`required`属性设置星号显示隐藏，默认为`false`。

::: code-tabs#shell
@tab vue
```vue
<pk-cell title="显示星号" value="内容" required></pk-cell>
```
:::

### 垂直布局
可通过`vertical`属性设置垂直布局，默认为`false`。

::: code-tabs#shell
@tab vue
```vue
<pk-cell title="垂直布局" value="内容" vertical></pk-cell>
<pk-cell title="垂直布局" value="内容" vertical is-link></pk-cell>
```
:::

### 单元格组
`Cell`组件可配置`CellGroup`组件使用。
::: code-tabs#shell
@tab vue
```vue
<pk-cell-group title="单元格组标题">
    <pk-cell title="单元格1" value="内容1"></pk-cell>
    <pk-cell title="单元格2" value="内容2"></pk-cell>
    <pk-cell title="单元格3" value="内容3"></pk-cell>
</pk-cell-group>
```
:::


## API

### CellGroup Props
| 属性名 | 说明         | 类型     | 默认值 | 可选值 |
| ------ | ------------ | -------- | ------ | ------ |
| title  | 单元格组标题 | `string` |        |        |

### Cell Props

| 属性名   | 说明                                  | 类型      | 默认值  | 可选值 |
| -------- | ------------------------------------- | --------- | ------- | ------ |
| title    | 左侧标题                              | `string`  |         |        |
| value    | 右侧内容                              | `string`  |         |        |
| is-link  | 显示右箭头                            | `boolean` | `false` |        |
| border   | 显示分割线                            | `boolean` | `true`  |        |
| required | 显示星号                              | `boolean` | `false` |        |
| disabled | 禁用，不显示点击效果且不触发click事件 | `boolean` | `false` |        |


### Events

| 事件名 | 说明             | 回调参数                      |
| ------ | ---------------- | ----------------------------- |
| click  | 点击`Cell`时触发 | `(event: MouseEvent) => void` |


### CellGroup Slots

| 插槽名  | 说明             |
| ------- | ---------------- |
| title   | 头部标题插槽     |
| extra   | 头部标题右侧插槽 |
| default | 内容区域插槽     |

#### 示例
以下是`CellGroup`插槽示例。
::: code-tabs#shell
@tab vue

```vue [示例]
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
```
:::

### Cell Slots

| 插槽名     | 说明             |
| ---------- | ---------------- |
| title      | 标题区域插槽     |
| default    | 内容区域插槽     |
| right-icon | 右侧箭头图标插槽 |
| bottom     | 下方区域插槽     |

#### 示例
以下是`Cell`插槽示例。
::: code-tabs#shell
@tab vue

```vue [示例]
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
```
:::


### Exposes

| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |


## CellGroup 样式变量

| 名称                               | 默认值                         | 说明 |
| ---------------------------------- | ------------------------------ | ---- |
| --pk-cell-group-padding-horizontal | var(--pk-padding-l)            |      |
| --pk-cell-group-padding-vertical   | var(--pk-padding-s)            |      |
| --pk-cell-group-header-color       | var(--pk-text-color-secondary) |      |
| --pk-cell-group-header-font-size   | var(--pk-font-size-s)          |      |

## Cell 样式变量

| 名称                         | 默认值                         | 说明 |
| ---------------------------- | ------------------------------ | ---- |
| --pk-cell-padding            | var(--pk-padding-l)            |      |
| --pk-cell-title-font-size    | var(--pk-font-size-m)          |      |
| --pk-cell-value-font-size    | var(--pk-font-size-m)          |      |
| --pk-cell-bottom-font-size   | var(--pk-font-size-s)          |      |
| --pk-cell-title-color        | var(--pk-text-color)           |      |
| --pk-cell-value-color        | var(--pk-text-color-secondary) |      |
| --pk-cell-bottom-color       | var(--pk-text-color-secondary) |      |
| --pk-cell-required-color     | var(--pk-error-color)          |      |
| --pk-cell-title-line-height  | 1.375                          |      |
| --pk-cell-value-line-height  | 1.375                          |      |
| --pk-cell-bottom-line-height | 1.5                            |      |