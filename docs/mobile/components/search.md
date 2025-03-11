---
title: 搜索
lang: zh-cn
aside: false
---

# Search 搜索

## 基本使用
```vue
<pk-search></pk-search>
```

## 代码示例
### 基础用法
创建一个搜索组件。
::: code-tabs#default
@tab template

```vue [template]
    <pk-search />
```

@tab script
```js [script]
import { PkSearch } from '@pumpkin-ui/mobile'
```
:::

### 事件监听
监听搜索事件。
::: code-tabs#onSearch
@tab template

```vue [template]
    <pk-search @on-search="onSearch" />
```

@tab script
```js [script]
import { PkSearch,Toast } from '@pumpkin-ui/mobile'

const onSearch = (value) => {
    Toast.show(`搜索内容：${value}`);
}
```
:::


### 隐藏搜索按钮
可使用`show-search-button` 属性来隐藏搜索按钮。
::: code-tabs#show-search-button
@tab template

```vue [template]
    <pk-search :show-search-button="false" />
```

@tab script
```js [script]
import { PkSearch } from '@pumpkin-ui/mobile'
```
:::


### 禁用
可使用`disabled`属性来禁用搜索框。（禁用只会禁用输入框输入，各个事件仍可以正常触发）
::: code-tabs#disabled
@tab template

```vue [template]
    <pk-search disabled :show-search-button="false" />
```

@tab script
```js [script]
import { PkSearch } from '@pumpkin-ui/mobile'
```
:::


### 输入框对齐方式
可使用`input-text-align`属性来设置输入框对齐方式，可选值有`left`、`center`、`right`。
::: code-tabs#input-text-align
@tab template

```vue [template]
    <pk-search input-text-align="center" />
```

@tab script
```js [script]
import { PkSearch } from '@pumpkin-ui/mobile'
```
:::

## API

### Props
| 属性名             | 说明                           | 类型                          | 默认值         | 可选值                        |
| ------------------ | ------------------------------ | ----------------------------- | -------------- | ----------------------------- |
| v-model            | 搜索输入框内容,双向绑定        | `string`                      |                |                               |
| placeholder        | 输入框的占位符文本             | `string`                      | `请输入关键词` |                               |
| name               | 输入框的name属性               | `string`                      |                |                               |
| readonly           | 只读                           | `boolean`                     | `false`        |                               |
| disabled           | 禁用                           | `boolean`                     | `false`        |                               |
| input-text-align   | 输入框文字对齐方式             | `'left'｜ 'center'｜ 'right'` |                | `'left'｜ 'center'｜ 'right'` |
| clearable          | 可清空按钮                     | `boolean`                     | `true`         |                               |
| clear-trigger      | 清空按钮显示的时机             | `'always'｜'auto'`            | `'always'`     | `'always'｜'auto'`            |
| maxlength          | 输入框原生的`maxlength`属性    | `number`                      |                |                               |
| minlength          | 输入框原生的`minlength`属性    | `number`                      |                |                               |
| autocomplete       | 输入框原生的`autocomplete`属性 | `string`                      |                |                               |
| show-search-button | 显示搜索按钮                   | `boolean`                     | `true`         |                               |
| search-button-text | 搜索按钮的文字                 | `string`                      | `搜索`         |                               |




### Events

| 事件名                | 说明                                     | 回调参数               |
| --------------------- | ---------------------------------------- | ---------------------- |
| click                 | 搜索框被点击时触发(`disabled`不为`true`) | `(e:MouseEvent)=>void` |
| onSearch              | 触发搜索框提交事件时回调                 | `(value:string)=>void` |
| onClear               | 搜索框输入项点击清空时触发               | `()=>void`             |
| onChange              | 搜索框输入项用户输入值变化时触发         | `(value:string)=>void` |
| onFocus               | 搜索框输入项聚焦时触发                   | `(e:FocusEvent)=>void` |
| onBlur                | 搜索框输入项失焦时触发                   | `(e:FocusEvent)=>void` |
| onClickLeftSearchIcon | 点击搜索框左侧搜索图标时触发             | `(e:MouseEvent)=>void` |



### Slots
| 插槽名     | 说明                           | 作用域 |
| ---------- | ------------------------------ | ------ |
| left       | 搜索框外部左侧                 |        |
| left-icon  | 搜索框内部左侧（搜索图标左侧） |        |
| right-icon | 搜索框内部右侧                 |        |
| right      | 搜索框外部右侧                 |        |

#### 代码示例
::: code-tabs#slot
@tab template

```vue [template]
    <pk-search>
        <template #left-icon>icon</template>
        <template #left>left</template>
        <template #right-icon>icon</template>
        <template #right>right</template>
    </pk-search>
```

@tab script
```js [script]
import { PkSearch } from '@pumpkin-ui/mobile'
```
:::


### Exposes

| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |




## 样式变量

| 名称                             | 默认值                         | 说明 |
| -------------------------------- | ------------------------------ | ---- |
| --pk-search-padding              | 4px 16px                       |      |
| --pk-search-background           | var(--pk-bg-color)             |      |
| --pk-search-content-background   | var(--pk-bg-color-light)       |      |
| --pk-search-padding-content      | 8px 4px                        |      |
| --pk-search-padding-icon         | 4px                            |      |
| --pk-search-border-radius        | var(--pk-radius-m)             |      |
| --pk-search-text-color-secondary | var(--pk-text-color-secondary) |      |