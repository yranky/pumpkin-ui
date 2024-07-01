<template>
    <Layout>
        <template #doc-bottom>
            <div class="preview-iframe-container" v-show="iframeUrl">
                <iframe class="preview-iframe" :src="iframeUrl" frameborder="0"></iframe>
            </div>
        </template>
    </Layout>
</template>

<script setup>
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { ref, watch, onMounted } from 'vue'
import urls from '../../preview/urls'

const route = useRoute()

const { Layout } = DefaultTheme

const iframeUrl = ref('')

watch(route, () => {
    updateUrl();
})

const updateUrl = () => {
    const item = urls.find(item => item.activeMatch === route.path)
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
<style scoped>
::v-deep .VPDoc.has-sidebar {
    display: flex;
    padding-right: 0;
}

::v-deep .VPDoc.has-sidebar .container {
    width: calc(100% - 375px);
}

@media (max-width: 1270px) {
    ::v-deep .preview-iframe-container {
        display: none !important;
    }

    ::v-deep .VPDoc.has-sidebar .container {
        width: 100%;
    }
}

.preview-iframe-container {
    width: 375px;
    height: 667px;
    flex-shrink: 0;
    position: sticky;
    top: 64px;
}

.preview-iframe {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 375px;
    height: 667px;
    border-radius: 8px;
}
</style>