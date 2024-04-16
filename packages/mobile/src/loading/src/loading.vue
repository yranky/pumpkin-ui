<template>
    <div :class="[
        bem.b()
    ]">
        <div :class="[
            bem.e('spinner')
        ]">
            <i v-for="item in 8" :key="item" :class="[
                bem.e('line'),
                bem.em('line', item)
            ]"></i>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { loadingProps } from './loading';
import './loading.less'
import { useBem } from '@pk-ui/use'

defineOptions({
    name: 'PkLoading',
})

const props = defineProps(loadingProps)

const bem = useBem('loading')

</script>