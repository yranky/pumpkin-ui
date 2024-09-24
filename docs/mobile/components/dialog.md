---
title: 对话框
lang: zh-cn
aside: false
---

# Dialog 对话框
## 基本使用

### 命令式调用
::: code-tabs#fun

@tab script
```js [script]
import { Dialog } from "@pumpkin-ui/mobile"

Dialog.show('基础用法').then(res=>{
    console.log(res)
})
```
:::

## 代码示例
### 基础用法
通过`show`函数调用，第一个参数传入对话框内容的文本内容即可。第一个参数也支持传入对象，对象中可以传入`message`、`overlay`等属性。

::: code-tabs#default
@tab template

```vue [template]
    <div class="dialog-container">
        <pk-cell-group>
            <pk-cell is-link @click="Dialog.show('基础用法')">
                <template #title>基础用法</template>
            </pk-cell>
        </pk-cell-group>
    </div>
```

@tab script
```js [script]
import { Dialog, PkCellGroup, PkCell } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]
.dialog-container {
    padding: 0;
}
```
:::

### 对话框内容对齐
可通过`messageAlign`属性设置内容对齐方式，可选值为`left`、`center`、`right`。

::: code-tabs#message-align
@tab template

```vue [template]
    <div class="dialog-container">
        <pk-cell-group>
            <pk-cell is-link @click="Dialog.show({
                messageAlign: 'left',
                message: '我是内容'
            })">
                <template #title>内容左对齐</template>
            </pk-cell>
            <pk-cell is-link @click="Dialog.show({
                messageAlign: 'right',
                message: '我是内容'
            })">
                <template #title>内容右对齐</template>
            </pk-cell>
        </pk-cell-group>
    </div>
```

@tab script
```js [script]
import { Dialog, PkCellGroup, PkCell } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]
.dialog-container {
    padding: 0;
}
```
:::



### 标题
可通过`title`属性设置对话框标题。

::: code-tabs#title
@tab template

```vue [template]
    <div class="dialog-container">
        <pk-cell-group>
            <pk-cell is-link @click="Dialog.show({
                title: '标题',
                message: '我是内容'
            })">
                <template #title>标题</template>
            </pk-cell>
        </pk-cell-group>
    </div>
```

@tab script
```js [script]
import { Dialog, PkCellGroup, PkCell } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]
.dialog-container {
    padding: 0;
}
```
:::




### 关闭按钮
可通过设置`showClose`属性来显示关闭按钮。

::: code-tabs#show-close
@tab template

```vue [template]
    <div class="dialog-container">
        <pk-cell-group>
            <pk-cell is-link @click="Dialog.show({
                message: '我是内容',
                showClose: true
            })">
                <template #title>显示关闭按钮</template>
            </pk-cell>
            <pk-cell is-link @click="Dialog.show({
                message: '我是内容',
                showCancelButton: false
            })">
                <template #title>不显示取消按钮</template>
            </pk-cell>
        </pk-cell-group>
    </div>
```

@tab script
```js [script]
import { Dialog, PkCellGroup, PkCell } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]
.dialog-container {
    padding: 0;
}
```
:::


### 自定义确认/取消按钮文本
可通过`confirmButtonText`设置确认按钮文本，`cancelButtonText`设置取消按钮文本；通过`confirmButtonColor`设置确认按钮颜色，`cancelButtonColor`设置取消按钮颜色;通过`showConfirmButton`设置是否显示确认按钮，`showCancelButton`设置是否显示取消按钮。

::: code-tabs#button
@tab template

```vue [template]
    <div class="dialog-container">
        <pk-cell-group>
            <pk-cell is-link @click="Dialog.show({
                message: '我是内容',
                confirmButtonText: '确认按钮'
            })">
                <template #title>确认按钮文本</template>
            </pk-cell>
            <pk-cell is-link @click="Dialog.show({
                message: '我是内容',
                cancelButtonColor: 'red'
            })">
                <template #title>取消按钮颜色</template>
            </pk-cell>
        </pk-cell-group>
    </div>
```

@tab script
```js [script]
import { Dialog, PkCellGroup, PkCell } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]
.dialog-container {
    padding: 0;
}
```
:::




### 按钮位置反转
可通过`buttonReverse`设置按钮位置反转。默认是`false`，即确认按钮在右边，取消按钮在左边；设置为`true`时，确认按钮在左边，取消按钮在右边。

::: code-tabs#reverse
@tab template

```vue [template]
    <div class="dialog-container">
        <pk-cell-group>
            <pk-cell is-link @click="openEventDialog">
                <template #title>事件监听</template>
            </pk-cell>
        </pk-cell-group>
    </div>
```

@tab script
```js [script]
import { Dialog, PkCellGroup, PkCell } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]
.dialog-container {
    padding: 0;
}
```
:::




### 事件监听
::: code-tabs#event
@tab template

```vue [template]
    <div class="dialog-container">
        <pk-cell-group>
            <pk-cell is-link @click="openEventDialog">
                <template #title>事件监听</template>
            </pk-cell>
        </pk-cell-group>
    </div>
```

@tab script
```js [script]
import { Dialog, PkCellGroup, PkCell } from '@pumpkin-ui/mobile'

const openEventDialog = () => {
    Dialog.show({
        message: '我是内容',
        onClose: () => {
            console.log('关闭了')
        },
        onClosed: () => {
            console.log('关闭动画结束了')
        },
        onOpen: () => {
            console.log('打开了')
        },
        onOpened: () => {
            console.log('打开动画结束了')
        },
        onConfirm: () => {
            console.log('点击了确定')
            Toast.show('点击了确定')
        },
        onCancel: () => {
            console.log('点击了取消')
            Toast.show('点击了取消')
        }
    }).then((res => {
        console.log(`promise结果：${JSON.stringify(res)}`)
    }))
}

```

@tab style
```css [style]
.dialog-container {
    padding: 0;
}
```
:::



### 点击遮罩关闭
可通过设置`closeOnPressOverlay`为`true`来开启点击遮罩关闭功能，默认为`false`。

::: code-tabs#overlay
@tab template

```vue [template]
    <div class="dialog-container">
        <pk-cell-group>
            <pk-cell is-link @click="Dialog.show({
                message: '我是内容',
                closeOnPressOverlay: true
            })">
                <template #title>点击遮罩层关闭</template>
            </pk-cell>
        </pk-cell-group>
    </div>
```

@tab script
```js [script]
import { Dialog, PkCellGroup, PkCell } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]
.dialog-container {
    padding: 0;
}
```
:::



## API

### 命令式调用
#### 方法
| 方法        | 说明       | 类型                                                                  |
| ----------- | ---------- | --------------------------------------------------------------------- |
| Dialog.show | 显示对话框 | ` (option: DialogOptions ｜ string) => Promise<DialogCallbackParams>` |

#### DialogOptions
| 属性名                 | 说明                                         | 类型                        | 默认值   |
| ---------------------- | -------------------------------------------- | --------------------------- | -------- |
| title                  | 对话框标题                                   | `string`                    |          |
| message                | 对话框内容                                   | `string`                    |          |
| messageAlign           | 对话框内容对齐方式                           | `'left'｜'center'｜'right'` | `center` |
| showClose              | 是否显示关闭按钮                             | `boolean`                   | `false`  |
| showConfirmButton      | 是否显示确认按钮                             | `boolean`                   | `true`   |
| confirmButtonText      | 确认按钮文本                                 | `string`                    | `确认`   |
| confirmButtonColor     | 确认按钮文本颜色                             | `string`                    |          |
| showCancelButton       | 是否显示取消按钮                             | `boolean`                   | `true`   |
| cancelButtonText       | 取消按钮文本                                 | `string`                    | `取消`   |
| cancelButtonColor      | 取消文本颜色                                 | `string`                    |          |
| buttonReverse          | 按钮顺序反转                                 | `boolean`                   | `false`  |
| overlay                | 是否显示遮罩层                               | `boolean`                   | `true`   |
| overlayBackgroundColor | 遮罩层背景颜色                               | `string`                    |          |
| closeOnPressOverlay    | 点击遮罩层是否关闭                           | `boolean`                   | `false`  |
| onCancel               | 对话框点击取消或触发点击遮罩关闭时触发的回调 | `()=>void`                  |          |
| onConfirm              | 对话框点击确认时触发的回调                   | `()=>void`                  |          |
| onClose                | 对话框关闭时触发的回调                       | `()=>void`                  |          |
| onClosed               | 对话框关闭动画结束时触发的回调               | `()=>void`                  |          |
| onOpen                 | 对话框打开时触发的回调                       | `()=>void`                  |          |
| onOpened               | 对话框打开动画结束时触发的回调               | `()=>void`                  |          |

#### DialogCallbackParams
| 属性名 | 说明 | 类型                  | 默认值 |
| ------ | ---- | --------------------- | ------ |
| type   | 类型 | `'confirm'｜'cancel'` |        |

### Props

| 属性名                   | 说明                 | 类型                        | 默认值  | 可选值 |
| ------------------------ | -------------------- | --------------------------- | ------- | ------ |
| v-model                  | 对话框显示，双向绑定 | `boolean`                   | `false` |        |
| overlay                  | 是否显示遮罩层       | `boolean`                   | `true`  |        |
| overlay-background-color | 遮罩层背景颜色       | `string`                    |         |        |
| title                    | 对话框标题           | `string`                    |         |        |
| message                  | 对话框内容           | `string`                    |         |        |
| message-align            | 对话框内容对齐方式   | `'left'｜'center'｜'right'` |         |        |
| show-close               | 是否显示关闭按钮     | `boolean`                   | `false` |        |
| show-confirm-button      | 是否显示确认按钮     | `boolean`                   | `true`  |        |
| confirm-button-text      | 确认按钮文本         | `string`                    | `确认`  |        |
| confirm-button-color     | 确认按钮文本颜色     | `string`                    |         |        |
| show-cancel-button       | 是否显示取消按钮     | `boolean`                   | `true`  |        |
| cancel-button-text       | 取消按钮文本         | `string`                    | `取消`  |        |
| cancel-button-color      | 取消文本颜色         | `string`                    |         |        |
| button-reverse           | 按钮顺序反转         | `boolean`                   | `false` |        |
| close-on-press-overlay   | 点击遮罩层关闭       | `boolean`                   | `false` |        |




### Events

| 事件名    | 说明               | 回调参数     |
| --------- | ------------------ | ------------ |
| onOpen    | 打开时触发         | `() => void` |
| onClose   | 打开时触发         | `() => void` |
| onOpened  | 打开动画结束时触发 | `() => void` |
| onClosed  | 关闭动画结束时触发 | `() => void` |
| onCancel  | 点击取消时的回调   | `()=>void`   |
| onConfirm | 确认时触发的回调   | `()=>void`   |



### Slot
| 插槽名  | 说明                 |
| ------- | -------------------- |
| title   | 标题区域插槽         |
| default | 内容区域插槽         |
| action  | 底部按钮区域插槽     |
| close   | 关闭按钮图标区域插槽 |



### Exposes

| 名称       | 说明           | 类型说明                      |
| ---------- | -------------- | ----------------------------- |
| updateShow | 更新对话框显示 | `(show:boolean = true)=>void` |


## 样式变量

| 名称                                 | 默认值                         | 说明 |
| ------------------------------------ | ------------------------------ | ---- |
| --pk-dialog-padding-horizontal       | 24px                           |      |
| --pk-dialog-padding-vertical         | 16px                           |      |
| --pk-dialog-background               | var(--pk-bg-color)             |      |
| --pk-dialog-width                    | 80vw                           |      |
| --pk-dialog-title-font-size          | 18px                           |      |
| --pk-dialog-title-font-color         | var(--pk-text-color)           |      |
| --pk-dialog-border-radius            | 16px                           |      |
| --pk-dialog-content-padding-vertical | 16px                           |      |
| --pk-dialog-content-font-size        | 16px                           |      |
| --pk-dialog-content-font-color       | var(--pk-text-color-secondary) |      |
| --pk-dialog-action-padding-vertical  | 4px                            |      |
| --pk-dialog-close-top                | 13px                           |      |
| --pk-dialog-close-right              | 13px                           |      |
| --pk-dialog-close-size               | 20px                           |      |