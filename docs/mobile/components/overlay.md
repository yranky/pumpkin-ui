---
title: 遮罩组件
lang: zh-cn
aside: false
---

# Overlay 遮罩

## 基本使用
```vue
<pk-overlay>遮罩</pk-overlay>
```

## 代码示例
### 基础用法
创建一个遮罩层。

::: code-tabs#default
@tab template

```vue [template]
<pk-button block @click="show = !show">显示遮罩层</pk-button>
<pk-overlay v-model="show"></pk-overlay>
```

@tab script
```js [script]
import { PkOverlay, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const show = ref<boolean>(false)
```
:::

### 自定义遮罩颜色
通过`background-color`设置自定义背景颜色。

::: code-tabs#background-color
@tab template

```vue [template]
<pk-button block @click="showCustomBg = !showCustomBg">自定义颜色</pk-button>
<pk-overlay v-model="showCustomBg" background-color="rgba(30, 56, 161,.3)"></pk-overlay>
```

@tab script
```js [script]
import { PkOverlay, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const showCustomBg = ref<boolean>(false)
```
:::

### 禁止点击遮罩关闭
通过`close-on-press`为false关闭点击关闭。

::: code-tabs#close-on-press
@tab template

```vue [template]
<pk-button block @click="startShowNotCloseOnPress">禁止点击关闭(3s后自动关闭)</pk-button>
<pk-overlay v-model="showNotCloseOnPress" :close-on-press="false"></pk-overlay>
```

@tab script
```js [script]
import { PkOverlay, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const showNotCloseOnPress = ref<boolean>(false)
const startShowNotCloseOnPress = () => {
    showNotCloseOnPress.value = true
    setTimeout(() => {
        showNotCloseOnPress.value = false
    }, 3000)
}
```
:::

### 设置z-index层级
通过`z-index`设置层级。

::: code-tabs#z-index
@tab template

```vue [template]
<pk-button block @click="showZIndex = true">z-index层级为3</pk-button>
<pk-overlay v-model="showZIndex" :z-index="3"></pk-overlay>
```

@tab script
```js [script]
import { PkOverlay, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const showZIndex = ref<boolean>(false)
```
:::

## API

### Props
| 属性名           | 说明                                              | 类型      | 默认值 | 可选值 |
| ---------------- | ------------------------------------------------- | --------- | ------ | ------ |
| v-model          | 是否显示遮罩层，双向绑定                          | `boolean` |        |        |
| background-color | 遮罩层背景颜色                                    | `string`  |        |        |
| close-on-press   | 是否支持点击关闭                                  | `boolean` | `true` |        |
| z-index          | 遮罩层级，组件默认层级是css变量：--pk-z-index-max | `number`  |        |        |


### Events
| 事件名 | 说明                                 | 回调参数                      |
| ------ | ------------------------------------ | ----------------------------- |
| click  | 点击按钮时触发(不为禁用或者加载状态) | `(event: MouseEvent) => void` |

### Slots

| 插槽名  | 说明                     |
| ------- | ------------------------ |
| default | 默认插槽，遮罩上添加内容 |

#### 示例
以下是`Overlay`插槽示例。

::: code-tabs#z-index
@tab template

```vue [template]
<pk-button block @click="showSlot = true">插槽</pk-button>
<pk-overlay v-model="showSlot">
    <div @click.stop>内容内容</div>
</pk-overlay>
```

@tab script
```js [script]
import { PkOverlay, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const showSlot = ref<boolean>(false)
```
:::


### Exposes

| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |



## 样式变量

| 名称                    | 默认值                     | 说明 |
| ----------------------- | -------------------------- | ---- |
| --pk-overlay-background | var(--pk-overlay-bg-color) |      |
| --pk-overlay-z-index    | var(--pk-z-index-max)      |      |
