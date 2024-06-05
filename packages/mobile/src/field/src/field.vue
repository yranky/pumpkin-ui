<template>
    <div :class="[
        bem.b()
    ]">
        <div :class="[
            bem.e('content')
        ]">
            <div :class="[
                bem.e('title')
            ]">
                {{ title }}
            </div>
            <div :class="[
                bem.e('wrapper')
            ]">
                <div :class="[
                    bem.e('placeholder')
                ]"></div>
                <div :class="[
                    bem.e('input')
                ]">
                    <input />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { fieldProps } from './field'
import { useBem } from '@pk-ui/use'
import './field.less'

defineOptions({
    name: 'PkField'
})

const props = defineProps(fieldProps)

const bem = useBem('field')
</script>