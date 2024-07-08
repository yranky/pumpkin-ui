<template>
    <div :class="[
        bem.b(),
        bem.eqm('link', props.isLink),
        bem.eqm('border', props.border),
        bem.eqm('required', props.required),
        bem.eqm('vertical', props.vertical)
    ]">
        <div :class="[
            bem.e('top')
        ]">

            <div :class="[
                bem.e('required')
            ]" v-if="props.required">*</div>

            <div :class="[
                bem.e('title')
            ]">
                {{ props.title }}
            </div>

            <div :class="[
                bem.e('content')
            ]">
                <div :class="[
                    bem.e('value')
                ]">
                    <slot>
                        {{ props.value }}
                    </slot>
                </div>

                <div v-if="props.isLink" :class="[
                    bem.e('right')
                ]">
                    <RightOutlined />
                </div>
            </div>

        </div>

        <div :class="[
            bem.e('bottom')
        ]">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { cellProps } from './cell'
import { useBem } from '@pk-ui/use'
import { RightOutlined } from '@ant-design/icons-vue'
import "./cell.less"

defineOptions({
    name: 'PkCell',
})

const props = defineProps(cellProps)

const bem = useBem('cell')


</script>