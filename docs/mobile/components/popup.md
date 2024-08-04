---
title: 弹出层
lang: zh-cn
aside: false
---

# Popup 弹出层

## 基本使用
```vue
<pk-popup></pk-popup>
```


## 代码示例
### 基础用法
创建一个弹出层。

::: code-tabs#default
@tab template

```vue [template]
<pk-cell is-link @click="defaultShow = true">
    <template #title>基础用法示例</template>
</pk-cell>
<pk-popup v-model="defaultShow">
    <div class="popup-content">
        <pk-button @click="defaultShow = false">点击关闭</pk-button>
    </div>
</pk-popup>
```

@tab script
```js [script]
import { PkPopup, PkCell, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const defaultShow = ref<boolean>(false)

```

@tab style
```css [style]

```
:::

### 弹出方向
通过 `position` 属性设置弹出层的位置，可选值为 `top`、`bottom`、`left`、`right`、`center`,默认为`center`。

::: code-tabs#position
@tab template

```vue [template]
<pk-cell is-link @click="topShow = true">
    <template #title>顶部弹出</template>
</pk-cell>
<pk-popup v-model="topShow" position="top">
    <div class="popup-content">
        <pk-button @click="topShow = false">点击关闭</pk-button>
    </div>
</pk-popup>


<pk-cell is-link @click="leftShow = true">
    <template #title>左侧弹出</template>
</pk-cell>
<pk-popup v-model="leftShow" position="left">
    <div class="popup-content">
        <pk-button @click="leftShow = false">点击关闭</pk-button>
    </div>
</pk-popup>


<pk-cell is-link @click="rightShow = true">
    <template #title>右侧弹出</template>
</pk-cell>
<pk-popup v-model="rightShow" position="right">
    <div class="popup-content">
        <pk-button @click="rightShow = false">点击关闭</pk-button>
    </div>
</pk-popup>


<pk-cell is-link @click="bottomShow = true">
    <template #title>底部弹出</template>
</pk-cell>
<pk-popup v-model="bottomShow" position="bottom">
    <div class="popup-content">
        <pk-button @click="bottomShow = false">点击关闭</pk-button>
    </div>
</pk-popup>


<pk-cell is-link @click="centerShow = true">
    <template #title>中间弹出</template>
</pk-cell>
<pk-popup v-model="centerShow" position="center">
    <div class="popup-content">
        <pk-button @click="centerShow = false">点击关闭</pk-button>
    </div>
</pk-popup>
```

@tab script
```js [script]
import { PkPopup, PkCell, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const topShow = ref<boolean>(false)
const leftShow = ref<boolean>(false)
const rightShow = ref<boolean>(false)
const bottomShow = ref<boolean>(false)
const centerShow = ref<boolean>(false)

```

@tab style
```css [style]

```
:::


### 圆角
通过 `round` 属性设置弹出层是否为圆角，默认为 `false`。

::: code-tabs#round
@tab template

```vue [template]
<pk-cell is-link @click="roundShow = true">
    <template #title>圆角弹出层</template>
</pk-cell>
<pk-popup v-model="roundShow" position="bottom" round>
    <div class="popup-content">
        <pk-button @click="roundShow = false">点击关闭</pk-button>
    </div>
</pk-popup>
```

@tab script
```js [script]
import { PkPopup, PkCell, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const roundShow = ref<boolean>(false)

```

@tab style
```css [style]

```
:::


### 自定义内容区域背景色
通过 `background-color` 属性自定义内容区域背景色。

::: code-tabs#round
@tab template

```vue [template]
<pk-cell is-link @click="backgroundShow = true">
    <template #title>自定义内容区域背景色</template>
</pk-cell>

<pk-popup v-model="backgroundShow" position="bottom" background-color="#ee772f">
    <div class="popup-content">
        <pk-button @click="backgroundShow = false">点击关闭</pk-button>
    </div>
</pk-popup>
```

@tab script
```js [script]
import { PkPopup, PkCell, PkButton } from "@pk-ui/mobile"
import { ref } from 'vue'

const backgroundShow = ref<boolean>(false)

```

@tab style
```css [style]

```
:::


## API

### Props
| 属性名                   | 说明                                                          | 类型                                                | 默认值   | 可选值                                              |
| ------------------------ | ------------------------------------------------------------- | --------------------------------------------------- | -------- | --------------------------------------------------- |
| v-model                  | 是否显示弹出层，双向绑定                                      | `boolean`                                           |          |                                                     |
| position                 | 弹出层的弹出方向                                              | `'top'｜ 'bottom'｜ 'left'｜ 'right'｜ 'center'`    | `center` | `'top'｜ 'bottom'｜ 'left'｜ 'right'｜ 'center'`    |
| append-to-body           | 是否将组件插入到body上                                        | `boolean`                                           | `true`   |                                                     |
| overlay                  | 是否存在遮罩                                                  | `boolean`                                           | `true`   |                                                     |
| overlay-background-color | 遮罩层背景颜色                                                | `string`                                            |          |                                                     |
| fade                     | 强制显示fade效果，postion为`center`时，默认为`true`不支持修改 | `boolean`                                           | `false`  |                                                     |
| background-color         | 弹出层内容区域背景颜色                                        | `string`                                            | `false`  |                                                     |
| overflow-y               | 弹出层内容区域的overflow-y属性                                | `'visible'｜ 'hidden'｜ 'scroll'｜ 'clip'｜ 'auro'` | `auto`   | `'visible'｜ 'hidden'｜ 'scroll'｜ 'clip'｜ 'auro'` |
| round                    | 设置弹出层内容区域是否为圆角                                  | `boolean`                                           | `false`  |
| close-on-press-overlay   | 是否支持点击遮罩关闭                                          | `boolean`                                           | `true`   |                                                     |
| z-index                  | 遮罩层层级，组件默认层级是css变量：--pk-z-index-max           | `number`                                            |          |                                                     |


### Events
| 事件名   | 说明               | 回调参数     |
| -------- | ------------------ | ------------ |
| onOpen   | 打开时触发         | `() => void` |
| onClose  | 打开时触发         | `() => void` |
| onOpened | 打开动画结束时触发 | `() => void` |
| onClosed | 关闭动画结束时触发 | `() => void` |


### Slots

| 插槽名  | 说明                     |
| ------- | ------------------------ |
| default | 默认插槽，弹出层上的内容 |

### Exposes
| 名称      | 说明       | 类型说明   |
| --------- | ---------- | ---------- |
| showPopup | 显示弹出层 | `()=>void` |
| hidePopup | 隐藏弹出层 | `()=>void` |


## 样式变量

| 名称                     | 默认值                     | 说明 |
| ------------------------ | -------------------------- | ---- |
| --pk-overlay-background  | var(--pk-overlay-bg-color) |      |
| --pk-overlay-z-index     | var(--pk-z-index-max)      |      |
| --pk-popup-background    | var(--pk-bg-color)         |      |
| --pk-popup-z-index       | var(--pk-z-index-max-2)    |      |
| --pk-popup-border-radius | var(--pk-radius-l)         |      |