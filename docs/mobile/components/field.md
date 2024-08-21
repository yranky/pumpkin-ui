---
title: 输入项
lang: zh-cn
aside: false
---

# Field 输入项

## 基本使用

```vue
<pk-field></pk-field>
```

## 代码示例
### 基础用法
创建一个输入项。

::: code-tabs#default
@tab template

```vue [template]
    <pk-field v-model="textValue" label="测试" placeholder="请输入内容" />
```

@tab script
```js [script]
import { PkField } from "@pk-ui/mobile"
import { ref } from "vue"

const textValue = ref('')

```

@tab style
```css [style]

```
:::

### 类型
输入项的类型。Field输入项的类型来自于HTML5的input标签的type属性。可选值为`text`、`color`、`date`、`datetime-local`、`email`、`hidden`、`month`、`number`、`password`、`tel`、`time`、`url`、`week`。默认为`text`。

::: code-tabs#type
@tab template

```vue [template]
    <pk-field v-model="numberValue" label="数字值" placeholder="请输入数字" />
    <pk-field v-model="textValue" label="颜色值" placeholder="请选择" type="color" />
```

@tab script
```js [script]
import { PkField } from "@pk-ui/mobile"
import { ref } from "vue"

const textValue = ref('')
const numberValue = ref('')

```

@tab style
```css [style]

```
:::


### 显示*号
可通过`required`属性设置显示*号。
:::warning 提示
该属性只在样式上起到作用，不会对输入项进行校验。
:::

::: code-tabs#required
@tab template

```vue [template]
    <pk-field v-model="textValue" label="显示*号" placeholder="请输入" required></pk-field>
```

@tab script
```js [script]
import { PkField } from "@pk-ui/mobile"
import { ref } from "vue"

const textValue = ref('')

```

@tab style
```css [style]

```
:::

### 只读禁用
可通过`readonly`属性设置输入项为只读。通过`disabled`属性设置输入项为禁用。

::: code-tabs#readonly
@tab template

```vue [template]
    <pk-field v-model="textValue" label="只读" placeholder="只读" readonly></pk-field>
    <pk-field v-model="textValue" label="禁用" placeholder="禁用" disabled></pk-field>
```

@tab script
```js [script]
import { PkField } from "@pk-ui/mobile"
import { ref } from "vue"

const textValue = ref('')

```

@tab style
```css [style]

```
:::


### 点击效果
可通过`is-link`属性设置输入项展示右箭头并开启点击效果。

::: code-tabs#is-link
@tab template

```vue [template]
    <pk-field v-model="textValue" label="点击效果" placeholder="点击效果" readonly is-link></pk-field>
```

@tab script
```js [script]
import { PkField } from "@pk-ui/mobile"
import { ref } from "vue"

const textValue = ref('')

```

@tab style
```css [style]

```
:::

### 垂直模式
可通过`vertical`属性设置输入项为垂直展示模式。

::: code-tabs#vertical
@tab template

```vue [template]
    <pk-field vertical v-model="numberValue" label="数字类型" placeholder="请输入数字" />
    <pk-field vertical v-model="textValue" label="颜色值" placeholder="请选择" type="color" />
    <pk-field vertical v-model="textValue" label="点击效果" placeholder="点击效果" readonly is-link></pk-field>
```

@tab script
```js [script]
import { PkField } from "@pk-ui/mobile"
import { ref } from "vue"

const textValue = ref('')
const numberValue = ref(123)

```

@tab style
```css [style]

```
:::


### 清空按钮的显示
可通过`clearable`属性设置输入项清空按钮的显示。通过`clear-trigger`控制清空按钮显示的时机，有`always`和`auto`两个可选值。

::: code-tabs#clearable
@tab template

```vue [template]
    <pk-field v-model="textValue" label="不显示清空按钮" placeholder="不显示清空按钮" :clearable="false"></pk-field>
    <pk-field v-model="textValue" label="一直显示清空按钮" placeholder="一直显示清空按钮" clear-trigger="always"></pk-field>
    <pk-field v-model="textValue" label="自动显示清空按钮" placeholder="自动显示清空按钮" clear-trigger="auto"></pk-field>
```

@tab script
```js [script]
import { PkField } from "@pk-ui/mobile"
import { ref } from "vue"

const textValue = ref('')

```

@tab style
```css [style]

```
:::

### 文本框的高度
在`type`为`text`时，可通过`rows`属性设置文本框显示的行数。通过`autosize`属性设置文本框根据内容自动展开。如果既设置`rows`，又设置`autosize`，则`rows`表示最小的行数的高度。

::: code-tabs#autosize
@tab template

```vue [template]
    <pk-field v-model="textValue" label="行数为3" placeholder="行数为3" :rows="3"></pk-field>
    <pk-field v-model="textValue" label="行数为3且autosize" placeholder="行数为3且autosize" autosize
        :rows="3"></pk-field>
    <pk-field v-model="textValue" label="仅autosize" placeholder="仅autosize" autosize></pk-field>
```

@tab script
```js [script]
import { PkField } from "@pk-ui/mobile"
import { ref } from "vue"

const textValue = ref('')

```

@tab style
```css [style]

```
:::


## API

### Props

| 属性名             | 说明                                                                           | 类型                                                                                                                                   | 默认值     | 可选值                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| v-model            | 输入项的值，双向绑定                                                           | `string`                                                                                                                               |            |                                                                                                                                        |
| type               | 输入项的类型                                                                   | `'text'｜'color'｜ 'date'｜ 'datetime-local'｜ 'email'｜ 'hidden'｜ 'month'｜ 'number'｜ 'password'｜ 'tel'｜ 'time'｜ 'url'｜ 'week'` | `text`     | `'text'｜'color'｜ 'date'｜ 'datetime-local'｜ 'email'｜ 'hidden'｜ 'month'｜ 'number'｜ 'password'｜ 'tel'｜ 'time'｜ 'url'｜ 'week'` |
| label              | 输入项的标签，label标签内的内容                                                | `string`                                                                                                                               |            |                                                                                                                                        |
| required           | 显示必填的*号                                                                  | `boolean`                                                                                                                              | `false`    |                                                                                                                                        |
| border             | 显示下边框，若在form内最后一项默认不显示下边框（即使为`true`）                 | `boolean`                                                                                                                              | `true`     |                                                                                                                                        |
| placeholder        | 输入项的占位符文本                                                             | `string`                                                                                                                               |            |                                                                                                                                        |
| name               | 输入项的name属性                                                               | `string`                                                                                                                               |            |                                                                                                                                        |
| rules              | 输入项的校验规则                                                               | `FieldRule[]`                                                                                                                          |            |                                                                                                                                        |
| readonly           | 只读                                                                           | `boolean`                                                                                                                              | `false`    |                                                                                                                                        |
| disabled           | 禁用                                                                           | `boolean`                                                                                                                              | `false`    |                                                                                                                                        |
| validate-auto-trim | 验证之前，针对`string`类型的数据自动trim后校验                                 | `boolean`                                                                                                                              | `true`     |                                                                                                                                        |
| is-link            | 显示右箭头并开启点击效果                                                       | `boolean`                                                                                                                              | `false`    |                                                                                                                                        |
| input-align        | 输入框在父级的对齐方式                                                         | `'left'｜ 'center'｜ 'right'`                                                                                                          |            | `'left'｜ 'center'｜ 'right'`                                                                                                          |
| label-align        | 标签文字在父级的对齐方式                                                       | `'left'｜ 'center'｜ 'right'`                                                                                                          |            | `'left'｜ 'center'｜ 'right'`                                                                                                          |
| vertical           | 垂直模式                                                                       | `boolean`                                                                                                                              | `false`    |                                                                                                                                        |
| clearable          | 可清空按钮                                                                     | `boolean`                                                                                                                              | `true`     |                                                                                                                                        |
| clear-trigger      | 清空按钮显示的时机                                                             | `'always'｜'auto'`                                                                                                                     | `'always'` | `'always'｜'auto'`                                                                                                                     |
| rows               | 显示的行数(仅`text`模式有效，若`autosize`为`true`，则该属性表示最小的显示行数) | `number`                                                                                                                               | `1`        |                                                                                                                                        |
| autosize           | 根据文本内容自动展开(仅`text`模式有效)                                         | `number`                                                                                                                               | `1`        |                                                                                                                                        |
| max                | 原生的`max`属性                                                                | `number`                                                                                                                               |            |                                                                                                                                        |
| min                | 原生的`min`属性                                                                | `number`                                                                                                                               |            |                                                                                                                                        |
| maxlength          | 原生的`maxlength`属性                                                          | `number`                                                                                                                               |            |                                                                                                                                        |
| minlength          | 原生的`minlength`属性                                                          | `number`                                                                                                                               |            |                                                                                                                                        |
|                    |
| autocomplete       | 原生的`autocomplete`属性                                                       | `number`                                                                                                                               |            |
|                    |


#### FieldRule
| 属性名    | 说明                  | 类型                                                    | 默认值 |
| --------- | --------------------- | ------------------------------------------------------- | ------ |
| pattern   | 正则表达式            | `RegExp`                                                |        |
| trigger   | 触发时机              | `FieldRuleTrigger｜FieldRuleTrigger[]`                  |        |
| message   | 验证不通过时的提示    | `string`                                                |        |
| required  | 是否必填              | `boolean`                                               |        |
| validator | 自定义验证方法        | `(rule:FieldRule,value:any)=>Promise<boolean>｜boolean` |        |
| formatter | 验证前的formatter方法 | `(value:any)=>Promise<any>｜any`                        |        |

::: warning 提示
自定义验证方法支持显示自定义错误信息，在验证不通过时，抛出异常即可。
:::

#### FieldRuleTrigger
| 值       | 说明   |
| -------- | ------ |
| onBlur   | 失焦   |
| onChange | 值变化 |
| onSubmit | 提交前 |

:::warning 提示
Form组件`onSumit`前只会检验trigger为`onSubmit`的规则。Form组件的`validate`方法会强制检验所有规则。
:::



### Events

| 事件名   | 说明                                         | 回调参数               |
| -------- | -------------------------------------------- | ---------------------- |
| click    | 输入项组件被点击时触发(`disabled`不为`true`) | `()=>void`             |
| onFocus  | 输入框聚焦时触发                             | `(e:FocusEvent)=>void` |
| onBlur   | 输入框失焦时触发                             | `(e:FocusEvent)=>void` |
| onClear  | 点击清空时触发                               | `()=>void`             |
| onChange | 输入框用户输入值变化时触发                   | `()=>void`             |

### Slots
| 插槽名     | 说明                                                     | 作用域                                        |
| ---------- | -------------------------------------------------------- | --------------------------------------------- |
| label      | 标签区域插槽                                             |                                               |
| input      | 输入框区域插槽                                           |                                               |
| button     | 输入项右侧按钮区域插槽                                   |                                               |
| right-icon | 输入项右侧图标区域插槽（使用此插槽将默认不显示清除按钮） | showClear:boolean,当前是否应当显示清除图标    |
| tip        | 输入项下方的提示文本区域插槽                             | tip:string,当前验证不通过时的文本，通过时为空 |



### Exposes

| 名称  | 说明             | 类型说明   |
| ----- | ---------------- | ---------- |
| focus | 聚焦输入框       | `()=>void` |
| blur  | 使输入框失去焦点 | `()=>void` |


## 样式变量

| 名称                            | 默认值                         | 说明 |
| ------------------------------- | ------------------------------ | ---- |
| --pk-field-margin               | var(--pk-margin-m)             |      |
| --pk-field-padding              | var(--pk-padding-m)            |      |
| --pk-filed-font-size            | var(--pk-font-size-m)          |      |
| --pk-filed-text-color-secondary | var(--pk-text-color-secondary) |      |
| --pk-filed-text-color           | var(--pk-text-color)           |      |
| --pk-field-tip-text-color       | var(--pk-error-color)          |      |