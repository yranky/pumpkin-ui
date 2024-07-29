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
            Toast.showToast(res.item.name)
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
            Toast.showToast(res.item.name)
        } else if (res.type === 'cancel') {
            Toast.showToast('取消')
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
            Toast.showToast(res.item.name)
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
            Toast.showToast(res.item.name)
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