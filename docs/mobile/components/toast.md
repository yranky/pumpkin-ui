---
title: 轻提示
lang: zh-cn
aside: false
---

# Toast 轻提示

## 基本使用

### 命令式调用
::: code-tabs#fun

@tab script
```js [script]
import { Toast } from "@pumpkin-ui/mobile"

Toast.show('toast消息')
```
:::

## 代码示例
### 基础用法
通过show函数调用，第一个传入需要展示的文本内容即可。第一个参数也支持传入对象，对象中可以传入type、text、overlay等属性。

::: code-tabs#default
@tab template

```vue [template]
<div class="toast-container">
    <pk-cell-group>
        <pk-cell is-link @click="Toast.show('基础用法')">
            <template #title>基础用法</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { Toast, PkCell, PkCellGroup } from "@pumpkin-ui/mobile"

```

@tab style
```css [style]
.toast-container {
    padding: 0;
}
```
:::

### 加载
通过showLoading函数调用，第一个传入需要展示的文本内容即可。第一个参数也支持传入对象，对象中可以传入text、overlay等属性。
可通过hideLoading函数关闭。

::: code-tabs#loading
@tab template

```vue [template]
<div class="toast-container">
    <pk-cell-group>
        <pk-cell is-link @click="showLoading">
            <template #title>加载用法</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { Toast, PkCell, PkCellGroup} from "@pumpkin-ui/mobile"

const showLoading = () => {
    Toast.showLoading('加载加载')

    setTimeout(() => {
        Toast.hideLoading()
    }, 2000)
}

```

@tab style
```css [style]
.toast-container {
    padding: 0;
}
```
:::
使用命令式调用时，可以通过返回的close关闭。
::: code-tabs#loading-close
@tab template

```vue [template]
<div class="toast-container">
    <pk-cell-group>
        <pk-cell is-link @click="showLoadingClose">
            <template #title>加载用法（通过close关闭）</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { Toast, PkCell, PkCellGroup} from "@pumpkin-ui/mobile"

const showLoadingClose = () => {
    const { close } = Toast.showLoading('加载，close关闭')

    setTimeout(() => {
        close();
    }, 2000)
}

```

@tab style
```css [style]
.toast-container {
    padding: 0;
}
```
:::

### 自定义位置
可通过`position`参数控制轻提示显示的位置，可选值有`'top'｜ 'bottom'｜'center'`。

::: code-tabs#default
@tab template

```vue [template]
<div class="toast-container">
    <pk-cell-group>
        <pk-cell is-link @click="Toast.show({
            text: 'top',
            position: 'top'
        })">
            <template #title>top</template>
        </pk-cell>
        <pk-cell is-link @click="Toast.show({
            text: 'bottom',
            position: 'bottom'
        })">
            <template #title>bottom</template>
        </pk-cell>
        <pk-cell is-link @click="Toast.show({
            text: 'center',
            position: 'center'
        })">
            <template #title>center</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { Toast, PkCell, PkCellGroup } from "@pumpkin-ui/mobile"

```

@tab style
```css [style]
.toast-container {
    padding: 0;
}
```
:::

### 同时显示多个轻提示
通过`Toast.setMultiple`可控制是否支持同时显示多个轻提示。
::: warning
同时显示多个轻提示为`true`时，type为`loading`的组件也只能同时显示一个。
:::

::: code-tabs#multiple
@tab template

```vue [template]
<div class="toast-container">
    <pk-cell-group>
        <pk-cell is-link @click="Toast.setMultiple(true); Toast.show('开启同时显示多个')">
            <template #title>开启同时显示多个</template>
        </pk-cell>
        <pk-cell is-link @click="Toast.setMultiple(false); Toast.show('关闭同时显示多个')">
            <template #title>关闭同时显示多个</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { Toast, PkCell, PkCellGroup } from "@pumpkin-ui/mobile"

```

@tab style
```css [style]
.toast-container {
    padding: 0;
}
```
:::


## API
### 命令式调用
#### 方法
| 方法                | 说明                                          | 类型                                                   |
| ------------------- | --------------------------------------------- | ------------------------------------------------------ |
| Toast.show          | 显示轻提示                                    | `(option: ToastOptions ｜ string)=>{close:()=>void}`   |
| Toast.closeAllToast | 关闭所有命令式调用的轻提示（不能关闭Loading） | `()=>void`                                             |
| Toast.showLoading   | 显示Loading                                   | `(option: LoadingOptions ｜ string)=>{close:()=>void}` |
| Toast.hideLoading   | 隐藏命令式调用的Loading                       | `()=>void`                                             |
| Toast.setMultiple   | 是否允许同时显示多个轻提示                    | `(m:boolean = true)=>void`                             |


#### ToastOptions
| 属性名                 | 说明                                                                                    | 类型                         | 默认值        |
| ---------------------- | --------------------------------------------------------------------------------------- | ---------------------------- | ------------- |
| type                   | 轻提示类型                                                                              | `'text'｜ 'loading'`         | `text`        |
| text                   | 轻提示文字                                                                              | `string`                     |               |
| overlay                | 是否显示遮罩层                                                                          | `boolean`                    | `false`       |
| overlayBackgroundColor | 遮罩层背景色                                                                            | `string`                     | `transparent` |
| position               | 轻提示位置                                                                              | `'top'｜ 'bottom'｜'center'` | `center`      |
| duration               | 轻提示显示时长，type为`loading`时，该值无效，须调用`close`或使用`Toast.hideLoading`关闭 | `number`                     | `2000`        |
| onClose                | 轻提示关闭时触发                                                                        | `()=>void`                   |               |
| onClosed               | 轻提示关闭动画结束触发                                                                  | `()=>void`                   |               |
| onOpen                 | 轻提示打开时触发                                                                        | `()=>void`                   |               |
| onOpened               | 轻提示打开动画结束时触发                                                                | `()=>void`                   |               |


#### LoadingOptions
| 属性名                 | 说明                     | 类型                         | 默认值        |
| ---------------------- | ------------------------ | ---------------------------- | ------------- |
| text                   | 轻提示文字               | `string`                     |               |
| overlay                | 是否显示遮罩层           | `boolean`                    | `true`        |
| overlayBackgroundColor | 遮罩层背景色             | `string`                     | `transparent` |
| position               | 轻提示位置               | `'top'｜ 'bottom'｜'center'` | `center`      |
| onClose                | 轻提示关闭时触发         | `()=>void`                   |               |
| onClosed               | 轻提示关闭动画结束触发   | `()=>void`                   |               |
| onOpen                 | 轻提示打开时触发         | `()=>void`                   |               |
| onOpened               | 轻提示打开动画结束时触发 | `()=>void`                   |               |


### Props
| 属性名                   | 说明                                       | 类型                         | 默认值        | 可选值                       |
| ------------------------ | ------------------------------------------ | ---------------------------- | ------------- | ---------------------------- |
| v-model                  | 是否显示轻提示组件，双向绑定               | `boolean`                    |               |                              |
| type                     | 轻提示类型                                 | `'text'｜ 'loading'`         | `text`        | `'text'｜ 'loading'`         |
| text                     | 轻提示文字                                 | `string`                     |               |                              |
| overlay                  | 是否显示遮罩层                             | `boolean`                    | `false`       |                              |
| overlay-background-bolor | 遮罩层背景颜色                             | `string`                     | `transparent` |                              |
| position                 | 轻提示显示的位置                           | `'top'｜ 'bottom'｜'center'` | `center`      | `'top'｜ 'bottom'｜'center'` |
| duration                 | 轻提示显示时长,type为`loading`时，该值无效 | `number`                     | `2000`        |                              |


### Events
| 事件名   | 说明               | 回调参数     |
| -------- | ------------------ | ------------ |
| onOpen   | 打开时触发         | `() => void` |
| onClose  | 打开时触发         | `() => void` |
| onOpened | 打开动画结束时触发 | `() => void` |
| onClosed | 关闭动画结束时触发 | `() => void` |

### Slot
| 插槽名 | 说明               |
| ------ | ------------------ |
| text   | 文字显示位置的插槽 |
| icon   | 图标显示位置的插槽 |


### Exposes

| 名称       | 说明           | 类型说明                      |
| ---------- | -------------- | ----------------------------- |
| updateShow | 更新轻提示显示 | `(show:boolean = true)=>void` |


## 样式变量

| 名称                                | 默认值                   | 说明 |
| ----------------------------------- | ------------------------ | ---- |
| --pk-toast-position-top-distance    | 5%                       |      |
| --pk-toast-position-bottom-distance | 5%                       |      |
| --pk-toast-background               | var(--pk-toast-bg-color) |      |
| --pk-toast-padding-s                | var(--pk-padding-s)      |      |
| --pk-toast-padding-l                | var(--pk-padding-l)      |      |
| --pk-toast-border-radius            | var(--pk-radius-m)       |      |
| --pk-toast-font-size                | var(--pk-font-size-xs)   |      |