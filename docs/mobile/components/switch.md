---
title: 开关
lang: zh-cn
aside: false
---


# Switch 开关

## 基本使用
```vue
<pk-switch></pk-switch>
```


## 代码示例
### 基础用法
创建一个开关。
::: code-tabs#default
@tab template

```vue [template]
<div class="switch-container">
    <pk-cell-group>
        <pk-cell title="小号">
            <pk-switch v-model="value" />
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkSwitch, PkCell, PkCellGroup } from "@pk-ui/mobile";
import { ref } from "vue";

const value = ref(true)
```

@tab style
```css [style]
.switch-container {
    padding: 10px 0;
}
```
:::


### 大小
通过`size`属性设置开关的大小。
::: code-tabs#size
@tab template

```vue [template]
<div class="switch-container">
    <pk-cell-group>
        <pk-cell title="小号">
            <pk-switch v-model="value" />
        </pk-cell>
        <pk-cell title="大号">
            <pk-switch v-model="value" size="l" />
        </pk-cell>
        <pk-cell title="中号">
            <pk-switch v-model="value" size="m" />
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkSwitch, PkCell, PkCellGroup } from "@pk-ui/mobile";
import { ref } from "vue";

const value = ref(true)
```

@tab style
```css [style]
.switch-container {
    padding: 10px 0;
}
```
:::

### 禁用
通过`disabled`属性设置开关的禁用。
::: code-tabs#disabled
@tab template

```vue [template]
<div class="switch-container">
    <pk-cell-group>
        <pk-cell title="禁用">
            <pk-switch v-model="value" :disabled="true" />
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkSwitch, PkCell, PkCellGroup } from "@pk-ui/mobile";
import { ref } from "vue";

const value = ref(true)
```

@tab style
```css [style]
.switch-container {
    padding: 10px 0;
}
```
:::


### 显示加载
通过`loading`属性设置开关的加载。
::: code-tabs#loading
@tab template

```vue [template]
<div class="switch-container">
    <pk-cell-group>
        <pk-cell title="显示加载">
            <pk-switch v-model="value" :loading="true" />
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkSwitch, PkCell, PkCellGroup } from "@pk-ui/mobile";
import { ref } from "vue";

const value = ref(true)
```

@tab style
```css [style]
.switch-container {
    padding: 10px 0;
}
```
:::


### onChange事件
通过`onChange`监听值改变。
::: warning 提示
该事件需要用户主动触发，如果是通过`v-model`等方式修改，则不会触发。
:::

::: code-tabs#onChange
@tab template

```vue [template]
<div class="switch-container">
    <pk-cell-group>
        <pk-cell title="onChange事件">
            <pk-switch v-model="value" @onChange="onChange" />
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkSwitch, PkCell, PkCellGroup, Toast } from "@pk-ui/mobile";
import { ref } from "vue";

const value = ref(true)


const onChange = (val) => {
    Toast.showToast(`当前状态：${val}`)
}
```

@tab style
```css [style]
.switch-container {
    padding: 10px 0;
}
```
:::



### 异步修改
通过`beforeChange`属性实现。

::: code-tabs#beforeChange
@tab template

```vue [template]
<div class="switch-container">
    <pk-cell-group>
        <pk-cell title="异步修改">
            <pk-switch v-model="value" :before-change="beforeChange" :loading="loading" />
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkSwitch, PkCell, PkCellGroup } from "@pk-ui/mobile";
import { ref } from "vue";

const value = ref(true)
const loading = ref(false)
const beforeChange = (oldValue, newValue) => {
    return new Promise((resolve, reject) => {
        loading.value = true
        setTimeout(() => {
            resolve(true)
            loading.value = false
        }, 3000)
    })
}
```

@tab style
```css [style]
.switch-container {
    padding: 10px 0;
}
```
:::


### 自定义颜色
通过`background`设置开关打开时的背景，通过`inactive-background`设置开关关闭时的背景。
::: code-tabs#background
@tab template

```vue [template]
<div class="switch-container">
    <pk-cell-group>
        <pk-cell title="自定义颜色">
            <pk-switch v-model="value" background="red" inactive-background="#37373d" />
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkSwitch, PkCell, PkCellGroup } from "@pk-ui/mobile";
import { ref } from "vue";

const value = ref(true)
```

@tab style
```css [style]
.switch-container {
    padding: 10px 0;
}
```
:::

## API

### Props
| 属性名              | 说明                                               | 类型                                                             | 默认值     | 可选值                   |
| ------------------- | -------------------------------------------------- | ---------------------------------------------------------------- | ---------- | ------------------------ |
| v-model             | 当前开关的状态值                                   | `boolean`                                                        |            |                          |
| size                | 开关的大小                                         | `'l'｜'m'｜'s'`                                                  | `m`        | `'l'｜'m'｜'s'`          |
| disabled            | 是否禁用                                           | `boolean`                                                        | `false`    |                          |
| loading             | 是否显示加载状态                                   | `boolean`                                                        | `false`    |                          |
| loading-size        | 设置加载图标的大小                                 | `string`                                                         | `20px`     |                          |
| loading-type        | 设置加载图标的样式,与loading组件的type属性一致     | `'circular'｜ 'spinner'`                                         | `circular` | `'circular'｜ 'spinner'` |
| loading-color       | 设置加载图标的颜色                                 | `string`                                                         |            |
| background          | 设置开关打开时的背景                               | `string`                                                         |            |
| inactive-background | 设置开关关闭时的背景                               | `string`                                                         |            |
| before-change       | 值修改前的事件，返回`false`将阻止修改，支持Promise | `(oldValue:boolean,newValue:boolean)=>boolean｜Promise<boolean>` |            |                          |


### Events

| 事件名   | 说明                                                                                | 回调参数                      |
| -------- | ----------------------------------------------------------------------------------- | ----------------------------- |
| click    | 点击时触发(加载或者禁用状态也会触发)                                                | `(event: MouseEvent) => void` |
| onChange | 点击时触发(加载或者禁用状态也会触发。需要用户主动触发，如果通过v-model修改不会触发) | `(value: boolean) => void`    |



### Slots

| 插槽名 | 说明     |
| ------ | -------- |
| slide  | 滑块区域 |

#### 示例
::: code-tabs#slide-slot
@tab template

```vue [template]
<div class="switch-container">
    <pk-cell-group>
        <pk-cell title="slide插槽">
            <pk-switch v-model="value">
                <template #slide>
                    <template v-if="value">✅</template>
                    <template v-else>❎</template>
                </template>
            </pk-switch>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkSwitch, PkCell, PkCellGroup } from "@pk-ui/mobile";
import { ref } from "vue";

const value = ref(true)
```

@tab style
```css [style]
.switch-container {
    padding: 10px 0;
}
```
:::


### Exposes

| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |



## 样式变量

| 名称                         | 默认值                             | 说明 |
| ---------------------------- | ---------------------------------- | ---- |
| --switch-height-s            | 20px                               |      |
| --switch-height-m            | 26px                               |      |
| --switch-height-l            | 32px                               |      |
| --switch-width               | 60px                               |      |
| --switch-inactive-background | var(--pk-inactive-bg-color)        |      |
| --switch-active-background   | var(--pk-primary-color)            |      |
| --switch-transition-duration | var(--pk-transition-duration)      |      |
| --switch-transition-fn       | cubic-bezier(0.07, 1.04, 0.7, 0.9) |      |
| --switch-disabled-opacity    | var(--pk-disabled-opacity)         |      |
| --switch-loading-size        | 20px                               |      |