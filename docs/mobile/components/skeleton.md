---
title: 骨架屏
lang: zh-cn
aside: false
---

# Skeleton 骨架屏

## 基本使用
```vue
<pk-skeleton>
    <pk-skeleton-avatar></pk-skeleton-avatar>
    <pk-skeleton-paragraph></pk-skeleton-paragraph>
</pk-skeleton>
```


## 代码示例
### 基础用法
默认创建的是一个带有头像、标题、和三行段落的骨架屏。

::: code-tabs#default
@tab template

```vue [template]
    <pk-skeleton :loading="true"></pk-skeleton>
```

@tab script
```js [script]

```

@tab style
```css [style]

```
:::


### 动画
可通过设置`pk-skeleton`的`active`属性为`false`关闭动画。

::: code-tabs#active
@tab template

```vue [template]
    <pk-skeleton :loading="true" :active="false"></pk-skeleton>
```

@tab script
```js [script]

```

@tab style
```css [style]

```
:::



### 头像
可通过设置`pk-skeleton`的`avatar`属性为`false`关闭头像。

::: code-tabs#avatar
@tab template

```vue [template]
    <pk-skeleton :loading="true" :avatar="false"></pk-skeleton>
```

@tab script
```js [script]

```

@tab style
```css [style]

```
:::


### 标题
可通过设置`pk-skeleton`的`title`属性为`false`关闭标题。

::: code-tabs#title
@tab template

```vue [template]
    <pk-skeleton :loading="true" :title="false"></pk-skeleton>
```

@tab script
```js [script]

```

@tab style
```css [style]

```
:::



### 段落
可通过设置`pk-skeleton`的`paragraph`属性为`false`关闭段落。

::: code-tabs#paragraph
@tab template

```vue [template]
    <pk-skeleton :loading="true" :paragraph="false"></pk-skeleton>
```

@tab script
```js [script]

```

@tab style
```css [style]

```
:::


### 自定义段落行数
可通过设置`pk-skeleton`的`rows`属性来设置段落的行数。

::: code-tabs#rows
@tab template

```vue [template]
    <pk-skeleton :loading="true" :rows="6"></pk-skeleton>
```

@tab script
```js [script]

```

@tab style
```css [style]

```
:::


## API

### Props

#### Skeleton Props
| 属性名    | 说明     | 类型      | 默认值 | 可选值 |
| --------- | -------- | --------- | ------ | ------ |
| loading   | 加载中   | `boolean` | `true` |        |
| active    | 显示动画 | `boolean` | `true` |        |
| avatar    | 显示头像 | `boolean` | `true` |        |
| title     | 显示标题 | `boolean` | `true` |        |
| paragraph | 显示段落 | `boolean` | `true` |        |
| rows      | 段落行数 | `number`  | `3`    |        |



#### SkeletonAvatar Props
| 属性名 | 说明                               | 类型                 | 默认值   | 可选值               |
| ------ | ---------------------------------- | -------------------- | -------- | -------------------- |
| active | 显示动画，默认与父级`Skeleton`一致 | `boolean`            |          |                      |
| size   | 头像大小，单位为px                 | `number`             |          |                      |
| shape  | 头像形状                           | `'circle'｜'square'` | `circle` | `'circle'｜'square'` |



#### SkeletonParagraph Props
| 属性名 | 说明                               | 类型                 | 默认值 | 可选值 |
| ------ | ---------------------------------- | -------------------- | ------ | ------ |
| active | 显示动画，默认与父级`Skeleton`一致 | `boolean`            |        |        |
| rows   | 段落行数                           | `number`             | `1`    |        |
| widths | 段落各行的长度,数字为百分比        | `(string｜number)[]` | `[]`   |        |



### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |





### Slots

#### Skeleton Slots
| 插槽名   | 说明             | 作用域 |
| -------- | ---------------- | ------ |
| default  | 内容区域         |        |
| template | 自定义骨架屏模板 |        |

#### 示例
::: code-tabs#skeleton
@tab template

```vue [template]
    <pk-skeleton :loading="true">
        <template #template>
            <pk-skeleton-avatar></pk-skeleton-avatar>
            <pk-skeleton-paragraph :rows="3" :widths="['80%', 90, 100]"></pk-skeleton-paragraph>
            <pk-skeleton-paragraph></pk-skeleton-paragraph>
        </template>
    </pk-skeleton>
```

@tab script
```js [script]

```

@tab style
```css [style]

```
:::


### Exposes

| 名称 | 说明 | 类型说明 |
| ---- | ---- | -------- |



## 样式变量

#### Skeleton
| 名称                           | 默认值                   | 说明 |
| ------------------------------ | ------------------------ | ---- |
| --pk-skeleton-background-start | rgba(237, 239, 242, 1)   |      |
| --pk-skeleton-background-end   | rgba(237, 239, 242, 0.6) |      |
| --pk-skeleton-duration         | 1.3s                     |      |
| --pk-skeleton-margin           | var(--pk-margin-m)       |      |


#### SkeletonAvatar
| 名称                      | 默认值 | 说明 |
| ------------------------- | ------ | ---- |
| --pk-skeleton-avatar-size | 40px   |      |


#### SkeletonParagraph
| 名称                                  | 默认值                   | 说明 |
| ------------------------------------- | ------------------------ | ---- |
| --pk-skeleton-paragraph-height        | 12px                     |      |
| --pk-skeleton-paragraph-border-radius | 2px                      |      |
| --pk-skeleton-paragraph-margin        | var(--pk-margin-m) 0 0 0 |      |