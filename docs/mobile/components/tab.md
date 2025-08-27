---
title: 标签页
lang: zh-cn
aside: false
---

# Tab 标签页

## 基本使用
```vue
  <pk-tabs>
    <pk-tab title="标签1">标签1内容</pk-tab>
    <pk-tab title="标签2">标签2内容</pk-tab>
   </pk-tabs>
```


## 代码示例
### 基础用法
::: code-tabs#default
@tab template

```vue [template]
    <pk-tabs>
        <pk-tab title="标签1">标签1内容</pk-tab>
        <pk-tab title="标签2">标签2内容</pk-tab>
    </pk-tabs>
```

@tab script
```js [script]
import { PkTab, PkTabs } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::




### 可滑动
默认就是可滑动的，可通过`scrollable`设置为`false`关闭可滑动。
::: code-tabs#scrollable
@tab template

```vue [template]
    <pk-tabs>
        <pk-tab title="标签1" :name="1">1</pk-tab>
        <pk-tab title="标签2" :name="2">2</pk-tab>
        <pk-tab title="标签3" :name="3">3</pk-tab>
        <pk-tab title="标签4" :name="4">4</pk-tab>
        <pk-tab title="标签5" :name="5">5</pk-tab>
        <pk-tab title="标签6" :name="6">6</pk-tab>
        <pk-tab title="标签7" :name="7">7</pk-tab>
        <pk-tab title="标签8" :name="8">8</pk-tab>
        <pk-tab title="标签最后一个" :name="9">9</pk-tab>
    </pk-tabs>
```

@tab script
```js [script]
import { PkTab, PkTabs } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::





### 默认值
可通过`model-value`设置默认值。也可以通过`v-model`实现双向绑定。

::: code-tabs#v-model
@tab template

```vue [template]
    <pk-tabs :model-value="5">
        <pk-tab title="标签1" :name="1">1</pk-tab>
        <pk-tab title="标签2" :name="2">2</pk-tab>
        <pk-tab title="标签3" :name="3">3</pk-tab>
        <pk-tab title="标签4" :name="4">4</pk-tab>
        <pk-tab title="标签5" :name="5">5</pk-tab>
        <pk-tab title="标签6" :name="6">6</pk-tab>
        <pk-tab title="标签7" :name="7">7</pk-tab>
        <pk-tab title="标签8" :name="8">8</pk-tab>
        <pk-tab title="标签最后一个" :name="9">9</pk-tab>
    </pk-tabs>
```

@tab script
```js [script]
import { PkTab, PkTabs } from '@pumpkin-ui/mobile'

```

@tab style
```css [style]

```
:::




### 事件监听
可以监听`on-change`事件。
::: code-tabs#onChange
@tab template

```vue [template]
   <pk-tabs @on-change="(value, title) => Toast.show(`title:${title},value:${value}`)">
        <pk-tab title="标签1" :name="1">1</pk-tab>
        <pk-tab title="标签2" :name="2">2</pk-tab>
        <pk-tab title="标签3" :name="3">3</pk-tab>
        <pk-tab title="标签4" :name="4">4</pk-tab>
        <pk-tab title="标签5" :name="5">5</pk-tab>
        <pk-tab title="标签6" :name="6">6</pk-tab>
        <pk-tab title="标签7" :name="7">7</pk-tab>
        <pk-tab title="标签8" :name="8">8</pk-tab>
        <pk-tab title="标签最后一个" :name="9">9</pk-tab>
    </pk-tabs>
```

@tab script
```js [script]
import { PkTab, PkTabs, Toast } from '@pumpkin-ui/mobile'
```
:::