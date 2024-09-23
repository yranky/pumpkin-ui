---
title: 单选框
lang: zh-cn
aside: false
---

# Radio 单选框

## 基本使用
```vue
<pk-radio-group>
    <pk-radio>复选框1</pk-radio>
    <pk-radio>复选框2</pk-radio>
</pk-radio-group>
```


## 代码示例
### 基础用法
创建单选框组。

::: code-tabs#default
@tab template

```vue [template]
    <pk-radio-group>
        <pk-radio>单选框1</pk-radio>
        <pk-radio>单选框2</pk-radio>
    </pk-radio-group>
```

@tab script
```js [script]
import { PkRadio, PkRadioGroup, PkIcon, PkDivider } from '@pk-ui/mobile'

```

@tab style
```css [style]

```
:::

### 方形
可通过设置`square`属性为`true`设置为方形。通过设置`RadioGroup`的`square`属性可改变子组件中`Radio`的形状。如果子组件单独设置了`square`属性或者`group`为`false`则以子组件的为准。

::: code-tabs#square
@tab template

```vue [template]
    <pk-radio-group square>
        <pk-radio>方形</pk-radio>
        <pk-radio>方形</pk-radio>
        <pk-radio>方形</pk-radio>
        <pk-radio :square="false">默认</pk-radio>
    </pk-radio-group>
```

@tab script
```js [script]
import { PkRadio, PkRadioGroup, PkIcon, PkDivider } from '@pk-ui/mobile'

```

@tab style
```css [style]

```
:::





### 禁用
可通过设置`disabled`属性为`true`设置为禁用。通过设置`RadioGroup`的`disabled`属性可设置子组件中`Radio`的禁用状态。如果子组件单独设置了`disabled`属性或者设置`group`为`false`则以子组件的为准。

::: code-tabs#disabled
@tab template

```vue [template]
    <pk-radio-group disabled>
        <pk-radio>禁用</pk-radio>
        <pk-radio>禁用</pk-radio>
        <pk-radio>禁用</pk-radio>
        <pk-radio :disabled="false">非禁用</pk-radio>
    </pk-radio-group>
```

@tab script
```js [script]
import { PkRadio, PkRadioGroup, PkIcon, PkDivider } from '@pk-ui/mobile'

```

@tab style
```css [style]

```
:::



### 大小
可通过设置`size`属性设置为大小。通过设置`RadioGroup`的`size`属性可设置子组件的中`size`。如果子组件单独设置了`size`属性或者设置`group`为`false`则以子组件的为准。

::: code-tabs#size
@tab template

```vue [template]
    <pk-radio-group :size="30">
        <pk-radio>大小30</pk-radio>
        <pk-radio>大小30</pk-radio>
        <pk-radio>大小30</pk-radio>
        <pk-radio :size="20">大小20</pk-radio>
    </pk-radio-group>
```

@tab script
```js [script]
import { PkRadio, PkRadioGroup, PkIcon, PkDivider } from '@pk-ui/mobile'

```

@tab style
```css [style]

```
:::



### 纵向排列
可通过设置`RadioGroup`的`vertical`为`true`实现。

::: code-tabs#vertical
@tab template

```vue [template]
    <pk-radio-group vertical>
        <pk-radio>选项一</pk-radio>
        <pk-radio>选项二</pk-radio>
        <pk-radio>选项三</pk-radio>
        <pk-radio>选项四</pk-radio>
    </pk-radio-group>
```

@tab script
```js [script]
import { PkRadio, PkRadioGroup, PkIcon, PkDivider } from '@pk-ui/mobile'

```

@tab style
```css [style]

```
:::



### 默认值
可通过设置`Radio`的`modelValue`为`true`实现。或将`RadioGroup`的`modelValue`设置为对应单选框的`value`。

::: code-tabs#vmodel
@tab template

```vue [template]
    <pk-radio-group>
        <pk-radio :modelValue="true">选项一</pk-radio>
        <pk-radio>选项二</pk-radio>
    </pk-radio-group>
    <pk-radio-group :modelValue="2">
        <pk-radio :value="1">选项一</pk-radio>
        <pk-radio :value="2">选项二</pk-radio>
    </pk-radio-group>
```

@tab script
```js [script]
import { PkRadio, PkRadioGroup, PkIcon, PkDivider } from '@pk-ui/mobile'

```

@tab style
```css [style]

```
:::

### 事件
::: code-tabs#events
@tab template

```vue [template]
    <pk-radio-group @on-change="onChange">
        <pk-radio :value="1">选项一</pk-radio>
        <pk-radio :value="2">选项二</pk-radio>
    </pk-radio-group>
```

@tab script
```js [script]
import { PkRadio, PkRadioGroup, PkIcon, PkDivider, Toast } from '@pk-ui/mobile'
const onChange = (value) => {
    Toast.show(JSON.stringify(value))
}
```

@tab style
```css [style]

```
:::



## API

### Props

#### RadioGroup Props
| 属性名   | 说明                   | 类型                      | 默认值  | 可选值 |
| -------- | ---------------------- | ------------------------- | ------- | ------ |
| v-model  | 单选框组的值，双向绑定 | `string｜number｜boolean` |         |        |
| size     | 单选框的大小,单位为px  | `number`                  |         |        |
| square   | 方形单选框             | `boolean`                 | `false` |        |
| disabled | 禁用状态               | `boolean`                 | `false` |        |
| vertical | 纵向排列               | `boolean`                 | `false` |        |


#### Radio Props
| 属性名   | 说明                           | 类型                        | 默认值  | 可选值 |
| -------- | ------------------------------ | --------------------------- | ------- | ------ |
| v-model  | 单选框选中状态，双向绑定       | `boolean`                   | `false` |        |
| size     | 单选框大小，单位为px           | `number`                    |         |        |
| label    | 单选框的文字                   | `string`                    |         |        |
| square   | 方形单选框                     | `boolean`                   | `false` |        |
| value    | 单选框的值(类似于input的value) | `string｜ boolean ｜number` |         |        |
| disabled | 禁用状态                       | `boolean`                   | `false` |        |
| group    | 是否加入父级`RadioGroup`       | `boolean`                   | `true`  |        |




### Events

#### RadioGroup Events
| 事件名   | 说明         | 回调参数                                     |
| -------- | ------------ | -------------------------------------------- |
| onChange | 值变化时触发 | `(value: string｜ boolean ｜number) => void` |

#### Radio Events
| 事件名 | 说明               | 回调参数                  |
| ------ | ------------------ | ------------------------- |
| click  | 单选框被点击时触发 | `(e: MouseEvent) => void` |




###  Slot

#### RadioGroup Slot
| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |

#### Radio Slot
| 插槽名 | 说明           | 作用域          |
| ------ | -------------- | --------------- |
| icon   | 单选框图标插槽 | checked:boolean |
| label  | 单选框文字插槽 |                 |


##### 自定义图标

::: code-tabs#icon
@tab template
```vue [template]
    <pk-radio-group>
        <pk-radio-group>
            <pk-radio label="选项" :value="1">
                <template #icon>
                    <pk-icon name="alert-outlined" />
                </template>
            </pk-radio>
        </pk-radio-group>
    </pk-radio-group>
```

@tab script
```js [script]
import { PkRadio, PkRadioGroup, PkIcon, PkDivider, Toast } from '@pk-ui/mobile'
```

@tab style
```css [style]

```
:::


### Exposes

#### Radio Exposes
| 名称   | 说明                     | 类型说明               |
| ------ | ------------------------ | ---------------------- |
| toggle | 切换选中状态，不传则反选 | `(val?:boolean)=>void` |



## RadioGroup 样式变量
| 名称 | 默认值 | 说明 |
| ---- | ------ | ---- |

## Radio 样式变量
| 名称                         | 默认值                     | 说明 |
| ---------------------------- | -------------------------- | ---- |
| --pk-radio-size              | 20px                       |      |
| --pk-radio-border-color      | var(--pk-border-color)     |      |
| --pk-radio-active-background | var(--pk-primary-color)    |      |
| --pk-radio-active-color      | #ffffff                    |      |
| --pk-radio-label-color       | var(--pk-text-color)       |      |
| --pk-radio-label-font-size   | var(--pk-font-size-s)      |      |
| --pk-radio-margin            | var(--pk-margin-m)         |      |
| --pk-radio-icon-weight       | 600                        |      |
| --pk-radio-disabled-opacity  | var(--pk-disabled-opacity) |      |