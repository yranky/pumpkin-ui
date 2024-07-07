<template>
    <div :class="{
        'no-frame': !iframeUrl
    }">
        <parent-layout>
            <template #page-content-bottom>
                <div class="page-demo-frame-container" v-if="iframeUrl">
                    <iframe class="page-demo-frame" :src="iframeUrl"></iframe>
                </div>
            </template>
        </parent-layout>
    </div>
</template>
<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { useRoute, withBase } from 'vuepress/client'
import urls from '../preview/urls'
import { onMounted, ref, watch } from 'vue'

const route = useRoute()

const iframeUrl = ref('')

watch(route, () => {
    updateUrl();
})

const updateUrl = () => {
    const item = urls.find(item => route.path.replace(/\.html/, '').endsWith(item.activeMatch))
    if (item) {
        iframeUrl.value = item.url
    } else {
        iframeUrl.value = ''
    }
}

onMounted(() => {
    updateUrl()
})
</script>
<style lang="scss">
.theme-default-content {
    padding: 2rem 385px 2rem 2.5rem !important;

    @media screen and (max-width:1080px) {
        padding: 2rem 2.5rem !important;
    }
}

.no-frame .theme-default-content {
    padding: 2rem 2.5rem !important;
}

.page-demo-frame-container {
    flex-shrink: 0;
    width: 375px;
    height: 1px;
    position: relative;

    @media screen and (max-width:1080px) {
        display: none;
    }

    .page-demo-frame {
        position: fixed;
        width: 375px;
        height: 667px;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        border: none;
        border-radius: 10px;
        z-index: 10;
    }
}
</style>