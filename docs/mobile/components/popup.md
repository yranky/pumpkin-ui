---
title: 弹出层
lang: zh-cn
aside: false
---

# Popup 弹出层

## 基本使用
```vue
<pk-popup>弹出层</pk-popup>
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
.popup-container {}

.popup-content {
    padding: 20px;
    display: flex;
    justify-content: center;
}
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
.popup-container {}

.popup-content {
    padding: 20px;
    display: flex;
    justify-content: center;
}
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
.popup-container {}

.popup-content {
    padding: 20px;
    display: flex;
    justify-content: center;
}
```
:::