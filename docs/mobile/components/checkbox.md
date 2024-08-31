---
title: 复选框
lang: zh-cn
aside: false
---

# Checkbox 复选框

## 基本使用
```vue
<pk-checkbox-group>
    <pk-checkbox>复选框1</pk-checkbox>
    <pk-checkbox>复选框2</pk-checkbox>
</pk-checkbox-group>
```

## 代码示例
### 基础用法
创建复选框组。

::: code-tabs#default
@tab template

```vue [template]
    <pk-checkbox-group>
        <pk-checkbox>复选框1</pk-checkbox>
        <pk-checkbox>复选框2</pk-checkbox>
    </pk-checkbox-group>
```

@tab script
```js [script]
import { PkCheckbox, PkCheckboxGroup, PkDivider } from '@pk-ui/mobile'

```

@tab style
```css [style]

```
:::



### 方形
可通过设置`square`属性为`true`设置为方形。通过设置`CheckboxGroup`的`square`属性可改变子组件中`Checkbox`的形状。如果子组件单独设置了`square`属性或者`group`为`false`则以子组件的为准。

::: code-tabs#square
@tab template

```vue [template]
    <pk-checkbox-group square>
        <pk-checkbox>方形</pk-checkbox>
        <pk-checkbox>方形</pk-checkbox>
        <pk-checkbox>方形</pk-checkbox>
        <pk-checkbox :square="false">默认</pk-checkbox>
    </pk-checkbox-group>
```

@tab script
```js [script]
import { PkCheckbox, PkCheckboxGroup, PkDivider } from '@pk-ui/mobile'

```

@tab style
```css [style]

```
:::



### 禁用
可通过设置`disabled`属性为`true`设置为禁用。通过设置`CheckboxGroup`的`disabled`属性可设置子组件中`Checkbox`的禁用状态。如果子组件单独设置了`disabled`属性或者设置`group`为`false`则以子组件的为准。

::: code-tabs#disabled
@tab template

```vue [template]
    <pk-checkbox-group disabled>
        <pk-checkbox>方形</pk-checkbox>
        <pk-checkbox>方形</pk-checkbox>
        <pk-checkbox>方形</pk-checkbox>
        <pk-checkbox :disabled="false">默认</pk-checkbox>
    </pk-checkbox-group>
```

@tab script
```js [script]
import { PkCheckbox, PkCheckboxGroup, PkDivider } from '@pk-ui/mobile'

```

@tab style
```css [style]

```
:::


### 大小
可通过设置`size`属性设置为大小。通过设置`CheckboxGroup`的`size`属性可设置子组件的中`size`。如果子组件单独设置了`size`属性或者设置`group`为`false`则以子组件的为准。

::: code-tabs#size
@tab template

```vue [template]
    <pk-checkbox-group :size="30">
        <pk-checkbox>大小30</pk-checkbox>
        <pk-checkbox>大小30</pk-checkbox>
        <pk-checkbox>大小30</pk-checkbox>
        <pk-checkbox :size="20">大小20</pk-checkbox>
    </pk-checkbox-group>
```

@tab script
```js [script]
import { PkCheckbox, PkCheckboxGroup, PkDivider } from '@pk-ui/mobile'

```

@tab style
```css [style]

```
:::


### 最多选中
可通过设置`CheckboxGroup`的`max`属性设置最多选中的数量。

::: code-tabs#max
@tab template

```vue [template]
    <pk-checkbox-group :max="2">
        <pk-checkbox>选项一</pk-checkbox>
        <pk-checkbox>选项二</pk-checkbox>
        <pk-checkbox>选项三</pk-checkbox>
        <pk-checkbox>选项四</pk-checkbox>
    </pk-checkbox-group>
```

@tab script
```js [script]
import { PkCheckbox, PkCheckboxGroup, PkDivider } from '@pk-ui/mobile'

```

@tab style
```css [style]

```
:::



### 纵向排列
可通过设置`CheckboxGroup`的`vertical`为`true`实现。

::: code-tabs#vertical
@tab template

```vue [template]
    <pk-checkbox-group vertical>
        <pk-checkbox>选项一</pk-checkbox>
        <pk-checkbox>选项二</pk-checkbox>
        <pk-checkbox>选项三</pk-checkbox>
        <pk-checkbox>选项四</pk-checkbox>
    </pk-checkbox-group>
```

@tab script
```js [script]
import { PkCheckbox, PkCheckboxGroup, PkDivider } from '@pk-ui/mobile'

```

@tab style
```css [style]

```
:::

### 默认值
可通过设置`Checkbox`的`v-model`默认值为`true`实现。

::: code-tabs#vertical
@tab template

```vue [template]
    <pk-checkbox-group>
        <pk-checkbox v-model="firstChecked">选项一</pk-checkbox>
        <pk-checkbox>选项二</pk-checkbox>
        <pk-checkbox>选项三</pk-checkbox>
        <pk-checkbox>选项四</pk-checkbox>
    </pk-checkbox-group>
```

@tab script
```js [script]
import { PkCheckbox, PkCheckboxGroup, PkDivider } from '@pk-ui/mobile'
import { ref } from 'vue';

const firstChecked = ref(true)

```

@tab style
```css [style]

```
:::


### 事件

::: code-tabs#vertical
@tab template

```vue [template]
    <pk-checkbox-group @on-change="onChange" @on-limit="onLimit" :max="2">
        <pk-checkbox label="选项一" :value="1" v-model="firstChecked">选项一</pk-checkbox>
        <pk-checkbox label="选项二" :value="2">选项二</pk-checkbox>
        <pk-checkbox label="选项三" :value="3">选项三</pk-checkbox>
        <pk-checkbox label="选项四" :value="4">选项四</pk-checkbox>
    </pk-checkbox-group>
```

@tab script
```js [script]
import { PkCheckbox, PkCheckboxGroup, PkDivider } from '@pk-ui/mobile'
import { ref } from 'vue'

const firstChecked = ref(true)

const onChange = (value) => {
    Toast.showToast(JSON.stringify(value))
}
const onLimit = (value) => {
    Toast.showToast('最多只能选择两个')
}

```

@tab style
```css [style]

```
:::



## API

### Props

#### CheckboxGroup Props
| 属性名   | 说明                  | 类型      | 默认值  | 可选值 |
| -------- | --------------------- | --------- | ------- | ------ |
| size     | 复选框的大小,单位为px | `number`  |         |        |
| square   | 方形复选框            | `boolean` | `false` |        |
| disabled | 禁用状态              | `boolean` | `false` |        |
| max      | 最多选择的项数        | `number`  |         |        |
| vertical | 纵向排列              | `boolean` | `false` |        |


#### Checkbox Props
| 属性名   | 说明                           | 类型                        | 默认值  | 可选值 |
| -------- | ------------------------------ | --------------------------- | ------- | ------ |
| v-model  | 复选框选中状态                 | `boolean`                   | `false` |        |
| size     | 复选框大小，单位为px           | `number`                    |         |        |
| label    | 复选框的文字                   | `string`                    |         |        |
| square   | 方形复选框                     | `boolean`                   | `false` |        |
| value    | 复选框的值(类似于input的value) | `string｜ boolean ｜number` |         |        |
| disabled | 禁用状态                       | `boolean`                   | `false` |        |
| group    | 是否加入父级`CheckGroup`       | `boolean`                   | `true`  |        |


### Events

#### CheckboxGroup Events
| 事件名   | 说明                                      | 回调参数                            |
| -------- | ----------------------------------------- | ----------------------------------- |
| onChange | 值变化时触发                              | `(value: ICheckboxValue[]) => void` |
| onLimit  | 达到`max`时，仍然选择未选中的复选框时触发 | `(value: ICheckboxValue[]) => void` |

#### Checkbox Events
| 事件名   | 说明             | 回调参数                                          |
| -------- | ---------------- | ------------------------------------------------- |
| onChange | 值变化时触发     | `(checked: boolean, value: ICheckboxValue)=>void` |
| click    | 选项被点击时触发 | `(e: MouseEvent) => void`                         |


##### ICheckboxValue
| 属性名  | 说明         | 类型                      |
| ------- | ------------ | ------------------------- |
| checked | 是否选中     | `boolean`                 |
| value   | 复选框的值   | `boolean｜string｜number` |
| label   | 复选框的文字 | `string`                  |



###  Slot

#### CheckboxGroup Slot
| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |

#### Checkbox Slot
| 插槽名 | 说明           | 作用域          |
| ------ | -------------- | --------------- |
| icon   | 复选框图标插槽 | checked:boolean |
| label  | 复选框文字插槽 |                 |



### Exposes

#### CheckboxGroup Exposes
| 名称      | 说明                                                                                 | 类型说明                                               |
| --------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| getValues | 获取所有子项的值                                                                     | `()=>ICheckboxValue[]`                                 |
| toggleAll | 切换复选框的选中状态，不传options则反选，传`boolean`则将所有子项切换为对应的选中状态 | `(options?: ICheckboxGroupToggleAll ｜ boolean)=>void` |

##### ICheckboxGroupToggleAll
| 属性名       | 说明                 | 类型      | 必选 |
| ------------ | -------------------- | --------- | ---- |
| skipDisabled | 跳过禁用的值         | `boolean` | 否   |
| checked      | 是否选中，不传则反选 | `boolean` | 否   |


## CheckboxGroup 样式变量
| 名称 | 默认值 | 说明 |
| ---- | ------ | ---- |

## Checkbox 样式变量
| 名称                            | 默认值                     | 说明 |
| ------------------------------- | -------------------------- | ---- |
| --pk-checkbox-size              | 20px                       |      |
| --pk-checkbox-border-color      | var(--pk-border-color)     |      |
| --pk-checkbox-active-background | var(--pk-primary-color)    |      |
| --pk-checkbox-active-color      | #ffffff                    |      |
| --pk-checkbox-label-color       | var(--pk-text-color)       |      |
| --pk-checkbox-label-font-size   | var(--pk-font-size-s)      |      |
| --pk-checkbox-margin            | var(--pk-margin-m)         |      |
| --pk-checkbox-icon-weight       | 600                        |      |
| --pk-checkbox-disabled-opacity  | var(--pk-disabled-opacity) |      |