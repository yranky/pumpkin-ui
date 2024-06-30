---
title: 按钮组件
lang: zh-cn
---

# button 按钮

## 基本使用
```
<pk-button>按钮</pk-button>
```


## API

### props

| 属性名 | 说明     | 类型                                               | 默认值    | 可选值                                             |
| ------ | -------- | -------------------------------------------------- | --------- | -------------------------------------------------- |
| type   | 按钮类型 | `'primary'｜ 'hazy'｜ 'outline'｜ 'ghost'｜'link'` | `primary` | `'primary'｜ 'hazy'｜ 'outline'｜ 'ghost'｜'link'` |



### Events

| 事件名 | 说明                              | 回调参数                              |
| ------ | --------------------------------- | ------------------------------------- |
| change | triggers when fixed state changed | ^[Function]`(fixed: boolean) => void` |



### Slots

| 插槽名  | 说明                      |
| ------- | ------------------------- |
| default | customize default content |



### Exposes

| 名称   | 说明                        | 类型说明                |
| ------ | --------------------------- | ----------------------- |
| update | update affix state manually | ^[Function]`() => void` |



## 样式变量

| 名称   | 默认字                      | 说明                    |
| ------ | --------------------------- | ----------------------- |
| update | update affix state manually | ^[Function]`() => void` |