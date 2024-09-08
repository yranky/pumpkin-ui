---
title: 消息提示
lang: zh-cn
aside: false
---

# Notify 消息提示

## 基本使用

### 命令式调用
::: code-tabs#fun

@tab script
```js [script]
import { Notify } from "@pk-ui/mobile"

Notify.show('Notify消息')
```
:::


## 代码示例
### 基础用法
通过show函数调用，第一个传入需要展示的文本内容即可。第一个参数也支持传入对象，对象中可以传入type、message、duration等属性。

::: code-tabs#default
@tab template

```vue [template]
<div class="notify-container">
    <pk-cell-group>
        <pk-cell is-link @click="Notify.show('基础用法')">
            <template #title>基础用法</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { Notify, PkCell, PkCellGroup } from "@pk-ui/mobile"

```

@tab style
```css [style]
.notify-container {
    padding: 0;
}
```
:::


### 位置
通过设置`position`可设置消息提示的位置，可选值为`top`、`bottom`。

::: code-tabs#position
@tab template

```vue [template]
<div class="notify-container">
    <pk-cell-group>
        <pk-cell is-link @click="Notify.show({
            message: 'top',
            position: 'top'
        })">
            <template #title>top</template>
        </pk-cell>
        <pk-cell is-link @click="Notify.show({
            message: 'bottom',
            position: 'bottom'
        })">
            <template #title>bottom</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { Notify, PkCell, PkCellGroup } from "@pk-ui/mobile"

```

@tab style
```css [style]
.notify-container {
    padding: 0;
}
```
:::


### 提示类型
可通过`success`、`warning`、`error`快速调用不同的消息类型。

::: code-tabs#type
@tab template

```vue [template]
<div class="notify-container">
    <pk-cell-group>
        <pk-cell is-link @click="Notify.success('成功提示')">
            <template #title>成功提示</template>
        </pk-cell>
        <pk-cell is-link @click="Notify.error('错误提示')">
            <template #title>错误提示</template>
        </pk-cell>
        <pk-cell is-link @click="Notify.warning('警告提示')">
            <template #title>警告提示</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { Notify, PkCell, PkCellGroup } from "@pk-ui/mobile"

```

@tab style
```css [style]
.notify-container {
    padding: 0;
}
```
:::

### 同时显示多个轻提示
通过`Notify.setMultiple`可控制是否支持同时显示多个轻提示。


## API
### 命令式调用
#### 方法
| 方法                  | 说明                            | 类型                                                  |
| --------------------- | ------------------------------- | ----------------------------------------------------- |
| Notify.show           | 显示消息提示                    | `(option: NotifyOptions ｜ string)=>{close:()=>void}` |
| Notify.success        | 快速显示`success`类型的消息提示 | `(option: NotifyOptions ｜ string)=>{close:()=>void}` |
| Notify.error          | 快速显示`error`类型的消息提示   | `(option: NotifyOptions ｜ string)=>{close:()=>void}` |
| Notify.warning        | 快速显示`warning`类型的消息提示 | `(option: NotifyOptions ｜ string)=>{close:()=>void}` |
| Notify.setMultiple    | 是否允许同时显示多个消息提示    | `(m:boolean = true)=>void`                            |
| Notify.closeAllNotify | 关闭所有的消息提示              | `()=>void`                                            |



#### NotifyOptions
| 属性名     | 说明                       | 类型                                       | 默认值    |
| ---------- | -------------------------- | ------------------------------------------ | --------- |
| position   | 消息提示位置               | `'top'｜ 'bottom'`                         | `top`     |
| duration   | 消息提示显示时长           | `number`                                   | `2000`    |
| message    | 消息提示显示内容           | `string`                                   |           |
| type       | 消息提示类型               | `'primary'｜'success'｜'error'｜'warning'` | `primary` |
| background | 消息提示背景色             | `string`                                   |           |
| color      | 消息提示文字颜色           | `string`                                   |           |
| onClose    | 消息提示关闭时触发         | `()=>void`                                 |           |
| onClosed   | 消息提示关闭动画结束触发   | `()=>void`                                 |           |
| onOpen     | 消息提示打开时触发         | `()=>void`                                 |           |
| onOpened   | 消息提示打开动画结束时触发 | `()=>void`                                 |           |


### Props
| 属性名     | 说明                           | 类型                                       | 默认值    | 可选值 |
| ---------- | ------------------------------ | ------------------------------------------ | --------- | ------ |
| v-model    | 是否显示消息提示组件，双向绑定 | `boolean`                                  |           |        |
| position   | 消息提示位置                   | `'top'｜ 'bottom'`                         | `top`     |        |
| duration   | 消息提示显示时长               | `number`                                   | `2000`    |        |
| message    | 消息提示显示内容               | `string`                                   |           |        |
| type       | 消息提示类型                   | `'primary'｜'success'｜'error'｜'warning'` | `primary` |        |
| background | 消息提示背景色                 | `string`                                   |           |        |
| color      | 消息提示文字颜色               | `string`                                   |           |        |



### Events
| 事件名   | 说明               | 回调参数                |
| -------- | ------------------ | ----------------------- |
| click    | 点击消息提示时触发 | `(e:MousEvent) => void` |
| onOpen   | 打开时触发         | `() => void`            |
| onClose  | 打开时触发         | `() => void`            |
| onOpened | 打开动画结束时触发 | `() => void`            |
| onClosed | 关闭动画结束时触发 | `() => void`            |


### Slot
| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | 消息提示内容区域插槽 |



### Exposes

| 名称       | 说明             | 类型说明                      |
| ---------- | ---------------- | ----------------------------- |
| updateShow | 更新消息提示显示 | `(show:boolean = true)=>void` |



## 样式变量

| 名称                           | 默认值                | 说明 |
| ------------------------------ | --------------------- | ---- |
| --pk-notify-padding-vertical   | var(--pk-padding-m)   |      |
| --pk-notify-padding-horizontal | var(--pk-padding-l)   |      |
| --pk-notify-text-color         | #ffffff               |      |
| --pk-notify-font-size          | var(--pk-font-size-m) |      |