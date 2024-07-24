---
title: 加载
lang: zh-cn
aside: false
---

# Loading 加载

## 基本使用
```vue
<pk-loading></pk-loading>
```

## 代码示例
### 基础用法
创建一个加载动画。

::: code-tabs#default
@tab template

```vue [template]
<pk-loading></pk-loading>
<pk-loading type="spinner"></pk-loading>
```

@tab script
```js [script]
import { PkLoading } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::

### 加载文案
通过`text`设置加载文案或者使用`default`插槽设置加载文案。

::: code-tabs#text
@tab template

```vue [template]
<pk-loading>加载中...</pk-loading>
<pk-loading type="spinner" text="加载中..."></pk-loading>
```

@tab script
```js [script]
import { PkLoading } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::

### 垂直排列
通过`vertical`属性设置垂直排列。

::: code-tabs#vertical
@tab template

```vue [template]
<pk-loading vertical>加载中...</pk-loading>
```

@tab script
```js [script]
import { PkLoading } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::

### 自定义图标颜色
通过`color`属性设置图标颜色。
::: code-tabs#color
@tab template

```vue [template]
<pk-loading color="red"></pk-loading>
<pk-loading type="spinner" color="red"></pk-loading>
```

@tab script
```js [script]
import { PkLoading } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::

### 自定义图标大小
通过`size`属性设置图标大小。
::: code-tabs#size
@tab template

```vue [template]
<pk-loading color="red" size="20px"></pk-loading>
```

@tab script
```js [script]
import { PkLoading } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::

### 自定义文字颜色
通过`textColor`属性设置图标颜色。

::: code-tabs#text-color
@tab template

```vue [template]
<pk-loading color="red" text-color="red">加载中...</pk-loading>
<pk-loading type="spinner" color="red" text-color="#FF6F00">加载中...</pk-loading>
```

@tab script
```js [script]
import { PkLoading } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::


### 自定义文字大小
通过`textSize`属性设置图标颜色。

::: code-tabs#text-size
@tab template

```vue [template]
<pk-loading color="red" text-size="18px">加载中...</pk-loading>
```

@tab script
```js [script]
import { PkLoading } from "@pk-ui/mobile"

```

@tab style
```css [style]

```
:::

## API

### Props
| 属性名     | 说明         | 类型                    | 默认值     | 可选值                  |
| ---------- | ------------ | ----------------------- | ---------- | ----------------------- |
| type       | 图标样式     | `'circular'｜'spinner'` | `circular` | `'circular'｜'spinner'` |
| color      | 图标颜色     | `string`                |            |                         |
| vertical   | 垂直排列     | `boolean`               | `false`    |                         |
| text       | 加载文案     | `string`                |            |                         |
| text-color | 加载文案颜色 | `string`                |            |                         |
| size       | 图标大小     | `string`                |            |                         |
| text-size  | 加载文案大小 | `string`                |            |                         |

### Events
| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |

### Slots

| 插槽名  | 说明               |
| ------- | ------------------ |
| icon    | 图标位置的插槽     |
| default | 加载文案位置的插槽 |

#### 示例
以下是`Loading`插槽示例。
::: code-tabs#slot
@tab template

```vue [template]
<pk-loading color="red">
    <template #icon>
        <div class="loading-icon"></div>
    </template>
    加载中...
</pk-loading>
```

@tab script
```js [script]
import { PkLoading } from "@pk-ui/mobile"

```

@tab style
```css [style]
.loading-icon {
    width: 20px;
    height: 20px;
    border: 2px solid red;
    border-top-color: transparent;
    border-radius: 100%;
    animation: demo-circle infinite 1s linear;
}

@keyframes demo-circle {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
```
:::


### Exposes

| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |


## 样式变量

| 名称                            | 默认值                         | 说明 |
| ------------------------------- | ------------------------------ | ---- |
| --pk-loading-size               | 30px                           |      |
| --pk-loading-text-color         | var(--pk-text-color-disabled)  |      |
| --pk-loading-color              | var(--pk-text-color-secondary) |      |
| --pk-loading-animation-duration | var(--pk-animation-duration)   |      |
| --pk-loading-text-size          | var(--pk-font-size-s)          |      |
| --pk-loading-text-color         | var(--pk-text-color-secondary) |      |
| --pk-loading-margin             | var(--pk-margin-s)             |      |