---
title: 动作面板
lang: zh-cn
aside: false
---

# ActionSheet 动作面板
## 基本使用

### 命令式调用
::: code-tabs#fun

@tab script
```js [script]
import { ActionSheet } from "@pk-ui/mobile"

ActionSheet.showActionSheet([
    {
        name:'选项一'
    },
    {
        name:'选项二'
    }
])
```
:::

## 代码示例
### 基础用法
通过showActionSheet函数调用，第一个传入需要展示的选项即可。第一个参数也支持传入对象，对象中可以传入title、cancelText、overlay等属性。

::: code-tabs#default
@tab template

```vue [template]
 <div class="action-sheet-container">
    <pk-cell-group>
        <pk-cell is-link @click="showDefaultActionSheet">
            <template #title>基础用法</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { ActionSheet, PkCellGroup, PkCell, Toast } from "@pk-ui/mobile"

const showDefaultActionSheet = () => {
    ActionSheet.showActionSheet([
        {
            name: '选项1'
        }, {
            name: '选项2'
        }, {
            name: '选项3'
        }
    ]).then((res) => {
        if (res.type === 'confirm') {
            Toast.show(res.item.name)
        }
    })
}

```

@tab style
```css [style]
.action-sheet-container {
    padding: 10px 0;
}
```
:::



### 显示标题
通过showActionSheet第一个参数中的title属性可控制显示标题和子标题。
::: code-tabs#title
@tab template

```vue [template]
 <div class="action-sheet-container">
    <pk-cell-group>
        <pk-cell is-link @click="showTitleActionSheet">
            <template #title>显示标题</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { ActionSheet, PkCellGroup, PkCell, Toast } from "@pk-ui/mobile"

const showTitleActionSheet = () => {
    ActionSheet.showActionSheet({
        title: '测试',
        subTitle: '测试',
        actions: [
            {
                name: '123'
            }
        ]
    }).then((res) => {
        if (res.type === 'confirm') {
            Toast.show(res.item.name)
        } else if (res.type === 'cancel') {
            Toast.show('取消')
        }
    })
}

```

@tab style
```css [style]
.action-sheet-container {
    padding: 10px 0;
}
```
:::


### 隐藏取消按钮
通过设置showActionSheet第一个参数中的cancel属性为false可隐藏关闭按钮。

::: code-tabs#hide-cancel
@tab template

```vue [template]
 <div class="action-sheet-container">
    <pk-cell-group>
        <pk-cell is-link @click="showNoCancelActionSheet">
            <template #title>隐藏取消按钮</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { ActionSheet, PkCellGroup, PkCell, Toast } from "@pk-ui/mobile"

const showNoCancelActionSheet = () => {
    ActionSheet.showActionSheet({
        actions: [
            {
                name: '123'
            },
            {
                name: '123456'
            }
        ],
        cancel:false
    }).then((res) => {
        if (res.type === 'confirm') {
            Toast.show(res.item.name)
        }
    })
}

```

@tab style
```css [style]
.action-sheet-container {
    padding: 10px 0;
}
```
:::


### 选项状态和颜色
通过设置actions中的disable和loading属性可修改选项的状态,设置color属性可以修改对应选项的颜色(此属性对loading和disable的选项无效)。

::: code-tabs#status
@tab template

```vue [template]
 <div class="action-sheet-container">
    <pk-cell-group>
        <pk-cell is-link @click="showStatusActionSheet">
            <template #title>选项状态和颜色</template>
        </pk-cell>
    </pk-cell-group>
</div>
```

@tab script
```js [script]
import { ActionSheet, PkCellGroup, PkCell, Toast } from "@pk-ui/mobile"

const showStatusActionSheet = () => {
    ActionSheet.showActionSheet([
        {
            name: '选项1',
            loading: true
        }, {
            name: '选项2',
            disabled: true
        }, {
            name: '选项3'
        }, {
            name: '选项321',
            color:'red'
        }
    ]).then((res) => {
        if (res.type === 'confirm') {
            Toast.show(res.item.name)
        }
    })
}

```

@tab style
```css [style]
.action-sheet-container {
    padding: 10px 0;
}
```
:::

## API
### 命令式调用
#### 方法
| 方法                        | 说明            | 类型                                                                                    |
| --------------------------- | --------------- | --------------------------------------------------------------------------------------- |
| ActionSheet.showActionSheet | 显示ActionSheet | `(option: ActionSheetOptions ｜ ActionSheetItem[])=>Promise<ActionSheetCallbackParams>` |

#### ActionSheetOptions
| 属性名                 | 说明                 | 类型                                        | 默认值 |
| ---------------------- | -------------------- | ------------------------------------------- | ------ |
| actions                | 选项                 | `ActionSheetItem[]`                         | `[]`   |
| cancel                 | 显示取消             | `boolean`                                   | `true` |
| cancelText             | 取消文字             | `string`                                    | `取消` |
| title                  | 标题                 | `string`                                    | ``     |
| subTitle               | 子标题               | `string`                                    | ``     |
| overlay                | 显示遮罩层           | `boolean`                                   | `true` |
| overlayBackgroundColor | 遮罩层背景颜色       | `string`                                    | ``     |
| closeOnPressOverlay    | 点击遮罩层关闭       | `boolean`                                   | `true` |
| closeOnClickAction     | 点击选项关闭         | `boolean`                                   | `true` |
| onClose                | 关闭时的回调         | `()=>void`                                  |        |
| onClosed               | 关闭动画结束时的回调 | `()=>void`                                  |        |
| onOpen                 | 打开时的回调         | `()=>void`                                  |        |
| onOpened               | 打开动画结束时的回调 | `()=>void`                                  |        |
| onCancel               | 点击取消时的回调     | `()=>void`                                  |        |
| onItemClick            | 点击选项时的回调     | `(item:ActionSheetItem,index:number)=>void` |        |


#### ActionSheetItem
| 属性名   | 说明     | 类型      | 默认值 | 可选 |
| -------- | -------- | --------- | ------ | ---- |
| name     | 名称     | `string`  |        | 必选 |
| color    | 颜色     | `string`  |        | 可选 |
| loading  | 加载状态 | `boolean` |        | 可选 |
| disabled | 禁用状态 | `boolean` |        | 可选 |


#### ActionSheetCallbackParams
| 属性名 | 说明                  | 类型                  | 默认值 |
| ------ | --------------------- | --------------------- | ------ |
| type   | 类型                  | `'confirm'｜'cancel'` |        |
| item   | 选项(`confirm`时才有) | `ActionSheetItem`     |        |
| index  | 索引(`confirm`时才有) | `number`              |        |


### Props
| 属性名                   | 说明                           | 类型                | 默认值 | 可选值 |
| ------------------------ | ------------------------------ | ------------------- | ------ | ------ |
| v-model                  | 是否显示动作面板组件，双向绑定 | `boolean`           |        |        |
| actions                  | 选项                           | `ActionSheetItem[]` | `[]`   |        |
| cancel                   | 显示取消                       | `boolean`           | `true` |        |
| cancel-text              | 取消文字                       | `string`            | `取消` |        |
| title                    | 标题                           | `string`            | ``     |        |
| sub-title                | 子标题                         | `string`            | ``     |        |
| overlay                  | 显示遮罩层                     | `boolean`           | `true` |        |
| overlay-background-color | 遮罩层背景颜色                 | `string`            | ``     |        |
| close-on-press-overlay   | 点击遮罩层关闭                 | `boolean`           | `true` |        |
| close-on-click-action    | 点击选项关闭                   | `boolean`           | `true` |        |


### Events
| 事件名      | 说明               | 回调参数                                    |
| ----------- | ------------------ | ------------------------------------------- |
| onOpen      | 打开时触发         | `() => void`                                |
| onClose     | 打开时触发         | `() => void`                                |
| onOpened    | 打开动画结束时触发 | `() => void`                                |
| onClosed    | 关闭动画结束时触发 | `() => void`                                |
| onCancel    | 点击取消时的回调   | `()=>void`                                  |
| onItemClick | 点击选项时的回调   | `(item:ActionSheetItem,index:number)=>void` |

### Slot
| 插槽名 | 说明 |
| ------ | ---- |

### Exposes

| 名称       | 说明             | 类型说明                      |
| ---------- | ---------------- | ----------------------------- |
| updateShow | 更新动作面板显示 | `(show:boolean = true)=>void` |



## 样式变量

| 名称                                  | 默认值                        | 说明 |
| ------------------------------------- | ----------------------------- | ---- |
| --pk-action-sheet-color               | var(--pk-text-color)          |      |
| --pk-action-sheet-footer-gap          | 8px                           |      |
| --pk-action-sheet-item-padding        | 16px                          |      |
| --pk-action-sheet-item-icon           | 24px                          |      |
| --pk-action-sheet-disabled-text-color | var(--pk-text-color-disabled) |      |