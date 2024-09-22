---
title: 对话框
lang: zh-cn
aside: false
---

# Dialog 对话框



## API

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
| show-confirm-text        | 确认按钮文本         | `string`                    | `确认`  |        |
| show-confirm-color       | 确认按钮文本颜色     | `string`                    |         |        |
| show-cancel-button       | 是否显示取消按钮     | `boolean`                   | `true`  |        |
| show-cancel-text         | 取消按钮文本         | `string`                    | `取消`  |        |
| show-cancel-color        | 取消文本颜色         | `string`                    |         |        |
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