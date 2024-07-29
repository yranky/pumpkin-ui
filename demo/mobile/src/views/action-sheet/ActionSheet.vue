<template>
    <div class="action-sheet-container">
        <pk-cell-group>
            <pk-cell is-link @click="showDefaultActionSheet">
                <template #title>基础用法</template>
            </pk-cell>
            <pk-cell is-link @click="showTitleActionSheet">
                <template #title>显示标题</template>
            </pk-cell>
            <pk-cell is-link @click="showNoCancelActionSheet">
                <template #title>隐藏取消按钮</template>
            </pk-cell>
            <pk-cell is-link @click="showStatusActionSheet">
                <template #title>选项状态和颜色</template>
            </pk-cell>
        </pk-cell-group>
    </div>
</template>
<script lang="ts" setup>
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
        cancel: false
    }).then((res) => {
        if (res.type === 'confirm') {
            Toast.showToast(res.item.name)
        }
    })
}


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
            color: 'red'
        }
    ]).then((res) => {
        if (res.type === 'confirm') {
            Toast.showToast(res.item.name)
        }
    })
}

</script>
<style lang="less" scoped>
.action-sheet-container {
    padding: 10px 0;
}
</style>