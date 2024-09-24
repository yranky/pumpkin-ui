---
title: 进度条
lang: zh-cn
aside: false
---

# Progress 进度条

## 基本使用
```vue
<pk-progress></pk-progress>
```

## 代码示例
### 基础用法
创建一个进度条。

::: code-tabs#default
@tab template

```vue [template]
    <div class="progress-container">
        <pk-progress :percentage="percent" />
    </div>
```

@tab script
```js [script]
import { PkProgress } from '@pumpkin-ui/mobile';
import { ref } from 'vue';

const percent = ref(10);

```

@tab style
```css [style]
.progress-container {
    padding: 10px 10px;
}
```
:::


### 自定义颜色
通过`background`属性自定义颜色。

::: code-tabs#background
@tab template

```vue [template]
    <div class="progress-container">
        <pk-progress :percentage="percent" background="red" />
    </div>
```

@tab script
```js [script]
import { PkProgress } from '@pumpkin-ui/mobile';
import { ref } from 'vue';

const percent = ref(10);

```

@tab style
```css [style]
.progress-container {
    padding: 10px 10px;
}
```
:::



### 线条粗细
通过`strokeHeight`属性修改线条粗细。

::: code-tabs#stroke-height
@tab template

```vue [template]
    <div class="progress-container">
        <pk-progress :percentage="percent" :strokeHeight="6" />
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" background="red" />
    </div>
```

@tab script
```js [script]
import { PkProgress } from '@pumpkin-ui/mobile';
import { ref } from 'vue';

const percent = ref(10);

```

@tab style
```css [style]
.progress-container {
    padding: 10px 10px;
}
```
:::


### 显示进度描述
通过`showPivot`属性设置显示进度描述。

::: code-tabs#stroke-height
@tab template

```vue [template]
    <div class="progress-container">
        <pk-progress :percentage="percent" :strokeHeight="6" showPivot />
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" background="red" showPivot />
    </div>
```

@tab script
```js [script]
import { PkProgress } from '@pumpkin-ui/mobile';
import { ref } from 'vue';

const percent = ref(10);

```

@tab style
```css [style]
.progress-container {
    padding: 10px 10px;
}
```
:::

### 自定义进度描述文字样式
可通过`pivotColor`修改进度描述文字的字体颜色，通过`pivotFontSize`修改进度描述文字的字体大小。

::: code-tabs#diy-pivot
@tab template

```vue [template]
    <div class="progress-container">
        <pk-progress :percentage="percent" :strokeHeight="6" showPivot pivotColor="#34B545" :pivotFontSize="12" />
    </div>
```

@tab script
```js [script]
import { PkProgress } from '@pumpkin-ui/mobile';
import { ref } from 'vue';

const percent = ref(10);

```

@tab style
```css [style]
.progress-container {
    padding: 10px 10px;
}
```
:::


### 方形进度条
通过`square`属性设置方形进度条。

::: code-tabs#square
@tab template

```vue [template]
    <div class="progress-container">
        <pk-progress :percentage="percent" :strokeHeight="6" square />
        <br />
        <pk-progress :percentage="percent" :strokeHeight="6" square showPivot />
    </div>
```

@tab script
```js [script]
import { PkProgress } from '@pumpkin-ui/mobile';
import { ref } from 'vue';

const percent = ref(10);

```

@tab style
```css [style]
.progress-container {
    padding: 10px 10px;
}
```
:::



### 过渡动画时长
通过`transitionDuration`属性设置进度条过渡动画时长。

::: code-tabs#transition-duration
@tab template

```vue [template]
    <div class="progress-container">
        <pk-progress :percentage="percent" :strokeHeight="6" :transitionDuration="1" />
    </div>
```

@tab script
```js [script]
import { PkProgress } from '@pumpkin-ui/mobile';
import { ref } from 'vue';

const percent = ref(10);

```

@tab style
```css [style]
.progress-container {
    padding: 10px 10px;
}
```
:::



### 设置轨道背景
通过`trakeBackground`属性设置轨道背景。

::: code-tabs#trake-background
@tab template

```vue [template]
    <div class="progress-container">
        <pk-progress :percentage="percent" :strokeHeight="6" trackBackground="#8F9399" />
    </div>
```

@tab script
```js [script]
import { PkProgress } from '@pumpkin-ui/mobile';
import { ref } from 'vue';

const percent = ref(10);

```

@tab style
```css [style]
.progress-container {
    padding: 10px 10px;
}
```
:::

## API

### Props
| 属性名              | 说明                             | 类型      | 默认值  | 可选值 |
| ------------------- | -------------------------------- | --------- | ------- | ------ |
| percentage          | 进度                             | `number`  | `0`     |        |
| stroke-height       | 线条粗细，单位为`px`             | `number`  | `2`     |        |
| background          | 进度条主题背景色                 | `string`  |         |        |
| trake-background    | 进度条轨道背景色                 | `string`  |         |        |
| square              | 方形轨道                         | `boolean` | `false` |        |
| transition-duration | 过渡动画时长                     | `number`  |         |        |
| show-pivot          | 显示进度描述文字                 | `number`  | `false` |        |
| pivot-color         | 进度描述文字字体颜色             | `string`  |         |        |
| pivot-font-size     | 进度描述文字字体大小，单位为`px` | `number`  |         |        |


### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |



### Slots

| 插槽名 | 说明                                      | 作用域                       |
| ------ | ----------------------------------------- | ---------------------------- |
| pivot  | 进度描述文字区域,需要`show-pivot`为`true` | percentage:number,当前的进度 |

#### 示例
::: code-tabs#slot
@tab template

```vue [template]
    <div class="progress-container">
        <pk-progress :percentage="percent" :strokeHeight="6" showPivot>
            <template #pivot="info">自定义内容{{ info.percentage }}</template>
        </pk-progress>
    </div>
```

@tab script
```js [script]
import { PkProgress } from '@pumpkin-ui/mobile';
import { ref } from 'vue';

const percent = ref(10);

```

@tab style
```css [style]
.progress-container {
    padding: 10px 10px;
}
```
:::


### Exposes

| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |



## 样式变量

| 名称                              | 默认值                        | 说明 |
| --------------------------------- | ----------------------------- | ---- |
| --pk-progress-stroke-height       | 2px                           |      |
| --pk-progress-track-background    | var(--pk-border-color)        |      |
| --pk-progress-stroke-background   | var(--pk-primary-color)       |      |
| --pk-progress-transition-duration | var(--pk-transition-duration) |      |
| --pk-progress-pivot-color         | var(--pk-text-color-invert)   |      |
| --pk-progress-pivot-font-size     | var(--pk-font-size-xs)        |      |