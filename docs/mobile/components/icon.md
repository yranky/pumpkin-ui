---
title: 图标
lang: zh-cn
aside: false
---

# Icon 图标

## 介绍
`pk-ui`组件库的图标来自于[`ant-design-icons`](https://github.com/ant-design/ant-design-icons)。字体图标转换可查看[`yranky/ant-design-icons`](https://github.com/yranky/ant-design-icons)。

感谢[`ant-design-icons`](https://github.com/ant-design/ant-design-icons)开源图标库和[`svgtofont`](https://github.com/jaywcjlove/svgtofont)。

## 基本使用

```vue
<pk-icon></pk-icon>
```


## 代码示例
### 基础用法
创建一条分割线。

::: code-tabs#default
@tab template

```vue [template]
    <pk-icon name="mail-outlined"></pk-icon>
```

@tab script
```js [script]
import { PkIcon } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::

### 自定义颜色和大小
通过设置`color`和`size`属性来改变图标的颜色和大小。默认情况下，`color`和`size`分别继承于父节点的`color`和`font-size`样式。

::: code-tabs#colorAndSize
@tab template

```vue [template]
    <pk-icon name="mail-outlined" color="red" :size="50"></pk-icon>
```

@tab script
```js [script]
import { PkIcon } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::


### 使用url图片
`name`属性传递url即可使用url图片。同时可通过`size`设置图片的大小，如果您的图片不是正方形，可通过`height`设置高度(这时候`size`是宽度)。

:::warning 注意
您可能需要根据图片大小手动设置`size`和`height`。

::: code-tabs#colorAndSize
@tab template

```vue [template]
    <pk-icon name="https://at.douyeblog.top/anydoor/www/anydoor_www@2.2.0/favicon.ico"></pk-icon>
    <pk-icon name="https://at.douyeblog.top/anydoor/www/anydoor_www@2.2.0/favicon.ico" :size="12"></pk-icon>
```

@tab script
```js [script]
import { PkIcon } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::



## API

### Props
| 属性名       | 说明                                      | 类型     | 默认值 | 可选值 |
| ------------ | ----------------------------------------- | -------- | ------ | ------ |
| name         | 图标类名或图标url地址                     | `string` |        |        |
| class-prefix | 用于自定义图标库，自定义类名              | `string` |        |        |
| size         | 图标的大小，单位为`px`                    | `number` |        |        |
| height       | 当图标为url地址时，自定义高度，单位为`px` | `number` |        |        |
| color        | 自定义图标颜色                            | `string` |        |        |



### Events
| 事件名 | 说明     | 回调参数               |
| ------ | -------- | ---------------------- |
| click  | 点击事件 | `(e:MouseEvent)=>void` |

### Slots

| 插槽名 | 说明 |
| ------ | ---- |


### Exposes

| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |


## 样式变量

| 名称            | 默认值  | 说明 |
| --------------- | ------- | ---- |
| --pk-icon-size  | inherit |      |
| --pk-icon-color | inherit |      |