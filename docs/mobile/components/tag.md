---
title: 标签
lang: zh-cn
aside: false
---

# Tag 标签

## 基本使用
```vue
<pk-tag></pk-tag>
```


## 代码示例
### 基础用法
::: code-tabs#default
@tab template

```vue [template]
    <pk-tag>标签</pk-tag>
```

@tab script
```js [script]
import { PkTag } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::


### 大小
可通过`size`设置标签大小，默认为`m`，可选`s`、`m`、`l`

::: code-tabs#size
@tab template

```vue [template]
    <pk-tag size="l">大</pk-tag>
    <pk-tag size="m">中</pk-tag>
    <pk-tag size="s">小</pk-tag>
```

@tab script
```js [script]
import { PkTag } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::


### 类型
可通过`type`设置标签类型，默认为`primary`，可选`primary`、`hazy`、`ghost`。

::: code-tabs#type
@tab template

```vue [template]
    <pk-tag type="primary">主要 primary</pk-tag>
    <pk-tag type="hazy">朦胧 hazy</pk-tag>
    <pk-tag type="ghost">幽灵 ghost</pk-tag>
```

@tab script
```js [script]
import { PkTag } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::

### 显示关闭
可通过`closable`设置标签是否可关闭，默认为`false`。

::: code-tabs#closable
@tab template

```vue [template]
    <pk-tag type="primary" size="l" closable>关闭按钮</pk-tag>
    <pk-tag type="hazy" size="l" closable>关闭按钮</pk-tag>
    <pk-tag type="ghost" size="l" closable>关闭按钮</pk-tag>
```

@tab script
```js [script]
import { PkTag } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::


### 自定义颜色
可通过`background`设置标签背景颜色，通过`text-color`设置标签文字和字体图标颜色。

::: code-tabs#background
@tab template

```vue [template]
    <pk-tag type="primary" size="l" closable background="#F92F2F">#F92F2F</pk-tag>
    <pk-tag type="primary" size="l" closable background="#F92F2F" text-color="black">#F92F2F，黑色字体</pk-tag>
    <pk-tag type="hazy" size="l" closable background="#F92F2F">#F92F2F</pk-tag>
    <pk-tag type="ghost" size="l" closable background="#F92F2F">#F92F2F</pk-tag>
```

@tab script
```js [script]
import { PkTag } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::

### 自定义关闭图标
可通过`icon`和`classPrefix`属性自定义右侧关闭图标。


::: code-tabs#icon
@tab template

```vue [template]
    <pk-tag type="primary" size="l" closable icon="bulb-outlined">自定义图标</pk-tag>
    <pk-tag type="primary" size="l" closable icon="bulb-outlined" background="#F92F2F">自定义图标</pk-tag>
    <pk-tag type="hazy" size="l" closable icon="bulb-outlined">自定义图标</pk-tag>
    <pk-tag type="ghost" size="l" closable icon="bulb-outlined">自定义图标</pk-tag>
```

@tab script
```js [script]
import { PkTag } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::


## API

### Props
| 属性名       | 说明                         | 类型                         | 默认值           | 可选值                       |
| ------------ | ---------------------------- | ---------------------------- | ---------------- | ---------------------------- |
| v-model      | 是否显示标签，双向绑定       | `boolean`                    | `true`           |                              |
| size         | 标签大小                     | `'s'｜'m'｜'l'`              | `m`              | `'s'｜'m'｜'l'`              |
| type         | 标签类型                     | `'primary'｜'hazy'｜'ghost'` | `primary`        | `'primary'｜'hazy'｜'ghost'` |
| closable     | 是否显示关闭图标并可关闭     | `boolean`                    | `false`          |                              |
| background   | 标签背景色                   | `string`                     |                  |                              |
| text-color   | 标签文字颜色                 | `string`                     |                  |                              |
| icon         | 图标                         | `string`                     | `close-outlined` |                              |
| class-prefix | 用于自定义图标库，自定义类名 | `string`                     |                  |                              |


### Events

| 事件名  | 说明                                         | 回调参数               |
| ------- | -------------------------------------------- | ---------------------- |
| click   | 标签点击事件                                 | `(e:MouseEvent)=>void` |
| onClose | 标签关闭按钮被点击(`closable`为`true`时有效) | `()=>void`             |


### Slots

| 插槽名  | 说明           | 作用域 |
| ------- | -------------- | ------ |
| default | 标签主内容区域 |        |
| icon    | 标签图标区域   |        |



### Exposes

| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |





## 样式变量
| 名称                        | 默认值                   | 说明 |
| --------------------------- | ------------------------ | ---- |
| --pk-tag-padding-s          | 0 2px                    |      |
| --pk-tag-padding-m          | 0 4px                    |      |
| --pk-tag-padding-l          | 0 8px                    |      |
| --pk-tag-font-size-s        | 0 10px                   |      |
| --pk-tag-font-size-m        | 0 12px                   |      |
| --pk-tag-font-size-l        | 0 14px                   |      |
| --pk-tag-primary-background | var(--pk-primary-color)  |      |
| --pk-tag-border-radius      | var(--pk-primary-color)  |      |
| --pk-tag-border-radius-s    | 1px                      |      |
| --pk-tag-border-radius-m    | 2px                      |      |
| --pk-tag-border-radius-l    | 3px                      |      |
| --pk-tag-border-width       | var(--pk-border-width-s) |      |
| --pk-tag-icon-margin        | 2px                      |      |