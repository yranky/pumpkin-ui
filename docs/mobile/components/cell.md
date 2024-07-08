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

## API

### props

| 属性名   | 说明       | 类型      | 默认值  | 可选值 |
| -------- | ---------- | --------- | ------- | ------ |
| title    | 左侧标题   | `string`  |         |        |
| value    | 右侧内容   | `string`  |         |        |
| is-link  | 显示右箭头 | `boolean` | `false` |        |
| border   | 显示分割线 | `boolean` | `true`  |        |
| required | 显示星号   | `boolean` | `false` |        |


### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |


### Slots

| 插槽名 | 说明 |
| ------ | ---- |


### Exposes

| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |


## 样式变量

| 名称 | 默认值 | 说明 |
| ---- | ------ | ---- |