---
title: 选择器
lang: zh-cn
aside: false
---


# Picker 选择器

## 基本使用

### 命令式调用
::: code-tabs#fun

@tab script
```js [script]


import { Toast, Picker } from "@pk-ui/mobile"
    Picker.showPicker([{
    label: '水果',
    value: '水果',
    children: [{
        label: '苹果',
        value: '苹果'
    }, {
        label: '香蕉',
        value: '香蕉'
    }]
    }]).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.label))}`)
        else Toast.showToast('取消选择')
    })

```
:::

## 代码示例
### 基础用法
通过showPicker方法调用，传入数据，即可展示选择器。

::: code-tabs#default
@tab template

```vue [template]
<div class="picker-container">
    <pk-cell-group>
        <pk-cell is-link @click="showDefaultPicker">
            <template #title>基础用法</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, Picker } from "@pk-ui/mobile"
const items = [{
    label: '水果',
    value: '水果',
    children: [{
        label: '苹果',
        value: '苹果'
    }, {
        label: '香蕉',
        value: '香蕉'
    }, {
        label: '橙子',
        value: '橙子',
        children: [
            {
                label: '甜',
                value: '甜'
            },
            {
                label: '酸',
                value: '酸'
            }
        ]
    }]
}]

const showDefaultPicker = () => {
    Picker.showPicker(items).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.label))}`)
        else Toast.showToast('取消选择')
    })
}

```

@tab style
```css [style]
.picker-container {
    padding: 10px 0;
}
```
:::


### 修改toolbar
可通过`cancelText`、`confirmText`、`title`属性分别设置取消文案、确认文案和标题。

::: code-tabs#toobar
@tab template

```vue [template]
<div class="picker-container">
    <pk-cell-group>
        <pk-cell is-link @click="showChangeToolbar">
            <template #title>修改toolbar</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, Picker } from "@pk-ui/mobile"
const items = [{
    label: '水果',
    value: '水果',
    children: [{
        label: '苹果',
        value: '苹果'
    }, {
        label: '香蕉',
        value: '香蕉'
    }, {
        label: '橙子',
        value: '橙子',
        children: [
            {
                label: '甜',
                value: '甜'
            },
            {
                label: '酸',
                value: '酸'
            }
        ]
    }]
}]

const showChangeToolbar = () => {
    Picker.showPicker({
        items,
        cancelText: '我要取消',
        confirmText: '我要确定',
        title: '请选择'
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.label))}`)
        else Toast.showToast('取消选择')
    })
}

```

@tab style
```css [style]
.picker-container {
    padding: 10px 0;
}
```
:::

### 设置默认值
通过`current`属性设置默认值。`current`是一个数组，代表着各列默认的`value`值。

::: code-tabs#default-value
@tab template

```vue [template]
<div class="picker-container">
    <pk-cell-group>
        <pk-cell is-link @click="showDefaultValuePicker">
            <template #title>设置默认值</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, Picker } from "@pk-ui/mobile"
const items = [{
    label: '水果',
    value: '水果',
    children: [{
        label: '苹果',
        value: '苹果'
    }, {
        label: '香蕉',
        value: '香蕉'
    }, {
        label: '橙子',
        value: '橙子',
        children: [
            {
                label: '甜',
                value: '甜'
            },
            {
                label: '酸',
                value: '酸'
            }
        ]
    }]
}]

const showDefaultValuePicker = () => {
    Picker.showPicker({
        items,
        current: ['水果', '橙子', '酸']
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.label))}`)
        else Toast.showToast('取消选择')
    })
}

```

@tab style
```css [style]
.picker-container {
    padding: 10px 0;
}
```
:::


### 监听onChange事件
通过`onChange`回调监听当前Picker的值变化。

::: code-tabs#on-change
@tab template

```vue [template]
<div class="picker-container">
    <pk-cell-group>
        <pk-cell is-link @click="showOnChangeToolbar">
            <template #title>监听onChange事件</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, Picker } from "@pk-ui/mobile"
const items = [{
    label: '水果',
    value: '水果',
    children: [{
        label: '苹果',
        value: '苹果'
    }, {
        label: '香蕉',
        value: '香蕉'
    }, {
        label: '橙子',
        value: '橙子',
        children: [
            {
                label: '甜',
                value: '甜'
            },
            {
                label: '酸',
                value: '酸'
            }
        ]
    }]
}]

const showOnChangeToolbar = () => {
    Picker.showPicker({
        items,
        onChange: (values) => {
            Toast.showToast(`值变化:${JSON.stringify(values.map(item => item.label))}`)
        }
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.label))}`)
        else Toast.showToast('取消选择')
    })
}

```

@tab style
```css [style]
.picker-container {
    padding: 10px 0;
}
```
:::

### 禁用点击遮罩层关闭
通过设置`closeOnPressOverlay`为`false`禁用点击遮罩层关闭Picker。

::: code-tabs#close-on-press-overlay
@tab template

```vue [template]
<div class="picker-container">
    <pk-cell-group>
        <pk-cell is-link @click="showNotCloseOnPressOverlay">
            <template #title>禁用点击overlay关闭</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { PkCellGroup, Toast, PkCell, Picker } from "@pk-ui/mobile"
const items = [{
    label: '水果',
    value: '水果',
    children: [{
        label: '苹果',
        value: '苹果'
    }, {
        label: '香蕉',
        value: '香蕉'
    }, {
        label: '橙子',
        value: '橙子',
        children: [
            {
                label: '甜',
                value: '甜'
            },
            {
                label: '酸',
                value: '酸'
            }
        ]
    }]
}]

const showNotCloseOnPressOverlay = () => {
    Picker.showPicker({
        items,
        closeOnPressOverlay: false
    }).then(result => {
        if (result.type === 'confirm') Toast.showToast(`选择了:${JSON.stringify(result.items.map(item => item.label))}`)
        else Toast.showToast('取消选择')
    })
}

```

@tab style
```css [style]
.picker-container {
    padding: 10px 0;
}
```
:::


## API
### 命令式调用
#### 方法
| 方法              | 说明       | 类型                                                                      |
| ----------------- | ---------- | ------------------------------------------------------------------------- |
| Picker.showPicker | 显示Picker | `(option:  PickerOptions ｜ PickerItem[])=>Promise<PickerCallbackParams>` |

#### PickerOptions
| 属性名                 | 说明                                   | 类型                          | 默认值  |
| ---------------------- | -------------------------------------- | ----------------------------- | ------- |
| current                | 选择器的默认值                         | `PickerItem['value'][]`       |         |
| backgroundColor        | 选择器的背景颜色                       | `string`                      |         |
| round                  | 是否圆角                               | `boolean`                     | `true`  |
| closeOnPressOverlay    | 点击遮罩层是否关闭                     | `boolean`                     | `true`  |
| items                  | 选择器的选项数据                       | `PickerItem[]`                | `[]`    |
| visibleItemCount       | 选择器可视的选项数量                   | `number`                      | `5`     |
| itemHeight             | 选择器单个选项的高度，单位为px         | `number`                      | `50`    |
| overlay                | 是否显示遮罩层                         | `boolean`                     | `true`  |
| overlayBackgroundColor | 遮罩层背景颜色                         | `string`                      |         |
| fade                   | 弹出层是否以`fade`动画形式打开关闭     | `boolean`                     | `false` |
| zIndex                 | 层级                                   | `number`                      |         |
| title                  | 选择器的toolbar标题                    | `string`                      |         |
| cancelText             | 选择器的toolbar取消文案                | `string`                      | `取消`  |
| confirmText            | 选择器的toolbar确定文案                | `string`                      | `确定`  |
| onChange               | 选择器值变化时触发的回调(用户主动触发) | `(values:PickerItem[])=>void` |         |
| onCancel               | 选择器取消时触发的回调                 | `()=>void`                    |         |
| onConfirm              | 选择器确认时触发的回调                 | `(values:PickerItem[])=>void` |         |
| onClose                | 选择器关闭时触发的回调                 | `()=>void`                    |         |
| onClosed               | 选择器关闭动画结束时触发的回调         | `()=>void`                    |         |
| onOpen                 | 选择器打开时触发的回调                 | `()=>void`                    |         |
| onOpened               | 选择器打开动画结束时触发的回调         | `()=>void`                    |         |

#### PickerItem
| 属性名   | 说明     | 类型             | 必选 |
| -------- | -------- | ---------------- | ---- |
| label    | 选项文本 | `string｜number` | 是   |
| value    | 选项值   | `string｜number` | 是   |
| children | 子选项   | `PickerItem[]`   |      |


#### PickerCallbackParams
| 属性名 | 说明                  | 类型                  | 默认值 |
| ------ | --------------------- | --------------------- | ------ |
| type   | 类型                  | `'confirm'｜'cancel'` |        |
| items  | 选项(`confirm`时才有) | `PickerItem[]`        |        |


### Props
| 属性名                   | 说明                               | 类型                    | 默认值  | 可选值 |
| ------------------------ | ---------------------------------- | ----------------------- | ------- | ------ |
| v-model                  | 是否显示选择器组件，双向绑定       | `boolean`               |         |        |
| v-model:current          | 选择器选中列                       | `PickerItem['value'][]` |         |        |
| background-color         | 选择器的背景颜色                   | `string`                |         |        |
| round                    | 是否圆角                           | `boolean`               | `true`  |        |
| close-on-press-overlay   | 点击遮罩层是否关闭                 | `boolean`               | `true`  |        |
| items                    | 选择器的选项数据                   | `PickerItem[]`          | `[]`    |        |
| visibleItemCount         | 选择器可视的选项数量               | `number`                | `5`     |        |
| itemHeight               | 选择器单个选项的高度，单位为px     | `number`                | `50`    |        |
| overlay                  | 是否显示遮罩层                     | `boolean`               | `true`  |        |
| overlay-background-color | 遮罩层背景颜色                     | `string`                |         |        |
| fade                     | 弹出层是否以`fade`动画形式打开关闭 | `boolean`               | `false` |        |
| zIndex                   | 层级                               | `number`                |         |        |
| title                    | 选择器的toolbar标题                | `string`                |         |        |
| cancelText               | 选择器的toolbar取消文案            | `string`                | `取消`  |        |
| confirmText              | 选择器的toolbar确定文案            | `string`                | `确定`  |        |

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

| 名称                   | 默认值             | 说明 |
| ---------------------- | ------------------ | ---- |
| --pk-picker-background | var(--pk-bg-color) |      |