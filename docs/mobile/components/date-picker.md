---
title: 日期时间选择器
lang: zh-cn
aside: false
---


# DatePicker 日期时间选择器

## 基本使用
### 命令式调用
::: code-tabs#fun

@tab script
```js [script]


import { Toast, DatePicker } from "@pk-ui/mobile"
const showDefaultDatePicker = () => {
    DatePicker.showDatePicker().then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

```
:::

## 代码示例
### 基础用法
通过showDatePicker方法调用，传入数据，即可展示日期时间选择器。

::: code-tabs#default
@tab template

```vue [template]
<div class="date-picker-container">
    <pk-cell-group>
        <pk-cell is-link @click="showDefaultDatePicker">
            <template #title>基础用法</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, DatePicker } from "@pk-ui/mobile"

const showDefaultDatePicker = () => {
    DatePicker.showDatePicker().then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

```

@tab style
```css [style]
.date-picker-container {
    padding: 10px 0;
}
```
:::

### 默认值
可通过`current`属性设置默认值。

::: code-tabs#current
@tab template

```vue [template]
<div class="date-picker-container">
    <pk-cell-group>
        <pk-cell is-link @click="showDatePickerWithDefaultDate">
            <template #title>默认值(2022/01/01)</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, DatePicker } from "@pk-ui/mobile"

const showDatePickerWithDefaultDate = () => {
    DatePicker.showDatePicker({
        current: new Date(2022, 0, 1)
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}


```

@tab style
```css [style]
.date-picker-container {
    padding: 10px 0;
}
```
:::



### 日期范围
可通过`min`、`max`属性分别设置最小值，最大值。

::: warning 提示
当前暂不支持设置时间选择的最大值和最小值。
:::

::: code-tabs#min-max
@tab template

```vue [template]
<div class="date-picker-container">
    <pk-cell-group>
       <pk-cell is-link @click="showDatePickerWidthMinMax">
          <template #title>设置日期范围(2022/01/01 - 2022/12/31)</template>
       </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, DatePicker } from "@pk-ui/mobile"

const showDatePickerWidthMinMax = () => {
    DatePicker.showDatePicker({
        min: new Date(2022, 0, 1),
        max: new Date(2022, 11, 31)
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}


```

@tab style
```css [style]
.date-picker-container {
    padding: 10px 0;
}
```
:::


### 时间选择
可通过设置`type`属性为`['hour', 'minute', 'second']`展示时间选择。

::: code-tabs#time
@tab template

```vue [template]
<div class="date-picker-container">
    <pk-cell-group>
        <pk-cell is-link @click="showDatePickerTime">
            <template #title>时间选择</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, DatePicker } from "@pk-ui/mobile"

const showDatePickerTime = () => {
    DatePicker.showDatePicker({
        type: ['hour', 'minute', 'second']
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

```

@tab style
```css [style]
.date-picker-container {
    padding: 10px 0;
}
```
:::


### 时间选择默认值
可通过`current`属性设置默认值。

::: code-tabs#current-time
@tab template

```vue [template]
<div class="date-picker-container">
    <pk-cell-group>
        <pk-cell is-link @click="showDatePickerWithDefaultTime">
            <template #title>时间选择默认值(12:00:00)</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, DatePicker } from "@pk-ui/mobile"

const showDatePickerWithDefaultTime = () => {
    DatePicker.showDatePicker({
        type: ['hour', 'minute', 'second'],
        current: new Date(2024, 0, 1, 12, 0, 0)
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

```

@tab style
```css [style]
.date-picker-container {
    padding: 10px 0;
}
```
:::

### 选项过滤
可通过`filter`过滤选项。

::: code-tabs#filter
@tab template

```vue [template]
<div class="date-picker-container">
    <pk-cell-group>
        <pk-cell is-link @click="showItemFilterDatePicker">
            <template #title>选项过滤(不显示7月)</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, DatePicker } from "@pk-ui/mobile"

const showItemFilterDatePicker = () => {
    DatePicker.showDatePicker({
        filter: (type, item) => {
            if (type === 'month') return item.value !== 7

            return true
        }
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

```

@tab style
```css [style]
.date-picker-container {
    padding: 10px 0;
}
```
:::


### 自定义label
可通过`formatter`自定义label。

::: code-tabs#formatter
@tab template

```vue [template]
<div class="date-picker-container">
    <pk-cell-group>
        <pk-cell is-link @click="showItemFormatterDatePicker">
            <template #title>选项label自定义</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, DatePicker } from "@pk-ui/mobile"

const showItemFormatterDatePicker = () => {
    DatePicker.showDatePicker({
        formatter: (type, item) => {
            let unit = ''
            if (type === 'year') unit = '年'
            else if (type === 'month') unit = '月'
            else if (type === 'day') unit = '日'

            return {
                ...item,
                label: item.label + unit
            }
        }
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

```

@tab style
```css [style]
.date-picker-container {
    padding: 10px 0;
}
```
:::


### 禁用点击遮罩层关闭
通过设置`closeOnPressOverlay`为`false`禁用点击遮罩层关闭DatePicker。

::: code-tabs#close-on-press-overlay
@tab template

```vue [template]
<div class="date-picker-container">
    <pk-cell-group>
        <pk-cell is-link @click="showNotCloseOnPressOverlay">
            <template #title>禁用点击overlay关闭</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, DatePicker } from "@pk-ui/mobile"

const showNotCloseOnPressOverlay = () => {
    DatePicker.showDatePicker({
        closeOnPressOverlay: false
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.value))}`)
        else Toast.showToast('取消选择')
    })
}

```

@tab style
```css [style]
.date-picker-container {
    padding: 10px 0;
}
```
:::


## API
### 命令式调用
#### 方法
| 方法                  | 说明       | 类型                                                             |
| --------------------- | ---------- | ---------------------------------------------------------------- |
| Picker.showDatePicker | 显示Picker | `(option: DatePickerOptions)=>Promise<DatePickerCallbackParams>` |

#### PickerOptions
| 属性名                 | 说明                                   | 类型                                                      | 默认值                           |
| ---------------------- | -------------------------------------- | --------------------------------------------------------- | -------------------------------- |
| current                | 日期时间选择器的默认值                 | `Date｜string`                                            | 系统时间。不在范围内，则为第一列 |
| min                    | 日期时间选择器的日期最小值             | `Date｜string`                                            | 前十年                           |
| max                    | 日期时间选择器的日期最大值             | `Date｜string`                                            | 后十年                           |
| type                   | 日期时间选择器展示的列                 | `DatePickerType[]`                                        | `['year','month','day']`         |
| formatter              | 日期时间选择器选项修改器               | `(type:DatePickerSimpleType,item:PickerItem)=>PickerItem` |                                  |
| filter                 | 日期时间选择器选项过滤器               | `(type:DatePickerSimpleType,item:PickerItem)=>boolean`    |                                  |
| backgroundColor        | 选择器的背景颜色                       | `string`                                                  |                                  |
| round                  | 是否圆角                               | `boolean`                                                 | `true`                           |
| closeOnPressOverlay    | 点击遮罩层是否关闭                     | `boolean`                                                 | `true`                           |
| visibleItemCount       | 选择器可视的选项数量                   | `number`                                                  | `5`                              |
| itemHeight             | 选择器单个选项的高度，单位为px         | `number`                                                  | `50`                             |
| overlay                | 是否显示遮罩层                         | `boolean`                                                 | `true`                           |
| overlayBackgroundColor | 遮罩层背景颜色                         | `string`                                                  |                                  |
| fade                   | 弹出层是否以`fade`动画形式打开关闭     | `boolean`                                                 | `false`                          |
| zIndex                 | 层级                                   | `number`                                                  |                                  |
| title                  | 选择器的toolbar标题                    | `string`                                                  |                                  |
| cancelText             | 选择器的toolbar取消文案                | `string`                                                  | `取消`                           |
| confirmText            | 选择器的toolbar确定文案                | `string`                                                  | `确定`                           |
| onChange               | 选择器值变化时触发的回调(用户主动触发) | `(values:PickerItem[])=>void`                             |                                  |
| onCancel               | 选择器取消时触发的回调                 | `()=>void`                                                |                                  |
| onConfirm              | 选择器确认时触发的回调                 | `(values:PickerItem[])=>void`                             |                                  |
| onClose                | 选择器关闭时触发的回调                 | `()=>void`                                                |                                  |
| onClosed               | 选择器关闭动画结束时触发的回调         | `()=>void`                                                |                                  |
| onOpen                 | 选择器打开时触发的回调                 | `()=>void`                                                |                                  |
| onOpened               | 选择器打开动画结束时触发的回调         | `()=>void`                                                |                                  |

#### DatePickerType
| 值     | 说明 |
| ------ | ---- |
| year   | 年   |
| Y      | 年   |
| month  | 月   |
| M      | 月   |
| day    | 日   |
| D      | 日   |
| hour   | 时   |
| H      | 时   |
| minute | 分   |
| m      | 分   |
| second | 秒   |
| s      | 秒   |

#### DatePickerSimpleType
| 值     | 说明 |
| ------ | ---- |
| year   | 年   |
| month  | 月   |
| day    | 日   |
| hour   | 时   |
| minute | 分   |
| second | 秒   |


#### PickerItem
| 属性名   | 说明     | 类型             | 必选 |
| -------- | -------- | ---------------- | ---- |
| label    | 选项文本 | `string｜number` | 是   |
| value    | 选项值   | `string｜number` | 是   |
| children | 子选项   | `PickerItem[]`   |      |


#### DatePickerCallbackParams
| 属性名 | 说明                  | 类型                  | 默认值 |
| ------ | --------------------- | --------------------- | ------ |
| type   | 类型                  | `'confirm'｜'cancel'` |        |
| items  | 选项(`confirm`时才有) | `PickerItem[]`        |        |



### Props
| 属性名                 | 说明                                      | 类型                                                      | 默认值                           | 可选值 |
| ---------------------- | ----------------------------------------- | --------------------------------------------------------- | -------------------------------- | ------ |
| v-model                | 是否显示日期日期选择器组件，双向绑定      | `boolean`                                                 |                                  |        |
| current                | 日期时间选择器的默认值,仅初始化时传入有效 | `Date｜string`                                            | 系统时间。不在范围内，则为第一列 |
| min                    | 日期时间选择器的日期最小值                | `Date｜string`                                            | 前十年                           |
| max                    | 日期时间选择器的日期最大值                | `Date｜string`                                            | 后十年                           |
| type                   | 日期时间选择器展示的列                    | `DatePickerType[]`                                        | `['year','month','day']`         |
| formatter              | 日期时间选择器选项修改器                  | `(type:DatePickerSimpleType,item:PickerItem)=>PickerItem` |                                  |
| filter                 | 日期时间选择器选项过滤器                  | `(type:DatePickerSimpleType,item:PickerItem)=>boolean`    |                                  |
| backgroundColor        | 选择器的背景颜色                          | `string`                                                  |                                  |
| round                  | 是否圆角                                  | `boolean`                                                 | `true`                           |
| closeOnPressOverlay    | 点击遮罩层是否关闭                        | `boolean`                                                 | `true`                           |
| visibleItemCount       | 选择器可视的选项数量                      | `number`                                                  | `5`                              |
| itemHeight             | 选择器单个选项的高度，单位为px            | `number`                                                  | `50`                             |
| overlay                | 是否显示遮罩层                            | `boolean`                                                 | `true`                           |
| overlayBackgroundColor | 遮罩层背景颜色                            | `string`                                                  |                                  |
| fade                   | 弹出层是否以`fade`动画形式打开关闭        | `boolean`                                                 | `false`                          |
| zIndex                 | 层级                                      | `number`                                                  |                                  |
| title                  | 选择器的toolbar标题                       | `string`                                                  |                                  |
| cancelText             | 选择器的toolbar取消文案                   | `string`                                                  | `取消`                           |
| confirmText            | 选择器的toolbar确定文案                   | `string`                                                  | `确定`                           |


### Events
| 事件名    | 说明                                   | 回调参数                      |
| --------- | -------------------------------------- | ----------------------------- |
| onOpen    | 打开时触发                             | `() => void`                  |
| onClose   | 打开时触发                             | `() => void`                  |
| onOpened  | 打开动画结束时触发                     | `() => void`                  |
| onClosed  | 关闭动画结束时触发                     | `() => void`                  |
| onCancel  | 点击取消时的回调                       | `()=>void`                    |
| onConfirm | 选择器确认时触发的回调                 | `(values:PickerItem[])=>void` |
| onChange  | 选择器值变化时触发的回调(用户主动触发) | `(values:PickerItem[])=>void` |


### Slot
| 插槽名 | 说明 |
| ------ | ---- |

### Exposes
| 名称       | 说明           | 类型说明                      |
| ---------- | -------------- | ----------------------------- |
| updateShow | 更新选择器显示 | `(show:boolean = true)=>void` |

## 样式变量
| 名称 | 默认值 | 说明 |
| ---- | ------ | ---- |