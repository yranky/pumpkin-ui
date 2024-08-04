---
title: 选择器视图
lang: zh-cn
aside: false
---


# PickerView 选择器视图

## 基本使用
```vue
<pk-picker-view></pk-picker-view>
```

## 代码示例
### 基础用法
创建一个选择器视图。当items为一维数组，含children为受控模式。当items为二维数组，为非受控模式。

::: code-tabs#default
@tab template

```vue [template]
<pk-picker-view :items="colItems"></pk-picker-view>
```

@tab script
```js [script]
import { PkPickerView } from '@pk-ui/mobile'


const colItems = ref([
    [
        {
            label: '水果',
            value: '水果'
        }, {
            label: '蔬菜',
            value: '蔬菜'
        }
    ],
    [
        {
            label: '选项一',
            value: '选项一'
        }, {
            label: '选项二',
            value: '选项二'
        }
    ]
])
```
:::


### 默认值
通过`v-model`双向绑定`value`。

::: code-tabs#default-value
@tab template

```vue [template]
<pk-picker-view :items="colItems2" v-model="values"></pk-picker-view>
```

@tab script
```js [script]
import { ref } from 'vue'
import { PkPickerView } from '@pk-ui/mobile'

const values = ref(['苹果', '梨', '沙梨', '沙梨2'])

const colItems2 = ref([{
    label: '水果',
    value: '水果',
    children: [{
        label: '苹果',
        value: '苹果'
    }, {
        label: '香蕉',
        value: '香蕉'
    }, {
        label: '梨',
        value: '梨',
        children: [
            {
                label: '雪梨',
                value: '雪梨'
            },
            {
                label: '沙梨',
                value: '沙梨',
                children: [
                    {
                        label: '沙梨1',
                        value: '沙梨1'
                    },
                    {
                        label: '沙梨2',
                        value: '沙梨2'
                    }
                ]
            }
        ]
    }]
}, {
    label: '蔬菜',
    value: '蔬菜',
    children: [{
        label: '土豆',
        value: '土豆'
    }, {
        label: '西红柿',
        value: '西红柿'
    }, {
        label: '黄瓜',
        value: '黄瓜'
    }]
}])
```
:::


## API

### Props
| 属性名             | 说明                                                           | 类型                             | 默认值 | 可选值 |
| ------------------ | -------------------------------------------------------------- | -------------------------------- | ------ | ------ |
| v-model            | 双向绑定选项的`value`值                                        | `PickerItem['value'][]`          |        |        |
| items              | 选项，一维数组选项有`children`为受控模式，二维数组为非受控模式 | `PickerItem[] ｜ PickerItem[][]` | `[]`   |        |
| visible-item-count | 可视选项数                                                     | `number`                         | `5`    |        |
| item-height        | 选项的高度，单位为`px`                                         | `number`                         | `50`   |        |

#### PickerItem
| 属性名   | 说明     | 类型             | 必选 |
| -------- | -------- | ---------------- | ---- |
| label    | 选项文本 | `string｜number` | 是   |
| value    | 选项值   | `string｜number` | 是   |
| children | 子选项   | `PickerItem[]`   |      |

### Events
| 事件名   | 说明                                    | 回调参数                       |
| -------- | --------------------------------------- | ------------------------------ |
| onChange | 选项选择值变化时触发,回调参数为各列的值 | `(items:PickerItem[]) => void` |


### Slot
| 插槽名 | 说明 |
| ------ | ---- |


### Exposes

| 名称      | 说明                 | 类型说明             |
| --------- | -------------------- | -------------------- |
| getValues | 获取各列当前选择的值 | `() => PickerItem[]` |


## 样式变量
| 名称 | 默认值 | 说明 |
| ---- | ------ | ---- |