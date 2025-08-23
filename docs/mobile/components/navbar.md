---
title: 导航栏
lang: zh-cn
aside: false
---

# Navbar 导航栏

## 一般使用
```vue
    <pk-navbar title="一般使用" />
```


## 代码示例
### 固定在顶部
创建一个固定在顶部的导航栏。通过`fixed`属性控制。
::: code-tabs#fixed
@tab template

```vue [template]
    <pk-navbar title="固定在顶部" fixed />
```

@tab script
```js [script]
import { PkNavbar } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::

### 一般使用
::: code-tabs#default
@tab template

```vue [template]
    <pk-navbar title="一般使用" />
```

@tab script
```js [script]
import { PkNavbar } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::

### 隐藏返回按钮
通过`show-back-arrow`属性控制是否显示返回按钮。
::: code-tabs#hideBack
@tab template

```vue [template]
    <pk-navbar title="隐藏返回按钮" :show-back-arrow="false" />
```

@tab script
```js [script]
import { PkNavbar } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::

## API

### Props
| 属性名          | 说明                         | 类型      | 默认值 | 可选值 |
| --------------- | ---------------------------- | --------- | ------ | ------ |
| title           | 标题                         | `string`  |        |        |
| show-back-arrow | 是否显示返回                 | `boolean` | `true` |        |
| auto-back       | 点击返回是否自动回退上一路由 | `boolean` | `true` |        |
| fixed           | 是否固定定位                 | `boolean` | `true` |        |
| placeholder     | 固定定位是否创建占位元素     | `boolean` | `true` |        |
| z-index         | 导航栏外层容器层叠等级       | `number`  |        |        |

### Events
| 事件名    | 说明                         | 回调参数                |
| --------- | ---------------------------- | ----------------------- |
| leftClick | 左侧返回点击时触发的点击事件 | `(e: MouseEvent)=>void` |


### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| left    | 左侧     |
| default | 标题位置 |
| right   | 右侧     |

::: code-tabs#slots
@tab template

```vue [template]
    <pk-navbar title="标题">
        <template #left>
            左侧插槽
        </template>
        <template #right>
            右侧插槽
        </template>
    </pk-navbar>
```

@tab script
```js [script]
import { PkNavbar } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::



### Exposes

| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |




## 样式变量
| 名称                           | 默认值                | 说明 |
| ------------------------------ | --------------------- | ---- |
| --pk-navbar-padding-horizontal | var(--pk-padding-m)   |      |
| --pk-navbar-height             | 44px                  |      |
| --pk-navbar-title-font-size    | var(--pk-font-size-m) |      |
| --pk-navbar-icon-font-size     | var(--pk-font-size-s) |      |
| --pk-navbar-title-color        | var(--pk-text-color)  |      |
| --pk-navbar-icon-color         | var(--pk-text-color)  |      |
| --pk-navbar-background         | var(--pk-bg-color)    |      |
| --pk-navbar-z-index            | var(--pk-z-index-l)   |      |
    