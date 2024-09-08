---
title: 空元素
lang: zh-cn
aside: false
---

# Empty 空元素

## 基本使用
```vue
<pk-empty></pk-empty>
```


## 代码示例
### 基础用法

::: code-tabs#default
@tab vue
```vue [示例]
  <pk-empty></pk-empty>
```
:::


### 自定义图标
可通过 `icon` 属性自定义图标，支持`Icon`图标类名或图标url地址。
::: code-tabs#icon
@tab vue
```vue [示例]
  <pk-empty icon="https://usc.douyeblog.top/img/logo.png"></pk-empty>
```
:::

### 自定义文案
可通过 `text` 属性自定义文案，也可以通过`default`插槽自定义。
::: code-tabs#text
@tab vue
```vue [示例]
    <pk-empty>自定义文案</pk-empty>
```
:::


## API

### Props
| 属性名       | 说明                                      | 类型     | 默认值             | 可选值 |
| ------------ | ----------------------------------------- | -------- | ------------------ | ------ |
| icon         | 空元素的图标,图标类名或图标url地址        | `string` | `container-filled` |        |
| class-prefix | 用于自定义图标库的自定义类名              | `string` |                    |        |
| text         | 空元素文案                                | `string` | `暂无数据`         |        |
| size         | 空元素图标的大小，单位为`px`              | `number` |                    |        |
| height       | 当图标为url地址时，自定义高度，单位为`px` | `number` |                    |        |

### Events
| 事件名 | 说明             | 回调参数                |
| ------ | ---------------- | ----------------------- |
| click  | 点击空元素时触发 | `(e:MousEvent) => void` |


### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |
| icon    | 图标插槽 |

### Exposes
| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |

## 样式变量

| 名称                 | 默认值                         | 说明 |
| -------------------- | ------------------------------ | ---- |
| --pk-empty-color     | var(--pk-text-color-secondary) |      |
| --pk-empty-size      | 90px                           |      |
| --pk-empty-margin    | var(--pk-margin-m)             |      |
| --pk-empty-font-size | var(--pk-font-size-s)          |      |
